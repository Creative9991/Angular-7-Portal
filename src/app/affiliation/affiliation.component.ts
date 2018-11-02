import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {
  affiliation: Selectdata = {
    id: 'affiliation',
    name: 'Affiliation',
    values: ['1st Solution', 'Health Innovation', 'Klein Harsh', 
    'Kristi Welton-Kidder', 'Magpie Health', 'None','Rydek','Soliant','Synchorny']
  }
  constructor() { }

  ngOnInit() {
  }

}
