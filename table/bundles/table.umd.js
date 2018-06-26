(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs/BehaviorSubject')) :
    typeof define === 'function' && define.amd ? define('table', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs/BehaviorSubject'], factory) :
    (factory((global.table = {}),global.ng.core,global.ng.common,global.ng.forms,global.rxjs.BehaviorSubject));
}(this, (function (exports,core,common,forms,BehaviorSubject) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TableHelperService = (function () {
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
                return key.hasOwnProperty('label') ? ((key)).label : /** @type {?} */ (key);
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
                return key.hasOwnProperty('value') ? ((key)).value : /** @type {?} */ (key);
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
                return key.hasOwnProperty('classList') ? ((key)).classList.join(' ') : /** @type {?} */ (key);
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
            { type: core.Injectable },
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
    var ColumnSelectorComponent = (function () {
        function ColumnSelectorComponent(tableHelper) {
            this.tableHelper = tableHelper;
            this.update = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'aui-column-selector',
                        template: "<ul class=\"a-list a-list--lined aui-column-selector\">\n\t<li *ngFor=\"let column of columns; let i = index; let isLast = last; let isFirst = first;\" class=\"animated\" [ngClass]=\"{show: i === currentTarget}\">\n\t\t<div class=\"a-input__checkbox a-input__checkbox--small\">\n\t\t\t<input type=\"checkbox\" id=\"checkbox-{{ id }}-{{ i }}-{{ tableHelper.getValue(column) }}\" name=\"checkbox-{{ tableHelper.getValue(column) }}\" [checked]=\"!column.hidden\" (change)=\"updateDisplay($event, i)\" [disabled]=\"column.disabled\">\n\t\t\t<label for=\"checkbox-{{ id }}-{{ i }}-{{ tableHelper.getValue(column) }}\">{{ tableHelper.getLabel(column) }}</label>\n\t\t</div>\n\t\t<div class=\"select-actions\">\n\t\t\t<button [disabled]=\"isFirst\" class=\"a-button-transparent a-button--tiny has-icon\" (click)=\"move(column, -1)\">\n\t\t\t\t<span class=\"fa fa-angle-up\"></span>\n\t\t\t</button>\n\t\t\t<button [disabled]=\"isLast\" class=\"a-button-transparent a-button--tiny has-icon\" (click)=\"move(column, 1)\">\n\t\t\t\t<span class=\"fa fa-angle-down\"></span>\n\t\t\t</button>\n\t\t</div>\n\t</li>\n<ul>\n",
                    },] },
        ];
        /** @nocollapse */
        ColumnSelectorComponent.ctorParameters = function () {
            return [
                { type: TableHelperService }
            ];
        };
        ColumnSelectorComponent.propDecorators = {
            columns: [{ type: core.Input }],
            update: [{ type: core.Output }]
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
    var TableComponent = (function () {
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
            this.orderBy = new core.EventEmitter();
            this.rowClicked = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'aui-table',
                        template: "<div [ngClass]=\"{'a-table__wrapper-responsive': responsive}\">\n\t<table class=\"a-table a-table--striped aui-table\">\n\t\t<thead *ngIf=\"columns.length > 0\">\n\t\t\t<tr>\n\t\t\t\t<th *ngFor=\"let column of columns\" [ngClass]=\"tableHelper.getClass(column)\">\n\t\t\t\t\t<ng-container *ngIf=\"column.headerComponent\">\n\t\t\t\t\t\t<aui-table-header [label]=\"tableHelper.getLabel(column)\" [value]=\"tableHelper.getValue(column)\" [component]=\"column.headerComponent\"></aui-table-header>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-container *ngIf=\"!column.headerComponent\">\n\t\t\t\t\t\t<ng-container *ngIf=\"activeSorting\">\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) !== activeSorting?.key\" class=\"a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'asc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) === activeSorting?.key && activeSorting?.order === 'desc'\" class=\" a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'asc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort-desc\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) === activeSorting?.key && activeSorting?.order === 'asc'\" class=\" a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'desc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort-asc\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"column.disableSorting\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }}\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<ng-container *ngIf=\"!activeSorting\">\n\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }}\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngIf=\"loading\">\n\t\t\t\t<td [colSpan]=\"columns.length\">\n\t\t\t\t\t<div class=\"table-loading\">\n\t\t\t\t\t\t{{ loadDataMessage }} <span class=\"a-spinner\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"!loading && columns.length === 0\">\n\t\t\t\t<td>{{ noColumnsMessage }}</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"!loading && (!rows || rows.length === 0)\">\n\t\t\t\t<td [colSpan]=\"columns.length\">{{ noDataMessage }}</td>\n\t\t\t</tr>\n\t\t\t<ng-container *ngIf=\"!loading && columns.length > 0\">\n\t\t\t\t<tr *ngFor=\"let row of rows; let rowIndex = index\" (click)=\"clickRow(row)\" [ngClass]=\"{'a-table--clickable': hasClickAction}\">\n\t\t\t\t\t<td *ngFor=\"let column of columns\" [ngClass]=\"tableHelper.getClass(column)\">\n\t\t\t\t\t\t<aui-table-cell [value]=\"tableHelper.formatValue(row, column, rowIndex)\" [component]=\"column.component\"></aui-table-cell>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\t\t</tbody>\n\t</table>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () {
            return [
                { type: TableHelperService }
            ];
        };
        TableComponent.propDecorators = {
            rows: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            responsive: [{ type: core.Input }],
            hasClickAction: [{ type: core.Input }],
            activeSorting: [{ type: core.Input }],
            noDataMessage: [{ type: core.Input }],
            loadDataMessage: [{ type: core.Input }],
            noColumnsMessage: [{ type: core.Input }],
            orderBy: [{ type: core.Output }],
            rowClicked: [{ type: core.Output }]
        };
        return TableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TableBarComponent = (function () {
        function TableBarComponent() {
            this.filters = [];
            this.filter = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'aui-table-bar',
                        template: "<div class=\"aui-table-bar\">\n\t<div class=\"filters\" #ref [ngClass]=\"{open: open}\">\n\t\t<ng-content select=\"[auiTableBarItem]\"></ng-content>\n\t\t<div class=\"aui-table-bar-item\" *ngIf=\"open\">\n\t\t\t<button class=\"a-button a-button--transparent\" (click)=\"toggle()\">Show less...</button>\n\t\t</div>\n\t</div>\n\t<div class=\"show-more\" *ngIf=\"!open && invisibleItems\">\n\t\t<button class=\"a-button a-button--transparent\" (click)=\"toggle()\">Show more...</button>\n\t</div>\n\n\t<ng-content select=\"[auiTableBarSearch]\"></ng-content>\n</div>\n",
                    },] },
        ];
        TableBarComponent.propDecorators = {
            filters: [{ type: core.Input }],
            testFilter: [{ type: core.Input }],
            filter: [{ type: core.Output }],
            ref: [{ type: core.ViewChild, args: ['ref',] }]
        };
        return TableBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TableCellComponent = (function () {
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
                ((componentRef.instance)).data = this.value;
                this.changeDetectionRef.detectChanges();
            };
        TableCellComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-table-cell',
                        template: "<ng-template *ngIf=\"hasComponent()\"></ng-template>\n<span *ngIf=\"!hasComponent()\">{{ value }}</span>\n",
                    },] },
        ];
        /** @nocollapse */
        TableCellComponent.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.ComponentFactoryResolver },
                { type: core.ChangeDetectorRef }
            ];
        };
        TableCellComponent.propDecorators = {
            component: [{ type: core.Input }],
            value: [{ type: core.Input }]
        };
        return TableCellComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TableHeaderComponent = (function () {
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
                ((componentRef.instance)).data = this.value;
                this.changeDetectionRef.detectChanges();
            };
        TableHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-table-header',
                        template: "<ng-template *ngIf=\"hasComponent()\"></ng-template>\n<span *ngIf=\"!hasComponent()\">{{ label }}</span>\n",
                    },] },
        ];
        /** @nocollapse */
        TableHeaderComponent.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.ComponentFactoryResolver },
                { type: core.ChangeDetectorRef }
            ];
        };
        TableHeaderComponent.propDecorators = {
            component: [{ type: core.Input }],
            label: [{ type: core.Input }],
            value: [{ type: core.Input }]
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
    var TableBarItemDirective = (function () {
        function TableBarItemDirective() {
            this.setClass = true;
        }
        TableBarItemDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[auiTableBarItem]',
                    },] },
        ];
        TableBarItemDirective.propDecorators = {
            setClass: [{ type: core.HostBinding, args: ['class.aui-table-bar-item',] }]
        };
        return TableBarItemDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TableBarSearchDirective = (function () {
        function TableBarSearchDirective() {
            this.setClass = true;
        }
        TableBarSearchDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[auiTableBarSearch]',
                    },] },
        ];
        TableBarSearchDirective.propDecorators = {
            setClass: [{ type: core.HostBinding, args: ['class.aui-table-bar-search',] }]
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
    var TableModule = (function () {
        function TableModule() {
        }
        TableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
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
    var Table = (function () {
        // Init stuff...
        function Table() {
            this.rawData = [];
            this.filters = [];
            this.filteredData = new BehaviorSubject.BehaviorSubject([]);
            this.rows = new BehaviorSubject.BehaviorSubject([]);
            this.columns = new BehaviorSubject.BehaviorSubject([]);
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
                if (order === void 0) {
                    order = 'asc';
                }
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

    exports.TableModule = TableModule;
    exports.ColumnSelectorComponent = ColumnSelectorComponent;
    exports.TableComponent = TableComponent;
    exports.TableCellComponent = TableCellComponent;
    exports.TableHeaderComponent = TableHeaderComponent;
    exports.TableBarComponent = TableBarComponent;
    exports.Table = Table;
    exports.TableHelperService = TableHelperService;
    exports.ɵa = Components;
    exports.ɵb = Directives;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90YWJsZS9saWIvdGFibGUvc2VydmljZXMvdGFibGUtaGVscGVyLnNlcnZpY2UudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9jb21wb25lbnRzL2NvbHVtbi1zZWxlY3Rvci9jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY29tcG9uZW50cy90YWJsZS5tZXNzYWdlcy50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY29tcG9uZW50cy90YWJsZS1iYXIvdGFibGUtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtY2VsbC90YWJsZS1jZWxsLmNvbXBvbmVudC50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvZGlyZWN0aXZlcy90YWJsZS1iYXItaXRlbS90YWJsZS1iYXItaXRlbS5kaXJlY3RpdmUudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9kaXJlY3RpdmVzL3RhYmxlLWJhci1zZWFyY2gvdGFibGUtYmFyLXNlYXJjaC5kaXJlY3RpdmUudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9kaXJlY3RpdmVzL2luZGV4LnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvdGFibGUubW9kdWxlLnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY2xhc3Nlcy90YWJsZS5jbGFzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiB9IGZyb20gJy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVscGVyU2VydmljZSB7XG5cdHB1YmxpYyBnZXRMYWJlbChrZXk6IChUYWJsZUNvbHVtbnxzdHJpbmcpKTogc3RyaW5nIHtcblx0XHRyZXR1cm4ga2V5Lmhhc093blByb3BlcnR5KCdsYWJlbCcpID8gKGtleSBhcyBUYWJsZUNvbHVtbikubGFiZWwgOiBrZXkgYXMgc3RyaW5nO1xuXHR9XG5cblx0cHVibGljIGdldFZhbHVlKGtleTogKFRhYmxlQ29sdW1ufHN0cmluZykpOiBzdHJpbmcge1xuXHRcdHJldHVybiBrZXkuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyAoa2V5IGFzIFRhYmxlQ29sdW1uKS52YWx1ZSA6IGtleSBhcyBzdHJpbmc7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Q2xhc3Moa2V5OiAoVGFibGVDb2x1bW58c3RyaW5nKSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGtleS5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NMaXN0JykgPyAoa2V5IGFzIFRhYmxlQ29sdW1uKS5jbGFzc0xpc3Quam9pbignICcpIDoga2V5IGFzIHN0cmluZztcblx0fVxuXG5cdHB1YmxpYyBmb3JtYXRWYWx1ZShpdGVtLCBrZXksIGluZGV4KTogYW55IHtcblx0XHRjb25zdCB2YWx1ZSA9IGl0ZW1bdGhpcy5nZXRWYWx1ZShrZXkpXTtcblx0XHRyZXR1cm4ga2V5LmZvcm1hdCA/IGtleS5mb3JtYXQodmFsdWUsIGtleSwgaXRlbSwgaW5kZXgpIDogdmFsdWU7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZSc7XG5cbi8qKiBVc2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRCdzIGZvciBlYWNoIGNvbHVtbiBzZWxlY3RvciBjb21wb25lbnQgKGlkZWEgZnJvbSBBbmd1bGFyIE1hdGVyaWFsIC0tPiB0YWItZ3JvdXAgY29tcG9uZW50KSAqL1xubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jb2x1bW4tc2VsZWN0b3InLFxuXHR0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cImEtbGlzdCBhLWxpc3QtLWxpbmVkIGF1aS1jb2x1bW4tc2VsZWN0b3JcIj5cblx0PGxpICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uczsgbGV0IGkgPSBpbmRleDsgbGV0IGlzTGFzdCA9IGxhc3Q7IGxldCBpc0ZpcnN0ID0gZmlyc3Q7XCIgY2xhc3M9XCJhbmltYXRlZFwiIFtuZ0NsYXNzXT1cIntzaG93OiBpID09PSBjdXJyZW50VGFyZ2V0fVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0X19jaGVja2JveCBhLWlucHV0X19jaGVja2JveC0tc21hbGxcIj5cblx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94LXt7IGlkIH19LXt7IGkgfX0te3sgdGFibGVIZWxwZXIuZ2V0VmFsdWUoY29sdW1uKSB9fVwiIG5hbWU9XCJjaGVja2JveC17eyB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pIH19XCIgW2NoZWNrZWRdPVwiIWNvbHVtbi5oaWRkZW5cIiAoY2hhbmdlKT1cInVwZGF0ZURpc3BsYXkoJGV2ZW50LCBpKVwiIFtkaXNhYmxlZF09XCJjb2x1bW4uZGlzYWJsZWRcIj5cblx0XHRcdDxsYWJlbCBmb3I9XCJjaGVja2JveC17eyBpZCB9fS17eyBpIH19LXt7IHRhYmxlSGVscGVyLmdldFZhbHVlKGNvbHVtbikgfX1cIj57eyB0YWJsZUhlbHBlci5nZXRMYWJlbChjb2x1bW4pIH19PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwic2VsZWN0LWFjdGlvbnNcIj5cblx0XHRcdDxidXR0b24gW2Rpc2FibGVkXT1cImlzRmlyc3RcIiBjbGFzcz1cImEtYnV0dG9uLXRyYW5zcGFyZW50IGEtYnV0dG9uLS10aW55IGhhcy1pY29uXCIgKGNsaWNrKT1cIm1vdmUoY29sdW1uLCAtMSlcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS11cFwiPjwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiaXNMYXN0XCIgY2xhc3M9XCJhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tdGlueSBoYXMtaWNvblwiIChjbGljayk9XCJtb3ZlKGNvbHVtbiwgMSlcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvbGk+XG48dWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGNvbHVtbnM7XG5cdEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyBpZDogbnVtYmVyO1xuXHRwdWJsaWMgY3VycmVudFRhcmdldDtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGFibGVIZWxwZXI6IFRhYmxlSGVscGVyU2VydmljZSkge1xuXHRcdHRoaXMuaWQgPSBuZXh0SWQrKztcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVEaXNwbGF5KGUsIGluZGV4KSB7XG5cdFx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuID0gZmFsc2U7XG5cdFx0XHR0aGlzLmVuYWJsZUNoaWxkcmVuKHRoaXMuY29sdW1uc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNbaW5kZXhdLmhpZGRlbiA9IHRydWU7XG5cdFx0XHR0aGlzLmRpc2FibGVDaGlsZHJlbih0aGlzLmNvbHVtbnNbaW5kZXhdKTtcblx0XHR9XG5cblx0XHR0aGlzLmVtaXRDb2x1bW5zKCk7XG5cdH1cblxuXHRwdWJsaWMgZW5hYmxlQ2hpbGRyZW4ocGFyZW50KSB7XG5cdFx0dGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcCgobykgPT4ge1xuXHRcdFx0aWYgKG8ucGFyZW50ICYmIG8uZGlzYWJsZWQgJiYgby5wYXJlbnQuaW5kZXhPZihwYXJlbnQudmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRvLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuZW5hYmxlQ2hpbGRyZW4obyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGRpc2FibGVDaGlsZHJlbihwYXJlbnQpIHtcblx0XHR0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKChvKSA9PiB7XG5cdFx0XHRpZiAoby5wYXJlbnQgJiYgIW8uZGlzYWJsZWQgJiYgby5wYXJlbnQuaW5kZXhPZihwYXJlbnQudmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRvLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0by5oaWRkZW4gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmRpc2FibGVDaGlsZHJlbihvKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG87XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbW92ZShrZXksIGkpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuY29sdW1ucy5maW5kSW5kZXgoKG8pID0+IHtcblx0XHRcdHJldHVybiB0aGlzLnRhYmxlSGVscGVyLmdldFZhbHVlKG8pID09PSB0aGlzLnRhYmxlSGVscGVyLmdldFZhbHVlKGtleSk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gaW5kZXggKyBpO1xuXG5cdFx0aWYgKHRhcmdldCA8IDAgfHwgdGFyZ2V0ID4gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvbHVtbnMuc3BsaWNlKGluZGV4LCAxKTsgLy8gRGVsZXRlIHByZXZpb3VzIGtleSBwb3NpdGlvblxuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UodGFyZ2V0LCAwICwga2V5KTsgLy8gQWRkIG5ldyBwb3NpdGlvblxuXG5cdFx0Ly8gVXNlIHRpbWVvdXQgdG8gZml4IHJlLXJlbmRlcmluZyBpc3N1ZVxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbWl0Q29sdW1ucygpO1xuXHR9XG5cblx0cHVibGljIGVtaXRDb2x1bW5zKCkge1xuXHRcdHRoaXMudXBkYXRlLmVtaXQodGhpcy5jb2x1bW5zKTtcblx0fVxufVxuIiwiZXhwb3J0IGNvbnN0IExPQURfREFUQSA9ICdMb2FkaW5nIGRhdGEuLi4nO1xuZXhwb3J0IGNvbnN0IE5PX0RBVEEgPSAnTm8gZGF0YSBhdmFpbGFibGUuJztcbmV4cG9ydCBjb25zdCBOT19DT0xVTU5TID0gJ05vIGNvbHVtbnMgYXZhaWxhYmxlLic7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgVGFibGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGFibGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVDb2x1bW4sIE9yZGVyQnkgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZS50eXBlcyc7XG5pbXBvcnQgKiBhcyBERUZBVUxUX01FU1NBR0VTIGZyb20gJy4uL3RhYmxlLm1lc3NhZ2VzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXRhYmxlJyxcblx0dGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cInsnYS10YWJsZV9fd3JhcHBlci1yZXNwb25zaXZlJzogcmVzcG9uc2l2ZX1cIj5cblx0PHRhYmxlIGNsYXNzPVwiYS10YWJsZSBhLXRhYmxlLS1zdHJpcGVkIGF1aS10YWJsZVwiPlxuXHRcdDx0aGVhZCAqbmdJZj1cImNvbHVtbnMubGVuZ3RoID4gMFwiPlxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25nQ2xhc3NdPVwidGFibGVIZWxwZXIuZ2V0Q2xhc3MoY29sdW1uKVwiPlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uaGVhZGVyQ29tcG9uZW50XCI+XG5cdFx0XHRcdFx0XHQ8YXVpLXRhYmxlLWhlYWRlciBbbGFiZWxdPVwidGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKVwiIFt2YWx1ZV09XCJ0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pXCIgW2NvbXBvbmVudF09XCJjb2x1bW4uaGVhZGVyQ29tcG9uZW50XCI+PC9hdWktdGFibGUtaGVhZGVyPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmhlYWRlckNvbXBvbmVudFwiPlxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGl2ZVNvcnRpbmdcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cIiFjb2x1bW4uZGlzYWJsZVNvcnRpbmcgJiYgdGFibGVIZWxwZXIuZ2V0VmFsdWUoY29sdW1uKSAhPT0gYWN0aXZlU29ydGluZz8ua2V5XCIgY2xhc3M9XCJhLWJ1dHRvbiBhLWJ1dHRvbi0tdGlueSBhLWJ1dHRvbi0tdHJhbnNwYXJlbnQgaGFzLWljb24tcmlnaHRcIiAoY2xpY2spPVwic29ydChjb2x1bW4sICdhc2MnKVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX0gPHNwYW4gY2xhc3M9XCJmYSBmYS1zb3J0XCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cIiFjb2x1bW4uZGlzYWJsZVNvcnRpbmcgJiYgdGFibGVIZWxwZXIuZ2V0VmFsdWUoY29sdW1uKSA9PT0gYWN0aXZlU29ydGluZz8ua2V5ICYmIGFjdGl2ZVNvcnRpbmc/Lm9yZGVyID09PSAnZGVzYydcIiBjbGFzcz1cIiBhLWJ1dHRvbiBhLWJ1dHRvbi0tdGlueSBhLWJ1dHRvbi0tdHJhbnNwYXJlbnQgaGFzLWljb24tcmlnaHRcIiAoY2xpY2spPVwic29ydChjb2x1bW4sICdhc2MnKVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX0gPHNwYW4gY2xhc3M9XCJmYSBmYS1zb3J0LWRlc2NcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uICpuZ0lmPVwiIWNvbHVtbi5kaXNhYmxlU29ydGluZyAmJiB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pID09PSBhY3RpdmVTb3J0aW5nPy5rZXkgJiYgYWN0aXZlU29ydGluZz8ub3JkZXIgPT09ICdhc2MnXCIgY2xhc3M9XCIgYS1idXR0b24gYS1idXR0b24tLXRpbnkgYS1idXR0b24tLXRyYW5zcGFyZW50IGhhcy1pY29uLXJpZ2h0XCIgKGNsaWNrKT1cInNvcnQoY29sdW1uLCAnZGVzYycpXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgdGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKSB9fSA8c3BhbiBjbGFzcz1cImZhIGZhLXNvcnQtYXNjXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5kaXNhYmxlU29ydGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdHt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX1cblx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhYWN0aXZlU29ydGluZ1wiPlxuXHRcdFx0XHRcdFx0XHR7eyB0YWJsZUhlbHBlci5nZXRMYWJlbChjb2x1bW4pIH19XG5cdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PC90aD5cblx0XHRcdDwvdHI+XG5cdFx0PC90aGVhZD5cblx0XHQ8dGJvZHk+XG5cdFx0XHQ8dHIgKm5nSWY9XCJsb2FkaW5nXCI+XG5cdFx0XHRcdDx0ZCBbY29sU3Bhbl09XCJjb2x1bW5zLmxlbmd0aFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS1sb2FkaW5nXCI+XG5cdFx0XHRcdFx0XHR7eyBsb2FkRGF0YU1lc3NhZ2UgfX0gPHNwYW4gY2xhc3M9XCJhLXNwaW5uZXJcIj48L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdFx0PHRyICpuZ0lmPVwiIWxvYWRpbmcgJiYgY29sdW1ucy5sZW5ndGggPT09IDBcIj5cblx0XHRcdFx0PHRkPnt7IG5vQ29sdW1uc01lc3NhZ2UgfX08L3RkPlxuXHRcdFx0PC90cj5cblx0XHRcdDx0ciAqbmdJZj1cIiFsb2FkaW5nICYmICghcm93cyB8fCByb3dzLmxlbmd0aCA9PT0gMClcIj5cblx0XHRcdFx0PHRkIFtjb2xTcGFuXT1cImNvbHVtbnMubGVuZ3RoXCI+e3sgbm9EYXRhTWVzc2FnZSB9fTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nICYmIGNvbHVtbnMubGVuZ3RoID4gMFwiPlxuXHRcdFx0XHQ8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzOyBsZXQgcm93SW5kZXggPSBpbmRleFwiIChjbGljayk9XCJjbGlja1Jvdyhyb3cpXCIgW25nQ2xhc3NdPVwieydhLXRhYmxlLS1jbGlja2FibGUnOiBoYXNDbGlja0FjdGlvbn1cIj5cblx0XHRcdFx0XHQ8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25nQ2xhc3NdPVwidGFibGVIZWxwZXIuZ2V0Q2xhc3MoY29sdW1uKVwiPlxuXHRcdFx0XHRcdFx0PGF1aS10YWJsZS1jZWxsIFt2YWx1ZV09XCJ0YWJsZUhlbHBlci5mb3JtYXRWYWx1ZShyb3csIGNvbHVtbiwgcm93SW5kZXgpXCIgW2NvbXBvbmVudF09XCJjb2x1bW4uY29tcG9uZW50XCI+PC9hdWktdGFibGUtY2VsbD5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC90Ym9keT5cblx0PC90YWJsZT5cbjwvZGl2PlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSByb3dzOiBhbnlbXSA9IFtdO1xuXHRASW5wdXQoKSBjb2x1bW5zOiAoVGFibGVDb2x1bW58c3RyaW5nKVtdID0gW107XG5cdEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTtcblx0QElucHV0KCkgcmVzcG9uc2l2ZSA9IHRydWU7XG5cdEBJbnB1dCgpIGhhc0NsaWNrQWN0aW9uID0gZmFsc2U7XG5cdEBJbnB1dCgpIGFjdGl2ZVNvcnRpbmc6IE9yZGVyQnk7IC8vIEp1c3QgYSBwcm9wZXJ0eSB0byB1c2UgaW4gdGhlIHRlbXBsYXRlLCBub3QgZnVuY3Rpb25hbFxuXHRASW5wdXQoKSBub0RhdGFNZXNzYWdlID0gREVGQVVMVF9NRVNTQUdFUy5OT19EQVRBO1xuXHRASW5wdXQoKSBsb2FkRGF0YU1lc3NhZ2UgPSBERUZBVUxUX01FU1NBR0VTLkxPQURfREFUQTtcblx0QElucHV0KCkgbm9Db2x1bW5zTWVzc2FnZSA9IERFRkFVTFRfTUVTU0FHRVMuTk9fQ09MVU1OUztcblxuXHRAT3V0cHV0KCkgb3JkZXJCeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSByb3dDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdGFibGVIZWxwZXI6IFRhYmxlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIHNvcnQoa2V5LCBvcmRlcik6IHZvaWQge1xuXHRcdGNvbnN0IHByb3AgPSB0aGlzLnRhYmxlSGVscGVyLmdldFZhbHVlKGtleSk7XG5cdFx0dGhpcy5hY3RpdmVTb3J0aW5nID0ge2tleTogcHJvcCwgb3JkZXJ9O1xuXHRcdHRoaXMub3JkZXJCeS5lbWl0KHtrZXk6IHByb3AsIG9yZGVyfSk7XG5cdH1cblxuXHRwdWJsaWMgY2xpY2tSb3cocm93RGF0YTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaGFzQ2xpY2tBY3Rpb24pIHtcblx0XHRcdHRoaXMucm93Q2xpY2tlZC5lbWl0KHJvd0RhdGEpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGFibGUtYmFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLXRhYmxlLWJhclwiPlxuXHQ8ZGl2IGNsYXNzPVwiZmlsdGVyc1wiICNyZWYgW25nQ2xhc3NdPVwie29wZW46IG9wZW59XCI+XG5cdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aVRhYmxlQmFySXRlbV1cIj48L25nLWNvbnRlbnQ+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS10YWJsZS1iYXItaXRlbVwiICpuZ0lmPVwib3BlblwiPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uLS10cmFuc3BhcmVudFwiIChjbGljayk9XCJ0b2dnbGUoKVwiPlNob3cgbGVzcy4uLjwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInNob3ctbW9yZVwiICpuZ0lmPVwiIW9wZW4gJiYgaW52aXNpYmxlSXRlbXNcIj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXRyYW5zcGFyZW50XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+U2hvdyBtb3JlLi4uPC9idXR0b24+XG5cdDwvZGl2PlxuXG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlUYWJsZUJhclNlYXJjaF1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG5cdEBJbnB1dCgpIGZpbHRlcnM6IEZpbHRlcltdID0gW107XG5cdEBJbnB1dCgpIHRlc3RGaWx0ZXI6IEZpbHRlcjtcblx0QE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIG9wZW4gPSBmYWxzZTtcblx0cHVibGljIGludmlzaWJsZUl0ZW1zID0gZmFsc2U7XG5cblx0QFZpZXdDaGlsZCgncmVmJykgcmVmO1xuXG5cdHB1YmxpYyBuZ0RvQ2hlY2soKSB7XG5cdFx0dGhpcy5jb3VudEludmlzaWJsZUl0ZW1zKCk7XG5cdH1cblxuXHRwdWJsaWMgaXNJblZpc2libGUocmVjdENvbnRhaW5lciwgcmVjdENoaWxkKSB7XG5cdFx0cmV0dXJuIHJlY3RDb250YWluZXIuYm90dG9tIDwgcmVjdENoaWxkLnRvcDtcblx0fVxuXG5cdHB1YmxpYyBjb3VudEludmlzaWJsZUl0ZW1zKCkge1xuXHRcdGNvbnN0IHJlY3RDb250YWluZXIgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG5cblx0XHRmb3IgKGxldCBpID0gY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3QgbyA9IGNoaWxkTm9kZXNbaV07XG5cdFx0XHRpZiAoby5ub2RlTmFtZSA9PT0gJ0FVSS1UQUJMRS1CQVItSVRFTScgJiYgby5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRcdFx0Y29uc3QgcmVjdENoaWxkID0gby5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0aWYgKHRoaXMuaXNJblZpc2libGUocmVjdENvbnRhaW5lciwgcmVjdENoaWxkKSkge1xuXHRcdFx0XHRcdHRoaXMuaW52aXNpYmxlSXRlbXMgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuaW52aXNpYmxlSXRlbXMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlKCkge1xuXHRcdHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0T25DaGFuZ2VzLFxuXHRUeXBlLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS10YWJsZS1jZWxsJyxcblx0dGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgKm5nSWY9XCJoYXNDb21wb25lbnQoKVwiPjwvbmctdGVtcGxhdGU+XG48c3BhbiAqbmdJZj1cIiFoYXNDb21wb25lbnQoKVwiPnt7IHZhbHVlIH19PC9zcGFuPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgY29tcG9uZW50OiBUeXBlPGFueT47XG5cdEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcblx0KSB7IH1cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLmxvYWRDb21wb25lbnQoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaGFzQ29tcG9uZW50KCkge1xuXHRcdHJldHVybiAhIXRoaXMuY29tcG9uZW50O1xuXHR9XG5cblx0cHVibGljIGxvYWRDb21wb25lbnQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcblx0XHRjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmO1xuXHRcdHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdCg8Q2VsbD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmRhdGEgPSB0aGlzLnZhbHVlO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRPbkNoYW5nZXMsXG5cdFR5cGUsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXRhYmxlLWhlYWRlcicsXG5cdHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICpuZ0lmPVwiaGFzQ29tcG9uZW50KClcIj48L25nLXRlbXBsYXRlPlxuPHNwYW4gKm5nSWY9XCIhaGFzQ29tcG9uZW50KClcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgY29tcG9uZW50OiBUeXBlPGFueT47XG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcblx0KSB7IH1cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLmxvYWRDb21wb25lbnQoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaGFzQ29tcG9uZW50KCkge1xuXHRcdHJldHVybiAhIXRoaXMuY29tcG9uZW50O1xuXHR9XG5cblx0cHVibGljIGxvYWRDb21wb25lbnQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcblx0XHRjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmO1xuXHRcdHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdCg8Q2VsbD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmRhdGEgPSB0aGlzLnZhbHVlO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29sdW1uU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi1zZWxlY3Rvci9jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVCYXJDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWJhci90YWJsZS1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtY2VsbC90YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0Q29sdW1uU2VsZWN0b3JDb21wb25lbnQsXG5cdFRhYmxlQ29tcG9uZW50LFxuXHRUYWJsZUJhckNvbXBvbmVudCxcblx0VGFibGVDZWxsQ29tcG9uZW50LFxuXHRUYWJsZUhlYWRlckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBIb3N0QmluZGluZywgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlUYWJsZUJhckl0ZW1dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVCYXJJdGVtRGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktdGFibGUtYmFyLWl0ZW0nKSBzZXRDbGFzcyA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBIb3N0QmluZGluZywgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlUYWJsZUJhclNlYXJjaF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUJhclNlYXJjaERpcmVjdGl2ZSB7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuYXVpLXRhYmxlLWJhci1zZWFyY2gnKSBzZXRDbGFzcyA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBUYWJsZUJhckl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLWJhci1pdGVtL3RhYmxlLWJhci1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJsZUJhclNlYXJjaERpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtYmFyLXNlYXJjaC90YWJsZS1iYXItc2VhcmNoLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRUYWJsZUJhckl0ZW1EaXJlY3RpdmUsXG5cdFRhYmxlQmFyU2VhcmNoRGlyZWN0aXZlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5cbmltcG9ydCB7IFRhYmxlSGVscGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGFibGUtaGVscGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRUYWJsZUhlbHBlclNlcnZpY2UsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUge31cbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IFRhYmxlUmVjb3JkLCBUYWJsZUNvbHVtbiwgT3JkZXJCeSB9IGZyb20gJy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlIHtcblx0Ly8gT3JpZ2luYWwgZGF0YSAoanNvbiBhcnJheSBmcm9tIHRoZSBzZXJ2ZXIpXG5cdHByaXZhdGUgcmF3RGF0YTogVGFibGVSZWNvcmRbXSA9IFtdO1xuXG5cdC8vIE9yaWdpbmFsIGNvbHVtbnMgY29uZmlnIChmcm9tIHRoZSBhcHApXG5cdHByaXZhdGUgcmF3Q29sdW1uczogKFRhYmxlQ29sdW1ufHN0cmluZylbXTtcblxuXHQvLyBBcnJheSBvZiBmaWx0ZXJzXG5cdHB1YmxpYyBmaWx0ZXJzOiBGaWx0ZXJbXSA9IFtdO1xuXG5cdC8vIFBhZ2luYXRpb25cblx0cHVibGljIHBhZ2U7XG5cdHB1YmxpYyBsaW1pdDtcblx0cHVibGljIGxhc3RQYWdlO1xuXG5cdC8vIFNvcnRpbmdcblx0cHVibGljIG9yZGVyQnk6IE9yZGVyQnk7XG5cblx0cHVibGljIGZpbHRlcmVkRGF0YTogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgcm93czogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgY29sdW1uczogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG5cdC8vIEluaXQgc3R1ZmYuLi5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdC8vIC0tLS0tLS0tLS0gR0VUVEVSUyB8IFNFVFRFUlMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBzZXRSYXdEYXRhKGRhdGE6IGFueVtdKSB7XG5cdFx0dGhpcy5yYXdEYXRhID0gZGF0YTtcblx0XHR0aGlzLnVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuXHRcdHRoaXMuc2V0TGFzdFBhZ2UoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd3MoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRSYXdDb2x1bW5zKGNvbHVtbnMpIHtcblx0XHR0aGlzLnJhd0NvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdHRoaXMudXBkYXRlQ29sdW1ucygpO1xuXHR9XG5cblx0cHVibGljIHNldEZpbHRlcnMoZmlsdGVyczogRmlsdGVyW10pIHtcblx0XHR0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXHRcdHRoaXMudXBkYXRlRmlsdGVyZWREYXRhKCk7XG5cdFx0dGhpcy5zZXRMYXN0UGFnZSgpO1xuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIGFkZEZpbHRlcihmaWx0ZXI6IEZpbHRlcikge1xuXHRcdHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJlZERhdGEoKTtcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0UGFnZShpKSB7XG5cdFx0dGhpcy5wYWdlID0gTnVtYmVyKGkpOyAvLyBzb21ldGhpbmcgd2VpcmQgbnVtYmVyID48IHN0cmluZ1xuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIHNldExpbWl0KGk6IG51bWJlcikge1xuXHRcdHRoaXMubGltaXQgPSBOdW1iZXIoaSk7IC8vIHNvbWV0aGluZyB3ZWlyZCBudW1iZXIgPjwgc3RyaW5nXG5cdFx0dGhpcy5zZXRMYXN0UGFnZSgpO1xuXHRcdGlmICh0aGlzLmxhc3RQYWdlICYmIHRoaXMucGFnZSA+IHRoaXMubGFzdFBhZ2UpIHtcblx0XHRcdHRoaXMucGFnZSA9IHRoaXMubGFzdFBhZ2U7XG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIHNldE9yZGVyQnkobykge1xuXHRcdHRoaXMub3JkZXJCeSA9IG87XG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJlZERhdGEoKTtcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tIFZJUlRVQUwgUFJPUFMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBnZXRPZmZzZXQoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnBhZ2UgKiB0aGlzLmxpbWl0KSAtIHRoaXMubGltaXQ7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tIFBST1BFUlRZIEhFTFBFUlMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBzZXRMYXN0UGFnZSgpIHtcblx0XHRjb25zdCBkID0gdGhpcy5maWx0ZXJlZERhdGEuZ2V0VmFsdWUoKTtcblx0XHR0aGlzLmxhc3RQYWdlID0gTWF0aC5jZWlsKGQgPyBkLmxlbmd0aCAvIHRoaXMubGltaXQgOiAwKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVSb3dzKCkge1xuXHRcdGxldCBkID0gdGhpcy5maWx0ZXJlZERhdGEuZ2V0VmFsdWUoKTtcblxuXHRcdGlmICh0aGlzLm9yZGVyQnkpIHtcblx0XHRcdGQgPSB0aGlzLnNvcnREYXRhKGQsIHRoaXMub3JkZXJCeS5rZXksIHRoaXMub3JkZXJCeS5vcmRlcik7XG5cdFx0fVxuXG5cdFx0ZCA9IHRoaXMuc2VsZWN0RGF0YShkLCB0aGlzLmxpbWl0LCB0aGlzLmdldE9mZnNldCgpKTtcblxuXHRcdHRoaXMucm93cy5uZXh0KGQpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUNvbHVtbnMoKSB7XG5cdFx0Y29uc3QgYyA9IHRoaXMuZmlsdGVySGlkZGVuQ29sdW1ucyh0aGlzLnJhd0NvbHVtbnMpO1xuXHRcdHRoaXMuY29sdW1ucy5uZXh0KGMpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUZpbHRlcmVkRGF0YSgpIHtcblx0XHR0aGlzLmZpbHRlcmVkRGF0YS5uZXh0KHRoaXMuZmlsdGVyRGF0YSh0aGlzLnJhd0RhdGEsIHRoaXMuZmlsdGVycykpO1xuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLSBBQlNUUkFDVCBIRUxQRVJTIC0tLS0tLS0tLS0gLy9cblxuXHRwdWJsaWMgZmlsdGVyRGF0YShkYXRhLCBmaWx0ZXJzOiBGaWx0ZXJbXSkge1xuXHRcdGxldCBkID0gZGF0YS5zbGljZSgpO1xuXG5cdFx0ZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcblx0XHRcdGQgPSBmaWx0ZXIucGFyc2VEYXRhKGQpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGQ7XG5cdH1cblxuXHRwdWJsaWMgc29ydERhdGEoZGF0YSwga2V5LCBvcmRlciA9ICdhc2MnKSB7XG5cdFx0aWYgKCFkYXRhIHx8ICFkYXRhLnNvcnQgfHwgIWtleSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGQgPSBkYXRhLnNsaWNlKCk7XG5cdFx0ZC5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRpZiAoYVtrZXldIDwgYltrZXldKSB7XG5cdFx0XHRcdHJldHVybiBvcmRlciA9PT0gJ2FzYycgPyAtMSA6IDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhW2tleV0gPiBiW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIG9yZGVyID09PSAnYXNjJyA/IDEgOiAtMTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAwO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGQ7XG5cdH1cblxuXHRwdWJsaWMgc2VsZWN0RGF0YShkYXRhLCBsaW1pdCwgb2Zmc2V0KSB7XG5cdFx0aWYgKGRhdGEgJiYgbGltaXQgPj0gMCAmJiBvZmZzZXQgPj0gMCkge1xuXHRcdFx0cmV0dXJuIGRhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsaW1pdCk7XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0cHVibGljIGZpbHRlckhpZGRlbkNvbHVtbnMoY29sdW1ucykge1xuXHRcdHJldHVybiBjb2x1bW5zLmZpbHRlcigobykgPT4ge1xuXHRcdFx0cmV0dXJuICFvLmhpZGRlbjtcblx0XHR9KTtcblx0fVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIkRFRkFVTFRfTUVTU0FHRVMuTk9fREFUQSIsIkRFRkFVTFRfTUVTU0FHRVMuTE9BRF9EQVRBIiwiREVGQVVMVF9NRVNTQUdFUy5OT19DT0xVTU5TIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3Q2hpbGQiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJEaXJlY3RpdmUiLCJIb3N0QmluZGluZyIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJCZWhhdmlvclN1YmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztRQUtR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