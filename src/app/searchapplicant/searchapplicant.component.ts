import { Component, OnInit } from '@angular/core';
import { ConstantdataService } from '../constantdata.service';
import {ExistingApplicant} from '../existingApplicantData'


@Component({
  selector: 'app-searchapplicant',
  templateUrl: './searchapplicant.component.html',
  styleUrls: ['./searchapplicant.component.css']
})
export class SearchapplicantComponent implements OnInit {
  ExistingDataAssign:ExistingApplicant[];
  ExistingData:ExistingApplicant[];
  constructor(private constantdataService: ConstantdataService) { 
    this.getApplicantData();
  }

  ngOnInit() {
    console.log(this.ExistingData);
  }
  search(data:string):void{
    if(data.length>0){
      this.ExistingData=this.ExistingDataAssign.filter(item=>item.name.toUpperCase().indexOf(data.trim().toUpperCase())>=0)
    }else{
       this.ExistingData=this.ExistingDataAssign;
    }
  }
  getApplicantData():void{
    this.constantdataService.getExistingApplicant().subscribe(dataObj => {this.ExistingDataAssign = dataObj; this.ExistingData=this.ExistingDataAssign;});

  }
}