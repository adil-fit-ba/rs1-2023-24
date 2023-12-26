import {Injectable} from "@angular/core";
import * as signalR from "@microsoft/signalr";
import {MojConfig} from "../moj-config";
@Injectable({
   providedIn:"root"
})
export  class SignalrRService{

  otvori_ws_konekciju() {
    let connection = new signalR.HubConnectionBuilder()
      .withUrl(MojConfig.adresa_servera+ '/poruke-hub-putanja')
      .build();

    connection.on('prijem_poruke_js', (p:string)=>{
      console.log("prijem_poruke_js: " + p)
      alert("evidentiran semestar")
    });

    connection.start()
      .then(()=>{
        console.log("konekcija otvorena - poruke-hub-putanja")
      })
    ;
  }
}
