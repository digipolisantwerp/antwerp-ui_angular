import { LatLng, PathOptions } from 'leaflet';

export interface LeafletLayer {
	name: string;
	url: string;
	options?: any;
}

export interface LeafletMapOptions {
	center: LatLng;
	zoom: number;
	language?:  'en' | 'de' | 'it' | 'ru' | 'ro' | 'es' | 'fr' | 'pt_br' | 'id' | 'zh' | 'nl' | 'pl' | 'sv';
	tooltips?: boolean;
	onAddFeature?: Function;
	onEditFeature?: Function;
}

export interface LeafletDrawOptions {
	snappable?:	boolean;
	snapDistance?: number;
	snapMiddle?: boolean;
	tooltips?: boolean;
	allowSelfIntersection?: boolean;
	templineStyle?:	PathOptions;
	hintlineStyle?:	PathOptions;
	cursorMarker?: boolean;
}
