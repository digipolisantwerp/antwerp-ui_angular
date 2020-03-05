import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {LeafletMap} from '../../../classes/leaflet-map';
import {LeafletControlComponent} from '../leaflet-control/leaflet-control.component';
import {LeafletZoomControlComponent} from './leaflet-zoom-control.component';
import {MapService} from '../../../services/map.service';

describe('The leaflet zoom control component', () => {
  let fixture: ComponentFixture<LeafletZoomControlComponent>;
  let comp: LeafletZoomControlComponent;
  let mapService: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletZoomControlComponent,
        LeafletControlComponent,
      ],
      providers: [
        MapService,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LeafletZoomControlComponent);
    comp = fixture.componentInstance;
    mapService = TestBed.get(MapService);
    comp.map = new LeafletMap({
      zoom: 13,
      center: [51.215, 4.425],
    }, mapService);
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
