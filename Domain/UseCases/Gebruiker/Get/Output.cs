using Clean.Core;

namespace Domain;

public sealed class GetGebruikerOutput : IOutput
{
    public GebruikerModel Gebruiker { get; }

    internal GetGebruikerOutput(Gebruiker gebruiker)
    {
        Gebruiker = GebruikerModel.Create(gebruiker);
    }
}