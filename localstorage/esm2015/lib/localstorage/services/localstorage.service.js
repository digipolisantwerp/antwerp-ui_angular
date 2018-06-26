/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { LOCALSTORAGE_CONFIG } from '../localstorage.conf';
import { LocalstorageHelper } from '../localstorage.helper';
import memoryStorage from '../localstorage.polyfill';
export class LocalstorageService {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2NhbHN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvbG9jYWxzdG9yYWdlL3NlcnZpY2VzL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sd0NBQXdDLENBQUM7QUFDaEQsT0FBTyx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUUsbUJBQW1CLEVBQStCLE1BQU0sc0JBQXNCLENBQUM7QUFFeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxhQUFhLE1BQU0sMEJBQTBCLENBQUM7QUFLckQsTUFBTTs7Ozs7SUFvQkwsWUFDc0Msa0JBQWtCLEVBQy9CLE9BQU87UUFETSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQUE7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FBQTsyQkFKMkIsSUFBSSxHQUFHLEVBQWtDOztRQU9uRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3ZCOzs7O1FBMUJVLFFBQVE7UUFDbEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQzs7Ozs7O1FBRzFCLFFBQVEsQ0FBQyxRQUE2QjtRQUNoRCxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztTQUNQO1FBRUQsbUJBQW1CLENBQUMsUUFBUSxHQUFHLFFB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LE1BQU0sU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBMT0NBTFNUT1JBR0VfQ09ORklHLCBERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUcgfSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UuY29uZic7XG5pbXBvcnQgeyBTZWxlY3RvciwgUGF0aFNlbGVjdG9yLCBDb21wYXJhdG9yLCBMb2NhbHN0b3JhZ2VDb25maWcgfSBmcm9tICcuLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlSGVscGVyIH0gZnJvbSAnLi4vbG9jYWxzdG9yYWdlLmhlbHBlcic7XG5pbXBvcnQgbWVtb3J5U3RvcmFnZSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UucG9seWZpbGwnO1xuXG5cbi8vIEBkeW5hbWljXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlU2VydmljZSB7XG5cdHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2U7XG5cblx0cHVibGljIGdldCBpbnN0YW5jZSgpOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlIHtcblx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgaW5zdGFuY2UoaW5zdGFuY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UpIHtcblx0XHRpZiAoTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdExvY2Fsc3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBzdG9yYWdlVHlwZTogc3RyaW5nO1xuXHRwdWJsaWMgaWRlbnRpZmllcjogc3RyaW5nO1xuXHRwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2U7XG5cdHByaXZhdGUgc3Vic2NyaWJlcnM6IE1hcDxTZWxlY3RvciwgQmVoYXZpb3JTdWJqZWN0PGFueT4+ID0gbmV3IE1hcDxTZWxlY3RvciwgQmVoYXZpb3JTdWJqZWN0PGFueT4+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChMT0NBTFNUT1JBR0VfQ09ORklHKSBwcml2YXRlIGxvY2Fsc3RvcmFnZUNvbmZpZyxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSAkd2luZG93XG5cdCkge1xuXHRcdC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvbiB0aGUgc2VydmljZSBzbyB0aGUgZGVjb3JhdG9yIGhhcyBhY2Nlc3MgdG8gaW5zdGFuY2UgbWV0aG9kc1xuXHRcdHRoaXMuaW5zdGFuY2UgPSB0aGlzO1xuXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGxvY2Fsc3RvcmFnZUNvbmZpZyk7XG5cdFx0dGhpcy52YWxpZGF0ZVN0b3JhZ2UoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRTdG9yYWdlKHtcblx0XHRzdG9yYWdlVHlwZSxcblx0XHRpZGVudGlmaWVyID0gJycsXG5cdH06IExvY2Fsc3RvcmFnZUNvbmZpZyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlVHlwZSA9IHRoaXMudmVyaWZ5U3RvcmFnZVR5cGUoc3RvcmFnZVR5cGUsICdsb2NhbFN0b3JhZ2UnKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VUeXBlID09PSAnbWVtb3J5JyA/IG1lbW9yeVN0b3JhZ2UgOiB0aGlzLiR3aW5kb3dbdGhpcy5zdG9yYWdlVHlwZV07XG5cblx0XHR0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJyb3dzZXIgU3RvcmFnZSBhcGlcblx0ICovXG5cdHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRJdGVtPFQgPSBhbnk+KGtleTogc3RyaW5nKTogVCB7XG5cdFx0cmV0dXJuIExvY2Fsc3RvcmFnZUhlbHBlci5wYXJzZUpTT04oa2V5LCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHR0aGlzLnVwZGF0ZVN1YnNjcmliZXJzKGtleSk7XG5cdH1cblxuXHRwdWJsaWMgY2xlYXIoLi4uYXJncyk6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmFnZS5jbGVhci5hcHBseSh0aGlzLnN0b3JhZ2UsIGFyZ3MpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNvcmF0b3IgYXBpXG5cdCAqL1xuXHRwdWJsaWMgc2VsZWN0PFQgPSBhbnk+KHNlbGVjdG9yOiBTZWxlY3RvciwgY29tcGFyYXRvcjogQ29tcGFyYXRvciA9IExvY2Fsc3RvcmFnZUhlbHBlci5jb21wYXJhdG9yKTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHQvLyBpZiB0aGUgc2VsZWN0b3IgaXMgYW4gYXJyYXksIGFkZCBhIHN1YnNjcmlwdGlvbiBmb3IgdGhlIGxhc3QgaXRlbVxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuICh0aGlzXG5cdFx0XHRcdC5nZXRDaGlsZFN1YnNjcmlwdGlvbihzZWxlY3RvciwgdGhpcy5zZWxlY3Qoc2VsZWN0b3JbMF0pKVxuXHRcdFx0XHQuZGlzdGluY3RVbnRpbENoYW5nZWQoY29tcGFyYXRvcikgYXMgYW55KSBhcyBCZWhhdmlvclN1YmplY3Q8VD47IC8vIG1ha2Ugc3VyZSBpdCBpcyBvbmx5IHRyaWdnZXJlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5hZGRTdWJzY3JpYmVyPFQ+KHNlbGVjdG9yKVxuXHRcdFx0LmRpc3RpbmN0VW50aWxDaGFuZ2VkPFQ+KGNvbXBhcmF0b3IpIGFzIEJlaGF2aW9yU3ViamVjdDxUPjtcblx0fVxuXG5cdHB1YmxpYyBjbGVhclN1YnNjcmliZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHtcblx0XHRcdHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIGdldCBhIGNsb25lIG9mIHRoZSBjdXJyZW50IHN0b3JlZCB2YWx1ZXNcblx0cHVibGljIGdldFN0b3JhZ2VTbmFwc2hvdDxUID0gYW55PigpOiBUIHtcblx0XHRpZiAodGhpcy5zdG9yYWdlVHlwZSA9PT0gJ21lbW9yeScpIHtcblx0XHRcdHJldHVybiB7fSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiB7Li4uT2JqZWN0LmtleXModGhpcy5zdG9yYWdlKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuXHRcdFx0YWNjW3Byb3BdID0gTG9jYWxzdG9yYWdlSGVscGVyLnBhcnNlSlNPTihwcm9wLCB0aGlzLnN0b3JhZ2VbcHJvcF0pO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9LCB7fSl9IGFzIFQ7XG5cdH1cblxuXHQvLyByZXR1cm4gb3IgY3JlYXRlIGEgYmVoYXZpb3JzdWJqZWN0IGZyb20gdGhlIHNlbGVjdGVkIHZhbHVlXG5cdHB1YmxpYyBhZGRTdWJzY3JpYmVyPFQgPSBhbnk+KHNlbGVjdG9yOiBTZWxlY3Rvcik6IEJlaGF2aW9yU3ViamVjdDxUPiB7XG5cdFx0aWYgKCF0aGlzLnN1YnNjcmliZXJzLmhhcyhzZWxlY3RvcikpIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KHNlbGVjdG9yLCBuZXcgQmVoYXZpb3JTdWJqZWN0PFQ+KExvY2Fsc3RvcmFnZUhlbHBlci5zZWxlY3QodGhpcy5nZXRTdG9yYWdlU25hcHNob3QoKSwgc2VsZWN0b3IpKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuZ2V0KHNlbGVjdG9yKTtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVTdG9yYWdlKCk6IHZvaWQge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2VTbmFwc2hvdCgpO1xuXG5cdFx0aWYgKCF0aGlzLmlkZW50aWZpZXIgJiYgIXN0b3JhZ2VbJ2F1aS1zdG9yYWdlJ10pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pZGVudGlmaWVyID09PSBzdG9yYWdlWydhdWktc3RvcmFnZSddKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jbGVhcigpO1xuXG5cdFx0aWYgKHRoaXMuaWRlbnRpZmllcikge1xuXHRcdFx0dGhpcy5zZXRJdGVtKCdhdWktc3RvcmFnZScsIHRoaXMuaWRlbnRpZmllcik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gZmV0Y2ggb3IgY3JlYXRlIGEgc3Vic2NyaXB0aW9uIGZvciB0aGUgcGFyZW50XG5cdC8vIHN1YnNjcmliZSB0byBzYWlkIHN1YnNjcmlwdGlvbiBhbmQgcmV0dXJuIGEgbmV3IHN1YnNjcmliZXIgZnJvbSB0aGUgdmFsdWVcblx0cHJpdmF0ZSBnZXRDaGlsZFN1YnNjcmlwdGlvbjxUID0gYW55PihzZWxlY3RvcjogUGF0aFNlbGVjdG9yLCBwYXJlbnRTdWJzY3JpcHRpb246IEJlaGF2aW9yU3ViamVjdDxhbnk+KTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHRjb25zdCBzdWJzY3JpYmVyID0gdGhpcy5hZGRTdWJzY3JpYmVyPFQ+KHNlbGVjdG9yKTtcblxuXHRcdHBhcmVudFN1YnNjcmlwdGlvblxuXHRcdFx0Lm1hcCgobmV4dFZhbHVlID0+IHtcblx0XHRcdFx0cmV0dXJuIExvY2Fsc3RvcmFnZUhlbHBlci52ZXJpZnlQYXRoKG5leHRWYWx1ZSwgc2VsZWN0b3Iuc2xpY2UoMSkpOyAvLyBmaWx0ZXIgb3V0IHRoZSBzZWxlY3RlZCBwYXRoIHZhbHVlXG5cdFx0XHR9KS5iaW5kKHRoaXMpKVxuXHRcdFx0LnN1YnNjcmliZSgobmV4dFZhbHVlOiBUKSA9PiB7XG5cdFx0XHRcdHN1YnNjcmliZXIubmV4dChuZXh0VmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gc3Vic2NyaWJlcjtcblx0fVxuXG5cdC8vIHVwZGF0ZSBhbGwgc3Vic2NyaWJlcnNcblx0Ly8gaWYgYSBrZXkgaXMgcHJvdmlkZWQsIG1hdGNoaW5nIHdpbGwgcHJldmVudCB1c2VsZXNzIHVwZGF0ZXNcblx0cHJpdmF0ZSB1cGRhdGVTdWJzY3JpYmVycyhrZXk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlU25hcHNob3QoKTtcblx0XHR0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+LCBzZWxlY3RvcjogU2VsZWN0b3IpID0+IHtcblx0XHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZCAmJiAhTG9jYWxzdG9yYWdlSGVscGVyLmtleU1hdGNoZXMoa2V5LCBzZWxlY3RvcikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRzdWJzY3JpYmVyLm5leHQoTG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdChzdG9yYWdlLCBzZWxlY3RvcikpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IHRoZSBwcmVmZXJlZCBzdG9yYWdldHlwZSBleGlzdHMsIGZhbGwgYmFjayB0byBcImxvY2FsU3RvcmFnZeKAnCBvciBtZW1vcnlcblx0cHJpdmF0ZSB2ZXJpZnlTdG9yYWdlVHlwZShzdG9yYWdlVHlwZT86IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSAnbWVtb3J5Jyk6IHN0cmluZyB7XG5cdFx0Y29uc3Qgc3RvcmFnZVR5cGVFeGlzdHMgPSB0aGlzLiR3aW5kb3cuaGFzT3duUHJvcGVydHkoc3RvcmFnZVR5cGUpICYmIHRoaXMuJHdpbmRvd1tzdG9yYWdlVHlwZV0gaW5zdGFuY2VvZiB0aGlzLiR3aW5kb3cuU3RvcmFnZTtcblxuXHRcdGlmIChzdG9yYWdlVHlwZUV4aXN0cykge1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2VUeXBlO1xuXHRcdH1cblxuXHRcdC8vIGlmIHN0b3JhZ2UgdHlwZSBkb2VzIG5vdCBleGlzdCwgdmVyaWZ5IGRlZmF1bHRWYWx1ZSB1bnRpbCBmb3VuZCBvciBtZW1vcnkgd2FzIHNldCBhcyBkZWZhdWx0XG5cdFx0cmV0dXJuIHN0b3JhZ2VUeXBlID09PSAnbWVtb3J5JyA/ICdtZW1vcnknIDogdGhpcy52ZXJpZnlTdG9yYWdlVHlwZShkZWZhdWx0VmFsdWUpO1xuXHR9XG59XG4iXX0=