import { ModuleWithProviders } from '@angular/core';
import { DatepickerErrorLabels } from './types/datepicker.types';
export declare class DatepickerModule {
    static forChild(weekdayLabels: string[], monthLabels: string[], errorLabels: DatepickerErrorLabels): ModuleWithProviders;
}
