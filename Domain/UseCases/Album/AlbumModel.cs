namespace Domain;

public sealed class AlbumModel
{
    public Guid Id { get; }

    public string Name { get; }

    internal AlbumModel(Album album)
    {
        Id = album.Id;
        Name = album.Name;
    }

    internal static AlbumModel Create(Album album) =>
        album == null ? null : new(album);
}