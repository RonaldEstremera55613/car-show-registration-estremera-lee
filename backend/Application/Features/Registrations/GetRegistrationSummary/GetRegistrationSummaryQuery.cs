namespace Application.Features.Registrations.GetRegistrationSummary;

using Application.Abstractions.Messaging;
using Domain.Common;

public sealed record GetRegistrationSummaryQuery() : IQuery<Result<GetRegistrationSummaryResponse>>;

public sealed record GetRegistrationSummaryResponse(
    int TotalRegistrations,
    int Confirmed,
    int CheckedIn,
    int Pending,
    int Cancelled,
    decimal TotalFees,
    decimal TotalPayments,
    decimal UncollectedPayments
);