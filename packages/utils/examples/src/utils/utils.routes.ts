import { Routes } from '@angular/router';

import { UtilsDemoPageComponent } from './pages/demo/demo.page';
import { UtilsFilterDemoPageComponent } from './pages/filter/filter.page';
import { UtilsLabelsDemoPageComponent } from './pages/labels/labels.page';
import { UtilsWindowDemoPageComponent } from './pages/window/window.page';

export const UTILS_EXAMPLES_ROUTES: Routes = [
	{
		component: UtilsDemoPageComponent,
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'filter',
			},
			{
				path: 'filter',
				pathMatch: 'full',
				component: UtilsFilterDemoPageComponent,
				data: { meta: { title: 'Filter' } },
			},
			{
				path: 'labels',
				pathMatch: 'full',
				component: UtilsLabelsDemoPageComponent,
				data: { meta: { title: 'Labels' } },
			},
			{
				path: 'window',
				pathMatch: 'full',
				component: UtilsWindowDemoPageComponent,
				data: { meta: { title: 'Window' } },
			},
		],
	},
];
