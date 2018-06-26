import { WeekdayInterface, HighLightInterface, RangeInterface, DAYS } from '../types/agenda.types';
export declare class DateHelperService {
    getDaysForMonth(date: Date, startDayOfWeek: number, range?: HighLightInterface): WeekdayInterface[];
    getHighlights(range: HighLightInterface, date: Date): string;
    inRange(range: RangeInterface, date: Date): boolean;
    getWeeksForMonth(days: WeekdayInterface[]): WeekdayInterface[][];
    getLastDateOfMonth(date: Date): Date;
    moveToDayOfWeek(date: Date, dayOfWeek: number, orient: number): Date;
    getFirstWeekDayOfMonth(date: Date, startOfWeek: number | string): Date;
    getLastWeekDayOfMonth(date: Date, startOfWeek: number): Date;
    getNextDay(today: Date): Date;
    dateDiff(startDate: Date, endDate: Date): number;
    compareDates(date1: Date, date2: Date): boolean;
    orderWeekDays(startDayOfWeek: DAYS): DAYS[];
}
