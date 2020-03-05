import {ComponentRef} from '@angular/core';

import {ModalAbstract} from '../classes/modal.abstract';
import {ModalOverlayComponent} from '../components/modal-overlay/modal-overlay.component';

export type ModalComponentRef = ComponentRef<ModalAbstract & ModalInstance>;

export interface ModalRef {
  modal: ModalComponentRef;
  overlay: ComponentRef<ModalOverlayComponent>;
}

export interface ModalActions {
  [key: string]: (...args: any[]) => Promise<any>;
}

export interface ModalInstance {
  ref: ModalComponentRef;
  modalData?: any;
  modalActions?: ModalActions;
  closeModal: () => void;
}

export interface ModalOptions {
  theme?: 'dark' | 'light';
}
