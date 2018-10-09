import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '@acpaas-ui/ngx-components/table';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';
import { Components, EntryComponents } from './components/index';

@NgModule({
	imports: [
		CommonModule,
		TableModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
		Components,
	],
	entryComponents: [
		EntryComponents,
	],
})
export class TableExamplesModule {}
