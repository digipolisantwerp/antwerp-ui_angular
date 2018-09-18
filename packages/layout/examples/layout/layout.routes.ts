import { Routes } from '@angular/router';

import { LayoutDemoPageComponent } from './pages/demo/demo.page';

export const LAYOUT_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: LayoutDemoPageComponent,
		pathMatch: 'full',
	},
];
