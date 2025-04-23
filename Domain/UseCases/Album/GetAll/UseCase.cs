using Clean.Core;

namespace Domain;

internal sealed class GetAllAlbumsUseCase(IEntityGateway<Album> gateway) : IUseCase<GetAllAlbumsInput>
{
    public async Task<IOutput> ExecuteAsync(GetAllAlbumsInput input) =>
        new GetAllAlbumsOutput(await gateway.GetAllAsync());
}