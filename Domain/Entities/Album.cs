using Clean.Core;

namespace Domain;

internal class Album : Entity
{
    public string Name { get; private set; }

    public virtual ICollection<Foto> Fotos { get; set; } = new List<Foto>();

    protected Album() { }

    public Album(CreateAlbumInput input)
    {
        Name = input.Name;
    }

    public void Update(UpdateAlbumInput input)
    {
        Name = input.Name;
    }
}
