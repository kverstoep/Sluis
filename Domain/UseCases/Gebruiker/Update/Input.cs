using Clean.Core;

namespace Domain;

public sealed class UpdateGebruikerInput : IInput
{
    public Guid Id { get; private set; }

    public string Email { get; set; }
    public List<UserRole> Roles { get; set; }

    public UpdateGebruikerInput SetId(Guid id)
    {
        Id = id;
        return this;
    }
}