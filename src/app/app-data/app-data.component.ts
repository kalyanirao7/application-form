import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.sass']
})
export class AppDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var applicationType = JSON.stringify(sessionStorage.getItem('applicationType'));
    console.log('applicationType', applicationType);

    var amount = JSON.stringify(sessionStorage.getItem('amount'));
    console.log('amount', amount);

    var applicationStatus = JSON.stringify(sessionStorage.getItem('applicationStatus'));
    console.log('applicationStatus', applicationStatus);

    var gender = JSON.stringify(sessionStorage.getItem('gender'));
    console.log('gender', gender);

    var firstName = JSON.stringify(sessionStorage.getItem('firstName'));
    console.log('firstName', firstName);

    var lastName = JSON.stringify(sessionStorage.getItem('lastName'));
    console.log('lastName', lastName);
  }

}
