/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
var GAService = /** @class */ (function () {
    function GAService(location, router, activatedRoute, windowService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.windowService = windowService;
        if (!this.windowService.ga) {
            throw new Error('GA is not defined, is analytics included?');
        }
        this.autoTriggerPageView(location, router);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    GAService.prototype.setDimension = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.windowService.ga('set', key, value);
    };
    /**
     * @param {?=} title
     * @param {?=} location
     * @param {?=} page
     * @return {?}
     */
    GAService.prototype.triggerPageView = /**
     * @param {?=} title
     * @param {?=} location
     * @param {?=} page
     * @return {?}
     */
    function (title, location, page) {
        this.windowService.ga('send', 'pageview', {
            title: title || this.windowService.document.title,
            location: location || this.windowService.location.href,
            page: page || this.windowService.location.pathname,
        });
    };
    /**
     * @param {?} category
     * @param {?} action
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    GAService.prototype.triggerEvent = /**
     * @param {?} category
     * @param {?} action
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    function (category, action, label, value) {
        if (!category) {
            throw new Error('category is required');
        }
        if (!action) {
            throw new Error('action is required');
        }
        if (!label) {
            return this.windowService.ga('send', 'event', category, action);
        }
        if (!value) {
            return this.windowService.ga('send', 'event', category, action, label);
        }
        return this.windowService.ga('send', 'event', category, action, label, value);
    };
    /**
     * @param {?} location
     * @param {?} router
     * @return {?}
     */
    GAService.prototype.autoTriggerPageView = /**
     * @param {?} location
     * @param {?} router
     * @return {?}
     */
    function (location, router) {
        var _this = this;
        router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }), map(function () { return _this.findLastChild(_this.activatedRoute); }))
            .subscribe(function (route) {
            if (!route.data || !route.data.doNotTrack) {
                _this.triggerPageView(_this.windowService.document.title, _this.windowService.location.href, location.path());
            }
        });
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    GAService.prototype.findLastChild = /**
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        var /** @type {?} */ snapshot = activatedRoute.snapshot;
        var /** @type {?} */ child = snapshot.firstChild;
        while (child.firstChild !== null) {
            child = child.firstChild;
        }
        return child;
    };
    GAService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GAService.ctorParameters = function () { return [
        { type: Location },
        { type: Router },
        { type: ActivatedRoute },
        { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    return GAService;
}());
export { GAService };
function GAService_tsickle_Closure_declarations() {
    /** @type {?} */
    GAService.prototype.router;
    /** @type {?} */
    GAService.prototype.activatedRoute;
    /** @type {?} */
    GAService.prototype.windowService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuYWx5dGljcy8iLCJzb3VyY2VzIjpbImxpYi9hbmFseXRpY3Mvc2VydmljZXMvZ2Euc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztJQUt4RCxtQkFDQyxRQUFrQixFQUNWLFFBQ0EsZ0JBQ2dCLGFBQWE7UUFGN0IsV0FBTSxHQUFOLE1BQU07UUFDTixtQkFBYyxHQUFkLGNBQWM7UUFDRSxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQUVyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzNDOzs7Ozs7SUFFTSxnQ0FBWTs7Ozs7Y0FBQyxHQUFXLEVBQUUsS0FBYTtRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztJQUduQyxtQ0FBZTs7Ozs7O2NBQUMsS0FBYyxFQUFFLFFBQWlCLEVBQUUsSUFBYTtRQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFO1lBQ3pDLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNqRCxRQUFRLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUk7WUFDdEQsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRO1NBQ2xELENBQUMsQ0FBQzs7Ozs7Ozs7O0lBR0csZ0NBQVk7Ozs7Ozs7Y0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxLQUFjLEVBQUUsS0FBVztRQUNoRixFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDeEM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDdEM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEU7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7SUFHdkUsdUNBQW1COzs7OztjQUFDLFFBQWtCLEVBQUUsTUFBYzs7UUFDN0QsTUFBTSxDQUFDLE1BQU07YUFDWCxJQUFJLENBQ0osTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxZQUFZLGFBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxFQUMvQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQ2xEO2FBQ0EsU0FBUyxDQUFDLFVBQUMsS0FBVTtZQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMzRztTQUNELENBQUMsQ0FBQzs7Ozs7O0lBR0csaUNBQWE7Ozs7Y0FBQyxjQUE4QjtRQUNuRCxxQkFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUV6QyxxQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxPQUFPLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDekI7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDOzs7Z0JBckVkLFVBQVU7Ozs7Z0JBTkYsUUFBUTtnQkFDUixNQUFNO2dCQUFpQixjQUFjO2dEQVkzQyxNQUFNLFNBQUMsTUFBTTs7b0JBZGhCOztTQVFhLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR0FTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRsb2NhdGlvbjogTG9jYXRpb24sXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW5kb3dTZXJ2aWNlXG5cdCkge1xuXHRcdGlmICghdGhpcy53aW5kb3dTZXJ2aWNlLmdhKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dBIGlzIG5vdCBkZWZpbmVkLCBpcyBhbmFseXRpY3MgaW5jbHVkZWQ/Jyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdXRvVHJpZ2dlclBhZ2VWaWV3KGxvY2F0aW9uLCByb3V0ZXIpO1xuXHR9XG5cblx0cHVibGljIHNldERpbWVuc2lvbihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5nYSgnc2V0Jywga2V5LCB2YWx1ZSk7XG5cdH1cblxuXHRwdWJsaWMgdHJpZ2dlclBhZ2VWaWV3KHRpdGxlPzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgcGFnZT86IHN0cmluZykge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5nYSgnc2VuZCcsICdwYWdldmlldycsIHtcblx0XHRcdHRpdGxlOiB0aXRsZSB8fCB0aGlzLndpbmRvd1NlcnZpY2UuZG9jdW1lbnQudGl0bGUsXG5cdFx0XHRsb2NhdGlvbjogbG9jYXRpb24gfHwgdGhpcy53aW5kb3dTZXJ2aWNlLmxvY2F0aW9uLmhyZWYsXG5cdFx0XHRwYWdlOiBwYWdlIHx8IHRoaXMud2luZG93U2VydmljZS5sb2NhdGlvbi5wYXRobmFtZSxcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRXZlbnQoY2F0ZWdvcnk6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xuXHRcdGlmICghY2F0ZWdvcnkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2F0ZWdvcnkgaXMgcmVxdWlyZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIWFjdGlvbikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIWxhYmVsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy53aW5kb3dTZXJ2aWNlLmdhKCdzZW5kJywgJ2V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMud2luZG93U2VydmljZS5nYSgnc2VuZCcsICdldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy53aW5kb3dTZXJ2aWNlLmdhKCdzZW5kJywgJ2V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgYXV0b1RyaWdnZXJQYWdlVmlldyhsb2NhdGlvbjogTG9jYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0cm91dGVyLmV2ZW50c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuXHRcdFx0XHRtYXAoKCkgPT4gdGhpcy5maW5kTGFzdENoaWxkKHRoaXMuYWN0aXZhdGVkUm91dGUpKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm91dGU6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJvdXRlLmRhdGEgfHwgIXJvdXRlLmRhdGEuZG9Ob3RUcmFjaykge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlclBhZ2VWaWV3KHRoaXMud2luZG93U2VydmljZS5kb2N1bWVudC50aXRsZSwgdGhpcy53aW5kb3dTZXJ2aWNlLmxvY2F0aW9uLmhyZWYsIGxvY2F0aW9uLnBhdGgoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kTGFzdENoaWxkKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXHRcdGNvbnN0IHNuYXBzaG90ID0gYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XG5cblx0XHRsZXQgY2hpbGQgPSBzbmFwc2hvdC5maXJzdENoaWxkO1xuXHRcdHdoaWxlIChjaGlsZC5maXJzdENoaWxkICE9PSBudWxsKSB7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLmZpcnN0Q2hpbGQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9XG59XG4iXX0=