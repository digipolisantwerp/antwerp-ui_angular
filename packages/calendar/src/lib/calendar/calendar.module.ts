import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components } from './components/index';
import { CalendarService } from './services/calendar.service';
import { TitleCasePipe } from './pipes/title-case.pipe';
import {
	CALENDAR_WEEKDAY_LABELS,
	CALENDAR_DEFAULT_WEEKDAY_LABELS,
	CALENDAR_MONTH_LABELS,
	CALENDAR_DEFAULT_MONTH_LABELS
} from './calendar.conf';
import { WeekdayLabelsConfig, MonthLabelsConfig } from './types/calendar.types';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		...Components,
		TitleCasePipe,
	],
	exports: [
		...Components,
		TitleCasePipe,
	],
	providers: [
		CalendarService,
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
