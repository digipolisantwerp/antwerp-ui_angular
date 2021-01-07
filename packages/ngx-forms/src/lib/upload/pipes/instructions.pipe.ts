import {Inject, Pipe, PipeTransform} from '@angular/core';
import {Uploader} from '../classes/uploader.class';
import {UPLOAD_VALIDATION_MESSAGES} from '../upload.conf';
import {ValidationMessages} from '../types/upload.types';
import {BytesPipe} from '@acpaas-ui/ngx-utils';

@Pipe({
  name: 'instructions'
})
export class InstructionsPipe implements PipeTransform {
  constructor(@Inject(UPLOAD_VALIDATION_MESSAGES) private messages: ValidationMessages,
              private bytePipe: BytesPipe) {
  }

  transform(uploader: Uploader, ...args: any[]): any {
    console.log(uploader);
    if (!uploader) {
      return '';
    }
    return `${this.messages.allowedFileTypesLabel}
    ${(uploader.options.allowedFileTypes.length && uploader.options.allowedFileTypes.join(','))
    || uploader.options.allowedMimeTypes.join(',')},
    ${this.messages.maxFileSizeLabel} ${this.bytePipe.transform(uploader.options.maxFileSize)}`;
  }
}
