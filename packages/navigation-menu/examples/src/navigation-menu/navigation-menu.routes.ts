import { Routes } from '@angular/router';
import { NavigationMenuDemoPage } from './pages/demo/demo.page';

export const NAVIGATION_MENU_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: NavigationMenuDemoPage,
		pathMatch: 'full',
	},
];
