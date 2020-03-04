import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components } from './components';
import { Directives } from './directives';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		...Components,
		...Directives,
	],
	exports: [
		...Components,
		...Directives,
	],
})
export class HeaderModule {}
