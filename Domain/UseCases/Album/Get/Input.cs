using Clean.Core;

namespace Domain;

public sealed class GetAlbumInput(Guid id) : IInput
{
    public Guid Id => id;
}