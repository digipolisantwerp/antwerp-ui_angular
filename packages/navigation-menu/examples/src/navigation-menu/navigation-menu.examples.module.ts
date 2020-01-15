import { NgModule } from '@angular/core';
import { NavigationMenuModule } from '@acpaas-ui/ngx-components/navigation-menu';
import { NavigationMenuDemoPage } from './pages/demo/demo.page';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

@NgModule({
	declarations: [
		NavigationMenuDemoPage,
	],
	imports: [
		NavigationMenuModule,
		CodeSnippetModule,
	],
})
export class NavigationMenuExamplesModule {
}
