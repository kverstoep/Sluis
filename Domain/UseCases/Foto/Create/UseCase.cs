using Clean.Core;

namespace Domain;

internal sealed class CreateFotoUseCase(IEntityGateway<Foto> gateway) : IUseCase<CreateFotoInput>
{
    public async Task<IOutput> ExecuteAsync(CreateFotoInput input)
    {
        var foto = new Foto(input);

        await gateway
            .Add(foto)
            .SaveChangesAsync();

        return new CreateFotoOutput(foto);
    }
}