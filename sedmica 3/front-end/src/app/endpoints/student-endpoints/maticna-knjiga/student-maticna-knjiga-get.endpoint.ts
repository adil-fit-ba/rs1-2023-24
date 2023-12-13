import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {MyBaseEndpoint} from "../../MyBaseEndpoint";
import {MojConfig} from "../../../moj-config";
@Injectable({providedIn: 'root'})
export class StudentMaticnaKnjigaGetEndpoint implements  MyBaseEndpoint<number, StudentMaticnaKnjigaGetResponse>{
  constructor(public httpClient:HttpClient) { }

  obradi(studentid: number): Observable<StudentMaticnaKnjigaGetResponse> {
      let url=MojConfig.adresa_servera+`/student/maticna-knjiga/${studentid}`;
      return this.httpClient.get<StudentMaticnaKnjigaGetResponse>(url);
    }
}

export interface StudentMaticnaKnjigaGetResponse {
}
