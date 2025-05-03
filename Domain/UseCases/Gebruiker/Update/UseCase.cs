using Clean.Core;

namespace Domain;

internal sealed class UpdateGebruikerUseCase(IEntityGateway<Gebruiker> gateway) : IUseCase<UpdateGebruikerInput>
{
    public async Task<IOutput> ExecuteAsync(UpdateGebruikerInput input)
    {
        var gebruiker = await gateway.FindAsync(input.Id);

        gebruiker.Update(input);

        await gateway.SaveChangesAsync();

        return Output.Empty;
    }
}