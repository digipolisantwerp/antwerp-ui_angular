import {InjectionToken} from '@angular/core';

import {UploadOptions, ValidationMessages} from './types/upload.types';

export const UPLOAD_OPTIONS_DEFAULT: UploadOptions = {
  allowedMimeTypes: [],
  allowedFileTypes: [],
  autoUpload: false,
  maxFileSize: 0, // 0 is infinite
  queueLimit: 0, // 0 is infinite
  type: 'drop',
  url: '',
};

export const UPLOAD_VALIDATION_MESSAGES = new InjectionToken<ValidationMessages>('uploadValidationMessages');
