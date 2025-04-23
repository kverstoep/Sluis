using Clean.Core;

namespace Domain;

internal sealed class CreateAlbumUseCase(IEntityGateway<Album> gateway) : IUseCase<CreateAlbumInput>
{
    public async Task<IOutput> ExecuteAsync(CreateAlbumInput input)
    {
        var album = new Album(input);

        await gateway
            .Add(album)
            .SaveChangesAsync();

        return new CreateAlbumOutput(album);
    }
}