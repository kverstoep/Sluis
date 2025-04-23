using Clean.Core;

namespace Domain;

public sealed class GetAlbumOutput : IOutput
{
    public AlbumModel Album { get; }

    internal GetAlbumOutput(Album album)
    {
        Album = AlbumModel.Create(album);
    }
}