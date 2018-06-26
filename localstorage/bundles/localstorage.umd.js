(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lodash-es'), require('@acpaas-ui/ngx-components/utils'), require('rxjs/BehaviorSubject'), require('rxjs/add/operator/distinctUntilChanged'), require('rxjs/add/operator/map'), require('@angular-redux/store'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/first')) :
    typeof define === 'function' && define.amd ? define('localstorage', ['exports', '@angular/core', 'lodash-es', '@acpaas-ui/ngx-components/utils', 'rxjs/BehaviorSubject', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/map', '@angular-redux/store', 'rxjs/add/operator/filter', 'rxjs/add/operator/first'], factory) :
    (factory((global.localstorage = {}),global.ng.core,null,null,global.rxjs.BehaviorSubject,global.rxjs['add/operator/distinctUntilChanged'],global.rxjs['add/operator/map'],null));
}(this, (function (exports,core,lodashEs,utils,BehaviorSubject,distinctUntilChanged,map,store) { 'use strict';

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
    var /** @type {?} */ LOCALSTORAGE_CONFIG = new core.InjectionToken('localstorageConfig');
    var /** @type {?} */ DEFAULT_LOCALSTORAGE_CONFIG = {
        storageType: 'localStorage',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LocalstorageHelper = (function () {
        function LocalstorageHelper() {
        }
        // select data from the storage for the provided selector
        /**
         * @param {?} storage
         * @param {?} selector
         * @return {?}
         */
        LocalstorageHelper.select = /**
         * @param {?} storage
         * @param {?} selector
         * @return {?}
         */
            function (storage, selector) {
                if (!storage) {
                    return null;
                }
                if (!selector) {
                    return storage;
                }
                if (typeof selector === 'function') {
                    return selector(storage);
                }
                if (Array.isArray(selector)) {
                    return this.verifyPath(storage, selector);
                }
                return this.verifyPath(storage, [selector]);
            };
        // verify the key matches with the selector
        // property selector: compare the key with the selector
        // path selector: verify the key is the last item in the path
        // function selector: always return true
        /**
         * @param {?} key
         * @param {?} selector
         * @return {?}
         */
        LocalstorageHelper.keyMatches = /**
         * @param {?} key
         * @param {?} selector
         * @return {?}
         */
            function (key, selector) {
                var /** @type {?} */ keyMatchesSelector = key === selector;
                var /** @type {?} */ keyInSelector = Array.isArray(selector) ? selector.indexOf(key) >= 0 : false;
                var /** @type {?} */ selectorIsFunction = typeof selector === 'function';
                return keyMatchesSelector || keyInSelector || selectorIsFunction;
            };
        // verify a path exists in an object
        /**
         * @param {?=} data
         * @param {?=} selector
         * @return {?}
         */
        LocalstorageHelper.verifyPath = /**
         * @param {?=} data
         * @param {?=} selector
         * @return {?}
         */
            function (data, selector) {
                if (!data || !selector) {
                    return null;
                }
                var /** @type {?} */ curr = data;
                for (var /** @type {?} */ i = 0; i < selector.length; i += 1) {
                    if (curr.hasOwnProperty(selector[i])) {
                        curr = curr[selector[i]];
                        continue;
                    }
                    return null;
                }
                return curr;
            };
        /**
         * @param {?=} state
         * @param {?=} selector
         * @param {?=} newValue
         * @return {?}
         */
        LocalstorageHelper.updateOrCreatePath = /**
         * @param {?=} state
         * @param {?=} selector
         * @param {?=} newValue
         * @return {?}
         */
            function (state, selector, newValue) {
                if (!state || !selector) {
                    return null;
                }
                var /** @type {?} */ curr = state;
                var /** @type {?} */ i = 0;
                for (i = 0; i < selector.length; i += 1) {
                    if (!curr.hasOwnProperty(selector[i])) {
                        curr[selector[i]] = {};
                    }
                    if (i === selector.length - 1) {
                        break;
                    }
                    curr = curr[selector[i]];
                }
                curr[selector[i]] = newValue;
                return state;
            };
        /**
         * @param {?} key
         * @param {?} json
         * @return {?}
         */
        LocalstorageHelper.parseJSON = /**
         * @param {?} key
         * @param {?} json
         * @return {?}
         */
            function (key, json) {
                try {
                    return JSON.parse(json);
                }
                catch (e) {
                    console.warn("Parsing key \"" + key + "\" in localstorage failed, ignoring value."); // tslint:disable-line:no-console
                    return String(json);
                }
            };
        LocalstorageHelper.comparator = lodashEs.isEqual;
        return LocalstorageHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MemoryStorage = (function () {
        function MemoryStorage() {
            this.store = new Map();
        }
        Object.defineProperty(MemoryStorage.prototype, "length", {
            get: /**
             * @return {?}
             */ function () {
                return this.store.size;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MemoryStorage.prototype, "storage", {
            get: /**
             * @return {?}
             */ function () {
                return Array.from(this.store.entries()).reduce(function (acc, curr) {
                    return (__assign({}, acc, (_a = {}, _a[curr[0]] = curr[1], _a)));
                    var _a;
                }, {});
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} index
         * @return {?}
         */
        MemoryStorage.prototype.key = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return Array.from(this.store.keys())[index];
            };
        /**
         * @param {?} key
         * @return {?}
         */
        MemoryStorage.prototype.getItem = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.store.get(key);
            };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        MemoryStorage.prototype.setItem = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (key, value) {
                this.store.set(key, value);
            };
        /**
         * @param {?} key
         * @return {?}
         */
        MemoryStorage.prototype.removeItem = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                this.store.delete(key);
            };
        /**
         * @return {?}
         */
        MemoryStorage.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.store.clear();
            };
        return MemoryStorage;
    }());
    var /** @type {?} */ storage = new MemoryStorage();
    var memoryStorage = new Proxy(storage, {
        get: function (target, name, receiver) {
            if (name in target) {
                return Reflect.get(target, name, receiver);
            }
            if (name in target.__proto__) {
                return target.__proto__[name];
            }
            if (target.storage) {
                return target.getItem(name);
            }
        },
        ownKeys: function (target) {
            return Object.keys(target.storage); // return stored keys when storage keys are requested
        },
        getOwnPropertyDescriptor: function () {
            return {
                enumerable: true,
                configurable: true,
            };
        },
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LocalstorageService = (function () {
        function LocalstorageService(localstorageConfig, $window) {
            this.localstorageConfig = localstorageConfig;
            this.$window = $window;
            this.subscribers = new Map();
            // store a reference to the instance on the service so the decorator has access to instance methods
            this.instance = this;
            this.setStorage(localstorageConfig);
            this.validateStorage();
        }
        Object.defineProperty(LocalstorageService.prototype, "instance", {
            get: /**
             * @return {?}
             */ function () {
                return LocalstorageService.instance;
            },
            set: /**
             * @param {?} instance
             * @return {?}
             */ function (instance) {
                if (LocalstorageService.instance) {
                    return;
                }
                LocalstorageService.instance = instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} __0
         * @return {?}
         */
        LocalstorageService.prototype.setStorage = /**
         * @param {?=} __0
         * @return {?}
         */
            function (_a) {
                var _b = _a === void 0 ? {} : _a, storageType = _b.storageType, _c = _b.identifier, identifier = _c === void 0 ? '' : _c;
                this.storageType = this.verifyStorageType(storageType, 'localStorage');
                this.storage = this.storageType === 'memory' ? memoryStorage : this.$window[this.storageType];
                this.identifier = identifier;
            };
        /**
         * Browser Storage api
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        LocalstorageService.prototype.setItem = /**
         * Browser Storage api
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (key, value) {
                this.storage.setItem(key, JSON.stringify(value));
                this.updateSubscribers(key);
            };
        /**
         * @template T
         * @param {?} key
         * @return {?}
         */
        LocalstorageService.prototype.getItem = /**
         * @template T
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return LocalstorageHelper.parseJSON(key, this.storage.getItem(key));
            };
        /**
         * @param {?} key
         * @return {?}
         */
        LocalstorageService.prototype.removeItem = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                this.storage.removeItem(key);
                this.updateSubscribers(key);
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        LocalstorageService.prototype.clear = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                this.storage.clear.apply(this.storage, args);
                this.updateSubscribers();
            };
        /**
         * Decorator api
         * @template T
         * @param {?} selector
         * @param {?=} comparator
         * @return {?}
         */
        LocalstorageService.prototype.select = /**
         * Decorator api
         * @template T
         * @param {?} selector
         * @param {?=} comparator
         * @return {?}
         */
            function (selector, comparator) {
                if (comparator === void 0) {
                    comparator = LocalstorageHelper.comparator;
                }
                // if the selector is an array, add a subscription for the last item
                if (Array.isArray(selector)) {
                    return /** @type {?} */ (((this
                        .getChildSubscription(selector, this.select(selector[0]))
                        .distinctUntilChanged(comparator)))); // make sure it is only triggered when the value changes
                }
                return /** @type {?} */ (this
                    .addSubscriber(selector)
                    .distinctUntilChanged(comparator));
            };
        /**
         * @return {?}
         */
        LocalstorageService.prototype.clearSubscribers = /**
         * @return {?}
         */
            function () {
                this.subscribers.forEach(function (subscriber) {
                    subscriber.unsubscribe();
                });
            };
        /**
         * @template T
         * @return {?}
         */
        LocalstorageService.prototype.getStorageSnapshot = /**
         * @template T
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.storageType === 'memory') {
                    return /** @type {?} */ ({});
                }
                return /** @type {?} */ (__assign({}, Object.keys(this.storage).reduce(function (acc, prop) {
                    acc[prop] = LocalstorageHelper.parseJSON(prop, _this.storage[prop]);
                    return acc;
                }, {})));
            };
        /**
         * @template T
         * @param {?} selector
         * @return {?}
         */
        LocalstorageService.prototype.addSubscriber = /**
         * @template T
         * @param {?} selector
         * @return {?}
         */
            function (selector) {
                if (!this.subscribers.has(selector)) {
                    this.subscribers.set(selector, new BehaviorSubject.BehaviorSubject(LocalstorageHelper.select(this.getStorageSnapshot(), selector)));
                }
                return this.subscribers.get(selector);
            };
        /**
         * @return {?}
         */
        LocalstorageService.prototype.validateStorage = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ storage = this.getStorageSnapshot();
                if (!this.identifier && !storage['aui-storage']) {
                    return;
                }
                if (this.identifier === storage['aui-storage']) {
                    return;
                }
                this.clear();
                if (this.identifier) {
                    this.setItem('aui-storage', this.identifier);
                }
            };
        /**
         * @template T
         * @param {?} selector
         * @param {?} parentSubscription
         * @return {?}
         */
        LocalstorageService.prototype.getChildSubscription = /**
         * @template T
         * @param {?} selector
         * @param {?} parentSubscription
         * @return {?}
         */
            function (selector, parentSubscription) {
                var /** @type {?} */ subscriber = this.addSubscriber(selector);
                parentSubscription
                    .map((function (nextValue) {
                    return LocalstorageHelper.verifyPath(nextValue, selector.slice(1)); // filter out the selected path value
                }).bind(this))
                    .subscribe(function (nextValue) {
                    subscriber.next(nextValue);
                });
                return subscriber;
            };
        /**
         * @param {?=} key
         * @return {?}
         */
        LocalstorageService.prototype.updateSubscribers = /**
         * @param {?=} key
         * @return {?}
         */
            function (key) {
                var /** @type {?} */ storage = this.getStorageSnapshot();
                this.subscribers.forEach(function (subscriber, selector) {
                    if (key !== undefined && !LocalstorageHelper.keyMatches(key, selector)) {
                        return;
                    }
                    subscriber.next(LocalstorageHelper.select(storage, selector));
                });
            };
        /**
         * @param {?=} storageType
         * @param {?=} defaultValue
         * @return {?}
         */
        LocalstorageService.prototype.verifyStorageType = /**
         * @param {?=} storageType
         * @param {?=} defaultValue
         * @return {?}
         */
            function (storageType, defaultValue) {
                if (defaultValue === void 0) {
                    defaultValue = 'memory';
                }
                var /** @type {?} */ storageTypeExists = this.$window.hasOwnProperty(storageType) && this.$window[storageType] instanceof this.$window.Storage;
                if (storageTypeExists) {
                    return storageType;
                }
                // if storage type does not exist, verify defaultValue until found or memory was set as default
                return storageType === 'memory' ? 'memory' : this.verifyStorageType(defaultValue);
            };
        LocalstorageService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        LocalstorageService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [LOCALSTORAGE_CONFIG,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [utils.WINDOW,] }] }
            ];
        };
        return LocalstorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0 = DEFAULT_LOCALSTORAGE_CONFIG, ɵ1 = window;
    var LocalstorageModule = (function () {
        function LocalstorageModule(localstorageService) {
            this.localstorageService = localstorageService;
        }
        /**
         * @param {?=} localstorageConfig
         * @return {?}
         */
        LocalstorageModule.forRoot = /**
         * @param {?=} localstorageConfig
         * @return {?}
         */
            function (localstorageConfig) {
                if (localstorageConfig === void 0) {
                    localstorageConfig = DEFAULT_LOCALSTORAGE_CONFIG;
                }
                return {
                    ngModule: LocalstorageModule,
                    providers: [
                        { provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
                        { provide: utils.WINDOW, useValue: window },
                        LocalstorageService,
                    ],
                };
            };
        LocalstorageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        providers: [
                            { provide: LOCALSTORAGE_CONFIG, useValue: ɵ0 },
                            { provide: utils.WINDOW, useValue: ɵ1 },
                            LocalstorageService,
                        ],
                    },] },
        ];
        /** @nocollapse */
        LocalstorageModule.ctorParameters = function () {
            return [
                { type: LocalstorageService }
            ];
        };
        return LocalstorageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?=} selector
     * @param {?=} comparator
     * @return {?}
     */
    function storage$1(selector, comparator) {
        return function decorate(target, key) {
            var /** @type {?} */ bindingKey = selector;
            if (!selector) {
                bindingKey = (key.lastIndexOf('$') === key.length - 1) ? key.substring(0, key.length - 1) : key;
            }
            /**
             * @return {?}
             */
            function getter() {
                return LocalstorageService.instance.select(bindingKey, comparator);
            }
            // Replace decorated property with a getter that returns the observable.
            delete target[key];
            Object.defineProperty(target, key, {
                get: getter,
                enumerable: true,
                configurable: true,
            });
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LocalstorageReduxPlugin = (function () {
        function LocalstorageReduxPlugin(ngRedux, localstorageService) {
            this.ngRedux = ngRedux;
            this.localstorageService = localstorageService;
            this.subscribers = new Map();
        }
        /**
         * @template T
         * @param {?=} selectors
         * @return {?}
         */
        LocalstorageReduxPlugin.prototype.enhancer = /**
         * @template T
         * @param {?=} selectors
         * @return {?}
         */
            function (selectors) {
                var /** @type {?} */ storedState = this.selectFromState(selectors);
                this.subscribe(selectors);
                return function (createStore) {
                    return function (reducer, initialState) {
                        return createStore(reducer, __assign({}, initialState, storedState));
                    };
                };
            };
        /**
         * @param {?=} selectors
         * @return {?}
         */
        LocalstorageReduxPlugin.prototype.subscribe = /**
         * @param {?=} selectors
         * @return {?}
         */
            function (selectors) {
                var _this = this;
                this.ngRedux.select()
                    .filter(function (store$$1) { return !!store$$1; })
                    .first()
                    .subscribe(function (store$$1) {
                    if (!selectors) {
                        _this.subscribeSelector('reduxState');
                        return;
                    }
                    selectors.forEach(function (selector) { return _this.subscribeSelector(selector); });
                });
            };
        /**
         * @param {?} selector
         * @return {?}
         */
        LocalstorageReduxPlugin.prototype.subscribeSelector = /**
         * @param {?} selector
         * @return {?}
         */
            function (selector) {
                var _this = this;
                if (!selector) {
                    return;
                }
                var /** @type {?} */ subscriber = this.subscribers.get(selector);
                if (subscriber) {
                    subscriber.unsubscribe();
                }
                this.subscribers.set(selector, /** @type {?} */ (this.ngRedux.subscribe(function () {
                    var /** @type {?} */ selectorKey = Array.isArray(selector) ? selector.join('.') : String(selector);
                    var /** @type {?} */ stored = _this.localstorageService.getItem(selectorKey);
                    var /** @type {?} */ newValues = selector === 'reduxState' ? _this.ngRedux.getState() :
                        LocalstorageHelper.select(_this.ngRedux.getState(), selector);
                    if (lodashEs.isEqual(stored, newValues)) {
                        return;
                    }
                    _this.localstorageService.setItem(selectorKey, newValues);
                })));
            };
        /**
         * @param {?=} selectors
         * @return {?}
         */
        LocalstorageReduxPlugin.prototype.selectFromState = /**
         * @param {?=} selectors
         * @return {?}
         */
            function (selectors) {
                var _this = this;
                if (!selectors || !selectors.length) {
                    return this.localstorageService.getItem('reduxState');
                }
                return selectors.reduce(function (acc, selector) {
                    var /** @type {?} */ storedData = LocalstorageHelper.select(_this.localstorageService.getStorageSnapshot(), selector);
                    var /** @type {?} */ pathSelector = Array.isArray(selector) ? selector : [selector];
                    LocalstorageHelper.updateOrCreatePath(acc, pathSelector, storedData);
                    return acc;
                }, {});
            };
        LocalstorageReduxPlugin.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        LocalstorageReduxPlugin.ctorParameters = function () {
            return [
                { type: store.NgRedux },
                { type: LocalstorageService }
            ];
        };
        return LocalstorageReduxPlugin;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LocalstorageStoreModule = (function () {
        function LocalstorageStoreModule() {
        }
        LocalstorageStoreModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [store.NgReduxModule],
                        providers: [LocalstorageReduxPlugin],
                    },] },
        ];
        return LocalstorageStoreModule;
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

    exports.LocalstorageModule = LocalstorageModule;
    exports.LocalstorageHelper = LocalstorageHelper;
    exports.LocalstorageService = LocalstorageService;
    exports.LOCALSTORAGE_CONFIG = LOCALSTORAGE_CONFIG;
    exports.DEFAULT_LOCALSTORAGE_CONFIG = DEFAULT_LOCALSTORAGE_CONFIG;
    exports.storage = storage$1;
    exports.LocalstorageStoreModule = LocalstorageStoreModule;
    exports.LocalstorageReduxPlugin = LocalstorageReduxPlugin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9sb2NhbHN0b3JhZ2UvbGliL2xvY2Fsc3RvcmFnZS9sb2NhbHN0b3JhZ2UuY29uZi50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmhlbHBlci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLnBvbHlmaWxsLnRzIiwibmc6Ly9sb2NhbHN0b3JhZ2UvbGliL2xvY2Fsc3RvcmFnZS9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLm1vZHVsZS50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmRlY29yYXRvci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2Uvc3RvcmUvbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5lbmhhbmNlci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2Uvc3RvcmUvc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKG9bbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH07IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl07XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxufSIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VDb25maWcgfSBmcm9tICcuL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBMT0NBTFNUT1JBR0VfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxMb2NhbHN0b3JhZ2VDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuPExvY2Fsc3RvcmFnZUNvbmZpZz4oJ2xvY2Fsc3RvcmFnZUNvbmZpZycpO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0NBTFNUT1JBR0VfQ09ORklHOiBMb2NhbHN0b3JhZ2VDb25maWcgPSB7XG5cdHN0b3JhZ2VUeXBlOiAnbG9jYWxTdG9yYWdlJyxcbn07XG4iLCJpbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFBhdGhTZWxlY3RvciwgU2VsZWN0b3IgfSBmcm9tICcuL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2VIZWxwZXIge1xuXHRzdGF0aWMgY29tcGFyYXRvciA9IGlzRXF1YWw7XG5cblx0Ly8gc2VsZWN0IGRhdGEgZnJvbSB0aGUgc3RvcmFnZSBmb3IgdGhlIHByb3ZpZGVkIHNlbGVjdG9yXG5cdHN0YXRpYyBzZWxlY3Qoc3RvcmFnZTogYW55LCBzZWxlY3RvcjogU2VsZWN0b3IpOiBhbnkge1xuXHRcdGlmICghc3RvcmFnZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHNlbGVjdG9yKHN0b3JhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmVyaWZ5UGF0aChzdG9yYWdlLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmVyaWZ5UGF0aChzdG9yYWdlLCBbc2VsZWN0b3JdKTtcblx0fVxuXG5cdC8vIHZlcmlmeSB0aGUga2V5IG1hdGNoZXMgd2l0aCB0aGUgc2VsZWN0b3Jcblx0Ly8gcHJvcGVydHkgc2VsZWN0b3I6IGNvbXBhcmUgdGhlIGtleSB3aXRoIHRoZSBzZWxlY3RvclxuXHQvLyBwYXRoIHNlbGVjdG9yOiB2ZXJpZnkgdGhlIGtleSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBwYXRoXG5cdC8vIGZ1bmN0aW9uIHNlbGVjdG9yOiBhbHdheXMgcmV0dXJuIHRydWVcblx0c3RhdGljIGtleU1hdGNoZXMoa2V5OiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3Rvcik6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGtleU1hdGNoZXNTZWxlY3RvciA9IGtleSA9PT0gc2VsZWN0b3I7XG5cdFx0Y29uc3Qga2V5SW5TZWxlY3RvciA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpID8gc2VsZWN0b3IuaW5kZXhPZihrZXkpID49IDAgOiBmYWxzZTtcblx0XHRjb25zdCBzZWxlY3RvcklzRnVuY3Rpb24gPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbic7XG5cblx0XHRyZXR1cm4ga2V5TWF0Y2hlc1NlbGVjdG9yIHx8IGtleUluU2VsZWN0b3IgfHwgc2VsZWN0b3JJc0Z1bmN0aW9uO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IGEgcGF0aCBleGlzdHMgaW4gYW4gb2JqZWN0XG5cdHN0YXRpYyB2ZXJpZnlQYXRoKGRhdGE/OiBhbnksIHNlbGVjdG9yPzogUGF0aFNlbGVjdG9yKSB7XG5cdFx0aWYgKCFkYXRhIHx8ICFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGN1cnIgPSBkYXRhO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aWYgKGN1cnIuaGFzT3duUHJvcGVydHkoc2VsZWN0b3JbaV0pKSB7XG5cdFx0XHRcdGN1cnIgPSBjdXJyW3NlbGVjdG9yW2ldXTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyO1xuXHR9XG5cblx0c3RhdGljIHVwZGF0ZU9yQ3JlYXRlUGF0aChzdGF0ZT86IGFueSwgc2VsZWN0b3I/OiBQYXRoU2VsZWN0b3IsIG5ld1ZhbHVlPzogYW55KSB7XG5cdFx0aWYgKCFzdGF0ZSB8fCAhc2VsZWN0b3IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyID0gc3RhdGU7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpZiAoIWN1cnIuaGFzT3duUHJvcGVydHkoc2VsZWN0b3JbaV0pKSB7XG5cdFx0XHRcdGN1cnJbc2VsZWN0b3JbaV1dID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpID09PSBzZWxlY3Rvci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyID0gY3VycltzZWxlY3RvcltpXV07XG5cdFx0fVxuXG5cdFx0Y3VycltzZWxlY3RvcltpXV0gPSBuZXdWYWx1ZTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdHN0YXRpYyBwYXJzZUpTT04oa2V5OiBzdHJpbmcsIGpzb246IHN0cmluZyk6IGFueSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybihgUGFyc2luZyBrZXkgXCIke2tleX1cIiBpbiBsb2NhbHN0b3JhZ2UgZmFpbGVkLCBpZ25vcmluZyB2YWx1ZS5gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1jb25zb2xlXG5cdFx0XHRyZXR1cm4gU3RyaW5nKGpzb24pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JhZ2Uge1xuXHRwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNpemU7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IHN0b3JhZ2UoKTogYW55IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0b3JlLmVudHJpZXMoKSkucmVkdWNlKChhY2MsIGN1cnI6IFtzdHJpbmcsIGFueV0pID0+ICh7XG5cdFx0XHQuLi5hY2MsXG5cdFx0XHRbY3VyclswXV06IGN1cnJbMV0sXG5cdFx0fSksIHt9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RvcmUgPSBuZXcgTWFwKCk7XG5cblx0cHVibGljIGtleShpbmRleDogbnVtYmVyKTogYW55IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0b3JlLmtleXMoKSlbaW5kZXhdO1xuXHR9XG5cblx0cHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLmdldChrZXkpO1xuXHR9XG5cblx0cHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlLnNldChrZXksIHZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yZS5kZWxldGUoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlLmNsZWFyKCk7XG5cdH1cbn1cblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBNZW1vcnlTdG9yYWdlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm94eShzdG9yYWdlLCB7XG5cdGdldDogZnVuY3Rpb24gKHRhcmdldDogYW55LCBuYW1lLCByZWNlaXZlcikge1xuXHRcdGlmIChuYW1lIGluIHRhcmdldCkge1xuXHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpO1xuXHRcdH1cblxuXHRcdGlmIChuYW1lIGluIHRhcmdldC5fX3Byb3RvX18pIHtcblx0XHRcdHJldHVybiB0YXJnZXQuX19wcm90b19fW25hbWVdO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQuc3RvcmFnZSkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5nZXRJdGVtKG5hbWUpO1xuXHRcdH1cblx0fSxcblx0b3duS2V5czogZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldC5zdG9yYWdlKTsgLy8gcmV0dXJuIHN0b3JlZCBrZXlzIHdoZW4gc3RvcmFnZSBrZXlzIGFyZSByZXF1ZXN0ZWRcblx0fSxcblx0Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLCAvLyBlbnN1cmUgc3RvcmVkIGtleXMga2FuIGJlIGl0ZXJhdGVkXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fTtcblx0fSxcbn0pO1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBMT0NBTFNUT1JBR0VfQ09ORklHLCBERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUcgfSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UuY29uZic7XG5pbXBvcnQgeyBTZWxlY3RvciwgUGF0aFNlbGVjdG9yLCBDb21wYXJhdG9yLCBMb2NhbHN0b3JhZ2VDb25maWcgfSBmcm9tICcuLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlSGVscGVyIH0gZnJvbSAnLi4vbG9jYWxzdG9yYWdlLmhlbHBlcic7XG5pbXBvcnQgbWVtb3J5U3RvcmFnZSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UucG9seWZpbGwnO1xuXG5cbi8vIEBkeW5hbWljXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlU2VydmljZSB7XG5cdHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2U7XG5cblx0cHVibGljIGdldCBpbnN0YW5jZSgpOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlIHtcblx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgaW5zdGFuY2UoaW5zdGFuY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UpIHtcblx0XHRpZiAoTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdExvY2Fsc3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBzdG9yYWdlVHlwZTogc3RyaW5nO1xuXHRwdWJsaWMgaWRlbnRpZmllcjogc3RyaW5nO1xuXHRwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2U7XG5cdHByaXZhdGUgc3Vic2NyaWJlcnM6IE1hcDxTZWxlY3RvciwgQmVoYXZpb3JTdWJqZWN0PGFueT4+ID0gbmV3IE1hcDxTZWxlY3RvciwgQmVoYXZpb3JTdWJqZWN0PGFueT4+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChMT0NBTFNUT1JBR0VfQ09ORklHKSBwcml2YXRlIGxvY2Fsc3RvcmFnZUNvbmZpZyxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSAkd2luZG93XG5cdCkge1xuXHRcdC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvbiB0aGUgc2VydmljZSBzbyB0aGUgZGVjb3JhdG9yIGhhcyBhY2Nlc3MgdG8gaW5zdGFuY2UgbWV0aG9kc1xuXHRcdHRoaXMuaW5zdGFuY2UgPSB0aGlzO1xuXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGxvY2Fsc3RvcmFnZUNvbmZpZyk7XG5cdFx0dGhpcy52YWxpZGF0ZVN0b3JhZ2UoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRTdG9yYWdlKHtcblx0XHRzdG9yYWdlVHlwZSxcblx0XHRpZGVudGlmaWVyID0gJycsXG5cdH06IExvY2Fsc3RvcmFnZUNvbmZpZyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlVHlwZSA9IHRoaXMudmVyaWZ5U3RvcmFnZVR5cGUoc3RvcmFnZVR5cGUsICdsb2NhbFN0b3JhZ2UnKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VUeXBlID09PSAnbWVtb3J5JyA/IG1lbW9yeVN0b3JhZ2UgOiB0aGlzLiR3aW5kb3dbdGhpcy5zdG9yYWdlVHlwZV07XG5cblx0XHR0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJyb3dzZXIgU3RvcmFnZSBhcGlcblx0ICovXG5cdHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRJdGVtPFQgPSBhbnk+KGtleTogc3RyaW5nKTogVCB7XG5cdFx0cmV0dXJuIExvY2Fsc3RvcmFnZUhlbHBlci5wYXJzZUpTT04oa2V5LCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHR0aGlzLnVwZGF0ZVN1YnNjcmliZXJzKGtleSk7XG5cdH1cblxuXHRwdWJsaWMgY2xlYXIoLi4uYXJncyk6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmFnZS5jbGVhci5hcHBseSh0aGlzLnN0b3JhZ2UsIGFyZ3MpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNvcmF0b3IgYXBpXG5cdCAqL1xuXHRwdWJsaWMgc2VsZWN0PFQgPSBhbnk+KHNlbGVjdG9yOiBTZWxlY3RvciwgY29tcGFyYXRvcjogQ29tcGFyYXRvciA9IExvY2Fsc3RvcmFnZUhlbHBlci5jb21wYXJhdG9yKTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHQvLyBpZiB0aGUgc2VsZWN0b3IgaXMgYW4gYXJyYXksIGFkZCBhIHN1YnNjcmlwdGlvbiBmb3IgdGhlIGxhc3QgaXRlbVxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuICh0aGlzXG5cdFx0XHRcdC5nZXRDaGlsZFN1YnNjcmlwdGlvbihzZWxlY3RvciwgdGhpcy5zZWxlY3Qoc2VsZWN0b3JbMF0pKVxuXHRcdFx0XHQuZGlzdGluY3RVbnRpbENoYW5nZWQoY29tcGFyYXRvcikgYXMgYW55KSBhcyBCZWhhdmlvclN1YmplY3Q8VD47IC8vIG1ha2Ugc3VyZSBpdCBpcyBvbmx5IHRyaWdnZXJlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5hZGRTdWJzY3JpYmVyPFQ+KHNlbGVjdG9yKVxuXHRcdFx0LmRpc3RpbmN0VW50aWxDaGFuZ2VkPFQ+KGNvbXBhcmF0b3IpIGFzIEJlaGF2aW9yU3ViamVjdDxUPjtcblx0fVxuXG5cdHB1YmxpYyBjbGVhclN1YnNjcmliZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHtcblx0XHRcdHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIGdldCBhIGNsb25lIG9mIHRoZSBjdXJyZW50IHN0b3JlZCB2YWx1ZXNcblx0cHVibGljIGdldFN0b3JhZ2VTbmFwc2hvdDxUID0gYW55PigpOiBUIHtcblx0XHRpZiAodGhpcy5zdG9yYWdlVHlwZSA9PT0gJ21lbW9yeScpIHtcblx0XHRcdHJldHVybiB7fSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiB7Li4uT2JqZWN0LmtleXModGhpcy5zdG9yYWdlKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuXHRcdFx0YWNjW3Byb3BdID0gTG9jYWxzdG9yYWdlSGVscGVyLnBhcnNlSlNPTihwcm9wLCB0aGlzLnN0b3JhZ2VbcHJvcF0pO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9LCB7fSl9IGFzIFQ7XG5cdH1cblxuXHQvLyByZXR1cm4gb3IgY3JlYXRlIGEgYmVoYXZpb3JzdWJqZWN0IGZyb20gdGhlIHNlbGVjdGVkIHZhbHVlXG5cdHB1YmxpYyBhZGRTdWJzY3JpYmVyPFQgPSBhbnk+KHNlbGVjdG9yOiBTZWxlY3Rvcik6IEJlaGF2aW9yU3ViamVjdDxUPiB7XG5cdFx0aWYgKCF0aGlzLnN1YnNjcmliZXJzLmhhcyhzZWxlY3RvcikpIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KHNlbGVjdG9yLCBuZXcgQmVoYXZpb3JTdWJqZWN0PFQ+KExvY2Fsc3RvcmFnZUhlbHBlci5zZWxlY3QodGhpcy5nZXRTdG9yYWdlU25hcHNob3QoKSwgc2VsZWN0b3IpKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuZ2V0KHNlbGVjdG9yKTtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVTdG9yYWdlKCk6IHZvaWQge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2VTbmFwc2hvdCgpO1xuXG5cdFx0aWYgKCF0aGlzLmlkZW50aWZpZXIgJiYgIXN0b3JhZ2VbJ2F1aS1zdG9yYWdlJ10pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pZGVudGlmaWVyID09PSBzdG9yYWdlWydhdWktc3RvcmFnZSddKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jbGVhcigpO1xuXG5cdFx0aWYgKHRoaXMuaWRlbnRpZmllcikge1xuXHRcdFx0dGhpcy5zZXRJdGVtKCdhdWktc3RvcmFnZScsIHRoaXMuaWRlbnRpZmllcik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gZmV0Y2ggb3IgY3JlYXRlIGEgc3Vic2NyaXB0aW9uIGZvciB0aGUgcGFyZW50XG5cdC8vIHN1YnNjcmliZSB0byBzYWlkIHN1YnNjcmlwdGlvbiBhbmQgcmV0dXJuIGEgbmV3IHN1YnNjcmliZXIgZnJvbSB0aGUgdmFsdWVcblx0cHJpdmF0ZSBnZXRDaGlsZFN1YnNjcmlwdGlvbjxUID0gYW55PihzZWxlY3RvcjogUGF0aFNlbGVjdG9yLCBwYXJlbnRTdWJzY3JpcHRpb246IEJlaGF2aW9yU3ViamVjdDxhbnk+KTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHRjb25zdCBzdWJzY3JpYmVyID0gdGhpcy5hZGRTdWJzY3JpYmVyPFQ+KHNlbGVjdG9yKTtcblxuXHRcdHBhcmVudFN1YnNjcmlwdGlvblxuXHRcdFx0Lm1hcCgobmV4dFZhbHVlID0+IHtcblx0XHRcdFx0cmV0dXJuIExvY2Fsc3RvcmFnZUhlbHBlci52ZXJpZnlQYXRoKG5leHRWYWx1ZSwgc2VsZWN0b3Iuc2xpY2UoMSkpOyAvLyBmaWx0ZXIgb3V0IHRoZSBzZWxlY3RlZCBwYXRoIHZhbHVlXG5cdFx0XHR9KS5iaW5kKHRoaXMpKVxuXHRcdFx0LnN1YnNjcmliZSgobmV4dFZhbHVlOiBUKSA9PiB7XG5cdFx0XHRcdHN1YnNjcmliZXIubmV4dChuZXh0VmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gc3Vic2NyaWJlcjtcblx0fVxuXG5cdC8vIHVwZGF0ZSBhbGwgc3Vic2NyaWJlcnNcblx0Ly8gaWYgYSBrZXkgaXMgcHJvdmlkZWQsIG1hdGNoaW5nIHdpbGwgcHJldmVudCB1c2VsZXNzIHVwZGF0ZXNcblx0cHJpdmF0ZSB1cGRhdGVTdWJzY3JpYmVycyhrZXk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlU25hcHNob3QoKTtcblx0XHR0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+LCBzZWxlY3RvcjogU2VsZWN0b3IpID0+IHtcblx0XHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZCAmJiAhTG9jYWxzdG9yYWdlSGVscGVyLmtleU1hdGNoZXMoa2V5LCBzZWxlY3RvcikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRzdWJzY3JpYmVyLm5leHQoTG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdChzdG9yYWdlLCBzZWxlY3RvcikpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IHRoZSBwcmVmZXJlZCBzdG9yYWdldHlwZSBleGlzdHMsIGZhbGwgYmFjayB0byBcImxvY2FsU3RvcmFnZcOiwoDCnCBvciBtZW1vcnlcblx0cHJpdmF0ZSB2ZXJpZnlTdG9yYWdlVHlwZShzdG9yYWdlVHlwZT86IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSAnbWVtb3J5Jyk6IHN0cmluZyB7XG5cdFx0Y29uc3Qgc3RvcmFnZVR5cGVFeGlzdHMgPSB0aGlzLiR3aW5kb3cuaGFzT3duUHJvcGVydHkoc3RvcmFnZVR5cGUpICYmIHRoaXMuJHdpbmRvd1tzdG9yYWdlVHlwZV0gaW5zdGFuY2VvZiB0aGlzLiR3aW5kb3cuU3RvcmFnZTtcblxuXHRcdGlmIChzdG9yYWdlVHlwZUV4aXN0cykge1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2VUeXBlO1xuXHRcdH1cblxuXHRcdC8vIGlmIHN0b3JhZ2UgdHlwZSBkb2VzIG5vdCBleGlzdCwgdmVyaWZ5IGRlZmF1bHRWYWx1ZSB1bnRpbCBmb3VuZCBvciBtZW1vcnkgd2FzIHNldCBhcyBkZWZhdWx0XG5cdFx0cmV0dXJuIHN0b3JhZ2VUeXBlID09PSAnbWVtb3J5JyA/ICdtZW1vcnknIDogdGhpcy52ZXJpZnlTdG9yYWdlVHlwZShkZWZhdWx0VmFsdWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7XG5cdExvY2Fsc3RvcmFnZUNvbmZpZyxcbn0gZnJvbSAnLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHtcblx0TG9jYWxzdG9yYWdlU2VydmljZSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1xuXHRMT0NBTFNUT1JBR0VfQ09ORklHLFxuXHRERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUcsXG59IGZyb20gJy4vbG9jYWxzdG9yYWdlLmNvbmYnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTE9DQUxTVE9SQUdFX0NPTkZJRywgdXNlVmFsdWU6IERFRkFVTFRfTE9DQUxTVE9SQUdFX0NPTkZJRyB9LFxuXHRcdHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG5cdFx0TG9jYWxzdG9yYWdlU2VydmljZSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlTW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoXG5cdFx0bG9jYWxzdG9yYWdlQ29uZmlnOiBMb2NhbHN0b3JhZ2VDb25maWcgPSBERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUdcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBMb2NhbHN0b3JhZ2VNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBMT0NBTFNUT1JBR0VfQ09ORklHLCB1c2VWYWx1ZTogbG9jYWxzdG9yYWdlQ29uZmlnIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG5cdFx0XHRcdExvY2Fsc3RvcmFnZVNlcnZpY2UsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2Vcblx0KSB7fVxufVxuIiwiaW1wb3J0IHsgU2VsZWN0b3IsIENvbXBhcmF0b3IsIFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSAnLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZShzZWxlY3Rvcj86IFNlbGVjdG9yLCBjb21wYXJhdG9yPzogQ29tcGFyYXRvcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcblxuXHRyZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0bGV0IGJpbmRpbmdLZXkgPSBzZWxlY3Rvcjtcblx0XHRpZiAoIXNlbGVjdG9yKSB7XG5cdFx0XHRiaW5kaW5nS2V5ID0gKGtleS5sYXN0SW5kZXhPZignJCcpID09PSBrZXkubGVuZ3RoIC0gMSkgPyBrZXkuc3Vic3RyaW5nKDAsIGtleS5sZW5ndGggLSAxKSA6IGtleTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXR0ZXIoKSB7XG5cdFx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZS5zZWxlY3QoYmluZGluZ0tleSwgY29tcGFyYXRvcik7XG5cdFx0fVxuXG5cdFx0Ly8gUmVwbGFjZSBkZWNvcmF0ZWQgcHJvcGVydHkgd2l0aCBhIGdldHRlciB0aGF0IHJldHVybnMgdGhlIG9ic2VydmFibGUuXG5cdFx0ZGVsZXRlIHRhcmdldFtrZXldO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG5cdFx0XHRnZXQ6IGdldHRlcixcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fSk7XG5cdH07XG59XG4iLCJpbXBvcnQgeyBSZWR1Y2VyLCBTdG9yZUNyZWF0b3IsIFN0b3JlRW5oYW5jZXIsIFN0b3JlLCBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTmdSZWR1eCB9IGZyb20gJ0Bhbmd1bGFyLXJlZHV4L3N0b3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlyc3QnO1xuXG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgTG9jYWxzdG9yYWdlSGVscGVyIH0gZnJvbSAnLi4vLi4vbG9jYWxzdG9yYWdlLmhlbHBlcic7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvcGVydHlTZWxlY3RvciwgUGF0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvbG9jYWxzdG9yYWdlLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2Fsc3RvcmFnZVJlZHV4UGx1Z2luIHtcblx0cHJpdmF0ZSBzdG9yZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3IsIFN1YnNjcmlwdGlvbj4gPSBuZXcgTWFwPFByb3BlcnR5U2VsZWN0b3J8UGF0aFNlbGVjdG9yLCBTdWJzY3JpcHRpb24+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ1JlZHV4OiBOZ1JlZHV4PGFueT4sXG5cdFx0cHJpdmF0ZSBsb2NhbHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlXG5cdCkge31cblxuXHRlbmhhbmNlcjxUID0gYW55PihzZWxlY3RvcnM/OiBBcnJheTxQcm9wZXJ0eVNlbGVjdG9yfFBhdGhTZWxlY3Rvcj4pOiBTdG9yZUVuaGFuY2VyPFQ+IHtcblx0XHRjb25zdCBzdG9yZWRTdGF0ZSA9IHRoaXMuc2VsZWN0RnJvbVN0YXRlKHNlbGVjdG9ycyk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShzZWxlY3RvcnMpO1xuXG5cdFx0cmV0dXJuIChjcmVhdGVTdG9yZTogU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvcjxUPik6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8VD4gPT4gKFxuXHRcdFx0cmVkdWNlcjogUmVkdWNlcjxUPixcblx0XHRcdGluaXRpYWxTdGF0ZTogYW55XG5cdFx0KTogU3RvcmU8VD4gPT4ge1xuXHRcdFx0cmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHtcblx0XHRcdFx0Li4uaW5pdGlhbFN0YXRlLFxuXHRcdFx0XHQuLi5zdG9yZWRTdGF0ZSxcblx0XHRcdH0pO1xuXHRcdH07XG5cdH1cblxuXHRzdWJzY3JpYmUoc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvciB8IFBhdGhTZWxlY3Rvcj4pOiB2b2lkIHtcblx0XHR0aGlzLm5nUmVkdXguc2VsZWN0KClcblx0XHRcdC5maWx0ZXIoc3RvcmUgPT4gISFzdG9yZSlcblx0XHRcdC5maXJzdCgpXG5cdFx0XHQuc3Vic2NyaWJlKHN0b3JlID0+IHtcblx0XHRcdFx0aWYgKCFzZWxlY3RvcnMpIHtcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmliZVNlbGVjdG9yKCdyZWR1eFN0YXRlJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gdGhpcy5zdWJzY3JpYmVTZWxlY3RvcihzZWxlY3RvcikpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVNlbGVjdG9yKHNlbGVjdG9yOiBQcm9wZXJ0eVNlbGVjdG9yIHwgUGF0aFNlbGVjdG9yKTogdm9pZCB7XG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1YnNjcmliZXIgPSB0aGlzLnN1YnNjcmliZXJzLmdldChzZWxlY3Rvcik7XG5cblx0XHRpZiAoc3Vic2NyaWJlcikge1xuXHRcdFx0c3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KHNlbGVjdG9yLCB0aGlzLm5nUmVkdXguc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdG9yS2V5ID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3Rvci5qb2luKCcuJykgOiBTdHJpbmcoc2VsZWN0b3IpO1xuXHRcdFx0Y29uc3Qgc3RvcmVkID0gdGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oc2VsZWN0b3JLZXkpO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWVzID0gc2VsZWN0b3IgPT09ICdyZWR1eFN0YXRlJyA/IHRoaXMubmdSZWR1eC5nZXRTdGF0ZSgpIDpcblx0XHRcdFx0TG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdCh0aGlzLm5nUmVkdXguZ2V0U3RhdGUoKSwgc2VsZWN0b3IpO1xuXG5cdFx0XHRpZiAoaXNFcXVhbChzdG9yZWQsIG5ld1ZhbHVlcykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbShzZWxlY3RvcktleSwgbmV3VmFsdWVzKTtcblx0XHR9KSBhcyBhbnkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RGcm9tU3RhdGUoc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3I+KTogYW55IHtcblx0XHRpZiAoIXNlbGVjdG9ycyB8fCAhc2VsZWN0b3JzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRJdGVtKCdyZWR1eFN0YXRlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGVjdG9ycy5yZWR1Y2UoKGFjYywgc2VsZWN0b3IpID0+IHtcblx0XHRcdGNvbnN0IHN0b3JlZERhdGEgPSBMb2NhbHN0b3JhZ2VIZWxwZXIuc2VsZWN0KHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlU25hcHNob3QoKSwgc2VsZWN0b3IpO1xuXHRcdFx0Y29uc3QgcGF0aFNlbGVjdG9yID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3RvciA6IFtzZWxlY3Rvcl07XG5cblx0XHRcdExvY2Fsc3RvcmFnZUhlbHBlci51cGRhdGVPckNyZWF0ZVBhdGgoYWNjLCBwYXRoU2VsZWN0b3IsIHN0b3JlZERhdGEpO1xuXG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH0sIHt9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVkdXhNb2R1bGUgfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VSZWR1eFBsdWdpbiB9IGZyb20gJy4vbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5lbmhhbmNlcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgTmdSZWR1eE1vZHVsZSBdLFxuXHRwcm92aWRlcnM6IFsgTG9jYWxzdG9yYWdlUmVkdXhQbHVnaW4gXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlU3RvcmVNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsImlzRXF1YWwiLCJ0c2xpYl8xLl9fYXNzaWduIiwiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIldJTkRPVyIsIk5nTW9kdWxlIiwic3RvcmUiLCJOZ1JlZHV4IiwiTmdSZWR1eE1vZHVs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