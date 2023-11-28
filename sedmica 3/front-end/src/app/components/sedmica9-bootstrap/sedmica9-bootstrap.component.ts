import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sedmica9-bootstrap',
  templateUrl: './sedmica9-bootstrap.component.html',
  styleUrls: ['./sedmica9-bootstrap.component.css']
})
export class Sedmica9BootstrapComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
