using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ServiceDeskApi.DTOs;
using ServiceDeskApi.Services;

namespace ServiceDeskApi.Controllers;

[Route("api/[controller]")]
public class AuthController(UsersService usersService) : ControllerBase
{
    [HttpPost("register")]
    public async Task<Results<Ok<IdentityResult>, BadRequest<string>>> Register([FromBody] RegisterUserDto registerUserDto)
    {
        try
        {
            var result = await usersService.Create(registerUserDto);
            return TypedResults.Ok(result);
        }
        catch
        {
            return TypedResults.BadRequest("Incorrect data passed.");
        }
        
    }

    [HttpPost("login")]
    public ActionResult Login([FromBody] LoginUserDto loginUserDto)
    {
        return Ok();
    }
}
