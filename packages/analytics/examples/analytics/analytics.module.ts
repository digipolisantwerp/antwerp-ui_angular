import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsModule } from '@acpaas-ui/ngx-components/analytics';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		AnalyticsModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class AnalyticsExamplesModule {}
