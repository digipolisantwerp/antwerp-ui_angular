/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from '@angular/core';
export const /** @type {?} */ DEFAULT_CONSENT_CONFIG = {
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
        messagelink: '<p id="cookieconsent:desc">{{message}} <a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a></p>',
        // tslint:disable-line:max-line-length
        dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>',
    },
};
export const /** @type {?} */ COOKIE_CONSENT_CONFIG_ROOT = new InjectionToken('cookieConsentConfigRoot');
export const /** @type {?} */ COOKIE_CONSENT_CONFIG = new InjectionToken('cookieConsentConfig');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLWNvbnNlbnQuY29uZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9jb29raWUtY29uc2VudC9jb29raWUtY29uc2VudC5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLE1BQU0sQ0FBQyx1QkFBTSxzQkFBc0IsR0FBd0I7SUFDMUQsUUFBUSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUU7UUFDUixPQUFPLEVBQUUsOEVBQThFO1FBQ3ZGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLDRDQUE0QztLQUNsRDtJQUNELE1BQU0sRUFBRTtRQUNQLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxHQUFHO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDVCxXQUFXLEVBQUUsK0lBQStJOztRQUM1SixPQUFPLEVBQUUsa0hBQWtIO0tBQzNIO0NBQ0QsQ0FBQztBQUVGLE1BQU0sQ0FBQyx1QkFBTSwwQkFBMEIsR0FBRyxJQUFJLGNBQWMsQ0FBc0IseUJBQXlCLENBQUMsQ0FBQztBQUM3RyxNQUFNLENBQUMsdUJBQU0scUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQXNCLHFCQUFxQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llQ29uc2VudENvbmZpZyB9IGZyb20gJy4vdHlwZXMvY29va2llLWNvbnNlbnQudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05TRU5UX0NPTkZJRzogQ29va2llQ29uc2VudENvbmZpZyA9IHtcblx0YXV0b0luaXQ6IHRydWUsXG5cdGNvbnRlbnQ6IHtcblx0XHRtZXNzYWdlOiAnV2UgbWFrZSB1c2Ugb2YgY29va2llcyB0byBlbnN1cmUgeW91IGdldCB0aGUgYmVzdCBleHBlcmllbmNlIG9uIG91ciB3ZWJzaXRlLicsXG5cdFx0ZGlzbWlzczogJ09LJyxcblx0XHRsaW5rOiAnTGVhcm4gbW9yZScsXG5cdFx0aHJlZjogJ2h0dHA6Ly9jb29raWVwZWRpYS5jby51ay9hbGwtYWJvdXQtY29va2llcycsXG5cdH0sXG5cdGNvb2tpZToge1xuXHRcdG5hbWU6ICdjb29raWVjb25zZW50X3N0YXR1cycsXG5cdFx0cGF0aDogJy8nLFxuXHRcdGRvbWFpbjogJycsXG5cdFx0ZXhwaXJ5RGF5czogMzY1LFxuXHR9LFxuXHRlbGVtZW50czoge1xuXHRcdG1lc3NhZ2VsaW5rOiAnPHAgaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIj57e21lc3NhZ2V9fSA8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgdGFiaW5kZXg9XCIwXCIgaHJlZj1cInt7aHJlZn19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3tsaW5rfX08L2E+PC9wPicsIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5cdFx0ZGlzbWlzczogJzxidXR0b24gYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImEtYnV0dG9uIGNjLWJ0biBjYy1kaXNtaXNzXCI+e3tkaXNtaXNzfX08L2J1dHRvbj4nLFxuXHR9LFxufTtcblxuZXhwb3J0IGNvbnN0IENPT0tJRV9DT05TRU5UX0NPTkZJR19ST09UID0gbmV3IEluamVjdGlvblRva2VuPENvb2tpZUNvbnNlbnRDb25maWc+KCdjb29raWVDb25zZW50Q29uZmlnUm9vdCcpO1xuZXhwb3J0IGNvbnN0IENPT0tJRV9DT05TRU5UX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb29raWVDb25zZW50Q29uZmlnPignY29va2llQ29uc2VudENvbmZpZycpO1xuIl19