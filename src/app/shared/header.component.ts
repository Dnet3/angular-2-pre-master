import { Component } from "@angular/core";

import { AuthService } from "./auth.service";
import {ArduinoService} from "../arduino/arduino.service";

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isAuthenticated = false;

    constructor(private authService: AuthService, private arduinoService: ArduinoService) {
        this.authService.isAuthenticated().subscribe(
            authStatus => this.isAuthenticated = authStatus
        );
    }

    isAuth() {
        return this.isAuthenticated;
    }

    onLogout() {
        this.authService.logout();
    }

    onStore() {
        this.arduinoService.storeData().subscribe(
            data => console.log(data),
            error => console.error(error)
        );
    }

    onFetch() {
        this.arduinoService.fetchData();
    }
}
