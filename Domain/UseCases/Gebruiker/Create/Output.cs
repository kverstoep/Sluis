using Clean.Core;

namespace Domain;

public sealed class CreateGebruikerOutput : IOutput
{
    public Guid? Id { get; }

    public GebruikerModel Gebruiker { get; }

    internal CreateGebruikerOutput(Gebruiker gebruiker)
    {
        Id = gebruiker.Id;
        Gebruiker = GebruikerModel.Create(gebruiker);
    }
}
