using Clean.Core;

namespace Domain;

internal sealed class UpdateExampleUseCase(IEntityGateway<Foto> gateway) : IUseCase<UpdateFotoInput>
{
    public async Task<IOutput> ExecuteAsync(UpdateFotoInput input)
    {
        var foto = await gateway.FindAsync(input.Id);

        foto.Update(input);

        await gateway.SaveChangesAsync();

        return Output.Empty;
    }
}