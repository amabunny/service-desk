using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ServiceDeskApi.DTOs;
using ServiceDeskApi.Responses;
using ServiceDeskApi.Services;

namespace ServiceDeskApi.Controllers;

[Route("api/[controller]")]
public class AuthController(IUsersService usersService)
    : ControllerBase
{
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IdentityResult))]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(BaseResponse))]
    [HttpPost("register")]
    public async Task<Results<Ok<IdentityResult>, BadRequest<BaseResponse>>> Register(
        [FromBody] RegisterUserDto registerUserDto)
    {
        try
        {
            return TypedResults.Ok(await usersService.CreateAsync(registerUserDto));
        }
        catch (Exception e)
        {
            return TypedResults.BadRequest(new BaseResponse
            {
                Succeeded = false,
                Message = e.Message
            });
        }
    }

    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(TokenResponse))]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [HttpPost("login")]
    public async Task<Results<Ok<TokenResponse>, UnauthorizedHttpResult>> Login(
        [FromBody] LoginUserDto loginUserDto)
    {
        var user = await usersService.AuthorizeAsync(loginUserDto);
        if (user == null) return TypedResults.Unauthorized();

        return TypedResults.Ok(new TokenResponse
        {
            Succeeded = true,
            AccessToken = await usersService.GenerateAccessTokenAsync(user),
            RefreshToken = await usersService.GenerateRefreshTokenAsync()
        });
    }
}
