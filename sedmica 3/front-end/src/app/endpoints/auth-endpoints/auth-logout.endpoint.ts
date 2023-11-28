import {MyBaseEndpoint} from "../../helpers/my-base-endpoint";
import {MojConfig} from "../../moj-config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class AuthLogoutEndpoint implements  MyBaseEndpoint<void, void>{
  constructor(public httpClient:HttpClient) { }

  obradi(): Observable<void> {
      let url=MojConfig.adresa_servera+`/auth/logout`
      return this.httpClient.post<void>(url, {});
    }

}

