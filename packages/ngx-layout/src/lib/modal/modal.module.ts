import {NgModule} from '@angular/core';
import {ApproveModalComponent} from './components/approve-modal/approve-modal.component';
import {ModalOverlayComponent} from './components/modal-overlay/modal-overlay.component';
import {ApproveModalDirective} from './directives/approve.directive';
import {ModalService} from './services/modal.service';

@NgModule({
  providers: [
    ModalService,
  ],
  declarations: [
    ApproveModalComponent,
    ModalOverlayComponent,
    ApproveModalDirective,
  ],
  exports: [
    ApproveModalComponent,
    ModalOverlayComponent,
    ApproveModalDirective,
  ],
  entryComponents: [
    ApproveModalComponent,
    ModalOverlayComponent,
  ],
})
export class ModalModule {
}
