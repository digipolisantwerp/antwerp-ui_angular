import {async, inject, TestBed} from '@angular/core/testing';

import {COOKIE_CONSENT_CONFIG, DEFAULT_CONSENT_CONFIG} from '../cookie-consent.conf';
import {WINDOW} from '@acpaas-ui/ngx-utils';
import {CookieconsentService} from './cookie-consent.service';

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
        {provide: COOKIE_CONSENT_CONFIG, useValue: cookieconsentConfig},
        {provide: WINDOW, useValue: windowStub},
        CookieconsentService,
      ],
    });
  }));

  describe('Initializing the cookieconsent plugin', () => {

    describe('Cookieconsent loaded', () => {
      beforeAll(() => {
        windowStub.cookieconsent = {
          initialise: () => {
          },
        };

        spyOn(windowStub.cookieconsent, 'initialise');
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
