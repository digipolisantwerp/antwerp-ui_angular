(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common'), require('rxjs/BehaviorSubject'), require('@angular/router'), require('rxjs/operators'), require('@angular-redux/store')) :
    typeof define === 'function' && define.amd ? define('context', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common', 'rxjs/BehaviorSubject', '@angular/router', 'rxjs/operators', '@angular-redux/store'], factory) :
    (factory((global.context = {}),global.ng.core,global.ng.platformBrowser,global.ng.common,global.rxjs.BehaviorSubject,global.ng.router,global.rxjs.operators,null));
}(this, (function (exports,core,platformBrowser,common,BehaviorSubject,router,operators,store) { 'use strict';

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ CONTEXT_CONFIG = new core.InjectionToken('contextConfig');
    var /** @type {?} */ CONTEXT_CONFIG_DEFAULT = {
        useTitleSuffix: false,
        extendTitle: false,
        titleDelimiter: ' | ',
        defaults: {},
        routerContext: true,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ContextWriterService = (function () {
        function ContextWriterService(metaConfig, document, titleService) {
            this.metaConfig = metaConfig;
            this.document = document;
            this.titleService = titleService;
            this.metaConfig = __assign({}, CONTEXT_CONFIG_DEFAULT, metaConfig);
        }
        /**
         * @param {?=} meta
         * @return {?}
         */
        ContextWriterService.prototype.updateMetaTags = /**
         * @param {?=} meta
         * @return {?}
         */
            function (meta) {
                var _this = this;
                if (meta === void 0) {
                    meta = {};
                }
                if (meta.disableUpdate) {
                    return;
                }
                var /** @type {?} */ newConfig = __assign({}, meta, this.metaConfig.defaults, { title: this.getTitle(meta) });
                Object.keys(newConfig).forEach(function (key) {
                    _this.setTag(key, newConfig);
                });
            };
        /**
         * @param {?} key
         * @param {?=} values
         * @return {?}
         */
        ContextWriterService.prototype.setTag = /**
         * @param {?} key
         * @param {?=} values
         * @return {?}
         */
            function (key, values) {
                if (values === void 0) {
                    values = {};
                }
                switch (key) {
                    case 'title':
                    case 'titleSuffix':
                        return this.setTitle(values["title"], values["titleSuffix"]);
                    case 'favIcon':
                        return this.setFavIcon(values["favIcon"]);
                    default:
                        return this.setTagDefault(key, values[key]);
                }
            };
        /**
         * @param {?=} title
         * @param {?=} titleSuffix
         * @return {?}
         */
        ContextWriterService.prototype.setTitle = /**
         * @param {?=} title
         * @param {?=} titleSuffix
         * @return {?}
         */
            function (title, titleSuffix) {
                if (titleSuffix === void 0) {
                    titleSuffix = this.metaConfig.defaults.titleSuffix;
                }
                var /** @type {?} */ titleStr = this.isDefined(title) ? title : this.metaConfig.defaults.title;
                if (this.metaConfig.useTitleSuffix && this.isDefined(titleSuffix)) {
                    titleStr += titleSuffix;
                }
                this.titleService.setTitle(titleStr);
            };
        /**
         * @param {?} favIcon
         * @return {?}
         */
        ContextWriterService.prototype.setFavIcon = /**
         * @param {?} favIcon
         * @return {?}
         */
            function (favIcon) {
                this.updateFavIcon('apple-touch-icon', favIcon);
                this.updateFavIcon('shortcut icon', favIcon);
            };
        /**
         * @param {?} rel
         * @param {?} href
         * @param {?=} attrs
         * @return {?}
         */
        ContextWriterService.prototype.updateFavIcon = /**
         * @param {?} rel
         * @param {?} href
         * @param {?=} attrs
         * @return {?}
         */
            function (rel, href, attrs) {
                var /** @type {?} */ oldIcon = this.document.querySelector("link[rel=\"" + rel + "\"]");
                if (oldIcon && oldIcon.getAttribute('href') === href) {
                    return;
                }
                var /** @type {?} */ newIcon = this.document.createElement('link');
                newIcon.setAttribute('rel', rel);
                newIcon.setAttribute('href', href);
                if (attrs) {
                    Object.keys(attrs).forEach(function (key) {
                        newIcon.setAttribute(key, attrs[key]);
                    });
                }
                if (oldIcon) {
                    this.document.head.removeChild(oldIcon);
                }
                this.document.head.appendChild(newIcon);
            };
        /**
         * @param {?} tag
         * @param {?} content
         * @return {?}
         */
        ContextWriterService.prototype.setTagDefault = /**
         * @param {?} tag
         * @param {?} content
         * @return {?}
         */
            function (tag, content) {
                var /** @type {?} */ tagElement = this.getOrCreateMetaTag(tag);
                var /** @type {?} */ tagContent = this.isDefined(content) ? content : (this.metaConfig.defaults[tag] || '');
                tagElement.setAttribute('content', tagContent);
                if (tag === 'description') {
                    var /** @type {?} */ ogDescElement = this.getOrCreateMetaTag('og:description');
                    ogDescElement.setAttribute('content', tagContent);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ContextWriterService.prototype.isDefined = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return typeof value !== 'undefined';
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ContextWriterService.prototype.getOrCreateMetaTag = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                var /** @type {?} */ el = this.document.querySelector("meta[name='" + name + "']");
                if (!el) {
                    el = this.document.createElement('meta');
                    el.setAttribute('name', name);
                    this.document.head.appendChild(el);
                }
                return el;
            };
        /**
         * @param {?=} meta
         * @return {?}
         */
        ContextWriterService.prototype.getTitle = /**
         * @param {?=} meta
         * @return {?}
         */
            function (meta) {
                if (meta === void 0) {
                    meta = {};
                }
                var /** @type {?} */ shouldExtend = this.metaConfig.extendTitle && meta.parent;
                return shouldExtend ? [meta.title, meta.parent].join(this.metaConfig.titleDelimiter) : meta.title;
            };
        ContextWriterService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ContextWriterService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [CONTEXT_CONFIG,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
                { type: platformBrowser.Title }
            ];
        };
        return ContextWriterService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ContextService = (function () {
        function ContextService(contextWriter) {
            this.contextWriter = contextWriter;
            this.context$ = new BehaviorSubject.BehaviorSubject(null);
        }
        /**
         * @param {?} context
         * @return {?}
         */
        ContextService.prototype.updateContext = /**
         * @param {?} context
         * @return {?}
         */
            function (context) {
                this.contextWriter.updateMetaTags(context);
                this.context$.next(context);
            };
        ContextService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ContextService.ctorParameters = function () {
            return [
                { type: ContextWriterService }
            ];
        };
        return ContextService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Services = [
        ContextService,
        ContextWriterService,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RouterHelper = (function () {
        function RouterHelper() {
        }
        /**
         * @param {?} route
         * @param {?=} titles
         * @return {?}
         */
        RouterHelper.getParentTitle = /**
         * @param {?} route
         * @param {?=} titles
         * @return {?}
         */
            function (route, titles) {
                if (titles === void 0) {
                    titles = [];
                }
                if (!route) {
                    return titles;
                }
                var /** @type {?} */ title = this.verifyPath(route, 'parent.data.meta.title');
                var /** @type {?} */ newTitles = title ? titles.concat(title) : titles;
                return route.parent ? this.getParentTitle(route.parent, newTitles) : newTitles;
            };
        /**
         * @param {?} data
         * @param {?} path
         * @return {?}
         */
        RouterHelper.verifyPath = /**
         * @param {?} data
         * @param {?} path
         * @return {?}
         */
            function (data, path) {
                var /** @type {?} */ curr = data;
                var /** @type {?} */ namespace = path.split('.');
                for (var /** @type {?} */ i = 0; i < namespace.length; i += 1) {
                    if (!!curr[namespace[i]]) {
                        // can't use hasOwnProperty so we'll cast to Boolean
                        curr = curr[namespace[i]];
                        continue;
                    }
                    return null;
                }
                return curr;
            };
        /**
         * @param {?} activatedRoute
         * @return {?}
         */
        RouterHelper.findLastChild = /**
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
        return RouterHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0 = CONTEXT_CONFIG_DEFAULT;
    var ContextModule = (function () {
        function ContextModule(contextService, router$$1, activatedRoute, contextConfig) {
            var _this = this;
            this.contextService = contextService;
            this.router = router$$1;
            this.activatedRoute = activatedRoute;
            this.contextConfig = contextConfig;
            if (!contextConfig.routerContext) {
                return;
            }
            this.router.events
                .pipe(operators.filter(function (event) { return (event instanceof router.NavigationEnd); }), operators.map(function () { return RouterHelper.findLastChild(_this.activatedRoute); }))
                .subscribe(function (route) {
                route.data = route.data || {};
                route.data.meta = route.data.meta || {};
                route.data.meta.parent = RouterHelper.getParentTitle(route);
                _this.contextService.updateContext(route.data.meta);
            });
        }
        /**
         * @param {?} metaConfig
         * @return {?}
         */
        ContextModule.forRoot = /**
         * @param {?} metaConfig
         * @return {?}
         */
            function (metaConfig) {
                return {
                    ngModule: ContextModule,
                    providers: __spread([
                        { provide: CONTEXT_CONFIG, useValue: metaConfig }
                    ], Services),
                };
            };
        ContextModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule,
                        ],
                        providers: [
                            Services,
                            { provide: CONTEXT_CONFIG, useValue: ɵ0 },
                        ],
                    },] },
        ];
        /** @nocollapse */
        ContextModule.ctorParameters = function () {
            return [
                { type: ContextService },
                { type: router.Router },
                { type: router.ActivatedRoute },
                { type: undefined, decorators: [{ type: core.Inject, args: [CONTEXT_CONFIG,] }] }
            ];
        };
        return ContextModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ CONTEXT_LOAD = 'CONTEXT_LOAD';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ContextActionCreator = (function () {
        function ContextActionCreator(contextService, contextWriter, ngRedux) {
            var _this = this;
            this.contextService = contextService;
            this.contextWriter = contextWriter;
            this.ngRedux = ngRedux;
            contextService.context$.subscribe(function (context) { return _this.loadContext(context, true); });
        }
        /**
         * @param {?} context
         * @param {?=} fromRoute
         * @return {?}
         */
        ContextActionCreator.prototype.loadContext = /**
         * @param {?} context
         * @param {?=} fromRoute
         * @return {?}
         */
            function (context, fromRoute) {
                var _this = this;
                if (!this.ngRedux['_store']) {
                    return this.subscribeToStore(function () { return _this.loadContext(context, fromRoute); });
                }
                this.ngRedux.dispatch({
                    type: CONTEXT_LOAD,
                    context: context,
                });
                if (!fromRoute) {
                    this.contextWriter.updateMetaTags(context);
                }
            };
        /**
         * @param {?} cb
         * @return {?}
         */
        ContextActionCreator.prototype.subscribeToStore = /**
         * @param {?} cb
         * @return {?}
         */
            function (cb) {
                var _this = this;
                this.onStoreLoaded = cb;
                if (this.storeSubscription) {
                    return;
                }
                this.storeSubscription = ((this.ngRedux['_store$']))
                    .subscribe((function (store$$1) {
                    if (store$$1) {
                        _this.storeSubscription.unsubscribe();
                        _this.onStoreLoaded();
                    }
                }).bind(this));
            };
        ContextActionCreator.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ContextActionCreator.ctorParameters = function () {
            return [
                { type: ContextService },
                { type: ContextWriterService },
                { type: store.NgRedux }
            ];
        };
        return ContextActionCreator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ contextReducer = function (state, action) {
        if (state === void 0) {
            state = null;
        }
        switch (action.type) {
            case CONTEXT_LOAD:
                return __assign({}, action.context);
            default:
                return state;
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ContextStoreModule = (function () {
        function ContextStoreModule(contextActions // make sure the actioncreator is subscribed to the service
        ) {
        }
        ContextStoreModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.NgReduxModule,
                        ],
                        providers: [
                            ContextActionCreator,
                        ],
                    },] },
        ];
        /** @nocollapse */
        ContextStoreModule.ctorParameters = function () {
            return [
                { type: ContextActionCreator }
            ];
        };
        return ContextStoreModule;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ContextService = ContextService;
    exports.ContextWriterService = ContextWriterService;
    exports.CONTEXT_CONFIG = CONTEXT_CONFIG;
    exports.CONTEXT_CONFIG_DEFAULT = CONTEXT_CONFIG_DEFAULT;
    exports.ContextModule = ContextModule;
    exports.ContextActionCreator = ContextActionCreator;
    exports.ContextStoreModule = ContextStoreModule;
    exports.contextReducer = contextReducer;
    exports.CONTEXT_LOAD = CONTEXT_LOAD;
    exports.ɵa = Services;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vY29udGV4dC9saWIvY29udGV4dC9jb250ZXh0LmNvbmYudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc2VydmljZXMvY29udGV4dC13cml0ZXIuc2VydmljZS50cyIsIm5nOi8vY29udGV4dC9saWIvY29udGV4dC9zZXJ2aWNlcy9jb250ZXh0LnNlcnZpY2UudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc2VydmljZXMvaW5kZXgudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvdXRpbHMvcm91dGVyLmhlbHBlci50cyIsIm5nOi8vY29udGV4dC9saWIvY29udGV4dC9jb250ZXh0Lm1vZHVsZS50cyIsIm5nOi8vY29udGV4dC9saWIvY29udGV4dC9zdG9yZS9jb250ZXh0L2NvbnRleHQuYWN0aW9udHlwZXMudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc3RvcmUvY29udGV4dC9jb250ZXh0LmFjdGlvbmNyZWF0b3IudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc3RvcmUvY29udGV4dC9jb250ZXh0LnJlZHVjZXIudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc3RvcmUvc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKG9bbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH07IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl07XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxufSIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRleHRDb25maWcgfSBmcm9tICcuL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ09OVEVYVF9DT05GSUc6IEluamVjdGlvblRva2VuPENvbnRleHRDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuPENvbnRleHRDb25maWc+KCdjb250ZXh0Q29uZmlnJyk7XG5cbmV4cG9ydCBjb25zdCBDT05URVhUX0NPTkZJR19ERUZBVUxUOiBDb250ZXh0Q29uZmlnID0ge1xuXHR1c2VUaXRsZVN1ZmZpeDogZmFsc2UsXG5cdGV4dGVuZFRpdGxlOiBmYWxzZSxcblx0dGl0bGVEZWxpbWl0ZXI6ICcgfCAnLFxuXHRkZWZhdWx0czoge30sXG5cdHJvdXRlckNvbnRleHQ6IHRydWUsXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDT05URVhUX0NPTkZJRywgQ09OVEVYVF9DT05GSUdfREVGQVVMVCB9IGZyb20gJy4uL2NvbnRleHQuY29uZic7XG5pbXBvcnQgeyBDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vdHlwZXMvY29udGV4dC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZXh0V3JpdGVyU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09OVEVYVF9DT05GSUcpIHByaXZhdGUgbWV0YUNvbmZpZzogQ29udGV4dENvbmZpZyxcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0cHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlXG5cdCkge1xuXHRcdHRoaXMubWV0YUNvbmZpZyA9IHtcblx0XHRcdC4uLkNPTlRFWFRfQ09ORklHX0RFRkFVTFQsXG5cdFx0XHQuLi5tZXRhQ29uZmlnLFxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlTWV0YVRhZ3MobWV0YTogYW55ID0ge30pOiB2b2lkIHtcblx0XHRpZiAobWV0YS5kaXNhYmxlVXBkYXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3Q29uZmlnID0ge1xuXHRcdFx0Li4ubWV0YSxcblx0XHRcdC4uLnRoaXMubWV0YUNvbmZpZy5kZWZhdWx0cyxcblx0XHRcdHRpdGxlOiB0aGlzLmdldFRpdGxlKG1ldGEpLFxuXHRcdH07XG5cblx0XHRPYmplY3Qua2V5cyhuZXdDb25maWcpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHRoaXMuc2V0VGFnKGtleSwgbmV3Q29uZmlnKTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBzZXRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9KTogdm9pZCB7XG5cdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdGNhc2UgJ3RpdGxlJzpcblx0XHRcdGNhc2UgJ3RpdGxlU3VmZml4Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0VGl0bGUodmFsdWVzLnRpdGxlLCB2YWx1ZXMudGl0bGVTdWZmaXgpO1xuXHRcdFx0Y2FzZSAnZmF2SWNvbic6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNldEZhdkljb24odmFsdWVzLmZhdkljb24pO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0VGFnRGVmYXVsdChrZXksIHZhbHVlc1trZXldKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nLCB0aXRsZVN1ZmZpeDogc3RyaW5nID0gdGhpcy5tZXRhQ29uZmlnLmRlZmF1bHRzLnRpdGxlU3VmZml4KTogdm9pZCB7XG5cdFx0bGV0IHRpdGxlU3RyID0gdGhpcy5pc0RlZmluZWQodGl0bGUpID8gdGl0bGUgOiB0aGlzLm1ldGFDb25maWcuZGVmYXVsdHMudGl0bGU7XG5cblx0XHRpZiAodGhpcy5tZXRhQ29uZmlnLnVzZVRpdGxlU3VmZml4ICYmIHRoaXMuaXNEZWZpbmVkKHRpdGxlU3VmZml4KSkge1xuXHRcdFx0dGl0bGVTdHIgKz0gdGl0bGVTdWZmaXg7XG5cdFx0fVxuXG5cdFx0dGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodGl0bGVTdHIpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRGYXZJY29uKGZhdkljb246IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlRmF2SWNvbignYXBwbGUtdG91Y2gtaWNvbicsIGZhdkljb24pO1xuXHRcdHRoaXMudXBkYXRlRmF2SWNvbignc2hvcnRjdXQgaWNvbicsIGZhdkljb24pO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVGYXZJY29uKHJlbDogc3RyaW5nLCBocmVmOiBzdHJpbmcsIGF0dHJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZEljb246IEhUTUxFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cIiR7cmVsfVwiXWApO1xuXG5cdFx0aWYgKG9sZEljb24gJiYgb2xkSWNvbi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0ljb246IEhUTUxFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cdFx0bmV3SWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsIHJlbCk7XG5cdFx0bmV3SWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuXHRcdGlmIChhdHRycykge1xuXHRcdFx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdG5ld0ljb24uc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAob2xkSWNvbikge1xuXHRcdFx0dGhpcy5kb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKG9sZEljb24pO1xuXHRcdH1cblxuXHRcdHRoaXMuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuZXdJY29uKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VGFnRGVmYXVsdCh0YWc6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgdGFnRWxlbWVudCA9IHRoaXMuZ2V0T3JDcmVhdGVNZXRhVGFnKHRhZyk7XG5cdFx0Y29uc3QgdGFnQ29udGVudCA9IHRoaXMuaXNEZWZpbmVkKGNvbnRlbnQpID8gY29udGVudCA6ICh0aGlzLm1ldGFDb25maWcuZGVmYXVsdHNbdGFnXSB8fCAnJyk7XG5cblx0XHR0YWdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRhZ0NvbnRlbnQpO1xuXG5cdFx0aWYgKHRhZyA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuXHRcdFx0Y29uc3Qgb2dEZXNjRWxlbWVudCA9IHRoaXMuZ2V0T3JDcmVhdGVNZXRhVGFnKCdvZzpkZXNjcmlwdGlvbicpO1xuXHRcdFx0b2dEZXNjRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0YWdDb250ZW50KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzRGVmaW5lZCh2YWx1ZTogYW55KTogQm9vbGVhbiB7XG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG5cdH1cblxuXHRwcml2YXRlIGdldE9yQ3JlYXRlTWV0YVRhZyhuYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG5cdFx0bGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtuYW1lPScke25hbWV9J11gKTtcblx0XHRpZiAoIWVsKSB7XG5cdFx0XHRlbCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG5cdFx0XHR0aGlzLmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWw7XG5cdH1cblxuXHRwcml2YXRlIGdldFRpdGxlKG1ldGE6IGFueSA9IHt9KTogc3RyaW5nIHtcblx0XHRjb25zdCBzaG91bGRFeHRlbmQgPSB0aGlzLm1ldGFDb25maWcuZXh0ZW5kVGl0bGUgJiYgbWV0YS5wYXJlbnQ7XG5cblx0XHRyZXR1cm4gc2hvdWxkRXh0ZW5kID8gW21ldGEudGl0bGUsIG1ldGEucGFyZW50XS5qb2luKHRoaXMubWV0YUNvbmZpZy50aXRsZURlbGltaXRlcikgOiBtZXRhLnRpdGxlO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi90eXBlcy9jb250ZXh0LnR5cGVzJztcbmltcG9ydCB7IENvbnRleHRXcml0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb250ZXh0LXdyaXRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRleHRTZXJ2aWNlIHtcblx0cHVibGljIGNvbnRleHQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDb250ZXh0PihudWxsKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbnRleHRXcml0ZXI6IENvbnRleHRXcml0ZXJTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgdXBkYXRlQ29udGV4dChjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb250ZXh0V3JpdGVyLnVwZGF0ZU1ldGFUYWdzKGNvbnRleHQpO1xuXHRcdHRoaXMuY29udGV4dCQubmV4dChjb250ZXh0KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL2NvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZXh0V3JpdGVyU2VydmljZSB9IGZyb20gJy4vY29udGV4dC13cml0ZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9IFtcblx0Q29udGV4dFNlcnZpY2UsXG5cdENvbnRleHRXcml0ZXJTZXJ2aWNlLFxuXTtcbiIsImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGNsYXNzIFJvdXRlckhlbHBlciB7XG5cdHB1YmxpYyBzdGF0aWMgZ2V0UGFyZW50VGl0bGUocm91dGUsIHRpdGxlczogc3RyaW5nW10gPSBbXSk6IHN0cmluZ1tdIHtcblx0XHRpZiAoIXJvdXRlKSB7XG5cdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy52ZXJpZnlQYXRoKHJvdXRlLCAncGFyZW50LmRhdGEubWV0YS50aXRsZScpO1xuXHRcdGNvbnN0IG5ld1RpdGxlcyA9IHRpdGxlID8gdGl0bGVzLmNvbmNhdCh0aXRsZSkgOiB0aXRsZXM7XG5cblx0XHRyZXR1cm4gcm91dGUucGFyZW50ID8gdGhpcy5nZXRQYXJlbnRUaXRsZShyb3V0ZS5wYXJlbnQsIG5ld1RpdGxlcykgOiBuZXdUaXRsZXM7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHZlcmlmeVBhdGgoZGF0YTogYW55LCBwYXRoOiBzdHJpbmcpOiBhbnkge1xuXHRcdGxldCBjdXJyID0gZGF0YTtcblx0XHRjb25zdCBuYW1lc3BhY2UgPSBwYXRoLnNwbGl0KCcuJyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aWYgKCEhY3VycltuYW1lc3BhY2VbaV1dKSB7IC8vIGNhbid0IHVzZSBoYXNPd25Qcm9wZXJ0eSBzbyB3ZSdsbCBjYXN0IHRvIEJvb2xlYW5cblx0XHRcdFx0Y3VyciA9IGN1cnJbbmFtZXNwYWNlW2ldXTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBmaW5kTGFzdENoaWxkKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IGFueSB7XG5cdFx0Y29uc3Qgc25hcHNob3QgPSBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcblxuXHRcdGxldCBjaGlsZCA9IHNuYXBzaG90LmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUgKGNoaWxkLmZpcnN0Q2hpbGQgIT09IG51bGwpIHtcblx0XHRcdGNoaWxkID0gY2hpbGQuZmlyc3RDaGlsZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdFJvdXRlck1vZHVsZSxcblx0Um91dGVyLFxuXHROYXZpZ2F0aW9uRW5kLFxuXHRBY3RpdmF0ZWRSb3V0ZVxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbmltcG9ydCB7IENPTlRFWFRfQ09ORklHLCBDT05URVhUX0NPTkZJR19ERUZBVUxUIH0gZnJvbSAnLi9jb250ZXh0LmNvbmYnO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi90eXBlcy9jb250ZXh0LnR5cGVzJztcbmltcG9ydCB7IFJvdXRlckhlbHBlciB9IGZyb20gJy4vdXRpbHMvcm91dGVyLmhlbHBlcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRSb3V0ZXJNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRcdHsgcHJvdmlkZTogQ09OVEVYVF9DT05GSUcsIHVzZVZhbHVlOiBDT05URVhUX0NPTkZJR19ERUZBVUxUIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChtZXRhQ29uZmlnOiBDb250ZXh0Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDb250ZXh0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09OVEVYVF9DT05GSUcsIHVzZVZhbHVlOiBtZXRhQ29uZmlnIH0sXG5cdFx0XHRcdC4uLlNlcnZpY2VzLFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250ZXh0U2VydmljZTogQ29udGV4dFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRASW5qZWN0KENPTlRFWFRfQ09ORklHKSBwcml2YXRlIGNvbnRleHRDb25maWc6IENvbnRleHRDb25maWdcblx0KSB7XG5cdFx0aWYgKCFjb250ZXh0Q29uZmlnLnJvdXRlckNvbnRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnJvdXRlci5ldmVudHNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoZXZlbnQgPT4gKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLFxuXHRcdFx0XHRtYXAoKCkgPT4gUm91dGVySGVscGVyLmZpbmRMYXN0Q2hpbGQodGhpcy5hY3RpdmF0ZWRSb3V0ZSkpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3V0ZTogYW55KSA9PiB7XG5cdFx0XHRcdHJvdXRlLmRhdGEgPSByb3V0ZS5kYXRhIHx8IHt9O1xuXHRcdFx0XHRyb3V0ZS5kYXRhLm1ldGEgPSByb3V0ZS5kYXRhLm1ldGEgfHwge307XG5cdFx0XHRcdHJvdXRlLmRhdGEubWV0YS5wYXJlbnQgPSBSb3V0ZXJIZWxwZXIuZ2V0UGFyZW50VGl0bGUocm91dGUpO1xuXG5cdFx0XHRcdHRoaXMuY29udGV4dFNlcnZpY2UudXBkYXRlQ29udGV4dChyb3V0ZS5kYXRhLm1ldGEpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05URVhUX0xPQUQgPSAnQ09OVEVYVF9MT0FEJztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuaW1wb3J0IHsgQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUudHlwZXMnO1xuaW1wb3J0IHsgQ09OVEVYVF9MT0FEIH0gZnJvbSAnLi9jb250ZXh0LmFjdGlvbnR5cGVzJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRleHRXcml0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGV4dC13cml0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZXh0QWN0aW9uQ3JlYXRvciB7XG5cdHByaXZhdGUgc3RvcmVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblx0cHJpdmF0ZSBvblN0b3JlTG9hZGVkOiBGdW5jdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZSxcblx0XHRwcml2YXRlIGNvbnRleHRXcml0ZXI6IENvbnRleHRXcml0ZXJTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbmdSZWR1eDogTmdSZWR1eDxDb250ZXh0U3RhdGU+XG5cdCkge1xuXHRcdGNvbnRleHRTZXJ2aWNlLmNvbnRleHQkLnN1YnNjcmliZShjb250ZXh0ID0+IHRoaXMubG9hZENvbnRleHQoY29udGV4dCwgdHJ1ZSkpO1xuXHR9XG5cblx0bG9hZENvbnRleHQoY29udGV4dDogQ29udGV4dCwgZnJvbVJvdXRlPzogQm9vbGVhbikge1xuXHRcdGlmICghdGhpcy5uZ1JlZHV4Wydfc3RvcmUnXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlVG9TdG9yZSgoKSA9PiB0aGlzLmxvYWRDb250ZXh0KGNvbnRleHQsIGZyb21Sb3V0ZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMubmdSZWR1eC5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBDT05URVhUX0xPQUQsXG5cdFx0XHRjb250ZXh0LFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFmcm9tUm91dGUpIHtcblx0XHRcdHRoaXMuY29udGV4dFdyaXRlci51cGRhdGVNZXRhVGFncyhjb250ZXh0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVRvU3RvcmUoY2IpIHtcblx0XHR0aGlzLm9uU3RvcmVMb2FkZWQgPSBjYjtcblxuXHRcdGlmICh0aGlzLnN0b3JlU3Vic2NyaXB0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9yZVN1YnNjcmlwdGlvbiA9ICh0aGlzLm5nUmVkdXhbJ19zdG9yZSQnXSBhcyBPYnNlcnZhYmxlPGFueT4pXG5cdFx0XHQuc3Vic2NyaWJlKChzdG9yZSA9PiB7XG5cdFx0XHRcdGlmIChzdG9yZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RvcmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuXHRcdFx0XHRcdHRoaXMub25TdG9yZUxvYWRlZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuaW1wb3J0IHsgQ09OVEVYVF9MT0FEIH0gZnJvbSAnLi9jb250ZXh0LmFjdGlvbnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNvbnRleHRSZWR1Y2VyID0gKFxuXHRzdGF0ZTogQ29udGV4dCA9IG51bGwsXG5cdGFjdGlvblxuKTogQ29udGV4dCA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENPTlRFWFRfTE9BRDpcblx0XHRcdHJldHVybiB7IC4uLmFjdGlvbi5jb250ZXh0IH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1JlZHV4TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXItcmVkdXgvc3RvcmUnO1xuXG5pbXBvcnQgeyBDb250ZXh0QWN0aW9uQ3JlYXRvciB9IGZyb20gJy4vY29udGV4dC9jb250ZXh0LmFjdGlvbmNyZWF0b3InO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TmdSZWR1eE1vZHVsZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q29udGV4dEFjdGlvbkNyZWF0b3IsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRTdG9yZU1vZHVsZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdGNvbnRleHRBY3Rpb25zOiBDb250ZXh0QWN0aW9uQ3JlYXRvciAvLyBtYWtlIHN1cmUgdGhlIGFjdGlvbmNyZWF0b3IgaXMgc3Vic2NyaWJlZCB0byB0aGUgc2VydmljZVxuXHQpIHt9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiRE9DVU1FTlQiLCJUaXRsZSIsIkJlaGF2aW9yU3ViamVjdCIsInJvdXRlciIsImZpbHRlciIsIk5hdmlnYXRpb25FbmQiLCJtYXAiLCJOZ01vZHVsZSIsIlJvdXRlck1vZHVsZSIsIlJvdXRlciIsIkFjdGl2YXRlZFJvdXRlIiwic3RvcmUiLCJOZ1JlZHV4IiwiTmdSZWR1eE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFZTyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDO1FBQ3RELEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFBO0FBRUQsb0JBNkV1QixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUk7WUFDQSxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJ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