import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components } from './components/index';
import { PaginationLabels } from './types/pagination.types';
import { PAGINATION_LABELS, PAGINATION_LABELS_DEFAULT } from './pagination.conf';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
	providers: [
		{ provide: PAGINATION_LABELS, useValue: PAGINATION_LABELS_DEFAULT },
	],
})
export class PaginationModule {
	static forChild(
		paginationLabels: PaginationLabels
	): ModuleWithProviders {
		return {
			ngModule: PaginationModule,
			providers: [
				{ provide: PAGINATION_LABELS, useValue: paginationLabels },
			],
		};
	}
}
