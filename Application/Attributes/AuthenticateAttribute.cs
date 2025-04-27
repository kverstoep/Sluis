using Clean.Core;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Application;

public class AuthenticateAttribute : Attribute, IAuthorizationFilter
{
    private readonly AuthenticationRoles[] Roles;

    public AuthenticateAttribute(params AuthenticationRoles[] roles)
    {
        Roles = roles ?? (AuthenticationRoles[])Enum.GetValues(typeof(AuthenticationRoles));
    }

    public void OnAuthorization(AuthorizationFilterContext context)
    {
        if (!context.HttpContext.User.Identity.IsAuthenticated)
        {
            context.Result = new UnauthorizedResult();
            return;
        }

        var gateway = context.HttpContext.RequestServices.GetService<IEntityGateway<Gebruiker>>();

        var emailClaimType = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
        var emailFromToken = context.HttpContext.User.Claims.FirstOrDefault(c => c.Type == emailClaimType)?.Value;
        var gebruiker = gateway.First(gebruiker => gebruiker.Email == emailFromToken, true);


        if (gebruiker == null || !Roles.Any(role => gebruiker.Roles.Contains(role)))
        {
            context.Result = new ForbidResult();
        }
    }
}