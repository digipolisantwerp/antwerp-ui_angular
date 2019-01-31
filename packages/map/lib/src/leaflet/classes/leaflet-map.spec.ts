import { LeafletMap } from './leaflet-map';
import { LeafletMapOptions, LeafletLayer } from '../types/leaflet.types';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import { fakeAsync, tick } from '@angular/core/testing';

describe('The leaflet map', () => {
	const element = document.body;
	let mapSpy;
	let onInitSpy;
	const options: LeafletMapOptions = {
		zoom: 13,
		center: [51.215, 4.425],
		onAddLine: () => {
		},
		onAddPolygon: () => {
		},
	};
	const map: LeafletMap = new LeafletMap(options);
	const fakeLayer: LeafletLayer = {
		name: 'Fake Layer',
		url: 'fakeUrl',
		options: {},
	};

	beforeEach(() => {
		mapSpy = spyOn(L, 'map').and.callThrough();
		const fake = {
			onInit: () => {
			},
		};
		onInitSpy = spyOn(fake, 'onInit');
		map.onInit.subscribe(fake.onInit);
		map.init(element);
	});

	afterEach(() => {
		map.map.remove();
	});

	it('should expose the options', () => {
		expect(map.options).toEqual(options);
	});

	describe('when initialized', () => {
		it('should create a leaflet map', () => {
			expect(mapSpy).toHaveBeenCalledWith(
				element,
				{
					center: options.center,
					zoom: options.zoom,
					attributionControl: false,
					zoomControl: false,
					scrollWheelZoom: false,
				}
			);
		});

		it('should emit the init event', () => {
			expect(onInitSpy).toHaveBeenCalled();
		});
	});

	describe('when adding a tile layer', () => {
		let addLayerSpy;
		let tileLayerSpy;
		let returnedLayer;

		beforeEach(() => {
			addLayerSpy = spyOn(map.map, 'addLayer').and.callFake(() => fakeLayer);
			tileLayerSpy = spyOn(L, 'TileLayer').and.callFake(() => fakeLayer);
			returnedLayer = map.addTileLayer(fakeLayer);
		});

		it('should return the layer instance', () => {
			expect(returnedLayer).toBeDefined();
		});

		it('should create a new tile layer', () => {
			expect(tileLayerSpy).toHaveBeenCalledWith(fakeLayer.url, fakeLayer.options);
		});

		it('should add the tile layer to the map', () => {
			expect(addLayerSpy).toHaveBeenCalledWith(fakeLayer);
		});
	});

	describe('when adding a feature layer', () => {
		let addLayerSpy;
		let featureLayerSpy;
		let returnedLayer;

		beforeEach(() => {
			addLayerSpy = spyOn(map.map, 'addLayer').and.callFake(() => fakeLayer);
			featureLayerSpy = spyOn(esri, 'featureLayer').and.callFake(() => fakeLayer);
			returnedLayer = map.addFeatureLayer(fakeLayer);
		});

		it('should return the layer instance', () => {
			expect(returnedLayer).toBeDefined();
		});

		it('should create a new feature layer', () => {
			expect(featureLayerSpy).toHaveBeenCalledWith(fakeLayer);
		});

		it('should add the feature layer to the map', () => {
			expect(addLayerSpy).toHaveBeenCalledWith(fakeLayer);
		});
	});

	describe('when removing a layer', () => {
		let removeLayerSpy;

		beforeEach(() => {
			removeLayerSpy = spyOn(map.map, 'removeLayer');
		});

		it('should remove the layer from the map', () => {
			map.removeLayer(fakeLayer);
			expect(removeLayerSpy).toHaveBeenCalledWith(fakeLayer);
		});
	});

	describe('when fitting feature layers', () => {
		const once = (event, cb) => {
			cb();
		};
		const getBounds = () => {
			return options.center;
		};
		const eachFeature = (cb) => {
			[
				{getBounds},
				{getBounds},
				{getBounds},
			].forEach(cb);
		};
		const featureLayers = [
			{once, eachFeature},
			{once, eachFeature},
		];
		let fitBoundsSpy;

		beforeEach(() => {
			fitBoundsSpy = spyOn(map.map, 'fitBounds');
		});

		it('should fit all features in the viewport', () => {
			map.fitFeatureLayers(featureLayers);
			expect(fitBoundsSpy).toHaveBeenCalledTimes(1);
			expect(fitBoundsSpy).toHaveBeenCalledWith(L.latLngBounds(([getBounds()])));
		});
	});

	describe('when toggling full screen', () => {
		let invalidateSizeSpy;
		beforeEach(() => {
			invalidateSizeSpy = spyOn(map.map, 'invalidateSize');
		});

		it('should toggle the full screen mode', () => {
			const originalValue = map.fullScreen;
			map.toggleFullScreen();
			expect(map.fullScreen).not.toEqual(originalValue);
		});

		it('should update the map', fakeAsync(() => {
			map.toggleFullScreen();
			tick();
			expect(invalidateSizeSpy).toHaveBeenCalled();
		}));
	});

	describe('when zooming in and out', () => {
		let zoomInSpy;
		let zoomOutSpy;
		beforeEach(() => {
			zoomInSpy = spyOn(map.map, 'zoomIn').and.callThrough();
			zoomOutSpy = spyOn(map.map, 'zoomOut').and.callThrough();
		});

		it('should zoom in', () => {
			map.zoomIn();
			expect(zoomInSpy).toHaveBeenCalled();
		});

		it('should zoom out', () => {
			map.zoomOut();
			expect(zoomOutSpy).toHaveBeenCalled();
		});

		it('should update the zoom-in disabled state', () => {
			let maxZoom = 13;
			spyOn(map.map, 'getMaxZoom').and.callFake(() => maxZoom);
			expect(map.zoomInDisabled()).toEqual(true);
			maxZoom = 14;
			expect(map.zoomInDisabled()).toEqual(false);
		});

		it('should update the zoom-out disabled state', () => {
			let minZoom = 13;
			spyOn(map.map, 'getMinZoom').and.callFake(() => minZoom);
			expect(map.zoomOutDisabled()).toEqual(true);
			minZoom = 12;
			expect(map.zoomOutDisabled()).toEqual(false);
		});
	});

	describe('when navigating to the current location', () => {
		let locateSpy;
		let setViewSpy;

		beforeEach(() => {
			locateSpy = spyOn(map.map, 'locate');
			setViewSpy = spyOn(map.map, 'setView');
			spyOn(map.map, 'on').and.callFake((event, cb) => {
				cb({
					latlng: options.center,
				});
			});
		});

		it('should find the current location', () => {
			map.locate(16);
			expect(locateSpy).toHaveBeenCalled();
		});

		it('should zoom to the current location', () => {
			map.locate(16);
			expect(setViewSpy).toHaveBeenCalledWith(options.center, 19);
		});
	});

	describe('when switching to dragging', () => {
		it('should update the mode to dragging', () => {
			map.switchToDragging();
			expect(map.mode).toEqual(map.modes.DRAGGING);
		});
	});

	describe('when switching to drawing polygons', () => {
		it('should update the mode to drawing polygons', () => {
			map.switchToPolygon();
			expect(map.mode).toEqual(map.modes.DRAWING_POLYGON);
		});

		it('should handle the draw polygon', () => {
			const addLayerSpy = spyOn(map.map, 'addLayer');
			const onAddPolygonSpy = spyOn(map.options, 'onAddPolygon');
			const switchToDraggingSpy = spyOn(map, 'switchToDragging');
			map.switchToPolygon();
			map.handleDrawPolygon({layer: fakeLayer});
			expect(addLayerSpy).toHaveBeenCalledWith(fakeLayer);
			expect(onAddPolygonSpy).toHaveBeenCalledWith(fakeLayer);
			expect(switchToDraggingSpy).toHaveBeenCalledTimes(2);
		});
	});

	describe('when switching to drawing lines', () => {
		it('should update the mode to drawing lines', () => {
			map.switchToLine();
			expect(map.mode).toEqual(map.modes.DRAWING_LINE);
		});

		it('should handle the draw line', () => {
			const addLayerSpy = spyOn(map.map, 'addLayer');
			const onAddLineSpy = spyOn(map.options, 'onAddLine');
			const switchToDraggingSpy = spyOn(map, 'switchToDragging');
			map.switchToLine();
			map.handleDrawLine({layer: fakeLayer});
			expect(addLayerSpy).toHaveBeenCalledWith(fakeLayer);
			expect(onAddLineSpy).toHaveBeenCalledWith(fakeLayer);
			expect(switchToDraggingSpy).toHaveBeenCalledTimes(2);
		});
	});

	describe('when editing a layer', () => {
		const editingLayer = {
			editing: {
				enable: () => {
				},
				disable: () => {
				},
			},
			options: {},
			on: () => {
			},
			off: () => {
			},
		};

		it('should enable the layers editing mode', () => {
			const enableSpy = spyOn(editingLayer.editing, 'enable');
			const onSpy = spyOn(editingLayer, 'on');
			map.startEditLayer(editingLayer);
			expect(enableSpy).toHaveBeenCalled();
			expect(onSpy).toHaveBeenCalled();
		});

		it('should disable the layers editing mode', () => {
			const disableSpy = spyOn(editingLayer.editing, 'disable');
			const offSpy = spyOn(editingLayer, 'off');
			map.startEditLayer(editingLayer);
			map.stopEditLayer();
			expect(disableSpy).toHaveBeenCalled();
			expect(offSpy).toHaveBeenCalled();
		});
	});

	describe('when adding markers', () => {
		it('should add a normal marker', () => {
			const markerSpy = spyOn(L, 'marker').and.callThrough();
			map.addMarker(options.center);
			expect(markerSpy).toHaveBeenCalledWith(options.center, undefined);
		});

		it('should add an html marker', () => {
			const divIconSpy = spyOn(L, 'divIcon').and.callThrough();
			const markerSpy = spyOn(L, 'marker').and.callThrough();
			map.addHtmlMarker(options.center, '<p>Test</p>');
			expect(divIconSpy).toHaveBeenCalledWith({html: '<p>Test</p>', className: 'aui-leaflet__html-icon'});
			expect(markerSpy).toHaveBeenCalled();
		});
	});
});
