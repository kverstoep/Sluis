using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Domain;

namespace Data;

internal sealed class FotoEntityTypeConfiguration : IEntityTypeConfiguration<Foto>
{
    public void Configure(EntityTypeBuilder<Foto> builder)
    {
        builder
            .Property(foto => foto.Id)
            .ValueGeneratedOnAdd();
    }
}