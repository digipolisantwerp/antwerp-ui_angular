/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FieldErrorsComponent {
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["errors"] && !changes["errors"].currentValue) {
            this.errorMessages = [];
            return;
        }
        const /** @type {?} */ errorList = (changes["errors"] ? changes["errors"].currentValue : this.errors);
        if (!errorList) {
            return;
        }
        this.errorMessages = Object.keys(errorList).map((key) => {
            return {
                message: this.getMessage(key, errorList[key]),
            };
        });
    }
    /**
     * @param {?} type
     * @param {?} params
     * @return {?}
     */
    getMessage(type, params) {
        if (!this.errorDefinition || !this.errorDefinition.hasOwnProperty(type)) {
            // tslint:disable-next-line:max-line-length
            return console.warn(`No errordefinition found for validator of type '${type}'. Please provide one through the [errorDefinition] attribute.`);
        }
        return this.errorDefinition[type](params);
    }
}
FieldErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-field-errors',
                template: `<div class="aui-field-errors" *ngIf="errors">
    <aui-field-error class="aui-field-error" *ngFor="let error of errorMessages" [error]="error"></aui-field-error>
</div>`,
                styles: [`:host{display:block}`],
            },] },
];
FieldErrorsComponent.propDecorators = {
    errors: [{ type: Input }],
    errorDefinition: [{ type: Input }]
};
function FieldErrorsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FieldErrorsComponent.prototype.errors;
    /** @type {?} */
    FieldErrorsComponent.prototype.errorDefinition;
    /** @type {?} */
    FieldErrorsComponent.prototype.errorMessages;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3JzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL2ZpZWxkLWVycm9ycy9jb21wb25lbnRzL2ZpZWxkLWVycm9ycy9maWVsZC1lcnJvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFXM0UsTUFBTTs7Ozs7SUFNTCxXQUFXLENBQUMsT0FBc0I7UUFDakMsRUFBRSxDQUFDLENBQUMsT0FBTyxjQUFXLENBQUMsT0FBTyxXQUFRLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDeEIsTUFBTSxDQUFDO1NBQ1A7UUFDRCx1QkFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFPLFdBQVEsQ0FBQyxDQUFDLE9BQU8sV0FBUSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDO1NBQ1A7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxDQUFDO2dCQUNOLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0MsQ0FBQztTQUNGLENBQUMsQ0FBQztLQUNIOzs7Ozs7SUFFTyxVQUFVLENBQUMsSUFBWSxFQUFFLE1BQVc7UUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUV6RSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtREFBbUQsSUFBSSxnRUFBZ0UsQ0FBQyxDQUFDO1NBQzdJO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7WUFuQzNDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7O09BRUo7Z0JBQ04sTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDaEM7OztxQkFFQyxLQUFLOzhCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRFcnJvckRlZmluaXRpb24sIEZpZWxkRXJyb3IgfSBmcm9tICcuLi8uLi90eXBlcy9maWVsZC1lcnJvcnMudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktZmllbGQtZXJyb3JzJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWZpZWxkLWVycm9yc1wiICpuZ0lmPVwiZXJyb3JzXCI+XG4gICAgPGF1aS1maWVsZC1lcnJvciBjbGFzcz1cImF1aS1maWVsZC1lcnJvclwiICpuZ0Zvcj1cImxldCBlcnJvciBvZiBlcnJvck1lc3NhZ2VzXCIgW2Vycm9yXT1cImVycm9yXCI+PC9hdWktZmllbGQtZXJyb3I+XG48L2Rpdj5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRFcnJvcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBwdWJsaWMgZXJyb3JzOiBGaWVsZEVycm9yW107XG5cdEBJbnB1dCgpIHB1YmxpYyBlcnJvckRlZmluaXRpb246IEZpZWxkRXJyb3JEZWZpbml0aW9uO1xuXG5cdGVycm9yTWVzc2FnZXM6IEZpZWxkRXJyb3JbXTtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0aWYgKGNoYW5nZXMuZXJyb3JzICYmICFjaGFuZ2VzLmVycm9ycy5jdXJyZW50VmFsdWUpIHtcblx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlcyA9IFtdO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBlcnJvckxpc3QgPSAoY2hhbmdlcy5lcnJvcnMgPyBjaGFuZ2VzLmVycm9ycy5jdXJyZW50VmFsdWUgOiB0aGlzLmVycm9ycyk7XG5cdFx0aWYgKCFlcnJvckxpc3QpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5lcnJvck1lc3NhZ2VzID0gT2JqZWN0LmtleXMoZXJyb3JMaXN0KS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5nZXRNZXNzYWdlKGtleSwgZXJyb3JMaXN0W2tleV0pLFxuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0TWVzc2FnZSh0eXBlOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XG5cdFx0aWYgKCF0aGlzLmVycm9yRGVmaW5pdGlvbiB8fCAhdGhpcy5lcnJvckRlZmluaXRpb24uaGFzT3duUHJvcGVydHkodHlwZSkpIHtcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcblx0XHRcdHJldHVybiBjb25zb2xlLndhcm4oYE5vIGVycm9yZGVmaW5pdGlvbiBmb3VuZCBmb3IgdmFsaWRhdG9yIG9mIHR5cGUgJyR7dHlwZX0nLiBQbGVhc2UgcHJvdmlkZSBvbmUgdGhyb3VnaCB0aGUgW2Vycm9yRGVmaW5pdGlvbl0gYXR0cmlidXRlLmApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVycm9yRGVmaW5pdGlvblt0eXBlXShwYXJhbXMpO1xuXHR9XG59XG4iXX0=