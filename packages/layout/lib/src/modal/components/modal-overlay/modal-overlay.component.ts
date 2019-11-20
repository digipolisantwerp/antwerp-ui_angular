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
	public mouseDownInsideOverlay: boolean;
	public theme = 'dark';
	@HostBinding('class') public get overlayClass() {
		return `m-overlay m-overlay--${this.theme} is-active`;
	}

	private modal: ComponentRef<ModalAbstract>;

	constructor(
		private ref: ElementRef
	) { }

	@HostListener('touchstart', ['$event'])
	@HostListener('mousedown', ['$event'])
	public mouseDownHandler(e: MouseEvent) {
		const modal = this.ref.nativeElement.querySelector('.m-modal');
		this.mouseDownInsideOverlay = modal && (e.target === modal || modal.contains(e.target));
	}

	@HostListener('touchend', ['$event'])
	@HostListener('mouseup', ['$event'])
	public mouseUpHandler(e: MouseEvent) {
		const modal = this.ref.nativeElement.querySelector('.m-modal');

		if ((modal && (e.target === modal || modal.contains(e.target))) || this.mouseDownInsideOverlay) {
			return;
		}

		this.modal.instance.closeModal();
	}
}
