using Clean.Core;

namespace Domain;

internal sealed class DeleteAlbumUseCase(IEntityGateway<Album> gateway) : IUseCase<DeleteAlbumInput>
{
    public async Task<IOutput> ExecuteAsync(DeleteAlbumInput input)
    {
        await gateway
            .Delete(input.Id)
            .SaveChangesAsync();

        return Output.Empty;
    }
}