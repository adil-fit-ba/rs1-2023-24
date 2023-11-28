import {MyBaseEndpoint} from "../../helpers/my-base-endpoint";
import {MojConfig} from "../../moj-config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class StudentGetAllEndpoint implements  MyBaseEndpoint<void, StudentiGetAllResponse>{
  constructor(public httpClient:HttpClient) { }

  obradi(request: void): Observable<StudentiGetAllResponse> {
    let url=MojConfig.adresa_servera+`/student/get-all`;
      return this.httpClient.get<StudentiGetAllResponse>(url);
    }
}

export interface StudentiGetAllResponse{
  studenti: StudentiGetAllResponseStudent[]
}

export interface StudentiGetAllResponseStudent {
  slikaKorisnika: string;
  id: number
  ime: string
  prezime: string
  opstinaRodjenjaNaziv: string
  opstinaRodjenjaDrzava: string
  datumRodjenja: string
  korisnickoIme: string
}
