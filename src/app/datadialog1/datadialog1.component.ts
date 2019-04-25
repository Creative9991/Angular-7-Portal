import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dialogcontent1 } from './dialogcontent1'
import { Element } from '../tableData'
import { ConstantdataService } from '../constantdata.service';
@Component({
  selector: 'app-datadialog1',
  templateUrl: './datadialog1.component.html',
  styleUrls: ['./datadialog1.component.css']
})
export class Datadialog1Component implements OnInit {
  @Input() isEditsec: boolean;
  @Input() tableContent: any;
  @Output() tableContentStatusChange = new EventEmitter<Element>();
  @Input() itemid: Number;
  dataObj: Element = {
    id : 0,
    interviewdate : '',
    interviewtime: '',
    interviewtype : '',
    primaryinterviewer: ''

  }
  constructor(public dialog: MatDialog, public constantdataService: ConstantdataService,) { }

  ngOnInit() {
  }
  openDialog(): void {
    var data;
    if (!!this.itemid) {
      data = this.tableContent.data.filter(item => item.id == this.itemid)[0]
    } else {
      data = this.dataObj;
    }
    let dialogRef = this.dialog.open(Dialogcontent1, {
      width: '450px',
      height : '500px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        result.interviewdate = (result.interviewdate.getMonth() + 1) + '/' + result.interviewdate.getDate() + '/' + result.interviewdate.getFullYear()
        this.tableContentStatusChange.emit(result);
      }
    });
  }
}
