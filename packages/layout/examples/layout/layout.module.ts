import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { FooterModule } from '@acpaas-ui/ngx-components/layout/';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
		FooterModule,
	],
	declarations: [
		Pages,
	],
})
export class LayoutExamplesModule {}
