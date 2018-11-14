import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@acpaas-ui/ngx-components/map';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		LeafletModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class MapExamplesModule {}
