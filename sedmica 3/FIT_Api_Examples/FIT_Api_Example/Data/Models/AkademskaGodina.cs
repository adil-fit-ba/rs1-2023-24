using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FIT_Api_Example.Data.Models;

public class AkademskaGodina
{
    [Key]
    public int ID { get; set; }
    public string Opis { get; set; }
}