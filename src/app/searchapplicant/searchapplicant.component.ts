import { Component, OnInit } from '@angular/core';
import { ConstantdataService } from '../constantdata.service';
import {ExistingApplicant} from '../existingApplicantData';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Element } from '../tableData'
import { tabledataObject } from '../constant'



@Component({
  selector: 'app-searchapplicant',
  templateUrl: './searchapplicant.component.html',
  styleUrls: ['./searchapplicant.component.css']
})
export class SearchapplicantComponent implements OnInit {
  ExistingDataAssign:ExistingApplicant[];
  ExistingData:ExistingApplicant[];
  dataSource:any;
  dataObject: any[]=[];
  constructor(private constantdataService: ConstantdataService) { 
    this.getApplicantData();
  }

  ngOnInit() {
    this.constantdataService.getExiTables().subscribe(dataobj =>{
      this.dataObject=dataobj; 
      this.dataSource = new MatTableDataSource<Element>(this.dataObject);
    });
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
  tableContentStatusChange(data:Element){
 
    var findindex=this.dataObject.findIndex(item=>item.id==data.id)
     if(findindex>=0){
      this.dataObject[findindex]=JSON.parse(JSON.stringify(data));
    }else{
      this.dataObject.push(JSON.parse(JSON.stringify(data)));
    }
    this.dataSource = new MatTableDataSource<Element>(this.dataObject);
  }
}