import { EventEmitter, Component, Input, ViewChild, ContentChild, ViewEncapsulation, NgModule } from '@angular/core';
import { Draw, map, TileLayer, geoJSON, latLngBounds, marker, divIcon } from 'leaflet';
import { featureLayer } from 'esri-leaflet';
import 'leaflet-draw';
import { __spread } from 'tslib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletMap = /** @class */ (function () {
    function LeafletMap(options) {
        var _this = this;
        this.options = options;
        this.initialized = false;
        this.locating = false;
        this.fullScreen = false;
        this.onInit = new EventEmitter();
        this.modes = {
            DRAGGING: 0,
            DRAWING_POLYGON: 1,
            DRAWING_LINE: 2,
        };
        this.mode = this.modes.DRAGGING;
        // DRAWING
        this.switchToDragging = function () {
            _this.mode = _this.modes.DRAGGING;
            if (_this.polygonDrawer) {
                _this.polygonDrawer.disable();
                _this.polygonDrawer = undefined;
            }
            if (_this.lineDrawer) {
                _this.lineDrawer.disable();
                _this.lineDrawer = undefined;
            }
            _this.map.off(Draw.Event.CREATED);
            _this.map.off(Draw.Event.DRAWSTOP);
        };
        this.handleDrawPolygon = function (e) {
            _this.map.addLayer(e.layer);
            _this.options.onAddPolygon(e.layer);
            _this.switchToDragging();
        };
        this.handleDrawLine = function (e) {
            _this.map.addLayer(e.layer);
            _this.options.onAddLine(e.layer);
            _this.switchToDragging();
        };
        this.stopEditLayer = function () {
            if (_this.editingLayer) {
                _this.editingLayer.editing.disable();
                _this.editingLayer.off('edit');
            }
            _this.map.off('click', _this.stopEditLayer);
        };
    }
    // LIFECYCLE
    /**
     * @param {?} element
     * @return {?}
     */
    LeafletMap.prototype.init = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.initialized = true;
        this.map = map(element, {
            center: this.options.center,
            zoom: this.options.zoom,
            attributionControl: false,
            zoomControl: false,
            scrollWheelZoom: false,
        });
        this.onInit.emit();
    };
    // LAYERS
    /**
     * @param {?} layer
     * @return {?}
     */
    LeafletMap.prototype.addTileLayer = /**
     * @param {?} layer
     * @return {?}
     */
    function (layer) {
        var /** @type {?} */ tileLayer = new TileLayer(layer.url, layer.options);
        this.map.addLayer(tileLayer);
        return tileLayer;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    LeafletMap.prototype.addFeatureLayer = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var /** @type {?} */ featureLayer$$1 = new featureLayer(config);
        this.map.addLayer(featureLayer$$1);
        return featureLayer$$1;
    };
    /**
     * @param {?} geoJSON
     * @param {?} config
     * @return {?}
     */
    LeafletMap.prototype.addGeoJSON = /**
     * @param {?} geoJSON
     * @param {?} config
     * @return {?}
     */
    function (geoJSON$$1, config) {
        var /** @type {?} */ geoJSONLayer = geoJSON(geoJSON$$1, config);
        geoJSONLayer.addTo(this.map);
        return geoJSONLayer;
    };
    /**
     * @param {?} featureLayers
     * @return {?}
     */
    LeafletMap.prototype.fitFeatureLayers = /**
     * @param {?} featureLayers
     * @return {?}
     */
    function (featureLayers) {
        var _this = this;
        var /** @type {?} */ bounds = latLngBounds(([]));
        var /** @type {?} */ counter = 0;
        featureLayers.forEach(function (featureLayer$$1) {
            featureLayer$$1.once('load', function () {
                counter++;
                featureLayer$$1.eachFeature(function (layer) {
                    bounds.extend(layer.getBounds());
                });
                if (counter === featureLayers.length && bounds.isValid()) {
                    _this.map.fitBounds(bounds);
                }
            });
        });
    };
    /**
     * @param {?} layer
     * @return {?}
     */
    LeafletMap.prototype.removeLayer = /**
     * @param {?} layer
     * @return {?}
     */
    function (layer) {
        this.map.removeLayer(layer);
    };
    // FULLSCREEN
    /**
     * @return {?}
     */
    LeafletMap.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fullScreen = !this.fullScreen;
        setTimeout(function () {
            _this.update();
        });
    };
    /**
     * @return {?}
     */
    LeafletMap.prototype.update = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            this.map.invalidateSize();
        }
    };
    // ZOOMING
    /**
     * @return {?}
     */
    LeafletMap.prototype.zoomIn = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            this.map.zoomIn();
        }
    };
    /**
     * @return {?}
     */
    LeafletMap.prototype.zoomInDisabled = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            return this.map.getMaxZoom() <= this.map.getZoom();
        }
        return true;
    };
    /**
     * @return {?}
     */
    LeafletMap.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            this.map.zoomOut();
        }
    };
    /**
     * @return {?}
     */
    LeafletMap.prototype.zoomOutDisabled = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            return this.map.getMinZoom() >= this.map.getZoom();
        }
        return true;
    };
    // CENTERING
    /**
     * @return {?}
     */
    LeafletMap.prototype.locate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.locating && this.initialized) {
            this.locating = true;
            this.map.locate();
            this.map.on('locationfound', function (e) {
                _this.locating = false;
                _this.map.setView(e.latlng, 19);
                _this.map.off('locationfound');
            });
        }
    };
    /**
     * @param {?} center
     * @param {?} zoom
     * @return {?}
     */
    LeafletMap.prototype.setView = /**
     * @param {?} center
     * @param {?} zoom
     * @return {?}
     */
    function (center, zoom) {
        if (this.initialized) {
            this.map.setView(center, zoom);
        }
    };
    // DRAWING: POLYGON
    /**
     * @return {?}
     */
    LeafletMap.prototype.switchToPolygon = /**
     * @return {?}
     */
    function () {
        this.switchToDragging();
        this.mode = this.modes.DRAWING_POLYGON;
        if (!this.polygonDrawer) {
            this.polygonDrawer = new Draw['Polygon'](this.map, {
                shapeOptions: this.options.polygonColor ? {
                    color: this.options.polygonColor,
                } : {},
            });
            this.polygonDrawer.enable();
            this.map.on(Draw.Event.CREATED, this.handleDrawPolygon);
            this.map.on(Draw.Event.DRAWSTOP, this.switchToDragging);
        }
    };
    // DRAWING: LINES
    /**
     * @return {?}
     */
    LeafletMap.prototype.switchToLine = /**
     * @return {?}
     */
    function () {
        this.switchToDragging();
        this.mode = this.modes.DRAWING_LINE;
        if (!this.lineDrawer) {
            this.lineDrawer = new Draw['Polyline'](this.map, {
                shapeOptions: this.options.lineColor ? {
                    color: this.options.lineColor,
                } : {},
            });
            this.lineDrawer.enable();
            this.map.on(Draw.Event.CREATED, this.handleDrawLine);
            this.map.on(Draw.Event.DRAWSTOP, this.switchToDragging);
        }
    };
    // EDIT: LAYER
    /**
     * @param {?} layer
     * @return {?}
     */
    LeafletMap.prototype.startEditLayer = /**
     * @param {?} layer
     * @return {?}
     */
    function (layer) {
        var _this = this;
        this.stopEditLayer();
        this.editingLayer = layer;
        // TODO: temp workaround for chrome 62
        // https://github.com/Leaflet/Leaflet.draw/issues/804
        this.editingLayer.options.editing = this.editingLayer.options.editing || (this.editingLayer.options.editing = {});
        this.editingLayer.editing.enable();
        this.map.on('click', this.stopEditLayer);
        this.editingLayer.on('edit', function () {
            _this.editingLayer.feature = _this.editingLayer.toGeoJSON();
            _this.options.onEditFeature(_this.editingLayer.toGeoJSON());
        });
    };
    // MARKERS
    /**
     * @param {?} position
     * @param {?=} options
     * @return {?}
     */
    LeafletMap.prototype.addMarker = /**
     * @param {?} position
     * @param {?=} options
     * @return {?}
     */
    function (position, options) {
        return marker(position, options).addTo(this.map);
    };
    /**
     * @param {?} position
     * @param {?} html
     * @return {?}
     */
    LeafletMap.prototype.addHtmlMarker = /**
     * @param {?} position
     * @param {?} html
     * @return {?}
     */
    function (position, html) {
        var /** @type {?} */ customIcon = divIcon({ html: html, className: 'aui-leaflet__html-icon' });
        return marker(position, {
            icon: customIcon,
        }).addTo(this.map);
    };
    return LeafletMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletControlComponent = /** @class */ (function () {
    function LeafletControlComponent() {
    }
    LeafletControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet-control',
                    template: "<button class=\"aui-leaflet__control a-button a-button--small has-icon\" [disabled]=\"disabled\">\n\t<i [class]=\"'fa fa-' + icon\"></i>\n</button>\n",
                },] },
    ];
    LeafletControlComponent.propDecorators = {
        icon: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return LeafletControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletDragControlComponent = /** @class */ (function () {
    function LeafletDragControlComponent() {
    }
    LeafletDragControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet-drag-control',
                    template: "<aui-leaflet-control (click)=\"map?.switchToDragging()\" icon=\"hand-paper-o\"></aui-leaflet-control>\n",
                },] },
    ];
    return LeafletDragControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletDrawControlComponent = /** @class */ (function () {
    function LeafletDrawControlComponent() {
    }
    LeafletDrawControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet-draw-control',
                    template: "<div auiFlyout>\n\t<button auiFlyoutAction class=\"a-button a-button--small has-icon\">\n\t\t<i class=\"fa fa-pencil\"></i>\n\t</button>\n\t<div auiFlyoutZone>\n\t\t<ul class=\"m-selectable-list m-selectable-list--no-border\">\n\t\t\t<li auiFlyoutClose><a (click)=\"map?.switchToPolygon()\" class=\"m-selectable-list__item\">Vorm intekenen</a></li>\n\t\t\t<li auiFlyoutClose><a (click)=\"map?.switchToLine()\" class=\"m-selectable-list__item\">Lijn/route intekenen</a></li>\n\t\t</ul>\n\t</div>\n</div>\n",
                },] },
    ];
    return LeafletDrawControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletFullscreenControlComponent = /** @class */ (function () {
    function LeafletFullscreenControlComponent() {
    }
    LeafletFullscreenControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet-fullscreen-control',
                    template: "<aui-leaflet-control (click)=\"map?.toggleFullScreen()\" icon=\"arrows-alt\"></aui-leaflet-control>\n",
                },] },
    ];
    return LeafletFullscreenControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletLocateControlComponent = /** @class */ (function () {
    function LeafletLocateControlComponent() {
    }
    LeafletLocateControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet-locate-control',
                    template: "<aui-leaflet-control icon=\"crosshairs\" (click)=\"map?.locate()\" [disabled]=\"map?.locating\"></aui-leaflet-control>\n",
                },] },
    ];
    return LeafletLocateControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletZoomControlComponent = /** @class */ (function () {
    function LeafletZoomControlComponent() {
    }
    LeafletZoomControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet-zoom-control',
                    template: "<aui-leaflet-control\n\tclass=\"aui-leaflet__zoom-control\"\n\ticon=\"plus\" (click)=\"map?.zoomIn()\"\n\t[disabled]=\"map?.zoomInDisabled()\"></aui-leaflet-control>\n<aui-leaflet-control\n\tclass=\"aui-leaflet__zoom-control\"\n\ticon=\"minus\" (click)=\"map?.zoomOut()\"\n\t[disabled]=\"map?.zoomOutDisabled()\"></aui-leaflet-control>\n",
                },] },
    ];
    return LeafletZoomControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletComponent = /** @class */ (function () {
    function LeafletComponent() {
    }
    /**
     * @return {?}
     */
    LeafletComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Make sure the map is properly rendered before initializing it
        setTimeout(function () {
            _this.leafletMap.init(_this.map.nativeElement);
        });
    };
    /**
     * @return {?}
     */
    LeafletComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        [
            this.fullScreenControl,
            this.zoomControl,
            this.locateControl,
            this.dragControl,
            this.drawControl,
        ].forEach(function (control) { return control ? control.map = _this.leafletMap : null; });
    };
    LeafletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet',
                    template: "<div class=\"aui-leaflet\" [ngClass]=\"{'is-full-screen': leafletMap.fullScreen}\">\n\t<div class=\"aui-leaflet__content\" [ngClass]=\"{'has-content': hasSidebar}\" #content>\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"aui-leaflet__wrapper\">\n\t\t<div #map class=\"aui-leaflet__map\"></div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--top-left\">\n\t\t\t<ng-content select=\"[controls][top][left]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--top-right\">\n\t\t\t<ng-content select=\"[controls][top][right]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--bottom-right\">\n\t\t\t<ng-content select=\"[controls][bottom][right]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--bottom-left\">\n\t\t\t<ng-content select=\"[controls][bottom][left]\"></ng-content>\n\t\t</div>\n\t</div>\n</div>\n",
                    styles: [".aui-leaflet{border:1px solid #b0b0b0;display:flex;height:600px;width:100%}.aui-leaflet__wrapper{flex:1;height:100%;overflow:hidden;position:relative}.aui-leaflet.is-full-screen{border:none;bottom:0;position:fixed;height:100%;left:0;right:0;top:0;z-index:10}.aui-leaflet__map{font-size:inherit;font-family:inherit;height:100%;position:relative;z-index:1}.aui-leaflet__content{background-color:#fff;overflow:auto;width:0}.aui-leaflet.is-full-screen .aui-leaflet__content{border:1px solid #b0b0b0;box-shadow:7px 7px 0 rgba(0,0,0,.1);position:absolute;left:20px;max-height:calc(100% - 160px);top:20px;width:350px;z-index:2}.aui-leaflet__content.has-content{border-right:1px solid #b0b0b0;padding:20px;width:300px}.aui-leaflet__controls{position:absolute;z-index:2}.aui-leaflet__controls--bottom-left{bottom:20px;left:20px}.aui-leaflet__controls--bottom-right{bottom:20px;right:20px}.aui-leaflet__controls--top-left{left:20px;top:20px}.aui-leaflet.is-full-screen .aui-leaflet__controls--top-left{left:390px}.aui-leaflet__controls--top-right{right:20px;top:20px}.aui-leaflet__control{float:left}.aui-leaflet__controls--top-left .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-bottom:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--bottom-right .aui-leaflet__control{margin-top:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--top-left .aui-leaflet__control{margin-right:5px}.aui-leaflet__controls--bottom-right .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-left:5px}.aui-leaflet__zoom-control{display:block}.aui-leaflet__html-icon{background-color:transparent;border:none}.leaflet-popup-content-wrapper{border:1px solid #f3f3f3!important;border-radius:0!important;box-shadow:.5rem .5rem 0 rgba(0,0,0,.1)!important;position:relative}.leaflet-popup-content-wrapper::after{content:'';position:absolute;bottom:-1px;height:1px;background-color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:22px}.leaflet-popup-content{margin:10px!important;font-size:14px}.leaflet-container{font-family:inherit!important}.leaflet-popup-close-button{right:5px!important;top:5px!important;z-index:1}"],
                    // @todo: move this to aui-kit/core branding? check with styleguide team
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    LeafletComponent.propDecorators = {
        map: [{ type: ViewChild, args: ['map',] }],
        content: [{ type: ViewChild, args: ['content',] }],
        fullScreenControl: [{ type: ContentChild, args: [LeafletFullscreenControlComponent,] }],
        zoomControl: [{ type: ContentChild, args: [LeafletZoomControlComponent,] }],
        locateControl: [{ type: ContentChild, args: [LeafletLocateControlComponent,] }],
        dragControl: [{ type: ContentChild, args: [LeafletDragControlComponent,] }],
        drawControl: [{ type: ContentChild, args: [LeafletDrawControlComponent,] }],
        leafletMap: [{ type: Input }],
        hasSidebar: [{ type: Input }]
    };
    return LeafletComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ baseMapWorldGray = {
    name: 'Base world gray',
    url: 'http://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    options: {
        subdomains: ['server', 'services'],
        maxNativeZoom: 16,
    },
};
var /** @type {?} */ baseMapAntwerp = {
    name: 'Base antwerp',
    url: 'http://basemap.antwerpen.be/tile/{z}/{y}/{x}',
    options: {
        minZoom: 13,
        maxNativeZoom: 19,
        maxZoom: 21,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    LeafletControlComponent,
    LeafletDragControlComponent,
    LeafletDrawControlComponent,
    LeafletFullscreenControlComponent,
    LeafletLocateControlComponent,
    LeafletZoomControlComponent,
    LeafletComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletModule = /** @class */ (function () {
    function LeafletModule() {
    }
    LeafletModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        FlyoutModule,
                    ],
                    declarations: __spread(Components),
                    exports: __spread(Components),
                },] },
    ];
    return LeafletModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LeafletMap, LeafletControlComponent, LeafletDragControlComponent, LeafletDrawControlComponent, LeafletFullscreenControlComponent, LeafletLocateControlComponent, LeafletZoomControlComponent, LeafletComponent, baseMapAntwerp, baseMapWorldGray, LeafletModule, Components as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9tYXAvbGliL2xlYWZsZXQvY2xhc3Nlcy9sZWFmbGV0LW1hcC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvY29udHJvbHMvbGVhZmxldC1jb250cm9sL2xlYWZsZXQtY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvY29udHJvbHMvbGVhZmxldC1kcmF3LWNvbnRyb2wvbGVhZmxldC1kcmF3LWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9tYXAvbGliL2xlYWZsZXQvY29tcG9uZW50cy9jb250cm9scy9sZWFmbGV0LWZ1bGxzY3JlZW4tY29udHJvbC9sZWFmbGV0LWZ1bGxzY3JlZW4tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wvbGVhZmxldC1sb2NhdGUtY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtem9vbS1jb250cm9sL2xlYWZsZXQtem9vbS1jb250cm9sLmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvbGVhZmxldC9sZWFmbGV0LmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2xlYWZsZXQuY29uZi50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9sZWFmbGV0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgKiBhcyBlc3JpIGZyb20gJ2VzcmktbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XG5cbmltcG9ydCB7IExlYWZsZXRMYXllciwgTGVhZmxldE1hcE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9sZWFmbGV0LnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXAge1xuXHRwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cdHByaXZhdGUgcG9seWdvbkRyYXdlcjogYW55O1xuXHRwcml2YXRlIGxpbmVEcmF3ZXI6IGFueTtcblx0cHJpdmF0ZSBlZGl0aW5nTGF5ZXI6IGFueTtcblx0cHVibGljIG1hcDogTC5NYXA7XG5cdHB1YmxpYyBsb2NhdGluZyA9IGZhbHNlO1xuXHRwdWJsaWMgZnVsbFNjcmVlbiA9IGZhbHNlO1xuXHRwdWJsaWMgb25Jbml0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbW9kZXMgPSB7XG5cdFx0RFJBR0dJTkc6IDAsXG5cdFx0RFJBV0lOR19QT0xZR09OOiAxLFxuXHRcdERSQVdJTkdfTElORTogMixcblx0fTtcblx0cHVibGljIG1vZGUgPSB0aGlzLm1vZGVzLkRSQUdHSU5HO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBMZWFmbGV0TWFwT3B0aW9ucykge1xuXHR9XG5cblx0Ly8gTElGRUNZQ0xFXG5cdGluaXQoZWxlbWVudDogYW55KSB7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5tYXAgPSBMLm1hcChlbGVtZW50LCB7XG5cdFx0XHRjZW50ZXI6IHRoaXMub3B0aW9ucy5jZW50ZXIsXG5cdFx0XHR6b29tOiB0aGlzLm9wdGlvbnMuem9vbSxcblx0XHRcdGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2UsXG5cdFx0XHR6b29tQ29udHJvbDogZmFsc2UsXG5cdFx0XHRzY3JvbGxXaGVlbFpvb206IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMub25Jbml0LmVtaXQoKTtcblx0fVxuXG5cdC8vIExBWUVSU1xuXHRhZGRUaWxlTGF5ZXIobGF5ZXI6IExlYWZsZXRMYXllcikge1xuXHRcdGNvbnN0IHRpbGVMYXllciA9IG5ldyBMLlRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKHRpbGVMYXllcik7XG5cdFx0cmV0dXJuIHRpbGVMYXllcjtcblx0fVxuXG5cdGFkZEZlYXR1cmVMYXllcihjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyBlc3JpLmZlYXR1cmVMYXllcihjb25maWcpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKGZlYXR1cmVMYXllcik7XG5cdFx0cmV0dXJuIGZlYXR1cmVMYXllcjtcblx0fVxuXG5cdGFkZEdlb0pTT04oZ2VvSlNPTjogYW55LCBjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGdlb0pTT05MYXllciA9IEwuZ2VvSlNPTihnZW9KU09OLCBjb25maWcpO1xuXHRcdGdlb0pTT05MYXllci5hZGRUbyh0aGlzLm1hcCk7XG5cdFx0cmV0dXJuIGdlb0pTT05MYXllcjtcblx0fVxuXG5cdGZpdEZlYXR1cmVMYXllcnMoZmVhdHVyZUxheWVyczogYW55W10pIHtcblx0XHRjb25zdCBib3VuZHMgPSBMLmxhdExuZ0JvdW5kcygoW10pKTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cdFx0ZmVhdHVyZUxheWVycy5mb3JFYWNoKChmZWF0dXJlTGF5ZXIpID0+IHtcblx0XHRcdGZlYXR1cmVMYXllci5vbmNlKCdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdGZlYXR1cmVMYXllci5lYWNoRmVhdHVyZSgobGF5ZXI6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGJvdW5kcy5leHRlbmQobGF5ZXIuZ2V0Qm91bmRzKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoY291bnRlciA9PT0gZmVhdHVyZUxheWVycy5sZW5ndGggJiYgYm91bmRzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZUxheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLm1hcC5yZW1vdmVMYXllcihsYXllcik7XG5cdH1cblxuXHQvLyBGVUxMU0NSRUVOXG5cdHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XG5cdFx0dGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlbjtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLmludmFsaWRhdGVTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gWk9PTUlOR1xuXHR6b29tSW4oKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLnpvb21JbigpO1xuXHRcdH1cblx0fVxuXG5cdHpvb21JbkRpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWF4Wm9vbSgpIDw9IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR6b29tT3V0KCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC56b29tT3V0KCk7XG5cdFx0fVxuXHR9XG5cblx0em9vbU91dERpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWluWm9vbSgpID49IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBDRU5URVJJTkdcblx0bG9jYXRlKCkge1xuXHRcdGlmICghdGhpcy5sb2NhdGluZyAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLmxvY2F0aW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubWFwLmxvY2F0ZSgpO1xuXHRcdFx0dGhpcy5tYXAub24oJ2xvY2F0aW9uZm91bmQnLCAoZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9jYXRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXAuc2V0VmlldyhlLmxhdGxuZywgMTkpO1xuXHRcdFx0XHR0aGlzLm1hcC5vZmYoJ2xvY2F0aW9uZm91bmQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldFZpZXcoY2VudGVyOiBMLkxhdExuZ0V4cHJlc3Npb24sIHpvb206IG51bWJlcikge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC5zZXRWaWV3KGNlbnRlciwgem9vbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRFJBV0lOR1xuXHRzd2l0Y2hUb0RyYWdnaW5nID0gKCkgPT4ge1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBR0dJTkc7XG5cdFx0aWYgKHRoaXMucG9seWdvbkRyYXdlcikge1xuXHRcdFx0dGhpcy5wb2x5Z29uRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKHRoaXMubGluZURyYXdlcikge1xuXHRcdFx0dGhpcy5saW5lRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMubGluZURyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dGhpcy5tYXAub2ZmKEwuRHJhdy5FdmVudC5DUkVBVEVEKTtcblx0XHR0aGlzLm1hcC5vZmYoTC5EcmF3LkV2ZW50LkRSQVdTVE9QKTtcblx0fVxuXG5cdC8vIERSQVdJTkc6IFBPTFlHT05cblx0c3dpdGNoVG9Qb2x5Z29uKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19QT0xZR09OO1xuXHRcdGlmICghdGhpcy5wb2x5Z29uRHJhd2VyKSB7XG5cdFx0XHR0aGlzLnBvbHlnb25EcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5Z29uJ10odGhpcy5tYXAsIHtcblx0XHRcdFx0c2hhcGVPcHRpb25zOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yID8ge1xuXHRcdFx0XHRcdGNvbG9yOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yLFxuXHRcdFx0XHR9IDoge30sXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlci5lbmFibGUoKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCB0aGlzLmhhbmRsZURyYXdQb2x5Z29uKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5EUkFXU1RPUCwgdGhpcy5zd2l0Y2hUb0RyYWdnaW5nKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVEcmF3UG9seWdvbiA9IChlOiBhbnkpID0+IHtcblx0XHR0aGlzLm1hcC5hZGRMYXllcihlLmxheWVyKTtcblx0XHR0aGlzLm9wdGlvbnMub25BZGRQb2x5Z29uKGUubGF5ZXIpO1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHR9XG5cblx0Ly8gRFJBV0lORzogTElORVNcblx0c3dpdGNoVG9MaW5lKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19MSU5FO1xuXHRcdGlmICghdGhpcy5saW5lRHJhd2VyKSB7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5bGluZSddKHRoaXMubWFwLCB7XG5cdFx0XHRcdHNoYXBlT3B0aW9uczogdGhpcy5vcHRpb25zLmxpbmVDb2xvciA/IHtcblx0XHRcdFx0XHRjb2xvcjogdGhpcy5vcHRpb25zLmxpbmVDb2xvcixcblx0XHRcdFx0fSA6IHt9LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIuZW5hYmxlKCk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuQ1JFQVRFRCwgdGhpcy5oYW5kbGVEcmF3TGluZSk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuRFJBV1NUT1AsIHRoaXMuc3dpdGNoVG9EcmFnZ2luZyk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlRHJhd0xpbmUgPSAoZTogYW55KSA9PiB7XG5cdFx0dGhpcy5tYXAuYWRkTGF5ZXIoZS5sYXllcik7XG5cdFx0dGhpcy5vcHRpb25zLm9uQWRkTGluZShlLmxheWVyKTtcblx0XHR0aGlzLnN3aXRjaFRvRHJhZ2dpbmcoKTtcblx0fVxuXG5cdC8vIEVESVQ6IExBWUVSXG5cdHN0YXJ0RWRpdExheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLnN0b3BFZGl0TGF5ZXIoKTtcblx0XHR0aGlzLmVkaXRpbmdMYXllciA9IGxheWVyO1xuXHRcdC8vIFRPRE86IHRlbXAgd29ya2Fyb3VuZCBmb3IgY2hyb21lIDYyXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0xlYWZsZXQvTGVhZmxldC5kcmF3L2lzc3Vlcy84MDRcblx0XHR0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgPSB0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgfHwgKHRoaXMuZWRpdGluZ0xheWVyLm9wdGlvbnMuZWRpdGluZyA9IHt9KTtcblx0XHR0aGlzLmVkaXRpbmdMYXllci5lZGl0aW5nLmVuYWJsZSgpO1xuXG5cdFx0dGhpcy5tYXAub24oJ2NsaWNrJywgdGhpcy5zdG9wRWRpdExheWVyKTtcblxuXHRcdHRoaXMuZWRpdGluZ0xheWVyLm9uKCdlZGl0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIuZmVhdHVyZSA9IHRoaXMuZWRpdGluZ0xheWVyLnRvR2VvSlNPTigpO1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uRWRpdEZlYXR1cmUodGhpcy5lZGl0aW5nTGF5ZXIudG9HZW9KU09OKCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0c3RvcEVkaXRMYXllciA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5lZGl0aW5nTGF5ZXIpIHtcblx0XHRcdHRoaXMuZWRpdGluZ0xheWVyLmVkaXRpbmcuZGlzYWJsZSgpO1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIub2ZmKCdlZGl0Jyk7XG5cdFx0fVxuXHRcdHRoaXMubWFwLm9mZignY2xpY2snLCB0aGlzLnN0b3BFZGl0TGF5ZXIpO1xuXHR9XG5cblx0Ly8gTUFSS0VSU1xuXHRhZGRNYXJrZXIocG9zaXRpb246IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IGFueSkge1xuXHRcdHJldHVybiBMLm1hcmtlcihwb3NpdGlvbiwgb3B0aW9ucykuYWRkVG8odGhpcy5tYXApO1xuXHR9XG5cblx0YWRkSHRtbE1hcmtlcihwb3NpdGlvbjogTC5MYXRMbmdFeHByZXNzaW9uLCBodG1sOiBzdHJpbmcpIHtcblx0XHRjb25zdCBjdXN0b21JY29uID0gTC5kaXZJY29uKHsgaHRtbDogaHRtbCwgY2xhc3NOYW1lOiAnYXVpLWxlYWZsZXRfX2h0bWwtaWNvbicgfSk7XG5cdFx0cmV0dXJuIEwubWFya2VyKHBvc2l0aW9uLCB7XG5cdFx0XHRpY29uOiBjdXN0b21JY29uLFxuXHRcdH0pLmFkZFRvKHRoaXMubWFwKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldC1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2wgYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG5cdDxpIFtjbGFzc109XCInZmEgZmEtJyArIGljb25cIj48L2k+XG48L2J1dHRvbj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRDb250cm9sQ29tcG9uZW50IHtcblx0QElucHV0KCkgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYWctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGF1aS1sZWFmbGV0LWNvbnRyb2wgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9EcmFnZ2luZygpXCIgaWNvbj1cImhhbmQtcGFwZXItb1wiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYXctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQ+XG5cdDxidXR0b24gYXVpRmx5b3V0QWN0aW9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIj48L2k+XG5cdDwvYnV0dG9uPlxuXHQ8ZGl2IGF1aUZseW91dFpvbmU+XG5cdFx0PHVsIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3QgbS1zZWxlY3RhYmxlLWxpc3QtLW5vLWJvcmRlclwiPlxuXHRcdFx0PGxpIGF1aUZseW91dENsb3NlPjxhIChjbGljayk9XCJtYXA/LnN3aXRjaFRvUG9seWdvbigpXCIgY2xhc3M9XCJtLXNlbGVjdGFibGUtbGlzdF9faXRlbVwiPlZvcm0gaW50ZWtlbmVuPC9hPjwvbGk+XG5cdFx0XHQ8bGkgYXVpRmx5b3V0Q2xvc2U+PGEgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9MaW5lKClcIiBjbGFzcz1cIm0tc2VsZWN0YWJsZS1saXN0X19pdGVtXCI+TGlqbi9yb3V0ZSBpbnRla2VuZW48L2E+PC9saT5cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTGVhZmxldERyYXdDb250cm9sQ29tcG9uZW50IHtcblx0bWFwOiBMZWFmbGV0TWFwO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWxlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YXVpLWxlYWZsZXQtY29udHJvbCAoY2xpY2spPVwibWFwPy50b2dnbGVGdWxsU2NyZWVuKClcIiBpY29uPVwiYXJyb3dzLWFsdFwiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWxvY2F0ZS1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YXVpLWxlYWZsZXQtY29udHJvbCBpY29uPVwiY3Jvc3NoYWlyc1wiIChjbGljayk9XCJtYXA/LmxvY2F0ZSgpXCIgW2Rpc2FibGVkXT1cIm1hcD8ubG9jYXRpbmdcIj48L2F1aS1sZWFmbGV0LWNvbnRyb2w+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LXpvb20tY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGF1aS1sZWFmbGV0LWNvbnRyb2xcblx0Y2xhc3M9XCJhdWktbGVhZmxldF9fem9vbS1jb250cm9sXCJcblx0aWNvbj1cInBsdXNcIiAoY2xpY2spPVwibWFwPy56b29tSW4oKVwiXG5cdFtkaXNhYmxlZF09XCJtYXA/Lnpvb21JbkRpc2FibGVkKClcIj48L2F1aS1sZWFmbGV0LWNvbnRyb2w+XG48YXVpLWxlYWZsZXQtY29udHJvbFxuXHRjbGFzcz1cImF1aS1sZWFmbGV0X196b29tLWNvbnRyb2xcIlxuXHRpY29uPVwibWludXNcIiAoY2xpY2spPVwibWFwPy56b29tT3V0KClcIlxuXHRbZGlzYWJsZWRdPVwibWFwPy56b29tT3V0RGlzYWJsZWQoKVwiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdFZpZXdDaGlsZCxcblx0Q29udGVudENoaWxkLFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcbmltcG9ydCB7IExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LXpvb20tY29udHJvbC9sZWFmbGV0LXpvb20tY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWxvY2F0ZS1jb250cm9sL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhd0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWRyYXctY29udHJvbC9sZWFmbGV0LWRyYXctY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0XCIgW25nQ2xhc3NdPVwieydpcy1mdWxsLXNjcmVlbic6IGxlYWZsZXRNYXAuZnVsbFNjcmVlbn1cIj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250ZW50XCIgW25nQ2xhc3NdPVwieydoYXMtY29udGVudCc6IGhhc1NpZGViYXJ9XCIgI2NvbnRlbnQ+XG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X193cmFwcGVyXCI+XG5cdFx0PGRpdiAjbWFwIGNsYXNzPVwiYXVpLWxlYWZsZXRfX21hcFwiPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVt0b3BdW2xlZnRdXCI+PC9uZy1jb250ZW50PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtcmlnaHRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bdG9wXVtyaWdodF1cIj48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250cm9scyBhdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVtib3R0b21dW3JpZ2h0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2xzIGF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bYm90dG9tXVtsZWZ0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AuYXVpLWxlYWZsZXR7Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NjAwcHg7d2lkdGg6MTAwJX0uYXVpLWxlYWZsZXRfX3dyYXBwZXJ7ZmxleDoxO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW57Ym9yZGVyOm5vbmU7Ym90dG9tOjA7cG9zaXRpb246Zml4ZWQ7aGVpZ2h0OjEwMCU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMH0uYXVpLWxlYWZsZXRfX21hcHtmb250LXNpemU6aW5oZXJpdDtmb250LWZhbWlseTppbmhlcml0O2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uYXVpLWxlYWZsZXRfX2NvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO292ZXJmbG93OmF1dG87d2lkdGg6MH0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW4gLmF1aS1sZWFmbGV0X19jb250ZW50e2JvcmRlcjoxcHggc29saWQgI2IwYjBiMDtib3gtc2hhZG93OjdweCA3cHggMCByZ2JhKDAsMCwwLC4xKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjIwcHg7bWF4LWhlaWdodDpjYWxjKDEwMCUgLSAxNjBweCk7dG9wOjIwcHg7d2lkdGg6MzUwcHg7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udGVudC5oYXMtY29udGVudHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiMGIwYjA7cGFkZGluZzoyMHB4O3dpZHRoOjMwMHB4fS5hdWktbGVhZmxldF9fY29udHJvbHN7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1sZWZ0e2JvdHRvbToyMHB4O2xlZnQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS1ib3R0b20tcmlnaHR7Ym90dG9tOjIwcHg7cmlnaHQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdHtsZWZ0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0LmlzLWZ1bGwtc2NyZWVuIC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0e2xlZnQ6MzkwcHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0e3JpZ2h0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0X19jb250cm9se2Zsb2F0OmxlZnR9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLWJvdHRvbTo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLXRvcDo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tcmlnaHQ6NXB4fS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2wsLmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tbGVmdDo1cHh9LmF1aS1sZWFmbGV0X196b29tLWNvbnRyb2x7ZGlzcGxheTpibG9ja30uYXVpLWxlYWZsZXRfX2h0bWwtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lfS5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcntib3JkZXI6MXB4IHNvbGlkICNmM2YzZjMhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzouNXJlbSAuNXJlbSAwIHJnYmEoMCwwLDAsLjEpIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZX0ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXI6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xcHg7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aWR0aDoyMnB4fS5sZWFmbGV0LXBvcHVwLWNvbnRlbnR7bWFyZ2luOjEwcHghaW1wb3J0YW50O2ZvbnQtc2l6ZToxNHB4fS5sZWFmbGV0LWNvbnRhaW5lcntmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudH0ubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b257cmlnaHQ6NXB4IWltcG9ydGFudDt0b3A6NXB4IWltcG9ydGFudDt6LWluZGV4OjF9YF0sIC8vIEB0b2RvOiBtb3ZlIHRoaXMgdG8gYXVpLWtpdC9jb3JlIGJyYW5kaW5nPyBjaGVjayB3aXRoIHN0eWxlZ3VpZGUgdGVhbVxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cdEBWaWV3Q2hpbGQoJ21hcCcpIG1hcDogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50KSBmdWxsU2NyZWVuQ29udHJvbDogTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCkgem9vbUNvbnRyb2w6IExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudDtcblx0QENvbnRlbnRDaGlsZChMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCkgbG9jYXRlQ29udHJvbDogTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQ7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50KSBkcmFnQ29udHJvbDogTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCkgZHJhd0NvbnRyb2w6IExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudDtcblx0QElucHV0KCkgbGVhZmxldE1hcDogTGVhZmxldE1hcDtcblx0QElucHV0KCkgaGFzU2lkZWJhcjtcblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBtYXAgaXMgcHJvcGVybHkgcmVuZGVyZWQgYmVmb3JlIGluaXRpYWxpemluZyBpdFxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5sZWFmbGV0TWFwLmluaXQodGhpcy5tYXAubmF0aXZlRWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0W1xuXHRcdFx0dGhpcy5mdWxsU2NyZWVuQ29udHJvbCxcblx0XHRcdHRoaXMuem9vbUNvbnRyb2wsXG5cdFx0XHR0aGlzLmxvY2F0ZUNvbnRyb2wsXG5cdFx0XHR0aGlzLmRyYWdDb250cm9sLFxuXHRcdFx0dGhpcy5kcmF3Q29udHJvbCxcblx0XHRdLmZvckVhY2goY29udHJvbCA9PiBjb250cm9sID8gY29udHJvbC5tYXAgPSB0aGlzLmxlYWZsZXRNYXAgOiBudWxsKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTGVhZmxldExheWVyIH0gZnJvbSAnLi90eXBlcy9sZWFmbGV0LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGJhc2VNYXBXb3JsZEdyYXk6IExlYWZsZXRMYXllciA9IHtcblx0bmFtZTogJ0Jhc2Ugd29ybGQgZ3JheScsXG5cdHVybDogJ2h0dHA6Ly97c30uYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9DYW52YXMvV29ybGRfTGlnaHRfR3JheV9CYXNlL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9Jyxcblx0b3B0aW9uczoge1xuXHRcdHN1YmRvbWFpbnM6IFsnc2VydmVyJywgJ3NlcnZpY2VzJ10sXG5cdFx0bWF4TmF0aXZlWm9vbTogMTYsXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgYmFzZU1hcEFudHdlcnA6IExlYWZsZXRMYXllciA9IHtcblx0bmFtZTogJ0Jhc2UgYW50d2VycCcsXG5cdHVybDogJ2h0dHA6Ly9iYXNlbWFwLmFudHdlcnBlbi5iZS90aWxlL3t6fS97eX0ve3h9Jyxcblx0b3B0aW9uczoge1xuXHRcdG1pblpvb206IDEzLFxuXHRcdG1heE5hdGl2ZVpvb206IDE5LFxuXHRcdG1heFpvb206IDIxLFxuXHR9LFxufTtcbiIsImltcG9ydCB7IExlYWZsZXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9sZWFmbGV0LWNvbnRyb2wvbGVhZmxldC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhZ0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhd0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZHJhdy1jb250cm9sL2xlYWZsZXQtZHJhdy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RnVsbHNjcmVlbkNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGVhZmxldC1sb2NhdGUtY29udHJvbC9sZWFmbGV0LWxvY2F0ZS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtem9vbS1jb250cm9sL2xlYWZsZXQtem9vbS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Q29tcG9uZW50IH0gZnJvbSAnLi9sZWFmbGV0L2xlYWZsZXQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdExlYWZsZXRDb250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0RHJhZ0NvbnRyb2xDb21wb25lbnQsXG5cdExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCxcblx0TGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCxcblx0TGVhZmxldFpvb21Db250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0Q29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcblxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xuaW1wb3J0ICdsZWFmbGV0LWRyYXcvZGlzdC9sZWFmbGV0LmRyYXcuY3NzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRGbHlvdXRNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJMLkRyYXciLCJMLm1hcCIsIkwuVGlsZUxheWVyIiwiZmVhdHVyZUxheWVyIiwiZXNyaS5mZWF0dXJlTGF5ZXIiLCJnZW9KU09OIiwiTC5nZW9KU09OIiwiTC5sYXRMbmdCb3VuZHMiLCJMLm1hcmtlciIsIkwuZGl2SWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFPQTtJQWdCQyxvQkFBbUIsT0FBMEI7UUFBN0MsaUJBQ0M7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7MkJBZnZCLEtBQUs7d0JBS1QsS0FBSzswQkFDSCxLQUFLO3NCQUNULElBQUksWUFBWSxFQUFFO3FCQUNuQjtZQUNkLFFBQVEsRUFBRSxDQUFDO1lBQ1gsZUFBZSxFQUFFLENBQUM7WUFDbEIsWUFBWSxFQUFFLENBQUM7U0FDZjtvQkFDYSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7O2dDQXVIZDtZQUNsQixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7YUFDL0I7WUFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO2FBQzVCO1lBQ0Qs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