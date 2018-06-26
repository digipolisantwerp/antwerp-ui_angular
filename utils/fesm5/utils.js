import { Component, Input, Output, EventEmitter, Injectable, NgModule, Pipe, InjectionToken, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxFilterComponent = /** @class */ (function () {
    function CheckboxFilterComponent() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CheckboxFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filter) {
            this.value = this.filter.value;
        }
        this.onFilter();
    };
    /**
     * @return {?}
     */
    CheckboxFilterComponent.prototype.onFilter = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ value = this.filter.options.filter(function (option) {
            return option.checked;
        });
        this.update.emit(value);
    };
    CheckboxFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-checkbox-filter',
                    template: "<ul class=\"a-list a-list--reset aui-checkbox-filter\" *ngIf=\"filter && filter.options && filter.id\">\n\t<li *ngFor=\"let option of filter.options; let i = index;\">\n\t\t<div class=\"a-input\">\n\t\t\t<div class=\"a-input__checkbox\">\n\t\t\t\t<input type=\"checkbox\" [id]=\"option.id\" [name]=\"option.id\" [(ngModel)]=\"option.checked\" (ngModelChange)=\"onFilter()\">\n\t\t\t\t<label [for]=\"option.id\">{{ option.name }}</label>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n</ul>\n",
                },] },
    ];
    CheckboxFilterComponent.propDecorators = {
        filter: [{ type: Input }],
        update: [{ type: Output }]
    };
    return CheckboxFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputFilterComponent = /** @class */ (function () {
    function InputFilterComponent() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filter) {
            this.value = this.filter.value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InputFilterComponent.prototype.onFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.update.emit(value);
    };
    InputFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-input-filter',
                    template: "<div class=\"a-input has-icon-right aui-input-filter\">\n\t<ng-container *ngIf=\"filter\">\n\t\t<div class=\"a-input__wrapper\">\n\t\t\t<input type=\"text\" [placeholder]=\"filter.name\" [(ngModel)]=\"value\" (ngModelChange)=\"onFilter(value)\">\n\t\t\t<span class=\"fa fa-search\"></span>\n\t\t</div>\n\t</ng-container>\n</div>\n",
                },] },
    ];
    InputFilterComponent.propDecorators = {
        filter: [{ type: Input }],
        update: [{ type: Output }]
    };
    return InputFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectFilterComponent = /** @class */ (function () {
    function SelectFilterComponent() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SelectFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filter) {
            this.value = this.filter.value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectFilterComponent.prototype.onFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.update.emit(value);
    };
    SelectFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-select-filter',
                    template: "<div class=\"a-input has-icon-right aui-select-filter\">\n\t<ng-container *ngIf=\"filter && filter.options && filter.id\">\n\t\t<label class=\"a-input__label a-input__label--inline\" [for]=\"filter.id\">{{ filter.name }}: </label>\n\t\t<div class=\"a-input__wrapper a-input__wrapper--inline\">\n\t\t\t<select [name]=\"filter.id\" [id]=\"filter.id\" [(ngModel)]=\"value\" (ngModelChange)=\"onFilter(value)\">\n\t\t\t\t<option *ngFor=\"let option of filter.options; let i = index;\" [ngValue]=\"option\">{{ option.name }}</option>\n\t\t\t</select>\n\t\t\t<span class=\"fa fa-angle-down\"></span>\n\t\t</div>\n\t</ng-container>\n</div>\n",
                },] },
    ];
    SelectFilterComponent.propDecorators = {
        filter: [{ type: Input }],
        update: [{ type: Output }]
    };
    return SelectFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CheckboxFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    FilterService.prototype.filterData = /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    function (data, filters) {
        filters.forEach(function (filter) {
            data = filter.parseData(data);
        });
        return data;
    };
    FilterService.decorators = [
        { type: Injectable },
    ];
    return FilterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    declarations: [
                        Components,
                    ],
                    providers: [
                        FilterService,
                    ],
                    exports: [
                        Components,
                    ],
                },] },
    ];
    return FilterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Filter = /** @class */ (function () {
    function Filter() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    Filter.prototype.parseData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.parse(data, this.value);
    };
    return Filter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ interpolate = function (label, replaceData) {
    if (!replaceData) {
        return label;
    }
    var /** @type {?} */ escapeStringRegExp = function (prop) { return prop.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'); };
    var /** @type {?} */ pattern = new RegExp("%{(" + Object.keys(replaceData).map(escapeStringRegExp).join('|') + ")}", 'g');
    return label.replace(pattern, function (match, prop) { return replaceData[prop] ? String(replaceData[prop]) : ''; });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InterpolateLabelPipe = /** @class */ (function () {
    function InterpolateLabelPipe() {
    }
    /**
     * @param {?} label
     * @param {?} replaceData
     * @return {?}
     */
    InterpolateLabelPipe.prototype.transform = /**
     * @param {?} label
     * @param {?} replaceData
     * @return {?}
     */
    function (label, replaceData) {
        if (!replaceData || !label) {
            return label;
        }
        return interpolate(label, replaceData);
    };
    InterpolateLabelPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'interpolateLabel',
                },] },
    ];
    return InterpolateLabelPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PluralizeLabelPipe = /** @class */ (function () {
    function PluralizeLabelPipe() {
    }
    /**
     * @param {?} label
     * @param {?} count
     * @return {?}
     */
    PluralizeLabelPipe.prototype.transform = /**
     * @param {?} label
     * @param {?} count
     * @return {?}
     */
    function (label, count) {
        if (!label || typeof label === 'string') {
            return /** @type {?} */ (label);
        }
        return count === 1 ? label.singular : label.plural;
    };
    PluralizeLabelPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'pluralizeLabel',
                },] },
    ];
    return PluralizeLabelPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Pipes = [
    PluralizeLabelPipe,
    InterpolateLabelPipe,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LabelsModule = /** @class */ (function () {
    function LabelsModule() {
    }
    LabelsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Pipes,
                    ],
                    exports: [
                        Pipes,
                    ],
                },] },
    ];
    return LabelsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* Create a new injection token for injecting the window into a component. */
