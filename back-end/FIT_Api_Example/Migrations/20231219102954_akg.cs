using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FIT_Api_Example.Migrations
{
    public partial class akg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AkGodines",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EvidentiraoKorisnikId = table.Column<int>(type: "int", nullable: false),
                    DatumUpisZimski = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Godinastudina = table.Column<int>(type: "int", nullable: false),
                    CijenaSkolarine = table.Column<float>(type: "real", nullable: false),
                    JelObnova = table.Column<bool>(type: "bit", nullable: false),
                    AkademskaGodinaId = table.Column<int>(type: "int", nullable: false),
                    StudentId = table.Column<int>(type: "int", nullable: false),
                    DatumOvjeraZimski = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AkGodines", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AkGodines_AkademskaGodina_AkademskaGodinaId",
                        column: x => x.AkademskaGodinaId,
                        principalTable: "AkademskaGodina",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_AkGodines_KorisnickiNalog_EvidentiraoKorisnikId",
                        column: x => x.EvidentiraoKorisnikId,
                        principalTable: "KorisnickiNalog",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_AkGodines_Student_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Student",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AkGodines_AkademskaGodinaId",
                table: "AkGodines",
                column: "AkademskaGodinaId");

            migrationBuilder.CreateIndex(
                name: "IX_AkGodines_EvidentiraoKorisnikId",
                table: "AkGodines",
                column: "EvidentiraoKorisnikId");

            migrationBuilder.CreateIndex(
                name: "IX_AkGodines_StudentId",
                table: "AkGodines",
                column: "StudentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AkGodines");
        }
    }
}
