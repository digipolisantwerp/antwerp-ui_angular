/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import { isEqual } from 'lodash-es';
import { LocalstorageHelper } from '../../localstorage.helper';
import { LocalstorageService } from '../../services/localstorage.service';
export class LocalstorageReduxPlugin {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmVuaGFuY2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2xvY2Fsc3RvcmFnZS9zdG9yZS9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmVuaGFuY2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUkxRSxNQUFNOzs7OztJQUlMLFlBQ1MsU0FDQTtRQURBLFlBQU8sR0FBUCxPQUFPO1FBQ1Asd0JBQW1CLEdBQW5CLG1CQUFtQjsyQkFKNEMsSUFBSSxHQUFHLEVBQStDO0tBSzFIOzs7Ozs7SUFFSixRQUFRLENBQVUsU0FBZ0Q7UUFDakUsdUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQixNQUFNLENBQUMsQ0FBQyxXQUF5QyxFQUFnQyxFQUFFLENBQUMsQ0FDbkYsT0FBbUIsRUFDbkIsWUFBaUIsRUFDTixFQUFFO1lBQ2IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLG9CQUN0QixZQUFZLEVBQ1osV0FBVyxFQUNiLENBQUM7U0FDSCxDQUFDO0tBQ0Y7Ozs7O0lBRUQsU0FBUyxDQUFDLFNBQWtEO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQ25CLE1BQU0sQ0FB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ZWR1Y2VyLCBTdG9yZUNyZWF0b3IsIFN0b3JlRW5oYW5jZXIsIFN0b3JlLCBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTmdSZWR1eCB9IGZyb20gJ0Bhbmd1bGFyLXJlZHV4L3N0b3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlyc3QnO1xuXG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgTG9jYWxzdG9yYWdlSGVscGVyIH0gZnJvbSAnLi4vLi4vbG9jYWxzdG9yYWdlLmhlbHBlcic7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvcGVydHlTZWxlY3RvciwgUGF0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvbG9jYWxzdG9yYWdlLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2Fsc3RvcmFnZVJlZHV4UGx1Z2luIHtcblx0cHJpdmF0ZSBzdG9yZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3IsIFN1YnNjcmlwdGlvbj4gPSBuZXcgTWFwPFByb3BlcnR5U2VsZWN0b3J8UGF0aFNlbGVjdG9yLCBTdWJzY3JpcHRpb24+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ1JlZHV4OiBOZ1JlZHV4PGFueT4sXG5cdFx0cHJpdmF0ZSBsb2NhbHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlXG5cdCkge31cblxuXHRlbmhhbmNlcjxUID0gYW55PihzZWxlY3RvcnM/OiBBcnJheTxQcm9wZXJ0eVNlbGVjdG9yfFBhdGhTZWxlY3Rvcj4pOiBTdG9yZUVuaGFuY2VyPFQ+IHtcblx0XHRjb25zdCBzdG9yZWRTdGF0ZSA9IHRoaXMuc2VsZWN0RnJvbVN0YXRlKHNlbGVjdG9ycyk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShzZWxlY3RvcnMpO1xuXG5cdFx0cmV0dXJuIChjcmVhdGVTdG9yZTogU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvcjxUPik6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8VD4gPT4gKFxuXHRcdFx0cmVkdWNlcjogUmVkdWNlcjxUPixcblx0XHRcdGluaXRpYWxTdGF0ZTogYW55XG5cdFx0KTogU3RvcmU8VD4gPT4ge1xuXHRcdFx0cmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHtcblx0XHRcdFx0Li4uaW5pdGlhbFN0YXRlLFxuXHRcdFx0XHQuLi5zdG9yZWRTdGF0ZSxcblx0XHRcdH0pO1xuXHRcdH07XG5cdH1cblxuXHRzdWJzY3JpYmUoc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvciB8IFBhdGhTZWxlY3Rvcj4pOiB2b2lkIHtcblx0XHR0aGlzLm5nUmVkdXguc2VsZWN0KClcblx0XHRcdC5maWx0ZXIoc3RvcmUgPT4gISFzdG9yZSlcblx0XHRcdC5maXJzdCgpXG5cdFx0XHQuc3Vic2NyaWJlKHN0b3JlID0+IHtcblx0XHRcdFx0aWYgKCFzZWxlY3RvcnMpIHtcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmliZVNlbGVjdG9yKCdyZWR1eFN0YXRlJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gdGhpcy5zdWJzY3JpYmVTZWxlY3RvcihzZWxlY3RvcikpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVNlbGVjdG9yKHNlbGVjdG9yOiBQcm9wZXJ0eVNlbGVjdG9yIHwgUGF0aFNlbGVjdG9yKTogdm9pZCB7XG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1YnNjcmliZXIgPSB0aGlzLnN1YnNjcmliZXJzLmdldChzZWxlY3Rvcik7XG5cblx0XHRpZiAoc3Vic2NyaWJlcikge1xuXHRcdFx0c3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KHNlbGVjdG9yLCB0aGlzLm5nUmVkdXguc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdG9yS2V5ID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3Rvci5qb2luKCcuJykgOiBTdHJpbmcoc2VsZWN0b3IpO1xuXHRcdFx0Y29uc3Qgc3RvcmVkID0gdGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oc2VsZWN0b3JLZXkpO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWVzID0gc2VsZWN0b3IgPT09ICdyZWR1eFN0YXRlJyA/IHRoaXMubmdSZWR1eC5nZXRTdGF0ZSgpIDpcblx0XHRcdFx0TG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdCh0aGlzLm5nUmVkdXguZ2V0U3RhdGUoKSwgc2VsZWN0b3IpO1xuXG5cdFx0XHRpZiAoaXNFcXVhbChzdG9yZWQsIG5ld1ZhbHVlcykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbShzZWxlY3RvcktleSwgbmV3VmFsdWVzKTtcblx0XHR9KSBhcyBhbnkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RGcm9tU3RhdGUoc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3I+KTogYW55IHtcblx0XHRpZiAoIXNlbGVjdG9ycyB8fCAhc2VsZWN0b3JzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRJdGVtKCdyZWR1eFN0YXRlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGVjdG9ycy5yZWR1Y2UoKGFjYywgc2VsZWN0b3IpID0+IHtcblx0XHRcdGNvbnN0IHN0b3JlZERhdGEgPSBMb2NhbHN0b3JhZ2VIZWxwZXIuc2VsZWN0KHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlU25hcHNob3QoKSwgc2VsZWN0b3IpO1xuXHRcdFx0Y29uc3QgcGF0aFNlbGVjdG9yID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3RvciA6IFtzZWxlY3Rvcl07XG5cblx0XHRcdExvY2Fsc3RvcmFnZUhlbHBlci51cGRhdGVPckNyZWF0ZVBhdGgoYWNjLCBwYXRoU2VsZWN0b3IsIHN0b3JlZERhdGEpO1xuXG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH0sIHt9KTtcblx0fVxufVxuIl19