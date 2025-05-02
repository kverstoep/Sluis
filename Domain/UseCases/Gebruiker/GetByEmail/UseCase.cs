using Clean.Core;

namespace Domain;

internal sealed class GetGebruikerByEmailUseCase(IEntityGateway<Gebruiker> gateway) : IUseCase<GetGebruikerByEmailInput>
{
    public async Task<IOutput> ExecuteAsync(GetGebruikerByEmailInput input)
    {
        //Gebruikers have to be in memory for the email to be decrypted.
        var decryptedGebruikers = await gateway.GetAllAsync();
        var gebruiker = decryptedGebruikers.FirstOrDefault(gebruiker => gebruiker.Email == input.Email);
        return new GetGebruikerByEmailOutput(gebruiker);
    }
}