using Clean.Core;
using Microsoft.AspNetCore.Http;

namespace Domain;

internal sealed class GetGebruikerUseCase(IEntityGateway<Gebruiker> gateway) : IUseCase<GetGebruikerInput>
{
    public async Task<IOutput> ExecuteAsync(GetGebruikerInput input)
    {
        return new GetGebruikerOutput(gateway.First(gebruiker => gebruiker.Email == input.UserEmail, true));
    }
        
}