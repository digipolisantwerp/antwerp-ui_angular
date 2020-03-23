import {InjectionToken} from '@angular/core';
import {DatepickerErrorLabels} from './types/datepicker.types';

export const DATEPICKER_ERROR_LABELS = new InjectionToken<DatepickerErrorLabels>('errorLabels');

export const DATEPICKER_DEFAULT_ERROR_LABELS = {
  ERRORS_INVALID_DATE: 'INVALID_DATE',
  ERRORS_INVALID_RANGE: 'INVALID_RANGE',
};

export const DATEPICKER_SEPARATOR_CHAR = '/';
export const DATEPICKER_DATE_MASK = `99${DATEPICKER_SEPARATOR_CHAR}99${DATEPICKER_SEPARATOR_CHAR}9999`;
