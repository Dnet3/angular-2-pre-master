import {Component, OnInit} from '@angular/core';
import {Arduino} from "../arduino";
import {ArduinoService} from "../arduino.service";


@Component({
  selector: 'app-arduino-list',
  templateUrl: 'arduino-list.component.html'

})
export class ArduinoListComponent implements OnInit {
  arduinos: Arduino[] = [];

  constructor(private arduinoService: ArduinoService ) { }

  ngOnInit() {
    this.arduinos = this.arduinoService.getArduinos();
    this.arduinoService.arduinoChanged.subscribe(
        (arduinos: Arduino[]) => this.arduinos = arduinos
    );

  }


  //event.preventDefault();


}
