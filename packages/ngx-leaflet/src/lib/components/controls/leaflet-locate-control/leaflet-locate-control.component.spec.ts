import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {LeafletMap} from '../../../classes/leaflet-map';
import {LeafletControlComponent} from '../leaflet-control/leaflet-control.component';
import {LeafletLocateControlComponent} from './leaflet-locate-control.component';
import {MapService} from '../../../services/map.service';

describe('The leaflet locate control component', () => {
  let fixture: ComponentFixture<LeafletLocateControlComponent>;
  let comp: LeafletLocateControlComponent;
  let mapService: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletLocateControlComponent,
        LeafletControlComponent,
      ],
      providers: [
        MapService,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LeafletLocateControlComponent);
    comp = fixture.componentInstance;
    mapService = TestBed.get(MapService);
    comp.map = new LeafletMap({
      zoom: 13,
      center: [51.215, 4.425],
    }, mapService);
  });

  it('should search for the current location', () => {
    const locateSpy = spyOn(comp.map, 'locate');
    fixture.debugElement.query(By.directive(LeafletControlComponent)).triggerEventHandler('click', null);
    expect(locateSpy).toHaveBeenCalled();
  });
});
