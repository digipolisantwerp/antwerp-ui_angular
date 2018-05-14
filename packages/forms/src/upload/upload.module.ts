import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProgressBarModule } from '@acpaas-ui/ngx-progress-bar';

import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { UploadComponent } from './components/upload/upload.component';
import { Uploader } from './components/uploader/uploader.class';
import { UploadZoneComponent } from './components/upload-zone/upload-zone.component';
import { UploadQueueComponent } from './components/upload-queue/upload-queue.component';
import { ValidationListComponent } from './components/validation-list/validation-list.component';
import { UploadedListComponent } from './components/uploaded-list/uploaded-list.component';

import { ValidationMessagesService } from './components/validation-messages/validation-messages.service';
import { ValidationMessages, INIT_VALIDATION_MESSAGES } from './components/validation-messages/validation-messages.const';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ProgressBarModule,
        FormsModule
    ],
    declarations: [
        UploadInputComponent,
        UploadComponent,
        UploadZoneComponent,
        UploadQueueComponent,
        ValidationListComponent,
        UploadedListComponent
    ],
    exports: [
        UploadInputComponent,
        UploadComponent,
        UploadZoneComponent,
        UploadQueueComponent,
        ValidationListComponent,
        UploadedListComponent
    ],
    providers: [
        ValidationMessagesService,
        { provide: INIT_VALIDATION_MESSAGES, useValue: {} }
    ]
})
export class UploadModule {
    static forChild(validationMessages: ValidationMessages = {}): ModuleWithProviders {
        return {
            ngModule: UploadModule,
            providers: [
                { provide: INIT_VALIDATION_MESSAGES, useValue: validationMessages }
            ]
        };
    }
}
