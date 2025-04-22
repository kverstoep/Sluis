using Clean.Core;

namespace Domain;

public sealed class DeleteFotoInput(Guid id) : IInput
{
    public Guid Id => id;
}