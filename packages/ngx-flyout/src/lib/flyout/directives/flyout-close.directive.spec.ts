import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {By} from '@angular/platform-browser';

import {FlyoutService} from '../services/flyout.service';
import {FlyoutState} from '../types/flyout.types';

import {FlyoutDirective} from './flyout.directive';
import {FlyoutCloseDirective} from './flyout-close.directive';

import {Subject} from 'rxjs';

class MockFlyoutService {
  public state$ = new Subject<FlyoutState>();

  public close() {
    this.state$.next(FlyoutState.CLOSED);
  }
}

@Component({
  selector: 'aui-app',
  template: `<div auiFlyout>
		<button type="button" class="button danger" auiFlyoutClose #auiFlyoutClose="auiFlyoutClose">Close</button>
	</div>`,
})
class FlyoutComponent {
  // Access directive
  @ViewChild('auiFlyoutClose', {static: true}) element;
}

describe('Flyout close directive', () => {
  let comp: FlyoutComponent;
  let fixture: ComponentFixture<FlyoutComponent>;
  let componentDebugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlyoutDirective,
        FlyoutComponent,
        FlyoutCloseDirective,
      ],
      providers: [
        {provide: FlyoutService, useClass: MockFlyoutService},
      ],
    });

    TestBed.compileComponents();
    fixture = TestBed.createComponent(FlyoutComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    componentDebugElement = fixture.debugElement.query(By.directive(FlyoutCloseDirective));
    componentElement = componentDebugElement.nativeElement as HTMLElement;
  }));

  it('should close onClick', () => {
    spyOn(comp.element.flyout, 'close');
    comp.element.onClick();
    expect(comp.element.flyout.close).toHaveBeenCalled();
  });

  it('should close when focused and spacebar is pressed', () => {
    spyOn(comp.element.flyout, 'close');
    componentElement.focus();
    componentDebugElement.triggerEventHandler('keydown', {
      code: 'Space',
      keyCode: 32,
    });

    expect(comp.element.flyout.close).toHaveBeenCalled();
  });

  it('should close when focused and enter is pressed', () => {
    spyOn(comp.element.flyout, 'close');
    componentElement.focus();
    componentDebugElement.triggerEventHandler('keydown', {
      code: 'Enter',
      keyCode: 13,
    });

    expect(comp.element.flyout.close).toHaveBeenCalled();
  });
});
