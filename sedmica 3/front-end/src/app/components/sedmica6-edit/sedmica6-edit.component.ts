import {Component, OnInit} from '@angular/core';
import {StudentSnimiEndpoint, StudentSnimiRequest} from "../../endpoints/student-endpoints/student-snimi.endpoint";
import {StudentGetAllEndpoint} from "../../endpoints/student-endpoints/student-getall.endpoint";
import {MyAuthService} from "../../helpers/auth/my-auth-service";
import {Router} from "@angular/router";
import {
  StudentPretragaResponse,
  StudentPretragaResponseStudent
} from "../../endpoints/student-endpoints/student-pretraga.endpoint";

@Component({
  selector: 'app-sedmica6-edit',
  templateUrl: './sedmica6-edit.component.html',
  styleUrls: ['./sedmica6-edit.component.css']
})
export class Sedmica6EditComponent implements OnInit {
  public studenti:StudentPretragaResponseStudent[]=[];
  public odabraniStudent: StudentSnimiRequest | null = null;
  constructor(
    private myAuthService: MyAuthService,
    private snimiEndpoint:StudentSnimiEndpoint,
    private getAllEndpoint:StudentGetAllEndpoint,
    private router: Router
    ) {

  }

  ngOnInit(): void {

    this.getAllEndpoint.obradi().subscribe((x:StudentPretragaResponse)=>{
      this.studenti=x.studenti;
    })
  }

  odaberi(item: StudentPretragaResponseStudent) {
    this.odabraniStudent = {
      ime: item.ime,
      prezime: item.prezime,
      id: item.id
    } ;
  }


  snimi(): void {

    this.snimiEndpoint.obradi(this.odabraniStudent!).subscribe((x)=>{
      alert("uredu")
      this.ngOnInit();
      this.odabraniStudent = null
    })
  }
}
