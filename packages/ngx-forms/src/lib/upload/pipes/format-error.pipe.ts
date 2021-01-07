import {Inject, Pipe, PipeTransform} from '@angular/core';
import {UPLOAD_VALIDATION_MESSAGES} from '../upload.conf';
import {ValidationMessages} from '../types/upload.types';

@Pipe({
  name: 'formatError',
  pure: true
})
export class FormatErrorPipe implements PipeTransform {
  constructor(@Inject(UPLOAD_VALIDATION_MESSAGES) private validationMessages: ValidationMessages) {
  }

  transform(value: any, ...args: any[]): any {
    const reasons: string [] = value || [];
    if (!reasons || !reasons.length) {
      return '';
    }
    const result = [];
    for (const reason of reasons) {
      result.push(this.validationMessages[reason] || 'Error');
    }
    return result.join(', ');
  }
}
