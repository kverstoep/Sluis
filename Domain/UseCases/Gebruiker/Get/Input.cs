using Clean.Core;

namespace Domain;

public sealed class GetGebruikerInput(Guid id, string userEmail) : IInput
{
    public Guid Id => id;
    public string UserEmail => userEmail;
}