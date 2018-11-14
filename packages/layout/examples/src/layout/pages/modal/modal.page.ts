import { Component } from '@angular/core';
import { ModalService } from '@acpaas-ui/ngx-components/layout';
import { AUIDemoModalComponent } from './demo-modal.component';

@Component({
	templateUrl: './modal.page.html',
})
export class LayoutModalDemoPageComponent {

	constructor(
		private modalService: ModalService
	) {}

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
