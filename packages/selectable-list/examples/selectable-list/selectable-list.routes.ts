import { Routes } from '@angular/router';

import { SelectableListDemoPageComponent } from './pages/demo/demo.page';

export const SELECTABLE_LIST_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: SelectableListDemoPageComponent,
		pathMatch: 'full',
	},
];
