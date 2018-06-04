import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsModule } from '@acpaas-ui/ngx-components/utils';

import { Components } from './components';

@NgModule({
	imports: [
		CommonModule,
		LabelsModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
})
export class FieldErrorsModule {
}
