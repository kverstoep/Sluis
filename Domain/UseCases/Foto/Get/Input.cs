using Clean.Core;

namespace Domain;

public sealed class GetFotoInput(Guid id) : IInput
{
    public Guid Id => id;
}