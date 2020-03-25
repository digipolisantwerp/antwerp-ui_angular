import {Component} from '@angular/core';

import {LeafletMap} from '../../../classes/leaflet-map';

@Component({
  selector: 'aui-leaflet-draw-control',
  templateUrl: './leaflet-draw-control.component.html',
})
export class LeafletDrawControlComponent {
  map: LeafletMap;
}
