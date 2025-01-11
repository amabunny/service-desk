namespace ServiceDeskApi.DAL;

public interface IRepository<T> where T : class
{
    public Task<T> CreateAsync(T entity);
    public Task<T> UpdateAsync(T entity);
    public Task<T> DeleteAsync(int id);
    public Task<IEnumerable<T>> GetAllAsync();
    public Task<T> GetByIdAsync(int id);
}
