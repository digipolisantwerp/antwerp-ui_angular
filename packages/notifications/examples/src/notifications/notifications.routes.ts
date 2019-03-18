import { Routes } from '@angular/router';

import { StatusbarDemoPageComponent } from './pages/demo/demo.page';

export const STATUSBAR_ROUTES: Routes = [
	{
		path: '',
		component: StatusbarDemoPageComponent,
		pathMatch: 'full',
	},
];
