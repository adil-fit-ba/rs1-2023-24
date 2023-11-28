import { Component, OnInit } from '@angular/core';
import {AuthLoginRequest} from "./authLoginRequest";
import {MojConfig} from "../moj-config";
import {HttpClient} from "@angular/common/http";
import {AuthLoginResponse} from "./authLoginResponse";
import {Router} from "@angular/router";
import {MyAuthService} from "../services/MyAuthService";

@Component({
  selector: 'app-sedmica7-login',
  templateUrl: './sedmica7-login.component.html',
  styleUrls: ['./sedmica7-login.component.css']
})
export class Sedmica7LoginComponent implements OnInit {

  public loginRequest: AuthLoginRequest = {
    lozinka:"",
    korisnickoIme:""
  };
  constructor(public httpClient:HttpClient, private myAuthService: MyAuthService, private router: Router) {

  }

  ngOnInit(): void {
  }

  signIn() {
    let url=MojConfig.adresa_servera+`/auth/login`;
    this.httpClient.post<AuthLoginResponse>(url, this.loginRequest).subscribe((x)=>{
      if (!x.isLogiran){
        alert("pogresan username/pass")
      }
      else{
        let token = x.autentifikacijaToken;
        this.myAuthService.setLogiraniKorisnik(token);
        this.router.navigate(["/sedmica5-js"])

      }
    })
  }
}
