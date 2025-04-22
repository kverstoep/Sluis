using Clean.Core;

namespace Domain;

internal class Foto : Entity
{
    public string Name { get; private set; }

    protected Foto() { }

    public Foto(CreateFotoInput input)
    {
        Name = input.Name;

        events.Add(new FotoCreatedEvent(this));
    }

    public void Update(UpdateFotoInput input)
    {
        Name = input.Name;
    }
}
