using System.Text.Json.Serialization;
using Clean.Core;

namespace Domain;

public sealed class CreateFotoInput : IInput
{
    public Guid AlbumId { get; set; }

    [JsonInclude]
    public byte[] File { get; private set; }

    public CreateFotoInput SetAlbumId (Guid albumId)
    {
        AlbumId = albumId;
        return this;
    }
}