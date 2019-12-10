import { Routes } from '@angular/router';

import { UserMenuDemoPageComponent } from './pages/demo/demo.page';

export const USER_MENU_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: UserMenuDemoPageComponent,
		pathMatch: 'full',
	},
];
