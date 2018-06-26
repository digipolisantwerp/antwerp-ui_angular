/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SelectFilterComponent {
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
SelectFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-select-filter',
                template: `<div class="a-input has-icon-right aui-select-filter">
	<ng-container *ngIf="filter && filter.options && filter.id">
		<label class="a-input__label a-input__label--inline" [for]="filter.id">{{ filter.name }}: </label>
		<div class="a-input__wrapper a-input__wrapper--inline">
			<select [name]="filter.id" [id]="filter.id" [(ngModel)]="value" (ngModelChange)="onFilter(value)">
				<option *ngFor="let option of filter.options; let i = index;" [ngValue]="option">{{ option.name }}</option>
			</select>
			<span class="fa fa-angle-down"></span>
		</div>
	</ng-container>
</div>
`,
            },] },
];
SelectFilterComponent.propDecorators = {
    filter: [{ type: Input }],
    update: [{ type: Output }]
};
function SelectFilterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectFilterComponent.prototype.filter;
    /** @type {?} */
    SelectFilterComponent.prototype.update;
    /** @type {?} */
    SelectFilterComponent.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91dGlscy8iLCJzb3VyY2VzIjpbImxpYi9maWx0ZXIvY29tcG9uZW50cy9zZWxlY3QtZmlsdGVyL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBa0IvRSxNQUFNOztzQkFFYyxJQUFJLFlBQVksRUFBRTs7Ozs7SUFHOUIsUUFBUTtRQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDL0I7Ozs7OztJQUdLLFFBQVEsQ0FBQyxLQUFLO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1lBM0J6QixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7OztDQVdWO2FBQ0E7OztxQkFFQyxLQUFLO3FCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9maWx0ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc2VsZWN0LWZpbHRlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImEtaW5wdXQgaGFzLWljb24tcmlnaHQgYXVpLXNlbGVjdC1maWx0ZXJcIj5cblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbHRlciAmJiBmaWx0ZXIub3B0aW9ucyAmJiBmaWx0ZXIuaWRcIj5cblx0XHQ8bGFiZWwgY2xhc3M9XCJhLWlucHV0X19sYWJlbCBhLWlucHV0X19sYWJlbC0taW5saW5lXCIgW2Zvcl09XCJmaWx0ZXIuaWRcIj57eyBmaWx0ZXIubmFtZSB9fTogPC9sYWJlbD5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlciBhLWlucHV0X193cmFwcGVyLS1pbmxpbmVcIj5cblx0XHRcdDxzZWxlY3QgW25hbWVdPVwiZmlsdGVyLmlkXCIgW2lkXT1cImZpbHRlci5pZFwiIFsobmdNb2RlbCldPVwidmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkZpbHRlcih2YWx1ZSlcIj5cblx0XHRcdFx0PG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlci5vcHRpb25zOyBsZXQgaSA9IGluZGV4O1wiIFtuZ1ZhbHVlXT1cIm9wdGlvblwiPnt7IG9wdGlvbi5uYW1lIH19PC9vcHRpb24+XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmlsdGVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgZmlsdGVyO1xuXHRAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgdmFsdWU7XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLmZpbHRlcikge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMuZmlsdGVyLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbkZpbHRlcih2YWx1ZSkge1xuXHRcdHRoaXMudXBkYXRlLmVtaXQodmFsdWUpO1xuXHR9XG59XG4iXX0=