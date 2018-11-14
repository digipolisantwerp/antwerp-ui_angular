import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextModule } from '@acpaas-ui/ngx-components/context';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		ContextModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class ContextExamplesModule {}
