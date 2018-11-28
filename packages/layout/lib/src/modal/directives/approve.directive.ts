import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

import { ApproveModalComponent } from '../components/approve-modal/approve-modal.component';
import { ModalService } from '../services/modal.service';

@Directive({
  selector: '[auiApprove]',
})
export class ApproveModalDirective {
	@Input() public question;
	@Input() public description;
	@Input() public submitMessage;
	@Input() public cancelMessage;
	@Output() public approve = new EventEmitter();
	@Output() public cancel = new EventEmitter();

	constructor(private modalService: ModalService) {}

	@HostListener('click', ['$event'])
	public onClick() {
		this.modalService.openModal(ApproveModalComponent, {
			question: this.question,
			description: this.description,
			approve: this.submitMessage,
			reject: this.cancelMessage,
		}, {
			approve: () => {
				this.approve.emit();
				return Promise.resolve();
			},
			reject: () => {
				this.cancel.emit();
				return Promise.resolve();
			},
		});
	}
}
