using Clean.Core;

namespace Domain;

internal sealed class GetCurrentGebruikerUseCase(IEntityGateway<Gebruiker> gateway) : IUseCase<GetCurrentGebruikerInput>
{
    public async Task<IOutput> ExecuteAsync(GetCurrentGebruikerInput input) => 
        new GetCurrentGebruikerOutput(gateway.First(gebruiker => gebruiker.Email == input.Email, true));        
}