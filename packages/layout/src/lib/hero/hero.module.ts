import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { Components } from './components/index';
import { Directives } from './directives/index';

@NgModule({
	imports: [
		BrowserModule,
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
export class HeroModule {
}
