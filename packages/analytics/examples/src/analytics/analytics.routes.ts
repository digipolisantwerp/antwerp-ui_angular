import { Routes } from '@angular/router';

import { AnalyticsDemoPageComponent } from './pages/demo/demo.page';

export const ANALYTICS_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: AnalyticsDemoPageComponent,
		pathMatch: 'full',
	},
];
