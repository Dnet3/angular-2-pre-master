import { Routes } from "@angular/router";

import { ArduinoStartComponent } from "./arduino-start.component";
import { ArduinoDetailComponent } from "./arduino-detail/arduino-detail.component";
import { ArduinoEditComponent } from "./arduino-edit/arduino-edit.component";
import {AuthGuard} from "../shared/auth.guard";


export const ARDUINO_ROUTES: Routes = [
    {path: '', component: ArduinoStartComponent, canActivate: [AuthGuard]},
    { path: 'new', component: ArduinoEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: ArduinoDetailComponent, canActivate: [AuthGuard] },
    { path: ':id/edit', component: ArduinoEditComponent, canActivate: [AuthGuard] }

];