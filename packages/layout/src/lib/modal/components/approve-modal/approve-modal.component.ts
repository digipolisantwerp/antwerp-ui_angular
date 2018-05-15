import { Component, OnInit } from '@angular/core';

// Unusual import explained here: https://github.com/rollup/rollup/issues/670
import * as get_ from 'lodash.get';
const get = get_;

import { ModalActions } from '../../types/modal.types';
import { ModalAbstract } from '../../classes/modal.abstract';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'aui-approve-modal',
    templateUrl: './approve-modal.component.html'
})
export class ApproveModalComponent extends ModalAbstract implements OnInit {
    public modalData: any;
    public modalActions: ModalActions;

    constructor(
        protected modalService: ModalService
    ) {
        super(modalService);
    }

    public ngOnInit() {
        this.modalData = this.modalData || {
            question: 'Question?',
            description: 'Description...',
            approve: 'Ok',
            reject: 'Cancel'
        };
    }

    public submit() {
        this.verifyAction('approve').then(() => this.closeModal());
    }

    public close() {
        this.verifyAction('reject').then(() => this.closeModal());
    }

    private verifyAction(action: string): Promise<any> {
        if (get(this.modalActions, action)) {
            return this.modalActions[action]();
        }

        return Promise.resolve();
    }
}
