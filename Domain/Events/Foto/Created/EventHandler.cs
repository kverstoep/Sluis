using Clean.Core;

namespace Domain;

internal sealed class FotoCreatedEvent(Foto foto) : IEvent
{
    public Foto Foto => foto;
}

internal sealed class FotoCreatedEventHandler : IEventHandler<FotoCreatedEvent>
{
    public async Task HandleAsync(FotoCreatedEvent raisedEvent) =>
        await Task.Run(() => Console.WriteLine($"Example toegevoegd met id: {raisedEvent.Foto.Id}"));
}