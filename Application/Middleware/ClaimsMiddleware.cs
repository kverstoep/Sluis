using Clean.Core;
using System.Security.Claims;

namespace Domain;

public class ClaimsMiddleware
{
    private readonly RequestDelegate next;

    public ClaimsMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task InvokeAsync(HttpContext context, IInputHandler handler)
    {
        var email = context.User.Claims.First(claim => claim.Type == ClaimTypes.Email)?.Value;

        var output = await handler.HandleAsync(new GetCurrentGebruikerInput(email)) as GetCurrentGebruikerOutput;
        if (output?.Gebruiker != null)
        {
            var claimsIdentity = context.User.Identity as ClaimsIdentity;

            foreach (var role in output.Gebruiker.Roles)
            {
                claimsIdentity?.AddClaim(new Claim(ClaimTypes.Role, role.ToString()));
            }
        }

        await next(context);
    }
}
