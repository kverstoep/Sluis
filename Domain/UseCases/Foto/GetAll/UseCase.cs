using Clean.Core;

namespace Domain;

internal sealed class GetAllExampleUseCase(IEntityGateway<Foto> gateway) : IUseCase<GetAllFotosInput>
{
    public async Task<IOutput> ExecuteAsync(GetAllFotosInput input) =>
        new GetAllFotosOutput(await gateway.GetAllAsync());
}