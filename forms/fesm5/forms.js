import { __spread, __values } from 'tslib';
import { Injectable, Component, Input, Output, EventEmitter, ElementRef, ViewChild, ContentChild, TemplateRef, forwardRef, Directive, NgModule, InjectionToken, Inject, ChangeDetectionStrategy, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, NG_VALIDATORS, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { get, isEqual, debounce } from 'lodash-es';
import { FlyoutDirective, FlyoutZoneDirective, FlyoutModule, FlyoutSize } from '@acpaas-ui/ngx-components/flyout';
import { CommonModule } from '@angular/common';
import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { CALENDAR_MONTH_LABELS, CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_WEEKDAY_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS, CalendarService, CalendarModule } from '@acpaas-ui/ngx-components/calendar';
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';
import { takeUntil as takeUntil$1 } from 'rxjs/operators/takeUntil';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';
import { CKEditorModule } from 'ng2-ckeditor';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchService = /** @class */ (function () {
    function SearchService() {
        this.matchItemWithSearchString = function (item, searchString) {
            return String(item).toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        };
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    SearchService.prototype.search = /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ query = options.hasOwnProperty('query') ? options.query : '';
        var /** @type {?} */ minLength = options.hasOwnProperty('minLength') ? options.minLength : 0;
        var /** @type {?} */ key = options.hasOwnProperty('key') ? options.key : '';
        if ((!query && options.showAllByDefault) || query.length < minLength) {
            return __spread(data);
        }
        return __spread(data).filter(function (item) {
            if (key && !item.hasOwnProperty(key)) {
                return console.error("\"" + key + "\" does not exist in item " + JSON.stringify(item, null, 2));
            }
            if (key) {
                return _this.matchItemWithSearchString(item[key], query);
            }
            return _this.matchItemWithSearchString(item, query);
        });
    };
    SearchService.decorators = [
        { type: Injectable },
    ];
    return SearchService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
            this.results = __spread(this.data);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Inputmask = require('inputmask');
var MaskDirective = /** @class */ (function () {
    function MaskDirective(ref) {
        this.ref = ref;
    }
    /**
     * @return {?}
     */
    MaskDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setMask(this.auiMask);
    };
    /**
     * @param {?} mask
     * @return {?}
     */
    MaskDirective.prototype.setMask = /**
     * @param {?} mask
     * @return {?}
     */
    function (mask) {
        Inputmask(mask).mask(this.ref.nativeElement);
    };
    MaskDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiMask]',
                },] },
    ];
    /** @nocollapse */
    MaskDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MaskDirective.propDecorators = {
        auiMask: [{ type: Input }]
    };
    return MaskDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    MaskDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MaskModule = /** @class */ (function () {
    function MaskModule() {
    }
    MaskModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: __spread(Directives),
                    exports: __spread(Directives),
                    providers: [],
                },] },
    ];
    return MaskModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    AutoCompleteComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AutoCompleteModule = /** @class */ (function () {
    function AutoCompleteModule() {
    }
    AutoCompleteModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        FlyoutModule,
                        SelectableListModule,
                        MaskModule,
                    ],
                    declarations: __spread(Components),
                    exports: __spread(Components),
                    providers: [
                        SearchService,
                    ],
                },] },
    ];
    return AutoCompleteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DATEPICKER_ERROR_LABELS = new InjectionToken('errorLabels');
