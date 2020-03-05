import {ComponentRef} from '@angular/core';

import {ModalService} from '../services/modal.service';
import {ModalInstance} from '../types/modal.types';

export abstract class ModalAbstract implements ModalInstance {
  public ref: ComponentRef<ModalAbstract> = null;

  constructor(
    protected modalService: ModalService
  ) {
  }

  public closeModal() {
    this.modalService.closeModal(this.ref);
  }
}
