/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ValidationMessagesService } from '../../services/validation-messages.service';
var ValidationListComponent = /** @class */ (function () {
    function ValidationListComponent(messagesService) {
        this.messagesService = messagesService;
        this.invalidFiles = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ValidationListComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.invalidFiles.splice(index, 1);
    };
    /**
     * @param {?} reasons
     * @return {?}
     */
    ValidationListComponent.prototype.formatReasons = /**
     * @param {?} reasons
     * @return {?}
     */
    function (reasons) {
        var /** @type {?} */ result = [];
        try {
            for (var reasons_1 = tslib_1.__values(reasons), reasons_1_1 = reasons_1.next(); !reasons_1_1.done; reasons_1_1 = reasons_1.next()) {
                var reason = reasons_1_1.value;
                result.push(this.messagesService[reason]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (reasons_1_1 && !reasons_1_1.done && (_a = reasons_1.return)) _a.call(reasons_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result.join(', ');
        var e_1, _a;
    };
    ValidationListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-validation-list',
                    template: "<ul class=\"m-upload__files\">\n    <li *ngFor=\"let invalidFile of invalidFiles; let i = index\" class=\"is-error\">\n        <span class=\"fa fa-warning\"></span>\n        <span class=\"m-upload__filename\">{{ invalidFile.file.name }}</span>\n        <span class=\"m-upload__error\">{{ formatReasons(invalidFile.reasons) }}</span>\n\n        <button (click)=\"remove(i)\" class=\"m-upload__delete a-button-transparent a-button--danger a-button--small has-icon\">\n            <i class=\"fa fa-close\"></i>\n        </button>\n    </li>\n</ul>\n",
                },] },
    ];
    /** @nocollapse */
    ValidationListComponent.ctorParameters = function () { return [
        { type: ValidationMessagesService }
    ]; };
    ValidationListComponent.propDecorators = {
        invalidFiles: [{ type: Input }]
    };
    return ValidationListComponent;
}());
export { ValidationListComponent };
function ValidationListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ValidationListComponent.prototype.invalidFiles;
    /** @type {?} */
    ValidationListComponent.prototype.messagesService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC9jb21wb25lbnRzL3ZhbGlkYXRpb24tbGlzdC92YWxpZGF0aW9uLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0lBb0J0RixpQ0FBb0IsZUFBMEM7UUFBMUMsb0JBQWUsR0FBZixlQUFlLENBQTJCOzRCQUZoQixFQUFFO0tBRWtCOzs7OztJQUUzRCx3Q0FBTTs7OztjQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHN0IsK0NBQWE7Ozs7Y0FBQyxPQUFpQjtRQUNyQyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDOztZQUNsQixHQUFHLENBQUUsQ0FBaUIsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQTtnQkFBdkIsSUFBTSxNQUFNLG9CQUFBO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMxQzs7Ozs7Ozs7O1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Z0JBN0IxQixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLG9pQkFXVjtpQkFDQTs7OztnQkFoQlEseUJBQXlCOzs7K0JBa0JoQyxLQUFLOztrQ0F0QlA7O1NBcUJhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnZhbGlkRmlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5cbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdmFsaWRhdGlvbi1saXN0Jyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJtLXVwbG9hZF9fZmlsZXNcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGludmFsaWRGaWxlIG9mIGludmFsaWRGaWxlczsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwiaXMtZXJyb3JcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS13YXJuaW5nXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm0tdXBsb2FkX19maWxlbmFtZVwiPnt7IGludmFsaWRGaWxlLmZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLXVwbG9hZF9fZXJyb3JcIj57eyBmb3JtYXRSZWFzb25zKGludmFsaWRGaWxlLnJlYXNvbnMpIH19PC9zcGFuPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShpKVwiIGNsYXNzPVwibS11cGxvYWRfX2RlbGV0ZSBhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tZGFuZ2VyIGEtYnV0dG9uLS1zbWFsbCBoYXMtaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uTGlzdENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBpbnZhbGlkRmlsZXM6IEludmFsaWRGaWxlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VzU2VydmljZTogVmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZSkge31cblxuXHRwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmludmFsaWRGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0cHVibGljIGZvcm1hdFJlYXNvbnMocmVhc29uczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGZvciAgKGNvbnN0IHJlYXNvbiBvZiByZWFzb25zKSB7XG5cdFx0XHRyZXN1bHQucHVzaCh0aGlzLm1lc3NhZ2VzU2VydmljZVtyZWFzb25dKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcsICcpO1xuXHR9XG59XG4iXX0=