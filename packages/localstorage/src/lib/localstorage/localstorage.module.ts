import { NgModule, ModuleWithProviders } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';

import {
	LocalstorageConfig,
} from './types/localstorage.types';
import {
	LocalstorageService,
} from './services/localstorage.service';
import {
	LOCALSTORAGE_CONFIG,
	DEFAULT_LOCALSTORAGE_CONFIG,
} from './localstorage.conf';

@NgModule({
	imports: [
	],
	providers: [
		{ provide: LOCALSTORAGE_CONFIG, useValue: DEFAULT_LOCALSTORAGE_CONFIG },
		{ provide: WINDOW, useValue: window },
		LocalstorageService,
	],
})
export class LocalstorageModule {
	static forRoot(
		localstorageConfig: LocalstorageConfig = DEFAULT_LOCALSTORAGE_CONFIG
	): ModuleWithProviders {
		return {
			ngModule: LocalstorageModule,
			providers: [
				{ provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
				{ provide: WINDOW, useValue: window },
				LocalstorageService,
			],
		};
	}

	constructor(
		private localstorageService: LocalstorageService
	) {}
}
