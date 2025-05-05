using Clean.Core;

namespace Domain;

internal class Foto : Entity
{
    public byte[] File { get; private set; }
    public Guid AlbumId { get; set; }

    public virtual Album Album { get; set; }

    protected Foto() { }

    public Foto(CreateFotoInput input)
    {
        AlbumId = input.AlbumId;
        File = input.File;

        events.Add(new FotoCreatedEvent(this));
    }
}
