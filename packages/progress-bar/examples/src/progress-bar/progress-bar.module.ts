import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		ProgressBarModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class ProgressBarExamplesModule {}
