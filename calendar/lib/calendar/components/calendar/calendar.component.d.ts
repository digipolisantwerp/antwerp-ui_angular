import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DateRange } from '@acpaas-ui/js-date-utils';
import { WeekdayLabelsConfig, MonthLabelsConfig } from '../../types/calendar.types';
import { CalendarService } from '../../services/calendar.service';
export declare class CalendarComponent implements OnInit, OnChanges {
    moduleMonthLabels: string[];
    moduleWeekdayLabels: string[];
    private calendarService;
    selectedDate: Date;
    range: DateRange;
    weekdayLabels: WeekdayLabelsConfig;
    monthLabels: MonthLabelsConfig;
    selectDate: EventEmitter<{}>;
    CALENDAR_VIEW_MONTH: string;
    CALENDAR_VIEW_YEAR: string;
    CALENDAR_VIEW_DECENNIA: string;
    activeDate: Date;
    activeView: string;
    headerLabel: string;
    constructor(moduleMonthLabels: string[], moduleWeekdayLabels: string[], calendarService: CalendarService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateActiveDate(factor?: number): void;
    switchView(factor?: number): void;
    updateHeaderLabel(): void;
    pickDate(date: Date): void;
}
