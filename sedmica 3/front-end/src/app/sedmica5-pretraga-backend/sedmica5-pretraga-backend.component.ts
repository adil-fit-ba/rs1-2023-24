import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentiGetAllResponse, StudentiGetAllResponseStudent} from "../sedmica5-pretraga-js/studenti-getall-response";
import {MojConfig} from "../moj-config";
import {StudentPretragaResponse, StudentPretragaResponseStudent} from "./studenti-pretraga-response";
import {MyAuthService} from "../services/MyAuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sedmica5-pretraga-backend',
  templateUrl: './sedmica5-pretraga-backend.component.html',
  styleUrls: ['./sedmica5-pretraga-backend.component.css']
})
export class Sedmica5PretragaBackendComponent implements OnInit {

  constructor(
    public httpClient: HttpClient,
    private myAuthService: MyAuthService,
    private router: Router
  ) {
  }

  studenti: StudentPretragaResponseStudent[] = [];
  ngOnInit(): void {
    if (!this.myAuthService.jelLogiran())
    {
      this.router.navigate(["/sedmica7-login"])
      return;
    }
    let url = MojConfig.adresa_servera +`/student/pretraga`
    this.httpClient.get<StudentPretragaResponse>(url, MojConfig.get_http_opcije()).subscribe((x:StudentPretragaResponse)=>{
      this.studenti = x.studenti;
    })
  }

  preuzmiNovePodatke($event: Event) {
    // @ts-ignore
    let naziv = $event.target.value;
    let url = MojConfig.adresa_servera +`/student/pretraga?Pretraga=${naziv}`
    this.httpClient.get<StudentPretragaResponse>(url, MojConfig.get_http_opcije()).subscribe((x:StudentPretragaResponse)=>{
      this.studenti = x.studenti;
    })
  }
}
