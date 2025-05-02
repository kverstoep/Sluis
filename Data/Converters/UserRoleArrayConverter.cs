using Domain;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data;

public class UserRoleArrayConverter : ValueConverter<List<UserRole>, List<string>>
{
    public UserRoleArrayConverter() : base(
        roles => roles.Select(role => role.ToString()).ToList(),
        strings => strings.Select(Enum.Parse<UserRole>).ToList()
    ){}
}
