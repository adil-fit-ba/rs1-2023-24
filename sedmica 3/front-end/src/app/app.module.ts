import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { Sedmica4Component } from './sedmica4/sedmica4.component';
import { Sedmica5Component } from './sedmica5/sedmica5.component';

@NgModule({
  declarations: [
    AppComponent,
    Sedmica4Component,
    Sedmica5Component
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
