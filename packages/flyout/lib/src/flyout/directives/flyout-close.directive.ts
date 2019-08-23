import { Directive, HostListener, Host } from '@angular/core';

import { FlyoutDirective } from './flyout.directive';

@Directive({
	selector: '[auiFlyoutClose]',
	exportAs: 'auiFlyoutClose',
})
export class FlyoutCloseDirective {
	constructor(
		@Host() public flyout: FlyoutDirective
	) {}

	@HostListener('click')
	public onClick(): void {
		this.flyout.close();
	}
}
