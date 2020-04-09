import {InjectionToken} from '@angular/core';
import {CookieConsentConfig} from './types/cookie-consent.types';

export const DEFAULT_CONSENT_CONFIG: CookieConsentConfig = {
  autoInit: true,
  content: {
    message: 'We make use of cookies to ensure you get the best experience on our website.',
    dismiss: 'OK',
    link: 'Learn more',
    href: 'http://cookiepedia.co.uk/all-about-cookies',
  },
  cookie: {
    name: 'cookieconsent_status',
    path: '/',
    domain: '',
    expiryDays: 365,
  },
  elements: {
    /* tslint:disable:max-line-length */
    messagelink: '<p id="cookieconsent:desc">{{message}} <a aria-label="learn more about cookies" href="{{href}}" target="_blank">{{link}}</a></p>',
    dismiss: '<button type="button" aria-label="Dismiss cookieconsent" class="a-button a-button--secondary cc-btn cc-dismiss">{{dismiss}}</button>',
    /* tslint:enable:max-line-length */
  },
  /* tslint:disable:max-line-length */
  window: '<section role="dialog" aria-live="polite" aria-label="Cookie consent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></section>',
  /* tslint:enable:max-line-length */
};

export const COOKIE_CONSENT_CONFIG_ROOT = new InjectionToken<CookieConsentConfig>('cookieConsentConfigRoot');
export const COOKIE_CONSENT_CONFIG = new InjectionToken<CookieConsentConfig>('cookieConsentConfig');
