using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.DAL.Configuration;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    private readonly PasswordHasher<User> _passwordHasher = new();

    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder
            .HasOne(user => user.Person)
            .WithOne(person => person.User)
            .HasForeignKey<User>(user => user.PersonId);

        var adminUser = new User
        {
            Id = Guid.Parse("fd7185f9-b407-46d1-98e0-7d57cc292c95"),
            UserName = "arche1996",
            NormalizedUserName = "ARCHE1996",
            Email = "arche1996@yandex.com",
            NormalizedEmail = "arche1996@yandex.com",
            PhoneNumber = "79638956103",
            EmailConfirmed = true,
            PhoneNumberConfirmed = true,
            PersonId = Guid.Parse("123e4567-e89b-12d3-a456-426655440000"),
            ConcurrencyStamp = "",
            PasswordHash =
                "AQAAAAIAAYagAAAAEDWEJpj0w89pFxvbHppMIwy1rOYvhU3yIfNBUQqjvAcuZusoLvnyUsCyeq0muOwx0g=="
        };

        builder.HasData(adminUser);
    }
}
