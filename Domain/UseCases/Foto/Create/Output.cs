using Clean.Core;

namespace Domain;

public sealed class CreateFotoOutput : IOutput
{
    public Guid? Id { get; }

    public FotoModel Foto { get; }

    internal CreateFotoOutput(Foto foto)
    {
        Id = foto.Id;
        Foto = FotoModel.Create(foto);
    }
}
