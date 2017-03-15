import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {AF} from "./providers/af";
import {TabViewModule} from 'primeng/primeng';
import { routing } from "./app.routes";
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';

import {Arduino} from "./arduino";
import { ArduinoAccountComponent } from './arduino-account/arduino-account.component';
import { ArduinoImageCapturesComponent } from './arduino-image-captures/arduino-image-captures.component';
import { ArduinoJourneysComponent } from './arduino-journeys/arduino-journeys.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GmapComponent } from './gmap/gmap.component';
import { CommonModule } from '@angular/common';

export const firebaseConfig = {
  apiKey: "AIzaSyBLagVugFSNhJlXBzBSekzoHseOArT7GaQ",
  authDomain: "lammsite-fc813.firebaseapp.com",
  databaseURL: "https://lammsite-fc813.firebaseio.com",
  storageBucket: "lammsite-fc813.appspot.com",
  messagingSenderId: "482319848745"
};


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
   routing,
    FormsModule,TabViewModule,AccordionModule,DataTableModule, SharedModule,CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRFRnui7AAzq2-_HVCcSyNHm24j1nDNJ8'
    })
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent, RegistrationPageComponent,  ArduinoAccountComponent, ArduinoImageCapturesComponent, ArduinoJourneysComponent, GmapComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF]
})
export class AppModule {}
