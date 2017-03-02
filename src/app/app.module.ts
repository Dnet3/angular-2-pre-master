import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";

import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from "./shared/auth.service";
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { ArduinoComponent } from './arduino/arduino.component';
import { ArduinoListComponent } from './arduino/arduino-list/arduino-list.component';
import { ArduinoDetailComponent } from './arduino/arduino-detail/arduino-detail.component';
import {ArduinoItemComponent} from './arduino/arduino-list/arduino-item.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientListAddComponent } from './client-list/client-list-add.component';
import { ArduinoEditComponent } from './arduino/arduino-edit/arduino-edit.component';
import {ArduinoStartComponent} from "./arduino/arduino-start.component";
import { DropdownDirective } from './dropdown.directive';
import {ClientListService} from './client-list/client-list.service';
import {ArduinoService} from './arduino/arduino.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,

    ArduinoComponent,
    ArduinoListComponent,
    ArduinoDetailComponent,
      ArduinoItemComponent,
      ClientListComponent,
    ClientListAddComponent,
      ArduinoEditComponent,
    ArduinoStartComponent,
    DropdownDirective,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,routing, ReactiveFormsModule
  ],
  providers: [AuthGuard,
    AuthService, ClientListService, ArduinoService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
