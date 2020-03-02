import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Components } from './components';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
})
export class LogoModule {
}
