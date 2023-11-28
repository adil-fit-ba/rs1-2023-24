import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyAuthService} from "../../helpers/auth/my-auth-service";
import {Router} from "@angular/router";
import {
  StudentGetAllEndpoint,
  StudentiGetAllResponse,
  StudentiGetAllResponseStudent
} from "../../endpoints/student-endpoints/student-getall.endpoint";

@Component({
  selector: 'app-sedmica5-pretraga-js',
  templateUrl: './sedmica5-pretraga-js.component.html',
  styleUrls: ['./sedmica5-pretraga-js.component.css']
})
export class Sedmica5PretragaJsComponent implements OnInit {

  constructor(
    private myAuthService: MyAuthService,
    private router: Router,
    private studentGetAllEndpoint: StudentGetAllEndpoint
  ) {
  }
  studenti: StudentiGetAllResponseStudent[] = [];
  pretragaNaziv="";

  ngOnInit(): void {
    this.studentGetAllEndpoint.obradi().subscribe((x:StudentiGetAllResponse)=>{
      this.studenti = x.studenti;
    })
  }

  getFiltriraniStudetni() {
    return this.studenti.filter(x=>(x.ime + ' ' + x.prezime).startsWith(this.pretragaNaziv) || (x.prezime + ' ' + x.ime).startsWith(this.pretragaNaziv))
  }
}
