import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';

import {CalendarDecenniaComponent} from './decennia.component';

@Component({
  selector: 'aui-test',
  template: `
		<aui-calendar-decennia
			[selectedDate]="selectedDate"
			[activeDate]="activeDate"
			(selectDate)="selectDate($event)"
		></aui-calendar-decennia>
	`,
})
class TestComponent {
  public selectedDate: Date;
  public activeDate: Date;

  selectDate(date) {

  }
}

describe('The Calendar Decennia Component', () => {
  let wrapper: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let comp: CalendarDecenniaComponent;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CalendarDecenniaComponent,
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

  it('should set the current prop to the current year', () => {
    const expected = (new Date()).getFullYear();

    expect(comp.current).toEqual(expected);
  });

  it('should set the selectedYear to -1 if no selectedDate was provided', () => {
    expect(comp.selectedYear).toEqual(-1);
  });

  it('should set the selectedYear to the year of the selectedDate if it was provided', () => {
    wrapper.selectedDate = new Date();

    fixture.detectChanges();
    expect(comp.selectedYear).toEqual((new Date()).getFullYear());
  });

  it('should update the years prop with the new activeDate', () => {
    wrapper.activeDate = new Date('2017-10-03');

    fixture.detectChanges();
    expect(comp.years).toEqual([
      [2017, 2018, 2019, 2020],
      [2021, 2022, 2023, 2024],
      [2025, 2026, 2027, 2028],
    ]);
  });

  it('should not update the years prop if the new activeDate is in the same range', () => {
    wrapper.activeDate = new Date('2017-10-03');

    fixture.detectChanges();

    const years = comp.years;

    wrapper.activeDate = new Date('2020-10-03');
    fixture.detectChanges();

    expect(comp.years).toBe(years);
  });

  it('should update the years prop if the new activeDate is out of range', () => {
    wrapper.activeDate = new Date('2017-10-03');

    fixture.detectChanges();

    let years = comp.years;

    wrapper.activeDate = new Date('2016-10-03');
    fixture.detectChanges();

    expect(comp.years).not.toBe(years);

    years = comp.years;

    wrapper.activeDate = new Date('2040-10-03');
    fixture.detectChanges();

    expect(comp.years).not.toBe(years);
  });

  it('should emit the activeDate with the selected year when a year is picked', () => {
    wrapper.activeDate = new Date('2017-10-03');

    fixture.detectChanges();

    spyOn(wrapper, 'selectDate');

    el.querySelectorAll('button')[4].click();

    fixture.detectChanges();

    const expected = new Date('2021-10-03');

    expect(wrapper.selectDate).toHaveBeenCalledWith(expected);
  });
});
