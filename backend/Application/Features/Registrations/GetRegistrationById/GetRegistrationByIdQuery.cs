namespace Application.Features.Registrations.GetRegistrationById;

using Application.Abstractions.Messaging;
using Domain.Common;

public sealed record GetRegistrationByIdQuery(Guid Id) : IQuery<Result<GetRegistrationByIdResponse>>;

public sealed record GetRegistrationByIdResponse(
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