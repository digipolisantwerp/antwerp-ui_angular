import { EventInterface, WeekdayInterface } from '../types/agenda.types';
import { DateHelperService } from './date-helper.service';
import { EventMap } from '../classes/event-map.class';
import { SortingService } from './sorting.service';
export declare class MonthViewSlotsService {
    private dateHelperService;
    private sortingService;
    eventMap: EventMap;
    constructor(dateHelperService: DateHelperService, sortingService: SortingService);
    generateEventMap(events: EventInterface[], weeks: WeekdayInterface[][], availableSlots: number): EventMap;
    formatEvents(events: any): any;
    filterEvents(events: any, firstDay: any, lastDay: any): any;
    calculate(start: Date, end: Date, week: number, day: number, event: any, weeks: WeekdayInterface[][]): void;
}
