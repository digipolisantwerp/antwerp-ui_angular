import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule, ItemCounterModule } from '@acpaas-ui/ngx-components/pagination';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		ItemCounterModule.forChild({
			singular: '%{currentFrom} - %{currentTo} van %{totalAmount} item',
			plural: '%{currentFrom} - %{currentTo} van de %{totalAmount} items',
		},
		{
			singular: 'item per pagina',
			plural: 'items per pagina',
		}),
		PaginationModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class PaginationExamplesModule {}
