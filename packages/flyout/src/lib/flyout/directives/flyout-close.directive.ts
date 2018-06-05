import { Directive, HostListener } from '@angular/core';
import { FlyoutService } from '../services/flyout.service';

@Directive({
	selector: '[auiFlyoutClose]',
	exportAs: 'auiFlyoutClose',
})
export class FlyoutCloseDirective {

	constructor(private flyoutService: FlyoutService) {}

	@HostListener('click')
	public onClick() {
		this.flyoutService.close();
	}
}
