import {Component} from '@angular/core';

@Component({
  selector: 'demo-page',
  templateUrl: './aui-navigation-menu.page.html',
  styles: [
    'figure img { max-width: 400px }'
  ]
})
export class NavigationMenuDemoPage {
  importModule = `
	import { NavigationMenuModule } from '@acpaas-ui/ngx-navigation-menu';

	@NgModule({
		imports:[
			NavigationMenuModule
		]
	 })
	 export class YourModule {}
	`;

  importModuleCustomSettings = `
	import { NavigationMenuModule } from '@acpaas-ui/ngx-navigation-menu';

	@NgModule({
		imports:[
			 NavigationMenuModule.configure({
				 dockedByDefault: true,	// False by default
				 moreIcon: 'angle-up'
			 })
		]
	 })
	 export class YourModule {}
	`;

  basicUsage = `
	<aui-menu [translations]="{ lblMore: 'More...'}>
    	<aui-menu-tab><aui-menu-link>Link One</aui-menu-link></aui-menu-tab>
    	<aui-menu-tab><aui-menu-link>Link Two</aui-menu-link></aui-menu-tab>
	</aui-menu>
	`;

  simpleLinks = `
	<aui-menu>
    	<aui-menu-tab><aui-menu-link href="https://www.google.com">Link One</aui-menu-link></aui-menu-tab>
    	<aui-menu-tab><aui-menu-link routerLink="home">Link Two</aui-menu-link></aui-menu-tab>
	</aui-menu>
	`;

  simpleLinksBound = `
	<aui-menu>
    	<aui-menu-tab><aui-menu-link [href]="app.link">Link One</aui-menu-link></aui-menu-tab>
    	<aui-menu-tab><aui-menu-link [routerLink]="link$ | async">Link Two</aui-menu-link></aui-menu-tab>
	</aui-menu>
	`;

  firstSubMenu = `
	<aui-menu>
		<aui-menu-tab>
			<aui-menu-link>Link One</aui-menu-link>
			<aui-sub-menu>
				<aui-sub-menu-item>Submenu Item 1</aui-sub-menu-item>
				<aui-sub-menu-item><aui-menu-link>Submenu Item 2</aui-menu-link></aui-sub-menu-item>
			</aui-sub-menu>
		</aui-menu-tab>
		<aui-menu-tab><aui-menu-link routerLink="home">Link Two</aui-menu-link></aui-menu-tab>
	</aui-menu>
	`;

  secondSubMenu = `
	<aui-menu>
		<aui-menu-tab>
			<aui-menu-link>Link One</aui-menu-link>
			<aui-sub-menu>
				<aui-sub-menu-item>
					<aui-menu-link>Submenu Item 1</aui-menu-link>
					<aui-sub-menu>
						<aui-sub-menu-item>2 Layers Deep here</aui-sub-menu-item>
					</aui-sub-menu>
				</aui-sub-menu-item>
				<aui-sub-menu-item><aui-menu-link>Submenu Item 2</aui-menu-link></aui-sub-menu-item>
			</aui-sub-menu>
		</aui-menu-tab>
		<aui-menu-tab><aui-menu-link routerLink="home">Link Two</aui-menu-link></aui-menu-tab>
	</aui-menu>
	`;

  icons = `
	<aui-menu-tab icon="bars">
    	<!-- compiles to fa fa-bars -->
	</aui-menu-tab>
	`;
}
