namespace Domain;

public sealed class FotoModel
{
    public Guid Id { get; }

    public byte[] Image { get; }

    internal FotoModel(Foto foto)
    {
        Id = foto.Id;
        Image = foto.Image;
    }

    internal static FotoModel Create(Foto foto) =>
        foto == null ? null : new(foto);
}