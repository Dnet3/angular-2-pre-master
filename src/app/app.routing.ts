import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./unprotected/signup.component";
import { SigninComponent } from "./unprotected/signin.component";

import { ARDUINO_ROUTES } from "./arduino/arduinos.routes"
import {ArduinoComponent} from "./arduino/arduino.component";
import {ClientListComponent} from "./client-list/client-list.component";
import {AuthGuard} from "./shared/auth.guard";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/signup', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'arduino', component: ArduinoComponent, children: ARDUINO_ROUTES},
    {path: 'client-list', component: ClientListComponent, canActivate: [AuthGuard]}



];

export const routing = RouterModule.forRoot(APP_ROUTES);
