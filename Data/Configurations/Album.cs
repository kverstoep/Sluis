using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Domain;

namespace Data;

internal sealed class AlbumEntityTypeConfiguration : IEntityTypeConfiguration<Album>
{
    public void Configure(EntityTypeBuilder<Album> builder)
    {
        builder
            .Property(album => album.Id)
            .ValueGeneratedOnAdd();
    }
}