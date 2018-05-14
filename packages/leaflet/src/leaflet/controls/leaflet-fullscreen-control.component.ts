import { Component } from '@angular/core';
import { LeafletMap } from '../leaflet-map';

@Component({
    selector: 'aui-leaflet-fullscreen-control',
    template: `<aui-leaflet-control (click)="map?.toggleFullScreen()" icon="arrows-alt"></aui-leaflet-control>`
})
export class LeafletFullscreenControlComponent {
    map: LeafletMap;
}
