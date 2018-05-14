import { Component } from '@angular/core';
import { LeafletMap } from '../leaflet-map';

@Component({
    selector: 'aui-leaflet-drag-control',
    template: `<aui-leaflet-control (click)="map?.switchToDragging()" icon="hand-paper-o"></aui-leaflet-control>`
})
export class LeafletDragControlComponent {
    map: LeafletMap;
}