var /** @type {?} */ DATEPICKER_DEFAULT_ERROR_LABELS = {
    ERRORS_INVALID_DATE: 'INVALID_DATE',
    ERRORS_INVALID_RANGE: 'INVALID_RANGE',
};
var /** @type {?} */ DATEPICKER_SEPARATOR_CHAR = '/';
var /** @type {?} */ DATEPICKER_DATE_MASK = ['99', '99', '9999'].join(DATEPICKER_SEPARATOR_CHAR);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(monthLabels, weekdayLabels, errorLabels, calendarService, formBuilder) {
        if (monthLabels === void 0) { monthLabels = CALENDAR_DEFAULT_MONTH_LABELS; }
        if (weekdayLabels === void 0) { weekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS; }
        if (errorLabels === void 0) { errorLabels = DATEPICKER_DEFAULT_ERROR_LABELS; }
        this.monthLabels = monthLabels;
        this.weekdayLabels = weekdayLabels;
        this.errorLabels = errorLabels;
        this.calendarService = calendarService;
        this.formBuilder = formBuilder;
        this.placeholder = 'dd/mm/yyyy';
        this.dateMask = { mask: DATEPICKER_DATE_MASK, 'showMaskOnHover': false };
        this.componentDestroyed$ = new Subject();
        this.onChange = function () { };
    }
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formControl = this.formBuilder.control('');
        this.formControl.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function (value) {
            if (value) {
                var /** @type {?} */ format = value.split(DATEPICKER_SEPARATOR_CHAR).reverse().join('-');
                var /** @type {?} */ date = DateHelper.parseDate(format);
                if (date) {
                    _this.selectedDate = date;
                    _this.onChange(date.toISOString());
                }
                else {
                    // Change value with original value (and not null or '') so we can add an error in the validate function
                    // Change value with original value (and not null or '') so we can add an error in the validate function
                    _this.onChange(value);
                }
            }
        });
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DatepickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ date = DateHelper.parseDate(value);
        var /** @type {?} */ dateString = date ? this.formatDate(date) : '';
        this.selectedDate = date;
        this.formControl.setValue(dateString);
    };
    /**
     * @param {?} onChange
     * @return {?}
     */
    DatepickerComponent.prototype.registerOnChange = /**
     * @param {?} onChange
     * @return {?}
     */
    function (onChange) {
        this.onChange = onChange;
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} result
     * @return {?}
     */
    DatepickerComponent.prototype.selectDateFromCalendar = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        if (result.complete) {
            this.formControl.setValue(this.formatDate(result.date));
            this.flyout.close();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.formatDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return DateHelper.formatDate(date, 'DD/MM/YYYY', {
            leadingZero: true,
            monthLabels: this.monthLabels,
            weekdayLabels: this.weekdayLabels,
        });
    };
    /**
     * @param {?} ctrl
     * @return {?}
     */
    DatepickerComponent.prototype.validate = /**
     * @param {?} ctrl
     * @return {?}
     */
    function (ctrl) {
        // no error on empty value (add required validator in app)
        if (ctrl.value === '' || ctrl.value === null) {
            return null;
        }
        // throw format error if no valid date was provided
        if (!DateHelper.parseDate(ctrl.value)) {
            return {
                format: this.errorLabels.ERRORS_INVALID_DATE,
            };
        }
        // no error if valid date an no range provided
        if (!this.range || !this.range.length) {
            return null;
        }
        // throw error when out of range
        var /** @type {?} */ date = new Date(ctrl.value);
        var /** @type {?} */ range = this.calendarService.getRangeForDate(date, this.range);
        return range.indexOf(date.getDate()) >= 0 ? {
            range: this.errorLabels.ERRORS_INVALID_RANGE,
        } : null;
    };
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-datepicker',
                    template: "<div class=\"aui-datepicker a-input__wrapper\" auiFlyout>\n\t<input\n\t\ttype=\"text\"\n\t\tname=\"{{ name }}\"\n\t\tid=\"{{ id }}\"\n\t\tplaceholder=\"{{ placeholder }}\"\n\t\t[autocomplete]=\"autocomplete\"\n\t\t[formControl]=\"formControl\"\n\t\t[auiMask]=\"dateMask\"\n\t>\n   <span class=\"fa fa-calendar is-clickable\" auiFlyoutAction></span>\n\n\t<div role=\"datepicker\" class=\"m-datepicker m-datepicker--fixed\" auiFlyoutZone>\n\t\t<aui-calendar [selectedDate]=\"selectedDate\" [range]=\"range\" (selectDate)=\"selectDateFromCalendar($event)\"></aui-calendar>\n\t</div>\n</div>\n",
                    styles: [".aui-datepicker,aui-datepicker{display:block}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DatepickerComponent; }),
                            // tslint:disable-line:no-forward-ref
                            multi: true,
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(function () { return DatepickerComponent; }),
                            // tslint:disable-line:no-forward-ref
                            multi: true,
                        }],
                },] },
    ];
    /** @nocollapse */
    DatepickerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DATEPICKER_ERROR_LABELS,] }] },
        { type: CalendarService },
        { type: FormBuilder }
    ]; };
    DatepickerComponent.propDecorators = {
        flyout: [{ type: ViewChild, args: [FlyoutDirective,] }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        range: [{ type: Input }],
        autocomplete: [{ type: Input }]
    };
    return DatepickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$1 = [
    DatepickerComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS, ɵ2 = DATEPICKER_DEFAULT_ERROR_LABELS;
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @param {?} errorLabels
     * @return {?}
     */
    DatepickerModule.forChild = /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @param {?} errorLabels
     * @return {?}
     */
    function (weekdayLabels, monthLabels, errorLabels) {
        return {
            ngModule: DatepickerModule,
            providers: [
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
                { provide: DATEPICKER_ERROR_LABELS, useValue: errorLabels },
            ],
        };
    };
    DatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CalendarModule,
                        FlyoutModule,
                        MaskModule,
                    ],
                    declarations: __spread(Components$1),
                    exports: __spread(Components$1),
                    providers: [
                        { provide: CALENDAR_WEEKDAY_LABELS, useValue: ɵ0 },
                        { provide: CALENDAR_MONTH_LABELS, useValue: ɵ1 },
                        { provide: DATEPICKER_ERROR_LABELS, useValue: ɵ2 },
                    ],
                },] },
    ];
    return DatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FieldErrorComponent = /** @class */ (function () {
    function FieldErrorComponent() {
    }
    FieldErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-field-error',
                    template: "<div class=\"u-bg-danger u-text-xlight\">\n    <p class=\"u-margin-xs\">\n        {{ error.message }}\n    </p>\n</div>\n",
                    styles: [":host{display:flex;flex-flow:column}"],
                },] },
    ];
    FieldErrorComponent.propDecorators = {
        error: [{ type: Input }]
    };
    return FieldErrorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FieldErrorsComponent = /** @class */ (function () {
    function FieldErrorsComponent() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FieldErrorsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes["errors"] && !changes["errors"].currentValue) {
            this.errorMessages = [];
            return;
        }
        var /** @type {?} */ errorList = (changes["errors"] ? changes["errors"].currentValue : this.errors);
        if (!errorList) {
            return;
        }
        this.errorMessages = Object.keys(errorList).map(function (key) {
            return {
                message: _this.getMessage(key, errorList[key]),
            };
        });
    };
    /**
     * @param {?} type
     * @param {?} params
     * @return {?}
     */
    FieldErrorsComponent.prototype.getMessage = /**
     * @param {?} type
     * @param {?} params
     * @return {?}
     */
    function (type, params) {
        if (!this.errorDefinition || !this.errorDefinition.hasOwnProperty(type)) {
            // tslint:disable-next-line:max-line-length
            return console.warn("No errordefinition found for validator of type '" + type + "'. Please provide one through the [errorDefinition] attribute.");
        }
        return this.errorDefinition[type](params);
    };
    FieldErrorsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-field-errors',
                    template: "<div class=\"aui-field-errors\" *ngIf=\"errors\">\n    <aui-field-error class=\"aui-field-error\" *ngFor=\"let error of errorMessages\" [error]=\"error\"></aui-field-error>\n</div>",
                    styles: [":host{display:block}"],
                },] },
    ];
    FieldErrorsComponent.propDecorators = {
        errors: [{ type: Input }],
        errorDefinition: [{ type: Input }]
    };
    return FieldErrorsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$2 = [
    FieldErrorComponent,
    FieldErrorsComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FieldErrorsModule = /** @class */ (function () {
    function FieldErrorsModule() {
    }
    FieldErrorsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        LabelsModule,
                    ],
                    declarations: __spread(Components$2),
                    exports: __spread(Components$2),
                },] },
    ];
    return FieldErrorsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RangeSliderComponent = /** @class */ (function () {
    function RangeSliderComponent(elRef) {
        this.elRef = elRef;
        this.core_branding = true;
        this.min = 0;
        this.max = 100;
        this.minimalDistance = 1;
        this.step = 0;
        this.labelBefore = '';
        this.labelAfter = '';
        this.start = 0;
        this.end = false;
        this.steps = [];
        this.active = null;
        this.propagateChange = function (value) { };
    }
    /**
     * @return {?}
     */
    RangeSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.step > 0) {
            for (var /** @type {?} */ i = 0; i <= this.max; i += Number(this.step)) {
                this.steps.push(i);
            }
        }
        this.startPercentage = this.startToPercentage();
        if (this.end) {
            this.endPercentage = this.endToPercentage();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RangeSliderComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && value.start) {
            this.start = value.start;
        }
        else if (!isNaN(value) && value !== '') {
            this.start = Number(value);
        }
        else {
            this.setStart(Number(this.min));
        }
        this.startPercentage = this.startToPercentage();
        if (value && value.end) {
            this.end = value.end;
            this.endPercentage = this.endToPercentage();
        }
    };
    /**
     * @return {?}
     */
    RangeSliderComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} handle
     * @return {?}
     */
    RangeSliderComponent.prototype.onMouseDown = /**
     * @param {?} handle
     * @return {?}
     */
    function (handle) {
        this.active = handle;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RangeSliderComponent.prototype.onMouseUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.active === 'start') {
            this.setStart(this.round(this.start, this.step, 0));
            this.startPercentage = this.startToPercentage();
        }
        if (this.active === 'end') {
            this.setEnd(this.round(this.end, this.step, 0));
            this.endPercentage = this.endToPercentage();
        }
        this.active = null;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RangeSliderComponent.prototype.onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.active) {
            return;
        }
        event.preventDefault(); // Do not select text while sliding
        var /** @type {?} */ x = (/** @type {?} */ (event)).x !== undefined ? (/** @type {?} */ (event)).x : (/** @type {?} */ (event)).targetTouches[0].pageX;
        var /** @type {?} */ rect = this.elRef.nativeElement.getBoundingClientRect();
        var /** @type {?} */ newPercentage = this.calcPercentage(x, rect.width, rect.left);
        this.updateHandle(newPercentage);
    };
    /**
     * @param {?} newPercentage
     * @return {?}
     */
    RangeSliderComponent.prototype.updateHandle = /**
     * @param {?} newPercentage
     * @return {?}
     */
    function (newPercentage) {
        if (this.active === 'start') {
            this.startPercentage = newPercentage;
            this.setStart(this.percentageToStart());
            if (this.minimalDistanceNotRespected()) {
                this.setStart(Number(this.end) - Number(this.minimalDistance));
                this.startPercentage = this.startToPercentage();
            }
        }
        if (this.active === 'end' && this.endPercentage) {
            this.endPercentage = newPercentage;
            this.setEnd(this.percentageToEnd());
            if (this.minimalDistanceNotRespected()) {
                this.setEnd(Number(this.start) + Number(this.minimalDistance));
                this.endPercentage = this.endToPercentage();
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RangeSliderComponent.prototype.setStart = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.start = value;
        if (this.end) {
            this.propagateChange(/** @type {?} */ ({
                start: this.start,
                end: this.end,
            }));
        }
        else {
            this.propagateChange(this.start);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RangeSliderComponent.prototype.setEnd = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.end = value;
        this.propagateChange(/** @type {?} */ ({
            start: this.start,
            end: this.end,
        }));
    };
    /**
     * @param {?} number
     * @param {?} increment
     * @param {?} offset
     * @return {?}
     */
    RangeSliderComponent.prototype.round = /**
     * @param {?} number
     * @param {?} increment
     * @param {?} offset
     * @return {?}
     */
    function (number, increment, offset) {
        if (increment > 0) {
            return Math.round((number - offset) / increment) * increment + offset;
        }
        return number;
    };
    /**
     * @return {?}
     */
    RangeSliderComponent.prototype.startToPercentage = /**
     * @return {?}
     */
    function () {
        return Math.round((this.start - this.min) / (this.max - this.min) * 100);
    };
    /**
     * @return {?}
     */
    RangeSliderComponent.prototype.percentageToStart = /**
     * @return {?}
     */
    function () {
        return Math.round((this.startPercentage / 100) * (this.max - this.min) + Number(this.min));
    };
    /**
     * @return {?}
     */
    RangeSliderComponent.prototype.endToPercentage = /**
     * @return {?}
     */
    function () {
        return Math.round((Number(this.end) - this.min) / (this.max - this.min) * 100);
    };
    /**
     * @return {?}
     */
    RangeSliderComponent.prototype.percentageToEnd = /**
     * @return {?}
     */
    function () {
        return Math.round((this.endPercentage / 100) * (this.max - this.min) + Number(this.min));
    };
    /**
     * @return {?}
     */
    RangeSliderComponent.prototype.minimalDistanceNotRespected = /**
     * @return {?}
     */
    function () {
        return this.minimalDistance >= 0 && this.end && this.start > Number(this.end) - this.minimalDistance;
    };
    /**
     * @param {?} mouseX
     * @param {?} width
     * @param {?} offsetLeft
     * @return {?}
     */
    RangeSliderComponent.prototype.calcPercentage = /**
     * @param {?} mouseX
     * @param {?} width
     * @param {?} offsetLeft
     * @return {?}
     */
    function (mouseX, width, offsetLeft) {
        var /** @type {?} */ mousePos = mouseX - offsetLeft;
        var /** @type {?} */ newPercentage = Math.round((mousePos / width) * 100);
        if (newPercentage > 100) {
            newPercentage = 100;
        }
        if (newPercentage < 0) {
            newPercentage = 0;
        }
        return newPercentage;
    };
    RangeSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-range-slider',
                    template: "<div class=\"m-range-slider__inner\">\n    <div class=\"m-range-slider__bar\" [style.left]=\"(endPercentage ? startPercentage + '%' : false)\" [style.width]=\"(endPercentage ? endPercentage - startPercentage +'%' : startPercentage +'%')\"></div>\n    <span (touchstart)=\"onMouseDown('start')\" (mousedown)=\"onMouseDown('start')\" class=\"m-range-slider__handle\" [style.left]=\"startPercentage + '%'\">\n        <div class=\"m-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top\">\n            <p>{{ labelBefore }}{{ start }}{{ labelAfter }}</p>\n        </div>\n    </span>\n\n    <span *ngIf=\"end\" (touchstart)=\"onMouseDown('end')\" (mousedown)=\"onMouseDown('end')\" class=\"m-range-slider__handle\" [style.left]=\"endPercentage + '%'\">\n        <div class=\"m-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top\">\n            <p>{{ labelBefore }}{{ end }}{{ labelAfter }}</p>\n        </div>\n    </span>\n</div>\n\n<div class=\"m-range-slider__steps\">\n    <div class=\"m-range-slider__step\" *ngFor=\"let step of steps; let i = index\"></div>\n</div>\n\n<div class=\"m-range-slider__step-labels\">\n    <div class=\"m-range-slider__step\" *ngFor=\"let step of steps; let i = index\">{{ step }}</div>\n</div>\n",
                    styles: [":host{display:block;position:relative}.m-range-slider__handle{z-index:10}.m-range-slider__tooltip{white-space:nowrap}.m-range-slider__steps{display:flex;justify-content:space-between;width:100%;position:absolute;top:0;left:0;right:0;padding:.25rem;z-index:8}.m-range-slider__steps .m-range-slider__step{width:16px;height:16px;background-color:#b0b0b0;text-align:center;border-radius:50%;margin:2px}.m-range-slider__step-labels{display:flex;justify-content:space-between;margin-top:1rem;color:#444;font-size:14px}.m-range-slider__step-labels .m-range-slider__step{width:25px}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return RangeSliderComponent; }),
                            // tslint:disable-line
                            multi: true,
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    RangeSliderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    RangeSliderComponent.propDecorators = {
        core_branding: [{ type: HostBinding, args: ['class.m-range-slider',] }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        minimalDistance: [{ type: Input }],
        step: [{ type: Input }],
        labelBefore: [{ type: Input }],
        labelAfter: [{ type: Input }],
        onMouseUp: [{ type: HostListener, args: ['touchend', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }],
        onMouseMove: [{ type: HostListener, args: ['touchmove', ['$event'],] }, { type: HostListener, args: ['mousemove', ['$event'],] }]
    };
    return RangeSliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$3 = [
    RangeSliderComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RangeSliderModule = /** @class */ (function () {
    function RangeSliderModule() {
    }
    RangeSliderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    declarations: __spread(Components$3),
                    exports: __spread(Components$3),
                },] },
    ];
    return RangeSliderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchFilterComponent = /** @class */ (function () {
    function SearchFilterComponent() {
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
        this.updateModel = function () { };
        this.filterDataFromSearch = debounce(this.filterData.bind(this), this.inputDelay);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SearchFilterComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedItems = Array.isArray(value) ? value : [];
    };
    /**
     * @param {?} onChange
     * @return {?}
     */
    SearchFilterComponent.prototype.registerOnChange = /**
     * @param {?} onChange
     * @return {?}
     */
    function (onChange) {
        this.updateModel = onChange;
    };
    /**
     * @return {?}
     */
    SearchFilterComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    SearchFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.showAllByDefault) {
            this.filterData();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SearchFilterComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ choices = get(changes, 'choices.currentValue', null);
        if (!choices) {
            return;
        }
        if (this.remote) {
            this.filteredChoices = __spread(choices);
            this.loading = false;
        }
        else {
            this.filterData();
        }
    };
    /**
     * @return {?}
     */
    SearchFilterComponent.prototype.filterData = /**
     * @return {?}
     */
    function () {
        if (this.remote) {
            this.loading = true;
            return this.search.emit(this.query);
        }
        this.filterChoices();
    };
    /**
     * @return {?}
     */
    SearchFilterComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.selectedItems = [];
        this.query = '';
        this.filterData();
        this.updateModel(this.selectedItems);
    };
    /**
     * @param {?} choice
     * @return {?}
     */
    SearchFilterComponent.prototype.toggleSelected = /**
     * @param {?} choice
     * @return {?}
     */
    function (choice) {
        var /** @type {?} */ selected = this.selectedItems.indexOf(choice);
        if (selected < 0) {
            this.selectedItems = this.selectedItems.concat(choice);
        }
        else {
            this.selectedItems = __spread(this.selectedItems.slice(0, selected), this.selectedItems.slice(selected + 1));
        }
        this.updateModel(this.selectedItems);
    };
    /**
     * @return {?}
     */
    SearchFilterComponent.prototype.filterChoices = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filteredChoices = this.choices.filter(function (choice) {
            return (_this.selectedItems.indexOf(choice.value) < 0 &&
                choice.label.toLowerCase().indexOf(_this.query.toLowerCase()) >= 0);
        });
    };
    SearchFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-search-filter',
                    template: "<div class=\"m-search-filter\" auiFlyout [size]=\"flyoutSize\" [align]=\"flyoutAlign\">\n\t<div class=\"m-search-filter__label has-icon-right\" [ngClass]=\"{'m-search-filter__label--active': selectedItems.length > 0}\" auiFlyoutAction>\n\t\t{{ label }}\n\t\t<span *ngIf=\"selectedItems.length\">({{ selectedItems.length }})</span>\n\t\t<span class=\"fa fa-angle-down\"></span>\n\t</div>\n\n\t<div class=\"m-search-filter__search m-search-filter__search--scroll\" auiFlyoutZone>\n\t\t<div class=\"m-search-filter__input a-input has-icon-right\">\n\t\t\t<div class=\"a-input__wrapper\">\n\t\t\t\t<input type=\"text\" name=\"{{ name + '-search' }}\" id=\"{{ id + '-search' }}\" [(ngModel)]=\"query\" (input)=\"filterDataFromSearch()\" [attr.placeholder]=\"placeholder\">\n\t\t\t\t<span class=\"fa fa-search\"></span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"m-search-filter__clear\" *ngIf=\"selectedItems.length > 0\">\n\t\t\t<button class=\"a-button-outline a-button--small a-button--danger has-icon-left\" (click)=\"clear()\">\n\t\t\t\t<div class=\"fa fa-close\"></div>\n\t\t\t\t{{ labelDeselect }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<h6 class=\"m-search-filter__results__title\">{{ labelResults }}</h6>\n\t\t<div class=\"u-text-center u-padding a-spinner\" *ngIf=\"loading\"></div>\n\t\t<ul class=\"a-list a-list--lined a-list--unstyled\" *ngIf=\"!loading\">\n\t\t\t<li class=\"m-search-filter__results__item a-list__item\" *ngIf=\"!filteredChoices.length\">\n\t\t\t\t<p class=\"u-padding-xs\">{{ labelNoResults }}</p>\n\t\t\t</li>\n\t\t\t<li class=\"m-search-filter__results__item a-list__item\" *ngFor=\"let choice of filteredChoices; index as i\">\n\t\t\t\t <div class=\"a-input__checkbox\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\tid=\"{{ 'checkbox--' + i + '--' + id }}\"\n\t\t\t\t\t\tname=\"{{ 'checkbox--' + i + '--' + id }}\"\n\t\t\t\t\t\t[checked]=\"selectedItems.indexOf(choice.value) >= 0\"\n\t\t\t\t\t\t(change)=\"toggleSelected(choice.value)\"\n\t\t\t\t\t>\n\t\t\t\t\t<label for=\"{{ 'checkbox--' + i + '--' + id }}\">{{ choice.label }}</label>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n",
                    styles: [".m-search-filter__label{background:#fff;padding-left:1.5rem;border:1px solid #b0b0b0;margin:0 .75rem .75rem 0;line-height:3rem;cursor:pointer;display:flex;justify-content:space-between}.m-search-filter__label>span:not(.fa){margin-left:.25rem}.m-search-filter__label>.fa{color:#7d7d7d;font-size:1.25rem;height:3rem;line-height:3rem;pointer-events:none;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:3rem}.m-search-filter__label.m-search-filter__label--active{background-color:#0064b4;border-color:#0064b4;color:#fff}.m-search-filter__label.m-search-filter__label--active>.fa{color:#fff}.m-search-filter__label.m-search-filter__label--error{background-color:#da291c;border-color:#da291c;color:#fff}.m-search-filter__label.m-search-filter__label--error>.fa{color:#fff}.m-search-filter__input{margin-bottom:.75rem;padding:.75rem}.m-search-filter__input .a-input__wrapper{margin-right:0}.m-search-filter__clear{text-align:center;margin:0 .75rem 1.5rem}.m-search-filter__search{max-height:50vh}.m-search-filter__search.m-search-filter__search--scroll{overflow-y:auto}.m-search-filter__results__title{font-size:16px;margin:0 .75rem}.m-search-filter .a-list .m-search-filter__results__item{padding:0}.m-search-filter__results__item{cursor:pointer}.m-search-filter__results__item .a-input__checkbox{display:flex;padding-left:2.25rem}.m-search-filter__results__item .a-input__checkbox input[type=checkbox]:checked+label::after{top:.75rem}.m-search-filter__results__item .a-input__checkbox label{flex:1;padding:.75rem}.m-search-filter__results__item:hover{background-color:#f3f3f3}"],
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SearchFilterComponent; }),
                            // tslint:disable-line:no-forward-ref
                            multi: true,
                        }],
                },] },
    ];
    /** @nocollapse */
    SearchFilterComponent.ctorParameters = function () { return []; };
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
    return SearchFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$4 = [
    SearchFilterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchFilterModule = /** @class */ (function () {
    function SearchFilterModule() {
    }
    SearchFilterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule,
                        FlyoutModule,
                    ],
                    declarations: __spread(Components$4),
                    exports: __spread(Components$4),
                },] },
    ];
    return SearchFilterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimePickerValidators = /** @class */ (function () {
    function TimePickerValidators() {
    }
    /**
     * @param {?} time
     * @return {?}
     */
    TimePickerValidators.minTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        var /** @type {?} */ validator = function (control) {
            var /** @type {?} */ splittedControlValue = control.value.split(':');
            var /** @type {?} */ controlHours = parseInt(splittedControlValue[0], 10);
            var /** @type {?} */ controlMinutes = parseInt(splittedControlValue[1], 10);
            var /** @type {?} */ splittedMinTime = time.split(':');
            var /** @type {?} */ minHours = parseInt(splittedMinTime[0], 10);
            var /** @type {?} */ minMinutes = parseInt(splittedMinTime[1], 10);
            // Don't throw error --> use Validator.required
            if (isNaN(controlHours) || isNaN(controlMinutes) || isNaN(minHours) || isNaN(minMinutes)) {
                return null;
            }
            if (minHours < controlHours) {
                return null;
            }
            if (minHours === controlHours && minMinutes <= controlMinutes) {
                return null;
            }
            return { 'minTime': { value: control.value } };
        };
        return validator;
    };
    /**
     * @param {?} time
     * @return {?}
     */
    TimePickerValidators.maxTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        var /** @type {?} */ validator = function (control) {
            var /** @type {?} */ splittedControlValue = control.value.split(':');
            var /** @type {?} */ controlHours = parseInt(splittedControlValue[0], 10);
            var /** @type {?} */ controlMinutes = parseInt(splittedControlValue[1], 10);
            var /** @type {?} */ splittedMinTime = time.split(':');
            var /** @type {?} */ maxHours = parseInt(splittedMinTime[0], 10);
            var /** @type {?} */ maxMinutes = parseInt(splittedMinTime[1], 10);
            // Don't throw error --> use Validator.required
            if (isNaN(controlHours) || isNaN(controlMinutes) || isNaN(maxHours) || isNaN(maxMinutes)) {
                return null;
            }
            if (maxHours > controlHours) {
                return null;
            }
            if (maxHours === controlHours && maxMinutes >= controlMinutes) {
                return null;
            }
            return { 'maxTime': { value: control.value } };
        };
        return validator;
    };
    return TimePickerValidators;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var TimepickerInputSize = {
    Auto: 'auto',
    Small: 'small',
    Large: 'large',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent(formBuilder, renderer) {
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.hoursPlaceholder = 'HH';
        this.minutesPlaceholder = 'MM';
        this.hasError = false;
        this.size = TimepickerInputSize.Auto;
        this.shouldUseFallback = false;
        this.minutes = [];
        this.hours = [];
        this.timeControl = new FormControl();
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shouldUseFallback = this.supportsNativeTimepicker();
        this.minutes = this.getMinutes();
        this.hours = this.getHours();
        this.fallbackForm = this.formBuilder.group({
            hours: null,
            minutes: null,
        });
        this.fallbackForm.valueChanges
            .pipe(takeUntil$1(this.componentDestroyed$))
            .subscribe(function (formData) {
            if (formData.hours && formData.minutes) {
                _this.updateModel(formData.hours + ":" + formData.minutes);
            }
            else {
                _this.updateModel('');
            }
        });
        this.timeControl.valueChanges
            .pipe(takeUntil$1(this.componentDestroyed$))
            .subscribe(function (time) {
            _this.updateModel(time);
        });
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.timeControl.setValue(value, { emitEvent: false });
        if (value) {
            var /** @type {?} */ splitted = value.split(':');
            this.fallbackForm.get('hours').setValue(splitted[0], { emitEvent: false });
            this.fallbackForm.get('minutes').setValue(splitted[1], { emitEvent: false });
        }
    };
    /**
     * @param {?} onChange
     * @return {?}
     */
    TimepickerComponent.prototype.registerOnChange = /**
     * @param {?} onChange
     * @return {?}
     */
    function (onChange) {
        this.updateModel = onChange;
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    TimepickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.timeControl.disable({ emitEvent: false });
            this.fallbackForm.disable({ emitEvent: false });
        }
        else {
            this.timeControl.enable({ emitEvent: false });
            this.fallbackForm.enable({ emitEvent: false });
        }
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.supportsNativeTimepicker = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ element = this.renderer.createElement('input');
        element.type = 'time';
        return element.type === 'text';
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return Array(60).fill('').map(function (value, index) {
            return DateHelper.addLeadingZero(index);
        });
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return Array(24).fill('').map(function (value, index) {
            return DateHelper.addLeadingZero(index);
        });
    };
    TimepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-timepicker',
                    template: "<div class=\"a-input\" [class]=\"'a-input--' + size\" [ngClass]=\"{ 'has-error': hasError }\" *ngIf=\"!shouldUseFallback\">\n    <input type=\"time\" [formControl]=\"timeControl\">\n</div>\n\n<div *ngIf=\"shouldUseFallback\" [formGroup]=\"fallbackForm\">\n    <div class=\"a-input has-icon-right\" [class]=\"'a-input--' + size\" [ngClass]=\"{ 'has-error': hasError }\">\n        <div class=\"a-input__wrapper\">\n            <select formControlName=\"hours\">\n                <option disabled value=\"null\">{{ hoursPlaceholder }}</option>\n                <option *ngFor=\"let hour of hours\" [value]=\"hour\">{{ hour }}</option>\n            </select>\n            <span class=\"fa fa-angle-down\"></span>\n        </div>\n    </div>\n\n    <div class=\"a-input has-icon-right\" [class]=\"'a-input--' + size\" [ngClass]=\"{ 'has-error': hasError }\">\n        <div class=\"a-input__wrapper\">\n            <select formControlName=\"minutes\">\n                <option disabled value=\"null\">{{ minutesPlaceholder }}</option>\n                <option *ngFor=\"let minute of minutes\" [value]=\"minute\">{{ minute }}</option>\n            </select>\n            <span class=\"fa fa-angle-down\"></span>\n        </div>\n    </div>\n</div>\n",
                    styles: [":host{display:block}:host .a-input{display:inline-block}:host::before{z-index:10}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TimepickerComponent; }),
                            // tslint:disable-line:no-forward-ref
                            multi: true,
                        }],
                },] },
    ];
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Renderer2 }
    ]; };
    TimepickerComponent.propDecorators = {
        hoursPlaceholder: [{ type: Input }],
        minutesPlaceholder: [{ type: Input }],
        hasError: [{ type: Input }],
        size: [{ type: Input }]
    };
    return TimepickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$5 = [
    TimepickerComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimepickerModule = /** @class */ (function () {
    function TimepickerModule() {
    }
    TimepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                    ],
                    declarations: __spread(Components$5),
                    exports: __spread(Components$5),
                    providers: [],
                },] },
    ];
    return TimepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ UPLOAD_OPTIONS_DEFAULT = {
    allowedMimeTypes: [],
    allowedFileTypes: [],
    autoUpload: false,
    maxFileSize: 0,
    // 0 is infinite
    queueLimit: 0,
    // 0 is infinite
    type: 'drop',
    url: '',
};
var /** @type {?} */ UPLOAD_VALIDATION_MESSAGES = new InjectionToken('uploadValidationMessages');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Uploader = /** @class */ (function () {
    function Uploader(options) {
        this.options = UPLOAD_OPTIONS_DEFAULT;
        this.setOptions(options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    Uploader.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = Object.assign({}, this.options, options);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    Uploader.prototype.uploadFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        var /** @type {?} */ formData = this.filesToFormData(files);
        return Observable.create(function (observer) {
            var /** @type {?} */ xhr = new XMLHttpRequest();
            // Progress callback
            xhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    var /** @type {?} */ percentComplete = e.loaded / e.total;
                    observer.next({
                        progress: percentComplete,
                        data: null,
                    });
                }
            });
            // Complete callback
            xhr.onload = function () {
                observer.next({
                    progress: 1,
                    data: xhr.response,
                });
                // observer.complete();
            };
            // Do request
            xhr.responseType = 'json';
            xhr.open('post', _this.options.url);
            xhr.send(formData);
        });
    };
    /**
     * @param {?} files
     * @return {?}
     */
    Uploader.prototype.validateFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var /** @type {?} */ validFiles = [];
        var /** @type {?} */ invalidFiles = [];
        if (files.length > 0) {
            try {
                for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var file = files_1_1.value;
                    var /** @type {?} */ errors = [];
                    if (!this.validateFileType(file)) {
                        errors.push('INVALID_FILE_TYPE');
                    }
                    if (!this.validateFileSize(file)) {
                        errors.push('INVALID_FILE_SIZE');
                    }
                    if (!this.validateMimeType(file)) {
                        errors.push('INVALID_MIME_TYPE');
                    }
                    if (errors.length === 0) {
                        validFiles.push(file);
                    }
                    else {
                        invalidFiles.push({
                            reasons: errors,
                            file: file,
                        });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return {
            validFiles: validFiles,
            invalidFiles: invalidFiles,
        };
        var e_1, _a;
    };
    /**
     * @param {?} files
     * @return {?}
     */
    Uploader.prototype.filesToFormData = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var /** @type {?} */ formData = new FormData();
        if (!this.options.url || this.options.url === '') {
            throw new Error('Define the upload url.');
        }
        try {
            for (var files_2 = __values(files), files_2_1 = files_2.next(); !files_2_1.done; files_2_1 = files_2.next()) {
                var file = files_2_1.value;
                formData.append('file', file);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (files_2_1 && !files_2_1.done && (_a = files_2.return)) _a.call(files_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return formData;
        var e_2, _a;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    Uploader.prototype.getFileExtension = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return file.name.split('.')[file.name.split('.').length - 1];
    };
    /**
     * @param {?} file
     * @return {?}
     */
    Uploader.prototype.validateFileType = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var /** @type {?} */ allowedFileTypes = this.options.allowedFileTypes;
        var /** @type {?} */ ext = this.getFileExtension(file);
        // Filter defined?
        if (!Array.isArray(allowedFileTypes) || allowedFileTypes.length === 0) {
            return true;
        }
        // Make allowedFileTypes case insensitive
        var /** @type {?} */ toUpper = function (x) { return x.toUpperCase(); };
        var /** @type {?} */ allowedFileTypesToUpper = allowedFileTypes.map(toUpper);
        return allowedFileTypesToUpper.lastIndexOf(ext.toUpperCase()) !== -1;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    Uploader.prototype.validateFileSize = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var /** @type {?} */ maxFileSize = this.options.maxFileSize;
        // Filter defined?
        if (!maxFileSize || maxFileSize === 0) {
            return true;
        }
        return maxFileSize > file.size;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    Uploader.prototype.validateMimeType = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var /** @type {?} */ allowedMimeTypes = this.options.allowedMimeTypes;
        // Filter defined?
        if (!Array.isArray(allowedMimeTypes) || allowedMimeTypes.length === 0) {
            return true;
        }
        return allowedMimeTypes.lastIndexOf(file.type) !== -1;
    };
    return Uploader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
        this.options = UPLOAD_OPTIONS_DEFAULT;
        this.selectUploadedFiles = new EventEmitter();
        this.uploadedFiles = [];
        this.invalidFiles = [];
        this.queuedFiles = [];
    }
    /**
     * @return {?}
     */
    UploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uploader = new Uploader(this.options);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadComponent.prototype.onUploadedFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.uploadedFiles = this.uploadedFiles.concat(files);
        this.selectUploadedFiles.emit(this.uploadedFiles);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadComponent.prototype.onInvalidFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.invalidFiles = files;
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadComponent.prototype.onQueuedFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.queuedFiles = this.queuedFiles.concat(files);
    };
    UploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-upload',
                    template: "<div class=\"aui-upload\">\n    <aui-upload-zone [uploader]=\"uploader\" (queuedFiles)=\"onQueuedFiles($event)\" (uploadedFiles)=\"onUploadedFiles($event)\" (invalidFiles)=\"onInvalidFiles($event)\">\n        <div class=\"aui-upload-message\"><ng-content select=\".aui-upload-message\"></ng-content></div>\n        <div class=\"aui-upload-description\"><ng-content select=\".aui-upload-description\"></ng-content></div>\n        <div class=\"aui-upload-button\"><ng-content select=\".aui-upload-button\"></ng-content></div>\n    </aui-upload-zone>\n    <aui-validation-list [invalidFiles]=\"invalidFiles\"></aui-validation-list>\n    <aui-upload-queue *ngIf=\"!options?.autoUpload\" [uploader]=\"uploader\" [files]=\"queuedFiles\" (uploadedFiles)=\"onUploadedFiles($event)\"></aui-upload-queue>\n</div>\n",
                },] },
    ];
    UploadComponent.propDecorators = {
        options: [{ type: Input }],
        selectUploadedFiles: [{ type: Output }]
    };
    return UploadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UploadInputComponent = /** @class */ (function () {
    function UploadInputComponent() {
        this.propagateChange = function (_) { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    UploadInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { };
    /**
     * @param {?} fn
     * @return {?}
     */
    UploadInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    UploadInputComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadInputComponent.prototype.onUpload = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var /** @type {?} */ data = (this.format ? this.format(files) : files);
        this.propagateChange(data);
    };
    UploadInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-upload-input',
                    template: "<aui-upload [options]=\"options\" (selectUploadedFiles)=\"onUpload($event)\">\n    <div class=\"aui-upload-message\"><ng-content select=\".aui-upload-message\"></ng-content></div>\n    <div class=\"aui-upload-description\"><ng-content select=\".aui-upload-description\"></ng-content></div>\n    <div class=\"aui-upload-button\"><ng-content select=\".aui-upload-button\"></ng-content></div>\n</aui-upload>\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: UploadInputComponent,
                            multi: true,
                        }],
                },] },
    ];
    UploadInputComponent.propDecorators = {
        options: [{ type: Input }],
        format: [{ type: Input }]
    };
    return UploadInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UploadQueueComponent = /** @class */ (function () {
    function UploadQueueComponent() {
        this.uploadedFiles = new EventEmitter();
        this.uploadProgress = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    UploadQueueComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.files.splice(index, 1);
    };
    /**
     * @return {?}
     */
    UploadQueueComponent.prototype.uploadFiles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.uploader.uploadFiles(this.files).subscribe(function (response) {
            if (response.progress) {
                _this.uploadProgress = Math.floor(response.progress * 100);
            }
            if (response.data) {
                _this.uploadedFiles.emit(response.data);
                _this.files = [];
            }
        });
    };
    UploadQueueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-upload-queue',
                    template: "<ul class=\"m-upload__files u-margin-bottom-xs\">\n    <li *ngFor=\"let file of files; let i = index\">\n        <span class=\"fa fa-file-o\"></span>\n        <span class=\"m-upload__filename\">{{ file.name }}</span>\n\n        <button (click)=\"remove(i)\" class=\"m-upload__delete a-button-transparent a-button--default a-button--small has-icon\">\n            <i class=\"fa fa-close\"></i>\n        </button>\n    </li>\n</ul>\n\n<button class=\"a-button\" *ngIf=\"files.length > 0\" (click)=\"uploadFiles()\">Upload!</button>\n",
                },] },
    ];
    UploadQueueComponent.propDecorators = {
        files: [{ type: Input }],
        uploader: [{ type: Input }],
        uploadedFiles: [{ type: Output }]
    };
    return UploadQueueComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UploadZoneComponent = /** @class */ (function () {
    function UploadZoneComponent() {
        this.multiple = true;
        this.uploadedFiles = new EventEmitter();
        this.queuedFiles = new EventEmitter();
        this.invalidFiles = new EventEmitter();
        this.hasDragOver = false;
        this.uploadProgress = 0;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    UploadZoneComponent.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.preventAndStop(event);
        this.hasDragOver = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UploadZoneComponent.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.preventAndStop(event);
        this.hasDragOver = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UploadZoneComponent.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.preventAndStop(event);
        this.hasDragOver = false;
        var /** @type {?} */ files = this.fileListToArray(event.dataTransfer.files);
        this.handleFiles(files);
    };
    /**
     * @return {?}
     */
    UploadZoneComponent.prototype.triggerFile = /**
     * @return {?}
     */
    function () {
        this.fileInput.nativeElement.click();
    };
    /**
     * @return {?}
     */
    UploadZoneComponent.prototype.updateFiles = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ files = this.fileListToArray(this.fileInput.nativeElement.files);
        this.handleFiles(files);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadZoneComponent.prototype.handleFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var /** @type {?} */ response = this.uploader.validateFiles(files);
        this.invalidFiles.emit(response.invalidFiles);
        if (this.uploader.options.autoUpload && response.validFiles.length > 0) {
            this.uploadFiles(response.validFiles);
        }
        else {
            this.queuedFiles.emit(response.validFiles);
        }
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadZoneComponent.prototype.uploadFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        // Reset progress
        this.uploadProgress = 0;
        this.uploadingFiles = files;
        // upload
        this.uploader.uploadFiles(files).subscribe(function (response) {
            if (response.progress) {
                _this.uploadProgress = Math.floor(response.progress * 100);
            }
            if (response.data) {
                _this.uploadedFiles.emit(response.data);
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * @param {?} list
     * @return {?}
     */
    UploadZoneComponent.prototype.fileListToArray = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        return Array.from(list);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UploadZoneComponent.prototype.preventAndStop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    UploadZoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-upload-zone',
                    template: "<div class=\"m-upload\" *ngIf=\"uploader.options.type === 'drop'\">\n\t<div class=\"m-upload__inner\">\n\t\t<div class=\"m-upload__dropzone\">\n\t\t\t<input type=\"file\" #fileInput (change)=\"updateFiles()\" multiple class=\"m-upload__input\" *ngIf=\"multiple\">\n\t\t\t<input type=\"file\" #fileInput (change)=\"updateFiles()\" class=\"m-upload__input\" *ngIf=\"!multiple\">\n\n\t\t\t<div class=\"m-upload__content\" *ngIf=\"!uploadProgress || uploadProgress === 0\">\n\t\t\t\t<p class=\"m-upload__message\"><ng-content select=\".aui-upload-message\"></ng-content></p>\n\t\t\t</div>\n\n\t\t\t<ng-container *ngIf=\"uploadProgress > 0\">\n\t\t\t\t<p class=\"m-upload__uploads u-text-bold u-margin-bottom-xs\">\n\t\t\t\t\t<ng-container *ngFor=\"let file of uploadingFiles; let last = last\">\n\t\t\t\t\t\t{{ file.name }}<ng-container *ngIf=\"!last\">, </ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</p>\n\t\t\t\t<aui-progress-bar [value]=\"uploadProgress\" max=\"100\"></aui-progress-bar>\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n\n\t<small class=\"m-upload__description\"><ng-content select=\".aui-upload-description\"></ng-content></small>\n</div>\n\n<button class=\"a-button aui-upload-button\" (click)=\"triggerFile()\" *ngIf=\"uploader.options.type === 'button'\">\n\t<ng-content select=\".aui-upload-button\"></ng-content>\n\t<input type=\"file\" #fileInput (change)=\"updateFiles()\" multiple=\"multiple\">\n</button>\n",
                    styles: [".aui-upload-button input[type=file]{display:none}"],
                },] },
    ];
    UploadZoneComponent.propDecorators = {
        fileInput: [{ type: ViewChild, args: ['fileInput',] }],
        uploader: [{ type: Input }],
        multiple: [{ type: Input }],
        uploadedFiles: [{ type: Output }],
        queuedFiles: [{ type: Output }],
        invalidFiles: [{ type: Output }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return UploadZoneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UploadedListComponent = /** @class */ (function () {
    function UploadedListComponent() {
        this.uploadedFiles = [];
        this.delete = new EventEmitter();
    }
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    UploadedListComponent.prototype.remove = /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    function (file, index) {
        this.delete.emit({ file: file, index: index });
    };
    UploadedListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-uploaded-list',
                    template: "<ul class=\"m-upload__files\">\n    <li *ngFor=\"let file of uploadedFiles; let i = index\">\n        <span class=\"fa fa-file-o\"></span>\n        <span class=\"m-upload__filename\">{{ file.name }}</span>\n\n        <button (click)=\"remove(file, i)\" class=\"m-upload__delete a-button-transparent a-button--default a-button--small has-icon\">\n            <i class=\"fa fa-close\"></i>\n        </button>\n    </li>\n</ul>\n",
                },] },
    ];
    UploadedListComponent.propDecorators = {
        uploadedFiles: [{ type: Input }],
        delete: [{ type: Output }]
    };
    return UploadedListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ValidationMessagesService = /** @class */ (function () {
    function ValidationMessagesService(initValues) {
        this.initValues = initValues;
        this.INVALID_FILE_TYPE = 'INVALID_FILE_TYPE';
        this.INVALID_FILE_SIZE = 'INVALID_FILE_SIZE';
        this.INVALID_MIME_TYPE = 'INVALID_MIME_TYPE';
        if (initValues.INVALID_FILE_TYPE) {
            this.INVALID_FILE_TYPE = initValues.INVALID_FILE_TYPE;
        }
        if (initValues.INVALID_FILE_SIZE) {
            this.INVALID_FILE_SIZE = initValues.INVALID_FILE_SIZE;
        }
        if (initValues.INVALID_MIME_TYPE) {
            this.INVALID_MIME_TYPE = initValues.INVALID_MIME_TYPE;
        }
    }
    ValidationMessagesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ValidationMessagesService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [UPLOAD_VALIDATION_MESSAGES,] }] }
    ]; };
    return ValidationMessagesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ValidationListComponent = /** @class */ (function () {
    function ValidationListComponent(messagesService) {
        this.messagesService = messagesService;
        this.invalidFiles = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ValidationListComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.invalidFiles.splice(index, 1);
    };
    /**
     * @param {?} reasons
     * @return {?}
     */
    ValidationListComponent.prototype.formatReasons = /**
     * @param {?} reasons
     * @return {?}
     */
    function (reasons) {
        var /** @type {?} */ result = [];
        try {
            for (var reasons_1 = __values(reasons), reasons_1_1 = reasons_1.next(); !reasons_1_1.done; reasons_1_1 = reasons_1.next()) {
                var reason = reasons_1_1.value;
                result.push(this.messagesService[reason]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (reasons_1_1 && !reasons_1_1.done && (_a = reasons_1.return)) _a.call(reasons_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result.join(', ');
        var e_1, _a;
    };
    ValidationListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-validation-list',
                    template: "<ul class=\"m-upload__files\">\n    <li *ngFor=\"let invalidFile of invalidFiles; let i = index\" class=\"is-error\">\n        <span class=\"fa fa-warning\"></span>\n        <span class=\"m-upload__filename\">{{ invalidFile.file.name }}</span>\n        <span class=\"m-upload__error\">{{ formatReasons(invalidFile.reasons) }}</span>\n\n        <button (click)=\"remove(i)\" class=\"m-upload__delete a-button-transparent a-button--danger a-button--small has-icon\">\n            <i class=\"fa fa-close\"></i>\n        </button>\n    </li>\n</ul>\n",
                },] },
    ];
    /** @nocollapse */
    ValidationListComponent.ctorParameters = function () { return [
        { type: ValidationMessagesService }
    ]; };
    ValidationListComponent.propDecorators = {
        invalidFiles: [{ type: Input }]
    };
    return ValidationListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$6 = [
    UploadComponent,
    UploadInputComponent,
    UploadQueueComponent,
    UploadZoneComponent,
    UploadedListComponent,
    ValidationListComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Services = [
    ValidationMessagesService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0$1 = {};
var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    /**
     * @param {?=} validationMessages
     * @return {?}
     */
    UploadModule.forChild = /**
     * @param {?=} validationMessages
     * @return {?}
     */
    function (validationMessages) {
        if (validationMessages === void 0) { validationMessages = {}; }
        return {
            ngModule: UploadModule,
            providers: [
                { provide: UPLOAD_VALIDATION_MESSAGES, useValue: validationMessages },
            ],
        };
    };
    UploadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        CommonModule,
                        ProgressBarModule,
                        FormsModule,
                    ],
                    declarations: __spread(Components$6),
                    exports: __spread(Components$6),
                    providers: __spread(Services, [
                        { provide: UPLOAD_VALIDATION_MESSAGES, useValue: ɵ0$1 },
                    ]),
                },] },
    ];
    return UploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ WYSIWYG_DEFAULT_CONFIG = {
    bodyClass: 'a-input ckeditor-editable-body',
    contentsCss: ['https://cdn.antwerpen.be/core_branding_scss/2.0.1/main.min.css'],
    format_tags: 'p;h1;h2;h3;h4;h5;h6',
    toolbar_Basic: [
        ['Bold', 'Italic', 'Underline', '-', 'Format', '-', 'Source'],
    ],
    removeButtons: 'Styles',
    removePlugins: 'about',
    toolbar: null,
    uiColor: '#d8d8d8',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WysiwygComponent = /** @class */ (function () {
    function WysiwygComponent() {
        this.setClass = true;
        this.basic = false;
        this.emitContent = new EventEmitter();
        this.ckeditorConfig = WYSIWYG_DEFAULT_CONFIG;
        this.updateModel = function () { };
    }
    // NG_VALUE_ACCESSOR_INTERFACE
    /**
     * @param {?} value
     * @return {?}
     */
    WysiwygComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ckeditorContent = value;
        this.updateModel(value);
        this.emitContent.emit(this.ckeditorContent);
    };
    /**
     * @param {?} onChange
     * @return {?}
     */
    WysiwygComponent.prototype.registerOnChange = /**
     * @param {?} onChange
     * @return {?}
     */
    function (onChange) {
        this.updateModel = onChange;
    };
    /**
     * @return {?}
     */
    WysiwygComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    WysiwygComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setConfig();
        if (!this.ckeditorContent) {
            this.ckeditorContent = this.placeholder;
        }
    };
    /**
     * @return {?}
     */
    WysiwygComponent.prototype.setConfig = /**
     * @return {?}
     */
    function () {
        if (this.customConfig) {
            this.ckeditorConfig = this.customConfig;
        }
        else {
            if (this.basic) {
                this.ckeditorConfig.toolbar = 'Basic';
            }
            if (this.availableTags) {
                this.ckeditorConfig.format_tags = this.availableTags;
            }
            if (this.uiColour) {
                this.ckeditorConfig.uiColor = this.uiColour;
            }
            if (this.additionalStyling) {
                this.ckeditorConfig.contentsCss.concat(this.additionalStyling);
            }
        }
    };
    WysiwygComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-wysiwyg',
                    template: "<div class=\"aui-wysiwyg__inner\">\n    <ckeditor [(ngModel)]=\"ckeditorContent\" [config]=\"ckeditorConfig\" [debounce]=\"debounce\" (ngModelChange)=\"writeValue($event)\"></ckeditor>\n</div>\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return WysiwygComponent; }),
                            // tslint:disable-line:no-forward-ref
                            multi: true,
                        }],
                },] },
    ];
    WysiwygComponent.propDecorators = {
        setClass: [{ type: HostBinding, args: ['class.aui-wysiwyg',] }],
        additionalStyling: [{ type: Input }],
        availableTags: [{ type: Input }],
        basic: [{ type: Input }],
        placeholder: [{ type: Input }],
        uiColour: [{ type: Input }],
        debounce: [{ type: Input }],
        customConfig: [{ type: Input }],
        emitContent: [{ type: Output }]
    };
    return WysiwygComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$7 = [
    WysiwygComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WysiwygModule = /** @class */ (function () {
    function WysiwygModule() {
    }
    WysiwygModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CKEditorModule,
                    ],
                    declarations: __spread(Components$7),
                    exports: __spread(Components$7),
                },] },
    ];
    return WysiwygModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AutoCompleteComponent, AutoCompleteModule, DatepickerComponent, DATEPICKER_DATE_MASK, DATEPICKER_DEFAULT_ERROR_LABELS, DATEPICKER_ERROR_LABELS, DATEPICKER_SEPARATOR_CHAR, DatepickerModule, FieldErrorComponent, FieldErrorsComponent, FieldErrorsModule, MaskDirective, MaskModule, RangeSliderComponent, RangeSliderModule, SearchFilterComponent, SearchFilterModule, TimePickerValidators, TimepickerComponent, TimepickerInputSize, TimepickerModule, Uploader, UploadComponent, UploadInputComponent, UploadQueueComponent, UploadZoneComponent, UploadedListComponent, ValidationListComponent, ValidationMessagesService, UPLOAD_OPTIONS_DEFAULT, UPLOAD_VALIDATION_MESSAGES, UploadModule, WysiwygComponent, WYSIWYG_DEFAULT_CONFIG, WysiwygModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Zvcm1zL2xpYi9zaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UudHMiLCJuZzovL2Zvcm1zL2xpYi9hdXRvLWNvbXBsZXRlL2NvbXBvbmVudHMvYXV0by1jb21wbGV0ZS9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL21hc2svZGlyZWN0aXZlcy9tYXNrLmRpcmVjdGl2ZS50cyIsIm5nOi8vZm9ybXMvbGliL21hc2svZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vZm9ybXMvbGliL21hc2svbWFzay5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi9hdXRvLWNvbXBsZXRlL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUubW9kdWxlLnRzIiwibmc6Ly9mb3Jtcy9saWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbmYudHMiLCJuZzovL2Zvcm1zL2xpYi9kYXRlcGlja2VyL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL2RhdGVwaWNrZXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vZm9ybXMvbGliL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi9maWVsZC1lcnJvcnMvY29tcG9uZW50cy9maWVsZC1lcnJvci9maWVsZC1lcnJvci5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi9maWVsZC1lcnJvcnMvY29tcG9uZW50cy9maWVsZC1lcnJvcnMvZmllbGQtZXJyb3JzLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL2ZpZWxkLWVycm9ycy9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9mb3Jtcy9saWIvZmllbGQtZXJyb3JzL2ZpZWxkLWVycm9ycy5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi9yYW5nZS1zbGlkZXIvY29tcG9uZW50cy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL3JhbmdlLXNsaWRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9mb3Jtcy9saWIvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi9zZWFyY2gtZmlsdGVyL2NvbXBvbmVudHMvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL3NlYXJjaC1maWx0ZXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vZm9ybXMvbGliL3NlYXJjaC1maWx0ZXIvc2VhcmNoLWZpbHRlci5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi90aW1lcGlja2VyL2NsYXNzZXMvdGltZXBpY2tlci52YWxpZGF0b3JzLnRzIiwibmc6Ly9mb3Jtcy9saWIvdGltZXBpY2tlci90eXBlcy90aW1lcGlja2VyLnR5cGVzLnRzIiwibmc6Ly9mb3Jtcy9saWIvdGltZXBpY2tlci9jb21wb25lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi90aW1lcGlja2VyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi90aW1lcGlja2VyL3RpbWVwaWNrZXIubW9kdWxlLnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL3VwbG9hZC5jb25mLnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL2NsYXNzZXMvdXBsb2FkZXIuY2xhc3MudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC1pbnB1dC91cGxvYWQtaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL2NvbXBvbmVudHMvdXBsb2FkLXF1ZXVlL3VwbG9hZC1xdWV1ZS5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvY29tcG9uZW50cy91cGxvYWQtem9uZS91cGxvYWQtem9uZS5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvY29tcG9uZW50cy91cGxvYWRlZC1saXN0L3VwbG9hZGVkLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL3NlcnZpY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXMuc2VydmljZS50cyIsIm5nOi8vZm9ybXMvbGliL3VwbG9hZC9jb21wb25lbnRzL3ZhbGlkYXRpb24tbGlzdC92YWxpZGF0aW9uLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvc2VydmljZXMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvdXBsb2FkLm1vZHVsZS50cyIsIm5nOi8vZm9ybXMvbGliL3d5c2l3eWcvd3lzaXd5Zy5jb25mLnRzIiwibmc6Ly9mb3Jtcy9saWIvd3lzaXd5Zy9jb21wb25lbnRzL3d5c2l3eWcvd3lzaXd5Zy5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi93eXNpd3lnL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi93eXNpd3lnL3d5c2l3eWcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2VhcmNoT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL3NlYXJjaC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcblx0cHVibGljIHNlYXJjaChkYXRhOiBhbnlbXSwgb3B0aW9uczogU2VhcmNoT3B0aW9ucyA9IHt9KTogYW55W10ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0gb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSA/IG9wdGlvbnMucXVlcnkgOiAnJztcblx0XHRjb25zdCBtaW5MZW5ndGggPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdtaW5MZW5ndGgnKSA/IG9wdGlvbnMubWluTGVuZ3RoIDogMDtcblx0XHRjb25zdCBrZXkgPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdrZXknKSA/IG9wdGlvbnMua2V5IDogJyc7XG5cblx0XHRpZiAoKCFxdWVyeSAmJiBvcHRpb25zLnNob3dBbGxCeURlZmF1bHQpIHx8IHF1ZXJ5Lmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIFsuLi5kYXRhXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gWy4uLmRhdGFdLmZpbHRlcihpdGVtID0+IHtcblx0XHRcdGlmIChrZXkgJiYgIWl0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihgXCIke2tleX1cIiBkb2VzIG5vdCBleGlzdCBpbiBpdGVtICR7SlNPTi5zdHJpbmdpZnkoaXRlbSwgbnVsbCwgMil9YCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hJdGVtV2l0aFNlYXJjaFN0cmluZyhpdGVtW2tleV0sIHF1ZXJ5KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hJdGVtV2l0aFNlYXJjaFN0cmluZyhpdGVtLCBxdWVyeSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG1hdGNoSXRlbVdpdGhTZWFyY2hTdHJpbmcgPSAoaXRlbTogYW55LCBzZWFyY2hTdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gU3RyaW5nKGl0ZW0pLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hTdHJpbmcudG9Mb3dlckNhc2UoKSkgPiAtMTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRFbGVtZW50UmVmLFxuXHRWaWV3Q2hpbGQsXG5cdENvbnRlbnRDaGlsZCxcblx0VGVtcGxhdGVSZWYsXG5cdGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBnZXQsIGlzRXF1YWwgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBGbHlvdXREaXJlY3RpdmUsIEZseW91dFpvbmVEaXJlY3RpdmUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2ZseW91dCc7XG5cbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYXV0by1jb21wbGV0ZScsXG5cdHN0eWxlczogW2AuYXVpLWF1dG8tY29tcGxldGUsLmF1aS1hdXRvLWNvbXBsZXRlX19pbmZve2Rpc3BsYXk6YmxvY2t9YF0sXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tZmx5b3V0LS1zY3JvbGxhYmxlIG0tZmx5b3V0LS1mdWxsIGF1aS1hdXRvLWNvbXBsZXRlXCIgYXVpRmx5b3V0IFt0b2dnbGVDbGlja109XCJmYWxzZVwiIChjbG9zZWQpPVwib25GbHlvdXRDbG9zZWQoKVwiPlxuXHQ8aW5wdXQgKm5nSWY9XCIhbWFza1wiXG5cdFx0W2lkXT1cImlkXCJcblx0XHRbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuXHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRhdWlGbHlvdXRBY3Rpb25cblx0XHRbKG5nTW9kZWwpXT1cInF1ZXJ5XCJcblx0XHQobmdNb2RlbENoYW5nZSk9XCJkb1NlYXJjaCgpXCJcblx0XHRhdWlTZWxlY3RhYmxlQWN0aW9uc1xuXHRcdChrZXlBcnJvd1VwKT1cIm9uS2V5QXJyb3dVcCgpXCJcblx0XHQoa2V5QXJyb3dEb3duKT1cIm9uS2V5QXJyb3dEb3duKClcIlxuXHRcdChrZXlFbnRlcik9XCJvbktleUVudGVyKCRldmVudClcIlxuXHRcdChrZXlFc2NhcGUpPVwib25LZXlFc2NhcGUoKVwiXG5cdFx0KGZvY3VzKT1cIm9uRm9jdXMoKVwiXG5cdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcblx0Lz5cblx0PGlucHV0ICpuZ0lmPVwibWFza1wiXG5cdFx0W2lkXT1cImlkXCJcblx0XHRbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuXHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRhdWlGbHlvdXRBY3Rpb25cblx0XHRbKG5nTW9kZWwpXT1cInF1ZXJ5XCJcblx0XHQobmdNb2RlbENoYW5nZSk9XCJkb1NlYXJjaCgpXCJcblx0XHRhdWlTZWxlY3RhYmxlQWN0aW9uc1xuXHRcdChrZXlBcnJvd1VwKT1cIm9uS2V5QXJyb3dVcCgpXCJcblx0XHQoa2V5QXJyb3dEb3duKT1cIm9uS2V5QXJyb3dEb3duKClcIlxuXHRcdChrZXlFbnRlcik9XCJvbktleUVudGVyKCRldmVudClcIlxuXHRcdChrZXlFc2NhcGUpPVwib25LZXlFc2NhcGUoKVwiXG5cdFx0KGZvY3VzKT1cIm9uRm9jdXMoKVwiXG5cdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcblx0XHRbYXVpTWFza109XCJtYXNrXCJcblx0Lz5cblxuXHQ8ZGl2IGF1aUZseW91dFpvbmU+XG5cdFx0PHNwYW4gY2xhc3M9XCJhdWktYXV0by1jb21wbGV0ZV9faW5mbyB1LXRleHQtbGlnaHQgdS1wYWRkaW5nLXJpZ2h0IHUtcGFkZGluZy1sZWZ0LXhzXCIgKm5nSWY9XCJmb2N1c2VkICYmIGxvYWRpbmdUZXh0ICYmIHNlYXJjaGluZ1wiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJhLXNwaW5uZXIgYS1zcGlubmVyLS1pbmxpbmUgYS1zcGlubmVyLS1zbSB1LW1hcmdpbi1yaWdodC14c1wiPjwvc3Bhbj5cblx0XHRcdHt7IGxvYWRpbmdUZXh0IH19XG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuIGNsYXNzPVwiYXVpLWF1dG8tY29tcGxldGVfX2luZm8gdS10ZXh0LWxpZ2h0IHUtcGFkZGluZy1yaWdodCB1LXBhZGRpbmctbGVmdFwiICpuZ0lmPVwiZm9jdXNlZCAmJiBzZWFyY2hJbmNlbnRpdmVUZXh0ICYmICFzZWFyY2hpbmcgJiYgIXF1ZXJ5ICYmICFyZXN1bHRzLmxlbmd0aFwiPnt7IHNlYXJjaEluY2VudGl2ZVRleHQgfX08L3NwYW4+XG5cdFx0PHNwYW4gY2xhc3M9XCJhdWktYXV0by1jb21wbGV0ZV9faW5mbyB1LXRleHQtbGlnaHQgdS1wYWRkaW5nLXJpZ2h0IHUtcGFkZGluZy1sZWZ0XCIgKm5nSWY9XCJmb2N1c2VkICYmIG5vUmVzdWx0c1RleHQgJiYgIXNlYXJjaGluZyAmJiBxdWVyeSAmJiAhcmVzdWx0cy5sZW5ndGhcIj57eyBub1Jlc3VsdHNUZXh0IH19PC9zcGFuPlxuXG5cdFx0PGF1aS1zZWxlY3RhYmxlLWxpc3QgW2l0ZW1zXT1cInJlc3VsdHNcIiBbaW5kZXhdPVwiaW5kZXhcIiAoc2VsZWN0ZWQpPVwib25TZWxlY3QoJGV2ZW50KVwiIFtsYWJlbF09XCJsYWJlbFwiIFtzZWFyY2hdPVwicXVlcnlcIiBbaXRlbVRlbXBsYXRlXT1cInRlbXBsYXRlXCIgKm5nSWY9XCJyZXN1bHRzLmxlbmd0aCA+IDAgJiYgIShmb2N1c2VkICYmIGxvYWRpbmdUZXh0ICYmIHNlYXJjaGluZylcIj48L2F1aS1zZWxlY3RhYmxlLWxpc3Q+XG5cdDwvZGl2PlxuPC9kaXY+XG5gLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEF1dG9Db21wbGV0ZUNvbXBvbmVudCksIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHJlc3VsdHM6IGFueVtdID0gW107IC8vIFRoZSB2YWx1ZXMgZm9yIHRoZSBzZWxlY3RhYmxlIGxpc3Rcblx0QElucHV0KCkgZGF0YTogYW55W10gPSBbXTsgLy8gVGhlIHZhbHVlcyB0byBzZWFyY2ggaW4gd2hlbiByZW1vdGUgc2VhcmNoIGlzIGRpc2FibGVkXG5cdEBJbnB1dCgpIHJlbW90ZSA9IGZhbHNlOyAvLyBEaXNhYmxlIG9yIGVuYW1ibGUgcmVtb3RlIHNlYXJjaFxuXHRASW5wdXQoKSBtaW5DaGFyYWN0ZXJzID0gMDtcblx0QElucHV0KCkgbWFzazogc3RyaW5nID0gbnVsbDtcblx0QElucHV0KCkgY2xlYXJJbnZhbGlkID0gZmFsc2U7XG5cdEBJbnB1dCgpIHNlYXJjaEluY2VudGl2ZVRleHQ6IHN0cmluZztcblx0QElucHV0KCkgbG9hZGluZ1RleHQ6IHN0cmluZztcblx0QElucHV0KCkgbm9SZXN1bHRzVGV4dDogc3RyaW5nO1xuXHRASW5wdXQoKSBzaG93QWxsQnlEZWZhdWx0ID0gZmFsc2U7XG5cblx0Ly8gc3BlY2lmeSB3aGljaCBsYWJlbC92YWx1ZSBwcm9wcyB0byB1c2Vcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuXHQvLyBFdmVudGVtaXR0ZXIgZm9yIHNlYXJjaHZhbHVlIChwYXJlbnQgb2JqZWN0IHNob3VsZCB1cGRhdGUgdGhlIHJlc3VsdHMgd2l0aCB0aGlzIHBhcmFtKVxuXHRAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QFZpZXdDaGlsZChGbHlvdXREaXJlY3RpdmUpIGZseW91dDogRmx5b3V0RGlyZWN0aXZlO1xuXHRAVmlld0NoaWxkKEZseW91dFpvbmVEaXJlY3RpdmUpIGZseW91dFpvbmU6IEZseW91dFpvbmVEaXJlY3RpdmU7XG5cblx0QENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHB1YmxpYyBxdWVyeSA9ICcnO1xuXHRwdWJsaWMgaW5kZXggPSAtMTsgLy8gaW5kZXggZm9yIGFjdGl2ZSBlbGVtZW50IGluIHNlbGVjdGFibGUgbGlzdCwgYnkgZGVmYXVsdCAtMSAoc28gaXQgc3RhcnRzIGluIHRoZSBpbnB1dCBmaWVsZClcblx0cHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0gbnVsbDsgLy8ga2VlcCBhIGJhY2t1cCBvZiB0aGUgc2VsZWN0ZWRJdGVtXG5cdHB1YmxpYyBzZWFyY2hpbmcgPSBmYWxzZTsgLy8gdHJhY2sgcmVtb3RlIHNlYXJjaCBzdGF0ZVxuXHRwdWJsaWMgZm9jdXNlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVtb3RlVmFsdWUgPSBmYWxzZTtcblxuXHRwdWJsaWMgdXBkYXRlTW9kZWwgPSAoXzogYW55KSA9PiB7IH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlXG5cdCkgeyB9XG5cblx0Ly8gQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiBpbnRlcmZhY2Vcblx0cHVibGljIHdyaXRlVmFsdWUodmFsdWUgPSAnJykge1xuXHRcdGlmICh0aGlzLnZhbHVlKSB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuZGF0YS5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW1bdGhpcy52YWx1ZV0gPT09IHZhbHVlKTtcblxuXHRcdFx0aWYgKHNlbGVjdGVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnF1ZXJ5ID0gc2VsZWN0ZWRbdGhpcy5sYWJlbF07XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJlbW90ZSAmJiAhIXZhbHVlKSB7XG5cdFx0XHRcdHRoaXMucmVtb3RlVmFsdWUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMucXVlcnkgPSB2YWx1ZTtcblx0fVxuXG5cdC8vIENPTlRST0xfVkFMVUVfQUNDRVNTT1IgaW50ZXJmYWNlXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG5cdFx0dGhpcy51cGRhdGVNb2RlbCA9IGZuO1xuXHR9XG5cblx0Ly8gQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiBpbnRlcmZhY2Vcblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCkge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0aWYgKChBcnJheS5pc0FycmF5KHRoaXMuZGF0YSkgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDApICYmICF0aGlzLnF1ZXJ5ICYmIHRoaXMuc2hvd0FsbEJ5RGVmYXVsdCkge1xuXHRcdFx0dGhpcy5yZXN1bHRzID0gWy4uLnRoaXMuZGF0YV07XG5cdFx0fVxuXHR9XG5cblx0Ly8gT25DaGFuZ2VzIGludGVyZmFjZVxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGlmICghY2hhbmdlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0RhdGEgPSBnZXQoY2hhbmdlcywgJ2RhdGEuY3VycmVudFZhbHVlJywgW10pO1xuXHRcdGlmICghaXNFcXVhbChuZXdEYXRhLCBnZXQoY2hhbmdlcywgJ2RhdGEucHJldmlvdXNWYWx1ZScsIFtdKSkpIHtcblx0XHRcdGlmICh0aGlzLnJlbW90ZSkge1xuXHRcdFx0XHR0aGlzLnJlbW90ZVNlYXJjaCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sb2NhbFNlYXJjaCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJlc3VsdHMgJiYgY2hhbmdlcy5yZXN1bHRzLmN1cnJlbnRWYWx1ZSkge1xuXHRcdFx0dGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlKHF1ZXJ5OiBzdHJpbmcpIHtcblx0XHRjb25zdCBpdGVtID0gdGhpcy5yZXN1bHRzLmZpbmQocmVzID0+IHRoaXMubGFiZWwgPyByZXNbdGhpcy5sYWJlbF0gPT09IHF1ZXJ5IDogcmVzID09PSBxdWVyeSk7XG5cblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XG5cdFx0dGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcblxuXHRcdGlmICghaXRlbSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlIDogdGhpcy5sYWJlbCA/IHRoaXMubGFiZWwgOiBudWxsO1xuXHRcdHRoaXMudXBkYXRlTW9kZWwoa2V5ID8gaXRlbVtrZXldIHx8ICcnIDogaXRlbSk7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRyaWdnZXJzIG9uIGlucHV0IHZhbHVlIGNoYW5nZVxuXHQgKi9cblx0cHVibGljIGRvU2VhcmNoKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5kZXggPSAtMTsgLy8gcmVzZXQgaW5kZXhcblx0XHR0aGlzLnNlYXJjaGluZyA9IHRydWU7XG5cblx0XHRpZiAodGhpcy5yZW1vdGUpIHtcblx0XHRcdHRoaXMuc2VhcmNoLmVtaXQodGhpcy5xdWVyeSk7IC8vIGFzayBmb3IgbmV3IHJlbW90ZSBkYXRhXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9jYWxTZWFyY2goKTtcblx0XHR9XG5cblx0XHR0aGlzLm9wZW5GbHlvdXQoKTsgLy8gb3BlbiB0aGUgZmx5b3V0IHdoZW4gdGhlcmUgaXMgYSBjaGFuZ2Vcblx0fVxuXG5cdC8qKlxuXHQgKiB0cmlnZ2VycyBvbiBzZWxlY3RhYmxlLWxpc3Q6c2VsZWN0IC0+IG9uQ2xpY2sgZXZlbnQgaW4gc2VsZWN0YWJsZS1saXN0XG5cdCAqL1xuXHRwdWJsaWMgb25TZWxlY3QoaXRlbTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UoaXRlbSAhPT0gbnVsbCA/ICh0aGlzLmxhYmVsID8gaXRlbVt0aGlzLmxhYmVsXSA6IGl0ZW0pIDogJycpO1xuXHRcdHRoaXMuY2xvc2VGbHlvdXQoKTsgLy8gQ2xvc2UgdGhlIGZseW91dCBtYW51YWxseVxuXHR9XG5cblx0cHVibGljIG9uRmx5b3V0Q2xvc2VkKCk6IHZvaWQge1xuXHRcdC8vIHRoZXJlIGlzIG9ubHkgMSByZXN1bHQsIHNlbGVjdCBpdFxuXHRcdGlmICh0aGlzLmluZGV4ID49IDAgJiYgdGhpcy5yZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIHRoaXMub25TZWxlY3QodGhpcy5yZXN1bHRzWzBdKTtcblx0XHR9XG5cblx0XHQvLyB0aGVyZSBpcyBubyBxdWVyeSBub3Igc2VsZWN0ZWQgaXRlbSwgY2xlYXIgdGhlIHNlbGVjdGVkIGl0ZW1cblx0XHRpZiAoIXRoaXMucXVlcnkgJiYgdGhpcy5pbmRleCA8IDApIHtcblx0XHRcdHJldHVybiB0aGlzLm9uU2VsZWN0KG51bGwpO1xuXHRcdH1cblxuXHRcdC8vIHJlc2V0IHRoZSBxdWVyeSBmb3IgYW4gaW52YWxpZCBxdWVyeSBpZiBjbGVhckludmFsaWQgaXMgdHJ1ZVxuXHRcdGlmICh0aGlzLmNsZWFySW52YWxpZCAmJiB0aGlzLnF1ZXJ5ICYmICF0aGlzLnJlc3VsdHMubGVuZ3RoICYmIHRoaXMuaW5kZXggPCAwKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5ID0gdGhpcy5zZWxlY3RlZEl0ZW0gPyB0aGlzLmxhYmVsID8gdGhpcy5zZWxlY3RlZEl0ZW1bdGhpcy5sYWJlbF0gOiB0aGlzLnNlbGVjdGVkSXRlbSA6ICcnO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbktleUFycm93RG93bigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA8IHRoaXMucmVzdWx0cy5sZW5ndGggLSAxKSB7XG5cdFx0XHR0aGlzLnNjcm9sbExpc3QoMSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcGVuRmx5b3V0KCk7XG5cdH1cblxuXHRwdWJsaWMgb25LZXlBcnJvd1VwKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ID49IDApIHtcblx0XHRcdHRoaXMuc2Nyb2xsTGlzdCgtMSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uS2V5RW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gRG8gbm90IHN1Ym1pdCBmb3JtIHdoZW4gc2VsZWN0aW5nIGFuIGl0ZW0uXG5cblx0XHRjb25zdCBxdWVyeSA9IHRoaXMuaW5kZXggPj0gMCA/IHRoaXMucXVlcnkgPSB0aGlzLnJlc3VsdHNbdGhpcy5pbmRleF1bdGhpcy5sYWJlbF0gOiB0aGlzLnF1ZXJ5O1xuXG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UocXVlcnkpO1xuXHRcdHRoaXMuY2xvc2VGbHlvdXQoKTtcblx0fVxuXG5cdHB1YmxpYyBvbktleUVzY2FwZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlRmx5b3V0KCk7XG5cdH1cblxuXHRwdWJsaWMgb25Gb2N1cygpOiB2b2lkIHtcblx0XHR0aGlzLmZvY3VzZWQgPSB0cnVlO1xuXHRcdHRoaXMub3BlbkZseW91dCgpO1xuXHR9XG5cblx0cHVibGljIG9wZW5GbHlvdXQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0KSB7XG5cdFx0XHR0aGlzLmZseW91dC5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGNsb3NlRmx5b3V0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmZseW91dCkge1xuXHRcdFx0dGhpcy5mbHlvdXQuY2xvc2UoKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvY3VzZWQgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBsb2NhbFNlYXJjaCgpOiB2b2lkIHtcblx0XHR0aGlzLnJlc3VsdHMgPSB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoKHRoaXMuZGF0YSwge1xuXHRcdFx0bWluTGVuZ3RoOiB0aGlzLm1pbkNoYXJhY3RlcnMsXG5cdFx0XHRrZXk6IHRoaXMubGFiZWwsXG5cdFx0XHRxdWVyeTogdGhpcy5xdWVyeSxcblx0XHRcdHNob3dBbGxCeURlZmF1bHQ6IHRoaXMuc2hvd0FsbEJ5RGVmYXVsdCxcblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLnJlc3VsdHMubGVuZ3RoID09PSAxICYmIHRoaXMucXVlcnkgPT09IHRoaXMucmVzdWx0c1swXVt0aGlzLmxhYmVsXSkge1xuXHRcdFx0dGhpcy5pbmRleCA9IDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdGVTZWFyY2goKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnJlbW90ZVZhbHVlIHx8ICF0aGlzLmRhdGEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuZGF0YS5maW5kKChpdGVtOiBhbnkpID0+IHtcblx0XHRcdGlmICh0aGlzLnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtW3RoaXMudmFsdWVdID09PSB0aGlzLnF1ZXJ5O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXRlbSA9PT0gdGhpcy5xdWVyeTtcblx0XHR9KTtcblxuXHRcdGlmIChzZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5xdWVyeSA9IHRoaXMubGFiZWwgPyBzZWxlY3RlZFt0aGlzLmxhYmVsXSA6IHNlbGVjdGVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnF1ZXJ5ID0gJyc7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZW1vdGVWYWx1ZSA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIHNjcm9sbExpc3QoZmFjdG9yOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmluZGV4ICs9IGZhY3RvcjtcblxuXHRcdGlmICghdGhpcy5mbHlvdXRab25lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGlJdGVtcyA9IHRoaXMuZmx5b3V0Wm9uZS5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuXHRcdGNvbnN0IGxpSGVpZ2h0ID0gKGxpSXRlbXNbMV0gPyBsaUl0ZW1zWzFdLm9mZnNldEhlaWdodCA6IGxpSXRlbXNbMF0ub2Zmc2V0SGVpZ2h0KTtcblx0XHRjb25zdCB6b25lSGVpZ2h0ID0gdGhpcy5mbHlvdXRab25lLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGNvbnN0IG9mZnNldCA9ICh6b25lSGVpZ2h0IC8gbGlIZWlnaHQpIC8gMjtcblxuXHRcdHRoaXMuZmx5b3V0Wm9uZS5lbGVtZW50LnNjcm9sbFRvcCA9ICh0aGlzLmluZGV4ICogbGlIZWlnaHQpIC0gKG9mZnNldCAqIGxpSGVpZ2h0KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBJbnB1dG1hc2sgPSByZXF1aXJlKCdpbnB1dG1hc2snKTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aU1hc2tdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWFza0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHB1YmxpYyBhdWlNYXNrOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYpIHt9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2V0TWFzayh0aGlzLmF1aU1hc2spO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRNYXNrKG1hc2spOiB2b2lkIHtcblx0XHRJbnB1dG1hc2sobWFzaykubWFzayh0aGlzLnJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbWFzay5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0TWFza0RpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkRpcmVjdGl2ZXMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXNrTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBBdXRvQ29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0QXV0b0NvbXBsZXRlQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcbmltcG9ydCB7IFNlbGVjdGFibGVMaXN0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9zZWxlY3RhYmxlLWxpc3QnO1xuXG5pbXBvcnQgeyBNYXNrTW9kdWxlIH0gZnJvbSAnLi4vbWFzay9tYXNrLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0Rmx5b3V0TW9kdWxlLFxuXHRcdFNlbGVjdGFibGVMaXN0TW9kdWxlLFxuXHRcdE1hc2tNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTZWFyY2hTZXJ2aWNlLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVNb2R1bGUge1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZXBpY2tlckVycm9yTGFiZWxzIH0gZnJvbSAnLi90eXBlcy9kYXRlcGlja2VyLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfRVJST1JfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPERhdGVwaWNrZXJFcnJvckxhYmVscz4oJ2Vycm9yTGFiZWxzJyk7XG5cbmV4cG9ydCBjb25zdCBEQVRFUElDS0VSX0RFRkFVTFRfRVJST1JfTEFCRUxTID0ge1xuXHRFUlJPUlNfSU5WQUxJRF9EQVRFOiAnSU5WQUxJRF9EQVRFJyxcblx0RVJST1JTX0lOVkFMSURfUkFOR0U6ICdJTlZBTElEX1JBTkdFJyxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFUElDS0VSX1NFUEFSQVRPUl9DSEFSID0gJy8nO1xuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfREFURV9NQVNLID0gWyc5OScsICc5OScsICc5OTk5J10uam9pbihEQVRFUElDS0VSX1NFUEFSQVRPUl9DSEFSKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcblx0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG5cdEZvcm1Db250cm9sLFxuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0TkdfVkFMSURBVE9SUyxcblx0Rm9ybUJ1aWxkZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciwgRGF0ZVJhbmdlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgRmx5b3V0RGlyZWN0aXZlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5cbmltcG9ydCB7XG5cdENBTEVOREFSX01PTlRIX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHREYXRlcGlja2VyUmVzdWx0LFxuXHRDYWxlbmRhclNlcnZpY2UsXG59IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvY2FsZW5kYXInO1xuXG5pbXBvcnQge1xuXHREQVRFUElDS0VSX0VSUk9SX0xBQkVMUyxcblx0REFURVBJQ0tFUl9ERUZBVUxUX0VSUk9SX0xBQkVMUyxcblx0REFURVBJQ0tFUl9TRVBBUkFUT1JfQ0hBUixcblx0REFURVBJQ0tFUl9EQVRFX01BU0tcbn0gZnJvbSAnLi4vLi4vZGF0ZXBpY2tlci5jb25mJztcbmltcG9ydCB7IERhdGVwaWNrZXJWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0ZXBpY2tlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1kYXRlcGlja2VyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWRhdGVwaWNrZXIgYS1pbnB1dF9fd3JhcHBlclwiIGF1aUZseW91dD5cblx0PGlucHV0XG5cdFx0dHlwZT1cInRleHRcIlxuXHRcdG5hbWU9XCJ7eyBuYW1lIH19XCJcblx0XHRpZD1cInt7IGlkIH19XCJcblx0XHRwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcblx0XHRbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG5cdFx0W2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcblx0XHRbYXVpTWFza109XCJkYXRlTWFza1wiXG5cdD5cbiAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXIgaXMtY2xpY2thYmxlXCIgYXVpRmx5b3V0QWN0aW9uPjwvc3Bhbj5cblxuXHQ8ZGl2IHJvbGU9XCJkYXRlcGlja2VyXCIgY2xhc3M9XCJtLWRhdGVwaWNrZXIgbS1kYXRlcGlja2VyLS1maXhlZFwiIGF1aUZseW91dFpvbmU+XG5cdFx0PGF1aS1jYWxlbmRhciBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiIFtyYW5nZV09XCJyYW5nZVwiIChzZWxlY3REYXRlKT1cInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIoJGV2ZW50KVwiPjwvYXVpLWNhbGVuZGFyPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYC5hdWktZGF0ZXBpY2tlcixhdWktZGF0ZXBpY2tlcntkaXNwbGF5OmJsb2NrfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVwaWNrZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH0sIHtcblx0XHRwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVwaWNrZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QFZpZXdDaGlsZChGbHlvdXREaXJlY3RpdmUpIGZseW91dDogRmx5b3V0RGlyZWN0aXZlO1xuXHRASW5wdXQoKSBpZDogc3RyaW5nO1xuXHRASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ2RkL21tL3l5eXknO1xuXHRASW5wdXQoKSByYW5nZTogRGF0ZVJhbmdlO1xuXHRASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvZmYnO1xuXG5cdHB1YmxpYyBkYXRlTWFzayA9IHsgbWFzazogREFURVBJQ0tFUl9EQVRFX01BU0ssICdzaG93TWFza09uSG92ZXInOiBmYWxzZSB9O1xuXHRwdWJsaWMgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cdHByaXZhdGUgb25DaGFuZ2U6IChyZXM6IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX01PTlRIX0xBQkVMUykgcHJpdmF0ZSBtb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMpIHByaXZhdGUgd2Vla2RheUxhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdFx0QEluamVjdChEQVRFUElDS0VSX0VSUk9SX0xBQkVMUykgcHJpdmF0ZSBlcnJvckxhYmVscyA9IERBVEVQSUNLRVJfREVGQVVMVF9FUlJPUl9MQUJFTFMsXG5cdFx0cHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxuXHQpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wgPSB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woJycpO1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9IHZhbHVlLnNwbGl0KERBVEVQSUNLRVJfU0VQQVJBVE9SX0NIQVIpLnJldmVyc2UoKS5qb2luKCctJyk7XG5cdFx0XHRcdFx0Y29uc3QgZGF0ZSA9IERhdGVIZWxwZXIucGFyc2VEYXRlKGZvcm1hdCk7XG5cdFx0XHRcdFx0aWYgKGRhdGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UoZGF0ZS50b0lTT1N0cmluZygpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gQ2hhbmdlIHZhbHVlIHdpdGggb3JpZ2luYWwgdmFsdWUgKGFuZCBub3QgbnVsbCBvciAnJykgc28gd2UgY2FuIGFkZCBhbiBlcnJvciBpbiB0aGUgdmFsaWRhdGUgZnVuY3Rpb25cblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgZGF0ZSA9IERhdGVIZWxwZXIucGFyc2VEYXRlKHZhbHVlKTtcblx0XHRjb25zdCBkYXRlU3RyaW5nID0gZGF0ZSA/IHRoaXMuZm9ybWF0RGF0ZShkYXRlKSA6ICcnO1xuXG5cdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZVN0cmluZyk7XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShvbkNoYW5nZTogKHJlczogYW55KSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQgeyB9XG5cblx0cHVibGljIHNlbGVjdERhdGVGcm9tQ2FsZW5kYXIocmVzdWx0OiBEYXRlcGlja2VyUmVzdWx0KTogdm9pZCB7XG5cdFx0aWYgKHJlc3VsdC5jb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmZvcm1hdERhdGUocmVzdWx0LmRhdGUpKTtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkYXRlLCAnREQvTU0vWVlZWScsIHtcblx0XHRcdGxlYWRpbmdaZXJvOiB0cnVlLFxuXHRcdFx0bW9udGhMYWJlbHM6IHRoaXMubW9udGhMYWJlbHMsXG5cdFx0XHR3ZWVrZGF5TGFiZWxzOiB0aGlzLndlZWtkYXlMYWJlbHMsXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdmFsaWRhdGUoY3RybDogRm9ybUNvbnRyb2wpOiBEYXRlcGlja2VyVmFsaWRhdGlvbkVycm9ycyB7XG5cdFx0Ly8gbm8gZXJyb3Igb24gZW1wdHkgdmFsdWUgKGFkZCByZXF1aXJlZCB2YWxpZGF0b3IgaW4gYXBwKVxuXHRcdGlmIChjdHJsLnZhbHVlID09PSAnJyB8fCBjdHJsLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyB0aHJvdyBmb3JtYXQgZXJyb3IgaWYgbm8gdmFsaWQgZGF0ZSB3YXMgcHJvdmlkZWRcblx0XHRpZiAoIURhdGVIZWxwZXIucGFyc2VEYXRlKGN0cmwudmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmb3JtYXQ6IHRoaXMuZXJyb3JMYWJlbHMuRVJST1JTX0lOVkFMSURfREFURSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gbm8gZXJyb3IgaWYgdmFsaWQgZGF0ZSBhbiBubyByYW5nZSBwcm92aWRlZFxuXHRcdGlmICghdGhpcy5yYW5nZSB8fCAhdGhpcy5yYW5nZS5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIHRocm93IGVycm9yIHdoZW4gb3V0IG9mIHJhbmdlXG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN0cmwudmFsdWUpO1xuXHRcdGNvbnN0IHJhbmdlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0UmFuZ2VGb3JEYXRlKGRhdGUsIHRoaXMucmFuZ2UpO1xuXG5cdFx0cmV0dXJuIHJhbmdlLmluZGV4T2YoZGF0ZS5nZXREYXRlKCkpID49IDAgPyB7XG5cdFx0XHRyYW5nZTogdGhpcy5lcnJvckxhYmVscy5FUlJPUlNfSU5WQUxJRF9SQU5HRSxcblx0XHR9IDogbnVsbDtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGF0ZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHREYXRlcGlja2VyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcbmltcG9ydCB7XG5cdENhbGVuZGFyTW9kdWxlLFxuXHRDQUxFTkRBUl9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMU1xufSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2NhbGVuZGFyJztcblxuaW1wb3J0IHsgTWFza01vZHVsZSB9IGZyb20gJy4uL21hc2snO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IERBVEVQSUNLRVJfRVJST1JfTEFCRUxTLCBEQVRFUElDS0VSX0RFRkFVTFRfRVJST1JfTEFCRUxTIH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbmYnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckVycm9yTGFiZWxzIH0gZnJvbSAnLi90eXBlcy9kYXRlcGlja2VyLnR5cGVzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdENhbGVuZGFyTW9kdWxlLFxuXHRcdEZseW91dE1vZHVsZSxcblx0XHRNYXNrTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSxcblx0XHR7IHByb3ZpZGU6IENBTEVOREFSX01PTlRIX0xBQkVMUywgdXNlVmFsdWU6IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBEQVRFUElDS0VSX0VSUk9SX0xBQkVMUywgdXNlVmFsdWU6IERBVEVQSUNLRVJfREVGQVVMVF9FUlJPUl9MQUJFTFMgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHR3ZWVrZGF5TGFiZWxzOiBzdHJpbmdbXSxcblx0XHRtb250aExhYmVsczogc3RyaW5nW10sXG5cdFx0ZXJyb3JMYWJlbHM6IERhdGVwaWNrZXJFcnJvckxhYmVsc1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IERhdGVwaWNrZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IERBVEVQSUNLRVJfRVJST1JfTEFCRUxTLCB1c2VWYWx1ZTogZXJyb3JMYWJlbHMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvZmllbGQtZXJyb3JzLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWZpZWxkLWVycm9yJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidS1iZy1kYW5nZXIgdS10ZXh0LXhsaWdodFwiPlxuICAgIDxwIGNsYXNzPVwidS1tYXJnaW4teHNcIj5cbiAgICAgICAge3sgZXJyb3IubWVzc2FnZSB9fVxuICAgIDwvcD5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6Y29sdW1ufWBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZEVycm9yQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGVycm9yOiBGaWVsZEVycm9yO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkRXJyb3JEZWZpbml0aW9uLCBGaWVsZEVycm9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvZmllbGQtZXJyb3JzLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWZpZWxkLWVycm9ycycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1maWVsZC1lcnJvcnNcIiAqbmdJZj1cImVycm9yc1wiPlxuICAgIDxhdWktZmllbGQtZXJyb3IgY2xhc3M9XCJhdWktZmllbGQtZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZXJyb3JNZXNzYWdlc1wiIFtlcnJvcl09XCJlcnJvclwiPjwvYXVpLWZpZWxkLWVycm9yPlxuPC9kaXY+YCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRXJyb3JzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgcHVibGljIGVycm9yczogRmllbGRFcnJvcltdO1xuXHRASW5wdXQoKSBwdWJsaWMgZXJyb3JEZWZpbml0aW9uOiBGaWVsZEVycm9yRGVmaW5pdGlvbjtcblxuXHRlcnJvck1lc3NhZ2VzOiBGaWVsZEVycm9yW107XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGlmIChjaGFuZ2VzLmVycm9ycyAmJiAhY2hhbmdlcy5lcnJvcnMuY3VycmVudFZhbHVlKSB7XG5cdFx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBbXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZXJyb3JMaXN0ID0gKGNoYW5nZXMuZXJyb3JzID8gY2hhbmdlcy5lcnJvcnMuY3VycmVudFZhbHVlIDogdGhpcy5lcnJvcnMpO1xuXHRcdGlmICghZXJyb3JMaXN0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlcyA9IE9iamVjdC5rZXlzKGVycm9yTGlzdCkubWFwKChrZXkpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1lc3NhZ2U6IHRoaXMuZ2V0TWVzc2FnZShrZXksIGVycm9yTGlzdFtrZXldKSxcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGdldE1lc3NhZ2UodHlwZTogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xuXHRcdGlmICghdGhpcy5lcnJvckRlZmluaXRpb24gfHwgIXRoaXMuZXJyb3JEZWZpbml0aW9uLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5cdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKGBObyBlcnJvcmRlZmluaXRpb24gZm91bmQgZm9yIHZhbGlkYXRvciBvZiB0eXBlICcke3R5cGV9Jy4gUGxlYXNlIHByb3ZpZGUgb25lIHRocm91Z2ggdGhlIFtlcnJvckRlZmluaXRpb25dIGF0dHJpYnV0ZS5gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lcnJvckRlZmluaXRpb25bdHlwZV0ocGFyYW1zKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgRmllbGRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtZXJyb3IvZmllbGQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkRXJyb3JzQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1lcnJvcnMvZmllbGQtZXJyb3JzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRGaWVsZEVycm9yQ29tcG9uZW50LFxuXHRGaWVsZEVycm9yc0NvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTGFiZWxzTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExhYmVsc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRXJyb3JzTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSYW5nZVNsaWRlclJhbmdlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcmFuZ2Utc2xpZGVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXJhbmdlLXNsaWRlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19pbm5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fYmFyXCIgW3N0eWxlLmxlZnRdPVwiKGVuZFBlcmNlbnRhZ2UgPyBzdGFydFBlcmNlbnRhZ2UgKyAnJScgOiBmYWxzZSlcIiBbc3R5bGUud2lkdGhdPVwiKGVuZFBlcmNlbnRhZ2UgPyBlbmRQZXJjZW50YWdlIC0gc3RhcnRQZXJjZW50YWdlICsnJScgOiBzdGFydFBlcmNlbnRhZ2UgKyclJylcIj48L2Rpdj5cbiAgICA8c3BhbiAodG91Y2hzdGFydCk9XCJvbk1vdXNlRG93bignc3RhcnQnKVwiIChtb3VzZWRvd24pPVwib25Nb3VzZURvd24oJ3N0YXJ0JylcIiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19oYW5kbGVcIiBbc3R5bGUubGVmdF09XCJzdGFydFBlcmNlbnRhZ2UgKyAnJSdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX190b29sdGlwIGEtdG9vbHRpcCBhLXRvb2x0aXAtLXByaW1hcnkgYS10b29sdGlwLS10b3BcIj5cbiAgICAgICAgICAgIDxwPnt7IGxhYmVsQmVmb3JlIH19e3sgc3RhcnQgfX17eyBsYWJlbEFmdGVyIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cImVuZFwiICh0b3VjaHN0YXJ0KT1cIm9uTW91c2VEb3duKCdlbmQnKVwiIChtb3VzZWRvd24pPVwib25Nb3VzZURvd24oJ2VuZCcpXCIgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9faGFuZGxlXCIgW3N0eWxlLmxlZnRdPVwiZW5kUGVyY2VudGFnZSArICclJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibS1yYW5nZS1zbGlkZXJfX3Rvb2x0aXAgYS10b29sdGlwIGEtdG9vbHRpcC0tcHJpbWFyeSBhLXRvb2x0aXAtLXRvcFwiPlxuICAgICAgICAgICAgPHA+e3sgbGFiZWxCZWZvcmUgfX17eyBlbmQgfX17eyBsYWJlbEFmdGVyIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19zdGVwc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fc3RlcFwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCI+PC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19zdGVwLWxhYmVsc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fc3RlcFwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCI+e3sgc3RlcCB9fTwvZGl2PlxuPC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0ubS1yYW5nZS1zbGlkZXJfX2hhbmRsZXt6LWluZGV4OjEwfS5tLXJhbmdlLXNsaWRlcl9fdG9vbHRpcHt3aGl0ZS1zcGFjZTpub3dyYXB9Lm0tcmFuZ2Utc2xpZGVyX19zdGVwc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtwYWRkaW5nOi4yNXJlbTt6LWluZGV4Ojh9Lm0tcmFuZ2Utc2xpZGVyX19zdGVwcyAubS1yYW5nZS1zbGlkZXJfX3N0ZXB7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjA7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luOjJweH0ubS1yYW5nZS1zbGlkZXJfX3N0ZXAtbGFiZWxze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tdG9wOjFyZW07Y29sb3I6IzQ0NDtmb250LXNpemU6MTRweH0ubS1yYW5nZS1zbGlkZXJfX3N0ZXAtbGFiZWxzIC5tLXJhbmdlLXNsaWRlcl9fc3RlcHt3aWR0aDoyNXB4fWBdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlU2xpZGVyQ29tcG9uZW50KSwgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLXJhbmdlLXNsaWRlcicpIGNvcmVfYnJhbmRpbmcgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBtaW4gPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWF4ID0gMTAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWluaW1hbERpc3RhbmNlID0gMTtcblx0QElucHV0KCkgcHVibGljIHN0ZXAgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxCZWZvcmUgPSAnJztcblx0QElucHV0KCkgcHVibGljIGxhYmVsQWZ0ZXIgPSAnJztcblxuXHRwdWJsaWMgc3RhcnQgPSAwO1xuXHRwdWJsaWMgZW5kOiAobnVtYmVyIHwgYm9vbGVhbikgPSBmYWxzZTtcblx0cHVibGljIHN0ZXBzID0gW107XG5cdHB1YmxpYyBzdGFydFBlcmNlbnRhZ2U7XG5cdHB1YmxpYyBlbmRQZXJjZW50YWdlO1xuXHRwdWJsaWMgYWN0aXZlID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG5cdHB1YmxpYyBwcm9wYWdhdGVDaGFuZ2UgPSAodmFsdWU6IG51bWJlcnxSYW5nZVNsaWRlclJhbmdlKSA9PiB7fTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuc3RlcCA+IDApIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMubWF4OyBpICs9IE51bWJlcih0aGlzLnN0ZXApKSB7XG5cdFx0XHRcdHRoaXMuc3RlcHMucHVzaChpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnN0YXJ0UGVyY2VudGFnZSA9IHRoaXMuc3RhcnRUb1BlcmNlbnRhZ2UoKTtcblxuXHRcdGlmICh0aGlzLmVuZCkge1xuXHRcdFx0dGhpcy5lbmRQZXJjZW50YWdlID0gdGhpcy5lbmRUb1BlcmNlbnRhZ2UoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnN0YXJ0KSB7XG5cdFx0XHR0aGlzLnN0YXJ0ID0gdmFsdWUuc3RhcnQ7XG5cdFx0fSBlbHNlIGlmICghaXNOYU4odmFsdWUpICYmIHZhbHVlICE9PSAnJykge1xuXHRcdFx0dGhpcy5zdGFydCA9IE51bWJlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhcnQoTnVtYmVyKHRoaXMubWluKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSB0aGlzLnN0YXJ0VG9QZXJjZW50YWdlKCk7XG5cblx0XHRpZiAodmFsdWUgJiYgdmFsdWUuZW5kKSB7XG5cdFx0XHR0aGlzLmVuZCA9IHZhbHVlLmVuZDtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCkge31cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRwdWJsaWMgb25Nb3VzZURvd24oaGFuZGxlKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSBoYW5kbGU7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCd0b3VjaGVuZCcsIFsnJGV2ZW50J10pXG5cdEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25Nb3VzZVVwKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlID09PSAnc3RhcnQnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXJ0KHRoaXMucm91bmQodGhpcy5zdGFydCwgdGhpcy5zdGVwLCAwKSk7XG5cdFx0XHR0aGlzLnN0YXJ0UGVyY2VudGFnZSA9IHRoaXMuc3RhcnRUb1BlcmNlbnRhZ2UoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hY3RpdmUgPT09ICdlbmQnKSB7XG5cdFx0XHR0aGlzLnNldEVuZCh0aGlzLnJvdW5kKHRoaXMuZW5kLCB0aGlzLnN0ZXAsIDApKTtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmUgPSBudWxsO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcblx0QEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xuXHRcdGlmICghdGhpcy5hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBEbyBub3Qgc2VsZWN0IHRleHQgd2hpbGUgc2xpZGluZ1xuXG5cdFx0Y29uc3QgeCA9IChldmVudCBhcyBNb3VzZUV2ZW50KS54ICE9PSB1bmRlZmluZWQgPyAoZXZlbnQgYXMgTW91c2VFdmVudCkueCA6IChldmVudCBhcyBUb3VjaEV2ZW50KS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuXHRcdGNvbnN0IHJlY3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgbmV3UGVyY2VudGFnZSA9IHRoaXMuY2FsY1BlcmNlbnRhZ2UoeCwgcmVjdC53aWR0aCwgcmVjdC5sZWZ0KTtcblx0XHR0aGlzLnVwZGF0ZUhhbmRsZShuZXdQZXJjZW50YWdlKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVIYW5kbGUobmV3UGVyY2VudGFnZSkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSA9PT0gJ3N0YXJ0Jykge1xuXHRcdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSBuZXdQZXJjZW50YWdlO1xuXHRcdFx0dGhpcy5zZXRTdGFydCh0aGlzLnBlcmNlbnRhZ2VUb1N0YXJ0KCkpO1xuXG5cdFx0XHRpZiAodGhpcy5taW5pbWFsRGlzdGFuY2VOb3RSZXNwZWN0ZWQoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXJ0KE51bWJlcih0aGlzLmVuZCkgLSBOdW1iZXIodGhpcy5taW5pbWFsRGlzdGFuY2UpKTtcblx0XHRcdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSB0aGlzLnN0YXJ0VG9QZXJjZW50YWdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYWN0aXZlID09PSAnZW5kJyAmJiB0aGlzLmVuZFBlcmNlbnRhZ2UpIHtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IG5ld1BlcmNlbnRhZ2U7XG5cdFx0XHR0aGlzLnNldEVuZCh0aGlzLnBlcmNlbnRhZ2VUb0VuZCgpKTtcblxuXHRcdFx0aWYgKHRoaXMubWluaW1hbERpc3RhbmNlTm90UmVzcGVjdGVkKCkpIHtcblx0XHRcdFx0dGhpcy5zZXRFbmQoTnVtYmVyKHRoaXMuc3RhcnQpICsgTnVtYmVyKHRoaXMubWluaW1hbERpc3RhbmNlKSk7XG5cdFx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLSBIRUxQRVJTIC0tLS0tLS0tLS0gLy9cblx0cHVibGljIHNldFN0YXJ0KHZhbHVlKSB7XG5cdFx0dGhpcy5zdGFydCA9IHZhbHVlO1xuXG5cdFx0aWYgKHRoaXMuZW5kKSB7XG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRcdHN0YXJ0OiB0aGlzLnN0YXJ0LFxuXHRcdFx0XHRlbmQ6IHRoaXMuZW5kLFxuXHRcdFx0fSBhcyBSYW5nZVNsaWRlclJhbmdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zdGFydCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEVuZCh2YWx1ZSkge1xuXHRcdHRoaXMuZW5kID0gdmFsdWU7XG5cblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRzdGFydDogdGhpcy5zdGFydCxcblx0XHRcdGVuZDogdGhpcy5lbmQsXG5cdFx0fSBhcyBSYW5nZVNsaWRlclJhbmdlKTtcblx0fVxuXG5cdHB1YmxpYyByb3VuZChudW1iZXIsIGluY3JlbWVudCwgb2Zmc2V0KSB7XG5cdFx0aWYgKGluY3JlbWVudCA+IDApIHtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKChudW1iZXIgLSBvZmZzZXQpIC8gaW5jcmVtZW50ICkgKiBpbmNyZW1lbnQgKyBvZmZzZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bWJlcjtcblx0fVxuXG5cdHB1YmxpYyBzdGFydFRvUGVyY2VudGFnZSgpIHtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLnN0YXJ0IC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pICogMTAwKTtcblx0fVxuXG5cdHB1YmxpYyBwZXJjZW50YWdlVG9TdGFydCgpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5zdGFydFBlcmNlbnRhZ2UgLyAxMDApICogKHRoaXMubWF4IC0gdGhpcy5taW4pICsgTnVtYmVyKHRoaXMubWluKSk7XG5cdH1cblxuXHRwdWJsaWMgZW5kVG9QZXJjZW50YWdlKCkge1xuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQoKE51bWJlcih0aGlzLmVuZCkgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDApO1xuXHR9XG5cblx0cHVibGljIHBlcmNlbnRhZ2VUb0VuZCgpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5lbmRQZXJjZW50YWdlIC8gMTAwKSAqICh0aGlzLm1heCAtIHRoaXMubWluKSArIE51bWJlcih0aGlzLm1pbikpO1xuXHR9XG5cblx0cHVibGljIG1pbmltYWxEaXN0YW5jZU5vdFJlc3BlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5taW5pbWFsRGlzdGFuY2UgPj0gMCAmJiB0aGlzLmVuZCAmJiB0aGlzLnN0YXJ0ID4gTnVtYmVyKHRoaXMuZW5kKSAtIHRoaXMubWluaW1hbERpc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIGNhbGNQZXJjZW50YWdlKG1vdXNlWCwgd2lkdGgsIG9mZnNldExlZnQpIHtcblx0XHRjb25zdCBtb3VzZVBvcyA9IG1vdXNlWCAtIG9mZnNldExlZnQ7XG5cblx0XHRsZXQgbmV3UGVyY2VudGFnZSA9IE1hdGgucm91bmQoKG1vdXNlUG9zIC8gd2lkdGgpICogMTAwKTtcblxuXHRcdGlmIChuZXdQZXJjZW50YWdlID4gMTAwKSB7XG5cdFx0XHRuZXdQZXJjZW50YWdlID0gMTAwO1xuXHRcdH1cblxuXHRcdGlmIChuZXdQZXJjZW50YWdlIDwgMCkge1xuXHRcdFx0bmV3UGVyY2VudGFnZSA9IDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld1BlcmNlbnRhZ2U7XG5cdH1cbn1cbiIsImltcG9ydCB7IFJhbmdlU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRSYW5nZVNsaWRlckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlU2xpZGVyTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRmb3J3YXJkUmVmLFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldCwgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBGbHlvdXRTaXplIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5pbXBvcnQgeyBTZWFyY2hGaWx0ZXJDaG9pY2UgfSBmcm9tICcuLi8uLi90eXBlcy9zZWFyY2gtZmlsdGVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNlYXJjaC1maWx0ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLXNlYXJjaC1maWx0ZXJcIiBhdWlGbHlvdXQgW3NpemVdPVwiZmx5b3V0U2l6ZVwiIFthbGlnbl09XCJmbHlvdXRBbGlnblwiPlxuXHQ8ZGl2IGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyX19sYWJlbCBoYXMtaWNvbi1yaWdodFwiIFtuZ0NsYXNzXT1cInsnbS1zZWFyY2gtZmlsdGVyX19sYWJlbC0tYWN0aXZlJzogc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwfVwiIGF1aUZseW91dEFjdGlvbj5cblx0XHR7eyBsYWJlbCB9fVxuXHRcdDxzcGFuICpuZ0lmPVwic2VsZWN0ZWRJdGVtcy5sZW5ndGhcIj4oe3sgc2VsZWN0ZWRJdGVtcy5sZW5ndGggfX0pPC9zcGFuPlxuXHRcdDxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvc3Bhbj5cblx0PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cIm0tc2VhcmNoLWZpbHRlcl9fc2VhcmNoIG0tc2VhcmNoLWZpbHRlcl9fc2VhcmNoLS1zY3JvbGxcIiBhdWlGbHlvdXRab25lPlxuXHRcdDxkaXYgY2xhc3M9XCJtLXNlYXJjaC1maWx0ZXJfX2lucHV0IGEtaW5wdXQgaGFzLWljb24tcmlnaHRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyXCI+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ7eyBuYW1lICsgJy1zZWFyY2gnIH19XCIgaWQ9XCJ7eyBpZCArICctc2VhcmNoJyB9fVwiIFsobmdNb2RlbCldPVwicXVlcnlcIiAoaW5wdXQpPVwiZmlsdGVyRGF0YUZyb21TZWFyY2goKVwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyX19jbGVhclwiICpuZ0lmPVwic2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24tb3V0bGluZSBhLWJ1dHRvbi0tc21hbGwgYS1idXR0b24tLWRhbmdlciBoYXMtaWNvbi1sZWZ0XCIgKGNsaWNrKT1cImNsZWFyKClcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9kaXY+XG5cdFx0XHRcdHt7IGxhYmVsRGVzZWxlY3QgfX1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGg2IGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX190aXRsZVwiPnt7IGxhYmVsUmVzdWx0cyB9fTwvaDY+XG5cdFx0PGRpdiBjbGFzcz1cInUtdGV4dC1jZW50ZXIgdS1wYWRkaW5nIGEtc3Bpbm5lclwiICpuZ0lmPVwibG9hZGluZ1wiPjwvZGl2PlxuXHRcdDx1bCBjbGFzcz1cImEtbGlzdCBhLWxpc3QtLWxpbmVkIGEtbGlzdC0tdW5zdHlsZWRcIiAqbmdJZj1cIiFsb2FkaW5nXCI+XG5cdFx0XHQ8bGkgY2xhc3M9XCJtLXNlYXJjaC1maWx0ZXJfX3Jlc3VsdHNfX2l0ZW0gYS1saXN0X19pdGVtXCIgKm5nSWY9XCIhZmlsdGVyZWRDaG9pY2VzLmxlbmd0aFwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInUtcGFkZGluZy14c1wiPnt7IGxhYmVsTm9SZXN1bHRzIH19PC9wPlxuXHRcdFx0PC9saT5cblx0XHRcdDxsaSBjbGFzcz1cIm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19faXRlbSBhLWxpc3RfX2l0ZW1cIiAqbmdGb3I9XCJsZXQgY2hvaWNlIG9mIGZpbHRlcmVkQ2hvaWNlczsgaW5kZXggYXMgaVwiPlxuXHRcdFx0XHQgPGRpdiBjbGFzcz1cImEtaW5wdXRfX2NoZWNrYm94XCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0aWQ9XCJ7eyAnY2hlY2tib3gtLScgKyBpICsgJy0tJyArIGlkIH19XCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ7eyAnY2hlY2tib3gtLScgKyBpICsgJy0tJyArIGlkIH19XCJcblx0XHRcdFx0XHRcdFtjaGVja2VkXT1cInNlbGVjdGVkSXRlbXMuaW5kZXhPZihjaG9pY2UudmFsdWUpID49IDBcIlxuXHRcdFx0XHRcdFx0KGNoYW5nZSk9XCJ0b2dnbGVTZWxlY3RlZChjaG9pY2UudmFsdWUpXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cInt7ICdjaGVja2JveC0tJyArIGkgKyAnLS0nICsgaWQgfX1cIj57eyBjaG9pY2UubGFiZWwgfX08L2xhYmVsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbGk+XG5cdFx0PC91bD5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AubS1zZWFyY2gtZmlsdGVyX19sYWJlbHtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZy1sZWZ0OjEuNXJlbTtib3JkZXI6MXB4IHNvbGlkICNiMGIwYjA7bWFyZ2luOjAgLjc1cmVtIC43NXJlbSAwO2xpbmUtaGVpZ2h0OjNyZW07Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsPnNwYW46bm90KC5mYSl7bWFyZ2luLWxlZnQ6LjI1cmVtfS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsPi5mYXtjb2xvcjojN2Q3ZDdkO2ZvbnQtc2l6ZToxLjI1cmVtO2hlaWdodDozcmVtO2xpbmUtaGVpZ2h0OjNyZW07cG9pbnRlci1ldmVudHM6bm9uZTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7d2lkdGg6M3JlbX0ubS1zZWFyY2gtZmlsdGVyX19sYWJlbC5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLS1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMDA2NGI0O2JvcmRlci1jb2xvcjojMDA2NGI0O2NvbG9yOiNmZmZ9Lm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwubS1zZWFyY2gtZmlsdGVyX19sYWJlbC0tYWN0aXZlPi5mYXtjb2xvcjojZmZmfS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwtLWVycm9ye2JhY2tncm91bmQtY29sb3I6I2RhMjkxYztib3JkZXItY29sb3I6I2RhMjkxYztjb2xvcjojZmZmfS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwtLWVycm9yPi5mYXtjb2xvcjojZmZmfS5tLXNlYXJjaC1maWx0ZXJfX2lucHV0e21hcmdpbi1ib3R0b206Ljc1cmVtO3BhZGRpbmc6Ljc1cmVtfS5tLXNlYXJjaC1maWx0ZXJfX2lucHV0IC5hLWlucHV0X193cmFwcGVye21hcmdpbi1yaWdodDowfS5tLXNlYXJjaC1maWx0ZXJfX2NsZWFye3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjowIC43NXJlbSAxLjVyZW19Lm0tc2VhcmNoLWZpbHRlcl9fc2VhcmNoe21heC1oZWlnaHQ6NTB2aH0ubS1zZWFyY2gtZmlsdGVyX19zZWFyY2gubS1zZWFyY2gtZmlsdGVyX19zZWFyY2gtLXNjcm9sbHtvdmVyZmxvdy15OmF1dG99Lm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19fdGl0bGV7Zm9udC1zaXplOjE2cHg7bWFyZ2luOjAgLjc1cmVtfS5tLXNlYXJjaC1maWx0ZXIgLmEtbGlzdCAubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVte3BhZGRpbmc6MH0ubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVte2N1cnNvcjpwb2ludGVyfS5tLXNlYXJjaC1maWx0ZXJfX3Jlc3VsdHNfX2l0ZW0gLmEtaW5wdXRfX2NoZWNrYm94e2Rpc3BsYXk6ZmxleDtwYWRkaW5nLWxlZnQ6Mi4yNXJlbX0ubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVtIC5hLWlucHV0X19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2xhYmVsOjphZnRlcnt0b3A6Ljc1cmVtfS5tLXNlYXJjaC1maWx0ZXJfX3Jlc3VsdHNfX2l0ZW0gLmEtaW5wdXRfX2NoZWNrYm94IGxhYmVse2ZsZXg6MTtwYWRkaW5nOi43NXJlbX0ubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YzZjNmM31gXSxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlYXJjaEZpbHRlckNvbXBvbmVudCksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZm9yd2FyZC1yZWZcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdEBJbnB1dCgpIHB1YmxpYyBpZDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZmx5b3V0U2l6ZSA9IEZseW91dFNpemUuU21hbGw7XG5cdEBJbnB1dCgpIHB1YmxpYyBmbHlvdXRBbGlnbjtcblx0QElucHV0KCkgcHVibGljIGxhYmVsID0gJ0ZpbHRlcic7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbERlc2VsZWN0ID0gJ0FsbGVzIGRlc2VsZWN0ZXJlbic7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbFJlc3VsdHMgPSAnUmVzdWx0YXRlbic7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbE5vUmVzdWx0cyA9ICdHZWVuIHJlc3VsdGF0ZW4gZ2V2b25kZW4uJztcblx0QElucHV0KCkgcHVibGljIGNob2ljZXM6IFNlYXJjaEZpbHRlckNob2ljZVtdID0gW107XG5cdEBJbnB1dCgpIHB1YmxpYyByZW1vdGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlciA9ICdab2VrZW4nO1xuXHRASW5wdXQoKSBwdWJsaWMgaW5wdXREZWxheSA9IDE1MDtcblx0QElucHV0KCkgcHVibGljIHNob3dBbGxCeURlZmF1bHQgPSBmYWxzZTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRwdWJsaWMgcXVlcnkgPSAnJztcblx0cHVibGljIHNlbGVjdGVkSXRlbXM6IHN0cmluZ1tdID0gW107XG5cdHB1YmxpYyBmaWx0ZXJlZENob2ljZXM6IFNlYXJjaEZpbHRlckNob2ljZVtdID0gW107XG5cdHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG5cblx0cHVibGljIGZpbHRlckRhdGFGcm9tU2VhcmNoOiAoX2FueT8pID0+IHt9O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZmlsdGVyRGF0YUZyb21TZWFyY2ggPSBkZWJvdW5jZSh0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKSwgdGhpcy5pbnB1dERlbGF5KTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVNb2RlbDogKF8pID0+IGFueSA9ICgpID0+IHt9O1xuXG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXTtcblx0fVxuXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlOiAoXykgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGVNb2RlbCA9IG9uQ2hhbmdlO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvd0FsbEJ5RGVmYXVsdCkge1xuXHRcdFx0dGhpcy5maWx0ZXJEYXRhKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRjb25zdCBjaG9pY2VzID0gZ2V0KGNoYW5nZXMsICdjaG9pY2VzLmN1cnJlbnRWYWx1ZScsIG51bGwpO1xuXG5cdFx0aWYgKCFjaG9pY2VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucmVtb3RlKSB7XG5cdFx0XHR0aGlzLmZpbHRlcmVkQ2hvaWNlcyA9IFsuLi5jaG9pY2VzXTtcblx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckRhdGEoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVyRGF0YSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yZW1vdGUpIHtcblx0XHRcdHRoaXMubG9hZGluZyA9IHRydWU7XG5cblx0XHRcdHJldHVybiB0aGlzLnNlYXJjaC5lbWl0KHRoaXMucXVlcnkpO1xuXHRcdH1cblxuXHRcdHRoaXMuZmlsdGVyQ2hvaWNlcygpO1xuXHR9XG5cblx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuXHRcdHRoaXMucXVlcnkgPSAnJztcblxuXHRcdHRoaXMuZmlsdGVyRGF0YSgpO1xuXHRcdHRoaXMudXBkYXRlTW9kZWwodGhpcy5zZWxlY3RlZEl0ZW1zKTtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGVTZWxlY3RlZChjaG9pY2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoY2hvaWNlKTtcblxuXHRcdGlmIChzZWxlY3RlZCA8IDApIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5jb25jYXQoY2hvaWNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW1zID0gW1xuXHRcdFx0XHQuLi50aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWQpLFxuXHRcdFx0XHQuLi50aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2Uoc2VsZWN0ZWQgKyAxKSxcblx0XHRcdF07XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVNb2RlbCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJDaG9pY2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyZWRDaG9pY2VzID0gdGhpcy5jaG9pY2VzLmZpbHRlcigoY2hvaWNlOiBTZWFyY2hGaWx0ZXJDaG9pY2UpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGNob2ljZS52YWx1ZSkgPCAwICYmXG5cdFx0XHRcdGNob2ljZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpKSA+PSAwXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBTZWFyY2hGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1maWx0ZXIvc2VhcmNoLWZpbHRlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0U2VhcmNoRmlsdGVyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rmx5b3V0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsdGVyTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyVmFsaWRhdG9ycyB7XG5cdC8vIHRpbWUgYGhoOm1tYCAyNGggZm9ybWF0XG5cdHB1YmxpYyBzdGF0aWMgbWluVGltZSh0aW1lOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XG5cdFx0Y29uc3QgdmFsaWRhdG9yID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55fSA9PiB7XG5cdFx0XHRjb25zdCBzcGxpdHRlZENvbnRyb2xWYWx1ZSA9IGNvbnRyb2wudmFsdWUuc3BsaXQoJzonKTtcblx0XHRcdGNvbnN0IGNvbnRyb2xIb3VycyA9IHBhcnNlSW50KHNwbGl0dGVkQ29udHJvbFZhbHVlWzBdLCAxMCk7XG5cdFx0XHRjb25zdCBjb250cm9sTWludXRlcyA9IHBhcnNlSW50KHNwbGl0dGVkQ29udHJvbFZhbHVlWzFdLCAxMCk7XG5cdFx0XHRjb25zdCBzcGxpdHRlZE1pblRpbWUgPSB0aW1lLnNwbGl0KCc6Jyk7XG5cdFx0XHRjb25zdCBtaW5Ib3VycyA9IHBhcnNlSW50KHNwbGl0dGVkTWluVGltZVswXSwgMTApO1xuXHRcdFx0Y29uc3QgbWluTWludXRlcyA9IHBhcnNlSW50KHNwbGl0dGVkTWluVGltZVsxXSwgMTApO1xuXG5cdFx0XHQvLyBEb24ndCB0aHJvdyBlcnJvciAtLT4gdXNlIFZhbGlkYXRvci5yZXF1aXJlZFxuXHRcdFx0aWYgKGlzTmFOKGNvbnRyb2xIb3VycykgfHwgaXNOYU4oY29udHJvbE1pbnV0ZXMpIHx8IGlzTmFOKG1pbkhvdXJzKSB8fCBpc05hTihtaW5NaW51dGVzKSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1pbkhvdXJzIDwgY29udHJvbEhvdXJzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWluSG91cnMgPT09IGNvbnRyb2xIb3VycyAmJiBtaW5NaW51dGVzIDw9IGNvbnRyb2xNaW51dGVzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyAnbWluVGltZSc6IHsgdmFsdWU6IGNvbnRyb2wudmFsdWUgfSB9O1xuXHRcdH07XG5cblx0XHRyZXR1cm4gdmFsaWRhdG9yO1xuXHR9XG5cblx0Ly8gdGltZSBgaGg6bW1gIDI0aCBmb3JtYXRcblx0cHVibGljIHN0YXRpYyBtYXhUaW1lKHRpbWU6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcblx0XHRjb25zdCB2YWxpZGF0b3IgPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcblx0XHRcdGNvbnN0IHNwbGl0dGVkQ29udHJvbFZhbHVlID0gY29udHJvbC52YWx1ZS5zcGxpdCgnOicpO1xuXHRcdFx0Y29uc3QgY29udHJvbEhvdXJzID0gcGFyc2VJbnQoc3BsaXR0ZWRDb250cm9sVmFsdWVbMF0sIDEwKTtcblx0XHRcdGNvbnN0IGNvbnRyb2xNaW51dGVzID0gcGFyc2VJbnQoc3BsaXR0ZWRDb250cm9sVmFsdWVbMV0sIDEwKTtcblx0XHRcdGNvbnN0IHNwbGl0dGVkTWluVGltZSA9IHRpbWUuc3BsaXQoJzonKTtcblx0XHRcdGNvbnN0IG1heEhvdXJzID0gcGFyc2VJbnQoc3BsaXR0ZWRNaW5UaW1lWzBdLCAxMCk7XG5cdFx0XHRjb25zdCBtYXhNaW51dGVzID0gcGFyc2VJbnQoc3BsaXR0ZWRNaW5UaW1lWzFdLCAxMCk7XG5cblx0XHRcdC8vIERvbid0IHRocm93IGVycm9yIC0tPiB1c2UgVmFsaWRhdG9yLnJlcXVpcmVkXG5cdFx0XHRpZiAoaXNOYU4oY29udHJvbEhvdXJzKSB8fCBpc05hTihjb250cm9sTWludXRlcykgfHwgaXNOYU4obWF4SG91cnMpIHx8IGlzTmFOKG1heE1pbnV0ZXMpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWF4SG91cnMgPiBjb250cm9sSG91cnMpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXhIb3VycyA9PT0gY29udHJvbEhvdXJzICYmIG1heE1pbnV0ZXMgPj0gY29udHJvbE1pbnV0ZXMpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7ICdtYXhUaW1lJzogeyB2YWx1ZTogY29udHJvbC52YWx1ZSB9IH07XG5cdFx0fTtcblxuXHRcdHJldHVybiB2YWxpZGF0b3I7XG5cdH1cbn1cbiIsImV4cG9ydCBlbnVtIFRpbWVwaWNrZXJJbnB1dFNpemUge1xuXHRBdXRvID0gJ2F1dG8nLFxuXHRTbWFsbCA9ICdzbWFsbCcsXG5cdExhcmdlID0gJ2xhcmdlJyxcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUmVuZGVyZXIyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycy90YWtlVW50aWwnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgVGltZXBpY2tlcklucHV0U2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzL3RpbWVwaWNrZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGltZXBpY2tlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImEtaW5wdXRcIiBbY2xhc3NdPVwiJ2EtaW5wdXQtLScgKyBzaXplXCIgW25nQ2xhc3NdPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IgfVwiICpuZ0lmPVwiIXNob3VsZFVzZUZhbGxiYWNrXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgW2Zvcm1Db250cm9sXT1cInRpbWVDb250cm9sXCI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInNob3VsZFVzZUZhbGxiYWNrXCIgW2Zvcm1Hcm91cF09XCJmYWxsYmFja0Zvcm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodFwiIFtjbGFzc109XCInYS1pbnB1dC0tJyArIHNpemVcIiBbbmdDbGFzc109XCJ7ICdoYXMtZXJyb3InOiBoYXNFcnJvciB9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyXCI+XG4gICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImhvdXJzXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCB2YWx1ZT1cIm51bGxcIj57eyBob3Vyc1BsYWNlaG9sZGVyIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3Vyc1wiIFt2YWx1ZV09XCJob3VyXCI+e3sgaG91ciB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImEtaW5wdXQgaGFzLWljb24tcmlnaHRcIiBbY2xhc3NdPVwiJ2EtaW5wdXQtLScgKyBzaXplXCIgW25nQ2xhc3NdPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IgfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJtaW51dGVzXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCB2YWx1ZT1cIm51bGxcIj57eyBtaW51dGVzUGxhY2Vob2xkZXIgfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBtaW51dGUgb2YgbWludXRlc1wiIFt2YWx1ZV09XCJtaW51dGVcIj57eyBtaW51dGUgfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QgLmEtaW5wdXR7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3Q6OmJlZm9yZXt6LWluZGV4OjEwfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbWVwaWNrZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QElucHV0KCkgcHVibGljIGhvdXJzUGxhY2Vob2xkZXIgPSAnSEgnO1xuXHRASW5wdXQoKSBwdWJsaWMgbWludXRlc1BsYWNlaG9sZGVyID0gJ01NJztcblx0QElucHV0KCkgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBzaXplOiBUaW1lcGlja2VySW5wdXRTaXplID0gVGltZXBpY2tlcklucHV0U2l6ZS5BdXRvO1xuXG5cdHB1YmxpYyBzaG91bGRVc2VGYWxsYmFjayA9IGZhbHNlO1xuXHRwdWJsaWMgbWludXRlczogc3RyaW5nW10gPSBbXTtcblx0cHVibGljIGhvdXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRwdWJsaWMgdXBkYXRlTW9kZWw6ICh2YWx1ZTogc3RyaW5nKSA9PiBhbnk7XG5cblx0cHVibGljIHRpbWVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cdHB1YmxpYyBmYWxsYmFja0Zvcm06IEZvcm1Hcm91cDtcblxuXHRwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuXHQpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2hvdWxkVXNlRmFsbGJhY2sgPSB0aGlzLnN1cHBvcnRzTmF0aXZlVGltZXBpY2tlcigpO1xuXHRcdHRoaXMubWludXRlcyA9IHRoaXMuZ2V0TWludXRlcygpO1xuXHRcdHRoaXMuaG91cnMgPSB0aGlzLmdldEhvdXJzKCk7XG5cblx0XHR0aGlzLmZhbGxiYWNrRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0aG91cnM6IG51bGwsXG5cdFx0XHRtaW51dGVzOiBudWxsLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5mYWxsYmFja0Zvcm0udmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZvcm1EYXRhKSA9PiB7XG5cdFx0XHRcdGlmIChmb3JtRGF0YS5ob3VycyAmJiBmb3JtRGF0YS5taW51dGVzKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVNb2RlbChgJHtmb3JtRGF0YS5ob3Vyc306JHtmb3JtRGF0YS5taW51dGVzfWApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlTW9kZWwoJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMudGltZUNvbnRyb2wudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRpbWUpID0+IHtcblx0XHRcdFx0dGhpcy51cGRhdGVNb2RlbCh0aW1lKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KHRydWUpO1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudGltZUNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0Y29uc3Qgc3BsaXR0ZWQgPSB2YWx1ZS5zcGxpdCgnOicpO1xuXHRcdFx0dGhpcy5mYWxsYmFja0Zvcm0uZ2V0KCdob3VycycpLnNldFZhbHVlKHNwbGl0dGVkWzBdLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLmZhbGxiYWNrRm9ybS5nZXQoJ21pbnV0ZXMnKS5zZXRWYWx1ZShzcGxpdHRlZFsxXSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlKTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGVNb2RlbCA9IG9uQ2hhbmdlO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cblxuXHRwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG5cdFx0aWYgKGlzRGlzYWJsZWQpIHtcblx0XHRcdHRoaXMudGltZUNvbnRyb2wuZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLmZhbGxiYWNrRm9ybS5kaXNhYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50aW1lQ29udHJvbC5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdFx0dGhpcy5mYWxsYmFja0Zvcm0uZW5hYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN1cHBvcnRzTmF0aXZlVGltZXBpY2tlcigpOiBib29sZWFuIHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGVsZW1lbnQudHlwZSA9ICd0aW1lJztcblxuXHRcdHJldHVybiBlbGVtZW50LnR5cGUgPT09ICd0ZXh0Jztcblx0fVxuXG5cdHByaXZhdGUgZ2V0TWludXRlcygpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIEFycmF5KDYwKS5maWxsKCcnKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIERhdGVIZWxwZXIuYWRkTGVhZGluZ1plcm8oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRIb3VycygpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIEFycmF5KDI0KS5maWxsKCcnKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIERhdGVIZWxwZXIuYWRkTGVhZGluZ1plcm8oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBUaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdFRpbWVwaWNrZXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlck1vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVcGxvYWRPcHRpb25zLCBWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfT1BUSU9OU19ERUZBVUxUOiBVcGxvYWRPcHRpb25zID0ge1xuXHRhbGxvd2VkTWltZVR5cGVzOiBbXSxcblx0YWxsb3dlZEZpbGVUeXBlczogW10sXG5cdGF1dG9VcGxvYWQ6IGZhbHNlLFxuXHRtYXhGaWxlU2l6ZTogMCwgLy8gMCBpcyBpbmZpbml0ZVxuXHRxdWV1ZUxpbWl0OiAwLCAvLyAwIGlzIGluZmluaXRlXG5cdHR5cGU6ICdkcm9wJyxcblx0dXJsOiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCBVUExPQURfVkFMSURBVElPTl9NRVNTQUdFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxWYWxpZGF0aW9uTWVzc2FnZXM+KCd1cGxvYWRWYWxpZGF0aW9uTWVzc2FnZXMnKTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBVUExPQURfT1BUSU9OU19ERUZBVUxUIH0gZnJvbSAnLi4vdXBsb2FkLmNvbmYnO1xuaW1wb3J0IHsgVXBsb2FkT3B0aW9ucywgSW52YWxpZEZpbGUgfSBmcm9tICcuLi90eXBlcy91cGxvYWQudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVXBsb2FkZXIge1xuXHRwdWJsaWMgb3B0aW9uczogVXBsb2FkT3B0aW9ucyA9IFVQTE9BRF9PUFRJT05TX0RFRkFVTFQ7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFVwbG9hZE9wdGlvbnMpIHtcblx0XHR0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyB1cGxvYWRGaWxlcyAoZmlsZXM6IEZpbGVbXSkge1xuXHRcdGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IHRoaXMuZmlsZXNUb0Zvcm1EYXRhKGZpbGVzKTtcblxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG5cdFx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0Ly8gUHJvZ3Jlc3MgY2FsbGJhY2tcblx0XHRcdHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGVyY2VudENvbXBsZXRlID0gZS5sb2FkZWQgLyBlLnRvdGFsO1xuXG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0XHRwcm9ncmVzczogcGVyY2VudENvbXBsZXRlLFxuXHRcdFx0XHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENvbXBsZXRlIGNhbGxiYWNrXG5cdFx0XHR4aHIub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRwcm9ncmVzczogMSxcblx0XHRcdFx0XHRkYXRhOiB4aHIucmVzcG9uc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdFx0eGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcblx0XHRcdHhoci5vcGVuKCdwb3N0JywgdGhpcy5vcHRpb25zLnVybCk7XG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdmFsaWRhdGVGaWxlcyhmaWxlcykge1xuXHRcdGNvbnN0IHZhbGlkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXHRcdGNvbnN0IGludmFsaWRGaWxlczogSW52YWxpZEZpbGVbXSA9IFtdO1xuXG5cdFx0aWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0Zm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG5cdFx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZUZpbGVUeXBlKGZpbGUpKSB7XG5cdFx0XHRcdFx0ZXJyb3JzLnB1c2goJ0lOVkFMSURfRklMRV9UWVBFJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXRoaXMudmFsaWRhdGVGaWxlU2l6ZShmaWxlKSkge1xuXHRcdFx0XHRcdGVycm9ycy5wdXNoKCdJTlZBTElEX0ZJTEVfU0laRScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLnZhbGlkYXRlTWltZVR5cGUoZmlsZSkpIHtcblx0XHRcdFx0XHRlcnJvcnMucHVzaCgnSU5WQUxJRF9NSU1FX1RZUEUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0dmFsaWRGaWxlcy5wdXNoKGZpbGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGludmFsaWRGaWxlcy5wdXNoKHtcblx0XHRcdFx0XHRcdHJlYXNvbnM6IGVycm9ycyxcblx0XHRcdFx0XHRcdGZpbGU6IGZpbGUsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsaWRGaWxlczogdmFsaWRGaWxlcyxcblx0XHRcdGludmFsaWRGaWxlczogaW52YWxpZEZpbGVzLFxuXHRcdH07XG5cdH1cblxuXHRwcm90ZWN0ZWQgZmlsZXNUb0Zvcm1EYXRhKGZpbGVzOiBGaWxlW10pOiBGb3JtRGF0YSB7XG5cdFx0Y29uc3QgZm9ybURhdGEgID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0XHRpZiAoIXRoaXMub3B0aW9ucy51cmwgfHwgdGhpcy5vcHRpb25zLnVybCA9PT0gJycpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRGVmaW5lIHRoZSB1cGxvYWQgdXJsLicpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZvcm1EYXRhO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldEZpbGVFeHRlbnNpb24oZmlsZTogRmlsZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGZpbGUubmFtZS5zcGxpdCgnLicpW2ZpbGUubmFtZS5zcGxpdCgnLicpLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlRmlsZVR5cGUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGFsbG93ZWRGaWxlVHlwZXMgPSB0aGlzLm9wdGlvbnMuYWxsb3dlZEZpbGVUeXBlcztcblx0XHRjb25zdCBleHQgPSB0aGlzLmdldEZpbGVFeHRlbnNpb24oZmlsZSk7XG5cblx0XHQvLyBGaWx0ZXIgZGVmaW5lZD9cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYWxsb3dlZEZpbGVUeXBlcykgfHwgYWxsb3dlZEZpbGVUeXBlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgYWxsb3dlZEZpbGVUeXBlcyBjYXNlIGluc2Vuc2l0aXZlXG5cdFx0Y29uc3QgdG9VcHBlciA9ICh4KSA9PiB4LnRvVXBwZXJDYXNlKCk7XG5cdFx0Y29uc3QgYWxsb3dlZEZpbGVUeXBlc1RvVXBwZXIgPSBhbGxvd2VkRmlsZVR5cGVzLm1hcCh0b1VwcGVyKTtcblxuXHRcdHJldHVybiBhbGxvd2VkRmlsZVR5cGVzVG9VcHBlci5sYXN0SW5kZXhPZihleHQudG9VcHBlckNhc2UoKSkgIT09IC0xO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlRmlsZVNpemUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IG1heEZpbGVTaXplID0gdGhpcy5vcHRpb25zLm1heEZpbGVTaXplO1xuXG5cdFx0Ly8gRmlsdGVyIGRlZmluZWQ/XG5cdFx0aWYgKCFtYXhGaWxlU2l6ZSB8fCBtYXhGaWxlU2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heEZpbGVTaXplID4gZmlsZS5zaXplO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlTWltZVR5cGUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGFsbG93ZWRNaW1lVHlwZXMgPSB0aGlzLm9wdGlvbnMuYWxsb3dlZE1pbWVUeXBlcztcblxuXHRcdC8vIEZpbHRlciBkZWZpbmVkP1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShhbGxvd2VkTWltZVR5cGVzKSB8fCBhbGxvd2VkTWltZVR5cGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFsbG93ZWRNaW1lVHlwZXMubGFzdEluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTE7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVXBsb2FkT3B0aW9ucywgSW52YWxpZEZpbGUgfSBmcm9tICcuLi8uLi90eXBlcy91cGxvYWQudHlwZXMnO1xuaW1wb3J0IHsgVVBMT0FEX09QVElPTlNfREVGQVVMVCB9IGZyb20gJy4uLy4uL3VwbG9hZC5jb25mJztcbmltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy91cGxvYWRlci5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS11cGxvYWQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkXCI+XG4gICAgPGF1aS11cGxvYWQtem9uZSBbdXBsb2FkZXJdPVwidXBsb2FkZXJcIiAocXVldWVkRmlsZXMpPVwib25RdWV1ZWRGaWxlcygkZXZlbnQpXCIgKHVwbG9hZGVkRmlsZXMpPVwib25VcGxvYWRlZEZpbGVzKCRldmVudClcIiAoaW52YWxpZEZpbGVzKT1cIm9uSW52YWxpZEZpbGVzKCRldmVudClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF1aS11cGxvYWQtbWVzc2FnZVwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLW1lc3NhZ2VcIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWJ1dHRvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWJ1dHRvblwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8L2F1aS11cGxvYWQtem9uZT5cbiAgICA8YXVpLXZhbGlkYXRpb24tbGlzdCBbaW52YWxpZEZpbGVzXT1cImludmFsaWRGaWxlc1wiPjwvYXVpLXZhbGlkYXRpb24tbGlzdD5cbiAgICA8YXVpLXVwbG9hZC1xdWV1ZSAqbmdJZj1cIiFvcHRpb25zPy5hdXRvVXBsb2FkXCIgW3VwbG9hZGVyXT1cInVwbG9hZGVyXCIgW2ZpbGVzXT1cInF1ZXVlZEZpbGVzXCIgKHVwbG9hZGVkRmlsZXMpPVwib25VcGxvYWRlZEZpbGVzKCRldmVudClcIj48L2F1aS11cGxvYWQtcXVldWU+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBVcGxvYWRPcHRpb25zID0gVVBMT0FEX09QVElPTlNfREVGQVVMVDtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RVcGxvYWRlZEZpbGVzOiBFdmVudEVtaXR0ZXI8T2JqZWN0W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4oKTtcblxuXHRwdWJsaWMgdXBsb2FkZXI7XG5cdHB1YmxpYyB1cGxvYWRlZEZpbGVzOiBPYmplY3RbXSA9IFtdO1xuXHRwdWJsaWMgaW52YWxpZEZpbGVzOiBJbnZhbGlkRmlsZVtdID0gW107XG5cdHB1YmxpYyBxdWV1ZWRGaWxlczogRmlsZVtdID0gW107XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy51cGxvYWRlciA9IG5ldyBVcGxvYWRlcih0aGlzLm9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIG9uVXBsb2FkZWRGaWxlcyhmaWxlczogT2JqZWN0W10pIHtcblx0XHR0aGlzLnVwbG9hZGVkRmlsZXMgPSB0aGlzLnVwbG9hZGVkRmlsZXMuY29uY2F0KGZpbGVzKTtcblx0XHR0aGlzLnNlbGVjdFVwbG9hZGVkRmlsZXMuZW1pdCh0aGlzLnVwbG9hZGVkRmlsZXMpO1xuXHR9XG5cblx0cHVibGljIG9uSW52YWxpZEZpbGVzKGZpbGVzOiBJbnZhbGlkRmlsZVtdKSB7XG5cdFx0dGhpcy5pbnZhbGlkRmlsZXMgPSBmaWxlcztcblx0fVxuXG5cdHB1YmxpYyBvblF1ZXVlZEZpbGVzKGZpbGVzOiBGaWxlW10pIHtcblx0XHR0aGlzLnF1ZXVlZEZpbGVzID0gdGhpcy5xdWV1ZWRGaWxlcy5jb25jYXQoZmlsZXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBVcGxvYWRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvdXBsb2FkLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXVwbG9hZC1pbnB1dCcsXG5cdHRlbXBsYXRlOiBgPGF1aS11cGxvYWQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChzZWxlY3RVcGxvYWRlZEZpbGVzKT1cIm9uVXBsb2FkKCRldmVudClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZC1tZXNzYWdlXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtbWVzc2FnZVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZC1kZXNjcmlwdGlvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWJ1dHRvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWJ1dHRvblwiPjwvbmctY29udGVudD48L2Rpdj5cbjwvYXVpLXVwbG9hZD5cbmAsXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogVXBsb2FkSW5wdXRDb21wb25lbnQsXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QElucHV0KCkgcHVibGljIG9wdGlvbnM6IFVwbG9hZE9wdGlvbnM7XG5cdEBJbnB1dCgpIHB1YmxpYyBmb3JtYXQ6IGFueTtcblxuXHRwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0cHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge31cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZCgpIHt9XG5cblx0cHVibGljIG9uVXBsb2FkKGZpbGVzKSB7XG5cdFx0Y29uc3QgZGF0YSA9ICh0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0KGZpbGVzKSA6IGZpbGVzKTtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShkYXRhKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuLi8uLi9jbGFzc2VzL3VwbG9hZGVyLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXVwbG9hZC1xdWV1ZScsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwibS11cGxvYWRfX2ZpbGVzIHUtbWFyZ2luLWJvdHRvbS14c1wiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWZpbGUtb1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLXVwbG9hZF9fZmlsZW5hbWVcIj57eyBmaWxlLm5hbWUgfX08L3NwYW4+XG5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlKGkpXCIgY2xhc3M9XCJtLXVwbG9hZF9fZGVsZXRlIGEtYnV0dG9uLXRyYW5zcGFyZW50IGEtYnV0dG9uLS1kZWZhdWx0IGEtYnV0dG9uLS1zbWFsbCBoYXMtaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbjwvdWw+XG5cbjxidXR0b24gY2xhc3M9XCJhLWJ1dHRvblwiICpuZ0lmPVwiZmlsZXMubGVuZ3RoID4gMFwiIChjbGljayk9XCJ1cGxvYWRGaWxlcygpXCI+VXBsb2FkITwvYnV0dG9uPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkUXVldWVDb21wb25lbnQge1xuXHRASW5wdXQoKSBwdWJsaWMgZmlsZXM6IEZpbGVbXTtcblx0QElucHV0KCkgcHVibGljIHVwbG9hZGVyO1xuXHRAT3V0cHV0KCkgcHVibGljIHVwbG9hZGVkRmlsZXM6IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdFtdPigpO1xuXG5cdHB1YmxpYyB1cGxvYWRQcm9ncmVzczogTnVtYmVyID0gMDtcblxuXHRwdWJsaWMgcmVtb3ZlKGluZGV4KSB7XG5cdFx0dGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0cHVibGljIHVwbG9hZEZpbGVzICgpIHtcblx0XHRjb25zdCBwcm9ncmVzcyA9IHVuZGVmaW5lZDtcblx0XHRjb25zdCBkYXRhID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMudXBsb2FkZXIudXBsb2FkRmlsZXModGhpcy5maWxlcykuc3Vic2NyaWJlKFxuXHRcdFx0KHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5wcm9ncmVzcykge1xuXHRcdFx0XHRcdHRoaXMudXBsb2FkUHJvZ3Jlc3MgPSBNYXRoLmZsb29yKHJlc3BvbnNlLnByb2dyZXNzICogMTAwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YSkge1xuXHRcdFx0XHRcdHRoaXMudXBsb2FkZWRGaWxlcy5lbWl0KHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuZmlsZXMgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnZhbGlkRmlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4uLy4uL2NsYXNzZXMvdXBsb2FkZXIuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdXBsb2FkLXpvbmUnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLXVwbG9hZFwiICpuZ0lmPVwidXBsb2FkZXIub3B0aW9ucy50eXBlID09PSAnZHJvcCdcIj5cblx0PGRpdiBjbGFzcz1cIm0tdXBsb2FkX19pbm5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJtLXVwbG9hZF9fZHJvcHpvbmVcIj5cblx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiICNmaWxlSW5wdXQgKGNoYW5nZSk9XCJ1cGRhdGVGaWxlcygpXCIgbXVsdGlwbGUgY2xhc3M9XCJtLXVwbG9hZF9faW5wdXRcIiAqbmdJZj1cIm11bHRpcGxlXCI+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwidXBkYXRlRmlsZXMoKVwiIGNsYXNzPVwibS11cGxvYWRfX2lucHV0XCIgKm5nSWY9XCIhbXVsdGlwbGVcIj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cIm0tdXBsb2FkX19jb250ZW50XCIgKm5nSWY9XCIhdXBsb2FkUHJvZ3Jlc3MgfHwgdXBsb2FkUHJvZ3Jlc3MgPT09IDBcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJtLXVwbG9hZF9fbWVzc2FnZVwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLW1lc3NhZ2VcIj48L25nLWNvbnRlbnQ+PC9wPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJ1cGxvYWRQcm9ncmVzcyA+IDBcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJtLXVwbG9hZF9fdXBsb2FkcyB1LXRleHQtYm9sZCB1LW1hcmdpbi1ib3R0b20teHNcIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWxlIG9mIHVwbG9hZGluZ0ZpbGVzOyBsZXQgbGFzdCA9IGxhc3RcIj5cblx0XHRcdFx0XHRcdHt7IGZpbGUubmFtZSB9fTxuZy1jb250YWluZXIgKm5nSWY9XCIhbGFzdFwiPiwgPC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGF1aS1wcm9ncmVzcy1iYXIgW3ZhbHVlXT1cInVwbG9hZFByb2dyZXNzXCIgbWF4PVwiMTAwXCI+PC9hdWktcHJvZ3Jlc3MtYmFyPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxzbWFsbCBjbGFzcz1cIm0tdXBsb2FkX19kZXNjcmlwdGlvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PC9uZy1jb250ZW50Pjwvc21hbGw+XG48L2Rpdj5cblxuPGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGF1aS11cGxvYWQtYnV0dG9uXCIgKGNsaWNrKT1cInRyaWdnZXJGaWxlKClcIiAqbmdJZj1cInVwbG9hZGVyLm9wdGlvbnMudHlwZSA9PT0gJ2J1dHRvbidcIj5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuXHQ8aW5wdXQgdHlwZT1cImZpbGVcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwidXBkYXRlRmlsZXMoKVwiIG11bHRpcGxlPVwibXVsdGlwbGVcIj5cbjwvYnV0dG9uPlxuYCxcblx0c3R5bGVzOiBbYC5hdWktdXBsb2FkLWJ1dHRvbiBpbnB1dFt0eXBlPWZpbGVde2Rpc3BsYXk6bm9uZX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkWm9uZUNvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIGZpbGVJbnB1dDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKSBwdWJsaWMgdXBsb2FkZXI6IFVwbG9hZGVyO1xuXHRASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGUgPSB0cnVlO1xuXHRAT3V0cHV0KCkgcHVibGljIHVwbG9hZGVkRmlsZXM6IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdFtdPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHF1ZXVlZEZpbGVzOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGludmFsaWRGaWxlczogRXZlbnRFbWl0dGVyPEludmFsaWRGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxJbnZhbGlkRmlsZVtdPigpO1xuXG5cdHB1YmxpYyBoYXNEcmFnT3ZlcjogQm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgY2xhc3NOYW1lczogc3RyaW5nO1xuXHRwdWJsaWMgdXBsb2FkUHJvZ3Jlc3M6IE51bWJlciA9IDA7XG5cdHB1YmxpYyB1cGxvYWRpbmdGaWxlczogRmlsZVtdO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMucHJldmVudEFuZFN0b3AoZXZlbnQpO1xuXHRcdHRoaXMuaGFzRHJhZ092ZXIgPSB0cnVlO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJhZ0xlYXZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcblx0XHR0aGlzLmhhc0RyYWdPdmVyID0gZmFsc2U7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJvcChldmVudDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XG5cdFx0dGhpcy5oYXNEcmFnT3ZlciA9IGZhbHNlO1xuXHRcdGNvbnN0IGZpbGVzID0gdGhpcy5maWxlTGlzdFRvQXJyYXkoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcblx0XHR0aGlzLmhhbmRsZUZpbGVzKGZpbGVzKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRmlsZSgpIHtcblx0XHR0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlRmlsZXMoKSB7XG5cdFx0Y29uc3QgZmlsZXM6IGFueVtdID0gdGhpcy5maWxlTGlzdFRvQXJyYXkodGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC5maWxlcyk7XG5cdFx0dGhpcy5oYW5kbGVGaWxlcyhmaWxlcyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGFuZGxlRmlsZXMgKGZpbGVzKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB0aGlzLnVwbG9hZGVyLnZhbGlkYXRlRmlsZXMoZmlsZXMpO1xuXHRcdHRoaXMuaW52YWxpZEZpbGVzLmVtaXQocmVzcG9uc2UuaW52YWxpZEZpbGVzKTtcblxuXHRcdGlmICh0aGlzLnVwbG9hZGVyLm9wdGlvbnMuYXV0b1VwbG9hZCAmJiByZXNwb25zZS52YWxpZEZpbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMudXBsb2FkRmlsZXMocmVzcG9uc2UudmFsaWRGaWxlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucXVldWVkRmlsZXMuZW1pdChyZXNwb25zZS52YWxpZEZpbGVzKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgdXBsb2FkRmlsZXMgKGZpbGVzKSB7XG5cdFx0Ly8gUmVzZXQgcHJvZ3Jlc3Ncblx0XHR0aGlzLnVwbG9hZFByb2dyZXNzID0gMDtcblx0XHR0aGlzLnVwbG9hZGluZ0ZpbGVzID0gZmlsZXM7XG5cblx0XHQvLyB1cGxvYWRcblx0XHR0aGlzLnVwbG9hZGVyLnVwbG9hZEZpbGVzKGZpbGVzKS5zdWJzY3JpYmUoXG5cdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnByb2dyZXNzKSB7XG5cdFx0XHRcdFx0dGhpcy51cGxvYWRQcm9ncmVzcyA9IE1hdGguZmxvb3IocmVzcG9uc2UucHJvZ3Jlc3MgKiAxMDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy51cGxvYWRlZEZpbGVzLmVtaXQocmVzcG9uc2UuZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQoZXJyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBmaWxlTGlzdFRvQXJyYXkobGlzdDogRmlsZUxpc3QpOiBPYmplY3RbXSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20obGlzdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcHJldmVudEFuZFN0b3AoZXZlbnQ6IGFueSk6IGFueSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXVwbG9hZGVkLWxpc3QnLFxuXHR0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cIm0tdXBsb2FkX19maWxlc1wiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgZmlsZSBvZiB1cGxvYWRlZEZpbGVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtZmlsZS1vXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm0tdXBsb2FkX19maWxlbmFtZVwiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cblxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZW1vdmUoZmlsZSwgaSlcIiBjbGFzcz1cIm0tdXBsb2FkX19kZWxldGUgYS1idXR0b24tdHJhbnNwYXJlbnQgYS1idXR0b24tLWRlZmF1bHQgYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuPC91bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZGVkTGlzdENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyB1cGxvYWRlZEZpbGVzID0gW107XG5cdEBPdXRwdXQoKSBwdWJsaWMgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyByZW1vdmUoZmlsZSwgaW5kZXgpIHtcblx0XHR0aGlzLmRlbGV0ZS5lbWl0KHtmaWxlLCBpbmRleH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVVBMT0FEX1ZBTElEQVRJT05fTUVTU0FHRVMgfSBmcm9tICcuLi91cGxvYWQuY29uZic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uTWVzc2FnZXNTZXJ2aWNlIHtcblx0cHVibGljIElOVkFMSURfRklMRV9UWVBFID0gJ0lOVkFMSURfRklMRV9UWVBFJztcblx0cHVibGljIElOVkFMSURfRklMRV9TSVpFID0gJ0lOVkFMSURfRklMRV9TSVpFJztcblx0cHVibGljIElOVkFMSURfTUlNRV9UWVBFID0gJ0lOVkFMSURfTUlNRV9UWVBFJztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFVQTE9BRF9WQUxJREFUSU9OX01FU1NBR0VTKSBwcml2YXRlIGluaXRWYWx1ZXNcblx0KSB7XG5cdFx0aWYgKGluaXRWYWx1ZXMuSU5WQUxJRF9GSUxFX1RZUEUpIHtcblx0XHRcdHRoaXMuSU5WQUxJRF9GSUxFX1RZUEUgPSBpbml0VmFsdWVzLklOVkFMSURfRklMRV9UWVBFO1xuXHRcdH1cblxuXHRcdGlmIChpbml0VmFsdWVzLklOVkFMSURfRklMRV9TSVpFKSB7XG5cdFx0XHR0aGlzLklOVkFMSURfRklMRV9TSVpFID0gaW5pdFZhbHVlcy5JTlZBTElEX0ZJTEVfU0laRTtcblx0XHR9XG5cblx0XHRpZiAoaW5pdFZhbHVlcy5JTlZBTElEX01JTUVfVFlQRSkge1xuXHRcdFx0dGhpcy5JTlZBTElEX01JTUVfVFlQRSA9IGluaXRWYWx1ZXMuSU5WQUxJRF9NSU1FX1RZUEU7XG5cdFx0fVxuXHR9XG59XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnZhbGlkRmlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5cbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdmFsaWRhdGlvbi1saXN0Jyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJtLXVwbG9hZF9fZmlsZXNcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGludmFsaWRGaWxlIG9mIGludmFsaWRGaWxlczsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwiaXMtZXJyb3JcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS13YXJuaW5nXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm0tdXBsb2FkX19maWxlbmFtZVwiPnt7IGludmFsaWRGaWxlLmZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLXVwbG9hZF9fZXJyb3JcIj57eyBmb3JtYXRSZWFzb25zKGludmFsaWRGaWxlLnJlYXNvbnMpIH19PC9zcGFuPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShpKVwiIGNsYXNzPVwibS11cGxvYWRfX2RlbGV0ZSBhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tZGFuZ2VyIGEtYnV0dG9uLS1zbWFsbCBoYXMtaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uTGlzdENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBpbnZhbGlkRmlsZXM6IEludmFsaWRGaWxlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VzU2VydmljZTogVmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZSkge31cblxuXHRwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmludmFsaWRGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0cHVibGljIGZvcm1hdFJlYXNvbnMocmVhc29uczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGZvciAgKGNvbnN0IHJlYXNvbiBvZiByZWFzb25zKSB7XG5cdFx0XHRyZXN1bHQucHVzaCh0aGlzLm1lc3NhZ2VzU2VydmljZVtyZWFzb25dKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcsICcpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL3VwbG9hZC91cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFVwbG9hZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi91cGxvYWQtaW5wdXQvdXBsb2FkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGxvYWRRdWV1ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLXF1ZXVlL3VwbG9hZC1xdWV1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBsb2FkWm9uZUNvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLXpvbmUvdXBsb2FkLXpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFVwbG9hZGVkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkZWQtbGlzdC91cGxvYWRlZC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1saXN0L3ZhbGlkYXRpb24tbGlzdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0VXBsb2FkQ29tcG9uZW50LFxuXHRVcGxvYWRJbnB1dENvbXBvbmVudCxcblx0VXBsb2FkUXVldWVDb21wb25lbnQsXG5cdFVwbG9hZFpvbmVDb21wb25lbnQsXG5cdFVwbG9hZGVkTGlzdENvbXBvbmVudCxcblx0VmFsaWRhdGlvbkxpc3RDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZSB9IGZyb20gJy4vdmFsaWRhdGlvbi1tZXNzYWdlcy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuXHRWYWxpZGF0aW9uTWVzc2FnZXNTZXJ2aWNlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgVVBMT0FEX1ZBTElEQVRJT05fTUVTU0FHRVMgfSBmcm9tICcuL3VwbG9hZC5jb25mJztcbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gJy4vdHlwZXMvdXBsb2FkLnR5cGVzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEJyb3dzZXJNb2R1bGUsXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFByb2dyZXNzQmFyTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uU2VydmljZXMsXG5cdFx0eyBwcm92aWRlOiBVUExPQURfVkFMSURBVElPTl9NRVNTQUdFUywgdXNlVmFsdWU6IHt9IH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZE1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHR2YWxpZGF0aW9uTWVzc2FnZXM6IFZhbGlkYXRpb25NZXNzYWdlcyA9IHt9XG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogVXBsb2FkTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogVVBMT0FEX1ZBTElEQVRJT05fTUVTU0FHRVMsIHVzZVZhbHVlOiB2YWxpZGF0aW9uTWVzc2FnZXMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIiwiZXhwb3J0IGNvbnN0IFdZU0lXWUdfREVGQVVMVF9DT05GSUcgPSB7XG5cdGJvZHlDbGFzczogJ2EtaW5wdXQgY2tlZGl0b3ItZWRpdGFibGUtYm9keScsXG5cdGNvbnRlbnRzQ3NzOiBbJ2h0dHBzOi8vY2RuLmFudHdlcnBlbi5iZS9jb3JlX2JyYW5kaW5nX3Njc3MvMi4wLjEvbWFpbi5taW4uY3NzJ10sXG5cdGZvcm1hdF90YWdzOiAncDtoMTtoMjtoMztoNDtoNTtoNicsXG5cdHRvb2xiYXJfQmFzaWM6IFtcblx0XHRbICdCb2xkJywgJ0l0YWxpYycsICdVbmRlcmxpbmUnLCAnLScsICdGb3JtYXQnLCAnLScsICdTb3VyY2UnIF0sXG5cdF0sXG5cdHJlbW92ZUJ1dHRvbnM6ICdTdHlsZXMnLFxuXHRyZW1vdmVQbHVnaW5zOiAnYWJvdXQnLFxuXHR0b29sYmFyOiBudWxsLFxuXHR1aUNvbG9yOiAnI2Q4ZDhkOCcsXG59O1xuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nLFxuXHRPbkluaXQsXG5cdGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDb250cm9sVmFsdWVBY2Nlc3Nvcixcblx0Rm9ybUNvbnRyb2wsXG5cdE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHROR19WQUxJREFUT1JTXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcblx0V1lTSVdZR19ERUZBVUxUX0NPTkZJR1xufSBmcm9tICcuLi8uLi93eXNpd3lnLmNvbmYnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktd3lzaXd5ZycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS13eXNpd3lnX19pbm5lclwiPlxuICAgIDxja2VkaXRvciBbKG5nTW9kZWwpXT1cImNrZWRpdG9yQ29udGVudFwiIFtjb25maWddPVwiY2tlZGl0b3JDb25maWdcIiBbZGVib3VuY2VdPVwiZGVib3VuY2VcIiAobmdNb2RlbENoYW5nZSk9XCJ3cml0ZVZhbHVlKCRldmVudClcIj48L2NrZWRpdG9yPlxuPC9kaXY+XG5gLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV3lzaXd5Z0NvbXBvbmVudCksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZm9yd2FyZC1yZWZcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIFd5c2l3eWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktd3lzaXd5ZycpIHNldENsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBhZGRpdGlvbmFsU3R5bGluZzogc3RyaW5nW107XG5cdEBJbnB1dCgpIGF2YWlsYWJsZVRhZ3M6IHN0cmluZztcblx0QElucHV0KCkgYmFzaWMgPSBmYWxzZTtcblx0QElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgdWlDb2xvdXI6IHN0cmluZztcblx0QElucHV0KCkgZGVib3VuY2U6IG51bWJlcjtcblxuXHRASW5wdXQoKSBjdXN0b21Db25maWc6IGFueTtcblxuXHRAT3V0cHV0KCkgZW1pdENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBja2VkaXRvckNvbnRlbnQ6IHN0cmluZztcblx0cHVibGljIGNrZWRpdG9yQ29uZmlnID0gV1lTSVdZR19ERUZBVUxUX0NPTkZJRztcblxuXHRwcml2YXRlIHVwZGF0ZU1vZGVsOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG5cdC8vIE5HX1ZBTFVFX0FDQ0VTU09SX0lOVEVSRkFDRVxuXHR3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNrZWRpdG9yQ29udGVudCA9IHZhbHVlO1xuXHRcdHRoaXMudXBkYXRlTW9kZWwodmFsdWUpO1xuXHRcdHRoaXMuZW1pdENvbnRlbnQuZW1pdCh0aGlzLmNrZWRpdG9yQ29udGVudCk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlOiBGdW5jdGlvbik6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlTW9kZWwgPSBvbkNoYW5nZTtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zZXRDb25maWcoKTtcblxuXHRcdGlmICghdGhpcy5ja2VkaXRvckNvbnRlbnQpIHtcblx0XHRcdHRoaXMuY2tlZGl0b3JDb250ZW50ID0gdGhpcy5wbGFjZWhvbGRlcjtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldENvbmZpZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jdXN0b21Db25maWcpIHtcblx0XHRcdHRoaXMuY2tlZGl0b3JDb25maWcgPSB0aGlzLmN1c3RvbUNvbmZpZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuYmFzaWMpIHtcblx0XHRcdFx0dGhpcy5ja2VkaXRvckNvbmZpZy50b29sYmFyID0gJ0Jhc2ljJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlVGFncykge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLmZvcm1hdF90YWdzID0gdGhpcy5hdmFpbGFibGVUYWdzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy51aUNvbG91cikge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLnVpQ29sb3IgPSB0aGlzLnVpQ29sb3VyO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5hZGRpdGlvbmFsU3R5bGluZykge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLmNvbnRlbnRzQ3NzLmNvbmNhdCh0aGlzLmFkZGl0aW9uYWxTdHlsaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IFd5c2l3eWdDb21wb25lbnQgfSBmcm9tICcuL3d5c2l3eWcvd3lzaXd5Zy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0V3lzaXd5Z0NvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICduZzItY2tlZGl0b3InO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0Q0tFZGl0b3JNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBXeXNpd3lnTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fc3ByZWFkIiwiQ29tcG9uZW50cyIsInRha2VVbnRpbCIsInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0E0QnFDLFVBQUMsSUFBUyxFQUFFLFlBQVk7WUFDM0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNFOzs7Ozs7O0lBeEJNLDhCQUFNOzs7OztjQUFDLElBQVcsRUFBRSxPQUEyQjs7UUFBM0Isd0JBQUEsRUFBQSxZQUEyQjtRQUNyRCxxQkFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNu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