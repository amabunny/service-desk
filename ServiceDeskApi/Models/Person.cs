using System.ComponentModel.DataAnnotations;

namespace ServiceDeskApi.Models;

public class Person
{
    public Guid Id { get; set; }
    
    [MaxLength(20)]
    public required string FirstName { get; set; }
    [MaxLength(20)]
    public required string LastName { get; set; }
    [MaxLength(20)]
    public required string MiddleName { get; set; }
    
    public User? User { get; set; }
}