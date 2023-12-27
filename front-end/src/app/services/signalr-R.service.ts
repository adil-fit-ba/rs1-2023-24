import {Injectable} from "@angular/core";
import * as signalR from "@microsoft/signalr";
import {MojConfig} from "../moj-config";
import {HubConnection} from "@microsoft/signalr";
import {MyAuthService} from "./MyAuthService";
@Injectable({
   providedIn:"root"
})
export class SignalrRService{

  constructor(private myAuthService:MyAuthService) {
  }

  public static connection:HubConnection | null =null
  otvori_ws_konekciju() {

    const authToken = this.myAuthService.getAuthorizationToken()?.vrijednost??"";

    let connection = new signalR.HubConnectionBuilder()
      .withUrl(MojConfig.adresa_servera+ '/poruke-hub-putanja/' + authToken)
      .build();

    connection.on('prijem_poruke_js', (p:string)=>{
      console.log("prijem_poruke_js: " + p)
      alert("evidentiran semestar")
    });

    connection.start()
      .then(()=>{
        console.log("konekcija otvorena - poruke-hub-putanja")
        var connectionUrl = SignalrRService.connection!.connectionId ;
        console.log(connectionUrl);
      })
    ;
    SignalrRService.connection = connection;

  }

  getConnectionId():string{
    if (SignalrRService.connection == null){
        this.otvori_ws_konekciju();
    }
    return SignalrRService.connection!.connectionId!;
  }
}
