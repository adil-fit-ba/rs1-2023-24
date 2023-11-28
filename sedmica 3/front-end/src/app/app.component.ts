import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "./moj-config";
import {MyAuthService} from "./helpers/auth/my-auth-service";
import {AuthLogoutEndpoint} from "./endpoints/auth-endpoints/auth-logout.endpoint";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public router: Router,
    public myAuthService: MyAuthService,
    private authLogoutEndpoint:AuthLogoutEndpoint,
  ) {
  }

  ngOnInit(): void {
  }

  idi(s: string) {
    this.router.navigate([s])
  }

  logout() {
    this.myAuthService.setLogiraniKorisnik(null);

    this.authLogoutEndpoint.obradi().subscribe(x=>{
        console.log("logout uspjesan")
    })

    this.router.navigate(["/auth/login"])
  }
}
