using Clean.Core;

namespace Domain;

public sealed class CreateFotoInput : IInput
{
    public Guid AlbumId { get; set; }
    public string Name { get; set; }
}