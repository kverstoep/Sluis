using Application.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace Application;

public class RoleAuthorizationHandler : AuthorizationHandler<RoleRequirement>
{
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, RoleRequirement requirement)
    {
        if (context.User.HasClaim(claim => claim.Type == "Role" && claim.Value == requirement.RequiredRole.ToString()))
        {
            context.Succeed(requirement);
        }
        else
        {
            context.Fail();
        }

        return Task.CompletedTask;
    }
}
