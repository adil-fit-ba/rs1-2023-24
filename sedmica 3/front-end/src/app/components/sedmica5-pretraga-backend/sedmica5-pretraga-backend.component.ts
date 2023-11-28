import {Component, OnInit} from '@angular/core';
import {MyAuthService} from "../../helpers/auth/my-auth-service";
import {Router} from "@angular/router";
import {
  StudentPretragaEndpoint,
  StudentPretragaResponse,
  StudentPretragaResponseStudent
} from "../../endpoints/student-endpoints/student-pretraga.endpoint";

@Component({
  selector: 'app-sedmica5-pretraga-backend',
  templateUrl: './sedmica5-pretraga-backend.component.html',
  styleUrls: ['./sedmica5-pretraga-backend.component.css']
})
export class Sedmica5PretragaBackendComponent implements OnInit {

  constructor(
    private studentPretragaEndpoint:StudentPretragaEndpoint,
    private myAuthService: MyAuthService,
    private router: Router
  ) {
  }

  studenti: StudentPretragaResponseStudent[] = [];
  ngOnInit(): void {

    this.studentPretragaEndpoint.obradi('').subscribe((x:StudentPretragaResponse)=>{
      this.studenti = x.studenti;
    })
  }

  preuzmiNovePodatke($event: Event) {
    // @ts-ignore
    let naziv = $event.target.value;
    this.studentPretragaEndpoint.obradi(naziv).subscribe((x:StudentPretragaResponse)=>{
      this.studenti = x.studenti;
    })
  }
}
