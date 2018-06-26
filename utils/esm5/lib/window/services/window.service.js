/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { InjectionToken, PLATFORM_ID } from '@angular/core';
/* Create a new injection token for injecting the window into a component. */
export var /** @type {?} */ WINDOW = new InjectionToken('WindowToken');
/**
 * @abstract
 */
var /**
 * @abstract
 */
WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
/**
 * @abstract
 */
export { WindowRef };
var BrowserWindowRef = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));
export { BrowserWindowRef };
/**
 * @param {?} browserWindowRef
 * @param {?} platformId
 * @return {?}
 */
export function windowFactory(browserWindowRef, platformId) {
    if (isPlatformBrowser(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
var /** @type {?} */ browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef,
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
var /** @type {?} */ windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, PLATFORM_ID],
};
/* Create an array of providers. */
export var /** @type {?} */ WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider,
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91dGlscy8iLCJzb3VyY2VzIjpbImxpYi93aW5kb3cvc2VydmljZXMvd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWtDLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzVGLE1BQU0sQ0FBQyxxQkFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7QUFHeEQ7OztBQUFBOzs7SUFDQyxzQkFBSSxtQ0FBWTs7OztRQUFoQjtZQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNwQzs7O09BQUE7b0JBVkY7SUFXQyxDQUFBOzs7O0FBSkQscUJBSUM7QUFHRCxJQUFBO0lBQXNDLDRDQUFTO0lBQzlDO2VBQ0MsaUJBQU87S0FDUDtJQUVELHNCQUFJLDBDQUFZOzs7O1FBQWhCO1lBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNkOzs7T0FBQTsyQkFyQkY7RUFjc0MsU0FBUyxFQVE5QyxDQUFBO0FBUkQsNEJBUUM7Ozs7OztBQUdELE1BQU0sd0JBQXdCLGdCQUFrQyxFQUFFLFVBQWtCO0lBQ25GLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0tBQ3JDO0lBQ0QsTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7Q0FDcEI7O0FBR0QscUJBQU0scUJBQXFCLEdBQWtCO0lBQzVDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFFBQVEsRUFBRSxnQkFBZ0I7Q0FDMUIsQ0FBQzs7QUFHRixxQkFBTSxjQUFjLEdBQW9CO0lBQ3ZDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLGFBQWE7SUFDekIsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztDQUM5QixDQUFDOztBQUdGLE1BQU0sQ0FBQyxxQkFBTSxnQkFBZ0IsR0FBRztJQUMvQixxQkFBcUI7SUFDckIsY0FBYztDQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDbGFzc1Byb3ZpZGVyLCBGYWN0b3J5UHJvdmlkZXIsIEluamVjdGlvblRva2VuLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiBDcmVhdGUgYSBuZXcgaW5qZWN0aW9uIHRva2VuIGZvciBpbmplY3RpbmcgdGhlIHdpbmRvdyBpbnRvIGEgY29tcG9uZW50LiAqL1xuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93VG9rZW4nKTtcblxuLyogRGVmaW5lIGFic3RyYWN0IGNsYXNzIGZvciBvYnRhaW5pbmcgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgd2luZG93IG9iamVjdC4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaW5kb3dSZWYge1xuXHRnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB8IE9iamVjdCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuJyk7XG5cdH1cbn1cblxuLyogRGVmaW5lIGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgYWJzdHJhY3QgY2xhc3MgYW5kIHJldHVybnMgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LiAqL1xuZXhwb3J0IGNsYXNzIEJyb3dzZXJXaW5kb3dSZWYgZXh0ZW5kcyBXaW5kb3dSZWYge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cgfCBPYmplY3Qge1xuXHRcdHJldHVybiB3aW5kb3c7XG5cdH1cbn1cblxuLyogQ3JlYXRlIGFuIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dGYWN0b3J5KGJyb3dzZXJXaW5kb3dSZWY6IEJyb3dzZXJXaW5kb3dSZWYsIHBsYXRmb3JtSWQ6IE9iamVjdCk6IFdpbmRvdyB8IE9iamVjdCB7XG5cdGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuXHRcdHJldHVybiBicm93c2VyV2luZG93UmVmLm5hdGl2ZVdpbmRvdztcblx0fVxuXHRyZXR1cm4gbmV3IE9iamVjdCgpO1xufVxuXG4vKiBDcmVhdGUgYSBpbmplY3RhYmxlIHByb3ZpZGVyIGZvciB0aGUgV2luZG93UmVmIHRva2VuIHRoYXQgdXNlcyB0aGUgQnJvd3NlcldpbmRvd1JlZiBjbGFzcy4gKi9cbmNvbnN0IGJyb3dzZXJXaW5kb3dQcm92aWRlcjogQ2xhc3NQcm92aWRlciA9IHtcblx0cHJvdmlkZTogV2luZG93UmVmLFxuXHR1c2VDbGFzczogQnJvd3NlcldpbmRvd1JlZixcbn07XG5cbi8qIENyZWF0ZSBhbiBpbmplY3RhYmxlIHByb3ZpZGVyIHRoYXQgdXNlcyB0aGUgd2luZG93RmFjdG9yeSBmdW5jdGlvbiBmb3IgcmV0dXJuaW5nIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cbmNvbnN0IHdpbmRvd1Byb3ZpZGVyOiBGYWN0b3J5UHJvdmlkZXIgPSB7XG5cdHByb3ZpZGU6IFdJTkRPVyxcblx0dXNlRmFjdG9yeTogd2luZG93RmFjdG9yeSxcblx0ZGVwczogW1dpbmRvd1JlZiwgUExBVEZPUk1fSURdLFxufTtcblxuLyogQ3JlYXRlIGFuIGFycmF5IG9mIHByb3ZpZGVycy4gKi9cbmV4cG9ydCBjb25zdCBXSU5ET1dfUFJPVklERVJTID0gW1xuXHRicm93c2VyV2luZG93UHJvdmlkZXIsXG5cdHdpbmRvd1Byb3ZpZGVyLFxuXTtcbiJdfQ==