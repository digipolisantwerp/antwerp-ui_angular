import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LeafletMap } from '../../../classes/leaflet-map';
import { LeafletControlComponent } from '../leaflet-control/leaflet-control.component';
import { LeafletZoomControlComponent } from './leaflet-zoom-control.component';

describe('The leaflet zoom control component', () => {
	let fixture: ComponentFixture<LeafletZoomControlComponent>;
	let comp: LeafletZoomControlComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				LeafletZoomControlComponent,
				LeafletControlComponent,
			],
		}).compileComponents();
		fixture = TestBed.createComponent(LeafletZoomControlComponent);
		comp = fixture.componentInstance;
		comp.map = new LeafletMap({
			zoom: 13,
			center: [51.215, 4.425],
		});
	});

	it('should zoom in', () => {
		const switchSpy = spyOn(comp.map, 'zoomIn');
		fixture.debugElement.queryAll(By.directive(LeafletControlComponent))[0].triggerEventHandler('click', null);
		expect(switchSpy).toHaveBeenCalled();
	});

	it('should zoom out', () => {
		const switchSpy = spyOn(comp.map, 'zoomOut');
		fixture.debugElement.queryAll(By.directive(LeafletControlComponent))[1].triggerEventHandler('click', null);
		expect(switchSpy).toHaveBeenCalled();
	});
});
