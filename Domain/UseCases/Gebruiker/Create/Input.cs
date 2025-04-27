using Clean.Core;

namespace Domain;

public sealed class CreateGebruikerInput : IInput
{
    public string Email { get; set; }
    public AuthenticationRoles[] Roles { get; set; }
}