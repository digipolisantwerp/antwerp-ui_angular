import {DebugElement} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalService} from '../../services/modal.service';
import {ApproveModalComponent} from './approve-modal.component';

const modalServiceMock = {
  closeModal: () => null,
};

describe('Modal - ApproveModalComponent', () => {
  let comp: ApproveModalComponent;
  let fixture: ComponentFixture<ApproveModalComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApproveModalComponent,
      ],
      providers: [
        {provide: ModalService, useValue: modalServiceMock},
      ],
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveModalComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding

    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should set the default modalData on init', () => {
    comp.ngOnInit();

    expect(comp.modalData).toEqual(jasmine.objectContaining({
      question: 'Vraag?',
      description: 'Beschrijving…',
    }));
  });

  it('should call the approve action if it is available and close the modal on resolve', done => {
    comp.modalActions = {
      approve: () => Promise.resolve(),
    };

    spyOn(comp.modalActions, 'approve').and.callThrough();
    spyOn(comp, 'closeModal');

    comp.submit();

    setTimeout(() => {
      expect(comp.modalActions.approve).toHaveBeenCalled();
      expect(comp.closeModal).toHaveBeenCalled();
      done();
    }, 10);
  });

  it('should close the modal if no approve action is available', done => {
    spyOn(comp, 'closeModal');

    comp.submit();

    setTimeout(() => {
      expect(comp.closeModal).toHaveBeenCalled();
      done();
    }, 10);
  });

  it('should call the reject action if it is available and close the modal on resolve', done => {
    comp.modalActions = {
      reject: () => Promise.resolve(),
    };

    spyOn(comp.modalActions, 'reject').and.callThrough();
    spyOn(comp, 'closeModal');

    comp.close();

    setTimeout(() => {
      expect(comp.modalActions.reject).toHaveBeenCalled();
      expect(comp.closeModal).toHaveBeenCalled();
      done();
    }, 10);
  });

  it('should close the modal if no reject action is available', done => {
    spyOn(comp, 'closeModal');

    comp.close();

    setTimeout(() => {
      expect(comp.closeModal).toHaveBeenCalled();
      done();
    }, 10);
  });
});
