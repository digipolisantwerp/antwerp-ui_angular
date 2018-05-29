import { NgModule, ModuleWithProviders } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';

import { GAService } from './services/ga/ga.service';
import { GTMService } from './services/gtm/gtm.service';
import { GTM_CONFIG, GTMConfig, defaultGTMConfig } from './services/gtm/config.conf';

import { GaEventDirective } from './directives/event.directive';

@NgModule({
	imports: [
	],
	providers: [
		{ provide: WINDOW, useValue: window },
		{ provide: GTM_CONFIG, useValue: defaultGTMConfig },
		GAService,
		GTMService,
	],
	declarations: [
		GaEventDirective,
	],
	exports: [
		GaEventDirective,
	],
})
export class AnalyticsModule {
	static forChild(config = {}): ModuleWithProviders {
		config = {
			...defaultGTMConfig,
			...config,
		};

		return {
			ngModule: AnalyticsModule,
			providers: [
				{ provide: GTM_CONFIG, useValue: config },
			],
		};
	}
}
