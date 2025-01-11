using Microsoft.AspNetCore.Identity;

namespace ServiceDeskApi.Models;

public class User: IdentityUser<Guid>
{
    
}

public class Role : IdentityRole<Guid>
{
    
}