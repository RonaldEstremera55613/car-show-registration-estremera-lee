namespace Application.Features.Registrations.GetRegistrations;

using Application.Abstractions.Messaging;
using Domain.Common;

public sealed record GetRegistrationsQuery(
    string? ParticipantName,
    string? RegistrationType,
    string? Status,
    int Page = 1,
    int PageSize = 10
) : IQuery<Result<GetRegistrationsResponse>>;

public sealed record GetRegistrationsResponse(
    List<RegistrationDto> Items,
    int Page,
    int PageSize,
    int TotalCount,
    int TotalPages
);

public sealed record RegistrationDto(
    Guid Id,
    string RegistrationNumber,
    DateTime RegistrationDate,
    string ParticipantName,
    string ContactNumber,
    string Email,
    string Address,
    string CarMakeModel,
    string PlateNumber,
    string RegistrationType,
    string Status,
    decimal RegistrationFee,
    decimal AmountPaid,
    string PaymentStatus
);