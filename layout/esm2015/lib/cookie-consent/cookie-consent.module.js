/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowModule } from '@acpaas-ui/ngx-components/utils';
import { merge } from 'lodash-es';
import 'cookieconsent';
import { CookieconsentService } from './services/cookie-consent.service';
import { COOKIE_CONSENT_CONFIG_ROOT, COOKIE_CONSENT_CONFIG, DEFAULT_CONSENT_CONFIG } from './cookie-consent.conf';
/**
 * @param {?} cookieConsentConfig
 * @return {?}
 */
export function setConfig(cookieConsentConfig) {
    return merge(DEFAULT_CONSENT_CONFIG, cookieConsentConfig);
}
const ɵ0 = DEFAULT_CONSENT_CONFIG;
export class CookieconsentModule {
    /**
     * @param {?=} config
     * @param {?=} cookieconsentService
     */
    constructor(config = DEFAULT_CONSENT_CONFIG, cookieconsentService) {
        this.cookieconsentService = cookieconsentService;
        if (config.autoInit) {
            this.cookieconsentService.init();
        }
    }
    /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    static forRoot(cookieConsentConfig) {
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
                CookieconsentService,
            ],
        };
    }
}
CookieconsentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    WindowModule,
                ],
                providers: [
                    CookieconsentService,
                    { provide: COOKIE_CONSENT_CONFIG, useValue: ɵ0 },
                ],
            },] },
];
/** @nocollapse */
CookieconsentModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [COOKIE_CONSENT_CONFIG,] }] },
    { type: CookieconsentService }
];
function CookieconsentModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CookieconsentModule.prototype.cookieconsentService;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLWNvbnNlbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2Nvb2tpZS1jb25zZW50L2Nvb2tpZS1jb25zZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFHbEgsTUFBTSxvQkFBb0IsbUJBQXdDO0lBQ2pFLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztDQUMxRDtXQVM2QyxzQkFBc0I7QUFHcEUsTUFBTTs7Ozs7SUFtQkwsWUFDZ0MsU0FBOEIsc0JBQXNCLEVBQzNFO1FBQUEseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUU1QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7S0FDRDs7Ozs7SUF6QkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBd0M7UUFDdEQsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOztnQkFHdEU7b0JBQ0MsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsVUFBVSxFQUFFLFNBQVM7b0JBQ3JCLElBQUksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUNsQztnQkFFRCxvQkFBb0I7YUFDcEI7U0FDRCxDQUFDO0tBQ0Y7OztZQTNCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysb0JBQW9CO29CQUNwQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLElBQXdCLEVBQUU7aUJBQ3BFO2FBQ0Q7Ozs7NENBcUJFLE1BQU0sU0FBQyxxQkFBcUI7WUF0Q3RCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBXaW5kb3dNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCAnY29va2llY29uc2VudCc7XG5cbmltcG9ydCB7IENvb2tpZWNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb29raWUtY29uc2VudC5zZXJ2aWNlJztcbmltcG9ydCB7IENPT0tJRV9DT05TRU5UX0NPTkZJR19ST09ULCBDT09LSUVfQ09OU0VOVF9DT05GSUcsIERFRkFVTFRfQ09OU0VOVF9DT05GSUcgfSBmcm9tICcuL2Nvb2tpZS1jb25zZW50LmNvbmYnO1xuaW1wb3J0IHsgQ29va2llQ29uc2VudENvbmZpZyB9IGZyb20gJy4vdHlwZXMvY29va2llLWNvbnNlbnQudHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29uZmlnKGNvb2tpZUNvbnNlbnRDb25maWc6IENvb2tpZUNvbnNlbnRDb25maWcpOiBDb29raWVDb25zZW50Q29uZmlnIHtcblx0cmV0dXJuIG1lcmdlKERFRkFVTFRfQ09OU0VOVF9DT05GSUcsIGNvb2tpZUNvbnNlbnRDb25maWcpO1xufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFdpbmRvd01vZHVsZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q29va2llY29uc2VudFNlcnZpY2UsXG5cdFx0eyBwcm92aWRlOiBDT09LSUVfQ09OU0VOVF9DT05GSUcsIHVzZVZhbHVlOiBERUZBVUxUX0NPTlNFTlRfQ09ORklHIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvb2tpZWNvbnNlbnRNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChjb29raWVDb25zZW50Q29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDb29raWVjb25zZW50TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHX1JPT1QsIHVzZVZhbHVlOiBjb29raWVDb25zZW50Q29uZmlnIH0sXG5cblx0XHRcdFx0Ly8gTWVyZ2UgdGhlIGZvclJvb3QgY29uZmlnIHdpdGggb3VyIGRlZmF1bHQgY29uZmlnIChBT1QgcHJvb2YpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBDT09LSUVfQ09OU0VOVF9DT05GSUcsXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogc2V0Q29uZmlnLFxuXHRcdFx0XHRcdGRlcHM6IFtDT09LSUVfQ09OU0VOVF9DT05GSUdfUk9PVF0sXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Q29va2llY29uc2VudFNlcnZpY2UsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPT0tJRV9DT05TRU5UX0NPTkZJRykgY29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnID0gREVGQVVMVF9DT05TRU5UX0NPTkZJRyxcblx0XHRwcml2YXRlIGNvb2tpZWNvbnNlbnRTZXJ2aWNlOiBDb29raWVjb25zZW50U2VydmljZVxuXHQpIHtcblx0XHRpZiAoY29uZmlnLmF1dG9Jbml0KSB7XG5cdFx0XHR0aGlzLmNvb2tpZWNvbnNlbnRTZXJ2aWNlLmluaXQoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==