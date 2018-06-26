/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import { isEqual } from 'lodash-es';
import { LocalstorageHelper } from '../../localstorage.helper';
import { LocalstorageService } from '../../services/localstorage.service';
var LocalstorageReduxPlugin = /** @class */ (function () {
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
        return function (createStore) { return function (reducer, initialState) {
            return createStore(reducer, tslib_1.__assign({}, initialState, storedState));
        }; };
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
            .filter(function (store) { return !!store; })
            .first()
            .subscribe(function (store) {
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
            if (isEqual(stored, newValues)) {
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
        { type: Injectable },
    ];
    /** @nocollapse */
    LocalstorageReduxPlugin.ctorParameters = function () { return [
        { type: NgRedux },
        { type: LocalstorageService }
    ]; };
    return LocalstorageReduxPlugin;
}());
export { LocalstorageReduxPlugin };
function LocalstorageReduxPlugin_tsickle_Closure_declarations() {
    /** @type {?} */
    LocalstorageReduxPlugin.prototype.storeSubscription;
    /** @type {?} */
    LocalstorageReduxPlugin.prototype.subscribers;
    /** @type {?} */
    LocalstorageReduxPlugin.prototype.ngRedux;
    /** @type {?} */
    LocalstorageReduxPlugin.prototype.localstorageService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmVuaGFuY2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2xvY2Fsc3RvcmFnZS9zdG9yZS9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmVuaGFuY2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTywwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0lBUXpFLGlDQUNTLFNBQ0E7UUFEQSxZQUFPLEdBQVAsT0FBTztRQUNQLHdCQUFtQixHQUFuQixtQkFBbUI7MkJBSjRDLElBQUksR0FBRyxFQUErQztLQUsxSDs7Ozs7O0lBRUosMENBQVE7Ozs7O0lBQVIsVUFBa0IsU0FBZ0Q7UUFDakUscUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQixNQUFNLENBQUMsVUFBQyxXQUF5QyxJQUFtQyxPQUFBLFVBQ25GLE9BQW1CLEVBQ25CLFlBQWlCO1lBRWpCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyx1QkFDdEIsWUFBWSxFQUNaLFdBQVcsRUFDYixDQUFDO1NBQ0gsRUFSbUYsQ0FRbkYsQ0FBQztLQUNGOzs7OztJQUVELDJDQUFTOzs7O0lBQVQsVUFBVSxTQUFrRDtRQUE1RCxpQkFZQztRQVhBLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxF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NUI7O1NBY2EsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVkdWNlciwgU3RvcmVDcmVhdG9yLCBTdG9yZUVuaGFuY2VyLCBTdG9yZSwgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpcnN0JztcblxuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IExvY2Fsc3RvcmFnZUhlbHBlciB9IGZyb20gJy4uLy4uL2xvY2Fsc3RvcmFnZS5oZWxwZXInO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb3BlcnR5U2VsZWN0b3IsIFBhdGhTZWxlY3RvciB9IGZyb20gJy4uLy4uL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2VSZWR1eFBsdWdpbiB7XG5cdHByaXZhdGUgc3RvcmVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblx0cHJpdmF0ZSBzdWJzY3JpYmVyczogTWFwPFByb3BlcnR5U2VsZWN0b3J8UGF0aFNlbGVjdG9yLCBTdWJzY3JpcHRpb24+ID0gbmV3IE1hcDxQcm9wZXJ0eVNlbGVjdG9yfFBhdGhTZWxlY3RvciwgU3Vic2NyaXB0aW9uPigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbmdSZWR1eDogTmdSZWR1eDxhbnk+LFxuXHRcdHByaXZhdGUgbG9jYWxzdG9yYWdlU2VydmljZTogTG9jYWxzdG9yYWdlU2VydmljZVxuXHQpIHt9XG5cblx0ZW5oYW5jZXI8VCA9IGFueT4oc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3I+KTogU3RvcmVFbmhhbmNlcjxUPiB7XG5cdFx0Y29uc3Qgc3RvcmVkU3RhdGUgPSB0aGlzLnNlbGVjdEZyb21TdGF0ZShzZWxlY3RvcnMpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoc2VsZWN0b3JzKTtcblxuXHRcdHJldHVybiAoY3JlYXRlU3RvcmU6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8VD4pOiBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yPFQ+ID0+IChcblx0XHRcdHJlZHVjZXI6IFJlZHVjZXI8VD4sXG5cdFx0XHRpbml0aWFsU3RhdGU6IGFueVxuXHRcdCk6IFN0b3JlPFQ+ID0+IHtcblx0XHRcdHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCB7XG5cdFx0XHRcdC4uLmluaXRpYWxTdGF0ZSxcblx0XHRcdFx0Li4uc3RvcmVkU3RhdGUsXG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9XG5cblx0c3Vic2NyaWJlKHNlbGVjdG9ycz86IEFycmF5PFByb3BlcnR5U2VsZWN0b3IgfCBQYXRoU2VsZWN0b3I+KTogdm9pZCB7XG5cdFx0dGhpcy5uZ1JlZHV4LnNlbGVjdCgpXG5cdFx0XHQuZmlsdGVyKHN0b3JlID0+ICEhc3RvcmUpXG5cdFx0XHQuZmlyc3QoKVxuXHRcdFx0LnN1YnNjcmliZShzdG9yZSA9PiB7XG5cdFx0XHRcdGlmICghc2VsZWN0b3JzKSB7XG5cdFx0XHRcdFx0dGhpcy5zdWJzY3JpYmVTZWxlY3RvcigncmVkdXhTdGF0ZScpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHRoaXMuc3Vic2NyaWJlU2VsZWN0b3Ioc2VsZWN0b3IpKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzdWJzY3JpYmVTZWxlY3RvcihzZWxlY3RvcjogUHJvcGVydHlTZWxlY3RvciB8IFBhdGhTZWxlY3Rvcik6IHZvaWQge1xuXHRcdGlmICghc2VsZWN0b3IpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzdWJzY3JpYmVyID0gdGhpcy5zdWJzY3JpYmVycy5nZXQoc2VsZWN0b3IpO1xuXG5cdFx0aWYgKHN1YnNjcmliZXIpIHtcblx0XHRcdHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cblx0XHR0aGlzLnN1YnNjcmliZXJzLnNldChzZWxlY3RvciwgdGhpcy5uZ1JlZHV4LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RvcktleSA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpID8gc2VsZWN0b3Iuam9pbignLicpIDogU3RyaW5nKHNlbGVjdG9yKTtcblx0XHRcdGNvbnN0IHN0b3JlZCA9IHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRJdGVtKHNlbGVjdG9yS2V5KTtcblx0XHRcdGNvbnN0IG5ld1ZhbHVlcyA9IHNlbGVjdG9yID09PSAncmVkdXhTdGF0ZScgPyB0aGlzLm5nUmVkdXguZ2V0U3RhdGUoKSA6XG5cdFx0XHRcdExvY2Fsc3RvcmFnZUhlbHBlci5zZWxlY3QodGhpcy5uZ1JlZHV4LmdldFN0YXRlKCksIHNlbGVjdG9yKTtcblxuXHRcdFx0aWYgKGlzRXF1YWwoc3RvcmVkLCBuZXdWYWx1ZXMpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oc2VsZWN0b3JLZXksIG5ld1ZhbHVlcyk7XG5cdFx0fSkgYXMgYW55KTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0RnJvbVN0YXRlKHNlbGVjdG9ycz86IEFycmF5PFByb3BlcnR5U2VsZWN0b3J8UGF0aFNlbGVjdG9yPik6IGFueSB7XG5cdFx0aWYgKCFzZWxlY3RvcnMgfHwgIXNlbGVjdG9ycy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiB0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbSgncmVkdXhTdGF0ZScpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZWxlY3RvcnMucmVkdWNlKChhY2MsIHNlbGVjdG9yKSA9PiB7XG5cdFx0XHRjb25zdCBzdG9yZWREYXRhID0gTG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdCh0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZVNuYXBzaG90KCksIHNlbGVjdG9yKTtcblx0XHRcdGNvbnN0IHBhdGhTZWxlY3RvciA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBbc2VsZWN0b3JdO1xuXG5cdFx0XHRMb2NhbHN0b3JhZ2VIZWxwZXIudXBkYXRlT3JDcmVhdGVQYXRoKGFjYywgcGF0aFNlbGVjdG9yLCBzdG9yZWREYXRhKTtcblxuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9LCB7fSk7XG5cdH1cbn1cbiJdfQ==