(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs/operators'), require('@acpaas-ui/ngx-components/utils')) :
    typeof define === 'function' && define.amd ? define('analytics', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs/operators', '@acpaas-ui/ngx-components/utils'], factory) :
    (factory((global.analytics = {}),global.ng.core,global.ng.common,global.ng.router,global.rxjs.operators,null));
}(this, (function (exports,core,common,router,operators,utils) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GAService = (function () {
        function GAService(location, router$$1, activatedRoute, windowService) {
            this.router = router$$1;
            this.activatedRoute = activatedRoute;
            this.windowService = windowService;
            if (!this.windowService.ga) {
                throw new Error('GA is not defined, is analytics included?');
            }
            this.autoTriggerPageView(location, router$$1);
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
            function (location, router$$1) {
                var _this = this;
                router$$1.events
                    .pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }), operators.map(function () { return _this.findLastChild(_this.activatedRoute); }))
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        GAService.ctorParameters = function () {
            return [
                { type: common.Location },
                { type: router.Router },
                { type: router.ActivatedRoute },
                { type: undefined, decorators: [{ type: core.Inject, args: [utils.WINDOW,] }] }
            ];
        };
        return GAService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ GTM_CONFIG = new core.InjectionToken('GTM_CONFIG');
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
    var GTMService = (function () {
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
                if (data === void 0) {
                    data = {};
                }
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
                if (data === void 0) {
                    data = {};
                }
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        GTMService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [utils.WINDOW,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [GTM_CONFIG,] }] }
            ];
        };
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
    var GaEventDirective = (function () {
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
            { type: core.Directive, args: [{ selector: '[auiGaEvent]' },] },
        ];
        /** @nocollapse */
        GaEventDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: GAService }
            ];
        };
        GaEventDirective.propDecorators = {
            gaEvent: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
    var AnalyticsModule = (function () {
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
                if (config === void 0) {
                    config = {};
                }
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
            { type: core.NgModule, args: [{
                        imports: [
                            utils.WindowModule,
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

    exports.AnalyticsModule = AnalyticsModule;
    exports.GAService = GAService;
    exports.GTMService = GTMService;
    exports.GaEventDirective = GaEventDirective;
    exports.GTM_CONFIG = GTM_CONFIG;
    exports.GTM_CONFIG_DEFAULT = GTM_CONFIG_DEFAULT;
    exports.ɵb = Directives;
    exports.ɵa = Services;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9hbmFseXRpY3MvbGliL2FuYWx5dGljcy9zZXJ2aWNlcy9nYS5zZXJ2aWNlLnRzIiwibmc6Ly9hbmFseXRpY3MvbGliL2FuYWx5dGljcy9hbmFseXRpY3MuY29uZi50cyIsIm5nOi8vYW5hbHl0aWNzL2xpYi9hbmFseXRpY3Mvc2VydmljZXMvZ3RtLnNlcnZpY2UudHMiLCJuZzovL2FuYWx5dGljcy9saWIvYW5hbHl0aWNzL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9hbmFseXRpY3MvbGliL2FuYWx5dGljcy9kaXJlY3RpdmVzL2V2ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5hbHl0aWNzL2xpYi9hbmFseXRpY3MvZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vYW5hbHl0aWNzL2xpYi9hbmFseXRpY3MvYW5hbHl0aWNzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChvW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR0FTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRsb2NhdGlvbjogTG9jYXRpb24sXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW5kb3dTZXJ2aWNlXG5cdCkge1xuXHRcdGlmICghdGhpcy53aW5kb3dTZXJ2aWNlLmdhKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dBIGlzIG5vdCBkZWZpbmVkLCBpcyBhbmFseXRpY3MgaW5jbHVkZWQ/Jyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdXRvVHJpZ2dlclBhZ2VWaWV3KGxvY2F0aW9uLCByb3V0ZXIpO1xuXHR9XG5cblx0cHVibGljIHNldERpbWVuc2lvbihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5nYSgnc2V0Jywga2V5LCB2YWx1ZSk7XG5cdH1cblxuXHRwdWJsaWMgdHJpZ2dlclBhZ2VWaWV3KHRpdGxlPzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgcGFnZT86IHN0cmluZykge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5nYSgnc2VuZCcsICdwYWdldmlldycsIHtcblx0XHRcdHRpdGxlOiB0aXRsZSB8fCB0aGlzLndpbmRvd1NlcnZpY2UuZG9jdW1lbnQudGl0bGUsXG5cdFx0XHRsb2NhdGlvbjogbG9jYXRpb24gfHwgdGhpcy53aW5kb3dTZXJ2aWNlLmxvY2F0aW9uLmhyZWYsXG5cdFx0XHRwYWdlOiBwYWdlIHx8IHRoaXMud2luZG93U2VydmljZS5sb2NhdGlvbi5wYXRobmFtZSxcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRXZlbnQoY2F0ZWdvcnk6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xuXHRcdGlmICghY2F0ZWdvcnkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2F0ZWdvcnkgaXMgcmVxdWlyZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIWFjdGlvbikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIWxhYmVsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy53aW5kb3dTZXJ2aWNlLmdhKCdzZW5kJywgJ2V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMud2luZG93U2VydmljZS5nYSgnc2VuZCcsICdldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy53aW5kb3dTZXJ2aWNlLmdhKCdzZW5kJywgJ2V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgYXV0b1RyaWdnZXJQYWdlVmlldyhsb2NhdGlvbjogTG9jYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0cm91dGVyLmV2ZW50c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuXHRcdFx0XHRtYXAoKCkgPT4gdGhpcy5maW5kTGFzdENoaWxkKHRoaXMuYWN0aXZhdGVkUm91dGUpKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm91dGU6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJvdXRlLmRhdGEgfHwgIXJvdXRlLmRhdGEuZG9Ob3RUcmFjaykge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlclBhZ2VWaWV3KHRoaXMud2luZG93U2VydmljZS5kb2N1bWVudC50aXRsZSwgdGhpcy53aW5kb3dTZXJ2aWNlLmxvY2F0aW9uLmhyZWYsIGxvY2F0aW9uLnBhdGgoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kTGFzdENoaWxkKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXHRcdGNvbnN0IHNuYXBzaG90ID0gYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XG5cblx0XHRsZXQgY2hpbGQgPSBzbmFwc2hvdC5maXJzdENoaWxkO1xuXHRcdHdoaWxlIChjaGlsZC5maXJzdENoaWxkICE9PSBudWxsKSB7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLmZpcnN0Q2hpbGQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR1RNQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9hbmFseXRpY3MudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgR1RNX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbignR1RNX0NPTkZJRycpO1xuXG5leHBvcnQgY29uc3QgR1RNX0NPTkZJR19ERUZBVUxUOiBHVE1Db25maWcgPSB7XG5cdFBBR0VfVklFVzoge1xuXHRcdFRSSUdHRVI6ICd2aXJ0dWFsUGFnZVZpZXcnLFxuXHR9LFxuXHRFVkVOVDoge1xuXHRcdFRSSUdHRVI6ICdldmVudFRyaWdnZXInLFxuXHRcdENBVEVHT1JZOiAnZXZlbnRDYXRlZ29yeScsXG5cdFx0QUNUSU9OOiAnZXZlbnRBY3Rpb24nLFxuXHRcdExBQkVMOiAnZXZlbnRMYWJlbCcsXG5cdFx0VkFMVUU6ICdldmVudFZhbHVlJyxcblx0fSxcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IEdUTV9DT05GSUcgfSBmcm9tICcuLi9hbmFseXRpY3MuY29uZic7XG5pbXBvcnQgeyBHVE1Db25maWcgfSBmcm9tICcuLi90eXBlcy9hbmFseXRpY3MudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR1RNU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbmRvd1NlcnZpY2UsXG5cdFx0QEluamVjdChHVE1fQ09ORklHKSBwcml2YXRlIGNvbmZpZzogR1RNQ29uZmlnXG5cdCkge31cblxuXHRwdWJsaWMgYWRkVG9EYXRhTGF5ZXIoZGF0YSkge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5kYXRhTGF5ZXIucHVzaChkYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyKGV2ZW50OiBzdHJpbmcsIGRhdGEgPSB7fSkge1xuXHRcdGNvbnN0IGV2ZW50RGF0YSA9IHtcblx0XHRcdC4uLmRhdGEsXG5cdFx0XHQnZXZlbnQnOiBldmVudCxcblx0XHR9O1xuXHRcdHRoaXMuYWRkVG9EYXRhTGF5ZXIoZXZlbnREYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyUGFnZVZpZXcoZGF0YSA9IHt9KSB7XG5cdFx0dGhpcy50cmlnZ2VyKHRoaXMuY29uZmlnLlBBR0VfVklFVy5UUklHR0VSLCBkYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRXZlbnQoY2F0ZWdvcnk6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCB2YWx1ZT86IG51bWJlcikge1xuXHRcdHRoaXMudHJpZ2dlcih0aGlzLmNvbmZpZy5FVkVOVC5UUklHR0VSLCB7XG5cdFx0XHRbdGhpcy5jb25maWcuRVZFTlQuQ0FURUdPUlldOiBjYXRlZ29yeSxcblx0XHRcdFt0aGlzLmNvbmZpZy5FVkVOVC5BQ1RJT05dOiBhY3Rpb24sXG5cdFx0XHRbdGhpcy5jb25maWcuRVZFTlQuTEFCRUxdOiBsYWJlbCxcblx0XHRcdFt0aGlzLmNvbmZpZy5FVkVOVC5WQUxVRV06IHZhbHVlLFxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuL2dhLnNlcnZpY2UnO1xuaW1wb3J0IHsgR1RNU2VydmljZSB9IGZyb20gJy4vZ3RtLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdEdBU2VydmljZSxcblx0R1RNU2VydmljZSxcbl07XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thdWlHYUV2ZW50XScgfSlcbmV4cG9ydCBjbGFzcyBHYUV2ZW50RGlyZWN0aXZlIHtcblx0QElucHV0KCkgZ2FFdmVudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZ2FTZXJ2aWNlOiBHQVNlcnZpY2UpIHt9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuXHRvbkNsaWNrKGUpIHtcblx0XHRjb25zdCBuYXRpdmVFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuXHRcdGlmICh0aGlzLmdhRXZlbnQpIHtcblx0XHRcdHRoaXMuZ2FTZXJ2aWNlLnRyaWdnZXJFdmVudChuYXRpdmVFbC50YWdOYW1lLnRvTG93ZXJDYXNlKCksICdjbGljaycsIG5hdGl2ZUVsLmlubmVyVGV4dCwgdGhpcy5nYUV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nYVNlcnZpY2UudHJpZ2dlckV2ZW50KG5hdGl2ZUVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSwgJ2NsaWNrJywgbmF0aXZlRWwuaW5uZXJUZXh0KTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IEdhRXZlbnREaXJlY3RpdmUgfSBmcm9tICcuL2V2ZW50LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRHYUV2ZW50RGlyZWN0aXZlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdpbmRvd01vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5cbmltcG9ydCB7IEdUTV9DT05GSUcsIEdUTV9DT05GSUdfREVGQVVMVCB9IGZyb20gJy4vYW5hbHl0aWNzLmNvbmYnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRXaW5kb3dNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogR1RNX0NPTkZJRywgdXNlVmFsdWU6IEdUTV9DT05GSUdfREVGQVVMVCB9LFxuXHRcdFNlcnZpY2VzLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzTW9kdWxlIHtcblx0c3RhdGljIGZvckNoaWxkKGNvbmZpZyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0Y29uZmlnID0ge1xuXHRcdFx0Li4uR1RNX0NPTkZJR19ERUZBVUxULFxuXHRcdFx0Li4uY29uZmlnLFxuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEFuYWx5dGljc01vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IEdUTV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcblx0XHRcdFx0U2VydmljZXMsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJmaWx0ZXIiLCJOYXZpZ2F0aW9uRW5kIiwibWFwIiwiSW5qZWN0YWJsZSIsIkxvY2F0aW9uIiwiUm91dGVyIiwiQWN0aXZhdGVkUm91dGUiLCJJbmplY3QiLCJXSU5ET1ciLCJJbmplY3Rpb25Ub2tlbiIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiV2luZG93TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQVlPLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7UUFDdEQsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUE7Ozs7OztBQ2hDRDtRQVVDLG1CQUNDLFFBQWtCLEVBQ1ZBLFdBQ0EsZ0JBQ2dCLGFBQWE7WUFGN0IsV0FBTSxHQUFOQSxTQUFNO1lBQ04sbUJBQWMsR0FBZCxjQUFjO1lBQ0Usa0JBQWEsR0FBYixhQUFhLENBQUE7WUFFckMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFQSxTQUFNLENBQUMsQ0FBQztTQUMzQzs7Ozs7O1FBRU0sZ0NBQVk7Ozs7O3NCQUFDLEdBQVcsRUFBRSxLQUFhO2dC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