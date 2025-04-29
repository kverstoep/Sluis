using Clean.Core;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Application;

[ApiController]
[Route("api/[controller]")]
public sealed class AlbumController(IInputHandler handler) : CleanController
{
    [HttpPost]
    [Authorize(Roles = nameof(UserRole.ManageAlbums))]
    public async Task<ActionResult<CreateAlbumOutput>> Create(CreateAlbumInput input) =>
        CreatedAtAction(nameof(Get), await handler.HandleAsync(input), ("id", x => x.Id));

    [HttpGet]
    [Authorize(Roles = nameof(UserRole.ManageAlbums))]
    public async Task<ActionResult<GetAllAlbumsOutput>> GetAll() =>
        Ok(await handler.HandleAsync(new GetAllAlbumsInput()));

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<GetAlbumOutput>> Get(Guid id) =>
        Ok(await handler.HandleAsync(new GetAlbumInput(id)));

    [HttpPatch("{id:guid}")]
    [Authorize(Roles = nameof(UserRole.ManageAlbums))]
    public async Task<ActionResult<UpdateAlbumOutput>> UpdateStartnummer(Guid id, UpdateAlbumInput input) =>
        Ok(await handler.HandleAsync(input.SetId(id)));

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = nameof(UserRole.ManageAlbums))]
    public async Task<IActionResult> Delete(Guid id) =>
        NoContent(await handler.HandleAsync(new DeleteAlbumInput(id)));
}