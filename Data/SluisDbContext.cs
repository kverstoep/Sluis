﻿using Domain;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Data;

internal sealed class SluisDbContext(DbContextOptions<SluisDbContext> options) : DbContext(options)
{
    public const string DefaultSchema = "sluis";
    public const string MigrationsTable = "ef_migrations";

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasDefaultSchema(DefaultSchema)
            .ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        base.OnModelCreating(modelBuilder);
    }
}