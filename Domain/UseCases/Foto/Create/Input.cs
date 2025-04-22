using Clean.Core;

namespace Domain;

public sealed class CreateFotoInput : IInput
{
    public string Name { get; set; }
}