import { InjectionToken } from '@angular/core';

import { DatepickerErrorLabels } from '../types/datepicker.types';

export const DATEPICKER_ERROR_LABELS = new InjectionToken<DatepickerErrorLabels>('errorLabels');

export const DATEPICKER_DEFAULT_ERROR_LABELS = {
    ERRORS_INVALID_DATE: 'INVALID_DATE',
    ERRORS_INVALID_RANGE: 'INVALID_RANGE'
};

export const SEPARATOR_CHAR = '/';
export const DATE_MASK = ['99', '99', '9999'].join(SEPARATOR_CHAR);
