/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FieldErrorsComponent = /** @class */ (function () {
    function FieldErrorsComponent() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FieldErrorsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes["errors"] && !changes["errors"].currentValue) {
            this.errorMessages = [];
            return;
        }
        var /** @type {?} */ errorList = (changes["errors"] ? changes["errors"].currentValue : this.errors);
        if (!errorList) {
            return;
        }
        this.errorMessages = Object.keys(errorList).map(function (key) {
            return {
                message: _this.getMessage(key, errorList[key]),
            };
        });
    };
    /**
     * @param {?} type
     * @param {?} params
     * @return {?}
     */
    FieldErrorsComponent.prototype.getMessage = /**
     * @param {?} type
     * @param {?} params
     * @return {?}
     */
    function (type, params) {
        if (!this.errorDefinition || !this.errorDefinition.hasOwnProperty(type)) {
            // tslint:disable-next-line:max-line-length
            return console.warn("No errordefinition found for validator of type '" + type + "'. Please provide one through the [errorDefinition] attribute.");
        }
        return this.errorDefinition[type](params);
    };
    FieldErrorsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-field-errors',
                    template: "<div class=\"aui-field-errors\" *ngIf=\"errors\">\n    <aui-field-error class=\"aui-field-error\" *ngFor=\"let error of errorMessages\" [error]=\"error\"></aui-field-error>\n</div>",
                    styles: [":host{display:block}"],
                },] },
    ];
    FieldErrorsComponent.propDecorators = {
        errors: [{ type: Input }],
        errorDefinition: [{ type: Input }]
    };
    return FieldErrorsComponent;
}());
export { FieldErrorsComponent };
function FieldErrorsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FieldErrorsComponent.prototype.errors;
    /** @type {?} */
    FieldErrorsComponent.prototype.errorDefinition;
    /** @type {?} */
    FieldErrorsComponent.prototype.errorMessages;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3JzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL2ZpZWxkLWVycm9ycy9jb21wb25lbnRzL2ZpZWxkLWVycm9ycy9maWVsZC1lcnJvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lBaUIxRSwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBY0M7UUFiQSxFQUFFLENBQUMsQ0FBQyxPQUFPLGNBQVcsQ0FBQyxPQUFPLFdBQVEsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUM7U0FDUDtRQUNELHFCQUFNLFNBQVMsR0FBRyxDQUFDLE9BQU8sV0FBUSxDQUFDLENBQUMsT0FBTyxXQUFRLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUM7U0FDUDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQ25ELE1BQU0sQ0FBQztnQkFDTixPQUFPLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdDLENBQUM7U0FDRixDQUFDLENBQUM7S0FDSDs7Ozs7O0lBRU8seUNBQVU7Ozs7O2NBQUMsSUFBWSxFQUFFLE1BQVc7UUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUV6RSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxREFBbUQsSUFBSSxtRUFBZ0UsQ0FBQyxDQUFDO1NBQzdJO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7OztnQkFuQzNDLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsc0xBRUo7b0JBQ04sTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2hDOzs7eUJBRUMsS0FBSztrQ0FDTCxLQUFLOzsrQkFiUDs7U0FXYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRFcnJvckRlZmluaXRpb24sIEZpZWxkRXJyb3IgfSBmcm9tICcuLi8uLi90eXBlcy9maWVsZC1lcnJvcnMudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktZmllbGQtZXJyb3JzJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWZpZWxkLWVycm9yc1wiICpuZ0lmPVwiZXJyb3JzXCI+XG4gICAgPGF1aS1maWVsZC1lcnJvciBjbGFzcz1cImF1aS1maWVsZC1lcnJvclwiICpuZ0Zvcj1cImxldCBlcnJvciBvZiBlcnJvck1lc3NhZ2VzXCIgW2Vycm9yXT1cImVycm9yXCI+PC9hdWktZmllbGQtZXJyb3I+XG48L2Rpdj5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRFcnJvcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBwdWJsaWMgZXJyb3JzOiBGaWVsZEVycm9yW107XG5cdEBJbnB1dCgpIHB1YmxpYyBlcnJvckRlZmluaXRpb246IEZpZWxkRXJyb3JEZWZpbml0aW9uO1xuXG5cdGVycm9yTWVzc2FnZXM6IEZpZWxkRXJyb3JbXTtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0aWYgKGNoYW5nZXMuZXJyb3JzICYmICFjaGFuZ2VzLmVycm9ycy5jdXJyZW50VmFsdWUpIHtcblx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlcyA9IFtdO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBlcnJvckxpc3QgPSAoY2hhbmdlcy5lcnJvcnMgPyBjaGFuZ2VzLmVycm9ycy5jdXJyZW50VmFsdWUgOiB0aGlzLmVycm9ycyk7XG5cdFx0aWYgKCFlcnJvckxpc3QpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5lcnJvck1lc3NhZ2VzID0gT2JqZWN0LmtleXMoZXJyb3JMaXN0KS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5nZXRNZXNzYWdlKGtleSwgZXJyb3JMaXN0W2tleV0pLFxuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0TWVzc2FnZSh0eXBlOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XG5cdFx0aWYgKCF0aGlzLmVycm9yRGVmaW5pdGlvbiB8fCAhdGhpcy5lcnJvckRlZmluaXRpb24uaGFzT3duUHJvcGVydHkodHlwZSkpIHtcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcblx0XHRcdHJldHVybiBjb25zb2xlLndhcm4oYE5vIGVycm9yZGVmaW5pdGlvbiBmb3VuZCBmb3IgdmFsaWRhdG9yIG9mIHR5cGUgJyR7dHlwZX0nLiBQbGVhc2UgcHJvdmlkZSBvbmUgdGhyb3VnaCB0aGUgW2Vycm9yRGVmaW5pdGlvbl0gYXR0cmlidXRlLmApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVycm9yRGVmaW5pdGlvblt0eXBlXShwYXJhbXMpO1xuXHR9XG59XG4iXX0=