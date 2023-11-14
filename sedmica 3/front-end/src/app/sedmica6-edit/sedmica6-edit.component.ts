import {Component, OnInit} from '@angular/core';
import {MojConfig} from "../moj-config";
import {HttpClient} from "@angular/common/http";
import {Student6PretragaResponse, Student6PretragaResponseStudenti, StudentSnimiRequest} from "./student6-getall";

@Component({
  selector: 'app-sedmica6-edit',
  templateUrl: './sedmica6-edit.component.html',
  styleUrls: ['./sedmica6-edit.component.css']
})
export class Sedmica6EditComponent implements OnInit {
  public studenti: Student6PretragaResponseStudenti[] = [];
  public odabraniStudent: StudentSnimiRequest | null = null;

  constructor(public httpClient: HttpClient) {
  }

  snimi() {
    let url = MojConfig.adresa_servera + `/student/snimi`;
    this.httpClient.post(url, this.odabraniStudent, {}).subscribe(x => {
      alert("Upsjesno snimljeno za x" + x);
      this.ngOnInit();
      if (this.odabraniStudent) {
        this.odabraniStudent.ime = "";
        this.odabraniStudent.prezime = "";
      }
    });
  }

  ngOnInit(): void {
    let url = MojConfig.adresa_servera + `/student/pretraga`;
    this.httpClient.get<Student6PretragaResponse>(url).subscribe((x: Student6PretragaResponse) => {
      this.studenti = x.studenti;
    })
  }

  odaberi(item: Student6PretragaResponseStudenti) {
    this.odabraniStudent = {
      id: item.id,
      ime: item.ime,
      prezime: item.prezime

    };
  }
}
