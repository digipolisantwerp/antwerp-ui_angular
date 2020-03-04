import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';

import {CalendarMonthComponent} from './month.component';
import {CALENDAR_DEFAULT_WEEKDAY_LABELS, CALENDAR_WEEKDAY_LABELS} from '../../calendar.conf';
import {CalendarService} from '../../services/calendar.service';

@Component({
  selector: 'aui-test',
  template: `
		<aui-calendar-month
			[selectedDate]="selectedDate"
			[activeDate]="activeDate"
			[range]="range"
			(selectDate)="selectDate($event)"
		></aui-calendar-month>
	`,
})
class TestComponent {
  public selectedDate: Date;
  public activeDate = new Date();
  public range: Array<Date | number>;

  selectDate(date) {

  }
}

class CalendarMock {
  getMonthForDate(date) {
    return [
      [{date: 29, padding: true}, {date: 1}, {date: 2}, {date: 3}, {date: 4}, {date: 5}, {date: 6}],
      [{date: 7}, {date: 8}, {date: 9}, {date: 10}, {date: 11}, {date: 12}, {date: 13}],
      [{date: 14}, {date: 15}, {date: 16}, {date: 17}, {date: 18}, {date: 19}, {date: 20}],
      [{date: 21}, {date: 22}, {date: 23}, {date: 24}, {date: 25}, {date: 26}, {date: 27}],
      [{date: 28}, {date: 29}, {date: 30}, {date: 1, padding: true}, {date: 2, padding: true}],
    ];
  }

  getRangeForDate(date) {
    return [2, 3];
  }

  getRangesForDate(date) {
    return {
      before: [],
      current: [2, 3],
      after: [],
    };
  }
}

describe('The Calendar Month Component', () => {
  let wrapper: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let comp: CalendarMonthComponent;
  let de: DebugElement;
  let el: HTMLElement;
  let monthSpy;
  let rangeSpy;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CalendarMonthComponent,
      ],
      providers: [
        {provide: CALENDAR_WEEKDAY_LABELS, useValue: CALENDAR_DEFAULT_WEEKDAY_LABELS},
        {provide: CalendarService, useClass: CalendarMock},
      ],
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    monthSpy = spyOn(CalendarMock.prototype, 'getMonthForDate').and.callThrough();
    rangeSpy = spyOn(CalendarMock.prototype, 'getRangesForDate').and.callThrough();

    fixture = TestBed.createComponent(TestComponent);
    wrapper = fixture.componentInstance;

    comp = fixture.debugElement.children[0].componentInstance;

    de = fixture.debugElement.children[0];
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should set the current date', () => {
    const now = new Date();
    expect(comp.current).toEqual(now.getDate());
  });

  it('should set the current date to -1 if the activeDate is in another month', () => {
    const now = new Date();
    now.setMonth(now.getMonth() - 2);
    wrapper.activeDate = now;
    fixture.detectChanges();

    expect(comp.current).toEqual(-1);
  });

  it('should set the selectedDay', () => {
    const now = new Date();
    wrapper.selectedDate = now;
    fixture.detectChanges();

    expect(comp.selectedDay).toEqual(now.getDate());
  });

  it('should set the selectedDay to -1 if the selectedDate is not set', () => {
    expect(comp.selectedDay).toEqual(-1);
  });

  it('should set the selectedDay to -1 if the selectedDate is out of range', () => {
    const selected = new Date();
    selected.setMonth(selected.getMonth() - 2);
    wrapper.selectedDate = selected;
    fixture.detectChanges();

    expect(comp.selectedDay).toEqual(-1);
  });

  it('should get the month for the selectedDate if it changed', () => {
    const selected = new Date();
    wrapper.selectedDate = selected;
    fixture.detectChanges();

    expect(monthSpy).toHaveBeenCalledWith(comp.activeDate);
    expect(rangeSpy).toHaveBeenCalled();
  });

  it('should get the month for the activeDate if the selectedDate is out of range', () => {
    const selected = new Date();
    selected.setMonth(selected.getMonth() - 2);
    wrapper.selectedDate = selected;
    fixture.detectChanges();

    expect(monthSpy).toHaveBeenCalledWith(comp.activeDate);
    expect(rangeSpy).toHaveBeenCalled();
  });

  it('should get the month for the activeDate if it changed', () => {
    wrapper.selectedDate = new Date();
    fixture.detectChanges();

    expect(monthSpy).toHaveBeenCalledWith(comp.activeDate);
    expect(rangeSpy).toHaveBeenCalled();
  });

  it('should not update the dates if neither the active nor the selected dates have changed', () => {
    const now = new Date();
    wrapper.selectedDate = now;
    wrapper.activeDate = now;
    fixture.detectChanges();

    monthSpy.calls.reset();
    rangeSpy.calls.reset();

    const newDate = new Date(now);
    wrapper.selectedDate = newDate;
    wrapper.activeDate = newDate;
    fixture.detectChanges();

    expect(monthSpy).not.toHaveBeenCalled();
    expect(rangeSpy).not.toHaveBeenCalled();
  });

  it('should set dates that fall in the unavailable range unavailable', () => {
    expect(comp.dates[0][2].available).toBe(false);
    expect(comp.dates[1][0].available).toBe(true);
  });

  it('should emit the activeDate with the date set to the selected date', async(() => {
    const now = new Date();
    wrapper.activeDate = now;
    fixture.detectChanges();

    spyOn(wrapper, 'selectDate');
    el.querySelectorAll('button')[5].click();

    fixture.whenStable().then(() => {
      const expected = new Date(now);
      expected.setDate(5);
      expect(wrapper.selectDate).toHaveBeenCalledWith(expected);
    });
  }));

  it(
    'should emit the activeDate with the date set to the selected date and the correct month when selecting a padded date at the start of the month', // tslint:disable-line:max-line-length
    async(() => {
      const now = new Date('2017-10-03');
      wrapper.activeDate = now;
      fixture.detectChanges();

      spyOn(wrapper, 'selectDate');
      const button = el.querySelectorAll('button')[0];
      button.click();

      fixture.whenStable().then(() => {
        const expected = new Date(now);
        expected.setMonth(8);
        expected.setDate(29);
        expect(wrapper.selectDate).toHaveBeenCalledWith(expected);
      });
    })
  );

  it(
    'should emit the activeDate with the date set to the selected date and the correct month when selecting a padded date at the end of the month', // tslint:disable-line:max-line-length
    async(() => {
      const now = new Date('2017-10-03');
      wrapper.activeDate = now;
      fixture.detectChanges();

      spyOn(wrapper, 'selectDate');
      const button = el.querySelectorAll('button')[31];
      button.click();

      fixture.whenStable().then(() => {
        const expected = new Date(now);
        expected.setMonth(10);
        expected.setDate(1);
        expect(wrapper.selectDate).toHaveBeenCalledWith(expected);
      });
    })
  );
});
