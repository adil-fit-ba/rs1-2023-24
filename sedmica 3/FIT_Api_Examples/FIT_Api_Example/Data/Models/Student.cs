﻿using System.ComponentModel.DataAnnotations.Schema;

namespace FIT_Api_Example.Data.Models
{
    [Table("Student")]
    public class Student : KorisnickiNalog
    {
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string BrojIndeksa { get; set; }
        [ForeignKey(nameof(OpstinaRodjenja))]
        public int OpstinaRodjenjaID { get; set; }
        public Opstina OpstinaRodjenja { get; set; }
        public DateTime DatumRodjenja { get; set; }
    }
}
