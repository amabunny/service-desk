using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace ServiceDeskApi.Models;

public class User: IdentityUser<Guid>
{
    public Guid? PersonId { get; set; }
    public Person? Person { get; set; }
}

public class Role : IdentityRole<Guid>
{

}
