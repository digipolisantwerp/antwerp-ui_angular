import { Component, Input, Inject, forwardRef, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import {
	ControlValueAccessor,
	FormControl,
	NG_VALUE_ACCESSOR,
	NG_VALIDATORS,
	FormBuilder,
} from '@angular/forms';

import { DateHelper, DateRange } from '@acpaas-ui/js-date-utils';

import { FlyoutDirective } from '@acpaas-ui/ngx-components/flyout';


import {
	CALENDAR_MONTH_LABELS,
	CALENDAR_DEFAULT_MONTH_LABELS,
	CALENDAR_WEEKDAY_LABELS,
	CALENDAR_DEFAULT_WEEKDAY_LABELS,
	DatepickerResult,
	CalendarService,
} from '@acpaas-ui/ngx-components/calendar';

import {
	DATEPICKER_ERROR_LABELS,
	DATEPICKER_DEFAULT_ERROR_LABELS,
	DATEPICKER_SEPARATOR_CHAR,
	DATEPICKER_DATE_MASK
} from '../../datepicker.conf';
import { DatepickerValidationErrors } from '../../types/datepicker.types';

@Component({
	selector: 'aui-datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: [
		'./datepicker.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => DatepickerComponent), // tslint:disable-line:no-forward-ref
		multi: true,
	}, {
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => DatepickerComponent), // tslint:disable-line:no-forward-ref
		multi: true,
	}],
})
export class DatepickerComponent implements OnInit, OnDestroy, ControlValueAccessor {
	@ViewChild(FlyoutDirective) flyout: FlyoutDirective;
	@Input() id: string;
	@Input() name: string;
	@Input() placeholder = 'dd/mm/yyyy';
	@Input() range: DateRange;
	@Input() autocomplete: 'off';

	public dateMask = { mask: DATEPICKER_DATE_MASK, 'showMaskOnHover': false };
	public formControl: FormControl;
	public selectedDate: Date;

	private componentDestroyed$: Subject<boolean> = new Subject<boolean>();
	private onChange: (res: any) => void = () => { };

	constructor(
		@Inject(CALENDAR_MONTH_LABELS) private monthLabels = CALENDAR_DEFAULT_MONTH_LABELS,
		@Inject(CALENDAR_WEEKDAY_LABELS) private weekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS,
		@Inject(DATEPICKER_ERROR_LABELS) private errorLabels = DATEPICKER_DEFAULT_ERROR_LABELS,
		private calendarService: CalendarService,
		private formBuilder: FormBuilder
	) {}

	public ngOnInit(): void {
		this.formControl = this.formBuilder.control('');
		this.formControl.valueChanges
			.pipe(
				takeUntil(this.componentDestroyed$)
			)
			.subscribe((value) => {
				if (value) {
					const format = value.split(DATEPICKER_SEPARATOR_CHAR).reverse().join('-');
					const date = DateHelper.parseDate(format);
					if (date) {
						this.selectedDate = date;
						this.onChange(date.toISOString());
					} else {
						// Change value with original value (and not null or '') so we can add an error in the validate function
						this.onChange(value);
					}
				}
			});
	}

	public ngOnDestroy(): void {
		this.componentDestroyed$.next(true);
		this.componentDestroyed$.complete();
	}

	public writeValue(value: string): void {
		const date = DateHelper.parseDate(value);
		const dateString = date ? this.formatDate(date) : '';

		this.selectedDate = date;
		this.formControl.setValue(dateString);
	}

	public registerOnChange(onChange: (res: any) => void): void {
		this.onChange = onChange;
	}

	public registerOnTouched(): void { }

	public selectDateFromCalendar(result: DatepickerResult): void {
		if (result.complete) {
			this.formControl.setValue(this.formatDate(result.date));
			this.flyout.close();
		}
	}

	public formatDate(date: Date): string {
		return DateHelper.formatDate(date, 'DD/MM/YYYY', {
			leadingZero: true,
			monthLabels: this.monthLabels,
			weekdayLabels: this.weekdayLabels,
		});
	}

	public validate(ctrl: FormControl): DatepickerValidationErrors {
		// no error on empty value (add required validator in app)
		if (ctrl.value === '' || ctrl.value === null) {
			return null;
		}

		// throw format error if no valid date was provided
		if (!DateHelper.parseDate(ctrl.value)) {
			return {
				format: this.errorLabels.ERRORS_INVALID_DATE,
			};
		}

		// no error if valid date an no range provided
		if (!this.range || !this.range.length) {
			return null;
		}

		// throw error when out of range
		const date = new Date(ctrl.value);
		const range = this.calendarService.getRangeForDate(date, this.range);

		return range.indexOf(date.getDate()) >= 0 ? {
			range: this.errorLabels.ERRORS_INVALID_RANGE,
		} : null;
	}
}
