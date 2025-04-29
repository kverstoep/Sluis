using Clean.Core;

namespace Domain;

public sealed class GetCurrentGebruikerInput(string email) : IInput
{
    public string Email => email;
}