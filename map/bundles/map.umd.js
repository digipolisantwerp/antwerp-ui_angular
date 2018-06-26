(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('leaflet'), require('esri-leaflet'), require('leaflet-draw'), require('@angular/forms'), require('@angular/common'), require('@acpaas-ui/ngx-components/flyout'), require('leaflet/dist/leaflet.css'), require('leaflet-draw/dist/leaflet.draw.css')) :
    typeof define === 'function' && define.amd ? define('map', ['exports', '@angular/core', 'leaflet', 'esri-leaflet', 'leaflet-draw', '@angular/forms', '@angular/common', '@acpaas-ui/ngx-components/flyout', 'leaflet/dist/leaflet.css', 'leaflet-draw/dist/leaflet.draw.css'], factory) :
    (factory((global.map = {}),global.ng.core,null,null,null,global.ng.forms,global.ng.common,null));
}(this, (function (exports,core,L,esri,leafletDraw,forms,common,flyout) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LeafletMap = (function () {
        function LeafletMap(options) {
            var _this = this;
            this.options = options;
            this.initialized = false;
            this.locating = false;
            this.fullScreen = false;
            this.onInit = new core.EventEmitter();
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
                _this.map.off(L.Draw.Event.CREATED);
                _this.map.off(L.Draw.Event.DRAWSTOP);
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
                this.map = L.map(element, {
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
                var /** @type {?} */ tileLayer = new L.TileLayer(layer.url, layer.options);
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
                var /** @type {?} */ featureLayer = new esri.featureLayer(config);
                this.map.addLayer(featureLayer);
                return featureLayer;
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
            function (geoJSON, config) {
                var /** @type {?} */ geoJSONLayer = L.geoJSON(geoJSON, config);
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
                var /** @type {?} */ bounds = L.latLngBounds(([]));
                var /** @type {?} */ counter = 0;
                featureLayers.forEach(function (featureLayer) {
                    featureLayer.once('load', function () {
                        counter++;
                        featureLayer.eachFeature(function (layer) {
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
                    this.polygonDrawer = new L.Draw['Polygon'](this.map, {
                        shapeOptions: this.options.polygonColor ? {
                            color: this.options.polygonColor,
                        } : {},
                    });
                    this.polygonDrawer.enable();
                    this.map.on(L.Draw.Event.CREATED, this.handleDrawPolygon);
                    this.map.on(L.Draw.Event.DRAWSTOP, this.switchToDragging);
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
                    this.lineDrawer = new L.Draw['Polyline'](this.map, {
                        shapeOptions: this.options.lineColor ? {
                            color: this.options.lineColor,
                        } : {},
                    });
                    this.lineDrawer.enable();
                    this.map.on(L.Draw.Event.CREATED, this.handleDrawLine);
                    this.map.on(L.Draw.Event.DRAWSTOP, this.switchToDragging);
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
                return L.marker(position, options).addTo(this.map);
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
                var /** @type {?} */ customIcon = L.divIcon({ html: html, className: 'aui-leaflet__html-icon' });
                return L.marker(position, {
                    icon: customIcon,
                }).addTo(this.map);
            };
        return LeafletMap;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LeafletControlComponent = (function () {
        function LeafletControlComponent() {
        }
        LeafletControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-leaflet-control',
                        template: "<button class=\"aui-leaflet__control a-button a-button--small has-icon\" [disabled]=\"disabled\">\n\t<i [class]=\"'fa fa-' + icon\"></i>\n</button>\n",
                    },] },
        ];
        LeafletControlComponent.propDecorators = {
            icon: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        return LeafletControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LeafletDragControlComponent = (function () {
        function LeafletDragControlComponent() {
        }
        LeafletDragControlComponent.decorators = [
            { type: core.Component, args: [{
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
    var LeafletDrawControlComponent = (function () {
        function LeafletDrawControlComponent() {
        }
        LeafletDrawControlComponent.decorators = [
            { type: core.Component, args: [{
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
    var LeafletFullscreenControlComponent = (function () {
        function LeafletFullscreenControlComponent() {
        }
        LeafletFullscreenControlComponent.decorators = [
            { type: core.Component, args: [{
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
    var LeafletLocateControlComponent = (function () {
        function LeafletLocateControlComponent() {
        }
        LeafletLocateControlComponent.decorators = [
            { type: core.Component, args: [{
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
    var LeafletZoomControlComponent = (function () {
        function LeafletZoomControlComponent() {
        }
        LeafletZoomControlComponent.decorators = [
            { type: core.Component, args: [{
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
    var LeafletComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'aui-leaflet',
                        template: "<div class=\"aui-leaflet\" [ngClass]=\"{'is-full-screen': leafletMap.fullScreen}\">\n\t<div class=\"aui-leaflet__content\" [ngClass]=\"{'has-content': hasSidebar}\" #content>\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"aui-leaflet__wrapper\">\n\t\t<div #map class=\"aui-leaflet__map\"></div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--top-left\">\n\t\t\t<ng-content select=\"[controls][top][left]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--top-right\">\n\t\t\t<ng-content select=\"[controls][top][right]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--bottom-right\">\n\t\t\t<ng-content select=\"[controls][bottom][right]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--bottom-left\">\n\t\t\t<ng-content select=\"[controls][bottom][left]\"></ng-content>\n\t\t</div>\n\t</div>\n</div>\n",
                        styles: [".aui-leaflet{border:1px solid #b0b0b0;display:flex;height:600px;width:100%}.aui-leaflet__wrapper{flex:1;height:100%;overflow:hidden;position:relative}.aui-leaflet.is-full-screen{border:none;bottom:0;position:fixed;height:100%;left:0;right:0;top:0;z-index:10}.aui-leaflet__map{font-size:inherit;font-family:inherit;height:100%;position:relative;z-index:1}.aui-leaflet__content{background-color:#fff;overflow:auto;width:0}.aui-leaflet.is-full-screen .aui-leaflet__content{border:1px solid #b0b0b0;box-shadow:7px 7px 0 rgba(0,0,0,.1);position:absolute;left:20px;max-height:calc(100% - 160px);top:20px;width:350px;z-index:2}.aui-leaflet__content.has-content{border-right:1px solid #b0b0b0;padding:20px;width:300px}.aui-leaflet__controls{position:absolute;z-index:2}.aui-leaflet__controls--bottom-left{bottom:20px;left:20px}.aui-leaflet__controls--bottom-right{bottom:20px;right:20px}.aui-leaflet__controls--top-left{left:20px;top:20px}.aui-leaflet.is-full-screen .aui-leaflet__controls--top-left{left:390px}.aui-leaflet__controls--top-right{right:20px;top:20px}.aui-leaflet__control{float:left}.aui-leaflet__controls--top-left .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-bottom:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--bottom-right .aui-leaflet__control{margin-top:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--top-left .aui-leaflet__control{margin-right:5px}.aui-leaflet__controls--bottom-right .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-left:5px}.aui-leaflet__zoom-control{display:block}.aui-leaflet__html-icon{background-color:transparent;border:none}.leaflet-popup-content-wrapper{border:1px solid #f3f3f3!important;border-radius:0!important;box-shadow:.5rem .5rem 0 rgba(0,0,0,.1)!important;position:relative}.leaflet-popup-content-wrapper::after{content:'';position:absolute;bottom:-1px;height:1px;background-color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:22px}.leaflet-popup-content{margin:10px!important;font-size:14px}.leaflet-container{font-family:inherit!important}.leaflet-popup-close-button{right:5px!important;top:5px!important;z-index:1}"],
                        // @todo: move this to aui-kit/core branding? check with styleguide team
                        encapsulation: core.ViewEncapsulation.None,
                    },] },
        ];
        LeafletComponent.propDecorators = {
            map: [{ type: core.ViewChild, args: ['map',] }],
            content: [{ type: core.ViewChild, args: ['content',] }],
            fullScreenControl: [{ type: core.ContentChild, args: [LeafletFullscreenControlComponent,] }],
            zoomControl: [{ type: core.ContentChild, args: [LeafletZoomControlComponent,] }],
            locateControl: [{ type: core.ContentChild, args: [LeafletLocateControlComponent,] }],
            dragControl: [{ type: core.ContentChild, args: [LeafletDragControlComponent,] }],
            drawControl: [{ type: core.ContentChild, args: [LeafletDrawControlComponent,] }],
            leafletMap: [{ type: core.Input }],
            hasSidebar: [{ type: core.Input }]
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
    var LeafletModule = (function () {
        function LeafletModule() {
        }
        LeafletModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            flyout.FlyoutModule,
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

    exports.LeafletMap = LeafletMap;
    exports.LeafletControlComponent = LeafletControlComponent;
    exports.LeafletDragControlComponent = LeafletDragControlComponent;
    exports.LeafletDrawControlComponent = LeafletDrawControlComponent;
    exports.LeafletFullscreenControlComponent = LeafletFullscreenControlComponent;
    exports.LeafletLocateControlComponent = LeafletLocateControlComponent;
    exports.LeafletZoomControlComponent = LeafletZoomControlComponent;
    exports.LeafletComponent = LeafletComponent;
    exports.baseMapAntwerp = baseMapAntwerp;
    exports.baseMapWorldGray = baseMapWorldGray;
    exports.LeafletModule = LeafletModule;
    exports.ɵa = Components;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NsYXNzZXMvbGVhZmxldC1tYXAudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtY29udHJvbC9sZWFmbGV0LWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9tYXAvbGliL2xlYWZsZXQvY29tcG9uZW50cy9jb250cm9scy9sZWFmbGV0LWRyYWctY29udHJvbC9sZWFmbGV0LWRyYWctY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtZHJhdy1jb250cm9sL2xlYWZsZXQtZHJhdy1jb250cm9sLmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvY29udHJvbHMvbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2wvbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9tYXAvbGliL2xlYWZsZXQvY29tcG9uZW50cy9jb250cm9scy9sZWFmbGV0LWxvY2F0ZS1jb250cm9sL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9tYXAvbGliL2xlYWZsZXQvY29tcG9uZW50cy9jb250cm9scy9sZWFmbGV0LXpvb20tY29udHJvbC9sZWFmbGV0LXpvb20tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2xlYWZsZXQvbGVhZmxldC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9sZWFmbGV0LmNvbmYudHMiLG51bGwsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9sZWFmbGV0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgKiBhcyBlc3JpIGZyb20gJ2VzcmktbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XG5cbmltcG9ydCB7IExlYWZsZXRMYXllciwgTGVhZmxldE1hcE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9sZWFmbGV0LnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXAge1xuXHRwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cdHByaXZhdGUgcG9seWdvbkRyYXdlcjogYW55O1xuXHRwcml2YXRlIGxpbmVEcmF3ZXI6IGFueTtcblx0cHJpdmF0ZSBlZGl0aW5nTGF5ZXI6IGFueTtcblx0cHVibGljIG1hcDogTC5NYXA7XG5cdHB1YmxpYyBsb2NhdGluZyA9IGZhbHNlO1xuXHRwdWJsaWMgZnVsbFNjcmVlbiA9IGZhbHNlO1xuXHRwdWJsaWMgb25Jbml0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbW9kZXMgPSB7XG5cdFx0RFJBR0dJTkc6IDAsXG5cdFx0RFJBV0lOR19QT0xZR09OOiAxLFxuXHRcdERSQVdJTkdfTElORTogMixcblx0fTtcblx0cHVibGljIG1vZGUgPSB0aGlzLm1vZGVzLkRSQUdHSU5HO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBMZWFmbGV0TWFwT3B0aW9ucykge1xuXHR9XG5cblx0Ly8gTElGRUNZQ0xFXG5cdGluaXQoZWxlbWVudDogYW55KSB7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5tYXAgPSBMLm1hcChlbGVtZW50LCB7XG5cdFx0XHRjZW50ZXI6IHRoaXMub3B0aW9ucy5jZW50ZXIsXG5cdFx0XHR6b29tOiB0aGlzLm9wdGlvbnMuem9vbSxcblx0XHRcdGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2UsXG5cdFx0XHR6b29tQ29udHJvbDogZmFsc2UsXG5cdFx0XHRzY3JvbGxXaGVlbFpvb206IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMub25Jbml0LmVtaXQoKTtcblx0fVxuXG5cdC8vIExBWUVSU1xuXHRhZGRUaWxlTGF5ZXIobGF5ZXI6IExlYWZsZXRMYXllcikge1xuXHRcdGNvbnN0IHRpbGVMYXllciA9IG5ldyBMLlRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKHRpbGVMYXllcik7XG5cdFx0cmV0dXJuIHRpbGVMYXllcjtcblx0fVxuXG5cdGFkZEZlYXR1cmVMYXllcihjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyBlc3JpLmZlYXR1cmVMYXllcihjb25maWcpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKGZlYXR1cmVMYXllcik7XG5cdFx0cmV0dXJuIGZlYXR1cmVMYXllcjtcblx0fVxuXG5cdGFkZEdlb0pTT04oZ2VvSlNPTjogYW55LCBjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGdlb0pTT05MYXllciA9IEwuZ2VvSlNPTihnZW9KU09OLCBjb25maWcpO1xuXHRcdGdlb0pTT05MYXllci5hZGRUbyh0aGlzLm1hcCk7XG5cdFx0cmV0dXJuIGdlb0pTT05MYXllcjtcblx0fVxuXG5cdGZpdEZlYXR1cmVMYXllcnMoZmVhdHVyZUxheWVyczogYW55W10pIHtcblx0XHRjb25zdCBib3VuZHMgPSBMLmxhdExuZ0JvdW5kcygoW10pKTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cdFx0ZmVhdHVyZUxheWVycy5mb3JFYWNoKChmZWF0dXJlTGF5ZXIpID0+IHtcblx0XHRcdGZlYXR1cmVMYXllci5vbmNlKCdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdGZlYXR1cmVMYXllci5lYWNoRmVhdHVyZSgobGF5ZXI6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGJvdW5kcy5leHRlbmQobGF5ZXIuZ2V0Qm91bmRzKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoY291bnRlciA9PT0gZmVhdHVyZUxheWVycy5sZW5ndGggJiYgYm91bmRzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZUxheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLm1hcC5yZW1vdmVMYXllcihsYXllcik7XG5cdH1cblxuXHQvLyBGVUxMU0NSRUVOXG5cdHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XG5cdFx0dGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlbjtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLmludmFsaWRhdGVTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gWk9PTUlOR1xuXHR6b29tSW4oKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLnpvb21JbigpO1xuXHRcdH1cblx0fVxuXG5cdHpvb21JbkRpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWF4Wm9vbSgpIDw9IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR6b29tT3V0KCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC56b29tT3V0KCk7XG5cdFx0fVxuXHR9XG5cblx0em9vbU91dERpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWluWm9vbSgpID49IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBDRU5URVJJTkdcblx0bG9jYXRlKCkge1xuXHRcdGlmICghdGhpcy5sb2NhdGluZyAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLmxvY2F0aW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubWFwLmxvY2F0ZSgpO1xuXHRcdFx0dGhpcy5tYXAub24oJ2xvY2F0aW9uZm91bmQnLCAoZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9jYXRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXAuc2V0VmlldyhlLmxhdGxuZywgMTkpO1xuXHRcdFx0XHR0aGlzLm1hcC5vZmYoJ2xvY2F0aW9uZm91bmQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldFZpZXcoY2VudGVyOiBMLkxhdExuZ0V4cHJlc3Npb24sIHpvb206IG51bWJlcikge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC5zZXRWaWV3KGNlbnRlciwgem9vbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRFJBV0lOR1xuXHRzd2l0Y2hUb0RyYWdnaW5nID0gKCkgPT4ge1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBR0dJTkc7XG5cdFx0aWYgKHRoaXMucG9seWdvbkRyYXdlcikge1xuXHRcdFx0dGhpcy5wb2x5Z29uRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKHRoaXMubGluZURyYXdlcikge1xuXHRcdFx0dGhpcy5saW5lRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMubGluZURyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dGhpcy5tYXAub2ZmKEwuRHJhdy5FdmVudC5DUkVBVEVEKTtcblx0XHR0aGlzLm1hcC5vZmYoTC5EcmF3LkV2ZW50LkRSQVdTVE9QKTtcblx0fVxuXG5cdC8vIERSQVdJTkc6IFBPTFlHT05cblx0c3dpdGNoVG9Qb2x5Z29uKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19QT0xZR09OO1xuXHRcdGlmICghdGhpcy5wb2x5Z29uRHJhd2VyKSB7XG5cdFx0XHR0aGlzLnBvbHlnb25EcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5Z29uJ10odGhpcy5tYXAsIHtcblx0XHRcdFx0c2hhcGVPcHRpb25zOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yID8ge1xuXHRcdFx0XHRcdGNvbG9yOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yLFxuXHRcdFx0XHR9IDoge30sXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlci5lbmFibGUoKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCB0aGlzLmhhbmRsZURyYXdQb2x5Z29uKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5EUkFXU1RPUCwgdGhpcy5zd2l0Y2hUb0RyYWdnaW5nKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVEcmF3UG9seWdvbiA9IChlOiBhbnkpID0+IHtcblx0XHR0aGlzLm1hcC5hZGRMYXllcihlLmxheWVyKTtcblx0XHR0aGlzLm9wdGlvbnMub25BZGRQb2x5Z29uKGUubGF5ZXIpO1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHR9XG5cblx0Ly8gRFJBV0lORzogTElORVNcblx0c3dpdGNoVG9MaW5lKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19MSU5FO1xuXHRcdGlmICghdGhpcy5saW5lRHJhd2VyKSB7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5bGluZSddKHRoaXMubWFwLCB7XG5cdFx0XHRcdHNoYXBlT3B0aW9uczogdGhpcy5vcHRpb25zLmxpbmVDb2xvciA/IHtcblx0XHRcdFx0XHRjb2xvcjogdGhpcy5vcHRpb25zLmxpbmVDb2xvcixcblx0XHRcdFx0fSA6IHt9LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIuZW5hYmxlKCk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuQ1JFQVRFRCwgdGhpcy5oYW5kbGVEcmF3TGluZSk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuRFJBV1NUT1AsIHRoaXMuc3dpdGNoVG9EcmFnZ2luZyk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlRHJhd0xpbmUgPSAoZTogYW55KSA9PiB7XG5cdFx0dGhpcy5tYXAuYWRkTGF5ZXIoZS5sYXllcik7XG5cdFx0dGhpcy5vcHRpb25zLm9uQWRkTGluZShlLmxheWVyKTtcblx0XHR0aGlzLnN3aXRjaFRvRHJhZ2dpbmcoKTtcblx0fVxuXG5cdC8vIEVESVQ6IExBWUVSXG5cdHN0YXJ0RWRpdExheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLnN0b3BFZGl0TGF5ZXIoKTtcblx0XHR0aGlzLmVkaXRpbmdMYXllciA9IGxheWVyO1xuXHRcdC8vIFRPRE86IHRlbXAgd29ya2Fyb3VuZCBmb3IgY2hyb21lIDYyXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0xlYWZsZXQvTGVhZmxldC5kcmF3L2lzc3Vlcy84MDRcblx0XHR0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgPSB0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgfHwgKHRoaXMuZWRpdGluZ0xheWVyLm9wdGlvbnMuZWRpdGluZyA9IHt9KTtcblx0XHR0aGlzLmVkaXRpbmdMYXllci5lZGl0aW5nLmVuYWJsZSgpO1xuXG5cdFx0dGhpcy5tYXAub24oJ2NsaWNrJywgdGhpcy5zdG9wRWRpdExheWVyKTtcblxuXHRcdHRoaXMuZWRpdGluZ0xheWVyLm9uKCdlZGl0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIuZmVhdHVyZSA9IHRoaXMuZWRpdGluZ0xheWVyLnRvR2VvSlNPTigpO1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uRWRpdEZlYXR1cmUodGhpcy5lZGl0aW5nTGF5ZXIudG9HZW9KU09OKCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0c3RvcEVkaXRMYXllciA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5lZGl0aW5nTGF5ZXIpIHtcblx0XHRcdHRoaXMuZWRpdGluZ0xheWVyLmVkaXRpbmcuZGlzYWJsZSgpO1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIub2ZmKCdlZGl0Jyk7XG5cdFx0fVxuXHRcdHRoaXMubWFwLm9mZignY2xpY2snLCB0aGlzLnN0b3BFZGl0TGF5ZXIpO1xuXHR9XG5cblx0Ly8gTUFSS0VSU1xuXHRhZGRNYXJrZXIocG9zaXRpb246IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IGFueSkge1xuXHRcdHJldHVybiBMLm1hcmtlcihwb3NpdGlvbiwgb3B0aW9ucykuYWRkVG8odGhpcy5tYXApO1xuXHR9XG5cblx0YWRkSHRtbE1hcmtlcihwb3NpdGlvbjogTC5MYXRMbmdFeHByZXNzaW9uLCBodG1sOiBzdHJpbmcpIHtcblx0XHRjb25zdCBjdXN0b21JY29uID0gTC5kaXZJY29uKHsgaHRtbDogaHRtbCwgY2xhc3NOYW1lOiAnYXVpLWxlYWZsZXRfX2h0bWwtaWNvbicgfSk7XG5cdFx0cmV0dXJuIEwubWFya2VyKHBvc2l0aW9uLCB7XG5cdFx0XHRpY29uOiBjdXN0b21JY29uLFxuXHRcdH0pLmFkZFRvKHRoaXMubWFwKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldC1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2wgYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG5cdDxpIFtjbGFzc109XCInZmEgZmEtJyArIGljb25cIj48L2k+XG48L2J1dHRvbj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRDb250cm9sQ29tcG9uZW50IHtcblx0QElucHV0KCkgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYWctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGF1aS1sZWFmbGV0LWNvbnRyb2wgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9EcmFnZ2luZygpXCIgaWNvbj1cImhhbmQtcGFwZXItb1wiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYXctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQ+XG5cdDxidXR0b24gYXVpRmx5b3V0QWN0aW9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIj48L2k+XG5cdDwvYnV0dG9uPlxuXHQ8ZGl2IGF1aUZseW91dFpvbmU+XG5cdFx0PHVsIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3QgbS1zZWxlY3RhYmxlLWxpc3QtLW5vLWJvcmRlclwiPlxuXHRcdFx0PGxpIGF1aUZseW91dENsb3NlPjxhIChjbGljayk9XCJtYXA/LnN3aXRjaFRvUG9seWdvbigpXCIgY2xhc3M9XCJtLXNlbGVjdGFibGUtbGlzdF9faXRlbVwiPlZvcm0gaW50ZWtlbmVuPC9hPjwvbGk+XG5cdFx0XHQ8bGkgYXVpRmx5b3V0Q2xvc2U+PGEgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9MaW5lKClcIiBjbGFzcz1cIm0tc2VsZWN0YWJsZS1saXN0X19pdGVtXCI+TGlqbi9yb3V0ZSBpbnRla2VuZW48L2E+PC9saT5cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTGVhZmxldERyYXdDb250cm9sQ29tcG9uZW50IHtcblx0bWFwOiBMZWFmbGV0TWFwO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWxlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YXVpLWxlYWZsZXQtY29udHJvbCAoY2xpY2spPVwibWFwPy50b2dnbGVGdWxsU2NyZWVuKClcIiBpY29uPVwiYXJyb3dzLWFsdFwiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWxvY2F0ZS1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YXVpLWxlYWZsZXQtY29udHJvbCBpY29uPVwiY3Jvc3NoYWlyc1wiIChjbGljayk9XCJtYXA/LmxvY2F0ZSgpXCIgW2Rpc2FibGVkXT1cIm1hcD8ubG9jYXRpbmdcIj48L2F1aS1sZWFmbGV0LWNvbnRyb2w+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LXpvb20tY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGF1aS1sZWFmbGV0LWNvbnRyb2xcblx0Y2xhc3M9XCJhdWktbGVhZmxldF9fem9vbS1jb250cm9sXCJcblx0aWNvbj1cInBsdXNcIiAoY2xpY2spPVwibWFwPy56b29tSW4oKVwiXG5cdFtkaXNhYmxlZF09XCJtYXA/Lnpvb21JbkRpc2FibGVkKClcIj48L2F1aS1sZWFmbGV0LWNvbnRyb2w+XG48YXVpLWxlYWZsZXQtY29udHJvbFxuXHRjbGFzcz1cImF1aS1sZWFmbGV0X196b29tLWNvbnRyb2xcIlxuXHRpY29uPVwibWludXNcIiAoY2xpY2spPVwibWFwPy56b29tT3V0KClcIlxuXHRbZGlzYWJsZWRdPVwibWFwPy56b29tT3V0RGlzYWJsZWQoKVwiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdFZpZXdDaGlsZCxcblx0Q29udGVudENoaWxkLFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcbmltcG9ydCB7IExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LXpvb20tY29udHJvbC9sZWFmbGV0LXpvb20tY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWxvY2F0ZS1jb250cm9sL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhd0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWRyYXctY29udHJvbC9sZWFmbGV0LWRyYXctY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0XCIgW25nQ2xhc3NdPVwieydpcy1mdWxsLXNjcmVlbic6IGxlYWZsZXRNYXAuZnVsbFNjcmVlbn1cIj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250ZW50XCIgW25nQ2xhc3NdPVwieydoYXMtY29udGVudCc6IGhhc1NpZGViYXJ9XCIgI2NvbnRlbnQ+XG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X193cmFwcGVyXCI+XG5cdFx0PGRpdiAjbWFwIGNsYXNzPVwiYXVpLWxlYWZsZXRfX21hcFwiPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVt0b3BdW2xlZnRdXCI+PC9uZy1jb250ZW50PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtcmlnaHRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bdG9wXVtyaWdodF1cIj48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250cm9scyBhdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVtib3R0b21dW3JpZ2h0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2xzIGF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bYm90dG9tXVtsZWZ0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AuYXVpLWxlYWZsZXR7Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NjAwcHg7d2lkdGg6MTAwJX0uYXVpLWxlYWZsZXRfX3dyYXBwZXJ7ZmxleDoxO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW57Ym9yZGVyOm5vbmU7Ym90dG9tOjA7cG9zaXRpb246Zml4ZWQ7aGVpZ2h0OjEwMCU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMH0uYXVpLWxlYWZsZXRfX21hcHtmb250LXNpemU6aW5oZXJpdDtmb250LWZhbWlseTppbmhlcml0O2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uYXVpLWxlYWZsZXRfX2NvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO292ZXJmbG93OmF1dG87d2lkdGg6MH0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW4gLmF1aS1sZWFmbGV0X19jb250ZW50e2JvcmRlcjoxcHggc29saWQgI2IwYjBiMDtib3gtc2hhZG93OjdweCA3cHggMCByZ2JhKDAsMCwwLC4xKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjIwcHg7bWF4LWhlaWdodDpjYWxjKDEwMCUgLSAxNjBweCk7dG9wOjIwcHg7d2lkdGg6MzUwcHg7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udGVudC5oYXMtY29udGVudHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiMGIwYjA7cGFkZGluZzoyMHB4O3dpZHRoOjMwMHB4fS5hdWktbGVhZmxldF9fY29udHJvbHN7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1sZWZ0e2JvdHRvbToyMHB4O2xlZnQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS1ib3R0b20tcmlnaHR7Ym90dG9tOjIwcHg7cmlnaHQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdHtsZWZ0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0LmlzLWZ1bGwtc2NyZWVuIC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0e2xlZnQ6MzkwcHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0e3JpZ2h0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0X19jb250cm9se2Zsb2F0OmxlZnR9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLWJvdHRvbTo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLXRvcDo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tcmlnaHQ6NXB4fS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2wsLmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tbGVmdDo1cHh9LmF1aS1sZWFmbGV0X196b29tLWNvbnRyb2x7ZGlzcGxheTpibG9ja30uYXVpLWxlYWZsZXRfX2h0bWwtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lfS5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcntib3JkZXI6MXB4IHNvbGlkICNmM2YzZjMhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzouNXJlbSAuNXJlbSAwIHJnYmEoMCwwLDAsLjEpIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZX0ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXI6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xcHg7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aWR0aDoyMnB4fS5sZWFmbGV0LXBvcHVwLWNvbnRlbnR7bWFyZ2luOjEwcHghaW1wb3J0YW50O2ZvbnQtc2l6ZToxNHB4fS5sZWFmbGV0LWNvbnRhaW5lcntmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudH0ubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b257cmlnaHQ6NXB4IWltcG9ydGFudDt0b3A6NXB4IWltcG9ydGFudDt6LWluZGV4OjF9YF0sIC8vIEB0b2RvOiBtb3ZlIHRoaXMgdG8gYXVpLWtpdC9jb3JlIGJyYW5kaW5nPyBjaGVjayB3aXRoIHN0eWxlZ3VpZGUgdGVhbVxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cdEBWaWV3Q2hpbGQoJ21hcCcpIG1hcDogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50KSBmdWxsU2NyZWVuQ29udHJvbDogTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCkgem9vbUNvbnRyb2w6IExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudDtcblx0QENvbnRlbnRDaGlsZChMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCkgbG9jYXRlQ29udHJvbDogTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQ7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50KSBkcmFnQ29udHJvbDogTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCkgZHJhd0NvbnRyb2w6IExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudDtcblx0QElucHV0KCkgbGVhZmxldE1hcDogTGVhZmxldE1hcDtcblx0QElucHV0KCkgaGFzU2lkZWJhcjtcblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBtYXAgaXMgcHJvcGVybHkgcmVuZGVyZWQgYmVmb3JlIGluaXRpYWxpemluZyBpdFxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5sZWFmbGV0TWFwLmluaXQodGhpcy5tYXAubmF0aXZlRWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0W1xuXHRcdFx0dGhpcy5mdWxsU2NyZWVuQ29udHJvbCxcblx0XHRcdHRoaXMuem9vbUNvbnRyb2wsXG5cdFx0XHR0aGlzLmxvY2F0ZUNvbnRyb2wsXG5cdFx0XHR0aGlzLmRyYWdDb250cm9sLFxuXHRcdFx0dGhpcy5kcmF3Q29udHJvbCxcblx0XHRdLmZvckVhY2goY29udHJvbCA9PiBjb250cm9sID8gY29udHJvbC5tYXAgPSB0aGlzLmxlYWZsZXRNYXAgOiBudWxsKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTGVhZmxldExheWVyIH0gZnJvbSAnLi90eXBlcy9sZWFmbGV0LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGJhc2VNYXBXb3JsZEdyYXk6IExlYWZsZXRMYXllciA9IHtcblx0bmFtZTogJ0Jhc2Ugd29ybGQgZ3JheScsXG5cdHVybDogJ2h0dHA6Ly97c30uYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9DYW52YXMvV29ybGRfTGlnaHRfR3JheV9CYXNlL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9Jyxcblx0b3B0aW9uczoge1xuXHRcdHN1YmRvbWFpbnM6IFsnc2VydmVyJywgJ3NlcnZpY2VzJ10sXG5cdFx0bWF4TmF0aXZlWm9vbTogMTYsXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgYmFzZU1hcEFudHdlcnA6IExlYWZsZXRMYXllciA9IHtcblx0bmFtZTogJ0Jhc2UgYW50d2VycCcsXG5cdHVybDogJ2h0dHA6Ly9iYXNlbWFwLmFudHdlcnBlbi5iZS90aWxlL3t6fS97eX0ve3h9Jyxcblx0b3B0aW9uczoge1xuXHRcdG1pblpvb206IDEzLFxuXHRcdG1heE5hdGl2ZVpvb206IDE5LFxuXHRcdG1heFpvb206IDIxLFxuXHR9LFxufTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKG9bbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH07IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl07XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxufSIsImltcG9ydCB7IExlYWZsZXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9sZWFmbGV0LWNvbnRyb2wvbGVhZmxldC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhZ0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhd0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZHJhdy1jb250cm9sL2xlYWZsZXQtZHJhdy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RnVsbHNjcmVlbkNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGVhZmxldC1sb2NhdGUtY29udHJvbC9sZWFmbGV0LWxvY2F0ZS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtem9vbS1jb250cm9sL2xlYWZsZXQtem9vbS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Q29tcG9uZW50IH0gZnJvbSAnLi9sZWFmbGV0L2xlYWZsZXQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdExlYWZsZXRDb250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0RHJhZ0NvbnRyb2xDb21wb25lbnQsXG5cdExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCxcblx0TGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCxcblx0TGVhZmxldFpvb21Db250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0Q29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcblxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xuaW1wb3J0ICdsZWFmbGV0LWRyYXcvZGlzdC9sZWFmbGV0LmRyYXcuY3NzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRGbHlvdXRNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJMLkRyYXciLCJMLm1hcCIsIkwuVGlsZUxheWVyIiwiZXNyaS5mZWF0dXJlTGF5ZXIiLCJMLmdlb0pTT04iLCJMLmxhdExuZ0JvdW5kcyIsIkwubWFya2VyIiwiTC5kaXZJY29uIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIlZpZXdDaGlsZCIsIkNvbnRlbnRDaGlsZCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiRmx5b3V0TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsUUFPQTtRQWdCQyxvQkFBbUIsT0FBMEI7WUFBN0MsaUJBQ0M7WUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7K0JBZnZCLEtBQUs7NEJBS1QsS0FBSzs4QkFDSCxLQUFLOzBCQUNULElBQUlBLGlCQUFZLEVBQUU7eUJBQ25CO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2dCQUNYLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixZQUFZLEVBQUUsQ0FBQzthQUNmO3dCQUNhLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTs7b0NBdUhkO2dCQUNsQixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxL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