import {
	Component,
	ElementRef,
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
	constructor() {}

	@ViewChild('mainContent') mainContent: ElementRef;
	@ViewChild('skipContent') skipContent: ElementRef;

	public packages: Routes = EXAMPLES_ROUTES;

	public goToMainContent() {
		const mainElement = this.mainContent.nativeElement;
		const skipElement = this.skipContent.nativeElement;
		mainElement.focus();
		skipElement.blur();
	}
}
