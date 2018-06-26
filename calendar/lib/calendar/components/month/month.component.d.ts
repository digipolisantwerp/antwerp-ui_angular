import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Day, Month, DateRange } from '@acpaas-ui/js-date-utils';
import { CalendarService } from '../../services/calendar.service';
import { WeekdayLabelsConfig } from '../../types/calendar.types';
export declare class CalendarMonthComponent implements OnInit, OnChanges {
    private moduleWeekdayLabels;
    private calendarService;
    selectedDate: Date;
    activeDate: Date;
    range: DateRange;
    weekdayLabels: WeekdayLabelsConfig;
    selectDate: EventEmitter<{}>;
    dates: Month;
    selectedDay: number;
    current: number;
    constructor(moduleWeekdayLabels: string[], calendarService: CalendarService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    pickDate(event: MouseEvent, day: Day): void;
    private hasChanged(changes, prop);
    private getCurrentDate();
    private dayIsAvailable(day, range);
}
