using Microsoft.AspNetCore.Identity;
using ServiceDeskApi.DAL;
using ServiceDeskApi.DTOs;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.Services;

public class UsersService(UserManager<User> userManager)
{
    public async Task<IdentityResult> Create(RegisterUserDto registerUserDto)
    {
        var result = await userManager.CreateAsync(new User
        {
            UserName = registerUserDto.Username,
            Email = registerUserDto.Email,
        }, registerUserDto.Password);
        
        return result;
    }
}
