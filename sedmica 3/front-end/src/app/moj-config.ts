import {AutentifikacijaToken} from "./sedmica7-login/authLoginResponse";

export class MojConfig {
  static adresa_servera = "http://localhost:5174"
  //static adresa_servera = "https://api.p2338.app.fit.ba"

  static get_http_opcije = () => {
    let token = window.localStorage.getItem("my-auth-token") ?? "";
    let obj:AutentifikacijaToken = JSON.parse(token)
    return {
      headers: {
        "my-auth-token": obj.vrijednost
      }
    }
  }
}
