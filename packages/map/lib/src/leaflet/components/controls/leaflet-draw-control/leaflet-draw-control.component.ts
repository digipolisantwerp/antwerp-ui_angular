import { Component } from '@angular/core';

import { LeafletMap, MODES } from '../../../classes/leaflet-map';
import { LeafletDrawOptions } from '../../../types/leaflet.types';

@Component({
	selector: 'aui-leaflet-draw-control',
	templateUrl: './leaflet-draw-control.component.html',
})
export class LeafletDrawControlComponent {
	map: LeafletMap;
	modes = MODES;
	baseOptions: LeafletDrawOptions = {
		snappable: true,
		snapDistance: 10,
		snapMiddle: true,
		tooltips: true,
	};


	lineConfig: LeafletDrawOptions = {
		...this.baseOptions,
		allowSelfIntersection: true,
		templineStyle: {
			color: '#03A9F4',
		},
		hintlineStyle: {
			color: '#03A9F4',
			dashArray: [5, 5],
		},
	};

	polygonConfig: LeafletDrawOptions = {
		...this.baseOptions,
		allowSelfIntersection: false,
		templineStyle: {
			color: '#689F38',
		},
		hintlineStyle: {
			color: '#689F38',
			dashArray: [5, 5],
		},
	};

	circleConfig: LeafletDrawOptions = {
		...this.baseOptions,
		templineStyle: {
			color: '#757575',
		},
	};
}
