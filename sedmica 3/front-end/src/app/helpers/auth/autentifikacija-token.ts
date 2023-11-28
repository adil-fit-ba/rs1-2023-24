import {KorisnickiNalog} from "./korisnicki-nalog";


export interface AutentifikacijaToken {
  id: number
  vrijednost: string
  korisnickiNalogId: number
  korisnickiNalog: KorisnickiNalog
  vrijemeEvidentiranja: string
  ipAdresa: string
}

