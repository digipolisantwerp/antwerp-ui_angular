import { Routes } from '@angular/router';

import { SplashPageComponent } from './pages/splash/splash.page';
import { NotFoundPageComponent } from './pages/not-found/not-found.page';

export const ROUTES: Routes = [
	{
		path: '', component: SplashPageComponent,
	},
	{
		path: 'not-found', component: NotFoundPageComponent,
	},
	{
		path: '**', redirectTo: '/not-found', pathMatch: 'full',
	},
];
