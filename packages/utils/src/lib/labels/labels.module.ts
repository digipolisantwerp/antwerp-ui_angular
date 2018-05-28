import { NgModule } from '@angular/core';

import { Pipes } from './pipes/index';

@NgModule({
	declarations: [
		Pipes,
	],
	exports: [
		Pipes,
	],
})
export class LabelsModule {
}
