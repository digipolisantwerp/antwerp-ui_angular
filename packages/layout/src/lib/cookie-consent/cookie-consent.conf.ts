import { InjectionToken } from '@angular/core';
import { CookieConsentConfig } from './types/cookie-consent.types';

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
		messagelink: '<p id="cookieconsent:desc">{{message}} <a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a></p>', // tslint:disable-line:max-line-length
		dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>',
	},
};

export const COOKIE_CONSENT_CONFIG_ROOT = new InjectionToken<CookieConsentConfig>('cookieConsentConfigRoot');
export const COOKIE_CONSENT_CONFIG = new InjectionToken<CookieConsentConfig>('cookieConsentConfig');
