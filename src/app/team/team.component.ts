import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
team: Selectdata = {
id :'team',
name : 'Team',
values: ['340B','IMG','Medical Economics','PDS','PHP','Quality','R&D','System Services','T&S']
}
  constructor() { }

  ngOnInit() {
  }

}
