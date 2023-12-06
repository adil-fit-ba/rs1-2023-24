import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { Sedmica4Component } from './components/sedmica4/sedmica4.component';
import { Sedmica5Component } from './components/sedmica5/sedmica5.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { Sedmica5PretragaJsComponent } from './components/sedmica5-pretraga-js/sedmica5-pretraga-js.component';
import { Sedmica5PretragaBackendComponent } from './components/sedmica5-pretraga-backend/sedmica5-pretraga-backend.component';
import { Sedmica6EditComponent } from './components/sedmica6-edit/sedmica6-edit.component';
import { RouterModule } from '@angular/router';
import { Sedmica7LoginComponent } from './components/sedmica7-login/sedmica7-login.component';
import {MyAuthInterceptor} from "../helper/auth/my-auth-interceptor.service";
import {AutorizacijaGuard} from "../helper/auth/autorizacija-guard.service";
import { HomeStudentComponent } from './components/home-student/home-student.component';
import { HomeNastavnikComponent } from './components/home-nastavnik/home-nastavnik.component';
import { KorisnikAktivacijaComponent } from './components/korisnik-aktivacija/korisnik-aktivacija.component';
@NgModule({
  declarations: [
    AppComponent,
    Sedmica4Component,
    Sedmica5Component,
    Sedmica5PretragaJsComponent,
    Sedmica5PretragaBackendComponent,
    Sedmica6EditComponent,
    Sedmica7LoginComponent,
    HomeStudentComponent,
    HomeNastavnikComponent,
    KorisnikAktivacijaComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule,
      RouterModule.forRoot([
        {path:'',  component: HomeNastavnikComponent, canActivate: [AutorizacijaGuard]},
        {path:'home-student', component: HomeStudentComponent, canActivate: [AutorizacijaGuard]},
        {path:'home-nastavnik', component: HomeNastavnikComponent, canActivate: [AutorizacijaGuard]},
        {path:'sedmica4', component: Sedmica4Component, canActivate: [AutorizacijaGuard]},
        {path:'sedmica5', component: Sedmica5Component, canActivate: [AutorizacijaGuard]},
        {path:'sedmica5-js', component: Sedmica5PretragaJsComponent, canActivate: [AutorizacijaGuard]},
        {path:'sedmica5-backend', component: Sedmica5PretragaBackendComponent, canActivate: [AutorizacijaGuard]},
        {path:'sedmica6', component: Sedmica6EditComponent, canActivate: [AutorizacijaGuard]},
        {path:'auth/login', component: Sedmica7LoginComponent},
        {path:'auth/aktivacija-angular', component: KorisnikAktivacijaComponent},
      ])
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyAuthInterceptor, multi: true },
    AutorizacijaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
