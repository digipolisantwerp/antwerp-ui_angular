import { Routes } from '@angular/router';

import { LogoDemoPageComponent } from './pages/demo/demo.page';

export const LOGO_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: LogoDemoPageComponent,
		pathMatch: 'full',
	},
];
