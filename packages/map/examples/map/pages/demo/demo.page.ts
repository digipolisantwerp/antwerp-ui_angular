import { Component } from '@angular/core';
import { LeafletMap } from '@acpaas-ui/ngx-components/map';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent {

	public leafletMap: LeafletMap = new LeafletMap({
		zoom: 13, // default zoom level
		center: [51.215, 4.425], // default center point
		onAddPolygon: (layer) => {},
		onAddLine: (layer) => {},
		onEditFeature: (feature) => {},
});

}
