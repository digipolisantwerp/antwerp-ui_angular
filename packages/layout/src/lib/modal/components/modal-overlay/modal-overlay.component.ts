import {
	Component,
	HostBinding,
	HostListener,
	ElementRef,
	ComponentRef
} from '@angular/core';

import { ModalAbstract } from '../../classes/modal.abstract';

@Component({
	selector: 'aui-modal-overlay',
	template: `
        <div class="m-overlay__inner">
            <ng-content></ng-content>
        </div>
    `,
})
export class ModalOverlayComponent {
	public theme = 'dark';
	@HostBinding('class') public get overlayClass() {
		return `m-overlay m-overlay--${this.theme} is-active`;
	}

	private modal: ComponentRef<ModalAbstract>;

	constructor(
		private ref: ElementRef
	) {}

	@HostListener('click', ['$event']) public clickHandler(e: MouseEvent) {
		const modal = this.ref.nativeElement.querySelector('.m-modal');

		if (modal && (e.target === modal || modal.contains(e.target))) {
			return;
		}

		this.modal.instance.closeModal();
	}
}
