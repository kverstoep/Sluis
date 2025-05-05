namespace Domain;

public sealed class AlbumByIdModel
{
    public Guid Id { get; }
    public string Name { get; }
    public int FotoCount { get; }
    public IEnumerable<FotoModel> Fotos { get; } = [];

    internal AlbumByIdModel(Album album)
    {
        Id = album.Id;
        Name = album.Name;
        FotoCount = album.Fotos.Count;
        Fotos = album.Fotos.Select(foto => new FotoModel(foto));
    }

    internal static AlbumByIdModel Create(Album album) =>
        album == null ? null : new(album);
}