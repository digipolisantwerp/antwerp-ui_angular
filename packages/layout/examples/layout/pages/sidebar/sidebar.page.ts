import { Component } from '@angular/core';

@Component({
	templateUrl: './sidebar.page.html',
})
export class LayoutSidebarDemoPageComponent {
	public sidebarItems = [
		{
			href: '/',
			// icon: 'fa-caret-right',
			label: 'Label',
			theme: {
				slug: 'test',
				color: 'black',
				logo: 'https://robohash.org/acpaas-ui',
			},
			// items?: SidebarItem[],
			classList: 'sidebarClass',
		},
	];
}
