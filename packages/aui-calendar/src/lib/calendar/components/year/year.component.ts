import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {chunk, get} from 'lodash-es';

import {DateHelper} from '@acpaas-ui/js-date-utils';

import {CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_MONTH_LABELS} from '../../calendar.conf';
import {MonthLabelsConfig} from '../../types/calendar.types';

@Component({
  selector: 'aui-calendar-year',
  templateUrl: './year.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarYearComponent implements OnChanges {
  @Input() selectedDate: Date;
  @Input() activeDate: Date;
  @Input() monthLabels: MonthLabelsConfig = CALENDAR_DEFAULT_MONTH_LABELS;
  @Output() selectDate = new EventEmitter();

  public selectedMonth = -1;
  public current = '';
  public months: Array<string[]> = [];

  constructor(
    @Inject(CALENDAR_MONTH_LABELS) public moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = get(changes, 'activeDate.currentValue');
    const currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
    const selectedMonthChanged = this.selectedDate && this.selectedDate.getFullYear() === this.activeDate.getFullYear();
    const current = new Date();

    this.current = currentYear === current.getFullYear() ? this.monthLabels[current.getMonth()] : '';

    this.selectedMonth = selectedMonthChanged ? this.selectedDate.getMonth() : -1;

    if (changes.monthLabels) {
      this.monthLabels = this.monthLabels || this.moduleMonthLabels;
      this.months = chunk(this.monthLabels, 4);
    }
  }

  pickDate(event: MouseEvent, date: string) {
    event.stopPropagation();

    let selectedDate = new Date(this.activeDate);
    selectedDate = DateHelper.updateMonth(selectedDate, this.monthLabels.indexOf(date));

    this.selectDate.emit(selectedDate);
  }
}
