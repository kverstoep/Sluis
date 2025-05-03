using Clean.Core;

namespace Domain;

public sealed class DeleteGebruikerInput(Guid id) : IInput
{
    public Guid Id => id;
}