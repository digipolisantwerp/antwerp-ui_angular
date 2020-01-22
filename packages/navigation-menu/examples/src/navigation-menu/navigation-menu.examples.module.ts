import { NgModule } from '@angular/core';
import { NavigationMenuDemoPage } from './pages/demo/demo.page';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { NavigationMenuModule } from '@acpaas-ui/ngx-components/navigation-menu';

@NgModule({
	declarations: [
		NavigationMenuDemoPage,
	],
	imports: [
		CodeSnippetModule,
		NavigationMenuModule,
	],
})
export class NavigationMenuExamplesModule {
}
