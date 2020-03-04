import {Directive, ElementRef, HostListener, Input} from '@angular/core';

import {GAService} from '../services/ga.service';

@Directive({selector: '[auiGaEvent]'})
export class GaEventDirective {
  @Input() gaEvent: number;

  constructor(private el: ElementRef, private gaService: GAService) {
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    const nativeEl = this.el.nativeElement;

    if (this.gaEvent) {
      this.gaService.triggerEvent(nativeEl.tagName.toLowerCase(), 'click', nativeEl.innerText, this.gaEvent);
    } else {
      this.gaService.triggerEvent(nativeEl.tagName.toLowerCase(), 'click', nativeEl.innerText);
    }
  }
}
