import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-maticna-knjiga',
  templateUrl: './student-maticna-knjiga.component.html',
  styleUrls: ['./student-maticna-knjiga.component.css']
})
export class StudentMaticnaKnjigaComponent implements OnInit {
  public studentid: any;

  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentid=this.activatedRoute.snapshot.params["studentid"];


  }

}
