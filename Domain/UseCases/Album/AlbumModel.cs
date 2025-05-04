namespace Domain;

public sealed class AlbumModel
{
    public Guid Id { get; }
    public string Name { get; }
    public int FotoCount { get; }
    public FotoModel Preview { get; }

    internal AlbumModel(Album album)
    {
        Id = album.Id;
        Name = album.Name;
        FotoCount = album.Fotos.Count;
        Preview = album.Fotos.FirstOrDefault() == null ? null : new FotoModel(album.Fotos.FirstOrDefault());

    }

    internal static AlbumModel Create(Album album) =>
        album == null ? null : new(album);
}