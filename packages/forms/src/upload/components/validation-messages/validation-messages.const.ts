import { InjectionToken } from '@angular/core';

export interface ValidationMessages {
    INVALID_FILE_TYPE?: string;
    INVALID_FILE_SIZE?: string;
    INVALID_MIME_TYPE?: string;
}

export const INIT_VALIDATION_MESSAGES = new InjectionToken<ValidationMessages>('initValidationMessages');
