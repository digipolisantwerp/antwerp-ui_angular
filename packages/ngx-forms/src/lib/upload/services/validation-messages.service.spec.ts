import {async, inject, TestBed} from '@angular/core/testing';

import {ValidationMessagesService} from './validation-messages.service';
import {UPLOAD_VALIDATION_MESSAGES} from '../upload.conf';

describe('The Validation messages Service', () => {

  describe('Default values', () => {
    // async beforeEach
    beforeEach(async(() => {
      const messages = {};

      TestBed.configureTestingModule({
        providers: [
          {provide: UPLOAD_VALIDATION_MESSAGES, useValue: messages},
          ValidationMessagesService,
        ],
      }).compileComponents();
    }));

    it('should display the default values', async(inject([ValidationMessagesService], (messagesService: ValidationMessagesService) => {
      expect(messagesService.INVALID_FILE_TYPE).toEqual('INVALID_FILE_TYPE');
      expect(messagesService.INVALID_FILE_SIZE).toEqual('INVALID_FILE_SIZE');
      expect(messagesService.INVALID_MIME_TYPE).toEqual('INVALID_MIME_TYPE');
    })));
  });

  describe('Override values', () => {
    // async beforeEach
    beforeEach(async(() => {
      const messages = {
        INVALID_FILE_TYPE: 'test1',
        INVALID_FILE_SIZE: 'test2',
        INVALID_MIME_TYPE: 'test3',
      };

      TestBed.configureTestingModule({
        providers: [
          {provide: UPLOAD_VALIDATION_MESSAGES, useValue: messages},
          ValidationMessagesService,
        ],
      }).compileComponents();
    }));

    it('should override the default values', async(inject([ValidationMessagesService], (messagesService: ValidationMessagesService) => {
      expect(messagesService.INVALID_FILE_TYPE).toEqual('test1');
      expect(messagesService.INVALID_FILE_SIZE).toEqual('test2');
      expect(messagesService.INVALID_MIME_TYPE).toEqual('test3');
    })));
  });
});
