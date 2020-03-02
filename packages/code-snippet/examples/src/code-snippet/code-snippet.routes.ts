import { Routes } from '@angular/router';

import { CodeSnippetDemoPageComponent } from '../../../../../projects/styleguide/src/examples/pages/aui-code-snippet/aui-snippet.page';

export const CODE_SNIPPET_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: CodeSnippetDemoPageComponent,
		pathMatch: 'full',
	},
];
