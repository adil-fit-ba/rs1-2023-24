import {Component, OnInit} from '@angular/core';
import {AuthAktivacijaEndpoint} from "../../endpoints/auth-enpoints/auth-aktivacija.endpoint";

@Component({
  selector: 'app-korisnik-aktivacija',
  templateUrl: './korisnik-aktivacija.component.html',
  styleUrls: ['./korisnik-aktivacija.component.css']
})
export class KorisnikAktivacijaComponent implements OnInit {

  constructor(private authAktivacijaEndpoint: AuthAktivacijaEndpoint) {
  }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('nesto');
    if (token != null) {
      this.authAktivacijaEndpoint.obradi({
        nesto: token
      }).subscribe(x => {
        alert("Uspjesno aktiviran")
      })
    }

  }
}
