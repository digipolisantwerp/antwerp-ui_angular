import {Component} from '@angular/core';
import {ModalService} from '../../../../../../ngx-layout/src/public-api';
import {AUIDemoModalComponent} from './demo-modal.component';
import {ApproveModalComponent} from '../../../../../../ngx-layout/src/lib/modal/components/approve-modal/approve-modal.component';

@Component({
  templateUrl: './modal.page.html',
})
export class LayoutModalDemoPageComponent {

  public modal1 = `import { Component, Input } from '@angular/core';
import { ModalAbstract, ModalService } from '@acpaas-ui/ngx-layout';

@Component({
  selector: 'aui-modal',
  template: \`<div class="m-modal" role="dialog" aria-modal="true" aria-labelledby="myModalTitle" aria-describedby="myModelDesc">
    <div class="m-modal__content">
      <div class="m-modal__header u-margin-bottom-xs">
        <button type="button" class="m-modal__close a-button-transparent a-button--default has-icon" (click)="closeModal()">
          <span class="fa fa-close"></span>
        </button>
        <h4 id="myModalTitle">{{ modalData.title }}</h4>
      </div>
      <div class="u-margin-bottom">
        <p id="myModalDesc">{{ modalData.text }}</p>
      </div>
      <div class="m-modal__footer">
        <button type="button" class="a-button" (click)="submitAndCloseModal()">Close Modal</button>
        <button type="button" class="a-button-outline" (click)="closeModal()">Cancel</button>
      </div>
    </div>
  </div>\`,
})
export class AUIDemoModalComponent extends ModalAbstract {
  public modalData: any;

  constructor(
    public modalService: ModalService
  ) {
    super(modalService);
  }

   public submitAndCloseModal() {
     console.log('Submit!');
     this.closeModal();
   }
}
`;

  public modal2 = `constructor(
  private modalService: ModalService
) {}

public openModal() {
  this.modalService.openModal(
    AUIDemoModalComponent,
    {
      title: 'Modal demo',
      text: 'Are you sure you want to see a demo of this modal?',
    }, {
      confirm: () => this.doSomething(),
    }
  );
}

private doSomething() {
  return new Promise((resolve, reject) => {
    return resolve();
  });
}`;

  public modal3 = `<button type="button" class="a-button"
  (click)="openModal()">
  Open modal
</button>`;

public modal4 = `import { ApproveModalComponent } from '@acpaas-ui/ngx-layout';`;

public modal5 = `public openApproveModal() {
  this.modalService.openModal(ApproveModalComponent, {
    question: 'Are you sure you want to close this demo modal?',
    description: 'This action can be undone.',
    approve: 'Close demo modal',
    reject: 'Cancel'
  }, {
    approve: () => this.doSomething(),
    reject: () => this.doSomethingElse()
  });

  private doSomething() {
    return new Promise((resolve, reject) => {
      return resolve();
    });
  }

  private doSomethingElse() {
    return new Promise((resolve, reject) => {
      return resolve();
    });
  }
}`;

public modal6 = `<button type="button" class="a-button"
  (click)="openApproveModal()">
  Open approve modal
</button>`;

  constructor(
    private modalService: ModalService
  ) {
  }

  public openModal() {
    this.modalService.openModal(
      AUIDemoModalComponent,
      {
        title: 'Modal demo',
        text: 'Are you sure you want to see a demo of this modal?',
      }, {
        confirm: () => this.doSomething(),
      }
    );
  }

  public openApproveModal() {
    this.modalService.openModal(ApproveModalComponent, {
      question: 'Are you sure you want to close this demo modal?',
      description: 'This action can be undone.',
      approve: 'Close demo modal',
      reject: 'Cancel'
    }, {
      approve: () => this.doSomething(),
      reject: () => this.doSomethingElse()
    });
  }

  private doSomething() {
    return new Promise((resolve, reject) => {
      return resolve();
    });
  }

  private doSomethingElse() {
    return new Promise((resolve, reject) => {
      return resolve();
    });
  }
}
