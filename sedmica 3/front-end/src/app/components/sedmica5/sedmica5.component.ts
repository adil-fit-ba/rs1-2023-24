import { Component, OnInit } from '@angular/core';
import {MojConfig} from "../../moj-config";
import {MyAuthService} from "../../helpers/auth/my-auth-service";
import {Router} from "@angular/router";
import {StudentSedmica5Response} from "../../endpoints/student-endpoints/student-sedmica5.endpoint";

@Component({
  selector: 'app-sedmica5',
  templateUrl: './sedmica5.component.html',
  styleUrls: ['./sedmica5.component.css']
})
export class Sedmica5Component implements OnInit {

  constructor(
    private myAuthService: MyAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  studenti: StudentSedmica5Response[] = [];

  getStudenti() {
    let url = MojConfig.adresa_servera +`/student/sedmica5`
    fetch(url)
      .then(response=>{
        if (response.status != 200)
        {
            alert("greska... " + response.statusText);
            return;
        }
        response.json().then(d=>{
          this.studenti = d;
        })
      })
  }
}
