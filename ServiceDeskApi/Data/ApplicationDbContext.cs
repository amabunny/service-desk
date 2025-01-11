using Microsoft.EntityFrameworkCore;
using ServiceDeskApi.Models;
namespace ServiceDeskApi.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
}