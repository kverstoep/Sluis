using Clean.Core;

namespace Domain;

internal sealed class DeleteExampleUseCase(IEntityGateway<Foto> gateway) : IUseCase<DeleteFotoInput>
{
    public async Task<IOutput> ExecuteAsync(DeleteFotoInput input)
    {
        await gateway
            .Delete(input.Id)
            .SaveChangesAsync();

        return Output.Empty;
    }
}