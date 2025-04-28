using Domain;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Data;

public static class Comparers
{
    public static readonly ValueComparer<UserRole[]> UserRoleArrayComparer =
        new ValueComparer<UserRole[]>(
            (roles1, roles2) => roles1.SequenceEqual(roles2), // Compare arrays element by element
            roles => roles.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())), // Generate hash code for the array
            roles => roles.ToArray()); // Clone the array (create a safe copy)
}