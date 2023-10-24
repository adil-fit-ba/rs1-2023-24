using System.ComponentModel.DataAnnotations.Schema;
using FIT_Api_Example.Modul1.Models;

namespace FIT_Api_Example.Modul2_IspitOcjene.Models
{
    public class StudentPredmet
    {
        public int ID { get; set; }

        public int StudentID{ get; set; }
        [ForeignKey(nameof(StudentID))]
        public Student Student{ get; set; }

        public int PredmetID { get; set; }
        [ForeignKey(nameof(PredmetID))]
        public Predmet Predmet { get; set; }

        public int? OcjenaBrojcano { get; set; }
        public string? OcjenaOpis { get; set; }
        public DateTime? OcjenaDatum { get; set; }
    }
}
