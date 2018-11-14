import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '@acpaas-ui/ngx-components/logo';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		LogoModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class LogoExamplesModule {}
