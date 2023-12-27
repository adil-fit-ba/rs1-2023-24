import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AutentifikacijaToken} from "../../helper/auth/autentifikacijaToken";
import {map, Observable, of, tap} from "rxjs";
import {MojConfig} from "../moj-config";
import {AuthLoginResponse} from "../components/sedmica7-login/authLoginResponse";
import {AuthLoginRequest} from "../components/sedmica7-login/authLoginRequest";
import {AuthLoginEndpoint} from "../endpoints/auth-endpoints/auth-login.endpoint";
import {AuthGetEndpoint, AuthGetResponse} from "../endpoints/auth-endpoints/auth-get.endpoint";
import {AuthLogoutEndpoint} from "../endpoints/auth-endpoints/auth-logout.endpoint";
import {SignalrRService} from "./signalr-R.service";

@Injectable({providedIn: 'root'})
export class MyAuthService{
  constructor(
    private authLoginEndpoint: AuthLoginEndpoint,
    private authGetEndpoint: AuthGetEndpoint,
    private authLogoutEndpoint: AuthLogoutEndpoint,
  ) {
  }

  /*
  jelAuthTokenValidan():Observable<boolean>{
    return this.getAuthInfo().pipe(
        map(r=>r.isLogiran)
      );
  }

  getAuthInfo():Observable<AuthGetResponse>{
    return this.authGetEndpoint.obradi()
      .pipe(
        tap(r=>{
          this.setLogiraniKorisnik(r.autentifikacijaToken);
        })
      );
  }
*/
  signIn(loginRequest:AuthLoginRequest):Observable<AuthLoginResponse> {
    return this.authLoginEndpoint.obradi(loginRequest)
      .pipe(
        tap(r=>{
          this.setLogiraniKorisnik(r.autentifikacijaToken);
        })
      );
  }

  signOut():void{
    this.authLogoutEndpoint.obradi()
      .subscribe({
        error: err=>{
          this.setLogiraniKorisnik(null)
        },
        next: r=>{
          this.setLogiraniKorisnik(null)
        }
      });
  }

  getAuthorizationToken():AutentifikacijaToken | null {
    let tokenString = window.localStorage.getItem("my-auth-token")??"";
    try {
      return JSON.parse(tokenString);
    }
    catch (e){
      return null;
    }
  }

  isLogiran():boolean{
    return this.getAuthorizationToken() != null;
  }

  isAdmin():boolean {
    return this.getAuthorizationToken()?.korisnickiNalog.isAdmin ?? false
  }
  isNastavnik():boolean{
    return this.getAuthorizationToken()?.korisnickiNalog.isNastavnik ?? false
  }

  isStudentskaSluzba():boolean{
    return this.getAuthorizationToken()?.korisnickiNalog.isStudentskaSluzba ?? false
  }

  isDekan():boolean{
    return this.getAuthorizationToken()?.korisnickiNalog.isDekan ?? false
  }

  isStudent():boolean {
    return this.getAuthorizationToken()?.korisnickiNalog.isStudent ?? false
  }

  is2FActive():boolean {
    return this.getAuthorizationToken()?.korisnickiNalog.is2FActive ?? false
  }

  isProdekan():boolean{
    return this.getAuthorizationToken()?.korisnickiNalog.isProdekan ?? false
  }
  setLogiraniKorisnik(x: AutentifikacijaToken | null) {

    if (x == null){
      window.localStorage.setItem("my-auth-token", '');
    }
    else {
      window.localStorage.setItem("my-auth-token", JSON.stringify(x));
    }
  }


}
