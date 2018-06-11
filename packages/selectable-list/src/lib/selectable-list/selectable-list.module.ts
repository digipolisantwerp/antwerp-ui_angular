import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components, EntryComponents } from './components';
import { Directives } from './directives';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		Components,
		Directives,
	],
	entryComponents: [
		EntryComponents,
	],
	exports: [
		Components,
		Directives,
	],
})
export class SelectableListModule {

}
