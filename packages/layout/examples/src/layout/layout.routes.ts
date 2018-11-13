import { Routes } from '@angular/router';

import { LayoutDemoPageComponent } from './pages/demo/demo.page';
import { LayoutCookieconsentDemoPageComponent } from './pages/cookie-consent/cookie-consent.page';
import { LayoutFooterDemoPageComponent } from './pages/footer/footer.page';
import { LayoutHeaderDemoPageComponent } from './pages/header/header.page';
import { LayoutHeroDemoPageComponent } from './pages/hero/hero.page';
import { LayoutModalDemoPageComponent } from './pages/modal/modal.page';
import { LayoutPaneDemoPageComponent } from './pages/pane/pane.page';
import { LayoutSidebarDemoPageComponent } from './pages/sidebar/sidebar.page';

export const LAYOUT_EXAMPLES_ROUTES: Routes = [
	{
		component: LayoutDemoPageComponent,
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'cookie-consent',
			},
			{
				path: 'cookie-consent',
				pathMatch: 'full',
				component: LayoutCookieconsentDemoPageComponent,
			},
			{
				path: 'footer',
				pathMatch: 'full',
				component: LayoutFooterDemoPageComponent,
			},
			{
				path: 'header',
				pathMatch: 'full',
				component: LayoutHeaderDemoPageComponent,
			},
			{
				path: 'hero',
				pathMatch: 'full',
				component: LayoutHeroDemoPageComponent,
			},
			{
				path: 'modal',
				pathMatch: 'full',
				component: LayoutModalDemoPageComponent,
			},
			{
				path: 'pane',
				pathMatch: 'full',
				component: LayoutPaneDemoPageComponent,
			},
			{
				path: 'sidebar',
				pathMatch: 'full',
				component: LayoutSidebarDemoPageComponent,
			},
		],
	},
];
