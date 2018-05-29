import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components } from './components/index';
import { Services } from './services/index';
import { Pipes } from './pipes/index';

import {
	CALENDAR_WEEKDAY_LABELS,
	CALENDAR_DEFAULT_WEEKDAY_LABELS,
	CALENDAR_MONTH_LABELS,
	CALENDAR_DEFAULT_MONTH_LABELS
} from './calendar.conf';
import { WeekdayLabelsConfig, MonthLabelsConfig } from './types/calendar.types';
import { CalendarService } from './services/calendar.service';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		Components,
		Pipes,
	],
	exports: [
		Components,
		Pipes,
	],
	providers: [
		Services,
		{ provide: CALENDAR_WEEKDAY_LABELS, useValue: CALENDAR_DEFAULT_WEEKDAY_LABELS },
		{ provide: CALENDAR_MONTH_LABELS, useValue: CALENDAR_DEFAULT_MONTH_LABELS },
	],
})
export class CalendarModule {
	static forChild(
		weekdayLabels: WeekdayLabelsConfig,
		monthLabels: MonthLabelsConfig
	): ModuleWithProviders {
		return {
			ngModule: CalendarModule,
			providers: [
				CalendarService,
				{ provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
				{ provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
			],
		};
	}
}
