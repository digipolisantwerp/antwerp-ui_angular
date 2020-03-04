import {InjectionToken} from '@angular/core';
import {MonthLabelsConfig, WeekdayLabelsConfig} from './types/calendar.types';

export const CALENDAR_DEFAULT_WEEKDAY_LABELS = [
  'Maandag',
  'Dinsdag',
  'Woensdag',
  'Donderdag',
  'Vrijdag',
  'Zaterdag',
  'Zondag',
];

export const CALENDAR_DEFAULT_MONTH_LABELS = [
  'Januari',
  'Februari',
  'Maart',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Augustus',
  'September',
  'Oktober',
  'November',
  'December',
];

export const CALENDAR_WEEKDAY_LABELS = new InjectionToken<WeekdayLabelsConfig>('weekdayLabels');
export const CALENDAR_MONTH_LABELS = new InjectionToken<MonthLabelsConfig>('monthLabels');
