import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	ViewChild,
	ContentChild,
	AfterContentInit,
	ViewEncapsulation,
} from '@angular/core';

import { LeafletMap } from '../../classes/leaflet-map';
import { LeafletFullscreenControlComponent } from '../controls/leaflet-fullscreen-control/leaflet-fullscreen-control.component';
import { LeafletZoomControlComponent } from '../controls/leaflet-zoom-control/leaflet-zoom-control.component';
import { LeafletLocateControlComponent } from '../controls/leaflet-locate-control/leaflet-locate-control.component';
import { LeafletDragControlComponent } from '../controls/leaflet-drag-control/leaflet-drag-control.component';
import { LeafletDrawControlComponent } from '../controls/leaflet-draw-control/leaflet-draw-control.component';

@Component({
	selector: 'aui-leaflet',
	templateUrl: './leaflet.component.html',
	styleUrls: ['./leaflet.component.scss'], // @todo: move this to aui-kit/core branding? check with styleguide team
	encapsulation: ViewEncapsulation.None,
})
export class LeafletComponent implements AfterViewInit, AfterContentInit {
	@ViewChild('map') map: ElementRef;
	@ViewChild('content') content: ElementRef;
	@ContentChild(LeafletFullscreenControlComponent) fullScreenControl: LeafletFullscreenControlComponent;
	@ContentChild(LeafletZoomControlComponent) zoomControl: LeafletZoomControlComponent;
	@ContentChild(LeafletLocateControlComponent) locateControl: LeafletLocateControlComponent;
	@ContentChild(LeafletDragControlComponent) dragControl: LeafletDragControlComponent;
	@ContentChild(LeafletDrawControlComponent) drawControl: LeafletDrawControlComponent;
	@Input() leafletMap: LeafletMap;
	@Input() hasSidebar = false;

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
			this.drawControl,
		].forEach(control => control ? control.map = this.leafletMap : null);
	}
}
