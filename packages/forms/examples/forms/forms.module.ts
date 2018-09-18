import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	AutoCompleteModule,
} from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { RouterModule } from '@angular/router';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		AutoCompleteModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
	entryComponents: [
	],
})
export class FormsExamplesModule {}
