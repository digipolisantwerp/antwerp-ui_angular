import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components } from './components/index';
import { Directives } from './directives/index';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		Components,
		Directives,
	],
	exports: [
		Components,
		Directives,
	],
})
export class SelectableListModule {

}
