﻿// <auto-generated />
using System;
using FIT_Api_Example.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FIT_Api_Example.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20231212080201_init2")]
    partial class init2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("FIT_Api_Example.Data.Models.AkademskaGodina", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Opis")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("AkademskaGodina");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.AutentifikacijaToken", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<bool>("Is2FOtkljucano")
                        .HasColumnType("bit");

                    b.Property<int>("KorisnickiNalogId")
                        .HasColumnType("int");

                    b.Property<string>("TwoFKey")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ipAdresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("vrijednost")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("vrijemeEvidentiranja")
                        .HasColumnType("datetime2");

                    b.HasKey("id");

                    b.HasIndex("KorisnickiNalogId");

                    b.ToTable("AutentifikacijaToken");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Drzava", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Skracenica")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Drzava");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Ispit", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime>("DatumVrijemeIspita")
                        .HasColumnType("datetime2");

                    b.Property<string>("Komentar")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PredmetID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("PredmetID");

                    b.ToTable("Ispit");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.KorisnickiNalog", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<bool>("Is2FActive")
                        .HasColumnType("bit");

                    b.Property<string>("KorisnickoIme")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lozinka")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SlikaKorisnika")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isAdmin")
                        .HasColumnType("bit");

                    b.Property<bool>("isDekan")
                        .HasColumnType("bit");

                    b.Property<bool>("isProdekan")
                        .HasColumnType("bit");

                    b.Property<bool>("isStudentskaSluzba")
                        .HasColumnType("bit");

                    b.HasKey("ID");

                    b.ToTable("KorisnickiNalog");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.LogKretanjePoSistemu", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("ExceptionMessage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IpAdresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsException")
                        .HasColumnType("bit");

                    b.Property<int>("KorisnikID")
                        .HasColumnType("int");

                    b.Property<string>("PostData")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("QueryPath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Vrijeme")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("KorisnikID");

                    b.ToTable("LogKretanjePoSistemu");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Obavijest", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<int>("CreatedByKorisnikID")
                        .HasColumnType("int");

                    b.Property<DateTime>("DatumKreiranja")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DatumUpdate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("IzmijenioKorisnikID")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<string>("Naslov")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tekst")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("CreatedByKorisnikID");

                    b.HasIndex("IzmijenioKorisnikID");

                    b.ToTable("Obavijest");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Opstina", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<int>("DrzavaID")
                        .HasColumnType("int");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("DrzavaID");

                    b.ToTable("Opstina");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Predmet", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<int>("Ects")
                        .HasColumnType("int");

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sifra")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Predmet");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.PrijavaIspita", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime>("DatumPrijave")
                        .HasColumnType("datetime2");

                    b.Property<int>("IspitID")
                        .HasColumnType("int");

                    b.Property<DateTime?>("OdjavaIspit")
                        .HasColumnType("datetime2");

                    b.Property<int>("StudentID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("IspitID");

                    b.HasIndex("StudentID");

                    b.ToTable("PrijavaIspita");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Nastavnik", b =>
                {
                    b.HasBaseType("FIT_Api_Example.Data.Models.KorisnickiNalog");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("Nastavnik");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Student", b =>
                {
                    b.HasBaseType("FIT_Api_Example.Data.Models.KorisnickiNalog");

                    b.Property<string>("BrojIndeksa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DatumRodjenja")
                        .HasColumnType("datetime2");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OpstinaRodjenjaID")
                        .HasColumnType("int");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasIndex("OpstinaRodjenjaID");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.AutentifikacijaToken", b =>
                {
                    b.HasOne("FIT_Api_Example.Data.Models.KorisnickiNalog", "korisnickiNalog")
                        .WithMany()
                        .HasForeignKey("KorisnickiNalogId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("korisnickiNalog");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Ispit", b =>
                {
                    b.HasOne("FIT_Api_Example.Data.Models.Predmet", "Predmet")
                        .WithMany()
                        .HasForeignKey("PredmetID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Predmet");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.LogKretanjePoSistemu", b =>
                {
                    b.HasOne("FIT_Api_Example.Data.Models.KorisnickiNalog", "Korisnik")
                        .WithMany()
                        .HasForeignKey("KorisnikID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Korisnik");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Obavijest", b =>
                {
                    b.HasOne("FIT_Api_Example.Data.Models.KorisnickiNalog", "EvidentiraoKorisnik")
                        .WithMany()
                        .HasForeignKey("CreatedByKorisnikID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("FIT_Api_Example.Data.Models.KorisnickiNalog", "IzmijenioKorisnik")
                        .WithMany()
                        .HasForeignKey("IzmijenioKorisnikID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("EvidentiraoKorisnik");

                    b.Navigation("IzmijenioKorisnik");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Opstina", b =>
                {
                    b.HasOne("FIT_Api_Example.Data.Models.Drzava", "drzava")
                        .WithMany()
                        .HasForeignKey("DrzavaID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("drzava");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.PrijavaIspita", b =>
                {
                    b.HasOne("FIT_Api_Example.Data.Models.Ispit", "Ispit")
                        .WithMany()
                        .HasForeignKey("IspitID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("FIT_Api_Example.Data.Models.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Ispit");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Nastavnik", b =>
                {
                    b.HasOne("FIT_Api_Example.Data.Models.KorisnickiNalog", null)
                        .WithOne()
                        .HasForeignKey("FIT_Api_Example.Data.Models.Nastavnik", "ID")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();
                });

            modelBuilder.Entity("FIT_Api_Example.Data.Models.Student", b =>
                {
                    b.HasOne("FIT_Api_Example.Data.Models.KorisnickiNalog", null)
                        .WithOne()
                        .HasForeignKey("FIT_Api_Example.Data.Models.Student", "ID")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();

                    b.HasOne("FIT_Api_Example.Data.Models.Opstina", "OpstinaRodjenja")
                        .WithMany()
                        .HasForeignKey("OpstinaRodjenjaID")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("OpstinaRodjenja");
                });
#pragma warning restore 612, 618
        }
    }
}