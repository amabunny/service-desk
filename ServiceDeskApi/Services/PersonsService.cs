using ServiceDeskApi.DAL;
using ServiceDeskApi.DTOs;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.Services;

public interface IPersonsService
{
    public Task<Person> Create(PersonDto personDto);
}

public class PersonsService(IPersonRepository personRepository): IPersonsService
{
    public async Task<Person> Create(PersonDto personDto)
    {
        var result = await personRepository.CreateAsync(new Person
        {
            FirstName = personDto.FirstName,
            LastName = personDto.LastName,
            MiddleName = personDto.MiddleName,
        });
        
        return result;
    }
}
