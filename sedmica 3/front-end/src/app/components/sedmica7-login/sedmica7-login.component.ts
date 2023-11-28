import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MyAuthService} from "../../helpers/auth/my-auth-service";
import {AuthLoginEndpoint, AuthLoginRequest} from "../../endpoints/auth-endpoints/auth-login.endpoint";

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
  constructor(
    public httpClient:HttpClient,
    private myAuthService: MyAuthService,
    private router: Router,
    private authLoginEndpoint:AuthLoginEndpoint
  ) {
  }

  ngOnInit(): void {
  }

  signIn() {

    this.authLoginEndpoint.obradi(this.loginRequest).subscribe((x)=>{
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
