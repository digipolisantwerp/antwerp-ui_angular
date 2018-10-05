import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule, ItemCounterModule } from '@acpaas-ui/ngx-components/pagination';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		ItemCounterModule.forChild({
			singular: '%{currentFrom} - %{currentTo} of %{totalAmount} item',
			plural: '%{currentFrom} - %{currentTo} of %{totalAmount} items',
		},
		{
			singular: 'item per page',
			plural: 'items per page',
		}),
		PaginationModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class PaginationExamplesModule {}
