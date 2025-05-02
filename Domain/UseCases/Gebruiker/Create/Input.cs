using System.Text.Json.Serialization;
using Clean.Core;

namespace Domain;

public sealed class CreateGebruikerInput : IInput
{
    public string Email { get; set; }
    public List<UserRole> Roles { get; set; }
}