using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Domain;

namespace Data;

internal sealed class GebruikerEntityTypeConfiguration : IEntityTypeConfiguration<Gebruiker>
{
    public void Configure(EntityTypeBuilder<Gebruiker> builder)
    {
        builder
            .Property(gebruiker => gebruiker.Id)
            .ValueGeneratedOnAdd();

        builder
            .Property(gebruiker => gebruiker.Email)
            .IsRequired();

        builder
            .Property(gebruiker => gebruiker.Roles)
            .HasConversion(new UserRoleArrayConverter())
            .Metadata.SetValueComparer(Comparers.UserRoleArrayComparer);
    }
}