import { Injectable, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, HostBinding, Directive, NgModule } from '@angular/core';
import '@acpaas-ui/ngx-components/utils';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableHelperService = /** @class */ (function () {
    function TableHelperService() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    TableHelperService.prototype.getLabel = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key.hasOwnProperty('label') ? (/** @type {?} */ (key)).label : /** @type {?} */ (key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TableHelperService.prototype.getValue = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key.hasOwnProperty('value') ? (/** @type {?} */ (key)).value : /** @type {?} */ (key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TableHelperService.prototype.getClass = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key.hasOwnProperty('classList') ? (/** @type {?} */ (key)).classList.join(' ') : /** @type {?} */ (key);
    };
    /**
     * @param {?} item
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    TableHelperService.prototype.formatValue = /**
     * @param {?} item
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    function (item, key, index) {
        var /** @type {?} */ value = item[this.getValue(key)];
        return key.format ? key.format(value, key, item, index) : value;
    };
    TableHelperService.decorators = [
        { type: Injectable },
    ];
    return TableHelperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Used to generate unique ID's for each column selector component (idea from Angular Material --> tab-group component)
 */
var /** @type {?} */ nextId = 0;
var ColumnSelectorComponent = /** @class */ (function () {
    function ColumnSelectorComponent(tableHelper) {
        this.tableHelper = tableHelper;
        this.update = new EventEmitter();
        this.id = nextId++;
    }
    /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    ColumnSelectorComponent.prototype.updateDisplay = /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    function (e, index) {
        if (e.target.checked) {
            this.columns[index].hidden = false;
            this.enableChildren(this.columns[index]);
        }
        else {
            this.columns[index].hidden = true;
            this.disableChildren(this.columns[index]);
        }
        this.emitColumns();
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    ColumnSelectorComponent.prototype.enableChildren = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        var _this = this;
        this.columns = this.columns.map(function (o) {
            if (o.parent && o.disabled && o.parent.indexOf(parent.value) !== -1) {
                o.disabled = false;
                _this.enableChildren(o);
            }
            return o;
        });
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    ColumnSelectorComponent.prototype.disableChildren = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        var _this = this;
        this.columns = this.columns.map(function (o) {
            if (o.parent && !o.disabled && o.parent.indexOf(parent.value) !== -1) {
                o.disabled = true;
                o.hidden = true;
                _this.disableChildren(o);
            }
            return o;
        });
    };
    /**
     * @param {?} key
     * @param {?} i
     * @return {?}
     */
    ColumnSelectorComponent.prototype.move = /**
     * @param {?} key
     * @param {?} i
     * @return {?}
     */
    function (key, i) {
        var _this = this;
        var /** @type {?} */ index = this.columns.findIndex(function (o) {
            return _this.tableHelper.getValue(o) === _this.tableHelper.getValue(key);
        });
        var /** @type {?} */ target = index + i;
        if (target < 0 || target > this.columns.length - 1) {
            return;
        }
        this.columns.splice(index, 1); // Delete previous key position
        this.columns.splice(target, 0, key); // Add new position
        // Use timeout to fix re-rendering issue
        setTimeout(function () {
            _this.currentTarget = target;
        });
        this.emitColumns();
    };
    /**
     * @return {?}
     */
    ColumnSelectorComponent.prototype.emitColumns = /**
     * @return {?}
     */
    function () {
        this.update.emit(this.columns);
    };
    ColumnSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-column-selector',
                    template: "<ul class=\"a-list a-list--lined aui-column-selector\">\n\t<li *ngFor=\"let column of columns; let i = index; let isLast = last; let isFirst = first;\" class=\"animated\" [ngClass]=\"{show: i === currentTarget}\">\n\t\t<div class=\"a-input__checkbox a-input__checkbox--small\">\n\t\t\t<input type=\"checkbox\" id=\"checkbox-{{ id }}-{{ i }}-{{ tableHelper.getValue(column) }}\" name=\"checkbox-{{ tableHelper.getValue(column) }}\" [checked]=\"!column.hidden\" (change)=\"updateDisplay($event, i)\" [disabled]=\"column.disabled\">\n\t\t\t<label for=\"checkbox-{{ id }}-{{ i }}-{{ tableHelper.getValue(column) }}\">{{ tableHelper.getLabel(column) }}</label>\n\t\t</div>\n\t\t<div class=\"select-actions\">\n\t\t\t<button [disabled]=\"isFirst\" class=\"a-button-transparent a-button--tiny has-icon\" (click)=\"move(column, -1)\">\n\t\t\t\t<span class=\"fa fa-angle-up\"></span>\n\t\t\t</button>\n\t\t\t<button [disabled]=\"isLast\" class=\"a-button-transparent a-button--tiny has-icon\" (click)=\"move(column, 1)\">\n\t\t\t\t<span class=\"fa fa-angle-down\"></span>\n\t\t\t</button>\n\t\t</div>\n\t</li>\n<ul>\n",
                },] },
    ];
    /** @nocollapse */
    ColumnSelectorComponent.ctorParameters = function () { return [
        { type: TableHelperService }
    ]; };
    ColumnSelectorComponent.propDecorators = {
        columns: [{ type: Input }],
        update: [{ type: Output }]
    };
    return ColumnSelectorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LOAD_DATA = 'Loading data...';
