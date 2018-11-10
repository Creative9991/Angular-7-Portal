import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class LocaldatasericeService implements InMemoryDbService {
  createDb() {
    const tabledataObject = [{
      id: 1,
      interviewdate: '12/19/2017',
      interviewtime: '8.30AM',
      interviewtype: 'Phone',
      primaryinterviewer: 'John Glenn'
    },
    {
      id: 2,
      interviewdate: '01/19/2018',
      interviewtime: '9.30AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Christopher'
    },
    {
      id: 3,
      interviewdate: '01/06/2018',
      interviewtime: '11.30AM',
      interviewtype: 'In-person',
      primaryinterviewer: 'Jenni'
    },
    {
      id: 4,
      interviewdate: '01/09/2018',
      interviewtime: '9.40AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Cathy'
    }
    ]
    const existingApplicantObj = [{
      id: 1,
      name: 'Christopher',
      skill: 'BAC',
      Date: "01/03/2019"
    },
    {
      id: 2,
      name: 'Alfred',
      skill: 'Manager',
      Date: "01/03/2019"
    },
    {
      id: 3,
      name: 'James',
      skill: 'Analyst-IV',
      Date: "01/03/2019"
    },
    {
      id: 4,
      name: 'Tom',
      skill: 'R&D',
      Date: "01/03/2019"
    },
    {
      id: 5,
      name: 'Roger',
      skill: 'Analyst-I',
      Date: "01/03/2019"
    }
    ]
    const loginContent = [{
      username: 'user1',
      password: 'user1'
    },
    {
      username: 'user2',
      password: 'user2'
    },
    {
      username: 'user3',
      password: 'user3'
    },
    {
      username: 'user4',
      password: 'user4'
    },
    {
      username: 'user5',
      password: 'user5'
    },
    {
      username: 'user6',
      password: 'user6'
    }]
    return { 'tabledataObject':tabledataObject,'existingApplicantObj':existingApplicantObj,'loginContent':loginContent };
  }
}