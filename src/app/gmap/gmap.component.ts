import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";


@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';

  coords: any;

  coordin: FirebaseListObservable<any>;

  zoom: number = 10;
  lat: number = 51.898753;
  lng: number = -8.470631;

  constructor(public af: AngularFire) {
    this.coordin = af.database.list('image_captures/666666');
    this.coordin.map(locDat => locDat[0])
        .subscribe(
            dat => this.coords = dat
        );



  }

  ngOnInit() {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }



  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}







// just an interface for type safety.


