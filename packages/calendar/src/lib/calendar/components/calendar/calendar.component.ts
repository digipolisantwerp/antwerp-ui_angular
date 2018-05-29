import {
	Component,
	Inject,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
	OnInit,
	OnChanges,
	SimpleChanges
} from '@angular/core';

import { DateRange, DateHelper } from '@acpaas-ui/js-date-utils';

import {
	CALENDAR_MONTH_LABELS,
	CALENDAR_DEFAULT_MONTH_LABELS,
	CALENDAR_WEEKDAY_LABELS,
	CALENDAR_DEFAULT_WEEKDAY_LABELS
} from '../../calendar.conf';
import {
	WeekdayLabelsConfig,
	MonthLabelsConfig,
	CALENDAR_VIEW_MONTH,
	CALENDAR_VIEW_YEAR,
	CALENDAR_VIEW_DECENNIA
} from '../../types/calendar.types';
import { CalendarService } from '../../services/calendar.service';

@Component({
	selector: 'aui-calendar',
	templateUrl: './calendar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit, OnChanges {
	@Input() selectedDate: Date;
	@Input() range: DateRange;
	@Input() weekdayLabels: WeekdayLabelsConfig;
	@Input() monthLabels: MonthLabelsConfig;
	@Output() selectDate = new EventEmitter();

	public CALENDAR_VIEW_MONTH = CALENDAR_VIEW_MONTH;
	public CALENDAR_VIEW_YEAR = CALENDAR_VIEW_YEAR;
	public CALENDAR_VIEW_DECENNIA = CALENDAR_VIEW_DECENNIA;
	public activeDate: Date;
	public activeView: string = CALENDAR_VIEW_MONTH;
	public headerLabel = '';

	constructor(
		@Inject(CALENDAR_MONTH_LABELS) public moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS,
		@Inject(CALENDAR_WEEKDAY_LABELS) public moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS,
		private calendarService: CalendarService
	) {}

	ngOnInit() {
		this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
		this.monthLabels = this.monthLabels || this.moduleMonthLabels;
		this.activeDate = this.calendarService.getClosestDateForRange(this.activeDate, this.range);
		this.updateHeaderLabel();
	}

	ngOnChanges(changes: SimpleChanges) {
		const selectedDate = changes.selectedDate && changes.selectedDate.currentValue ? changes.selectedDate : null;

		if (
			typeof this.monthLabels !== 'undefined' &&
			selectedDate &&
			!DateHelper.datesAreEqual(selectedDate.currentValue, selectedDate.previousValue)
		) {
			this.activeDate = this.selectedDate;
			this.updateHeaderLabel();
		}
	}

	updateActiveDate(factor: number = 0): void {
		if (factor === 0) {
			return;
		}

		const activeDate = this.activeDate ? new Date(this.activeDate) : new Date();

		switch (this.activeView) {
			case CALENDAR_VIEW_MONTH:
				activeDate.setMonth(activeDate.getMonth() + factor);
				break;
			case CALENDAR_VIEW_YEAR:
				activeDate.setFullYear(activeDate.getFullYear() + factor);
				break;
			case CALENDAR_VIEW_DECENNIA:
				activeDate.setFullYear(activeDate.getFullYear() + (12 * factor));
				break;
		}

		this.activeDate = activeDate;
		this.updateHeaderLabel();
	}

	switchView(factor: number = 1): void {
		const views = [CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CALENDAR_VIEW_DECENNIA];

		const currView = views.indexOf(this.activeView);
		let nextView = (currView + factor) >= views.length ? 0 : currView + factor;
		nextView = nextView < 0 ? views.length - 1 : nextView;

		this.activeView = views[nextView];

		// reset activeDate when returning to month view without model update
		if (this.selectedDate && nextView === 0 && factor === 1) {
			this.activeDate = this.selectedDate;
		}

		this.updateHeaderLabel();
	}

	updateHeaderLabel(): void {
		switch (this.activeView) {
			case CALENDAR_VIEW_MONTH:
				this.headerLabel = this.monthLabels[this.activeDate.getMonth()] + ' ' + this.activeDate.getFullYear();
				break;
			case CALENDAR_VIEW_YEAR:
				this.headerLabel = String(this.activeDate.getFullYear());
				break;
			case CALENDAR_VIEW_DECENNIA:
				const startYear = this.activeDate.getFullYear();
				this.headerLabel = `${startYear} - ${startYear + 11}`;
				break;
		}
	}

	pickDate(date: Date): void {
		const complete = this.activeView === CALENDAR_VIEW_MONTH;

		this.selectDate.emit({
			date: date,
			complete: complete,
		});

		if (!complete) {
			this.switchView(-1);
		}
	}
}
