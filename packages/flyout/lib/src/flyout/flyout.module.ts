import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Directives } from './directives/index';
import { Services } from './services/index';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		Directives,
	],
	exports: [
		Directives,
	],
	providers: [
		Services,
	],
})
export class FlyoutModule {}
