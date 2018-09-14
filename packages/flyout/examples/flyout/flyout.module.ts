import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import { FlyoutButtonModule } from '@acpaas-ui/ngx-components/flyout';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
		FlyoutModule,
		FlyoutButtonModule,
	],
	declarations: [
		Pages,
	],
})
export class FlyoutExamplesModule {}
