import { Routes } from '@angular/router';

import { TableDemoPageComponent } from './pages/demo/demo.page';

export const TABLE_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: TableDemoPageComponent,
		pathMatch: 'full',
	},
];
