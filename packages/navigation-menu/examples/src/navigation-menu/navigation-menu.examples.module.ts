import { NgModule } from '@angular/core';
import { NavigationMenuDemoPage } from './pages/demo/demo.page';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

@NgModule({
	declarations: [
		NavigationMenuDemoPage,
	],
	imports: [
		CodeSnippetModule,
	],
})
export class NavigationMenuExamplesModule {
}
