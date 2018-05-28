import { LeafletLayer } from './types/leaflet.types';

export const baseMapWorldGray: LeafletLayer = {
	name: 'Base world gray',
	url: 'http://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
	options: {
		subdomains: ['server', 'services'],
		maxNativeZoom: 16,
	},
};

export const baseMapAntwerp: LeafletLayer = {
	name: 'Base antwerp',
	url: 'http://basemap.antwerpen.be/tile/{z}/{y}/{x}',
	options: {
		minZoom: 13,
		maxNativeZoom: 19,
		maxZoom: 21,
	},
};
