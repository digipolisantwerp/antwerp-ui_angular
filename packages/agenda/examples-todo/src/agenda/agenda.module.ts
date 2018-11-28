import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaModule } from '@acpaas-ui/ngx-components/agenda';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		AgendaModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class AgendaExamplesModule {}
