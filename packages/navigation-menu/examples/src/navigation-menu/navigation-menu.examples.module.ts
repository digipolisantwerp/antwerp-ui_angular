import { NgModule } from '@angular/core';
import { NavigationMenuModule } from '@acpaas-ui/ngx-components/navigation-menu';
import { NavigationMenuDemoPage } from './pages/demo/demo.page';

@NgModule({
	declarations: [
		NavigationMenuDemoPage
	],
	imports: [
		NavigationMenuModule,
	],
})
export class NavigationMenuExamplesModule {
}
