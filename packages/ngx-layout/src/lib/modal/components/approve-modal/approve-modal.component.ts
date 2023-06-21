import { Component, OnInit, ViewChild } from '@angular/core';
import { get } from 'lodash-es';

import { ModalActions } from '../../types/modal.types';
import { ModalAbstract } from '../../classes/modal.abstract';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'aui-approve-modal',
  templateUrl: './approve-modal.component.html',
})
export class ApproveModalComponent extends ModalAbstract implements OnInit {
  @ViewChild('titleContainer', { static: true }) public titleContainer: any;
  public modalData: any;
  public modalActions: ModalActions;
  public titleId: string;
  public descId: string;
  public closeButtonAriaLabel = 'Sluiten';
  public headerElement: Element;
  public headerTag = 'h4';

  public headerTags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  constructor(protected modalService: ModalService) {
    super(modalService);
  }

  public ngOnInit() {
    this.titleId = 'aui-modal-' + Math.random().toString(36).substring(2);
    this.descId = 'aui-modal-' + Math.random().toString(36).substring(2);
    this.modalData = this.modalData || {
      question: 'Vraag?',
      description: 'Beschrijving…',
      approve: 'OK',
      reject: 'Annuleren',
      closeButtonAriaLabel: 'Sluiten',
      headerTag: 'h4',
    };
    this.header(this.headerTags[this.modalData.headerTag || this.headerTag]);
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

  private header(tag: string) {
    this.headerElement = document.createElement(tag);
    this.headerElement.id = this.titleId;
    this.headerElement.innerHTML = this.modalData.question;
    this.titleContainer.nativeElement.appendChild(this.headerElement);
  }
}
