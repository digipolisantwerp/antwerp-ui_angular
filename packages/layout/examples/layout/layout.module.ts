import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { HeroModule } from '@acpaas-ui/ngx-components/layout/';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
		HeroModule,
	],
	declarations: [
		Pages,
	],
})
export class LayoutExamplesModule {}
