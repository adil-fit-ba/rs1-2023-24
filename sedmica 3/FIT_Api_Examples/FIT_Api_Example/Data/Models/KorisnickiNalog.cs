using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FIT_Api_Example.Data.Models;

[Table("KorisnickiNalog")]
public class KorisnickiNalog
{
    [Key]
    public int ID { get; set; }
    public string KorisnickoIme { get; set; }
    [JsonIgnore]
    public string Lozinka { get; set; }
    public string SlikaKorisnika { get; set; }

    [JsonIgnore]
    public Student? Student => this as Student;

    [JsonIgnore]
    public Nastavnik? Nastavnik => this as Nastavnik;
    public bool IsNastavnik => Nastavnik != null;
    public bool IsStudent => Student != null;
    public bool IsAdmin { get; set; }
    public bool IsProdekan { get; set; }
    public bool IsDekan { get; set; }
    public bool IsStudentskaSluzba { get; set; }

    public bool IsAktiviranNalog { get; set; }
    public string AktivacijaNalogaGuid { get; set; }
    public bool Is2FRequired { get; set; }
    public string? Email { get; set; }
}