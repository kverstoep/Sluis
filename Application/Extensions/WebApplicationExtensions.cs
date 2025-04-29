using Clean.Core;
using Data;
using Domain;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.IdentityModel.Tokens;

namespace Application;

internal static class WebApplicationExtensions
{
    public static WebApplication Configure(this WebApplicationBuilder builder)
    {
        var appConfiguration = builder.Configuration
            .Get<AppConfiguration>(options => options.BindNonPublicProperties = true);

        builder.Services
            .AddControllers(options => options.Conventions.Add(new RouteTokenTransformerConvention(new KebabCaseParameterTransformer())));

        builder.Services
            .AddData(appConfiguration.Connectionstring, builder.Environment)
            .AddDomain();

        builder.Services
            .AddCorsPolicies(appConfiguration.CorsConfiguration)
            .AddSwaggerGen()
            .AddFluentValidationAutoValidation();

        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.Authority = "https://accounts.google.com";

            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = "https://accounts.google.com",
                ValidateAudience = true,
                ValidAudience = appConfiguration.Authentication.Google.ClientId,
                ValidateLifetime = true
            };

            options.Events = new JwtBearerEvents
            {
                OnAuthenticationFailed = context =>
                {
                    Console.WriteLine($"Authentication failed: {context.Exception.Message}");
                    return Task.CompletedTask;
                },
                OnTokenValidated = context =>
                {
                    Console.WriteLine("Token validated successfully.");
                    return Task.CompletedTask;
                }
            };
        });

        return builder
            .Build()
            .UseServices(appConfiguration);
    }

    private static WebApplication UseServices(this WebApplication app, AppConfiguration appsettings)
    {
        app
            .UseCors(appsettings.DefaultPolicyName)
            .UseSwagger()
            .UseSwaggerUI()
            .UseDeveloperExceptionPage();

        app.UseAuthentication();
        app.UseMiddleware<ClaimsMiddleware>();
        app.UseAuthorization();

        app.MapControllers();

        return app;
    }
}
