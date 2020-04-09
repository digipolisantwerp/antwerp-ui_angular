import {async, inject, TestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {Component} from '@angular/core';

import {ModalAbstract} from '../classes/modal.abstract';
import {ModalOverlayComponent} from '../components/modal-overlay/modal-overlay.component';
import {ModalService} from './modal.service';

@Component({
  selector: 'aui-test-modal',
  template: '<div></div>',
})
class TestModalComponent extends ModalAbstract {
  public modalData = null;
  public modalActions = null;

  constructor(
    protected modalService: ModalService
  ) {
    super(modalService);
  }
}

const injectService = (cb) => {
  return inject(
    [
      ModalService,
    ],
    (modalService: ModalService) => cb(modalService)
  );
};

describe('Modal - ModalService', () => {
  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ModalService,
      ],
      declarations: [
        TestModalComponent,
        ModalOverlayComponent,
      ],
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          TestModalComponent,
          ModalOverlayComponent,
        ],
      },
    });
  }));

  describe('openModal', () => {
    it('should create a modal instance', injectService((modalService: ModalService) => {
      modalService.openModal(TestModalComponent);

      expect(modalService.activeModals.length).toBe(1);
      expect(modalService.activeModals[0].modal.instance instanceof TestModalComponent).toBe(true);
      expect(modalService.activeModals[0].overlay.instance instanceof ModalOverlayComponent).toBe(true);
    }));

    it('should set the provided data and actions on the modal instance', injectService((modalService: ModalService) => {
      const modalData = {test: 'test'};
      const modalActions = {testAction: () => Promise.resolve()};

      modalService.openModal(TestModalComponent, modalData, modalActions);

      const modal = modalService.activeModals[0].modal.instance;

      expect(modal.modalData).toEqual(modalData);
      expect(modal.modalActions).toEqual(modalActions);
    }));
  });

  describe('closeModal', () => {
    it('should do nothing if there are no active modals', injectService((modalService: ModalService) => {
      const modal = {
        destroy: () => {
        }, // tslint:disable-line:no-empty
      };

      spyOn(modal, 'destroy');

      modalService.closeModal(modal as any);

      expect(modal.destroy).not.toHaveBeenCalled();
    }));

    it('should be able to close a modal and its overlay', injectService((modalService: ModalService) => {
      modalService.openModal(TestModalComponent);

      const modal = modalService.activeModals[0];

      spyOn(modal.modal, 'destroy');
      spyOn(modal.overlay, 'destroy');

      modalService.closeModal(modal.modal);

      expect(modalService.activeModals.length).toBe(0);
      expect(modal.modal.destroy).toHaveBeenCalled();
      expect(modal.overlay.destroy).toHaveBeenCalled();
    }));
  });

  describe('closeLast', () => {
    it('should do nothing if there are no active modals', injectService((modalService: ModalService) => {
      spyOn(modalService, 'closeModal').and.stub();

      modalService.closeLast();

      expect(modalService.closeModal).not.toHaveBeenCalled();
    }));

    it('should close the last modal', injectService((modalService: ModalService) => {
      spyOn(modalService, 'closeModal').and.stub();

      modalService.openModal(TestModalComponent);
      modalService.openModal(TestModalComponent);

      const expected = modalService.activeModals[1];

      modalService.closeLast();

      expect(modalService.closeModal).toHaveBeenCalledWith(expected.modal);
    }));
  });
});
