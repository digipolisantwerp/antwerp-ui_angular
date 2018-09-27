import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Components } from './components/index';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
})
export class RangeSliderModule {
}
