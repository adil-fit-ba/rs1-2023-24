import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AutentifikacijaToken} from "../sedmica7-login/authLoginResponse";

@Injectable({providedIn: 'root'})
export class MyAuthService{
  constructor(private httpClient: HttpClient) {
  }
  jelLogiran():boolean{
   return this.getLogiraniKorisnik() != null;
  }

  setLogiraniKorisnik(token: AutentifikacijaToken){
    window.localStorage.setItem("my-auth-token", JSON.stringify(token))
  }

  logout(){
    window.localStorage.setItem("my-auth-token", "")
  }

  getLogiraniKorisnik():AutentifikacijaToken | null{
    let item = window.localStorage.getItem("my-auth-token")
    if (item)
    {
      return JSON.parse(item);
    }
    return null;
  }
}
