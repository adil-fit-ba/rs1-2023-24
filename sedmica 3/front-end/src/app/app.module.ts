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
import {AuthInterceptor} from "./helpers/auth/auth-interceptor.service";
import {AutorizacijaGuard} from "./helpers/auth/autorizacija-guard.service";
import { HomeZaposlenikComponent } from './components/home-zaposlenik/home-zaposlenik.component';
import { HomeStudentComponent } from './components/home-student/home-student.component';
import { NotLoggedUserComponent } from './components/not-logged-user/not-logged-user.component';
@NgModule({
  declarations: [
    AppComponent,
    Sedmica4Component,
    Sedmica5Component,
    Sedmica5PretragaJsComponent,
    Sedmica5PretragaBackendComponent,
    Sedmica6EditComponent,
    Sedmica7LoginComponent,
    HomeZaposlenikComponent,
    HomeStudentComponent,
    NotLoggedUserComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule,
      RouterModule.forRoot([
        {path:'', redirectTo:'sedmica4', pathMatch: 'full'},
        {path:'home-student', component: HomeStudentComponent},
        {path:'home-zaposlenik', component: HomeZaposlenikComponent},
        {path:'sedmica4', component: Sedmica4Component},
        {path:'sedmica5', component: Sedmica5Component, canActivate: [AutorizacijaGuard]},
        {path:'sedmica5-js', component: Sedmica5PretragaJsComponent, canActivate: [AutorizacijaGuard]},
        {path:'sedmica5-backend', component: Sedmica5PretragaBackendComponent, canActivate: [AutorizacijaGuard]},
        {path:'sedmica6', component: Sedmica6EditComponent, canActivate: [AutorizacijaGuard]},
        {path:'auth/login', component: Sedmica7LoginComponent},
      ])
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AutorizacijaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
