import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	AutoCompleteModule,
	DatepickerModule,
	MaskModule,
	RangeSliderModule,
	TimepickerModule,
} from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		DatepickerModule,
		FormsModule,
		RangeSliderModule,
		CodeSnippetModule,
		FormsModule,
		AutoCompleteModule,
		CodeSnippetModule,
 		MaskModule,
		TimepickerModule,
	],
	declarations: [
		Pages,
	],
})
export class FormsExamplesModule {}
