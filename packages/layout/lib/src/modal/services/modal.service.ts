import {
	Injectable,
	Injector,
	ComponentFactoryResolver,
	ApplicationRef,
	Type,
	ComponentRef
} from '@angular/core';
import { get } from 'lodash-es';
import { last } from 'lodash-es';
import { cloneDeep } from 'lodash-es';

import { ModalAbstract } from '../classes/modal.abstract';
import { ModalRef, ModalComponentRef, ModalActions, ModalOptions } from '../types/modal.types';
import { ModalOverlayComponent } from '../components/modal-overlay/modal-overlay.component';

@Injectable()
export class ModalService {
	public activeModals: ModalRef[] = [];

	constructor(
		private injector: Injector,
		private resolver: ComponentFactoryResolver,
		private appRef: ApplicationRef
	) {}

	public openModal(template: Type<ModalAbstract>, modalData?: any, actions?: ModalActions, options: ModalOptions = {}): any {
		const modal = this.createRef(template);
		modal.instance.ref = modal;
		modal.instance.modalData = cloneDeep(modalData);
		modal.instance.modalActions = actions;

		const overlay = this.createRef(ModalOverlayComponent, [
			[modal.location.nativeElement],
		]);
		overlay.instance.modal = modal;
		overlay.instance.theme = options.theme || 'dark';

		this.activeModals.push({
			modal: modal,
			overlay: overlay,
		});

		this.appendRefs(overlay);

		return modal;
	}

	public closeModal(modal: ModalComponentRef): void {
		const activeModalIndex = this.activeModals.findIndex((instance: ModalRef) => instance.modal === modal);

		if (activeModalIndex < 0) {
			return;
		}

		const activeModal = this.activeModals[activeModalIndex];

		activeModal.modal.destroy();
		activeModal.overlay.destroy();

		this.activeModals.splice(activeModalIndex, 1);
	}

	public closeLast(): void {
		const lastModal = last(this.activeModals);

		if (lastModal) {
			this.closeModal(lastModal.modal);
		}
	}

	private createRef(template: Type<any>, projectableNodes?: any[][]): ComponentRef<any> {
		const compFactory = this.resolver.resolveComponentFactory(template);
		const ref = compFactory.create(this.injector, projectableNodes);

		this.appRef.attachView(ref.hostView);
		ref.onDestroy(() => this.appRef.detachView(ref.hostView));

		return ref;
	}

	private appendRefs(...args): void {
		const appRef = get(this.appRef, 'components[0].location.nativeElement', null);

		if (!appRef) {
			return;
		}

		args.forEach((ref: ComponentRef<any>) => {
			appRef.appendChild(ref.location.nativeElement);
		});
	}
}
