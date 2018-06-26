/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var InputFilterComponent = /** @class */ (function () {
    function InputFilterComponent() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputFilterComponent.prototype.ngOnInit = /**
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
    InputFilterComponent.prototype.onFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.update.emit(value);
    };
    InputFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-input-filter',
                    template: "<div class=\"a-input has-icon-right aui-input-filter\">\n\t<ng-container *ngIf=\"filter\">\n\t\t<div class=\"a-input__wrapper\">\n\t\t\t<input type=\"text\" [placeholder]=\"filter.name\" [(ngModel)]=\"value\" (ngModelChange)=\"onFilter(value)\">\n\t\t\t<span class=\"fa fa-search\"></span>\n\t\t</div>\n\t</ng-container>\n</div>\n",
                },] },
    ];
    InputFilterComponent.propDecorators = {
        filter: [{ type: Input }],
        update: [{ type: Output }]
    };
    return InputFilterComponent;
}());
export { InputFilterComponent };
function InputFilterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    InputFilterComponent.prototype.filter;
    /** @type {?} */
    InputFilterComponent.prototype.update;
    /** @type {?} */
    InputFilterComponent.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3V0aWxzLyIsInNvdXJjZXMiOlsibGliL2ZpbHRlci9jb21wb25lbnRzL2lucHV0LWZpbHRlci9pbnB1dC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7c0JBaUIzRCxJQUFJLFlBQVksRUFBRTs7Ozs7SUFHckMsdUNBQVE7OztJQUFSO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMvQjtLQUNEOzs7OztJQUVNLHVDQUFROzs7O2NBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O2dCQXhCekIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSw0VUFRVjtpQkFDQTs7O3lCQUVDLEtBQUs7eUJBQ0wsTUFBTTs7K0JBakJSOztTQWVhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2ZpbHRlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1pbnB1dC1maWx0ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhLWlucHV0IGhhcy1pY29uLXJpZ2h0IGF1aS1pbnB1dC1maWx0ZXJcIj5cblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbHRlclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyXCI+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwiZmlsdGVyLm5hbWVcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXIodmFsdWUpXCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWx0ZXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBmaWx0ZXI7XG5cdEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyB2YWx1ZTtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5maWx0ZXIpIHtcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLmZpbHRlci52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb25GaWx0ZXIodmFsdWUpIHtcblx0XHR0aGlzLnVwZGF0ZS5lbWl0KHZhbHVlKTtcblx0fVxufVxuIl19