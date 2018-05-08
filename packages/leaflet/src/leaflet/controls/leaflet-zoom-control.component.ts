import { Component } from '@angular/core';
import { LeafletMap } from '../leaflet-map';
@Component({
    selector: 'aui-leaflet-zoom-control',
    template: `
        <aui-leaflet-control
                class="aui-leaflet__zoom-control"
                icon="plus" (click)="map?.zoomIn()"
                [disabled]="map?.zoomInDisabled()"></aui-leaflet-control>
        <aui-leaflet-control
                class="aui-leaflet__zoom-control"
                icon="minus" (click)="map?.zoomOut()"
                [disabled]="map?.zoomOutDisabled()"></aui-leaflet-control>
    `
})
export class LeafletZoomControlComponent {
    map: LeafletMap;
}
