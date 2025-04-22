using Clean.Core;

namespace Domain;

public sealed class UpdateFotoInput : IInput
{
    public Guid Id { get; private set; }

    public string Name { get; set; }

    public UpdateFotoInput SetId(Guid id)
    {
        Id = id;
        return this;
    }
}