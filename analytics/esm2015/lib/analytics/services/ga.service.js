/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
export class GAService {
    /**
     * @param {?} location
     * @param {?} router
     * @param {?} activatedRoute
     * @param {?} windowService
     */
    constructor(location, router, activatedRoute, windowService) {
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
    setDimension(key, value) {
        this.windowService.ga('set', key, value);
    }
    /**
     * @param {?=} title
     * @param {?=} location
     * @param {?=} page
     * @return {?}
     */
    triggerPageView(title, location, page) {
        this.windowService.ga('send', 'pageview', {
            title: title || this.windowService.document.title,
            location: location || this.windowService.location.href,
            page: page || this.windowService.location.pathname,
        });
    }
    /**
     * @param {?} category
     * @param {?} action
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    triggerEvent(category, action, label, value) {
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
    }
    /**
     * @param {?} location
     * @param {?} router
     * @return {?}
     */
    autoTriggerPageView(location, router) {
        router.events
            .pipe(filter(event => event instanceof NavigationEnd), map(() => this.findLastChild(this.activatedRoute)))
            .subscribe((route) => {
            if (!route.data || !route.data.doNotTrack) {
                this.triggerPageView(this.windowService.document.title, this.windowService.location.href, location.path());
            }
        });
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    findLastChild(activatedRoute) {
        const /** @type {?} */ snapshot = activatedRoute.snapshot;
        let /** @type {?} */ child = snapshot.firstChild;
        while (child.firstChild !== null) {
            child = child.firstChild;
        }
        return child;
    }
}
GAService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GAService.ctorParameters = () => [
    { type: Location },
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] }
];
function GAService_tsickle_Closure_declarations() {
    /** @type {?} */
    GAService.prototype.router;
    /** @type {?} */
    GAService.prototype.activatedRoute;
    /** @type {?} */
    GAService.prototype.windowService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuYWx5dGljcy8iLCJzb3VyY2VzIjpbImxpYi9hbmFseXRpY3Mvc2VydmljZXMvZ2Euc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3pELE1BQU07Ozs7Ozs7SUFFTCxZQUNDLFFBQWtCLEVBQ1YsUUFDQSxnQkFDZ0IsYUFBYTtRQUY3QixXQUFNLEdBQU4sTUFBTTtRQUNOLG1CQUFjLEdBQWQsY0FBYztRQUNFLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1FBRXJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDM0M7Ozs7OztJQUVNLFlBQVksQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztJQUduQyxlQUFlLENBQUMsS0FBYyxFQUFFLFFBQWlCLEVBQUUsSUFBYTtRQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFO1lBQ3pDLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNqRCxRQUFRLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUk7WUFDdEQsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRO1NBQ2xELENBQUMsQ0FBQzs7Ozs7Ozs7O0lBR0csWUFBWSxDQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLEtBQWMsRUFBRSxLQUFXO1FBQ2hGLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN4QztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUN0QztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoRTtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkU7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7OztJQUd2RSxtQkFBbUIsQ0FBQyxRQUFrQixFQUFFLE1BQWM7UUFDN0QsTUFBTSxDQUFDLE1BQU07YUFDWCxJQUFJLENBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxFQUMvQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FDbEQ7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMzRztTQUNELENBQUMsQ0FBQzs7Ozs7O0lBR0csYUFBYSxDQUFDLGNBQThCO1FBQ25ELHVCQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBRXpDLHFCQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUN6QjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7WUFyRWQsVUFBVTs7OztZQU5GLFFBQVE7WUFDUixNQUFNO1lBQWlCLGNBQWM7NENBWTNDLE1BQU0sU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdBU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bG9jYXRpb246IExvY2F0aW9uLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0QEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luZG93U2VydmljZVxuXHQpIHtcblx0XHRpZiAoIXRoaXMud2luZG93U2VydmljZS5nYSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdHQSBpcyBub3QgZGVmaW5lZCwgaXMgYW5hbHl0aWNzIGluY2x1ZGVkPycpO1xuXHRcdH1cblxuXHRcdHRoaXMuYXV0b1RyaWdnZXJQYWdlVmlldyhsb2NhdGlvbiwgcm91dGVyKTtcblx0fVxuXG5cdHB1YmxpYyBzZXREaW1lbnNpb24oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLndpbmRvd1NlcnZpY2UuZ2EoJ3NldCcsIGtleSwgdmFsdWUpO1xuXHR9XG5cblx0cHVibGljIHRyaWdnZXJQYWdlVmlldyh0aXRsZT86IHN0cmluZywgbG9jYXRpb24/OiBzdHJpbmcsIHBhZ2U/OiBzdHJpbmcpIHtcblx0XHR0aGlzLndpbmRvd1NlcnZpY2UuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCB7XG5cdFx0XHR0aXRsZTogdGl0bGUgfHwgdGhpcy53aW5kb3dTZXJ2aWNlLmRvY3VtZW50LnRpdGxlLFxuXHRcdFx0bG9jYXRpb246IGxvY2F0aW9uIHx8IHRoaXMud2luZG93U2VydmljZS5sb2NhdGlvbi5ocmVmLFxuXHRcdFx0cGFnZTogcGFnZSB8fCB0aGlzLndpbmRvd1NlcnZpY2UubG9jYXRpb24ucGF0aG5hbWUsXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdHJpZ2dlckV2ZW50KGNhdGVnb3J5OiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBsYWJlbD86IHN0cmluZywgdmFsdWU/OiBhbnkpIHtcblx0XHRpZiAoIWNhdGVnb3J5KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NhdGVnb3J5IGlzIHJlcXVpcmVkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFhY3Rpb24pIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignYWN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMud2luZG93U2VydmljZS5nYSgnc2VuZCcsICdldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24pO1xuXHRcdH1cblxuXHRcdGlmICghdmFsdWUpIHtcblx0XHRcdHJldHVybiB0aGlzLndpbmRvd1NlcnZpY2UuZ2EoJ3NlbmQnLCAnZXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMud2luZG93U2VydmljZS5nYSgnc2VuZCcsICdldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIGF1dG9UcmlnZ2VyUGFnZVZpZXcobG9jYXRpb246IExvY2F0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuXHRcdHJvdXRlci5ldmVudHNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcblx0XHRcdFx0bWFwKCgpID0+IHRoaXMuZmluZExhc3RDaGlsZCh0aGlzLmFjdGl2YXRlZFJvdXRlKSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvdXRlOiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKCFyb3V0ZS5kYXRhIHx8ICFyb3V0ZS5kYXRhLmRvTm90VHJhY2spIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXJQYWdlVmlldyh0aGlzLndpbmRvd1NlcnZpY2UuZG9jdW1lbnQudGl0bGUsIHRoaXMud2luZG93U2VydmljZS5sb2NhdGlvbi5ocmVmLCBsb2NhdGlvbi5wYXRoKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZmluZExhc3RDaGlsZChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblx0XHRjb25zdCBzbmFwc2hvdCA9IGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90O1xuXG5cdFx0bGV0IGNoaWxkID0gc25hcHNob3QuZmlyc3RDaGlsZDtcblx0XHR3aGlsZSAoY2hpbGQuZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xuXHRcdFx0Y2hpbGQgPSBjaGlsZC5maXJzdENoaWxkO1xuXHRcdH1cblxuXHRcdHJldHVybiBjaGlsZDtcblx0fVxufVxuIl19