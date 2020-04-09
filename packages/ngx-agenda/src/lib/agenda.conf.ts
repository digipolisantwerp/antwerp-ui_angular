import {InjectionToken} from '@angular/core';

export const DEFAULT_WEEKDAY_LABELS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const DEFAULT_MONTH_LABELS = [
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

export const DEFAULT_MORE_LABEL = 'more';

export const WEEKDAY_LABELS = new InjectionToken<string[]>('weekdayLabels');
export const MONTH_LABELS = new InjectionToken<string[]>('monthLabels');
export const MORE_LABEL = new InjectionToken<string>('moreLabel');
