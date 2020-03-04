import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement, Directive, Input} from '@angular/core';

import {FlyoutButtonComponent} from './flyout-button.component';
import {FlyoutButtonSize} from '../../types/flyout-button.types';

@Directive({
  selector: '[auiFlyout]',
  exportAs: 'auiFlyout',
})
class MockFlyoutDirective {
  @Input() public size;
}

@Component({
  selector: 'aui-test-component',
  template: `
        <aui-flyout-button>
            <div id="test-projection"></div>
        </aui-flyout-button>
    `,
})
class TestComponent {
}

describe('The FlyoutButton Component', () => {
  let testComp: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;
  let testDe: DebugElement;
  let testEl: HTMLElement;
  let comp: FlyoutButtonComponent;
  let fixture: ComponentFixture<FlyoutButtonComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        MockFlyoutDirective,
        FlyoutButtonComponent,
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    testFixture = TestBed.createComponent(TestComponent);
    testComp = testFixture.componentInstance;
    testDe = testFixture.debugElement;
    testEl = testDe.nativeElement;

    fixture = TestBed.createComponent(FlyoutButtonComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.directive(MockFlyoutDirective));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should render at different sizes', () => {
    comp.buttonSize = FlyoutButtonSize.Small;

    fixture.detectChanges();
    expect(el.querySelector('.a-button').getAttribute('class')).toContain('a-button--small');
  });

  it('should have an outline option', () => {
    comp.outline = true;

    fixture.detectChanges();
    expect(el.getElementsByTagName('button')[0].getAttribute('class')).toContain('a-button-outline');
  });

  it('should apply the `has-icon` class when no label is present', () => {
    comp.icon = 'fa-trash';

    fixture.detectChanges();
    expect(el.querySelector('.a-button').getAttribute('class')).toContain('has-icon');
  });

  it('should apply the `has-icon-left` class when a label is present', () => {
    comp.icon = 'fa-trash';
    comp.label = 'Hello';

    fixture.detectChanges();
    expect(el.querySelector('.a-button').getAttribute('class')).toContain('has-icon-left');
  });

  it('should toggle the flyoutOpen if handleFlyoutChanged is called', () => {
    comp.handleFlyoutChanged(true);

    expect(comp.flyoutOpen).toBeTruthy();

    comp.handleFlyoutChanged(false);

    expect(comp.flyoutOpen).toBeFalsy();
  });

  it('should not render the transcluded content if flyoutOpen is false', () => {
    testFixture.detectChanges();

    expect(testEl.querySelector('#test-projection')).toBeNull();

    const btn = testEl.querySelector('button');

    const flyout = testDe.children[0];

    flyout.componentInstance.flyoutOpen = true;
    testFixture.detectChanges();

    expect(testEl.querySelector('#test-projection')).not.toBeNull();
  });
});
