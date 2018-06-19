import { NgModule, ModuleWithProviders } from '@angular/core';

import { WindowModule } from '@acpaas-ui/ngx-components/utils';

import { Services } from './services/index';
import { Directives } from './directives/index';

import { GTM_CONFIG, GTM_CONFIG_DEFAULT } from './analytics.conf';


@NgModule({
	imports: [
		WindowModule,
	],
	providers: [
		{ provide: GTM_CONFIG, useValue: GTM_CONFIG_DEFAULT },
		Services,
	],
	declarations: [
		Directives,
	],
	exports: [
		Directives,
	],
})
export class AnalyticsModule {
	static forChild(config = {}): ModuleWithProviders {
		config = {
			...GTM_CONFIG_DEFAULT,
			...config,
		};

		return {
			ngModule: AnalyticsModule,
			providers: [
				{ provide: GTM_CONFIG, useValue: config },
				Services,
			],
		};
	}
}
