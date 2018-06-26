import { ModuleWithProviders } from '@angular/core';
import 'cookieconsent';
import { CookieconsentService } from './services/cookie-consent.service';
import { CookieConsentConfig } from './types/cookie-consent.types';
export declare function setConfig(cookieConsentConfig: CookieConsentConfig): CookieConsentConfig;
export declare class CookieconsentModule {
    private cookieconsentService;
    static forRoot(cookieConsentConfig: CookieConsentConfig): ModuleWithProviders;
    constructor(config: CookieConsentConfig, cookieconsentService: CookieconsentService);
}
