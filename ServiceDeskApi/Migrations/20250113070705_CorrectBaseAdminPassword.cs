using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServiceDeskApi.Migrations
{
    /// <inheritdoc />
    public partial class CorrectBaseAdminPassword : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: new Guid("fd7185f9-b407-46d1-98e0-7d57cc292c95"),
                column: "PasswordHash",
                value: "AQAAAAIAAYagAAAAED1j9SQXzIWUGUYc5FBKkmsHcrigYNicFJTWJ+qqyG7pbIlTbTiTyj3+NClK60Y15A==");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: new Guid("fd7185f9-b407-46d1-98e0-7d57cc292c95"),
                column: "PasswordHash",
                value: "AQAAAAIAAYagAAAAEDWEJpj0w89pFxvbHppMIwy1rOYvhU3yIfNBUQqjvAcuZusoLvnyUsCyeq0muOwx0g==");
        }
    }
}
