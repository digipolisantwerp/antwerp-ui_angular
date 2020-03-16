import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LeafletComponent} from './leaflet.component';
import {LeafletMap} from '../../classes/leaflet-map';

import {LeafletFullscreenControlComponent} from '../controls/leaflet-fullscreen-control/leaflet-fullscreen-control.component';
import {LeafletDragControlComponent} from '../controls/leaflet-drag-control/leaflet-drag-control.component';
import {LeafletDrawControlComponent} from '../controls/leaflet-draw-control/leaflet-draw-control.component';
import {LeafletZoomControlComponent} from '../controls/leaflet-zoom-control/leaflet-zoom-control.component';
import {LeafletLocateControlComponent} from '../controls/leaflet-locate-control/leaflet-locate-control.component';

import {LeafletModule} from '../../leaflet.module';
import {MapService} from '../../services/map.service';

@Component({
  template: `
    <aui-leaflet [leafletMap]="leafletMap" [hasSidebar]="shouldHaveContent">
      <p>Test</p>
      <div controls top left>
        <aui-leaflet-fullscreen-control></aui-leaflet-fullscreen-control>
      </div>
      <div controls top right>
        <aui-leaflet-drag-control></aui-leaflet-drag-control>
        <aui-leaflet-draw-control></aui-leaflet-draw-control>
      </div>
      <div controls bottom left>
        <aui-leaflet-zoom-control></aui-leaflet-zoom-control>
      </div>
      <div controls bottom right>
        <aui-leaflet-locate-control></aui-leaflet-locate-control>
      </div>
    </aui-leaflet>
  `,
})
class TestLeafletComponent {
  mapService = TestBed.get(MapService);
  shouldHaveContent = false;
  leafletMap = new LeafletMap({
    zoom: 13,
    center: [51.215, 4.425],
  }, this.mapService);
}

// Mock timeout
window.setTimeout = (cb: () => void, tm): number => {
  cb();
  return 0;
};

describe('The leaflet component', () => {
  let fixture: ComponentFixture<TestLeafletComponent>;
  let comp: LeafletComponent;
  let wrapperComp: TestLeafletComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LeafletModule,
      ],
      declarations: [
        TestLeafletComponent,
      ],
      providers: [
        MapService,
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(TestLeafletComponent);
    wrapperComp = fixture.componentInstance;
    comp = fixture.debugElement.query(By.directive(LeafletComponent)).injector.get(LeafletComponent);
  });

  it('should initialize the map', (done) => {
    const spy = spyOn(wrapperComp.leafletMap, 'init');
    fixture.detectChanges(false);

    setTimeout(() => {
      expect(spy).toHaveBeenCalledWith(comp.map.nativeElement);
      done();
    }, 100);
  });

  it('should hide the content when no content is passed', () => {
    fixture.detectChanges(false);
    expect(comp.hasSidebar).toBe(false);
  });

  it('should show the content when content is passed', () => {
    wrapperComp.shouldHaveContent = true;
    fixture.detectChanges(false);
    expect(comp.hasSidebar).toBe(true);
  });

  it('should display the controls at the correct position', () => {
    fixture.detectChanges(false);
    expect(
      fixture.debugElement.query(By.directive(LeafletFullscreenControlComponent)).parent.nativeElement.parentNode.classList
    ).toContain('o-leaflet__controls--top-left');
    expect(
      fixture.debugElement.query(By.directive(LeafletDragControlComponent)).parent.nativeElement.parentNode.classList
    ).toContain('o-leaflet__controls--top-right');
    expect(
      fixture.debugElement.query(By.directive(LeafletDrawControlComponent)).parent.nativeElement.parentNode.classList
    ).toContain('o-leaflet__controls--top-right');
    expect(
      fixture.debugElement.query(By.directive(LeafletZoomControlComponent)).parent.nativeElement.parentNode.classList
    ).toContain('o-leaflet__controls--bottom-left');
    expect(
      fixture.debugElement.query(By.directive(LeafletLocateControlComponent)).parent.nativeElement.parentNode.classList
    ).toContain('o-leaflet__controls--bottom-right');
  });

  it('should pass the map to each control', () => {
    fixture.detectChanges(false);
    expect(comp.fullScreenControl.map).toEqual(comp.leafletMap);
    expect(comp.dragControl.map).toEqual(comp.leafletMap);
    expect(comp.drawControl.map).toEqual(comp.leafletMap);
    expect(comp.locateControl.map).toEqual(comp.leafletMap);
    expect(comp.zoomControl.map).toEqual(comp.leafletMap);
  });
});
