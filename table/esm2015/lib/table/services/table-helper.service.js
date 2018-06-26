/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class TableHelperService {
    /**
     * @param {?} key
     * @return {?}
     */
    getLabel(key) {
        return key.hasOwnProperty('label') ? (/** @type {?} */ (key)).label : /** @type {?} */ (key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getValue(key) {
        return key.hasOwnProperty('value') ? (/** @type {?} */ (key)).value : /** @type {?} */ (key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getClass(key) {
        return key.hasOwnProperty('classList') ? (/** @type {?} */ (key)).classList.join(' ') : /** @type {?} */ (key);
    }
    /**
     * @param {?} item
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    formatValue(item, key, index) {
        const /** @type {?} */ value = item[this.getValue(key)];
        return key.format ? key.format(value, key, item, index) : value;
    }
}
TableHelperService.decorators = [
    { type: Injectable },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxNQUFNOzs7OztJQUNFLFFBQVEsQ0FBQyxHQUF5QjtRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUMsR0FBa0IsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFDLEdBQWEsQ0FBQSxDQUFDOzs7Ozs7SUFHMUUsUUFBUSxDQUFDLEdBQXlCO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQyxHQUFrQixFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsbUJBQUMsR0FBYSxDQUFBLENBQUM7Ozs7OztJQUcxRSxRQUFRLENBQUMsR0FBeUI7UUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFDLEdBQWtCLEVBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQUMsR0FBYSxDQUFBLENBQUM7Ozs7Ozs7O0lBRzVGLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUs7UUFDbEMsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7OztZQWhCakUsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFibGVIZWxwZXJTZXJ2aWNlIHtcblx0cHVibGljIGdldExhYmVsKGtleTogKFRhYmxlQ29sdW1ufHN0cmluZykpOiBzdHJpbmcge1xuXHRcdHJldHVybiBrZXkuaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgPyAoa2V5IGFzIFRhYmxlQ29sdW1uKS5sYWJlbCA6IGtleSBhcyBzdHJpbmc7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VmFsdWUoa2V5OiAoVGFibGVDb2x1bW58c3RyaW5nKSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGtleS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IChrZXkgYXMgVGFibGVDb2x1bW4pLnZhbHVlIDoga2V5IGFzIHN0cmluZztcblx0fVxuXG5cdHB1YmxpYyBnZXRDbGFzcyhrZXk6IChUYWJsZUNvbHVtbnxzdHJpbmcpKTogc3RyaW5nIHtcblx0XHRyZXR1cm4ga2V5Lmhhc093blByb3BlcnR5KCdjbGFzc0xpc3QnKSA/IChrZXkgYXMgVGFibGVDb2x1bW4pLmNsYXNzTGlzdC5qb2luKCcgJykgOiBrZXkgYXMgc3RyaW5nO1xuXHR9XG5cblx0cHVibGljIGZvcm1hdFZhbHVlKGl0ZW0sIGtleSwgaW5kZXgpOiBhbnkge1xuXHRcdGNvbnN0IHZhbHVlID0gaXRlbVt0aGlzLmdldFZhbHVlKGtleSldO1xuXHRcdHJldHVybiBrZXkuZm9ybWF0ID8ga2V5LmZvcm1hdCh2YWx1ZSwga2V5LCBpdGVtLCBpbmRleCkgOiB2YWx1ZTtcblx0fVxufVxuIl19