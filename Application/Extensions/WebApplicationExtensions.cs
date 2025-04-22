using Clean.Core;
using Data;
using Domain;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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

        app.MapControllers();

        return app;
    }
}
