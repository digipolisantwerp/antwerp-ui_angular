import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'aui-subfooter',
	templateUrl: './subfooter.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubFooterComponent {
	public goToTop = () => {
		window.scrollTo(0, 0);
	}
}
