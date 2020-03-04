import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';

import {MonthViewComponent} from './month-view.component';
import {WeekdayPipe} from '../../pipes/weekday.pipe';
import {DateHelperService} from '../../services/date-helper.service';
import {SortingService} from '../../services/sorting.service';
import {MonthViewSlotsService} from '../../services/month-view-slots.service';
import {WEEKDAY_LABELS} from '../../agenda.conf';

describe('The MonthView Component', () => {
  let comp: MonthViewComponent;
  let fixture: ComponentFixture<MonthViewComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MonthViewComponent,
        WeekdayPipe,
      ],
      providers: [
        DateHelperService,
        MonthViewSlotsService,
        SortingService,
        {provide: WEEKDAY_LABELS, useValue: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(MonthViewComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('.o-agenda__table-head'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).toBeDefined();
  });
});
