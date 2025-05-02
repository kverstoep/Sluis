using Domain;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Data;

public static class Comparers
{
    public static readonly ValueComparer<List<UserRole>> UserRoleListComparer =
    new ValueComparer<List<UserRole>>(
        (roles1, roles2) => roles1.SequenceEqual(roles2), // Compare lists element by element
        roles => roles.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())), // Generate hash code for the list
        roles => new List<UserRole>(roles)); // Clone the list (create a safe copy)
}