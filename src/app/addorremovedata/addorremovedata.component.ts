import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-addorremovedata',
  templateUrl: './addorremovedata.component.html',
  styleUrls: ['./addorremovedata.component.css']
})
export class AddorremovedataComponent implements OnInit {
  @Input() datavalue:any;
  newvalue:string;
  constructor() { }
  ngOnInit() {
  }
  addData():void{
    this.datavalue.values.push(this.newvalue);
  }
  removeData(value:string):void{
    this.datavalue.values=this.datavalue.values.filter(item=>item.trim().toUpperCase()!=value.trim().toUpperCase())
  }
}