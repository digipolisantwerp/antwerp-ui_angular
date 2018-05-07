import { NgModule } from '@angular/core';

import { ModalService } from './services/modal.service';
import { ModalOverlayComponent } from './components/modal-overlay.component';
import { ApproveModalComponent } from './components/approve-modal.component';
import { ApproveModalDirective } from './directives/approve.directive';

@NgModule({
    providers: [
        ModalService
    ],
    declarations: [
        ApproveModalComponent,
        ModalOverlayComponent,
        ApproveModalDirective,
    ],
    exports: [
        ApproveModalComponent,
        ApproveModalDirective,
    ],
    entryComponents: [
        ApproveModalComponent,
        ModalOverlayComponent,
    ]
})
export class ModalModule {}
