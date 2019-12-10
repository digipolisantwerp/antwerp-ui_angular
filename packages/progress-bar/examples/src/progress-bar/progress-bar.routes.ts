import { Routes } from '@angular/router';

import { ProgressBarDemoPageComponent } from './pages/demo/demo.page';

export const PROGRESS_BAR_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: ProgressBarDemoPageComponent,
		pathMatch: 'full',
	},
];
