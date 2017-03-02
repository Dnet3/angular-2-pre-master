import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import {Arduino} from "./arduino";
import {Client} from "../client-list/client";

@Injectable()
export class ArduinoService {
  arduinoChanged = new EventEmitter<Arduino[]>();

  private arduinos: Arduino[] = [
      new Arduino('','','','','', [
          new Client('','','')
      ])
  ];

  constructor(private http: Http) {}

  getArduinos() {
    return this.arduinos;
  }

  getArduino(id: number) {
    return this.arduinos[id];
  }

  deleteArduino(arduino: Arduino) {
    this.arduinos.splice(this.arduinos.indexOf(arduino), 1);
  }

  addArduino(arduino: Arduino) {
    this.arduinos.push(arduino);
  }

  editArduino(oldArduino: Arduino, newArduino: Arduino) {
    this.arduinos[this.arduinos.indexOf(oldArduino)] = newArduino;
  }

  storeData() {
    const body = JSON.stringify(this.arduinos);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://web-test-71b57.firebaseio.com/web-test.json', body, {headers: headers});

  }

  fetchData() {
    return this.http.get('https://web-test-71b57.firebaseio.com/web-test.json')

        .map((response: Response) => response.json())
        .subscribe(
            (data: Arduino[]) => {
              this.arduinos = data;
              this.arduinoChanged.emit(this.arduinos);
            }
        );
  }

}
