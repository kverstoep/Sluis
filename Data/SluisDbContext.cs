using Domain;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Data;

internal sealed class SluisDbContext(DbContextOptions<SluisDbContext> options) : DbContext(options)
{
    public const string DefaultSchema = "sluis";
    public const string MigrationsTable = "ef_migrations";

    //public DbSet<KnwuWedstrijd> KnwuWedstrijden { get; private set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasDefaultSchema(DefaultSchema)
            .ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        base.OnModelCreating(modelBuilder);
    }
}