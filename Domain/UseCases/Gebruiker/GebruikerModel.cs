namespace Domain;

public sealed class GebruikerModel
{
    public Guid Id { get; }
    public string Email { get; }
    public IEnumerable<string> Roles { get; }

    internal GebruikerModel(Gebruiker gebruiker)
    {
        Id = gebruiker.Id;
        Email = gebruiker.Email;
        Roles = gebruiker.Roles?.Select(role => role.ToString());
    }

    internal static GebruikerModel Create(Gebruiker gebruiker) =>
        gebruiker == null ? null : new(gebruiker);
}