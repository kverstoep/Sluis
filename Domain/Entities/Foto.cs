using Clean.Core;

namespace Domain;

internal class Foto : Entity
{
    public byte[] Image { get; private set; }
    public Guid AlbumId { get; set; }

    public virtual Album Album { get; set; }

    protected Foto() { }

    public Foto(CreateFotoInput input)
    {
        AlbumId = input.AlbumId;
        Image = input.Image;

        events.Add(new FotoCreatedEvent(this));
    }
}
