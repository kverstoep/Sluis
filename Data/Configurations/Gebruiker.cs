using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Domain;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data;

internal sealed class GebruikerEntityTypeConfiguration : IEntityTypeConfiguration<Gebruiker>
{
    public void Configure(EntityTypeBuilder<Gebruiker> builder)
    {
        builder
            .Property(gebruiker => gebruiker.Id)
            .ValueGeneratedOnAdd();

        var emailConverter = new ValueConverter<string, string>(
            email => EncryptionHelper.Encrypt(email),
            encryptedEmail => EncryptionHelper.Decrypt(encryptedEmail)
        );
        builder
            .Property(gebruiker => gebruiker.Email)
            .HasConversion(emailConverter)
            .IsRequired();

        builder
            .Property(gebruiker => gebruiker.Roles)
            .HasConversion(new UserRoleArrayConverter())
            .Metadata.SetValueComparer(Comparers.UserRoleListComparer);
    }
}