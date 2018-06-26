import { AfterViewInit, ElementRef, AfterContentInit } from '@angular/core';
import { LeafletMap } from '../../classes/leaflet-map';
import { LeafletFullscreenControlComponent } from '../controls/leaflet-fullscreen-control/leaflet-fullscreen-control.component';
import { LeafletZoomControlComponent } from '../controls/leaflet-zoom-control/leaflet-zoom-control.component';
import { LeafletLocateControlComponent } from '../controls/leaflet-locate-control/leaflet-locate-control.component';
import { LeafletDragControlComponent } from '../controls/leaflet-drag-control/leaflet-drag-control.component';
import { LeafletDrawControlComponent } from '../controls/leaflet-draw-control/leaflet-draw-control.component';
export declare class LeafletComponent implements AfterViewInit, AfterContentInit {
    map: ElementRef;
    content: ElementRef;
    fullScreenControl: LeafletFullscreenControlComponent;
    zoomControl: LeafletZoomControlComponent;
    locateControl: LeafletLocateControlComponent;
    dragControl: LeafletDragControlComponent;
    drawControl: LeafletDrawControlComponent;
    leafletMap: LeafletMap;
    hasSidebar: any;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
}
