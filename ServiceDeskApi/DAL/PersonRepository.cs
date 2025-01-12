using Microsoft.EntityFrameworkCore;
using ServiceDeskApi.Data;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.DAL;

public interface IPersonRepository : IRepository<Person>
{
}

public class PersonRepository(ApplicationDbContext applicationDbContext)
    : Repository<Person>(applicationDbContext), IPersonRepository
{
    private readonly ApplicationDbContext _applicationDbContext = applicationDbContext;

    public async Task<IEnumerable<Person>> GetAllAsync()
    {
        return await _applicationDbContext.Persons.ToListAsync();
    }
}
