import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { AutentifikacijaToken } from "./autentifikacija-token";

@Injectable({providedIn: 'root'})
export class MyAuthService{
  constructor(private httpClient: HttpClient) {
  }
  isLogiran():boolean{
   return this.getLogiraniKorisnik() != null;
  }

  setLogiraniKorisnik(token: AutentifikacijaToken |null){
    if (token) {
      window.localStorage.setItem("my-auth-token", JSON.stringify(token))
    }
    else{
      window.localStorage.setItem("my-auth-token", '')
    }
  }

  logout(){
    window.localStorage.setItem("my-auth-token", "")
  }

  getLogiraniKorisnik():AutentifikacijaToken | null{
    let item = window.localStorage.getItem("my-auth-token")
    if (item)
    {
      try {
        return JSON.parse(item);
      }
      catch (e){
        return null;
      }

    }
    return null;
  }

  getAuthorizationToken():string{
    return this.getLogiraniKorisnik()?.vrijednost??'';
  }

  isStudent() {
    return this.getLogiraniKorisnik()?.korisnickiNalog.isStudent??false;
  }

  isAdmin() {
    return this.getLogiraniKorisnik()?.korisnickiNalog.isAdmin??false;
  }

  isDekan() {
    return this.getLogiraniKorisnik()?.korisnickiNalog.isDekan??false;
  }

  isProdekan() {
    return this.getLogiraniKorisnik()?.korisnickiNalog.isProdekan??false;
  }

  isNastavnik() {
    return this.getLogiraniKorisnik()?.korisnickiNalog.isNastavnik??false;
  }

  isStudentskaSluzba() {
    return this.getLogiraniKorisnik()?.korisnickiNalog.isStudentskaSluzba??false;
  }

  isZaposlenik() {
    return this.isAdmin() || this.isDekan() || this.isProdekan() || this.isNastavnik() || this.isStudentskaSluzba();
  }
}
