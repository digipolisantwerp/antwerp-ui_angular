import { Component } from '@angular/core';
import { ModalService } from '@acpaas-ui/ngx-components/layout';
import { AUIDemoModalComponent } from './demo-modal.component';

@Component({
	templateUrl: './demo.page.html',
})
export class LayoutDemoPageComponent {

	constructor(
		private modalService: ModalService
	) {}

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

	public openModal() {
		this.modalService.openModal(
			AUIDemoModalComponent,
			{
				title: 'Modal',
				text: 'Are you sure you want to see a demo of this modal?',
			}, {
				confirm: () => this.doSomething(),
			}
		);
	}

	private doSomething() {
		return new Promise((resolve, reject) => {
			return resolve();
		});
	}
}
