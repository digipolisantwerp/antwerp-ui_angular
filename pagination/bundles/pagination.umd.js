(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@acpaas-ui/ngx-components/utils')) :
    typeof define === 'function' && define.amd ? define('pagination', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@acpaas-ui/ngx-components/utils'], factory) :
    (factory((global.pagination = {}),global.ng.core,global.ng.common,global.ng.forms,null));
}(this, (function (exports,core,common,forms,utils) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PaginationComponent = (function () {
        function PaginationComponent() {
            this.ariaNavigationLabel = 'Paginering';
            this.ariaPreviousLabel = 'Ga naar de vorige pagina';
            this.ariaNextLabel = 'Ga naar de volgende pagina';
            this.display = 'basic';
            this.styling = 'outlined';
            this.update = new core.EventEmitter();
            this.totalPages = 0;
            this.numbers = [];
            this.instanceId = Math.random().toString(36).substr(2, 9);
        }
        /**
         * @return {?}
         */
        PaginationComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.setValues();
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.next = /**
         * @return {?}
         */
            function () {
                if (this.currentPage < this.totalPages) {
                    this.onUpdate(this.currentPage + 1);
                }
                return false; //  prevent the href being followed
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.prev = /**
         * @return {?}
         */
            function () {
                if (this.currentPage > 1) {
                    this.onUpdate(this.currentPage - 1);
                }
                return false; //  prevent the href being followed
            };
        /**
         * @param {?} i
         * @return {?}
         */
        PaginationComponent.prototype.onUpdate = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.update.emit(parseInt(/** @type {?} */ (i), 10)); // input from numbers array is a string
                return false; //  prevent the href being followed
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.setValues = /**
         * @return {?}
         */
            function () {
                if (this.totalValues && this.itemsPerPage) {
                    this.totalPages = Math.ceil(this.totalValues / this.itemsPerPage);
                    var /** @type {?} */ generateNumbers = Array(this.totalPages).fill('').map(function (e, i) {
                        return String(i + 1);
                    });
                    if (generateNumbers.length < 8) {
                        return this.numbers = generateNumbers;
                    }
                    if (this.currentPage < 5) {
                        this.numbers = generateNumbers.slice(0, 5);
                    }
                    else if (this.currentPage > this.totalPages - 4) {
                        this.numbers = generateNumbers.slice(this.totalPages - 5);
                    }
                    else {
                        this.numbers = generateNumbers.slice(this.currentPage - 2, this.currentPage + 1);
                    }
                    // First page
                    if (this.numbers.indexOf('1') === -1) {
                        this.numbers.unshift('1');
                    }
                    // Last Page
                    if (this.numbers.indexOf(String(this.totalPages)) === -1) {
                        this.numbers.push(String(this.totalPages));
                    }
                    // Add dots at the beginning
                    if (this.numbers.indexOf('2') === -1) {
                        this.numbers.splice(1, 0, '...');
                    }
                    // Add dots at the end
                    if (this.numbers.indexOf(String(this.totalPages - 1)) === -1) {
                        this.numbers.splice(this.numbers.length - 1, 0, '...');
                    }
                }
            };
        PaginationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-pagination',
                        template: "<nav *ngIf=\"totalPages > 1\" role=\"navigation\" [attr.aria-label]= ariaNavigationLabel>\n    <!-- Basic -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'basic'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [attr.href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [attr.href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Text -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'text'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [attr.href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li class=\"m-pagination__label\">{{ currentPage }} - {{ totalPages }}</li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [attr.href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Numbers -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'numbers'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [attr.href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li *ngFor=\"let number of numbers; let i = index\">\n            <a [ngClass]=\"{'is-active': number === currentPage + '' }\" href=\"#\" id=\"pagination-{{ instanceId }}-button-{{ i }}\" (click)=\"onUpdate(number)\" [attr.aria-label]=\"'Pagina ' + number\" [attr.aria-current]=\"number === currentPage + '' ? 'page' : null\">{{ number }}</a>\n        </li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [attr.href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n",
                    },] },
        ];
        PaginationComponent.propDecorators = {
            ariaNavigationLabel: [{ type: core.Input }],
            ariaPreviousLabel: [{ type: core.Input }],
            ariaNextLabel: [{ type: core.Input }],
            currentPage: [{ type: core.Input }],
            display: [{ type: core.Input }],
            itemsPerPage: [{ type: core.Input }],
            styling: [{ type: core.Input }],
            totalValues: [{ type: core.Input }],
            update: [{ type: core.Output }]
        };
        return PaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PAGINATION_LABELS = new core.InjectionToken('paginationLabels');
    var /** @type {?} */ PAGINATION_LABELS_DEFAULT = {
        PAGINATION_LABEL: '%{currentPage} of %{total}',
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Components = [
        PaginationComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0 = PAGINATION_LABELS_DEFAULT;
    var PaginationModule = (function () {
        function PaginationModule() {
        }
        /**
         * @param {?} paginationLabels
         * @return {?}
         */
        PaginationModule.forChild = /**
         * @param {?} paginationLabels
         * @return {?}
         */
            function (paginationLabels) {
                return {
                    ngModule: PaginationModule,
                    providers: [
                        { provide: PAGINATION_LABELS, useValue: paginationLabels },
                    ],
                };
            };
        PaginationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: __spread(Components),
                        exports: __spread(Components),
                        providers: [
                            { provide: PAGINATION_LABELS, useValue: ɵ0 },
                        ],
                    },] },
        ];
        return PaginationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ ITEM_COUNTER_LABEL = new core.InjectionToken('itemCounterLabels');
    var /** @type {?} */ ITEMS_PER_PAGE_LABEL = new core.InjectionToken('itemsPerPageLabels');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ItemCounterComponent = (function () {
        function ItemCounterComponent(label) {
            this.setClass = true;
            this.currentFrom = 1;
            this.currentTo = this.amountPerPage;
            if (label && !this.label) {
                this.label = label;
            }
            else if (!this.label) {
                this.label = {
                    singular: '%{currentFrom} - %{currentTo} of %{totalAmount} item',
                    plural: '%{currentFrom} - %{currentTo} of %{totalAmount} items',
                };
            }
        }
        /**
         * @return {?}
         */
        ItemCounterComponent.prototype.setFromTo = /**
         * @return {?}
         */
            function () {
                this.currentFrom = (this.amountPerPage * (this.currentPage - 1)) + 1;
                /* tslint:disable:max-line-length */
                this.currentTo = (this.amountPerPage * this.currentPage) <= this.totalAmount ? this.amountPerPage * this.currentPage : this.totalAmount;
                /* tslint:enable:max-line-length */
            };
        /**
         * @return {?}
         */
        ItemCounterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setFromTo();
            };
        /**
         * @return {?}
         */
        ItemCounterComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.setFromTo();
            };
        ItemCounterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-item-counter',
                        template: "<div class=\"m-item-counter\">\n    {{ label }}\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:inline-block;vertical-align:top}.m-item-counter{line-height:3rem}"],
                    },] },
        ];
        /** @nocollapse */
        ItemCounterComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [ITEM_COUNTER_LABEL,] }] }
            ];
        };
        ItemCounterComponent.propDecorators = {
            setClass: [{ type: core.HostBinding, args: ['class.aui-item-counter',] }],
            currentPage: [{ type: core.Input }],
            totalAmount: [{ type: core.Input }],
            amountPerPage: [{ type: core.Input }],
            label: [{ type: core.Input }]
        };
        return ItemCounterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var sizes = {
        S: /** @type {?} */ ('S'),
        R: /** @type {?} */ ('R'),
        L: /** @type {?} */ ('L'),
    };
    var ItemsPerPageComponent = (function () {
        function ItemsPerPageComponent(label) {
            this.inputSizes = {
                S: 'a-input--small',
                R: '',
                L: 'a-input--large',
            };
            this.setClass = true;
            this.size = sizes.R;
            this.returnAmount = new core.EventEmitter();
            if (label && !this.label) {
                this.label = label;
            }
            else if (!this.label) {
                this.label = {
                    singular: 'item per page',
                    plural: 'items per page',
                };
            }
        }
        /**
         * @param {?} changedValue
         * @return {?}
         */
        ItemsPerPageComponent.prototype.setAmount = /**
         * @param {?} changedValue
         * @return {?}
         */
            function (changedValue) {
                this.amountPerPage = changedValue;
                this.returnAmount.emit(this.amountPerPage);
            };
        ItemsPerPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-items-per-page',
                        template: "<div class=\"m-items-per-page\">\n    <div class=\"a-input has-icon-right\" [ngClass]=\"[inputSizes[size]]\">\n        <div class=\"a-input__wrapper\">\n            <select name=\"input-selected\" id=\"input-select\" [ngModel]=\"amountPerPage\" (ngModelChange)=\"setAmount($event)\">\n                <option *ngFor=\"let amountOption of selectOptions\" [value]=\"amountOption\">{{ amountOption }}</option>\n            </select>\n            <span class=\"fa fa-angle-down\"></span>\n        </div>\n\n        <label class=\"a-input__label\" for=\"input-text\">{{ label }}</label>\n    </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:inline-block;vertical-align:top}.m-items-per-page .a-input .a-input__wrapper{display:inline-block;margin-right:.5rem}"],
                    },] },
        ];
        /** @nocollapse */
        ItemsPerPageComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [ITEMS_PER_PAGE_LABEL,] }] }
            ];
        };
        ItemsPerPageComponent.propDecorators = {
            setClass: [{ type: core.HostBinding, args: ['class.aui-items-per-page',] }],
            label: [{ type: core.Input }],
            size: [{ type: core.Input }],
            selectOptions: [{ type: core.Input }],
            amountPerPage: [{ type: core.Input }],
            returnAmount: [{ type: core.Output }]
        };
        return ItemsPerPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Components$1 = [
        ItemCounterComponent,
        ItemsPerPageComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0$1 = undefined, ɵ1 = undefined;
    var ItemCounterModule = (function () {
        function ItemCounterModule() {
        }
        /**
         * @param {?} itemCounterLabel
         * @param {?} itemsPerPageLabel
         * @return {?}
         */
        ItemCounterModule.forChild = /**
         * @param {?} itemCounterLabel
         * @param {?} itemsPerPageLabel
         * @return {?}
         */
            function (itemCounterLabel, itemsPerPageLabel) {
                return {
                    ngModule: ItemCounterModule,
                    providers: [
                        { provide: ITEM_COUNTER_LABEL, useValue: itemCounterLabel },
                        { provide: ITEMS_PER_PAGE_LABEL, useValue: itemsPerPageLabel },
                    ],
                };
            };
        ItemCounterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            utils.LabelsModule,
                        ],
                        declarations: __spread(Components$1),
                        exports: __spread(Components$1),
                        providers: [
                            { provide: ITEM_COUNTER_LABEL, useValue: ɵ0$1 },
                            { provide: ITEMS_PER_PAGE_LABEL, useValue: ɵ1 },
                        ],
                    },] },
        ];
        return ItemCounterModule;
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

    exports.PaginationComponent = PaginationComponent;
    exports.PAGINATION_LABELS = PAGINATION_LABELS;
    exports.PAGINATION_LABELS_DEFAULT = PAGINATION_LABELS_DEFAULT;
    exports.PaginationModule = PaginationModule;
    exports.ItemCounterComponent = ItemCounterComponent;
    exports.ItemsPerPageComponent = ItemsPerPageComponent;
    exports.ITEM_COUNTER_LABEL = ITEM_COUNTER_LABEL;
    exports.ITEMS_PER_PAGE_LABEL = ITEMS_PER_PAGE_LABEL;
    exports.ItemCounterModule = ItemCounterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3BhZ2luYXRpb24vbGliL3BhZ2luYXRpb24vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9wYWdpbmF0aW9uL2xpYi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29uZi50cyIsbnVsbCwibmc6Ly9wYWdpbmF0aW9uL2xpYi9wYWdpbmF0aW9uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29uZi50cyIsIm5nOi8vcGFnaW5hdGlvbi9saWIvaXRlbS1jb3VudGVyL2NvbXBvbmVudHMvaXRlbS1jb3VudGVyL2l0ZW0tY291bnRlci5jb21wb25lbnQudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9jb21wb25lbnRzL2l0ZW1zLXBlci1wYWdlL2l0ZW1zLXBlci1wYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vcGFnaW5hdGlvbi9saWIvaXRlbS1jb3VudGVyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkRpc3BsYXkgfSBmcm9tICcuLi8uLi90eXBlcy9wYWdpbmF0aW9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXBhZ2luYXRpb24nLFxuXHR0ZW1wbGF0ZTogYDxuYXYgKm5nSWY9XCJ0b3RhbFBhZ2VzID4gMVwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFOYXZpZ2F0aW9uTGFiZWw+XG4gICAgPCEtLSBCYXNpYyAtLT5cbiAgICA8dWwgY2xhc3M9XCJtLXBhZ2luYXRpb25cIiBbbmdDbGFzc109XCJ7J20tcGFnaW5hdGlvbi0tb3V0bGluZSc6IHN0eWxpbmcgPT09ICdvdXRsaW5lZCcgfVwiICpuZ0lmPVwiZGlzcGxheSA9PT0gJ2Jhc2ljJ1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX3ByZXZcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA8PSAxIH1cIiBbYXR0ci5ocmVmXT1cImN1cnJlbnRQYWdlID4gMSA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1wcmV2LXBhZ2VcIiAoY2xpY2spPVwicHJldigpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFQcmV2aW91c0xhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fbmV4dFwiPlxuICAgICAgICAgICAgPGEgW25nQ2xhc3NdPVwieydpcy1kaXNhYmxlZCc6IGN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMgfVwiIFthdHRyLmhyZWZdPVwiY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzID8gJyMnIDogbnVsbFwiIGlkPVwicGFnaW5hdGlvbi17eyBpbnN0YW5jZUlkIH19LW5leHQtcGFnZVwiIChjbGljayk9XCJuZXh0KClcIiBbYXR0ci5hcmlhLWxhYmVsXT0gYXJpYU5leHRMYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidS1zY3JlZW4tcmVhZGVyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8IS0tIFRleHQgLS0+XG4gICAgPHVsIGNsYXNzPVwibS1wYWdpbmF0aW9uXCIgW25nQ2xhc3NdPVwieydtLXBhZ2luYXRpb24tLW91dGxpbmUnOiBzdHlsaW5nID09PSAnb3V0bGluZWQnIH1cIiAqbmdJZj1cImRpc3BsYXkgPT09ICd0ZXh0J1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX3ByZXZcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA8PSAxIH1cIiBbYXR0ci5ocmVmXT1cImN1cnJlbnRQYWdlID4gMSA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1wcmV2LXBhZ2VcIiAoY2xpY2spPVwicHJldigpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFQcmV2aW91c0xhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fbGFiZWxcIj57eyBjdXJyZW50UGFnZSB9fSAtIHt7IHRvdGFsUGFnZXMgfX08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX25leHRcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzIH1cIiBbYXR0ci5ocmVmXT1cImN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcyA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1uZXh0LXBhZ2VcIiAoY2xpY2spPVwibmV4dCgpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFOZXh0TGFiZWw+XG4gICAgICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPCEtLSBOdW1iZXJzIC0tPlxuICAgIDx1bCBjbGFzcz1cIm0tcGFnaW5hdGlvblwiIFtuZ0NsYXNzXT1cInsnbS1wYWdpbmF0aW9uLS1vdXRsaW5lJzogc3R5bGluZyA9PT0gJ291dGxpbmVkJyB9XCIgKm5nSWY9XCJkaXNwbGF5ID09PSAnbnVtYmVycydcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibS1wYWdpbmF0aW9uX19wcmV2XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWRpc2FibGVkJzogY3VycmVudFBhZ2UgPD0gMSB9XCIgW2F0dHIuaHJlZl09XCJjdXJyZW50UGFnZSA+IDEgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tcHJldi1wYWdlXCIgKGNsaWNrKT1cInByZXYoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhUHJldmlvdXNMYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG51bWJlciBvZiBudW1iZXJzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWFjdGl2ZSc6IG51bWJlciA9PT0gY3VycmVudFBhZ2UgKyAnJyB9XCIgaHJlZj1cIiNcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1idXR0b24te3sgaSB9fVwiIChjbGljayk9XCJvblVwZGF0ZShudW1iZXIpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInUGFnaW5hICcgKyBudW1iZXJcIiBbYXR0ci5hcmlhLWN1cnJlbnRdPVwibnVtYmVyID09PSBjdXJyZW50UGFnZSArICcnID8gJ3BhZ2UnIDogbnVsbFwiPnt7IG51bWJlciB9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibS1wYWdpbmF0aW9uX19uZXh0XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWRpc2FibGVkJzogY3VycmVudFBhZ2UgPj0gdG90YWxQYWdlcyB9XCIgW2F0dHIuaHJlZl09XCJjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tbmV4dC1wYWdlXCIgKGNsaWNrKT1cIm5leHQoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhTmV4dExhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbjwvbmF2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHB1YmxpYyBhcmlhTmF2aWdhdGlvbkxhYmVsID0gJ1BhZ2luZXJpbmcnO1xuXHRASW5wdXQoKSBwdWJsaWMgYXJpYVByZXZpb3VzTGFiZWwgPSAnR2EgbmFhciBkZSB2b3JpZ2UgcGFnaW5hJztcblx0QElucHV0KCkgcHVibGljIGFyaWFOZXh0TGFiZWwgPSAnR2EgbmFhciBkZSB2b2xnZW5kZSBwYWdpbmEnO1xuXHRASW5wdXQoKSBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcblx0QElucHV0KCkgcHVibGljIGRpc3BsYXk6IFBhZ2luYXRpb25EaXNwbGF5ID0gJ2Jhc2ljJztcblx0QElucHV0KCkgcHVibGljIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xuXHRASW5wdXQoKSBwdWJsaWMgc3R5bGluZyA9ICdvdXRsaW5lZCc7XG5cdEBJbnB1dCgpIHB1YmxpYyB0b3RhbFZhbHVlczogbnVtYmVyO1xuXHRAT3V0cHV0KCkgcHVibGljIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgdG90YWxQYWdlcyA9IDA7XG5cdHB1YmxpYyBudW1iZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHQvLyBVc2UgdGhpcyB0byBoYXZlIHVuaXF1ZSBpZHMgd2l0aCBtdWx0aXBsZSBwYWdpbmF0aW9uIGluc3RhbmNlcyBvbiBvbmUgcGFnZS5cblx0cHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoKTtcblx0fVxuXG5cdHB1YmxpYyBuZXh0KCkge1xuXHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50b3RhbFBhZ2VzKSB7XG5cdFx0XHR0aGlzLm9uVXBkYXRlKHRoaXMuY3VycmVudFBhZ2UgKyAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyAgcHJldmVudCB0aGUgaHJlZiBiZWluZyBmb2xsb3dlZFxuXHR9XG5cblx0cHVibGljIHByZXYoKSB7XG5cdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPiAxKSB7XG5cdFx0XHR0aGlzLm9uVXBkYXRlKHRoaXMuY3VycmVudFBhZ2UgLSAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyAgcHJldmVudCB0aGUgaHJlZiBiZWluZyBmb2xsb3dlZFxuXHR9XG5cblx0cHVibGljIG9uVXBkYXRlKGk6IG51bWJlcnxzdHJpbmcpIHtcblx0XHR0aGlzLnVwZGF0ZS5lbWl0KHBhcnNlSW50KGkgYXMgc3RyaW5nLCAxMCkpOyAvLyBpbnB1dCBmcm9tIG51bWJlcnMgYXJyYXkgaXMgYSBzdHJpbmdcblx0XHRyZXR1cm4gZmFsc2U7IC8vICBwcmV2ZW50IHRoZSBocmVmIGJlaW5nIGZvbGxvd2VkXG5cdH1cblxuXHRwcml2YXRlIHNldFZhbHVlcygpIHtcblx0XHRpZiAodGhpcy50b3RhbFZhbHVlcyAmJiB0aGlzLml0ZW1zUGVyUGFnZSkge1xuXHRcdFx0dGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMudG90YWxWYWx1ZXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG5cblx0XHRcdGNvbnN0IGdlbmVyYXRlTnVtYmVycyA9IEFycmF5KHRoaXMudG90YWxQYWdlcykuZmlsbCgnJykubWFwKChlLCBpKSA9PiB7XG5cdFx0XHRcdHJldHVybiBTdHJpbmcoaSArIDEpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChnZW5lcmF0ZU51bWJlcnMubGVuZ3RoIDwgOCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1iZXJzID0gZ2VuZXJhdGVOdW1iZXJzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA8IDUpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzID0gZ2VuZXJhdGVOdW1iZXJzLnNsaWNlKDAsIDUpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy50b3RhbFBhZ2VzIC0gNCkge1xuXHRcdFx0XHR0aGlzLm51bWJlcnMgPSBnZW5lcmF0ZU51bWJlcnMuc2xpY2UodGhpcy50b3RhbFBhZ2VzIC0gNSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm51bWJlcnMgPSBnZW5lcmF0ZU51bWJlcnMuc2xpY2UodGhpcy5jdXJyZW50UGFnZSAtIDIsIHRoaXMuY3VycmVudFBhZ2UgKyAxKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlyc3QgcGFnZVxuXHRcdFx0aWYgKHRoaXMubnVtYmVycy5pbmRleE9mKCcxJykgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMubnVtYmVycy51bnNoaWZ0KCcxJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExhc3QgUGFnZVxuXHRcdFx0aWYgKHRoaXMubnVtYmVycy5pbmRleE9mKFN0cmluZyh0aGlzLnRvdGFsUGFnZXMpKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzLnB1c2goU3RyaW5nKHRoaXMudG90YWxQYWdlcykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZG90cyBhdCB0aGUgYmVnaW5uaW5nXG5cdFx0XHRpZiAodGhpcy5udW1iZXJzLmluZGV4T2YoJzInKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzLnNwbGljZSgxLCAwLCAnLi4uJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBkb3RzIGF0IHRoZSBlbmRcblx0XHRcdGlmICh0aGlzLm51bWJlcnMuaW5kZXhPZihTdHJpbmcodGhpcy50b3RhbFBhZ2VzIC0gMSkpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLm51bWJlcnMuc3BsaWNlKHRoaXMubnVtYmVycy5sZW5ndGggLSAxLCAwLCAnLi4uJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmF0aW9uTGFiZWxzIH0gZnJvbSAnLi90eXBlcy9wYWdpbmF0aW9uLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPFBhZ2luYXRpb25MYWJlbHM+KCdwYWdpbmF0aW9uTGFiZWxzJyk7XG5cbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX0xBQkVMU19ERUZBVUxUOiBQYWdpbmF0aW9uTGFiZWxzID0ge1xuXHRQQUdJTkFUSU9OX0xBQkVMOiAnJXtjdXJyZW50UGFnZX0gb2YgJXt0b3RhbH0nLFxufTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKG9bbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH07IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl07XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxufSIsImltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTGFiZWxzIH0gZnJvbSAnLi90eXBlcy9wYWdpbmF0aW9uLnR5cGVzJztcbmltcG9ydCB7IFBBR0lOQVRJT05fTEFCRUxTLCBQQUdJTkFUSU9OX0xBQkVMU19ERUZBVUxUIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmYnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBQQUdJTkFUSU9OX0xBQkVMUywgdXNlVmFsdWU6IFBBR0lOQVRJT05fTEFCRUxTX0RFRkFVTFQgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHRwYWdpbmF0aW9uTGFiZWxzOiBQYWdpbmF0aW9uTGFiZWxzXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogUGFnaW5hdGlvbk1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IFBBR0lOQVRJT05fTEFCRUxTLCB1c2VWYWx1ZTogcGFnaW5hdGlvbkxhYmVscyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgSVRFTV9DT1VOVEVSX0xBQkVMID0gbmV3IEluamVjdGlvblRva2VuPExhYmVsPignaXRlbUNvdW50ZXJMYWJlbHMnKTtcbmV4cG9ydCBjb25zdCBJVEVNU19QRVJfUEFHRV9MQUJFTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYWJlbD4oJ2l0ZW1zUGVyUGFnZUxhYmVscycpO1xuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJVEVNX0NPVU5URVJfTEFCRUwgfSBmcm9tICcuLi8uLi9pdGVtLWNvdW50ZXIuY29uZic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1pdGVtLWNvdW50ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWl0ZW0tY291bnRlclwiPlxuICAgIHt7IGxhYmVsIH19XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfS5tLWl0ZW0tY291bnRlcntsaW5lLWhlaWdodDozcmVtfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ291bnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktaXRlbS1jb3VudGVyJykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cdEBJbnB1dCgpIHRvdGFsQW1vdW50OiBudW1iZXI7XG5cdEBJbnB1dCgpIGFtb3VudFBlclBhZ2U6IG51bWJlcjtcblx0QElucHV0KCkgbGFiZWw6IGFueTtcblxuXHRwdWJsaWMgY3VycmVudEZyb20gPSAxO1xuXHRwdWJsaWMgY3VycmVudFRvID0gdGhpcy5hbW91bnRQZXJQYWdlO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoSVRFTV9DT1VOVEVSX0xBQkVMKSBsYWJlbDogYW55KSB7XG5cdFx0aWYgKGxhYmVsICYmICF0aGlzLmxhYmVsKSB7XG5cdFx0XHR0aGlzLmxhYmVsID0gbGFiZWw7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5sYWJlbCkge1xuXHRcdFx0dGhpcy5sYWJlbCA9IHtcblx0XHRcdFx0c2luZ3VsYXI6ICcle2N1cnJlbnRGcm9tfSAtICV7Y3VycmVudFRvfSBvZiAle3RvdGFsQW1vdW50fSBpdGVtJyxcblx0XHRcdFx0cGx1cmFsOiAnJXtjdXJyZW50RnJvbX0gLSAle2N1cnJlbnRUb30gb2YgJXt0b3RhbEFtb3VudH0gaXRlbXMnLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc2V0RnJvbVRvKCkge1xuXHRcdHRoaXMuY3VycmVudEZyb20gPSAodGhpcy5hbW91bnRQZXJQYWdlICogKHRoaXMuY3VycmVudFBhZ2UgLSAxKSkgKyAxO1xuXHRcdC8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXHRcdHRoaXMuY3VycmVudFRvID0gKHRoaXMuYW1vdW50UGVyUGFnZSAqIHRoaXMuY3VycmVudFBhZ2UpIDw9IHRoaXMudG90YWxBbW91bnQgPyB0aGlzLmFtb3VudFBlclBhZ2UgKiB0aGlzLmN1cnJlbnRQYWdlIDogdGhpcy50b3RhbEFtb3VudDtcblx0XHQvKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2V0RnJvbVRvKCk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zZXRGcm9tVG8oKTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRV9MQUJFTCB9IGZyb20gJy4uLy4uL2l0ZW0tY291bnRlci5jb25mJztcblxuZXhwb3J0IGVudW0gc2l6ZXMge1xuXHRTID0gPGFueT4nUycsXG5cdFIgPSA8YW55PidSJyxcblx0TCA9IDxhbnk+J0wnLFxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaXRlbXMtcGVyLXBhZ2UnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWl0ZW1zLXBlci1wYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cImEtaW5wdXQgaGFzLWljb24tcmlnaHRcIiBbbmdDbGFzc109XCJbaW5wdXRTaXplc1tzaXplXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImEtaW5wdXRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImlucHV0LXNlbGVjdGVkXCIgaWQ9XCJpbnB1dC1zZWxlY3RcIiBbbmdNb2RlbF09XCJhbW91bnRQZXJQYWdlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0QW1vdW50KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBhbW91bnRPcHRpb24gb2Ygc2VsZWN0T3B0aW9uc1wiIFt2YWx1ZV09XCJhbW91bnRPcHRpb25cIj57eyBhbW91bnRPcHRpb24gfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJhLWlucHV0X19sYWJlbFwiIGZvcj1cImlucHV0LXRleHRcIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfS5tLWl0ZW1zLXBlci1wYWdlIC5hLWlucHV0IC5hLWlucHV0X193cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDouNXJlbX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNQZXJQYWdlQ29tcG9uZW50IHtcblx0cHVibGljIGlucHV0U2l6ZXMgPSB7XG5cdFx0UzogJ2EtaW5wdXQtLXNtYWxsJyxcblx0XHRSOiAnJyxcblx0XHRMOiAnYS1pbnB1dC0tbGFyZ2UnLFxuXHR9O1xuXG5cdEBIb3N0QmluZGluZygnY2xhc3MuYXVpLWl0ZW1zLXBlci1wYWdlJykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGxhYmVsOiBhbnk7XG5cdEBJbnB1dCgpIHNpemU6IHNpemVzID0gc2l6ZXMuUjtcblx0QElucHV0KCkgc2VsZWN0T3B0aW9uczogbnVtYmVyW107XG5cdEBJbnB1dCgpIGFtb3VudFBlclBhZ2U6IG51bWJlcjtcblx0QE91dHB1dCgpIHJldHVybkFtb3VudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KElURU1TX1BFUl9QQUdFX0xBQkVMKSBsYWJlbFxuXHQpIHtcblx0XHRpZiAobGFiZWwgJiYgIXRoaXMubGFiZWwpIHtcblx0XHRcdHRoaXMubGFiZWwgPSBsYWJlbDtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmxhYmVsKSB7XG5cdFx0XHR0aGlzLmxhYmVsID0ge1xuXHRcdFx0XHRzaW5ndWxhcjogJ2l0ZW0gcGVyIHBhZ2UnLFxuXHRcdFx0XHRwbHVyYWw6ICdpdGVtcyBwZXIgcGFnZScsXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzZXRBbW91bnQoY2hhbmdlZFZhbHVlKSB7XG5cdFx0dGhpcy5hbW91bnRQZXJQYWdlID0gY2hhbmdlZFZhbHVlO1xuXHRcdHRoaXMucmV0dXJuQW1vdW50LmVtaXQodGhpcy5hbW91bnRQZXJQYWdlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSXRlbUNvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1zUGVyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbXMtcGVyLXBhZ2UvaXRlbXMtcGVyLXBhZ2UuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdEl0ZW1Db3VudGVyQ29tcG9uZW50LFxuXHRJdGVtc1BlclBhZ2VDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IExhYmVsc01vZHVsZSwgTGFiZWwgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbmltcG9ydCB7IElURU1fQ09VTlRFUl9MQUJFTCwgSVRFTVNfUEVSX1BBR0VfTEFCRUwgfSBmcm9tICcuL2l0ZW0tY291bnRlci5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRMYWJlbHNNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IElURU1fQ09VTlRFUl9MQUJFTCwgdXNlVmFsdWU6IHVuZGVmaW5lZCB9LFxuXHRcdHsgcHJvdmlkZTogSVRFTVNfUEVSX1BBR0VfTEFCRUwsIHVzZVZhbHVlOiB1bmRlZmluZWQgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvdW50ZXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0aXRlbUNvdW50ZXJMYWJlbDogTGFiZWwsXG5cdFx0aXRlbXNQZXJQYWdlTGFiZWw6IExhYmVsXG5cdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSXRlbUNvdW50ZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBJVEVNX0NPVU5URVJfTEFCRUwsIHVzZVZhbHVlOiBpdGVtQ291bnRlckxhYmVsIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogSVRFTVNfUEVSX1BBR0VfTEFCRUwsIHVzZVZhbHVlOiBpdGVtc1BlclBhZ2VMYWJlbCB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJJbmplY3Rpb25Ub2tlbiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJJbmplY3QiLCJIb3N0QmluZGluZyIsIkNvbXBvbmVudHMiLCJGb3Jtc01vZHVsZSIsIkxhYmVsc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzt1Q0E4RHVDLFlBQVk7cUNBQ2QsMEJBQTBCO2lDQUM5Qiw0QkFBNEI7MkJBRWYsT0FBTzsyQkFFMUIsVUFBVTswQkFFVixJQUFJQSxpQkFBWSxFQUFFOzhCQUV4QixDQUFDOzJCQUNNLEVBQUU7OEJBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Ozs7UUFFNUQseUNBQVc7Ozs7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7UUFHWCxrQ0FBSTs7OztnQkFDVixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNwQztnQkFDRCxPQUFPLEtBQUssQ0FBQzs7Ozs7UUFHUCxrQ0FBSTs7OztnQkFDVixJQUFJLElBQUks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