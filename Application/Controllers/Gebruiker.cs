using System.Security.Claims;
using Clean.Core;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Application;

[ApiController]
[Route("api/[controller]")]
public sealed class GebruikerController(IInputHandler handler) : CleanController
{
    [HttpPost]
    [Authorize(Roles = nameof(UserRole.ManageGebruikers))]
    public async Task<ActionResult<CreateGebruikerOutput>> Create(CreateGebruikerInput input) => Created("", await handler.HandleAsync(input));

    [HttpGet]
    [Authorize(Roles = nameof(UserRole.ManageGebruikers))]
    public async Task<ActionResult<GetAllGebruikersOutput>> GetAll() =>
        Ok(await handler.HandleAsync(new GetAllGebruikersInput()));

    [HttpPatch("{id:guid}")]
    [Authorize(Roles = nameof(UserRole.ManageGebruikers))]
    public async Task<ActionResult<UpdateGebruikerOutput>> Update(Guid id, UpdateGebruikerInput input) =>
        Ok(await handler.HandleAsync(input.SetId(id)));

    [HttpGet("current")]
    [Authorize(Roles = nameof(UserRole.Gebruiker))]
    public async Task<ActionResult<GetGebruikerByEmailInput>> GetCurrent()
    {
        var email = HttpContext.User.Claims.First(claim => claim.Type == ClaimTypes.Email)?.Value;
        return Ok(await handler.HandleAsync(new GetGebruikerByEmailInput(email)));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = nameof(UserRole.ManageGebruikers))]
    public async Task<IActionResult> Delete(Guid id) =>
        NoContent(await handler.HandleAsync(new DeleteGebruikerInput(id)));

}