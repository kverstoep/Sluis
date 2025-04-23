using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "sluis");

            migrationBuilder.CreateTable(
                name: "album",
                schema: "sluis",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_album", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "foto",
                schema: "sluis",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: true),
                    album_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_foto", x => x.id);
                    table.ForeignKey(
                        name: "fk_foto_album_album_id",
                        column: x => x.album_id,
                        principalSchema: "sluis",
                        principalTable: "album",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "ix_foto_album_id",
                schema: "sluis",
                table: "foto",
                column: "album_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "foto",
                schema: "sluis");

            migrationBuilder.DropTable(
                name: "album",
                schema: "sluis");
        }
    }
}
