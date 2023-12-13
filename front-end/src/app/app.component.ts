import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "./moj-config";
import {MyAuthService} from "./services/MyAuthService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public router: Router, public myAuthService: MyAuthService) {
  }

  ngOnInit(): void {
  }

  idi(s: string) {
    this.router.navigate([s])
  }

  logout() {
    this.myAuthService.signOut();
    this.router.navigate(["/auth/login"])
  }
}
