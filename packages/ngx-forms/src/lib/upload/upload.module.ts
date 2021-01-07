import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProgressBarModule} from '@acpaas-ui/ngx-progress-bar';
import {UPLOAD_VALIDATION_MESSAGES} from './upload.conf';
import {ValidationMessages} from './types/upload.types';
import {UploadComponent} from './components/upload/upload.component';
import {UploadInputComponent} from './components/upload-input/upload-input.component';
import {UploadQueueComponent} from './components/upload-queue/upload-queue.component';
import {UploadZoneComponent} from './components/upload-zone/upload-zone.component';
import {ValidationListComponent} from './components/validation-list/validation-list.component';
import {FormatErrorPipe} from './pipes/format-error.pipe';
import {InstructionsPipe} from './pipes/instructions.pipe';
import {UtilsPipeModule} from '@acpaas-ui/ngx-utils';

const defaultValidationMessages: ValidationMessages = {
  INVALID_FILE_SIZE: 'Error: Invalid file size',
  INVALID_MIME_TYPE: 'Error: Invalid mime type',
  INVALID_FILE_TYPE: 'Error: Invalid file type',
  allowedFileTypesLabel: 'Geldige bestandsformaten:', // TODO supposed to be in NL?
  maxFileSizeLabel: 'Maximum grootte bestand:'
};

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    FormsModule,
    UtilsPipeModule
  ],
  declarations: [
    UploadComponent,
    UploadInputComponent,
    UploadQueueComponent,
    UploadZoneComponent,
    ValidationListComponent,
    FormatErrorPipe,
    InstructionsPipe
  ],
  exports: [
    UploadComponent,
    UploadInputComponent,
    UploadQueueComponent,
    UploadZoneComponent,
    ValidationListComponent,
    FormatErrorPipe
  ],
  providers: [
    {provide: UPLOAD_VALIDATION_MESSAGES, useValue: defaultValidationMessages},
  ],
})
export class UploadModule {
  static forChild(
    validationMessages: ValidationMessages = {}
  ): ModuleWithProviders {
    return {
      ngModule: UploadModule,
      providers: [
        {provide: UPLOAD_VALIDATION_MESSAGES, useValue: validationMessages || defaultValidationMessages},
      ],
    };
  }
}
