import { InjectionToken, Inject, Injectable, NgModule } from '@angular/core';
import { __assign, __spread } from 'tslib';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CONTEXT_CONFIG = new InjectionToken('contextConfig');
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
var ContextWriterService = /** @class */ (function () {
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
        if (meta === void 0) { meta = {}; }
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
        if (values === void 0) { values = {}; }
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
        if (titleSuffix === void 0) { titleSuffix = this.metaConfig.defaults.titleSuffix; }
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
        if (meta === void 0) { meta = {}; }
        var /** @type {?} */ shouldExtend = this.metaConfig.extendTitle && meta.parent;
        return shouldExtend ? [meta.title, meta.parent].join(this.metaConfig.titleDelimiter) : meta.title;
    };
    ContextWriterService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ContextWriterService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CONTEXT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Title }
    ]; };
    return ContextWriterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextService = /** @class */ (function () {
    function ContextService(contextWriter) {
        this.contextWriter = contextWriter;
        this.context$ = new BehaviorSubject(null);
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
        { type: Injectable },
    ];
    /** @nocollapse */
    ContextService.ctorParameters = function () { return [
        { type: ContextWriterService }
    ]; };
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
var RouterHelper = /** @class */ (function () {
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
        if (titles === void 0) { titles = []; }
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
var ContextModule = /** @class */ (function () {
    function ContextModule(contextService, router, activatedRoute, contextConfig) {
        var _this = this;
        this.contextService = contextService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contextConfig = contextConfig;
        if (!contextConfig.routerContext) {
            return;
        }
        this.router.events
            .pipe(filter(function (event) { return (event instanceof NavigationEnd); }), map(function () { return RouterHelper.findLastChild(_this.activatedRoute); }))
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
        { type: NgModule, args: [{
                    imports: [
                        RouterModule,
                    ],
                    providers: [
                        Services,
                        { provide: CONTEXT_CONFIG, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    ContextModule.ctorParameters = function () { return [
        { type: ContextService },
        { type: Router },
        { type: ActivatedRoute },
        { type: undefined, decorators: [{ type: Inject, args: [CONTEXT_CONFIG,] }] }
    ]; };
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
var ContextActionCreator = /** @class */ (function () {
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
        this.storeSubscription = (/** @type {?} */ (this.ngRedux['_store$']))
            .subscribe((function (store) {
            if (store) {
                _this.storeSubscription.unsubscribe();
                _this.onStoreLoaded();
            }
        }).bind(this));
    };
    ContextActionCreator.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ContextActionCreator.ctorParameters = function () { return [
        { type: ContextService },
        { type: ContextWriterService },
        { type: NgRedux }
    ]; };
    return ContextActionCreator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ contextReducer = function (state, action) {
    if (state === void 0) { state = null; }
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
var ContextStoreModule = /** @class */ (function () {
    function ContextStoreModule(contextActions // make sure the actioncreator is subscribed to the service
    ) {
    }
    ContextStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgReduxModule,
                    ],
                    providers: [
                        ContextActionCreator,
                    ],
                },] },
    ];
    /** @nocollapse */
    ContextStoreModule.ctorParameters = function () { return [
        { type: ContextActionCreator }
    ]; };
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

export { ContextService, ContextWriterService, CONTEXT_CONFIG, CONTEXT_CONFIG_DEFAULT, ContextModule, ContextActionCreator, ContextStoreModule, contextReducer, CONTEXT_LOAD, Services as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29udGV4dC9saWIvY29udGV4dC9jb250ZXh0LmNvbmYudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc2VydmljZXMvY29udGV4dC13cml0ZXIuc2VydmljZS50cyIsIm5nOi8vY29udGV4dC9saWIvY29udGV4dC9zZXJ2aWNlcy9jb250ZXh0LnNlcnZpY2UudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc2VydmljZXMvaW5kZXgudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvdXRpbHMvcm91dGVyLmhlbHBlci50cyIsIm5nOi8vY29udGV4dC9saWIvY29udGV4dC9jb250ZXh0Lm1vZHVsZS50cyIsIm5nOi8vY29udGV4dC9saWIvY29udGV4dC9zdG9yZS9jb250ZXh0L2NvbnRleHQuYWN0aW9udHlwZXMudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc3RvcmUvY29udGV4dC9jb250ZXh0LmFjdGlvbmNyZWF0b3IudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc3RvcmUvY29udGV4dC9jb250ZXh0LnJlZHVjZXIudHMiLCJuZzovL2NvbnRleHQvbGliL2NvbnRleHQvc3RvcmUvc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRleHRDb25maWcgfSBmcm9tICcuL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ09OVEVYVF9DT05GSUc6IEluamVjdGlvblRva2VuPENvbnRleHRDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuPENvbnRleHRDb25maWc+KCdjb250ZXh0Q29uZmlnJyk7XG5cbmV4cG9ydCBjb25zdCBDT05URVhUX0NPTkZJR19ERUZBVUxUOiBDb250ZXh0Q29uZmlnID0ge1xuXHR1c2VUaXRsZVN1ZmZpeDogZmFsc2UsXG5cdGV4dGVuZFRpdGxlOiBmYWxzZSxcblx0dGl0bGVEZWxpbWl0ZXI6ICcgfCAnLFxuXHRkZWZhdWx0czoge30sXG5cdHJvdXRlckNvbnRleHQ6IHRydWUsXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDT05URVhUX0NPTkZJRywgQ09OVEVYVF9DT05GSUdfREVGQVVMVCB9IGZyb20gJy4uL2NvbnRleHQuY29uZic7XG5pbXBvcnQgeyBDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vdHlwZXMvY29udGV4dC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZXh0V3JpdGVyU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09OVEVYVF9DT05GSUcpIHByaXZhdGUgbWV0YUNvbmZpZzogQ29udGV4dENvbmZpZyxcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0cHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlXG5cdCkge1xuXHRcdHRoaXMubWV0YUNvbmZpZyA9IHtcblx0XHRcdC4uLkNPTlRFWFRfQ09ORklHX0RFRkFVTFQsXG5cdFx0XHQuLi5tZXRhQ29uZmlnLFxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlTWV0YVRhZ3MobWV0YTogYW55ID0ge30pOiB2b2lkIHtcblx0XHRpZiAobWV0YS5kaXNhYmxlVXBkYXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3Q29uZmlnID0ge1xuXHRcdFx0Li4ubWV0YSxcblx0XHRcdC4uLnRoaXMubWV0YUNvbmZpZy5kZWZhdWx0cyxcblx0XHRcdHRpdGxlOiB0aGlzLmdldFRpdGxlKG1ldGEpLFxuXHRcdH07XG5cblx0XHRPYmplY3Qua2V5cyhuZXdDb25maWcpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHRoaXMuc2V0VGFnKGtleSwgbmV3Q29uZmlnKTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBzZXRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9KTogdm9pZCB7XG5cdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdGNhc2UgJ3RpdGxlJzpcblx0XHRcdGNhc2UgJ3RpdGxlU3VmZml4Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0VGl0bGUodmFsdWVzLnRpdGxlLCB2YWx1ZXMudGl0bGVTdWZmaXgpO1xuXHRcdFx0Y2FzZSAnZmF2SWNvbic6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNldEZhdkljb24odmFsdWVzLmZhdkljb24pO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0VGFnRGVmYXVsdChrZXksIHZhbHVlc1trZXldKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nLCB0aXRsZVN1ZmZpeDogc3RyaW5nID0gdGhpcy5tZXRhQ29uZmlnLmRlZmF1bHRzLnRpdGxlU3VmZml4KTogdm9pZCB7XG5cdFx0bGV0IHRpdGxlU3RyID0gdGhpcy5pc0RlZmluZWQodGl0bGUpID8gdGl0bGUgOiB0aGlzLm1ldGFDb25maWcuZGVmYXVsdHMudGl0bGU7XG5cblx0XHRpZiAodGhpcy5tZXRhQ29uZmlnLnVzZVRpdGxlU3VmZml4ICYmIHRoaXMuaXNEZWZpbmVkKHRpdGxlU3VmZml4KSkge1xuXHRcdFx0dGl0bGVTdHIgKz0gdGl0bGVTdWZmaXg7XG5cdFx0fVxuXG5cdFx0dGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodGl0bGVTdHIpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRGYXZJY29uKGZhdkljb246IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlRmF2SWNvbignYXBwbGUtdG91Y2gtaWNvbicsIGZhdkljb24pO1xuXHRcdHRoaXMudXBkYXRlRmF2SWNvbignc2hvcnRjdXQgaWNvbicsIGZhdkljb24pO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVGYXZJY29uKHJlbDogc3RyaW5nLCBocmVmOiBzdHJpbmcsIGF0dHJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZEljb246IEhUTUxFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cIiR7cmVsfVwiXWApO1xuXG5cdFx0aWYgKG9sZEljb24gJiYgb2xkSWNvbi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0ljb246IEhUTUxFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cdFx0bmV3SWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsIHJlbCk7XG5cdFx0bmV3SWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuXHRcdGlmIChhdHRycykge1xuXHRcdFx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdG5ld0ljb24uc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAob2xkSWNvbikge1xuXHRcdFx0dGhpcy5kb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKG9sZEljb24pO1xuXHRcdH1cblxuXHRcdHRoaXMuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuZXdJY29uKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VGFnRGVmYXVsdCh0YWc6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgdGFnRWxlbWVudCA9IHRoaXMuZ2V0T3JDcmVhdGVNZXRhVGFnKHRhZyk7XG5cdFx0Y29uc3QgdGFnQ29udGVudCA9IHRoaXMuaXNEZWZpbmVkKGNvbnRlbnQpID8gY29udGVudCA6ICh0aGlzLm1ldGFDb25maWcuZGVmYXVsdHNbdGFnXSB8fCAnJyk7XG5cblx0XHR0YWdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRhZ0NvbnRlbnQpO1xuXG5cdFx0aWYgKHRhZyA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuXHRcdFx0Y29uc3Qgb2dEZXNjRWxlbWVudCA9IHRoaXMuZ2V0T3JDcmVhdGVNZXRhVGFnKCdvZzpkZXNjcmlwdGlvbicpO1xuXHRcdFx0b2dEZXNjRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0YWdDb250ZW50KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzRGVmaW5lZCh2YWx1ZTogYW55KTogQm9vbGVhbiB7XG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG5cdH1cblxuXHRwcml2YXRlIGdldE9yQ3JlYXRlTWV0YVRhZyhuYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG5cdFx0bGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtuYW1lPScke25hbWV9J11gKTtcblx0XHRpZiAoIWVsKSB7XG5cdFx0XHRlbCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG5cdFx0XHR0aGlzLmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWw7XG5cdH1cblxuXHRwcml2YXRlIGdldFRpdGxlKG1ldGE6IGFueSA9IHt9KTogc3RyaW5nIHtcblx0XHRjb25zdCBzaG91bGRFeHRlbmQgPSB0aGlzLm1ldGFDb25maWcuZXh0ZW5kVGl0bGUgJiYgbWV0YS5wYXJlbnQ7XG5cblx0XHRyZXR1cm4gc2hvdWxkRXh0ZW5kID8gW21ldGEudGl0bGUsIG1ldGEucGFyZW50XS5qb2luKHRoaXMubWV0YUNvbmZpZy50aXRsZURlbGltaXRlcikgOiBtZXRhLnRpdGxlO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi90eXBlcy9jb250ZXh0LnR5cGVzJztcbmltcG9ydCB7IENvbnRleHRXcml0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb250ZXh0LXdyaXRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRleHRTZXJ2aWNlIHtcblx0cHVibGljIGNvbnRleHQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDb250ZXh0PihudWxsKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbnRleHRXcml0ZXI6IENvbnRleHRXcml0ZXJTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgdXBkYXRlQ29udGV4dChjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb250ZXh0V3JpdGVyLnVwZGF0ZU1ldGFUYWdzKGNvbnRleHQpO1xuXHRcdHRoaXMuY29udGV4dCQubmV4dChjb250ZXh0KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL2NvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZXh0V3JpdGVyU2VydmljZSB9IGZyb20gJy4vY29udGV4dC13cml0ZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9IFtcblx0Q29udGV4dFNlcnZpY2UsXG5cdENvbnRleHRXcml0ZXJTZXJ2aWNlLFxuXTtcbiIsImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGNsYXNzIFJvdXRlckhlbHBlciB7XG5cdHB1YmxpYyBzdGF0aWMgZ2V0UGFyZW50VGl0bGUocm91dGUsIHRpdGxlczogc3RyaW5nW10gPSBbXSk6IHN0cmluZ1tdIHtcblx0XHRpZiAoIXJvdXRlKSB7XG5cdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy52ZXJpZnlQYXRoKHJvdXRlLCAncGFyZW50LmRhdGEubWV0YS50aXRsZScpO1xuXHRcdGNvbnN0IG5ld1RpdGxlcyA9IHRpdGxlID8gdGl0bGVzLmNvbmNhdCh0aXRsZSkgOiB0aXRsZXM7XG5cblx0XHRyZXR1cm4gcm91dGUucGFyZW50ID8gdGhpcy5nZXRQYXJlbnRUaXRsZShyb3V0ZS5wYXJlbnQsIG5ld1RpdGxlcykgOiBuZXdUaXRsZXM7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHZlcmlmeVBhdGgoZGF0YTogYW55LCBwYXRoOiBzdHJpbmcpOiBhbnkge1xuXHRcdGxldCBjdXJyID0gZGF0YTtcblx0XHRjb25zdCBuYW1lc3BhY2UgPSBwYXRoLnNwbGl0KCcuJyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aWYgKCEhY3VycltuYW1lc3BhY2VbaV1dKSB7IC8vIGNhbid0IHVzZSBoYXNPd25Qcm9wZXJ0eSBzbyB3ZSdsbCBjYXN0IHRvIEJvb2xlYW5cblx0XHRcdFx0Y3VyciA9IGN1cnJbbmFtZXNwYWNlW2ldXTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBmaW5kTGFzdENoaWxkKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IGFueSB7XG5cdFx0Y29uc3Qgc25hcHNob3QgPSBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDtcblxuXHRcdGxldCBjaGlsZCA9IHNuYXBzaG90LmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUgKGNoaWxkLmZpcnN0Q2hpbGQgIT09IG51bGwpIHtcblx0XHRcdGNoaWxkID0gY2hpbGQuZmlyc3RDaGlsZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdFJvdXRlck1vZHVsZSxcblx0Um91dGVyLFxuXHROYXZpZ2F0aW9uRW5kLFxuXHRBY3RpdmF0ZWRSb3V0ZVxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbmltcG9ydCB7IENPTlRFWFRfQ09ORklHLCBDT05URVhUX0NPTkZJR19ERUZBVUxUIH0gZnJvbSAnLi9jb250ZXh0LmNvbmYnO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi90eXBlcy9jb250ZXh0LnR5cGVzJztcbmltcG9ydCB7IFJvdXRlckhlbHBlciB9IGZyb20gJy4vdXRpbHMvcm91dGVyLmhlbHBlcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRSb3V0ZXJNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRcdHsgcHJvdmlkZTogQ09OVEVYVF9DT05GSUcsIHVzZVZhbHVlOiBDT05URVhUX0NPTkZJR19ERUZBVUxUIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChtZXRhQ29uZmlnOiBDb250ZXh0Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDb250ZXh0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09OVEVYVF9DT05GSUcsIHVzZVZhbHVlOiBtZXRhQ29uZmlnIH0sXG5cdFx0XHRcdC4uLlNlcnZpY2VzLFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250ZXh0U2VydmljZTogQ29udGV4dFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRASW5qZWN0KENPTlRFWFRfQ09ORklHKSBwcml2YXRlIGNvbnRleHRDb25maWc6IENvbnRleHRDb25maWdcblx0KSB7XG5cdFx0aWYgKCFjb250ZXh0Q29uZmlnLnJvdXRlckNvbnRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnJvdXRlci5ldmVudHNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoZXZlbnQgPT4gKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLFxuXHRcdFx0XHRtYXAoKCkgPT4gUm91dGVySGVscGVyLmZpbmRMYXN0Q2hpbGQodGhpcy5hY3RpdmF0ZWRSb3V0ZSkpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3V0ZTogYW55KSA9PiB7XG5cdFx0XHRcdHJvdXRlLmRhdGEgPSByb3V0ZS5kYXRhIHx8IHt9O1xuXHRcdFx0XHRyb3V0ZS5kYXRhLm1ldGEgPSByb3V0ZS5kYXRhLm1ldGEgfHwge307XG5cdFx0XHRcdHJvdXRlLmRhdGEubWV0YS5wYXJlbnQgPSBSb3V0ZXJIZWxwZXIuZ2V0UGFyZW50VGl0bGUocm91dGUpO1xuXG5cdFx0XHRcdHRoaXMuY29udGV4dFNlcnZpY2UudXBkYXRlQ29udGV4dChyb3V0ZS5kYXRhLm1ldGEpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05URVhUX0xPQUQgPSAnQ09OVEVYVF9MT0FEJztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuaW1wb3J0IHsgQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUudHlwZXMnO1xuaW1wb3J0IHsgQ09OVEVYVF9MT0FEIH0gZnJvbSAnLi9jb250ZXh0LmFjdGlvbnR5cGVzJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRleHRXcml0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGV4dC13cml0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZXh0QWN0aW9uQ3JlYXRvciB7XG5cdHByaXZhdGUgc3RvcmVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblx0cHJpdmF0ZSBvblN0b3JlTG9hZGVkOiBGdW5jdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZSxcblx0XHRwcml2YXRlIGNvbnRleHRXcml0ZXI6IENvbnRleHRXcml0ZXJTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbmdSZWR1eDogTmdSZWR1eDxDb250ZXh0U3RhdGU+XG5cdCkge1xuXHRcdGNvbnRleHRTZXJ2aWNlLmNvbnRleHQkLnN1YnNjcmliZShjb250ZXh0ID0+IHRoaXMubG9hZENvbnRleHQoY29udGV4dCwgdHJ1ZSkpO1xuXHR9XG5cblx0bG9hZENvbnRleHQoY29udGV4dDogQ29udGV4dCwgZnJvbVJvdXRlPzogQm9vbGVhbikge1xuXHRcdGlmICghdGhpcy5uZ1JlZHV4Wydfc3RvcmUnXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlVG9TdG9yZSgoKSA9PiB0aGlzLmxvYWRDb250ZXh0KGNvbnRleHQsIGZyb21Sb3V0ZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMubmdSZWR1eC5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBDT05URVhUX0xPQUQsXG5cdFx0XHRjb250ZXh0LFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFmcm9tUm91dGUpIHtcblx0XHRcdHRoaXMuY29udGV4dFdyaXRlci51cGRhdGVNZXRhVGFncyhjb250ZXh0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVRvU3RvcmUoY2IpIHtcblx0XHR0aGlzLm9uU3RvcmVMb2FkZWQgPSBjYjtcblxuXHRcdGlmICh0aGlzLnN0b3JlU3Vic2NyaXB0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9yZVN1YnNjcmlwdGlvbiA9ICh0aGlzLm5nUmVkdXhbJ19zdG9yZSQnXSBhcyBPYnNlcnZhYmxlPGFueT4pXG5cdFx0XHQuc3Vic2NyaWJlKChzdG9yZSA9PiB7XG5cdFx0XHRcdGlmIChzdG9yZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RvcmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuXHRcdFx0XHRcdHRoaXMub25TdG9yZUxvYWRlZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuaW1wb3J0IHsgQ09OVEVYVF9MT0FEIH0gZnJvbSAnLi9jb250ZXh0LmFjdGlvbnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNvbnRleHRSZWR1Y2VyID0gKFxuXHRzdGF0ZTogQ29udGV4dCA9IG51bGwsXG5cdGFjdGlvblxuKTogQ29udGV4dCA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENPTlRFWFRfTE9BRDpcblx0XHRcdHJldHVybiB7IC4uLmFjdGlvbi5jb250ZXh0IH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1JlZHV4TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXItcmVkdXgvc3RvcmUnO1xuXG5pbXBvcnQgeyBDb250ZXh0QWN0aW9uQ3JlYXRvciB9IGZyb20gJy4vY29udGV4dC9jb250ZXh0LmFjdGlvbmNyZWF0b3InO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TmdSZWR1eE1vZHVsZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q29udGV4dEFjdGlvbkNyZWF0b3IsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRTdG9yZU1vZHVsZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdGNvbnRleHRBY3Rpb25zOiBDb250ZXh0QWN0aW9uQ3JlYXRvciAvLyBtYWtlIHN1cmUgdGhlIGFjdGlvbmNyZWF0b3IgaXMgc3Vic2NyaWJlZCB0byB0aGUgc2VydmljZVxuXHQpIHt9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUlhLGNBQWMsR0FBa0MsSUFBSSxjQUFjLENBQWdCLGVBQWUsQ0FBQyxDQUFDO0FBRWhILHFCQUFhLHNCQUFzQixHQUFrQjtJQUNwRCxjQUFjLEVBQUUsS0FBSztJQUNyQixXQUFXLEVBQUUsS0FBSztJQUNsQixjQUFjLEVBQUUsS0FBSztJQUNyQixRQUFRLEVBQUUsRUFBRTtJQUNaLGFBQWEsRUFBRSxJQUFJO0NBQ25COzs7Ozs7O0lDSEEsOEJBQ2lDLFVB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