using Clean.Core;

namespace Domain;

public sealed class UpdateGebruikerOutput : IOutput
{
    public GebruikerModel Gebruiker { get; init; }

    internal UpdateGebruikerOutput(Gebruiker gebruiker)
    {
        Gebruiker = GebruikerModel.Create(gebruiker);
    }
}
