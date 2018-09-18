import { Component, Input } from '@angular/core';
import { ModalAbstract, ModalService } from '@acpaas-ui/ngx-components/layout';

@Component({
	selector: 'aui-modal',
	template: `<div class="m-modal">
		<div class="m-modal__content">
			<div class="m-modal__header u-margin-bottom-xs">
				<button class="m-modal__close a-button-transparent a-button--default has-icon" (click)="closeModal()">
					<i class="fa fa-close"></i>
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
	</div>`,
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
