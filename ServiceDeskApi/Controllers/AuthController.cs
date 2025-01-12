using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ServiceDeskApi.DTOs;
using ServiceDeskApi.Services;

namespace ServiceDeskApi.Controllers;

[Route("api/[controller]")]
public class AuthController(IUsersService usersService)
    : ControllerBase
{
    [HttpPost("register")]
    public async Task<Results<Ok<IdentityResult>, BadRequest<string>>> Register(
        [FromBody] RegisterUserDto registerUserDto)
    {
        try

        {
            var result = await usersService.CreateAsync(registerUserDto);
            return TypedResults.Ok(result);
        }
        catch
        {
            return TypedResults.BadRequest("Incorrect data passed.");
        }
    }

    [HttpPost("login")]
    public async Task<ActionResult> Login([FromBody] LoginUserDto loginUserDto)
    {
        var user = await usersService.AuthorizeAsync(loginUserDto);

        if (user == null)
            return Unauthorized();

        var token = await usersService.GenerateJwtWebTokenAsync(user);

        return Ok(new { token });
    }
}
