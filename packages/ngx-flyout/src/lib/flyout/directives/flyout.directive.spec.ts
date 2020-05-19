import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {By} from '@angular/platform-browser';

import {FlyoutDirective} from './flyout.directive';
import {FlyoutZoneDirective} from './flyout-zone.directive';

import {FlyoutService} from '../services/flyout.service';
import {FlyoutState} from '../types/flyout.types';

import {Subject} from 'rxjs';

class MockFlyoutService {
  public state$ = new Subject<FlyoutState>();

  public close() {
    this.state$.next(FlyoutState.CLOSED);
  }
}

@Component({
  selector: 'aui-app',
  template: `<div class="dummyElement"></div><div auiFlyout></div>`,
})
class FlyoutComponent {
}

@Component({
  selector: 'aui-app',
  template: `<div class="dummyElement"></div>
               <div auiFlyout #auiFlyout="auiFlyout">
                    <div auiFlyoutZone><div class="inZone"></div></div>
                </div>`,
})
class FlyoutWithZoneComponent {
  // Access directive
  @ViewChild('auiFlyout', {static: true}) element;
}

describe('Flyout directive with flyout zone', () => {
  let comp: FlyoutWithZoneComponent;
  let fixture: ComponentFixture<FlyoutWithZoneComponent>;
  let componentDebugElement: DebugElement;
  let flyout: FlyoutDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlyoutDirective,
        FlyoutWithZoneComponent,
        FlyoutZoneDirective,
      ],
      providers: [
        {provide: FlyoutService, useClass: MockFlyoutService},
      ],
    });

    TestBed.compileComponents();
    fixture = TestBed.createComponent(FlyoutWithZoneComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    componentDebugElement = fixture.debugElement.query(By.directive(FlyoutDirective));
    flyout = componentDebugElement.injector.get(FlyoutDirective);
  }));

  it('should not be in closable zone', () => {
    const element = fixture.debugElement.query(By.css('.dummyElement'));
    expect(flyout.isInClosableZone(element.nativeElement)).toBeFalsy();
  });

  it('should be in closable zone', () => {
    const element = fixture.debugElement.query(By.css('.inZone'));
    expect(flyout.isInClosableZone(element.nativeElement)).toBeTruthy();
  });
});

describe('Flyout directive without flyout zone', () => {
  let flyout: FlyoutDirective;
  let fixture: ComponentFixture<FlyoutComponent>;
  let componentDebugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlyoutDirective,
        FlyoutComponent,
      ],
      providers: [
        {provide: FlyoutService, useClass: MockFlyoutService},
      ],
    });

    TestBed.compileComponents();
    fixture = TestBed.createComponent(FlyoutComponent);
    fixture.detectChanges();
    componentDebugElement = fixture.debugElement.query(By.directive(FlyoutDirective));
    componentElement = componentDebugElement.nativeElement as HTMLElement;
    flyout = componentDebugElement.injector.get(FlyoutDirective);
  }));

  it('should open and close', () => {
    flyout.open();
    fixture.detectChanges();

    expect(componentElement.className).toContain('is-open');
    expect(flyout.isOpened).toBeTruthy();

    flyout.close();
    fixture.detectChanges();

    expect(componentElement.className).not.toContain('is-open');
    expect(flyout.isOpened).toBeFalsy();

  });

  it('should not be in closable zone', () => {
    const element = fixture.debugElement.query(By.css('.dummyElement'));
    expect(flyout.isInClosableZone(element.nativeElement)).toBeFalsy();
  });

  it('should subscribe on flyoutService', inject([FlyoutService], (flyoutService: FlyoutService) => {
    flyoutService.close();
    expect(flyout.isOpened).toBeFalsy();
  }));
});
