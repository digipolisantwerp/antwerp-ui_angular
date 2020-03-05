import {Component, ComponentRef, ElementRef, HostBinding, HostListener} from '@angular/core';

import {ModalAbstract} from '../../classes/modal.abstract';

@Component({
  selector: 'aui-modal-overlay',
  template: `
        <section class="m-overlay__inner">
            <ng-content></ng-content>
        </section>
    `,
})
export class ModalOverlayComponent {
  public mouseDownInsideOverlay: boolean;
  public theme = 'dark';
  public title = 'Modal';
  private modal: ComponentRef<ModalAbstract>;

  constructor(
    private ref: ElementRef
  ) {
  }

  @HostBinding('class')
  public get overlayClass() {
    return `m-overlay m-overlay--${this.theme} is-active`;
  }

  @HostBinding('attr.aria-label')
  public get ariaLabel() {
    return this.title;
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  public mouseDownHandler(e: MouseEvent) {
    const modal = this.ref.nativeElement.querySelector('.m-modal');
    this.mouseDownInsideOverlay = modal && (e.target === modal || modal.contains(e.target));
  }

  @HostListener('touchend', ['$event'])
  @HostListener('mouseup', ['$event'])
  public mouseUpHandler(e: MouseEvent) {
    const modal = this.ref.nativeElement.querySelector('.m-modal');

    if ((modal && (e.target === modal || modal.contains(e.target))) || this.mouseDownInsideOverlay) {
      return;
    }

    this.modal.instance.closeModal();
  }
}
