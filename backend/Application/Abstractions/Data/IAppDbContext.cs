namespace Application.Abstractions.Data;

using Microsoft.EntityFrameworkCore;
using Domain.Entities;

public interface IAppDbContext
{
    // Add a DbSet<TEntity> property for each entity in Domain/Entities
    DbSet<Registration> Registrations { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
