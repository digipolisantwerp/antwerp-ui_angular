import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '@acpaas-ui/ngx-components/layout';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		FooterModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class LayoutExamplesModule {}
