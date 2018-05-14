import { Component } from '@angular/core';
import { LeafletMap } from '../leaflet-map';

@Component({
    selector: 'aui-leaflet-locate-control',
    template: `<aui-leaflet-control icon="crosshairs" (click)="map?.locate()" [disabled]="map?.locating"></aui-leaflet-control>`
})
export class LeafletLocateControlComponent {
    map: LeafletMap;
}
