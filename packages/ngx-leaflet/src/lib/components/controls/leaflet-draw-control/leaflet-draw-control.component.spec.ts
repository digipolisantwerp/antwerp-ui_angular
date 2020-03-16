import {LeafletDrawControlComponent} from './leaflet-draw-control.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {FlyoutModule} from '@acpaas-ui/ngx-flyout';

import {LeafletMap} from '../../../classes/leaflet-map';
import {MapService} from '../../../services/map.service';

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
      center: [51.215, 4.425],
    }, mapService);
  });

  it('should switch to polygons', () => {
    const polygonSpy = spyOn(comp.map, 'switchToPolygon');
    fixture.debugElement.query(By.css('li:first-child a')).triggerEventHandler('click', null);
    expect(polygonSpy).toHaveBeenCalled();
  });

  it('should switch to lines', () => {
    const lineSpy = spyOn(comp.map, 'switchToLine');
    fixture.debugElement.query(By.css('li:last-child a')).triggerEventHandler('click', null);
    expect(lineSpy).toHaveBeenCalled();
  });
});
