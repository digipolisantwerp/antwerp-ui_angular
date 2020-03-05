import {Inject, Injectable} from '@angular/core';

import {UPLOAD_VALIDATION_MESSAGES} from '../upload.conf';

@Injectable()
export class ValidationMessagesService {
  public INVALID_FILE_TYPE = 'INVALID_FILE_TYPE';
  public INVALID_FILE_SIZE = 'INVALID_FILE_SIZE';
  public INVALID_MIME_TYPE = 'INVALID_MIME_TYPE';

  constructor(
    @Inject(UPLOAD_VALIDATION_MESSAGES) private initValues
  ) {
    if (initValues.INVALID_FILE_TYPE) {
      this.INVALID_FILE_TYPE = initValues.INVALID_FILE_TYPE;
    }

    if (initValues.INVALID_FILE_SIZE) {
      this.INVALID_FILE_SIZE = initValues.INVALID_FILE_SIZE;
    }

    if (initValues.INVALID_MIME_TYPE) {
      this.INVALID_MIME_TYPE = initValues.INVALID_MIME_TYPE;
    }
  }
}

