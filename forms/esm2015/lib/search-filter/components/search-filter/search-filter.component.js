/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR, } from '@angular/forms';
import { get, debounce } from 'lodash-es';
import { FlyoutSize } from '@acpaas-ui/ngx-components/flyout';
export class SearchFilterComponent {
    constructor() {
        this.flyoutSize = FlyoutSize.Small;
        this.label = 'Filter';
        this.labelDeselect = 'Alles deselecteren';
        this.labelResults = 'Resultaten';
        this.labelNoResults = 'Geen resultaten gevonden.';
        this.choices = [];
        this.placeholder = 'Zoeken';
        this.inputDelay = 150;
        this.showAllByDefault = false;
        this.search = new EventEmitter();
        this.query = '';
        this.selectedItems = [];
        this.filteredChoices = [];
        this.loading = false;
        this.updateModel = () => { };
        this.filterDataFromSearch = debounce(this.filterData.bind(this), this.inputDelay);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.selectedItems = Array.isArray(value) ? value : [];
    }
    /**
     * @param {?} onChange
     * @return {?}
     */
    registerOnChange(onChange) {
        this.updateModel = onChange;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.showAllByDefault) {
            this.filterData();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ choices = get(changes, 'choices.currentValue', null);
        if (!choices) {
            return;
        }
        if (this.remote) {
            this.filteredChoices = [...choices];
            this.loading = false;
        }
        else {
            this.filterData();
        }
    }
    /**
     * @return {?}
     */
    filterData() {
        if (this.remote) {
            this.loading = true;
            return this.search.emit(this.query);
        }
        this.filterChoices();
    }
    /**
     * @return {?}
     */
    clear() {
        this.selectedItems = [];
        this.query = '';
        this.filterData();
        this.updateModel(this.selectedItems);
    }
    /**
     * @param {?} choice
     * @return {?}
     */
    toggleSelected(choice) {
        const /** @type {?} */ selected = this.selectedItems.indexOf(choice);
        if (selected < 0) {
            this.selectedItems = this.selectedItems.concat(choice);
        }
        else {
            this.selectedItems = [
                ...this.selectedItems.slice(0, selected),
                ...this.selectedItems.slice(selected + 1),
            ];
        }
        this.updateModel(this.selectedItems);
    }
    /**
     * @return {?}
     */
    filterChoices() {
        this.filteredChoices = this.choices.filter((choice) => {
            return (this.selectedItems.indexOf(choice.value) < 0 &&
                choice.label.toLowerCase().indexOf(this.query.toLowerCase()) >= 0);
        });
    }
}
SearchFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-search-filter',
                template: `<div class="m-search-filter" auiFlyout [size]="flyoutSize" [align]="flyoutAlign">
	<div class="m-search-filter__label has-icon-right" [ngClass]="{'m-search-filter__label--active': selectedItems.length > 0}" auiFlyoutAction>
		{{ label }}
		<span *ngIf="selectedItems.length">({{ selectedItems.length }})</span>
		<span class="fa fa-angle-down"></span>
	</div>

	<div class="m-search-filter__search m-search-filter__search--scroll" auiFlyoutZone>
		<div class="m-search-filter__input a-input has-icon-right">
			<div class="a-input__wrapper">
				<input type="text" name="{{ name + '-search' }}" id="{{ id + '-search' }}" [(ngModel)]="query" (input)="filterDataFromSearch()" [attr.placeholder]="placeholder">
				<span class="fa fa-search"></span>
			</div>
		</div>

		<div class="m-search-filter__clear" *ngIf="selectedItems.length > 0">
			<button class="a-button-outline a-button--small a-button--danger has-icon-left" (click)="clear()">
				<div class="fa fa-close"></div>
				{{ labelDeselect }}
			</button>
		</div>

		<h6 class="m-search-filter__results__title">{{ labelResults }}</h6>
		<div class="u-text-center u-padding a-spinner" *ngIf="loading"></div>
		<ul class="a-list a-list--lined a-list--unstyled" *ngIf="!loading">
			<li class="m-search-filter__results__item a-list__item" *ngIf="!filteredChoices.length">
				<p class="u-padding-xs">{{ labelNoResults }}</p>
			</li>
			<li class="m-search-filter__results__item a-list__item" *ngFor="let choice of filteredChoices; index as i">
				 <div class="a-input__checkbox">
					<input
						type="checkbox"
						id="{{ 'checkbox--' + i + '--' + id }}"
						name="{{ 'checkbox--' + i + '--' + id }}"
						[checked]="selectedItems.indexOf(choice.value) >= 0"
						(change)="toggleSelected(choice.value)"
					>
					<label for="{{ 'checkbox--' + i + '--' + id }}">{{ choice.label }}</label>
				</div>
			</li>
		</ul>
	</div>
</div>
`,
                styles: [`.m-search-filter__label{background:#fff;padding-left:1.5rem;border:1px solid #b0b0b0;margin:0 .75rem .75rem 0;line-height:3rem;cursor:pointer;display:flex;justify-content:space-between}.m-search-filter__label>span:not(.fa){margin-left:.25rem}.m-search-filter__label>.fa{color:#7d7d7d;font-size:1.25rem;height:3rem;line-height:3rem;pointer-events:none;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:3rem}.m-search-filter__label.m-search-filter__label--active{background-color:#0064b4;border-color:#0064b4;color:#fff}.m-search-filter__label.m-search-filter__label--active>.fa{color:#fff}.m-search-filter__label.m-search-filter__label--error{background-color:#da291c;border-color:#da291c;color:#fff}.m-search-filter__label.m-search-filter__label--error>.fa{color:#fff}.m-search-filter__input{margin-bottom:.75rem;padding:.75rem}.m-search-filter__input .a-input__wrapper{margin-right:0}.m-search-filter__clear{text-align:center;margin:0 .75rem 1.5rem}.m-search-filter__search{max-height:50vh}.m-search-filter__search.m-search-filter__search--scroll{overflow-y:auto}.m-search-filter__results__title{font-size:16px;margin:0 .75rem}.m-search-filter .a-list .m-search-filter__results__item{padding:0}.m-search-filter__results__item{cursor:pointer}.m-search-filter__results__item .a-input__checkbox{display:flex;padding-left:2.25rem}.m-search-filter__results__item .a-input__checkbox input[type=checkbox]:checked+label::after{top:.75rem}.m-search-filter__results__item .a-input__checkbox label{flex:1;padding:.75rem}.m-search-filter__results__item:hover{background-color:#f3f3f3}`],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SearchFilterComponent),
                        // tslint:disable-line:no-forward-ref
                        multi: true,
                    }],
            },] },
];
/** @nocollapse */
SearchFilterComponent.ctorParameters = () => [];
SearchFilterComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    flyoutSize: [{ type: Input }],
    flyoutAlign: [{ type: Input }],
    label: [{ type: Input }],
    labelDeselect: [{ type: Input }],
    labelResults: [{ type: Input }],
    labelNoResults: [{ type: Input }],
    choices: [{ type: Input }],
    remote: [{ type: Input }],
    placeholder: [{ type: Input }],
    inputDelay: [{ type: Input }],
    showAllByDefault: [{ type: Input }],
    search: [{ type: Output }]
};
function SearchFilterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchFilterComponent.prototype.id;
    /** @type {?} */
    SearchFilterComponent.prototype.name;
    /** @type {?} */
    SearchFilterComponent.prototype.flyoutSize;
    /** @type {?} */
    SearchFilterComponent.prototype.flyoutAlign;
    /** @type {?} */
    SearchFilterComponent.prototype.label;
    /** @type {?} */
    SearchFilterComponent.prototype.labelDeselect;
    /** @type {?} */
    SearchFilterComponent.prototype.labelResults;
    /** @type {?} */
    SearchFilterComponent.prototype.labelNoResults;
    /** @type {?} */
    SearchFilterComponent.prototype.choices;
    /** @type {?} */
    SearchFilterComponent.prototype.remote;
    /** @type {?} */
    SearchFilterComponent.prototype.placeholder;
    /** @type {?} */
    SearchFilterComponent.prototype.inputDelay;
    /** @type {?} */
    SearchFilterComponent.prototype.showAllByDefault;
    /** @type {?} */
    SearchFilterComponent.prototype.search;
    /** @type {?} */
    SearchFilterComponent.prototype.query;
    /** @type {?} */
    SearchFilterComponent.prototype.selectedItems;
    /** @type {?} */
    SearchFilterComponent.prototype.filteredChoices;
    /** @type {?} */
    SearchFilterComponent.prototype.loading;
    /** @type {?} */
    SearchFilterComponent.prototype.filterDataFromSearch;
    /** @type {?} */
    SearchFilterComponent.prototype.updateModel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gtZmlsdGVyL2NvbXBvbmVudHMvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEdBSVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNOLGlCQUFpQixHQUVqQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQXlEOUQsTUFBTTtJQXdCTDswQkFyQjZCLFVBQVUsQ0FBQyxLQUFLO3FCQUVyQixRQUFROzZCQUNBLG9CQUFvQjs0QkFDckIsWUFBWTs4QkFDViwyQkFBMkI7dUJBQ1osRUFBRTsyQkFFcEIsUUFBUTswQkFDVCxHQUFHO2dDQUNHLEtBQUs7c0JBRVEsSUFBSSxZQUFZLEVBQVU7cUJBRTNELEVBQUU7NkJBQ2dCLEVBQUU7K0JBQ1ksRUFBRTt1QkFDaEMsS0FBSzsyQkFRVyxHQUFHLEVBQUUsSUFBRztRQUh4QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNsRjs7Ozs7SUFJTSxVQUFVLENBQUMsS0FBZTtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOzs7Ozs7SUFHakQsZ0JBQWdCLENBQUMsUUFBb0I7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QUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDOzt3QkFDcEQsS0FBSyxFQUFFLElBQUk7cUJBQ1gsQ0FBQzthQUNGOzs7OztpQkFFQyxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3FCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Zm9yd2FyZFJlZixcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0TkdfVkFMVUVfQUNDRVNTT1IsXG5cdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBnZXQsIGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgRmx5b3V0U2l6ZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcblxuaW1wb3J0IHsgU2VhcmNoRmlsdGVyQ2hvaWNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VhcmNoLWZpbHRlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zZWFyY2gtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyXCIgYXVpRmx5b3V0IFtzaXplXT1cImZseW91dFNpemVcIiBbYWxpZ25dPVwiZmx5b3V0QWxpZ25cIj5cblx0PGRpdiBjbGFzcz1cIm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwgaGFzLWljb24tcmlnaHRcIiBbbmdDbGFzc109XCJ7J20tc2VhcmNoLWZpbHRlcl9fbGFiZWwtLWFjdGl2ZSc6IHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMH1cIiBhdWlGbHlvdXRBY3Rpb24+XG5cdFx0e3sgbGFiZWwgfX1cblx0XHQ8c3BhbiAqbmdJZj1cInNlbGVjdGVkSXRlbXMubGVuZ3RoXCI+KHt7IHNlbGVjdGVkSXRlbXMubGVuZ3RoIH19KTwvc3Bhbj5cblx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L3NwYW4+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJtLXNlYXJjaC1maWx0ZXJfX3NlYXJjaCBtLXNlYXJjaC1maWx0ZXJfX3NlYXJjaC0tc2Nyb2xsXCIgYXVpRmx5b3V0Wm9uZT5cblx0XHQ8ZGl2IGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyX19pbnB1dCBhLWlucHV0IGhhcy1pY29uLXJpZ2h0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlclwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwie3sgbmFtZSArICctc2VhcmNoJyB9fVwiIGlkPVwie3sgaWQgKyAnLXNlYXJjaCcgfX1cIiBbKG5nTW9kZWwpXT1cInF1ZXJ5XCIgKGlucHV0KT1cImZpbHRlckRhdGFGcm9tU2VhcmNoKClcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cIm0tc2VhcmNoLWZpbHRlcl9fY2xlYXJcIiAqbmdJZj1cInNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFwiPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uLW91dGxpbmUgYS1idXR0b24tLXNtYWxsIGEtYnV0dG9uLS1kYW5nZXIgaGFzLWljb24tbGVmdFwiIChjbGljayk9XCJjbGVhcigpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvZGl2PlxuXHRcdFx0XHR7eyBsYWJlbERlc2VsZWN0IH19XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxoNiBjbGFzcz1cIm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19fdGl0bGVcIj57eyBsYWJlbFJlc3VsdHMgfX08L2g2PlxuXHRcdDxkaXYgY2xhc3M9XCJ1LXRleHQtY2VudGVyIHUtcGFkZGluZyBhLXNwaW5uZXJcIiAqbmdJZj1cImxvYWRpbmdcIj48L2Rpdj5cblx0XHQ8dWwgY2xhc3M9XCJhLWxpc3QgYS1saXN0LS1saW5lZCBhLWxpc3QtLXVuc3R5bGVkXCIgKm5nSWY9XCIhbG9hZGluZ1wiPlxuXHRcdFx0PGxpIGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVtIGEtbGlzdF9faXRlbVwiICpuZ0lmPVwiIWZpbHRlcmVkQ2hvaWNlcy5sZW5ndGhcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ1LXBhZGRpbmcteHNcIj57eyBsYWJlbE5vUmVzdWx0cyB9fTwvcD5cblx0XHRcdDwvbGk+XG5cdFx0XHQ8bGkgY2xhc3M9XCJtLXNlYXJjaC1maWx0ZXJfX3Jlc3VsdHNfX2l0ZW0gYS1saXN0X19pdGVtXCIgKm5nRm9yPVwibGV0IGNob2ljZSBvZiBmaWx0ZXJlZENob2ljZXM7IGluZGV4IGFzIGlcIj5cblx0XHRcdFx0IDxkaXYgY2xhc3M9XCJhLWlucHV0X19jaGVja2JveFwiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdGlkPVwie3sgJ2NoZWNrYm94LS0nICsgaSArICctLScgKyBpZCB9fVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwie3sgJ2NoZWNrYm94LS0nICsgaSArICctLScgKyBpZCB9fVwiXG5cdFx0XHRcdFx0XHRbY2hlY2tlZF09XCJzZWxlY3RlZEl0ZW1zLmluZGV4T2YoY2hvaWNlLnZhbHVlKSA+PSAwXCJcblx0XHRcdFx0XHRcdChjaGFuZ2UpPVwidG9nZ2xlU2VsZWN0ZWQoY2hvaWNlLnZhbHVlKVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ7eyAnY2hlY2tib3gtLScgKyBpICsgJy0tJyArIGlkIH19XCI+e3sgY2hvaWNlLmxhYmVsIH19PC9sYWJlbD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2xpPlxuXHRcdDwvdWw+XG5cdDwvZGl2PlxuPC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgLm0tc2VhcmNoLWZpbHRlcl9fbGFiZWx7YmFja2dyb3VuZDojZmZmO3BhZGRpbmctbGVmdDoxLjVyZW07Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO21hcmdpbjowIC43NXJlbSAuNzVyZW0gMDtsaW5lLWhlaWdodDozcmVtO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0ubS1zZWFyY2gtZmlsdGVyX19sYWJlbD5zcGFuOm5vdCguZmEpe21hcmdpbi1sZWZ0Oi4yNXJlbX0ubS1zZWFyY2gtZmlsdGVyX19sYWJlbD4uZmF7Y29sb3I6IzdkN2Q3ZDtmb250LXNpemU6MS4yNXJlbTtoZWlnaHQ6M3JlbTtsaW5lLWhlaWdodDozcmVtO3BvaW50ZXItZXZlbnRzOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3dpZHRoOjNyZW19Lm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwubS1zZWFyY2gtZmlsdGVyX19sYWJlbC0tYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzAwNjRiNDtib3JkZXItY29sb3I6IzAwNjRiNDtjb2xvcjojZmZmfS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwtLWFjdGl2ZT4uZmF7Y29sb3I6I2ZmZn0ubS1zZWFyY2gtZmlsdGVyX19sYWJlbC5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOiNkYTI5MWM7Ym9yZGVyLWNvbG9yOiNkYTI5MWM7Y29sb3I6I2ZmZn0ubS1zZWFyY2gtZmlsdGVyX19sYWJlbC5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLS1lcnJvcj4uZmF7Y29sb3I6I2ZmZn0ubS1zZWFyY2gtZmlsdGVyX19pbnB1dHttYXJnaW4tYm90dG9tOi43NXJlbTtwYWRkaW5nOi43NXJlbX0ubS1zZWFyY2gtZmlsdGVyX19pbnB1dCAuYS1pbnB1dF9fd3JhcHBlcnttYXJnaW4tcmlnaHQ6MH0ubS1zZWFyY2gtZmlsdGVyX19jbGVhcnt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MCAuNzVyZW0gMS41cmVtfS5tLXNlYXJjaC1maWx0ZXJfX3NlYXJjaHttYXgtaGVpZ2h0OjUwdmh9Lm0tc2VhcmNoLWZpbHRlcl9fc2VhcmNoLm0tc2VhcmNoLWZpbHRlcl9fc2VhcmNoLS1zY3JvbGx7b3ZlcmZsb3cteTphdXRvfS5tLXNlYXJjaC1maWx0ZXJfX3Jlc3VsdHNfX3RpdGxle2ZvbnQtc2l6ZToxNnB4O21hcmdpbjowIC43NXJlbX0ubS1zZWFyY2gtZmlsdGVyIC5hLWxpc3QgLm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19faXRlbXtwYWRkaW5nOjB9Lm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19faXRlbXtjdXJzb3I6cG9pbnRlcn0ubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVtIC5hLWlucHV0X19jaGVja2JveHtkaXNwbGF5OmZsZXg7cGFkZGluZy1sZWZ0OjIuMjVyZW19Lm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19faXRlbSAuYS1pbnB1dF9fY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtsYWJlbDo6YWZ0ZXJ7dG9wOi43NXJlbX0ubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVtIC5hLWlucHV0X19jaGVja2JveCBsYWJlbHtmbGV4OjE7cGFkZGluZzouNzVyZW19Lm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19faXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjN9YF0sXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWFyY2hGaWx0ZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHRASW5wdXQoKSBwdWJsaWMgaWQ6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGZseW91dFNpemUgPSBGbHlvdXRTaXplLlNtYWxsO1xuXHRASW5wdXQoKSBwdWJsaWMgZmx5b3V0QWxpZ247XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbCA9ICdGaWx0ZXInO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxEZXNlbGVjdCA9ICdBbGxlcyBkZXNlbGVjdGVyZW4nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxSZXN1bHRzID0gJ1Jlc3VsdGF0ZW4nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxOb1Jlc3VsdHMgPSAnR2VlbiByZXN1bHRhdGVuIGdldm9uZGVuLic7XG5cdEBJbnB1dCgpIHB1YmxpYyBjaG9pY2VzOiBTZWFyY2hGaWx0ZXJDaG9pY2VbXSA9IFtdO1xuXHRASW5wdXQoKSBwdWJsaWMgcmVtb3RlOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXIgPSAnWm9la2VuJztcblx0QElucHV0KCkgcHVibGljIGlucHV0RGVsYXkgPSAxNTA7XG5cdEBJbnB1dCgpIHB1YmxpYyBzaG93QWxsQnlEZWZhdWx0ID0gZmFsc2U7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBzZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0cHVibGljIHF1ZXJ5ID0gJyc7XG5cdHB1YmxpYyBzZWxlY3RlZEl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xuXHRwdWJsaWMgZmlsdGVyZWRDaG9pY2VzOiBTZWFyY2hGaWx0ZXJDaG9pY2VbXSA9IFtdO1xuXHRwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuXG5cdHB1YmxpYyBmaWx0ZXJEYXRhRnJvbVNlYXJjaDogKF9hbnk/KSA9PiB7fTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmZpbHRlckRhdGFGcm9tU2VhcmNoID0gZGVib3VuY2UodGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcyksIHRoaXMuaW5wdXREZWxheSk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlTW9kZWw6IChfKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10pOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkSXRlbXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW107XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShvbkNoYW5nZTogKF8pID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlTW9kZWwgPSBvbkNoYW5nZTtcblx0fVxuXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCgpOiB2b2lkIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNob3dBbGxCeURlZmF1bHQpIHtcblx0XHRcdHRoaXMuZmlsdGVyRGF0YSgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0Y29uc3QgY2hvaWNlcyA9IGdldChjaGFuZ2VzLCAnY2hvaWNlcy5jdXJyZW50VmFsdWUnLCBudWxsKTtcblxuXHRcdGlmICghY2hvaWNlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnJlbW90ZSkge1xuXHRcdFx0dGhpcy5maWx0ZXJlZENob2ljZXMgPSBbLi4uY2hvaWNlc107XG5cdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJEYXRhKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGZpbHRlckRhdGEoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucmVtb3RlKSB7XG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5zZWFyY2guZW1pdCh0aGlzLnF1ZXJ5KTtcblx0XHR9XG5cblx0XHR0aGlzLmZpbHRlckNob2ljZXMoKTtcblx0fVxuXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcblx0XHR0aGlzLnF1ZXJ5ID0gJyc7XG5cblx0XHR0aGlzLmZpbHRlckRhdGEoKTtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWRJdGVtcyk7XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlU2VsZWN0ZWQoY2hvaWNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGNob2ljZSk7XG5cblx0XHRpZiAoc2VsZWN0ZWQgPCAwKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLnNlbGVjdGVkSXRlbXMuY29uY2F0KGNob2ljZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtcblx0XHRcdFx0Li4udGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKDAsIHNlbGVjdGVkKSxcblx0XHRcdFx0Li4udGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKHNlbGVjdGVkICsgMSksXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdHRoaXMudXBkYXRlTW9kZWwodGhpcy5zZWxlY3RlZEl0ZW1zKTtcblx0fVxuXG5cdHByaXZhdGUgZmlsdGVyQ2hvaWNlcygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlcmVkQ2hvaWNlcyA9IHRoaXMuY2hvaWNlcy5maWx0ZXIoKGNob2ljZTogU2VhcmNoRmlsdGVyQ2hvaWNlKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihjaG9pY2UudmFsdWUpIDwgMCAmJlxuXHRcdFx0XHRjaG9pY2UubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMucXVlcnkudG9Mb3dlckNhc2UoKSkgPj0gMFxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxufVxuIl19