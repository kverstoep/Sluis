using Clean.Core;

namespace Domain;

public sealed class UpdateAlbumOutput : IOutput
{
    public AlbumModel Album { get; init; }

    internal UpdateAlbumOutput(Album album)
    {
        Album = AlbumModel.Create(album);
    }
}