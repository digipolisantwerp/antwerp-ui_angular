import {
	Component,
	ElementRef,
	Renderer,
	ViewChild,
} from '@angular/core';
import { Routes } from '@angular/router';

import { EXAMPLES_ROUTES } from './examples.routes';

@Component({
	selector: 'guide-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(
		private renderer: Renderer
	) {}

	@ViewChild('mainContent') mainContent: ElementRef;
	@ViewChild('skipContent') skipContent: ElementRef;

	public packages: Routes = EXAMPLES_ROUTES;

	public goToMainContent() {
		const mainElement = this.mainContent.nativeElement;
		const skipElement = this.skipContent.nativeElement;
		this.renderer.invokeElementMethod(mainElement, 'focus');
		skipElement.blur();
	}
}
