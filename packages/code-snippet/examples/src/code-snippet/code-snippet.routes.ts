import { Routes } from '@angular/router';

import { CodeSnippetDemoPageComponent } from './pages/demo/demo.page';

export const CODE_SNIPPET_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: CodeSnippetDemoPageComponent,
		pathMatch: 'full',
	},
];
