import { Routes } from '@angular/router';

import { AvatarDemoPageComponent } from './pages/demo/demo.page';

export const AVATAR_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: AvatarDemoPageComponent,
		pathMatch: 'full',
	},
];
