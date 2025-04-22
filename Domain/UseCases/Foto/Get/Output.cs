using Clean.Core;

namespace Domain;

public sealed class GetFotoOutput : IOutput
{
    public FotoModel Foto { get; }

    internal GetFotoOutput(Foto foto)
    {
        Foto = FotoModel.Create(foto);
    }
}