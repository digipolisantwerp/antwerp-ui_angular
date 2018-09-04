import { Routes } from '@angular/router';

import { AutoCompleteDemoPageComponent } from './pages/demo/demo.page';

export const AUTO_COMPLETE_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: AutoCompleteDemoPageComponent,
		pathMatch: 'full',
	},
];