var /** @type {?} */ NO_DATA = 'No data available.';
var /** @type {?} */ NO_COLUMNS = 'No columns available.';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableComponent = /** @class */ (function () {
    function TableComponent(tableHelper) {
        this.tableHelper = tableHelper;
        this.rows = [];
        this.columns = [];
        this.loading = false;
        this.responsive = true;
        this.hasClickAction = false;
        this.noDataMessage = NO_DATA;
        this.loadDataMessage = LOAD_DATA;
        this.noColumnsMessage = NO_COLUMNS;
        this.orderBy = new EventEmitter();
        this.rowClicked = new EventEmitter();
    }
    /**
     * @param {?} key
     * @param {?} order
     * @return {?}
     */
    TableComponent.prototype.sort = /**
     * @param {?} key
     * @param {?} order
     * @return {?}
     */
    function (key, order) {
        var /** @type {?} */ prop = this.tableHelper.getValue(key);
        this.activeSorting = { key: prop, order: order };
        this.orderBy.emit({ key: prop, order: order });
    };
    /**
     * @param {?} rowData
     * @return {?}
     */
    TableComponent.prototype.clickRow = /**
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        if (this.hasClickAction) {
            this.rowClicked.emit(rowData);
        }
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-table',
                    template: "<div [ngClass]=\"{'a-table__wrapper-responsive': responsive}\">\n\t<table class=\"a-table a-table--striped aui-table\">\n\t\t<thead *ngIf=\"columns.length > 0\">\n\t\t\t<tr>\n\t\t\t\t<th *ngFor=\"let column of columns\" [ngClass]=\"tableHelper.getClass(column)\">\n\t\t\t\t\t<ng-container *ngIf=\"column.headerComponent\">\n\t\t\t\t\t\t<aui-table-header [label]=\"tableHelper.getLabel(column)\" [value]=\"tableHelper.getValue(column)\" [component]=\"column.headerComponent\"></aui-table-header>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-container *ngIf=\"!column.headerComponent\">\n\t\t\t\t\t\t<ng-container *ngIf=\"activeSorting\">\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) !== activeSorting?.key\" class=\"a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'asc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) === activeSorting?.key && activeSorting?.order === 'desc'\" class=\" a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'asc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort-desc\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) === activeSorting?.key && activeSorting?.order === 'asc'\" class=\" a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'desc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort-asc\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"column.disableSorting\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }}\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<ng-container *ngIf=\"!activeSorting\">\n\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }}\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngIf=\"loading\">\n\t\t\t\t<td [colSpan]=\"columns.length\">\n\t\t\t\t\t<div class=\"table-loading\">\n\t\t\t\t\t\t{{ loadDataMessage }} <span class=\"a-spinner\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"!loading && columns.length === 0\">\n\t\t\t\t<td>{{ noColumnsMessage }}</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"!loading && (!rows || rows.length === 0)\">\n\t\t\t\t<td [colSpan]=\"columns.length\">{{ noDataMessage }}</td>\n\t\t\t</tr>\n\t\t\t<ng-container *ngIf=\"!loading && columns.length > 0\">\n\t\t\t\t<tr *ngFor=\"let row of rows; let rowIndex = index\" (click)=\"clickRow(row)\" [ngClass]=\"{'a-table--clickable': hasClickAction}\">\n\t\t\t\t\t<td *ngFor=\"let column of columns\" [ngClass]=\"tableHelper.getClass(column)\">\n\t\t\t\t\t\t<aui-table-cell [value]=\"tableHelper.formatValue(row, column, rowIndex)\" [component]=\"column.component\"></aui-table-cell>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\t\t</tbody>\n\t</table>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: TableHelperService }
    ]; };
    TableComponent.propDecorators = {
        rows: [{ type: Input }],
        columns: [{ type: Input }],
        loading: [{ type: Input }],
        responsive: [{ type: Input }],
        hasClickAction: [{ type: Input }],
        activeSorting: [{ type: Input }],
        noDataMessage: [{ type: Input }],
        loadDataMessage: [{ type: Input }],
        noColumnsMessage: [{ type: Input }],
        orderBy: [{ type: Output }],
        rowClicked: [{ type: Output }]
    };
    return TableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableBarComponent = /** @class */ (function () {
    function TableBarComponent() {
        this.filters = [];
        this.filter = new EventEmitter();
        this.open = false;
        this.invisibleItems = false;
    }
    /**
     * @return {?}
     */
    TableBarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.countInvisibleItems();
    };
    /**
     * @param {?} rectContainer
     * @param {?} rectChild
     * @return {?}
     */
    TableBarComponent.prototype.isInVisible = /**
     * @param {?} rectContainer
     * @param {?} rectChild
     * @return {?}
     */
    function (rectContainer, rectChild) {
        return rectContainer.bottom < rectChild.top;
    };
    /**
     * @return {?}
     */
    TableBarComponent.prototype.countInvisibleItems = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ rectContainer = this.ref.nativeElement.getBoundingClientRect();
        var /** @type {?} */ childNodes = this.ref.nativeElement.childNodes;
        for (var /** @type {?} */ i = childNodes.length - 1; i >= 0; i--) {
            var /** @type {?} */ o = childNodes[i];
            if (o.nodeName === 'AUI-TABLE-BAR-ITEM' && o.getBoundingClientRect) {
                var /** @type {?} */ rectChild = o.getBoundingClientRect();
                if (this.isInVisible(rectContainer, rectChild)) {
                    this.invisibleItems = true;
                    break;
                }
            }
            if (i === 0) {
                this.invisibleItems = false;
            }
        }
    };
    /**
     * @return {?}
     */
    TableBarComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.open = !this.open;
    };
    TableBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-table-bar',
                    template: "<div class=\"aui-table-bar\">\n\t<div class=\"filters\" #ref [ngClass]=\"{open: open}\">\n\t\t<ng-content select=\"[auiTableBarItem]\"></ng-content>\n\t\t<div class=\"aui-table-bar-item\" *ngIf=\"open\">\n\t\t\t<button class=\"a-button a-button--transparent\" (click)=\"toggle()\">Show less...</button>\n\t\t</div>\n\t</div>\n\t<div class=\"show-more\" *ngIf=\"!open && invisibleItems\">\n\t\t<button class=\"a-button a-button--transparent\" (click)=\"toggle()\">Show more...</button>\n\t</div>\n\n\t<ng-content select=\"[auiTableBarSearch]\"></ng-content>\n</div>\n",
                },] },
    ];
    TableBarComponent.propDecorators = {
        filters: [{ type: Input }],
        testFilter: [{ type: Input }],
        filter: [{ type: Output }],
        ref: [{ type: ViewChild, args: ['ref',] }]
    };
    return TableBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableCellComponent = /** @class */ (function () {
    function TableCellComponent(viewContainerRef, componentFactoryResolver, changeDetectionRef) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectionRef = changeDetectionRef;
    }
    /**
     * @return {?}
     */
    TableCellComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.loadComponent();
        }
    };
    /**
     * @return {?}
     */
    TableCellComponent.prototype.hasComponent = /**
     * @return {?}
     */
    function () {
        return !!this.component;
    };
    /**
     * @return {?}
     */
    TableCellComponent.prototype.loadComponent = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        var /** @type {?} */ viewContainerRef = this.viewContainerRef;
        viewContainerRef.clear();
        var /** @type {?} */ componentRef = viewContainerRef.createComponent(componentFactory);
        (/** @type {?} */ (componentRef.instance)).data = this.value;
        this.changeDetectionRef.detectChanges();
    };
    TableCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-table-cell',
                    template: "<ng-template *ngIf=\"hasComponent()\"></ng-template>\n<span *ngIf=\"!hasComponent()\">{{ value }}</span>\n",
                },] },
    ];
    /** @nocollapse */
    TableCellComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    TableCellComponent.propDecorators = {
        component: [{ type: Input }],
        value: [{ type: Input }]
    };
    return TableCellComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableHeaderComponent = /** @class */ (function () {
    function TableHeaderComponent(viewContainerRef, componentFactoryResolver, changeDetectionRef) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectionRef = changeDetectionRef;
    }
    /**
     * @return {?}
     */
    TableHeaderComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.loadComponent();
        }
    };
    /**
     * @return {?}
     */
    TableHeaderComponent.prototype.hasComponent = /**
     * @return {?}
     */
    function () {
        return !!this.component;
    };
    /**
     * @return {?}
     */
    TableHeaderComponent.prototype.loadComponent = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        var /** @type {?} */ viewContainerRef = this.viewContainerRef;
        viewContainerRef.clear();
        var /** @type {?} */ componentRef = viewContainerRef.createComponent(componentFactory);
        (/** @type {?} */ (componentRef.instance)).data = this.value;
        this.changeDetectionRef.detectChanges();
    };
    TableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-table-header',
                    template: "<ng-template *ngIf=\"hasComponent()\"></ng-template>\n<span *ngIf=\"!hasComponent()\">{{ label }}</span>\n",
                },] },
    ];
    /** @nocollapse */
    TableHeaderComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    TableHeaderComponent.propDecorators = {
        component: [{ type: Input }],
        label: [{ type: Input }],
        value: [{ type: Input }]
    };
    return TableHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    ColumnSelectorComponent,
    TableComponent,
    TableBarComponent,
    TableCellComponent,
    TableHeaderComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableBarItemDirective = /** @class */ (function () {
    function TableBarItemDirective() {
        this.setClass = true;
    }
    TableBarItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiTableBarItem]',
                },] },
    ];
    TableBarItemDirective.propDecorators = {
        setClass: [{ type: HostBinding, args: ['class.aui-table-bar-item',] }]
    };
    return TableBarItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableBarSearchDirective = /** @class */ (function () {
    function TableBarSearchDirective() {
        this.setClass = true;
    }
    TableBarSearchDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiTableBarSearch]',
                },] },
    ];
    TableBarSearchDirective.propDecorators = {
        setClass: [{ type: HostBinding, args: ['class.aui-table-bar-search',] }]
    };
    return TableBarSearchDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    TableBarItemDirective,
    TableBarSearchDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    providers: [
                        TableHelperService,
                    ],
                    declarations: [
                        Components,
                        Directives,
                    ],
                    exports: [
                        Components,
                        Directives,
                    ],
                },] },
    ];
    return TableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Table = /** @class */ (function () {
    // Init stuff...
    function Table() {
        this.rawData = [];
        this.filters = [];
        this.filteredData = new BehaviorSubject([]);
        this.rows = new BehaviorSubject([]);
        this.columns = new BehaviorSubject([]);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    Table.prototype.setRawData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.rawData = data;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    Table.prototype.setRawColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.rawColumns = columns;
        this.updateColumns();
    };
    /**
     * @param {?} filters
     * @return {?}
     */
    Table.prototype.setFilters = /**
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        this.filters = filters;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    Table.prototype.addFilter = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.filters.push(filter);
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    Table.prototype.setPage = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.page = Number(i); // something weird number >< string
        this.updateRows();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    Table.prototype.setLimit = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.limit = Number(i); // something weird number >< string
        this.setLastPage();
        if (this.lastPage && this.page > this.lastPage) {
            this.page = this.lastPage;
        }
        this.updateRows();
    };
    /**
     * @param {?} o
     * @return {?}
     */
    Table.prototype.setOrderBy = /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        this.orderBy = o;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    };
    /**
     * @return {?}
     */
    Table.prototype.getOffset = /**
     * @return {?}
     */
    function () {
        return (this.page * this.limit) - this.limit;
    };
    /**
     * @return {?}
     */
    Table.prototype.setLastPage = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ d = this.filteredData.getValue();
        this.lastPage = Math.ceil(d ? d.length / this.limit : 0);
    };
    /**
     * @return {?}
     */
    Table.prototype.updateRows = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ d = this.filteredData.getValue();
        if (this.orderBy) {
            d = this.sortData(d, this.orderBy.key, this.orderBy.order);
        }
        d = this.selectData(d, this.limit, this.getOffset());
        this.rows.next(d);
    };
    /**
     * @return {?}
     */
    Table.prototype.updateColumns = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ c = this.filterHiddenColumns(this.rawColumns);
        this.columns.next(c);
    };
    /**
     * @return {?}
     */
    Table.prototype.updateFilteredData = /**
     * @return {?}
     */
    function () {
        this.filteredData.next(this.filterData(this.rawData, this.filters));
    };
    /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    Table.prototype.filterData = /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    function (data, filters) {
        var /** @type {?} */ d = data.slice();
        filters.forEach(function (filter) {
            d = filter.parseData(d);
        });
        return d;
    };
    /**
     * @param {?} data
     * @param {?} key
     * @param {?=} order
     * @return {?}
     */
    Table.prototype.sortData = /**
     * @param {?} data
     * @param {?} key
     * @param {?=} order
     * @return {?}
     */
    function (data, key, order) {
        if (order === void 0) { order = 'asc'; }
        if (!data || !data.sort || !key) {
            return;
        }
        var /** @type {?} */ d = data.slice();
        d.sort(function (a, b) {
            if (a[key] < b[key]) {
                return order === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return order === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return d;
    };
    /**
     * @param {?} data
     * @param {?} limit
     * @param {?} offset
     * @return {?}
     */
    Table.prototype.selectData = /**
     * @param {?} data
     * @param {?} limit
     * @param {?} offset
     * @return {?}
     */
    function (data, limit, offset) {
        if (data && limit >= 0 && offset >= 0) {
            return data.slice(offset, offset + limit);
        }
        return data;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    Table.prototype.filterHiddenColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return columns.filter(function (o) {
            return !o.hidden;
        });
    };
    return Table;
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

export { TableModule, ColumnSelectorComponent, TableComponent, TableCellComponent, TableHeaderComponent, TableBarComponent, Table, TableHelperService, Components as ɵa, Directives as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL3RhYmxlL2xpYi90YWJsZS9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZS50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2NvbXBvbmVudHMvY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9jb21wb25lbnRzL3RhYmxlLm1lc3NhZ2VzLnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9jb21wb25lbnRzL3RhYmxlLWJhci90YWJsZS1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY29tcG9uZW50cy90YWJsZS1jZWxsL3RhYmxlLWNlbGwuY29tcG9uZW50LnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY29tcG9uZW50cy90YWJsZS1oZWFkZXIvdGFibGUtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9kaXJlY3RpdmVzL3RhYmxlLWJhci1pdGVtL3RhYmxlLWJhci1pdGVtLmRpcmVjdGl2ZS50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2RpcmVjdGl2ZXMvdGFibGUtYmFyLXNlYXJjaC90YWJsZS1iYXItc2VhcmNoLmRpcmVjdGl2ZS50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS90YWJsZS5tb2R1bGUudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9jbGFzc2VzL3RhYmxlLmNsYXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFibGVIZWxwZXJTZXJ2aWNlIHtcblx0cHVibGljIGdldExhYmVsKGtleTogKFRhYmxlQ29sdW1ufHN0cmluZykpOiBzdHJpbmcge1xuXHRcdHJldHVybiBrZXkuaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgPyAoa2V5IGFzIFRhYmxlQ29sdW1uKS5sYWJlbCA6IGtleSBhcyBzdHJpbmc7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VmFsdWUoa2V5OiAoVGFibGVDb2x1bW58c3RyaW5nKSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGtleS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IChrZXkgYXMgVGFibGVDb2x1bW4pLnZhbHVlIDoga2V5IGFzIHN0cmluZztcblx0fVxuXG5cdHB1YmxpYyBnZXRDbGFzcyhrZXk6IChUYWJsZUNvbHVtbnxzdHJpbmcpKTogc3RyaW5nIHtcblx0XHRyZXR1cm4ga2V5Lmhhc093blByb3BlcnR5KCdjbGFzc0xpc3QnKSA/IChrZXkgYXMgVGFibGVDb2x1bW4pLmNsYXNzTGlzdC5qb2luKCcgJykgOiBrZXkgYXMgc3RyaW5nO1xuXHR9XG5cblx0cHVibGljIGZvcm1hdFZhbHVlKGl0ZW0sIGtleSwgaW5kZXgpOiBhbnkge1xuXHRcdGNvbnN0IHZhbHVlID0gaXRlbVt0aGlzLmdldFZhbHVlKGtleSldO1xuXHRcdHJldHVybiBrZXkuZm9ybWF0ID8ga2V5LmZvcm1hdCh2YWx1ZSwga2V5LCBpdGVtLCBpbmRleCkgOiB2YWx1ZTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RhYmxlLWhlbHBlci5zZXJ2aWNlJztcblxuLyoqIFVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEJ3MgZm9yIGVhY2ggY29sdW1uIHNlbGVjdG9yIGNvbXBvbmVudCAoaWRlYSBmcm9tIEFuZ3VsYXIgTWF0ZXJpYWwgLS0+IHRhYi1ncm91cCBjb21wb25lbnQpICovXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNvbHVtbi1zZWxlY3RvcicsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwiYS1saXN0IGEtbGlzdC0tbGluZWQgYXVpLWNvbHVtbi1zZWxlY3RvclwiPlxuXHQ8bGkgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zOyBsZXQgaSA9IGluZGV4OyBsZXQgaXNMYXN0ID0gbGFzdDsgbGV0IGlzRmlyc3QgPSBmaXJzdDtcIiBjbGFzcz1cImFuaW1hdGVkXCIgW25nQ2xhc3NdPVwie3Nob3c6IGkgPT09IGN1cnJlbnRUYXJnZXR9XCI+XG5cdFx0PGRpdiBjbGFzcz1cImEtaW5wdXRfX2NoZWNrYm94IGEtaW5wdXRfX2NoZWNrYm94LS1zbWFsbFwiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3gte3sgaWQgfX0te3sgaSB9fS17eyB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pIH19XCIgbmFtZT1cImNoZWNrYm94LXt7IHRhYmxlSGVscGVyLmdldFZhbHVlKGNvbHVtbikgfX1cIiBbY2hlY2tlZF09XCIhY29sdW1uLmhpZGRlblwiIChjaGFuZ2UpPVwidXBkYXRlRGlzcGxheSgkZXZlbnQsIGkpXCIgW2Rpc2FibGVkXT1cImNvbHVtbi5kaXNhYmxlZFwiPlxuXHRcdFx0PGxhYmVsIGZvcj1cImNoZWNrYm94LXt7IGlkIH19LXt7IGkgfX0te3sgdGFibGVIZWxwZXIuZ2V0VmFsdWUoY29sdW1uKSB9fVwiPnt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX08L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJzZWxlY3QtYWN0aW9uc1wiPlxuXHRcdFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiaXNGaXJzdFwiIGNsYXNzPVwiYS1idXR0b24tdHJhbnNwYXJlbnQgYS1idXR0b24tLXRpbnkgaGFzLWljb25cIiAoY2xpY2spPVwibW92ZShjb2x1bW4sIC0xKVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9zcGFuPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8YnV0dG9uIFtkaXNhYmxlZF09XCJpc0xhc3RcIiBjbGFzcz1cImEtYnV0dG9uLXRyYW5zcGFyZW50IGEtYnV0dG9uLS10aW55IGhhcy1pY29uXCIgKGNsaWNrKT1cIm1vdmUoY29sdW1uLCAxKVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9saT5cbjx1bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtblNlbGVjdG9yQ29tcG9uZW50IHtcblx0QElucHV0KCkgY29sdW1ucztcblx0QE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIGlkOiBudW1iZXI7XG5cdHB1YmxpYyBjdXJyZW50VGFyZ2V0O1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZUhlbHBlcjogVGFibGVIZWxwZXJTZXJ2aWNlKSB7XG5cdFx0dGhpcy5pZCA9IG5leHRJZCsrO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZURpc3BsYXkoZSwgaW5kZXgpIHtcblx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5jb2x1bW5zW2luZGV4XS5oaWRkZW4gPSBmYWxzZTtcblx0XHRcdHRoaXMuZW5hYmxlQ2hpbGRyZW4odGhpcy5jb2x1bW5zW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuID0gdHJ1ZTtcblx0XHRcdHRoaXMuZGlzYWJsZUNoaWxkcmVuKHRoaXMuY29sdW1uc1tpbmRleF0pO1xuXHRcdH1cblxuXHRcdHRoaXMuZW1pdENvbHVtbnMoKTtcblx0fVxuXG5cdHB1YmxpYyBlbmFibGVDaGlsZHJlbihwYXJlbnQpIHtcblx0XHR0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKChvKSA9PiB7XG5cdFx0XHRpZiAoby5wYXJlbnQgJiYgby5kaXNhYmxlZCAmJiBvLnBhcmVudC5pbmRleE9mKHBhcmVudC52YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdG8uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5lbmFibGVDaGlsZHJlbihvKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG87XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZGlzYWJsZUNoaWxkcmVuKHBhcmVudCkge1xuXHRcdHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoKG8pID0+IHtcblx0XHRcdGlmIChvLnBhcmVudCAmJiAhby5kaXNhYmxlZCAmJiBvLnBhcmVudC5pbmRleE9mKHBhcmVudC52YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdG8uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRvLmhpZGRlbiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZGlzYWJsZUNoaWxkcmVuKG8pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbztcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBtb3ZlKGtleSwgaSkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5jb2x1bW5zLmZpbmRJbmRleCgobykgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMudGFibGVIZWxwZXIuZ2V0VmFsdWUobykgPT09IHRoaXMudGFibGVIZWxwZXIuZ2V0VmFsdWUoa2V5KTtcblx0XHR9KTtcblx0XHRjb25zdCB0YXJnZXQgPSBpbmRleCArIGk7XG5cblx0XHRpZiAodGFyZ2V0IDwgMCB8fCB0YXJnZXQgPiB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpOyAvLyBEZWxldGUgcHJldmlvdXMga2V5IHBvc2l0aW9uXG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZSh0YXJnZXQsIDAgLCBrZXkpOyAvLyBBZGQgbmV3IHBvc2l0aW9uXG5cblx0XHQvLyBVc2UgdGltZW91dCB0byBmaXggcmUtcmVuZGVyaW5nIGlzc3VlXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmVtaXRDb2x1bW5zKCk7XG5cdH1cblxuXHRwdWJsaWMgZW1pdENvbHVtbnMoKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh0aGlzLmNvbHVtbnMpO1xuXHR9XG59XG4iLCJleHBvcnQgY29uc3QgTE9BRF9EQVRBID0gJ0xvYWRpbmcgZGF0YS4uLic7XG5leHBvcnQgY29uc3QgTk9fREFUQSA9ICdObyBkYXRhIGF2YWlsYWJsZS4nO1xuZXhwb3J0IGNvbnN0IE5PX0NPTFVNTlMgPSAnTm8gY29sdW1ucyBhdmFpbGFibGUuJztcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBUYWJsZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiwgT3JkZXJCeSB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcbmltcG9ydCAqIGFzIERFRkFVTFRfTUVTU0FHRVMgZnJvbSAnLi4vdGFibGUubWVzc2FnZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGFibGUnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwieydhLXRhYmxlX193cmFwcGVyLXJlc3BvbnNpdmUnOiByZXNwb25zaXZlfVwiPlxuXHQ8dGFibGUgY2xhc3M9XCJhLXRhYmxlIGEtdGFibGUtLXN0cmlwZWQgYXVpLXRhYmxlXCI+XG5cdFx0PHRoZWFkICpuZ0lmPVwiY29sdW1ucy5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8dHI+XG5cdFx0XHRcdDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbbmdDbGFzc109XCJ0YWJsZUhlbHBlci5nZXRDbGFzcyhjb2x1bW4pXCI+XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5oZWFkZXJDb21wb25lbnRcIj5cblx0XHRcdFx0XHRcdDxhdWktdGFibGUtaGVhZGVyIFtsYWJlbF09XCJ0YWJsZUhlbHBlci5nZXRMYWJlbChjb2x1bW4pXCIgW3ZhbHVlXT1cInRhYmxlSGVscGVyLmdldFZhbHVlKGNvbHVtbilcIiBbY29tcG9uZW50XT1cImNvbHVtbi5oZWFkZXJDb21wb25lbnRcIj48L2F1aS10YWJsZS1oZWFkZXI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyQ29tcG9uZW50XCI+XG5cdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiYWN0aXZlU29ydGluZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uICpuZ0lmPVwiIWNvbHVtbi5kaXNhYmxlU29ydGluZyAmJiB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pICE9PSBhY3RpdmVTb3J0aW5nPy5rZXlcIiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uLS10aW55IGEtYnV0dG9uLS10cmFuc3BhcmVudCBoYXMtaWNvbi1yaWdodFwiIChjbGljayk9XCJzb3J0KGNvbHVtbiwgJ2FzYycpXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgdGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKSB9fSA8c3BhbiBjbGFzcz1cImZhIGZhLXNvcnRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uICpuZ0lmPVwiIWNvbHVtbi5kaXNhYmxlU29ydGluZyAmJiB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pID09PSBhY3RpdmVTb3J0aW5nPy5rZXkgJiYgYWN0aXZlU29ydGluZz8ub3JkZXIgPT09ICdkZXNjJ1wiIGNsYXNzPVwiIGEtYnV0dG9uIGEtYnV0dG9uLS10aW55IGEtYnV0dG9uLS10cmFuc3BhcmVudCBoYXMtaWNvbi1yaWdodFwiIChjbGljayk9XCJzb3J0KGNvbHVtbiwgJ2FzYycpXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgdGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKSB9fSA8c3BhbiBjbGFzcz1cImZhIGZhLXNvcnQtZGVzY1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gKm5nSWY9XCIhY29sdW1uLmRpc2FibGVTb3J0aW5nICYmIHRhYmxlSGVscGVyLmdldFZhbHVlKGNvbHVtbikgPT09IGFjdGl2ZVNvcnRpbmc/LmtleSAmJiBhY3RpdmVTb3J0aW5nPy5vcmRlciA9PT0gJ2FzYydcIiBjbGFzcz1cIiBhLWJ1dHRvbiBhLWJ1dHRvbi0tdGlueSBhLWJ1dHRvbi0tdHJhbnNwYXJlbnQgaGFzLWljb24tcmlnaHRcIiAoY2xpY2spPVwic29ydChjb2x1bW4sICdkZXNjJylcIj5cblx0XHRcdFx0XHRcdFx0XHR7eyB0YWJsZUhlbHBlci5nZXRMYWJlbChjb2x1bW4pIH19IDxzcGFuIGNsYXNzPVwiZmEgZmEtc29ydC1hc2NcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc2FibGVTb3J0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgdGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKSB9fVxuXHRcdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhY3RpdmVTb3J0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdHt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX1cblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8L3RoPlxuXHRcdFx0PC90cj5cblx0XHQ8L3RoZWFkPlxuXHRcdDx0Ym9keT5cblx0XHRcdDx0ciAqbmdJZj1cImxvYWRpbmdcIj5cblx0XHRcdFx0PHRkIFtjb2xTcGFuXT1cImNvbHVtbnMubGVuZ3RoXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlLWxvYWRpbmdcIj5cblx0XHRcdFx0XHRcdHt7IGxvYWREYXRhTWVzc2FnZSB9fSA8c3BhbiBjbGFzcz1cImEtc3Bpbm5lclwiPjwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0XHQ8dHIgKm5nSWY9XCIhbG9hZGluZyAmJiBjb2x1bW5zLmxlbmd0aCA9PT0gMFwiPlxuXHRcdFx0XHQ8dGQ+e3sgbm9Db2x1bW5zTWVzc2FnZSB9fTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdFx0PHRyICpuZ0lmPVwiIWxvYWRpbmcgJiYgKCFyb3dzIHx8IHJvd3MubGVuZ3RoID09PSAwKVwiPlxuXHRcdFx0XHQ8dGQgW2NvbFNwYW5dPVwiY29sdW1ucy5sZW5ndGhcIj57eyBub0RhdGFNZXNzYWdlIH19PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmcgJiYgY29sdW1ucy5sZW5ndGggPiAwXCI+XG5cdFx0XHRcdDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3M7IGxldCByb3dJbmRleCA9IGluZGV4XCIgKGNsaWNrKT1cImNsaWNrUm93KHJvdylcIiBbbmdDbGFzc109XCJ7J2EtdGFibGUtLWNsaWNrYWJsZSc6IGhhc0NsaWNrQWN0aW9ufVwiPlxuXHRcdFx0XHRcdDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbbmdDbGFzc109XCJ0YWJsZUhlbHBlci5nZXRDbGFzcyhjb2x1bW4pXCI+XG5cdFx0XHRcdFx0XHQ8YXVpLXRhYmxlLWNlbGwgW3ZhbHVlXT1cInRhYmxlSGVscGVyLmZvcm1hdFZhbHVlKHJvdywgY29sdW1uLCByb3dJbmRleClcIiBbY29tcG9uZW50XT1cImNvbHVtbi5jb21wb25lbnRcIj48L2F1aS10YWJsZS1jZWxsPlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8L3Rib2R5PlxuXHQ8L3RhYmxlPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHJvd3M6IGFueVtdID0gW107XG5cdEBJbnB1dCgpIGNvbHVtbnM6IChUYWJsZUNvbHVtbnxzdHJpbmcpW10gPSBbXTtcblx0QElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuXHRASW5wdXQoKSByZXNwb25zaXZlID0gdHJ1ZTtcblx0QElucHV0KCkgaGFzQ2xpY2tBY3Rpb24gPSBmYWxzZTtcblx0QElucHV0KCkgYWN0aXZlU29ydGluZzogT3JkZXJCeTsgLy8gSnVzdCBhIHByb3BlcnR5IHRvIHVzZSBpbiB0aGUgdGVtcGxhdGUsIG5vdCBmdW5jdGlvbmFsXG5cdEBJbnB1dCgpIG5vRGF0YU1lc3NhZ2UgPSBERUZBVUxUX01FU1NBR0VTLk5PX0RBVEE7XG5cdEBJbnB1dCgpIGxvYWREYXRhTWVzc2FnZSA9IERFRkFVTFRfTUVTU0FHRVMuTE9BRF9EQVRBO1xuXHRASW5wdXQoKSBub0NvbHVtbnNNZXNzYWdlID0gREVGQVVMVF9NRVNTQUdFUy5OT19DT0xVTU5TO1xuXG5cdEBPdXRwdXQoKSBvcmRlckJ5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHJvd0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyB0YWJsZUhlbHBlcjogVGFibGVIZWxwZXJTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgc29ydChrZXksIG9yZGVyKTogdm9pZCB7XG5cdFx0Y29uc3QgcHJvcCA9IHRoaXMudGFibGVIZWxwZXIuZ2V0VmFsdWUoa2V5KTtcblx0XHR0aGlzLmFjdGl2ZVNvcnRpbmcgPSB7a2V5OiBwcm9wLCBvcmRlcn07XG5cdFx0dGhpcy5vcmRlckJ5LmVtaXQoe2tleTogcHJvcCwgb3JkZXJ9KTtcblx0fVxuXG5cdHB1YmxpYyBjbGlja1Jvdyhyb3dEYXRhOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5oYXNDbGlja0FjdGlvbikge1xuXHRcdFx0dGhpcy5yb3dDbGlja2VkLmVtaXQocm93RGF0YSk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS10YWJsZS1iYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktdGFibGUtYmFyXCI+XG5cdDxkaXYgY2xhc3M9XCJmaWx0ZXJzXCIgI3JlZiBbbmdDbGFzc109XCJ7b3Blbjogb3Blbn1cIj5cblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpVGFibGVCYXJJdGVtXVwiPjwvbmctY29udGVudD5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLXRhYmxlLWJhci1pdGVtXCIgKm5nSWY9XCJvcGVuXCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXRyYW5zcGFyZW50XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+U2hvdyBsZXNzLi4uPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwic2hvdy1tb3JlXCIgKm5nSWY9XCIhb3BlbiAmJiBpbnZpc2libGVJdGVtc1wiPlxuXHRcdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvbiBhLWJ1dHRvbi0tdHJhbnNwYXJlbnRcIiAoY2xpY2spPVwidG9nZ2xlKClcIj5TaG93IG1vcmUuLi48L2J1dHRvbj5cblx0PC9kaXY+XG5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aVRhYmxlQmFyU2VhcmNoXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVCYXJDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcblx0QElucHV0KCkgZmlsdGVyczogRmlsdGVyW10gPSBbXTtcblx0QElucHV0KCkgdGVzdEZpbHRlcjogRmlsdGVyO1xuXHRAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXHRwdWJsaWMgaW52aXNpYmxlSXRlbXMgPSBmYWxzZTtcblxuXHRAVmlld0NoaWxkKCdyZWYnKSByZWY7XG5cblx0cHVibGljIG5nRG9DaGVjaygpIHtcblx0XHR0aGlzLmNvdW50SW52aXNpYmxlSXRlbXMoKTtcblx0fVxuXG5cdHB1YmxpYyBpc0luVmlzaWJsZShyZWN0Q29udGFpbmVyLCByZWN0Q2hpbGQpIHtcblx0XHRyZXR1cm4gcmVjdENvbnRhaW5lci5ib3R0b20gPCByZWN0Q2hpbGQudG9wO1xuXHR9XG5cblx0cHVibGljIGNvdW50SW52aXNpYmxlSXRlbXMoKSB7XG5cdFx0Y29uc3QgcmVjdENvbnRhaW5lciA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgY2hpbGROb2RlcyA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcblxuXHRcdGZvciAobGV0IGkgPSBjaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBvID0gY2hpbGROb2Rlc1tpXTtcblx0XHRcdGlmIChvLm5vZGVOYW1lID09PSAnQVVJLVRBQkxFLUJBUi1JVEVNJyAmJiBvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuXHRcdFx0XHRjb25zdCByZWN0Q2hpbGQgPSBvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRpZiAodGhpcy5pc0luVmlzaWJsZShyZWN0Q29udGFpbmVyLCByZWN0Q2hpbGQpKSB7XG5cdFx0XHRcdFx0dGhpcy5pbnZpc2libGVJdGVtcyA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGkgPT09IDApIHtcblx0XHRcdFx0dGhpcy5pbnZpc2libGVJdGVtcyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0dGhpcy5vcGVuID0gIXRoaXMub3Blbjtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRPbkNoYW5nZXMsXG5cdFR5cGUsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXRhYmxlLWNlbGwnLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAqbmdJZj1cImhhc0NvbXBvbmVudCgpXCI+PC9uZy10ZW1wbGF0ZT5cbjxzcGFuICpuZ0lmPVwiIWhhc0NvbXBvbmVudCgpXCI+e3sgdmFsdWUgfX08L3NwYW4+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBjb21wb25lbnQ6IFR5cGU8YW55Pjtcblx0QElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHsgfVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMubG9hZENvbXBvbmVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBoYXNDb21wb25lbnQoKSB7XG5cdFx0cmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG5cdH1cblxuXHRwdWJsaWMgbG9hZENvbXBvbmVudCgpIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xuXHRcdGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWY7XG5cdFx0dmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0KDxDZWxsPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHRoaXMudmFsdWU7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdE9uQ2hhbmdlcyxcblx0VHlwZSxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Q2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGFibGUtaGVhZGVyJyxcblx0dGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgKm5nSWY9XCJoYXNDb21wb25lbnQoKVwiPjwvbmctdGVtcGxhdGU+XG48c3BhbiAqbmdJZj1cIiFoYXNDb21wb25lbnQoKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBjb21wb25lbnQ6IFR5cGU8YW55Pjtcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgdmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHsgfVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMubG9hZENvbXBvbmVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBoYXNDb21wb25lbnQoKSB7XG5cdFx0cmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG5cdH1cblxuXHRwdWJsaWMgbG9hZENvbXBvbmVudCgpIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xuXHRcdGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWY7XG5cdFx0dmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0KDxDZWxsPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHRoaXMudmFsdWU7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUJhckNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtYmFyL3RhYmxlLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1jZWxsL3RhYmxlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1oZWFkZXIvdGFibGUtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRDb2x1bW5TZWxlY3RvckNvbXBvbmVudCxcblx0VGFibGVDb21wb25lbnQsXG5cdFRhYmxlQmFyQ29tcG9uZW50LFxuXHRUYWJsZUNlbGxDb21wb25lbnQsXG5cdFRhYmxlSGVhZGVyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IEhvc3RCaW5kaW5nLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aVRhYmxlQmFySXRlbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUJhckl0ZW1EaXJlY3RpdmUge1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmF1aS10YWJsZS1iYXItaXRlbScpIHNldENsYXNzID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IEhvc3RCaW5kaW5nLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aVRhYmxlQmFyU2VhcmNoXScsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQmFyU2VhcmNoRGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktdGFibGUtYmFyLXNlYXJjaCcpIHNldENsYXNzID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IFRhYmxlQmFySXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtYmFyLWl0ZW0vdGFibGUtYmFyLWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYmxlQmFyU2VhcmNoRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1iYXItc2VhcmNoL3RhYmxlLWJhci1zZWFyY2guZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IERpcmVjdGl2ZXMgPSBbXG5cdFRhYmxlQmFySXRlbURpcmVjdGl2ZSxcblx0VGFibGVCYXJTZWFyY2hEaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzJztcblxuaW1wb3J0IHsgVGFibGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFRhYmxlSGVscGVyU2VydmljZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgVGFibGVSZWNvcmQsIFRhYmxlQ29sdW1uLCBPcmRlckJ5IH0gZnJvbSAnLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVGFibGUge1xuXHQvLyBPcmlnaW5hbCBkYXRhIChqc29uIGFycmF5IGZyb20gdGhlIHNlcnZlcilcblx0cHJpdmF0ZSByYXdEYXRhOiBUYWJsZVJlY29yZFtdID0gW107XG5cblx0Ly8gT3JpZ2luYWwgY29sdW1ucyBjb25maWcgKGZyb20gdGhlIGFwcClcblx0cHJpdmF0ZSByYXdDb2x1bW5zOiAoVGFibGVDb2x1bW58c3RyaW5nKVtdO1xuXG5cdC8vIEFycmF5IG9mIGZpbHRlcnNcblx0cHVibGljIGZpbHRlcnM6IEZpbHRlcltdID0gW107XG5cblx0Ly8gUGFnaW5hdGlvblxuXHRwdWJsaWMgcGFnZTtcblx0cHVibGljIGxpbWl0O1xuXHRwdWJsaWMgbGFzdFBhZ2U7XG5cblx0Ly8gU29ydGluZ1xuXHRwdWJsaWMgb3JkZXJCeTogT3JkZXJCeTtcblxuXHRwdWJsaWMgZmlsdGVyZWREYXRhOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHB1YmxpYyByb3dzOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHB1YmxpYyBjb2x1bW5zOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cblx0Ly8gSW5pdCBzdHVmZi4uLlxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0Ly8gLS0tLS0tLS0tLSBHRVRURVJTIHwgU0VUVEVSUyAtLS0tLS0tLS0tIC8vXG5cblx0cHVibGljIHNldFJhd0RhdGEoZGF0YTogYW55W10pIHtcblx0XHR0aGlzLnJhd0RhdGEgPSBkYXRhO1xuXHRcdHRoaXMudXBkYXRlRmlsdGVyZWREYXRhKCk7XG5cdFx0dGhpcy5zZXRMYXN0UGFnZSgpO1xuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIHNldFJhd0NvbHVtbnMoY29sdW1ucykge1xuXHRcdHRoaXMucmF3Q29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0dGhpcy51cGRhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0RmlsdGVycyhmaWx0ZXJzOiBGaWx0ZXJbXSkge1xuXHRcdHRoaXMuZmlsdGVycyA9IGZpbHRlcnM7XG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJlZERhdGEoKTtcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgYWRkRmlsdGVyKGZpbHRlcjogRmlsdGVyKSB7XG5cdFx0dGhpcy5maWx0ZXJzLnB1c2goZmlsdGVyKTtcblx0XHR0aGlzLnVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuXHRcdHRoaXMuc2V0TGFzdFBhZ2UoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd3MoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRQYWdlKGkpIHtcblx0XHR0aGlzLnBhZ2UgPSBOdW1iZXIoaSk7IC8vIHNvbWV0aGluZyB3ZWlyZCBudW1iZXIgPjwgc3RyaW5nXG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0TGltaXQoaTogbnVtYmVyKSB7XG5cdFx0dGhpcy5saW1pdCA9IE51bWJlcihpKTsgLy8gc29tZXRoaW5nIHdlaXJkIG51bWJlciA+PCBzdHJpbmdcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0aWYgKHRoaXMubGFzdFBhZ2UgJiYgdGhpcy5wYWdlID4gdGhpcy5sYXN0UGFnZSkge1xuXHRcdFx0dGhpcy5wYWdlID0gdGhpcy5sYXN0UGFnZTtcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0T3JkZXJCeShvKSB7XG5cdFx0dGhpcy5vcmRlckJ5ID0gbztcblx0XHR0aGlzLnVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuXHRcdHRoaXMuc2V0TGFzdFBhZ2UoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd3MoKTtcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0gVklSVFVBTCBQUk9QUyAtLS0tLS0tLS0tIC8vXG5cblx0cHVibGljIGdldE9mZnNldCgpIHtcblx0XHRyZXR1cm4gKHRoaXMucGFnZSAqIHRoaXMubGltaXQpIC0gdGhpcy5saW1pdDtcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0gUFJPUEVSVFkgSEVMUEVSUyAtLS0tLS0tLS0tIC8vXG5cblx0cHVibGljIHNldExhc3RQYWdlKCkge1xuXHRcdGNvbnN0IGQgPSB0aGlzLmZpbHRlcmVkRGF0YS5nZXRWYWx1ZSgpO1xuXHRcdHRoaXMubGFzdFBhZ2UgPSBNYXRoLmNlaWwoZCA/IGQubGVuZ3RoIC8gdGhpcy5saW1pdCA6IDApO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZVJvd3MoKSB7XG5cdFx0bGV0IGQgPSB0aGlzLmZpbHRlcmVkRGF0YS5nZXRWYWx1ZSgpO1xuXG5cdFx0aWYgKHRoaXMub3JkZXJCeSkge1xuXHRcdFx0ZCA9IHRoaXMuc29ydERhdGEoZCwgdGhpcy5vcmRlckJ5LmtleSwgdGhpcy5vcmRlckJ5Lm9yZGVyKTtcblx0XHR9XG5cblx0XHRkID0gdGhpcy5zZWxlY3REYXRhKGQsIHRoaXMubGltaXQsIHRoaXMuZ2V0T2Zmc2V0KCkpO1xuXG5cdFx0dGhpcy5yb3dzLm5leHQoZCk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlQ29sdW1ucygpIHtcblx0XHRjb25zdCBjID0gdGhpcy5maWx0ZXJIaWRkZW5Db2x1bW5zKHRoaXMucmF3Q29sdW1ucyk7XG5cdFx0dGhpcy5jb2x1bW5zLm5leHQoYyk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlRmlsdGVyZWREYXRhKCkge1xuXHRcdHRoaXMuZmlsdGVyZWREYXRhLm5leHQodGhpcy5maWx0ZXJEYXRhKHRoaXMucmF3RGF0YSwgdGhpcy5maWx0ZXJzKSk7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tIEFCU1RSQUNUIEhFTFBFUlMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBmaWx0ZXJEYXRhKGRhdGEsIGZpbHRlcnM6IEZpbHRlcltdKSB7XG5cdFx0bGV0IGQgPSBkYXRhLnNsaWNlKCk7XG5cblx0XHRmaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuXHRcdFx0ZCA9IGZpbHRlci5wYXJzZURhdGEoZCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZDtcblx0fVxuXG5cdHB1YmxpYyBzb3J0RGF0YShkYXRhLCBrZXksIG9yZGVyID0gJ2FzYycpIHtcblx0XHRpZiAoIWRhdGEgfHwgIWRhdGEuc29ydCB8fCAha2V5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZCA9IGRhdGEuc2xpY2UoKTtcblx0XHRkLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdGlmIChhW2tleV0gPCBiW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIG9yZGVyID09PSAnYXNjJyA/IC0xIDogMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFba2V5XSA+IGJba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gb3JkZXIgPT09ICdhc2MnID8gMSA6IC0xO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZDtcblx0fVxuXG5cdHB1YmxpYyBzZWxlY3REYXRhKGRhdGEsIGxpbWl0LCBvZmZzZXQpIHtcblx0XHRpZiAoZGF0YSAmJiBsaW1pdCA+PSAwICYmIG9mZnNldCA+PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIGxpbWl0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVySGlkZGVuQ29sdW1ucyhjb2x1bW5zKSB7XG5cdFx0cmV0dXJuIGNvbHVtbnMuZmlsdGVyKChvKSA9PiB7XG5cdFx0XHRyZXR1cm4gIW8uaGlkZGVuO1xuXHRcdH0pO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiREVGQVVMVF9NRVNTQUdFUy5OT19EQVRBIiwiREVGQVVMVF9NRVNTQUdFUy5MT0FEX0RBVEEiLCJERUZBVUxUX01FU1NBR0VTLk5PX0NPTFVNTlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztJQUtRLHFDQUFROzs7O2NBQUMsR0FBeUI7UUFDeEMsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLG1CQUFDLEdBQWtCLEdBQUUsS0FBSyxxQkFBRyxHQUFhLENBQUEsQ0FBQzs7Ozs7O0lBRzFFLHFDQUFROzs7O2NBQUMsR0FBeUI7UUFDeEMsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLG1CQUFDLEdBQWtCLEdBQUUsS0FBSyxxQkFBRyxHQUFhLENBQUEsQ0FBQzs7Ozs7O0lBRzFFLHFDQUFROzs7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