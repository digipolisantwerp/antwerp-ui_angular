import { Routes } from '@angular/router';

import { PaginationDemoPageComponent } from './pages/demo/demo.page';

export const PAGINATION_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: PaginationDemoPageComponent,
		pathMatch: 'full',
	},
];
