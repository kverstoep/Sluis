using Clean.Core;

namespace Domain;

public sealed class GetAllFotosInput : IInput
{
}

public sealed class GetAllFotosOutput : IOutput
{
    public IEnumerable<FotoModel> Fotos { get; }

    internal GetAllFotosOutput(IEnumerable<Foto> fotos)
    {
        Fotos = [.. fotos.Select(FotoModel.Create)];
    }
}
