using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;

namespace Application;

internal static class ServiceCollectionExtensions
{
    public static IServiceCollection AddCorsPolicies(this IServiceCollection services, IEnumerable<CorsConfiguration> corsSettings)
    {
        corsSettings
            .ToList()
            .ForEach(cors => services
                .AddCors(options => options
                    .AddPolicy(cors.Name, cors.Policy)));

        return services;
    }
}
