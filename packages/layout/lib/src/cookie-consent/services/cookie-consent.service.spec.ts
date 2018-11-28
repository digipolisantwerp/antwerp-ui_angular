import { async, inject, TestBed } from '@angular/core/testing';

import { COOKIE_CONSENT_CONFIG, DEFAULT_CONSENT_CONFIG } from '../cookie-consent.conf';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { CookieconsentService } from '../services/cookie-consent.service';

const cookieconsentConfig: any = {};
const windowStub: any = {};

const injectService = (cb) => {
	return inject(
		[CookieconsentService],
		(cookieconsentService: CookieconsentService) => cb(cookieconsentService)
	);
};

describe('The Cookieconsent Service', () => {
	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: COOKIE_CONSENT_CONFIG, useValue: cookieconsentConfig },
				{ provide: WINDOW, useValue: windowStub },
				CookieconsentService,
			],
		});
	}));

	describe('Initializing the cookieconsent plugin', () => {
		beforeEach(() => {
			spyOn(window.console, 'warn').and.stub();
			CookieconsentService['initialized'] = false;
		});

		it('should throw a warning if the CookieconsentService is already initialized', injectService(cookieconsentService => {
			CookieconsentService['initialized'] = true;

			cookieconsentService.init();

			expect(window.console.warn).toHaveBeenCalledWith('Cookie consent is already initialized!');
		}));

		it('should throw a warning if the cookieconsent plugin is not loaded', injectService(cookieconsentService => {
			cookieconsentService.init();

			expect(window.console.warn).toHaveBeenCalledWith('Cookie consent is not loaded!');
		}));

		describe('Cookieconsent loaded', () => {
			beforeAll(() => {
				windowStub.cookieconsent = {
					initialise: () => {},
				};

				spyOn(windowStub.cookieconsent, 'initialise');
			});

			describe('without config', () => {
				it(
					'should initialise the cookieconsent with the default config if no config was provided',
					injectService(cookieconsentService => {
						cookieconsentService.init();

						expect(windowStub.cookieconsent.initialise).toHaveBeenCalledWith(DEFAULT_CONSENT_CONFIG);
					})
				);
			});

			describe('with config', () => {
				beforeAll(() => {
					cookieconsentConfig.message = 'We use cookies. Deal with it.';
					cookieconsentConfig.dismiss = 'Got it';
				});

				it(
					'should initiliase the cookieconsent with the provided config, falling back on the default config',
					injectService(cookieconsentService => {
						cookieconsentService.init();

						expect(windowStub.cookieconsent.initialise).toHaveBeenCalledWith({
							message: 'We use cookies. Deal with it.',
							dismiss: 'Got it',
						});
					})
				);
			});
		});
	});
});
