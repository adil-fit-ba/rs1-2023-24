import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  StudentMaticnaKnjigaGetEndpoint, StudentMaticnaKnjigaGetResponseUpisaneGodine
} from "../../endpoints/student-endpoints/maticna-knjiga-endpoints/student-maticna-knjiga-get.endpoint";
import {
  StudentMaticnaKnjigaDodajEndpoint,
  StudentMaticnaKnjigaDodajRequest
} from "../../endpoints/student-endpoints/maticna-knjiga-endpoints/student-maticna-knjiga-dodaj.endpoint";
import {
  AkademskeGodineGetEndpoint,
  AkademskeGodineGetResponseAkGodine
} from "../../endpoints/akademske-godine/akademske-godine-get-endpoint.service";

@Component({
  selector: 'app-student-maticna-knjiga',
  templateUrl: './student-maticna-knjiga.component.html',
  styleUrls: ['./student-maticna-knjiga.component.css']
})
export class StudentMaticnaKnjigaComponent implements OnInit {
  public studentid: any;
  public upisaneGodine: StudentMaticnaKnjigaGetResponseUpisaneGodine[] = [];

  public upisNoviSemestar: StudentMaticnaKnjigaDodajRequest | null = null;
  public akademskeGodinePodaci: AkademskeGodineGetResponseAkGodine[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private studentMaticnaKnjigaGetEndpoint: StudentMaticnaKnjigaGetEndpoint,
    private akademskeGodineGetEndpoint: AkademskeGodineGetEndpoint,
    private studentMaticnaKnjigaDodajEndpoint: StudentMaticnaKnjigaDodajEndpoint
  ) {

  }

  private fetchAkademskeGodine() {
    this.akademskeGodineGetEndpoint.obradi()
      .subscribe(x => {
        this.akademskeGodinePodaci = x.akademskeGodine
      })
  }

  ngOnInit(): void {

    this.studentid = this.activatedRoute.snapshot.params["studentid"]
    this.fetchMaticnaKnjiga();
    this.fetchAkademskeGodine();
  }

  private fetchMaticnaKnjiga() {
    this.studentMaticnaKnjigaGetEndpoint.obradi(this.studentid).subscribe({
      next: x => {
        this.upisaneGodine = x.upisaneGodine;
      },
      error: x => {
        alert(JSON.stringify(x))
      }
    })
  }

  snimi() {
    if (this.upisNoviSemestar != null) {
      this.studentMaticnaKnjigaDodajEndpoint
        .obradi(this.upisNoviSemestar!)
        .subscribe(x => {
          this.upisNoviSemestar = null
          setTimeout(()=>{
            // @ts-ignore
            dialogSuccess("uspjesno dodat semestar");
          }, 50)
        })
    }
  }


  otvoriDialog() {
    this.upisNoviSemestar = {
      obnova: false,
      cijenaSkolarine:0,
      studentID : this.studentid,
      godinaStudija: 1,
      zimskiSemestarUpis: new Date(),
      akademskaGodinaID:0
    }
  }
}
