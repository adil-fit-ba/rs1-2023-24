﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FIT_Api_Example.Data.Models
    {
        public class UpisAkGodine
        {

            [ForeignKey(nameof(EvidentiraoKorisnik))]
            public int EvidentiraoKorisnikId { get; set; }
            public KorisnickiNalog EvidentiraoKorisnik { get; set; }

            [Key]
            public int Id { get; set; }
            public DateTime DatumUpisZimski { get; set; }

            public int Godinastudina { get; set; }
            public float CijenaSkolarine { get; set; }
            public bool JelObnova { get; set; }


            [ForeignKey(nameof(AkademskaGodina))]
            public int AkademskaGodinaId { get; set; }
            public AkademskaGodina AkademskaGodina { get; set; }


            [ForeignKey(nameof(Student))]
            public int StudentId { get; set; }
            public Student Student { get; set; }
            public DateTime? DatumOvjeraZimski { get; set; }
        }
    }
