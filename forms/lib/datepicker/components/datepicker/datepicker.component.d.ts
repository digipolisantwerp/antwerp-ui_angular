import { OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, FormBuilder } from '@angular/forms';
import { DateRange } from '@acpaas-ui/js-date-utils';
import { FlyoutDirective } from '@acpaas-ui/ngx-components/flyout';
import { DatepickerResult, CalendarService } from '@acpaas-ui/ngx-components/calendar';
import { DatepickerValidationErrors } from '../../types/datepicker.types';
export declare class DatepickerComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private monthLabels;
    private weekdayLabels;
    private errorLabels;
    private calendarService;
    private formBuilder;
    flyout: FlyoutDirective;
    id: string;
    name: string;
    placeholder: string;
    range: DateRange;
    autocomplete: 'off';
    dateMask: {
        mask: string;
        'showMaskOnHover': boolean;
    };
    formControl: FormControl;
    selectedDate: Date;
    private componentDestroyed$;
    private onChange;
    constructor(monthLabels: string[], weekdayLabels: string[], errorLabels: {
        ERRORS_INVALID_DATE: string;
        ERRORS_INVALID_RANGE: string;
    }, calendarService: CalendarService, formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(onChange: (res: any) => void): void;
    registerOnTouched(): void;
    selectDateFromCalendar(result: DatepickerResult): void;
    formatDate(date: Date): string;
    validate(ctrl: FormControl): DatepickerValidationErrors;
}
