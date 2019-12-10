import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';

import { Components } from './components/index';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		FlyoutModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
})
export class SearchFilterModule {
}
