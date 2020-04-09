import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@acpaas-ui/ngx-utils';
import {merge} from 'lodash-es';

import {COOKIE_CONSENT_CONFIG, DEFAULT_CONSENT_CONFIG} from '../cookie-consent.conf';
import {CookieConsentConfig} from '../types/cookie-consent.types';

@Injectable()
export class CookieconsentService {
  private static initialized = false;

  constructor(
    @Inject(COOKIE_CONSENT_CONFIG) private cookieConsentConfig,
    @Inject(WINDOW) private $window
  ) {
  }

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

    this.$window.cookieconsent.initialise(merge(
      this.cookieConsentConfig,
      config
    ));
  }
}
