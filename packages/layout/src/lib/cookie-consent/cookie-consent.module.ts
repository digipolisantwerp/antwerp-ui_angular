import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import merge from 'lodash.merge';
import 'cookieconsent';

import { WindowRef } from './services/window.service';
import { CookieconsentService } from './services/cookie-consent.service';
import { COOKIE_CONSENT_CONFIG_ROOT, COOKIE_CONSENT_CONFIG, DEFAULT_CONSENT_CONFIG } from './cookie-consent.conf';
import { CookieConsentConfig } from './types/cookie-consent.types';

export function setConfig(cookieConsentConfig: CookieConsentConfig): CookieConsentConfig {
    return merge(DEFAULT_CONSENT_CONFIG, cookieConsentConfig);
}

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        WindowRef,
        CookieconsentService,
        { provide: COOKIE_CONSENT_CONFIG, useValue: DEFAULT_CONSENT_CONFIG }
    ]
})
export class CookieconsentModule {
    static forRoot(cookieConsentConfig: CookieConsentConfig): ModuleWithProviders {
        return {
            ngModule: CookieconsentModule,
            providers: [
                { provide: COOKIE_CONSENT_CONFIG_ROOT, useValue: cookieConsentConfig },

                // Merge the forRoot config with our default config (AOT proof)
                {
                    provide: COOKIE_CONSENT_CONFIG,
                    useFactory: setConfig,
                    deps: [COOKIE_CONSENT_CONFIG_ROOT],
                },

                WindowRef,
                CookieconsentService
            ]
        };
    }

    constructor(
        @Inject(COOKIE_CONSENT_CONFIG) config: CookieConsentConfig = DEFAULT_CONSENT_CONFIG,
        private cookieconsentService: CookieconsentService
    ) {
        if (config.autoInit) {
            this.cookieconsentService.init();
        }
    }
}
