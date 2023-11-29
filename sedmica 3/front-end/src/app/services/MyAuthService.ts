import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AutentifikacijaToken} from "../sedmica7-login/authLoginResponse";

@Injectable({providedIn: 'root'})
export class MyAuthService{
  constructor(private httpClient: HttpClient) {
  }
  isLogiran():boolean{
    return this.getAuthorizationToken() != null;
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

  isProdekan():boolean{
    return this.getAuthorizationToken()?.korisnickiNalog.isProdekan ?? false
  }
  setLogiraniKorisnik(x: AutentifikacijaToken) {

    window.localStorage.setItem("my-auth-token", JSON.stringify(x.vrijednost));
  }
}
