/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LocalstorageService } from './services/localstorage.service';
/**
 * @param {?=} selector
 * @param {?=} comparator
 * @return {?}
 */
export function storage(selector, comparator) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7OztBQUV0RSxNQUFNLGtCQUFrQixRQUFtQixFQUFFLFVBQXVCO0lBRW5FLE1BQU0sQ0FBQyxrQkFBa0IsTUFBVyxFQUFFLEdBQVc7UUFDaEQscUJBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZixVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNoRzs7OztRQUVEO1lBQ0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ25FOztRQUdELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNsQyxHQUFHLEVBQUUsTUFBTTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztLQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbGVjdG9yLCBDb21wYXJhdG9yLCBQcm9wZXJ0eURlY29yYXRvciB9IGZyb20gJy4vdHlwZXMvbG9jYWxzdG9yYWdlLnR5cGVzJztcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2Uoc2VsZWN0b3I/OiBTZWxlY3RvciwgY29tcGFyYXRvcj86IENvbXBhcmF0b3IpOiBQcm9wZXJ0eURlY29yYXRvciB7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGxldCBiaW5kaW5nS2V5ID0gc2VsZWN0b3I7XG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0YmluZGluZ0tleSA9IChrZXkubGFzdEluZGV4T2YoJyQnKSA9PT0ga2V5Lmxlbmd0aCAtIDEpID8ga2V5LnN1YnN0cmluZygwLCBrZXkubGVuZ3RoIC0gMSkgOiBrZXk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0dGVyKCkge1xuXHRcdFx0cmV0dXJuIExvY2Fsc3RvcmFnZVNlcnZpY2UuaW5zdGFuY2Uuc2VsZWN0KGJpbmRpbmdLZXksIGNvbXBhcmF0b3IpO1xuXHRcdH1cblxuXHRcdC8vIFJlcGxhY2UgZGVjb3JhdGVkIHByb3BlcnR5IHdpdGggYSBnZXR0ZXIgdGhhdCByZXR1cm5zIHRoZSBvYnNlcnZhYmxlLlxuXHRcdGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuXHRcdFx0Z2V0OiBnZXR0ZXIsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdH0pO1xuXHR9O1xufVxuIl19