var /** @type {?} */ WINDOW = new InjectionToken('WindowToken');
/**
 * @abstract
 */
var  /**
 * @abstract
 */
WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
var BrowserWindowRef = /** @class */ (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));
/**
 * @param {?} browserWindowRef
 * @param {?} platformId
 * @return {?}
 */
function windowFactory(browserWindowRef, platformId) {
    if (isPlatformBrowser(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
var /** @type {?} */ browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef,
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
var /** @type {?} */ windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, PLATFORM_ID],
};
/* Create an array of providers. */
var /** @type {?} */ WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WindowModule = /** @class */ (function () {
    function WindowModule() {
    }
    WindowModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        WINDOW_PROVIDERS,
                    ],
                },] },
    ];
    return WindowModule;
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

export { FilterModule, CheckboxFilterComponent, InputFilterComponent, SelectFilterComponent, Filter, FilterService, InterpolateLabelPipe, PluralizeLabelPipe, interpolate, LabelsModule, WINDOW_PROVIDERS, WINDOW, WindowModule, Components as ɵa, Pipes as ɵe, BrowserWindowRef as ɵc, WindowRef as ɵb, windowFactory as ɵd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL3V0aWxzL2xpYi9maWx0ZXIvY29tcG9uZW50cy9jaGVja2JveC1maWx0ZXIvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdXRpbHMvbGliL2ZpbHRlci9jb21wb25lbnRzL2lucHV0LWZpbHRlci9pbnB1dC1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL2NvbXBvbmVudHMvc2VsZWN0LWZpbHRlci9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdXRpbHMvbGliL2ZpbHRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlLnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL2ZpbHRlci5tb2R1bGUudHMiLCJuZzovL3V0aWxzL2xpYi9maWx0ZXIvY2xhc3Nlcy9maWx0ZXIuY2xhc3MudHMiLCJuZzovL3V0aWxzL2xpYi9sYWJlbHMvdXRpbHMvaW50ZXJwb2xhdGlvbi50cyIsIm5nOi8vdXRpbHMvbGliL2xhYmVscy9waXBlcy9pbnRlcnBvbGF0ZS1sYWJlbC5waXBlLnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL3BpcGVzL3BsdXJhbGl6ZS1sYWJlbC5waXBlLnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL3BpcGVzL2luZGV4LnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL2xhYmVscy5tb2R1bGUudHMiLCJuZzovL3V0aWxzL2xpYi93aW5kb3cvc2VydmljZXMvd2luZG93LnNlcnZpY2UudHMiLCJuZzovL3V0aWxzL2xpYi93aW5kb3cvd2luZG93Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9maWx0ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2hlY2tib3gtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJhLWxpc3QgYS1saXN0LS1yZXNldCBhdWktY2hlY2tib3gtZmlsdGVyXCIgKm5nSWY9XCJmaWx0ZXIgJiYgZmlsdGVyLm9wdGlvbnMgJiYgZmlsdGVyLmlkXCI+XG5cdDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlci5vcHRpb25zOyBsZXQgaSA9IGluZGV4O1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fY2hlY2tib3hcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtpZF09XCJvcHRpb24uaWRcIiBbbmFtZV09XCJvcHRpb24uaWRcIiBbKG5nTW9kZWwpXT1cIm9wdGlvbi5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXIoKVwiPlxuXHRcdFx0XHQ8bGFiZWwgW2Zvcl09XCJvcHRpb24uaWRcIj57eyBvcHRpb24ubmFtZSB9fTwvbGFiZWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmlsdGVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgZmlsdGVyO1xuXHRAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgdmFsdWU7XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLmZpbHRlcikge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMuZmlsdGVyLnZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLm9uRmlsdGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgb25GaWx0ZXIoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmZpbHRlci5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xuXHRcdFx0cmV0dXJuIG9wdGlvbi5jaGVja2VkO1xuXHRcdH0pO1xuXHRcdHRoaXMudXBkYXRlLmVtaXQodmFsdWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9maWx0ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaW5wdXQtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodCBhdWktaW5wdXQtZmlsdGVyXCI+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlclwiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cImZpbHRlci5uYW1lXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKHZhbHVlKVwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmlsdGVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgZmlsdGVyO1xuXHRAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgdmFsdWU7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXIudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKHZhbHVlKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2ZpbHRlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zZWxlY3QtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodCBhdWktc2VsZWN0LWZpbHRlclwiPlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyICYmIGZpbHRlci5vcHRpb25zICYmIGZpbHRlci5pZFwiPlxuXHRcdDxsYWJlbCBjbGFzcz1cImEtaW5wdXRfX2xhYmVsIGEtaW5wdXRfX2xhYmVsLS1pbmxpbmVcIiBbZm9yXT1cImZpbHRlci5pZFwiPnt7IGZpbHRlci5uYW1lIH19OiA8L2xhYmVsPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyIGEtaW5wdXRfX3dyYXBwZXItLWlubGluZVwiPlxuXHRcdFx0PHNlbGVjdCBbbmFtZV09XCJmaWx0ZXIuaWRcIiBbaWRdPVwiZmlsdGVyLmlkXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKHZhbHVlKVwiPlxuXHRcdFx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmlsdGVyLm9wdGlvbnM7IGxldCBpID0gaW5kZXg7XCIgW25nVmFsdWVdPVwib3B0aW9uXCI+e3sgb3B0aW9uLm5hbWUgfX08L29wdGlvbj5cblx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWx0ZXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBmaWx0ZXI7XG5cdEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyB2YWx1ZTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXIudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKHZhbHVlKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENoZWNrYm94RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC1maWx0ZXIvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZmlsdGVyL2lucHV0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZmlsdGVyL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50JztcblxuXG5jb25zdCBDb21wb25lbnRzID0gW1xuXHRDaGVja2JveEZpbHRlckNvbXBvbmVudCxcblx0SW5wdXRGaWx0ZXJDb21wb25lbnQsXG5cdFNlbGVjdEZpbHRlckNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCB7XG5cdENvbXBvbmVudHMsXG5cblx0Q2hlY2tib3hGaWx0ZXJDb21wb25lbnQsXG5cdElucHV0RmlsdGVyQ29tcG9uZW50LFxuXHRTZWxlY3RGaWx0ZXJDb21wb25lbnQsXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi9jbGFzc2VzL2ZpbHRlci5jbGFzcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXJ2aWNlIHtcblx0cHVibGljIGZpbHRlckRhdGEoZGF0YTogYW55W10sIGZpbHRlcnM6IEZpbHRlcltdKSB7XG5cdFx0ZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcblx0XHRcdGRhdGEgPSBmaWx0ZXIucGFyc2VEYXRhKGRhdGEpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmlsdGVyU2VydmljZSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1vZHVsZSB7fVxuIiwiZXhwb3J0IGNsYXNzIEZpbHRlciB7XG5cdHB1YmxpYyBpZDogc3RyaW5nO1xuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRwdWJsaWMgb3B0aW9uczogYW55W107XG5cdHB1YmxpYyB2YWx1ZTogc3RyaW5nIHwgYW55W107XG5cdHB1YmxpYyBwYXJzZTogKGRhdGE6IGFueVtdLCB2YWx1ZTogYW55KSA9PiBhbnlbXTtcblxuXHRwdWJsaWMgcGFyc2VEYXRhKGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJzZShkYXRhLCB0aGlzLnZhbHVlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgUmVwbGFjZURhdGEgfSBmcm9tICcuLi90eXBlcy9sYWJlbHMudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAobGFiZWw6IHN0cmluZywgcmVwbGFjZURhdGE/OiBSZXBsYWNlRGF0YSk6IHN0cmluZyA9PiB7XG5cdGlmICghcmVwbGFjZURhdGEpIHtcblx0XHRyZXR1cm4gbGFiZWw7XG5cdH1cblxuXHRjb25zdCBlc2NhcGVTdHJpbmdSZWdFeHAgPSBwcm9wID0+IHByb3AucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKTtcblx0Y29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoYFxcJXsoJHtPYmplY3Qua2V5cyhyZXBsYWNlRGF0YSkubWFwKGVzY2FwZVN0cmluZ1JlZ0V4cCkuam9pbignfCcpfSlcXH1gLCAnZycpO1xuXG5cdHJldHVybiBsYWJlbC5yZXBsYWNlKHBhdHRlcm4sIChtYXRjaCwgcHJvcCkgPT4gcmVwbGFjZURhdGFbcHJvcF0gPyBTdHJpbmcocmVwbGFjZURhdGFbcHJvcF0pIDogJycpO1xufTtcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaW50ZXJwb2xhdGUgfSBmcm9tICcuLi91dGlscy9pbnRlcnBvbGF0aW9uJztcbmltcG9ydCB7IFJlcGxhY2VEYXRhLCBMYWJlbCB9IGZyb20gJy4uL3R5cGVzL2xhYmVscy50eXBlcyc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2ludGVycG9sYXRlTGFiZWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0ZUxhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0obGFiZWw6IHN0cmluZywgcmVwbGFjZURhdGE6IFJlcGxhY2VEYXRhKTogc3RyaW5nIHtcblx0XHRpZiAoIXJlcGxhY2VEYXRhIHx8ICFsYWJlbCkge1xuXHRcdFx0cmV0dXJuIGxhYmVsO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnRlcnBvbGF0ZShsYWJlbCwgcmVwbGFjZURhdGEpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vdHlwZXMvbGFiZWxzLnR5cGVzJztcblxuXG5AUGlwZSh7XG5cdG5hbWU6ICdwbHVyYWxpemVMYWJlbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBsdXJhbGl6ZUxhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0obGFiZWw6IExhYmVsfHN0cmluZywgY291bnQ6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0aWYgKCFsYWJlbCB8fCB0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWwgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb3VudCA9PT0gMSA/IGxhYmVsLnNpbmd1bGFyIDogbGFiZWwucGx1cmFsO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBQbHVyYWxpemVMYWJlbFBpcGUgfSBmcm9tICcuL3BsdXJhbGl6ZS1sYWJlbC5waXBlJztcbmltcG9ydCB7IEludGVycG9sYXRlTGFiZWxQaXBlIH0gZnJvbSAnLi9pbnRlcnBvbGF0ZS1sYWJlbC5waXBlJztcblxuZXhwb3J0IGNvbnN0IFBpcGVzID0gW1xuXHRQbHVyYWxpemVMYWJlbFBpcGUsXG5cdEludGVycG9sYXRlTGFiZWxQaXBlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBpcGVzIH0gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBpcGVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGlwZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsc01vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDbGFzc1Byb3ZpZGVyLCBGYWN0b3J5UHJvdmlkZXIsIEluamVjdGlvblRva2VuLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiBDcmVhdGUgYSBuZXcgaW5qZWN0aW9uIHRva2VuIGZvciBpbmplY3RpbmcgdGhlIHdpbmRvdyBpbnRvIGEgY29tcG9uZW50LiAqL1xuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93VG9rZW4nKTtcblxuLyogRGVmaW5lIGFic3RyYWN0IGNsYXNzIGZvciBvYnRhaW5pbmcgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgd2luZG93IG9iamVjdC4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaW5kb3dSZWYge1xuXHRnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB8IE9iamVjdCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuJyk7XG5cdH1cbn1cblxuLyogRGVmaW5lIGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgYWJzdHJhY3QgY2xhc3MgYW5kIHJldHVybnMgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LiAqL1xuZXhwb3J0IGNsYXNzIEJyb3dzZXJXaW5kb3dSZWYgZXh0ZW5kcyBXaW5kb3dSZWYge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cgfCBPYmplY3Qge1xuXHRcdHJldHVybiB3aW5kb3c7XG5cdH1cbn1cblxuLyogQ3JlYXRlIGFuIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dGYWN0b3J5KGJyb3dzZXJXaW5kb3dSZWY6IEJyb3dzZXJXaW5kb3dSZWYsIHBsYXRmb3JtSWQ6IE9iamVjdCk6IFdpbmRvdyB8IE9iamVjdCB7XG5cdGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuXHRcdHJldHVybiBicm93c2VyV2luZG93UmVmLm5hdGl2ZVdpbmRvdztcblx0fVxuXHRyZXR1cm4gbmV3IE9iamVjdCgpO1xufVxuXG4vKiBDcmVhdGUgYSBpbmplY3RhYmxlIHByb3ZpZGVyIGZvciB0aGUgV2luZG93UmVmIHRva2VuIHRoYXQgdXNlcyB0aGUgQnJvd3NlcldpbmRvd1JlZiBjbGFzcy4gKi9cbmNvbnN0IGJyb3dzZXJXaW5kb3dQcm92aWRlcjogQ2xhc3NQcm92aWRlciA9IHtcblx0cHJvdmlkZTogV2luZG93UmVmLFxuXHR1c2VDbGFzczogQnJvd3NlcldpbmRvd1JlZixcbn07XG5cbi8qIENyZWF0ZSBhbiBpbmplY3RhYmxlIHByb3ZpZGVyIHRoYXQgdXNlcyB0aGUgd2luZG93RmFjdG9yeSBmdW5jdGlvbiBmb3IgcmV0dXJuaW5nIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cbmNvbnN0IHdpbmRvd1Byb3ZpZGVyOiBGYWN0b3J5UHJvdmlkZXIgPSB7XG5cdHByb3ZpZGU6IFdJTkRPVyxcblx0dXNlRmFjdG9yeTogd2luZG93RmFjdG9yeSxcblx0ZGVwczogW1dpbmRvd1JlZiwgUExBVEZPUk1fSURdLFxufTtcblxuLyogQ3JlYXRlIGFuIGFycmF5IG9mIHByb3ZpZGVycy4gKi9cbmV4cG9ydCBjb25zdCBXSU5ET1dfUFJPVklERVJTID0gW1xuXHRicm93c2VyV2luZG93UHJvdmlkZXIsXG5cdHdpbmRvd1Byb3ZpZGVyLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdJTkRPV19QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL3dpbmRvdy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0V0lORE9XX1BST1ZJREVSUyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93TW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O3NCQW1Cb0IsSUFBSSxZQUFZLEVBQUU7Ozs7O0lBRzlCLDBDQUFROzs7O1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBR1YsMENBQVE7Ozs7UUFDZCxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTTtZQUM5QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkE5QnpCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsa2VBVVY7aUJBQ0E7Ozt5QkFFQyxLQUFLO3lCQUNMLE1BQU07O2tDQW5CUjs7Ozs7OztBQ0FBOztzQkFpQm9CLElBQUksWUFBWSxFQUFFOzs7OztJQUdyQyx1Q0FBUTs7O0lBQVI7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMvQjtLQUNEOzs7OztJQUVNLHVDQUFROzs7O2NBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O2dCQXhCekIsU0FBUyxTQUFD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