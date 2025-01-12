using Microsoft.EntityFrameworkCore;
using ServiceDeskApi.Data;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.DAL;

public interface IRefreshTokenRepository : IRepository<RefreshToken>;

public class RefreshTokensRepository(ApplicationDbContext applicationDbContext)
    : Repository<RefreshToken>(applicationDbContext), IRefreshTokenRepository
{
    private readonly ApplicationDbContext _applicationDbContext = applicationDbContext;

    public async Task<IEnumerable<RefreshToken>> GetAllAsync()
    {
        return await _applicationDbContext.RefreshTokens.ToListAsync();
    }
}
