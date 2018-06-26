/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CheckboxFilterComponent = /** @class */ (function () {
    function CheckboxFilterComponent() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CheckboxFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filter) {
            this.value = this.filter.value;
        }
        this.onFilter();
    };
    /**
     * @return {?}
     */
    CheckboxFilterComponent.prototype.onFilter = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ value = this.filter.options.filter(function (option) {
            return option.checked;
        });
        this.update.emit(value);
    };
    CheckboxFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-checkbox-filter',
                    template: "<ul class=\"a-list a-list--reset aui-checkbox-filter\" *ngIf=\"filter && filter.options && filter.id\">\n\t<li *ngFor=\"let option of filter.options; let i = index;\">\n\t\t<div class=\"a-input\">\n\t\t\t<div class=\"a-input__checkbox\">\n\t\t\t\t<input type=\"checkbox\" [id]=\"option.id\" [name]=\"option.id\" [(ngModel)]=\"option.checked\" (ngModelChange)=\"onFilter()\">\n\t\t\t\t<label [for]=\"option.id\">{{ option.name }}</label>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n</ul>\n",
                },] },
    ];
    CheckboxFilterComponent.propDecorators = {
        filter: [{ type: Input }],
        update: [{ type: Output }]
    };
    return CheckboxFilterComponent;
}());
export { CheckboxFilterComponent };
function CheckboxFilterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CheckboxFilterComponent.prototype.filter;
    /** @type {?} */
    CheckboxFilterComponent.prototype.update;
    /** @type {?} */
    CheckboxFilterComponent.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3V0aWxzLyIsInNvdXJjZXMiOlsibGliL2ZpbHRlci9jb21wb25lbnRzL2NoZWNrYm94LWZpbHRlci9jaGVja2JveC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7c0JBbUIzRCxJQUFJLFlBQVksRUFBRTs7Ozs7SUFHOUIsMENBQVE7Ozs7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7OztJQUdWLDBDQUFROzs7O1FBQ2QscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU07WUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkE5QnpCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsa2VBVVY7aUJBQ0E7Ozt5QkFFQyxLQUFLO3lCQUNMLE1BQU07O2tDQW5CUjs7U0FpQmEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvZmlsdGVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNoZWNrYm94LWZpbHRlcicsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwiYS1saXN0IGEtbGlzdC0tcmVzZXQgYXVpLWNoZWNrYm94LWZpbHRlclwiICpuZ0lmPVwiZmlsdGVyICYmIGZpbHRlci5vcHRpb25zICYmIGZpbHRlci5pZFwiPlxuXHQ8bGkgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXIub3B0aW9uczsgbGV0IGkgPSBpbmRleDtcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImEtaW5wdXRfX2NoZWNrYm94XCI+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbaWRdPVwib3B0aW9uLmlkXCIgW25hbWVdPVwib3B0aW9uLmlkXCIgWyhuZ01vZGVsKV09XCJvcHRpb24uY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKClcIj5cblx0XHRcdFx0PGxhYmVsIFtmb3JdPVwib3B0aW9uLmlkXCI+e3sgb3B0aW9uLm5hbWUgfX08L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvbGk+XG48L3VsPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEZpbHRlckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGZpbHRlcjtcblx0QE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIHZhbHVlO1xuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5maWx0ZXIpIHtcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLmZpbHRlci52YWx1ZTtcblx0XHR9XG5cdFx0dGhpcy5vbkZpbHRlcigpO1xuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5maWx0ZXIub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IHtcblx0XHRcdHJldHVybiBvcHRpb24uY2hlY2tlZDtcblx0XHR9KTtcblx0XHR0aGlzLnVwZGF0ZS5lbWl0KHZhbHVlKTtcblx0fVxufVxuIl19