using ServiceDeskApi.Models;

namespace ServiceDeskApi.DAL;

public interface IRepository<T> where T : class
{
    public Task<T> CreateAsync(T entity);
    public Task<T> UpdateAsync(T entity);
    public Task<T?> DeleteAsync(Guid id);
    public Task<IEnumerable<T>> GetAllAsync();
    public Task<T?> GetByIdAsync(Guid id);
}
