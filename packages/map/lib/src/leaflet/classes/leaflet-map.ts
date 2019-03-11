import { EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import 'leaflet-draw';

import { LeafletLayer, LeafletMapOptions } from '../types/leaflet.types';

export class LeafletMap {
	private initialized = false;
	private polygonDrawer: any;
	private lineDrawer: any;
	private editingLayer: any;
	public map: L.Map;
	public locating = false;
	public fullScreen = false;
	public onInit = new EventEmitter();
	public modes = {
		DRAGGING: 0,
		DRAWING_POLYGON: 1,
		DRAWING_LINE: 2,
	};
	public mode = this.modes.DRAGGING;

	constructor(public options: LeafletMapOptions) {
	}

	// LIFECYCLE
	init(element: any) {
		this.initialized = true;
		this.map = L.map(element, {
			center: this.options.center,
			zoom: this.options.zoom,
			attributionControl: false,
			zoomControl: false,
			scrollWheelZoom: false,
		});
		this.onInit.emit();
	}

	// LAYERS
	addTileLayer(layer: LeafletLayer) {
		const tileLayer = new L.TileLayer(layer.url, layer.options);
		this.map.addLayer(tileLayer);
		return tileLayer;
	}

	addFeatureLayer(config: any) {
		const featureLayer = new esri.featureLayer(config);
		this.map.addLayer(featureLayer);
		return featureLayer;
	}

	addGeoJSON(geoJSON: any, config: any) {
		const geoJSONLayer = L.geoJSON(geoJSON, config);
		geoJSONLayer.addTo(this.map);
		return geoJSONLayer;
	}

	fitFeatureLayers(featureLayers: any[]) {
		const bounds = L.latLngBounds(([]));
		let counter = 0;
		featureLayers.forEach((featureLayer) => {
			featureLayer.once('load', () => {
				counter++;
				featureLayer.eachFeature((layer: any) => {
					bounds.extend(layer.getBounds());
				});

				if (counter === featureLayers.length && bounds.isValid()) {
					this.map.fitBounds(bounds);
				}
			});
		});
	}

	removeLayer(layer: any) {
		this.map.removeLayer(layer);
	}

	// FULLSCREEN
	toggleFullScreen() {
		this.fullScreen = !this.fullScreen;
		setTimeout(() => {
			this.update();
		});
	}

	update() {
		if (this.initialized) {
			this.map.invalidateSize();
		}
	}

	// ZOOMING
	zoomIn() {
		if (this.initialized) {
			this.map.zoomIn();
		}
	}

	zoomInDisabled() {
		if (this.initialized) {
			return this.map.getMaxZoom() <= this.map.getZoom();
		}
		return true;
	}

	zoomOut() {
		if (this.initialized) {
			this.map.zoomOut();
		}
	}

	zoomOutDisabled() {
		if (this.initialized) {
			return this.map.getMinZoom() >= this.map.getZoom();
		}
		return true;
	}

	// CENTERING
	locate(zoomLevel: number) {
		if (!this.locating && this.initialized) {
			this.locating = true;
			this.map.locate();
			this.map.on('locationfound', (e: any) => {
				this.locating = false;
				this.map.setView(e.latlng, zoomLevel);
				this.map.off('locationfound');
			});
		}
	}

	setView(center: L.LatLngExpression, zoom: number) {
		if (this.initialized) {
			this.map.setView(center, zoom);
		}
	}

	// DRAWING
	switchToDragging = () => {
		this.mode = this.modes.DRAGGING;
		if (this.polygonDrawer) {
			this.polygonDrawer.disable();
			this.polygonDrawer = undefined;
		}
		if (this.lineDrawer) {
			this.lineDrawer.disable();
			this.lineDrawer = undefined;
		}
		this.map.off(L.Draw.Event.CREATED);
		this.map.off(L.Draw.Event.DRAWSTOP);
	}

	// DRAWING: POLYGON
	switchToPolygon() {
		this.switchToDragging();
		this.mode = this.modes.DRAWING_POLYGON;
		if (!this.polygonDrawer) {
			this.polygonDrawer = new L.Draw['Polygon'](this.map, {
				shapeOptions: this.options.polygonColor ? {
					color: this.options.polygonColor,
				} : {},
			});
			this.polygonDrawer.enable();
			this.map.on(L.Draw.Event.CREATED, this.handleDrawPolygon);
			this.map.on(L.Draw.Event.DRAWSTOP, this.switchToDragging);
		}
	}

	handleDrawPolygon = (e: any) => {
		this.map.addLayer(e.layer);
		this.options.onAddPolygon(e.layer);
		this.switchToDragging();
	}

	// DRAWING: LINES
	switchToLine() {
		this.switchToDragging();
		this.mode = this.modes.DRAWING_LINE;
		if (!this.lineDrawer) {
			this.lineDrawer = new L.Draw['Polyline'](this.map, {
				shapeOptions: this.options.lineColor ? {
					color: this.options.lineColor,
				} : {},
			});
			this.lineDrawer.enable();
			this.map.on(L.Draw.Event.CREATED, this.handleDrawLine);
			this.map.on(L.Draw.Event.DRAWSTOP, this.switchToDragging);
		}
	}

	handleDrawLine = (e: any) => {
		this.map.addLayer(e.layer);
		this.options.onAddLine(e.layer);
		this.switchToDragging();
	}

	// EDIT: LAYER
	startEditLayer(layer: any) {
		this.stopEditLayer();
		this.editingLayer = layer;
		// TODO: temp workaround for chrome 62
		// https://github.com/Leaflet/Leaflet.draw/issues/804
		this.editingLayer.options.editing = this.editingLayer.options.editing || (this.editingLayer.options.editing = {});
		this.editingLayer.editing.enable();

		this.map.on('click', this.stopEditLayer);

		this.editingLayer.on('edit', () => {
			this.editingLayer.feature = this.editingLayer.toGeoJSON();
			this.options.onEditFeature(this.editingLayer.toGeoJSON());
		});
	}

	stopEditLayer = () => {
		if (this.editingLayer) {
			this.editingLayer.editing.disable();
			this.editingLayer.off('edit');
		}
		this.map.off('click', this.stopEditLayer);
	}

	// MARKERS
	addMarker(position: L.LatLngExpression, options?: any) {
		return L.marker(position, options).addTo(this.map);
	}

	addHtmlMarker(position: L.LatLngExpression, html: string) {
		const customIcon = L.divIcon({ html: html, className: 'aui-leaflet__html-icon' });
		return L.marker(position, {
			icon: customIcon,
		}).addTo(this.map);
	}
}
