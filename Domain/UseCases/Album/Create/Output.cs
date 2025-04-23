using Clean.Core;

namespace Domain;

public sealed class CreateAlbumOutput : IOutput
{
    public Guid? Id { get; }

    public AlbumModel Album { get; }

    internal CreateAlbumOutput(Album album)
    {
        Id = album.Id;
        Album = AlbumModel.Create(album);
    }
}
