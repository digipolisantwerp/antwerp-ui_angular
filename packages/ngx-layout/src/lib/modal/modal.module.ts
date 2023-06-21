import { NgModule } from '@angular/core';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { ApproveModalComponent } from './components/approve-modal/approve-modal.component';
import { ModalOverlayComponent } from './components/modal-overlay/modal-overlay.component';
import { ApproveModalDirective } from './directives/approve.directive';
import { ModalService } from './services/modal.service';

@NgModule({
  imports: [IconModule],
  providers: [ModalService],
  declarations: [ApproveModalComponent, ModalOverlayComponent, ApproveModalDirective],
  exports: [ApproveModalComponent, ModalOverlayComponent, ApproveModalDirective],
})
export class ModalModule {}
