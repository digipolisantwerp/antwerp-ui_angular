import {Component} from '@angular/core';

import {LeafletMap} from '../../../classes/leaflet-map';

@Component({
  selector: 'aui-leaflet-zoom-control',
  templateUrl: './leaflet-zoom-control.component.html',
})
export class LeafletZoomControlComponent {
  map: LeafletMap;
}
