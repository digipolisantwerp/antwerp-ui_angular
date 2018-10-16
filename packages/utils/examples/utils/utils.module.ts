import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
	FilterModule,
	LabelsModule,
	WindowModule,
} from '@acpaas-ui/ngx-components/utils';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		CodeSnippetModule,
		FilterModule,
		LabelsModule,
		WindowModule,
	],
	declarations: [
		Pages,
	],
})
export class UtilsExamplesModule {}
