import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarMonthComponent } from './components/month/month.component';
import { CalendarYearComponent } from './components/year/year.component';
import { CalendarDecenniaComponent } from './components/decennia/decennia.component';
import { CalendarService } from './services/calendar.service';
import { TitleCasePipe } from './pipes/titlecase.pipe';
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
		CalendarComponent,
		CalendarMonthComponent,
		CalendarYearComponent,
		CalendarDecenniaComponent,
		TitleCasePipe,
	],
	exports: [
		CalendarComponent,
		CalendarMonthComponent,
		CalendarYearComponent,
		CalendarDecenniaComponent,
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
