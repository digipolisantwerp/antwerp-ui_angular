import { EventEmitter, Component, Input, ViewChild, ContentChild, ViewEncapsulation, NgModule } from '@angular/core';
import { Draw, map, TileLayer, geoJSON, latLngBounds, marker, divIcon } from 'leaflet';
import { featureLayer } from 'esri-leaflet';
import 'leaflet-draw';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeafletMap {
    /**
     * @param {?} options
     */
    constructor(options) {
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
        this.switchToDragging = () => {
            this.mode = this.modes.DRAGGING;
            if (this.polygonDrawer) {
                this.polygonDrawer.disable();
                this.polygonDrawer = undefined;
            }
            if (this.lineDrawer) {
                this.lineDrawer.disable();
                this.lineDrawer = undefined;
            }
            this.map.off(Draw.Event.CREATED);
            this.map.off(Draw.Event.DRAWSTOP);
        };
        this.handleDrawPolygon = (e) => {
            this.map.addLayer(e.layer);
            this.options.onAddPolygon(e.layer);
            this.switchToDragging();
        };
        this.handleDrawLine = (e) => {
            this.map.addLayer(e.layer);
            this.options.onAddLine(e.layer);
            this.switchToDragging();
        };
        this.stopEditLayer = () => {
            if (this.editingLayer) {
                this.editingLayer.editing.disable();
                this.editingLayer.off('edit');
            }
            this.map.off('click', this.stopEditLayer);
        };
    }
    /**
     * @param {?} element
     * @return {?}
     */
    init(element) {
        this.initialized = true;
        this.map = map(element, {
            center: this.options.center,
            zoom: this.options.zoom,
            attributionControl: false,
            zoomControl: false,
            scrollWheelZoom: false,
        });
        this.onInit.emit();
    }
    /**
     * @param {?} layer
     * @return {?}
     */
    addTileLayer(layer) {
        const /** @type {?} */ tileLayer = new TileLayer(layer.url, layer.options);
        this.map.addLayer(tileLayer);
        return tileLayer;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    addFeatureLayer(config) {
        const /** @type {?} */ featureLayer$$1 = new featureLayer(config);
        this.map.addLayer(featureLayer$$1);
        return featureLayer$$1;
    }
    /**
     * @param {?} geoJSON
     * @param {?} config
     * @return {?}
     */
    addGeoJSON(geoJSON$$1, config) {
        const /** @type {?} */ geoJSONLayer = geoJSON(geoJSON$$1, config);
        geoJSONLayer.addTo(this.map);
        return geoJSONLayer;
    }
    /**
     * @param {?} featureLayers
     * @return {?}
     */
    fitFeatureLayers(featureLayers) {
        const /** @type {?} */ bounds = latLngBounds(([]));
        let /** @type {?} */ counter = 0;
        featureLayers.forEach((featureLayer$$1) => {
            featureLayer$$1.once('load', () => {
                counter++;
                featureLayer$$1.eachFeature((layer) => {
                    bounds.extend(layer.getBounds());
                });
                if (counter === featureLayers.length && bounds.isValid()) {
                    this.map.fitBounds(bounds);
                }
            });
        });
    }
    /**
     * @param {?} layer
     * @return {?}
     */
    removeLayer(layer) {
        this.map.removeLayer(layer);
    }
    /**
     * @return {?}
     */
    toggleFullScreen() {
        this.fullScreen = !this.fullScreen;
        setTimeout(() => {
            this.update();
        });
    }
    /**
     * @return {?}
     */
    update() {
        if (this.initialized) {
            this.map.invalidateSize();
        }
    }
    /**
     * @return {?}
     */
    zoomIn() {
        if (this.initialized) {
            this.map.zoomIn();
        }
    }
    /**
     * @return {?}
     */
    zoomInDisabled() {
        if (this.initialized) {
            return this.map.getMaxZoom() <= this.map.getZoom();
        }
        return true;
    }
    /**
     * @return {?}
     */
    zoomOut() {
        if (this.initialized) {
            this.map.zoomOut();
        }
    }
    /**
     * @return {?}
     */
    zoomOutDisabled() {
        if (this.initialized) {
            return this.map.getMinZoom() >= this.map.getZoom();
        }
        return true;
    }
    /**
     * @return {?}
     */
    locate() {
        if (!this.locating && this.initialized) {
            this.locating = true;
            this.map.locate();
            this.map.on('locationfound', (e) => {
                this.locating = false;
                this.map.setView(e.latlng, 19);
                this.map.off('locationfound');
            });
        }
    }
    /**
     * @param {?} center
     * @param {?} zoom
     * @return {?}
     */
    setView(center, zoom) {
        if (this.initialized) {
            this.map.setView(center, zoom);
        }
    }
    /**
     * @return {?}
     */
    switchToPolygon() {
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
    }
    /**
     * @return {?}
     */
    switchToLine() {
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
    }
    /**
     * @param {?} layer
     * @return {?}
     */
    startEditLayer(layer) {
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
    /**
     * @param {?} position
     * @param {?=} options
     * @return {?}
     */
    addMarker(position, options) {
        return marker(position, options).addTo(this.map);
    }
    /**
     * @param {?} position
     * @param {?} html
     * @return {?}
     */
    addHtmlMarker(position, html) {
        const /** @type {?} */ customIcon = divIcon({ html: html, className: 'aui-leaflet__html-icon' });
        return marker(position, {
            icon: customIcon,
        }).addTo(this.map);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeafletControlComponent {
}
LeafletControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-leaflet-control',
                template: `<button class="aui-leaflet__control a-button a-button--small has-icon" [disabled]="disabled">
	<i [class]="'fa fa-' + icon"></i>
</button>
`,
            },] },
];
LeafletControlComponent.propDecorators = {
    icon: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeafletDragControlComponent {
}
LeafletDragControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-leaflet-drag-control',
                template: `<aui-leaflet-control (click)="map?.switchToDragging()" icon="hand-paper-o"></aui-leaflet-control>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeafletDrawControlComponent {
}
LeafletDrawControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-leaflet-draw-control',
                template: `<div auiFlyout>
	<button auiFlyoutAction class="a-button a-button--small has-icon">
		<i class="fa fa-pencil"></i>
	</button>
	<div auiFlyoutZone>
		<ul class="m-selectable-list m-selectable-list--no-border">
			<li auiFlyoutClose><a (click)="map?.switchToPolygon()" class="m-selectable-list__item">Vorm intekenen</a></li>
			<li auiFlyoutClose><a (click)="map?.switchToLine()" class="m-selectable-list__item">Lijn/route intekenen</a></li>
		</ul>
	</div>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeafletFullscreenControlComponent {
}
LeafletFullscreenControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-leaflet-fullscreen-control',
                template: `<aui-leaflet-control (click)="map?.toggleFullScreen()" icon="arrows-alt"></aui-leaflet-control>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeafletLocateControlComponent {
}
LeafletLocateControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-leaflet-locate-control',
                template: `<aui-leaflet-control icon="crosshairs" (click)="map?.locate()" [disabled]="map?.locating"></aui-leaflet-control>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeafletZoomControlComponent {
}
LeafletZoomControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-leaflet-zoom-control',
                template: `<aui-leaflet-control
	class="aui-leaflet__zoom-control"
	icon="plus" (click)="map?.zoomIn()"
	[disabled]="map?.zoomInDisabled()"></aui-leaflet-control>
<aui-leaflet-control
	class="aui-leaflet__zoom-control"
	icon="minus" (click)="map?.zoomOut()"
	[disabled]="map?.zoomOutDisabled()"></aui-leaflet-control>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeafletComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Make sure the map is properly rendered before initializing it
        setTimeout(() => {
            this.leafletMap.init(this.map.nativeElement);
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        [
            this.fullScreenControl,
            this.zoomControl,
            this.locateControl,
            this.dragControl,
            this.drawControl,
        ].forEach(control => control ? control.map = this.leafletMap : null);
    }
}
LeafletComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-leaflet',
                template: `<div class="aui-leaflet" [ngClass]="{'is-full-screen': leafletMap.fullScreen}">
	<div class="aui-leaflet__content" [ngClass]="{'has-content': hasSidebar}" #content>
		<ng-content></ng-content>
	</div>
	<div class="aui-leaflet__wrapper">
		<div #map class="aui-leaflet__map"></div>
		<div class="aui-leaflet__controls aui-leaflet__controls--top-left">
			<ng-content select="[controls][top][left]"></ng-content>
		</div>
		<div class="aui-leaflet__controls aui-leaflet__controls--top-right">
			<ng-content select="[controls][top][right]"></ng-content>
		</div>
		<div class="aui-leaflet__controls aui-leaflet__controls--bottom-right">
			<ng-content select="[controls][bottom][right]"></ng-content>
		</div>
		<div class="aui-leaflet__controls aui-leaflet__controls--bottom-left">
			<ng-content select="[controls][bottom][left]"></ng-content>
		</div>
	</div>
</div>
`,
                styles: [`.aui-leaflet{border:1px solid #b0b0b0;display:flex;height:600px;width:100%}.aui-leaflet__wrapper{flex:1;height:100%;overflow:hidden;position:relative}.aui-leaflet.is-full-screen{border:none;bottom:0;position:fixed;height:100%;left:0;right:0;top:0;z-index:10}.aui-leaflet__map{font-size:inherit;font-family:inherit;height:100%;position:relative;z-index:1}.aui-leaflet__content{background-color:#fff;overflow:auto;width:0}.aui-leaflet.is-full-screen .aui-leaflet__content{border:1px solid #b0b0b0;box-shadow:7px 7px 0 rgba(0,0,0,.1);position:absolute;left:20px;max-height:calc(100% - 160px);top:20px;width:350px;z-index:2}.aui-leaflet__content.has-content{border-right:1px solid #b0b0b0;padding:20px;width:300px}.aui-leaflet__controls{position:absolute;z-index:2}.aui-leaflet__controls--bottom-left{bottom:20px;left:20px}.aui-leaflet__controls--bottom-right{bottom:20px;right:20px}.aui-leaflet__controls--top-left{left:20px;top:20px}.aui-leaflet.is-full-screen .aui-leaflet__controls--top-left{left:390px}.aui-leaflet__controls--top-right{right:20px;top:20px}.aui-leaflet__control{float:left}.aui-leaflet__controls--top-left .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-bottom:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--bottom-right .aui-leaflet__control{margin-top:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--top-left .aui-leaflet__control{margin-right:5px}.aui-leaflet__controls--bottom-right .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-left:5px}.aui-leaflet__zoom-control{display:block}.aui-leaflet__html-icon{background-color:transparent;border:none}.leaflet-popup-content-wrapper{border:1px solid #f3f3f3!important;border-radius:0!important;box-shadow:.5rem .5rem 0 rgba(0,0,0,.1)!important;position:relative}.leaflet-popup-content-wrapper::after{content:'';position:absolute;bottom:-1px;height:1px;background-color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:22px}.leaflet-popup-content{margin:10px!important;font-size:14px}.leaflet-container{font-family:inherit!important}.leaflet-popup-close-button{right:5px!important;top:5px!important;z-index:1}`],
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ baseMapWorldGray = {
    name: 'Base world gray',
    url: 'http://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    options: {
        subdomains: ['server', 'services'],
        maxNativeZoom: 16,
    },
};
const /** @type {?} */ baseMapAntwerp = {
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
const /** @type {?} */ Components = [
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
class LeafletModule {
}
LeafletModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FlyoutModule,
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
            },] },
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9tYXAvbGliL2xlYWZsZXQvY2xhc3Nlcy9sZWFmbGV0LW1hcC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvY29udHJvbHMvbGVhZmxldC1jb250cm9sL2xlYWZsZXQtY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvY29udHJvbHMvbGVhZmxldC1kcmF3LWNvbnRyb2wvbGVhZmxldC1kcmF3LWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9tYXAvbGliL2xlYWZsZXQvY29tcG9uZW50cy9jb250cm9scy9sZWFmbGV0LWZ1bGxzY3JlZW4tY29udHJvbC9sZWFmbGV0LWZ1bGxzY3JlZW4tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wvbGVhZmxldC1sb2NhdGUtY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtem9vbS1jb250cm9sL2xlYWZsZXQtem9vbS1jb250cm9sLmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvbGVhZmxldC9sZWFmbGV0LmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2xlYWZsZXQuY29uZi50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9sZWFmbGV0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgKiBhcyBlc3JpIGZyb20gJ2VzcmktbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XG5cbmltcG9ydCB7IExlYWZsZXRMYXllciwgTGVhZmxldE1hcE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9sZWFmbGV0LnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXAge1xuXHRwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cdHByaXZhdGUgcG9seWdvbkRyYXdlcjogYW55O1xuXHRwcml2YXRlIGxpbmVEcmF3ZXI6IGFueTtcblx0cHJpdmF0ZSBlZGl0aW5nTGF5ZXI6IGFueTtcblx0cHVibGljIG1hcDogTC5NYXA7XG5cdHB1YmxpYyBsb2NhdGluZyA9IGZhbHNlO1xuXHRwdWJsaWMgZnVsbFNjcmVlbiA9IGZhbHNlO1xuXHRwdWJsaWMgb25Jbml0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbW9kZXMgPSB7XG5cdFx0RFJBR0dJTkc6IDAsXG5cdFx0RFJBV0lOR19QT0xZR09OOiAxLFxuXHRcdERSQVdJTkdfTElORTogMixcblx0fTtcblx0cHVibGljIG1vZGUgPSB0aGlzLm1vZGVzLkRSQUdHSU5HO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBMZWFmbGV0TWFwT3B0aW9ucykge1xuXHR9XG5cblx0Ly8gTElGRUNZQ0xFXG5cdGluaXQoZWxlbWVudDogYW55KSB7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5tYXAgPSBMLm1hcChlbGVtZW50LCB7XG5cdFx0XHRjZW50ZXI6IHRoaXMub3B0aW9ucy5jZW50ZXIsXG5cdFx0XHR6b29tOiB0aGlzLm9wdGlvbnMuem9vbSxcblx0XHRcdGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2UsXG5cdFx0XHR6b29tQ29udHJvbDogZmFsc2UsXG5cdFx0XHRzY3JvbGxXaGVlbFpvb206IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMub25Jbml0LmVtaXQoKTtcblx0fVxuXG5cdC8vIExBWUVSU1xuXHRhZGRUaWxlTGF5ZXIobGF5ZXI6IExlYWZsZXRMYXllcikge1xuXHRcdGNvbnN0IHRpbGVMYXllciA9IG5ldyBMLlRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKHRpbGVMYXllcik7XG5cdFx0cmV0dXJuIHRpbGVMYXllcjtcblx0fVxuXG5cdGFkZEZlYXR1cmVMYXllcihjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyBlc3JpLmZlYXR1cmVMYXllcihjb25maWcpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKGZlYXR1cmVMYXllcik7XG5cdFx0cmV0dXJuIGZlYXR1cmVMYXllcjtcblx0fVxuXG5cdGFkZEdlb0pTT04oZ2VvSlNPTjogYW55LCBjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGdlb0pTT05MYXllciA9IEwuZ2VvSlNPTihnZW9KU09OLCBjb25maWcpO1xuXHRcdGdlb0pTT05MYXllci5hZGRUbyh0aGlzLm1hcCk7XG5cdFx0cmV0dXJuIGdlb0pTT05MYXllcjtcblx0fVxuXG5cdGZpdEZlYXR1cmVMYXllcnMoZmVhdHVyZUxheWVyczogYW55W10pIHtcblx0XHRjb25zdCBib3VuZHMgPSBMLmxhdExuZ0JvdW5kcygoW10pKTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cdFx0ZmVhdHVyZUxheWVycy5mb3JFYWNoKChmZWF0dXJlTGF5ZXIpID0+IHtcblx0XHRcdGZlYXR1cmVMYXllci5vbmNlKCdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdGZlYXR1cmVMYXllci5lYWNoRmVhdHVyZSgobGF5ZXI6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGJvdW5kcy5leHRlbmQobGF5ZXIuZ2V0Qm91bmRzKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoY291bnRlciA9PT0gZmVhdHVyZUxheWVycy5sZW5ndGggJiYgYm91bmRzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZUxheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLm1hcC5yZW1vdmVMYXllcihsYXllcik7XG5cdH1cblxuXHQvLyBGVUxMU0NSRUVOXG5cdHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XG5cdFx0dGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlbjtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLmludmFsaWRhdGVTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gWk9PTUlOR1xuXHR6b29tSW4oKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLnpvb21JbigpO1xuXHRcdH1cblx0fVxuXG5cdHpvb21JbkRpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWF4Wm9vbSgpIDw9IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR6b29tT3V0KCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC56b29tT3V0KCk7XG5cdFx0fVxuXHR9XG5cblx0em9vbU91dERpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWluWm9vbSgpID49IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBDRU5URVJJTkdcblx0bG9jYXRlKCkge1xuXHRcdGlmICghdGhpcy5sb2NhdGluZyAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLmxvY2F0aW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubWFwLmxvY2F0ZSgpO1xuXHRcdFx0dGhpcy5tYXAub24oJ2xvY2F0aW9uZm91bmQnLCAoZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9jYXRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXAuc2V0VmlldyhlLmxhdGxuZywgMTkpO1xuXHRcdFx0XHR0aGlzLm1hcC5vZmYoJ2xvY2F0aW9uZm91bmQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldFZpZXcoY2VudGVyOiBMLkxhdExuZ0V4cHJlc3Npb24sIHpvb206IG51bWJlcikge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC5zZXRWaWV3KGNlbnRlciwgem9vbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRFJBV0lOR1xuXHRzd2l0Y2hUb0RyYWdnaW5nID0gKCkgPT4ge1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBR0dJTkc7XG5cdFx0aWYgKHRoaXMucG9seWdvbkRyYXdlcikge1xuXHRcdFx0dGhpcy5wb2x5Z29uRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKHRoaXMubGluZURyYXdlcikge1xuXHRcdFx0dGhpcy5saW5lRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMubGluZURyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dGhpcy5tYXAub2ZmKEwuRHJhdy5FdmVudC5DUkVBVEVEKTtcblx0XHR0aGlzLm1hcC5vZmYoTC5EcmF3LkV2ZW50LkRSQVdTVE9QKTtcblx0fVxuXG5cdC8vIERSQVdJTkc6IFBPTFlHT05cblx0c3dpdGNoVG9Qb2x5Z29uKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19QT0xZR09OO1xuXHRcdGlmICghdGhpcy5wb2x5Z29uRHJhd2VyKSB7XG5cdFx0XHR0aGlzLnBvbHlnb25EcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5Z29uJ10odGhpcy5tYXAsIHtcblx0XHRcdFx0c2hhcGVPcHRpb25zOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yID8ge1xuXHRcdFx0XHRcdGNvbG9yOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yLFxuXHRcdFx0XHR9IDoge30sXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlci5lbmFibGUoKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCB0aGlzLmhhbmRsZURyYXdQb2x5Z29uKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5EUkFXU1RPUCwgdGhpcy5zd2l0Y2hUb0RyYWdnaW5nKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVEcmF3UG9seWdvbiA9IChlOiBhbnkpID0+IHtcblx0XHR0aGlzLm1hcC5hZGRMYXllcihlLmxheWVyKTtcblx0XHR0aGlzLm9wdGlvbnMub25BZGRQb2x5Z29uKGUubGF5ZXIpO1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHR9XG5cblx0Ly8gRFJBV0lORzogTElORVNcblx0c3dpdGNoVG9MaW5lKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19MSU5FO1xuXHRcdGlmICghdGhpcy5saW5lRHJhd2VyKSB7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5bGluZSddKHRoaXMubWFwLCB7XG5cdFx0XHRcdHNoYXBlT3B0aW9uczogdGhpcy5vcHRpb25zLmxpbmVDb2xvciA/IHtcblx0XHRcdFx0XHRjb2xvcjogdGhpcy5vcHRpb25zLmxpbmVDb2xvcixcblx0XHRcdFx0fSA6IHt9LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIuZW5hYmxlKCk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuQ1JFQVRFRCwgdGhpcy5oYW5kbGVEcmF3TGluZSk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuRFJBV1NUT1AsIHRoaXMuc3dpdGNoVG9EcmFnZ2luZyk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlRHJhd0xpbmUgPSAoZTogYW55KSA9PiB7XG5cdFx0dGhpcy5tYXAuYWRkTGF5ZXIoZS5sYXllcik7XG5cdFx0dGhpcy5vcHRpb25zLm9uQWRkTGluZShlLmxheWVyKTtcblx0XHR0aGlzLnN3aXRjaFRvRHJhZ2dpbmcoKTtcblx0fVxuXG5cdC8vIEVESVQ6IExBWUVSXG5cdHN0YXJ0RWRpdExheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLnN0b3BFZGl0TGF5ZXIoKTtcblx0XHR0aGlzLmVkaXRpbmdMYXllciA9IGxheWVyO1xuXHRcdC8vIFRPRE86IHRlbXAgd29ya2Fyb3VuZCBmb3IgY2hyb21lIDYyXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0xlYWZsZXQvTGVhZmxldC5kcmF3L2lzc3Vlcy84MDRcblx0XHR0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgPSB0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgfHwgKHRoaXMuZWRpdGluZ0xheWVyLm9wdGlvbnMuZWRpdGluZyA9IHt9KTtcblx0XHR0aGlzLmVkaXRpbmdMYXllci5lZGl0aW5nLmVuYWJsZSgpO1xuXG5cdFx0dGhpcy5tYXAub24oJ2NsaWNrJywgdGhpcy5zdG9wRWRpdExheWVyKTtcblxuXHRcdHRoaXMuZWRpdGluZ0xheWVyLm9uKCdlZGl0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIuZmVhdHVyZSA9IHRoaXMuZWRpdGluZ0xheWVyLnRvR2VvSlNPTigpO1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uRWRpdEZlYXR1cmUodGhpcy5lZGl0aW5nTGF5ZXIudG9HZW9KU09OKCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0c3RvcEVkaXRMYXllciA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5lZGl0aW5nTGF5ZXIpIHtcblx0XHRcdHRoaXMuZWRpdGluZ0xheWVyLmVkaXRpbmcuZGlzYWJsZSgpO1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIub2ZmKCdlZGl0Jyk7XG5cdFx0fVxuXHRcdHRoaXMubWFwLm9mZignY2xpY2snLCB0aGlzLnN0b3BFZGl0TGF5ZXIpO1xuXHR9XG5cblx0Ly8gTUFSS0VSU1xuXHRhZGRNYXJrZXIocG9zaXRpb246IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IGFueSkge1xuXHRcdHJldHVybiBMLm1hcmtlcihwb3NpdGlvbiwgb3B0aW9ucykuYWRkVG8odGhpcy5tYXApO1xuXHR9XG5cblx0YWRkSHRtbE1hcmtlcihwb3NpdGlvbjogTC5MYXRMbmdFeHByZXNzaW9uLCBodG1sOiBzdHJpbmcpIHtcblx0XHRjb25zdCBjdXN0b21JY29uID0gTC5kaXZJY29uKHsgaHRtbDogaHRtbCwgY2xhc3NOYW1lOiAnYXVpLWxlYWZsZXRfX2h0bWwtaWNvbicgfSk7XG5cdFx0cmV0dXJuIEwubWFya2VyKHBvc2l0aW9uLCB7XG5cdFx0XHRpY29uOiBjdXN0b21JY29uLFxuXHRcdH0pLmFkZFRvKHRoaXMubWFwKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldC1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2wgYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG5cdDxpIFtjbGFzc109XCInZmEgZmEtJyArIGljb25cIj48L2k+XG48L2J1dHRvbj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRDb250cm9sQ29tcG9uZW50IHtcblx0QElucHV0KCkgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYWctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGF1aS1sZWFmbGV0LWNvbnRyb2wgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9EcmFnZ2luZygpXCIgaWNvbj1cImhhbmQtcGFwZXItb1wiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYXctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQ+XG5cdDxidXR0b24gYXVpRmx5b3V0QWN0aW9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIj48L2k+XG5cdDwvYnV0dG9uPlxuXHQ8ZGl2IGF1aUZseW91dFpvbmU+XG5cdFx0PHVsIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3QgbS1zZWxlY3RhYmxlLWxpc3QtLW5vLWJvcmRlclwiPlxuXHRcdFx0PGxpIGF1aUZseW91dENsb3NlPjxhIChjbGljayk9XCJtYXA/LnN3aXRjaFRvUG9seWdvbigpXCIgY2xhc3M9XCJtLXNlbGVjdGFibGUtbGlzdF9faXRlbVwiPlZvcm0gaW50ZWtlbmVuPC9hPjwvbGk+XG5cdFx0XHQ8bGkgYXVpRmx5b3V0Q2xvc2U+PGEgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9MaW5lKClcIiBjbGFzcz1cIm0tc2VsZWN0YWJsZS1saXN0X19pdGVtXCI+TGlqbi9yb3V0ZSBpbnRla2VuZW48L2E+PC9saT5cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTGVhZmxldERyYXdDb250cm9sQ29tcG9uZW50IHtcblx0bWFwOiBMZWFmbGV0TWFwO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWxlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YXVpLWxlYWZsZXQtY29udHJvbCAoY2xpY2spPVwibWFwPy50b2dnbGVGdWxsU2NyZWVuKClcIiBpY29uPVwiYXJyb3dzLWFsdFwiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWxvY2F0ZS1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YXVpLWxlYWZsZXQtY29udHJvbCBpY29uPVwiY3Jvc3NoYWlyc1wiIChjbGljayk9XCJtYXA/LmxvY2F0ZSgpXCIgW2Rpc2FibGVkXT1cIm1hcD8ubG9jYXRpbmdcIj48L2F1aS1sZWFmbGV0LWNvbnRyb2w+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LXpvb20tY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGF1aS1sZWFmbGV0LWNvbnRyb2xcblx0Y2xhc3M9XCJhdWktbGVhZmxldF9fem9vbS1jb250cm9sXCJcblx0aWNvbj1cInBsdXNcIiAoY2xpY2spPVwibWFwPy56b29tSW4oKVwiXG5cdFtkaXNhYmxlZF09XCJtYXA/Lnpvb21JbkRpc2FibGVkKClcIj48L2F1aS1sZWFmbGV0LWNvbnRyb2w+XG48YXVpLWxlYWZsZXQtY29udHJvbFxuXHRjbGFzcz1cImF1aS1sZWFmbGV0X196b29tLWNvbnRyb2xcIlxuXHRpY29uPVwibWludXNcIiAoY2xpY2spPVwibWFwPy56b29tT3V0KClcIlxuXHRbZGlzYWJsZWRdPVwibWFwPy56b29tT3V0RGlzYWJsZWQoKVwiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdFZpZXdDaGlsZCxcblx0Q29udGVudENoaWxkLFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcbmltcG9ydCB7IExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LXpvb20tY29udHJvbC9sZWFmbGV0LXpvb20tY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWxvY2F0ZS1jb250cm9sL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhd0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWRyYXctY29udHJvbC9sZWFmbGV0LWRyYXctY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0XCIgW25nQ2xhc3NdPVwieydpcy1mdWxsLXNjcmVlbic6IGxlYWZsZXRNYXAuZnVsbFNjcmVlbn1cIj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250ZW50XCIgW25nQ2xhc3NdPVwieydoYXMtY29udGVudCc6IGhhc1NpZGViYXJ9XCIgI2NvbnRlbnQ+XG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X193cmFwcGVyXCI+XG5cdFx0PGRpdiAjbWFwIGNsYXNzPVwiYXVpLWxlYWZsZXRfX21hcFwiPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVt0b3BdW2xlZnRdXCI+PC9uZy1jb250ZW50PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtcmlnaHRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bdG9wXVtyaWdodF1cIj48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250cm9scyBhdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVtib3R0b21dW3JpZ2h0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2xzIGF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bYm90dG9tXVtsZWZ0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AuYXVpLWxlYWZsZXR7Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NjAwcHg7d2lkdGg6MTAwJX0uYXVpLWxlYWZsZXRfX3dyYXBwZXJ7ZmxleDoxO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW57Ym9yZGVyOm5vbmU7Ym90dG9tOjA7cG9zaXRpb246Zml4ZWQ7aGVpZ2h0OjEwMCU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMH0uYXVpLWxlYWZsZXRfX21hcHtmb250LXNpemU6aW5oZXJpdDtmb250LWZhbWlseTppbmhlcml0O2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uYXVpLWxlYWZsZXRfX2NvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO292ZXJmbG93OmF1dG87d2lkdGg6MH0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW4gLmF1aS1sZWFmbGV0X19jb250ZW50e2JvcmRlcjoxcHggc29saWQgI2IwYjBiMDtib3gtc2hhZG93OjdweCA3cHggMCByZ2JhKDAsMCwwLC4xKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjIwcHg7bWF4LWhlaWdodDpjYWxjKDEwMCUgLSAxNjBweCk7dG9wOjIwcHg7d2lkdGg6MzUwcHg7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udGVudC5oYXMtY29udGVudHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiMGIwYjA7cGFkZGluZzoyMHB4O3dpZHRoOjMwMHB4fS5hdWktbGVhZmxldF9fY29udHJvbHN7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1sZWZ0e2JvdHRvbToyMHB4O2xlZnQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS1ib3R0b20tcmlnaHR7Ym90dG9tOjIwcHg7cmlnaHQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdHtsZWZ0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0LmlzLWZ1bGwtc2NyZWVuIC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0e2xlZnQ6MzkwcHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0e3JpZ2h0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0X19jb250cm9se2Zsb2F0OmxlZnR9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLWJvdHRvbTo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLXRvcDo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tcmlnaHQ6NXB4fS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2wsLmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tbGVmdDo1cHh9LmF1aS1sZWFmbGV0X196b29tLWNvbnRyb2x7ZGlzcGxheTpibG9ja30uYXVpLWxlYWZsZXRfX2h0bWwtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lfS5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcntib3JkZXI6MXB4IHNvbGlkICNmM2YzZjMhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzouNXJlbSAuNXJlbSAwIHJnYmEoMCwwLDAsLjEpIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZX0ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXI6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xcHg7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aWR0aDoyMnB4fS5sZWFmbGV0LXBvcHVwLWNvbnRlbnR7bWFyZ2luOjEwcHghaW1wb3J0YW50O2ZvbnQtc2l6ZToxNHB4fS5sZWFmbGV0LWNvbnRhaW5lcntmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudH0ubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b257cmlnaHQ6NXB4IWltcG9ydGFudDt0b3A6NXB4IWltcG9ydGFudDt6LWluZGV4OjF9YF0sIC8vIEB0b2RvOiBtb3ZlIHRoaXMgdG8gYXVpLWtpdC9jb3JlIGJyYW5kaW5nPyBjaGVjayB3aXRoIHN0eWxlZ3VpZGUgdGVhbVxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cdEBWaWV3Q2hpbGQoJ21hcCcpIG1hcDogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50KSBmdWxsU2NyZWVuQ29udHJvbDogTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCkgem9vbUNvbnRyb2w6IExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudDtcblx0QENvbnRlbnRDaGlsZChMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCkgbG9jYXRlQ29udHJvbDogTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQ7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50KSBkcmFnQ29udHJvbDogTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCkgZHJhd0NvbnRyb2w6IExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudDtcblx0QElucHV0KCkgbGVhZmxldE1hcDogTGVhZmxldE1hcDtcblx0QElucHV0KCkgaGFzU2lkZWJhcjtcblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBtYXAgaXMgcHJvcGVybHkgcmVuZGVyZWQgYmVmb3JlIGluaXRpYWxpemluZyBpdFxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5sZWFmbGV0TWFwLmluaXQodGhpcy5tYXAubmF0aXZlRWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0W1xuXHRcdFx0dGhpcy5mdWxsU2NyZWVuQ29udHJvbCxcblx0XHRcdHRoaXMuem9vbUNvbnRyb2wsXG5cdFx0XHR0aGlzLmxvY2F0ZUNvbnRyb2wsXG5cdFx0XHR0aGlzLmRyYWdDb250cm9sLFxuXHRcdFx0dGhpcy5kcmF3Q29udHJvbCxcblx0XHRdLmZvckVhY2goY29udHJvbCA9PiBjb250cm9sID8gY29udHJvbC5tYXAgPSB0aGlzLmxlYWZsZXRNYXAgOiBudWxsKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTGVhZmxldExheWVyIH0gZnJvbSAnLi90eXBlcy9sZWFmbGV0LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGJhc2VNYXBXb3JsZEdyYXk6IExlYWZsZXRMYXllciA9IHtcblx0bmFtZTogJ0Jhc2Ugd29ybGQgZ3JheScsXG5cdHVybDogJ2h0dHA6Ly97c30uYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9DYW52YXMvV29ybGRfTGlnaHRfR3JheV9CYXNlL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9Jyxcblx0b3B0aW9uczoge1xuXHRcdHN1YmRvbWFpbnM6IFsnc2VydmVyJywgJ3NlcnZpY2VzJ10sXG5cdFx0bWF4TmF0aXZlWm9vbTogMTYsXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgYmFzZU1hcEFudHdlcnA6IExlYWZsZXRMYXllciA9IHtcblx0bmFtZTogJ0Jhc2UgYW50d2VycCcsXG5cdHVybDogJ2h0dHA6Ly9iYXNlbWFwLmFudHdlcnBlbi5iZS90aWxlL3t6fS97eX0ve3h9Jyxcblx0b3B0aW9uczoge1xuXHRcdG1pblpvb206IDEzLFxuXHRcdG1heE5hdGl2ZVpvb206IDE5LFxuXHRcdG1heFpvb206IDIxLFxuXHR9LFxufTtcbiIsImltcG9ydCB7IExlYWZsZXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9sZWFmbGV0LWNvbnRyb2wvbGVhZmxldC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhZ0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhd0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZHJhdy1jb250cm9sL2xlYWZsZXQtZHJhdy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RnVsbHNjcmVlbkNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGVhZmxldC1sb2NhdGUtY29udHJvbC9sZWFmbGV0LWxvY2F0ZS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtem9vbS1jb250cm9sL2xlYWZsZXQtem9vbS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Q29tcG9uZW50IH0gZnJvbSAnLi9sZWFmbGV0L2xlYWZsZXQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdExlYWZsZXRDb250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0RHJhZ0NvbnRyb2xDb21wb25lbnQsXG5cdExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCxcblx0TGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCxcblx0TGVhZmxldFpvb21Db250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0Q29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcblxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xuaW1wb3J0ICdsZWFmbGV0LWRyYXcvZGlzdC9sZWFmbGV0LmRyYXcuY3NzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRGbHlvdXRNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJMLkRyYXciLCJMLm1hcCIsIkwuVGlsZUxheWVyIiwiZmVhdHVyZUxheWVyIiwiZXNyaS5mZWF0dXJlTGF5ZXIiLCJnZW9KU09OIiwiTC5nZW9KU09OIiwiTC5sYXRMbmdCb3VuZHMiLCJMLm1hcmtlciIsIkwuZGl2SWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztJQXVCQyxZQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjsyQkFmdkIsS0FBSzt3QkFLVCxLQUFLOzBCQUNILEtBQUs7c0JBQ1QsSUFBSSxZQUFZLEVBQUU7cUJBQ25CO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxlQUFlLEVBQUUsQ0FBQztZQUNsQixZQUFZLEVBQUUsQ0FBQztTQUNmO29CQUNhLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTs7Z0NBdUhkO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzthQUMvQjtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsR0FBRyxD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