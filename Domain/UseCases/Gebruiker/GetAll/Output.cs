using Clean.Core;
using Domain;

public sealed class GetAllGebruikersOutput : IOutput
{
    public IEnumerable<GebruikerModel> Gebruikers { get; }

    internal GetAllGebruikersOutput(IEnumerable<Gebruiker> gebruikers)
    {
        Gebruikers = [.. gebruikers.Select(GebruikerModel.Create)];
    }
}