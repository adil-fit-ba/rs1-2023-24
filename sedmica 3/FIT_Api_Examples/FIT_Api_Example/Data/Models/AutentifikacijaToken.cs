﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FIT_Api_Example.Data.Models;

public class AutentifikacijaToken
{
    [Key]
    public int id { get; set; }
    public string vrijednost { get; set; }
    [ForeignKey(nameof(korisnickiNalog))]
    public int KorisnickiNalogId { get; set; }
    public KorisnickiNalog korisnickiNalog { get; set; }
    public DateTime vrijemeEvidentiranja { get; set; }
    public string? ipAdresa { get; set; }
    [JsonIgnore]
    public string? TwoFKey { get; set; }
    public bool Is2FOtkljucano { get; set; }
}