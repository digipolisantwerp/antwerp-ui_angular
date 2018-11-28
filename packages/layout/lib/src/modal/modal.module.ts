import { NgModule } from '@angular/core';

import { Components, EntryComponents } from './components/index';
import { Directives } from './directives/index';
import { Services } from './services/index';

@NgModule({
	providers: [
		...Services,
	],
	declarations: [
		...Components,
		...Directives,
	],
	exports: [
		...Components,
		...Directives,
	],
	entryComponents: [
		...EntryComponents,
	],
})
export class ModalModule {}
