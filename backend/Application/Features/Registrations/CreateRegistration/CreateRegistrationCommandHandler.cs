namespace Application.Features.Registrations.CreateRegistration;

using Application.Abstractions.Data;
using Application.Abstractions.Messaging;
using Domain.Common;
using Domain.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;

public sealed class CreateRegistrationCommandHandler(IAppDbContext dbContext)
    : ICommandHandler<CreateRegistrationCommand, Result<CreateRegistrationResponse>>
{
    public async Task<Result<CreateRegistrationResponse>> HandleAsync(
        CreateRegistrationCommand command,
        CancellationToken cancellationToken = default)
    {
        // 1. Check duplicate plate number
        var plateExists = await dbContext.Registrations
            .AnyAsync(r => r.PlateNumber == command.PlateNumber, cancellationToken);

        if (plateExists)
        {
            return Result<CreateRegistrationResponse>.Failure(
                Error.Validation("Registration.Conflict", $"A registration with plate number '{command.PlateNumber}' already exists."));
        }

        // 2. Calculate Fee based on Type
        decimal fee = command.RegistrationType switch
        {
            RegistrationType.Exhibitor => 1500m,
            RegistrationType.Competitor => 2500m,
            RegistrationType.VIP => 5000m,
            _ => 0m
        };

        // 3. Validate Amount Paid against Fee
        if (command.AmountPaid > fee)
        {
            return Result<CreateRegistrationResponse>.Failure(
                Error.Validation("Registration.InvalidPayment", $"Amount paid cannot be more than the fee ({fee})."));
        }

        // 4. Generate Sequential Registration Number
        var lastRegistration = await dbContext.Registrations
            .OrderByDescending(r => r.RegistrationNumber)
            .FirstOrDefaultAsync(cancellationToken);

        int nextNumber = 1;
        if (lastRegistration != null)
        {
            var lastNumberStr = lastRegistration.RegistrationNumber.Split('-')[1];
            if (int.TryParse(lastNumberStr, out int lastNumber))
            {
                nextNumber = lastNumber + 1;
            }
        }
        var newRegistrationNumber = $"CS27-{nextNumber:D4}";

        // 5. Calculate Payment Status
        string paymentStatus = "Unpaid";
        if (command.AmountPaid == fee && fee > 0) paymentStatus = "Paid";
        else if (command.AmountPaid > 0 && command.AmountPaid < fee) paymentStatus = "Partial";

        // 6. Create and Save Entity
        var registration = new Registration
        {
            RegistrationNumber = newRegistrationNumber,
            RegistrationDate = DateTime.UtcNow,
            ParticipantName = command.ParticipantName,
            ContactNumber = command.ContactNumber,
            Email = command.Email,
            Address = command.Address,
            CarMakeModel = command.CarMakeModel,
            PlateNumber = command.PlateNumber,
            RegistrationType = command.RegistrationType,
            Status = RegistrationStatus.Pending,
            RegistrationFee = fee,
            AmountPaid = command.AmountPaid
        };

        dbContext.Registrations.Add(registration);
        await dbContext.SaveChangesAsync(cancellationToken);

        // 7. Return Response
        return Result<CreateRegistrationResponse>.Success(new CreateRegistrationResponse(
            registration.Id,
            registration.RegistrationNumber,
            registration.RegistrationDate,
            registration.ParticipantName,
            registration.ContactNumber,
            registration.Email,
            registration.Address,
            registration.CarMakeModel,
            registration.PlateNumber,
            registration.RegistrationType.ToString(),
            registration.Status.ToString(),
            registration.RegistrationFee,
            registration.AmountPaid,
            paymentStatus
        ));
    }
}