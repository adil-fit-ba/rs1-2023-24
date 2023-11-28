import {MyBaseEndpoint} from "../../helpers/my-base-endpoint";
import {MojConfig} from "../../moj-config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class StudentPretragaEndpoint implements  MyBaseEndpoint<string, StudentPretragaResponse>{
  constructor(public httpClient:HttpClient) { }

  obradi(naziv: string): Observable<StudentPretragaResponse> {
    let url=MojConfig.adresa_servera+`/student/pretraga?Pretraga=${naziv}`;
      return this.httpClient.get<StudentPretragaResponse>(url);
    }
}

export interface StudentPretragaResponse {
  studenti: StudentPretragaResponseStudent[];
}

export interface StudentPretragaResponseStudent {
  slikaKorisnika: string;
  id: number
  ime: string
  prezime: string
  opstinaRodjenjaNaziv: string
  opstinaRodjenjaDrzava: string
  datumRodjenja: string
  korisnickoIme: string
}

