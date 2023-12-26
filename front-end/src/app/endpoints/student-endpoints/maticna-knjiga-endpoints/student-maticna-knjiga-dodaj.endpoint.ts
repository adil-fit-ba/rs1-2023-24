import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {MyBaseEndpoint} from "../../MyBaseEndpoint";
import {MojConfig} from "../../../moj-config";
@Injectable({providedIn: 'root'})
export class StudentMaticnaKnjigaDodajEndpoint implements  MyBaseEndpoint<StudentMaticnaKnjigaDodajRequest, void>{
  constructor(public httpClient:HttpClient) { }

  obradi(request:StudentMaticnaKnjigaDodajRequest): Observable<void> {
      let url=MojConfig.adresa_servera+`/student/maticna-knjiga`;
      return this.httpClient.post<void>(url, request);
    }
}

export interface StudentMaticnaKnjigaDodajRequest {
  studentID: number;
  akademskaGodinaID: number;
  godinaStudija: number;
  obnova: boolean;
  zimskiSemestarUpis: Date;
  cijenaSkolarine: number;
}

