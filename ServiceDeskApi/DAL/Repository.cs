using ServiceDeskApi.Data;

namespace ServiceDeskApi.DAL;

public interface IRepository<T> where T : class
{
    public Task<T> CreateAsync(T entity);
    public Task<T> UpdateAsync(T entity);
    public Task<T?> DeleteAsync(Guid id);
    public Task<T?> GetByIdAsync(Guid id);
}

public abstract class Repository<T>(ApplicationDbContext applicationDbContext) : IRepository<T>
    where T : class
{
    public async Task<T> CreateAsync(T entity)
    {
        var result = await applicationDbContext.AddAsync(entity);
        await applicationDbContext.SaveChangesAsync();
        return result.Entity;
    }

    public async Task<T> UpdateAsync(T entity)
    {
        var result = applicationDbContext.Update(entity);
        await applicationDbContext.SaveChangesAsync();
        return result.Entity;
    }

    public async Task<T?> DeleteAsync(Guid id)
    {
        var entity = await applicationDbContext.FindAsync<T>(id);
        if (entity == null) return null;
        applicationDbContext.Remove(entity);
        return entity;
    }

    public async Task<T?> GetByIdAsync(Guid id)
    {
        return await applicationDbContext.FindAsync<T>(id);
    }
}
