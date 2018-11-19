import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './pages/not-found/not-found.page';

export const ROUTES: Routes = [
	{
		path: '', redirectTo: '/modules/analytics', pathMatch: 'full',
	},
	{
		path: 'not-found', component: NotFoundPageComponent,
	},
	{
		path: '**', redirectTo: '/not-found', pathMatch: 'full',
	},
];
