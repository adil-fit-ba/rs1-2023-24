import {inject, Injectable} from "@angular/core";
import {MyBaseEndpoint} from "../helper/my-base-endpoint";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../moj-config";

@Injectable({providedIn: 'root'})
export class Sedmica6StudentSnimiEndpoint implements  MyBaseEndpoint<StudentSnimiRequest, number> {

  private httpClient: HttpClient = inject(HttpClient)

  obradi(request: StudentSnimiRequest): Observable<number> {
    return this.httpClient.post<number>(`${MojConfig.adresa_servera}/student/snimi`, request, {
      headers:{
        "auth-token":"123456"
      }
      }
    );
  }
}

export interface StudentSnimiRequest {
  id: number;
  ime: string;
  prezime: string;
}
