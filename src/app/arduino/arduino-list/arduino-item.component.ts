import {Component, Input} from '@angular/core';
import {Arduino} from '../arduino';
@Component({
    selector: 'app-arduino-item',
    templateUrl: 'arduino-item.component.html'

})
export class ArduinoItemComponent {
    @Input() arduino: Arduino;
    @Input() arduinoId: number;


    ngOnInit() {
    }

}