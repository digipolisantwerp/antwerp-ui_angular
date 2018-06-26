import { Injectable, Inject, InjectionToken, Directive, ElementRef, Input, HostListener, NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { WINDOW, WindowModule } from '@acpaas-ui/ngx-components/utils';
import { __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ GTM_CONFIG = new InjectionToken('GTM_CONFIG');
var /** @type {?} */ GTM_CONFIG_DEFAULT = {
    PAGE_VIEW: {
        TRIGGER: 'virtualPageView',
    },
    EVENT: {
        TRIGGER: 'eventTrigger',
        CATEGORY: 'eventCategory',
        ACTION: 'eventAction',
        LABEL: 'eventLabel',
        VALUE: 'eventValue',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GTMService = /** @class */ (function () {
    function GTMService(windowService, config) {
        this.windowService = windowService;
        this.config = config;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    GTMService.prototype.addToDataLayer = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.windowService.dataLayer.push(data);
    };
    /**
     * @param {?} event
     * @param {?=} data
     * @return {?}
     */
    GTMService.prototype.trigger = /**
     * @param {?} event
     * @param {?=} data
     * @return {?}
     */
    function (event, data) {
        if (data === void 0) { data = {}; }
        var /** @type {?} */ eventData = __assign({}, data, { 'event': event });
        this.addToDataLayer(eventData);
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    GTMService.prototype.triggerPageView = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        if (data === void 0) { data = {}; }
        this.trigger(this.config.PAGE_VIEW.TRIGGER, data);
    };
    /**
     * @param {?} category
     * @param {?} action
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    GTMService.prototype.triggerEvent = /**
     * @param {?} category
     * @param {?} action
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    function (category, action, label, value) {
        this.trigger(this.config.EVENT.TRIGGER, (_a = {},
            _a[this.config.EVENT.CATEGORY] = category,
            _a[this.config.EVENT.ACTION] = action,
            _a[this.config.EVENT.LABEL] = label,
            _a[this.config.EVENT.VALUE] = value,
            _a));
        var _a;
    };
    GTMService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GTMService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [GTM_CONFIG,] }] }
    ]; };
    return GTMService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Services = [
    GAService,
    GTMService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GaEventDirective = /** @class */ (function () {
    function GaEventDirective(el, gaService) {
        this.el = el;
        this.gaService = gaService;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    GaEventDirective.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var /** @type {?} */ nativeEl = this.el.nativeElement;
        if (this.gaEvent) {
            this.gaService.triggerEvent(nativeEl.tagName.toLowerCase(), 'click', nativeEl.innerText, this.gaEvent);
        }
        else {
            this.gaService.triggerEvent(nativeEl.tagName.toLowerCase(), 'click', nativeEl.innerText);
        }
    };
    GaEventDirective.decorators = [
        { type: Directive, args: [{ selector: '[auiGaEvent]' },] },
    ];
    /** @nocollapse */
    GaEventDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: GAService }
    ]; };
    GaEventDirective.propDecorators = {
        gaEvent: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return GaEventDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    GaEventDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = GTM_CONFIG_DEFAULT;
var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AnalyticsModule.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        config = __assign({}, GTM_CONFIG_DEFAULT, config);
        return {
            ngModule: AnalyticsModule,
            providers: [
                { provide: GTM_CONFIG, useValue: config },
                Services,
            ],
        };
    };
    AnalyticsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        WindowModule,
                    ],
                    providers: [
                        { provide: GTM_CONFIG, useValue: ɵ0 },
                        Services,
                    ],
                    declarations: [
                        Directives,
                    ],
                    exports: [
                        Directives,
                    ],
                },] },
    ];
    return AnalyticsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AnalyticsModule, GAService, GTMService, GaEventDirective, GTM_CONFIG, GTM_CONFIG_DEFAULT, Directives as ɵb, Services as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmFseXRpY3MvbGliL2FuYWx5dGljcy9zZXJ2aWNlcy9nYS5zZXJ2aWNlLnRzIiwibmc6Ly9hbmFseXRpY3MvbGliL2FuYWx5dGljcy9hbmFseXRpY3MuY29uZi50cyIsIm5nOi8vYW5hbHl0aWNzL2xpYi9hbmFseXRpY3Mvc2VydmljZXMvZ3RtLnNlcnZpY2UudHMiLCJuZzovL2FuYWx5dGljcy9saWIvYW5hbHl0aWNzL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9hbmFseXRpY3MvbGliL2FuYWx5dGljcy9kaXJlY3RpdmVzL2V2ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5hbHl0aWNzL2xpYi9hbmFseXRpY3MvZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vYW5hbHl0aWNzL2xpYi9hbmFseXRpY3MvYW5hbHl0aWNzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR0FTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRsb2NhdGlvbjogTG9jYXRpb24sXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW5kb3dTZXJ2aWNlXG5cdCkge1xuXHRcdGlmICghdGhpcy53aW5kb3dTZXJ2aWNlLmdhKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dBIGlzIG5vdCBkZWZpbmVkLCBpcyBhbmFseXRpY3MgaW5jbHVkZWQ/Jyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdXRvVHJpZ2dlclBhZ2VWaWV3KGxvY2F0aW9uLCByb3V0ZXIpO1xuXHR9XG5cblx0cHVibGljIHNldERpbWVuc2lvbihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5nYSgnc2V0Jywga2V5LCB2YWx1ZSk7XG5cdH1cblxuXHRwdWJsaWMgdHJpZ2dlclBhZ2VWaWV3KHRpdGxlPzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgcGFnZT86IHN0cmluZykge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5nYSgnc2VuZCcsICdwYWdldmlldycsIHtcblx0XHRcdHRpdGxlOiB0aXRsZSB8fCB0aGlzLndpbmRvd1NlcnZpY2UuZG9jdW1lbnQudGl0bGUsXG5cdFx0XHRsb2NhdGlvbjogbG9jYXRpb24gfHwgdGhpcy53aW5kb3dTZXJ2aWNlLmxvY2F0aW9uLmhyZWYsXG5cdFx0XHRwYWdlOiBwYWdlIHx8IHRoaXMud2luZG93U2VydmljZS5sb2NhdGlvbi5wYXRobmFtZSxcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRXZlbnQoY2F0ZWdvcnk6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xuXHRcdGlmICghY2F0ZWdvcnkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2F0ZWdvcnkgaXMgcmVxdWlyZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIWFjdGlvbikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIWxhYmVsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy53aW5kb3dTZXJ2aWNlLmdhKCdzZW5kJywgJ2V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMud2luZG93U2VydmljZS5nYSgnc2VuZCcsICdldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy53aW5kb3dTZXJ2aWNlLmdhKCdzZW5kJywgJ2V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgYXV0b1RyaWdnZXJQYWdlVmlldyhsb2NhdGlvbjogTG9jYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0cm91dGVyLmV2ZW50c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuXHRcdFx0XHRtYXAoKCkgPT4gdGhpcy5maW5kTGFzdENoaWxkKHRoaXMuYWN0aXZhdGVkUm91dGUpKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm91dGU6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJvdXRlLmRhdGEgfHwgIXJvdXRlLmRhdGEuZG9Ob3RUcmFjaykge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlclBhZ2VWaWV3KHRoaXMud2luZG93U2VydmljZS5kb2N1bWVudC50aXRsZSwgdGhpcy53aW5kb3dTZXJ2aWNlLmxvY2F0aW9uLmhyZWYsIGxvY2F0aW9uLnBhdGgoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kTGFzdENoaWxkKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXHRcdGNvbnN0IHNuYXBzaG90ID0gYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XG5cblx0XHRsZXQgY2hpbGQgPSBzbmFwc2hvdC5maXJzdENoaWxkO1xuXHRcdHdoaWxlIChjaGlsZC5maXJzdENoaWxkICE9PSBudWxsKSB7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLmZpcnN0Q2hpbGQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR1RNQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9hbmFseXRpY3MudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgR1RNX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbignR1RNX0NPTkZJRycpO1xuXG5leHBvcnQgY29uc3QgR1RNX0NPTkZJR19ERUZBVUxUOiBHVE1Db25maWcgPSB7XG5cdFBBR0VfVklFVzoge1xuXHRcdFRSSUdHRVI6ICd2aXJ0dWFsUGFnZVZpZXcnLFxuXHR9LFxuXHRFVkVOVDoge1xuXHRcdFRSSUdHRVI6ICdldmVudFRyaWdnZXInLFxuXHRcdENBVEVHT1JZOiAnZXZlbnRDYXRlZ29yeScsXG5cdFx0QUNUSU9OOiAnZXZlbnRBY3Rpb24nLFxuXHRcdExBQkVMOiAnZXZlbnRMYWJlbCcsXG5cdFx0VkFMVUU6ICdldmVudFZhbHVlJyxcblx0fSxcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IEdUTV9DT05GSUcgfSBmcm9tICcuLi9hbmFseXRpY3MuY29uZic7XG5pbXBvcnQgeyBHVE1Db25maWcgfSBmcm9tICcuLi90eXBlcy9hbmFseXRpY3MudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR1RNU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbmRvd1NlcnZpY2UsXG5cdFx0QEluamVjdChHVE1fQ09ORklHKSBwcml2YXRlIGNvbmZpZzogR1RNQ29uZmlnXG5cdCkge31cblxuXHRwdWJsaWMgYWRkVG9EYXRhTGF5ZXIoZGF0YSkge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5kYXRhTGF5ZXIucHVzaChkYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyKGV2ZW50OiBzdHJpbmcsIGRhdGEgPSB7fSkge1xuXHRcdGNvbnN0IGV2ZW50RGF0YSA9IHtcblx0XHRcdC4uLmRhdGEsXG5cdFx0XHQnZXZlbnQnOiBldmVudCxcblx0XHR9O1xuXHRcdHRoaXMuYWRkVG9EYXRhTGF5ZXIoZXZlbnREYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyUGFnZVZpZXcoZGF0YSA9IHt9KSB7XG5cdFx0dGhpcy50cmlnZ2VyKHRoaXMuY29uZmlnLlBBR0VfVklFVy5UUklHR0VSLCBkYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRXZlbnQoY2F0ZWdvcnk6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCB2YWx1ZT86IG51bWJlcikge1xuXHRcdHRoaXMudHJpZ2dlcih0aGlzLmNvbmZpZy5FVkVOVC5UUklHR0VSLCB7XG5cdFx0XHRbdGhpcy5jb25maWcuRVZFTlQuQ0FURUdPUlldOiBjYXRlZ29yeSxcblx0XHRcdFt0aGlzLmNvbmZpZy5FVkVOVC5BQ1RJT05dOiBhY3Rpb24sXG5cdFx0XHRbdGhpcy5jb25maWcuRVZFTlQuTEFCRUxdOiBsYWJlbCxcblx0XHRcdFt0aGlzLmNvbmZpZy5FVkVOVC5WQUxVRV06IHZhbHVlLFxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuL2dhLnNlcnZpY2UnO1xuaW1wb3J0IHsgR1RNU2VydmljZSB9IGZyb20gJy4vZ3RtLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdEdBU2VydmljZSxcblx0R1RNU2VydmljZSxcbl07XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thdWlHYUV2ZW50XScgfSlcbmV4cG9ydCBjbGFzcyBHYUV2ZW50RGlyZWN0aXZlIHtcblx0QElucHV0KCkgZ2FFdmVudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZ2FTZXJ2aWNlOiBHQVNlcnZpY2UpIHt9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuXHRvbkNsaWNrKGUpIHtcblx0XHRjb25zdCBuYXRpdmVFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuXHRcdGlmICh0aGlzLmdhRXZlbnQpIHtcblx0XHRcdHRoaXMuZ2FTZXJ2aWNlLnRyaWdnZXJFdmVudChuYXRpdmVFbC50YWdOYW1lLnRvTG93ZXJDYXNlKCksICdjbGljaycsIG5hdGl2ZUVsLmlubmVyVGV4dCwgdGhpcy5nYUV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nYVNlcnZpY2UudHJpZ2dlckV2ZW50KG5hdGl2ZUVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSwgJ2NsaWNrJywgbmF0aXZlRWwuaW5uZXJUZXh0KTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IEdhRXZlbnREaXJlY3RpdmUgfSBmcm9tICcuL2V2ZW50LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRHYUV2ZW50RGlyZWN0aXZlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdpbmRvd01vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5cbmltcG9ydCB7IEdUTV9DT05GSUcsIEdUTV9DT05GSUdfREVGQVVMVCB9IGZyb20gJy4vYW5hbHl0aWNzLmNvbmYnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRXaW5kb3dNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogR1RNX0NPTkZJRywgdXNlVmFsdWU6IEdUTV9DT05GSUdfREVGQVVMVCB9LFxuXHRcdFNlcnZpY2VzLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKGNvbmZpZyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0Y29uZmlnID0ge1xuXHRcdFx0Li4uR1RNX0NPTkZJR19ERUZBVUxULFxuXHRcdFx0Li4uY29uZmlnLFxuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEFuYWx5dGljc01vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IEdUTV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcblx0XHRcdFx0U2VydmljZXMsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBVUMsbUJBQ0MsUUFBa0IsRUFDVixRQUNBLGdCQUNnQixhQUFhO1FBRjdCLFdBQU0sR0FBTixNQUFNO1FBQ04sbUJBQWMsR0FBZCxjQUFjO1FBQ0Usa0JBQWEsR0FBYixhQUFhLENBQUE7UUFFckMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFF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