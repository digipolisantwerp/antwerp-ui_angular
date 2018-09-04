import { Routes } from '@angular/router';

import { FormsDemoPageComponent } from './pages/demo/demo.page';

export const FORMS_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: FormsDemoPageComponent,
		pathMatch: 'full',
	},
];
