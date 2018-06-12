import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LeafletMap } from '../../../classes/leaflet-map';
import { LeafletControlComponent } from '../leaflet-control/leaflet-control.component';
import { LeafletLocateControlComponent } from './leaflet-locate-control.component';

describe('The leaflet locate control component', () => {
	let fixture: ComponentFixture<LeafletLocateControlComponent>;
	let comp: LeafletLocateControlComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				LeafletLocateControlComponent,
				LeafletControlComponent,
			],
		}).compileComponents();
		fixture = TestBed.createComponent(LeafletLocateControlComponent);
		comp = fixture.componentInstance;
		comp.map = new LeafletMap({
			zoom: 13,
			center: [51.215, 4.425],
		});
	});

	it('should search for the current location', () => {
		const locateSpy = spyOn(comp.map, 'locate');
		fixture.debugElement.query(By.directive(LeafletControlComponent)).triggerEventHandler('click', null);
		expect(locateSpy).toHaveBeenCalled();
	});
});
