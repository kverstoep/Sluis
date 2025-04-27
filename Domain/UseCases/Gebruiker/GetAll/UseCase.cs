using Clean.Core;

namespace Domain;

internal sealed class GetAllGebruikersUseCase(IEntityGateway<Gebruiker> gateway) : IUseCase<GetAllGebruikersInput>
{
    public async Task<IOutput> ExecuteAsync(GetAllGebruikersInput input) =>
        new GetAllGebruikersOutput(await gateway.GetAllAsync());
}