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
class SearchService {
    constructor() {
        this.matchItemWithSearchString = (item, searchString) => {
            return String(item).toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        };
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    search(data, options = {}) {
        const /** @type {?} */ query = options.hasOwnProperty('query') ? options.query : '';
        const /** @type {?} */ minLength = options.hasOwnProperty('minLength') ? options.minLength : 0;
        const /** @type {?} */ key = options.hasOwnProperty('key') ? options.key : '';
        if ((!query && options.showAllByDefault) || query.length < minLength) {
            return [...data];
        }
        return [...data].filter(item => {
            if (key && !item.hasOwnProperty(key)) {
                return console.error(`"${key}" does not exist in item ${JSON.stringify(item, null, 2)}`);
            }
            if (key) {
                return this.matchItemWithSearchString(item[key], query);
            }
            return this.matchItemWithSearchString(item, query);
        });
    }
}
SearchService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AutoCompleteComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Inputmask = require('inputmask');
class MaskDirective {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setMask(this.auiMask);
    }
    /**
     * @param {?} mask
     * @return {?}
     */
    setMask(mask) {
        Inputmask(mask).mask(this.ref.nativeElement);
    }
}
MaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiMask]',
            },] },
];
/** @nocollapse */
MaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
MaskDirective.propDecorators = {
    auiMask: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Directives = [
    MaskDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MaskModule {
}
MaskModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    ...Directives,
                ],
                exports: [
                    ...Directives,
                ],
                providers: [],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    AutoCompleteComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AutoCompleteModule {
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
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
                providers: [
                    SearchService,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DATEPICKER_ERROR_LABELS = new InjectionToken('errorLabels');
const /** @type {?} */ DATEPICKER_DEFAULT_ERROR_LABELS = {
    ERRORS_INVALID_DATE: 'INVALID_DATE',
    ERRORS_INVALID_RANGE: 'INVALID_RANGE',
};
const /** @type {?} */ DATEPICKER_SEPARATOR_CHAR = '/';
const /** @type {?} */ DATEPICKER_DATE_MASK = ['99', '99', '9999'].join(DATEPICKER_SEPARATOR_CHAR);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DatepickerComponent {
    /**
     * @param {?=} monthLabels
     * @param {?=} weekdayLabels
     * @param {?=} errorLabels
     * @param {?=} calendarService
     * @param {?=} formBuilder
     */
    constructor(monthLabels = CALENDAR_DEFAULT_MONTH_LABELS, weekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS, errorLabels = DATEPICKER_DEFAULT_ERROR_LABELS, calendarService, formBuilder) {
        this.monthLabels = monthLabels;
        this.weekdayLabels = weekdayLabels;
        this.errorLabels = errorLabels;
        this.calendarService = calendarService;
        this.formBuilder = formBuilder;
        this.placeholder = 'dd/mm/yyyy';
        this.dateMask = { mask: DATEPICKER_DATE_MASK, 'showMaskOnHover': false };
        this.componentDestroyed$ = new Subject();
        this.onChange = () => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formControl = this.formBuilder.control('');
        this.formControl.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((value) => {
            if (value) {
                const /** @type {?} */ format = value.split(DATEPICKER_SEPARATOR_CHAR).reverse().join('-');
                const /** @type {?} */ date = DateHelper.parseDate(format);
                if (date) {
                    this.selectedDate = date;
                    this.onChange(date.toISOString());
                }
                else {
                    // Change value with original value (and not null or '') so we can add an error in the validate function
                    this.onChange(value);
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        const /** @type {?} */ date = DateHelper.parseDate(value);
        const /** @type {?} */ dateString = date ? this.formatDate(date) : '';
        this.selectedDate = date;
        this.formControl.setValue(dateString);
    }
    /**
     * @param {?} onChange
     * @return {?}
     */
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @param {?} result
     * @return {?}
     */
    selectDateFromCalendar(result) {
        if (result.complete) {
            this.formControl.setValue(this.formatDate(result.date));
            this.flyout.close();
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    formatDate(date) {
        return DateHelper.formatDate(date, 'DD/MM/YYYY', {
            leadingZero: true,
            monthLabels: this.monthLabels,
            weekdayLabels: this.weekdayLabels,
        });
    }
    /**
     * @param {?} ctrl
     * @return {?}
     */
    validate(ctrl) {
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
        const /** @type {?} */ date = new Date(ctrl.value);
        const /** @type {?} */ range = this.calendarService.getRangeForDate(date, this.range);
        return range.indexOf(date.getDate()) >= 0 ? {
            range: this.errorLabels.ERRORS_INVALID_RANGE,
        } : null;
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-datepicker',
                template: `<div class="aui-datepicker a-input__wrapper" auiFlyout>
	<input
		type="text"
		name="{{ name }}"
		id="{{ id }}"
		placeholder="{{ placeholder }}"
		[autocomplete]="autocomplete"
		[formControl]="formControl"
		[auiMask]="dateMask"
	>
   <span class="fa fa-calendar is-clickable" auiFlyoutAction></span>

	<div role="datepicker" class="m-datepicker m-datepicker--fixed" auiFlyoutZone>
		<aui-calendar [selectedDate]="selectedDate" [range]="range" (selectDate)="selectDateFromCalendar($event)"></aui-calendar>
	</div>
</div>
`,
                styles: [`.aui-datepicker,aui-datepicker{display:block}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatepickerComponent),
                        // tslint:disable-line:no-forward-ref
                        multi: true,
                    }, {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => DatepickerComponent),
                        // tslint:disable-line:no-forward-ref
                        multi: true,
                    }],
            },] },
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_MONTH_LABELS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [CALENDAR_WEEKDAY_LABELS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DATEPICKER_ERROR_LABELS,] }] },
    { type: CalendarService },
    { type: FormBuilder }
];
DatepickerComponent.propDecorators = {
    flyout: [{ type: ViewChild, args: [FlyoutDirective,] }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    range: [{ type: Input }],
    autocomplete: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$1 = [
    DatepickerComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS, ɵ2 = DATEPICKER_DEFAULT_ERROR_LABELS;
class DatepickerModule {
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @param {?} errorLabels
     * @return {?}
     */
    static forChild(weekdayLabels, monthLabels, errorLabels) {
        return {
            ngModule: DatepickerModule,
            providers: [
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
                { provide: DATEPICKER_ERROR_LABELS, useValue: errorLabels },
            ],
        };
    }
}
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
                declarations: [
                    ...Components$1,
                ],
                exports: [
                    ...Components$1,
                ],
                providers: [
                    { provide: CALENDAR_WEEKDAY_LABELS, useValue: ɵ0 },
                    { provide: CALENDAR_MONTH_LABELS, useValue: ɵ1 },
                    { provide: DATEPICKER_ERROR_LABELS, useValue: ɵ2 },
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FieldErrorComponent {
}
FieldErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-field-error',
                template: `<div class="u-bg-danger u-text-xlight">
    <p class="u-margin-xs">
        {{ error.message }}
    </p>
</div>
`,
                styles: [`:host{display:flex;flex-flow:column}`],
            },] },
];
FieldErrorComponent.propDecorators = {
    error: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FieldErrorsComponent {
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["errors"] && !changes["errors"].currentValue) {
            this.errorMessages = [];
            return;
        }
        const /** @type {?} */ errorList = (changes["errors"] ? changes["errors"].currentValue : this.errors);
        if (!errorList) {
            return;
        }
        this.errorMessages = Object.keys(errorList).map((key) => {
            return {
                message: this.getMessage(key, errorList[key]),
            };
        });
    }
    /**
     * @param {?} type
     * @param {?} params
     * @return {?}
     */
    getMessage(type, params) {
        if (!this.errorDefinition || !this.errorDefinition.hasOwnProperty(type)) {
            // tslint:disable-next-line:max-line-length
            return console.warn(`No errordefinition found for validator of type '${type}'. Please provide one through the [errorDefinition] attribute.`);
        }
        return this.errorDefinition[type](params);
    }
}
FieldErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-field-errors',
                template: `<div class="aui-field-errors" *ngIf="errors">
    <aui-field-error class="aui-field-error" *ngFor="let error of errorMessages" [error]="error"></aui-field-error>
</div>`,
                styles: [`:host{display:block}`],
            },] },
];
FieldErrorsComponent.propDecorators = {
    errors: [{ type: Input }],
    errorDefinition: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$2 = [
    FieldErrorComponent,
    FieldErrorsComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FieldErrorsModule {
}
FieldErrorsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LabelsModule,
                ],
                declarations: [
                    ...Components$2,
                ],
                exports: [
                    ...Components$2,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RangeSliderComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
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
        this.propagateChange = (value) => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.step > 0) {
            for (let /** @type {?} */ i = 0; i <= this.max; i += Number(this.step)) {
                this.steps.push(i);
            }
        }
        this.startPercentage = this.startToPercentage();
        if (this.end) {
            this.endPercentage = this.endToPercentage();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
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
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} handle
     * @return {?}
     */
    onMouseDown(handle) {
        this.active = handle;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        if (this.active === 'start') {
            this.setStart(this.round(this.start, this.step, 0));
            this.startPercentage = this.startToPercentage();
        }
        if (this.active === 'end') {
            this.setEnd(this.round(this.end, this.step, 0));
            this.endPercentage = this.endToPercentage();
        }
        this.active = null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseMove(event) {
        if (!this.active) {
            return;
        }
        event.preventDefault(); // Do not select text while sliding
        const /** @type {?} */ x = (/** @type {?} */ (event)).x !== undefined ? (/** @type {?} */ (event)).x : (/** @type {?} */ (event)).targetTouches[0].pageX;
        const /** @type {?} */ rect = this.elRef.nativeElement.getBoundingClientRect();
        const /** @type {?} */ newPercentage = this.calcPercentage(x, rect.width, rect.left);
        this.updateHandle(newPercentage);
    }
    /**
     * @param {?} newPercentage
     * @return {?}
     */
    updateHandle(newPercentage) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setStart(value) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setEnd(value) {
        this.end = value;
        this.propagateChange(/** @type {?} */ ({
            start: this.start,
            end: this.end,
        }));
    }
    /**
     * @param {?} number
     * @param {?} increment
     * @param {?} offset
     * @return {?}
     */
    round(number, increment, offset) {
        if (increment > 0) {
            return Math.round((number - offset) / increment) * increment + offset;
        }
        return number;
    }
    /**
     * @return {?}
     */
    startToPercentage() {
        return Math.round((this.start - this.min) / (this.max - this.min) * 100);
    }
    /**
     * @return {?}
     */
    percentageToStart() {
        return Math.round((this.startPercentage / 100) * (this.max - this.min) + Number(this.min));
    }
    /**
     * @return {?}
     */
    endToPercentage() {
        return Math.round((Number(this.end) - this.min) / (this.max - this.min) * 100);
    }
    /**
     * @return {?}
     */
    percentageToEnd() {
        return Math.round((this.endPercentage / 100) * (this.max - this.min) + Number(this.min));
    }
    /**
     * @return {?}
     */
    minimalDistanceNotRespected() {
        return this.minimalDistance >= 0 && this.end && this.start > Number(this.end) - this.minimalDistance;
    }
    /**
     * @param {?} mouseX
     * @param {?} width
     * @param {?} offsetLeft
     * @return {?}
     */
    calcPercentage(mouseX, width, offsetLeft) {
        const /** @type {?} */ mousePos = mouseX - offsetLeft;
        let /** @type {?} */ newPercentage = Math.round((mousePos / width) * 100);
        if (newPercentage > 100) {
            newPercentage = 100;
        }
        if (newPercentage < 0) {
            newPercentage = 0;
        }
        return newPercentage;
    }
}
RangeSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-range-slider',
                template: `<div class="m-range-slider__inner">
    <div class="m-range-slider__bar" [style.left]="(endPercentage ? startPercentage + '%' : false)" [style.width]="(endPercentage ? endPercentage - startPercentage +'%' : startPercentage +'%')"></div>
    <span (touchstart)="onMouseDown('start')" (mousedown)="onMouseDown('start')" class="m-range-slider__handle" [style.left]="startPercentage + '%'">
        <div class="m-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top">
            <p>{{ labelBefore }}{{ start }}{{ labelAfter }}</p>
        </div>
    </span>

    <span *ngIf="end" (touchstart)="onMouseDown('end')" (mousedown)="onMouseDown('end')" class="m-range-slider__handle" [style.left]="endPercentage + '%'">
        <div class="m-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top">
            <p>{{ labelBefore }}{{ end }}{{ labelAfter }}</p>
        </div>
    </span>
</div>

<div class="m-range-slider__steps">
    <div class="m-range-slider__step" *ngFor="let step of steps; let i = index"></div>
</div>

<div class="m-range-slider__step-labels">
    <div class="m-range-slider__step" *ngFor="let step of steps; let i = index">{{ step }}</div>
</div>
`,
                styles: [`:host{display:block;position:relative}.m-range-slider__handle{z-index:10}.m-range-slider__tooltip{white-space:nowrap}.m-range-slider__steps{display:flex;justify-content:space-between;width:100%;position:absolute;top:0;left:0;right:0;padding:.25rem;z-index:8}.m-range-slider__steps .m-range-slider__step{width:16px;height:16px;background-color:#b0b0b0;text-align:center;border-radius:50%;margin:2px}.m-range-slider__step-labels{display:flex;justify-content:space-between;margin-top:1rem;color:#444;font-size:14px}.m-range-slider__step-labels .m-range-slider__step{width:25px}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RangeSliderComponent),
                        // tslint:disable-line
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
RangeSliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$3 = [
    RangeSliderComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RangeSliderModule {
}
RangeSliderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                ],
                declarations: [
                    ...Components$3,
                ],
                exports: [
                    ...Components$3,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SearchFilterComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$4 = [
    SearchFilterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SearchFilterModule {
}
SearchFilterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule,
                    FlyoutModule,
                ],
                declarations: [
                    ...Components$4,
                ],
                exports: [
                    ...Components$4,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimePickerValidators {
    /**
     * @param {?} time
     * @return {?}
     */
    static minTime(time) {
        const /** @type {?} */ validator = (control) => {
            const /** @type {?} */ splittedControlValue = control.value.split(':');
            const /** @type {?} */ controlHours = parseInt(splittedControlValue[0], 10);
            const /** @type {?} */ controlMinutes = parseInt(splittedControlValue[1], 10);
            const /** @type {?} */ splittedMinTime = time.split(':');
            const /** @type {?} */ minHours = parseInt(splittedMinTime[0], 10);
            const /** @type {?} */ minMinutes = parseInt(splittedMinTime[1], 10);
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
    }
    /**
     * @param {?} time
     * @return {?}
     */
    static maxTime(time) {
        const /** @type {?} */ validator = (control) => {
            const /** @type {?} */ splittedControlValue = control.value.split(':');
            const /** @type {?} */ controlHours = parseInt(splittedControlValue[0], 10);
            const /** @type {?} */ controlMinutes = parseInt(splittedControlValue[1], 10);
            const /** @type {?} */ splittedMinTime = time.split(':');
            const /** @type {?} */ maxHours = parseInt(splittedMinTime[0], 10);
            const /** @type {?} */ maxMinutes = parseInt(splittedMinTime[1], 10);
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
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const TimepickerInputSize = {
    Auto: 'auto',
    Small: 'small',
    Large: 'large',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimepickerComponent {
    /**
     * @param {?} formBuilder
     * @param {?} renderer
     */
    constructor(formBuilder, renderer) {
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
    ngOnInit() {
        this.shouldUseFallback = this.supportsNativeTimepicker();
        this.minutes = this.getMinutes();
        this.hours = this.getHours();
        this.fallbackForm = this.formBuilder.group({
            hours: null,
            minutes: null,
        });
        this.fallbackForm.valueChanges
            .pipe(takeUntil$1(this.componentDestroyed$))
            .subscribe((formData) => {
            if (formData.hours && formData.minutes) {
                this.updateModel(`${formData.hours}:${formData.minutes}`);
            }
            else {
                this.updateModel('');
            }
        });
        this.timeControl.valueChanges
            .pipe(takeUntil$1(this.componentDestroyed$))
            .subscribe((time) => {
            this.updateModel(time);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.timeControl.setValue(value, { emitEvent: false });
        if (value) {
            const /** @type {?} */ splitted = value.split(':');
            this.fallbackForm.get('hours').setValue(splitted[0], { emitEvent: false });
            this.fallbackForm.get('minutes').setValue(splitted[1], { emitEvent: false });
        }
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
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.timeControl.disable({ emitEvent: false });
            this.fallbackForm.disable({ emitEvent: false });
        }
        else {
            this.timeControl.enable({ emitEvent: false });
            this.fallbackForm.enable({ emitEvent: false });
        }
    }
    /**
     * @return {?}
     */
    supportsNativeTimepicker() {
        const /** @type {?} */ element = this.renderer.createElement('input');
        element.type = 'time';
        return element.type === 'text';
    }
    /**
     * @return {?}
     */
    getMinutes() {
        return Array(60).fill('').map((value, index) => {
            return DateHelper.addLeadingZero(index);
        });
    }
    /**
     * @return {?}
     */
    getHours() {
        return Array(24).fill('').map((value, index) => {
            return DateHelper.addLeadingZero(index);
        });
    }
}
TimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-timepicker',
                template: `<div class="a-input" [class]="'a-input--' + size" [ngClass]="{ 'has-error': hasError }" *ngIf="!shouldUseFallback">
    <input type="time" [formControl]="timeControl">
</div>

<div *ngIf="shouldUseFallback" [formGroup]="fallbackForm">
    <div class="a-input has-icon-right" [class]="'a-input--' + size" [ngClass]="{ 'has-error': hasError }">
        <div class="a-input__wrapper">
            <select formControlName="hours">
                <option disabled value="null">{{ hoursPlaceholder }}</option>
                <option *ngFor="let hour of hours" [value]="hour">{{ hour }}</option>
            </select>
            <span class="fa fa-angle-down"></span>
        </div>
    </div>

    <div class="a-input has-icon-right" [class]="'a-input--' + size" [ngClass]="{ 'has-error': hasError }">
        <div class="a-input__wrapper">
            <select formControlName="minutes">
                <option disabled value="null">{{ minutesPlaceholder }}</option>
                <option *ngFor="let minute of minutes" [value]="minute">{{ minute }}</option>
            </select>
            <span class="fa fa-angle-down"></span>
        </div>
    </div>
</div>
`,
                styles: [`:host{display:block}:host .a-input{display:inline-block}:host::before{z-index:10}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TimepickerComponent),
                        // tslint:disable-line:no-forward-ref
                        multi: true,
                    }],
            },] },
];
/** @nocollapse */
TimepickerComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Renderer2 }
];
TimepickerComponent.propDecorators = {
    hoursPlaceholder: [{ type: Input }],
    minutesPlaceholder: [{ type: Input }],
    hasError: [{ type: Input }],
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$5 = [
    TimepickerComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimepickerModule {
}
TimepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ReactiveFormsModule,
                    CommonModule,
                ],
                declarations: [
                    ...Components$5,
                ],
                exports: [
                    ...Components$5,
                ],
                providers: [],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ UPLOAD_OPTIONS_DEFAULT = {
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
const /** @type {?} */ UPLOAD_VALIDATION_MESSAGES = new InjectionToken('uploadValidationMessages');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Uploader {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.options = UPLOAD_OPTIONS_DEFAULT;
        this.setOptions(options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign({}, this.options, options);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    uploadFiles(files) {
        const /** @type {?} */ formData = this.filesToFormData(files);
        return Observable.create(observer => {
            const /** @type {?} */ xhr = new XMLHttpRequest();
            // Progress callback
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    const /** @type {?} */ percentComplete = e.loaded / e.total;
                    observer.next({
                        progress: percentComplete,
                        data: null,
                    });
                }
            });
            // Complete callback
            xhr.onload = () => {
                observer.next({
                    progress: 1,
                    data: xhr.response,
                });
                // observer.complete();
            };
            // Do request
            xhr.responseType = 'json';
            xhr.open('post', this.options.url);
            xhr.send(formData);
        });
    }
    /**
     * @param {?} files
     * @return {?}
     */
    validateFiles(files) {
        const /** @type {?} */ validFiles = [];
        const /** @type {?} */ invalidFiles = [];
        if (files.length > 0) {
            for (const /** @type {?} */ file of files) {
                const /** @type {?} */ errors = [];
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
        return {
            validFiles: validFiles,
            invalidFiles: invalidFiles,
        };
    }
    /**
     * @param {?} files
     * @return {?}
     */
    filesToFormData(files) {
        const /** @type {?} */ formData = new FormData();
        if (!this.options.url || this.options.url === '') {
            throw new Error('Define the upload url.');
        }
        for (const /** @type {?} */ file of files) {
            formData.append('file', file);
        }
        return formData;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getFileExtension(file) {
        return file.name.split('.')[file.name.split('.').length - 1];
    }
    /**
     * @param {?} file
     * @return {?}
     */
    validateFileType(file) {
        const /** @type {?} */ allowedFileTypes = this.options.allowedFileTypes;
        const /** @type {?} */ ext = this.getFileExtension(file);
        // Filter defined?
        if (!Array.isArray(allowedFileTypes) || allowedFileTypes.length === 0) {
            return true;
        }
        // Make allowedFileTypes case insensitive
        const /** @type {?} */ toUpper = (x) => x.toUpperCase();
        const /** @type {?} */ allowedFileTypesToUpper = allowedFileTypes.map(toUpper);
        return allowedFileTypesToUpper.lastIndexOf(ext.toUpperCase()) !== -1;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    validateFileSize(file) {
        const /** @type {?} */ maxFileSize = this.options.maxFileSize;
        // Filter defined?
        if (!maxFileSize || maxFileSize === 0) {
            return true;
        }
        return maxFileSize > file.size;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    validateMimeType(file) {
        const /** @type {?} */ allowedMimeTypes = this.options.allowedMimeTypes;
        // Filter defined?
        if (!Array.isArray(allowedMimeTypes) || allowedMimeTypes.length === 0) {
            return true;
        }
        return allowedMimeTypes.lastIndexOf(file.type) !== -1;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UploadComponent {
    constructor() {
        this.options = UPLOAD_OPTIONS_DEFAULT;
        this.selectUploadedFiles = new EventEmitter();
        this.uploadedFiles = [];
        this.invalidFiles = [];
        this.queuedFiles = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.uploader = new Uploader(this.options);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    onUploadedFiles(files) {
        this.uploadedFiles = this.uploadedFiles.concat(files);
        this.selectUploadedFiles.emit(this.uploadedFiles);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    onInvalidFiles(files) {
        this.invalidFiles = files;
    }
    /**
     * @param {?} files
     * @return {?}
     */
    onQueuedFiles(files) {
        this.queuedFiles = this.queuedFiles.concat(files);
    }
}
UploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-upload',
                template: `<div class="aui-upload">
    <aui-upload-zone [uploader]="uploader" (queuedFiles)="onQueuedFiles($event)" (uploadedFiles)="onUploadedFiles($event)" (invalidFiles)="onInvalidFiles($event)">
        <div class="aui-upload-message"><ng-content select=".aui-upload-message"></ng-content></div>
        <div class="aui-upload-description"><ng-content select=".aui-upload-description"></ng-content></div>
        <div class="aui-upload-button"><ng-content select=".aui-upload-button"></ng-content></div>
    </aui-upload-zone>
    <aui-validation-list [invalidFiles]="invalidFiles"></aui-validation-list>
    <aui-upload-queue *ngIf="!options?.autoUpload" [uploader]="uploader" [files]="queuedFiles" (uploadedFiles)="onUploadedFiles($event)"></aui-upload-queue>
</div>
`,
            },] },
];
UploadComponent.propDecorators = {
    options: [{ type: Input }],
    selectUploadedFiles: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UploadInputComponent {
    constructor() {
        this.propagateChange = (_) => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @param {?} files
     * @return {?}
     */
    onUpload(files) {
        const /** @type {?} */ data = (this.format ? this.format(files) : files);
        this.propagateChange(data);
    }
}
UploadInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-upload-input',
                template: `<aui-upload [options]="options" (selectUploadedFiles)="onUpload($event)">
    <div class="aui-upload-message"><ng-content select=".aui-upload-message"></ng-content></div>
    <div class="aui-upload-description"><ng-content select=".aui-upload-description"></ng-content></div>
    <div class="aui-upload-button"><ng-content select=".aui-upload-button"></ng-content></div>
</aui-upload>
`,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UploadQueueComponent {
    constructor() {
        this.uploadedFiles = new EventEmitter();
        this.uploadProgress = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        this.files.splice(index, 1);
    }
    /**
     * @return {?}
     */
    uploadFiles() {
        this.uploader.uploadFiles(this.files).subscribe((response) => {
            if (response.progress) {
                this.uploadProgress = Math.floor(response.progress * 100);
            }
            if (response.data) {
                this.uploadedFiles.emit(response.data);
                this.files = [];
            }
        });
    }
}
UploadQueueComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-upload-queue',
                template: `<ul class="m-upload__files u-margin-bottom-xs">
    <li *ngFor="let file of files; let i = index">
        <span class="fa fa-file-o"></span>
        <span class="m-upload__filename">{{ file.name }}</span>

        <button (click)="remove(i)" class="m-upload__delete a-button-transparent a-button--default a-button--small has-icon">
            <i class="fa fa-close"></i>
        </button>
    </li>
</ul>

<button class="a-button" *ngIf="files.length > 0" (click)="uploadFiles()">Upload!</button>
`,
            },] },
];
UploadQueueComponent.propDecorators = {
    files: [{ type: Input }],
    uploader: [{ type: Input }],
    uploadedFiles: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UploadZoneComponent {
    constructor() {
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
    onDragOver(event) {
        this.preventAndStop(event);
        this.hasDragOver = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this.preventAndStop(event);
        this.hasDragOver = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        this.preventAndStop(event);
        this.hasDragOver = false;
        const /** @type {?} */ files = this.fileListToArray(event.dataTransfer.files);
        this.handleFiles(files);
    }
    /**
     * @return {?}
     */
    triggerFile() {
        this.fileInput.nativeElement.click();
    }
    /**
     * @return {?}
     */
    updateFiles() {
        const /** @type {?} */ files = this.fileListToArray(this.fileInput.nativeElement.files);
        this.handleFiles(files);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    handleFiles(files) {
        const /** @type {?} */ response = this.uploader.validateFiles(files);
        this.invalidFiles.emit(response.invalidFiles);
        if (this.uploader.options.autoUpload && response.validFiles.length > 0) {
            this.uploadFiles(response.validFiles);
        }
        else {
            this.queuedFiles.emit(response.validFiles);
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    uploadFiles(files) {
        // Reset progress
        this.uploadProgress = 0;
        this.uploadingFiles = files;
        // upload
        this.uploader.uploadFiles(files).subscribe((response) => {
            if (response.progress) {
                this.uploadProgress = Math.floor(response.progress * 100);
            }
            if (response.data) {
                this.uploadedFiles.emit(response.data);
            }
        }, (err) => {
            console.log(err);
        });
    }
    /**
     * @param {?} list
     * @return {?}
     */
    fileListToArray(list) {
        return Array.from(list);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
UploadZoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-upload-zone',
                template: `<div class="m-upload" *ngIf="uploader.options.type === 'drop'">
	<div class="m-upload__inner">
		<div class="m-upload__dropzone">
			<input type="file" #fileInput (change)="updateFiles()" multiple class="m-upload__input" *ngIf="multiple">
			<input type="file" #fileInput (change)="updateFiles()" class="m-upload__input" *ngIf="!multiple">

			<div class="m-upload__content" *ngIf="!uploadProgress || uploadProgress === 0">
				<p class="m-upload__message"><ng-content select=".aui-upload-message"></ng-content></p>
			</div>

			<ng-container *ngIf="uploadProgress > 0">
				<p class="m-upload__uploads u-text-bold u-margin-bottom-xs">
					<ng-container *ngFor="let file of uploadingFiles; let last = last">
						{{ file.name }}<ng-container *ngIf="!last">, </ng-container>
					</ng-container>
				</p>
				<aui-progress-bar [value]="uploadProgress" max="100"></aui-progress-bar>
			</ng-container>
		</div>
	</div>

	<small class="m-upload__description"><ng-content select=".aui-upload-description"></ng-content></small>
</div>

<button class="a-button aui-upload-button" (click)="triggerFile()" *ngIf="uploader.options.type === 'button'">
	<ng-content select=".aui-upload-button"></ng-content>
	<input type="file" #fileInput (change)="updateFiles()" multiple="multiple">
</button>
`,
                styles: [`.aui-upload-button input[type=file]{display:none}`],
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UploadedListComponent {
    constructor() {
        this.uploadedFiles = [];
        this.delete = new EventEmitter();
    }
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    remove(file, index) {
        this.delete.emit({ file, index });
    }
}
UploadedListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-uploaded-list',
                template: `<ul class="m-upload__files">
    <li *ngFor="let file of uploadedFiles; let i = index">
        <span class="fa fa-file-o"></span>
        <span class="m-upload__filename">{{ file.name }}</span>

        <button (click)="remove(file, i)" class="m-upload__delete a-button-transparent a-button--default a-button--small has-icon">
            <i class="fa fa-close"></i>
        </button>
    </li>
</ul>
`,
            },] },
];
UploadedListComponent.propDecorators = {
    uploadedFiles: [{ type: Input }],
    delete: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ValidationMessagesService {
    /**
     * @param {?} initValues
     */
    constructor(initValues) {
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
}
ValidationMessagesService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ValidationMessagesService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [UPLOAD_VALIDATION_MESSAGES,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ValidationListComponent {
    /**
     * @param {?} messagesService
     */
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.invalidFiles = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        this.invalidFiles.splice(index, 1);
    }
    /**
     * @param {?} reasons
     * @return {?}
     */
    formatReasons(reasons) {
        const /** @type {?} */ result = [];
        for (const /** @type {?} */ reason of reasons) {
            result.push(this.messagesService[reason]);
        }
        return result.join(', ');
    }
}
ValidationListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-validation-list',
                template: `<ul class="m-upload__files">
    <li *ngFor="let invalidFile of invalidFiles; let i = index" class="is-error">
        <span class="fa fa-warning"></span>
        <span class="m-upload__filename">{{ invalidFile.file.name }}</span>
        <span class="m-upload__error">{{ formatReasons(invalidFile.reasons) }}</span>

        <button (click)="remove(i)" class="m-upload__delete a-button-transparent a-button--danger a-button--small has-icon">
            <i class="fa fa-close"></i>
        </button>
    </li>
</ul>
`,
            },] },
];
/** @nocollapse */
ValidationListComponent.ctorParameters = () => [
    { type: ValidationMessagesService }
];
ValidationListComponent.propDecorators = {
    invalidFiles: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$6 = [
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
const /** @type {?} */ Services = [
    ValidationMessagesService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0$1 = {};
class UploadModule {
    /**
     * @param {?=} validationMessages
     * @return {?}
     */
    static forChild(validationMessages = {}) {
        return {
            ngModule: UploadModule,
            providers: [
                { provide: UPLOAD_VALIDATION_MESSAGES, useValue: validationMessages },
            ],
        };
    }
}
UploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule,
                    CommonModule,
                    ProgressBarModule,
                    FormsModule,
                ],
                declarations: [
                    ...Components$6,
                ],
                exports: [
                    ...Components$6,
                ],
                providers: [
                    ...Services,
                    { provide: UPLOAD_VALIDATION_MESSAGES, useValue: ɵ0$1 },
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ WYSIWYG_DEFAULT_CONFIG = {
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
class WysiwygComponent {
    constructor() {
        this.setClass = true;
        this.basic = false;
        this.emitContent = new EventEmitter();
        this.ckeditorConfig = WYSIWYG_DEFAULT_CONFIG;
        this.updateModel = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.ckeditorContent = value;
        this.updateModel(value);
        this.emitContent.emit(this.ckeditorContent);
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
        this.setConfig();
        if (!this.ckeditorContent) {
            this.ckeditorContent = this.placeholder;
        }
    }
    /**
     * @return {?}
     */
    setConfig() {
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
    }
}
WysiwygComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-wysiwyg',
                template: `<div class="aui-wysiwyg__inner">
    <ckeditor [(ngModel)]="ckeditorContent" [config]="ckeditorConfig" [debounce]="debounce" (ngModelChange)="writeValue($event)"></ckeditor>
</div>
`,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => WysiwygComponent),
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$7 = [
    WysiwygComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WysiwygModule {
}
WysiwygModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CKEditorModule,
                ],
                declarations: [
                    ...Components$7,
                ],
                exports: [
                    ...Components$7,
                ],
            },] },
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Zvcm1zL2xpYi9zaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UudHMiLCJuZzovL2Zvcm1zL2xpYi9hdXRvLWNvbXBsZXRlL2NvbXBvbmVudHMvYXV0by1jb21wbGV0ZS9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL21hc2svZGlyZWN0aXZlcy9tYXNrLmRpcmVjdGl2ZS50cyIsIm5nOi8vZm9ybXMvbGliL21hc2svZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vZm9ybXMvbGliL21hc2svbWFzay5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi9hdXRvLWNvbXBsZXRlL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUubW9kdWxlLnRzIiwibmc6Ly9mb3Jtcy9saWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbmYudHMiLCJuZzovL2Zvcm1zL2xpYi9kYXRlcGlja2VyL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL2RhdGVwaWNrZXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vZm9ybXMvbGliL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi9maWVsZC1lcnJvcnMvY29tcG9uZW50cy9maWVsZC1lcnJvci9maWVsZC1lcnJvci5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi9maWVsZC1lcnJvcnMvY29tcG9uZW50cy9maWVsZC1lcnJvcnMvZmllbGQtZXJyb3JzLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL2ZpZWxkLWVycm9ycy9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9mb3Jtcy9saWIvZmllbGQtZXJyb3JzL2ZpZWxkLWVycm9ycy5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi9yYW5nZS1zbGlkZXIvY29tcG9uZW50cy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL3JhbmdlLXNsaWRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9mb3Jtcy9saWIvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi9zZWFyY2gtZmlsdGVyL2NvbXBvbmVudHMvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL3NlYXJjaC1maWx0ZXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vZm9ybXMvbGliL3NlYXJjaC1maWx0ZXIvc2VhcmNoLWZpbHRlci5tb2R1bGUudHMiLCJuZzovL2Zvcm1zL2xpYi90aW1lcGlja2VyL2NsYXNzZXMvdGltZXBpY2tlci52YWxpZGF0b3JzLnRzIiwibmc6Ly9mb3Jtcy9saWIvdGltZXBpY2tlci90eXBlcy90aW1lcGlja2VyLnR5cGVzLnRzIiwibmc6Ly9mb3Jtcy9saWIvdGltZXBpY2tlci9jb21wb25lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi90aW1lcGlja2VyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi90aW1lcGlja2VyL3RpbWVwaWNrZXIubW9kdWxlLnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL3VwbG9hZC5jb25mLnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL2NsYXNzZXMvdXBsb2FkZXIuY2xhc3MudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC50cyIsIm5nOi8vZm9ybXMvbGliL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC1pbnB1dC91cGxvYWQtaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL2NvbXBvbmVudHMvdXBsb2FkLXF1ZXVlL3VwbG9hZC1xdWV1ZS5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvY29tcG9uZW50cy91cGxvYWQtem9uZS91cGxvYWQtem9uZS5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvY29tcG9uZW50cy91cGxvYWRlZC1saXN0L3VwbG9hZGVkLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL3NlcnZpY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXMuc2VydmljZS50cyIsIm5nOi8vZm9ybXMvbGliL3VwbG9hZC9jb21wb25lbnRzL3ZhbGlkYXRpb24tbGlzdC92YWxpZGF0aW9uLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9mb3Jtcy9saWIvdXBsb2FkL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvc2VydmljZXMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi91cGxvYWQvdXBsb2FkLm1vZHVsZS50cyIsIm5nOi8vZm9ybXMvbGliL3d5c2l3eWcvd3lzaXd5Zy5jb25mLnRzIiwibmc6Ly9mb3Jtcy9saWIvd3lzaXd5Zy9jb21wb25lbnRzL3d5c2l3eWcvd3lzaXd5Zy5jb21wb25lbnQudHMiLCJuZzovL2Zvcm1zL2xpYi93eXNpd3lnL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2Zvcm1zL2xpYi93eXNpd3lnL3d5c2l3eWcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2VhcmNoT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL3NlYXJjaC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcblx0cHVibGljIHNlYXJjaChkYXRhOiBhbnlbXSwgb3B0aW9uczogU2VhcmNoT3B0aW9ucyA9IHt9KTogYW55W10ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0gb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSA/IG9wdGlvbnMucXVlcnkgOiAnJztcblx0XHRjb25zdCBtaW5MZW5ndGggPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdtaW5MZW5ndGgnKSA/IG9wdGlvbnMubWluTGVuZ3RoIDogMDtcblx0XHRjb25zdCBrZXkgPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdrZXknKSA/IG9wdGlvbnMua2V5IDogJyc7XG5cblx0XHRpZiAoKCFxdWVyeSAmJiBvcHRpb25zLnNob3dBbGxCeURlZmF1bHQpIHx8IHF1ZXJ5Lmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIFsuLi5kYXRhXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gWy4uLmRhdGFdLmZpbHRlcihpdGVtID0+IHtcblx0XHRcdGlmIChrZXkgJiYgIWl0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihgXCIke2tleX1cIiBkb2VzIG5vdCBleGlzdCBpbiBpdGVtICR7SlNPTi5zdHJpbmdpZnkoaXRlbSwgbnVsbCwgMil9YCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hJdGVtV2l0aFNlYXJjaFN0cmluZyhpdGVtW2tleV0sIHF1ZXJ5KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hJdGVtV2l0aFNlYXJjaFN0cmluZyhpdGVtLCBxdWVyeSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG1hdGNoSXRlbVdpdGhTZWFyY2hTdHJpbmcgPSAoaXRlbTogYW55LCBzZWFyY2hTdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gU3RyaW5nKGl0ZW0pLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hTdHJpbmcudG9Mb3dlckNhc2UoKSkgPiAtMTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRFbGVtZW50UmVmLFxuXHRWaWV3Q2hpbGQsXG5cdENvbnRlbnRDaGlsZCxcblx0VGVtcGxhdGVSZWYsXG5cdGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBnZXQsIGlzRXF1YWwgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBGbHlvdXREaXJlY3RpdmUsIEZseW91dFpvbmVEaXJlY3RpdmUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2ZseW91dCc7XG5cbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYXV0by1jb21wbGV0ZScsXG5cdHN0eWxlczogW2AuYXVpLWF1dG8tY29tcGxldGUsLmF1aS1hdXRvLWNvbXBsZXRlX19pbmZve2Rpc3BsYXk6YmxvY2t9YF0sXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tZmx5b3V0LS1zY3JvbGxhYmxlIG0tZmx5b3V0LS1mdWxsIGF1aS1hdXRvLWNvbXBsZXRlXCIgYXVpRmx5b3V0IFt0b2dnbGVDbGlja109XCJmYWxzZVwiIChjbG9zZWQpPVwib25GbHlvdXRDbG9zZWQoKVwiPlxuXHQ8aW5wdXQgKm5nSWY9XCIhbWFza1wiXG5cdFx0W2lkXT1cImlkXCJcblx0XHRbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuXHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRhdWlGbHlvdXRBY3Rpb25cblx0XHRbKG5nTW9kZWwpXT1cInF1ZXJ5XCJcblx0XHQobmdNb2RlbENoYW5nZSk9XCJkb1NlYXJjaCgpXCJcblx0XHRhdWlTZWxlY3RhYmxlQWN0aW9uc1xuXHRcdChrZXlBcnJvd1VwKT1cIm9uS2V5QXJyb3dVcCgpXCJcblx0XHQoa2V5QXJyb3dEb3duKT1cIm9uS2V5QXJyb3dEb3duKClcIlxuXHRcdChrZXlFbnRlcik9XCJvbktleUVudGVyKCRldmVudClcIlxuXHRcdChrZXlFc2NhcGUpPVwib25LZXlFc2NhcGUoKVwiXG5cdFx0KGZvY3VzKT1cIm9uRm9jdXMoKVwiXG5cdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcblx0Lz5cblx0PGlucHV0ICpuZ0lmPVwibWFza1wiXG5cdFx0W2lkXT1cImlkXCJcblx0XHRbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuXHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRhdWlGbHlvdXRBY3Rpb25cblx0XHRbKG5nTW9kZWwpXT1cInF1ZXJ5XCJcblx0XHQobmdNb2RlbENoYW5nZSk9XCJkb1NlYXJjaCgpXCJcblx0XHRhdWlTZWxlY3RhYmxlQWN0aW9uc1xuXHRcdChrZXlBcnJvd1VwKT1cIm9uS2V5QXJyb3dVcCgpXCJcblx0XHQoa2V5QXJyb3dEb3duKT1cIm9uS2V5QXJyb3dEb3duKClcIlxuXHRcdChrZXlFbnRlcik9XCJvbktleUVudGVyKCRldmVudClcIlxuXHRcdChrZXlFc2NhcGUpPVwib25LZXlFc2NhcGUoKVwiXG5cdFx0KGZvY3VzKT1cIm9uRm9jdXMoKVwiXG5cdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcblx0XHRbYXVpTWFza109XCJtYXNrXCJcblx0Lz5cblxuXHQ8ZGl2IGF1aUZseW91dFpvbmU+XG5cdFx0PHNwYW4gY2xhc3M9XCJhdWktYXV0by1jb21wbGV0ZV9faW5mbyB1LXRleHQtbGlnaHQgdS1wYWRkaW5nLXJpZ2h0IHUtcGFkZGluZy1sZWZ0LXhzXCIgKm5nSWY9XCJmb2N1c2VkICYmIGxvYWRpbmdUZXh0ICYmIHNlYXJjaGluZ1wiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJhLXNwaW5uZXIgYS1zcGlubmVyLS1pbmxpbmUgYS1zcGlubmVyLS1zbSB1LW1hcmdpbi1yaWdodC14c1wiPjwvc3Bhbj5cblx0XHRcdHt7IGxvYWRpbmdUZXh0IH19XG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuIGNsYXNzPVwiYXVpLWF1dG8tY29tcGxldGVfX2luZm8gdS10ZXh0LWxpZ2h0IHUtcGFkZGluZy1yaWdodCB1LXBhZGRpbmctbGVmdFwiICpuZ0lmPVwiZm9jdXNlZCAmJiBzZWFyY2hJbmNlbnRpdmVUZXh0ICYmICFzZWFyY2hpbmcgJiYgIXF1ZXJ5ICYmICFyZXN1bHRzLmxlbmd0aFwiPnt7IHNlYXJjaEluY2VudGl2ZVRleHQgfX08L3NwYW4+XG5cdFx0PHNwYW4gY2xhc3M9XCJhdWktYXV0by1jb21wbGV0ZV9faW5mbyB1LXRleHQtbGlnaHQgdS1wYWRkaW5nLXJpZ2h0IHUtcGFkZGluZy1sZWZ0XCIgKm5nSWY9XCJmb2N1c2VkICYmIG5vUmVzdWx0c1RleHQgJiYgIXNlYXJjaGluZyAmJiBxdWVyeSAmJiAhcmVzdWx0cy5sZW5ndGhcIj57eyBub1Jlc3VsdHNUZXh0IH19PC9zcGFuPlxuXG5cdFx0PGF1aS1zZWxlY3RhYmxlLWxpc3QgW2l0ZW1zXT1cInJlc3VsdHNcIiBbaW5kZXhdPVwiaW5kZXhcIiAoc2VsZWN0ZWQpPVwib25TZWxlY3QoJGV2ZW50KVwiIFtsYWJlbF09XCJsYWJlbFwiIFtzZWFyY2hdPVwicXVlcnlcIiBbaXRlbVRlbXBsYXRlXT1cInRlbXBsYXRlXCIgKm5nSWY9XCJyZXN1bHRzLmxlbmd0aCA+IDAgJiYgIShmb2N1c2VkICYmIGxvYWRpbmdUZXh0ICYmIHNlYXJjaGluZylcIj48L2F1aS1zZWxlY3RhYmxlLWxpc3Q+XG5cdDwvZGl2PlxuPC9kaXY+XG5gLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEF1dG9Db21wbGV0ZUNvbXBvbmVudCksIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHJlc3VsdHM6IGFueVtdID0gW107IC8vIFRoZSB2YWx1ZXMgZm9yIHRoZSBzZWxlY3RhYmxlIGxpc3Rcblx0QElucHV0KCkgZGF0YTogYW55W10gPSBbXTsgLy8gVGhlIHZhbHVlcyB0byBzZWFyY2ggaW4gd2hlbiByZW1vdGUgc2VhcmNoIGlzIGRpc2FibGVkXG5cdEBJbnB1dCgpIHJlbW90ZSA9IGZhbHNlOyAvLyBEaXNhYmxlIG9yIGVuYW1ibGUgcmVtb3RlIHNlYXJjaFxuXHRASW5wdXQoKSBtaW5DaGFyYWN0ZXJzID0gMDtcblx0QElucHV0KCkgbWFzazogc3RyaW5nID0gbnVsbDtcblx0QElucHV0KCkgY2xlYXJJbnZhbGlkID0gZmFsc2U7XG5cdEBJbnB1dCgpIHNlYXJjaEluY2VudGl2ZVRleHQ6IHN0cmluZztcblx0QElucHV0KCkgbG9hZGluZ1RleHQ6IHN0cmluZztcblx0QElucHV0KCkgbm9SZXN1bHRzVGV4dDogc3RyaW5nO1xuXHRASW5wdXQoKSBzaG93QWxsQnlEZWZhdWx0ID0gZmFsc2U7XG5cblx0Ly8gc3BlY2lmeSB3aGljaCBsYWJlbC92YWx1ZSBwcm9wcyB0byB1c2Vcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuXHQvLyBFdmVudGVtaXR0ZXIgZm9yIHNlYXJjaHZhbHVlIChwYXJlbnQgb2JqZWN0IHNob3VsZCB1cGRhdGUgdGhlIHJlc3VsdHMgd2l0aCB0aGlzIHBhcmFtKVxuXHRAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QFZpZXdDaGlsZChGbHlvdXREaXJlY3RpdmUpIGZseW91dDogRmx5b3V0RGlyZWN0aXZlO1xuXHRAVmlld0NoaWxkKEZseW91dFpvbmVEaXJlY3RpdmUpIGZseW91dFpvbmU6IEZseW91dFpvbmVEaXJlY3RpdmU7XG5cblx0QENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHB1YmxpYyBxdWVyeSA9ICcnO1xuXHRwdWJsaWMgaW5kZXggPSAtMTsgLy8gaW5kZXggZm9yIGFjdGl2ZSBlbGVtZW50IGluIHNlbGVjdGFibGUgbGlzdCwgYnkgZGVmYXVsdCAtMSAoc28gaXQgc3RhcnRzIGluIHRoZSBpbnB1dCBmaWVsZClcblx0cHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0gbnVsbDsgLy8ga2VlcCBhIGJhY2t1cCBvZiB0aGUgc2VsZWN0ZWRJdGVtXG5cdHB1YmxpYyBzZWFyY2hpbmcgPSBmYWxzZTsgLy8gdHJhY2sgcmVtb3RlIHNlYXJjaCBzdGF0ZVxuXHRwdWJsaWMgZm9jdXNlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVtb3RlVmFsdWUgPSBmYWxzZTtcblxuXHRwdWJsaWMgdXBkYXRlTW9kZWwgPSAoXzogYW55KSA9PiB7IH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlXG5cdCkgeyB9XG5cblx0Ly8gQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiBpbnRlcmZhY2Vcblx0cHVibGljIHdyaXRlVmFsdWUodmFsdWUgPSAnJykge1xuXHRcdGlmICh0aGlzLnZhbHVlKSB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuZGF0YS5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW1bdGhpcy52YWx1ZV0gPT09IHZhbHVlKTtcblxuXHRcdFx0aWYgKHNlbGVjdGVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnF1ZXJ5ID0gc2VsZWN0ZWRbdGhpcy5sYWJlbF07XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJlbW90ZSAmJiAhIXZhbHVlKSB7XG5cdFx0XHRcdHRoaXMucmVtb3RlVmFsdWUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMucXVlcnkgPSB2YWx1ZTtcblx0fVxuXG5cdC8vIENPTlRST0xfVkFMVUVfQUNDRVNTT1IgaW50ZXJmYWNlXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG5cdFx0dGhpcy51cGRhdGVNb2RlbCA9IGZuO1xuXHR9XG5cblx0Ly8gQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiBpbnRlcmZhY2Vcblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCkge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0aWYgKChBcnJheS5pc0FycmF5KHRoaXMuZGF0YSkgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDApICYmICF0aGlzLnF1ZXJ5ICYmIHRoaXMuc2hvd0FsbEJ5RGVmYXVsdCkge1xuXHRcdFx0dGhpcy5yZXN1bHRzID0gWy4uLnRoaXMuZGF0YV07XG5cdFx0fVxuXHR9XG5cblx0Ly8gT25DaGFuZ2VzIGludGVyZmFjZVxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGlmICghY2hhbmdlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0RhdGEgPSBnZXQoY2hhbmdlcywgJ2RhdGEuY3VycmVudFZhbHVlJywgW10pO1xuXHRcdGlmICghaXNFcXVhbChuZXdEYXRhLCBnZXQoY2hhbmdlcywgJ2RhdGEucHJldmlvdXNWYWx1ZScsIFtdKSkpIHtcblx0XHRcdGlmICh0aGlzLnJlbW90ZSkge1xuXHRcdFx0XHR0aGlzLnJlbW90ZVNlYXJjaCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sb2NhbFNlYXJjaCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJlc3VsdHMgJiYgY2hhbmdlcy5yZXN1bHRzLmN1cnJlbnRWYWx1ZSkge1xuXHRcdFx0dGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlKHF1ZXJ5OiBzdHJpbmcpIHtcblx0XHRjb25zdCBpdGVtID0gdGhpcy5yZXN1bHRzLmZpbmQocmVzID0+IHRoaXMubGFiZWwgPyByZXNbdGhpcy5sYWJlbF0gPT09IHF1ZXJ5IDogcmVzID09PSBxdWVyeSk7XG5cblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XG5cdFx0dGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcblxuXHRcdGlmICghaXRlbSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlIDogdGhpcy5sYWJlbCA/IHRoaXMubGFiZWwgOiBudWxsO1xuXHRcdHRoaXMudXBkYXRlTW9kZWwoa2V5ID8gaXRlbVtrZXldIHx8ICcnIDogaXRlbSk7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRyaWdnZXJzIG9uIGlucHV0IHZhbHVlIGNoYW5nZVxuXHQgKi9cblx0cHVibGljIGRvU2VhcmNoKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5kZXggPSAtMTsgLy8gcmVzZXQgaW5kZXhcblx0XHR0aGlzLnNlYXJjaGluZyA9IHRydWU7XG5cblx0XHRpZiAodGhpcy5yZW1vdGUpIHtcblx0XHRcdHRoaXMuc2VhcmNoLmVtaXQodGhpcy5xdWVyeSk7IC8vIGFzayBmb3IgbmV3IHJlbW90ZSBkYXRhXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9jYWxTZWFyY2goKTtcblx0XHR9XG5cblx0XHR0aGlzLm9wZW5GbHlvdXQoKTsgLy8gb3BlbiB0aGUgZmx5b3V0IHdoZW4gdGhlcmUgaXMgYSBjaGFuZ2Vcblx0fVxuXG5cdC8qKlxuXHQgKiB0cmlnZ2VycyBvbiBzZWxlY3RhYmxlLWxpc3Q6c2VsZWN0IC0+IG9uQ2xpY2sgZXZlbnQgaW4gc2VsZWN0YWJsZS1saXN0XG5cdCAqL1xuXHRwdWJsaWMgb25TZWxlY3QoaXRlbTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UoaXRlbSAhPT0gbnVsbCA/ICh0aGlzLmxhYmVsID8gaXRlbVt0aGlzLmxhYmVsXSA6IGl0ZW0pIDogJycpO1xuXHRcdHRoaXMuY2xvc2VGbHlvdXQoKTsgLy8gQ2xvc2UgdGhlIGZseW91dCBtYW51YWxseVxuXHR9XG5cblx0cHVibGljIG9uRmx5b3V0Q2xvc2VkKCk6IHZvaWQge1xuXHRcdC8vIHRoZXJlIGlzIG9ubHkgMSByZXN1bHQsIHNlbGVjdCBpdFxuXHRcdGlmICh0aGlzLmluZGV4ID49IDAgJiYgdGhpcy5yZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIHRoaXMub25TZWxlY3QodGhpcy5yZXN1bHRzWzBdKTtcblx0XHR9XG5cblx0XHQvLyB0aGVyZSBpcyBubyBxdWVyeSBub3Igc2VsZWN0ZWQgaXRlbSwgY2xlYXIgdGhlIHNlbGVjdGVkIGl0ZW1cblx0XHRpZiAoIXRoaXMucXVlcnkgJiYgdGhpcy5pbmRleCA8IDApIHtcblx0XHRcdHJldHVybiB0aGlzLm9uU2VsZWN0KG51bGwpO1xuXHRcdH1cblxuXHRcdC8vIHJlc2V0IHRoZSBxdWVyeSBmb3IgYW4gaW52YWxpZCBxdWVyeSBpZiBjbGVhckludmFsaWQgaXMgdHJ1ZVxuXHRcdGlmICh0aGlzLmNsZWFySW52YWxpZCAmJiB0aGlzLnF1ZXJ5ICYmICF0aGlzLnJlc3VsdHMubGVuZ3RoICYmIHRoaXMuaW5kZXggPCAwKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5ID0gdGhpcy5zZWxlY3RlZEl0ZW0gPyB0aGlzLmxhYmVsID8gdGhpcy5zZWxlY3RlZEl0ZW1bdGhpcy5sYWJlbF0gOiB0aGlzLnNlbGVjdGVkSXRlbSA6ICcnO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbktleUFycm93RG93bigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA8IHRoaXMucmVzdWx0cy5sZW5ndGggLSAxKSB7XG5cdFx0XHR0aGlzLnNjcm9sbExpc3QoMSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcGVuRmx5b3V0KCk7XG5cdH1cblxuXHRwdWJsaWMgb25LZXlBcnJvd1VwKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ID49IDApIHtcblx0XHRcdHRoaXMuc2Nyb2xsTGlzdCgtMSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uS2V5RW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gRG8gbm90IHN1Ym1pdCBmb3JtIHdoZW4gc2VsZWN0aW5nIGFuIGl0ZW0uXG5cblx0XHRjb25zdCBxdWVyeSA9IHRoaXMuaW5kZXggPj0gMCA/IHRoaXMucXVlcnkgPSB0aGlzLnJlc3VsdHNbdGhpcy5pbmRleF1bdGhpcy5sYWJlbF0gOiB0aGlzLnF1ZXJ5O1xuXG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UocXVlcnkpO1xuXHRcdHRoaXMuY2xvc2VGbHlvdXQoKTtcblx0fVxuXG5cdHB1YmxpYyBvbktleUVzY2FwZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlRmx5b3V0KCk7XG5cdH1cblxuXHRwdWJsaWMgb25Gb2N1cygpOiB2b2lkIHtcblx0XHR0aGlzLmZvY3VzZWQgPSB0cnVlO1xuXHRcdHRoaXMub3BlbkZseW91dCgpO1xuXHR9XG5cblx0cHVibGljIG9wZW5GbHlvdXQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0KSB7XG5cdFx0XHR0aGlzLmZseW91dC5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGNsb3NlRmx5b3V0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmZseW91dCkge1xuXHRcdFx0dGhpcy5mbHlvdXQuY2xvc2UoKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvY3VzZWQgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBsb2NhbFNlYXJjaCgpOiB2b2lkIHtcblx0XHR0aGlzLnJlc3VsdHMgPSB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoKHRoaXMuZGF0YSwge1xuXHRcdFx0bWluTGVuZ3RoOiB0aGlzLm1pbkNoYXJhY3RlcnMsXG5cdFx0XHRrZXk6IHRoaXMubGFiZWwsXG5cdFx0XHRxdWVyeTogdGhpcy5xdWVyeSxcblx0XHRcdHNob3dBbGxCeURlZmF1bHQ6IHRoaXMuc2hvd0FsbEJ5RGVmYXVsdCxcblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLnJlc3VsdHMubGVuZ3RoID09PSAxICYmIHRoaXMucXVlcnkgPT09IHRoaXMucmVzdWx0c1swXVt0aGlzLmxhYmVsXSkge1xuXHRcdFx0dGhpcy5pbmRleCA9IDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdGVTZWFyY2goKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnJlbW90ZVZhbHVlIHx8ICF0aGlzLmRhdGEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuZGF0YS5maW5kKChpdGVtOiBhbnkpID0+IHtcblx0XHRcdGlmICh0aGlzLnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtW3RoaXMudmFsdWVdID09PSB0aGlzLnF1ZXJ5O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXRlbSA9PT0gdGhpcy5xdWVyeTtcblx0XHR9KTtcblxuXHRcdGlmIChzZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5xdWVyeSA9IHRoaXMubGFiZWwgPyBzZWxlY3RlZFt0aGlzLmxhYmVsXSA6IHNlbGVjdGVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnF1ZXJ5ID0gJyc7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZW1vdGVWYWx1ZSA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIHNjcm9sbExpc3QoZmFjdG9yOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmluZGV4ICs9IGZhY3RvcjtcblxuXHRcdGlmICghdGhpcy5mbHlvdXRab25lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGlJdGVtcyA9IHRoaXMuZmx5b3V0Wm9uZS5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuXHRcdGNvbnN0IGxpSGVpZ2h0ID0gKGxpSXRlbXNbMV0gPyBsaUl0ZW1zWzFdLm9mZnNldEhlaWdodCA6IGxpSXRlbXNbMF0ub2Zmc2V0SGVpZ2h0KTtcblx0XHRjb25zdCB6b25lSGVpZ2h0ID0gdGhpcy5mbHlvdXRab25lLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGNvbnN0IG9mZnNldCA9ICh6b25lSGVpZ2h0IC8gbGlIZWlnaHQpIC8gMjtcblxuXHRcdHRoaXMuZmx5b3V0Wm9uZS5lbGVtZW50LnNjcm9sbFRvcCA9ICh0aGlzLmluZGV4ICogbGlIZWlnaHQpIC0gKG9mZnNldCAqIGxpSGVpZ2h0KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBJbnB1dG1hc2sgPSByZXF1aXJlKCdpbnB1dG1hc2snKTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aU1hc2tdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWFza0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHB1YmxpYyBhdWlNYXNrOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYpIHt9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2V0TWFzayh0aGlzLmF1aU1hc2spO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRNYXNrKG1hc2spOiB2b2lkIHtcblx0XHRJbnB1dG1hc2sobWFzaykubWFzayh0aGlzLnJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbWFzay5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0TWFza0RpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkRpcmVjdGl2ZXMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXNrTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBBdXRvQ29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0QXV0b0NvbXBsZXRlQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcbmltcG9ydCB7IFNlbGVjdGFibGVMaXN0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9zZWxlY3RhYmxlLWxpc3QnO1xuXG5pbXBvcnQgeyBNYXNrTW9kdWxlIH0gZnJvbSAnLi4vbWFzay9tYXNrLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0Rmx5b3V0TW9kdWxlLFxuXHRcdFNlbGVjdGFibGVMaXN0TW9kdWxlLFxuXHRcdE1hc2tNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTZWFyY2hTZXJ2aWNlLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVNb2R1bGUge1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZXBpY2tlckVycm9yTGFiZWxzIH0gZnJvbSAnLi90eXBlcy9kYXRlcGlja2VyLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfRVJST1JfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPERhdGVwaWNrZXJFcnJvckxhYmVscz4oJ2Vycm9yTGFiZWxzJyk7XG5cbmV4cG9ydCBjb25zdCBEQVRFUElDS0VSX0RFRkFVTFRfRVJST1JfTEFCRUxTID0ge1xuXHRFUlJPUlNfSU5WQUxJRF9EQVRFOiAnSU5WQUxJRF9EQVRFJyxcblx0RVJST1JTX0lOVkFMSURfUkFOR0U6ICdJTlZBTElEX1JBTkdFJyxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFUElDS0VSX1NFUEFSQVRPUl9DSEFSID0gJy8nO1xuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfREFURV9NQVNLID0gWyc5OScsICc5OScsICc5OTk5J10uam9pbihEQVRFUElDS0VSX1NFUEFSQVRPUl9DSEFSKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcblx0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG5cdEZvcm1Db250cm9sLFxuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0TkdfVkFMSURBVE9SUyxcblx0Rm9ybUJ1aWxkZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciwgRGF0ZVJhbmdlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgRmx5b3V0RGlyZWN0aXZlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5cbmltcG9ydCB7XG5cdENBTEVOREFSX01PTlRIX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMsXG5cdENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTLFxuXHREYXRlcGlja2VyUmVzdWx0LFxuXHRDYWxlbmRhclNlcnZpY2UsXG59IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvY2FsZW5kYXInO1xuXG5pbXBvcnQge1xuXHREQVRFUElDS0VSX0VSUk9SX0xBQkVMUyxcblx0REFURVBJQ0tFUl9ERUZBVUxUX0VSUk9SX0xBQkVMUyxcblx0REFURVBJQ0tFUl9TRVBBUkFUT1JfQ0hBUixcblx0REFURVBJQ0tFUl9EQVRFX01BU0tcbn0gZnJvbSAnLi4vLi4vZGF0ZXBpY2tlci5jb25mJztcbmltcG9ydCB7IERhdGVwaWNrZXJWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnLi4vLi4vdHlwZXMvZGF0ZXBpY2tlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1kYXRlcGlja2VyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWRhdGVwaWNrZXIgYS1pbnB1dF9fd3JhcHBlclwiIGF1aUZseW91dD5cblx0PGlucHV0XG5cdFx0dHlwZT1cInRleHRcIlxuXHRcdG5hbWU9XCJ7eyBuYW1lIH19XCJcblx0XHRpZD1cInt7IGlkIH19XCJcblx0XHRwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyIH19XCJcblx0XHRbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG5cdFx0W2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcblx0XHRbYXVpTWFza109XCJkYXRlTWFza1wiXG5cdD5cbiAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXIgaXMtY2xpY2thYmxlXCIgYXVpRmx5b3V0QWN0aW9uPjwvc3Bhbj5cblxuXHQ8ZGl2IHJvbGU9XCJkYXRlcGlja2VyXCIgY2xhc3M9XCJtLWRhdGVwaWNrZXIgbS1kYXRlcGlja2VyLS1maXhlZFwiIGF1aUZseW91dFpvbmU+XG5cdFx0PGF1aS1jYWxlbmRhciBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiIFtyYW5nZV09XCJyYW5nZVwiIChzZWxlY3REYXRlKT1cInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIoJGV2ZW50KVwiPjwvYXVpLWNhbGVuZGFyPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYC5hdWktZGF0ZXBpY2tlcixhdWktZGF0ZXBpY2tlcntkaXNwbGF5OmJsb2NrfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVwaWNrZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH0sIHtcblx0XHRwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVwaWNrZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QFZpZXdDaGlsZChGbHlvdXREaXJlY3RpdmUpIGZseW91dDogRmx5b3V0RGlyZWN0aXZlO1xuXHRASW5wdXQoKSBpZDogc3RyaW5nO1xuXHRASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ2RkL21tL3l5eXknO1xuXHRASW5wdXQoKSByYW5nZTogRGF0ZVJhbmdlO1xuXHRASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvZmYnO1xuXG5cdHB1YmxpYyBkYXRlTWFzayA9IHsgbWFzazogREFURVBJQ0tFUl9EQVRFX01BU0ssICdzaG93TWFza09uSG92ZXInOiBmYWxzZSB9O1xuXHRwdWJsaWMgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXHRwdWJsaWMgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXG5cdHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cdHByaXZhdGUgb25DaGFuZ2U6IChyZXM6IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENBTEVOREFSX01PTlRIX0xBQkVMUykgcHJpdmF0ZSBtb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMpIHByaXZhdGUgd2Vla2RheUxhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdFx0QEluamVjdChEQVRFUElDS0VSX0VSUk9SX0xBQkVMUykgcHJpdmF0ZSBlcnJvckxhYmVscyA9IERBVEVQSUNLRVJfREVGQVVMVF9FUlJPUl9MQUJFTFMsXG5cdFx0cHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxuXHQpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wgPSB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woJycpO1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9IHZhbHVlLnNwbGl0KERBVEVQSUNLRVJfU0VQQVJBVE9SX0NIQVIpLnJldmVyc2UoKS5qb2luKCctJyk7XG5cdFx0XHRcdFx0Y29uc3QgZGF0ZSA9IERhdGVIZWxwZXIucGFyc2VEYXRlKGZvcm1hdCk7XG5cdFx0XHRcdFx0aWYgKGRhdGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UoZGF0ZS50b0lTT1N0cmluZygpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gQ2hhbmdlIHZhbHVlIHdpdGggb3JpZ2luYWwgdmFsdWUgKGFuZCBub3QgbnVsbCBvciAnJykgc28gd2UgY2FuIGFkZCBhbiBlcnJvciBpbiB0aGUgdmFsaWRhdGUgZnVuY3Rpb25cblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgZGF0ZSA9IERhdGVIZWxwZXIucGFyc2VEYXRlKHZhbHVlKTtcblx0XHRjb25zdCBkYXRlU3RyaW5nID0gZGF0ZSA/IHRoaXMuZm9ybWF0RGF0ZShkYXRlKSA6ICcnO1xuXG5cdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZVN0cmluZyk7XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShvbkNoYW5nZTogKHJlczogYW55KSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQgeyB9XG5cblx0cHVibGljIHNlbGVjdERhdGVGcm9tQ2FsZW5kYXIocmVzdWx0OiBEYXRlcGlja2VyUmVzdWx0KTogdm9pZCB7XG5cdFx0aWYgKHJlc3VsdC5jb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmZvcm1hdERhdGUocmVzdWx0LmRhdGUpKTtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIERhdGVIZWxwZXIuZm9ybWF0RGF0ZShkYXRlLCAnREQvTU0vWVlZWScsIHtcblx0XHRcdGxlYWRpbmdaZXJvOiB0cnVlLFxuXHRcdFx0bW9udGhMYWJlbHM6IHRoaXMubW9udGhMYWJlbHMsXG5cdFx0XHR3ZWVrZGF5TGFiZWxzOiB0aGlzLndlZWtkYXlMYWJlbHMsXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdmFsaWRhdGUoY3RybDogRm9ybUNvbnRyb2wpOiBEYXRlcGlja2VyVmFsaWRhdGlvbkVycm9ycyB7XG5cdFx0Ly8gbm8gZXJyb3Igb24gZW1wdHkgdmFsdWUgKGFkZCByZXF1aXJlZCB2YWxpZGF0b3IgaW4gYXBwKVxuXHRcdGlmIChjdHJsLnZhbHVlID09PSAnJyB8fCBjdHJsLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyB0aHJvdyBmb3JtYXQgZXJyb3IgaWYgbm8gdmFsaWQgZGF0ZSB3YXMgcHJvdmlkZWRcblx0XHRpZiAoIURhdGVIZWxwZXIucGFyc2VEYXRlKGN0cmwudmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmb3JtYXQ6IHRoaXMuZXJyb3JMYWJlbHMuRVJST1JTX0lOVkFMSURfREFURSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gbm8gZXJyb3IgaWYgdmFsaWQgZGF0ZSBhbiBubyByYW5nZSBwcm92aWRlZFxuXHRcdGlmICghdGhpcy5yYW5nZSB8fCAhdGhpcy5yYW5nZS5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIHRocm93IGVycm9yIHdoZW4gb3V0IG9mIHJhbmdlXG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN0cmwudmFsdWUpO1xuXHRcdGNvbnN0IHJhbmdlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0UmFuZ2VGb3JEYXRlKGRhdGUsIHRoaXMucmFuZ2UpO1xuXG5cdFx0cmV0dXJuIHJhbmdlLmluZGV4T2YoZGF0ZS5nZXREYXRlKCkpID49IDAgPyB7XG5cdFx0XHRyYW5nZTogdGhpcy5lcnJvckxhYmVscy5FUlJPUlNfSU5WQUxJRF9SQU5HRSxcblx0XHR9IDogbnVsbDtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGF0ZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHREYXRlcGlja2VyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcbmltcG9ydCB7XG5cdENhbGVuZGFyTW9kdWxlLFxuXHRDQUxFTkRBUl9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMU1xufSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2NhbGVuZGFyJztcblxuaW1wb3J0IHsgTWFza01vZHVsZSB9IGZyb20gJy4uL21hc2snO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IERBVEVQSUNLRVJfRVJST1JfTEFCRUxTLCBEQVRFUElDS0VSX0RFRkFVTFRfRVJST1JfTEFCRUxTIH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbmYnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckVycm9yTGFiZWxzIH0gZnJvbSAnLi90eXBlcy9kYXRlcGlja2VyLnR5cGVzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdENhbGVuZGFyTW9kdWxlLFxuXHRcdEZseW91dE1vZHVsZSxcblx0XHRNYXNrTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSxcblx0XHR7IHByb3ZpZGU6IENBTEVOREFSX01PTlRIX0xBQkVMUywgdXNlVmFsdWU6IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTIH0sXG5cdFx0eyBwcm92aWRlOiBEQVRFUElDS0VSX0VSUk9SX0xBQkVMUywgdXNlVmFsdWU6IERBVEVQSUNLRVJfREVGQVVMVF9FUlJPUl9MQUJFTFMgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHR3ZWVrZGF5TGFiZWxzOiBzdHJpbmdbXSxcblx0XHRtb250aExhYmVsczogc3RyaW5nW10sXG5cdFx0ZXJyb3JMYWJlbHM6IERhdGVwaWNrZXJFcnJvckxhYmVsc1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IERhdGVwaWNrZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9XRUVLREFZX0xBQkVMUywgdXNlVmFsdWU6IHdlZWtkYXlMYWJlbHMgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBDQUxFTkRBUl9NT05USF9MQUJFTFMsIHVzZVZhbHVlOiBtb250aExhYmVscyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IERBVEVQSUNLRVJfRVJST1JfTEFCRUxTLCB1c2VWYWx1ZTogZXJyb3JMYWJlbHMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvZmllbGQtZXJyb3JzLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWZpZWxkLWVycm9yJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidS1iZy1kYW5nZXIgdS10ZXh0LXhsaWdodFwiPlxuICAgIDxwIGNsYXNzPVwidS1tYXJnaW4teHNcIj5cbiAgICAgICAge3sgZXJyb3IubWVzc2FnZSB9fVxuICAgIDwvcD5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6Y29sdW1ufWBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZEVycm9yQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGVycm9yOiBGaWVsZEVycm9yO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkRXJyb3JEZWZpbml0aW9uLCBGaWVsZEVycm9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvZmllbGQtZXJyb3JzLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWZpZWxkLWVycm9ycycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1maWVsZC1lcnJvcnNcIiAqbmdJZj1cImVycm9yc1wiPlxuICAgIDxhdWktZmllbGQtZXJyb3IgY2xhc3M9XCJhdWktZmllbGQtZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZXJyb3JNZXNzYWdlc1wiIFtlcnJvcl09XCJlcnJvclwiPjwvYXVpLWZpZWxkLWVycm9yPlxuPC9kaXY+YCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRXJyb3JzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgcHVibGljIGVycm9yczogRmllbGRFcnJvcltdO1xuXHRASW5wdXQoKSBwdWJsaWMgZXJyb3JEZWZpbml0aW9uOiBGaWVsZEVycm9yRGVmaW5pdGlvbjtcblxuXHRlcnJvck1lc3NhZ2VzOiBGaWVsZEVycm9yW107XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGlmIChjaGFuZ2VzLmVycm9ycyAmJiAhY2hhbmdlcy5lcnJvcnMuY3VycmVudFZhbHVlKSB7XG5cdFx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBbXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZXJyb3JMaXN0ID0gKGNoYW5nZXMuZXJyb3JzID8gY2hhbmdlcy5lcnJvcnMuY3VycmVudFZhbHVlIDogdGhpcy5lcnJvcnMpO1xuXHRcdGlmICghZXJyb3JMaXN0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlcyA9IE9iamVjdC5rZXlzKGVycm9yTGlzdCkubWFwKChrZXkpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1lc3NhZ2U6IHRoaXMuZ2V0TWVzc2FnZShrZXksIGVycm9yTGlzdFtrZXldKSxcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGdldE1lc3NhZ2UodHlwZTogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xuXHRcdGlmICghdGhpcy5lcnJvckRlZmluaXRpb24gfHwgIXRoaXMuZXJyb3JEZWZpbml0aW9uLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5cdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKGBObyBlcnJvcmRlZmluaXRpb24gZm91bmQgZm9yIHZhbGlkYXRvciBvZiB0eXBlICcke3R5cGV9Jy4gUGxlYXNlIHByb3ZpZGUgb25lIHRocm91Z2ggdGhlIFtlcnJvckRlZmluaXRpb25dIGF0dHJpYnV0ZS5gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lcnJvckRlZmluaXRpb25bdHlwZV0ocGFyYW1zKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgRmllbGRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtZXJyb3IvZmllbGQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkRXJyb3JzQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1lcnJvcnMvZmllbGQtZXJyb3JzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRGaWVsZEVycm9yQ29tcG9uZW50LFxuXHRGaWVsZEVycm9yc0NvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTGFiZWxzTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdExhYmVsc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRXJyb3JzTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSYW5nZVNsaWRlclJhbmdlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcmFuZ2Utc2xpZGVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXJhbmdlLXNsaWRlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19pbm5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fYmFyXCIgW3N0eWxlLmxlZnRdPVwiKGVuZFBlcmNlbnRhZ2UgPyBzdGFydFBlcmNlbnRhZ2UgKyAnJScgOiBmYWxzZSlcIiBbc3R5bGUud2lkdGhdPVwiKGVuZFBlcmNlbnRhZ2UgPyBlbmRQZXJjZW50YWdlIC0gc3RhcnRQZXJjZW50YWdlICsnJScgOiBzdGFydFBlcmNlbnRhZ2UgKyclJylcIj48L2Rpdj5cbiAgICA8c3BhbiAodG91Y2hzdGFydCk9XCJvbk1vdXNlRG93bignc3RhcnQnKVwiIChtb3VzZWRvd24pPVwib25Nb3VzZURvd24oJ3N0YXJ0JylcIiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19oYW5kbGVcIiBbc3R5bGUubGVmdF09XCJzdGFydFBlcmNlbnRhZ2UgKyAnJSdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX190b29sdGlwIGEtdG9vbHRpcCBhLXRvb2x0aXAtLXByaW1hcnkgYS10b29sdGlwLS10b3BcIj5cbiAgICAgICAgICAgIDxwPnt7IGxhYmVsQmVmb3JlIH19e3sgc3RhcnQgfX17eyBsYWJlbEFmdGVyIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cImVuZFwiICh0b3VjaHN0YXJ0KT1cIm9uTW91c2VEb3duKCdlbmQnKVwiIChtb3VzZWRvd24pPVwib25Nb3VzZURvd24oJ2VuZCcpXCIgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9faGFuZGxlXCIgW3N0eWxlLmxlZnRdPVwiZW5kUGVyY2VudGFnZSArICclJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibS1yYW5nZS1zbGlkZXJfX3Rvb2x0aXAgYS10b29sdGlwIGEtdG9vbHRpcC0tcHJpbWFyeSBhLXRvb2x0aXAtLXRvcFwiPlxuICAgICAgICAgICAgPHA+e3sgbGFiZWxCZWZvcmUgfX17eyBlbmQgfX17eyBsYWJlbEFmdGVyIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19zdGVwc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fc3RlcFwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCI+PC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19zdGVwLWxhYmVsc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fc3RlcFwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCI+e3sgc3RlcCB9fTwvZGl2PlxuPC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0ubS1yYW5nZS1zbGlkZXJfX2hhbmRsZXt6LWluZGV4OjEwfS5tLXJhbmdlLXNsaWRlcl9fdG9vbHRpcHt3aGl0ZS1zcGFjZTpub3dyYXB9Lm0tcmFuZ2Utc2xpZGVyX19zdGVwc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtwYWRkaW5nOi4yNXJlbTt6LWluZGV4Ojh9Lm0tcmFuZ2Utc2xpZGVyX19zdGVwcyAubS1yYW5nZS1zbGlkZXJfX3N0ZXB7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjA7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luOjJweH0ubS1yYW5nZS1zbGlkZXJfX3N0ZXAtbGFiZWxze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tdG9wOjFyZW07Y29sb3I6IzQ0NDtmb250LXNpemU6MTRweH0ubS1yYW5nZS1zbGlkZXJfX3N0ZXAtbGFiZWxzIC5tLXJhbmdlLXNsaWRlcl9fc3RlcHt3aWR0aDoyNXB4fWBdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlU2xpZGVyQ29tcG9uZW50KSwgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLXJhbmdlLXNsaWRlcicpIGNvcmVfYnJhbmRpbmcgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBtaW4gPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWF4ID0gMTAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWluaW1hbERpc3RhbmNlID0gMTtcblx0QElucHV0KCkgcHVibGljIHN0ZXAgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxCZWZvcmUgPSAnJztcblx0QElucHV0KCkgcHVibGljIGxhYmVsQWZ0ZXIgPSAnJztcblxuXHRwdWJsaWMgc3RhcnQgPSAwO1xuXHRwdWJsaWMgZW5kOiAobnVtYmVyIHwgYm9vbGVhbikgPSBmYWxzZTtcblx0cHVibGljIHN0ZXBzID0gW107XG5cdHB1YmxpYyBzdGFydFBlcmNlbnRhZ2U7XG5cdHB1YmxpYyBlbmRQZXJjZW50YWdlO1xuXHRwdWJsaWMgYWN0aXZlID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG5cdHB1YmxpYyBwcm9wYWdhdGVDaGFuZ2UgPSAodmFsdWU6IG51bWJlcnxSYW5nZVNsaWRlclJhbmdlKSA9PiB7fTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuc3RlcCA+IDApIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMubWF4OyBpICs9IE51bWJlcih0aGlzLnN0ZXApKSB7XG5cdFx0XHRcdHRoaXMuc3RlcHMucHVzaChpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnN0YXJ0UGVyY2VudGFnZSA9IHRoaXMuc3RhcnRUb1BlcmNlbnRhZ2UoKTtcblxuXHRcdGlmICh0aGlzLmVuZCkge1xuXHRcdFx0dGhpcy5lbmRQZXJjZW50YWdlID0gdGhpcy5lbmRUb1BlcmNlbnRhZ2UoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnN0YXJ0KSB7XG5cdFx0XHR0aGlzLnN0YXJ0ID0gdmFsdWUuc3RhcnQ7XG5cdFx0fSBlbHNlIGlmICghaXNOYU4odmFsdWUpICYmIHZhbHVlICE9PSAnJykge1xuXHRcdFx0dGhpcy5zdGFydCA9IE51bWJlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhcnQoTnVtYmVyKHRoaXMubWluKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSB0aGlzLnN0YXJ0VG9QZXJjZW50YWdlKCk7XG5cblx0XHRpZiAodmFsdWUgJiYgdmFsdWUuZW5kKSB7XG5cdFx0XHR0aGlzLmVuZCA9IHZhbHVlLmVuZDtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCkge31cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRwdWJsaWMgb25Nb3VzZURvd24oaGFuZGxlKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSBoYW5kbGU7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCd0b3VjaGVuZCcsIFsnJGV2ZW50J10pXG5cdEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25Nb3VzZVVwKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlID09PSAnc3RhcnQnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXJ0KHRoaXMucm91bmQodGhpcy5zdGFydCwgdGhpcy5zdGVwLCAwKSk7XG5cdFx0XHR0aGlzLnN0YXJ0UGVyY2VudGFnZSA9IHRoaXMuc3RhcnRUb1BlcmNlbnRhZ2UoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hY3RpdmUgPT09ICdlbmQnKSB7XG5cdFx0XHR0aGlzLnNldEVuZCh0aGlzLnJvdW5kKHRoaXMuZW5kLCB0aGlzLnN0ZXAsIDApKTtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmUgPSBudWxsO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcblx0QEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xuXHRcdGlmICghdGhpcy5hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBEbyBub3Qgc2VsZWN0IHRleHQgd2hpbGUgc2xpZGluZ1xuXG5cdFx0Y29uc3QgeCA9IChldmVudCBhcyBNb3VzZUV2ZW50KS54ICE9PSB1bmRlZmluZWQgPyAoZXZlbnQgYXMgTW91c2VFdmVudCkueCA6IChldmVudCBhcyBUb3VjaEV2ZW50KS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuXHRcdGNvbnN0IHJlY3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgbmV3UGVyY2VudGFnZSA9IHRoaXMuY2FsY1BlcmNlbnRhZ2UoeCwgcmVjdC53aWR0aCwgcmVjdC5sZWZ0KTtcblx0XHR0aGlzLnVwZGF0ZUhhbmRsZShuZXdQZXJjZW50YWdlKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVIYW5kbGUobmV3UGVyY2VudGFnZSkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSA9PT0gJ3N0YXJ0Jykge1xuXHRcdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSBuZXdQZXJjZW50YWdlO1xuXHRcdFx0dGhpcy5zZXRTdGFydCh0aGlzLnBlcmNlbnRhZ2VUb1N0YXJ0KCkpO1xuXG5cdFx0XHRpZiAodGhpcy5taW5pbWFsRGlzdGFuY2VOb3RSZXNwZWN0ZWQoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXJ0KE51bWJlcih0aGlzLmVuZCkgLSBOdW1iZXIodGhpcy5taW5pbWFsRGlzdGFuY2UpKTtcblx0XHRcdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSB0aGlzLnN0YXJ0VG9QZXJjZW50YWdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYWN0aXZlID09PSAnZW5kJyAmJiB0aGlzLmVuZFBlcmNlbnRhZ2UpIHtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IG5ld1BlcmNlbnRhZ2U7XG5cdFx0XHR0aGlzLnNldEVuZCh0aGlzLnBlcmNlbnRhZ2VUb0VuZCgpKTtcblxuXHRcdFx0aWYgKHRoaXMubWluaW1hbERpc3RhbmNlTm90UmVzcGVjdGVkKCkpIHtcblx0XHRcdFx0dGhpcy5zZXRFbmQoTnVtYmVyKHRoaXMuc3RhcnQpICsgTnVtYmVyKHRoaXMubWluaW1hbERpc3RhbmNlKSk7XG5cdFx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLSBIRUxQRVJTIC0tLS0tLS0tLS0gLy9cblx0cHVibGljIHNldFN0YXJ0KHZhbHVlKSB7XG5cdFx0dGhpcy5zdGFydCA9IHZhbHVlO1xuXG5cdFx0aWYgKHRoaXMuZW5kKSB7XG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRcdHN0YXJ0OiB0aGlzLnN0YXJ0LFxuXHRcdFx0XHRlbmQ6IHRoaXMuZW5kLFxuXHRcdFx0fSBhcyBSYW5nZVNsaWRlclJhbmdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zdGFydCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEVuZCh2YWx1ZSkge1xuXHRcdHRoaXMuZW5kID0gdmFsdWU7XG5cblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRzdGFydDogdGhpcy5zdGFydCxcblx0XHRcdGVuZDogdGhpcy5lbmQsXG5cdFx0fSBhcyBSYW5nZVNsaWRlclJhbmdlKTtcblx0fVxuXG5cdHB1YmxpYyByb3VuZChudW1iZXIsIGluY3JlbWVudCwgb2Zmc2V0KSB7XG5cdFx0aWYgKGluY3JlbWVudCA+IDApIHtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKChudW1iZXIgLSBvZmZzZXQpIC8gaW5jcmVtZW50ICkgKiBpbmNyZW1lbnQgKyBvZmZzZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bWJlcjtcblx0fVxuXG5cdHB1YmxpYyBzdGFydFRvUGVyY2VudGFnZSgpIHtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLnN0YXJ0IC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pICogMTAwKTtcblx0fVxuXG5cdHB1YmxpYyBwZXJjZW50YWdlVG9TdGFydCgpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5zdGFydFBlcmNlbnRhZ2UgLyAxMDApICogKHRoaXMubWF4IC0gdGhpcy5taW4pICsgTnVtYmVyKHRoaXMubWluKSk7XG5cdH1cblxuXHRwdWJsaWMgZW5kVG9QZXJjZW50YWdlKCkge1xuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQoKE51bWJlcih0aGlzLmVuZCkgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDApO1xuXHR9XG5cblx0cHVibGljIHBlcmNlbnRhZ2VUb0VuZCgpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5lbmRQZXJjZW50YWdlIC8gMTAwKSAqICh0aGlzLm1heCAtIHRoaXMubWluKSArIE51bWJlcih0aGlzLm1pbikpO1xuXHR9XG5cblx0cHVibGljIG1pbmltYWxEaXN0YW5jZU5vdFJlc3BlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5taW5pbWFsRGlzdGFuY2UgPj0gMCAmJiB0aGlzLmVuZCAmJiB0aGlzLnN0YXJ0ID4gTnVtYmVyKHRoaXMuZW5kKSAtIHRoaXMubWluaW1hbERpc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIGNhbGNQZXJjZW50YWdlKG1vdXNlWCwgd2lkdGgsIG9mZnNldExlZnQpIHtcblx0XHRjb25zdCBtb3VzZVBvcyA9IG1vdXNlWCAtIG9mZnNldExlZnQ7XG5cblx0XHRsZXQgbmV3UGVyY2VudGFnZSA9IE1hdGgucm91bmQoKG1vdXNlUG9zIC8gd2lkdGgpICogMTAwKTtcblxuXHRcdGlmIChuZXdQZXJjZW50YWdlID4gMTAwKSB7XG5cdFx0XHRuZXdQZXJjZW50YWdlID0gMTAwO1xuXHRcdH1cblxuXHRcdGlmIChuZXdQZXJjZW50YWdlIDwgMCkge1xuXHRcdFx0bmV3UGVyY2VudGFnZSA9IDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld1BlcmNlbnRhZ2U7XG5cdH1cbn1cbiIsImltcG9ydCB7IFJhbmdlU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRSYW5nZVNsaWRlckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlU2xpZGVyTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRmb3J3YXJkUmVmLFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldCwgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBGbHlvdXRTaXplIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5pbXBvcnQgeyBTZWFyY2hGaWx0ZXJDaG9pY2UgfSBmcm9tICcuLi8uLi90eXBlcy9zZWFyY2gtZmlsdGVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNlYXJjaC1maWx0ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLXNlYXJjaC1maWx0ZXJcIiBhdWlGbHlvdXQgW3NpemVdPVwiZmx5b3V0U2l6ZVwiIFthbGlnbl09XCJmbHlvdXRBbGlnblwiPlxuXHQ8ZGl2IGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyX19sYWJlbCBoYXMtaWNvbi1yaWdodFwiIFtuZ0NsYXNzXT1cInsnbS1zZWFyY2gtZmlsdGVyX19sYWJlbC0tYWN0aXZlJzogc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwfVwiIGF1aUZseW91dEFjdGlvbj5cblx0XHR7eyBsYWJlbCB9fVxuXHRcdDxzcGFuICpuZ0lmPVwic2VsZWN0ZWRJdGVtcy5sZW5ndGhcIj4oe3sgc2VsZWN0ZWRJdGVtcy5sZW5ndGggfX0pPC9zcGFuPlxuXHRcdDxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvc3Bhbj5cblx0PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cIm0tc2VhcmNoLWZpbHRlcl9fc2VhcmNoIG0tc2VhcmNoLWZpbHRlcl9fc2VhcmNoLS1zY3JvbGxcIiBhdWlGbHlvdXRab25lPlxuXHRcdDxkaXYgY2xhc3M9XCJtLXNlYXJjaC1maWx0ZXJfX2lucHV0IGEtaW5wdXQgaGFzLWljb24tcmlnaHRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyXCI+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ7eyBuYW1lICsgJy1zZWFyY2gnIH19XCIgaWQ9XCJ7eyBpZCArICctc2VhcmNoJyB9fVwiIFsobmdNb2RlbCldPVwicXVlcnlcIiAoaW5wdXQpPVwiZmlsdGVyRGF0YUZyb21TZWFyY2goKVwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyX19jbGVhclwiICpuZ0lmPVwic2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24tb3V0bGluZSBhLWJ1dHRvbi0tc21hbGwgYS1idXR0b24tLWRhbmdlciBoYXMtaWNvbi1sZWZ0XCIgKGNsaWNrKT1cImNsZWFyKClcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9kaXY+XG5cdFx0XHRcdHt7IGxhYmVsRGVzZWxlY3QgfX1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGg2IGNsYXNzPVwibS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX190aXRsZVwiPnt7IGxhYmVsUmVzdWx0cyB9fTwvaDY+XG5cdFx0PGRpdiBjbGFzcz1cInUtdGV4dC1jZW50ZXIgdS1wYWRkaW5nIGEtc3Bpbm5lclwiICpuZ0lmPVwibG9hZGluZ1wiPjwvZGl2PlxuXHRcdDx1bCBjbGFzcz1cImEtbGlzdCBhLWxpc3QtLWxpbmVkIGEtbGlzdC0tdW5zdHlsZWRcIiAqbmdJZj1cIiFsb2FkaW5nXCI+XG5cdFx0XHQ8bGkgY2xhc3M9XCJtLXNlYXJjaC1maWx0ZXJfX3Jlc3VsdHNfX2l0ZW0gYS1saXN0X19pdGVtXCIgKm5nSWY9XCIhZmlsdGVyZWRDaG9pY2VzLmxlbmd0aFwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInUtcGFkZGluZy14c1wiPnt7IGxhYmVsTm9SZXN1bHRzIH19PC9wPlxuXHRcdFx0PC9saT5cblx0XHRcdDxsaSBjbGFzcz1cIm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19faXRlbSBhLWxpc3RfX2l0ZW1cIiAqbmdGb3I9XCJsZXQgY2hvaWNlIG9mIGZpbHRlcmVkQ2hvaWNlczsgaW5kZXggYXMgaVwiPlxuXHRcdFx0XHQgPGRpdiBjbGFzcz1cImEtaW5wdXRfX2NoZWNrYm94XCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0aWQ9XCJ7eyAnY2hlY2tib3gtLScgKyBpICsgJy0tJyArIGlkIH19XCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ7eyAnY2hlY2tib3gtLScgKyBpICsgJy0tJyArIGlkIH19XCJcblx0XHRcdFx0XHRcdFtjaGVja2VkXT1cInNlbGVjdGVkSXRlbXMuaW5kZXhPZihjaG9pY2UudmFsdWUpID49IDBcIlxuXHRcdFx0XHRcdFx0KGNoYW5nZSk9XCJ0b2dnbGVTZWxlY3RlZChjaG9pY2UudmFsdWUpXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cInt7ICdjaGVja2JveC0tJyArIGkgKyAnLS0nICsgaWQgfX1cIj57eyBjaG9pY2UubGFiZWwgfX08L2xhYmVsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbGk+XG5cdFx0PC91bD5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AubS1zZWFyY2gtZmlsdGVyX19sYWJlbHtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZy1sZWZ0OjEuNXJlbTtib3JkZXI6MXB4IHNvbGlkICNiMGIwYjA7bWFyZ2luOjAgLjc1cmVtIC43NXJlbSAwO2xpbmUtaGVpZ2h0OjNyZW07Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsPnNwYW46bm90KC5mYSl7bWFyZ2luLWxlZnQ6LjI1cmVtfS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsPi5mYXtjb2xvcjojN2Q3ZDdkO2ZvbnQtc2l6ZToxLjI1cmVtO2hlaWdodDozcmVtO2xpbmUtaGVpZ2h0OjNyZW07cG9pbnRlci1ldmVudHM6bm9uZTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7d2lkdGg6M3JlbX0ubS1zZWFyY2gtZmlsdGVyX19sYWJlbC5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLS1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMDA2NGI0O2JvcmRlci1jb2xvcjojMDA2NGI0O2NvbG9yOiNmZmZ9Lm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwubS1zZWFyY2gtZmlsdGVyX19sYWJlbC0tYWN0aXZlPi5mYXtjb2xvcjojZmZmfS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwtLWVycm9ye2JhY2tncm91bmQtY29sb3I6I2RhMjkxYztib3JkZXItY29sb3I6I2RhMjkxYztjb2xvcjojZmZmfS5tLXNlYXJjaC1maWx0ZXJfX2xhYmVsLm0tc2VhcmNoLWZpbHRlcl9fbGFiZWwtLWVycm9yPi5mYXtjb2xvcjojZmZmfS5tLXNlYXJjaC1maWx0ZXJfX2lucHV0e21hcmdpbi1ib3R0b206Ljc1cmVtO3BhZGRpbmc6Ljc1cmVtfS5tLXNlYXJjaC1maWx0ZXJfX2lucHV0IC5hLWlucHV0X193cmFwcGVye21hcmdpbi1yaWdodDowfS5tLXNlYXJjaC1maWx0ZXJfX2NsZWFye3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjowIC43NXJlbSAxLjVyZW19Lm0tc2VhcmNoLWZpbHRlcl9fc2VhcmNoe21heC1oZWlnaHQ6NTB2aH0ubS1zZWFyY2gtZmlsdGVyX19zZWFyY2gubS1zZWFyY2gtZmlsdGVyX19zZWFyY2gtLXNjcm9sbHtvdmVyZmxvdy15OmF1dG99Lm0tc2VhcmNoLWZpbHRlcl9fcmVzdWx0c19fdGl0bGV7Zm9udC1zaXplOjE2cHg7bWFyZ2luOjAgLjc1cmVtfS5tLXNlYXJjaC1maWx0ZXIgLmEtbGlzdCAubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVte3BhZGRpbmc6MH0ubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVte2N1cnNvcjpwb2ludGVyfS5tLXNlYXJjaC1maWx0ZXJfX3Jlc3VsdHNfX2l0ZW0gLmEtaW5wdXRfX2NoZWNrYm94e2Rpc3BsYXk6ZmxleDtwYWRkaW5nLWxlZnQ6Mi4yNXJlbX0ubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVtIC5hLWlucHV0X19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2xhYmVsOjphZnRlcnt0b3A6Ljc1cmVtfS5tLXNlYXJjaC1maWx0ZXJfX3Jlc3VsdHNfX2l0ZW0gLmEtaW5wdXRfX2NoZWNrYm94IGxhYmVse2ZsZXg6MTtwYWRkaW5nOi43NXJlbX0ubS1zZWFyY2gtZmlsdGVyX19yZXN1bHRzX19pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YzZjNmM31gXSxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlYXJjaEZpbHRlckNvbXBvbmVudCksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZm9yd2FyZC1yZWZcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdEBJbnB1dCgpIHB1YmxpYyBpZDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZmx5b3V0U2l6ZSA9IEZseW91dFNpemUuU21hbGw7XG5cdEBJbnB1dCgpIHB1YmxpYyBmbHlvdXRBbGlnbjtcblx0QElucHV0KCkgcHVibGljIGxhYmVsID0gJ0ZpbHRlcic7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbERlc2VsZWN0ID0gJ0FsbGVzIGRlc2VsZWN0ZXJlbic7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbFJlc3VsdHMgPSAnUmVzdWx0YXRlbic7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbE5vUmVzdWx0cyA9ICdHZWVuIHJlc3VsdGF0ZW4gZ2V2b25kZW4uJztcblx0QElucHV0KCkgcHVibGljIGNob2ljZXM6IFNlYXJjaEZpbHRlckNob2ljZVtdID0gW107XG5cdEBJbnB1dCgpIHB1YmxpYyByZW1vdGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlciA9ICdab2VrZW4nO1xuXHRASW5wdXQoKSBwdWJsaWMgaW5wdXREZWxheSA9IDE1MDtcblx0QElucHV0KCkgcHVibGljIHNob3dBbGxCeURlZmF1bHQgPSBmYWxzZTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRwdWJsaWMgcXVlcnkgPSAnJztcblx0cHVibGljIHNlbGVjdGVkSXRlbXM6IHN0cmluZ1tdID0gW107XG5cdHB1YmxpYyBmaWx0ZXJlZENob2ljZXM6IFNlYXJjaEZpbHRlckNob2ljZVtdID0gW107XG5cdHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG5cblx0cHVibGljIGZpbHRlckRhdGFGcm9tU2VhcmNoOiAoX2FueT8pID0+IHt9O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZmlsdGVyRGF0YUZyb21TZWFyY2ggPSBkZWJvdW5jZSh0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKSwgdGhpcy5pbnB1dERlbGF5KTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVNb2RlbDogKF8pID0+IGFueSA9ICgpID0+IHt9O1xuXG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXTtcblx0fVxuXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlOiAoXykgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGVNb2RlbCA9IG9uQ2hhbmdlO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2hvd0FsbEJ5RGVmYXVsdCkge1xuXHRcdFx0dGhpcy5maWx0ZXJEYXRhKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRjb25zdCBjaG9pY2VzID0gZ2V0KGNoYW5nZXMsICdjaG9pY2VzLmN1cnJlbnRWYWx1ZScsIG51bGwpO1xuXG5cdFx0aWYgKCFjaG9pY2VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucmVtb3RlKSB7XG5cdFx0XHR0aGlzLmZpbHRlcmVkQ2hvaWNlcyA9IFsuLi5jaG9pY2VzXTtcblx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckRhdGEoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVyRGF0YSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yZW1vdGUpIHtcblx0XHRcdHRoaXMubG9hZGluZyA9IHRydWU7XG5cblx0XHRcdHJldHVybiB0aGlzLnNlYXJjaC5lbWl0KHRoaXMucXVlcnkpO1xuXHRcdH1cblxuXHRcdHRoaXMuZmlsdGVyQ2hvaWNlcygpO1xuXHR9XG5cblx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuXHRcdHRoaXMucXVlcnkgPSAnJztcblxuXHRcdHRoaXMuZmlsdGVyRGF0YSgpO1xuXHRcdHRoaXMudXBkYXRlTW9kZWwodGhpcy5zZWxlY3RlZEl0ZW1zKTtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGVTZWxlY3RlZChjaG9pY2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoY2hvaWNlKTtcblxuXHRcdGlmIChzZWxlY3RlZCA8IDApIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5jb25jYXQoY2hvaWNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW1zID0gW1xuXHRcdFx0XHQuLi50aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWQpLFxuXHRcdFx0XHQuLi50aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2Uoc2VsZWN0ZWQgKyAxKSxcblx0XHRcdF07XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVNb2RlbCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJDaG9pY2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyZWRDaG9pY2VzID0gdGhpcy5jaG9pY2VzLmZpbHRlcigoY2hvaWNlOiBTZWFyY2hGaWx0ZXJDaG9pY2UpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGNob2ljZS52YWx1ZSkgPCAwICYmXG5cdFx0XHRcdGNob2ljZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpKSA+PSAwXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBTZWFyY2hGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1maWx0ZXIvc2VhcmNoLWZpbHRlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0U2VhcmNoRmlsdGVyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvZmx5b3V0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rmx5b3V0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsdGVyTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyVmFsaWRhdG9ycyB7XG5cdC8vIHRpbWUgYGhoOm1tYCAyNGggZm9ybWF0XG5cdHB1YmxpYyBzdGF0aWMgbWluVGltZSh0aW1lOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XG5cdFx0Y29uc3QgdmFsaWRhdG9yID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55fSA9PiB7XG5cdFx0XHRjb25zdCBzcGxpdHRlZENvbnRyb2xWYWx1ZSA9IGNvbnRyb2wudmFsdWUuc3BsaXQoJzonKTtcblx0XHRcdGNvbnN0IGNvbnRyb2xIb3VycyA9IHBhcnNlSW50KHNwbGl0dGVkQ29udHJvbFZhbHVlWzBdLCAxMCk7XG5cdFx0XHRjb25zdCBjb250cm9sTWludXRlcyA9IHBhcnNlSW50KHNwbGl0dGVkQ29udHJvbFZhbHVlWzFdLCAxMCk7XG5cdFx0XHRjb25zdCBzcGxpdHRlZE1pblRpbWUgPSB0aW1lLnNwbGl0KCc6Jyk7XG5cdFx0XHRjb25zdCBtaW5Ib3VycyA9IHBhcnNlSW50KHNwbGl0dGVkTWluVGltZVswXSwgMTApO1xuXHRcdFx0Y29uc3QgbWluTWludXRlcyA9IHBhcnNlSW50KHNwbGl0dGVkTWluVGltZVsxXSwgMTApO1xuXG5cdFx0XHQvLyBEb24ndCB0aHJvdyBlcnJvciAtLT4gdXNlIFZhbGlkYXRvci5yZXF1aXJlZFxuXHRcdFx0aWYgKGlzTmFOKGNvbnRyb2xIb3VycykgfHwgaXNOYU4oY29udHJvbE1pbnV0ZXMpIHx8IGlzTmFOKG1pbkhvdXJzKSB8fCBpc05hTihtaW5NaW51dGVzKSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1pbkhvdXJzIDwgY29udHJvbEhvdXJzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWluSG91cnMgPT09IGNvbnRyb2xIb3VycyAmJiBtaW5NaW51dGVzIDw9IGNvbnRyb2xNaW51dGVzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyAnbWluVGltZSc6IHsgdmFsdWU6IGNvbnRyb2wudmFsdWUgfSB9O1xuXHRcdH07XG5cblx0XHRyZXR1cm4gdmFsaWRhdG9yO1xuXHR9XG5cblx0Ly8gdGltZSBgaGg6bW1gIDI0aCBmb3JtYXRcblx0cHVibGljIHN0YXRpYyBtYXhUaW1lKHRpbWU6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcblx0XHRjb25zdCB2YWxpZGF0b3IgPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcblx0XHRcdGNvbnN0IHNwbGl0dGVkQ29udHJvbFZhbHVlID0gY29udHJvbC52YWx1ZS5zcGxpdCgnOicpO1xuXHRcdFx0Y29uc3QgY29udHJvbEhvdXJzID0gcGFyc2VJbnQoc3BsaXR0ZWRDb250cm9sVmFsdWVbMF0sIDEwKTtcblx0XHRcdGNvbnN0IGNvbnRyb2xNaW51dGVzID0gcGFyc2VJbnQoc3BsaXR0ZWRDb250cm9sVmFsdWVbMV0sIDEwKTtcblx0XHRcdGNvbnN0IHNwbGl0dGVkTWluVGltZSA9IHRpbWUuc3BsaXQoJzonKTtcblx0XHRcdGNvbnN0IG1heEhvdXJzID0gcGFyc2VJbnQoc3BsaXR0ZWRNaW5UaW1lWzBdLCAxMCk7XG5cdFx0XHRjb25zdCBtYXhNaW51dGVzID0gcGFyc2VJbnQoc3BsaXR0ZWRNaW5UaW1lWzFdLCAxMCk7XG5cblx0XHRcdC8vIERvbid0IHRocm93IGVycm9yIC0tPiB1c2UgVmFsaWRhdG9yLnJlcXVpcmVkXG5cdFx0XHRpZiAoaXNOYU4oY29udHJvbEhvdXJzKSB8fCBpc05hTihjb250cm9sTWludXRlcykgfHwgaXNOYU4obWF4SG91cnMpIHx8IGlzTmFOKG1heE1pbnV0ZXMpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWF4SG91cnMgPiBjb250cm9sSG91cnMpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXhIb3VycyA9PT0gY29udHJvbEhvdXJzICYmIG1heE1pbnV0ZXMgPj0gY29udHJvbE1pbnV0ZXMpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7ICdtYXhUaW1lJzogeyB2YWx1ZTogY29udHJvbC52YWx1ZSB9IH07XG5cdFx0fTtcblxuXHRcdHJldHVybiB2YWxpZGF0b3I7XG5cdH1cbn1cbiIsImV4cG9ydCBlbnVtIFRpbWVwaWNrZXJJbnB1dFNpemUge1xuXHRBdXRvID0gJ2F1dG8nLFxuXHRTbWFsbCA9ICdzbWFsbCcsXG5cdExhcmdlID0gJ2xhcmdlJyxcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUmVuZGVyZXIyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycy90YWtlVW50aWwnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgVGltZXBpY2tlcklucHV0U2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzL3RpbWVwaWNrZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGltZXBpY2tlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImEtaW5wdXRcIiBbY2xhc3NdPVwiJ2EtaW5wdXQtLScgKyBzaXplXCIgW25nQ2xhc3NdPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IgfVwiICpuZ0lmPVwiIXNob3VsZFVzZUZhbGxiYWNrXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgW2Zvcm1Db250cm9sXT1cInRpbWVDb250cm9sXCI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInNob3VsZFVzZUZhbGxiYWNrXCIgW2Zvcm1Hcm91cF09XCJmYWxsYmFja0Zvcm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodFwiIFtjbGFzc109XCInYS1pbnB1dC0tJyArIHNpemVcIiBbbmdDbGFzc109XCJ7ICdoYXMtZXJyb3InOiBoYXNFcnJvciB9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyXCI+XG4gICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImhvdXJzXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCB2YWx1ZT1cIm51bGxcIj57eyBob3Vyc1BsYWNlaG9sZGVyIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3Vyc1wiIFt2YWx1ZV09XCJob3VyXCI+e3sgaG91ciB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImEtaW5wdXQgaGFzLWljb24tcmlnaHRcIiBbY2xhc3NdPVwiJ2EtaW5wdXQtLScgKyBzaXplXCIgW25nQ2xhc3NdPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IgfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJtaW51dGVzXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCB2YWx1ZT1cIm51bGxcIj57eyBtaW51dGVzUGxhY2Vob2xkZXIgfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBtaW51dGUgb2YgbWludXRlc1wiIFt2YWx1ZV09XCJtaW51dGVcIj57eyBtaW51dGUgfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QgLmEtaW5wdXR7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3Q6OmJlZm9yZXt6LWluZGV4OjEwfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbWVwaWNrZXJDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZvcndhcmQtcmVmXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QElucHV0KCkgcHVibGljIGhvdXJzUGxhY2Vob2xkZXIgPSAnSEgnO1xuXHRASW5wdXQoKSBwdWJsaWMgbWludXRlc1BsYWNlaG9sZGVyID0gJ01NJztcblx0QElucHV0KCkgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBzaXplOiBUaW1lcGlja2VySW5wdXRTaXplID0gVGltZXBpY2tlcklucHV0U2l6ZS5BdXRvO1xuXG5cdHB1YmxpYyBzaG91bGRVc2VGYWxsYmFjayA9IGZhbHNlO1xuXHRwdWJsaWMgbWludXRlczogc3RyaW5nW10gPSBbXTtcblx0cHVibGljIGhvdXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRwdWJsaWMgdXBkYXRlTW9kZWw6ICh2YWx1ZTogc3RyaW5nKSA9PiBhbnk7XG5cblx0cHVibGljIHRpbWVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cdHB1YmxpYyBmYWxsYmFja0Zvcm06IEZvcm1Hcm91cDtcblxuXHRwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuXHQpIHt9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2hvdWxkVXNlRmFsbGJhY2sgPSB0aGlzLnN1cHBvcnRzTmF0aXZlVGltZXBpY2tlcigpO1xuXHRcdHRoaXMubWludXRlcyA9IHRoaXMuZ2V0TWludXRlcygpO1xuXHRcdHRoaXMuaG91cnMgPSB0aGlzLmdldEhvdXJzKCk7XG5cblx0XHR0aGlzLmZhbGxiYWNrRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0aG91cnM6IG51bGwsXG5cdFx0XHRtaW51dGVzOiBudWxsLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5mYWxsYmFja0Zvcm0udmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZvcm1EYXRhKSA9PiB7XG5cdFx0XHRcdGlmIChmb3JtRGF0YS5ob3VycyAmJiBmb3JtRGF0YS5taW51dGVzKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVNb2RlbChgJHtmb3JtRGF0YS5ob3Vyc306JHtmb3JtRGF0YS5taW51dGVzfWApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlTW9kZWwoJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMudGltZUNvbnRyb2wudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRpbWUpID0+IHtcblx0XHRcdFx0dGhpcy51cGRhdGVNb2RlbCh0aW1lKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KHRydWUpO1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudGltZUNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0Y29uc3Qgc3BsaXR0ZWQgPSB2YWx1ZS5zcGxpdCgnOicpO1xuXHRcdFx0dGhpcy5mYWxsYmFja0Zvcm0uZ2V0KCdob3VycycpLnNldFZhbHVlKHNwbGl0dGVkWzBdLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLmZhbGxiYWNrRm9ybS5nZXQoJ21pbnV0ZXMnKS5zZXRWYWx1ZShzcGxpdHRlZFsxXSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlKTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGVNb2RlbCA9IG9uQ2hhbmdlO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cblxuXHRwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG5cdFx0aWYgKGlzRGlzYWJsZWQpIHtcblx0XHRcdHRoaXMudGltZUNvbnRyb2wuZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLmZhbGxiYWNrRm9ybS5kaXNhYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50aW1lQ29udHJvbC5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdFx0dGhpcy5mYWxsYmFja0Zvcm0uZW5hYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN1cHBvcnRzTmF0aXZlVGltZXBpY2tlcigpOiBib29sZWFuIHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGVsZW1lbnQudHlwZSA9ICd0aW1lJztcblxuXHRcdHJldHVybiBlbGVtZW50LnR5cGUgPT09ICd0ZXh0Jztcblx0fVxuXG5cdHByaXZhdGUgZ2V0TWludXRlcygpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIEFycmF5KDYwKS5maWxsKCcnKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIERhdGVIZWxwZXIuYWRkTGVhZGluZ1plcm8oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRIb3VycygpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIEFycmF5KDI0KS5maWxsKCcnKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIERhdGVIZWxwZXIuYWRkTGVhZGluZ1plcm8oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBUaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdFRpbWVwaWNrZXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlck1vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVcGxvYWRPcHRpb25zLCBWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tICcuL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfT1BUSU9OU19ERUZBVUxUOiBVcGxvYWRPcHRpb25zID0ge1xuXHRhbGxvd2VkTWltZVR5cGVzOiBbXSxcblx0YWxsb3dlZEZpbGVUeXBlczogW10sXG5cdGF1dG9VcGxvYWQ6IGZhbHNlLFxuXHRtYXhGaWxlU2l6ZTogMCwgLy8gMCBpcyBpbmZpbml0ZVxuXHRxdWV1ZUxpbWl0OiAwLCAvLyAwIGlzIGluZmluaXRlXG5cdHR5cGU6ICdkcm9wJyxcblx0dXJsOiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCBVUExPQURfVkFMSURBVElPTl9NRVNTQUdFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxWYWxpZGF0aW9uTWVzc2FnZXM+KCd1cGxvYWRWYWxpZGF0aW9uTWVzc2FnZXMnKTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBVUExPQURfT1BUSU9OU19ERUZBVUxUIH0gZnJvbSAnLi4vdXBsb2FkLmNvbmYnO1xuaW1wb3J0IHsgVXBsb2FkT3B0aW9ucywgSW52YWxpZEZpbGUgfSBmcm9tICcuLi90eXBlcy91cGxvYWQudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVXBsb2FkZXIge1xuXHRwdWJsaWMgb3B0aW9uczogVXBsb2FkT3B0aW9ucyA9IFVQTE9BRF9PUFRJT05TX0RFRkFVTFQ7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFVwbG9hZE9wdGlvbnMpIHtcblx0XHR0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyB1cGxvYWRGaWxlcyAoZmlsZXM6IEZpbGVbXSkge1xuXHRcdGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IHRoaXMuZmlsZXNUb0Zvcm1EYXRhKGZpbGVzKTtcblxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG5cdFx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0Ly8gUHJvZ3Jlc3MgY2FsbGJhY2tcblx0XHRcdHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGVyY2VudENvbXBsZXRlID0gZS5sb2FkZWQgLyBlLnRvdGFsO1xuXG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0XHRwcm9ncmVzczogcGVyY2VudENvbXBsZXRlLFxuXHRcdFx0XHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENvbXBsZXRlIGNhbGxiYWNrXG5cdFx0XHR4aHIub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRwcm9ncmVzczogMSxcblx0XHRcdFx0XHRkYXRhOiB4aHIucmVzcG9uc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdFx0eGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcblx0XHRcdHhoci5vcGVuKCdwb3N0JywgdGhpcy5vcHRpb25zLnVybCk7XG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdmFsaWRhdGVGaWxlcyhmaWxlcykge1xuXHRcdGNvbnN0IHZhbGlkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXHRcdGNvbnN0IGludmFsaWRGaWxlczogSW52YWxpZEZpbGVbXSA9IFtdO1xuXG5cdFx0aWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0Zm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG5cdFx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZUZpbGVUeXBlKGZpbGUpKSB7XG5cdFx0XHRcdFx0ZXJyb3JzLnB1c2goJ0lOVkFMSURfRklMRV9UWVBFJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXRoaXMudmFsaWRhdGVGaWxlU2l6ZShmaWxlKSkge1xuXHRcdFx0XHRcdGVycm9ycy5wdXNoKCdJTlZBTElEX0ZJTEVfU0laRScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLnZhbGlkYXRlTWltZVR5cGUoZmlsZSkpIHtcblx0XHRcdFx0XHRlcnJvcnMucHVzaCgnSU5WQUxJRF9NSU1FX1RZUEUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0dmFsaWRGaWxlcy5wdXNoKGZpbGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGludmFsaWRGaWxlcy5wdXNoKHtcblx0XHRcdFx0XHRcdHJlYXNvbnM6IGVycm9ycyxcblx0XHRcdFx0XHRcdGZpbGU6IGZpbGUsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsaWRGaWxlczogdmFsaWRGaWxlcyxcblx0XHRcdGludmFsaWRGaWxlczogaW52YWxpZEZpbGVzLFxuXHRcdH07XG5cdH1cblxuXHRwcm90ZWN0ZWQgZmlsZXNUb0Zvcm1EYXRhKGZpbGVzOiBGaWxlW10pOiBGb3JtRGF0YSB7XG5cdFx0Y29uc3QgZm9ybURhdGEgID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0XHRpZiAoIXRoaXMub3B0aW9ucy51cmwgfHwgdGhpcy5vcHRpb25zLnVybCA9PT0gJycpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRGVmaW5lIHRoZSB1cGxvYWQgdXJsLicpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZvcm1EYXRhO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldEZpbGVFeHRlbnNpb24oZmlsZTogRmlsZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGZpbGUubmFtZS5zcGxpdCgnLicpW2ZpbGUubmFtZS5zcGxpdCgnLicpLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlRmlsZVR5cGUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGFsbG93ZWRGaWxlVHlwZXMgPSB0aGlzLm9wdGlvbnMuYWxsb3dlZEZpbGVUeXBlcztcblx0XHRjb25zdCBleHQgPSB0aGlzLmdldEZpbGVFeHRlbnNpb24oZmlsZSk7XG5cblx0XHQvLyBGaWx0ZXIgZGVmaW5lZD9cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYWxsb3dlZEZpbGVUeXBlcykgfHwgYWxsb3dlZEZpbGVUeXBlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgYWxsb3dlZEZpbGVUeXBlcyBjYXNlIGluc2Vuc2l0aXZlXG5cdFx0Y29uc3QgdG9VcHBlciA9ICh4KSA9PiB4LnRvVXBwZXJDYXNlKCk7XG5cdFx0Y29uc3QgYWxsb3dlZEZpbGVUeXBlc1RvVXBwZXIgPSBhbGxvd2VkRmlsZVR5cGVzLm1hcCh0b1VwcGVyKTtcblxuXHRcdHJldHVybiBhbGxvd2VkRmlsZVR5cGVzVG9VcHBlci5sYXN0SW5kZXhPZihleHQudG9VcHBlckNhc2UoKSkgIT09IC0xO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlRmlsZVNpemUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IG1heEZpbGVTaXplID0gdGhpcy5vcHRpb25zLm1heEZpbGVTaXplO1xuXG5cdFx0Ly8gRmlsdGVyIGRlZmluZWQ/XG5cdFx0aWYgKCFtYXhGaWxlU2l6ZSB8fCBtYXhGaWxlU2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heEZpbGVTaXplID4gZmlsZS5zaXplO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlTWltZVR5cGUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGFsbG93ZWRNaW1lVHlwZXMgPSB0aGlzLm9wdGlvbnMuYWxsb3dlZE1pbWVUeXBlcztcblxuXHRcdC8vIEZpbHRlciBkZWZpbmVkP1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShhbGxvd2VkTWltZVR5cGVzKSB8fCBhbGxvd2VkTWltZVR5cGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFsbG93ZWRNaW1lVHlwZXMubGFzdEluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTE7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVXBsb2FkT3B0aW9ucywgSW52YWxpZEZpbGUgfSBmcm9tICcuLi8uLi90eXBlcy91cGxvYWQudHlwZXMnO1xuaW1wb3J0IHsgVVBMT0FEX09QVElPTlNfREVGQVVMVCB9IGZyb20gJy4uLy4uL3VwbG9hZC5jb25mJztcbmltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy91cGxvYWRlci5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS11cGxvYWQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkXCI+XG4gICAgPGF1aS11cGxvYWQtem9uZSBbdXBsb2FkZXJdPVwidXBsb2FkZXJcIiAocXVldWVkRmlsZXMpPVwib25RdWV1ZWRGaWxlcygkZXZlbnQpXCIgKHVwbG9hZGVkRmlsZXMpPVwib25VcGxvYWRlZEZpbGVzKCRldmVudClcIiAoaW52YWxpZEZpbGVzKT1cIm9uSW52YWxpZEZpbGVzKCRldmVudClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF1aS11cGxvYWQtbWVzc2FnZVwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLW1lc3NhZ2VcIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWJ1dHRvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWJ1dHRvblwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8L2F1aS11cGxvYWQtem9uZT5cbiAgICA8YXVpLXZhbGlkYXRpb24tbGlzdCBbaW52YWxpZEZpbGVzXT1cImludmFsaWRGaWxlc1wiPjwvYXVpLXZhbGlkYXRpb24tbGlzdD5cbiAgICA8YXVpLXVwbG9hZC1xdWV1ZSAqbmdJZj1cIiFvcHRpb25zPy5hdXRvVXBsb2FkXCIgW3VwbG9hZGVyXT1cInVwbG9hZGVyXCIgW2ZpbGVzXT1cInF1ZXVlZEZpbGVzXCIgKHVwbG9hZGVkRmlsZXMpPVwib25VcGxvYWRlZEZpbGVzKCRldmVudClcIj48L2F1aS11cGxvYWQtcXVldWU+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBVcGxvYWRPcHRpb25zID0gVVBMT0FEX09QVElPTlNfREVGQVVMVDtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RVcGxvYWRlZEZpbGVzOiBFdmVudEVtaXR0ZXI8T2JqZWN0W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4oKTtcblxuXHRwdWJsaWMgdXBsb2FkZXI7XG5cdHB1YmxpYyB1cGxvYWRlZEZpbGVzOiBPYmplY3RbXSA9IFtdO1xuXHRwdWJsaWMgaW52YWxpZEZpbGVzOiBJbnZhbGlkRmlsZVtdID0gW107XG5cdHB1YmxpYyBxdWV1ZWRGaWxlczogRmlsZVtdID0gW107XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy51cGxvYWRlciA9IG5ldyBVcGxvYWRlcih0aGlzLm9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIG9uVXBsb2FkZWRGaWxlcyhmaWxlczogT2JqZWN0W10pIHtcblx0XHR0aGlzLnVwbG9hZGVkRmlsZXMgPSB0aGlzLnVwbG9hZGVkRmlsZXMuY29uY2F0KGZpbGVzKTtcblx0XHR0aGlzLnNlbGVjdFVwbG9hZGVkRmlsZXMuZW1pdCh0aGlzLnVwbG9hZGVkRmlsZXMpO1xuXHR9XG5cblx0cHVibGljIG9uSW52YWxpZEZpbGVzKGZpbGVzOiBJbnZhbGlkRmlsZVtdKSB7XG5cdFx0dGhpcy5pbnZhbGlkRmlsZXMgPSBmaWxlcztcblx0fVxuXG5cdHB1YmxpYyBvblF1ZXVlZEZpbGVzKGZpbGVzOiBGaWxlW10pIHtcblx0XHR0aGlzLnF1ZXVlZEZpbGVzID0gdGhpcy5xdWV1ZWRGaWxlcy5jb25jYXQoZmlsZXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBVcGxvYWRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvdXBsb2FkLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXVwbG9hZC1pbnB1dCcsXG5cdHRlbXBsYXRlOiBgPGF1aS11cGxvYWQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChzZWxlY3RVcGxvYWRlZEZpbGVzKT1cIm9uVXBsb2FkKCRldmVudClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZC1tZXNzYWdlXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtbWVzc2FnZVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZC1kZXNjcmlwdGlvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWJ1dHRvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWJ1dHRvblwiPjwvbmctY29udGVudD48L2Rpdj5cbjwvYXVpLXVwbG9hZD5cbmAsXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogVXBsb2FkSW5wdXRDb21wb25lbnQsXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QElucHV0KCkgcHVibGljIG9wdGlvbnM6IFVwbG9hZE9wdGlvbnM7XG5cdEBJbnB1dCgpIHB1YmxpYyBmb3JtYXQ6IGFueTtcblxuXHRwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0cHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge31cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZCgpIHt9XG5cblx0cHVibGljIG9uVXBsb2FkKGZpbGVzKSB7XG5cdFx0Y29uc3QgZGF0YSA9ICh0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0KGZpbGVzKSA6IGZpbGVzKTtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShkYXRhKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuLi8uLi9jbGFzc2VzL3VwbG9hZGVyLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXVwbG9hZC1xdWV1ZScsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwibS11cGxvYWRfX2ZpbGVzIHUtbWFyZ2luLWJvdHRvbS14c1wiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWZpbGUtb1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLXVwbG9hZF9fZmlsZW5hbWVcIj57eyBmaWxlLm5hbWUgfX08L3NwYW4+XG5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlKGkpXCIgY2xhc3M9XCJtLXVwbG9hZF9fZGVsZXRlIGEtYnV0dG9uLXRyYW5zcGFyZW50IGEtYnV0dG9uLS1kZWZhdWx0IGEtYnV0dG9uLS1zbWFsbCBoYXMtaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbjwvdWw+XG5cbjxidXR0b24gY2xhc3M9XCJhLWJ1dHRvblwiICpuZ0lmPVwiZmlsZXMubGVuZ3RoID4gMFwiIChjbGljayk9XCJ1cGxvYWRGaWxlcygpXCI+VXBsb2FkITwvYnV0dG9uPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkUXVldWVDb21wb25lbnQge1xuXHRASW5wdXQoKSBwdWJsaWMgZmlsZXM6IEZpbGVbXTtcblx0QElucHV0KCkgcHVibGljIHVwbG9hZGVyO1xuXHRAT3V0cHV0KCkgcHVibGljIHVwbG9hZGVkRmlsZXM6IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdFtdPigpO1xuXG5cdHB1YmxpYyB1cGxvYWRQcm9ncmVzczogTnVtYmVyID0gMDtcblxuXHRwdWJsaWMgcmVtb3ZlKGluZGV4KSB7XG5cdFx0dGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0cHVibGljIHVwbG9hZEZpbGVzICgpIHtcblx0XHRjb25zdCBwcm9ncmVzcyA9IHVuZGVmaW5lZDtcblx0XHRjb25zdCBkYXRhID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMudXBsb2FkZXIudXBsb2FkRmlsZXModGhpcy5maWxlcykuc3Vic2NyaWJlKFxuXHRcdFx0KHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5wcm9ncmVzcykge1xuXHRcdFx0XHRcdHRoaXMudXBsb2FkUHJvZ3Jlc3MgPSBNYXRoLmZsb29yKHJlc3BvbnNlLnByb2dyZXNzICogMTAwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YSkge1xuXHRcdFx0XHRcdHRoaXMudXBsb2FkZWRGaWxlcy5lbWl0KHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuZmlsZXMgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnZhbGlkRmlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4uLy4uL2NsYXNzZXMvdXBsb2FkZXIuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdXBsb2FkLXpvbmUnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLXVwbG9hZFwiICpuZ0lmPVwidXBsb2FkZXIub3B0aW9ucy50eXBlID09PSAnZHJvcCdcIj5cblx0PGRpdiBjbGFzcz1cIm0tdXBsb2FkX19pbm5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJtLXVwbG9hZF9fZHJvcHpvbmVcIj5cblx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiICNmaWxlSW5wdXQgKGNoYW5nZSk9XCJ1cGRhdGVGaWxlcygpXCIgbXVsdGlwbGUgY2xhc3M9XCJtLXVwbG9hZF9faW5wdXRcIiAqbmdJZj1cIm11bHRpcGxlXCI+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwidXBkYXRlRmlsZXMoKVwiIGNsYXNzPVwibS11cGxvYWRfX2lucHV0XCIgKm5nSWY9XCIhbXVsdGlwbGVcIj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cIm0tdXBsb2FkX19jb250ZW50XCIgKm5nSWY9XCIhdXBsb2FkUHJvZ3Jlc3MgfHwgdXBsb2FkUHJvZ3Jlc3MgPT09IDBcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJtLXVwbG9hZF9fbWVzc2FnZVwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLW1lc3NhZ2VcIj48L25nLWNvbnRlbnQ+PC9wPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJ1cGxvYWRQcm9ncmVzcyA+IDBcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJtLXVwbG9hZF9fdXBsb2FkcyB1LXRleHQtYm9sZCB1LW1hcmdpbi1ib3R0b20teHNcIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWxlIG9mIHVwbG9hZGluZ0ZpbGVzOyBsZXQgbGFzdCA9IGxhc3RcIj5cblx0XHRcdFx0XHRcdHt7IGZpbGUubmFtZSB9fTxuZy1jb250YWluZXIgKm5nSWY9XCIhbGFzdFwiPiwgPC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGF1aS1wcm9ncmVzcy1iYXIgW3ZhbHVlXT1cInVwbG9hZFByb2dyZXNzXCIgbWF4PVwiMTAwXCI+PC9hdWktcHJvZ3Jlc3MtYmFyPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxzbWFsbCBjbGFzcz1cIm0tdXBsb2FkX19kZXNjcmlwdGlvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PC9uZy1jb250ZW50Pjwvc21hbGw+XG48L2Rpdj5cblxuPGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGF1aS11cGxvYWQtYnV0dG9uXCIgKGNsaWNrKT1cInRyaWdnZXJGaWxlKClcIiAqbmdJZj1cInVwbG9hZGVyLm9wdGlvbnMudHlwZSA9PT0gJ2J1dHRvbidcIj5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuXHQ8aW5wdXQgdHlwZT1cImZpbGVcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwidXBkYXRlRmlsZXMoKVwiIG11bHRpcGxlPVwibXVsdGlwbGVcIj5cbjwvYnV0dG9uPlxuYCxcblx0c3R5bGVzOiBbYC5hdWktdXBsb2FkLWJ1dHRvbiBpbnB1dFt0eXBlPWZpbGVde2Rpc3BsYXk6bm9uZX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkWm9uZUNvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIGZpbGVJbnB1dDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKSBwdWJsaWMgdXBsb2FkZXI6IFVwbG9hZGVyO1xuXHRASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGUgPSB0cnVlO1xuXHRAT3V0cHV0KCkgcHVibGljIHVwbG9hZGVkRmlsZXM6IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdFtdPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHF1ZXVlZEZpbGVzOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGludmFsaWRGaWxlczogRXZlbnRFbWl0dGVyPEludmFsaWRGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxJbnZhbGlkRmlsZVtdPigpO1xuXG5cdHB1YmxpYyBoYXNEcmFnT3ZlcjogQm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgY2xhc3NOYW1lczogc3RyaW5nO1xuXHRwdWJsaWMgdXBsb2FkUHJvZ3Jlc3M6IE51bWJlciA9IDA7XG5cdHB1YmxpYyB1cGxvYWRpbmdGaWxlczogRmlsZVtdO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMucHJldmVudEFuZFN0b3AoZXZlbnQpO1xuXHRcdHRoaXMuaGFzRHJhZ092ZXIgPSB0cnVlO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJhZ0xlYXZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcblx0XHR0aGlzLmhhc0RyYWdPdmVyID0gZmFsc2U7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJvcChldmVudDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XG5cdFx0dGhpcy5oYXNEcmFnT3ZlciA9IGZhbHNlO1xuXHRcdGNvbnN0IGZpbGVzID0gdGhpcy5maWxlTGlzdFRvQXJyYXkoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcblx0XHR0aGlzLmhhbmRsZUZpbGVzKGZpbGVzKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRmlsZSgpIHtcblx0XHR0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlRmlsZXMoKSB7XG5cdFx0Y29uc3QgZmlsZXM6IGFueVtdID0gdGhpcy5maWxlTGlzdFRvQXJyYXkodGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC5maWxlcyk7XG5cdFx0dGhpcy5oYW5kbGVGaWxlcyhmaWxlcyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGFuZGxlRmlsZXMgKGZpbGVzKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB0aGlzLnVwbG9hZGVyLnZhbGlkYXRlRmlsZXMoZmlsZXMpO1xuXHRcdHRoaXMuaW52YWxpZEZpbGVzLmVtaXQocmVzcG9uc2UuaW52YWxpZEZpbGVzKTtcblxuXHRcdGlmICh0aGlzLnVwbG9hZGVyLm9wdGlvbnMuYXV0b1VwbG9hZCAmJiByZXNwb25zZS52YWxpZEZpbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMudXBsb2FkRmlsZXMocmVzcG9uc2UudmFsaWRGaWxlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucXVldWVkRmlsZXMuZW1pdChyZXNwb25zZS52YWxpZEZpbGVzKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgdXBsb2FkRmlsZXMgKGZpbGVzKSB7XG5cdFx0Ly8gUmVzZXQgcHJvZ3Jlc3Ncblx0XHR0aGlzLnVwbG9hZFByb2dyZXNzID0gMDtcblx0XHR0aGlzLnVwbG9hZGluZ0ZpbGVzID0gZmlsZXM7XG5cblx0XHQvLyB1cGxvYWRcblx0XHR0aGlzLnVwbG9hZGVyLnVwbG9hZEZpbGVzKGZpbGVzKS5zdWJzY3JpYmUoXG5cdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnByb2dyZXNzKSB7XG5cdFx0XHRcdFx0dGhpcy51cGxvYWRQcm9ncmVzcyA9IE1hdGguZmxvb3IocmVzcG9uc2UucHJvZ3Jlc3MgKiAxMDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy51cGxvYWRlZEZpbGVzLmVtaXQocmVzcG9uc2UuZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQoZXJyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBmaWxlTGlzdFRvQXJyYXkobGlzdDogRmlsZUxpc3QpOiBPYmplY3RbXSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20obGlzdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcHJldmVudEFuZFN0b3AoZXZlbnQ6IGFueSk6IGFueSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXVwbG9hZGVkLWxpc3QnLFxuXHR0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cIm0tdXBsb2FkX19maWxlc1wiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgZmlsZSBvZiB1cGxvYWRlZEZpbGVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtZmlsZS1vXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm0tdXBsb2FkX19maWxlbmFtZVwiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cblxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZW1vdmUoZmlsZSwgaSlcIiBjbGFzcz1cIm0tdXBsb2FkX19kZWxldGUgYS1idXR0b24tdHJhbnNwYXJlbnQgYS1idXR0b24tLWRlZmF1bHQgYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuPC91bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZGVkTGlzdENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyB1cGxvYWRlZEZpbGVzID0gW107XG5cdEBPdXRwdXQoKSBwdWJsaWMgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyByZW1vdmUoZmlsZSwgaW5kZXgpIHtcblx0XHR0aGlzLmRlbGV0ZS5lbWl0KHtmaWxlLCBpbmRleH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVVBMT0FEX1ZBTElEQVRJT05fTUVTU0FHRVMgfSBmcm9tICcuLi91cGxvYWQuY29uZic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uTWVzc2FnZXNTZXJ2aWNlIHtcblx0cHVibGljIElOVkFMSURfRklMRV9UWVBFID0gJ0lOVkFMSURfRklMRV9UWVBFJztcblx0cHVibGljIElOVkFMSURfRklMRV9TSVpFID0gJ0lOVkFMSURfRklMRV9TSVpFJztcblx0cHVibGljIElOVkFMSURfTUlNRV9UWVBFID0gJ0lOVkFMSURfTUlNRV9UWVBFJztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFVQTE9BRF9WQUxJREFUSU9OX01FU1NBR0VTKSBwcml2YXRlIGluaXRWYWx1ZXNcblx0KSB7XG5cdFx0aWYgKGluaXRWYWx1ZXMuSU5WQUxJRF9GSUxFX1RZUEUpIHtcblx0XHRcdHRoaXMuSU5WQUxJRF9GSUxFX1RZUEUgPSBpbml0VmFsdWVzLklOVkFMSURfRklMRV9UWVBFO1xuXHRcdH1cblxuXHRcdGlmIChpbml0VmFsdWVzLklOVkFMSURfRklMRV9TSVpFKSB7XG5cdFx0XHR0aGlzLklOVkFMSURfRklMRV9TSVpFID0gaW5pdFZhbHVlcy5JTlZBTElEX0ZJTEVfU0laRTtcblx0XHR9XG5cblx0XHRpZiAoaW5pdFZhbHVlcy5JTlZBTElEX01JTUVfVFlQRSkge1xuXHRcdFx0dGhpcy5JTlZBTElEX01JTUVfVFlQRSA9IGluaXRWYWx1ZXMuSU5WQUxJRF9NSU1FX1RZUEU7XG5cdFx0fVxuXHR9XG59XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnZhbGlkRmlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5cbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdmFsaWRhdGlvbi1saXN0Jyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJtLXVwbG9hZF9fZmlsZXNcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGludmFsaWRGaWxlIG9mIGludmFsaWRGaWxlczsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwiaXMtZXJyb3JcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS13YXJuaW5nXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm0tdXBsb2FkX19maWxlbmFtZVwiPnt7IGludmFsaWRGaWxlLmZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLXVwbG9hZF9fZXJyb3JcIj57eyBmb3JtYXRSZWFzb25zKGludmFsaWRGaWxlLnJlYXNvbnMpIH19PC9zcGFuPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShpKVwiIGNsYXNzPVwibS11cGxvYWRfX2RlbGV0ZSBhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tZGFuZ2VyIGEtYnV0dG9uLS1zbWFsbCBoYXMtaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uTGlzdENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBpbnZhbGlkRmlsZXM6IEludmFsaWRGaWxlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VzU2VydmljZTogVmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZSkge31cblxuXHRwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmludmFsaWRGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0cHVibGljIGZvcm1hdFJlYXNvbnMocmVhc29uczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGZvciAgKGNvbnN0IHJlYXNvbiBvZiByZWFzb25zKSB7XG5cdFx0XHRyZXN1bHQucHVzaCh0aGlzLm1lc3NhZ2VzU2VydmljZVtyZWFzb25dKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcsICcpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL3VwbG9hZC91cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFVwbG9hZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi91cGxvYWQtaW5wdXQvdXBsb2FkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGxvYWRRdWV1ZUNvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLXF1ZXVlL3VwbG9hZC1xdWV1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBsb2FkWm9uZUNvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLXpvbmUvdXBsb2FkLXpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFVwbG9hZGVkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkZWQtbGlzdC91cGxvYWRlZC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdmFsaWRhdGlvbi1saXN0L3ZhbGlkYXRpb24tbGlzdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0VXBsb2FkQ29tcG9uZW50LFxuXHRVcGxvYWRJbnB1dENvbXBvbmVudCxcblx0VXBsb2FkUXVldWVDb21wb25lbnQsXG5cdFVwbG9hZFpvbmVDb21wb25lbnQsXG5cdFVwbG9hZGVkTGlzdENvbXBvbmVudCxcblx0VmFsaWRhdGlvbkxpc3RDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZSB9IGZyb20gJy4vdmFsaWRhdGlvbi1tZXNzYWdlcy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuXHRWYWxpZGF0aW9uTWVzc2FnZXNTZXJ2aWNlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgVVBMT0FEX1ZBTElEQVRJT05fTUVTU0FHRVMgfSBmcm9tICcuL3VwbG9hZC5jb25mJztcbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gJy4vdHlwZXMvdXBsb2FkLnR5cGVzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEJyb3dzZXJNb2R1bGUsXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFByb2dyZXNzQmFyTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uU2VydmljZXMsXG5cdFx0eyBwcm92aWRlOiBVUExPQURfVkFMSURBVElPTl9NRVNTQUdFUywgdXNlVmFsdWU6IHt9IH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZE1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHR2YWxpZGF0aW9uTWVzc2FnZXM6IFZhbGlkYXRpb25NZXNzYWdlcyA9IHt9XG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogVXBsb2FkTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogVVBMT0FEX1ZBTElEQVRJT05fTUVTU0FHRVMsIHVzZVZhbHVlOiB2YWxpZGF0aW9uTWVzc2FnZXMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIiwiZXhwb3J0IGNvbnN0IFdZU0lXWUdfREVGQVVMVF9DT05GSUcgPSB7XG5cdGJvZHlDbGFzczogJ2EtaW5wdXQgY2tlZGl0b3ItZWRpdGFibGUtYm9keScsXG5cdGNvbnRlbnRzQ3NzOiBbJ2h0dHBzOi8vY2RuLmFudHdlcnBlbi5iZS9jb3JlX2JyYW5kaW5nX3Njc3MvMi4wLjEvbWFpbi5taW4uY3NzJ10sXG5cdGZvcm1hdF90YWdzOiAncDtoMTtoMjtoMztoNDtoNTtoNicsXG5cdHRvb2xiYXJfQmFzaWM6IFtcblx0XHRbICdCb2xkJywgJ0l0YWxpYycsICdVbmRlcmxpbmUnLCAnLScsICdGb3JtYXQnLCAnLScsICdTb3VyY2UnIF0sXG5cdF0sXG5cdHJlbW92ZUJ1dHRvbnM6ICdTdHlsZXMnLFxuXHRyZW1vdmVQbHVnaW5zOiAnYWJvdXQnLFxuXHR0b29sYmFyOiBudWxsLFxuXHR1aUNvbG9yOiAnI2Q4ZDhkOCcsXG59O1xuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nLFxuXHRPbkluaXQsXG5cdGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDb250cm9sVmFsdWVBY2Nlc3Nvcixcblx0Rm9ybUNvbnRyb2wsXG5cdE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHROR19WQUxJREFUT1JTXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcblx0V1lTSVdZR19ERUZBVUxUX0NPTkZJR1xufSBmcm9tICcuLi8uLi93eXNpd3lnLmNvbmYnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktd3lzaXd5ZycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS13eXNpd3lnX19pbm5lclwiPlxuICAgIDxja2VkaXRvciBbKG5nTW9kZWwpXT1cImNrZWRpdG9yQ29udGVudFwiIFtjb25maWddPVwiY2tlZGl0b3JDb25maWdcIiBbZGVib3VuY2VdPVwiZGVib3VuY2VcIiAobmdNb2RlbENoYW5nZSk9XCJ3cml0ZVZhbHVlKCRldmVudClcIj48L2NrZWRpdG9yPlxuPC9kaXY+XG5gLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV3lzaXd5Z0NvbXBvbmVudCksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZm9yd2FyZC1yZWZcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIFd5c2l3eWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktd3lzaXd5ZycpIHNldENsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBhZGRpdGlvbmFsU3R5bGluZzogc3RyaW5nW107XG5cdEBJbnB1dCgpIGF2YWlsYWJsZVRhZ3M6IHN0cmluZztcblx0QElucHV0KCkgYmFzaWMgPSBmYWxzZTtcblx0QElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgdWlDb2xvdXI6IHN0cmluZztcblx0QElucHV0KCkgZGVib3VuY2U6IG51bWJlcjtcblxuXHRASW5wdXQoKSBjdXN0b21Db25maWc6IGFueTtcblxuXHRAT3V0cHV0KCkgZW1pdENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBja2VkaXRvckNvbnRlbnQ6IHN0cmluZztcblx0cHVibGljIGNrZWRpdG9yQ29uZmlnID0gV1lTSVdZR19ERUZBVUxUX0NPTkZJRztcblxuXHRwcml2YXRlIHVwZGF0ZU1vZGVsOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG5cdC8vIE5HX1ZBTFVFX0FDQ0VTU09SX0lOVEVSRkFDRVxuXHR3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNrZWRpdG9yQ29udGVudCA9IHZhbHVlO1xuXHRcdHRoaXMudXBkYXRlTW9kZWwodmFsdWUpO1xuXHRcdHRoaXMuZW1pdENvbnRlbnQuZW1pdCh0aGlzLmNrZWRpdG9yQ29udGVudCk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlOiBGdW5jdGlvbik6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlTW9kZWwgPSBvbkNoYW5nZTtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zZXRDb25maWcoKTtcblxuXHRcdGlmICghdGhpcy5ja2VkaXRvckNvbnRlbnQpIHtcblx0XHRcdHRoaXMuY2tlZGl0b3JDb250ZW50ID0gdGhpcy5wbGFjZWhvbGRlcjtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldENvbmZpZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jdXN0b21Db25maWcpIHtcblx0XHRcdHRoaXMuY2tlZGl0b3JDb25maWcgPSB0aGlzLmN1c3RvbUNvbmZpZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuYmFzaWMpIHtcblx0XHRcdFx0dGhpcy5ja2VkaXRvckNvbmZpZy50b29sYmFyID0gJ0Jhc2ljJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlVGFncykge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLmZvcm1hdF90YWdzID0gdGhpcy5hdmFpbGFibGVUYWdzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy51aUNvbG91cikge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLnVpQ29sb3IgPSB0aGlzLnVpQ29sb3VyO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5hZGRpdGlvbmFsU3R5bGluZykge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLmNvbnRlbnRzQ3NzLmNvbmNhdCh0aGlzLmFkZGl0aW9uYWxTdHlsaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IFd5c2l3eWdDb21wb25lbnQgfSBmcm9tICcuL3d5c2l3eWcvd3lzaXd5Zy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0V3lzaXd5Z0NvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICduZzItY2tlZGl0b3InO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0Q0tFZGl0b3JNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBXeXNpd3lnTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnRzIiwidGFrZVVudGlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7eUNBNEJxQyxDQUFDLElBQVMsRUFBRSxZQUFZO1lBQzNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzRTs7Ozs7OztJQXhCTSxNQUFNLENBQUMsSUFBVyxFQUFFLFVBQXlCLEVBQUU7UUFDckQsdUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbkUsdUJBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsT0FBTyxD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