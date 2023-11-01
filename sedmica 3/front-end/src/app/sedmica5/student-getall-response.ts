export interface StudentGetAllResponse{
  ime: string
  prezime: string
  brojIndeksa: string
  opstinaRodjenjaID: number
  opstinaRodjenja: StudentGetAllResponseOpstinaRodjenja
  datumRodjenja: string
  id: number
  korisnickoIme: string
  slikaKorisnika: string
  isNastavnik: boolean
  isStudent: boolean
  isAdmin: boolean
  isProdekan: boolean
  isDekan: boolean
  isStudentskaSluzba: boolean
}

export interface StudentGetAllResponseOpstinaRodjenja{
  id: number
  description: string
  drzavaID: number
  drzava: StudentGetAllResponseDrzava
}


export interface StudentGetAllResponseDrzava {
  id: number
  naziv: string
  skracenica: any
}
