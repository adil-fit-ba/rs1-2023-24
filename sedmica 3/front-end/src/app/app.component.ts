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
    // @ts-ignore
    let params = (new URL(document.location)).searchParams;
    let putanja = params.get("lokacija");

    this.isVidljivoSedmica4 = false;
    this.isVidljivoSedmica5 = false;
    this.isVidljivoSedmica5PretragaJs = false;
    this.isVidljivoSedmica5PretragaBackend = false;
    this.isVidljivoSedmica6Edit = false;

    if (putanja == "1")
      this.isVidljivoSedmica4 = true;

    if (putanja == "2")
      this.isVidljivoSedmica5 = true;

    if (putanja == "3")
      this.isVidljivoSedmica5PretragaJs = true;

    if (putanja == "4")
      this.isVidljivoSedmica5PretragaBackend = true;

    if (putanja == "5")
      this.isVidljivoSedmica6Edit = true;
  }


  idi(s: string) {
    history.pushState("", "", "?"+s);
    this.ngOnInit();
  }
}
