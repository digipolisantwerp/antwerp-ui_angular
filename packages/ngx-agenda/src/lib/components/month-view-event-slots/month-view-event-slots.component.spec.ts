import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {MonthViewSlotsService} from '../../services/month-view-slots.service';

import {MonthViewEventSlotsComponent} from './month-view-event-slots.component';

class MockMonthViewSlotsService {
  public generateSlotRendering() {
    return [{
      display: {left: '0px', top: '0px', span: '10%'},
    }];
  }
}

describe('The Month View Event Slots Component', () => {
  let comp: MonthViewEventSlotsComponent;
  let fixture: ComponentFixture<MonthViewEventSlotsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MonthViewEventSlotsComponent,
      ],
      providers: [
        {provide: MonthViewSlotsService, useClass: MockMonthViewSlotsService},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(MonthViewEventSlotsComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('.aui-agenda-month-view-event-slots'));

    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();

    expect(el).toBeDefined();
  });
});
