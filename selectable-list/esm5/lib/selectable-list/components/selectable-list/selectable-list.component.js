/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
var SelectableListComponent = /** @class */ (function () {
    function SelectableListComponent() {
        this.index = 0;
        this.selected = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SelectableListComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.selected.emit(item);
    };
    /**
     * @param {?} input
     * @return {?}
     */
    SelectableListComponent.prototype.formatLabel = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ inputString = (this.label ? input[this.label] : input);
        if (!this.search) {
            return inputString;
        }
        var /** @type {?} */ regEx = new RegExp(this.search, 'ig');
        return inputString.replace(regEx, '<b>' + this.search + '</b>');
    };
    SelectableListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-selectable-list',
                    template: "<ul class=\"aui-selectable-list m-selectable-list m-selectable-list--no-border\">\n    <li class=\"m-selectable-list__item\" *ngFor=\"let item of items; let i=index;\"  (click)=\"selectItem(item)\" [ngClass]=\"i === index ? 'm-selectable-list__item--active' : ''\">\n        <span *ngIf=\"!template && !itemTemplate\" [innerHTML]=\"formatLabel(item)\"></span>\n        <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        <ng-template *ngIf=\"itemTemplate\" [ngTemplateOutlet]=\"itemTemplate\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n    </li>\n</ul>\n",
                },] },
    ];
    SelectableListComponent.propDecorators = {
        items: [{ type: Input }],
        index: [{ type: Input }],
        search: [{ type: Input }],
        label: [{ type: Input }],
        itemTemplate: [{ type: Input }],
        selected: [{ type: Output }],
        template: [{ type: ContentChild, args: [TemplateRef,] }]
    };
    return SelectableListComponent;
}());
export { SelectableListComponent };
function SelectableListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectableListComponent.prototype.items;
    /** @type {?} */
    SelectableListComponent.prototype.index;
    /** @type {?} */
    SelectableListComponent.prototype.search;
    /** @type {?} */
    SelectableListComponent.prototype.label;
    /** @type {?} */
    SelectableListComponent.prototype.itemTemplate;
    /** @type {?} */
    SelectableListComponent.prototype.selected;
    /** @type {?} */
    SelectableListComponent.prototype.template;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbGVjdGFibGUtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3RhYmxlLWxpc3QvY29tcG9uZW50cy9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7cUJBZXpFLENBQUM7d0JBS3NCLElBQUksWUFBWSxFQUFFOzs7Ozs7SUFJMUQsNENBQVU7Ozs7Y0FBQyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFHbkIsNkNBQVc7Ozs7Y0FBQyxLQUFVO1FBQzVCLHFCQUFNLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUNuQjtRQUVELHFCQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQzs7O2dCQWxDakUsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxvcEJBT1Y7aUJBQ0E7Ozt3QkFFQyxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBRUwsTUFBTTsyQkFFTixZQUFZLFNBQUMsV0FBVzs7a0NBdEIxQjs7U0FhYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc2VsZWN0YWJsZS1saXN0Jyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJhdWktc2VsZWN0YWJsZS1saXN0IG0tc2VsZWN0YWJsZS1saXN0IG0tc2VsZWN0YWJsZS1saXN0LS1uby1ib3JkZXJcIj5cbiAgICA8bGkgY2xhc3M9XCJtLXNlbGVjdGFibGUtbGlzdF9faXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaT1pbmRleDtcIiAgKGNsaWNrKT1cInNlbGVjdEl0ZW0oaXRlbSlcIiBbbmdDbGFzc109XCJpID09PSBpbmRleCA/ICdtLXNlbGVjdGFibGUtbGlzdF9faXRlbS0tYWN0aXZlJyA6ICcnXCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlICYmICFpdGVtVGVtcGxhdGVcIiBbaW5uZXJIVE1MXT1cImZvcm1hdExhYmVsKGl0ZW0pXCI+PC9zcGFuPlxuICAgICAgICA8bmctdGVtcGxhdGUgKm5nSWY9XCJ0ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgaXRlbTogaXRlbSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwiaXRlbVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtIH1cIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbGk+XG48L3VsPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZUxpc3RDb21wb25lbnQge1xuXHRASW5wdXQoKSBwdWJsaWMgaXRlbXM6IGFueVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgaW5kZXggPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRwdWJsaWMgc2VsZWN0SXRlbShpdGVtKSB7XG5cdFx0dGhpcy5zZWxlY3RlZC5lbWl0KGl0ZW0pO1xuXHR9XG5cblx0cHVibGljIGZvcm1hdExhYmVsKGlucHV0OiBhbnkpIHtcblx0XHRjb25zdCBpbnB1dFN0cmluZyA9ICh0aGlzLmxhYmVsID8gaW5wdXRbdGhpcy5sYWJlbF0gOiBpbnB1dCk7XG5cblx0XHRpZiAoIXRoaXMuc2VhcmNoKSB7XG5cdFx0XHRyZXR1cm4gaW5wdXRTdHJpbmc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVnRXggPSBuZXcgUmVnRXhwKHRoaXMuc2VhcmNoLCAnaWcnKTtcblx0XHRyZXR1cm4gaW5wdXRTdHJpbmcucmVwbGFjZShyZWdFeCwgJzxiPicgKyB0aGlzLnNlYXJjaCArICc8L2I+Jyk7XG5cdH1cbn1cbiJdfQ==