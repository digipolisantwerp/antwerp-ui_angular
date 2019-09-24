import { Component } from '@angular/core';
import { ModalService } from '@acpaas-ui/ngx-components/layout';
import { AUIDemoModalComponent } from './demo-modal.component';

@Component({
	templateUrl: './modal.page.html',
})
export class LayoutModalDemoPageComponent {

	public modal1 = `import { Component, Input } from '@angular/core';
import { ModalAbstract, ModalService } from '@acpaas-ui/ngx-components/layout';

@Component({
	selector: 'aui-modal',
	template: \`<div class="m-modal">
		<div class="m-modal__content">
			<div class="m-modal__header u-margin-bottom-xs">
				<button class="m-modal__close a-button-transparent a-button--default has-icon" (click)="closeModal()">
					<span class="fa fa-close"></span>
				</button>
				<h4>{{ modalData.title }}</h4>
			</div>
			<div class="u-margin-bottom">
				<p>{{ modalData.text }}</p>
			</div>
			<div class="m-modal__footer">
				<button class="a-button" (click)="submitAndCloseModal()">Close Modal</button>
				<button class="a-button-outline" (click)="closeModal()">Cancel</button>
			</div>
		</div>
	</div>\`,
})
export class AUIDemoModalComponent extends ModalAbstract {
	public modalData: any;

	constructor(
		public modalService: ModalService
	) {
		super(modalService);
	}

	 public submitAndCloseModal() {
	 	console.log('Submit!');
	 	this.closeModal();
	 }
}
`;

	public modal2 = `constructor(
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
}`;

	public modal3 = `<button class="a-button"
	(click)="openModal()">
	Open modal
</button>`;

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
