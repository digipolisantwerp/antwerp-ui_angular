import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { FormsModule } from '@angular/forms';
import { RangeSliderModule } from '@acpaas-ui/ngx-components/forms';
import { MaskModule } from '@acpaas-ui/ngx-components/forms';
import { TimepickerModule } from '@acpaas-ui/ngx-components/forms';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RangeSliderModule,
		CodeSnippetModule,
		FormsModule,
 		MaskModule,
		TimepickerModule,
	],
	declarations: [
		Pages,
	],
})
export class FormsExamplesModule {}
