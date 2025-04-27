using Clean.Core;

namespace Domain;

internal class Gebruiker : Entity
{
    public string Email { get; private set; }
    public AuthenticationRoles[] Roles { get; private set; }

    protected Gebruiker() { }

    public Gebruiker(CreateGebruikerInput input)
    {
        Email = input.Email;
        Roles = input.Roles;
    }

    //public void Update(UpdateGebruikerInput input)
    //{
    //    Email = input.Email;
    //    ManageFotos = input.ManageFotos;
    //    ManageAlbums = input.ManageAlbums;
    //}
}
