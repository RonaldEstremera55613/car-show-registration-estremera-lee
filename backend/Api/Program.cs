using Application.Abstractions.Data;
using Application.Abstractions.Messaging;
using Domain.Common;
using FluentValidation;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Database
builder.Services.AddDbContext<IAppDbContext, AppDbContext>(options =>
    options.UseInMemoryDatabase("VerticalSliceDb"));

// Validators
builder.Services.AddValidatorsFromAssembly(typeof(IAppDbContext).Assembly);

// Handlers
// builder.Services.AddScoped<ICommandHandler<TCommand, Result<TResponse>>, TCommandHandler>();
// builder.Services.AddScoped<IQueryHandler<TQuery, Result<TResponse>>, TQueryHandler>();

// API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi(options =>
{
    options.AddDocumentTransformer((document, _, _) =>
    {
        document.Info.Title = "Vertical Slice API Template by Elvin Manuel R. Luces, MIT";
        document.Info.Description = "A simple API demonstrating Vertical Slice Architecture";
        return Task.CompletedTask;
    });
});

var app = builder.Build();

// Seed data
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    // dbContext.<Entities>.AddRange(...);

    dbContext.SaveChanges();
}

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

// Root endpoint
app.MapGet("/", () => "Welcome to the Vertical Slice API! Go to /scalar/v1 for API documentation.");

// Map endpoints
// app.Map{FeatureGroup}Endpoints();

app.Run();
