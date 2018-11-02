import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
position : Selectdata = {
  id: 'Position',
  name: 'Position',
  values: ['Analyst I','Analyst II','Analyst III','Analyst IV','BAC','Director',
   'Informaticist','Informaticist,Lead','Informaticist,Principle','Informaticist,Senior',
   'Manager','Scientist','Scientist,Lead','Scientist,Principle','Scientist,Senior']
}
  constructor() { }

  ngOnInit() {
  }

}
