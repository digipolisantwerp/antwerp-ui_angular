import { Routes } from '@angular/router';

import { ContextDemoPageComponent } from './pages/demo/demo.page';

export const CONTEXT_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: ContextDemoPageComponent,
		pathMatch: 'full',
		data: {
			meta: {
				page: 'Context example page',
				title: 'Context example',
				description: 'Description of the context example page',
				metatags: 'ACPaaS UI, Angular, context',
			},
		},
	},
];
