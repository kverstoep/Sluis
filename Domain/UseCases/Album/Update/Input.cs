using Clean.Core;

namespace Domain;

public sealed class UpdateAlbumInput : IInput
{
    public Guid Id { get; private set; }

    public string Name { get; set; }

    public UpdateAlbumInput SetId(Guid id)
    {
        Id = id;
        return this;
    }
}