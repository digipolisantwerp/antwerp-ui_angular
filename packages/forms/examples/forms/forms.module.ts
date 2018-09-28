import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	AutoCompleteModule,
	MaskModule,
	RangeSliderModule,
} from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { TimepickerModule } from '@acpaas-ui/ngx-components/forms';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
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
