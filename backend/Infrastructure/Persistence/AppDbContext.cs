namespace Infrastructure.Persistence;

using Application.Abstractions.Data;
using Microsoft.EntityFrameworkCore;

public sealed class AppDbContext : DbContext, IAppDbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // Implement each DbSet<TEntity> declared in IAppDbContext, e.g.
    // public DbSet<Student> Students => Set<Student>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure keys, required fields, lengths, and relationships per entity
    }
}
