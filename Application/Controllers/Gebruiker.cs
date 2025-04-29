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
    [HttpGet("current")]
    [Authorize]
    public async Task<ActionResult<GetCurrentGebruikerOutput>> Get()
    {
        var email = HttpContext.User.Claims.First(claim => claim.Type == ClaimTypes.Email)?.Value;
        return Ok(await handler.HandleAsync(new GetCurrentGebruikerInput(email)));
    }
       
}