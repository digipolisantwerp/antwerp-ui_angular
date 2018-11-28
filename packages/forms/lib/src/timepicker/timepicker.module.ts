import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Components } from './components/index';

@NgModule({
	imports: [
		ReactiveFormsModule,
		CommonModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
	providers: [],
})
export class TimepickerModule {
}
