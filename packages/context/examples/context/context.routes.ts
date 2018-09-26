import { Routes } from '@angular/router';

import { ContextDemoPageComponent } from './pages/demo/demo.page';

export const CONTEXT_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: ContextDemoPageComponent,
		pathMatch: 'full',
	},
];
