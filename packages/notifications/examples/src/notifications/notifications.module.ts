import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusbarModule } from '@acpaas-ui/ngx-components/notifications';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
		StatusbarModule.forChild({
			E: {
				type: 'error',
				icon: 'fa-bell-o',
				classList: 'notification-error',
			},
			S: {
				type: 'success',
				icon: 'fa-check-circle-o',
				classList: 'notification-success',
			},
		}),
	],
	declarations: [
		Pages,
	],
})
export class StatusbarExamplesModule {}
