import {Directive, Host, HostListener} from '@angular/core';

import {FlyoutDirective} from './flyout.directive';
import {isEvent} from '../utils/event';

@Directive({
  selector: '[auiFlyoutClose]',
  exportAs: 'auiFlyoutClose',
})
export class FlyoutCloseDirective {

  constructor(
    @Host() public flyout: FlyoutDirective
  ) {
  }

  @HostListener('click')
  public onClick(): void {
    this.flyout.close();
  }

  @HostListener('keydown', ['$event'])
  public onKeyDown(e: KeyboardEvent): void {
    if (isEvent(e, 'space', 32) || isEvent(e, 'enter', 13)) {
      this.flyout.close();
    }
  }
}
