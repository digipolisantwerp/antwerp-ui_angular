import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProgressBarModule} from '@acpaas-ui/ngx-progress-bar';

import {Components} from './components';
import {Services} from './services';
import {UPLOAD_VALIDATION_MESSAGES} from './upload.conf';
import {ValidationMessages} from './types/upload.types';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    FormsModule,
  ],
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components,
  ],
  providers: [
    ...Services,
    {provide: UPLOAD_VALIDATION_MESSAGES, useValue: {}},
  ],
})
export class UploadModule {
  static forChild(
    validationMessages: ValidationMessages = {}
  ): ModuleWithProviders {
    return {
      ngModule: UploadModule,
      providers: [
        {provide: UPLOAD_VALIDATION_MESSAGES, useValue: validationMessages},
      ],
    };
  }
}
