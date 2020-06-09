import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {get} from 'lodash-es';
import {DateHelper, DateRange, Day, Month} from '@acpaas-ui/js-date-utils';
import {CALENDAR_DEFAULT_WEEKDAY_LABELS, CALENDAR_WEEKDAY_LABELS} from '../../calendar.conf';
import {CalendarService} from '../../services/calendar.service';
import {DateRangeMap, WeekdayLabelsConfig} from '../../types/calendar.types';
import {Interval} from '@acpaas-ui/ngx-utils';

@Component({
  selector: 'aui-calendar-month',
  templateUrl: './month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarMonthComponent implements OnInit, OnChanges {
  @Input() selectedDate: Date;
  @Input() activeDate: Date;
  @Input() range: DateRange;
  @Input()
  interval?: Interval.IInterval<Date>;
  @Input() weekdayLabels: WeekdayLabelsConfig = CALENDAR_DEFAULT_WEEKDAY_LABELS;
  @Output() selectDate = new EventEmitter();

  public dates: Month = [];
  public selectedDay = -1;
  public current: number;

  constructor(
    @Inject(CALENDAR_WEEKDAY_LABELS) private moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS,
    private calendarService: CalendarService
  ) {
  }

  public ngOnInit() {
    this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
  }

  ngOnChanges(changes: SimpleChanges) {
    const selectedDateChanged = this.hasChanged(changes, 'selectedDate');
    const activeDateChanged = this.hasChanged(changes, 'activeDate');
    const monthChanged = activeDateChanged && !DateHelper.datesAreEqual([
      changes.activeDate.currentValue,
      changes.activeDate.previousValue,
    ], 'M');
    const selectedDayChanged = this.selectedDate && this.activeDate.getMonth() === this.selectedDate.getMonth();

    this.current = this.getCurrentDate();
    this.selectedDay = selectedDayChanged ? this.selectedDate.getDate() : -1;

    let newDates = [];

    if (selectedDateChanged || (activeDateChanged && monthChanged)) {
      newDates = this.calendarService.getMonthForDate(this.activeDate);
    } else {
      return;
    }

    const range: DateRangeMap | null = this.calendarService.getRangesForDate(this.activeDate, this.range);
    this.dates = newDates.map(week => week.map(day => {
      const date: Date = (new Date(this.activeDate));
      date.setDate(day.date);
      const available: boolean = this.dayIsAvailableForRange(day, range) && (this.interval ? !this.interval.isInRange(date) : true);
      return {
        ...day,
        available
      };
    }));
  }

  pickDate(event: MouseEvent, day: Day): void {
    event.stopPropagation(); // Stop propagation so the modal doesn't close

    let selectedDate = new Date(this.activeDate);

    if (day.padding) {
      const month = day.date > 20 ? -1 : 1;
      selectedDate = DateHelper.updateMonth(selectedDate, selectedDate.getMonth() + month);
    }

    this.selectDate.emit(DateHelper.updateDate(selectedDate, day.date));
  }

  private hasChanged(changes: SimpleChanges, prop: string): boolean {
    const current = get(changes, `${prop}.currentValue`);
    const previous = get(changes, `${prop}.previousValue`);
    const currentValue = current instanceof Date ? current.valueOf() : 0;
    const previousValue = previous instanceof Date ? previous.valueOf() : 0;

    return !!currentValue && currentValue !== previousValue;
  }

  private getCurrentDate(): number {
    const current = new Date();
    const monthHasChanged = !DateHelper.datesAreEqual(
      [this.activeDate, current],
      ['M', 'Y']
    );

    return monthHasChanged ? -1 : current.getDate();
  }

  private dayIsAvailableForRange(day: Day, range: DateRangeMap): boolean {
    if (!range) {
      return true;
    }

    let dateRange = range.current;

    if (day.padding) {
      dateRange = day.date > 20 ? range.before : range.after;
    }

    return dateRange.indexOf(day.date) < 0;
  }
}
