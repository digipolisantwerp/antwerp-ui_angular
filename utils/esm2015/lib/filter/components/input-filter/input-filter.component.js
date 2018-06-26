/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class InputFilterComponent {
    constructor() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.filter) {
            this.value = this.filter.value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFilter(value) {
        this.update.emit(value);
    }
}
InputFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-input-filter',
                template: `<div class="a-input has-icon-right aui-input-filter">
	<ng-container *ngIf="filter">
		<div class="a-input__wrapper">
			<input type="text" [placeholder]="filter.name" [(ngModel)]="value" (ngModelChange)="onFilter(value)">
			<span class="fa fa-search"></span>
		</div>
	</ng-container>
</div>
`,
            },] },
];
InputFilterComponent.propDecorators = {
    filter: [{ type: Input }],
    update: [{ type: Output }]
};
function InputFilterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    InputFilterComponent.prototype.filter;
    /** @type {?} */
    InputFilterComponent.prototype.update;
    /** @type {?} */
    InputFilterComponent.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3V0aWxzLyIsInNvdXJjZXMiOlsibGliL2ZpbHRlci9jb21wb25lbnRzL2lucHV0LWZpbHRlci9pbnB1dC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBZS9FLE1BQU07O3NCQUVjLElBQUksWUFBWSxFQUFFOzs7OztJQUdyQyxRQUFRO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMvQjtLQUNEOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFLO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1lBeEJ6QixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7OztDQVFWO2FBQ0E7OztxQkFFQyxLQUFLO3FCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9maWx0ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaW5wdXQtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodCBhdWktaW5wdXQtZmlsdGVyXCI+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlclwiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cImZpbHRlci5uYW1lXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKHZhbHVlKVwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmlsdGVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgZmlsdGVyO1xuXHRAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgdmFsdWU7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXIudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKHZhbHVlKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG5cdH1cbn1cbiJdfQ==