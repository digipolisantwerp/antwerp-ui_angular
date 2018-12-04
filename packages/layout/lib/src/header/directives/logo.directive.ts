import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[auiHeaderLogo]',
})
export class HeaderLogoDirective {
	@HostBinding() class = 'o-header__logo';
}
