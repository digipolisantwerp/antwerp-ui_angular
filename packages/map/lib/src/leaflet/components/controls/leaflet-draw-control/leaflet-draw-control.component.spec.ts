import { LeafletDrawControlComponent } from './leaflet-draw-control.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import { LatLng } from 'leaflet';

import { LeafletMap } from '../../../classes/leaflet-map';
import { MapService } from '../../../services/map.service';

describe('The leaflet draw control component', () => {
	let fixture: ComponentFixture<LeafletDrawControlComponent>;
	let comp: LeafletDrawControlComponent;
	let mapService: MapService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				FlyoutModule,
			],
			declarations: [
				LeafletDrawControlComponent,
			],
			providers: [
				MapService,
			],
		}).compileComponents();
		fixture = TestBed.createComponent(LeafletDrawControlComponent);
		comp = fixture.componentInstance;
		mapService = TestBed.get(MapService);
		comp.map = new LeafletMap({
			zoom: 13,
			center: new LatLng(51.215, 4.425),
		}, mapService);
	});

	it('should draw', () => {
		const drawSpy = spyOn(comp.map, 'draw');
		fixture.debugElement.query(By.css('li:first-child a')).triggerEventHandler('click', null);
		expect(drawSpy).toHaveBeenCalled();
	});
});
