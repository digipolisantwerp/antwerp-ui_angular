import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import {
	RouterModule,
	Router,
	NavigationEnd,
	ActivatedRoute
} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { ContextService, ContextWriterService, Services } from './services/index';
import { ContextConfig, CONTEXT_DEFAULT_VALUE } from './context.conf';
import { CONTEXT_CONFIG } from './context.const';
import { RouterHelper } from './router.helper';

@NgModule({
	imports: [
		RouterModule,
	],
	providers: [
		{ provide: CONTEXT_CONFIG, useValue: CONTEXT_DEFAULT_VALUE },
		ContextService,
		ContextWriterService,
		RouterHelper,
	],
})
export class ContextModule {
	static forRoot(metaConfig: ContextConfig): ModuleWithProviders {
		return {
			ngModule: ContextModule,
			providers: [
				{ provide: CONTEXT_CONFIG, useValue: metaConfig },
				...Services,
			],
		};
	}

	constructor(
		private contextService: ContextService,
		private routerHelper: RouterHelper,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		@Inject(CONTEXT_CONFIG) private contextConfig: ContextConfig
	) {
		if (!contextConfig.routerContext) {
			return;
		}

		this.router.events
			.filter(event => (event instanceof NavigationEnd))
			.map(() => this.routerHelper.findLastChild(this.activatedRoute))
			.subscribe((route: any) => {
				route.data = route.data || {};
				route.data.meta = route.data.meta || {};
				route.data.meta.parent = this.routerHelper.getParentTitle(route);

				this.contextService.updateContext(route.data.meta);
			});
	}
}
