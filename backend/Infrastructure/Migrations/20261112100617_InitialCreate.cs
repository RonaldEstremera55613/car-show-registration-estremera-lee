using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Registrations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    RegistrationNumber = table.Column<string>(type: "TEXT", nullable: false),
                    RegistrationDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ParticipantName = table.Column<string>(type: "TEXT", maxLength: 150, nullable: false),
                    ContactNumber = table.Column<string>(type: "TEXT", maxLength: 11, nullable: false),
                    Email = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Address = table.Column<string>(type: "TEXT", maxLength: 300, nullable: false),
                    CarMakeModel = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    PlateNumber = table.Column<string>(type: "TEXT", maxLength: 15, nullable: false),
                    RegistrationType = table.Column<string>(type: "TEXT", nullable: false),
                    Status = table.Column<string>(type: "TEXT", nullable: false),
                    RegistrationFee = table.Column<decimal>(type: "TEXT", precision: 18, scale: 2, nullable: false),
                    AmountPaid = table.Column<decimal>(type: "TEXT", precision: 18, scale: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registrations", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Registrations_PlateNumber",
                table: "Registrations",
                column: "PlateNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Registrations_RegistrationNumber",
                table: "Registrations",
                column: "RegistrationNumber",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Registrations");
        }
    }
}
