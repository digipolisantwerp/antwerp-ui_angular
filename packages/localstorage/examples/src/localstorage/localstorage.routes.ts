import { Routes } from '@angular/router';

import { LocalstorageDemoPageComponent } from './pages/demo/demo.page';

export const LOCALSTORAGE_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: LocalstorageDemoPageComponent,
		pathMatch: 'full',
	},
];
