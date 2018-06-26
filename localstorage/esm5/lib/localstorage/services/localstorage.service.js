/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { LOCALSTORAGE_CONFIG } from '../localstorage.conf';
import { LocalstorageHelper } from '../localstorage.helper';
import memoryStorage from '../localstorage.polyfill';
var LocalstorageService = /** @class */ (function () {
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
         */
        function () {
            return LocalstorageService.instance;
        },
        set: /**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
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
        if (comparator === void 0) { comparator = LocalstorageHelper.comparator; }
        // if the selector is an array, add a subscription for the last item
        if (Array.isArray(selector)) {
            return /** @type {?} */ ((/** @type {?} */ (this
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
        return /** @type {?} */ (tslib_1.__assign({}, Object.keys(this.storage).reduce(function (acc, prop) {
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
            this.subscribers.set(selector, new BehaviorSubject(LocalstorageHelper.select(this.getStorageSnapshot(), selector)));
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
        if (defaultValue === void 0) { defaultValue = 'memory'; }
        var /** @type {?} */ storageTypeExists = this.$window.hasOwnProperty(storageType) && this.$window[storageType] instanceof this.$window.Storage;
        if (storageTypeExists) {
            return storageType;
        }
        // if storage type does not exist, verify defaultValue until found or memory was set as default
        return storageType === 'memory' ? 'memory' : this.verifyStorageType(defaultValue);
    };
    LocalstorageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocalstorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCALSTORAGE_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    return LocalstorageService;
}());
export { LocalstorageService };
function LocalstorageService_tsickle_Closure_declarations() {
    /** @type {?} */
    LocalstorageService.instance;
    /** @type {?} */
    LocalstorageService.prototype.storageType;
    /** @type {?} */
    LocalstorageService.prototype.identifier;
    /** @type {?} */
    LocalstorageService.prototype.storage;
    /** @type {?} */
    LocalstorageService.prototype.subscribers;
    /** @type {?} */
    LocalstorageService.prototype.localstorageConfig;
    /** @type {?} */
    LocalstorageService.prototype.$window;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2NhbHN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvbG9jYWxzdG9yYWdlL3NlcnZpY2VzL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLHdDQUF3QyxDQUFDO0FBQ2hELE9BQU8sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLG1CQUFtQixFQUErQixNQUFNLHNCQUFzQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sYUFBYSxNQUFNLDBCQUEwQixDQUFDOztJQXlCcEQsNkJBQ3NDLGtCQUFrQixFQUMvQixPQUFPO1FBRE0sdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFBO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQUE7MkJBSjJCLElBQUksR0FBRyxFQUFrQzs7UUFPbkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN2QjswQkExQlUseUNBQVE7Ozs7O1lBQ2xCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7Ozs7OztrQkFHakIsUUFBNkI7WUFDaEQsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDO2FBQ1A7WUFFRCxtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7Ozs7Ozs7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QUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDOzs7Z0JBbktuRixVQUFVOzs7O2dEQXNCUixNQUFNLFNBQUMsbUJBQW1CO2dEQUMxQixNQUFNLFNBQUMsTUFBTTs7OEJBcENoQjs7U0FjYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IExPQ0FMU1RPUkFHRV9DT05GSUcsIERFRkFVTFRfTE9DQUxTVE9SQUdFX0NPTkZJRyB9IGZyb20gJy4uL2xvY2Fsc3RvcmFnZS5jb25mJztcbmltcG9ydCB7IFNlbGVjdG9yLCBQYXRoU2VsZWN0b3IsIENvbXBhcmF0b3IsIExvY2Fsc3RvcmFnZUNvbmZpZyB9IGZyb20gJy4uL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VIZWxwZXIgfSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UuaGVscGVyJztcbmltcG9ydCBtZW1vcnlTdG9yYWdlIGZyb20gJy4uL2xvY2Fsc3RvcmFnZS5wb2x5ZmlsbCc7XG5cblxuLy8gQGR5bmFtaWNcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIHtcblx0cHVibGljIHN0YXRpYyBpbnN0YW5jZTogTG9jYWxzdG9yYWdlU2VydmljZTtcblxuXHRwdWJsaWMgZ2V0IGluc3RhbmNlKCk6IExvY2Fsc3RvcmFnZVNlcnZpY2Uge1xuXHRcdHJldHVybiBMb2NhbHN0b3JhZ2VTZXJ2aWNlLmluc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIHNldCBpbnN0YW5jZShpbnN0YW5jZTogTG9jYWxzdG9yYWdlU2VydmljZSkge1xuXHRcdGlmIChMb2NhbHN0b3JhZ2VTZXJ2aWNlLmluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0TG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZSA9IGluc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIHN0b3JhZ2VUeXBlOiBzdHJpbmc7XG5cdHB1YmxpYyBpZGVudGlmaWVyOiBzdHJpbmc7XG5cdHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZTtcblx0cHJpdmF0ZSBzdWJzY3JpYmVyczogTWFwPFNlbGVjdG9yLCBCZWhhdmlvclN1YmplY3Q8YW55Pj4gPSBuZXcgTWFwPFNlbGVjdG9yLCBCZWhhdmlvclN1YmplY3Q8YW55Pj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KExPQ0FMU1RPUkFHRV9DT05GSUcpIHByaXZhdGUgbG9jYWxzdG9yYWdlQ29uZmlnLFxuXHRcdEBJbmplY3QoV0lORE9XKSBwcml2YXRlICR3aW5kb3dcblx0KSB7XG5cdFx0Ly8gc3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9uIHRoZSBzZXJ2aWNlIHNvIHRoZSBkZWNvcmF0b3IgaGFzIGFjY2VzcyB0byBpbnN0YW5jZSBtZXRob2RzXG5cdFx0dGhpcy5pbnN0YW5jZSA9IHRoaXM7XG5cblx0XHR0aGlzLnNldFN0b3JhZ2UobG9jYWxzdG9yYWdlQ29uZmlnKTtcblx0XHR0aGlzLnZhbGlkYXRlU3RvcmFnZSgpO1xuXHR9XG5cblx0cHVibGljIHNldFN0b3JhZ2Uoe1xuXHRcdHN0b3JhZ2VUeXBlLFxuXHRcdGlkZW50aWZpZXIgPSAnJyxcblx0fTogTG9jYWxzdG9yYWdlQ29uZmlnID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JhZ2VUeXBlID0gdGhpcy52ZXJpZnlTdG9yYWdlVHlwZShzdG9yYWdlVHlwZSwgJ2xvY2FsU3RvcmFnZScpO1xuXHRcdHRoaXMuc3RvcmFnZSA9IHRoaXMuc3RvcmFnZVR5cGUgPT09ICdtZW1vcnknID8gbWVtb3J5U3RvcmFnZSA6IHRoaXMuJHdpbmRvd1t0aGlzLnN0b3JhZ2VUeXBlXTtcblxuXHRcdHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG5cdH1cblxuXHQvKipcblx0ICogQnJvd3NlciBTdG9yYWdlIGFwaVxuXHQgKi9cblx0cHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG5cdFx0dGhpcy51cGRhdGVTdWJzY3JpYmVycyhrZXkpO1xuXHR9XG5cblx0cHVibGljIGdldEl0ZW08VCA9IGFueT4oa2V5OiBzdHJpbmcpOiBUIHtcblx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlSGVscGVyLnBhcnNlSlNPTihrZXksIHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBjbGVhciguLi5hcmdzKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLmNsZWFyLmFwcGx5KHRoaXMuc3RvcmFnZSwgYXJncyk7XG5cdFx0dGhpcy51cGRhdGVTdWJzY3JpYmVycygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlY29yYXRvciBhcGlcblx0ICovXG5cdHB1YmxpYyBzZWxlY3Q8VCA9IGFueT4oc2VsZWN0b3I6IFNlbGVjdG9yLCBjb21wYXJhdG9yOiBDb21wYXJhdG9yID0gTG9jYWxzdG9yYWdlSGVscGVyLmNvbXBhcmF0b3IpOiBCZWhhdmlvclN1YmplY3Q8VD4ge1xuXHRcdC8vIGlmIHRoZSBzZWxlY3RvciBpcyBhbiBhcnJheSwgYWRkIGEgc3Vic2NyaXB0aW9uIGZvciB0aGUgbGFzdCBpdGVtXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXNcblx0XHRcdFx0LmdldENoaWxkU3Vic2NyaXB0aW9uKHNlbGVjdG9yLCB0aGlzLnNlbGVjdChzZWxlY3RvclswXSkpXG5cdFx0XHRcdC5kaXN0aW5jdFVudGlsQ2hhbmdlZChjb21wYXJhdG9yKSBhcyBhbnkpIGFzIEJlaGF2aW9yU3ViamVjdDxUPjsgLy8gbWFrZSBzdXJlIGl0IGlzIG9ubHkgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0LmFkZFN1YnNjcmliZXI8VD4oc2VsZWN0b3IpXG5cdFx0XHQuZGlzdGluY3RVbnRpbENoYW5nZWQ8VD4oY29tcGFyYXRvcikgYXMgQmVoYXZpb3JTdWJqZWN0PFQ+O1xuXHR9XG5cblx0cHVibGljIGNsZWFyU3Vic2NyaWJlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4ge1xuXHRcdFx0c3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gZ2V0IGEgY2xvbmUgb2YgdGhlIGN1cnJlbnQgc3RvcmVkIHZhbHVlc1xuXHRwdWJsaWMgZ2V0U3RvcmFnZVNuYXBzaG90PFQgPSBhbnk+KCk6IFQge1xuXHRcdGlmICh0aGlzLnN0b3JhZ2VUeXBlID09PSAnbWVtb3J5Jykge1xuXHRcdFx0cmV0dXJuIHt9IGFzIFQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsuLi5PYmplY3Qua2V5cyh0aGlzLnN0b3JhZ2UpLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG5cdFx0XHRhY2NbcHJvcF0gPSBMb2NhbHN0b3JhZ2VIZWxwZXIucGFyc2VKU09OKHByb3AsIHRoaXMuc3RvcmFnZVtwcm9wXSk7XG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH0sIHt9KX0gYXMgVDtcblx0fVxuXG5cdC8vIHJldHVybiBvciBjcmVhdGUgYSBiZWhhdmlvcnN1YmplY3QgZnJvbSB0aGUgc2VsZWN0ZWQgdmFsdWVcblx0cHVibGljIGFkZFN1YnNjcmliZXI8VCA9IGFueT4oc2VsZWN0b3I6IFNlbGVjdG9yKTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHRpZiAoIXRoaXMuc3Vic2NyaWJlcnMuaGFzKHNlbGVjdG9yKSkge1xuXHRcdFx0dGhpcy5zdWJzY3JpYmVycy5zZXQoc2VsZWN0b3IsIG5ldyBCZWhhdmlvclN1YmplY3Q8VD4oTG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdCh0aGlzLmdldFN0b3JhZ2VTbmFwc2hvdCgpLCBzZWxlY3RvcikpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5nZXQoc2VsZWN0b3IpO1xuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0ZVN0b3JhZ2UoKTogdm9pZCB7XG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuZ2V0U3RvcmFnZVNuYXBzaG90KCk7XG5cblx0XHRpZiAoIXRoaXMuaWRlbnRpZmllciAmJiAhc3RvcmFnZVsnYXVpLXN0b3JhZ2UnXSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlkZW50aWZpZXIgPT09IHN0b3JhZ2VbJ2F1aS1zdG9yYWdlJ10pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNsZWFyKCk7XG5cblx0XHRpZiAodGhpcy5pZGVudGlmaWVyKSB7XG5cdFx0XHR0aGlzLnNldEl0ZW0oJ2F1aS1zdG9yYWdlJywgdGhpcy5pZGVudGlmaWVyKTtcblx0XHR9XG5cdH1cblxuXHQvLyBmZXRjaCBvciBjcmVhdGUgYSBzdWJzY3JpcHRpb24gZm9yIHRoZSBwYXJlbnRcblx0Ly8gc3Vic2NyaWJlIHRvIHNhaWQgc3Vic2NyaXB0aW9uIGFuZCByZXR1cm4gYSBuZXcgc3Vic2NyaWJlciBmcm9tIHRoZSB2YWx1ZVxuXHRwcml2YXRlIGdldENoaWxkU3Vic2NyaXB0aW9uPFQgPSBhbnk+KHNlbGVjdG9yOiBQYXRoU2VsZWN0b3IsIHBhcmVudFN1YnNjcmlwdGlvbjogQmVoYXZpb3JTdWJqZWN0PGFueT4pOiBCZWhhdmlvclN1YmplY3Q8VD4ge1xuXHRcdGNvbnN0IHN1YnNjcmliZXIgPSB0aGlzLmFkZFN1YnNjcmliZXI8VD4oc2VsZWN0b3IpO1xuXG5cdFx0cGFyZW50U3Vic2NyaXB0aW9uXG5cdFx0XHQubWFwKChuZXh0VmFsdWUgPT4ge1xuXHRcdFx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlSGVscGVyLnZlcmlmeVBhdGgobmV4dFZhbHVlLCBzZWxlY3Rvci5zbGljZSgxKSk7IC8vIGZpbHRlciBvdXQgdGhlIHNlbGVjdGVkIHBhdGggdmFsdWVcblx0XHRcdH0pLmJpbmQodGhpcykpXG5cdFx0XHQuc3Vic2NyaWJlKChuZXh0VmFsdWU6IFQpID0+IHtcblx0XHRcdFx0c3Vic2NyaWJlci5uZXh0KG5leHRWYWx1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiBzdWJzY3JpYmVyO1xuXHR9XG5cblx0Ly8gdXBkYXRlIGFsbCBzdWJzY3JpYmVyc1xuXHQvLyBpZiBhIGtleSBpcyBwcm92aWRlZCwgbWF0Y2hpbmcgd2lsbCBwcmV2ZW50IHVzZWxlc3MgdXBkYXRlc1xuXHRwcml2YXRlIHVwZGF0ZVN1YnNjcmliZXJzKGtleT86IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2VTbmFwc2hvdCgpO1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3Vic2NyaWJlcjogQmVoYXZpb3JTdWJqZWN0PGFueT4sIHNlbGVjdG9yOiBTZWxlY3RvcikgPT4ge1xuXHRcdFx0aWYgKGtleSAhPT0gdW5kZWZpbmVkICYmICFMb2NhbHN0b3JhZ2VIZWxwZXIua2V5TWF0Y2hlcyhrZXksIHNlbGVjdG9yKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHN1YnNjcmliZXIubmV4dChMb2NhbHN0b3JhZ2VIZWxwZXIuc2VsZWN0KHN0b3JhZ2UsIHNlbGVjdG9yKSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyB2ZXJpZnkgdGhlIHByZWZlcmVkIHN0b3JhZ2V0eXBlIGV4aXN0cywgZmFsbCBiYWNrIHRvIFwibG9jYWxTdG9yYWdl4oCcIG9yIG1lbW9yeVxuXHRwcml2YXRlIHZlcmlmeVN0b3JhZ2VUeXBlKHN0b3JhZ2VUeXBlPzogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZyA9ICdtZW1vcnknKTogc3RyaW5nIHtcblx0XHRjb25zdCBzdG9yYWdlVHlwZUV4aXN0cyA9IHRoaXMuJHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShzdG9yYWdlVHlwZSkgJiYgdGhpcy4kd2luZG93W3N0b3JhZ2VUeXBlXSBpbnN0YW5jZW9mIHRoaXMuJHdpbmRvdy5TdG9yYWdlO1xuXG5cdFx0aWYgKHN0b3JhZ2VUeXBlRXhpc3RzKSB7XG5cdFx0XHRyZXR1cm4gc3RvcmFnZVR5cGU7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgc3RvcmFnZSB0eXBlIGRvZXMgbm90IGV4aXN0LCB2ZXJpZnkgZGVmYXVsdFZhbHVlIHVudGlsIGZvdW5kIG9yIG1lbW9yeSB3YXMgc2V0IGFzIGRlZmF1bHRcblx0XHRyZXR1cm4gc3RvcmFnZVR5cGUgPT09ICdtZW1vcnknID8gJ21lbW9yeScgOiB0aGlzLnZlcmlmeVN0b3JhZ2VUeXBlKGRlZmF1bHRWYWx1ZSk7XG5cdH1cbn1cbiJdfQ==