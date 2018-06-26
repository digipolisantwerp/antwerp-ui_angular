import { ModuleWithProviders } from '@angular/core';
import { WeekdayLabelsConfig, MonthLabelsConfig } from './types/calendar.types';
export declare class CalendarModule {
    static forChild(weekdayLabels: WeekdayLabelsConfig, monthLabels: MonthLabelsConfig): ModuleWithProviders;
}
