using Domain;
using Microsoft.AspNetCore.Authorization;

namespace Application.Authorization;
public class RoleRequirement : IAuthorizationRequirement
{
    public UserRole RequiredRole { get; }

    public RoleRequirement(UserRole requiredRole)
    {
        RequiredRole = requiredRole;
    }
}
