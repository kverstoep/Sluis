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

    [HttpGet("current")]
    [Authorize(Roles = nameof(UserRole.ManageGebruikers))]
    public async Task<ActionResult<GetGebruikerByEmailInput>> GetCurrent()
    {
        var email = HttpContext.User.Claims.First(claim => claim.Type == ClaimTypes.Email)?.Value;
        return Ok(await handler.HandleAsync(new GetGebruikerByEmailInput(email)));
    }  
}