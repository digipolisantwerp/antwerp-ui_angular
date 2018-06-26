/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, ContentChild, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { get, isEqual } from 'lodash-es';
import { FlyoutDirective, FlyoutZoneDirective } from '@acpaas-ui/ngx-components/flyout';
import { SearchService } from '../../../shared/services/search.service';
var AutoCompleteComponent = /** @class */ (function () {
    function AutoCompleteComponent(ref, searchService) {
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
        this.updateModel = function (_) { };
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    AutoCompleteComponent.prototype.writeValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        if (this.value) {
            var /** @type {?} */ selected = this.data.find(function (item) { return item[_this.value] === value; });
            if (selected) {
                return this.query = selected[this.label];
            }
            if (this.remote && !!value) {
                this.remoteValue = true;
            }
        }
        this.query = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AutoCompleteComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.updateModel = fn;
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if ((Array.isArray(this.data) && this.data.length > 0) && !this.query && this.showAllByDefault) {
            this.results = tslib_1.__spread(this.data);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AutoCompleteComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes) {
            return;
        }
        var /** @type {?} */ newData = get(changes, 'data.currentValue', []);
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
    };
    /**
     * @param {?} query
     * @return {?}
     */
    AutoCompleteComponent.prototype.propagateChange = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        var /** @type {?} */ item = this.results.find(function (res) { return _this.label ? res[_this.label] === query : res === query; });
        this.query = query;
        this.select.emit(item);
        if (!item) {
            return;
        }
        var /** @type {?} */ key = this.value ? this.value : this.label ? this.label : null;
        this.updateModel(key ? item[key] || '' : item);
        this.selectedItem = item;
    };
    /**
     * triggers on input value change
     * @return {?}
     */
    AutoCompleteComponent.prototype.doSearch = /**
     * triggers on input value change
     * @return {?}
     */
    function () {
        this.index = -1; // reset index
        this.searching = true;
        if (this.remote) {
            this.search.emit(this.query); // ask for new remote data
        }
        else {
            this.localSearch();
        }
        this.openFlyout(); // open the flyout when there is a change
    };
    /**
     * triggers on selectable-list:select -> onClick event in selectable-list
     * @param {?} item
     * @return {?}
     */
    AutoCompleteComponent.prototype.onSelect = /**
     * triggers on selectable-list:select -> onClick event in selectable-list
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.propagateChange(item !== null ? (this.label ? item[this.label] : item) : '');
        this.closeFlyout(); // Close the flyout manually
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.onFlyoutClosed = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.onKeyArrowDown = /**
     * @return {?}
     */
    function () {
        if (this.index < this.results.length - 1) {
            this.scrollList(1);
        }
        this.openFlyout();
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.onKeyArrowUp = /**
     * @return {?}
     */
    function () {
        if (this.index >= 0) {
            this.scrollList(-1);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AutoCompleteComponent.prototype.onKeyEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault(); // Do not submit form when selecting an item.
        var /** @type {?} */ query = this.index >= 0 ? this.query = this.results[this.index][this.label] : this.query;
        this.propagateChange(query);
        this.closeFlyout();
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.onKeyEscape = /**
     * @return {?}
     */
    function () {
        this.closeFlyout();
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focused = true;
        this.openFlyout();
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.openFlyout = /**
     * @return {?}
     */
    function () {
        if (this.flyout) {
            this.flyout.open();
        }
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.closeFlyout = /**
     * @return {?}
     */
    function () {
        if (this.flyout) {
            this.flyout.close();
        }
        this.focused = false;
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.localSearch = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    AutoCompleteComponent.prototype.remoteSearch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.remoteValue || !this.data) {
            return;
        }
        var /** @type {?} */ selected = this.data.find(function (item) {
            if (_this.value) {
                return item[_this.value] === _this.query;
            }
            return item === _this.query;
        });
        if (selected) {
            this.query = this.label ? selected[this.label] : selected;
        }
        else {
            this.query = '';
        }
        this.remoteValue = false;
    };
    /**
     * @param {?} factor
     * @return {?}
     */
    AutoCompleteComponent.prototype.scrollList = /**
     * @param {?} factor
     * @return {?}
     */
    function (factor) {
        this.index += factor;
        if (!this.flyoutZone) {
            return;
        }
        var /** @type {?} */ liItems = this.flyoutZone.element.getElementsByTagName('li');
        var /** @type {?} */ liHeight = (liItems[1] ? liItems[1].offsetHeight : liItems[0].offsetHeight);
        var /** @type {?} */ zoneHeight = this.flyoutZone.element.offsetHeight;
        var /** @type {?} */ offset = (zoneHeight / liHeight) / 2;
        this.flyoutZone.element.scrollTop = (this.index * liHeight) - (offset * liHeight);
    };
    AutoCompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-auto-complete',
                    styles: [".aui-auto-complete,.aui-auto-complete__info{display:block}"],
                    template: "<div class=\"m-flyout--scrollable m-flyout--full aui-auto-complete\" auiFlyout [toggleClick]=\"false\" (closed)=\"onFlyoutClosed()\">\n\t<input *ngIf=\"!mask\"\n\t\t[id]=\"id\"\n\t\t[placeholder]=\"placeholder\"\n\t\ttype=\"text\"\n\t\tauiFlyoutAction\n\t\t[(ngModel)]=\"query\"\n\t\t(ngModelChange)=\"doSearch()\"\n\t\tauiSelectableActions\n\t\t(keyArrowUp)=\"onKeyArrowUp()\"\n\t\t(keyArrowDown)=\"onKeyArrowDown()\"\n\t\t(keyEnter)=\"onKeyEnter($event)\"\n\t\t(keyEscape)=\"onKeyEscape()\"\n\t\t(focus)=\"onFocus()\"\n\t\tautocomplete=\"off\"\n\t/>\n\t<input *ngIf=\"mask\"\n\t\t[id]=\"id\"\n\t\t[placeholder]=\"placeholder\"\n\t\ttype=\"text\"\n\t\tauiFlyoutAction\n\t\t[(ngModel)]=\"query\"\n\t\t(ngModelChange)=\"doSearch()\"\n\t\tauiSelectableActions\n\t\t(keyArrowUp)=\"onKeyArrowUp()\"\n\t\t(keyArrowDown)=\"onKeyArrowDown()\"\n\t\t(keyEnter)=\"onKeyEnter($event)\"\n\t\t(keyEscape)=\"onKeyEscape()\"\n\t\t(focus)=\"onFocus()\"\n\t\tautocomplete=\"off\"\n\t\t[auiMask]=\"mask\"\n\t/>\n\n\t<div auiFlyoutZone>\n\t\t<span class=\"aui-auto-complete__info u-text-light u-padding-right u-padding-left-xs\" *ngIf=\"focused && loadingText && searching\">\n\t\t\t<span class=\"a-spinner a-spinner--inline a-spinner--sm u-margin-right-xs\"></span>\n\t\t\t{{ loadingText }}\n\t\t</span>\n\t\t<span class=\"aui-auto-complete__info u-text-light u-padding-right u-padding-left\" *ngIf=\"focused && searchIncentiveText && !searching && !query && !results.length\">{{ searchIncentiveText }}</span>\n\t\t<span class=\"aui-auto-complete__info u-text-light u-padding-right u-padding-left\" *ngIf=\"focused && noResultsText && !searching && query && !results.length\">{{ noResultsText }}</span>\n\n\t\t<aui-selectable-list [items]=\"results\" [index]=\"index\" (selected)=\"onSelect($event)\" [label]=\"label\" [search]=\"query\" [itemTemplate]=\"template\" *ngIf=\"results.length > 0 && !(focused && loadingText && searching)\"></aui-selectable-list>\n\t</div>\n</div>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return AutoCompleteComponent; }),
                            // tslint:disable-line
                            multi: true,
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    AutoCompleteComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SearchService }
    ]; };
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
    return AutoCompleteComponent;
}());
export { AutoCompleteComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvLWNvbXBsZXRlL2NvbXBvbmVudHMvYXV0by1jb21wbGV0ZS9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBSVosVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFVBQVUsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXhGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7SUErRnZFLCtCQUNTLEtBQ0E7UUFEQSxRQUFHLEdBQUgsR0FBRztRQUNILGtCQUFhLEdBQWIsYUFBYTt1QkFwQ0ksRUFBRTtvQkFDTCxFQUFFO3NCQUNQLEtBQUs7NkJBQ0UsQ0FBQztvQkFDRixJQUFJOzRCQUNKLEtBQUs7Z0NBSUQsS0FBSzs7c0JBT1EsSUFBSSxZQUFZLEVBQUU7c0JBQ3JCLElBQUksWUFBWSxFQUFFO3FCQU96QyxFQUFFO3FCQUNGLENBQUMsQ0FBQzs0QkFDVSxJQUFJO3lCQUNaLEtBQUs7dUJBQ1AsS0FBSzsyQkFFQSxLQUFLOzJCQUVOLFVBQUMsQ0FBTSxLQUFRO0tBSy9COzs7OztJQUdFLDBDQUFVOzs7O2NBQUMsS0FBVTs7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIscUJBQU0sUUFB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Q04sTUFBTTt5QkFFTixTQUFTLFNBQUMsZUFBZTs2QkFDekIsU0FBUyxTQUFDLG1CQUFtQjsyQkFFN0IsWUFBWSxTQUFDLFdBQVc7O2dDQXRHMUI7O1NBNkVhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRPbkNoYW5nZXMsXG5cdE9uSW5pdCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0RWxlbWVudFJlZixcblx0Vmlld0NoaWxkLFxuXHRDb250ZW50Q2hpbGQsXG5cdFRlbXBsYXRlUmVmLFxuXHRmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0LCBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgRmx5b3V0RGlyZWN0aXZlLCBGbHlvdXRab25lRGlyZWN0aXZlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWF1dG8tY29tcGxldGUnLFxuXHRzdHlsZXM6IFtgLmF1aS1hdXRvLWNvbXBsZXRlLC5hdWktYXV0by1jb21wbGV0ZV9faW5mb3tkaXNwbGF5OmJsb2NrfWBdLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWZseW91dC0tc2Nyb2xsYWJsZSBtLWZseW91dC0tZnVsbCBhdWktYXV0by1jb21wbGV0ZVwiIGF1aUZseW91dCBbdG9nZ2xlQ2xpY2tdPVwiZmFsc2VcIiAoY2xvc2VkKT1cIm9uRmx5b3V0Q2xvc2VkKClcIj5cblx0PGlucHV0ICpuZ0lmPVwiIW1hc2tcIlxuXHRcdFtpZF09XCJpZFwiXG5cdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcblx0XHR0eXBlPVwidGV4dFwiXG5cdFx0YXVpRmx5b3V0QWN0aW9uXG5cdFx0WyhuZ01vZGVsKV09XCJxdWVyeVwiXG5cdFx0KG5nTW9kZWxDaGFuZ2UpPVwiZG9TZWFyY2goKVwiXG5cdFx0YXVpU2VsZWN0YWJsZUFjdGlvbnNcblx0XHQoa2V5QXJyb3dVcCk9XCJvbktleUFycm93VXAoKVwiXG5cdFx0KGtleUFycm93RG93bik9XCJvbktleUFycm93RG93bigpXCJcblx0XHQoa2V5RW50ZXIpPVwib25LZXlFbnRlcigkZXZlbnQpXCJcblx0XHQoa2V5RXNjYXBlKT1cIm9uS2V5RXNjYXBlKClcIlxuXHRcdChmb2N1cyk9XCJvbkZvY3VzKClcIlxuXHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdC8+XG5cdDxpbnB1dCAqbmdJZj1cIm1hc2tcIlxuXHRcdFtpZF09XCJpZFwiXG5cdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcblx0XHR0eXBlPVwidGV4dFwiXG5cdFx0YXVpRmx5b3V0QWN0aW9uXG5cdFx0WyhuZ01vZGVsKV09XCJxdWVyeVwiXG5cdFx0KG5nTW9kZWxDaGFuZ2UpPVwiZG9TZWFyY2goKVwiXG5cdFx0YXVpU2VsZWN0YWJsZUFjdGlvbnNcblx0XHQoa2V5QXJyb3dVcCk9XCJvbktleUFycm93VXAoKVwiXG5cdFx0KGtleUFycm93RG93bik9XCJvbktleUFycm93RG93bigpXCJcblx0XHQoa2V5RW50ZXIpPVwib25LZXlFbnRlcigkZXZlbnQpXCJcblx0XHQoa2V5RXNjYXBlKT1cIm9uS2V5RXNjYXBlKClcIlxuXHRcdChmb2N1cyk9XCJvbkZvY3VzKClcIlxuXHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdFx0W2F1aU1hc2tdPVwibWFza1wiXG5cdC8+XG5cblx0PGRpdiBhdWlGbHlvdXRab25lPlxuXHRcdDxzcGFuIGNsYXNzPVwiYXVpLWF1dG8tY29tcGxldGVfX2luZm8gdS10ZXh0LWxpZ2h0IHUtcGFkZGluZy1yaWdodCB1LXBhZGRpbmctbGVmdC14c1wiICpuZ0lmPVwiZm9jdXNlZCAmJiBsb2FkaW5nVGV4dCAmJiBzZWFyY2hpbmdcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiYS1zcGlubmVyIGEtc3Bpbm5lci0taW5saW5lIGEtc3Bpbm5lci0tc20gdS1tYXJnaW4tcmlnaHQteHNcIj48L3NwYW4+XG5cdFx0XHR7eyBsb2FkaW5nVGV4dCB9fVxuXHRcdDwvc3Bhbj5cblx0XHQ8c3BhbiBjbGFzcz1cImF1aS1hdXRvLWNvbXBsZXRlX19pbmZvIHUtdGV4dC1saWdodCB1LXBhZGRpbmctcmlnaHQgdS1wYWRkaW5nLWxlZnRcIiAqbmdJZj1cImZvY3VzZWQgJiYgc2VhcmNoSW5jZW50aXZlVGV4dCAmJiAhc2VhcmNoaW5nICYmICFxdWVyeSAmJiAhcmVzdWx0cy5sZW5ndGhcIj57eyBzZWFyY2hJbmNlbnRpdmVUZXh0IH19PC9zcGFuPlxuXHRcdDxzcGFuIGNsYXNzPVwiYXVpLWF1dG8tY29tcGxldGVfX2luZm8gdS10ZXh0LWxpZ2h0IHUtcGFkZGluZy1yaWdodCB1LXBhZGRpbmctbGVmdFwiICpuZ0lmPVwiZm9jdXNlZCAmJiBub1Jlc3VsdHNUZXh0ICYmICFzZWFyY2hpbmcgJiYgcXVlcnkgJiYgIXJlc3VsdHMubGVuZ3RoXCI+e3sgbm9SZXN1bHRzVGV4dCB9fTwvc3Bhbj5cblxuXHRcdDxhdWktc2VsZWN0YWJsZS1saXN0IFtpdGVtc109XCJyZXN1bHRzXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkKT1cIm9uU2VsZWN0KCRldmVudClcIiBbbGFiZWxdPVwibGFiZWxcIiBbc2VhcmNoXT1cInF1ZXJ5XCIgW2l0ZW1UZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiICpuZ0lmPVwicmVzdWx0cy5sZW5ndGggPiAwICYmICEoZm9jdXNlZCAmJiBsb2FkaW5nVGV4dCAmJiBzZWFyY2hpbmcpXCI+PC9hdWktc2VsZWN0YWJsZS1saXN0PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBdXRvQ29tcGxldGVDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBpZDogc3RyaW5nO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSByZXN1bHRzOiBhbnlbXSA9IFtdOyAvLyBUaGUgdmFsdWVzIGZvciB0aGUgc2VsZWN0YWJsZSBsaXN0XG5cdEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107IC8vIFRoZSB2YWx1ZXMgdG8gc2VhcmNoIGluIHdoZW4gcmVtb3RlIHNlYXJjaCBpcyBkaXNhYmxlZFxuXHRASW5wdXQoKSByZW1vdGUgPSBmYWxzZTsgLy8gRGlzYWJsZSBvciBlbmFtYmxlIHJlbW90ZSBzZWFyY2hcblx0QElucHV0KCkgbWluQ2hhcmFjdGVycyA9IDA7XG5cdEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9IG51bGw7XG5cdEBJbnB1dCgpIGNsZWFySW52YWxpZCA9IGZhbHNlO1xuXHRASW5wdXQoKSBzZWFyY2hJbmNlbnRpdmVUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIG5vUmVzdWx0c1RleHQ6IHN0cmluZztcblx0QElucHV0KCkgc2hvd0FsbEJ5RGVmYXVsdCA9IGZhbHNlO1xuXG5cdC8vIHNwZWNpZnkgd2hpY2ggbGFiZWwvdmFsdWUgcHJvcHMgdG8gdXNlXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cblx0Ly8gRXZlbnRlbWl0dGVyIGZvciBzZWFyY2h2YWx1ZSAocGFyZW50IG9iamVjdCBzaG91bGQgdXBkYXRlIHRoZSByZXN1bHRzIHdpdGggdGhpcyBwYXJhbSlcblx0QE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBWaWV3Q2hpbGQoRmx5b3V0RGlyZWN0aXZlKSBmbHlvdXQ6IEZseW91dERpcmVjdGl2ZTtcblx0QFZpZXdDaGlsZChGbHlvdXRab25lRGlyZWN0aXZlKSBmbHlvdXRab25lOiBGbHlvdXRab25lRGlyZWN0aXZlO1xuXG5cdEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRwdWJsaWMgcXVlcnkgPSAnJztcblx0cHVibGljIGluZGV4ID0gLTE7IC8vIGluZGV4IGZvciBhY3RpdmUgZWxlbWVudCBpbiBzZWxlY3RhYmxlIGxpc3QsIGJ5IGRlZmF1bHQgLTEgKHNvIGl0IHN0YXJ0cyBpbiB0aGUgaW5wdXQgZmllbGQpXG5cdHB1YmxpYyBzZWxlY3RlZEl0ZW06IGFueSA9IG51bGw7IC8vIGtlZXAgYSBiYWNrdXAgb2YgdGhlIHNlbGVjdGVkSXRlbVxuXHRwdWJsaWMgc2VhcmNoaW5nID0gZmFsc2U7IC8vIHRyYWNrIHJlbW90ZSBzZWFyY2ggc3RhdGVcblx0cHVibGljIGZvY3VzZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlbW90ZVZhbHVlID0gZmFsc2U7XG5cblx0cHVibGljIHVwZGF0ZU1vZGVsID0gKF86IGFueSkgPT4geyB9O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZVxuXHQpIHsgfVxuXG5cdC8vIENPTlRST0xfVkFMVUVfQUNDRVNTT1IgaW50ZXJmYWNlXG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlID0gJycpIHtcblx0XHRpZiAodGhpcy52YWx1ZSkge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmRhdGEuZmluZCgoaXRlbTogYW55KSA9PiBpdGVtW3RoaXMudmFsdWVdID09PSB2YWx1ZSk7XG5cblx0XHRcdGlmIChzZWxlY3RlZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5xdWVyeSA9IHNlbGVjdGVkW3RoaXMubGFiZWxdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yZW1vdGUgJiYgISF2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnJlbW90ZVZhbHVlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnF1ZXJ5ID0gdmFsdWU7XG5cdH1cblxuXHQvLyBDT05UUk9MX1ZBTFVFX0FDQ0VTU09SIGludGVyZmFjZVxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHRcdHRoaXMudXBkYXRlTW9kZWwgPSBmbjtcblx0fVxuXG5cdC8vIENPTlRST0xfVkFMVUVfQUNDRVNTT1IgaW50ZXJmYWNlXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCgpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdGlmICgoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpICYmIHRoaXMuZGF0YS5sZW5ndGggPiAwKSAmJiAhdGhpcy5xdWVyeSAmJiB0aGlzLnNob3dBbGxCeURlZmF1bHQpIHtcblx0XHRcdHRoaXMucmVzdWx0cyA9IFsuLi50aGlzLmRhdGFdO1xuXHRcdH1cblx0fVxuXG5cdC8vIE9uQ2hhbmdlcyBpbnRlcmZhY2Vcblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRpZiAoIWNoYW5nZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBuZXdEYXRhID0gZ2V0KGNoYW5nZXMsICdkYXRhLmN1cnJlbnRWYWx1ZScsIFtdKTtcblx0XHRpZiAoIWlzRXF1YWwobmV3RGF0YSwgZ2V0KGNoYW5nZXMsICdkYXRhLnByZXZpb3VzVmFsdWUnLCBbXSkpKSB7XG5cdFx0XHRpZiAodGhpcy5yZW1vdGUpIHtcblx0XHRcdFx0dGhpcy5yZW1vdGVTZWFyY2goKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubG9jYWxTZWFyY2goKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yZXN1bHRzICYmIGNoYW5nZXMucmVzdWx0cy5jdXJyZW50VmFsdWUpIHtcblx0XHRcdHRoaXMuc2VhcmNoaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHByb3BhZ2F0ZUNoYW5nZShxdWVyeTogc3RyaW5nKSB7XG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMucmVzdWx0cy5maW5kKHJlcyA9PiB0aGlzLmxhYmVsID8gcmVzW3RoaXMubGFiZWxdID09PSBxdWVyeSA6IHJlcyA9PT0gcXVlcnkpO1xuXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG5cblx0XHRpZiAoIWl0ZW0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZSA6IHRoaXMubGFiZWwgPyB0aGlzLmxhYmVsIDogbnVsbDtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsKGtleSA/IGl0ZW1ba2V5XSB8fCAnJyA6IGl0ZW0pO1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiB0cmlnZ2VycyBvbiBpbnB1dCB2YWx1ZSBjaGFuZ2Vcblx0ICovXG5cdHB1YmxpYyBkb1NlYXJjaCgpOiB2b2lkIHtcblx0XHR0aGlzLmluZGV4ID0gLTE7IC8vIHJlc2V0IGluZGV4XG5cdFx0dGhpcy5zZWFyY2hpbmcgPSB0cnVlO1xuXG5cdFx0aWYgKHRoaXMucmVtb3RlKSB7XG5cdFx0XHR0aGlzLnNlYXJjaC5lbWl0KHRoaXMucXVlcnkpOyAvLyBhc2sgZm9yIG5ldyByZW1vdGUgZGF0YVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvY2FsU2VhcmNoKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcGVuRmx5b3V0KCk7IC8vIG9wZW4gdGhlIGZseW91dCB3aGVuIHRoZXJlIGlzIGEgY2hhbmdlXG5cdH1cblxuXHQvKipcblx0ICogdHJpZ2dlcnMgb24gc2VsZWN0YWJsZS1saXN0OnNlbGVjdCAtPiBvbkNsaWNrIGV2ZW50IGluIHNlbGVjdGFibGUtbGlzdFxuXHQgKi9cblx0cHVibGljIG9uU2VsZWN0KGl0ZW06IGFueSk6IHZvaWQge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKGl0ZW0gIT09IG51bGwgPyAodGhpcy5sYWJlbCA/IGl0ZW1bdGhpcy5sYWJlbF0gOiBpdGVtKSA6ICcnKTtcblx0XHR0aGlzLmNsb3NlRmx5b3V0KCk7IC8vIENsb3NlIHRoZSBmbHlvdXQgbWFudWFsbHlcblx0fVxuXG5cdHB1YmxpYyBvbkZseW91dENsb3NlZCgpOiB2b2lkIHtcblx0XHQvLyB0aGVyZSBpcyBvbmx5IDEgcmVzdWx0LCBzZWxlY3QgaXRcblx0XHRpZiAodGhpcy5pbmRleCA+PSAwICYmIHRoaXMucmVzdWx0cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdHJldHVybiB0aGlzLm9uU2VsZWN0KHRoaXMucmVzdWx0c1swXSk7XG5cdFx0fVxuXG5cdFx0Ly8gdGhlcmUgaXMgbm8gcXVlcnkgbm9yIHNlbGVjdGVkIGl0ZW0sIGNsZWFyIHRoZSBzZWxlY3RlZCBpdGVtXG5cdFx0aWYgKCF0aGlzLnF1ZXJ5ICYmIHRoaXMuaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vblNlbGVjdChudWxsKTtcblx0XHR9XG5cblx0XHQvLyByZXNldCB0aGUgcXVlcnkgZm9yIGFuIGludmFsaWQgcXVlcnkgaWYgY2xlYXJJbnZhbGlkIGlzIHRydWVcblx0XHRpZiAodGhpcy5jbGVhckludmFsaWQgJiYgdGhpcy5xdWVyeSAmJiAhdGhpcy5yZXN1bHRzLmxlbmd0aCAmJiB0aGlzLmluZGV4IDwgMCkge1xuXHRcdFx0dGhpcy5xdWVyeSA9IHRoaXMuc2VsZWN0ZWRJdGVtID8gdGhpcy5sYWJlbCA/IHRoaXMuc2VsZWN0ZWRJdGVtW3RoaXMubGFiZWxdIDogdGhpcy5zZWxlY3RlZEl0ZW0gOiAnJztcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb25LZXlBcnJvd0Rvd24oKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPCB0aGlzLnJlc3VsdHMubGVuZ3RoIC0gMSkge1xuXHRcdFx0dGhpcy5zY3JvbGxMaXN0KDEpO1xuXHRcdH1cblxuXHRcdHRoaXMub3BlbkZseW91dCgpO1xuXHR9XG5cblx0cHVibGljIG9uS2V5QXJyb3dVcCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA+PSAwKSB7XG5cdFx0XHR0aGlzLnNjcm9sbExpc3QoLTEpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbktleUVudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIERvIG5vdCBzdWJtaXQgZm9ybSB3aGVuIHNlbGVjdGluZyBhbiBpdGVtLlxuXG5cdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmluZGV4ID49IDAgPyB0aGlzLnF1ZXJ5ID0gdGhpcy5yZXN1bHRzW3RoaXMuaW5kZXhdW3RoaXMubGFiZWxdIDogdGhpcy5xdWVyeTtcblxuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHF1ZXJ5KTtcblx0XHR0aGlzLmNsb3NlRmx5b3V0KCk7XG5cdH1cblxuXHRwdWJsaWMgb25LZXlFc2NhcGUoKTogdm9pZCB7XG5cdFx0dGhpcy5jbG9zZUZseW91dCgpO1xuXHR9XG5cblx0cHVibGljIG9uRm9jdXMoKTogdm9pZCB7XG5cdFx0dGhpcy5mb2N1c2VkID0gdHJ1ZTtcblx0XHR0aGlzLm9wZW5GbHlvdXQoKTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuRmx5b3V0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmZseW91dCkge1xuXHRcdFx0dGhpcy5mbHlvdXQub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjbG9zZUZseW91dCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5mbHlvdXQpIHtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgbG9jYWxTZWFyY2goKTogdm9pZCB7XG5cdFx0dGhpcy5yZXN1bHRzID0gdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaCh0aGlzLmRhdGEsIHtcblx0XHRcdG1pbkxlbmd0aDogdGhpcy5taW5DaGFyYWN0ZXJzLFxuXHRcdFx0a2V5OiB0aGlzLmxhYmVsLFxuXHRcdFx0cXVlcnk6IHRoaXMucXVlcnksXG5cdFx0XHRzaG93QWxsQnlEZWZhdWx0OiB0aGlzLnNob3dBbGxCeURlZmF1bHQsXG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy5yZXN1bHRzLmxlbmd0aCA9PT0gMSAmJiB0aGlzLnF1ZXJ5ID09PSB0aGlzLnJlc3VsdHNbMF1bdGhpcy5sYWJlbF0pIHtcblx0XHRcdHRoaXMuaW5kZXggPSAwO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VhcmNoaW5nID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgcmVtb3RlU2VhcmNoKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5yZW1vdGVWYWx1ZSB8fCAhdGhpcy5kYXRhKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmRhdGEuZmluZCgoaXRlbTogYW55KSA9PiB7XG5cdFx0XHRpZiAodGhpcy52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gaXRlbVt0aGlzLnZhbHVlXSA9PT0gdGhpcy5xdWVyeTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGl0ZW0gPT09IHRoaXMucXVlcnk7XG5cdFx0fSk7XG5cblx0XHRpZiAoc2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMucXVlcnkgPSB0aGlzLmxhYmVsID8gc2VsZWN0ZWRbdGhpcy5sYWJlbF0gOiBzZWxlY3RlZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5xdWVyeSA9ICcnO1xuXHRcdH1cblxuXHRcdHRoaXMucmVtb3RlVmFsdWUgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBzY3JvbGxMaXN0KGZhY3RvcjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5pbmRleCArPSBmYWN0b3I7XG5cblx0XHRpZiAoIXRoaXMuZmx5b3V0Wm9uZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxpSXRlbXMgPSB0aGlzLmZseW91dFpvbmUuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcblx0XHRjb25zdCBsaUhlaWdodCA9IChsaUl0ZW1zWzFdID8gbGlJdGVtc1sxXS5vZmZzZXRIZWlnaHQgOiBsaUl0ZW1zWzBdLm9mZnNldEhlaWdodCk7XG5cdFx0Y29uc3Qgem9uZUhlaWdodCA9IHRoaXMuZmx5b3V0Wm9uZS5lbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvZmZzZXQgPSAoem9uZUhlaWdodCAvIGxpSGVpZ2h0KSAvIDI7XG5cblx0XHR0aGlzLmZseW91dFpvbmUuZWxlbWVudC5zY3JvbGxUb3AgPSAodGhpcy5pbmRleCAqIGxpSGVpZ2h0KSAtIChvZmZzZXQgKiBsaUhlaWdodCk7XG5cdH1cbn1cbiJdfQ==