import {Component} from '@angular/core';

import {LeafletMap} from '../../../classes/leaflet-map';

@Component({
  selector: 'aui-leaflet-fullscreen-control',
  templateUrl: './leaflet-fullscreen-control.component.html',
})
export class LeafletFullscreenControlComponent {
  map: LeafletMap;
}
