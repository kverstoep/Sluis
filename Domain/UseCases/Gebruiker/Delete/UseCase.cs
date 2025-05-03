using Clean.Core;

namespace Domain;

internal sealed class DeleteGebruikerUseCase(IEntityGateway<Gebruiker> gateway) : IUseCase<DeleteGebruikerInput>
{
    public async Task<IOutput> ExecuteAsync(DeleteGebruikerInput input)
    {
        await gateway
            .Delete(input.Id)
            .SaveChangesAsync();

        return Output.Empty;
    }
}