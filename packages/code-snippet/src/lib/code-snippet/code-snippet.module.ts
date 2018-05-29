import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { Components } from './components/index';

@NgModule({
	imports: [
		CommonModule,
		HighlightJsModule,
	],
	declarations: [
		...Components,
	],
	providers: [
		HighlightJsService,
	],
	exports: [
		...Components,
	],
})
export class CodeSnippetModule {
}
