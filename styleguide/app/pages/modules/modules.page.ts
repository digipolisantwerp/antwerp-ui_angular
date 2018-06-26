import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { EXAMPLES_ROUTES } from '../../examples.routes';

@Component({
	templateUrl: './modules.page.html',
	styleUrls: ['./modules.page.scss'],
})
export class ModulesPageComponent {
	public packages: Routes = EXAMPLES_ROUTES;
}
