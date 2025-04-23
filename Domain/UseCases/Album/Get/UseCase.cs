using Clean.Core;

namespace Domain;

internal sealed class GetAlumUseCase(IEntityGateway<Album> gateway) : IUseCase<GetAlbumInput>
{
    public async Task<IOutput> ExecuteAsync(GetAlbumInput input) =>
        new GetAlbumOutput(await gateway.FindAsync(input.Id));
}