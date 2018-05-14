import {
    AfterViewInit, Component, ElementRef, Input, ViewChild, ContentChild, AfterContentInit, ViewEncapsulation
} from '@angular/core';
import { LeafletMap } from './leaflet-map';
import * as controls from './controls';

@Component({
    selector: 'aui-leaflet',
    templateUrl: './leaflet.component.html',
    styleUrls: ['./leaflet.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LeafletComponent implements AfterViewInit, AfterContentInit {
    @ViewChild('map') map: ElementRef;
    @ViewChild('content') content: ElementRef;
    @ContentChild(controls.LeafletFullscreenControlComponent) fullScreenControl: controls.LeafletFullscreenControlComponent;
    @ContentChild(controls.LeafletZoomControlComponent) zoomControl: controls.LeafletZoomControlComponent;
    @ContentChild(controls.LeafletLocateControlComponent) locateControl: controls.LeafletLocateControlComponent;
    @ContentChild(controls.LeafletDragControlComponent) dragControl: controls.LeafletDragControlComponent;
    @ContentChild(controls.LeafletDrawControlComponent) drawControl: controls.LeafletDrawControlComponent;
    @Input() leafletMap: LeafletMap;
    @Input() hasSidebar;

    ngAfterViewInit() {
        // Make sure the map is properly rendered before initializing it
        setTimeout(() => {
            this.leafletMap.init(this.map.nativeElement);
        });
    }

    ngAfterContentInit() {
        [
            this.fullScreenControl,
            this.zoomControl,
            this.locateControl,
            this.dragControl,
            this.drawControl
        ].forEach(control => control ? control.map = this.leafletMap : null);
    }
}
