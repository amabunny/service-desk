using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceDeskApi.Migrations
{
    /// <inheritdoc />
    public partial class AddConfirmFieldsToBaseAdmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: new Guid("fd7185f9-b407-46d1-98e0-7d57cc292c95"),
                columns: new[] { "EmailConfirmed", "PhoneNumberConfirmed" },
                values: new object[] { true, true });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: new Guid("fd7185f9-b407-46d1-98e0-7d57cc292c95"),
                columns: new[] { "EmailConfirmed", "PhoneNumberConfirmed" },
                values: new object[] { false, false });
        }
    }
}
