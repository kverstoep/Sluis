using Domain;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data;

public class UserRoleArrayConverter : ValueConverter<UserRole[], string[]>
{
    public UserRoleArrayConverter() : base(
        roles => roles.Select(role => role.ToString()).ToArray(),
        strings => strings.Select(Enum.Parse<UserRole>).ToArray()
    ){}
}
