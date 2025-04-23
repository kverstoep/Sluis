using Clean.Core;

namespace Domain;

internal sealed class UpdateAlbumUseCase(IEntityGateway<Album> gateway) : IUseCase<UpdateAlbumInput>
{
    public async Task<IOutput> ExecuteAsync(UpdateAlbumInput input)
    {
        var album = await gateway.FindAsync(input.Id);

        album.Update(input);

        await gateway.SaveChangesAsync();

        return Output.Empty;
    }
}