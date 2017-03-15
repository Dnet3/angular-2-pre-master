import { RouterModule, Routes } from "@angular/router";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import { ArduinoAccountComponent } from './arduino-account/arduino-account.component';
import { ArduinoImageCapturesComponent } from './arduino-image-captures/arduino-image-captures.component';

import { GmapComponent } from './gmap/gmap.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegistrationPageComponent},
    { path: 'arduino-account', component: ArduinoAccountComponent},
    { path: 'arduino-image-captures', component: ArduinoImageCapturesComponent},
    { path: 'gmap', component: GmapComponent},

];

export const routing = RouterModule.forRoot(routes);