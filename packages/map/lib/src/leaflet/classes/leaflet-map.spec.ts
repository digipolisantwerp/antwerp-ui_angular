import { LeafletMap, MODES } from './leaflet-map';
import { LeafletMapOptions, LeafletLayer } from '../types/leaflet.types';
import { MapService } from '../services/map.service';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LeafletControlComponent, LeafletDragControlComponent } from '..';
import { PLATFORM_ID } from '@angular/core';
import { LatLng } from 'leaflet';

describe('The leaflet map', () => {
	const element = document.body;
	let mapSpy;
	let onInitSpy;
	let mapService: MapService;
	const options: LeafletMapOptions = {
		zoom: 13,
		center: new LatLng(51.215, 4.425),
		onAddFeature: () => {
		},
		onEditFeature: () => {
		},
	};
	let map: LeafletMap;
	const fakeLayer: LeafletLayer = {
		name: 'Fake Layer',
		url: 'fakeUrl',
		options: {},
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				LeafletDragControlComponent,
				LeafletControlComponent,
			],
			providers: [
				MapService,
				{
					provide: PLATFORM_ID,
					useValue: 'browser',
				},
			],
		}).compileComponents();
		mapService = TestBed.get(MapService);
		map = new LeafletMap(options, mapService);
		mapSpy = spyOn(mapService.L, 'map').and.callThrough();
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
			mapService = TestBed.get(MapService);
			addLayerSpy = spyOn(map.map, 'addLayer').and.callFake(() => fakeLayer);
			tileLayerSpy = spyOn(mapService.L, 'TileLayer').and.callFake(() => fakeLayer);
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
			mapService = TestBed.get(MapService);
			addLayerSpy = spyOn(map.map, 'addLayer').and.callFake(() => fakeLayer);
			featureLayerSpy = jasmine.createSpy('featureLayer').and.returnValue(fakeLayer);
			spyOnProperty(mapService.esri, 'featureLayer', 'get').and.returnValue(featureLayerSpy);
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
			expect(fitBoundsSpy).toHaveBeenCalledWith(mapService.L.latLngBounds(([getBounds()])));
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
			expect(setViewSpy).toHaveBeenCalledWith(options.center, 16);
		});
	});

	describe('when switching to dragging', () => {
		it('should update the mode to dragging', () => {
			map.switchToDragging();
			expect(map.mode).toEqual(MODES.DRAGGING);
		});
	});

	describe('when drawing polygons it', () => {
		it('should update the mode to drawing polygon', () => {
			map.draw(MODES.DRAWING_POLYGON);
			expect(map.mode).toEqual(MODES.DRAWING_POLYGON);
		});

		it('should handle the draw polygon', () => {
			const addLayerSpy = spyOn(map.map, 'addLayer');
			const onAddFeatureSpy = spyOn(map.options, 'onAddFeature');
			const switchToDraggingSpy = spyOn(map, 'switchToDragging');
			const enableDrawSpy = spyOn(map.map.pm, 'enableDraw');
			map.draw(MODES.DRAWING_POLYGON);
			map.handleDraw({layer: fakeLayer});
			expect(enableDrawSpy).toHaveBeenCalled();
			expect(addLayerSpy).toHaveBeenCalledWith(fakeLayer);
			expect(onAddFeatureSpy).toHaveBeenCalledWith(fakeLayer);
			expect(switchToDraggingSpy).toHaveBeenCalledTimes(2);
		});
	});

	describe('when drawing lines it', () => {
		it('should update the mode to drawing line', () => {
			map.draw(MODES.DRAWING_LINE);
			expect(map.mode).toEqual(MODES.DRAWING_LINE);
		});

		it('should handle the draw line', () => {
			const addLayerSpy = spyOn(map.map, 'addLayer');
			const onAddFeatureSpy = spyOn(map.options, 'onAddFeature');
			const switchToDraggingSpy = spyOn(map, 'switchToDragging');
			const enableDrawSpy = spyOn(map.map.pm, 'enableDraw');
			map.draw(MODES.DRAWING_LINE);
			map.handleDraw({layer: fakeLayer});
			expect(enableDrawSpy).toHaveBeenCalled();
			expect(addLayerSpy).toHaveBeenCalledWith(fakeLayer);
			expect(onAddFeatureSpy).toHaveBeenCalledWith(fakeLayer);
			expect(switchToDraggingSpy).toHaveBeenCalledTimes(2);
		});
	});

	describe('when drawing circle it', () => {
		it('should update the mode to drawing circle', () => {
			map.draw(MODES.DRAWING_CIRCLE);
			expect(map.mode).toEqual(MODES.DRAWING_CIRCLE);
		});

		it('should handle the draw circle', () => {
			const addLayerSpy = spyOn(map.map, 'addLayer');
			const onAddFeatureSpy = spyOn(map.options, 'onAddFeature');
			const switchToDraggingSpy = spyOn(map, 'switchToDragging');
			const enableDrawSpy = spyOn(map.map.pm, 'enableDraw');
			map.draw(MODES.DRAWING_CIRCLE);
			map.handleDraw({layer: fakeLayer});
			expect(enableDrawSpy).toHaveBeenCalled();
			expect(addLayerSpy).toHaveBeenCalledWith(fakeLayer);
			expect(onAddFeatureSpy).toHaveBeenCalledWith(fakeLayer);
			expect(switchToDraggingSpy).toHaveBeenCalledTimes(2);
		});
	});

	describe('when drawing rectangle it', () => {
		it('should update the mode to drawing rectangle', () => {
			map.draw(MODES.DRAWING_RECTANGLE);
			expect(map.mode).toEqual(MODES.DRAWING_RECTANGLE);
		});

		it('should handle the draw rectangle', () => {
			const addLayerSpy = spyOn(map.map, 'addLayer');
			const onAddFeatureSpy = spyOn(map.options, 'onAddFeature');
			const switchToDraggingSpy = spyOn(map, 'switchToDragging');
			const enableDrawSpy = spyOn(map.map.pm, 'enableDraw');
			map.draw(MODES.DRAWING_RECTANGLE);
			map.handleDraw({layer: fakeLayer});
			expect(enableDrawSpy).toHaveBeenCalled();
			expect(addLayerSpy).toHaveBeenCalledWith(fakeLayer);
			expect(onAddFeatureSpy).toHaveBeenCalledWith(fakeLayer);
			expect(switchToDraggingSpy).toHaveBeenCalledTimes(2);
		});
	});

	describe('when editing a layer', () => {
		const editingLayer = {
			pm: {
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
			const enableSpy = spyOn(editingLayer.pm, 'enable');
			const onSpy = spyOn(editingLayer, 'on');
			map.startEditLayer(editingLayer);
			expect(enableSpy).toHaveBeenCalled();
			expect(onSpy).toHaveBeenCalled();
		});

		it('should disable the layers editing mode', () => {
			const disableSpy = spyOn(editingLayer.pm, 'disable');
			const offSpy = spyOn(editingLayer, 'off');
			map.startEditLayer(editingLayer);
			map.stopEditLayer();
			expect(disableSpy).toHaveBeenCalled();
			expect(offSpy).toHaveBeenCalled();
		});
	});

	describe('when adding markers', () => {
		it('should add a normal marker', () => {
			const markerSpy = spyOn(mapService.L, 'marker').and.callThrough();
			map.addMarker(options.center);
			expect(markerSpy).toHaveBeenCalledWith(options.center, undefined);
		});

		it('should add an html marker', () => {
			const divIconSpy = spyOn(mapService.L, 'divIcon').and.callThrough();
			const markerSpy = spyOn(mapService.L, 'marker').and.callThrough();
			map.addHtmlMarker(options.center, '<p>Test</p>');
			expect(divIconSpy).toHaveBeenCalledWith({html: '<p>Test</p>', className: 'aui-leaflet__html-icon'});
			expect(markerSpy).toHaveBeenCalled();
		});
	});
});
