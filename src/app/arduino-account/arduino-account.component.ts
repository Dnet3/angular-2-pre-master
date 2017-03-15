import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire, AngularFireDatabase} from "angularfire2";

@Component({
  selector: 'app-arduino-account',
  templateUrl: './arduino-account.component.html',
  styleUrls: ['./arduino-account.component.css']
})
export class ArduinoAccountComponent implements OnInit {
  firstAccount:any;
  userList:any;
  arduinoType:any;

  users: FirebaseListObservable<any>;
  data: FirebaseListObservable<any>;
  arduino: FirebaseListObservable<any>;
  constructor(public af: AngularFire, db: AngularFireDatabase) {

    this.data = af.database.list('accounts');
    this.users = af.database.list('users');
    this.arduino = af.database.list('arduinos');

    this.data.map(accounts => accounts[0])
        .subscribe(
            dat => this.firstAccount = dat
        );

    this.users.map(username => username[0])
        .subscribe(
            us => this.userList = us
        );

    this.arduino.map(arduins => arduins[0])
        .subscribe(
            type => this.arduinoType = type
        );
  }

  removeArduino(){
    this.arduino.remove(this.arduinoType);
  }


  removeAccount(){
    this.data.remove(this.firstAccount);
  }

  listUpdate(){
    this.data.update(this.firstAccount, {name: ''});
  }

  removeUser(){
    this.users.remove(this.userList);
  }

  ngOnInit() {
  }

}
