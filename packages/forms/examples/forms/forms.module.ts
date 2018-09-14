import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
		AutoCompleteModule,
	],
	declarations: [
		Pages,
	],
})
export class FormsExamplesModule {}
