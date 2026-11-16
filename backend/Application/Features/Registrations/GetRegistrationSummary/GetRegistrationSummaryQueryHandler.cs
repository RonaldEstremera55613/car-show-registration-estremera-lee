namespace Application.Features.Registrations.GetRegistrationSummary;

using Application.Abstractions.Data;
using Application.Abstractions.Messaging;
using Domain.Common;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;

public sealed class GetRegistrationSummaryQueryHandler(IAppDbContext dbContext)
    : IQueryHandler<GetRegistrationSummaryQuery, Result<GetRegistrationSummaryResponse>>
{
    public async Task<Result<GetRegistrationSummaryResponse>> HandleAsync(
        GetRegistrationSummaryQuery query,
        CancellationToken cancellationToken = default)
    {
        var allRegistrations = await dbContext.Registrations
            .AsNoTracking()
            .ToListAsync(cancellationToken);

        var totalRegistrations = allRegistrations.Count;
        var confirmed = allRegistrations.Count(r => r.Status == RegistrationStatus.Confirmed);
        var checkedIn = allRegistrations.Count(r => r.Status == RegistrationStatus.CheckedIn);
        var pending = allRegistrations.Count(r => r.Status == RegistrationStatus.Pending);
        var cancelled = allRegistrations.Count(r => r.Status == RegistrationStatus.Cancelled);

        var activeRegistrations = allRegistrations.Where(r => r.Status != RegistrationStatus.Cancelled).ToList();

        var totalFees = activeRegistrations.Sum(r => r.RegistrationFee);
        var totalPayments = activeRegistrations.Sum(r => r.AmountPaid);
        var uncollectedPayments = totalFees - totalPayments;

        return Result<GetRegistrationSummaryResponse>.Success(new GetRegistrationSummaryResponse(
            totalRegistrations,
            confirmed,
            checkedIn,
            pending,
            cancelled,
            totalFees,
            totalPayments,
            uncollectedPayments
        ));
    }
}