import { LeafletFullscreenControlComponent } from './leaflet-fullscreen-control.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LeafletMap } from '../../../classes/leaflet-map';
import { LeafletControlComponent } from '../leaflet-control/leaflet-control.component';

describe('The leaflet full screen control component', () => {
	let fixture: ComponentFixture<LeafletFullscreenControlComponent>;
	let comp: LeafletFullscreenControlComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				LeafletFullscreenControlComponent,
				LeafletControlComponent,
			],
		}).compileComponents();
		fixture = TestBed.createComponent(LeafletFullscreenControlComponent);
		comp = fixture.componentInstance;
		comp.map = new LeafletMap({
			zoom: 13,
			center: [51.215, 4.425],
		});
	});

	it('should switch to the full screen control', () => {
		const switchSpy = spyOn(comp.map, 'toggleFullScreen');
		fixture.debugElement.query(By.directive(LeafletControlComponent)).triggerEventHandler('click', null);
		expect(switchSpy).toHaveBeenCalled();
	});
});
