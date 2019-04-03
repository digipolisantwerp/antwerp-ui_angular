import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LabelsModule } from '@acpaas-ui/ngx-components/utils';

import { Components } from './components/index';
import { StatusbarAvailableTypes } from './types/status-bar.types';
import { STATUSBAR_AVAILABLE_TYPES, STATUSBAR_DEFAULT_TYPES } from './status-bar.conf';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,

		LabelsModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
	providers: [
		{ provide: STATUSBAR_AVAILABLE_TYPES, useValue: STATUSBAR_DEFAULT_TYPES },
	],
})
export class StatusbarModule {
	static forChild(
		availableTypes: StatusbarAvailableTypes
	): ModuleWithProviders {
		return {
			ngModule: StatusbarModule,
			providers: [
				{ provide: STATUSBAR_AVAILABLE_TYPES, useValue: availableTypes },
			],
		};
	}
}
