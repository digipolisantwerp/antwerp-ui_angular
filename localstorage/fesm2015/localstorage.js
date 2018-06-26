import { InjectionToken, Inject, Injectable, NgModule } from '@angular/core';
import { isEqual } from 'lodash-es';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ LOCALSTORAGE_CONFIG = new InjectionToken('localstorageConfig');
const /** @type {?} */ DEFAULT_LOCALSTORAGE_CONFIG = {
    storageType: 'localStorage',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LocalstorageHelper {
    /**
     * @param {?} storage
     * @param {?} selector
     * @return {?}
     */
    static select(storage, selector) {
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
    }
    /**
     * @param {?} key
     * @param {?} selector
     * @return {?}
     */
    static keyMatches(key, selector) {
        const /** @type {?} */ keyMatchesSelector = key === selector;
        const /** @type {?} */ keyInSelector = Array.isArray(selector) ? selector.indexOf(key) >= 0 : false;
        const /** @type {?} */ selectorIsFunction = typeof selector === 'function';
        return keyMatchesSelector || keyInSelector || selectorIsFunction;
    }
    /**
     * @param {?=} data
     * @param {?=} selector
     * @return {?}
     */
    static verifyPath(data, selector) {
        if (!data || !selector) {
            return null;
        }
        let /** @type {?} */ curr = data;
        for (let /** @type {?} */ i = 0; i < selector.length; i += 1) {
            if (curr.hasOwnProperty(selector[i])) {
                curr = curr[selector[i]];
                continue;
            }
            return null;
        }
        return curr;
    }
    /**
     * @param {?=} state
     * @param {?=} selector
     * @param {?=} newValue
     * @return {?}
     */
    static updateOrCreatePath(state, selector, newValue) {
        if (!state || !selector) {
            return null;
        }
        let /** @type {?} */ curr = state;
        let /** @type {?} */ i = 0;
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
    }
    /**
     * @param {?} key
     * @param {?} json
     * @return {?}
     */
    static parseJSON(key, json) {
        try {
            return JSON.parse(json);
        }
        catch (/** @type {?} */ e) {
            console.warn(`Parsing key "${key}" in localstorage failed, ignoring value.`); // tslint:disable-line:no-console
            return String(json);
        }
    }
}
LocalstorageHelper.comparator = isEqual;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MemoryStorage {
    constructor() {
        this.store = new Map();
    }
    /**
     * @return {?}
     */
    get length() {
        return this.store.size;
    }
    /**
     * @return {?}
     */
    get storage() {
        return Array.from(this.store.entries()).reduce((acc, curr) => (Object.assign({}, acc, { [curr[0]]: curr[1] })), {});
    }
    /**
     * @param {?} index
     * @return {?}
     */
    key(index) {
        return Array.from(this.store.keys())[index];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        return this.store.get(key);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        this.store.set(key, value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        this.store.delete(key);
    }
    /**
     * @return {?}
     */
    clear() {
        this.store.clear();
    }
}
const /** @type {?} */ storage = new MemoryStorage();
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
    getOwnPropertyDescriptor() {
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
class LocalstorageService {
    /**
     * @param {?} localstorageConfig
     * @param {?} $window
     */
    constructor(localstorageConfig, $window) {
        this.localstorageConfig = localstorageConfig;
        this.$window = $window;
        this.subscribers = new Map();
        // store a reference to the instance on the service so the decorator has access to instance methods
        this.instance = this;
        this.setStorage(localstorageConfig);
        this.validateStorage();
    }
    /**
     * @return {?}
     */
    get instance() {
        return LocalstorageService.instance;
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    set instance(instance) {
        if (LocalstorageService.instance) {
            return;
        }
        LocalstorageService.instance = instance;
    }
    /**
     * @param {?=} __0
     * @return {?}
     */
    setStorage({ storageType, identifier = '', } = {}) {
        this.storageType = this.verifyStorageType(storageType, 'localStorage');
        this.storage = this.storageType === 'memory' ? memoryStorage : this.$window[this.storageType];
        this.identifier = identifier;
    }
    /**
     * Browser Storage api
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
        this.updateSubscribers(key);
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        return LocalstorageHelper.parseJSON(key, this.storage.getItem(key));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        this.storage.removeItem(key);
        this.updateSubscribers(key);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    clear(...args) {
        this.storage.clear.apply(this.storage, args);
        this.updateSubscribers();
    }
    /**
     * Decorator api
     * @template T
     * @param {?} selector
     * @param {?=} comparator
     * @return {?}
     */
    select(selector, comparator = LocalstorageHelper.comparator) {
        // if the selector is an array, add a subscription for the last item
        if (Array.isArray(selector)) {
            return /** @type {?} */ ((/** @type {?} */ (this
                .getChildSubscription(selector, this.select(selector[0]))
                .distinctUntilChanged(comparator)))); // make sure it is only triggered when the value changes
        }
        return /** @type {?} */ (this
            .addSubscriber(selector)
            .distinctUntilChanged(comparator));
    }
    /**
     * @return {?}
     */
    clearSubscribers() {
        this.subscribers.forEach(subscriber => {
            subscriber.unsubscribe();
        });
    }
    /**
     * @template T
     * @return {?}
     */
    getStorageSnapshot() {
        if (this.storageType === 'memory') {
            return /** @type {?} */ ({});
        }
        return /** @type {?} */ (Object.assign({}, Object.keys(this.storage).reduce((acc, prop) => {
            acc[prop] = LocalstorageHelper.parseJSON(prop, this.storage[prop]);
            return acc;
        }, {})));
    }
    /**
     * @template T
     * @param {?} selector
     * @return {?}
     */
    addSubscriber(selector) {
        if (!this.subscribers.has(selector)) {
            this.subscribers.set(selector, new BehaviorSubject(LocalstorageHelper.select(this.getStorageSnapshot(), selector)));
        }
        return this.subscribers.get(selector);
    }
    /**
     * @return {?}
     */
    validateStorage() {
        const /** @type {?} */ storage = this.getStorageSnapshot();
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
    }
    /**
     * @template T
     * @param {?} selector
     * @param {?} parentSubscription
     * @return {?}
     */
    getChildSubscription(selector, parentSubscription) {
        const /** @type {?} */ subscriber = this.addSubscriber(selector);
        parentSubscription
            .map((nextValue => {
            return LocalstorageHelper.verifyPath(nextValue, selector.slice(1)); // filter out the selected path value
        }).bind(this))
            .subscribe((nextValue) => {
            subscriber.next(nextValue);
        });
        return subscriber;
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    updateSubscribers(key) {
        const /** @type {?} */ storage = this.getStorageSnapshot();
        this.subscribers.forEach((subscriber, selector) => {
            if (key !== undefined && !LocalstorageHelper.keyMatches(key, selector)) {
                return;
            }
            subscriber.next(LocalstorageHelper.select(storage, selector));
        });
    }
    /**
     * @param {?=} storageType
     * @param {?=} defaultValue
     * @return {?}
     */
    verifyStorageType(storageType, defaultValue = 'memory') {
        const /** @type {?} */ storageTypeExists = this.$window.hasOwnProperty(storageType) && this.$window[storageType] instanceof this.$window.Storage;
        if (storageTypeExists) {
            return storageType;
        }
        // if storage type does not exist, verify defaultValue until found or memory was set as default
        return storageType === 'memory' ? 'memory' : this.verifyStorageType(defaultValue);
    }
}
LocalstorageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LocalstorageService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LOCALSTORAGE_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = DEFAULT_LOCALSTORAGE_CONFIG, ɵ1 = window;
class LocalstorageModule {
    /**
     * @param {?} localstorageService
     */
    constructor(localstorageService) {
        this.localstorageService = localstorageService;
    }
    /**
     * @param {?=} localstorageConfig
     * @return {?}
     */
    static forRoot(localstorageConfig = DEFAULT_LOCALSTORAGE_CONFIG) {
        return {
            ngModule: LocalstorageModule,
            providers: [
                { provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
                { provide: WINDOW, useValue: window },
                LocalstorageService,
            ],
        };
    }
}
LocalstorageModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                providers: [
                    { provide: LOCALSTORAGE_CONFIG, useValue: ɵ0 },
                    { provide: WINDOW, useValue: ɵ1 },
                    LocalstorageService,
                ],
            },] },
];
/** @nocollapse */
LocalstorageModule.ctorParameters = () => [
    { type: LocalstorageService }
];

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
        let /** @type {?} */ bindingKey = selector;
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
class LocalstorageReduxPlugin {
    /**
     * @param {?} ngRedux
     * @param {?} localstorageService
     */
    constructor(ngRedux, localstorageService) {
        this.ngRedux = ngRedux;
        this.localstorageService = localstorageService;
        this.subscribers = new Map();
    }
    /**
     * @template T
     * @param {?=} selectors
     * @return {?}
     */
    enhancer(selectors) {
        const /** @type {?} */ storedState = this.selectFromState(selectors);
        this.subscribe(selectors);
        return (createStore) => (reducer, initialState) => {
            return createStore(reducer, Object.assign({}, initialState, storedState));
        };
    }
    /**
     * @param {?=} selectors
     * @return {?}
     */
    subscribe(selectors) {
        this.ngRedux.select()
            .filter(store => !!store)
            .first()
            .subscribe(store => {
            if (!selectors) {
                this.subscribeSelector('reduxState');
                return;
            }
            selectors.forEach(selector => this.subscribeSelector(selector));
        });
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    subscribeSelector(selector) {
        if (!selector) {
            return;
        }
        const /** @type {?} */ subscriber = this.subscribers.get(selector);
        if (subscriber) {
            subscriber.unsubscribe();
        }
        this.subscribers.set(selector, /** @type {?} */ (this.ngRedux.subscribe(() => {
            const /** @type {?} */ selectorKey = Array.isArray(selector) ? selector.join('.') : String(selector);
            const /** @type {?} */ stored = this.localstorageService.getItem(selectorKey);
            const /** @type {?} */ newValues = selector === 'reduxState' ? this.ngRedux.getState() :
                LocalstorageHelper.select(this.ngRedux.getState(), selector);
            if (isEqual(stored, newValues)) {
                return;
            }
            this.localstorageService.setItem(selectorKey, newValues);
        })));
    }
    /**
     * @param {?=} selectors
     * @return {?}
     */
    selectFromState(selectors) {
        if (!selectors || !selectors.length) {
            return this.localstorageService.getItem('reduxState');
        }
        return selectors.reduce((acc, selector) => {
            const /** @type {?} */ storedData = LocalstorageHelper.select(this.localstorageService.getStorageSnapshot(), selector);
            const /** @type {?} */ pathSelector = Array.isArray(selector) ? selector : [selector];
            LocalstorageHelper.updateOrCreatePath(acc, pathSelector, storedData);
            return acc;
        }, {});
    }
}
LocalstorageReduxPlugin.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LocalstorageReduxPlugin.ctorParameters = () => [
    { type: NgRedux },
    { type: LocalstorageService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LocalstorageStoreModule {
}
LocalstorageStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgReduxModule],
                providers: [LocalstorageReduxPlugin],
            },] },
];

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

