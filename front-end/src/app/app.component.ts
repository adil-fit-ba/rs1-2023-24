import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "./moj-config";
import {MyAuthService} from "./services/MyAuthService";
import {SignalrRService} from "./services/signalr-R.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public router: Router,
    public myAuthService: MyAuthService,
    private signalrRService: SignalrRService
  ) {

  }

  ngOnInit(): void {
    debugger
    this.signalrRService.otvori_ws_konekciju()
  }

  idi(s: string) {
    this.router.navigate([s])
  }

  logout() {
    this.myAuthService.signOut();
    this.router.navigate(["/auth/login"])
  }
}
