import { Routes } from '@angular/router';

import * as PAGES from './pages';

import { EXAMPLES_ROUTES } from './examples.routes';

export const ROUTES: Routes = [
	{ path: '', redirectTo: '/modules', pathMatch: 'full' },
	{ path: 'modules', component: PAGES.ModulesPageComponent, children: EXAMPLES_ROUTES },
	{ path: '**', component: PAGES.NotFoundPageComponent },
];
