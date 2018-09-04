import { Routes } from '@angular/router';

import { CodeSnippetDemoPageComponent } from './pages/demo/demo.page';

export const CODESNIPPET_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: CodeSnippetDemoPageComponent,
		pathMatch: 'full',
	},
];
