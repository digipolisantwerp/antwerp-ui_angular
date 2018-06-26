/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, ContentChild, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { get, isEqual } from 'lodash-es';
import { FlyoutDirective, FlyoutZoneDirective } from '@acpaas-ui/ngx-components/flyout';
import { SearchService } from '../../../shared/services/search.service';
export class AutoCompleteComponent {
    /**
     * @param {?} ref
     * @param {?} searchService
     */
    constructor(ref, searchService) {
        this.ref = ref;
        this.searchService = searchService;
        this.results = [];
        this.data = [];
        this.remote = false;
        this.minCharacters = 0;
        this.mask = null;
        this.clearInvalid = false;
        this.showAllByDefault = false;
        // Eventemitter for searchvalue (parent object should update the results with this param)
        this.search = new EventEmitter();
        this.select = new EventEmitter();
        this.query = '';
        this.index = -1;
        this.selectedItem = null;
        this.searching = false;
        this.focused = false;
        this.remoteValue = false;
        this.updateModel = (_) => { };
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    writeValue(value = '') {
        if (this.value) {
            const /** @type {?} */ selected = this.data.find((item) => item[this.value] === value);
            if (selected) {
                return this.query = selected[this.label];
            }
            if (this.remote && !!value) {
                this.remoteValue = true;
            }
        }
        this.query = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.updateModel = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        if ((Array.isArray(this.data) && this.data.length > 0) && !this.query && this.showAllByDefault) {
            this.results = [...this.data];
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!changes) {
            return;
        }
        const /** @type {?} */ newData = get(changes, 'data.currentValue', []);
        if (!isEqual(newData, get(changes, 'data.previousValue', []))) {
            if (this.remote) {
                this.remoteSearch();
            }
            else {
                this.localSearch();
            }
        }
        if (changes["results"] && changes["results"].currentValue) {
            this.searching = false;
        }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    propagateChange(query) {
        const /** @type {?} */ item = this.results.find(res => this.label ? res[this.label] === query : res === query);
        this.query = query;
        this.select.emit(item);
        if (!item) {
            return;
        }
        const /** @type {?} */ key = this.value ? this.value : this.label ? this.label : null;
        this.updateModel(key ? item[key] || '' : item);
        this.selectedItem = item;
    }
    /**
     * triggers on input value change
     * @return {?}
     */
    doSearch() {
        this.index = -1; // reset index
        this.searching = true;
        if (this.remote) {
            this.search.emit(this.query); // ask for new remote data
        }
        else {
            this.localSearch();
        }
        this.openFlyout(); // open the flyout when there is a change
    }
    /**
     * triggers on selectable-list:select -> onClick event in selectable-list
     * @param {?} item
     * @return {?}
     */
    onSelect(item) {
        this.propagateChange(item !== null ? (this.label ? item[this.label] : item) : '');
        this.closeFlyout(); // Close the flyout manually
    }
    /**
     * @return {?}
     */
    onFlyoutClosed() {
        // there is only 1 result, select it
        if (this.index >= 0 && this.results.length === 1) {
            return this.onSelect(this.results[0]);
        }
        // there is no query nor selected item, clear the selected item
        if (!this.query && this.index < 0) {
            return this.onSelect(null);
        }
        // reset the query for an invalid query if clearInvalid is true
        if (this.clearInvalid && this.query && !this.results.length && this.index < 0) {
            this.query = this.selectedItem ? this.label ? this.selectedItem[this.label] : this.selectedItem : '';
        }
    }
    /**
     * @return {?}
     */
    onKeyArrowDown() {
        if (this.index < this.results.length - 1) {
            this.scrollList(1);
        }
        this.openFlyout();
    }
    /**
     * @return {?}
     */
    onKeyArrowUp() {
        if (this.index >= 0) {
            this.scrollList(-1);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyEnter(event) {
        event.preventDefault(); // Do not submit form when selecting an item.
        const /** @type {?} */ query = this.index >= 0 ? this.query = this.results[this.index][this.label] : this.query;
        this.propagateChange(query);
        this.closeFlyout();
    }
    /**
     * @return {?}
     */
    onKeyEscape() {
        this.closeFlyout();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focused = true;
        this.openFlyout();
    }
    /**
     * @return {?}
     */
    openFlyout() {
        if (this.flyout) {
            this.flyout.open();
        }
    }
    /**
     * @return {?}
     */
    closeFlyout() {
        if (this.flyout) {
            this.flyout.close();
        }
        this.focused = false;
    }
    /**
     * @return {?}
     */
    localSearch() {
        this.results = this.searchService.search(this.data, {
            minLength: this.minCharacters,
            key: this.label,
            query: this.query,
            showAllByDefault: this.showAllByDefault,
        });
        if (this.results.length === 1 && this.query === this.results[0][this.label]) {
            this.index = 0;
        }
        this.searching = false;
    }
    /**
     * @return {?}
     */
    remoteSearch() {
        if (!this.remoteValue || !this.data) {
            return;
        }
        const /** @type {?} */ selected = this.data.find((item) => {
            if (this.value) {
                return item[this.value] === this.query;
            }
            return item === this.query;
        });
        if (selected) {
            this.query = this.label ? selected[this.label] : selected;
        }
        else {
            this.query = '';
        }
        this.remoteValue = false;
    }
    /**
     * @param {?} factor
     * @return {?}
     */
    scrollList(factor) {
        this.index += factor;
        if (!this.flyoutZone) {
            return;
        }
        const /** @type {?} */ liItems = this.flyoutZone.element.getElementsByTagName('li');
        const /** @type {?} */ liHeight = (liItems[1] ? liItems[1].offsetHeight : liItems[0].offsetHeight);
        const /** @type {?} */ zoneHeight = this.flyoutZone.element.offsetHeight;
        const /** @type {?} */ offset = (zoneHeight / liHeight) / 2;
        this.flyoutZone.element.scrollTop = (this.index * liHeight) - (offset * liHeight);
    }
}
AutoCompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-auto-complete',
                styles: [`.aui-auto-complete,.aui-auto-complete__info{display:block}`],
                template: `<div class="m-flyout--scrollable m-flyout--full aui-auto-complete" auiFlyout [toggleClick]="false" (closed)="onFlyoutClosed()">
	<input *ngIf="!mask"
		[id]="id"
		[placeholder]="placeholder"
		type="text"
		auiFlyoutAction
		[(ngModel)]="query"
		(ngModelChange)="doSearch()"
		auiSelectableActions
		(keyArrowUp)="onKeyArrowUp()"
		(keyArrowDown)="onKeyArrowDown()"
		(keyEnter)="onKeyEnter($event)"
		(keyEscape)="onKeyEscape()"
		(focus)="onFocus()"
		autocomplete="off"
	/>
	<input *ngIf="mask"
		[id]="id"
		[placeholder]="placeholder"
		type="text"
		auiFlyoutAction
		[(ngModel)]="query"
		(ngModelChange)="doSearch()"
		auiSelectableActions
		(keyArrowUp)="onKeyArrowUp()"
		(keyArrowDown)="onKeyArrowDown()"
		(keyEnter)="onKeyEnter($event)"
		(keyEscape)="onKeyEscape()"
		(focus)="onFocus()"
		autocomplete="off"
		[auiMask]="mask"
	/>

	<div auiFlyoutZone>
		<span class="aui-auto-complete__info u-text-light u-padding-right u-padding-left-xs" *ngIf="focused && loadingText && searching">
			<span class="a-spinner a-spinner--inline a-spinner--sm u-margin-right-xs"></span>
			{{ loadingText }}
		</span>
		<span class="aui-auto-complete__info u-text-light u-padding-right u-padding-left" *ngIf="focused && searchIncentiveText && !searching && !query && !results.length">{{ searchIncentiveText }}</span>
		<span class="aui-auto-complete__info u-text-light u-padding-right u-padding-left" *ngIf="focused && noResultsText && !searching && query && !results.length">{{ noResultsText }}</span>

		<aui-selectable-list [items]="results" [index]="index" (selected)="onSelect($event)" [label]="label" [search]="query" [itemTemplate]="template" *ngIf="results.length > 0 && !(focused && loadingText && searching)"></aui-selectable-list>
	</div>
</div>
`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AutoCompleteComponent),
                        // tslint:disable-line
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
AutoCompleteComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: SearchService }
];
AutoCompleteComponent.propDecorators = {
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    results: [{ type: Input }],
    data: [{ type: Input }],
    remote: [{ type: Input }],
    minCharacters: [{ type: Input }],
    mask: [{ type: Input }],
    clearInvalid: [{ type: Input }],
    searchIncentiveText: [{ type: Input }],
    loadingText: [{ type: Input }],
    noResultsText: [{ type: Input }],
    showAllByDefault: [{ type: Input }],
    label: [{ type: Input }],
    value: [{ type: Input }],
    search: [{ type: Output }],
    select: [{ type: Output }],
    flyout: [{ type: ViewChild, args: [FlyoutDirective,] }],
    flyoutZone: [{ type: ViewChild, args: [FlyoutZoneDirective,] }],
    template: [{ type: ContentChild, args: [TemplateRef,] }]
};
function AutoCompleteComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AutoCompleteComponent.prototype.id;
    /** @type {?} */
    AutoCompleteComponent.prototype.placeholder;
    /** @type {?} */
    AutoCompleteComponent.prototype.results;
    /** @type {?} */
    AutoCompleteComponent.prototype.data;
    /** @type {?} */
    AutoCompleteComponent.prototype.remote;
    /** @type {?} */
    AutoCompleteComponent.prototype.minCharacters;
    /** @type {?} */
    AutoCompleteComponent.prototype.mask;
    /** @type {?} */
    AutoCompleteComponent.prototype.clearInvalid;
    /** @type {?} */
    AutoCompleteComponent.prototype.searchIncentiveText;
    /** @type {?} */
    AutoCompleteComponent.prototype.loadingText;
    /** @type {?} */
    AutoCompleteComponent.prototype.noResultsText;
    /** @type {?} */
    AutoCompleteComponent.prototype.showAllByDefault;
    /** @type {?} */
    AutoCompleteComponent.prototype.label;
    /** @type {?} */
    AutoCompleteComponent.prototype.value;
    /** @type {?} */
    AutoCompleteComponent.prototype.search;
    /** @type {?} */
    AutoCompleteComponent.prototype.select;
    /** @type {?} */
    AutoCompleteComponent.prototype.flyout;
    /** @type {?} */
    AutoCompleteComponent.prototype.flyoutZone;
    /** @type {?} */
    AutoCompleteComponent.prototype.template;
    /** @type {?} */
    AutoCompleteComponent.prototype.query;
    /** @type {?} */
    AutoCompleteComponent.prototype.index;
    /** @type {?} */
    AutoCompleteComponent.prototype.selectedItem;
    /** @type {?} */
    AutoCompleteComponent.prototype.searching;
    /** @type {?} */
    AutoCompleteComponent.prototype.focused;
    /** @type {?} */
    AutoCompleteComponent.prototype.remoteValue;
    /** @type {?} */
    AutoCompleteComponent.prototype.updateModel;
    /** @type {?} */
    AutoCompleteComponent.prototype.ref;
    /** @type {?} */
    AutoCompleteComponent.prototype.searchService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvLWNvbXBsZXRlL2NvbXBvbmVudHMvYXV0by1jb21wbGV0ZS9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFJWixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsVUFBVSxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBMER4RSxNQUFNOzs7OztJQXFDTCxZQUNTLEtBQ0E7UUFEQSxRQUFHLEdBQUgsR0FBRztRQUNILGtCQUFhLEdBQWIsYUFBYTt1QkFwQ0ksRUFBRTtvQkFDTCxFQUFFO3NCQUNQLEtBQUs7NkJBQ0UsQ0FBQztvQkFDRixJQUFJOzRCQUNKLEtBQUs7Z0NBSUQsS0FBSzs7c0JBT1EsSUFBSSxZQUFZLEVBQUU7c0JBQ3JCLElBQUksWUFBWSxFQUFFO3FCQU96QyxFQUFFO3FCQUNGLENBQUMsQ0FBQzs0QkFDVSxJQUFJO3lCQUNaLEtBQUs7dUJBQ1AsS0FBSzsyQkFFQSxLQUFLOzJCQUVOLENBQUMsQ0FBTSxFQUFFLEVBQUUsSUFBSTtLQUsvQjs7Ozs7SUFHRSxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsdUJB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QUFTLFNBQUMsbUJBQW1CO3VCQUU3QixZQUFZLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRPbkNoYW5nZXMsXG5cdE9uSW5pdCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0RWxlbWVudFJlZixcblx0Vmlld0NoaWxkLFxuXHRDb250ZW50Q2hpbGQsXG5cdFRlbXBsYXRlUmVmLFxuXHRmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0LCBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgRmx5b3V0RGlyZWN0aXZlLCBGbHlvdXRab25lRGlyZWN0aXZlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWF1dG8tY29tcGxldGUnLFxuXHRzdHlsZXM6IFtgLmF1aS1hdXRvLWNvbXBsZXRlLC5hdWktYXV0by1jb21wbGV0ZV9faW5mb3tkaXNwbGF5OmJsb2NrfWBdLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWZseW91dC0tc2Nyb2xsYWJsZSBtLWZseW91dC0tZnVsbCBhdWktYXV0by1jb21wbGV0ZVwiIGF1aUZseW91dCBbdG9nZ2xlQ2xpY2tdPVwiZmFsc2VcIiAoY2xvc2VkKT1cIm9uRmx5b3V0Q2xvc2VkKClcIj5cblx0PGlucHV0ICpuZ0lmPVwiIW1hc2tcIlxuXHRcdFtpZF09XCJpZFwiXG5cdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcblx0XHR0eXBlPVwidGV4dFwiXG5cdFx0YXVpRmx5b3V0QWN0aW9uXG5cdFx0WyhuZ01vZGVsKV09XCJxdWVyeVwiXG5cdFx0KG5nTW9kZWxDaGFuZ2UpPVwiZG9TZWFyY2goKVwiXG5cdFx0YXVpU2VsZWN0YWJsZUFjdGlvbnNcblx0XHQoa2V5QXJyb3dVcCk9XCJvbktleUFycm93VXAoKVwiXG5cdFx0KGtleUFycm93RG93bik9XCJvbktleUFycm93RG93bigpXCJcblx0XHQoa2V5RW50ZXIpPVwib25LZXlFbnRlcigkZXZlbnQpXCJcblx0XHQoa2V5RXNjYXBlKT1cIm9uS2V5RXNjYXBlKClcIlxuXHRcdChmb2N1cyk9XCJvbkZvY3VzKClcIlxuXHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdC8+XG5cdDxpbnB1dCAqbmdJZj1cIm1hc2tcIlxuXHRcdFtpZF09XCJpZFwiXG5cdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcblx0XHR0eXBlPVwidGV4dFwiXG5cdFx0YXVpRmx5b3V0QWN0aW9uXG5cdFx0WyhuZ01vZGVsKV09XCJxdWVyeVwiXG5cdFx0KG5nTW9kZWxDaGFuZ2UpPVwiZG9TZWFyY2goKVwiXG5cdFx0YXVpU2VsZWN0YWJsZUFjdGlvbnNcblx0XHQoa2V5QXJyb3dVcCk9XCJvbktleUFycm93VXAoKVwiXG5cdFx0KGtleUFycm93RG93bik9XCJvbktleUFycm93RG93bigpXCJcblx0XHQoa2V5RW50ZXIpPVwib25LZXlFbnRlcigkZXZlbnQpXCJcblx0XHQoa2V5RXNjYXBlKT1cIm9uS2V5RXNjYXBlKClcIlxuXHRcdChmb2N1cyk9XCJvbkZvY3VzKClcIlxuXHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdFx0W2F1aU1hc2tdPVwibWFza1wiXG5cdC8+XG5cblx0PGRpdiBhdWlGbHlvdXRab25lPlxuXHRcdDxzcGFuIGNsYXNzPVwiYXVpLWF1dG8tY29tcGxldGVfX2luZm8gdS10ZXh0LWxpZ2h0IHUtcGFkZGluZy1yaWdodCB1LXBhZGRpbmctbGVmdC14c1wiICpuZ0lmPVwiZm9jdXNlZCAmJiBsb2FkaW5nVGV4dCAmJiBzZWFyY2hpbmdcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiYS1zcGlubmVyIGEtc3Bpbm5lci0taW5saW5lIGEtc3Bpbm5lci0tc20gdS1tYXJnaW4tcmlnaHQteHNcIj48L3NwYW4+XG5cdFx0XHR7eyBsb2FkaW5nVGV4dCB9fVxuXHRcdDwvc3Bhbj5cblx0XHQ8c3BhbiBjbGFzcz1cImF1aS1hdXRvLWNvbXBsZXRlX19pbmZvIHUtdGV4dC1saWdodCB1LXBhZGRpbmctcmlnaHQgdS1wYWRkaW5nLWxlZnRcIiAqbmdJZj1cImZvY3VzZWQgJiYgc2VhcmNoSW5jZW50aXZlVGV4dCAmJiAhc2VhcmNoaW5nICYmICFxdWVyeSAmJiAhcmVzdWx0cy5sZW5ndGhcIj57eyBzZWFyY2hJbmNlbnRpdmVUZXh0IH19PC9zcGFuPlxuXHRcdDxzcGFuIGNsYXNzPVwiYXVpLWF1dG8tY29tcGxldGVfX2luZm8gdS10ZXh0LWxpZ2h0IHUtcGFkZGluZy1yaWdodCB1LXBhZGRpbmctbGVmdFwiICpuZ0lmPVwiZm9jdXNlZCAmJiBub1Jlc3VsdHNUZXh0ICYmICFzZWFyY2hpbmcgJiYgcXVlcnkgJiYgIXJlc3VsdHMubGVuZ3RoXCI+e3sgbm9SZXN1bHRzVGV4dCB9fTwvc3Bhbj5cblxuXHRcdDxhdWktc2VsZWN0YWJsZS1saXN0IFtpdGVtc109XCJyZXN1bHRzXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkKT1cIm9uU2VsZWN0KCRldmVudClcIiBbbGFiZWxdPVwibGFiZWxcIiBbc2VhcmNoXT1cInF1ZXJ5XCIgW2l0ZW1UZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiICpuZ0lmPVwicmVzdWx0cy5sZW5ndGggPiAwICYmICEoZm9jdXNlZCAmJiBsb2FkaW5nVGV4dCAmJiBzZWFyY2hpbmcpXCI+PC9hdWktc2VsZWN0YWJsZS1saXN0PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBdXRvQ29tcGxldGVDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBpZDogc3RyaW5nO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSByZXN1bHRzOiBhbnlbXSA9IFtdOyAvLyBUaGUgdmFsdWVzIGZvciB0aGUgc2VsZWN0YWJsZSBsaXN0XG5cdEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107IC8vIFRoZSB2YWx1ZXMgdG8gc2VhcmNoIGluIHdoZW4gcmVtb3RlIHNlYXJjaCBpcyBkaXNhYmxlZFxuXHRASW5wdXQoKSByZW1vdGUgPSBmYWxzZTsgLy8gRGlzYWJsZSBvciBlbmFtYmxlIHJlbW90ZSBzZWFyY2hcblx0QElucHV0KCkgbWluQ2hhcmFjdGVycyA9IDA7XG5cdEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9IG51bGw7XG5cdEBJbnB1dCgpIGNsZWFySW52YWxpZCA9IGZhbHNlO1xuXHRASW5wdXQoKSBzZWFyY2hJbmNlbnRpdmVUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIG5vUmVzdWx0c1RleHQ6IHN0cmluZztcblx0QElucHV0KCkgc2hvd0FsbEJ5RGVmYXVsdCA9IGZhbHNlO1xuXG5cdC8vIHNwZWNpZnkgd2hpY2ggbGFiZWwvdmFsdWUgcHJvcHMgdG8gdXNlXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cblx0Ly8gRXZlbnRlbWl0dGVyIGZvciBzZWFyY2h2YWx1ZSAocGFyZW50IG9iamVjdCBzaG91bGQgdXBkYXRlIHRoZSByZXN1bHRzIHdpdGggdGhpcyBwYXJhbSlcblx0QE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBWaWV3Q2hpbGQoRmx5b3V0RGlyZWN0aXZlKSBmbHlvdXQ6IEZseW91dERpcmVjdGl2ZTtcblx0QFZpZXdDaGlsZChGbHlvdXRab25lRGlyZWN0aXZlKSBmbHlvdXRab25lOiBGbHlvdXRab25lRGlyZWN0aXZlO1xuXG5cdEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRwdWJsaWMgcXVlcnkgPSAnJztcblx0cHVibGljIGluZGV4ID0gLTE7IC8vIGluZGV4IGZvciBhY3RpdmUgZWxlbWVudCBpbiBzZWxlY3RhYmxlIGxpc3QsIGJ5IGRlZmF1bHQgLTEgKHNvIGl0IHN0YXJ0cyBpbiB0aGUgaW5wdXQgZmllbGQpXG5cdHB1YmxpYyBzZWxlY3RlZEl0ZW06IGFueSA9IG51bGw7IC8vIGtlZXAgYSBiYWNrdXAgb2YgdGhlIHNlbGVjdGVkSXRlbVxuXHRwdWJsaWMgc2VhcmNoaW5nID0gZmFsc2U7IC8vIHRyYWNrIHJlbW90ZSBzZWFyY2ggc3RhdGVcblx0cHVibGljIGZvY3VzZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlbW90ZVZhbHVlID0gZmFsc2U7XG5cblx0cHVibGljIHVwZGF0ZU1vZGVsID0gKF86IGFueSkgPT4geyB9O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZVxuXHQpIHsgfVxuXG5cdC8vIENPTlRST0xfVkFMVUVfQUNDRVNTT1IgaW50ZXJmYWNlXG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlID0gJycpIHtcblx0XHRpZiAodGhpcy52YWx1ZSkge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmRhdGEuZmluZCgoaXRlbTogYW55KSA9PiBpdGVtW3RoaXMudmFsdWVdID09PSB2YWx1ZSk7XG5cblx0XHRcdGlmIChzZWxlY3RlZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5xdWVyeSA9IHNlbGVjdGVkW3RoaXMubGFiZWxdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yZW1vdGUgJiYgISF2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnJlbW90ZVZhbHVlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnF1ZXJ5ID0gdmFsdWU7XG5cdH1cblxuXHQvLyBDT05UUk9MX1ZBTFVFX0FDQ0VTU09SIGludGVyZmFjZVxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHRcdHRoaXMudXBkYXRlTW9kZWwgPSBmbjtcblx0fVxuXG5cdC8vIENPTlRST0xfVkFMVUVfQUNDRVNTT1IgaW50ZXJmYWNlXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCgpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdGlmICgoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpICYmIHRoaXMuZGF0YS5sZW5ndGggPiAwKSAmJiAhdGhpcy5xdWVyeSAmJiB0aGlzLnNob3dBbGxCeURlZmF1bHQpIHtcblx0XHRcdHRoaXMucmVzdWx0cyA9IFsuLi50aGlzLmRhdGFdO1xuXHRcdH1cblx0fVxuXG5cdC8vIE9uQ2hhbmdlcyBpbnRlcmZhY2Vcblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRpZiAoIWNoYW5nZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBuZXdEYXRhID0gZ2V0KGNoYW5nZXMsICdkYXRhLmN1cnJlbnRWYWx1ZScsIFtdKTtcblx0XHRpZiAoIWlzRXF1YWwobmV3RGF0YSwgZ2V0KGNoYW5nZXMsICdkYXRhLnByZXZpb3VzVmFsdWUnLCBbXSkpKSB7XG5cdFx0XHRpZiAodGhpcy5yZW1vdGUpIHtcblx0XHRcdFx0dGhpcy5yZW1vdGVTZWFyY2goKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubG9jYWxTZWFyY2goKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yZXN1bHRzICYmIGNoYW5nZXMucmVzdWx0cy5jdXJyZW50VmFsdWUpIHtcblx0XHRcdHRoaXMuc2VhcmNoaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHByb3BhZ2F0ZUNoYW5nZShxdWVyeTogc3RyaW5nKSB7XG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMucmVzdWx0cy5maW5kKHJlcyA9PiB0aGlzLmxhYmVsID8gcmVzW3RoaXMubGFiZWxdID09PSBxdWVyeSA6IHJlcyA9PT0gcXVlcnkpO1xuXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG5cblx0XHRpZiAoIWl0ZW0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZSA6IHRoaXMubGFiZWwgPyB0aGlzLmxhYmVsIDogbnVsbDtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsKGtleSA/IGl0ZW1ba2V5XSB8fCAnJyA6IGl0ZW0pO1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiB0cmlnZ2VycyBvbiBpbnB1dCB2YWx1ZSBjaGFuZ2Vcblx0ICovXG5cdHB1YmxpYyBkb1NlYXJjaCgpOiB2b2lkIHtcblx0XHR0aGlzLmluZGV4ID0gLTE7IC8vIHJlc2V0IGluZGV4XG5cdFx0dGhpcy5zZWFyY2hpbmcgPSB0cnVlO1xuXG5cdFx0aWYgKHRoaXMucmVtb3RlKSB7XG5cdFx0XHR0aGlzLnNlYXJjaC5lbWl0KHRoaXMucXVlcnkpOyAvLyBhc2sgZm9yIG5ldyByZW1vdGUgZGF0YVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvY2FsU2VhcmNoKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcGVuRmx5b3V0KCk7IC8vIG9wZW4gdGhlIGZseW91dCB3aGVuIHRoZXJlIGlzIGEgY2hhbmdlXG5cdH1cblxuXHQvKipcblx0ICogdHJpZ2dlcnMgb24gc2VsZWN0YWJsZS1saXN0OnNlbGVjdCAtPiBvbkNsaWNrIGV2ZW50IGluIHNlbGVjdGFibGUtbGlzdFxuXHQgKi9cblx0cHVibGljIG9uU2VsZWN0KGl0ZW06IGFueSk6IHZvaWQge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKGl0ZW0gIT09IG51bGwgPyAodGhpcy5sYWJlbCA/IGl0ZW1bdGhpcy5sYWJlbF0gOiBpdGVtKSA6ICcnKTtcblx0XHR0aGlzLmNsb3NlRmx5b3V0KCk7IC8vIENsb3NlIHRoZSBmbHlvdXQgbWFudWFsbHlcblx0fVxuXG5cdHB1YmxpYyBvbkZseW91dENsb3NlZCgpOiB2b2lkIHtcblx0XHQvLyB0aGVyZSBpcyBvbmx5IDEgcmVzdWx0LCBzZWxlY3QgaXRcblx0XHRpZiAodGhpcy5pbmRleCA+PSAwICYmIHRoaXMucmVzdWx0cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdHJldHVybiB0aGlzLm9uU2VsZWN0KHRoaXMucmVzdWx0c1swXSk7XG5cdFx0fVxuXG5cdFx0Ly8gdGhlcmUgaXMgbm8gcXVlcnkgbm9yIHNlbGVjdGVkIGl0ZW0sIGNsZWFyIHRoZSBzZWxlY3RlZCBpdGVtXG5cdFx0aWYgKCF0aGlzLnF1ZXJ5ICYmIHRoaXMuaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vblNlbGVjdChudWxsKTtcblx0XHR9XG5cblx0XHQvLyByZXNldCB0aGUgcXVlcnkgZm9yIGFuIGludmFsaWQgcXVlcnkgaWYgY2xlYXJJbnZhbGlkIGlzIHRydWVcblx0XHRpZiAodGhpcy5jbGVhckludmFsaWQgJiYgdGhpcy5xdWVyeSAmJiAhdGhpcy5yZXN1bHRzLmxlbmd0aCAmJiB0aGlzLmluZGV4IDwgMCkge1xuXHRcdFx0dGhpcy5xdWVyeSA9IHRoaXMuc2VsZWN0ZWRJdGVtID8gdGhpcy5sYWJlbCA/IHRoaXMuc2VsZWN0ZWRJdGVtW3RoaXMubGFiZWxdIDogdGhpcy5zZWxlY3RlZEl0ZW0gOiAnJztcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb25LZXlBcnJvd0Rvd24oKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPCB0aGlzLnJlc3VsdHMubGVuZ3RoIC0gMSkge1xuXHRcdFx0dGhpcy5zY3JvbGxMaXN0KDEpO1xuXHRcdH1cblxuXHRcdHRoaXMub3BlbkZseW91dCgpO1xuXHR9XG5cblx0cHVibGljIG9uS2V5QXJyb3dVcCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA+PSAwKSB7XG5cdFx0XHR0aGlzLnNjcm9sbExpc3QoLTEpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbktleUVudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIERvIG5vdCBzdWJtaXQgZm9ybSB3aGVuIHNlbGVjdGluZyBhbiBpdGVtLlxuXG5cdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmluZGV4ID49IDAgPyB0aGlzLnF1ZXJ5ID0gdGhpcy5yZXN1bHRzW3RoaXMuaW5kZXhdW3RoaXMubGFiZWxdIDogdGhpcy5xdWVyeTtcblxuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHF1ZXJ5KTtcblx0XHR0aGlzLmNsb3NlRmx5b3V0KCk7XG5cdH1cblxuXHRwdWJsaWMgb25LZXlFc2NhcGUoKTogdm9pZCB7XG5cdFx0dGhpcy5jbG9zZUZseW91dCgpO1xuXHR9XG5cblx0cHVibGljIG9uRm9jdXMoKTogdm9pZCB7XG5cdFx0dGhpcy5mb2N1c2VkID0gdHJ1ZTtcblx0XHR0aGlzLm9wZW5GbHlvdXQoKTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuRmx5b3V0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmZseW91dCkge1xuXHRcdFx0dGhpcy5mbHlvdXQub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjbG9zZUZseW91dCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5mbHlvdXQpIHtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgbG9jYWxTZWFyY2goKTogdm9pZCB7XG5cdFx0dGhpcy5yZXN1bHRzID0gdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaCh0aGlzLmRhdGEsIHtcblx0XHRcdG1pbkxlbmd0aDogdGhpcy5taW5DaGFyYWN0ZXJzLFxuXHRcdFx0a2V5OiB0aGlzLmxhYmVsLFxuXHRcdFx0cXVlcnk6IHRoaXMucXVlcnksXG5cdFx0XHRzaG93QWxsQnlEZWZhdWx0OiB0aGlzLnNob3dBbGxCeURlZmF1bHQsXG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy5yZXN1bHRzLmxlbmd0aCA9PT0gMSAmJiB0aGlzLnF1ZXJ5ID09PSB0aGlzLnJlc3VsdHNbMF1bdGhpcy5sYWJlbF0pIHtcblx0XHRcdHRoaXMuaW5kZXggPSAwO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VhcmNoaW5nID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgcmVtb3RlU2VhcmNoKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5yZW1vdGVWYWx1ZSB8fCAhdGhpcy5kYXRhKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmRhdGEuZmluZCgoaXRlbTogYW55KSA9PiB7XG5cdFx0XHRpZiAodGhpcy52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gaXRlbVt0aGlzLnZhbHVlXSA9PT0gdGhpcy5xdWVyeTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGl0ZW0gPT09IHRoaXMucXVlcnk7XG5cdFx0fSk7XG5cblx0XHRpZiAoc2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMucXVlcnkgPSB0aGlzLmxhYmVsID8gc2VsZWN0ZWRbdGhpcy5sYWJlbF0gOiBzZWxlY3RlZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5xdWVyeSA9ICcnO1xuXHRcdH1cblxuXHRcdHRoaXMucmVtb3RlVmFsdWUgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBzY3JvbGxMaXN0KGZhY3RvcjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5pbmRleCArPSBmYWN0b3I7XG5cblx0XHRpZiAoIXRoaXMuZmx5b3V0Wm9uZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxpSXRlbXMgPSB0aGlzLmZseW91dFpvbmUuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcblx0XHRjb25zdCBsaUhlaWdodCA9IChsaUl0ZW1zWzFdID8gbGlJdGVtc1sxXS5vZmZzZXRIZWlnaHQgOiBsaUl0ZW1zWzBdLm9mZnNldEhlaWdodCk7XG5cdFx0Y29uc3Qgem9uZUhlaWdodCA9IHRoaXMuZmx5b3V0Wm9uZS5lbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvZmZzZXQgPSAoem9uZUhlaWdodCAvIGxpSGVpZ2h0KSAvIDI7XG5cblx0XHR0aGlzLmZseW91dFpvbmUuZWxlbWVudC5zY3JvbGxUb3AgPSAodGhpcy5pbmRleCAqIGxpSGVpZ2h0KSAtIChvZmZzZXQgKiBsaUhlaWdodCk7XG5cdH1cbn1cbiJdfQ==