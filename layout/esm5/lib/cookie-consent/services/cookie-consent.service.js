/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { merge } from 'lodash-es';
import { COOKIE_CONSENT_CONFIG, DEFAULT_CONSENT_CONFIG } from '../cookie-consent.conf';
var CookieconsentService = /** @class */ (function () {
    function CookieconsentService(cookieConsentConfig, $window) {
        this.cookieConsentConfig = cookieConsentConfig;
        this.$window = $window;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CookieconsentService.prototype.init = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = this.cookieConsentConfig; }
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
    };
    CookieconsentService.initialized = false;
    CookieconsentService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CookieconsentService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [COOKIE_CONSENT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    return CookieconsentService;
}());
export { CookieconsentService };
function CookieconsentService_tsickle_Closure_declarations() {
    /** @type {?} */
    CookieconsentService.initialized;
    /** @type {?} */
    CookieconsentService.prototype.cookieConsentConfig;
    /** @type {?} */
    CookieconsentService.prototype.$window;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLWNvbnNlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9jb29raWUtY29uc2VudC9zZXJ2aWNlcy9jb29raWUtY29uc2VudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFPdEYsOEJBQ3dDLG1CQUFtQixFQUNsQyxPQUFPO1FBRFEsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFBO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQUE7S0FDNUI7Ozs7O0lBRUosbUNBQUk7Ozs7SUFBSixVQUFLLE1BQXNEO1FBQXRELHVCQUFBLEVBQUEsU0FBOEIsSUFBSSxDQUFDLG1CQUFtQjtRQUMxRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sR0FBRyxzQkFBc0IsQ0FBQztTQUNoQztRQUVELEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUM5RDtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUMvRTt1Q0FyQnFDLEtBQUs7O2dCQUYzQyxVQUFVOzs7O2dEQUtSLE1BQU0sU0FBQyxxQkFBcUI7Z0RBQzVCLE1BQU0sU0FBQyxNQUFNOzsrQkFiaEI7O1NBUWEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgQ09PS0lFX0NPTlNFTlRfQ09ORklHLCBERUZBVUxUX0NPTlNFTlRfQ09ORklHIH0gZnJvbSAnLi4vY29va2llLWNvbnNlbnQuY29uZic7XG5pbXBvcnQgeyBDb29raWVDb25zZW50Q29uZmlnIH0gZnJvbSAnLi4vdHlwZXMvY29va2llLWNvbnNlbnQudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29va2llY29uc2VudFNlcnZpY2Uge1xuXHRwcml2YXRlIHN0YXRpYyBpbml0aWFsaXplZDogQm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09PS0lFX0NPTlNFTlRfQ09ORklHKSBwcml2YXRlIGNvb2tpZUNvbnNlbnRDb25maWcsXG5cdFx0QEluamVjdChXSU5ET1cpIHByaXZhdGUgJHdpbmRvd1xuXHQpIHt9XG5cblx0aW5pdChjb25maWc6IENvb2tpZUNvbnNlbnRDb25maWcgPSB0aGlzLmNvb2tpZUNvbnNlbnRDb25maWcpOiB2b2lkIHtcblx0XHRpZiAoIWNvbmZpZyB8fCBPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Y29uZmlnID0gREVGQVVMVF9DT05TRU5UX0NPTkZJRztcblx0XHR9XG5cblx0XHRpZiAoQ29va2llY29uc2VudFNlcnZpY2UuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJldHVybiBjb25zb2xlLndhcm4oJ0Nvb2tpZSBjb25zZW50IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLiR3aW5kb3cgfHwgKHRoaXMuJHdpbmRvdyAmJiAhdGhpcy4kd2luZG93LmNvb2tpZWNvbnNlbnQpKSB7XG5cdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKCdDb29raWUgY29uc2VudCBpcyBub3QgbG9hZGVkIScpO1xuXHRcdH1cblxuXHRcdHRoaXMuJHdpbmRvdy5jb29raWVjb25zZW50LmluaXRpYWxpc2UobWVyZ2UodGhpcy5jb29raWVDb25zZW50Q29uZmlnLCBjb25maWcpKTtcblx0fVxufVxuIl19