import { Component, OnInit } from '@angular/core';
import {Selectdata} from '../selectdata';

@Component({
  selector: 'app-alternativeposition',
  templateUrl: './alternativeposition.component.html',
  styleUrls: ['./alternativeposition.component.css']
})
export class AlternativepositionComponent implements OnInit {
  alternativeposition : Selectdata = {
    id: 'alternative position',
    name: 'Alternative Position',
    values: ['Analyst I','Analyst II','Analyst III', 'Analyst IV', 'BAC','Director', 'Informaticist', 
    'Informaticist,Lead','Informaticist,Principle','Informaticist,Senior','Manager','Scientist',
    'Scientist,Lead','Scientist,Principle','Scientist,Senior']
  }
  constructor() { }

  ngOnInit() {
  }

}
