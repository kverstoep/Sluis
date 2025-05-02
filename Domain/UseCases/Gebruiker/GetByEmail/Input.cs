using Clean.Core;

namespace Domain;

public sealed class GetGebruikerByEmailInput(string email) : IInput
{
    public string Email => email;
}