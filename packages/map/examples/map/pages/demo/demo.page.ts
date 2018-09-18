import { Component, OnInit } from '@angular/core';
import { LeafletMap, baseMapWorldGray, baseMapAntwerp } from '@acpaas-ui/ngx-components/map';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent implements OnInit {

	public leafletMap: LeafletMap = new LeafletMap({
		zoom: 13, // default zoom level
		center: [51.215, 4.425], // default center point
		onAddPolygon: (layer) => {},
		onAddLine: (layer) => {},
		onEditFeature: (feature) => {},
	});

	public ngOnInit(): void {
		this.leafletMap.onInit.subscribe(() => {
			this.leafletMap.addTileLayer(baseMapWorldGray);
			this.leafletMap.addTileLayer(baseMapAntwerp);
	 });
	}
}
