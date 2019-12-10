import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LabelsModule, Label } from '@acpaas-ui/ngx-components/utils';

import { Components } from './components/index';

import { ITEM_COUNTER_LABEL, ITEMS_PER_PAGE_LABEL } from './item-counter.conf';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LabelsModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
	providers: [
		{ provide: ITEM_COUNTER_LABEL, useValue: undefined },
		{ provide: ITEMS_PER_PAGE_LABEL, useValue: undefined },
	],
})
export class ItemCounterModule {
	static forChild(
		itemCounterLabel: Label,
		itemsPerPageLabel: Label
	) {
		return {
			ngModule: ItemCounterModule,
			providers: [
				{ provide: ITEM_COUNTER_LABEL, useValue: itemCounterLabel },
				{ provide: ITEMS_PER_PAGE_LABEL, useValue: itemsPerPageLabel },
			],
		};
	}
}
