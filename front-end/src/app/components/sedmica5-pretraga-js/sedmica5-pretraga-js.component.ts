import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentSedmica5Response} from "../sedmica5/student-sedmica5-response";
import {MojConfig} from "../../moj-config";
import {StudentiGetAllResponse, StudentiGetAllResponseStudent} from "./studenti-getall-response";
import {MyAuthService} from "../../services/MyAuthService";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-sedmica5-pretraga-js',
  templateUrl: './sedmica5-pretraga-js.component.html',
  styleUrls: ['./sedmica5-pretraga-js.component.css']
})
export class Sedmica5PretragaJsComponent implements OnInit {

  constructor(
    public httpClient: HttpClient,
    private myAuthService:MyAuthService,
    private router: Router,
    ) {
  }
  studenti: StudentiGetAllResponseStudent[] = [];
  pretragaNaziv="";
  ngOnInit(): void {

    let url = MojConfig.adresa_servera +`/student/get-all`

    this.httpClient.get<StudentiGetAllResponse>(url)
      .subscribe({
        next:x=>{
          this.studenti = x.studenti;
        },
      error:x=>{
          alert(x);
      }
      })
  }

  getFiltriraniStudetni() {
    return this.studenti.filter(x=>{
      let v = (x.ime + ' ' + x.prezime).toLowerCase().startsWith(this.pretragaNaziv.toLowerCase()) || (x.prezime + ' ' + x.ime).toLowerCase().startsWith(this.pretragaNaziv.toLowerCase()) || x.opstinaRodjenjaNaziv.toLowerCase().startsWith(this.pretragaNaziv.toLowerCase())
      return v;
    })


  }
}
