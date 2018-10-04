import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import {
	CalendarModule,
	CALENDAR_WEEKDAY_LABELS,
	CALENDAR_DEFAULT_WEEKDAY_LABELS,
	CALENDAR_MONTH_LABELS,
	CALENDAR_DEFAULT_MONTH_LABELS
} from '@acpaas-ui/ngx-components/calendar';

import { MaskModule } from '../mask/index';

import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DATEPICKER_ERROR_LABELS, DATEPICKER_DEFAULT_ERROR_LABELS } from './datepicker.conf';
import { DatepickerErrorLabels } from './types/datepicker.types';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CalendarModule,
		FlyoutModule,
		MaskModule,
	],
	declarations: [
		DatepickerComponent,
	],
	exports: [
		DatepickerComponent,
	],
	providers: [
		{ provide: CALENDAR_WEEKDAY_LABELS, useValue: CALENDAR_DEFAULT_WEEKDAY_LABELS },
		{ provide: CALENDAR_MONTH_LABELS, useValue: CALENDAR_DEFAULT_MONTH_LABELS },
		{ provide: DATEPICKER_ERROR_LABELS, useValue: DATEPICKER_DEFAULT_ERROR_LABELS },
	],
})
export class DatepickerModule {
	static forChild(
		weekdayLabels: string[],
		monthLabels: string[],
		errorLabels: DatepickerErrorLabels
	): ModuleWithProviders {
		return {
			ngModule: DatepickerModule,
			providers: [
				{ provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
				{ provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
				{ provide: DATEPICKER_ERROR_LABELS, useValue: errorLabels },
			],
		};
	}
}