export { LocalstorageModule, LocalstorageHelper, LocalstorageService, LOCALSTORAGE_CONFIG, DEFAULT_LOCALSTORAGE_CONFIG, storage$1 as storage, LocalstorageStoreModule, LocalstorageReduxPlugin };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sb2NhbHN0b3JhZ2UvbGliL2xvY2Fsc3RvcmFnZS9sb2NhbHN0b3JhZ2UuY29uZi50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmhlbHBlci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLnBvbHlmaWxsLnRzIiwibmc6Ly9sb2NhbHN0b3JhZ2UvbGliL2xvY2Fsc3RvcmFnZS9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLm1vZHVsZS50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmRlY29yYXRvci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2Uvc3RvcmUvbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5lbmhhbmNlci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2Uvc3RvcmUvc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VDb25maWcgfSBmcm9tICcuL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBMT0NBTFNUT1JBR0VfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxMb2NhbHN0b3JhZ2VDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuPExvY2Fsc3RvcmFnZUNvbmZpZz4oJ2xvY2Fsc3RvcmFnZUNvbmZpZycpO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0NBTFNUT1JBR0VfQ09ORklHOiBMb2NhbHN0b3JhZ2VDb25maWcgPSB7XG5cdHN0b3JhZ2VUeXBlOiAnbG9jYWxTdG9yYWdlJyxcbn07XG4iLCJpbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFBhdGhTZWxlY3RvciwgU2VsZWN0b3IgfSBmcm9tICcuL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2VIZWxwZXIge1xuXHRzdGF0aWMgY29tcGFyYXRvciA9IGlzRXF1YWw7XG5cblx0Ly8gc2VsZWN0IGRhdGEgZnJvbSB0aGUgc3RvcmFnZSBmb3IgdGhlIHByb3ZpZGVkIHNlbGVjdG9yXG5cdHN0YXRpYyBzZWxlY3Qoc3RvcmFnZTogYW55LCBzZWxlY3RvcjogU2VsZWN0b3IpOiBhbnkge1xuXHRcdGlmICghc3RvcmFnZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHNlbGVjdG9yKHN0b3JhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmVyaWZ5UGF0aChzdG9yYWdlLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmVyaWZ5UGF0aChzdG9yYWdlLCBbc2VsZWN0b3JdKTtcblx0fVxuXG5cdC8vIHZlcmlmeSB0aGUga2V5IG1hdGNoZXMgd2l0aCB0aGUgc2VsZWN0b3Jcblx0Ly8gcHJvcGVydHkgc2VsZWN0b3I6IGNvbXBhcmUgdGhlIGtleSB3aXRoIHRoZSBzZWxlY3RvclxuXHQvLyBwYXRoIHNlbGVjdG9yOiB2ZXJpZnkgdGhlIGtleSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBwYXRoXG5cdC8vIGZ1bmN0aW9uIHNlbGVjdG9yOiBhbHdheXMgcmV0dXJuIHRydWVcblx0c3RhdGljIGtleU1hdGNoZXMoa2V5OiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3Rvcik6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGtleU1hdGNoZXNTZWxlY3RvciA9IGtleSA9PT0gc2VsZWN0b3I7XG5cdFx0Y29uc3Qga2V5SW5TZWxlY3RvciA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpID8gc2VsZWN0b3IuaW5kZXhPZihrZXkpID49IDAgOiBmYWxzZTtcblx0XHRjb25zdCBzZWxlY3RvcklzRnVuY3Rpb24gPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbic7XG5cblx0XHRyZXR1cm4ga2V5TWF0Y2hlc1NlbGVjdG9yIHx8IGtleUluU2VsZWN0b3IgfHwgc2VsZWN0b3JJc0Z1bmN0aW9uO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IGEgcGF0aCBleGlzdHMgaW4gYW4gb2JqZWN0XG5cdHN0YXRpYyB2ZXJpZnlQYXRoKGRhdGE/OiBhbnksIHNlbGVjdG9yPzogUGF0aFNlbGVjdG9yKSB7XG5cdFx0aWYgKCFkYXRhIHx8ICFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGN1cnIgPSBkYXRhO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aWYgKGN1cnIuaGFzT3duUHJvcGVydHkoc2VsZWN0b3JbaV0pKSB7XG5cdFx0XHRcdGN1cnIgPSBjdXJyW3NlbGVjdG9yW2ldXTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyO1xuXHR9XG5cblx0c3RhdGljIHVwZGF0ZU9yQ3JlYXRlUGF0aChzdGF0ZT86IGFueSwgc2VsZWN0b3I/OiBQYXRoU2VsZWN0b3IsIG5ld1ZhbHVlPzogYW55KSB7XG5cdFx0aWYgKCFzdGF0ZSB8fCAhc2VsZWN0b3IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyID0gc3RhdGU7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpZiAoIWN1cnIuaGFzT3duUHJvcGVydHkoc2VsZWN0b3JbaV0pKSB7XG5cdFx0XHRcdGN1cnJbc2VsZWN0b3JbaV1dID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpID09PSBzZWxlY3Rvci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyID0gY3VycltzZWxlY3RvcltpXV07XG5cdFx0fVxuXG5cdFx0Y3VycltzZWxlY3RvcltpXV0gPSBuZXdWYWx1ZTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdHN0YXRpYyBwYXJzZUpTT04oa2V5OiBzdHJpbmcsIGpzb246IHN0cmluZyk6IGFueSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybihgUGFyc2luZyBrZXkgXCIke2tleX1cIiBpbiBsb2NhbHN0b3JhZ2UgZmFpbGVkLCBpZ25vcmluZyB2YWx1ZS5gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1jb25zb2xlXG5cdFx0XHRyZXR1cm4gU3RyaW5nKGpzb24pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JhZ2Uge1xuXHRwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNpemU7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IHN0b3JhZ2UoKTogYW55IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0b3JlLmVudHJpZXMoKSkucmVkdWNlKChhY2MsIGN1cnI6IFtzdHJpbmcsIGFueV0pID0+ICh7XG5cdFx0XHQuLi5hY2MsXG5cdFx0XHRbY3VyclswXV06IGN1cnJbMV0sXG5cdFx0fSksIHt9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RvcmUgPSBuZXcgTWFwKCk7XG5cblx0cHVibGljIGtleShpbmRleDogbnVtYmVyKTogYW55IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0b3JlLmtleXMoKSlbaW5kZXhdO1xuXHR9XG5cblx0cHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLmdldChrZXkpO1xuXHR9XG5cblx0cHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlLnNldChrZXksIHZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yZS5kZWxldGUoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlLmNsZWFyKCk7XG5cdH1cbn1cblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBNZW1vcnlTdG9yYWdlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm94eShzdG9yYWdlLCB7XG5cdGdldDogZnVuY3Rpb24gKHRhcmdldDogYW55LCBuYW1lLCByZWNlaXZlcikge1xuXHRcdGlmIChuYW1lIGluIHRhcmdldCkge1xuXHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpO1xuXHRcdH1cblxuXHRcdGlmIChuYW1lIGluIHRhcmdldC5fX3Byb3RvX18pIHtcblx0XHRcdHJldHVybiB0YXJnZXQuX19wcm90b19fW25hbWVdO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQuc3RvcmFnZSkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5nZXRJdGVtKG5hbWUpO1xuXHRcdH1cblx0fSxcblx0b3duS2V5czogZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldC5zdG9yYWdlKTsgLy8gcmV0dXJuIHN0b3JlZCBrZXlzIHdoZW4gc3RvcmFnZSBrZXlzIGFyZSByZXF1ZXN0ZWRcblx0fSxcblx0Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLCAvLyBlbnN1cmUgc3RvcmVkIGtleXMga2FuIGJlIGl0ZXJhdGVkXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fTtcblx0fSxcbn0pO1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBMT0NBTFNUT1JBR0VfQ09ORklHLCBERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUcgfSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UuY29uZic7XG5pbXBvcnQgeyBTZWxlY3RvciwgUGF0aFNlbGVjdG9yLCBDb21wYXJhdG9yLCBMb2NhbHN0b3JhZ2VDb25maWcgfSBmcm9tICcuLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlSGVscGVyIH0gZnJvbSAnLi4vbG9jYWxzdG9yYWdlLmhlbHBlcic7XG5pbXBvcnQgbWVtb3J5U3RvcmFnZSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UucG9seWZpbGwnO1xuXG5cbi8vIEBkeW5hbWljXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlU2VydmljZSB7XG5cdHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2U7XG5cblx0cHVibGljIGdldCBpbnN0YW5jZSgpOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlIHtcblx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgaW5zdGFuY2UoaW5zdGFuY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UpIHtcblx0XHRpZiAoTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdExvY2Fsc3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBzdG9yYWdlVHlwZTogc3RyaW5nO1xuXHRwdWJsaWMgaWRlbnRpZmllcjogc3RyaW5nO1xuXHRwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2U7XG5cdHByaXZhdGUgc3Vic2NyaWJlcnM6IE1hcDxTZWxlY3RvciwgQmVoYXZpb3JTdWJqZWN0PGFueT4+ID0gbmV3IE1hcDxTZWxlY3RvciwgQmVoYXZpb3JTdWJqZWN0PGFueT4+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChMT0NBTFNUT1JBR0VfQ09ORklHKSBwcml2YXRlIGxvY2Fsc3RvcmFnZUNvbmZpZyxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSAkd2luZG93XG5cdCkge1xuXHRcdC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvbiB0aGUgc2VydmljZSBzbyB0aGUgZGVjb3JhdG9yIGhhcyBhY2Nlc3MgdG8gaW5zdGFuY2UgbWV0aG9kc1xuXHRcdHRoaXMuaW5zdGFuY2UgPSB0aGlzO1xuXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGxvY2Fsc3RvcmFnZUNvbmZpZyk7XG5cdFx0dGhpcy52YWxpZGF0ZVN0b3JhZ2UoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRTdG9yYWdlKHtcblx0XHRzdG9yYWdlVHlwZSxcblx0XHRpZGVudGlmaWVyID0gJycsXG5cdH06IExvY2Fsc3RvcmFnZUNvbmZpZyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlVHlwZSA9IHRoaXMudmVyaWZ5U3RvcmFnZVR5cGUoc3RvcmFnZVR5cGUsICdsb2NhbFN0b3JhZ2UnKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VUeXBlID09PSAnbWVtb3J5JyA/IG1lbW9yeVN0b3JhZ2UgOiB0aGlzLiR3aW5kb3dbdGhpcy5zdG9yYWdlVHlwZV07XG5cblx0XHR0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJyb3dzZXIgU3RvcmFnZSBhcGlcblx0ICovXG5cdHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRJdGVtPFQgPSBhbnk+KGtleTogc3RyaW5nKTogVCB7XG5cdFx0cmV0dXJuIExvY2Fsc3RvcmFnZUhlbHBlci5wYXJzZUpTT04oa2V5LCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHR0aGlzLnVwZGF0ZVN1YnNjcmliZXJzKGtleSk7XG5cdH1cblxuXHRwdWJsaWMgY2xlYXIoLi4uYXJncyk6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmFnZS5jbGVhci5hcHBseSh0aGlzLnN0b3JhZ2UsIGFyZ3MpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNvcmF0b3IgYXBpXG5cdCAqL1xuXHRwdWJsaWMgc2VsZWN0PFQgPSBhbnk+KHNlbGVjdG9yOiBTZWxlY3RvciwgY29tcGFyYXRvcjogQ29tcGFyYXRvciA9IExvY2Fsc3RvcmFnZUhlbHBlci5jb21wYXJhdG9yKTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHQvLyBpZiB0aGUgc2VsZWN0b3IgaXMgYW4gYXJyYXksIGFkZCBhIHN1YnNjcmlwdGlvbiBmb3IgdGhlIGxhc3QgaXRlbVxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuICh0aGlzXG5cdFx0XHRcdC5nZXRDaGlsZFN1YnNjcmlwdGlvbihzZWxlY3RvciwgdGhpcy5zZWxlY3Qoc2VsZWN0b3JbMF0pKVxuXHRcdFx0XHQuZGlzdGluY3RVbnRpbENoYW5nZWQoY29tcGFyYXRvcikgYXMgYW55KSBhcyBCZWhhdmlvclN1YmplY3Q8VD47IC8vIG1ha2Ugc3VyZSBpdCBpcyBvbmx5IHRyaWdnZXJlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5hZGRTdWJzY3JpYmVyPFQ+KHNlbGVjdG9yKVxuXHRcdFx0LmRpc3RpbmN0VW50aWxDaGFuZ2VkPFQ+KGNvbXBhcmF0b3IpIGFzIEJlaGF2aW9yU3ViamVjdDxUPjtcblx0fVxuXG5cdHB1YmxpYyBjbGVhclN1YnNjcmliZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHtcblx0XHRcdHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIGdldCBhIGNsb25lIG9mIHRoZSBjdXJyZW50IHN0b3JlZCB2YWx1ZXNcblx0cHVibGljIGdldFN0b3JhZ2VTbmFwc2hvdDxUID0gYW55PigpOiBUIHtcblx0XHRpZiAodGhpcy5zdG9yYWdlVHlwZSA9PT0gJ21lbW9yeScpIHtcblx0XHRcdHJldHVybiB7fSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiB7Li4uT2JqZWN0LmtleXModGhpcy5zdG9yYWdlKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuXHRcdFx0YWNjW3Byb3BdID0gTG9jYWxzdG9yYWdlSGVscGVyLnBhcnNlSlNPTihwcm9wLCB0aGlzLnN0b3JhZ2VbcHJvcF0pO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9LCB7fSl9IGFzIFQ7XG5cdH1cblxuXHQvLyByZXR1cm4gb3IgY3JlYXRlIGEgYmVoYXZpb3JzdWJqZWN0IGZyb20gdGhlIHNlbGVjdGVkIHZhbHVlXG5cdHB1YmxpYyBhZGRTdWJzY3JpYmVyPFQgPSBhbnk+KHNlbGVjdG9yOiBTZWxlY3Rvcik6IEJlaGF2aW9yU3ViamVjdDxUPiB7XG5cdFx0aWYgKCF0aGlzLnN1YnNjcmliZXJzLmhhcyhzZWxlY3RvcikpIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KHNlbGVjdG9yLCBuZXcgQmVoYXZpb3JTdWJqZWN0PFQ+KExvY2Fsc3RvcmFnZUhlbHBlci5zZWxlY3QodGhpcy5nZXRTdG9yYWdlU25hcHNob3QoKSwgc2VsZWN0b3IpKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuZ2V0KHNlbGVjdG9yKTtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVTdG9yYWdlKCk6IHZvaWQge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2VTbmFwc2hvdCgpO1xuXG5cdFx0aWYgKCF0aGlzLmlkZW50aWZpZXIgJiYgIXN0b3JhZ2VbJ2F1aS1zdG9yYWdlJ10pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pZGVudGlmaWVyID09PSBzdG9yYWdlWydhdWktc3RvcmFnZSddKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jbGVhcigpO1xuXG5cdFx0aWYgKHRoaXMuaWRlbnRpZmllcikge1xuXHRcdFx0dGhpcy5zZXRJdGVtKCdhdWktc3RvcmFnZScsIHRoaXMuaWRlbnRpZmllcik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gZmV0Y2ggb3IgY3JlYXRlIGEgc3Vic2NyaXB0aW9uIGZvciB0aGUgcGFyZW50XG5cdC8vIHN1YnNjcmliZSB0byBzYWlkIHN1YnNjcmlwdGlvbiBhbmQgcmV0dXJuIGEgbmV3IHN1YnNjcmliZXIgZnJvbSB0aGUgdmFsdWVcblx0cHJpdmF0ZSBnZXRDaGlsZFN1YnNjcmlwdGlvbjxUID0gYW55PihzZWxlY3RvcjogUGF0aFNlbGVjdG9yLCBwYXJlbnRTdWJzY3JpcHRpb246IEJlaGF2aW9yU3ViamVjdDxhbnk+KTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHRjb25zdCBzdWJzY3JpYmVyID0gdGhpcy5hZGRTdWJzY3JpYmVyPFQ+KHNlbGVjdG9yKTtcblxuXHRcdHBhcmVudFN1YnNjcmlwdGlvblxuXHRcdFx0Lm1hcCgobmV4dFZhbHVlID0+IHtcblx0XHRcdFx0cmV0dXJuIExvY2Fsc3RvcmFnZUhlbHBlci52ZXJpZnlQYXRoKG5leHRWYWx1ZSwgc2VsZWN0b3Iuc2xpY2UoMSkpOyAvLyBmaWx0ZXIgb3V0IHRoZSBzZWxlY3RlZCBwYXRoIHZhbHVlXG5cdFx0XHR9KS5iaW5kKHRoaXMpKVxuXHRcdFx0LnN1YnNjcmliZSgobmV4dFZhbHVlOiBUKSA9PiB7XG5cdFx0XHRcdHN1YnNjcmliZXIubmV4dChuZXh0VmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gc3Vic2NyaWJlcjtcblx0fVxuXG5cdC8vIHVwZGF0ZSBhbGwgc3Vic2NyaWJlcnNcblx0Ly8gaWYgYSBrZXkgaXMgcHJvdmlkZWQsIG1hdGNoaW5nIHdpbGwgcHJldmVudCB1c2VsZXNzIHVwZGF0ZXNcblx0cHJpdmF0ZSB1cGRhdGVTdWJzY3JpYmVycyhrZXk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlU25hcHNob3QoKTtcblx0XHR0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+LCBzZWxlY3RvcjogU2VsZWN0b3IpID0+IHtcblx0XHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZCAmJiAhTG9jYWxzdG9yYWdlSGVscGVyLmtleU1hdGNoZXMoa2V5LCBzZWxlY3RvcikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRzdWJzY3JpYmVyLm5leHQoTG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdChzdG9yYWdlLCBzZWxlY3RvcikpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IHRoZSBwcmVmZXJlZCBzdG9yYWdldHlwZSBleGlzdHMsIGZhbGwgYmFjayB0byBcImxvY2FsU3RvcmFnZcOiwoDCnCBvciBtZW1vcnlcblx0cHJpdmF0ZSB2ZXJpZnlTdG9yYWdlVHlwZShzdG9yYWdlVHlwZT86IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSAnbWVtb3J5Jyk6IHN0cmluZyB7XG5cdFx0Y29uc3Qgc3RvcmFnZVR5cGVFeGlzdHMgPSB0aGlzLiR3aW5kb3cuaGFzT3duUHJvcGVydHkoc3RvcmFnZVR5cGUpICYmIHRoaXMuJHdpbmRvd1tzdG9yYWdlVHlwZV0gaW5zdGFuY2VvZiB0aGlzLiR3aW5kb3cuU3RvcmFnZTtcblxuXHRcdGlmIChzdG9yYWdlVHlwZUV4aXN0cykge1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2VUeXBlO1xuXHRcdH1cblxuXHRcdC8vIGlmIHN0b3JhZ2UgdHlwZSBkb2VzIG5vdCBleGlzdCwgdmVyaWZ5IGRlZmF1bHRWYWx1ZSB1bnRpbCBmb3VuZCBvciBtZW1vcnkgd2FzIHNldCBhcyBkZWZhdWx0XG5cdFx0cmV0dXJuIHN0b3JhZ2VUeXBlID09PSAnbWVtb3J5JyA/ICdtZW1vcnknIDogdGhpcy52ZXJpZnlTdG9yYWdlVHlwZShkZWZhdWx0VmFsdWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7XG5cdExvY2Fsc3RvcmFnZUNvbmZpZyxcbn0gZnJvbSAnLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHtcblx0TG9jYWxzdG9yYWdlU2VydmljZSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1xuXHRMT0NBTFNUT1JBR0VfQ09ORklHLFxuXHRERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUcsXG59IGZyb20gJy4vbG9jYWxzdG9yYWdlLmNvbmYnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTE9DQUxTVE9SQUdFX0NPTkZJRywgdXNlVmFsdWU6IERFRkFVTFRfTE9DQUxTVE9SQUdFX0NPTkZJRyB9LFxuXHRcdHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG5cdFx0TG9jYWxzdG9yYWdlU2VydmljZSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlTW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoXG5cdFx0bG9jYWxzdG9yYWdlQ29uZmlnOiBMb2NhbHN0b3JhZ2VDb25maWcgPSBERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUdcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBMb2NhbHN0b3JhZ2VNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBMT0NBTFNUT1JBR0VfQ09ORklHLCB1c2VWYWx1ZTogbG9jYWxzdG9yYWdlQ29uZmlnIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG5cdFx0XHRcdExvY2Fsc3RvcmFnZVNlcnZpY2UsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2Vcblx0KSB7fVxufVxuIiwiaW1wb3J0IHsgU2VsZWN0b3IsIENvbXBhcmF0b3IsIFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSAnLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZShzZWxlY3Rvcj86IFNlbGVjdG9yLCBjb21wYXJhdG9yPzogQ29tcGFyYXRvcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcblxuXHRyZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0bGV0IGJpbmRpbmdLZXkgPSBzZWxlY3Rvcjtcblx0XHRpZiAoIXNlbGVjdG9yKSB7XG5cdFx0XHRiaW5kaW5nS2V5ID0gKGtleS5sYXN0SW5kZXhPZignJCcpID09PSBrZXkubGVuZ3RoIC0gMSkgPyBrZXkuc3Vic3RyaW5nKDAsIGtleS5sZW5ndGggLSAxKSA6IGtleTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXR0ZXIoKSB7XG5cdFx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZS5zZWxlY3QoYmluZGluZ0tleSwgY29tcGFyYXRvcik7XG5cdFx0fVxuXG5cdFx0Ly8gUmVwbGFjZSBkZWNvcmF0ZWQgcHJvcGVydHkgd2l0aCBhIGdldHRlciB0aGF0IHJldHVybnMgdGhlIG9ic2VydmFibGUuXG5cdFx0ZGVsZXRlIHRhcmdldFtrZXldO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG5cdFx0XHRnZXQ6IGdldHRlcixcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fSk7XG5cdH07XG59XG4iLCJpbXBvcnQgeyBSZWR1Y2VyLCBTdG9yZUNyZWF0b3IsIFN0b3JlRW5oYW5jZXIsIFN0b3JlLCBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTmdSZWR1eCB9IGZyb20gJ0Bhbmd1bGFyLXJlZHV4L3N0b3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlyc3QnO1xuXG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgTG9jYWxzdG9yYWdlSGVscGVyIH0gZnJvbSAnLi4vLi4vbG9jYWxzdG9yYWdlLmhlbHBlcic7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvcGVydHlTZWxlY3RvciwgUGF0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvbG9jYWxzdG9yYWdlLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2Fsc3RvcmFnZVJlZHV4UGx1Z2luIHtcblx0cHJpdmF0ZSBzdG9yZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3IsIFN1YnNjcmlwdGlvbj4gPSBuZXcgTWFwPFByb3BlcnR5U2VsZWN0b3J8UGF0aFNlbGVjdG9yLCBTdWJzY3JpcHRpb24+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ1JlZHV4OiBOZ1JlZHV4PGFueT4sXG5cdFx0cHJpdmF0ZSBsb2NhbHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlXG5cdCkge31cblxuXHRlbmhhbmNlcjxUID0gYW55PihzZWxlY3RvcnM/OiBBcnJheTxQcm9wZXJ0eVNlbGVjdG9yfFBhdGhTZWxlY3Rvcj4pOiBTdG9yZUVuaGFuY2VyPFQ+IHtcblx0XHRjb25zdCBzdG9yZWRTdGF0ZSA9IHRoaXMuc2VsZWN0RnJvbVN0YXRlKHNlbGVjdG9ycyk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShzZWxlY3RvcnMpO1xuXG5cdFx0cmV0dXJuIChjcmVhdGVTdG9yZTogU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvcjxUPik6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8VD4gPT4gKFxuXHRcdFx0cmVkdWNlcjogUmVkdWNlcjxUPixcblx0XHRcdGluaXRpYWxTdGF0ZTogYW55XG5cdFx0KTogU3RvcmU8VD4gPT4ge1xuXHRcdFx0cmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHtcblx0XHRcdFx0Li4uaW5pdGlhbFN0YXRlLFxuXHRcdFx0XHQuLi5zdG9yZWRTdGF0ZSxcblx0XHRcdH0pO1xuXHRcdH07XG5cdH1cblxuXHRzdWJzY3JpYmUoc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvciB8IFBhdGhTZWxlY3Rvcj4pOiB2b2lkIHtcblx0XHR0aGlzLm5nUmVkdXguc2VsZWN0KClcblx0XHRcdC5maWx0ZXIoc3RvcmUgPT4gISFzdG9yZSlcblx0XHRcdC5maXJzdCgpXG5cdFx0XHQuc3Vic2NyaWJlKHN0b3JlID0+IHtcblx0XHRcdFx0aWYgKCFzZWxlY3RvcnMpIHtcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmliZVNlbGVjdG9yKCdyZWR1eFN0YXRlJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gdGhpcy5zdWJzY3JpYmVTZWxlY3RvcihzZWxlY3RvcikpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVNlbGVjdG9yKHNlbGVjdG9yOiBQcm9wZXJ0eVNlbGVjdG9yIHwgUGF0aFNlbGVjdG9yKTogdm9pZCB7XG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1YnNjcmliZXIgPSB0aGlzLnN1YnNjcmliZXJzLmdldChzZWxlY3Rvcik7XG5cblx0XHRpZiAoc3Vic2NyaWJlcikge1xuXHRcdFx0c3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KHNlbGVjdG9yLCB0aGlzLm5nUmVkdXguc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdG9yS2V5ID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3Rvci5qb2luKCcuJykgOiBTdHJpbmcoc2VsZWN0b3IpO1xuXHRcdFx0Y29uc3Qgc3RvcmVkID0gdGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oc2VsZWN0b3JLZXkpO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWVzID0gc2VsZWN0b3IgPT09ICdyZWR1eFN0YXRlJyA/IHRoaXMubmdSZWR1eC5nZXRTdGF0ZSgpIDpcblx0XHRcdFx0TG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdCh0aGlzLm5nUmVkdXguZ2V0U3RhdGUoKSwgc2VsZWN0b3IpO1xuXG5cdFx0XHRpZiAoaXNFcXVhbChzdG9yZWQsIG5ld1ZhbHVlcykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbShzZWxlY3RvcktleSwgbmV3VmFsdWVzKTtcblx0XHR9KSBhcyBhbnkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RGcm9tU3RhdGUoc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3I+KTogYW55IHtcblx0XHRpZiAoIXNlbGVjdG9ycyB8fCAhc2VsZWN0b3JzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRJdGVtKCdyZWR1eFN0YXRlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGVjdG9ycy5yZWR1Y2UoKGFjYywgc2VsZWN0b3IpID0+IHtcblx0XHRcdGNvbnN0IHN0b3JlZERhdGEgPSBMb2NhbHN0b3JhZ2VIZWxwZXIuc2VsZWN0KHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlU25hcHNob3QoKSwgc2VsZWN0b3IpO1xuXHRcdFx0Y29uc3QgcGF0aFNlbGVjdG9yID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3RvciA6IFtzZWxlY3Rvcl07XG5cblx0XHRcdExvY2Fsc3RvcmFnZUhlbHBlci51cGRhdGVPckNyZWF0ZVBhdGgoYWNjLCBwYXRoU2VsZWN0b3IsIHN0b3JlZERhdGEpO1xuXG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH0sIHt9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVkdXhNb2R1bGUgfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VSZWR1eFBsdWdpbiB9IGZyb20gJy4vbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5lbmhhbmNlcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgTmdSZWR1eE1vZHVsZSBdLFxuXHRwcm92aWRlcnM6IFsgTG9jYWxzdG9yYWdlUmVkdXhQbHVnaW4gXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlU3RvcmVNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUdhLG1CQUFtQixHQUF1QyxJQUFJLGNBQWMsQ0FBcUIsb0JBQW9CLENBQUMsQ0FBQztBQUVwSSx1QkFBYSwyQkFBMkIsR0FBdUI7SUFDOUQsV0FBVyxFQUFFLGNBQWM7Q0FDM0I7Ozs7OztBQ1BEOzs7Ozs7SUFPQyxPQUFPLE1BQU0sQ0FBQyxPQUFZLEVBQUUsUUFBa0I7UUFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxJQUFJLENBQUMsUUFB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