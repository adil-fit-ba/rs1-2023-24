import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isVidljivoSedmica4 = false;
  isVidljivoSedmica5 = false;
  isVidljivoSedmica5PretragaJs = false;
  isVidljivoSedmica5PretragaBackend = false;
  isVidljivoSedmica6Edit = false;

  ngOnInit(): void {
    this.ucitajKomponentu();
  }

  idi(s: string) {
    //window.location.replace("?q=" + s)
    window.history.pushState("","","?q=" + s)
    this.ucitajKomponentu();
  }

  private ucitajKomponentu() {
      let s = new URLSearchParams(window.location.search).get('q');
    this.isVidljivoSedmica4 = false;
    this.isVidljivoSedmica5 = false;
    if (s=="sedmica4")
      this.isVidljivoSedmica4 = true;

    if (s=="sedmica5")
      this.isVidljivoSedmica5 = true;
  }
}
