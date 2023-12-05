using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FIT_Api_Example.Data.Models;

public class AutentifikacijaToken
{
    [Key]
    public int ID { get; set; }
    public string Vrijednost { get; set; }
    [ForeignKey(nameof(KorisnickiNalog))]
    public int KorisnickiNalogId { get; set; }
    public KorisnickiNalog KorisnickiNalog { get; set; }
    public DateTime VrijemeEvidentiranja { get; set; }
    public string? IpAdresa { get; set; }
    public string Code2F { get; set; }
    public bool Is2FOtkljucan { get; set; }
}