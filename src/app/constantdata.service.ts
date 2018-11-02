import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ExistingApplicant } from './existingApplicantData'
import { Element } from './tableData'

@Injectable()
export class ConstantdataService {
  loginData:any;
  selectedlogin: any = [{
    username: 'user1',
    password: 'user1',
    action: 'default1'
  }];
  constructor(private http:HttpClient) {
    this.getLoginData();
   }
  getExistingApplicant(): Observable<ExistingApplicant[]> {
    return this.http.get<any[]>('api/existingApplicantObj') 
  }
  getLoginData():void{
     this.http.get<any[]>('api/loginContent').subscribe(loginContent => this.loginData = loginContent)
  }
  getTables(): Observable<Element[]> {
   return this.http.get<any[]>('api/tabledataObject') 
  }
  setTables(data): void {
  }
  checkvalidLogin(data: any): any {
    this.selectedlogin = this.loginData.filter(item => item.username == data.username && item.password == data.password)
    return this.selectedlogin;
  }
}