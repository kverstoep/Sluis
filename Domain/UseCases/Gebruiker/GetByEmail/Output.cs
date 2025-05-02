using Clean.Core;

namespace Domain;

public sealed class GetGebruikerByEmailOutput : IOutput
{
    public GebruikerModel Gebruiker { get; }

    internal GetGebruikerByEmailOutput(Gebruiker gebruiker)
    {
        Gebruiker = GebruikerModel.Create(gebruiker);
    }
}