import { InjectionToken } from '@angular/core';
import { WeekdayLabelsConfig, MonthLabelsConfig } from './types/calendar.types';

export const CALENDAR_DEFAULT_WEEKDAY_LABELS = [
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat',
	'Sun',
];

export const CALENDAR_DEFAULT_MONTH_LABELS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const CALENDAR_WEEKDAY_LABELS = new InjectionToken<WeekdayLabelsConfig>('weekdayLabels');
export const CALENDAR_MONTH_LABELS = new InjectionToken<MonthLabelsConfig>('monthLabels');
