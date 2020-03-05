import {Component} from '@angular/core';

import {LeafletMap} from '../../../classes/leaflet-map';

@Component({
  selector: 'aui-leaflet-drag-control',
  templateUrl: './leaflet-drag-control.component.html',
})
export class LeafletDragControlComponent {
  map: LeafletMap;
}
