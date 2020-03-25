import {EventEmitter} from '@angular/core';
import {MapService} from '../services/map.service';

import {LeafletLayer, LeafletMapOptions} from '../types/leaflet.types';

export class LeafletMap {
  public map;
  public locating = false;
  public fullScreen = false;
  public onInit = new EventEmitter();
  public modes = {
    DRAGGING: 0,
    DRAWING_POLYGON: 1,
    DRAWING_LINE: 2,
  };
  public mode = this.modes.DRAGGING;
  private initialized = false;
  private polygonDrawer: any;
  private lineDrawer: any;
  private editingLayer: any;

  constructor(public options: LeafletMapOptions,
              public mapService: MapService) {
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
      this.onInit.emit();
    }
  }

  // LAYERS
  addTileLayer(layer: LeafletLayer) {
    if (this.mapService.isAvailable()) {
      const tileLayer = new this.mapService.L.TileLayer(layer.url, layer.options);
      this.map.addLayer(tileLayer);
      return tileLayer;
    }
  }

  addFeatureLayer(config: any) {
    if (this.mapService.isAvailable()) {
      const featureLayer = new this.mapService.esri.featureLayer(config);
      this.map.addLayer(featureLayer);
      return featureLayer;
    }
  }

  addGeoJSON(geoJSON: any, config: any) {
    if (this.mapService.isAvailable()) {
      const geoJSONLayer = this.mapService.L.geoJSON(geoJSON, config);
      geoJSONLayer.addTo(this.map);
      return geoJSONLayer;
    }
  }

  fitFeatureLayers(featureLayers: any[]) {
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

  setView(center: any, zoom: number) {
    if (this.initialized) {
      this.map.setView(center, zoom);
    }
  }

  // DRAWING
  switchToDragging = () => {
    if (this.mapService.isAvailable()) {
      this.mode = this.modes.DRAGGING;
      if (this.polygonDrawer) {
        this.polygonDrawer.disable();
        this.polygonDrawer = undefined;
      }
      if (this.lineDrawer) {
        this.lineDrawer.disable();
        this.lineDrawer = undefined;
      }
      this.map.off(this.mapService.L.Draw.Event.CREATED);
      this.map.off(this.mapService.L.Draw.Event.DRAWSTOP);
    }
  }

  // DRAWING: POLYGON
  switchToPolygon() {
    if (this.mapService.isAvailable()) {
      this.switchToDragging();
      this.mode = this.modes.DRAWING_POLYGON;
      if (!this.polygonDrawer) {
        this.polygonDrawer = new this.mapService.L.Draw.Polygon(this.map, {
          shapeOptions: this.options.polygonColor ? {
            color: this.options.polygonColor,
          } : {},
        });
        this.polygonDrawer.enable();
        this.map.on(this.mapService.L.Draw.Event.CREATED, this.handleDrawPolygon);
        this.map.on(this.mapService.L.Draw.Event.DRAWSTOP, this.switchToDragging);
      }
    }
  }

  handleDrawPolygon = (e: any) => {
    this.map.addLayer(e.layer);
    this.options.onAddPolygon(e.layer);
    this.switchToDragging();
  }

  // DRAWING: LINES
  switchToLine() {
    if (this.mapService.isAvailable()) {
      this.switchToDragging();
      this.mode = this.modes.DRAWING_LINE;
      if (!this.lineDrawer) {
        this.lineDrawer = new this.mapService.L.Draw.Polyline(this.map, {
          shapeOptions: this.options.lineColor ? {
            color: this.options.lineColor,
          } : {},
        });
        this.lineDrawer.enable();
        this.map.on(this.mapService.L.Draw.Event.CREATED, this.handleDrawLine);
        this.map.on(this.mapService.L.Draw.Event.DRAWSTOP, this.switchToDragging);
      }
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
  addMarker(position: any, options?: any) {
    if (this.mapService.isAvailable()) {
      return this.mapService.L.marker(position, options).addTo(this.map);
    }
  }

  addHtmlMarker(position: any, html: string) {
    if (this.mapService.isAvailable()) {
      const customIcon = this.mapService.L.divIcon({html, className: 'aui-leaflet__html-icon'});
      return this.mapService.L.marker(position, {
        icon: customIcon,
      }).addTo(this.map);
    }
  }
}
