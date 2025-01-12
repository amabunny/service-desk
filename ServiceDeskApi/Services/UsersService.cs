using Microsoft.AspNetCore.Identity;
using ServiceDeskApi.DTOs;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.Services;

public interface IUsersService
{
    public Task<IdentityResult> CreateAsync(RegisterUserDto registerUserDto);
}

public class UsersService(UserManager<User> userManager, IPersonsService personsService): IUsersService
{
    public async Task<IdentityResult> CreateAsync(RegisterUserDto registerUserDto)
    {
        var person = await personsService.Create(new PersonDto
        {
            FirstName = registerUserDto.FirstName,
            LastName = registerUserDto.LastName,
            MiddleName = registerUserDto.MiddleName,
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
}
