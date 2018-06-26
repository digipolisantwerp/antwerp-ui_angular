import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MonthLabelsConfig } from '../../types/calendar.types';
export declare class CalendarYearComponent implements OnChanges {
    moduleMonthLabels: string[];
    selectedDate: Date;
    activeDate: Date;
    monthLabels: MonthLabelsConfig;
    selectDate: EventEmitter<{}>;
    selectedMonth: number;
    current: string;
    months: Array<string[]>;
    constructor(moduleMonthLabels?: string[]);
    ngOnChanges(changes: SimpleChanges): void;
    pickDate(event: MouseEvent, date: string): void;
}
