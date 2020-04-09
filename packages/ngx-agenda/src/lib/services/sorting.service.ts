import {Injectable} from '@angular/core';

import {EventInterface} from '../types/agenda.types';
import {DateHelperService} from './date-helper.service';

@Injectable()
export class SortingService {

  constructor(
    private dateHelperService: DateHelperService
  ) {
  }

  public sortEvents(events: EventInterface[]): EventInterface[] {
    return events.sort((a, b) => {
      // Sort by date
      const sortedByDate = this.sortByDateHelper(a.startDate, b.startDate);
      if (sortedByDate !== 0) {
        return sortedByDate;
      }

      // Sort by diff
      const sortedBySpan = this.sortBySpanHelper(a.startDate, a.endDate, b.startDate, b.endDate);
      if (sortedBySpan !== 0) {
        return sortedBySpan;
      }

      return this.sortByDateTimeHelper(a.startDate, b.startDate);
    });
  }

  public sortByDateHelper(a: Date, b: Date): number {
    const aStartDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    const bStartDate = new Date(b.getFullYear(), b.getMonth(), b.getDate());

    if (aStartDate < bStartDate) {
      return -1;
    }

    if (aStartDate > bStartDate) {
      return 1;
    }

    return 0;
  }

  public sortByDateTimeHelper(a: Date, b: Date): number {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  }

  public sortBySpanHelper(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date): number {
    const spanA = this.dateHelperService.dateDiff(aStart, aEnd);
    const spanB = this.dateHelperService.dateDiff(bStart, bEnd);

    if (spanA > spanB) {
      return -1;
    }

    if (spanA < spanB) {
      return 1;
    }

    return 0;
  }
}
