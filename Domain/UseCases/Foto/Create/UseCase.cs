using Clean.Core;

namespace Domain;

internal sealed class CreateExampleUseCase(IEntityGateway<Foto> gateway) : IUseCase<CreateFotoInput>
{
    public async Task<IOutput> ExecuteAsync(CreateFotoInput input)
    {
        var example = new Foto(input);

        await gateway
            .Add(example)
            .SaveChangesAsync();

        return new CreateFotoOutput(example);
    }
}