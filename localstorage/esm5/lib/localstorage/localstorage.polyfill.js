/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage() {
        this.store = new Map();
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MemoryStorage.prototype, "storage", {
        get: /**
         * @return {?}
         */
        function () {
            return Array.from(this.store.entries()).reduce(function (acc, curr) {
                return (tslib_1.__assign({}, acc, (_a = {}, _a[curr[0]] = curr[1], _a)));
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
export { MemoryStorage };
function MemoryStorage_tsickle_Closure_declarations() {
    /** @type {?} */
    MemoryStorage.prototype.store;
}
var /** @type {?} */ storage = new MemoryStorage();
export default new Proxy(storage, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLnBvbHlmaWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2xvY2Fsc3RvcmFnZS9sb2NhbHN0b3JhZ2UucG9seWZpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFBOztxQkFZaUIsSUFBSSxHQUFHLEVBQUU7OzBCQVhkLGlDQUFNOzs7OztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs7OzBCQUdiLGtDQUFPOzs7OztZQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQW1CO2dCQUFLLE9BQUEsc0JBQ3pFLEdBQUcsZUFDTCxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUNqQjs7WUFIMkUsQ0FHM0UsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBS0YsMkJBQUc7Ozs7Y0FBQyxLQUFhO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O0lBR3RDLCtCQUFPOzs7O2NBQUMsR0FBVztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7SUFHckIsK0JBQU87Ozs7O2NBQUMsR0FBVyxFQUFFLEtBQVU7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHckIsa0NBQVU7Ozs7Y0FBQyxHQUFXO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUdqQiw2QkFBSzs7OztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7O3dCQS9CckI7SUFpQ0MsQ0FBQTtBQWpDRCx5QkFpQ0M7Ozs7O0FBRUQscUJBQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7QUFFcEMsZUFBZSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7SUFDakMsR0FBRyxFQUFFLFVBQVUsTUFBVyxFQUFFLElBQUksRUFBRSxRQUFRO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNGLENBQUM7SUFDRCxPQUFPLEVBQUUsVUFBVSxNQUFXO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHFEQUFxRDtJQUMxRixDQUFDO0lBQ0Qsd0JBQXdCO1FBQ3ZCLE1BQU0sQ0FBQztZQUNOLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ2xCLENBQUM7SUFDSCxDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JhZ2Uge1xuXHRwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNpemU7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IHN0b3JhZ2UoKTogYW55IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0b3JlLmVudHJpZXMoKSkucmVkdWNlKChhY2MsIGN1cnI6IFtzdHJpbmcsIGFueV0pID0+ICh7XG5cdFx0XHQuLi5hY2MsXG5cdFx0XHRbY3VyclswXV06IGN1cnJbMV0sXG5cdFx0fSksIHt9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RvcmUgPSBuZXcgTWFwKCk7XG5cblx0cHVibGljIGtleShpbmRleDogbnVtYmVyKTogYW55IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0b3JlLmtleXMoKSlbaW5kZXhdO1xuXHR9XG5cblx0cHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLmdldChrZXkpO1xuXHR9XG5cblx0cHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlLnNldChrZXksIHZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yZS5kZWxldGUoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlLmNsZWFyKCk7XG5cdH1cbn1cblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBNZW1vcnlTdG9yYWdlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm94eShzdG9yYWdlLCB7XG5cdGdldDogZnVuY3Rpb24gKHRhcmdldDogYW55LCBuYW1lLCByZWNlaXZlcikge1xuXHRcdGlmIChuYW1lIGluIHRhcmdldCkge1xuXHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpO1xuXHRcdH1cblxuXHRcdGlmIChuYW1lIGluIHRhcmdldC5fX3Byb3RvX18pIHtcblx0XHRcdHJldHVybiB0YXJnZXQuX19wcm90b19fW25hbWVdO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQuc3RvcmFnZSkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5nZXRJdGVtKG5hbWUpO1xuXHRcdH1cblx0fSxcblx0b3duS2V5czogZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldC5zdG9yYWdlKTsgLy8gcmV0dXJuIHN0b3JlZCBrZXlzIHdoZW4gc3RvcmFnZSBrZXlzIGFyZSByZXF1ZXN0ZWRcblx0fSxcblx0Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLCAvLyBlbnN1cmUgc3RvcmVkIGtleXMga2FuIGJlIGl0ZXJhdGVkXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fTtcblx0fSxcbn0pO1xuIl19