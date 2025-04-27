using Clean.Core;

namespace Domain;

internal sealed class CreateGebruikerUseCase(IEntityGateway<Gebruiker> gateway) : IUseCase<CreateGebruikerInput>
{
    public async Task<IOutput> ExecuteAsync(CreateGebruikerInput input)
    {
        var gebruiker = new Gebruiker(input);

        await gateway
            .Add(gebruiker)
            .SaveChangesAsync();

        return new CreateGebruikerOutput(gebruiker);
    }
}