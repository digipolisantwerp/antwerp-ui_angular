import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from '@acpaas-ui/ngx-components/forms';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
		FormsModule,
		TimepickerModule,
	],
	declarations: [
		Pages,
	],
})
export class FormsExamplesModule {}
