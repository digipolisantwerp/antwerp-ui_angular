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
var ɵ0 = DEFAULT_CONSENT_CONFIG;
var CookieconsentModule = /** @class */ (function () {
    function CookieconsentModule(config, cookieconsentService) {
        if (config === void 0) { config = DEFAULT_CONSENT_CONFIG; }
        this.cookieconsentService = cookieconsentService;
        if (config.autoInit) {
            this.cookieconsentService.init();
        }
    }
    /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    CookieconsentModule.forRoot = /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    function (cookieConsentConfig) {
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
    };
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
    CookieconsentModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [COOKIE_CONSENT_CONFIG,] }] },
        { type: CookieconsentService }
    ]; };
    return CookieconsentModule;
}());
export { CookieconsentModule };
function CookieconsentModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CookieconsentModule.prototype.cookieconsentService;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLWNvbnNlbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2Nvb2tpZS1jb25zZW50L2Nvb2tpZS1jb25zZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFHbEgsTUFBTSxvQkFBb0IsbUJBQXdDO0lBQ2pFLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztDQUMxRDtTQVM2QyxzQkFBc0I7O0lBc0JuRSw2QkFDZ0MsTUFBb0QsRUFDM0U7UUFEUix1QkFBQSxFQUFBLCtCQUFtRjtRQUMzRSx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBRTVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQztLQUNEOzs7OztJQXpCTSwyQkFBTzs7OztJQUFkLFVBQWUsbUJBQXdDO1FBQ3RELE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTs7Z0JBR3RFO29CQUNDLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFVBQVUsRUFBRSxTQUFTO29CQUNyQixJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDbEM7Z0JBRUQsb0JBQW9CO2FBQ3BCO1NBQ0QsQ0FBQztLQUNGOztnQkEzQkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG9CQUFvQjt3QkFDcEIsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxJQUF3QixFQUFFO3FCQUNwRTtpQkFDRDs7OztnREFxQkUsTUFBTSxTQUFDLHFCQUFxQjtnQkF0Q3RCLG9CQUFvQjs7OEJBTjdCOztTQXdCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV2luZG93TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgJ2Nvb2tpZWNvbnNlbnQnO1xuXG5pbXBvcnQgeyBDb29raWVjb25zZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29va2llLWNvbnNlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDT09LSUVfQ09OU0VOVF9DT05GSUdfUk9PVCwgQ09PS0lFX0NPTlNFTlRfQ09ORklHLCBERUZBVUxUX0NPTlNFTlRfQ09ORklHIH0gZnJvbSAnLi9jb29raWUtY29uc2VudC5jb25mJztcbmltcG9ydCB7IENvb2tpZUNvbnNlbnRDb25maWcgfSBmcm9tICcuL3R5cGVzL2Nvb2tpZS1jb25zZW50LnR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbmZpZyhjb29raWVDb25zZW50Q29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnKTogQ29va2llQ29uc2VudENvbmZpZyB7XG5cdHJldHVybiBtZXJnZShERUZBVUxUX0NPTlNFTlRfQ09ORklHLCBjb29raWVDb25zZW50Q29uZmlnKTtcbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRXaW5kb3dNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdENvb2tpZWNvbnNlbnRTZXJ2aWNlLFxuXHRcdHsgcHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHLCB1c2VWYWx1ZTogREVGQVVMVF9DT05TRU5UX0NPTkZJRyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb29raWVjb25zZW50TW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoY29va2llQ29uc2VudENvbmZpZzogQ29va2llQ29uc2VudENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogQ29va2llY29uc2VudE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IENPT0tJRV9DT05TRU5UX0NPTkZJR19ST09ULCB1c2VWYWx1ZTogY29va2llQ29uc2VudENvbmZpZyB9LFxuXG5cdFx0XHRcdC8vIE1lcmdlIHRoZSBmb3JSb290IGNvbmZpZyB3aXRoIG91ciBkZWZhdWx0IGNvbmZpZyAoQU9UIHByb29mKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHLFxuXHRcdFx0XHRcdHVzZUZhY3Rvcnk6IHNldENvbmZpZyxcblx0XHRcdFx0XHRkZXBzOiBbQ09PS0lFX0NPTlNFTlRfQ09ORklHX1JPT1RdLFxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdENvb2tpZWNvbnNlbnRTZXJ2aWNlLFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT09LSUVfQ09OU0VOVF9DT05GSUcpIGNvbmZpZzogQ29va2llQ29uc2VudENvbmZpZyA9IERFRkFVTFRfQ09OU0VOVF9DT05GSUcsXG5cdFx0cHJpdmF0ZSBjb29raWVjb25zZW50U2VydmljZTogQ29va2llY29uc2VudFNlcnZpY2Vcblx0KSB7XG5cdFx0aWYgKGNvbmZpZy5hdXRvSW5pdCkge1xuXHRcdFx0dGhpcy5jb29raWVjb25zZW50U2VydmljZS5pbml0KCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=