import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		AutoCompleteModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class AutoCompleteExamplesModule {}
