import { EventInterface } from '../types/agenda.types';
import { DateHelperService } from './date-helper.service';
export declare class SortingService {
    private dateHelperService;
    constructor(dateHelperService: DateHelperService);
    sortEvents(events: EventInterface[]): EventInterface[];
    sortByDateHelper(a: Date, b: Date): number;
    sortByDateTimeHelper(a: Date, b: Date): number;
    sortBySpanHelper(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date): number;
}
