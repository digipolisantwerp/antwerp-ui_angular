import { LatLngExpression } from 'leaflet';

export interface LeafletLayer {
	name: string;
	url: string;
	options?: any;
}

export interface LeafletMapOptions {
	center: LatLngExpression;
	zoom: number;
	lineColor?: string;
	onAddLine?: Function;
	polygonColor?: string;
	onAddPolygon?: Function;
	onEditFeature?: Function;
}
