import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';

import { EXAMPLES_ROUTES } from '../../examples.routes';

@Component({
	templateUrl: './modules.page.html',
	styleUrls: ['./modules.page.scss'],
})
export class ModulesPageComponent implements OnInit {
	public packages: Routes = EXAMPLES_ROUTES;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	public ngOnInit() {
		if (this.activatedRoute.snapshot.children.length === 0) {
			this.router.navigate([ this.packages[0].path ], { relativeTo: this.activatedRoute });
		}
	}
}
