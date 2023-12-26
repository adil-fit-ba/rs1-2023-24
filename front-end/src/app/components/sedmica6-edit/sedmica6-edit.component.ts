import { Component, OnInit } from '@angular/core';
import {MojConfig} from "../../moj-config";
import {HttpClient} from "@angular/common/http";
import {StudentSnimiEndpoint, StudentSnimiRequest} from "../../endpoints/student-endpoints/student-snimi.endpoint";
import {
  Student6PretragaResponse,
  Student6PretragaResponseStudenti,
  StudentGetAllEndpoint
} from "../../endpoints/student-endpoints/student-getall.endpoint";
import {
  OpstineGetAllEndpoint,
  OpstineGetAllResponseOpstina
} from "../../endpoints/opstine-endpoints/opstine-getall.endpoint";

@Component({
  selector: 'app-sedmica6-edit',
  templateUrl: './sedmica6-edit.component.html',
  styleUrls: ['./sedmica6-edit.component.css']
})
export class Sedmica6EditComponent implements OnInit {
  public studenti:Student6PretragaResponseStudenti[]=[];
  public odabraniStudent: StudentSnimiRequest | null = null;
  public opstine: OpstineGetAllResponseOpstina[]=[];
  constructor(
    private snimiEndpoint:StudentSnimiEndpoint,
    private getAllEndpoint:StudentGetAllEndpoint,
    private opstineGetAllEndpoint:OpstineGetAllEndpoint
    ) { }

  ngOnInit(): void {
    let url=MojConfig.adresa_servera+`/student/pretraga`;
    this.getAllEndpoint.obradi().subscribe({
      next: x =>{
        this.studenti=x.studenti;
      },
      error: x =>{
        alert("greska: " + x.error)
      }
    })

    this.opstineGetAllEndpoint.obradi().subscribe({
      next:x=>{
        this.opstine=x.opstine
      }
    })
  }

  odaberi(item: Student6PretragaResponseStudenti) {
    this.odabraniStudent = {
      opstinaRodjenjaId: item.opstinaRodjenjaID,
      ime: item.ime,
      prezime: item.prezime,
      id: item.id,
      slikaStudentaNova:""
    } ;
  }

  generisi_preview_slike()
  {
    // @ts-ignore
    let f= document.getElementById("input-slika-id").files[0]

    if (f && this.odabraniStudent)
    {
      let fileReader = new FileReader();

      fileReader.onload = ()=>{
        this.odabraniStudent!.slikaStudentaNova = fileReader.result!.toString()
      }

      fileReader.readAsDataURL(f);
    }
  }


  snimi(): void {

    this.snimiEndpoint.obradi(this.odabraniStudent!).subscribe((x)=>{
      alert("uredu")
      this.ngOnInit();
      this.odabraniStudent = null
    })
  }
}
