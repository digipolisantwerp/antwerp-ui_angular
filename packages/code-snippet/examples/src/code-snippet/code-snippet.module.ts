import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class CodeSnippetExamplesModule {}
