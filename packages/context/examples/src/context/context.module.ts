import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * ContextModule is already imported in styleguide:
 * /styleguide/app/aui.modules.ts
 *
 * This module inherits its Context (forRoot) settings from there
 */
// import { ContextModule } from '@acpaas-ui/ngx-components/context';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class ContextExamplesModule {}
