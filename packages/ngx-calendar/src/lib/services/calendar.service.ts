import {Injectable} from '@angular/core';
import {DateGenerator, DateHelper, DateRange, Month} from '@acpaas-ui/js-date-utils';

import {DateRangeMap} from '../types/calendar.types';

export interface MonthMap {
  [key: number]: Month;
}

@Injectable()
export class CalendarService {
  public months: MonthMap = {};
  private currentYear: number;

  getMonth(month: number, year?: number): Month {
    if (year) {
      if (this.currentYear !== year) {
        this.months = {};
      }

      this.currentYear = year;
    }

    if (this.months.hasOwnProperty(month)) {
      return [...this.months[month]];
    }

    const date = new Date();
    date.setMonth(month, 1);

    if (year) {
      date.setFullYear(year);
    }

    const generatedMonth = DateGenerator.generateMonth(date, {startOfWeek: 1, padding: true, generatePadding: true});

    this.months[month] = generatedMonth;

    return [...generatedMonth];
  }

  getMonthForDate(date: Date): Month {
    return this.getMonth(date.getMonth(), date.getFullYear());
  }

  getRangeForDate(date: Date, range: DateRange): number[] {
    return DateGenerator.generateRange(date, range, {startOfWeek: 1});
  }

  getRangesForDate(date: Date, range: DateRange): DateRangeMap {
    const rangeOptions = {startOfWeek: 1};
    const before = DateHelper.updateMonth(date, date.getMonth() - 1);
    const after = DateHelper.updateMonth(date, date.getMonth() + 1);

    return {
      before: DateGenerator.generateRange(before, range, rangeOptions),
      current: DateGenerator.generateRange(date, range, rangeOptions),
      after: DateGenerator.generateRange(after, range, rangeOptions),
    };
  }

  getClosestDateForRange(date: Date = new Date(), range: DateRange): Date {
    const dateRange = this.getRangeForDate(date, range);

    if (DateHelper.dateOutOfRange(date, dateRange)) {
      return date;
    }

    return DateHelper.closestDateForRange(date, dateRange);
  }
}
