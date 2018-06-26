/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe, Inject } from '@angular/core';
import { MONTH_LABELS, DEFAULT_MONTH_LABELS } from '../agenda.conf';
var MonthPipe = /** @class */ (function () {
    function MonthPipe(monthLabels) {
        if (monthLabels === void 0) { monthLabels = DEFAULT_MONTH_LABELS; }
        this.monthLabels = monthLabels;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    MonthPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ month = parseInt(value, 10);
        if (isNaN(month)) {
            return null;
        }
        var /** @type {?} */ index = (month - 1).toString();
        return this.monthLabels[index.toString()] || DEFAULT_MONTH_LABELS[index.toString()];
    };
    MonthPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'monthPipe',
                },] },
    ];
    /** @nocollapse */
    MonthPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MONTH_LABELS,] }] }
    ]; };
    return MonthPipe;
}());
export { MonthPipe };
function MonthPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthPipe.prototype.monthLabels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnZW5kYS8iLCJzb3VyY2VzIjpbImxpYi9hZ2VuZGEvcGlwZXMvbW9udGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFNbkUsbUJBQytCLFdBQWtDO3dFQUFBO1FBQWxDLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtLQUM3RDs7Ozs7SUFFRyw2QkFBUzs7OztjQUFDLEtBQVU7UUFDMUIscUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxxQkFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7OztnQkFoQnJGLElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsV0FBVztpQkFDakI7Ozs7Z0RBR0UsTUFBTSxTQUFDLFlBQVk7O29CQVR0Qjs7U0FPYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1PTlRIX0xBQkVMUywgREVGQVVMVF9NT05USF9MQUJFTFMgfSBmcm9tICcuLi9hZ2VuZGEuY29uZic7XG5cbkBQaXBlKHtcblx0bmFtZTogJ21vbnRoUGlwZScsXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE1PTlRIX0xBQkVMUykgcHJpdmF0ZSBtb250aExhYmVscyA9IERFRkFVTFRfTU9OVEhfTEFCRUxTXG5cdCkge31cblxuXHRwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IG1vbnRoID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuXHRcdGlmIChpc05hTihtb250aCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ID0gKG1vbnRoIC0gMSkudG9TdHJpbmcoKTtcblx0XHRyZXR1cm4gdGhpcy5tb250aExhYmVsc1tpbmRleC50b1N0cmluZygpXSB8fCBERUZBVUxUX01PTlRIX0xBQkVMU1tpbmRleC50b1N0cmluZygpXTtcblx0fVxufVxuIl19