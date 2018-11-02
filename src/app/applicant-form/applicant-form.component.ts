import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Selectdata } from '../selectdata';


@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ApplicantFormComponent implements OnInit {
  status: Selectdata = {
    id: 'status',
    name: 'Status',
    values: ['Hired', 'In Process', 'Pass', 'Withdrawn']
  }
  /*affiliation: Selectdata = {
    id: 'affiliation',
    name: 'Affiliation',
    values: ['1st Solution','Health Innovation','Klein Harsh','Kristi Welton-Kidder',
     'Magpie Health', 'None','Rydek','Soliant','Synchorny']
  }*/
  position: Selectdata = {
    id: 'position',
    name: 'Position',
    values: ['Analyst I','Analyst II','Analyst III','Analyst IV','BAC','Director',
     'Informaticist','Informaticist,Lead','Informaticist,Principle','Informaticist,Senior',
     'Manager','Scientist','Scientist,Lead','Scientist,Priciple','Scientist,Senior']
  }
  AlternativePosition: Selectdata = {
    id: 'Alternative Position',
    name: 'Alternative Position',
    values: ['Analyst I','Analyst II','Analyst III','Analyst IV','BAC','Director',
     'Informaticist','Informaticist,Lead','Informaticist,Principle','Informaticist,Senior',
     'Manager','Scientist','Scientist,Lead','Scientist,Priciple','Scientist,Senior']
  }
  Team: Selectdata = {
    id : 'Team',
    name : 'Team',
    values: ['340B','IMG','Medical Economics','PDS','PHP','Quality','R&D','System Services','T&S']
  }
  ReviewedBySoyal: Selectdata = {
    id: 'Reviewed By Soyal',
    name: 'Reviewed By Soyal',
    values: ['Yes','No']
  }
  Senttodept: Selectdata = {
    id: 'Sent to department',
    name: 'Sent to department',
    values: ['Information Management Governace','PHP','PDS','Quality','Research & Development'
    ,'System Services','Tools and Solutions']
  }
  Assigned: Selectdata = {
    id : 'Assigned',
    name: 'Assigned',
    values : ['Sarah Rootman','Sarah Rootman','Sarah Rootman','Sarah Rootman','Sarah Rootman','Sarah Rootman']
  }
  FromARecruiter: Selectdata = {
    id : 'From A Recruiter',
    name: 'From A Recruiter',
    values : ['1st Solution','Health Innovation','Klein Harsh','Kristi Welton-Kidder',
    'Magpie Health', 'None','Rydek','Soliant','Synchorny']
  }
  OutOfState: Selectdata = {
    id : 'Out Of State',
    name: 'Is The Candidate Out Of State ?',
    values : ['Yes','No']
  }
  InterviewPanel : Selectdata = {
    id : 'Interview Panel',
    name : 'Members Of The Interview Panel',
    values : ['Someone','Someone','Someone']
  }
  Minutes : Selectdata = {
    id : '1:1 30 Minutes',
    name : '1:1 30 Minutes',
    values : ['Yes','No']
  }
  SummaryCompleted : Selectdata = {
    id : 'Summary Completed',
    name : 'Candidate Summary Analysis Been Completed ?',
    values : ['Yes','No']
  }

  constructor() { }
  ngOnInit() {

  }
  
}
