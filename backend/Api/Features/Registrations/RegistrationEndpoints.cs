namespace Api.Features.Registrations;

using Api.Common.Extensions;
using Application.Abstractions.Messaging;
using Application.Features.Registrations.CreateRegistration;
using Application.Features.Registrations.GetRegistrationById;
using Application.Features.Registrations.GetRegistrations;
using Application.Features.Registrations.GetRegistrationSummary;
using Domain.Common;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

public static class RegistrationEndpoints
{
    public static void MapRegistrationEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/registrations")
            .WithTags("Registrations");

        group.MapPost("/", Create)
            .WithName("CreateRegistration")
            .WithSummary("Create New Registration")
            .Produces<CreateRegistrationResponse>(StatusCodes.Status201Created)
            .ProducesProblem(StatusCodes.Status400BadRequest)
            .ProducesProblem(StatusCodes.Status409Conflict);

        group.MapGet("/", GetAll)
            .WithName("GetRegistrations")
            .WithSummary("Get All Registration")
            .Produces<GetRegistrationsResponse>(StatusCodes.Status200OK)
            .ProducesProblem(StatusCodes.Status400BadRequest);
        group.MapGet("/summary", GetSummary)
            .WithName("GetRegistrationSummary")
            .WithSummary("Get Registration Summary")
            .Produces<GetRegistrationSummaryResponse>(StatusCodes.Status200OK);

        group.MapGet("/{id:guid}", GetById)
            .WithName("GetRegistrationById")
            .WithSummary("Get Registration Using Id")
            .Produces<GetRegistrationByIdResponse>(StatusCodes.Status200OK)
            .ProducesProblem(StatusCodes.Status404NotFound);

    }

    private static async Task<IResult> Create(
    CreateRegistrationCommand command,
    ICommandHandler<CreateRegistrationCommand, Result<CreateRegistrationResponse>> handler,
    IValidator<CreateRegistrationCommand> validator, // <-- Added the validator here
    CancellationToken cancellationToken)
    {
        var validationResult = await validator.ValidateAsync(command, cancellationToken);
        if (!validationResult.IsValid)
        {
            return Results.ValidationProblem(validationResult.ToDictionary());
        }

        var result = await handler.HandleAsync(command, cancellationToken);

        return result.IsSuccess
            ? TypedResults.Created($"/api/registrations/{result.Value!.Id}", result.Value)
            : result.ToProblemDetails();
    }
    private static async Task<IResult> GetAll(
        [AsParameters] GetRegistrationsQuery query,
        IQueryHandler<GetRegistrationsQuery, Result<GetRegistrationsResponse>> handler,
        IValidator<GetRegistrationsQuery> validator, CancellationToken cancellationToken)
    {
        //validate query
        var validationResult = await validator.ValidateAsync(query, cancellationToken);
        if (!validationResult.IsValid)
        {
            //return 400 Bad Request If invalid
            return Results.ValidationProblem(validationResult.ToDictionary());
        }

        var result = await handler.HandleAsync(query, cancellationToken);
        return result.IsSuccess
            ? TypedResults.Ok(result.Value)
            : result.ToProblemDetails();
    }

    private static async Task<IResult> GetSummary(
        IQueryHandler<GetRegistrationSummaryQuery, Result<GetRegistrationSummaryResponse>> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(new GetRegistrationSummaryQuery(), cancellationToken);
        return result.IsSuccess
            ? TypedResults.Ok(result.Value)
            : result.ToProblemDetails();
    }
    private static async Task<IResult> GetById(Guid id,
        IQueryHandler<GetRegistrationByIdQuery, Result<GetRegistrationByIdResponse>> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(new GetRegistrationByIdQuery(id), cancellationToken);
        return result.IsSuccess
            ? TypedResults.Ok(result.Value)
            : result.ToProblemDetails();
    }
}