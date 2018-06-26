/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SelectFilterComponent = /** @class */ (function () {
    function SelectFilterComponent() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SelectFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filter) {
            this.value = this.filter.value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectFilterComponent.prototype.onFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.update.emit(value);
    };
    SelectFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-select-filter',
                    template: "<div class=\"a-input has-icon-right aui-select-filter\">\n\t<ng-container *ngIf=\"filter && filter.options && filter.id\">\n\t\t<label class=\"a-input__label a-input__label--inline\" [for]=\"filter.id\">{{ filter.name }}: </label>\n\t\t<div class=\"a-input__wrapper a-input__wrapper--inline\">\n\t\t\t<select [name]=\"filter.id\" [id]=\"filter.id\" [(ngModel)]=\"value\" (ngModelChange)=\"onFilter(value)\">\n\t\t\t\t<option *ngFor=\"let option of filter.options; let i = index;\" [ngValue]=\"option\">{{ option.name }}</option>\n\t\t\t</select>\n\t\t\t<span class=\"fa fa-angle-down\"></span>\n\t\t</div>\n\t</ng-container>\n</div>\n",
                },] },
    ];
    SelectFilterComponent.propDecorators = {
        filter: [{ type: Input }],
        update: [{ type: Output }]
    };
    return SelectFilterComponent;
}());
export { SelectFilterComponent };
function SelectFilterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectFilterComponent.prototype.filter;
    /** @type {?} */
    SelectFilterComponent.prototype.update;
    /** @type {?} */
    SelectFilterComponent.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91dGlscy8iLCJzb3VyY2VzIjpbImxpYi9maWx0ZXIvY29tcG9uZW50cy9zZWxlY3QtZmlsdGVyL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7c0JBb0IzRCxJQUFJLFlBQVksRUFBRTs7Ozs7SUFHOUIsd0NBQVE7Ozs7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQy9COzs7Ozs7SUFHSyx3Q0FBUTs7OztjQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkEzQnpCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsNG5CQVdWO2lCQUNBOzs7eUJBRUMsS0FBSzt5QkFDTCxNQUFNOztnQ0FwQlI7O1NBa0JhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2ZpbHRlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zZWxlY3QtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodCBhdWktc2VsZWN0LWZpbHRlclwiPlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyICYmIGZpbHRlci5vcHRpb25zICYmIGZpbHRlci5pZFwiPlxuXHRcdDxsYWJlbCBjbGFzcz1cImEtaW5wdXRfX2xhYmVsIGEtaW5wdXRfX2xhYmVsLS1pbmxpbmVcIiBbZm9yXT1cImZpbHRlci5pZFwiPnt7IGZpbHRlci5uYW1lIH19OiA8L2xhYmVsPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyIGEtaW5wdXRfX3dyYXBwZXItLWlubGluZVwiPlxuXHRcdFx0PHNlbGVjdCBbbmFtZV09XCJmaWx0ZXIuaWRcIiBbaWRdPVwiZmlsdGVyLmlkXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKHZhbHVlKVwiPlxuXHRcdFx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmlsdGVyLm9wdGlvbnM7IGxldCBpID0gaW5kZXg7XCIgW25nVmFsdWVdPVwib3B0aW9uXCI+e3sgb3B0aW9uLm5hbWUgfX08L29wdGlvbj5cblx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWx0ZXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBmaWx0ZXI7XG5cdEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyB2YWx1ZTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXIudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKHZhbHVlKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG5cdH1cbn1cbiJdfQ==