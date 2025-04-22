namespace Domain;

public sealed class FotoModel
{
    public Guid Id { get; }

    public string Name { get; }

    internal FotoModel(Foto foto)
    {
        Id = foto.Id;
        Name = foto.Name;
    }

    internal static FotoModel Create(Foto foto) =>
        foto == null ? null : new(foto);
}