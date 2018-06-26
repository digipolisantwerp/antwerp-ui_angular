/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isEqual } from 'lodash-es';
export class LocalstorageHelper {
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
function LocalstorageHelper_tsickle_Closure_declarations() {
    /** @type {?} */
    LocalstorageHelper.comparator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUdwQyxNQUFNOzs7Ozs7SUFJTCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQVksRUFBRSxRQUFrQjtRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2Y7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDMUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzVDOzs7Ozs7SUFNRCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQVcsRUFBRSxRQUFrQjtRQUNoRCx1QkFBTSxrQkFBa0IsR0FBRyxHQUFHLEtBQUssUUFBUSxDQUFDO1FBQzVDLHVCQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25GLHVCQUFNLGtCQUFrQixHQUFHLE9BQU8sUUFBUSxLQUFLLFVBQVUsQ0FBQztRQUUxRCxNQUFNLENBQUMsa0JBQWtCLElBQUksYUFBYSxJQUFJLGtCQUFrQixDQUFDO0tBQ2pFOzs7Ozs7SUFHRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVUsRUFBRSxRQUF1QjtRQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaO1FBRUQscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsUUFBUSxDQUFDO2FBQ1Q7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ1o7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBVyxFQUFFLFFBQXVCLEVBQUUsUUFBYztRQUM3RSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaO1FBRUQscUJBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNqQixxQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUN2QjtZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssQ0FBQzthQUNOO1lBRUQsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFN0IsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNiOzs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQVcsRUFBRSxJQUFZO1FBQ3pDLElBQUksQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO1FBQUMsS0FBSyxDQUFDLENBQUMsaUJBQUEsQ0FBQyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLDJDQUEyQyxDQUFDLENBQUM7WUFDN0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtLQUNEOztnQ0F2Rm1CLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFBhdGhTZWxlY3RvciwgU2VsZWN0b3IgfSBmcm9tICcuL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2VIZWxwZXIge1xuXHRzdGF0aWMgY29tcGFyYXRvciA9IGlzRXF1YWw7XG5cblx0Ly8gc2VsZWN0IGRhdGEgZnJvbSB0aGUgc3RvcmFnZSBmb3IgdGhlIHByb3ZpZGVkIHNlbGVjdG9yXG5cdHN0YXRpYyBzZWxlY3Qoc3RvcmFnZTogYW55LCBzZWxlY3RvcjogU2VsZWN0b3IpOiBhbnkge1xuXHRcdGlmICghc3RvcmFnZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHNlbGVjdG9yKHN0b3JhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmVyaWZ5UGF0aChzdG9yYWdlLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmVyaWZ5UGF0aChzdG9yYWdlLCBbc2VsZWN0b3JdKTtcblx0fVxuXG5cdC8vIHZlcmlmeSB0aGUga2V5IG1hdGNoZXMgd2l0aCB0aGUgc2VsZWN0b3Jcblx0Ly8gcHJvcGVydHkgc2VsZWN0b3I6IGNvbXBhcmUgdGhlIGtleSB3aXRoIHRoZSBzZWxlY3RvclxuXHQvLyBwYXRoIHNlbGVjdG9yOiB2ZXJpZnkgdGhlIGtleSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBwYXRoXG5cdC8vIGZ1bmN0aW9uIHNlbGVjdG9yOiBhbHdheXMgcmV0dXJuIHRydWVcblx0c3RhdGljIGtleU1hdGNoZXMoa2V5OiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3Rvcik6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGtleU1hdGNoZXNTZWxlY3RvciA9IGtleSA9PT0gc2VsZWN0b3I7XG5cdFx0Y29uc3Qga2V5SW5TZWxlY3RvciA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpID8gc2VsZWN0b3IuaW5kZXhPZihrZXkpID49IDAgOiBmYWxzZTtcblx0XHRjb25zdCBzZWxlY3RvcklzRnVuY3Rpb24gPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbic7XG5cblx0XHRyZXR1cm4ga2V5TWF0Y2hlc1NlbGVjdG9yIHx8IGtleUluU2VsZWN0b3IgfHwgc2VsZWN0b3JJc0Z1bmN0aW9uO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IGEgcGF0aCBleGlzdHMgaW4gYW4gb2JqZWN0XG5cdHN0YXRpYyB2ZXJpZnlQYXRoKGRhdGE/OiBhbnksIHNlbGVjdG9yPzogUGF0aFNlbGVjdG9yKSB7XG5cdFx0aWYgKCFkYXRhIHx8ICFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGN1cnIgPSBkYXRhO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aWYgKGN1cnIuaGFzT3duUHJvcGVydHkoc2VsZWN0b3JbaV0pKSB7XG5cdFx0XHRcdGN1cnIgPSBjdXJyW3NlbGVjdG9yW2ldXTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyO1xuXHR9XG5cblx0c3RhdGljIHVwZGF0ZU9yQ3JlYXRlUGF0aChzdGF0ZT86IGFueSwgc2VsZWN0b3I/OiBQYXRoU2VsZWN0b3IsIG5ld1ZhbHVlPzogYW55KSB7XG5cdFx0aWYgKCFzdGF0ZSB8fCAhc2VsZWN0b3IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyID0gc3RhdGU7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpZiAoIWN1cnIuaGFzT3duUHJvcGVydHkoc2VsZWN0b3JbaV0pKSB7XG5cdFx0XHRcdGN1cnJbc2VsZWN0b3JbaV1dID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpID09PSBzZWxlY3Rvci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyID0gY3VycltzZWxlY3RvcltpXV07XG5cdFx0fVxuXG5cdFx0Y3VycltzZWxlY3RvcltpXV0gPSBuZXdWYWx1ZTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdHN0YXRpYyBwYXJzZUpTT04oa2V5OiBzdHJpbmcsIGpzb246IHN0cmluZyk6IGFueSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybihgUGFyc2luZyBrZXkgXCIke2tleX1cIiBpbiBsb2NhbHN0b3JhZ2UgZmFpbGVkLCBpZ25vcmluZyB2YWx1ZS5gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1jb25zb2xlXG5cdFx0XHRyZXR1cm4gU3RyaW5nKGpzb24pO1xuXHRcdH1cblx0fVxufVxuIl19