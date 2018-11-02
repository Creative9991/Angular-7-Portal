import { Component, OnInit,Input } from '@angular/core';
import {Selectdata} from '../selectdata';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
@Input() selectData:Selectdata;
@Input() ivalue:string;
  constructor() { }
  ngOnInit() {
   
  }

}