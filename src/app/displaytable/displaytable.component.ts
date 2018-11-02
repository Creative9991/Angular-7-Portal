import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Element } from '../tableData'
import { tabledataObject } from '../constant'
import { ConstantdataService } from '../constantdata.service';


@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.css']
})
export class DisplaytableComponent implements OnInit {
  dataObject: any[]=[];
  dataSource:any;
  constructor(private constantdataService: ConstantdataService) {
   
  }
  ngOnInit() {
    this.constantdataService.getTables().subscribe(dataobj =>{
      this.dataObject=dataobj; 
      this.dataSource = new MatTableDataSource<Element>(this.dataObject);
      this.dataSource.paginator = this.paginator;
    });
  }
  displayColumnHeader = ['id', 'Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'Edit sec'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
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
  deleteItem(id:any){
       this.dataSource.data=this.dataSource.data.filter(item=>item.id!=id)
     console.log('id',this.dataSource)
  }
}