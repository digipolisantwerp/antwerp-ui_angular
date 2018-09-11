import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '@acpaas-ui/ngx-components/pagination';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		PaginationModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class PaginationExamplesModule {}
