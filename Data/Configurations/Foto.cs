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

        builder
            .HasOne(b => b.Album)
            .WithMany(a => a.Fotos)
            .HasForeignKey(b => b.AlbumId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}