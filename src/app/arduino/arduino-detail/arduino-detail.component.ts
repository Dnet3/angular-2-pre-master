import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {Arduino} from "../arduino";
import {ClientListService} from "../../client-list/client-list.service";
import {ArduinoService} from '../arduino.service';

@Component({
  selector: 'app-arduino-detail',
  templateUrl: './arduino-detail.component.html'

})
export class ArduinoDetailComponent implements OnInit, OnDestroy {
  selectedArduino: Arduino;
  private arduinoIndex: number;
  private subscription: Subscription;

  constructor(private adc: ClientListService,
              private router: Router,
              private route: ActivatedRoute,
              private arduinoService: ArduinoService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.arduinoIndex = params['id'];
          this.selectedArduino = this.arduinoService.getArduino(this.arduinoIndex);
        }
    );
  }

  onEdit() {
    this.router.navigate(['/arduino', this.arduinoIndex, 'edit']);
  }

  onDelete() {
    this.arduinoService.deleteArduino(this.selectedArduino);
    this.router.navigate(['/arduino']);
  }
  onAddToClientList(){
    this.adc.addItems(this.selectedArduino.clients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
