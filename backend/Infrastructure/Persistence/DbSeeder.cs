namespace Infrastructure.Persistence;

using Domain.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

public static class DbSeeder
{
    public static async Task MigrateAndSeedAsync(
        this IServiceProvider services, CancellationToken cancellationToken = default)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<AppDbContext>>();

        logger.LogInformation("Applying database migrations...");
        await db.Database.MigrateAsync(cancellationToken);

        if (await db.Registrations.AnyAsync(cancellationToken))
        {
            logger.LogInformation("Database already seeded - skipping.");
            return;
        }

        logger.LogInformation("Seeding 25 sample registrations...");

        var random = new Random();
        var types = new[] { RegistrationType.Exhibitor, RegistrationType.Competitor, RegistrationType.VIP };
        var statuses = new[] { RegistrationStatus.Pending, RegistrationStatus.Confirmed, RegistrationStatus.CheckedIn, RegistrationStatus.Cancelled };

        var seedData = new List<Registration>();

        for (int i = 1; i <= 25; i++)
        {
            var type = types[random.Next(types.Length)];
            var status = statuses[random.Next(statuses.Length)];

            decimal fee = type switch
            {
                RegistrationType.Exhibitor => 1500m,
                RegistrationType.Competitor => 2500m,
                RegistrationType.VIP => 5000m,
                _ => 0m
            };

            // Randomize the amount paid (0 = Unpaid, fee = Paid, anything else = Partial)
            decimal amountPaid = random.Next(0, 4) switch
            {
                0 => 0,
                1 => fee,
                _ => fee / 2
            };

            seedData.Add(new Registration
            {
                RegistrationNumber = $"CS27-{i:D4}",
                RegistrationDate = DateTime.UtcNow.AddDays(-random.Next(1, 30)),
                ParticipantName = $"Test Participant {i}",
                ContactNumber = $"0917123{i:D4}",
                Email = $"participant{i}@example.com",
                Address = $"{i} Test Street, Sorsogon City",
                CarMakeModel = $"Car Model {i}",
                PlateNumber = $"ABC {i:D4}",
                RegistrationType = type,
                Status = status,
                RegistrationFee = fee,
                AmountPaid = amountPaid
            });
        }

        db.Registrations.AddRange(seedData);
        await db.SaveChangesAsync(cancellationToken);
        logger.LogInformation("Seeding complete.");
    }
}