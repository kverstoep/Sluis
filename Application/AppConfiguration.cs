using Microsoft.AspNetCore.Cors.Infrastructure;

namespace Application;

internal sealed class AppConfiguration
{
    public string Connectionstring { get; private set; }

    public string DefaultPolicyName => Cors.First().Key;

    public IReadOnlyCollection<CorsConfiguration> CorsConfiguration => Cors
        .Select(keyValuePair => new CorsConfiguration(keyValuePair.Key, keyValuePair.Value))
        .ToList()
        .AsReadOnly();

    private Dictionary<string, string[]> Cors { get; set; }
}

internal sealed class CorsConfiguration(string name, string[] origins)
{
    public string Name { get; private set; } = name;

    public Action<CorsPolicyBuilder> Policy => builder => builder
        .WithOrigins(origins)
        .AllowAnyMethod()
        .AllowAnyHeader();
}
