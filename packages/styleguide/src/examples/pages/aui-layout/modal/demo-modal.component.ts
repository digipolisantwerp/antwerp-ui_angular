import { Component } from '@angular/core';
import { ModalAbstract, ModalService } from '../../../../../../ngx-layout/src/public-api';

@Component({
  selector: 'aui-modal',
  template: `<div class="m-modal" role="dialog" aria-modal="true" aria-labelledby="myModalTitle" aria-describedby="myModelDesc">
		<div class="m-modal__content">
			<div class="m-modal__header u-margin-bottom-xs">
				<button type="button" class="m-modal__close a-button a-button--text a-button--neutral has-icon" (click)="closeModal()" aria-label="close">
					<aui-icon name="ai-close"></aui-icon>
				</button>
				<h4 id="myModalTitle" class="h6">{{ modalData.title }}</h4>
			</div>
			<div class="u-margin-bottom">
				<p id="myModelDesc">{{ modalData.text }}</p>
			</div>
			<div class="m-modal__footer">
				<button type="button" class="a-button" (click)="submitAndCloseModal()">Close Modal</button>
				<button type="button" class="a-button a-button--outlined" (click)="closeModal()">Cancel</button>
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
