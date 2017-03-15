import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire, AngularFireDatabase} from "angularfire2";

@Component({
  selector: 'app-arduino-image-captures',
  templateUrl: './arduino-image-captures.component.html',
  styleUrls: ['./arduino-image-captures.component.css']
})
export class ArduinoImageCapturesComponent implements OnInit {

  images:any;
 imageData: FirebaseListObservable<any>;
  constructor(public af: AngularFire) {

    this.imageData = af.database.list('image_captures/1175702');
    this.imageData.map(imageDat => imageDat[0])
        .subscribe(
            dat => this.images = dat
        );
  }
    removeImageAndData(){
        this.imageData.remove(this.images);
    }
  ngOnInit() {
  }

}
