namespace Domain;

public sealed class FotoModel
{
    public Guid Id { get; }

    public byte[] File { get; }

    internal FotoModel(Foto foto)
    {
        Id = foto.Id;
        File = foto.File;
    }

    internal static FotoModel Create(Foto foto) =>
        foto == null ? null : new(foto);
}