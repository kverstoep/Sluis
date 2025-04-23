using Clean.Core;

namespace Domain;

public sealed class DeleteAlbumInput(Guid id) : IInput
{
    public Guid Id => id;
}