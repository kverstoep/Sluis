using Clean.Core;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Data;

public static class DataServiceCollectionExtensions
{
    public static IServiceCollection AddData(this IServiceCollection services, string connectionString, IWebHostEnvironment environment) =>
        services
            .AddCleanEntityFramework<SluisDbContext>(options => options
                .EnableDetailedErrors(!environment.IsProduction())
                .UseLazyLoadingProxies()
                .UseSnakeCaseNamingConvention()
                .UseNpgsql(connectionString, options =>
                    options.MigrationsHistoryTable(SluisDbContext.MigrationsTable)));
}