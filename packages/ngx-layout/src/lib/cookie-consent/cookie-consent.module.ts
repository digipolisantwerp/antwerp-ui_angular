import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WindowModule} from '@acpaas-ui/ngx-utils';
import {merge} from 'lodash-es';
import 'cookieconsent';

import {CookieconsentService} from './services/cookie-consent.service';
import {COOKIE_CONSENT_CONFIG, COOKIE_CONSENT_CONFIG_ROOT, DEFAULT_CONSENT_CONFIG} from './cookie-consent.conf';
import {CookieConsentConfig} from './types/cookie-consent.types';

export function setConfig(cookieConsentConfig: CookieConsentConfig): CookieConsentConfig {
  return merge(DEFAULT_CONSENT_CONFIG, cookieConsentConfig);
}

@NgModule({
  imports: [
    CommonModule,
    WindowModule,
  ],
  providers: [
    CookieconsentService,
    {provide: COOKIE_CONSENT_CONFIG, useValue: DEFAULT_CONSENT_CONFIG},
  ],
})
export class CookieconsentModule {
  constructor(
    @Inject(COOKIE_CONSENT_CONFIG) config: CookieConsentConfig = DEFAULT_CONSENT_CONFIG,
    private cookieconsentService: CookieconsentService
  ) {
    if (config.autoInit) {
      this.cookieconsentService.init();
    }
  }

  static forRoot(cookieConsentConfig: CookieConsentConfig): ModuleWithProviders {
    return {
      ngModule: CookieconsentModule,
      providers: [
        {provide: COOKIE_CONSENT_CONFIG_ROOT, useValue: cookieConsentConfig},

        // Merge the forRoot config with our default config (AOT proof)
        {
          provide: COOKIE_CONSENT_CONFIG,
          useFactory: setConfig,
          deps: [COOKIE_CONSENT_CONFIG_ROOT],
        },

        CookieconsentService,
      ],
    };
  }
}
