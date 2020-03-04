import {Injectable} from '@angular/core';

import {EventInterface, WeekdayInterface} from '../types/agenda.types';
import {DateHelperService} from './date-helper.service';
import {EventMap} from '../classes/event-map.class';
import {SortingService} from './sorting.service';

@Injectable()
export class MonthViewSlotsService {
  public eventMap: EventMap;

  constructor(
    private dateHelperService: DateHelperService,
    private sortingService: SortingService
  ) {
  }

  public generateEventMap(events: EventInterface[], weeks: WeekdayInterface[][], availableSlots: number): EventMap {
    const firstDay = new Date(weeks[0][0].date);
    const lastDay = new Date(weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].date);

    // 1. Format
    const mappedEvents = this.formatEvents(events);

    // 2. Remove events waar de endDate < startMonth of endDate > endMonth
    const filteredEvents = this.filterEvents(mappedEvents, firstDay, lastDay);

    // 3. Sorteer van oud naar nieuw en van lang event naar kort event
    const sortedEvents: EventInterface[] = this.sortingService.sortEvents(filteredEvents);

    // 4. Fill EventMap
    this.eventMap = new EventMap(weeks, availableSlots);
    sortedEvents.forEach((event) => {
      if (event.startDate < firstDay) {
        this.calculate(firstDay, event.endDate, 0, 0, event, weeks);
      } else {
        for (let week = 0; week < weeks.length; week += 1) {
          for (let day = 0; day < weeks[week].length; day += 1) {
            const date = weeks[week][day].date;
            if (this.dateHelperService.compareDates(event.startDate, date)) {
              this.calculate(event.startDate, event.endDate, week, day, event, weeks);

              // Stop for loop --> improve performance
              day = weeks[week].length;
              week = weeks.length - 1;
            }
          }
        }
      }
    });

    return this.eventMap;
  }

  public formatEvents(events) {
    return events.map((event: EventInterface) => {
      return Object.assign({}, event, {
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate),
      });
    });
  }

  public filterEvents(events, firstDay, lastDay) {
    return events.filter((event) => {
      return new Date(event.endDate) > firstDay && new Date(event.startDate) < lastDay;
    });
  }

  public calculate(start: Date, end: Date, week: number, day: number, event: any, weeks: WeekdayInterface[][]): void {
    const weekdaysLength = weeks[0].length;
    const lengthOfEvent = this.dateHelperService.dateDiff(start, end);
    const span = lengthOfEvent + 1 <= weekdaysLength - day ? lengthOfEvent + 1 : weekdaysLength - day;
    const difftest = (lengthOfEvent - span) + 1;

    this.eventMap.addEvent(week, day, span, event);

    const slot = this.eventMap.getFreeSlot(week, day);
    if (slot !== -1) {
      this.eventMap.fillSlot(week, day, slot, span, event);
    }

    if (difftest > 1 && week + 1 < weeks.length) {
      this.calculate(weeks[week + 1][0].date, end, week + 1, 0, event, weeks);
    }
  }
}
