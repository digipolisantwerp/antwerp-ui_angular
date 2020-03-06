import {LeafletFullscreenControlComponent} from './leaflet-fullscreen-control.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {LeafletMap} from '../../../classes/leaflet-map';
import {LeafletControlComponent} from '../leaflet-control/leaflet-control.component';
import {MapService} from '../../../services/map.service';

describe('The leaflet full screen control component', () => {
  let fixture: ComponentFixture<LeafletFullscreenControlComponent>;
  let comp: LeafletFullscreenControlComponent;
  let mapService: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletFullscreenControlComponent,
        LeafletControlComponent,
      ],
      providers: [
        MapService,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LeafletFullscreenControlComponent);
    comp = fixture.componentInstance;
    mapService = TestBed.get(MapService);
    comp.map = new LeafletMap({
      zoom: 13,
      center: [51.215, 4.425],
    }, mapService);
  });

  it('should switch to the full screen control', () => {
    const switchSpy = spyOn(comp.map, 'toggleFullScreen');
    fixture.debugElement.query(By.directive(LeafletControlComponent)).triggerEventHandler('click', null);
    expect(switchSpy).toHaveBeenCalled();
  });
});
