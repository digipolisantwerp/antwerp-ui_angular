import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Directives } from './directives';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		...Directives,
	],
	exports: [
		...Directives,
	],
	providers: [],
})
export class MaskModule {}
