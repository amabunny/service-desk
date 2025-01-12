using Microsoft.EntityFrameworkCore;
using ServiceDeskApi.Data;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.DAL;

public interface IPersonRepository : IRepository<Person>
{
    
}

public class PersonRepository(ApplicationDbContext applicationDbContext) : IPersonRepository
{
    public async Task<Person> CreateAsync(Person entity)
    {
        var result = await applicationDbContext.Persons.AddAsync(entity);
        await applicationDbContext.SaveChangesAsync();
        return result.Entity;
    }

    public async Task<Person> UpdateAsync(Person entity)
    {
        var result = applicationDbContext.Persons.Update(entity);
        await applicationDbContext.SaveChangesAsync();
        return result.Entity;
    }

    public async Task<Person?> DeleteAsync(Guid id)
    {
        var entity = await applicationDbContext.Persons.FindAsync(id);
        if (entity == null) return null;
        var result = applicationDbContext.Persons.Remove(entity);
        await applicationDbContext.SaveChangesAsync();
        return result.Entity;
    }

    public async Task<IEnumerable<Person>> GetAllAsync()
    {
        return await applicationDbContext.Persons.ToListAsync();
    }

    public async Task<Person?> GetByIdAsync(Guid id)
    {
        return await applicationDbContext.Persons.FirstOrDefaultAsync(p => p.Id == id);
    }
}