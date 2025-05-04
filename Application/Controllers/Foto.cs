using Clean.Core;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Application;

[ApiController]
[Route("api/[controller]")]
public sealed class FotoController(IInputHandler handler) : CleanController
{
    [HttpPost]
    [Authorize(Roles = nameof(UserRole.ManageFotos))]
    public async Task<ActionResult<CreateFotoOutput>> Create(CreateFotoInput input) =>
        CreatedAtAction(nameof(Get), await handler.HandleAsync(input), ("id", x => x.Id));

    [HttpGet]
    public async Task<ActionResult<GetAllFotosOutput>> GetAll() =>
        Ok(await handler.HandleAsync(new GetAllFotosInput()));

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<GetFotoOutput>> Get(Guid id) =>
        Ok(await handler.HandleAsync(new GetFotoInput(id)));

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = nameof(UserRole.ManageFotos))]
    public async Task<IActionResult> Delete(Guid id) =>
        NoContent(await handler.HandleAsync(new DeleteFotoInput(id)));
}