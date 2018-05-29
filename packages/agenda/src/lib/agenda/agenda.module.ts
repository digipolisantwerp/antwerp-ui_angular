import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import './rxjs';
import { WEEKDAY_LABELS, DEFAULT_WEEKDAY_LABELS } from './agenda.conf';
import { MONTH_LABELS, DEFAULT_MONTH_LABELS } from './agenda.conf';
import { MORE_LABEL, DEFAULT_MORE_LABEL } from './agenda.conf';

// Pipes
import { MonthPipe } from './pipes/month.pipe';
import { WeekdayPipe } from './pipes/weekday.pipe';

// Components
import { Components, AgendaComponent } from './components/index';

// Services
import { DateHelperService } from './services/date-helper.service';
import { MonthViewSlotsService } from './services/month-view-slots.service';
import { SortingService } from './services/sorting.service';

import { HammerConfig } from './hammer.conf';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		MonthPipe,
		WeekdayPipe,
		...Components,
	],
	exports: [
		AgendaComponent,
	],
	providers: [
		DateHelperService,
		MonthViewSlotsService,
		SortingService,
		{ provide: WEEKDAY_LABELS, useValue: DEFAULT_WEEKDAY_LABELS },
		{ provide: MONTH_LABELS, useValue: DEFAULT_MONTH_LABELS },
		{ provide: MORE_LABEL, useValue: DEFAULT_MORE_LABEL },
		{ provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
	],
})
export class AgendaModule {
	static forChild(
		weekdayLabels: string[],
		monthLabels: string[],
		moreLabel: string
	): ModuleWithProviders {
		return {
			ngModule: AgendaModule,
			providers: [
				DateHelperService,
				MonthViewSlotsService,
				SortingService,
				{ provide: WEEKDAY_LABELS, useValue: weekdayLabels },
				{ provide: MONTH_LABELS, useValue: monthLabels },
				{ provide: MORE_LABEL, useValue: moreLabel },
				{ provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
			],
		};
	}
}
