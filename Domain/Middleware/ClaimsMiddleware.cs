using Clean.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Claims;

namespace Domain;

public class ClaimsMiddleware
{
    private readonly RequestDelegate _next;

    public ClaimsMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var emailFromToken = context.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Email)?.Value;

        var gateway = context.RequestServices.GetService<IEntityGateway<Gebruiker>>();
        var gebruiker = gateway.First(gebruiker => gebruiker.Email == emailFromToken, true);

        if (gebruiker != null)
        {
            var claimsIdentity = context.User.Identity as ClaimsIdentity;

            foreach (var role in gebruiker.Roles)
            {
                claimsIdentity?.AddClaim(new Claim("Role", role.ToString()));
            }
        }

        await _next(context);
    }
}
