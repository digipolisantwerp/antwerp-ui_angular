import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
	AutoCompleteModule,
	MaskModule,
	RangeSliderModule,
	TimepickerModule,
} from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
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
