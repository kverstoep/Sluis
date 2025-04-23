using Clean.Core;

namespace Domain;

public sealed class GetAllAlbumsInput : IInput
{
}

public sealed class GetAllAlbumsOutput : IOutput
{
    public IEnumerable<AlbumModel> Albums { get; }

    internal GetAllAlbumsOutput(IEnumerable<Album> albums)
    {
        Albums = [.. albums.Select(AlbumModel.Create)];
    }
}
