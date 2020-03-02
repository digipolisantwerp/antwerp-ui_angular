import { Routes } from '@angular/router';

import { DemoPageComponent } from '../../../../../projects/styleguide/src/examples/pages/aui-calendar/aui-calendar.page';

export const CALENDAR_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: DemoPageComponent,
		pathMatch: 'full',
	},
];
