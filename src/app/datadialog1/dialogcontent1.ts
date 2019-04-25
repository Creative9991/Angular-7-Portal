import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'app-dialogcontent1',
    templateUrl: 'dialogcontent1.html',
    styleUrls: ['./dialogcontent1.css']

})
export class Dialogcontent1 {
     constructor(public dialogRef: MatDialogRef<Dialogcontent1>,@Inject(MAT_DIALOG_DATA) public data: any) { }
      skill: any = {
        id: 'Skill',
        name: 'Skill',
        values: ['Frontend Developer', 'SAS Developer', 'Java Developer','Q&A']
     }
     applicant: any = {
        id: 'Applicant',
        name: 'Applicant',
        values: ['Christopher','Christian Bale','Alfred','Hans Zimmer','Stanely Kubrick']
     }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onSubmitClick(data):void{
        console.log(data);
        this.dialogRef.close();
   }

}