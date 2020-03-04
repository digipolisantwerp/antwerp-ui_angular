import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';

import {CalendarYearComponent} from './year.component';
import {CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_MONTH_LABELS} from '../../calendar.conf';

@Component({
  selector: 'aui-test',
  template: `
		<aui-calendar-year
			[selectedDate]="selectedDate"
			[activeDate]="activeDate"
			(selectDate)="selectDate($event)"
		></aui-calendar-year>
	`,
})
class TestComponent {
  public selectedDate: Date;
  public activeDate: Date;

  selectDate(date) {

  }
}

describe('The Calendar Year Component', () => {
  let wrapper: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let comp: CalendarYearComponent;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CalendarYearComponent,
      ],
      providers: [
        {provide: CALENDAR_MONTH_LABELS, useValue: CALENDAR_DEFAULT_MONTH_LABELS},
      ],
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    wrapper = fixture.componentInstance;

    comp = fixture.debugElement.children[0].componentInstance;

    de = fixture.debugElement.children[0];
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should set the months prop OnChanges', () => {
    comp.ngOnChanges({monthLabels: true} as any);

    expect(comp.months).toEqual([
      CALENDAR_DEFAULT_MONTH_LABELS.slice(0, 4),
      CALENDAR_DEFAULT_MONTH_LABELS.slice(4, 8),
      CALENDAR_DEFAULT_MONTH_LABELS.slice(8, 12),
    ]);
  });

  it('should set the current prop to the current month', () => {
    wrapper.activeDate = new Date();
    wrapper.activeDate.setMonth(10);

    fixture.detectChanges();

    const expected = (new Date()).getMonth();

    expect(comp.current).toEqual(CALENDAR_DEFAULT_MONTH_LABELS[expected]);
  });

  it('should clear the current prop if the activeDates year changes', () => {
    wrapper.activeDate = new Date();

    fixture.detectChanges();

    const expected = (new Date()).getMonth();

    expect(comp.current).toEqual(CALENDAR_DEFAULT_MONTH_LABELS[expected]);

    const newDate = new Date();
    newDate.setFullYear(2000);
    wrapper.activeDate = newDate;

    fixture.detectChanges();

    expect(comp.current).toEqual('');
  });

  it('should update the current prop if the activeDates year hasn\'t changed', () => {
    // set the inital date
    const now = new Date();
    wrapper.activeDate = now;
    fixture.detectChanges();

    expect(comp.current).toEqual(CALENDAR_DEFAULT_MONTH_LABELS[now.getMonth()]);

    // update the date within the same year
    const newDate = new Date(now);
    newDate.setMonth(11 - now.getMonth());
    wrapper.activeDate = newDate;
    fixture.detectChanges();

    expect(comp.current).toEqual(CALENDAR_DEFAULT_MONTH_LABELS[now.getMonth()]);
  });

  it('should set the selectedMonth to -1 if no selectedDate is provided', () => {
    expect(comp.selectedMonth).toEqual(-1);
  });

  it('should set the selectedMonth to the selectedDates month if the selectedDate is in the current year', () => {
    const now = new Date();
    wrapper.selectedDate = now;
    wrapper.activeDate = now;

    fixture.detectChanges();

    expect(comp.selectedMonth).toEqual(now.getMonth());
  });

  it('should not set the selectedMonth if the selectedDate is outside of the current year', () => {
    const now = new Date();
    wrapper.activeDate = now;
    fixture.detectChanges();

    const selected = new Date();
    selected.setFullYear(now.getFullYear() - 1);
    wrapper.selectedDate = selected;
    fixture.detectChanges();

    expect(comp.selectedMonth).toEqual(-1);
  });

  it('should emit the selected date', () => {
    const now = new Date();
    wrapper.activeDate = now;
    comp.ngOnChanges({monthLabels: true} as any);
    fixture.detectChanges();

    spyOn(wrapper, 'selectDate');
    el.querySelectorAll('button')[4].click();

    fixture.detectChanges();

    const expected = new Date(now);
    expected.setMonth(4);

    expect(wrapper.selectDate).toHaveBeenCalledWith(expected);
  });
});
