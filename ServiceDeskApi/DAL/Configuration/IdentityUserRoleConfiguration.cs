using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ServiceDeskApi.DAL.Configuration;

public class IdentityUserRoleConfiguration : IEntityTypeConfiguration<IdentityUserRole<Guid>>
{
    public void Configure(EntityTypeBuilder<IdentityUserRole<Guid>> builder)
    {
        builder.HasData(
            new IdentityUserRole<Guid>
            {
                UserId = Guid.Parse("fd7185f9-b407-46d1-98e0-7d57cc292c95"),
                RoleId = Guid.Parse("11111111-1111-1111-1111-111111111111")
            }
        );
    }
}
