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

        builder.HasMany<RefreshToken>(user => user.RefreshTokens)
            .WithOne(refreshToken => refreshToken.User)
            .HasForeignKey(refreshToken => refreshToken.Id)
            .IsRequired();

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
                "AQAAAAIAAYagAAAAED1j9SQXzIWUGUYc5FBKkmsHcrigYNicFJTWJ+qqyG7pbIlTbTiTyj3+NClK60Y15A=="
        };

        builder.HasData(adminUser);
    }
}
