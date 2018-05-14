import { Inject, Injectable } from '@angular/core';
import { COOKIE_CONSENT_CONFIG, DEFAULT_CONSENT_CONFIG } from '../cookie-consent.conf';
import { CookieConsentConfig } from '../types/cookie-consent.types';
import { WindowRef } from './window.service';

// Unusual import explained here: https://github.com/rollup/rollup/issues/670
import * as deepmerge_ from 'deepmerge';
const deepmerge = deepmerge_;

@Injectable()
export class CookieconsentService {
    private static initialized: Boolean = false;

    constructor(
        @Inject(COOKIE_CONSENT_CONFIG) private cookieConsentConfig,
        @Inject(WindowRef) private $window
    ) {}

    init(config: CookieConsentConfig = this.cookieConsentConfig): void {
        if (!config || Object.keys(config).length === 0) {
            config = DEFAULT_CONSENT_CONFIG;
        }

        if (CookieconsentService.initialized) {
            return console.warn('Cookie consent is already initialized!');
        }

        if (!this.$window || (this.$window && !this.$window.cookieconsent)) {
            return console.warn('Cookie consent is not loaded!');
        }

        this.$window.cookieconsent.initialise(deepmerge(this.cookieConsentConfig, config));
    }
}
