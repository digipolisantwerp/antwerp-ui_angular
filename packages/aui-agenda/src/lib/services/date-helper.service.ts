// TODO: Move this to @acpaas-ui/js-date-utils
import {Injectable} from '@angular/core';

import {DAYS, HighLightInterface, RangeInterface, WeekdayInterface} from '../types/agenda.types';

@Injectable()
export class DateHelperService {

  public getDaysForMonth(date: Date, startDayOfWeek: number, range: HighLightInterface = null): WeekdayInterface[] {
    const firstDayOfMonth = this.getFirstWeekDayOfMonth(date, startDayOfWeek);
    const lastDayOfMonth = this.getLastWeekDayOfMonth(date, startDayOfWeek);
    const max = this.dateDiff(firstDayOfMonth, lastDayOfMonth);

    const days = [
      {date: firstDayOfMonth, highlights: this.getHighlights(range, firstDayOfMonth)},
    ];

    for (let i = 0; i < max; i += 1) {
      const nextDay = this.getNextDay(days[i].date);

      days.push({
        highlights: this.getHighlights(range, nextDay),
        date: nextDay,
      });
    }

    return days;
  }

  public getHighlights(range: HighLightInterface, date: Date): string {
    if (!range) {
      return '';
    }

    return Object.keys(range).filter((key) => {
      return this.inRange(range[key], date);
    }).join(' ');
  }

  public inRange(range: RangeInterface, date: Date): boolean {
    return range.some((item) => {
      if (Array.isArray(item)) {
        return item.indexOf(date.getDay()) !== -1;
      }

      const d = new Date(item);
      if (!isNaN(d.getTime())) {
        return this.compareDates(d, date);
      }
    });
  }

  public getWeeksForMonth(days: WeekdayInterface[]): WeekdayInterface[][] {
    const numberOfWeeks = Math.round(days.length / 7);

    return Array(numberOfWeeks).fill(null).map((label, index) => {
      return days.slice(index * 7, (index + 1) * 7);
    });
  }

  public getLastDateOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  public moveToDayOfWeek(date: Date, dayOfWeek: number, orient: number): Date {
    const diff = (dayOfWeek - date.getDay() + 7 * (orient || +1)) % 7;
    const value = (diff === 0) ? diff + 7 * (orient || +1) : diff;
    const d = new Date(date);
    return new Date(d.setDate(date.getDate() + value));
  }

  public getFirstWeekDayOfMonth(date: Date, startOfWeek: number | string): Date {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    if (firstDayOfMonth.getDay() === Number(startOfWeek)) {
      return firstDayOfMonth;
    }
    return this.moveToDayOfWeek(firstDayOfMonth, Number(startOfWeek), -1);
  }

  public getLastWeekDayOfMonth(date: Date, startOfWeek: number): Date {
    const endOfWeek = (startOfWeek === 0 ? 6 : startOfWeek - 1);
    const lastDayOfMonth = this.getLastDateOfMonth(date);
    if (lastDayOfMonth.getDay() === endOfWeek) {
      return lastDayOfMonth;
    }
    return this.moveToDayOfWeek(lastDayOfMonth, endOfWeek, 1);
  }

  public getNextDay(today: Date): Date {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  }

  public dateDiff(startDate: Date, endDate: Date): number {
    // Compare based on date, not on time
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

    return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  }

  public compareDates(date1: Date, date2: Date): boolean {
    const date1Year = date1.getFullYear();
    const date1Month = date1.getMonth();
    const date1Date = date1.getDate();
    const date2Year = date2.getFullYear();
    const date2Month = date2.getMonth();
    const date2Date = date2.getDate();

    return date1Year === date2Year && date1Month === date2Month && date1Date === date2Date;
  }

  public orderWeekDays(startDayOfWeek: DAYS): DAYS[] {
    const rotate = (array, index) => {
      const arrayLength = array.length;
      return array.slice(arrayLength - index).concat(array.slice(0, arrayLength - index));
    };
    const weekdays = [0, 1, 2, 3, 4, 5, 6];

    if (startDayOfWeek === DAYS.SUNDAY) {
      return weekdays;
    } else {
      return rotate(weekdays, 7 - startDayOfWeek);
    }
  }
}
