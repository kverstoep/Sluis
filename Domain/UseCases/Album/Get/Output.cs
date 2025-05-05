using Clean.Core;

namespace Domain;

public sealed class GetAlbumOutput : IOutput
{
    public AlbumByIdModel Album { get; }

    internal GetAlbumOutput(Album album)
    {
        Album = AlbumByIdModel.Create(album);
    }
}