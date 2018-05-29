import { DateRange } from '@acpaas-ui/js-date-utils';

export const CALENDAR_VIEW_MONTH = 'CALENDAR_VIEW_MONTH';
export const CALENDAR_VIEW_YEAR = 'CALENDAR_VIEW_YEAR';
export const CALENDAR_VIEW_DECENNIA = 'CALENDAR_VIEW_DECENNIA';

export type WeekdayLabelsConfig = string[];
export type MonthLabelsConfig = string[];

export interface DatepickerResult {
	date: Date;
	complete: Boolean;
}

export interface DateRangeMap {
	before: number[];
	current: number[];
	after: number[];
}
