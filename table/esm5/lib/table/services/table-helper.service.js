/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var TableHelperService = /** @class */ (function () {
    function TableHelperService() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    TableHelperService.prototype.getLabel = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key.hasOwnProperty('label') ? (/** @type {?} */ (key)).label : /** @type {?} */ (key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TableHelperService.prototype.getValue = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key.hasOwnProperty('value') ? (/** @type {?} */ (key)).value : /** @type {?} */ (key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TableHelperService.prototype.getClass = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key.hasOwnProperty('classList') ? (/** @type {?} */ (key)).classList.join(' ') : /** @type {?} */ (key);
    };
    /**
     * @param {?} item
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    TableHelperService.prototype.formatValue = /**
     * @param {?} item
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    function (item, key, index) {
        var /** @type {?} */ value = item[this.getValue(key)];
        return key.format ? key.format(value, key, item, index) : value;
    };
    TableHelperService.decorators = [
        { type: Injectable },
    ];
    return TableHelperService;
}());
export { TableHelperService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUFLbkMscUNBQVE7Ozs7Y0FBQyxHQUF5QjtRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUMsR0FBa0IsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFDLEdBQWEsQ0FBQSxDQUFDOzs7Ozs7SUFHMUUscUNBQVE7Ozs7Y0FBQyxHQUF5QjtRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUMsR0FBa0IsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFDLEdBQWEsQ0FBQSxDQUFDOzs7Ozs7SUFHMUUscUNBQVE7Ozs7Y0FBQyxHQUF5QjtRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUMsR0FBa0IsRUFBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxtQkFBQyxHQUFhLENBQUEsQ0FBQzs7Ozs7Ozs7SUFHNUYsd0NBQVc7Ozs7OztjQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSztRQUNsQyxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzs7Z0JBaEJqRSxVQUFVOzs2QkFIWDs7U0FJYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiB9IGZyb20gJy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVscGVyU2VydmljZSB7XG5cdHB1YmxpYyBnZXRMYWJlbChrZXk6IChUYWJsZUNvbHVtbnxzdHJpbmcpKTogc3RyaW5nIHtcblx0XHRyZXR1cm4ga2V5Lmhhc093blByb3BlcnR5KCdsYWJlbCcpID8gKGtleSBhcyBUYWJsZUNvbHVtbikubGFiZWwgOiBrZXkgYXMgc3RyaW5nO1xuXHR9XG5cblx0cHVibGljIGdldFZhbHVlKGtleTogKFRhYmxlQ29sdW1ufHN0cmluZykpOiBzdHJpbmcge1xuXHRcdHJldHVybiBrZXkuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyAoa2V5IGFzIFRhYmxlQ29sdW1uKS52YWx1ZSA6IGtleSBhcyBzdHJpbmc7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Q2xhc3Moa2V5OiAoVGFibGVDb2x1bW58c3RyaW5nKSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGtleS5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NMaXN0JykgPyAoa2V5IGFzIFRhYmxlQ29sdW1uKS5jbGFzc0xpc3Quam9pbignICcpIDoga2V5IGFzIHN0cmluZztcblx0fVxuXG5cdHB1YmxpYyBmb3JtYXRWYWx1ZShpdGVtLCBrZXksIGluZGV4KTogYW55IHtcblx0XHRjb25zdCB2YWx1ZSA9IGl0ZW1bdGhpcy5nZXRWYWx1ZShrZXkpXTtcblx0XHRyZXR1cm4ga2V5LmZvcm1hdCA/IGtleS5mb3JtYXQodmFsdWUsIGtleSwgaXRlbSwgaW5kZXgpIDogdmFsdWU7XG5cdH1cbn1cbiJdfQ==