import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status: Selectdata = {
    id: 'status',
    name: 'Status',
    values: ['Hired','In-Process','Pass','Withdrawn']
  }
  constructor() { }

  ngOnInit() {
  }
}