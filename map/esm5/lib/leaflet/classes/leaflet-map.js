/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import 'leaflet-draw';
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
export { LeafletMap };
function LeafletMap_tsickle_Closure_declarations() {
    /** @type {?} */
    LeafletMap.prototype.initialized;
    /** @type {?} */
    LeafletMap.prototype.polygonDrawer;
    /** @type {?} */
    LeafletMap.prototype.lineDrawer;
    /** @type {?} */
    LeafletMap.prototype.editingLayer;
    /** @type {?} */
    LeafletMap.prototype.map;
    /** @type {?} */
    LeafletMap.prototype.locating;
    /** @type {?} */
    LeafletMap.prototype.fullScreen;
    /** @type {?} */
    LeafletMap.prototype.onInit;
    /** @type {?} */
    LeafletMap.prototype.modes;
    /** @type {?} */
    LeafletMap.prototype.mode;
    /** @type {?} */
    LeafletMap.prototype.switchToDragging;
    /** @type {?} */
    LeafletMap.prototype.handleDrawPolygon;
    /** @type {?} */
    LeafletMap.prototype.handleDrawLine;
    /** @type {?} */
    LeafletMap.prototype.stopEditLayer;
    /** @type {?} */
    LeafletMap.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAvIiwic291cmNlcyI6WyJsaWIvbGVhZmxldC9jbGFzc2VzL2xlYWZsZXQtbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sS0FBSyxDQUFDLE1BQU0sU0FBUyxDQUFDO0FBQzdCLE9BQU8sS0FBSyxJQUFJLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sY0FBYyxDQUFDO0FBSXRCLElBQUE7SUFnQkMsb0JBQW1CLE9BQTBCO1FBQTdDLGlCQUNDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQW1COzJCQWZ2QixLQUFLO3dCQUtULEtBQUs7MEJBQ0gsS0FBSztzQkFDVCxJQUFJLFlBQVksRUFBRTtxQkFDbkI7WUFDZCxRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLFlBQVksRUFBRSxDQUFDO1NBQ2Y7b0JBQ2EsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFROztnQ0F1SGQ7WUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7YUFDL0I7WUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7YUFDNUI7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxP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Q0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQzVCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDMUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQzFELENBQUMsQ0FBQztLQUNIO0lBVUQsVUFBVTs7Ozs7O0lBQ1YsOEJBQVM7Ozs7O0lBQVQsVUFBVSxRQUE0QixFQUFFLE9BQWE7UUFDcEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkQ7Ozs7OztJQUVELGtDQUFhOzs7OztJQUFiLFVBQWMsUUFBNEIsRUFBRSxJQUFZO1FBQ3ZELHFCQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN6QixJQUFJLEVBQUUsVUFBVTtTQUNoQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQjtxQkF6T0Y7SUEwT0MsQ0FBQTtBQW5PRCxzQkFtT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgKiBhcyBlc3JpIGZyb20gJ2VzcmktbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XG5cbmltcG9ydCB7IExlYWZsZXRMYXllciwgTGVhZmxldE1hcE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9sZWFmbGV0LnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXAge1xuXHRwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cdHByaXZhdGUgcG9seWdvbkRyYXdlcjogYW55O1xuXHRwcml2YXRlIGxpbmVEcmF3ZXI6IGFueTtcblx0cHJpdmF0ZSBlZGl0aW5nTGF5ZXI6IGFueTtcblx0cHVibGljIG1hcDogTC5NYXA7XG5cdHB1YmxpYyBsb2NhdGluZyA9IGZhbHNlO1xuXHRwdWJsaWMgZnVsbFNjcmVlbiA9IGZhbHNlO1xuXHRwdWJsaWMgb25Jbml0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbW9kZXMgPSB7XG5cdFx0RFJBR0dJTkc6IDAsXG5cdFx0RFJBV0lOR19QT0xZR09OOiAxLFxuXHRcdERSQVdJTkdfTElORTogMixcblx0fTtcblx0cHVibGljIG1vZGUgPSB0aGlzLm1vZGVzLkRSQUdHSU5HO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBMZWFmbGV0TWFwT3B0aW9ucykge1xuXHR9XG5cblx0Ly8gTElGRUNZQ0xFXG5cdGluaXQoZWxlbWVudDogYW55KSB7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5tYXAgPSBMLm1hcChlbGVtZW50LCB7XG5cdFx0XHRjZW50ZXI6IHRoaXMub3B0aW9ucy5jZW50ZXIsXG5cdFx0XHR6b29tOiB0aGlzLm9wdGlvbnMuem9vbSxcblx0XHRcdGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2UsXG5cdFx0XHR6b29tQ29udHJvbDogZmFsc2UsXG5cdFx0XHRzY3JvbGxXaGVlbFpvb206IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMub25Jbml0LmVtaXQoKTtcblx0fVxuXG5cdC8vIExBWUVSU1xuXHRhZGRUaWxlTGF5ZXIobGF5ZXI6IExlYWZsZXRMYXllcikge1xuXHRcdGNvbnN0IHRpbGVMYXllciA9IG5ldyBMLlRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKHRpbGVMYXllcik7XG5cdFx0cmV0dXJuIHRpbGVMYXllcjtcblx0fVxuXG5cdGFkZEZlYXR1cmVMYXllcihjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyBlc3JpLmZlYXR1cmVMYXllcihjb25maWcpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKGZlYXR1cmVMYXllcik7XG5cdFx0cmV0dXJuIGZlYXR1cmVMYXllcjtcblx0fVxuXG5cdGFkZEdlb0pTT04oZ2VvSlNPTjogYW55LCBjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGdlb0pTT05MYXllciA9IEwuZ2VvSlNPTihnZW9KU09OLCBjb25maWcpO1xuXHRcdGdlb0pTT05MYXllci5hZGRUbyh0aGlzLm1hcCk7XG5cdFx0cmV0dXJuIGdlb0pTT05MYXllcjtcblx0fVxuXG5cdGZpdEZlYXR1cmVMYXllcnMoZmVhdHVyZUxheWVyczogYW55W10pIHtcblx0XHRjb25zdCBib3VuZHMgPSBMLmxhdExuZ0JvdW5kcygoW10pKTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cdFx0ZmVhdHVyZUxheWVycy5mb3JFYWNoKChmZWF0dXJlTGF5ZXIpID0+IHtcblx0XHRcdGZlYXR1cmVMYXllci5vbmNlKCdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdGZlYXR1cmVMYXllci5lYWNoRmVhdHVyZSgobGF5ZXI6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGJvdW5kcy5leHRlbmQobGF5ZXIuZ2V0Qm91bmRzKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoY291bnRlciA9PT0gZmVhdHVyZUxheWVycy5sZW5ndGggJiYgYm91bmRzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZUxheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLm1hcC5yZW1vdmVMYXllcihsYXllcik7XG5cdH1cblxuXHQvLyBGVUxMU0NSRUVOXG5cdHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XG5cdFx0dGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlbjtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLmludmFsaWRhdGVTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gWk9PTUlOR1xuXHR6b29tSW4oKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLnpvb21JbigpO1xuXHRcdH1cblx0fVxuXG5cdHpvb21JbkRpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWF4Wm9vbSgpIDw9IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR6b29tT3V0KCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC56b29tT3V0KCk7XG5cdFx0fVxuXHR9XG5cblx0em9vbU91dERpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWluWm9vbSgpID49IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBDRU5URVJJTkdcblx0bG9jYXRlKCkge1xuXHRcdGlmICghdGhpcy5sb2NhdGluZyAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLmxvY2F0aW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubWFwLmxvY2F0ZSgpO1xuXHRcdFx0dGhpcy5tYXAub24oJ2xvY2F0aW9uZm91bmQnLCAoZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9jYXRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXAuc2V0VmlldyhlLmxhdGxuZywgMTkpO1xuXHRcdFx0XHR0aGlzLm1hcC5vZmYoJ2xvY2F0aW9uZm91bmQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldFZpZXcoY2VudGVyOiBMLkxhdExuZ0V4cHJlc3Npb24sIHpvb206IG51bWJlcikge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC5zZXRWaWV3KGNlbnRlciwgem9vbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRFJBV0lOR1xuXHRzd2l0Y2hUb0RyYWdnaW5nID0gKCkgPT4ge1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBR0dJTkc7XG5cdFx0aWYgKHRoaXMucG9seWdvbkRyYXdlcikge1xuXHRcdFx0dGhpcy5wb2x5Z29uRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKHRoaXMubGluZURyYXdlcikge1xuXHRcdFx0dGhpcy5saW5lRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMubGluZURyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dGhpcy5tYXAub2ZmKEwuRHJhdy5FdmVudC5DUkVBVEVEKTtcblx0XHR0aGlzLm1hcC5vZmYoTC5EcmF3LkV2ZW50LkRSQVdTVE9QKTtcblx0fVxuXG5cdC8vIERSQVdJTkc6IFBPTFlHT05cblx0c3dpdGNoVG9Qb2x5Z29uKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19QT0xZR09OO1xuXHRcdGlmICghdGhpcy5wb2x5Z29uRHJhd2VyKSB7XG5cdFx0XHR0aGlzLnBvbHlnb25EcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5Z29uJ10odGhpcy5tYXAsIHtcblx0XHRcdFx0c2hhcGVPcHRpb25zOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yID8ge1xuXHRcdFx0XHRcdGNvbG9yOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yLFxuXHRcdFx0XHR9IDoge30sXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlci5lbmFibGUoKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCB0aGlzLmhhbmRsZURyYXdQb2x5Z29uKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5EUkFXU1RPUCwgdGhpcy5zd2l0Y2hUb0RyYWdnaW5nKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVEcmF3UG9seWdvbiA9IChlOiBhbnkpID0+IHtcblx0XHR0aGlzLm1hcC5hZGRMYXllcihlLmxheWVyKTtcblx0XHR0aGlzLm9wdGlvbnMub25BZGRQb2x5Z29uKGUubGF5ZXIpO1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHR9XG5cblx0Ly8gRFJBV0lORzogTElORVNcblx0c3dpdGNoVG9MaW5lKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19MSU5FO1xuXHRcdGlmICghdGhpcy5saW5lRHJhd2VyKSB7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5bGluZSddKHRoaXMubWFwLCB7XG5cdFx0XHRcdHNoYXBlT3B0aW9uczogdGhpcy5vcHRpb25zLmxpbmVDb2xvciA/IHtcblx0XHRcdFx0XHRjb2xvcjogdGhpcy5vcHRpb25zLmxpbmVDb2xvcixcblx0XHRcdFx0fSA6IHt9LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIuZW5hYmxlKCk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuQ1JFQVRFRCwgdGhpcy5oYW5kbGVEcmF3TGluZSk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuRFJBV1NUT1AsIHRoaXMuc3dpdGNoVG9EcmFnZ2luZyk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlRHJhd0xpbmUgPSAoZTogYW55KSA9PiB7XG5cdFx0dGhpcy5tYXAuYWRkTGF5ZXIoZS5sYXllcik7XG5cdFx0dGhpcy5vcHRpb25zLm9uQWRkTGluZShlLmxheWVyKTtcblx0XHR0aGlzLnN3aXRjaFRvRHJhZ2dpbmcoKTtcblx0fVxuXG5cdC8vIEVESVQ6IExBWUVSXG5cdHN0YXJ0RWRpdExheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLnN0b3BFZGl0TGF5ZXIoKTtcblx0XHR0aGlzLmVkaXRpbmdMYXllciA9IGxheWVyO1xuXHRcdC8vIFRPRE86IHRlbXAgd29ya2Fyb3VuZCBmb3IgY2hyb21lIDYyXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0xlYWZsZXQvTGVhZmxldC5kcmF3L2lzc3Vlcy84MDRcblx0XHR0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgPSB0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgfHwgKHRoaXMuZWRpdGluZ0xheWVyLm9wdGlvbnMuZWRpdGluZyA9IHt9KTtcblx0XHR0aGlzLmVkaXRpbmdMYXllci5lZGl0aW5nLmVuYWJsZSgpO1xuXG5cdFx0dGhpcy5tYXAub24oJ2NsaWNrJywgdGhpcy5zdG9wRWRpdExheWVyKTtcblxuXHRcdHRoaXMuZWRpdGluZ0xheWVyLm9uKCdlZGl0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIuZmVhdHVyZSA9IHRoaXMuZWRpdGluZ0xheWVyLnRvR2VvSlNPTigpO1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uRWRpdEZlYXR1cmUodGhpcy5lZGl0aW5nTGF5ZXIudG9HZW9KU09OKCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0c3RvcEVkaXRMYXllciA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5lZGl0aW5nTGF5ZXIpIHtcblx0XHRcdHRoaXMuZWRpdGluZ0xheWVyLmVkaXRpbmcuZGlzYWJsZSgpO1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIub2ZmKCdlZGl0Jyk7XG5cdFx0fVxuXHRcdHRoaXMubWFwLm9mZignY2xpY2snLCB0aGlzLnN0b3BFZGl0TGF5ZXIpO1xuXHR9XG5cblx0Ly8gTUFSS0VSU1xuXHRhZGRNYXJrZXIocG9zaXRpb246IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IGFueSkge1xuXHRcdHJldHVybiBMLm1hcmtlcihwb3NpdGlvbiwgb3B0aW9ucykuYWRkVG8odGhpcy5tYXApO1xuXHR9XG5cblx0YWRkSHRtbE1hcmtlcihwb3NpdGlvbjogTC5MYXRMbmdFeHByZXNzaW9uLCBodG1sOiBzdHJpbmcpIHtcblx0XHRjb25zdCBjdXN0b21JY29uID0gTC5kaXZJY29uKHsgaHRtbDogaHRtbCwgY2xhc3NOYW1lOiAnYXVpLWxlYWZsZXRfX2h0bWwtaWNvbicgfSk7XG5cdFx0cmV0dXJuIEwubWFya2VyKHBvc2l0aW9uLCB7XG5cdFx0XHRpY29uOiBjdXN0b21JY29uLFxuXHRcdH0pLmFkZFRvKHRoaXMubWFwKTtcblx0fVxufVxuIl19