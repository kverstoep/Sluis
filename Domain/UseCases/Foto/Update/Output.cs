using Clean.Core;

namespace Domain;

public sealed class UpdateFotoOutput : IOutput
{
    public FotoModel Foto { get; init; }

    internal UpdateFotoOutput(Foto foto)
    {
        Foto = FotoModel.Create(foto);
    }
}
