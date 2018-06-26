/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { merge } from 'lodash-es';
import { COOKIE_CONSENT_CONFIG, DEFAULT_CONSENT_CONFIG } from '../cookie-consent.conf';
export class CookieconsentService {
    /**
     * @param {?} cookieConsentConfig
     * @param {?} $window
     */
    constructor(cookieConsentConfig, $window) {
        this.cookieConsentConfig = cookieConsentConfig;
        this.$window = $window;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    init(config = this.cookieConsentConfig) {
        if (!config || Object.keys(config).length === 0) {
            config = DEFAULT_CONSENT_CONFIG;
        }
        if (CookieconsentService.initialized) {
            return console.warn('Cookie consent is already initialized!');
        }
        if (!this.$window || (this.$window && !this.$window.cookieconsent)) {
            return console.warn('Cookie consent is not loaded!');
        }
        this.$window.cookieconsent.initialise(merge(this.cookieConsentConfig, config));
    }
}
CookieconsentService.initialized = false;
CookieconsentService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CookieconsentService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [COOKIE_CONSENT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] }
];
function CookieconsentService_tsickle_Closure_declarations() {
    /** @type {?} */
    CookieconsentService.initialized;
    /** @type {?} */
    CookieconsentService.prototype.cookieConsentConfig;
    /** @type {?} */
    CookieconsentService.prototype.$window;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLWNvbnNlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9jb29raWUtY29uc2VudC9zZXJ2aWNlcy9jb29raWUtY29uc2VudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUl2RixNQUFNOzs7OztJQUdMLFlBQ3dDLG1CQUFtQixFQUNsQyxPQUFPO1FBRFEsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFBO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQUE7S0FDNUI7Ozs7O0lBRUosSUFBSSxDQUFDLFNBQThCLElBQUksQ0FBQyxtQkFBbUI7UUFDMUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxNQUFNLEdBQUcsc0JBQXNCLENBQUM7U0FDaEM7UUFFRCxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDL0U7O21DQXJCcUMsS0FBSzs7WUFGM0MsVUFBVTs7Ozs0Q0FLUixNQUFNLFNBQUMscUJBQXFCOzRDQUM1QixNQUFNLFNBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IENPT0tJRV9DT05TRU5UX0NPTkZJRywgREVGQVVMVF9DT05TRU5UX0NPTkZJRyB9IGZyb20gJy4uL2Nvb2tpZS1jb25zZW50LmNvbmYnO1xuaW1wb3J0IHsgQ29va2llQ29uc2VudENvbmZpZyB9IGZyb20gJy4uL3R5cGVzL2Nvb2tpZS1jb25zZW50LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvb2tpZWNvbnNlbnRTZXJ2aWNlIHtcblx0cHJpdmF0ZSBzdGF0aWMgaW5pdGlhbGl6ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPT0tJRV9DT05TRU5UX0NPTkZJRykgcHJpdmF0ZSBjb29raWVDb25zZW50Q29uZmlnLFxuXHRcdEBJbmplY3QoV0lORE9XKSBwcml2YXRlICR3aW5kb3dcblx0KSB7fVxuXG5cdGluaXQoY29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnID0gdGhpcy5jb29raWVDb25zZW50Q29uZmlnKTogdm9pZCB7XG5cdFx0aWYgKCFjb25maWcgfHwgT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGggPT09IDApIHtcblx0XHRcdGNvbmZpZyA9IERFRkFVTFRfQ09OU0VOVF9DT05GSUc7XG5cdFx0fVxuXG5cdFx0aWYgKENvb2tpZWNvbnNlbnRTZXJ2aWNlLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKCdDb29raWUgY29uc2VudCBpcyBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy4kd2luZG93IHx8ICh0aGlzLiR3aW5kb3cgJiYgIXRoaXMuJHdpbmRvdy5jb29raWVjb25zZW50KSkge1xuXHRcdFx0cmV0dXJuIGNvbnNvbGUud2FybignQ29va2llIGNvbnNlbnQgaXMgbm90IGxvYWRlZCEnKTtcblx0XHR9XG5cblx0XHR0aGlzLiR3aW5kb3cuY29va2llY29uc2VudC5pbml0aWFsaXNlKG1lcmdlKHRoaXMuY29va2llQ29uc2VudENvbmZpZywgY29uZmlnKSk7XG5cdH1cbn1cbiJdfQ==