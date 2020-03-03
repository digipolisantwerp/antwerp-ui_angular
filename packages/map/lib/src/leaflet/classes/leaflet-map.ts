import { EventEmitter } from '@angular/core';

import { MapService } from '../services/map.service';
import { LeafletDrawOptions, LeafletLayer, LeafletMapOptions } from '../types/leaflet.types';

import { get } from 'lodash-es';

export enum MODES {
	DRAGGING = 'Dragging',
	DRAWING_CIRCLE = 'Circle',
	DRAWING_LINE = 'Line',
	DRAWING_POLYGON = 'Polygon',
	DRAWING_RECTANGLE = 'Rectangle',
}

export class LeafletMap {
	// public properties
	public map: any;
	public locating = false;
	public fullScreen = false;
	public onInit: EventEmitter<any> = new EventEmitter();
	public mode: MODES = MODES.DRAGGING;

	// private properties
	private initialized = false;
	private editingLayer: any;

	constructor(
		public options: LeafletMapOptions,
		public mapService: MapService
	) {
	}

	// LIFECYCLE
	init(element: any) {
		if (this.mapService.isAvailable()) {
			this.initialized = true;
			this.map = this.mapService.L.map(element, {
				center: this.options.center,
				zoom: this.options.zoom,
				attributionControl: false,
				zoomControl: false,
				scrollWheelZoom: false,
			});
			this.map.pm.setLang(this.options.language || 'nl');
			this.onInit.emit();
		}
	}

	// LAYERS
	public addTileLayer(layer: LeafletLayer): void {
		if (this.mapService.isAvailable()) {
			const tileLayer = new this.mapService.L.TileLayer(layer.url, layer.options);
			this.map.addLayer(tileLayer);
			return tileLayer;
		}
	}

	public addFeatureLayer(config: any): void {
		if (this.mapService.isAvailable()) {
			const featureLayer = new this.mapService.esri.featureLayer(config);
			this.map.addLayer(featureLayer);
			return featureLayer;
		}
	}

	public addGeoJSON(geoJSON: any, config: any): void {
		if (this.mapService.isAvailable()) {
			const geoJSONLayer = this.mapService.L.geoJSON(geoJSON, config);
			geoJSONLayer.addTo(this.map);
			return geoJSONLayer;
		}
	}

	public fitFeatureLayers(featureLayers: any[]): void {
		if (this.mapService.isAvailable()) {
			const bounds = this.mapService.L.latLngBounds(([]));
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
	}

	public removeLayer(layer: any): void {
		this.map.removeLayer(layer);
	}

	// FULLSCREEN
	public toggleFullScreen(): void {
		this.fullScreen = !this.fullScreen;
		setTimeout(() => {
			this.update();
		});
	}

	public update(): void {
		if (this.initialized) {
			this.map.invalidateSize();
		}
	}

	// ZOOMING
	public zoomIn(): void {
		if (this.initialized) {
			this.map.zoomIn();
		}
	}

	public zoomInDisabled(): boolean {
		if (this.initialized) {
			return this.map.getMaxZoom() <= this.map.getZoom();
		}

		return true;
	}

	public zoomOut(): void {
		if (this.initialized) {
			this.map.zoomOut();
		}
	}

	public zoomOutDisabled(): boolean {
		if (this.initialized) {
			return this.map.getMinZoom() >= this.map.getZoom();
		}

		return true;
	}

	// CENTERING
	public locate(zoomLevel: number): void {
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

	public setView(center: any, zoom: number): void {
		if (this.initialized) {
			this.map.setView(center, zoom);
		}
	}

	// DRAWING
	public draw(mode: MODES, config: LeafletDrawOptions = { allowSelfIntersection: false, snapDistance: 10}): void {
		if (this.mapService.isAvailable) {
			this.switchToDragging();
			this.mode = mode;

			this.map.pm.enableDraw(mode, { ...config, tooltips: get(this.options, 'tooltips', true) });
			this.map.on('pm:create', this.handleDraw);
			this.map.on('pm:drawend', () => this.switchToDragging(true));
		}
	}

	// EDIT: LAYER
	public startEditLayer(layer: any): void {
		this.stopEditLayer();
		this.editingLayer = layer;

		this.editingLayer.pm.enable({
			snappable: true,
			snapDistance: 10,
			allowSelfIntersection: false,
		});

		this.editingLayer.on('pm:markerdragend', () => {
			this.editingLayer.feature = this.editingLayer.toGeoJSON();
			this.options.onEditFeature(this.editingLayer.toGeoJSON());
		});
	}

	public startDragMode(): void {
		this.map.pm.toggleGlobalDragMode();
	}

	// MARKERS
	public addMarker(position: any, options?: any): void {
		if (this.mapService.isAvailable()) {
			return this.mapService.L.marker(position, options).addTo(this.map);
		}
	}

	public addHtmlMarker(position: any, html: string): void {
		if (this.mapService.isAvailable()) {
			const customIcon = this.mapService.L.divIcon({ html: html, className: 'aui-leaflet__html-icon' });
			return this.mapService.L.marker(position, {
				icon: customIcon,
			}).addTo(this.map);
		}
	}

	// CALLBACK: functions
	switchToDragging = (eventCallback: boolean = false) => {
		if (this.mapService.isAvailable()) {
			this.map.pm.disableDraw(this.mode);
			this.mode = MODES.DRAGGING;

			if (eventCallback) {
				this.map.off('pm:drawend');
			}
		}
	}

	stopEditLayer = () => {
		if (this.editingLayer) {
			this.editingLayer.pm.disable();
			this.editingLayer.off('pm:markerdragend');
		}
	}

	handleDraw = (e: any) => {
		this.map.off('pm:drawend');

		this.map.addLayer(e.layer);
		this.options.onAddFeature(e.layer);
		this.switchToDragging();

		this.map.off('pm:create');
	}
}
