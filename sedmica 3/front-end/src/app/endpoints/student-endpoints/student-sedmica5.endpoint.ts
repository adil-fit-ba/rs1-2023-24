import {MyBaseEndpoint} from "../../helpers/my-base-endpoint";
import {MojConfig} from "../../moj-config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class StudentSedmica5Endpoint implements  MyBaseEndpoint<void, StudentSedmica5Response>{
  constructor(public httpClient:HttpClient) { }

  obradi(request: void): Observable<StudentSedmica5Response> {
    let url=MojConfig.adresa_servera+`/student/sedmica5`;
      return this.httpClient.get<StudentSedmica5Response>(url);
    }
}

export interface StudentSedmica5Response {
  ime: string
  prezime: string
  brojIndeksa: string
  opstinaRodjenjaID: number
  opstinaRodjenja: StudentSedmica5ResponseOpstinaRodjenja
  datumRodjenja: string
  id: number
  korisnickoIme: string
  slikaKorisnika: string
  isNastavnik: boolean
  isStudent: boolean
  isAdmin: boolean
  isProdekan: boolean
  isDekan: boolean
  isStudentskaSluzba: boolean
}

export interface StudentSedmica5ResponseOpstinaRodjenja {
  id: number
  description: string
  drzavaID: number
  drzava: StudentSedmica5ResponseDrzava
}


export interface StudentSedmica5ResponseDrzava {
  id: number
  naziv: string
  skracenica: any
}
