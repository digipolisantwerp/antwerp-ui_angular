import { Routes } from '@angular/router';

import { DemoPageComponent } from '../../../../../projects/styleguide/src/examples/pages/aui-map/aui-map.page';

export const MAP_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: DemoPageComponent,
		pathMatch: 'full',
	},
];
