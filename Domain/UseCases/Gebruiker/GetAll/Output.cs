using Clean.Core;
using Domain;

public sealed class GetAllGebruikersOutput : IOutput
{
    public IEnumerable<GebruikerModel> Gebruikers { get; }

    internal GetAllGebruikersOutput(IEnumerable<Gebruiker> gebruikers)
    {
        var orderedGebruikers = gebruikers.OrderBy(gebruiker => gebruiker.Email);
        Gebruikers = [.. orderedGebruikers.Select(GebruikerModel.Create)];
    }
}