import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {By} from '@angular/platform-browser';

import {SelectableActionsDirective} from './selectable-actions.directive';

const mockKeyDownEvent = (key) => {
  const event: any = document.createEvent('Event');
  event.key = key;
  event.initEvent('keydown');
  return event;
};

@Component({
  selector: 'aui-test-component',
  template: `<button type="button" class="button" auiSelectableActions #auiSelectableActions="auiSelectableActions">Open me</button>`,
})
class TestComponent {
  // Access directive
  @ViewChild('auiSelectableActions', {static: true}) element;
}

describe('Flyout action directive without flyout zone', () => {
  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let componentDebugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectableActionsDirective,
        TestComponent,
      ],
    });

    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    componentDebugElement = fixture.debugElement.query(By.directive(SelectableActionsDirective));
    componentElement = componentDebugElement.nativeElement as HTMLElement;
  }));

  it('should open and close onClick', () => {
    spyOn(comp.element.keyArrowUp, 'emit');
    spyOn(comp.element.keyArrowDown, 'emit');
    spyOn(comp.element.keyEscape, 'emit');
    spyOn(comp.element.keyEnter, 'emit');

    comp.element.onKeyDown(mockKeyDownEvent('ArrowUp'));
    expect(comp.element.keyArrowUp.emit).toHaveBeenCalled();
    comp.element.onKeyDown(mockKeyDownEvent('ArrowDown'));
    expect(comp.element.keyArrowDown.emit).toHaveBeenCalled();
    comp.element.onKeyDown(mockKeyDownEvent('Escape'));
    expect(comp.element.keyEscape.emit).toHaveBeenCalled();
    comp.element.onKeyDown(mockKeyDownEvent('Enter'));
    expect(comp.element.keyEnter.emit).toHaveBeenCalled();
  });
});
