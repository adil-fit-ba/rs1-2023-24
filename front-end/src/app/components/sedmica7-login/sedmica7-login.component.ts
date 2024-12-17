import { Component, OnInit } from '@angular/core';
import {AuthLoginRequest} from "./authLoginRequest";
import {MojConfig} from "../../moj-config";
import {HttpClient} from "@angular/common/http";
import {AuthLoginResponse} from "./authLoginResponse";
import {Router} from "@angular/router";
import {MyAuthService} from "../../services/MyAuthService";
import { SignalrRService } from 'src/app/services/signalr-R.service';

@Component({
  selector: 'app-sedmica7-login',
  templateUrl: './sedmica7-login.component.html',
  styleUrls: ['./sedmica7-login.component.css']
})
export class Sedmica7LoginComponent implements OnInit {

  public loginRequest: AuthLoginRequest = {
    lozinka:"",
    korisnickoIme:"",
    signalRubConnectionID:""
  };
  constructor(
    public httpClient:HttpClient,
    private router: Router,
    private myAuthService:MyAuthService,
    private signalRService: SignalrRService
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.loginRequest.signalRubConnectionID = this.signalRService.getConnectionId();
    debugger
    this.myAuthService.signIn(this.loginRequest)
      .subscribe(x=>{
      if (!x.isLogiran){
        alert("pogresan username/pass")
      }
      else{

        if(this.myAuthService.is2FActive())
        {
          this.router.navigate(["/2f-authorize"])
        } else if (this.myAuthService.isStudent()){
          this.router.navigate(["/home-student"])
        }
        else{
          this.router.navigate(["/home-nastavnik"])
        }


      }
    })
  }
}
