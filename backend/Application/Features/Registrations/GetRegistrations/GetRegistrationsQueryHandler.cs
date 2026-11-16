namespace Application.Features.Registrations.GetRegistrations;

using Application.Abstractions.Data;
using Application.Abstractions.Messaging;
using Domain.Common;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;

public sealed class GetRegistrationsQueryHandler(IAppDbContext dbContext)
    : IQueryHandler<GetRegistrationsQuery, Result<GetRegistrationsResponse>>
{
    public async Task<Result<GetRegistrationsResponse>> HandleAsync(
        GetRegistrationsQuery query,
        CancellationToken cancellationToken = default)
    {
        var dbQuery = dbContext.Registrations.AsNoTracking();

        if (!string.IsNullOrWhiteSpace(query.ParticipantName))
        {
            dbQuery = dbQuery.Where(r => r.ParticipantName.ToLower().Contains(query.ParticipantName.ToLower()));
        }

        if (!string.IsNullOrWhiteSpace(query.RegistrationType) && Enum.TryParse<RegistrationType>(query.RegistrationType, true, out var type))
        {
            dbQuery = dbQuery.Where(r => r.RegistrationType == type);
        }

        if (!string.IsNullOrWhiteSpace(query.Status) && Enum.TryParse<RegistrationStatus>(query.Status, true, out var status))
        {
            dbQuery = dbQuery.Where(r => r.Status == status);
        }

        var totalCount = await dbQuery.CountAsync(cancellationToken);
        var totalPages = (int)Math.Ceiling(totalCount / (double)query.PageSize);

        var items = await dbQuery
            .OrderByDescending(r => r.RegistrationDate)
            .ThenByDescending(r => r.RegistrationNumber)
            .Skip((query.Page - 1) * query.PageSize)
            .Take(query.PageSize)
            .Select(r => new RegistrationDto(
                r.Id,
                r.RegistrationNumber,
                r.RegistrationDate,
                r.ParticipantName,
                r.ContactNumber,
                r.Email,
                r.Address,
                r.CarMakeModel,
                r.PlateNumber,
                r.RegistrationType.ToString(),
                r.Status.ToString(),
                r.RegistrationFee,
                r.AmountPaid,
                r.AmountPaid == 0 ? "Unpaid" :
                r.AmountPaid == r.RegistrationFee ? "Paid" : "Partial"
            ))
            .ToListAsync(cancellationToken);

        return Result<GetRegistrationsResponse>.Success(new GetRegistrationsResponse(
            items,
            query.Page,
            query.PageSize,
            totalCount,
            totalPages
        ));
    }
}