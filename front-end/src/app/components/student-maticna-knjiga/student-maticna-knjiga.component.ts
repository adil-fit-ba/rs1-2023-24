import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  StudentMaticnaKnjigaGetEndpoint, StudentMaticnaKnjigaGetResponseUpisaneGodine
} from "../../endpoints/student-endpoints/maticna-knjiga-endpoints/student-maticna-knjiga-get.endpoint";

@Component({
  selector: 'app-student-maticna-knjiga',
  templateUrl: './student-maticna-knjiga.component.html',
  styleUrls: ['./student-maticna-knjiga.component.css']
})
export class StudentMaticnaKnjigaComponent implements OnInit {
  public studentid: any;
  public upisaneGodine: StudentMaticnaKnjigaGetResponseUpisaneGodine[] = [];
  prikaziDialog=false;

  constructor(public activatedRoute: ActivatedRoute, private studentMaticnaKnjigaGetEndpoint: StudentMaticnaKnjigaGetEndpoint) {
  }

  ngOnInit(): void {

    this.studentid = this.activatedRoute.snapshot.params["studentid"]

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
    
  }
}
