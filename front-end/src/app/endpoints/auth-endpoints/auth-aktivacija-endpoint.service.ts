import {MyBaseEndpoint} from "../MyBaseEndpoint";
import {MojConfig} from "../../moj-config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class AuthAktivacijaEndpoint implements  MyBaseEndpoint<AuthAktivacijaRequest, void>{
  constructor(public httpClient:HttpClient) { }

  obradi(request: AuthAktivacijaRequest): Observable<void> {
    let url=MojConfig.adresa_servera+`/auth/aktivacija`;
    return this.httpClient.post<void>(url,request);
  }
}
export interface AuthAktivacijaRequest {
  nesto:string
}
