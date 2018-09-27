import { NgModule, ModuleWithProviders, Inject, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';

import { Components } from './components/index';
import { Services } from './services/index';
import { UPLOAD_VALIDATION_MESSAGES } from './upload.conf';
import { ValidationMessages } from './types/upload.types';

@NgModule({
	imports: [
		BrowserModule,
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
		{ provide: UPLOAD_VALIDATION_MESSAGES, useValue: {} },
	],
})
export class UploadModule {
	static forChild(
		validationMessages: ValidationMessages = {}
	): ModuleWithProviders {
		return {
			ngModule: UploadModule,
			providers: [
				{ provide: UPLOAD_VALIDATION_MESSAGES, useValue: validationMessages },
			],
		};
	}
}
