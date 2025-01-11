namespace ServiceDeskApi.DTOs;

public class LoginUserDto
{
    public required string Username { get; set; }
    public required string Password { get; set; }
}

public class RegisterUserDto
{
    public required string Username { get; set; }
    public required string Password { get; set; }
    public required string Email { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string MiddleName { get; set; }
    public required string PhoneNumber { get; set; }
}