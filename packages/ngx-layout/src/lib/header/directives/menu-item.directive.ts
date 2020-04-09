import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[auiHeaderMenuItem]',
})
export class HeaderMenuItemDirective {
  @HostBinding() class = 'o-header__menu-item';
}
