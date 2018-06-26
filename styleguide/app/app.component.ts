import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { EXAMPLES_ROUTES } from './examples.routes';

@Component({
	selector: 'guide-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public packages: Routes = EXAMPLES_ROUTES;
}
