using Clean.Core;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Application;

[ApiController]
[Route("api/[controller]")]
public sealed class GebruikerController(IInputHandler handler) : CleanController
{
    [HttpGet]
    [Authorize]
    public async Task<ActionResult<GetGebruikerOutput>> Get(Guid id)
    {
        var emailClaimType = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
        var userEmail = HttpContext.User.Claims.FirstOrDefault(c => c.Type == emailClaimType)?.Value;

        return Ok(await handler.HandleAsync(new GetGebruikerInput(id, userEmail)));
    }
       
}