import { Component } from '@angular/core';

import { LeafletMap } from '../../../classes/leaflet-map';

@Component({
	selector: 'aui-leaflet-locate-control',
	templateUrl: './leaflet-locate-control.component.html',
})
export class LeafletLocateControlComponent {
	map: LeafletMap;
}
