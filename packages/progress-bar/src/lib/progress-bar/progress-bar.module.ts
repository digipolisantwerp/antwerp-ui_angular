import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components } from './components/index';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		Components,
	],
	exports: [
		Components,
	],
})
export class ProgressBarModule {}
