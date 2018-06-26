import { Month, DateRange } from '@acpaas-ui/js-date-utils';
import { DateRangeMap } from '../types/calendar.types';
export interface MonthMap {
    [key: number]: Month;
}
export declare class CalendarService {
    months: MonthMap;
    private currentYear;
    getMonth(month: number, year?: number): Month;
    getMonthForDate(date: Date): Month;
    getRangeForDate(date: Date, range: DateRange): number[];
    getRangesForDate(date: Date, range: DateRange): DateRangeMap;
    getClosestDateForRange(date: Date, range: DateRange): Date;
}
