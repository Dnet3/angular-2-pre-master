import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import {ArduinoService} from "../arduino.service";
import {Arduino} from "../arduino";

@Component({
  selector: 'app-arduino-edit',
  templateUrl: './arduino-edit.component.html',
  styles: []

})
export class ArduinoEditComponent implements OnInit, OnDestroy {
  arduinoForm: FormGroup;
  private arduinoIndex: number;
  private arduino: Arduino;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private arduinoService: ArduinoService,
              private formBuilder: FormBuilder,
              private router: Router) {}


  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          if (params.hasOwnProperty('id')) {
            this.isNew = false;
            this.arduinoIndex = +params['id'];
            this.arduino = this.arduinoService.getArduino(this.arduinoIndex);
          } else {
            this.isNew = true;
            this.arduino = null;
          }
          this.initForm();
        }
    );
  }


  onSubmit() {
    const newArduino = this.arduinoForm.value;
    if (this.isNew){
      this.arduinoService.addArduino(newArduino);

    }else {
      this.arduinoService.editArduino(this.arduino, newArduino);
    }
    this.navigateBack();
  }

  onCancel(){
    this.navigateBack();
  }

  onAddItem(accounts: string, email_address: string, name: string) {
    (<FormArray>this.arduinoForm.controls['client']).push(
        new FormGroup({

          accounts: new FormControl( accounts, Validators.required),
          email_address: new FormControl( email_address, Validators.required),
          name: new FormControl( name, Validators.required)


        })
    );
  }
  onRemoveItem(index: number) {
    (<FormArray>this.arduinoForm.controls['client']).removeAt(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {

    let arduinoAddress = '';
    let arduinoDrivers = '';
    let arduinoManagers = '';
    let arduinoPhoneNumber = '';
    let arduinoType = '';


    let arduinoClients: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.arduino.hasOwnProperty('clients')) {
        for (let i = 0; i < this.arduino.clients.length; i++) {
          arduinoClients.push(
              new FormGroup({


                accounts: new FormControl(this.arduino.clients[i].accounts,  Validators.required),
                email_address: new FormControl(this.arduino.clients[i].email_address,  Validators.required),
                name: new FormControl(this.arduino.clients[i].name,  Validators.required)

              })
          );
        }
      }

      arduinoAddress = this.arduino.address;
      arduinoDrivers = this.arduino.drivers;
      arduinoManagers = this.arduino.managers;
      arduinoPhoneNumber = this.arduino.phone_number;
      arduinoType = this.arduino.type;

    }
    this.arduinoForm = this.formBuilder.group({

      address: [arduinoAddress, Validators.required],
      drivers: [arduinoDrivers, Validators.required],
      managers: [arduinoManagers, Validators.required],
      phone_number: [arduinoPhoneNumber, Validators.required],
      type: [arduinoType, Validators.required],

      clients: arduinoClients
    });
  }

}
