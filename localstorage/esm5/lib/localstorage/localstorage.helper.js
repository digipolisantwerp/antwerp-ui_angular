/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isEqual } from 'lodash-es';
var LocalstorageHelper = /** @class */ (function () {
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
        catch (/** @type {?} */ e) {
            console.warn("Parsing key \"" + key + "\" in localstorage failed, ignoring value."); // tslint:disable-line:no-console
            return String(json);
        }
    };
    LocalstorageHelper.comparator = isEqual;
    return LocalstorageHelper;
}());
export { LocalstorageHelper };
function LocalstorageHelper_tsickle_Closure_declarations() {
    /** @type {?} */
    LocalstorageHelper.comparator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztJQU1uQyx5REFBeUQ7Ozs7OztJQUNsRCx5QkFBTTs7Ozs7SUFBYixVQUFjLE9BQVksRUFBRSxRQUFrQjtRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2Y7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDMUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBRUQsMkNBQTJDO0lBQzNDLHVEQUF1RDtJQUN2RCw2REFBNkQ7SUFDN0Qsd0NBQXdDOzs7Ozs7SUFDakMsNkJBQVU7Ozs7O0lBQWpCLFVBQWtCLEdBQVcsRUFBRSxRQUFrQjtRQUNoRCxxQkFBTSxrQkFBa0IsR0FBRyxHQUFHLEtBQUssUUFBUSxDQUFDO1FBQzVDLHFCQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25GLHFCQUFNLGtCQUFrQixHQUFHLE9BQU8sUUFBUSxLQUFLLFVBQVUsQ0FBQztRQUUxRCxNQUFNLENBQUMsa0JBQWtCLElBQUksYUFBYSxJQUFJLGtCQUFrQixDQUFDO0tBQ2pFO0lBRUQsb0NBQW9DOzs7Ozs7SUFDN0IsNkJBQVU7Ozs7O0lBQWpCLFVBQWtCLElBQVUsRUFBRSxRQUF1QjtRQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaO1FBRUQscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsUUFBUSxDQUFDO2FBQ1Q7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ1o7Ozs7Ozs7SUFFTSxxQ0FBa0I7Ozs7OztJQUF6QixVQUEwQixLQUFXLEVBQUUsUUFBdUIsRUFBRSxRQUFjO1FBQzdFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxxQkFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLHFCQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFVixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3ZCO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxDQUFDO2FBQ047WUFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUU3QixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2I7Ozs7OztJQUVNLDRCQUFTOzs7OztJQUFoQixVQUFpQixHQUFXLEVBQUUsSUFBWTtRQUN6QyxJQUFJLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFBLENBQUMsRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBZ0IsR0FBRywrQ0FBMkMsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7S0FDRDtvQ0F2Rm1CLE9BQU87NkJBSjVCOztTQUdhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgUGF0aFNlbGVjdG9yLCBTZWxlY3RvciB9IGZyb20gJy4vdHlwZXMvbG9jYWxzdG9yYWdlLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIExvY2Fsc3RvcmFnZUhlbHBlciB7XG5cdHN0YXRpYyBjb21wYXJhdG9yID0gaXNFcXVhbDtcblxuXHQvLyBzZWxlY3QgZGF0YSBmcm9tIHRoZSBzdG9yYWdlIGZvciB0aGUgcHJvdmlkZWQgc2VsZWN0b3Jcblx0c3RhdGljIHNlbGVjdChzdG9yYWdlOiBhbnksIHNlbGVjdG9yOiBTZWxlY3Rvcik6IGFueSB7XG5cdFx0aWYgKCFzdG9yYWdlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAoIXNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm4gc3RvcmFnZTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0b3Ioc3RvcmFnZSk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52ZXJpZnlQYXRoKHN0b3JhZ2UsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52ZXJpZnlQYXRoKHN0b3JhZ2UsIFtzZWxlY3Rvcl0pO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IHRoZSBrZXkgbWF0Y2hlcyB3aXRoIHRoZSBzZWxlY3RvclxuXHQvLyBwcm9wZXJ0eSBzZWxlY3RvcjogY29tcGFyZSB0aGUga2V5IHdpdGggdGhlIHNlbGVjdG9yXG5cdC8vIHBhdGggc2VsZWN0b3I6IHZlcmlmeSB0aGUga2V5IGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIHBhdGhcblx0Ly8gZnVuY3Rpb24gc2VsZWN0b3I6IGFsd2F5cyByZXR1cm4gdHJ1ZVxuXHRzdGF0aWMga2V5TWF0Y2hlcyhrZXk6IHN0cmluZywgc2VsZWN0b3I6IFNlbGVjdG9yKTogQm9vbGVhbiB7XG5cdFx0Y29uc3Qga2V5TWF0Y2hlc1NlbGVjdG9yID0ga2V5ID09PSBzZWxlY3Rvcjtcblx0XHRjb25zdCBrZXlJblNlbGVjdG9yID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3Rvci5pbmRleE9mKGtleSkgPj0gMCA6IGZhbHNlO1xuXHRcdGNvbnN0IHNlbGVjdG9ySXNGdW5jdGlvbiA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJztcblxuXHRcdHJldHVybiBrZXlNYXRjaGVzU2VsZWN0b3IgfHwga2V5SW5TZWxlY3RvciB8fCBzZWxlY3RvcklzRnVuY3Rpb247XG5cdH1cblxuXHQvLyB2ZXJpZnkgYSBwYXRoIGV4aXN0cyBpbiBhbiBvYmplY3Rcblx0c3RhdGljIHZlcmlmeVBhdGgoZGF0YT86IGFueSwgc2VsZWN0b3I/OiBQYXRoU2VsZWN0b3IpIHtcblx0XHRpZiAoIWRhdGEgfHwgIXNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgY3VyciA9IGRhdGE7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpZiAoY3Vyci5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcltpXSkpIHtcblx0XHRcdFx0Y3VyciA9IGN1cnJbc2VsZWN0b3JbaV1dO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnI7XG5cdH1cblxuXHRzdGF0aWMgdXBkYXRlT3JDcmVhdGVQYXRoKHN0YXRlPzogYW55LCBzZWxlY3Rvcj86IFBhdGhTZWxlY3RvciwgbmV3VmFsdWU/OiBhbnkpIHtcblx0XHRpZiAoIXN0YXRlIHx8ICFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGN1cnIgPSBzdGF0ZTtcblx0XHRsZXQgaSA9IDA7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgc2VsZWN0b3IubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGlmICghY3Vyci5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcltpXSkpIHtcblx0XHRcdFx0Y3VycltzZWxlY3RvcltpXV0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGkgPT09IHNlbGVjdG9yLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnIgPSBjdXJyW3NlbGVjdG9yW2ldXTtcblx0XHR9XG5cblx0XHRjdXJyW3NlbGVjdG9yW2ldXSA9IG5ld1ZhbHVlO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG5cblx0c3RhdGljIHBhcnNlSlNPTihrZXk6IHN0cmluZywganNvbjogc3RyaW5nKTogYW55IHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS53YXJuKGBQYXJzaW5nIGtleSBcIiR7a2V5fVwiIGluIGxvY2Fsc3RvcmFnZSBmYWlsZWQsIGlnbm9yaW5nIHZhbHVlLmApOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWNvbnNvbGVcblx0XHRcdHJldHVybiBTdHJpbmcoanNvbik7XG5cdFx0fVxuXHR9XG59XG4iXX0=