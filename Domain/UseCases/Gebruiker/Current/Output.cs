using Clean.Core;

namespace Domain;

public sealed class GetCurrentGebruikerOutput : IOutput
{
    public GebruikerModel Gebruiker { get; }

    internal GetCurrentGebruikerOutput(Gebruiker gebruiker)
    {
        Gebruiker = GebruikerModel.Create(gebruiker);
    }
}