using Clean.Core;

namespace Domain;

public sealed class CreateAlbumInput : IInput
{
    public string Name { get; set; }
}