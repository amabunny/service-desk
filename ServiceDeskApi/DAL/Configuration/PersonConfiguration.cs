using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ServiceDeskApi.Models;

namespace ServiceDeskApi.DAL.Configuration;

public class PersonConfiguration : IEntityTypeConfiguration<Person>
{
    public void Configure(EntityTypeBuilder<Person> builder)
    {
        builder
            .HasOne(person => person.User)
            .WithOne(user => user.Person)
            .OnDelete(DeleteBehavior.Cascade);
        ;

        builder.HasData(
            new Person
            {
                Id = Guid.Parse("123e4567-e89b-12d3-a456-426655440000"),
                FirstName = "Сергей",
                LastName = "Антипин",
                MiddleName = "Дмитриевич"
            }
        );
    }
}
