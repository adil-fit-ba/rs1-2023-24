import {MojConfig} from "../../moj-config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {MyBaseEndpoint} from "../MyBaseEndpoint";
import {AutentifikacijaToken} from "../../../helper/auth/autentifikacijaToken";
@Injectable({providedIn: 'root'})
export class AuthLoginEndpoint implements  MyBaseEndpoint<AuthLoginRequest, AuthLoginResponse>{
  constructor(public httpClient:HttpClient) { }

  obradi(request: AuthLoginRequest): Observable<AuthLoginResponse> {
    let url=MojConfig.adresa_servera+`/auth/login`;
      return this.httpClient.post<AuthLoginResponse>(url, request);
    }
}

export interface AuthLoginRequest {
  korisnickoIme: string;
  lozinka: string;
}
export interface AuthLoginResponse {
  autentifikacijaToken: AutentifikacijaToken
  isLogiran: boolean
}
