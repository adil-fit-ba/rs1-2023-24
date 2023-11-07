import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { Sedmica4Component } from './sedmica4/sedmica4.component';
import { Sedmica5Component } from './sedmica5/sedmica5.component';
import {HttpClientModule} from "@angular/common/http";
import { Sedmica5PretragaJsComponent } from './sedmica5-pretraga-js/sedmica5-pretraga-js.component';
import { Sedmica5PretragaBackendComponent } from './sedmica5-pretraga-backend/sedmica5-pretraga-backend.component';

@NgModule({
  declarations: [
    AppComponent,
    Sedmica4Component,
    Sedmica5Component,
    Sedmica5PretragaJsComponent,
    Sedmica5PretragaBackendComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }