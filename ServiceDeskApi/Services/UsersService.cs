using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using ServiceDeskApi.DTOs;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.Services;

public interface IUsersService
{
    public Task<IdentityResult> CreateAsync(RegisterUserDto registerUserDto);
    public Task<User?> AuthorizeAsync(LoginUserDto loginUserDto);
    public Task<string> GenerateAccessTokenAsync(User user);
    public Task<string> GenerateRefreshTokenAsync();
}

public class UsersService(
    UserManager<User> userManager,
    IPersonsService personsService,
    IConfiguration configuration
) : IUsersService
{
    public async Task<IdentityResult> CreateAsync(RegisterUserDto registerUserDto)
    {
        var person = await personsService.Create(new PersonDto
        {
            FirstName = registerUserDto.FirstName,
            LastName = registerUserDto.LastName,
            MiddleName = registerUserDto.MiddleName
        });

        var result = await userManager.CreateAsync(new User
        {
            UserName = registerUserDto.Username,
            Email = registerUserDto.Email,
            PhoneNumber = registerUserDto.PhoneNumber,
            Person = person,
            PersonId = person.Id
        }, registerUserDto.Password);

        return result;
    }

    public async Task<User?> AuthorizeAsync(LoginUserDto loginUserDto)
    {
        var user = await userManager.FindByNameAsync(loginUserDto.Username);
        if (user == null) return null;
        var checkResult = await userManager.CheckPasswordAsync(user, loginUserDto.Password);

        return !checkResult ? null : user;
    }

    public async Task<string> GenerateAccessTokenAsync(User user)
    {
        var roles = await userManager.GetRolesAsync(user);
        var claims = new List<Claim>
        {
            new(ClaimTypes.Name, user.UserName!),
            new(ClaimTypes.NameIdentifier, user.Id.ToString())
        };
        claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));
        var configJwtKey = configuration.GetValue<string>("Jwt:Key");
        if (configJwtKey == null)
            throw new ArgumentNullException("Jwt:Key", "Missing Jwt:Key in configuration");
        var key = new SymmetricSecurityKey(
            Encoding
                .UTF8
                .GetBytes(configJwtKey)
        );
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            configuration.GetValue<string>("Jwt:Issuer")!,
            configuration.GetValue<string>("Jwt:Audience")!,
            claims,
            expires: DateTime.UtcNow.AddDays(1),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public Task<string> GenerateRefreshTokenAsync()
    {
        var randomBytes = new byte[64];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(randomBytes);
        return Task.FromResult(Convert.ToBase64String(randomBytes));
    }
}
