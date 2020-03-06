import {LeafletDragControlComponent} from './leaflet-drag-control.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {LeafletMap} from '../../../classes/leaflet-map';
import {LeafletControlComponent} from '../leaflet-control/leaflet-control.component';
import {MapService} from '../../../services/map.service';

describe('The leaflet drag control component', () => {
  let fixture: ComponentFixture<LeafletDragControlComponent>;
  let comp: LeafletDragControlComponent;
  let mapService: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletDragControlComponent,
        LeafletControlComponent,
      ],
      providers: [
        MapService,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LeafletDragControlComponent);
    comp = fixture.componentInstance;
    mapService = TestBed.get(MapService);
    comp.map = new LeafletMap({
      zoom: 13,
      center: [51.215, 4.425],
    }, mapService);
  });

  it('should switch to the drag control', () => {
    const switchSpy = spyOn(comp.map, 'switchToDragging');
    fixture.debugElement.query(By.directive(LeafletControlComponent)).triggerEventHandler('click', null);
    expect(switchSpy).toHaveBeenCalled();
  });
});
