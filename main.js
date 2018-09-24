(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/avatar/fesm5/avatar.js":
/*!*************************************!*\
  !*** ./dist/avatar/fesm5/avatar.js ***!
  \*************************************/
/*! exports provided: AvatarModule, AvatarComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarModule", function() { return AvatarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var sizes = {
    S: /** @type {?} */ ('S'),
    M: /** @type {?} */ ('M'),
    L: /** @type {?} */ ('L'),
    R: /** @type {?} */ ('R'),
};
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
        this.avatarSizes = {
            S: 'a-avatar--small',
            M: 'a-avatar--medium',
            L: 'a-avatar--large',
            R: '',
        };
        this.title = '';
        this.className = '';
        this.size = sizes.R;
    }
    AvatarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-avatar',
                    template: "<div class=\"a-avatar\" [ngClass]=\"[className, avatarSizes[size]]\" [title]=\"title\">\n\t<img *ngIf=\"image\" class=\"a-avatar__image\" [alt]=\"title\" [src]=\"image\">\n\t<i *ngIf=\"icon\" class=\"a-avatar__icon\" [ngClass]=\"[icon]\"></i>\n\t<span *ngIf=\"letter\" class=\"a-avatar__letter\">{{ letter }}</span>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    AvatarComponent.propDecorators = {
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "image": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "icon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "letter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "className": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AvatarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    AvatarComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AvatarModule = /** @class */ (function () {
    function AvatarModule() {
    }
    AvatarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ],
                    declarations: [
                        Components,
                    ],
                    exports: [
                        Components,
                    ],
                },] },
    ];
    return AvatarModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIiwibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9hdmF0YXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBlbnVtIHNpemVzIHtcblx0UyA9IDxhbnk+J1MnLFxuXHRNID0gPGFueT4nTScsXG5cdEwgPSA8YW55PidMJyxcblx0UiA9IDxhbnk+J1InLFxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYXZhdGFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1hdmF0YXJcIiBbbmdDbGFzc109XCJbY2xhc3NOYW1lLCBhdmF0YXJTaXplc1tzaXplXV1cIiBbdGl0bGVdPVwidGl0bGVcIj5cblx0PGltZyAqbmdJZj1cImltYWdlXCIgY2xhc3M9XCJhLWF2YXRhcl9faW1hZ2VcIiBbYWx0XT1cInRpdGxlXCIgW3NyY109XCJpbWFnZVwiPlxuXHQ8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cImEtYXZhdGFyX19pY29uXCIgW25nQ2xhc3NdPVwiW2ljb25dXCI+PC9pPlxuXHQ8c3BhbiAqbmdJZj1cImxldHRlclwiIGNsYXNzPVwiYS1hdmF0YXJfX2xldHRlclwiPnt7IGxldHRlciB9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IHtcblx0cHVibGljIGF2YXRhclNpemVzID0ge1xuXHRcdFM6ICdhLWF2YXRhci0tc21hbGwnLFxuXHRcdE06ICdhLWF2YXRhci0tbWVkaXVtJyxcblx0XHRMOiAnYS1hdmF0YXItLWxhcmdlJyxcblx0XHRSOiAnJyxcblx0fTtcblxuXHRASW5wdXQoKSB0aXRsZSA9ICcnO1xuXG5cdEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG5cblx0QElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpIGxldHRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpIGNsYXNzTmFtZSA9ICcnO1xuXG5cdEBJbnB1dCgpIHNpemU6IHNpemVzID0gc2l6ZXMuUjtcbn1cbiIsImltcG9ydCB7IEF2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xuXG5jb25zdCBDb21wb25lbnRzID0gW1xuXHRBdmF0YXJDb21wb25lbnQsXG5dO1xuXG5leHBvcnQge1xuXHRDb21wb25lbnRzLFxuXG5cdEF2YXRhckNvbXBvbmVudCxcbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7eUJBSVUsR0FBRzt5QkFDSCxHQUFHO3lCQUNILEdBQUc7eUJBQ0gsR0FBRzs7OzsyQkFhUztZQUNwQixDQUFDLEVBQUUsaUJBQWlCO1lBQ3BCLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGlCQUFpQjtZQUNwQixDQUFDLEVBQUUsRUFBRTtTQUNMO3FCQUVnQixFQUFFO3lCQVFFLEVBQUU7b0JBRUEsS0FBSyxDQUFDLENBQUM7OztnQkEzQjlCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHVVQUtWO2lCQUNBOzs7OzBCQVNDLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxLQUFLOzJCQUVMLEtBQUs7OEJBRUwsS0FBSzt5QkFFTCxLQUFLOzswQkFyQ1A7Ozs7Ozs7QUNBQSxxQkFFTSxVQUFVLEdBQUc7SUFDbEIsZUFBZTtDQUNmOzs7Ozs7QUNKRDs7OztnQkFLQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLFVBQVU7cUJBQ1Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7cUJBQ1Y7aUJBQ0Q7O3VCQWZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./dist/calendar/fesm5/calendar.js":
/*!*****************************************!*\
  !*** ./dist/calendar/fesm5/calendar.js ***!
  \*****************************************/
/*! exports provided: CALENDAR_VIEW_DECENNIA, CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CalendarService, CalendarComponent, CalendarMonthComponent, CalendarYearComponent, CalendarDecenniaComponent, CALENDAR_DEFAULT_MONTH_LABELS, CALENDAR_DEFAULT_WEEKDAY_LABELS, CALENDAR_MONTH_LABELS, CALENDAR_WEEKDAY_LABELS, CalendarModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VIEW_DECENNIA", function() { return CALENDAR_VIEW_DECENNIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VIEW_MONTH", function() { return CALENDAR_VIEW_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VIEW_YEAR", function() { return CALENDAR_VIEW_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthComponent", function() { return CalendarMonthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarYearComponent", function() { return CalendarYearComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDecenniaComponent", function() { return CalendarDecenniaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_DEFAULT_MONTH_LABELS", function() { return CALENDAR_DEFAULT_MONTH_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_DEFAULT_WEEKDAY_LABELS", function() { return CALENDAR_DEFAULT_WEEKDAY_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_MONTH_LABELS", function() { return CALENDAR_MONTH_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_WEEKDAY_LABELS", function() { return CALENDAR_WEEKDAY_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/js-date-utils */ "./node_modules/@acpaas-ui/js-date-utils/acpaas-ui-js-date-utils.cjs.js");
/* harmony import */ var _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CALENDAR_VIEW_MONTH = 'CALENDAR_VIEW_MONTH';
var /** @type {?} */ CALENDAR_VIEW_YEAR = 'CALENDAR_VIEW_YEAR';
var /** @type {?} */ CALENDAR_VIEW_DECENNIA = 'CALENDAR_VIEW_DECENNIA';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarService = /** @class */ (function () {
    function CalendarService() {
        this.months = {};
    }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    CalendarService.prototype.getMonth = /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    function (month, year) {
        if (year) {
            if (this.currentYear !== year) {
                this.months = {};
            }
            this.currentYear = year;
        }
        if (this.months.hasOwnProperty(month)) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.months[month]);
        }
        var /** @type {?} */ date = new Date();
        date.setMonth(month, 1);
        if (year) {
            date.setFullYear(year);
        }
        var /** @type {?} */ generatedMonth = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateMonth(date, { startOfWeek: 1, padding: true, generatePadding: true });
        this.months[month] = generatedMonth;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(generatedMonth);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarService.prototype.getMonthForDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getMonth(date.getMonth(), date.getFullYear());
    };
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    CalendarService.prototype.getRangeForDate = /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    function (date, range) {
        return _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateRange(date, range, { startOfWeek: 1 });
    };
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    CalendarService.prototype.getRangesForDate = /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    function (date, range) {
        var /** @type {?} */ rangeOptions = { startOfWeek: 1 };
        var /** @type {?} */ before = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateMonth(date, date.getMonth() - 1);
        var /** @type {?} */ after = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateMonth(date, date.getMonth() + 1);
        return {
            before: _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateRange(before, range, rangeOptions),
            current: _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateRange(date, range, rangeOptions),
            after: _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateGenerator"].generateRange(after, range, rangeOptions),
        };
    };
    /**
     * @param {?=} date
     * @param {?=} range
     * @return {?}
     */
    CalendarService.prototype.getClosestDateForRange = /**
     * @param {?=} date
     * @param {?=} range
     * @return {?}
     */
    function (date, range) {
        if (date === void 0) { date = new Date(); }
        var /** @type {?} */ dateRange = this.getRangeForDate(date, range);
        if (_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].dateOutOfRange(date, dateRange)) {
            return date;
        }
        return _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].closestDateForRange(date, dateRange);
    };
    CalendarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return CalendarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CALENDAR_DEFAULT_WEEKDAY_LABELS = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
];
var /** @type {?} */ CALENDAR_DEFAULT_MONTH_LABELS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
var /** @type {?} */ CALENDAR_WEEKDAY_LABELS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('weekdayLabels');
var /** @type {?} */ CALENDAR_MONTH_LABELS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('monthLabels');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(moduleMonthLabels, moduleWeekdayLabels, calendarService) {
        if (moduleMonthLabels === void 0) { moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS; }
        if (moduleWeekdayLabels === void 0) { moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS; }
        this.moduleMonthLabels = moduleMonthLabels;
        this.moduleWeekdayLabels = moduleWeekdayLabels;
        this.calendarService = calendarService;
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CALENDAR_VIEW_MONTH = CALENDAR_VIEW_MONTH;
        this.CALENDAR_VIEW_YEAR = CALENDAR_VIEW_YEAR;
        this.CALENDAR_VIEW_DECENNIA = CALENDAR_VIEW_DECENNIA;
        this.activeView = CALENDAR_VIEW_MONTH;
        this.headerLabel = '';
    }
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
        this.monthLabels = this.monthLabels || this.moduleMonthLabels;
        this.activeDate = this.calendarService.getClosestDateForRange(this.activeDate, this.range);
        this.updateHeaderLabel();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ selectedDate = changes["selectedDate"] && changes["selectedDate"].currentValue ? changes["selectedDate"] : null;
        if (typeof this.monthLabels !== 'undefined' &&
            selectedDate &&
            !_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].datesAreEqual(selectedDate.currentValue, selectedDate.previousValue)) {
            this.activeDate = this.selectedDate;
            this.updateHeaderLabel();
        }
    };
    /**
     * @param {?=} factor
     * @return {?}
     */
    CalendarComponent.prototype.updateActiveDate = /**
     * @param {?=} factor
     * @return {?}
     */
    function (factor) {
        if (factor === void 0) { factor = 0; }
        if (factor === 0) {
            return;
        }
        var /** @type {?} */ activeDate = this.activeDate ? new Date(this.activeDate) : new Date();
        switch (this.activeView) {
            case CALENDAR_VIEW_MONTH:
                activeDate.setMonth(activeDate.getMonth() + factor);
                break;
            case CALENDAR_VIEW_YEAR:
                activeDate.setFullYear(activeDate.getFullYear() + factor);
                break;
            case CALENDAR_VIEW_DECENNIA:
                activeDate.setFullYear(activeDate.getFullYear() + (12 * factor));
                break;
        }
        this.activeDate = activeDate;
        this.updateHeaderLabel();
    };
    /**
     * @param {?=} factor
     * @return {?}
     */
    CalendarComponent.prototype.switchView = /**
     * @param {?=} factor
     * @return {?}
     */
    function (factor) {
        if (factor === void 0) { factor = 1; }
        var /** @type {?} */ views = [CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CALENDAR_VIEW_DECENNIA];
        var /** @type {?} */ currView = views.indexOf(this.activeView);
        var /** @type {?} */ nextView = (currView + factor) >= views.length ? 0 : currView + factor;
        nextView = nextView < 0 ? views.length - 1 : nextView;
        this.activeView = views[nextView];
        // reset activeDate when returning to month view without model update
        if (this.selectedDate && nextView === 0 && factor === 1) {
            this.activeDate = this.selectedDate;
        }
        this.updateHeaderLabel();
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updateHeaderLabel = /**
     * @return {?}
     */
    function () {
        switch (this.activeView) {
            case CALENDAR_VIEW_MONTH:
                this.headerLabel = this.monthLabels[this.activeDate.getMonth()] + ' ' + this.activeDate.getFullYear();
                break;
            case CALENDAR_VIEW_YEAR:
                this.headerLabel = String(this.activeDate.getFullYear());
                break;
            case CALENDAR_VIEW_DECENNIA:
                var /** @type {?} */ startYear = this.activeDate.getFullYear();
                this.headerLabel = startYear + " - " + (startYear + 11);
                break;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.pickDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ complete = this.activeView === CALENDAR_VIEW_MONTH;
        this.selectDate.emit({
            date: date,
            complete: complete,
        });
        if (!complete) {
            this.activeDate = date;
            this.switchView(-1);
        }
    };
    CalendarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'aui-calendar',
                    template: "<div class=\"m-datepicker__nav\">\n    <button tabindex=\"-1\" type=\"button\" aria-label=\"vorige maand\" class=\"a-button has-icon\" (click)=\"updateActiveDate(-1)\">\n        <i class=\"fa fa-angle-left\"></i>\n    </button>\n\n    <button tabindex=\"0\" type=\"button\" class=\"m-datepicker__title a-button\" (click)=\"switchView()\">\n        {{ headerLabel | titlecase }}\n    </button>\n\n    <button tabindex=\"0\" type=\"button\" aria-label=\"volgende maand\" class=\"a-button has-icon\" (click)=\"updateActiveDate(1)\">\n        <i class=\"fa fa-angle-right\"></i>\n    </button>\n</div>\n\n<aui-calendar-month\n    *ngIf=\"activeView === CALENDAR_VIEW_MONTH\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    [range]=\"range\"\n    [weekdayLabels]=\"weekdayLabels\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-month>\n<aui-calendar-year\n    *ngIf=\"activeView === CALENDAR_VIEW_YEAR\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    [monthLabels]=\"monthLabels\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-year>\n<aui-calendar-decennia\n    *ngIf=\"activeView === CALENDAR_VIEW_DECENNIA\"\n    [selectedDate]=\"selectedDate\"\n    [activeDate]=\"activeDate\"\n    (selectDate)=\"pickDate($event)\"\n></aui-calendar-decennia>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CALENDAR_MONTH_LABELS,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CALENDAR_WEEKDAY_LABELS,] },] },
        { type: CalendarService, },
    ]; };
    CalendarComponent.propDecorators = {
        "selectedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "range": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "weekdayLabels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "monthLabels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selectDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDecenniaComponent = /** @class */ (function () {
    function CalendarDecenniaComponent() {
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.years = [];
        this.selectedYear = -1;
        this.current = -1;
    }
    /**
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ current = new Date();
        this.current = current.getFullYear();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ currentValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, 'activeDate.currentValue');
        var /** @type {?} */ previousValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, 'activeDate.previousValue');
        var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        var /** @type {?} */ previousYear = previousValue instanceof Date ? previousValue.getFullYear() : -1;
        var /** @type {?} */ outOfRange = previousYear > currentYear || previousYear + 11 < currentYear;
        if (currentYear >= 0 && outOfRange) {
            this.updateYears();
        }
        this.selectedYear = this.selectedDate instanceof Date ? this.selectedDate.getFullYear() : -1;
    };
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    function (event, date) {
        event.stopPropagation();
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate.setFullYear(date);
        this.selectDate.emit(selectedDate);
    };
    /**
     * @return {?}
     */
    CalendarDecenniaComponent.prototype.updateYears = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ years = [];
        var /** @type {?} */ activeYear = this.activeDate.getFullYear();
        for (var /** @type {?} */ i = activeYear; i < activeYear + 12; i += 1) {
            years.push(i);
        }
        this.years = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["chunk"])(years, 4);
    };
    CalendarDecenniaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'aui-calendar-decennia',
                    template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of years\">\n            <td *ngFor=\"let year of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': year === current,\n                    'is-selected': year === selectedYear\n                }\" (click)=\"pickDate($event, year)\">\n                    {{ year }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarDecenniaComponent.propDecorators = {
        "selectedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selectDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CalendarDecenniaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthComponent = /** @class */ (function () {
    function CalendarMonthComponent(moduleWeekdayLabels, calendarService) {
        if (moduleWeekdayLabels === void 0) { moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS; }
        this.moduleWeekdayLabels = moduleWeekdayLabels;
        this.calendarService = calendarService;
        this.weekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS;
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dates = [];
        this.selectedDay = -1;
    }
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ selectedDateChanged = this.hasChanged(changes, 'selectedDate');
        var /** @type {?} */ activeDateChanged = this.hasChanged(changes, 'activeDate');
        var /** @type {?} */ monthChanged = activeDateChanged && !_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].datesAreEqual([
            changes["activeDate"].currentValue,
            changes["activeDate"].previousValue,
        ], 'M');
        var /** @type {?} */ selectedDayChanged = this.selectedDate && this.activeDate.getMonth() === this.selectedDate.getMonth();
        this.current = this.getCurrentDate();
        this.selectedDay = selectedDayChanged ? this.selectedDate.getDate() : -1;
        var /** @type {?} */ newDates = [];
        if (selectedDateChanged || (activeDateChanged && monthChanged)) {
            newDates = this.calendarService.getMonthForDate(this.activeDate);
        }
        else {
            return;
        }
        var /** @type {?} */ range = this.calendarService.getRangesForDate(this.activeDate, this.range);
        this.dates = newDates.map(function (week) { return week.map(function (day) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, day, { available: _this.dayIsAvailable(day, range) })); }); });
    };
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    CalendarMonthComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    function (event, day) {
        event.stopPropagation(); // Stop propagation so the modal doesn't close
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        if (day.padding) {
            var /** @type {?} */ month = day.date > 20 ? -1 : 1;
            selectedDate = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateMonth(selectedDate, selectedDate.getMonth() + month);
        }
        this.selectDate.emit(_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateDate(selectedDate, day.date));
    };
    /**
     * @param {?} changes
     * @param {?} prop
     * @return {?}
     */
    CalendarMonthComponent.prototype.hasChanged = /**
     * @param {?} changes
     * @param {?} prop
     * @return {?}
     */
    function (changes, prop) {
        var /** @type {?} */ current = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, prop + ".currentValue");
        var /** @type {?} */ previous = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, prop + ".previousValue");
        var /** @type {?} */ currentValue = current instanceof Date ? current.valueOf() : 0;
        var /** @type {?} */ previousValue = previous instanceof Date ? previous.valueOf() : 0;
        return !!currentValue && currentValue !== previousValue;
    };
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.getCurrentDate = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ current = new Date();
        var /** @type {?} */ monthHasChanged = !_acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].datesAreEqual([this.activeDate, current], ['M', 'Y']);
        return monthHasChanged ? -1 : current.getDate();
    };
    /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    CalendarMonthComponent.prototype.dayIsAvailable = /**
     * @param {?} day
     * @param {?} range
     * @return {?}
     */
    function (day, range) {
        var /** @type {?} */ dateRange = range.current;
        if (day.padding) {
            dateRange = day.date > 20 ? range.before : range.after;
        }
        return dateRange.indexOf(day.date) < 0;
    };
    CalendarMonthComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'aui-calendar-month',
                    template: "<table>\n    <thead>\n        <tr class=\"m-datepicker__days\">\n            <th *ngFor=\"let day of weekdayLabels\" title={{day}}>{{ day | slice:0:2 | titlecase }}</th>\n        </tr>\n    </thead>\n\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let week of dates\">\n            <td *ngFor=\"let day of week\">\n                <button\n                    tabindex=\"0\"\n                    type=\"button\"\n                    [ngClass]=\"{\n                        'is-faded': !day.date || day.padding,\n                        'is-selected': !day.padding && day.date === selectedDay,\n                        'is-current': !day.padding && day.date === current\n                    }\"\n                    (click)=\"pickDate($event, day)\"\n                    [disabled]=\"!day.available\"\n                >{{ day.date }}</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarMonthComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CALENDAR_WEEKDAY_LABELS,] },] },
        { type: CalendarService, },
    ]; };
    CalendarMonthComponent.propDecorators = {
        "selectedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "range": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "weekdayLabels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selectDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CalendarMonthComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarYearComponent = /** @class */ (function () {
    function CalendarYearComponent(moduleMonthLabels) {
        if (moduleMonthLabels === void 0) { moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS; }
        this.moduleMonthLabels = moduleMonthLabels;
        this.monthLabels = CALENDAR_DEFAULT_MONTH_LABELS;
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedMonth = -1;
        this.current = '';
        this.months = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarYearComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ currentValue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(changes, 'activeDate.currentValue');
        var /** @type {?} */ currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
        var /** @type {?} */ selectedMonthChanged = this.selectedDate && this.selectedDate.getFullYear() === this.activeDate.getFullYear();
        var /** @type {?} */ current = new Date();
        this.current = currentYear === current.getFullYear() ? this.monthLabels[current.getMonth()] : '';
        this.selectedMonth = selectedMonthChanged ? this.selectedDate.getMonth() : -1;
        if (changes["monthLabels"]) {
            this.monthLabels = this.monthLabels || this.moduleMonthLabels;
            this.months = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["chunk"])(this.monthLabels, 4);
        }
    };
    /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    CalendarYearComponent.prototype.pickDate = /**
     * @param {?} event
     * @param {?} date
     * @return {?}
     */
    function (event, date) {
        event.stopPropagation();
        var /** @type {?} */ selectedDate = new Date(this.activeDate);
        selectedDate = _acpaas_ui_js_date_utils__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].updateMonth(selectedDate, this.monthLabels.indexOf(date));
        this.selectDate.emit(selectedDate);
    };
    CalendarYearComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'aui-calendar-year',
                    template: "<table>\n    <tbody class=\"m-datepicker__calendar\">\n        <tr *ngFor=\"let group of months\">\n            <td *ngFor=\"let month of group\">\n                <button tabindex=\"0\" type=\"button\" [ngClass]=\"{\n                    'is-current': month === current,\n                    'is-selected': month === monthLabels[selectedMonth]\n                }\" (click)=\"pickDate($event, month)\">\n                    {{ month | titlecase }}\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CalendarYearComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CALENDAR_MONTH_LABELS,] },] },
    ]; };
    CalendarYearComponent.propDecorators = {
        "selectedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "activeDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "monthLabels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "selectDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CalendarYearComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CalendarComponent,
    CalendarDecenniaComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Services = [
    CalendarService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = CALENDAR_DEFAULT_WEEKDAY_LABELS, ɵ1 = CALENDAR_DEFAULT_MONTH_LABELS;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    CalendarModule.forChild = /**
     * @param {?} weekdayLabels
     * @param {?} monthLabels
     * @return {?}
     */
    function (weekdayLabels, monthLabels) {
        return {
            ngModule: CalendarModule,
            providers: [
                CalendarService,
                { provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels },
                { provide: CALENDAR_MONTH_LABELS, useValue: monthLabels },
            ],
        };
    };
    CalendarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    ],
                    declarations: [
                        Components,
                    ],
                    exports: [
                        Components,
                    ],
                    providers: [
                        Services,
                        { provide: CALENDAR_WEEKDAY_LABELS, useValue: ɵ0 },
                        { provide: CALENDAR_MONTH_LABELS, useValue: ɵ1 },
                    ],
                },] },
    ];
    return CalendarModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci90eXBlcy9jYWxlbmRhci50eXBlcy50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jYWxlbmRhci5jb25mLnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL2NhbGVuZGFyL2xpYi9jYWxlbmRhci9jb21wb25lbnRzL2RlY2VubmlhL2RlY2VubmlhLmNvbXBvbmVudC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy95ZWFyL3llYXIuY29tcG9uZW50LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vY2FsZW5kYXIvbGliL2NhbGVuZGFyL3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9jYWxlbmRhci9saWIvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVSYW5nZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9WSUVXX01PTlRIID0gJ0NBTEVOREFSX1ZJRVdfTU9OVEgnO1xuZXhwb3J0IGNvbnN0IENBTEVOREFSX1ZJRVdfWUVBUiA9ICdDQUxFTkRBUl9WSUVXX1lFQVInO1xuZXhwb3J0IGNvbnN0IENBTEVOREFSX1ZJRVdfREVDRU5OSUEgPSAnQ0FMRU5EQVJfVklFV19ERUNFTk5JQSc7XG5cbmV4cG9ydCB0eXBlIFdlZWtkYXlMYWJlbHNDb25maWcgPSBzdHJpbmdbXTtcbmV4cG9ydCB0eXBlIE1vbnRoTGFiZWxzQ29uZmlnID0gc3RyaW5nW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlclJlc3VsdCB7XG5cdGRhdGU6IERhdGU7XG5cdGNvbXBsZXRlOiBCb29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZU1hcCB7XG5cdGJlZm9yZTogbnVtYmVyW107XG5cdGN1cnJlbnQ6IG51bWJlcltdO1xuXHRhZnRlcjogbnVtYmVyW107XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQgeyBEYXRlR2VuZXJhdG9yLCBEYXRlSGVscGVyLCBEYXksIE1vbnRoLCBEYXRlUmFuZ2UgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2VNYXAgfSBmcm9tICcuLi90eXBlcy9jYWxlbmRhci50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhNYXAge1xuXHRba2V5OiBudW1iZXJdOiBNb250aDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG5cdHB1YmxpYyBtb250aHM6IE1vbnRoTWFwID0ge307XG5cdHByaXZhdGUgY3VycmVudFllYXI6IG51bWJlcjtcblxuXHRnZXRNb250aChtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogTW9udGgge1xuXHRcdGlmICh5ZWFyKSB7XG5cdFx0XHRpZiAodGhpcy5jdXJyZW50WWVhciAhPT0geWVhcikge1xuXHRcdFx0XHR0aGlzLm1vbnRocyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmN1cnJlbnRZZWFyID0geWVhcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tb250aHMuaGFzT3duUHJvcGVydHkobW9udGgpKSB7XG5cdFx0XHRyZXR1cm4gWy4uLnRoaXMubW9udGhzW21vbnRoXV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0ZGF0ZS5zZXRNb250aChtb250aCwgMSk7XG5cblx0XHRpZiAoeWVhcikge1xuXHRcdFx0ZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcblx0XHR9XG5cblx0XHRjb25zdCBnZW5lcmF0ZWRNb250aCA9IERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVNb250aChkYXRlLCB7IHN0YXJ0T2ZXZWVrOiAxLCBwYWRkaW5nOiB0cnVlLCBnZW5lcmF0ZVBhZGRpbmc6IHRydWUgfSk7XG5cblx0XHR0aGlzLm1vbnRoc1ttb250aF0gPSBnZW5lcmF0ZWRNb250aDtcblxuXHRcdHJldHVybiBbLi4uZ2VuZXJhdGVkTW9udGhdO1xuXHR9XG5cblx0Z2V0TW9udGhGb3JEYXRlKGRhdGU6IERhdGUpOiBNb250aCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TW9udGgoZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuXHR9XG5cblx0Z2V0UmFuZ2VGb3JEYXRlKGRhdGU6IERhdGUsIHJhbmdlOiBEYXRlUmFuZ2UpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVSYW5nZShkYXRlLCByYW5nZSwgeyBzdGFydE9mV2VlazogMSB9KTtcblx0fVxuXG5cdGdldFJhbmdlc0ZvckRhdGUoZGF0ZTogRGF0ZSwgcmFuZ2U6IERhdGVSYW5nZSk6IERhdGVSYW5nZU1hcCB7XG5cdFx0Y29uc3QgcmFuZ2VPcHRpb25zID0geyBzdGFydE9mV2VlazogMSB9O1xuXHRcdGNvbnN0IGJlZm9yZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoZGF0ZSwgZGF0ZS5nZXRNb250aCgpIC0gMSk7XG5cdFx0Y29uc3QgYWZ0ZXIgPSBEYXRlSGVscGVyLnVwZGF0ZU1vbnRoKGRhdGUsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGJlZm9yZTogRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGJlZm9yZSwgcmFuZ2UsIHJhbmdlT3B0aW9ucyksXG5cdFx0XHRjdXJyZW50OiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoZGF0ZSwgcmFuZ2UsIHJhbmdlT3B0aW9ucyksXG5cdFx0XHRhZnRlcjogRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGFmdGVyLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHR9O1xuXHR9XG5cblx0Z2V0Q2xvc2VzdERhdGVGb3JSYW5nZShkYXRlOiBEYXRlID0gbmV3IERhdGUoKSwgcmFuZ2U6IERhdGVSYW5nZSk6IERhdGUge1xuXHRcdGNvbnN0IGRhdGVSYW5nZSA9IHRoaXMuZ2V0UmFuZ2VGb3JEYXRlKGRhdGUsIHJhbmdlKTtcblxuXHRcdGlmIChEYXRlSGVscGVyLmRhdGVPdXRPZlJhbmdlKGRhdGUsIGRhdGVSYW5nZSkpIHtcblx0XHRcdHJldHVybiBkYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiBEYXRlSGVscGVyLmNsb3Nlc3REYXRlRm9yUmFuZ2UoZGF0ZSwgZGF0ZVJhbmdlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtkYXlMYWJlbHNDb25maWcsIE1vbnRoTGFiZWxzQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9jYWxlbmRhci50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTID0gW1xuXHQnTW9uJyxcblx0J1R1ZScsXG5cdCdXZWQnLFxuXHQnVGh1Jyxcblx0J0ZyaScsXG5cdCdTYXQnLFxuXHQnU3VuJyxcbl07XG5cbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyA9IFtcblx0J0phbnVhcnknLFxuXHQnRmVicnVhcnknLFxuXHQnTWFyY2gnLFxuXHQnQXByaWwnLFxuXHQnTWF5Jyxcblx0J0p1bmUnLFxuXHQnSnVseScsXG5cdCdBdWd1c3QnLFxuXHQnU2VwdGVtYmVyJyxcblx0J09jdG9iZXInLFxuXHQnTm92ZW1iZXInLFxuXHQnRGVjZW1iZXInLFxuXTtcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX1dFRUtEQVlfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPFdlZWtkYXlMYWJlbHNDb25maWc+KCd3ZWVrZGF5TGFiZWxzJyk7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVJfTU9OVEhfTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPE1vbnRoTGFiZWxzQ29uZmlnPignbW9udGhMYWJlbHMnKTtcbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZVJhbmdlLCBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHtcblx0Q0FMRU5EQVJfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUyxcblx0Q0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsXG5cdENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFNcbn0gZnJvbSAnLi4vLi4vY2FsZW5kYXIuY29uZic7XG5pbXBvcnQge1xuXHRXZWVrZGF5TGFiZWxzQ29uZmlnLFxuXHRNb250aExhYmVsc0NvbmZpZyxcblx0Q0FMRU5EQVJfVklFV19NT05USCxcblx0Q0FMRU5EQVJfVklFV19ZRUFSLFxuXHRDQUxFTkRBUl9WSUVXX0RFQ0VOTklBXG59IGZyb20gJy4uLy4uL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX25hdlwiPlxuICAgIDxidXR0b24gdGFiaW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwidm9yaWdlIG1hYW5kXCIgY2xhc3M9XCJhLWJ1dHRvbiBoYXMtaWNvblwiIChjbGljayk9XCJ1cGRhdGVBY3RpdmVEYXRlKC0xKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fdGl0bGUgYS1idXR0b25cIiAoY2xpY2spPVwic3dpdGNoVmlldygpXCI+XG4gICAgICAgIHt7IGhlYWRlckxhYmVsIHwgdGl0bGVjYXNlIH19XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwidm9sZ2VuZGUgbWFhbmRcIiBjbGFzcz1cImEtYnV0dG9uIGhhcy1pY29uXCIgKGNsaWNrKT1cInVwZGF0ZUFjdGl2ZURhdGUoMSlcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48YXVpLWNhbGVuZGFyLW1vbnRoXG4gICAgKm5nSWY9XCJhY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX01PTlRIXCJcbiAgICBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgW3JhbmdlXT1cInJhbmdlXCJcbiAgICBbd2Vla2RheUxhYmVsc109XCJ3ZWVrZGF5TGFiZWxzXCJcbiAgICAoc2VsZWN0RGF0ZSk9XCJwaWNrRGF0ZSgkZXZlbnQpXCJcbj48L2F1aS1jYWxlbmRhci1tb250aD5cbjxhdWktY2FsZW5kYXIteWVhclxuICAgICpuZ0lmPVwiYWN0aXZlVmlldyA9PT0gQ0FMRU5EQVJfVklFV19ZRUFSXCJcbiAgICBbc2VsZWN0ZWREYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgW21vbnRoTGFiZWxzXT1cIm1vbnRoTGFiZWxzXCJcbiAgICAoc2VsZWN0RGF0ZSk9XCJwaWNrRGF0ZSgkZXZlbnQpXCJcbj48L2F1aS1jYWxlbmRhci15ZWFyPlxuPGF1aS1jYWxlbmRhci1kZWNlbm5pYVxuICAgICpuZ0lmPVwiYWN0aXZlVmlldyA9PT0gQ0FMRU5EQVJfVklFV19ERUNFTk5JQVwiXG4gICAgW3NlbGVjdGVkRGF0ZV09XCJzZWxlY3RlZERhdGVcIlxuICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgIChzZWxlY3REYXRlKT1cInBpY2tEYXRlKCRldmVudClcIlxuPjwvYXVpLWNhbGVuZGFyLWRlY2VubmlhPlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIHJhbmdlOiBEYXRlUmFuZ2U7XG5cdEBJbnB1dCgpIHdlZWtkYXlMYWJlbHM6IFdlZWtkYXlMYWJlbHNDb25maWc7XG5cdEBJbnB1dCgpIG1vbnRoTGFiZWxzOiBNb250aExhYmVsc0NvbmZpZztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIENBTEVOREFSX1ZJRVdfTU9OVEggPSBDQUxFTkRBUl9WSUVXX01PTlRIO1xuXHRwdWJsaWMgQ0FMRU5EQVJfVklFV19ZRUFSID0gQ0FMRU5EQVJfVklFV19ZRUFSO1xuXHRwdWJsaWMgQ0FMRU5EQVJfVklFV19ERUNFTk5JQSA9IENBTEVOREFSX1ZJRVdfREVDRU5OSUE7XG5cdHB1YmxpYyBhY3RpdmVEYXRlOiBEYXRlO1xuXHRwdWJsaWMgYWN0aXZlVmlldzogc3RyaW5nID0gQ0FMRU5EQVJfVklFV19NT05USDtcblx0cHVibGljIGhlYWRlckxhYmVsID0gJyc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDQUxFTkRBUl9NT05USF9MQUJFTFMpIHB1YmxpYyBtb2R1bGVNb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTLFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMpIHB1YmxpYyBtb2R1bGVXZWVrZGF5TGFiZWxzID0gQ0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUyxcblx0XHRwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlXG5cdCkge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLndlZWtkYXlMYWJlbHMgPSB0aGlzLndlZWtkYXlMYWJlbHMgfHwgdGhpcy5tb2R1bGVXZWVrZGF5TGFiZWxzO1xuXHRcdHRoaXMubW9udGhMYWJlbHMgPSB0aGlzLm1vbnRoTGFiZWxzIHx8IHRoaXMubW9kdWxlTW9udGhMYWJlbHM7XG5cdFx0dGhpcy5hY3RpdmVEYXRlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2xvc2VzdERhdGVGb3JSYW5nZSh0aGlzLmFjdGl2ZURhdGUsIHRoaXMucmFuZ2UpO1xuXHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBzZWxlY3RlZERhdGUgPSBjaGFuZ2VzLnNlbGVjdGVkRGF0ZSAmJiBjaGFuZ2VzLnNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWUgPyBjaGFuZ2VzLnNlbGVjdGVkRGF0ZSA6IG51bGw7XG5cblx0XHRpZiAoXG5cdFx0XHR0eXBlb2YgdGhpcy5tb250aExhYmVscyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHRcdHNlbGVjdGVkRGF0ZSAmJlxuXHRcdFx0IURhdGVIZWxwZXIuZGF0ZXNBcmVFcXVhbChzZWxlY3RlZERhdGUuY3VycmVudFZhbHVlLCBzZWxlY3RlZERhdGUucHJldmlvdXNWYWx1ZSlcblx0XHQpIHtcblx0XHRcdHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xuXHRcdFx0dGhpcy51cGRhdGVIZWFkZXJMYWJlbCgpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZUFjdGl2ZURhdGUoZmFjdG9yOiBudW1iZXIgPSAwKTogdm9pZCB7XG5cdFx0aWYgKGZhY3RvciA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUgPyBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpIDogbmV3IERhdGUoKTtcblxuXHRcdHN3aXRjaCAodGhpcy5hY3RpdmVWaWV3KSB7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfTU9OVEg6XG5cdFx0XHRcdGFjdGl2ZURhdGUuc2V0TW9udGgoYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgZmFjdG9yKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfWUVBUjpcblx0XHRcdFx0YWN0aXZlRGF0ZS5zZXRGdWxsWWVhcihhY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyBmYWN0b3IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ERUNFTk5JQTpcblx0XHRcdFx0YWN0aXZlRGF0ZS5zZXRGdWxsWWVhcihhY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyAoMTIgKiBmYWN0b3IpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVEYXRlID0gYWN0aXZlRGF0ZTtcblx0XHR0aGlzLnVwZGF0ZUhlYWRlckxhYmVsKCk7XG5cdH1cblxuXHRzd2l0Y2hWaWV3KGZhY3RvcjogbnVtYmVyID0gMSk6IHZvaWQge1xuXHRcdGNvbnN0IHZpZXdzID0gW0NBTEVOREFSX1ZJRVdfTU9OVEgsIENBTEVOREFSX1ZJRVdfWUVBUiwgQ0FMRU5EQVJfVklFV19ERUNFTk5JQV07XG5cblx0XHRjb25zdCBjdXJyVmlldyA9IHZpZXdzLmluZGV4T2YodGhpcy5hY3RpdmVWaWV3KTtcblx0XHRsZXQgbmV4dFZpZXcgPSAoY3VyclZpZXcgKyBmYWN0b3IpID49IHZpZXdzLmxlbmd0aCA/IDAgOiBjdXJyVmlldyArIGZhY3Rvcjtcblx0XHRuZXh0VmlldyA9IG5leHRWaWV3IDwgMCA/IHZpZXdzLmxlbmd0aCAtIDEgOiBuZXh0VmlldztcblxuXHRcdHRoaXMuYWN0aXZlVmlldyA9IHZpZXdzW25leHRWaWV3XTtcblxuXHRcdC8vIHJlc2V0IGFjdGl2ZURhdGUgd2hlbiByZXR1cm5pbmcgdG8gbW9udGggdmlldyB3aXRob3V0IG1vZGVsIHVwZGF0ZVxuXHRcdGlmICh0aGlzLnNlbGVjdGVkRGF0ZSAmJiBuZXh0VmlldyA9PT0gMCAmJiBmYWN0b3IgPT09IDEpIHtcblx0XHRcdHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xuXHRcdH1cblxuXHRcdHRoaXMudXBkYXRlSGVhZGVyTGFiZWwoKTtcblx0fVxuXG5cdHVwZGF0ZUhlYWRlckxhYmVsKCk6IHZvaWQge1xuXHRcdHN3aXRjaCAodGhpcy5hY3RpdmVWaWV3KSB7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfTU9OVEg6XG5cdFx0XHRcdHRoaXMuaGVhZGVyTGFiZWwgPSB0aGlzLm1vbnRoTGFiZWxzW3RoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpXSArICcgJyArIHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ0FMRU5EQVJfVklFV19ZRUFSOlxuXHRcdFx0XHR0aGlzLmhlYWRlckxhYmVsID0gU3RyaW5nKHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIENBTEVOREFSX1ZJRVdfREVDRU5OSUE6XG5cdFx0XHRcdGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHR0aGlzLmhlYWRlckxhYmVsID0gYCR7c3RhcnRZZWFyfSAtICR7c3RhcnRZZWFyICsgMTF9YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cGlja0RhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBsZXRlID0gdGhpcy5hY3RpdmVWaWV3ID09PSBDQUxFTkRBUl9WSUVXX01PTlRIO1xuXG5cdFx0dGhpcy5zZWxlY3REYXRlLmVtaXQoe1xuXHRcdFx0ZGF0ZTogZGF0ZSxcblx0XHRcdGNvbXBsZXRlOiBjb21wbGV0ZSxcblx0XHR9KTtcblxuXHRcdGlmICghY29tcGxldGUpIHtcblx0XHRcdHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XG5cdFx0XHR0aGlzLnN3aXRjaFZpZXcoLTEpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCwgY2h1bmsgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXItZGVjZW5uaWEnLFxuXHR0ZW1wbGF0ZTogYDx0YWJsZT5cbiAgICA8dGJvZHkgY2xhc3M9XCJtLWRhdGVwaWNrZXJfX2NhbGVuZGFyXCI+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgeWVhcnNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgeWVhciBvZiBncm91cFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgJ2lzLWN1cnJlbnQnOiB5ZWFyID09PSBjdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAnaXMtc2VsZWN0ZWQnOiB5ZWFyID09PSBzZWxlY3RlZFllYXJcbiAgICAgICAgICAgICAgICB9XCIgKGNsaWNrKT1cInBpY2tEYXRlKCRldmVudCwgeWVhcilcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgeWVhciB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIGFjdGl2ZURhdGU6IERhdGU7XG5cdEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyB5ZWFycyA9IFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWRZZWFyID0gLTE7XG5cdHB1YmxpYyBjdXJyZW50ID0gLTE7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCk7XG5cdFx0dGhpcy5jdXJyZW50ID0gY3VycmVudC5nZXRGdWxsWWVhcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGdldChjaGFuZ2VzLCAnYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUnKTtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLnByZXZpb3VzVmFsdWUnKTtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBjdXJyZW50VmFsdWUuZ2V0RnVsbFllYXIoKSA6IC0xO1xuXHRcdGNvbnN0IHByZXZpb3VzWWVhciA9IHByZXZpb3VzVmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gcHJldmlvdXNWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3Qgb3V0T2ZSYW5nZSA9IHByZXZpb3VzWWVhciA+IGN1cnJlbnRZZWFyIHx8IHByZXZpb3VzWWVhciArIDExIDwgY3VycmVudFllYXI7XG5cblx0XHRpZiAoY3VycmVudFllYXIgPj0gMCAmJiBvdXRPZlJhbmdlKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVllYXJzKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLnNlbGVjdGVkRGF0ZSBpbnN0YW5jZW9mIERhdGUgPyB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF0ZTogbnVtYmVyKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRjb25zdCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHNlbGVjdGVkRGF0ZS5zZXRGdWxsWWVhcihkYXRlKTtcblxuXHRcdHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVllYXJzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHllYXJzID0gW107XG5cdFx0Y29uc3QgYWN0aXZlWWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGFjdGl2ZVllYXI7IGkgPCBhY3RpdmVZZWFyICsgMTI7IGkgKz0gMSkge1xuXHRcdFx0eWVhcnMucHVzaChpKTtcblx0XHR9XG5cblx0XHR0aGlzLnllYXJzID0gY2h1bmsoeWVhcnMsIDQpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEluamVjdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgRGF5LCBNb250aCwgRGF0ZVJhbmdlLCBEYXRlSGVscGVyIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMgfSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlTWFwLCBXZWVrZGF5TGFiZWxzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXItbW9udGgnLFxuXHR0ZW1wbGF0ZTogYDx0YWJsZT5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fZGF5c1wiPlxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla2RheUxhYmVsc1wiIHRpdGxlPXt7ZGF5fX0+e3sgZGF5IHwgc2xpY2U6MDoyIHwgdGl0bGVjYXNlIH19PC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuXG4gICAgPHRib2R5IGNsYXNzPVwibS1kYXRlcGlja2VyX19jYWxlbmRhclwiPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2YgZGF0ZXNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaXMtZmFkZWQnOiAhZGF5LmRhdGUgfHwgZGF5LnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXMtc2VsZWN0ZWQnOiAhZGF5LnBhZGRpbmcgJiYgZGF5LmRhdGUgPT09IHNlbGVjdGVkRGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWN1cnJlbnQnOiAhZGF5LnBhZGRpbmcgJiYgZGF5LmRhdGUgPT09IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJwaWNrRGF0ZSgkZXZlbnQsIGRheSlcIlxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWRheS5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgID57eyBkYXkuZGF0ZSB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBzZWxlY3RlZERhdGU6IERhdGU7XG5cdEBJbnB1dCgpIGFjdGl2ZURhdGU6IERhdGU7XG5cdEBJbnB1dCgpIHJhbmdlOiBEYXRlUmFuZ2U7XG5cdEBJbnB1dCgpIHdlZWtkYXlMYWJlbHM6IFdlZWtkYXlMYWJlbHNDb25maWcgPSBDQUxFTkRBUl9ERUZBVUxUX1dFRUtEQVlfTEFCRUxTO1xuXHRAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgZGF0ZXM6IE1vbnRoID0gW107XG5cdHB1YmxpYyBzZWxlY3RlZERheSA9IC0xO1xuXHRwdWJsaWMgY3VycmVudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMpIHByaXZhdGUgbW9kdWxlV2Vla2RheUxhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfV0VFS0RBWV9MQUJFTFMsXG5cdFx0cHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZVxuXHQpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy53ZWVrZGF5TGFiZWxzID0gdGhpcy53ZWVrZGF5TGFiZWxzIHx8IHRoaXMubW9kdWxlV2Vla2RheUxhYmVscztcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBzZWxlY3RlZERhdGVDaGFuZ2VkID0gdGhpcy5oYXNDaGFuZ2VkKGNoYW5nZXMsICdzZWxlY3RlZERhdGUnKTtcblx0XHRjb25zdCBhY3RpdmVEYXRlQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZChjaGFuZ2VzLCAnYWN0aXZlRGF0ZScpO1xuXHRcdGNvbnN0IG1vbnRoQ2hhbmdlZCA9IGFjdGl2ZURhdGVDaGFuZ2VkICYmICFEYXRlSGVscGVyLmRhdGVzQXJlRXF1YWwoW1xuXHRcdFx0Y2hhbmdlcy5hY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZSxcblx0XHRcdGNoYW5nZXMuYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlLFxuXHRcdF0sICdNJyk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXlDaGFuZ2VkID0gdGhpcy5zZWxlY3RlZERhdGUgJiYgdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgPT09IHRoaXMuc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XG5cblx0XHR0aGlzLmN1cnJlbnQgPSB0aGlzLmdldEN1cnJlbnREYXRlKCk7XG5cdFx0dGhpcy5zZWxlY3RlZERheSA9IHNlbGVjdGVkRGF5Q2hhbmdlZCA/IHRoaXMuc2VsZWN0ZWREYXRlLmdldERhdGUoKSA6IC0xO1xuXG5cdFx0bGV0IG5ld0RhdGVzID0gW107XG5cblx0XHRpZiAoc2VsZWN0ZWREYXRlQ2hhbmdlZCB8fCAoYWN0aXZlRGF0ZUNoYW5nZWQgJiYgbW9udGhDaGFuZ2VkKSkge1xuXHRcdFx0bmV3RGF0ZXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aEZvckRhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJhbmdlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0UmFuZ2VzRm9yRGF0ZSh0aGlzLmFjdGl2ZURhdGUsIHRoaXMucmFuZ2UpO1xuXG5cdFx0dGhpcy5kYXRlcyA9IG5ld0RhdGVzLm1hcCh3ZWVrID0+IHdlZWsubWFwKGRheSA9PiAoey4uLmRheSwgYXZhaWxhYmxlOiB0aGlzLmRheUlzQXZhaWxhYmxlKGRheSwgcmFuZ2UpIH0pKSk7XG5cdH1cblxuXHRwaWNrRGF0ZShldmVudDogTW91c2VFdmVudCwgZGF5OiBEYXkpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gU3RvcCBwcm9wYWdhdGlvbiBzbyB0aGUgbW9kYWwgZG9lc24ndCBjbG9zZVxuXG5cdFx0bGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cblx0XHRpZiAoZGF5LnBhZGRpbmcpIHtcblx0XHRcdGNvbnN0IG1vbnRoID0gZGF5LmRhdGUgPiAyMCA/IC0xIDogMTtcblx0XHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSArIG1vbnRoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdERhdGUuZW1pdChEYXRlSGVscGVyLnVwZGF0ZURhdGUoc2VsZWN0ZWREYXRlLCBkYXkuZGF0ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBoYXNDaGFuZ2VkKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMsIHByb3A6IHN0cmluZyk6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0uY3VycmVudFZhbHVlYCk7XG5cdFx0Y29uc3QgcHJldmlvdXMgPSBnZXQoY2hhbmdlcywgYCR7cHJvcH0ucHJldmlvdXNWYWx1ZWApO1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlID8gY3VycmVudC52YWx1ZU9mKCkgOiAwO1xuXHRcdGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91cyBpbnN0YW5jZW9mIERhdGUgPyBwcmV2aW91cy52YWx1ZU9mKCkgOiAwO1xuXG5cdFx0cmV0dXJuICEhY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZSAhPT0gcHJldmlvdXNWYWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q3VycmVudERhdGUoKTogbnVtYmVyIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBtb250aEhhc0NoYW5nZWQgPSAhRGF0ZUhlbHBlci5kYXRlc0FyZUVxdWFsKFxuXHRcdFx0W3RoaXMuYWN0aXZlRGF0ZSwgY3VycmVudF0sXG5cdFx0XHRbJ00nLCAnWSddXG5cdFx0KTtcblxuXHRcdHJldHVybiBtb250aEhhc0NoYW5nZWQgPyAtMSA6IGN1cnJlbnQuZ2V0RGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBkYXlJc0F2YWlsYWJsZShkYXk6IERheSwgcmFuZ2U6IERhdGVSYW5nZU1hcCk6IEJvb2xlYW4ge1xuXHRcdGxldCBkYXRlUmFuZ2UgPSByYW5nZS5jdXJyZW50O1xuXG5cdFx0aWYgKGRheS5wYWRkaW5nKSB7XG5cdFx0XHRkYXRlUmFuZ2UgPSBkYXkuZGF0ZSA+IDIwID8gcmFuZ2UuYmVmb3JlIDogcmFuZ2UuYWZ0ZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGVSYW5nZS5pbmRleE9mKGRheS5kYXRlKSA8IDA7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQsIGNodW5rIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IENBTEVOREFSX01PTlRIX0xBQkVMUywgQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMgfSBmcm9tICcuLi8uLi9jYWxlbmRhci5jb25mJztcbmltcG9ydCB7IE1vbnRoTGFiZWxzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2FsZW5kYXIteWVhcicsXG5cdHRlbXBsYXRlOiBgPHRhYmxlPlxuICAgIDx0Ym9keSBjbGFzcz1cIm0tZGF0ZXBpY2tlcl9fY2FsZW5kYXJcIj5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiBtb250aHNcIj5cbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgbW9udGggb2YgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICdpcy1jdXJyZW50JzogbW9udGggPT09IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICdpcy1zZWxlY3RlZCc6IG1vbnRoID09PSBtb250aExhYmVsc1tzZWxlY3RlZE1vbnRoXVxuICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwicGlja0RhdGUoJGV2ZW50LCBtb250aClcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbW9udGggfCB0aXRsZWNhc2UgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJZZWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBhY3RpdmVEYXRlOiBEYXRlO1xuXHRASW5wdXQoKSBtb250aExhYmVsczogTW9udGhMYWJlbHNDb25maWcgPSBDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMUztcblx0QE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHNlbGVjdGVkTW9udGggPSAtMTtcblx0cHVibGljIGN1cnJlbnQgPSAnJztcblx0cHVibGljIG1vbnRoczogQXJyYXk8c3RyaW5nW10+ID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDQUxFTkRBUl9NT05USF9MQUJFTFMpIHB1YmxpYyBtb2R1bGVNb250aExhYmVscyA9IENBTEVOREFSX0RFRkFVTFRfTU9OVEhfTEFCRUxTXG5cdCkge31cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gZ2V0KGNoYW5nZXMsICdhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZScpO1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IGN1cnJlbnRWYWx1ZS5nZXRGdWxsWWVhcigpIDogLTE7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRNb250aENoYW5nZWQgPSB0aGlzLnNlbGVjdGVkRGF0ZSAmJiB0aGlzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcblxuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnRZZWFyID09PSBjdXJyZW50LmdldEZ1bGxZZWFyKCkgPyB0aGlzLm1vbnRoTGFiZWxzW2N1cnJlbnQuZ2V0TW9udGgoKV0gOiAnJztcblxuXHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IHNlbGVjdGVkTW9udGhDaGFuZ2VkID8gdGhpcy5zZWxlY3RlZERhdGUuZ2V0TW9udGgoKSA6IC0xO1xuXG5cdFx0aWYgKGNoYW5nZXMubW9udGhMYWJlbHMpIHtcblx0XHRcdHRoaXMubW9udGhMYWJlbHMgPSB0aGlzLm1vbnRoTGFiZWxzIHx8IHRoaXMubW9kdWxlTW9udGhMYWJlbHM7XG5cdFx0XHR0aGlzLm1vbnRocyA9IGNodW5rKHRoaXMubW9udGhMYWJlbHMsIDQpO1xuXHRcdH1cblx0fVxuXG5cdHBpY2tEYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRlOiBzdHJpbmcpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHNlbGVjdGVkRGF0ZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoc2VsZWN0ZWREYXRlLCB0aGlzLm1vbnRoTGFiZWxzLmluZGV4T2YoZGF0ZSkpO1xuXG5cdFx0dGhpcy5zZWxlY3REYXRlLmVtaXQoc2VsZWN0ZWREYXRlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50IH0gZnJvbSAnLi9kZWNlbm5pYS9kZWNlbm5pYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aENvbXBvbmVudCB9IGZyb20gJy4vbW9udGgvbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyWWVhckNvbXBvbmVudCB9IGZyb20gJy4veWVhci95ZWFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG5cdENhbGVuZGFyQ29tcG9uZW50LFxuXHRDYWxlbmRhckRlY2VubmlhQ29tcG9uZW50LFxuXHRDYWxlbmRhck1vbnRoQ29tcG9uZW50LFxuXHRDYWxlbmRhclllYXJDb21wb25lbnQsXG59O1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0Q2FsZW5kYXJDb21wb25lbnQsXG5cdENhbGVuZGFyRGVjZW5uaWFDb21wb25lbnQsXG5cdENhbGVuZGFyTW9udGhDb21wb25lbnQsXG5cdENhbGVuZGFyWWVhckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdENhbGVuZGFyU2VydmljZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuXG5pbXBvcnQge1xuXHRDQUxFTkRBUl9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUyxcblx0Q0FMRU5EQVJfTU9OVEhfTEFCRUxTLFxuXHRDQUxFTkRBUl9ERUZBVUxUX01PTlRIX0xBQkVMU1xufSBmcm9tICcuL2NhbGVuZGFyLmNvbmYnO1xuaW1wb3J0IHsgV2Vla2RheUxhYmVsc0NvbmZpZywgTW9udGhMYWJlbHNDb25maWcgfSBmcm9tICcuL3R5cGVzL2NhbGVuZGFyLnR5cGVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTZXJ2aWNlcyxcblx0XHR7IHByb3ZpZGU6IENBTEVOREFSX1dFRUtEQVlfTEFCRUxTLCB1c2VWYWx1ZTogQ0FMRU5EQVJfREVGQVVMVF9XRUVLREFZX0xBQkVMUyB9LFxuXHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfTU9OVEhfTEFCRUxTLCB1c2VWYWx1ZTogQ0FMRU5EQVJfREVGQVVMVF9NT05USF9MQUJFTFMgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0d2Vla2RheUxhYmVsczogV2Vla2RheUxhYmVsc0NvbmZpZyxcblx0XHRtb250aExhYmVsczogTW9udGhMYWJlbHNDb25maWdcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDYWxlbmRhck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfV0VFS0RBWV9MQUJFTFMsIHVzZVZhbHVlOiB3ZWVrZGF5TGFiZWxzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ0FMRU5EQVJfTU9OVEhfTEFCRUxTLCB1c2VWYWx1ZTogbW9udGhMYWJlbHMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxxQkFBYSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztBQUN6RCxxQkFBYSxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztBQUN2RCxxQkFBYSxzQkFBc0IsR0FBRyx3QkFBd0I7Ozs7Ozs7O3NCQ1FuQyxFQUFFOzs7Ozs7O0lBRzVCLGtDQUFROzs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLElBQWE7UUFDcEMsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO2dCQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QyxnQkFBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQy9CO1FBRUQscUJBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEIsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQscUJBQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVB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

/***/ }),

/***/ "./dist/code-snippet/fesm5/code-snippet.js":
/*!*************************************************!*\
  !*** ./dist/code-snippet/fesm5/code-snippet.js ***!
  \*************************************************/
/*! exports provided: CodeSnippetModule, CodeSnippetComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetModule", function() { return CodeSnippetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetComponent", function() { return CodeSnippetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-highlight-js */ "./node_modules/angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ marked = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
var CodeSnippetComponent = /** @class */ (function () {
    function CodeSnippetComponent(platformId, el, highlightJsService) {
        this.platformId = platformId;
        this.el = el;
        this.highlightJsService = highlightJsService;
        this.setClass = true;
        this.processMarkdown = false;
        this.scrollable = true;
    }
    /**
     * @return {?}
     */
    CodeSnippetComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.processMarkdown) {
            this.codeSnippet = marked(this.codeSnippet);
        }
    };
    /**
     * @return {?}
     */
    CodeSnippetComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var /** @type {?} */ allPreEl = this.el.nativeElement.querySelectorAll('pre');
            for (var /** @type {?} */ i = 0; i < allPreEl.length; i++) {
                // Add class to pre-elements in markdown files
                if (!allPreEl[i].classList.contains('a-pre')) {
                    allPreEl[i].className += ' a-pre';
                    if (this.scrollable) {
                        allPreEl[i].className += ' a-pre--scrollable';
                    }
                }
                this.highlightJsService.highlight(allPreEl[i]);
            }
        }
    };
    CodeSnippetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-code-snippet',
                    template: "<div class=\"aui-code-snippet__inner\">\n    <pre *ngIf=\"!this.processMarkdown\"><code>{{ codeSnippet }}</code></pre>\n\n    <div class=\"code-snippet-md\" [innerHTML]=\"codeSnippet\" *ngIf=\"this.processMarkdown\"></div>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CodeSnippetComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__["HighlightJsService"], },
    ]; };
    CodeSnippetComponent.propDecorators = {
        "setClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.aui-code-snippet',] },],
        "codeSnippet": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "processMarkdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CodeSnippetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CodeSnippetComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CodeSnippetModule = /** @class */ (function () {
    function CodeSnippetModule() {
    }
    CodeSnippetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__["HighlightJsModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(Components),
                    providers: [
                        angular2_highlight_js__WEBPACK_IMPORTED_MODULE_2__["HighlightJsService"],
                    ],
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(Components),
                },] },
    ];
    return CodeSnippetModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zbmlwcGV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb21wb25lbnRzL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQuY29tcG9uZW50LnRzIiwibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0QWZ0ZXJWaWV3Q2hlY2tlZCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nLFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgbWFya2VkID0gcmVxdWlyZSgnbWFya2VkJyk7XG5pbXBvcnQgeyBIaWdobGlnaHRKc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1oaWdobGlnaHQtanMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY29kZS1zbmlwcGV0Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWNvZGUtc25pcHBldF9faW5uZXJcIj5cbiAgICA8cHJlICpuZ0lmPVwiIXRoaXMucHJvY2Vzc01hcmtkb3duXCI+PGNvZGU+e3sgY29kZVNuaXBwZXQgfX08L2NvZGU+PC9wcmU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29kZS1zbmlwcGV0LW1kXCIgW2lubmVySFRNTF09XCJjb2RlU25pcHBldFwiICpuZ0lmPVwidGhpcy5wcm9jZXNzTWFya2Rvd25cIj48L2Rpdj5cbjwvZGl2PlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvZGVTbmlwcGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktY29kZS1zbmlwcGV0Jykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGNvZGVTbmlwcGV0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHByb2Nlc3NNYXJrZG93biA9IGZhbHNlO1xuXHRASW5wdXQoKSBzY3JvbGxhYmxlID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQsXG5cdFx0cHJpdmF0ZSBlbDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGhpZ2hsaWdodEpzU2VydmljZTogSGlnaGxpZ2h0SnNTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMucHJvY2Vzc01hcmtkb3duKSB7IHRoaXMuY29kZVNuaXBwZXQgPSBtYXJrZWQodGhpcy5jb2RlU25pcHBldCk7IH1cblx0fVxuXG5cdHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGFsbFByZUVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByZUVsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vIEFkZCBjbGFzcyB0byBwcmUtZWxlbWVudHMgaW4gbWFya2Rvd24gZmlsZXNcblx0XHRcdFx0aWYgKCFhbGxQcmVFbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2EtcHJlJykpIHtcblx0XHRcdFx0XHRhbGxQcmVFbFtpXS5jbGFzc05hbWUgKz0gJyBhLXByZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuXHRcdFx0XHRcdFx0YWxsUHJlRWxbaV0uY2xhc3NOYW1lICs9ICcgYS1wcmUtLXNjcm9sbGFibGUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGlnaGxpZ2h0SnNTZXJ2aWNlLmhpZ2hsaWdodChhbGxQcmVFbFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb2RlU25pcHBldENvbXBvbmVudCB9IGZyb20gJy4vY29kZS1zbmlwcGV0L2NvZGUtc25pcHBldC5jb21wb25lbnQnO1xuXG5leHBvcnQge1xuXHRDb2RlU25pcHBldENvbXBvbmVudCxcbn07XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRDb2RlU25pcHBldENvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhpZ2hsaWdodEpzTW9kdWxlLCBIaWdobGlnaHRKc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1oaWdobGlnaHQtanMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRIaWdobGlnaHRKc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0SGlnaGxpZ2h0SnNTZXJ2aWNlLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXRNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLEFBYUEscUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQztJQW1CQyw4QkFDOEIsWUFDckIsSUFDQTtRQUZxQixlQUFVLEdBQVYsVUFBVTtRQUMvQixPQUFFLEdBQUYsRUFBRTtRQUNGLHVCQUFrQixHQUFsQixrQkFBa0I7d0JBVHVCLElBQUk7K0JBRzNCLEtBQUs7MEJBQ1YsSUFBSTtLQU10Qjs7OztJQUVHLDBDQUFXOzs7O1FBQ2pCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUFFOzs7OztJQUdwRSxpREFBa0I7Ozs7UUFDeEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9ELEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDN0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7b0JBQ2xDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDcEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQztxQkFDOUM7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQztTQUNEOzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsME9BS1Y7b0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dEQVNFLE1BQU0sU0FBQyxXQUFXO2dCQTNCcEIsVUFBVTtnQkFPRixrQkFBa0I7Ozs2QkFhekIsV0FBVyxTQUFDLHdCQUF3QjtnQ0FFcEMsS0FBSztvQ0FDTCxLQUFLOytCQUNMLEtBQUs7OytCQS9CUDs7Ozs7OztBQ0FBLHFCQU1hLFVBQVUsR0FBRztJQUN6QixvQkFBb0I7Q0FDcEI7Ozs7Ozs7Ozs7Z0JDRkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGlCQUFpQjtxQkFDakI7b0JBQ0QsWUFBWSxXQUNSLFVBQVUsQ0FDYjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Ysa0JBQWtCO3FCQUNsQjtvQkFDRCxPQUFPLFdBQ0gsVUFBVSxDQUNiO2lCQUNEOzs0QkFwQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./dist/flyout/fesm5/flyout.js":
/*!*************************************!*\
  !*** ./dist/flyout/fesm5/flyout.js ***!
  \*************************************/
/*! exports provided: FlyoutModule, FlyoutActionDirective, FlyoutCloseDirective, FlyoutZoneDirective, FlyoutDirective, FlyoutService, FlyoutSize, FlyoutButtonModule, FlyoutButtonComponent, FlyoutButtonSize, ɵc, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutModule", function() { return FlyoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutActionDirective", function() { return FlyoutActionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutCloseDirective", function() { return FlyoutCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutZoneDirective", function() { return FlyoutZoneDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutDirective", function() { return FlyoutDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutService", function() { return FlyoutService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutSize", function() { return FlyoutSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutButtonModule", function() { return FlyoutButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutButtonComponent", function() { return FlyoutButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutButtonSize", function() { return FlyoutButtonSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Directives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Services; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutZoneDirective = /** @class */ (function () {
    function FlyoutZoneDirective(elementRef) {
        this.elementRef = elementRef;
        this.class = true;
        this.element = this.elementRef.nativeElement;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    FlyoutZoneDirective.prototype.contains = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.auiFlyoutZone === false) {
            return false;
        }
        return this.element.contains(element);
    };
    FlyoutZoneDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiFlyoutZone]',
                    exportAs: 'auiFlyoutZone',
                },] },
    ];
    /** @nocollapse */
    FlyoutZoneDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    FlyoutZoneDirective.propDecorators = {
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.m-flyout__content',] },],
        "auiFlyoutZone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return FlyoutZoneDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutService = /** @class */ (function () {
    function FlyoutService() {
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * @return {?}
     */
    FlyoutService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.subject.next({
            close: true,
        });
    };
    FlyoutService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return FlyoutService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var FlyoutSize = {
    Auto: 'auto',
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Full: 'full',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutDirective = /** @class */ (function () {
    function FlyoutDirective(elementRef, flyoutService) {
        var _this = this;
        this.elementRef = elementRef;
        this.flyoutService = flyoutService;
        this.flyoutClass = true;
        this.class = '';
        this.size = FlyoutSize.Auto;
        this.toggleClick = true;
        this.activateOnFocus = false;
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flyoutOpened = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.element = this.elementRef.nativeElement;
        this.flyoutService.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(function (res) {
            _this.close();
        });
    }
    Object.defineProperty(FlyoutDirective.prototype, "flyoutAlignRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.align === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutMedium", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutFull", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'full';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.flyoutOpened;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next(true);
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.flyoutOpened) {
            this.flyoutOpened = true;
            this.opened.emit(undefined);
        }
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.flyoutOpened) {
            this.flyoutOpened = false;
            this.closed.emit(undefined);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    FlyoutDirective.prototype.isInClosableZone = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!this.flyoutZone) {
            return false;
        }
        return this.flyoutZone.contains(element);
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.flyoutOpened;
    };
    FlyoutDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiFlyout]',
                    exportAs: 'auiFlyout',
                },] },
    ];
    /** @nocollapse */
    FlyoutDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: FlyoutService, },
    ]; };
    FlyoutDirective.propDecorators = {
        "flyoutClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.m-flyout',] },],
        "flyoutAlignRight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.m-flyout--right',] },],
        "flyoutSmall": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.m-flyout--sm',] },],
        "flyoutMedium": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.m-flyout--md',] },],
        "flyoutLarge": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.m-flyout--lg',] },],
        "flyoutFull": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.m-flyout--full',] },],
        "flyoutOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.is-open',] },],
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "align": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "toggleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activateOnFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "closed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "flyoutZone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [FlyoutZoneDirective,] },],
    };
    return FlyoutDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutActionDirective = /** @class */ (function () {
    function FlyoutActionDirective(flyout, platformId, elementRef) {
        var _this = this;
        this.flyout = flyout;
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.class = true;
        /**
         * This property is needed for dropdown not to open and instantly closed
         * because the click event will be fired after the focus event so the click event will close the flyout
         */
        this.openedByFocus = false;
        // Define this method in the constructor so "this" points to "this class"
        this.closeDropdownOnOutsideClick = function (event) {
            _this.closeIfInClosableZone(event);
        };
    }
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isPlatformBrowser()) {
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.flyout.activateOnFocus && this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.flyout.isOpened() && this.flyout.toggleClick) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.openedByFocus = true;
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick.bind(this), true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (event.relatedTarget && !this.flyout.isInClosableZone(/** @type {?} */ (event.relatedTarget))
            && event.relatedTarget !== this.elementRef.nativeElement) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.flyout.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (!this.flyout.isOpened()) {
            return;
        }
        this.flyout.close();
        document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.checkIfInClosableZone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.flyout.isInClosableZone(/** @type {?} */ (event.target))
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.closeIfInClosableZone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.checkIfInClosableZone(event)) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.isPlatformBrowser = /**
     * @return {?}
     */
    function () {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId);
    };
    FlyoutActionDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiFlyoutAction]',
                    exportAs: 'auiFlyoutAction',
                },] },
    ];
    /** @nocollapse */
    FlyoutActionDirective.ctorParameters = function () { return [
        { type: FlyoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    FlyoutActionDirective.propDecorators = {
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.aui-flyout-action',] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
        "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] },],
        "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', ['$event'],] },],
    };
    return FlyoutActionDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutCloseDirective = /** @class */ (function () {
    function FlyoutCloseDirective(flyoutService) {
        this.flyoutService = flyoutService;
    }
    /**
     * @return {?}
     */
    FlyoutCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.flyoutService.close();
    };
    FlyoutCloseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiFlyoutClose]',
                    exportAs: 'auiFlyoutClose',
                },] },
    ];
    /** @nocollapse */
    FlyoutCloseDirective.ctorParameters = function () { return [
        { type: FlyoutService, },
    ]; };
    FlyoutCloseDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    };
    return FlyoutCloseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    FlyoutActionDirective,
    FlyoutCloseDirective,
    FlyoutZoneDirective,
    FlyoutDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Services = [
    FlyoutService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutModule = /** @class */ (function () {
    function FlyoutModule() {
    }
    FlyoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    ],
                    declarations: [
                        Directives,
                    ],
                    exports: [
                        Directives,
                    ],
                    providers: [
                        Services,
                    ],
                },] },
    ];
    return FlyoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var FlyoutButtonSize = {
    Auto: 'auto',
    Tiny: 'tiny',
    Small: 'small',
    Large: 'large',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutButtonComponent = /** @class */ (function () {
    function FlyoutButtonComponent() {
        this.buttonClassNames = {
            tiny: 'a-button--tiny',
            small: 'a-button--small',
            auto: '',
            large: 'a-button--large',
        };
        this.buttonSize = FlyoutButtonSize.Auto;
        this.outline = false;
        this.flyoutOpen = false;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    FlyoutButtonComponent.prototype.handleFlyoutChanged = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.flyoutOpen = open;
    };
    FlyoutButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-flyout-button',
                    template: "<div auiFlyout [align]=\"align\" [size]=\"flyoutSize\" (opened)=\"handleFlyoutChanged(true)\" (closed)=\"handleFlyoutChanged(false)\">\n    <button auiFlyoutAction title=\"{{ title }}\" [ngClass]=\"[buttonClassNames[buttonSize], (icon && label) ? 'has-icon-left' : '', (icon && !label) ? 'has-icon' : '', outline ? 'a-button-outline' : 'a-button']\">\n        <span class=\"{{ icon }}\"></span>\n        {{ label }}\n    </button>\n    <div auiFlyoutZone>\n        <ng-container *ngIf=\"flyoutOpen\">\n            <ng-content></ng-content>\n        </ng-container>\n    </div>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    FlyoutButtonComponent.propDecorators = {
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "icon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "align": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "buttonSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "flyoutSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outline": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return FlyoutButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    FlyoutButtonComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlyoutButtonModule = /** @class */ (function () {
    function FlyoutButtonModule() {
    }
    FlyoutButtonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        FlyoutModule,
                    ],
                    declarations: [
                        Components,
                    ],
                    exports: [
                        Components,
                    ],
                },] },
    ];
    return FlyoutButtonModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC16b25lLmRpcmVjdGl2ZS50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvc2VydmljZXMvZmx5b3V0LnNlcnZpY2UudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L3R5cGVzL2ZseW91dC50eXBlcy50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC1hY3Rpb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9kaXJlY3RpdmVzL2ZseW91dC1jbG9zZS5kaXJlY3RpdmUudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0L3NlcnZpY2VzL2luZGV4LnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC9mbHlvdXQubW9kdWxlLnRzIiwibmc6Ly9mbHlvdXQvbGliL2ZseW91dC1idXR0b24vdHlwZXMvZmx5b3V0LWJ1dHRvbi50eXBlcy50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQtYnV0dG9uL2NvbXBvbmVudHMvZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vZmx5b3V0L2xpYi9mbHlvdXQtYnV0dG9uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2ZseW91dC9saWIvZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0Wm9uZV0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dFpvbmUnLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRab25lRGlyZWN0aXZlIHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0X19jb250ZW50JykgY2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBhdWlGbHlvdXRab25lOiBib29sZWFuO1xuXG5cdHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblx0fVxuXG5cdHB1YmxpYyBjb250YWlucyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmF1aUZseW91dFpvbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5jb250YWlucyhlbGVtZW50KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbmltcG9ydCB7IEZseW91dFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvZmx5b3V0LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZseW91dFNlcnZpY2Uge1xuXHQvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXG5cdHB1YmxpYyBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rmx5b3V0U3RhdGU+KCk7XG5cblx0cHVibGljIGNsb3NlKCkge1xuXHRcdHRoaXMuc3ViamVjdC5uZXh0KHtcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59XG4iLCJleHBvcnQgZW51bSBGbHlvdXRTaXplIHtcblx0QXV0byA9ICdhdXRvJyxcblx0U21hbGwgPSAnc21hbGwnLFxuXHRNZWRpdW0gPSAnbWVkaXVtJyxcblx0TGFyZ2UgPSAnbGFyZ2UnLFxuXHRGdWxsID0gJ2Z1bGwnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZseW91dFN0YXRlIHtcblx0Y2xvc2U6IGJvb2xlYW47XG59XG4iLCJpbXBvcnQge1xuXHREaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsXG5cdENvbnRlbnRDaGlsZCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRIb3N0QmluZGluZyxcblx0T25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmx5b3V0Wm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LXpvbmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZseW91dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mbHlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBGbHlvdXRTaXplIH0gZnJvbSAnLi4vdHlwZXMvZmx5b3V0LnR5cGVzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0XScsXG5cdGV4cG9ydEFzOiAnYXVpRmx5b3V0Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dCcpIGZseW91dENsYXNzID0gdHJ1ZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tcmlnaHQnKSBnZXQgZmx5b3V0QWxpZ25SaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hbGlnbiA9PT0gJ3JpZ2h0Jztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1zbScpIGdldCBmbHlvdXRTbWFsbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnc21hbGwnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLW1kJykgZ2V0IGZseW91dE1lZGl1bSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnbWVkaXVtJztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1sZycpIGdldCBmbHlvdXRMYXJnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnbGFyZ2UnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLWZ1bGwnKSBnZXQgZmx5b3V0RnVsbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplID09PSAnZnVsbCc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1vcGVuJykgZ2V0IGZseW91dE9wZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmx5b3V0T3BlbmVkO1xuXHR9XG5cblx0QElucHV0KCkgcHVibGljIGNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBzaXplOiBGbHlvdXRTaXplID0gRmx5b3V0U2l6ZS5BdXRvO1xuXHRASW5wdXQoKSBwdWJsaWMgYWxpZ246IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHRvZ2dsZUNsaWNrID0gdHJ1ZTtcblx0QElucHV0KCkgcHVibGljIGFjdGl2YXRlT25Gb2N1cyA9IGZhbHNlO1xuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QENvbnRlbnRDaGlsZChGbHlvdXRab25lRGlyZWN0aXZlKSBwdWJsaWMgZmx5b3V0Wm9uZTogRmx5b3V0Wm9uZURpcmVjdGl2ZTtcblxuXHRwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRwcml2YXRlIGZseW91dE9wZW5lZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGZseW91dFNlcnZpY2U6IEZseW91dFNlcnZpY2UpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdHRoaXMuZmx5b3V0U2VydmljZS5zdWJqZWN0XG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcblx0XHRcdC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5mbHlvdXRPcGVuZWQpIHtcblx0XHRcdHRoaXMuZmx5b3V0T3BlbmVkID0gdHJ1ZTtcblx0XHRcdHRoaXMub3BlbmVkLmVtaXQodW5kZWZpbmVkKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0T3BlbmVkKSB7XG5cdFx0XHR0aGlzLmZseW91dE9wZW5lZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jbG9zZWQuZW1pdCh1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBpc0luQ2xvc2FibGVab25lKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmZseW91dFpvbmUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5mbHlvdXRab25lLmNvbnRhaW5zKGVsZW1lbnQpO1xuXHR9XG5cblx0cHVibGljIGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZseW91dE9wZW5lZDtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIEhvc3QsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZseW91dERpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LmRpcmVjdGl2ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dEFjdGlvbl0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dEFjdGlvbicsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dEFjdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktZmx5b3V0LWFjdGlvbicpIGNsYXNzID0gdHJ1ZTtcblxuXHQvKipcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIG5lZWRlZCBmb3IgZHJvcGRvd24gbm90IHRvIG9wZW4gYW5kIGluc3RhbnRseSBjbG9zZWRcbiAgICAgKiBiZWNhdXNlIHRoZSBjbGljayBldmVudCB3aWxsIGJlIGZpcmVkIGFmdGVyIHRoZSBmb2N1cyBldmVudCBzbyB0aGUgY2xpY2sgZXZlbnQgd2lsbCBjbG9zZSB0aGUgZmx5b3V0XG4gICAgICovXG5cdHByaXZhdGUgb3BlbmVkQnlGb2N1cyA9IGZhbHNlO1xuXHRwcml2YXRlIGNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBIb3N0KCkgcHVibGljIGZseW91dDogRmx5b3V0RGlyZWN0aXZlLFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHtcblx0XHQvLyBEZWZpbmUgdGhpcyBtZXRob2QgaW4gdGhlIGNvbnN0cnVjdG9yIHNvIFwidGhpc1wiIHBvaW50cyB0byBcInRoaXMgY2xhc3NcIlxuXHRcdHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0dGhpcy5jbG9zZUlmSW5DbG9zYWJsZVpvbmUoZXZlbnQpO1xuXHRcdH07XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycpXG5cdG9uQ2xpY2soKSB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0LmFjdGl2YXRlT25Gb2N1cyAmJiB0aGlzLm9wZW5lZEJ5Rm9jdXMpIHtcblx0XHRcdHRoaXMub3BlbmVkQnlGb2N1cyA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpICYmIHRoaXMuZmx5b3V0LnRvZ2dsZUNsaWNrKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcblx0b25Gb2N1cygpIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5vcGVuZWRCeUZvY3VzID0gdHJ1ZTtcblx0XHR0aGlzLmZseW91dC5vcGVuKCk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG5cdG9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgIXRoaXMuZmx5b3V0LmlzSW5DbG9zYWJsZVpvbmUoPEhUTUxFbGVtZW50PiBldmVudC5yZWxhdGVkVGFyZ2V0KVxuXHRcdFx0JiYgZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlKCkge1xuXHRcdGlmICh0aGlzLmZseW91dC5pc09wZW5lZCgpKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvcGVuKCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZseW91dC5vcGVuKCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljaywgdHJ1ZSk7XG5cdH1cblxuXHRwdWJsaWMgY2xvc2UoKSB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZseW91dC5jbG9zZSgpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lmSW5DbG9zYWJsZVpvbmUoZXZlbnQpIHtcblx0XHRyZXR1cm4gIXRoaXMuZmx5b3V0LmlzSW5DbG9zYWJsZVpvbmUoPEhUTUxFbGVtZW50PiBldmVudC50YXJnZXQpXG5cdFx0XHRcdCYmIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcblx0XHRcdFx0JiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdH1cblxuXHRwcml2YXRlIGNsb3NlSWZJbkNsb3NhYmxlWm9uZShldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmNoZWNrSWZJbkNsb3NhYmxlWm9uZShldmVudCkpIHtcblx0XHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzUGxhdGZvcm1Ccm93c2VyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmx5b3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZseW91dC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dENsb3NlXScsXG5cdGV4cG9ydEFzOiAnYXVpRmx5b3V0Q2xvc2UnLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRDbG9zZURpcmVjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmbHlvdXRTZXJ2aWNlOiBGbHlvdXRTZXJ2aWNlKSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcblx0cHVibGljIG9uQ2xpY2soKSB7XG5cdFx0dGhpcy5mbHlvdXRTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IEZseW91dEFjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LWFjdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmx5b3V0Q2xvc2VEaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC1jbG9zZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmx5b3V0Wm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LXpvbmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZseW91dERpcmVjdGl2ZSB9IGZyb20gJy4vZmx5b3V0LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRGbHlvdXRBY3Rpb25EaXJlY3RpdmUsXG5cdEZseW91dENsb3NlRGlyZWN0aXZlLFxuXHRGbHlvdXRab25lRGlyZWN0aXZlLFxuXHRGbHlvdXREaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgRmx5b3V0U2VydmljZSB9IGZyb20gJy4vZmx5b3V0LnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSBbXG5cdEZseW91dFNlcnZpY2UsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdERpcmVjdGl2ZXMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRNb2R1bGUge31cbiIsImV4cG9ydCBlbnVtIEZseW91dEJ1dHRvblNpemUge1xuXHRBdXRvID0gJ2F1dG8nLFxuXHRUaW55ID0gJ3RpbnknLFxuXHRTbWFsbCA9ICdzbWFsbCcsXG5cdExhcmdlID0gJ2xhcmdlJyxcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmx5b3V0QnV0dG9uU2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2ZseW91dC1idXR0b24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktZmx5b3V0LWJ1dHRvbicsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQgW2FsaWduXT1cImFsaWduXCIgW3NpemVdPVwiZmx5b3V0U2l6ZVwiIChvcGVuZWQpPVwiaGFuZGxlRmx5b3V0Q2hhbmdlZCh0cnVlKVwiIChjbG9zZWQpPVwiaGFuZGxlRmx5b3V0Q2hhbmdlZChmYWxzZSlcIj5cbiAgICA8YnV0dG9uIGF1aUZseW91dEFjdGlvbiB0aXRsZT1cInt7IHRpdGxlIH19XCIgW25nQ2xhc3NdPVwiW2J1dHRvbkNsYXNzTmFtZXNbYnV0dG9uU2l6ZV0sIChpY29uICYmIGxhYmVsKSA/ICdoYXMtaWNvbi1sZWZ0JyA6ICcnLCAoaWNvbiAmJiAhbGFiZWwpID8gJ2hhcy1pY29uJyA6ICcnLCBvdXRsaW5lID8gJ2EtYnV0dG9uLW91dGxpbmUnIDogJ2EtYnV0dG9uJ11cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBpY29uIH19XCI+PC9zcGFuPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgYXVpRmx5b3V0Wm9uZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZseW91dE9wZW5cIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dEJ1dHRvbkNvbXBvbmVudCB7XG5cdHB1YmxpYyBidXR0b25DbGFzc05hbWVzID0ge1xuXHRcdHRpbnk6ICdhLWJ1dHRvbi0tdGlueScsXG5cdFx0c21hbGw6ICdhLWJ1dHRvbi0tc21hbGwnLFxuXHRcdGF1dG86ICcnLFxuXHRcdGxhcmdlOiAnYS1idXR0b24tLWxhcmdlJyxcblx0fTtcblxuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGJ1dHRvblNpemU6IEZseW91dEJ1dHRvblNpemUgPSBGbHlvdXRCdXR0b25TaXplLkF1dG87XG5cdEBJbnB1dCgpIGZseW91dFNpemU6IHN0cmluZztcblx0QElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuXG5cdHB1YmxpYyBmbHlvdXRPcGVuID0gZmFsc2U7XG5cblx0cHVibGljIGhhbmRsZUZseW91dENoYW5nZWQob3BlbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZmx5b3V0T3BlbiA9IG9wZW47XG5cdH1cbn1cbiIsImltcG9ydCB7IEZseW91dEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZmx5b3V0LWJ1dHRvbi9mbHlvdXQtYnV0dG9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRGbHlvdXRCdXR0b25Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZseW91dE1vZHVsZSB9IGZyb20gJy4uL2ZseW91dC9mbHlvdXQubW9kdWxlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rmx5b3V0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0QnV0dG9uTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJTdWJqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFjQyw2QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtxQkFOTSxJQUFJO1FBT25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDN0M7Ozs7O0lBRU0sc0NBQVE7Ozs7Y0FBQyxPQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Z0JBckJ2QyxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFF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

/***/ }),

/***/ "./dist/layout/fesm2015/layout.js":
/*!****************************************!*\
  !*** ./dist/layout/fesm2015/layout.js ***!
  \****************************************/
/*! exports provided: CookieconsentModule, COOKIE_CONSENT_CONFIG, COOKIE_CONSENT_CONFIG_ROOT, DEFAULT_CONSENT_CONFIG, CookieconsentService, FooterModule, CopyrightComponent, FooterComponent, SubFooterComponent, FooterBottomDirective, FooterContentDirective, HeaderComponent, HeaderContentDirective, HeaderLogoDirective, HeaderMenuItemDirective, HeaderModule, HEADROOMOPTIONS, HeroModule, HeroComponent, HeroCardDirective, HeroCtaDirective, ModalModule, ModalAbstract, ModalService, ApproveModalComponent, ModalOverlayComponent, ApproveModalDirective, PaneModule, PaneComponent, SidebarComponent, SidebarItemComponent, SidebarModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵi, ɵj, ɵk, ɵh, ɵl, ɵm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieconsentModule", function() { return CookieconsentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COOKIE_CONSENT_CONFIG", function() { return COOKIE_CONSENT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COOKIE_CONSENT_CONFIG_ROOT", function() { return COOKIE_CONSENT_CONFIG_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONSENT_CONFIG", function() { return DEFAULT_CONSENT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieconsentService", function() { return CookieconsentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFooterComponent", function() { return SubFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBottomDirective", function() { return FooterBottomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContentDirective", function() { return FooterContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContentDirective", function() { return HeaderContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogoDirective", function() { return HeaderLogoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuItemDirective", function() { return HeaderMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADROOMOPTIONS", function() { return HEADROOMOPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroModule", function() { return HeroModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCardDirective", function() { return HeroCardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCtaDirective", function() { return HeroCtaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAbstract", function() { return ModalAbstract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveModalComponent", function() { return ApproveModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOverlayComponent", function() { return ModalOverlayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveModalDirective", function() { return ApproveModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaneModule", function() { return PaneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaneComponent", function() { return PaneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarItemComponent", function() { return SidebarItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return setConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return Directives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return Components$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return Directives$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Components$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return Directives$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return Components$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return EntryComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return Directives$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return Components$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return Components$5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/utils */ "./dist/utils/fesm5/utils.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var cookieconsent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookieconsent */ "./node_modules/cookieconsent/build/cookieconsent.min.js");
/* harmony import */ var cookieconsent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookieconsent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jsprds_headroom_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsprds/headroom.ts */ "./node_modules/@jsprds/headroom.ts/dist/headroom.esm.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DEFAULT_CONSENT_CONFIG = {
    autoInit: true,
    content: {
        message: 'We make use of cookies to ensure you get the best experience on our website.',
        dismiss: 'OK',
        link: 'Learn more',
        href: 'http://cookiepedia.co.uk/all-about-cookies',
    },
    cookie: {
        name: 'cookieconsent_status',
        path: '/',
        domain: '',
        expiryDays: 365,
    },
    elements: {
        messagelink: '<p id="cookieconsent:desc">{{message}} <a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a></p>',
        // tslint:disable-line:max-line-length
        dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>',
    },
};
const /** @type {?} */ COOKIE_CONSENT_CONFIG_ROOT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cookieConsentConfigRoot');
const /** @type {?} */ COOKIE_CONSENT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cookieConsentConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CookieconsentService {
    /**
     * @param {?} cookieConsentConfig
     * @param {?} $window
     */
    constructor(cookieConsentConfig, $window) {
        this.cookieConsentConfig = cookieConsentConfig;
        this.$window = $window;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    init(config = this.cookieConsentConfig) {
        if (!config || Object.keys(config).length === 0) {
            config = DEFAULT_CONSENT_CONFIG;
        }
        if (CookieconsentService.initialized) {
            return console.warn('Cookie consent is already initialized!');
        }
        if (!this.$window || (this.$window && !this.$window.cookieconsent)) {
            return console.warn('Cookie consent is not loaded!');
        }
        this.$window.cookieconsent.initialise(Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.cookieConsentConfig, config));
    }
}
CookieconsentService.initialized = false;
CookieconsentService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
CookieconsentService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COOKIE_CONSENT_CONFIG,] },] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"],] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} cookieConsentConfig
 * @return {?}
 */
function setConfig(cookieConsentConfig) {
    return Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["merge"])(DEFAULT_CONSENT_CONFIG, cookieConsentConfig);
}
const ɵ0 = DEFAULT_CONSENT_CONFIG;
class CookieconsentModule {
    /**
     * @param {?=} config
     * @param {?=} cookieconsentService
     */
    constructor(config = DEFAULT_CONSENT_CONFIG, cookieconsentService) {
        this.cookieconsentService = cookieconsentService;
        if (config.autoInit) {
            this.cookieconsentService.init();
        }
    }
    /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    static forRoot(cookieConsentConfig) {
        return {
            ngModule: CookieconsentModule,
            providers: [
                { provide: COOKIE_CONSENT_CONFIG_ROOT, useValue: cookieConsentConfig },
                // Merge the forRoot config with our default config (AOT proof)
                {
                    provide: COOKIE_CONSENT_CONFIG,
                    useFactory: setConfig,
                    deps: [COOKIE_CONSENT_CONFIG_ROOT],
                },
                CookieconsentService,
            ],
        };
    }
}
CookieconsentModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__["WindowModule"],
                ],
                providers: [
                    CookieconsentService,
                    { provide: COOKIE_CONSENT_CONFIG, useValue: ɵ0 },
                ],
            },] },
];
/** @nocollapse */
CookieconsentModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COOKIE_CONSENT_CONFIG,] },] },
    { type: CookieconsentService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CopyrightComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
}
CopyrightComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-copyright',
                template: `<span>&copy; {{ currentYear }} {{ domain }}</span>
`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
CopyrightComponent.propDecorators = {
    "domain": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooterContentDirective {
}
FooterContentDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[auiFooterContent]',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooterComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.isExtended = false;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        const /** @type {?} */ hasCols = this.footerContent !== undefined;
        const /** @type {?} */ shouldUpdate = hasCols !== this.isExtended;
        if (shouldUpdate) {
            this.isExtended = hasCols;
            this.ref.markForCheck();
        }
    }
}
FooterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-footer',
                template: `<footer class="aui-footer" [ngClass]="{'extended': isExtended}">
    <ng-content select="[auiFooterContent]"></ng-content>
    <ng-content select="[auiFooterBottom]"></ng-content>
</footer>
`,
                styles: [`:host{display:block}`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
];
FooterComponent.propDecorators = {
    "footerContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [FooterContentDirective,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SubFooterComponent {
    constructor() {
        this.goToTop = () => {
            window.scrollTo(0, 0);
        };
    }
}
SubFooterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-subfooter',
                template: `<div class="o-footer">
    <div class="o-footer__label">
        <ng-content></ng-content>
    </div>

    <button class="o-footer__button a-button a-button--secondary has-icon" (click)="goToTop()">
        <span class="fa fa-arrow-up"></span>
    </button>
</div>
`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    CopyrightComponent,
    FooterComponent,
    SubFooterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooterBottomDirective {
}
FooterBottomDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[auiFooterBottom]',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Directives = [
    FooterBottomDirective,
    FooterContentDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooterModule {
}
FooterModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ],
                declarations: [
                    ...Components,
                    ...Directives,
                ],
                exports: [
                    ...Components,
                    ...Directives,
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
class HeaderLogoDirective {
}
HeaderLogoDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[auiHeaderLogo]',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeaderContentDirective {
    constructor() {
        this.styleDisplay = 'block';
        this.styleHeight = '100%';
    }
}
HeaderContentDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[auiHeaderContent]',
            },] },
];
/** @nocollapse */
HeaderContentDirective.propDecorators = {
    "styleDisplay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] },],
    "styleHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeaderComponent {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} ref
     */
    constructor(platformId, elementRef, ref) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.ref = ref;
        this.hasLogo = false;
        this.hasContent = false;
    }
    /**
     * @return {?}
     */
    setupHeadroom() {
        // @todo: use headroom options from injector
        const /** @type {?} */ element = this.elementRef.nativeElement.querySelector('.aui-header');
        const /** @type {?} */ head = new _jsprds_headroom_ts__WEBPACK_IMPORTED_MODULE_5__["Headroom"](element);
        return head;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.setupHeadroom();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        const /** @type {?} */ hasLogo = this.logo !== undefined;
        const /** @type {?} */ hasContent = this.content !== undefined;
        const /** @type {?} */ shouldUpdate = hasLogo !== this.hasLogo || hasContent !== this.hasContent;
        if (shouldUpdate) {
            this.hasLogo = hasLogo;
            this.hasContent = hasContent;
            this.ref.markForCheck();
        }
    }
}
HeaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-header',
                template: `<header class="o-header o-header--fixed aui-header" [ngClass]="{'has-logo': hasLogo}">
    <ng-content select="[auiHeaderLogo]"></ng-content>

    <div class="aui-header__content-wrapper">
        <div class="aui-header__content">
            <ng-content select="[auiHeaderContent]"></ng-content>
        </div>

        <div class="aui-header__menu-items">
            <ng-content select="[auiHeaderMenuItem]"></ng-content>
        </div>
    </div>
</header>
`,
                styles: [`:host{display:block}.aui-header{transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;will-change:transform}.aui-header.header--pinned{top:0}.aui-header.header--unpinned{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.aui-header.has-logo.header--unpinned{-webkit-transform:translateY(-300%);transform:translateY(-300%)}.aui-header .aui-header__content-wrapper{display:flex;flex-wrap:wrap;justify-content:flex-end;height:100%}.aui-header .aui-header__content{flex:1;height:100%}.aui-header .aui-header__menu-items{display:flex;justify-content:flex-end}`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
];
HeaderComponent.propDecorators = {
    "logo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeaderLogoDirective,] },],
    "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeaderContentDirective,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeaderMenuItemDirective {
}
HeaderMenuItemDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[auiHeaderMenuItem]',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$1 = [
    HeaderComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Directives$1 = [
    HeaderContentDirective,
    HeaderLogoDirective,
    HeaderMenuItemDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeaderModule {
}
HeaderModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ],
                declarations: [
                    ...Components$1,
                    ...Directives$1,
                ],
                exports: [
                    ...Components$1,
                    ...Directives$1,
                ],
            },] },
];
// @todo: add forroot with headroom options

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ HEADROOMOPTIONS = {
    offset: 200,
    tolerance: 5,
    classes: {
        initial: '',
        pinned: 'header--pinned',
        unpinned: 'header--unpinned',
        top: 'header--top',
        notTop: 'header--not-top',
        bottom: 'header--bottom',
        botBottom: 'header--not-bottom',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeroCtaDirective {
    constructor() {
        this.class = 'aui-hero-cta';
    }
}
HeroCtaDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[auiHeroCta]',
            },] },
];
/** @nocollapse */
HeroCtaDirective.propDecorators = {
    "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeroComponent {
}
HeroComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-hero',
                template: `<div class="inner" [ngClass]="{'has-cta': hasCta}">
	<ng-content select="[auiHeroCard]"></ng-content>
	<ng-content select="[auiHeroCta]"></ng-content>
</div>
`,
                styles: [`:host{background:#f3f3f3;border-bottom:1px solid #b0b0b0;min-height:12rem;padding-top:4.5rem}@media screen and (min-width:45rem){:host{padding-top:1.5rem}}:host .buttons{justify-content:center;align-self:center;width:100%}:host .tabs{align-self:flex-end;width:100%;padding-bottom:1.5rem}:host .tabs .tabs-list{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}:host .tabs .tabs-list .tabs-list-item{list-style:none;margin-bottom:-1px;padding:0}@media screen and (min-width:30rem){:host .tabs .tabs-list{flex-direction:row}:host .tabs .tabs-list .tabs-list-item{margin-right:-1px}}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn{background:#f3f3f3;border:1px solid #b0b0b0;color:#081f2c;display:block;padding:.375rem 1.5rem;text-align:center;text-decoration:none;transition:background-color .2s ease-out,padding .2s ease-out}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:active:not(.active),:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:hover:not(.active),:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:visited:not(.active){text-decoration:underline}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn.active{background:#fff;font-weight:700}@media screen and (min-width:62rem){:host{padding-top:6rem;display:flex}:host .tabs .tabs-list .tabs-list-item{align-self:flex-end}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn.active{padding:.75rem 1.5rem}:host .inner{margin:0;padding:0;max-width:100%;flex:1;align-self:flex-end}:host .inner.has-cta ::ng-deep .aui-hero-card::after,:host .inner.has-cta ::ng-deep .aui-hero-card::before{content:"";position:absolute;bottom:-12px;border-top:13px solid rgba(0,0,0,.2)}:host .inner.has-cta ::ng-deep .aui-hero-card::before{border-left:6px solid transparent;left:-.375rem}:host .inner.has-cta ::ng-deep .aui-hero-card::after{border-right:6px solid transparent;right:-.375rem}:host .tabs{padding-bottom:0;justify-content:center}:host .tabs .tabs-list{justify-content:center}:host ::ng-deep .aui-hero-inner{padding:1.5rem}:host ::ng-deep .aui-hero-card,:host ::ng-deep .aui-hero-wrapper{display:block;margin:0 auto;width:100%;max-width:36rem}:host ::ng-deep .aui-hero-card{background-color:#fff;position:relative;text-align:center;padding:1.5rem 1.5rem .75rem}:host ::ng-deep .aui-hero-cta{background-color:#fff;width:100%;text-align:center;min-height:6rem;display:flex;justify-content:center;padding:0}}`],
            },] },
];
/** @nocollapse */
HeroComponent.propDecorators = {
    "hasCta": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeroCtaDirective,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$2 = [
    HeroComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeroCardDirective {
    constructor() {
        this.class = 'aui-hero-card';
    }
}
HeroCardDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[auiHeroCard]',
            },] },
];
/** @nocollapse */
HeroCardDirective.propDecorators = {
    "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Directives$2 = [
    HeroCardDirective,
    HeroCtaDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HeroModule {
}
HeroModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ],
                declarations: [
                    ...Components$2,
                    ...Directives$2,
                ],
                exports: [
                    ...Components$2,
                    ...Directives$2,
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
 * @abstract
 */
class ModalAbstract {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
        this.ref = null;
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.modalService.closeModal(this.ref);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalOverlayComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.theme = 'dark';
    }
    /**
     * @return {?}
     */
    get overlayClass() {
        return `m-overlay m-overlay--${this.theme} is-active`;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickHandler(e) {
        const /** @type {?} */ modal = this.ref.nativeElement.querySelector('.m-modal');
        if (modal && (e.target === modal || modal.contains(e.target))) {
            return;
        }
        this.modal.instance.closeModal();
    }
}
ModalOverlayComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-modal-overlay',
                template: `
        <div class="m-overlay__inner">
            <ng-content></ng-content>
        </div>
    `,
            },] },
];
/** @nocollapse */
ModalOverlayComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
];
ModalOverlayComponent.propDecorators = {
    "overlayClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] },],
    "clickHandler": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalService {
    /**
     * @param {?} injector
     * @param {?} resolver
     * @param {?} appRef
     */
    constructor(injector, resolver, appRef) {
        this.injector = injector;
        this.resolver = resolver;
        this.appRef = appRef;
        this.activeModals = [];
    }
    /**
     * @param {?} template
     * @param {?=} modalData
     * @param {?=} actions
     * @param {?=} options
     * @return {?}
     */
    openModal(template, modalData, actions, options = {}) {
        const /** @type {?} */ modal = this.createRef(template);
        modal.instance.ref = modal;
        modal.instance.modalData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(modalData);
        modal.instance.modalActions = actions;
        const /** @type {?} */ overlay = this.createRef(ModalOverlayComponent, [
            [modal.location.nativeElement],
        ]);
        overlay.instance.modal = modal;
        overlay.instance.theme = options.theme || 'dark';
        this.activeModals.push({
            modal: modal,
            overlay: overlay,
        });
        this.appendRefs(overlay);
        return modal;
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    closeModal(modal) {
        const /** @type {?} */ activeModalIndex = this.activeModals.findIndex((instance) => instance.modal === modal);
        if (activeModalIndex < 0) {
            return;
        }
        const /** @type {?} */ activeModal = this.activeModals[activeModalIndex];
        activeModal.modal.destroy();
        activeModal.overlay.destroy();
        this.activeModals.splice(activeModalIndex, 1);
    }
    /**
     * @return {?}
     */
    closeLast() {
        const /** @type {?} */ lastModal = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["last"])(this.activeModals);
        if (lastModal) {
            this.closeModal(lastModal.modal);
        }
    }
    /**
     * @param {?} template
     * @param {?=} projectableNodes
     * @return {?}
     */
    createRef(template, projectableNodes) {
        const /** @type {?} */ compFactory = this.resolver.resolveComponentFactory(template);
        const /** @type {?} */ ref = compFactory.create(this.injector, projectableNodes);
        this.appRef.attachView(ref.hostView);
        ref.onDestroy(() => this.appRef.detachView(ref.hostView));
        return ref;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    appendRefs(...args) {
        const /** @type {?} */ appRef = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"])(this.appRef, 'components[0].location.nativeElement', null);
        if (!appRef) {
            return;
        }
        args.forEach((ref) => {
            appRef.appendChild(ref.location.nativeElement);
        });
    }
}
ModalService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ApproveModalComponent extends ModalAbstract {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        super(modalService);
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.modalData = this.modalData || {
            question: 'Question?',
            description: 'Description...',
            approve: 'Ok',
            reject: 'Cancel',
        };
    }
    /**
     * @return {?}
     */
    submit() {
        this.verifyAction('approve').then(() => this.closeModal());
    }
    /**
     * @return {?}
     */
    close() {
        this.verifyAction('reject').then(() => this.closeModal());
    }
    /**
     * @param {?} action
     * @return {?}
     */
    verifyAction(action) {
        if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"])(this.modalActions, action)) {
            return this.modalActions[action]();
        }
        return Promise.resolve();
    }
}
ApproveModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-approve-modal',
                template: `<div class="m-modal">
    <div class="m-modal__content">
        <div class="m-modal__header u-margin-bottom-xs">
            <button (click)="close()" class="m-modal__close a-button-transparent a-button--default has-icon"><i class="fa fa-close"></i></button>
            <h6>{{ modalData.question }}</h6>
        </div>
        <div class="u-margin-bottom">
            <p>{{ modalData.description }}</p>
        </div>
        <div class="m-modal__footer">
            <button (click)="close()" class="a-button a-button">{{ modalData.reject }}</button>
            <button (click)="submit()" class="a-button-outline">{{ modalData.approve }}</button>
        </div>
    </div>
</div>
`,
            },] },
];
/** @nocollapse */
ApproveModalComponent.ctorParameters = () => [
    { type: ModalService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$3 = [
    ApproveModalComponent,
    ModalOverlayComponent,
];
const /** @type {?} */ EntryComponents = [
    ApproveModalComponent,
    ModalOverlayComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ApproveModalDirective {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
        this.approve = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    onClick() {
        this.modalService.openModal(ApproveModalComponent, {
            question: this.question,
            description: this.description,
            approve: this.submitMessage,
            reject: this.cancelMessage,
        }, {
            approve: () => {
                this.approve.emit();
                return Promise.resolve();
            },
            reject: () => {
                this.cancel.emit();
                return Promise.resolve();
            },
        });
    }
}
ApproveModalDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[auiApprove]',
            },] },
];
/** @nocollapse */
ApproveModalDirective.ctorParameters = () => [
    { type: ModalService, },
];
ApproveModalDirective.propDecorators = {
    "question": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "description": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "submitMessage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "cancelMessage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "approve": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Directives$3 = [
    ApproveModalDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Services = [
    ModalService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalModule {
}
ModalModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    ...Services,
                ],
                declarations: [
                    ...Components$3,
                    ...Directives$3,
                ],
                exports: [
                    ...Components$3,
                    ...Directives$3,
                ],
                entryComponents: [
                    ...EntryComponents,
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
class PaneComponent {
    constructor() {
        this.opened = false;
        this.side = 'left';
        this.backdrop = true;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    togglePane() {
        (this.opened ? this.closePane() : this.openPane());
    }
    /**
     * @return {?}
     */
    openPane() {
        this.opened = true;
        this.open.emit();
    }
    /**
     * @return {?}
     */
    closePane() {
        this.opened = false;
        this.close.emit();
    }
}
PaneComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-pane',
                template: `<div class="m-pane aui-pane" [ngClass]="{ 'm-pane--open': opened, 'm-pane--left': side === 'left', 'm-pane--right': side === 'right' }">
	<ng-content></ng-content>
</div>
<div class="m-overlay m-overlay__pane is-active" *ngIf="opened && backdrop" (click)="closePane()"></div>
`,
                styles: [`.m-pane{background-color:#fff;width:22.5rem;height:100%;z-index:100}.m-pane__content{height:100%;overflow-y:scroll}.m-pane--left{position:absolute;left:-22.5rem;transition:left .3s cubic-bezier(.4,0,.2,1)}.m-pane--left.m-pane--open{left:0}.m-pane--right{position:absolute;right:-22.5rem;transition:right .3s cubic-bezier(.4,0,.2,1)}.m-pane--right.m-pane--open{right:0}`],
            },] },
];
/** @nocollapse */
PaneComponent.propDecorators = {
    "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "side": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$4 = [
    PaneComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PaneModule {
}
PaneModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
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
class SidebarComponent {
    constructor() {
        this.closeOnSelected = true;
        this.title = 'Onderweg';
        this.open = false;
        this.items = [];
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?=} open
     * @return {?}
     */
    toggle(open = !this.open) {
        this.open = open;
        if (open) {
            this.opened.emit();
        }
        else {
            this.closed.emit();
        }
    }
    /**
     * @return {?}
     */
    itemClicked() {
        if (this.closeOnSelected) {
            this.toggle(false);
        }
    }
}
SidebarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-sidebar',
                template: `<div class="o-sidebar {{ open ? 'o-sidebar--open' : '' }}">
	<div class="o-sidebar__header">
		<button class="a-button a-button-transparent has-icon" (click)="toggle(false)">
			<i class="icon-close"></i>
		</button>
		<h1 class="h6">{{ title | uppercase }}</h1>
	</div>
	<div class="o-sidebar__items">
		<aui-sidebar-item *ngFor="let item of items" [item]="item" (click)="itemClicked()"></aui-sidebar-item>
	</div>
	<ng-content select=".o-sidebar__footer"></ng-content>
</div>

<div class="m-overlay"
	*ngIf="open"
	(click)="toggle(false)">
</div>
`,
                styles: [`.m-sidebar{height:100%;overflow:hidden;width:0;background-color:#fff;transition:width .3s cubic-bezier(.4,0,.2,1)}.m-sidebar--open{width:22.5rem}.m-sidebar__content{overflow-x:hidden;overflow-y:auto;width:22.5rem;height:100%}.m-sidebar__content--padding{padding:3rem}`],
            },] },
];
/** @nocollapse */
SidebarComponent.propDecorators = {
    "closeOnSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "closed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SidebarItemComponent {
    /**
     * @return {?}
     */
    get itemClassList() {
        return `o-sidebar__item ${Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"])(this.item, 'classList', '')}`;
    }
}
SidebarItemComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-sidebar-item',
                template: `<ng-container *ngIf="item.href">
	<a href="{{item.href}}" [style.border-color]="item.theme?.color">
		<img *ngIf="item.icon" src="{{item.icon}}" />
		<h2 class="h5">{{item.label}}</h2>
	</a>
</ng-container>
<ng-container *ngIf="item.routerLink">
	<a [routerLink]="item.routerLink" [style.border-color]="item.theme?.color">
		<img *ngIf="item.icon" src="{{item.icon}}" />
		<h2 class="h5">{{item.label}}</h2>
	</a>
</ng-container>

<ng-container *ngFor="let itm of item.items">
	<aui-sidebar-item [item]="itm"></aui-sidebar-item>
</ng-container>
`,
            },] },
];
/** @nocollapse */
SidebarItemComponent.propDecorators = {
    "itemClassList": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] },],
    "item": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$5 = [
    SidebarComponent,
    SidebarItemComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SidebarModule {
}
SidebarModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                ],
                declarations: [
                    Components$5,
                ],
                exports: [
                    Components$5,
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sYXlvdXQvbGliL2Nvb2tpZS1jb25zZW50L2Nvb2tpZS1jb25zZW50LmNvbmYudHMiLCJuZzovL2xheW91dC9saWIvY29va2llLWNvbnNlbnQvc2VydmljZXMvY29va2llLWNvbnNlbnQuc2VydmljZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9jb29raWUtY29uc2VudC9jb29raWUtY29uc2VudC5tb2R1bGUudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvc3ViZm9vdGVyL3N1YmZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2RpcmVjdGl2ZXMvYm90dG9tLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9mb290ZXIvZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9mb290ZXIvZm9vdGVyLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9sb2dvLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9kaXJlY3RpdmVzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9oZWFkZXIuY29uZi50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaGVyby1jdGEuZGlyZWN0aXZlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlcm8vY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlcm8vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaGVyby1jYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvaGVyby9oZXJvLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9jbGFzc2VzL21vZGFsLmFic3RyYWN0LnRzIiwibmc6Ly9sYXlvdXQvbGliL21vZGFsL2NvbXBvbmVudHMvbW9kYWwtb3ZlcmxheS9tb2RhbC1vdmVybGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9sYXlvdXQvbGliL21vZGFsL2NvbXBvbmVudHMvYXBwcm92ZS1tb2RhbC9hcHByb3ZlLW1vZGFsLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL21vZGFsL2RpcmVjdGl2ZXMvYXBwcm92ZS5kaXJlY3RpdmUudHMiLCJuZzovL2xheW91dC9saWIvbW9kYWwvZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9zZXJ2aWNlcy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9tb2RhbC5tb2R1bGUudHMiLCJuZzovL2xheW91dC9saWIvcGFuZS9jb21wb25lbnRzL3BhbmUvcGFuZS5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvcGFuZS9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL3BhbmUvcGFuZS5tb2R1bGUudHMiLCJuZzovL2xheW91dC9saWIvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXItaXRlbS9zaWRlYmFyLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9sYXlvdXQvbGliL3NpZGViYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9zaWRlYmFyL3NpZGViYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29raWVDb25zZW50Q29uZmlnIH0gZnJvbSAnLi90eXBlcy9jb29raWUtY29uc2VudC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTlNFTlRfQ09ORklHOiBDb29raWVDb25zZW50Q29uZmlnID0ge1xuXHRhdXRvSW5pdDogdHJ1ZSxcblx0Y29udGVudDoge1xuXHRcdG1lc3NhZ2U6ICdXZSBtYWtlIHVzZSBvZiBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcblx0XHRkaXNtaXNzOiAnT0snLFxuXHRcdGxpbms6ICdMZWFybiBtb3JlJyxcblx0XHRocmVmOiAnaHR0cDovL2Nvb2tpZXBlZGlhLmNvLnVrL2FsbC1hYm91dC1jb29raWVzJyxcblx0fSxcblx0Y29va2llOiB7XG5cdFx0bmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcblx0XHRwYXRoOiAnLycsXG5cdFx0ZG9tYWluOiAnJyxcblx0XHRleHBpcnlEYXlzOiAzNjUsXG5cdH0sXG5cdGVsZW1lbnRzOiB7XG5cdFx0bWVzc2FnZWxpbms6ICc8cCBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiB0YWJpbmRleD1cIjBcIiBocmVmPVwie3tocmVmfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e2xpbmt9fTwvYT48L3A+JywgLy8gdHNsaW50OmRpc2FibGUtbGluZTptYXgtbGluZS1sZW5ndGhcblx0XHRkaXNtaXNzOiAnPGJ1dHRvbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYS1idXR0b24gY2MtYnRuIGNjLWRpc21pc3NcIj57e2Rpc21pc3N9fTwvYnV0dG9uPicsXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgQ09PS0lFX0NPTlNFTlRfQ09ORklHX1JPT1QgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29va2llQ29uc2VudENvbmZpZz4oJ2Nvb2tpZUNvbnNlbnRDb25maWdSb290Jyk7XG5leHBvcnQgY29uc3QgQ09PS0lFX0NPTlNFTlRfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvb2tpZUNvbnNlbnRDb25maWc+KCdjb29raWVDb25zZW50Q29uZmlnJyk7XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBDT09LSUVfQ09OU0VOVF9DT05GSUcsIERFRkFVTFRfQ09OU0VOVF9DT05GSUcgfSBmcm9tICcuLi9jb29raWUtY29uc2VudC5jb25mJztcbmltcG9ydCB7IENvb2tpZUNvbnNlbnRDb25maWcgfSBmcm9tICcuLi90eXBlcy9jb29raWUtY29uc2VudC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb29raWVjb25zZW50U2VydmljZSB7XG5cdHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVkOiBCb29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT09LSUVfQ09OU0VOVF9DT05GSUcpIHByaXZhdGUgY29va2llQ29uc2VudENvbmZpZyxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSAkd2luZG93XG5cdCkge31cblxuXHRpbml0KGNvbmZpZzogQ29va2llQ29uc2VudENvbmZpZyA9IHRoaXMuY29va2llQ29uc2VudENvbmZpZyk6IHZvaWQge1xuXHRcdGlmICghY29uZmlnIHx8IE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRjb25maWcgPSBERUZBVUxUX0NPTlNFTlRfQ09ORklHO1xuXHRcdH1cblxuXHRcdGlmIChDb29raWVjb25zZW50U2VydmljZS5pbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuIGNvbnNvbGUud2FybignQ29va2llIGNvbnNlbnQgaXMgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuJHdpbmRvdyB8fCAodGhpcy4kd2luZG93ICYmICF0aGlzLiR3aW5kb3cuY29va2llY29uc2VudCkpIHtcblx0XHRcdHJldHVybiBjb25zb2xlLndhcm4oJ0Nvb2tpZSBjb25zZW50IGlzIG5vdCBsb2FkZWQhJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kd2luZG93LmNvb2tpZWNvbnNlbnQuaW5pdGlhbGlzZShtZXJnZSh0aGlzLmNvb2tpZUNvbnNlbnRDb25maWcsIGNvbmZpZykpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV2luZG93TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgJ2Nvb2tpZWNvbnNlbnQnO1xuXG5pbXBvcnQgeyBDb29raWVjb25zZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29va2llLWNvbnNlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDT09LSUVfQ09OU0VOVF9DT05GSUdfUk9PVCwgQ09PS0lFX0NPTlNFTlRfQ09ORklHLCBERUZBVUxUX0NPTlNFTlRfQ09ORklHIH0gZnJvbSAnLi9jb29raWUtY29uc2VudC5jb25mJztcbmltcG9ydCB7IENvb2tpZUNvbnNlbnRDb25maWcgfSBmcm9tICcuL3R5cGVzL2Nvb2tpZS1jb25zZW50LnR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbmZpZyhjb29raWVDb25zZW50Q29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnKTogQ29va2llQ29uc2VudENvbmZpZyB7XG5cdHJldHVybiBtZXJnZShERUZBVUxUX0NPTlNFTlRfQ09ORklHLCBjb29raWVDb25zZW50Q29uZmlnKTtcbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRXaW5kb3dNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdENvb2tpZWNvbnNlbnRTZXJ2aWNlLFxuXHRcdHsgcHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHLCB1c2VWYWx1ZTogREVGQVVMVF9DT05TRU5UX0NPTkZJRyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb29raWVjb25zZW50TW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoY29va2llQ29uc2VudENvbmZpZzogQ29va2llQ29uc2VudENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogQ29va2llY29uc2VudE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IENPT0tJRV9DT05TRU5UX0NPTkZJR19ST09ULCB1c2VWYWx1ZTogY29va2llQ29uc2VudENvbmZpZyB9LFxuXG5cdFx0XHRcdC8vIE1lcmdlIHRoZSBmb3JSb290IGNvbmZpZyB3aXRoIG91ciBkZWZhdWx0IGNvbmZpZyAoQU9UIHByb29mKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHLFxuXHRcdFx0XHRcdHVzZUZhY3Rvcnk6IHNldENvbmZpZyxcblx0XHRcdFx0XHRkZXBzOiBbQ09PS0lFX0NPTlNFTlRfQ09ORklHX1JPT1RdLFxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdENvb2tpZWNvbnNlbnRTZXJ2aWNlLFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT09LSUVfQ09OU0VOVF9DT05GSUcpIGNvbmZpZzogQ29va2llQ29uc2VudENvbmZpZyA9IERFRkFVTFRfQ09OU0VOVF9DT05GSUcsXG5cdFx0cHJpdmF0ZSBjb29raWVjb25zZW50U2VydmljZTogQ29va2llY29uc2VudFNlcnZpY2Vcblx0KSB7XG5cdFx0aWYgKGNvbmZpZy5hdXRvSW5pdCkge1xuXHRcdFx0dGhpcy5jb29raWVjb25zZW50U2VydmljZS5pbml0KCk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY29weXJpZ2h0Jyxcblx0dGVtcGxhdGU6IGA8c3Bhbj4mY29weTsge3sgY3VycmVudFllYXIgfX0ge3sgZG9tYWluIH19PC9zcGFuPlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvcHlyaWdodENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGRvbWFpbj86IFN0cmluZztcblxuXHRwdWJsaWMgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZvb3RlckNvbnRlbnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29udGVudERpcmVjdGl2ZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRDaGVja2VkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb290ZXJDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1mb290ZXInLFxuXHR0ZW1wbGF0ZTogYDxmb290ZXIgY2xhc3M9XCJhdWktZm9vdGVyXCIgW25nQ2xhc3NdPVwieydleHRlbmRlZCc6IGlzRXh0ZW5kZWR9XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUZvb3RlckNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlGb290ZXJCb3R0b21dXCI+PC9uZy1jb250ZW50PlxuPC9mb290ZXI+XG5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRAQ29udGVudENoaWxkKEZvb3RlckNvbnRlbnREaXJlY3RpdmUpIGZvb3RlckNvbnRlbnQ6IEZvb3RlckNvbnRlbnREaXJlY3RpdmU7XG5cdHB1YmxpYyBpc0V4dGVuZGVkOiBCb29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblx0XHRjb25zdCBoYXNDb2xzID0gdGhpcy5mb290ZXJDb250ZW50ICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3Qgc2hvdWxkVXBkYXRlID0gaGFzQ29scyAhPT0gdGhpcy5pc0V4dGVuZGVkO1xuXG5cdFx0aWYgKHNob3VsZFVwZGF0ZSkge1xuXHRcdFx0dGhpcy5pc0V4dGVuZGVkID0gaGFzQ29scztcblx0XHRcdHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXN1YmZvb3RlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm8tZm9vdGVyX19sYWJlbFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiby1mb290ZXJfX2J1dHRvbiBhLWJ1dHRvbiBhLWJ1dHRvbi0tc2Vjb25kYXJ5IGhhcy1pY29uXCIgKGNsaWNrKT1cImdvVG9Ub3AoKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LXVwXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3ViRm9vdGVyQ29tcG9uZW50IHtcblx0cHVibGljIGdvVG9Ub3AgPSAoKSA9PiB7XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb3B5cmlnaHRDb21wb25lbnQgfSBmcm9tICcuL2NvcHlyaWdodC9jb3B5cmlnaHQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJmb290ZXIvc3ViZm9vdGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRDb3B5cmlnaHRDb21wb25lbnQsXG5cdEZvb3RlckNvbXBvbmVudCxcblx0U3ViRm9vdGVyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRm9vdGVyQm90dG9tXScsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckJvdHRvbURpcmVjdGl2ZSB7fVxuIiwiaW1wb3J0IHsgRm9vdGVyQm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9ib3R0b20uZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvb3RlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRlbnQuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IERpcmVjdGl2ZXMgPSBbXG5cdEZvb3RlckJvdHRvbURpcmVjdGl2ZSxcblx0Rm9vdGVyQ29udGVudERpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJNb2R1bGUge1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thdWlIZWFkZXJMb2dvXScsXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckxvZ29EaXJlY3RpdmUge31cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1aUhlYWRlckNvbnRlbnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29udGVudERpcmVjdGl2ZSB7XG5cdEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIHB1YmxpYyBzdHlsZURpc3BsYXkgPSAnYmxvY2snO1xuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIHB1YmxpYyBzdHlsZUhlaWdodCA9ICcxMDAlJztcbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T25Jbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29udGVudENoaWxkLFxuXHRBZnRlckNvbnRlbnRDaGVja2VkLFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0SW5qZWN0LFxuXHRQTEFURk9STV9JRCxcblx0RWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEhlYWRyb29tIH0gZnJvbSAnQGpzcHJkcy9oZWFkcm9vbS50cyc7XG5cbmltcG9ydCB7IEhlYWRlckxvZ29EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2xvZ28uZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbnRlbnQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWhlYWRlcicsXG5cdHRlbXBsYXRlOiBgPGhlYWRlciBjbGFzcz1cIm8taGVhZGVyIG8taGVhZGVyLS1maXhlZCBhdWktaGVhZGVyXCIgW25nQ2xhc3NdPVwieydoYXMtbG9nbyc6IGhhc0xvZ299XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlckxvZ29dXCI+PC9uZy1jb250ZW50PlxuXG4gICAgPGRpdiBjbGFzcz1cImF1aS1oZWFkZXJfX2NvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlckNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fbWVudS1pdGVtc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlck1lbnVJdGVtXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2hlYWRlcj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5hdWktaGVhZGVye3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LmF1aS1oZWFkZXIuaGVhZGVyLS1waW5uZWR7dG9wOjB9LmF1aS1oZWFkZXIuaGVhZGVyLS11bnBpbm5lZHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9LmF1aS1oZWFkZXIuaGFzLWxvZ28uaGVhZGVyLS11bnBpbm5lZHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzAwJSl9LmF1aS1oZWFkZXIgLmF1aS1oZWFkZXJfX2NvbnRlbnQtd3JhcHBlcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2hlaWdodDoxMDAlfS5hdWktaGVhZGVyIC5hdWktaGVhZGVyX19jb250ZW50e2ZsZXg6MTtoZWlnaHQ6MTAwJX0uYXVpLWhlYWRlciAuYXVpLWhlYWRlcl9fbWVudS1pdGVtc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0QENvbnRlbnRDaGlsZChIZWFkZXJMb2dvRGlyZWN0aXZlKSBsb2dvOiBIZWFkZXJMb2dvRGlyZWN0aXZlO1xuXHRAQ29udGVudENoaWxkKEhlYWRlckNvbnRlbnREaXJlY3RpdmUpIGNvbnRlbnQ6IEhlYWRlckNvbnRlbnREaXJlY3RpdmU7XG5cdHB1YmxpYyBoYXNMb2dvOiBCb29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyBoYXNDb250ZW50OiBCb29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHt9XG5cblx0cHVibGljIHNldHVwSGVhZHJvb20oKSB7IC8vIEB0b2RvOiB1c2UgaGVhZHJvb20gb3B0aW9ucyBmcm9tIGluamVjdG9yXG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWktaGVhZGVyJyk7XG5cdFx0Y29uc3QgaGVhZCA9IG5ldyBIZWFkcm9vbShlbGVtZW50KTtcblxuXHRcdHJldHVybiBoZWFkO1xuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLnNldHVwSGVhZHJvb20oKTtcblx0XHR9XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cdFx0Y29uc3QgaGFzTG9nbyA9IHRoaXMubG9nbyAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IGhhc0NvbnRlbnQgPSB0aGlzLmNvbnRlbnQgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzaG91bGRVcGRhdGUgPSBoYXNMb2dvICE9PSB0aGlzLmhhc0xvZ28gfHwgaGFzQ29udGVudCAhPT0gdGhpcy5oYXNDb250ZW50O1xuXG5cdFx0aWYgKHNob3VsZFVwZGF0ZSkge1xuXHRcdFx0dGhpcy5oYXNMb2dvID0gaGFzTG9nbztcblx0XHRcdHRoaXMuaGFzQ29udGVudCA9IGhhc0NvbnRlbnQ7XG5cblx0XHRcdHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thdWlIZWFkZXJNZW51SXRlbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNZW51SXRlbURpcmVjdGl2ZSB7fVxuIiwiaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRIZWFkZXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgSGVhZGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyTG9nb0RpcmVjdGl2ZSB9IGZyb20gJy4vbG9nby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyTWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0SGVhZGVyQ29udGVudERpcmVjdGl2ZSxcblx0SGVhZGVyTG9nb0RpcmVjdGl2ZSxcblx0SGVhZGVyTWVudUl0ZW1EaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTW9kdWxlIHt9IC8vIEB0b2RvOiBhZGQgZm9ycm9vdCB3aXRoIGhlYWRyb29tIG9wdGlvbnNcbiIsImV4cG9ydCBjb25zdCBIRUFEUk9PTU9QVElPTlMgPSB7XG5cdG9mZnNldDogMjAwLFxuXHR0b2xlcmFuY2U6IDUsXG5cdGNsYXNzZXM6IHtcblx0XHRpbml0aWFsOiAnJyxcblx0XHRwaW5uZWQ6ICdoZWFkZXItLXBpbm5lZCcsXG5cdFx0dW5waW5uZWQ6ICdoZWFkZXItLXVucGlubmVkJyxcblx0XHR0b3A6ICdoZWFkZXItLXRvcCcsXG5cdFx0bm90VG9wOiAnaGVhZGVyLS1ub3QtdG9wJyxcblx0XHRib3R0b206ICdoZWFkZXItLWJvdHRvbScsXG5cdFx0Ym90Qm90dG9tOiAnaGVhZGVyLS1ub3QtYm90dG9tJyxcblx0fSxcbn07XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlIZXJvQ3RhXScsXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9DdGFEaXJlY3RpdmUge1xuXHRASG9zdEJpbmRpbmcoKSBjbGFzcyA9ICdhdWktaGVyby1jdGEnO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm9DdGFEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2hlcm8tY3RhLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1oZXJvJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiaW5uZXJcIiBbbmdDbGFzc109XCJ7J2hhcy1jdGEnOiBoYXNDdGF9XCI+XG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlIZXJvQ2FyZF1cIj48L25nLWNvbnRlbnQ+XG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlIZXJvQ3RhXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2JhY2tncm91bmQ6I2YzZjNmMztib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYjBiMGIwO21pbi1oZWlnaHQ6MTJyZW07cGFkZGluZy10b3A6NC41cmVtfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDVyZW0pezpob3N0e3BhZGRpbmctdG9wOjEuNXJlbX19Omhvc3QgLmJ1dHRvbnN7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDoxMDAlfTpob3N0IC50YWJze2FsaWduLXNlbGY6ZmxleC1lbmQ7d2lkdGg6MTAwJTtwYWRkaW5nLWJvdHRvbToxLjVyZW19Omhvc3QgLnRhYnMgLnRhYnMtbGlzdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbjowO3BhZGRpbmc6MDtsaXN0LXN0eWxlOm5vbmV9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW17bGlzdC1zdHlsZTpub25lO21hcmdpbi1ib3R0b206LTFweDtwYWRkaW5nOjB9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMHJlbSl7Omhvc3QgLnRhYnMgLnRhYnMtbGlzdHtmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW17bWFyZ2luLXJpZ2h0Oi0xcHh9fTpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG57YmFja2dyb3VuZDojZjNmM2YzO2JvcmRlcjoxcHggc29saWQgI2IwYjBiMDtjb2xvcjojMDgxZjJjO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzouMzc1cmVtIDEuNXJlbTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0LHBhZGRpbmcgLjJzIGVhc2Utb3V0fTpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG46YWN0aXZlOm5vdCguYWN0aXZlKSw6aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbSAudGFicy1saXN0LWl0ZW0tYnRuOmhvdmVyOm5vdCguYWN0aXZlKSw6aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbSAudGFicy1saXN0LWl0ZW0tYnRuOnZpc2l0ZWQ6bm90KC5hY3RpdmUpe3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW0gLnRhYnMtbGlzdC1pdGVtLWJ0bi5hY3RpdmV7YmFja2dyb3VuZDojZmZmO2ZvbnQtd2VpZ2h0OjcwMH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYycmVtKXs6aG9zdHtwYWRkaW5nLXRvcDo2cmVtO2Rpc3BsYXk6ZmxleH06aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbXthbGlnbi1zZWxmOmZsZXgtZW5kfTpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG4uYWN0aXZle3BhZGRpbmc6Ljc1cmVtIDEuNXJlbX06aG9zdCAuaW5uZXJ7bWFyZ2luOjA7cGFkZGluZzowO21heC13aWR0aDoxMDAlO2ZsZXg6MTthbGlnbi1zZWxmOmZsZXgtZW5kfTpob3N0IC5pbm5lci5oYXMtY3RhIDo6bmctZGVlcCAuYXVpLWhlcm8tY2FyZDo6YWZ0ZXIsOmhvc3QgLmlubmVyLmhhcy1jdGEgOjpuZy1kZWVwIC5hdWktaGVyby1jYXJkOjpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTotMTJweDtib3JkZXItdG9wOjEzcHggc29saWQgcmdiYSgwLDAsMCwuMil9Omhvc3QgLmlubmVyLmhhcy1jdGEgOjpuZy1kZWVwIC5hdWktaGVyby1jYXJkOjpiZWZvcmV7Ym9yZGVyLWxlZnQ6NnB4IHNvbGlkIHRyYW5zcGFyZW50O2xlZnQ6LS4zNzVyZW19Omhvc3QgLmlubmVyLmhhcy1jdGEgOjpuZy1kZWVwIC5hdWktaGVyby1jYXJkOjphZnRlcntib3JkZXItcmlnaHQ6NnB4IHNvbGlkIHRyYW5zcGFyZW50O3JpZ2h0Oi0uMzc1cmVtfTpob3N0IC50YWJze3BhZGRpbmctYm90dG9tOjA7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdCAudGFicyAudGFicy1saXN0e2p1c3RpZnktY29udGVudDpjZW50ZXJ9Omhvc3QgOjpuZy1kZWVwIC5hdWktaGVyby1pbm5lcntwYWRkaW5nOjEuNXJlbX06aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmQsOmhvc3QgOjpuZy1kZWVwIC5hdWktaGVyby13cmFwcGVye2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzt3aWR0aDoxMDAlO21heC13aWR0aDozNnJlbX06aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmR7YmFja2dyb3VuZC1jb2xvcjojZmZmO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MS41cmVtIDEuNXJlbSAuNzVyZW19Omhvc3QgOjpuZy1kZWVwIC5hdWktaGVyby1jdGF7YmFja2dyb3VuZC1jb2xvcjojZmZmO3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7bWluLWhlaWdodDo2cmVtO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MH19YF0sXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQge1xuXHRAQ29udGVudENoaWxkKEhlcm9DdGFEaXJlY3RpdmUpIGhhc0N0YTogSGVyb0N0YURpcmVjdGl2ZTtcbn1cbiIsImltcG9ydCB7IEhlcm9Db21wb25lbnQgfSBmcm9tICcuL2hlcm8vaGVyby5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0SGVyb0NvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlIZXJvQ2FyZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvQ2FyZERpcmVjdGl2ZSB7XG5cdEBIb3N0QmluZGluZygpIGNsYXNzID0gJ2F1aS1oZXJvLWNhcmQnO1xufVxuIiwiaW1wb3J0IHsgSGVyb0NhcmREaXJlY3RpdmUgfSBmcm9tICcuL2hlcm8tY2FyZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVyb0N0YURpcmVjdGl2ZSB9IGZyb20gJy4vaGVyby1jdGEuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IERpcmVjdGl2ZXMgPSBbXG5cdEhlcm9DYXJkRGlyZWN0aXZlLFxuXHRIZXJvQ3RhRGlyZWN0aXZlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0QnJvd3Nlck1vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgSGVyb01vZHVsZSB7XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudFJlZixcblx0SG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kYWxJbnN0YW5jZSB9IGZyb20gJy4uL3R5cGVzL21vZGFsLnR5cGVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1vZGFsQWJzdHJhY3QgaW1wbGVtZW50cyBNb2RhbEluc3RhbmNlIHtcblx0cHVibGljIHJlZjogQ29tcG9uZW50UmVmPE1vZGFsQWJzdHJhY3Q+ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2Vcblx0KSB7fVxuXG5cdHB1YmxpYyBjbG9zZU1vZGFsKCkge1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlTW9kYWwodGhpcy5yZWYpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEhvc3RCaW5kaW5nLFxuXHRIb3N0TGlzdGVuZXIsXG5cdEVsZW1lbnRSZWYsXG5cdENvbXBvbmVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxBYnN0cmFjdCB9IGZyb20gJy4uLy4uL2NsYXNzZXMvbW9kYWwuYWJzdHJhY3QnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbW9kYWwtb3ZlcmxheScsXG5cdHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW92ZXJsYXlfX2lubmVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsT3ZlcmxheUNvbXBvbmVudCB7XG5cdHB1YmxpYyB0aGVtZSA9ICdkYXJrJztcblx0QEhvc3RCaW5kaW5nKCdjbGFzcycpIHB1YmxpYyBnZXQgb3ZlcmxheUNsYXNzKCkge1xuXHRcdHJldHVybiBgbS1vdmVybGF5IG0tb3ZlcmxheS0tJHt0aGlzLnRoZW1lfSBpcy1hY3RpdmVgO1xuXHR9XG5cblx0cHJpdmF0ZSBtb2RhbDogQ29tcG9uZW50UmVmPE1vZGFsQWJzdHJhY3Q+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVmOiBFbGVtZW50UmVmXG5cdCkge31cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIHB1YmxpYyBjbGlja0hhbmRsZXIoZTogTW91c2VFdmVudCkge1xuXHRcdGNvbnN0IG1vZGFsID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubS1tb2RhbCcpO1xuXG5cdFx0aWYgKG1vZGFsICYmIChlLnRhcmdldCA9PT0gbW9kYWwgfHwgbW9kYWwuY29udGFpbnMoZS50YXJnZXQpKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kYWwuaW5zdGFuY2UuY2xvc2VNb2RhbCgpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRJbmplY3RhYmxlLFxuXHRJbmplY3Rvcixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRBcHBsaWNhdGlvblJlZixcblx0VHlwZSxcblx0Q29tcG9uZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IGxhc3QgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgTW9kYWxBYnN0cmFjdCB9IGZyb20gJy4uL2NsYXNzZXMvbW9kYWwuYWJzdHJhY3QnO1xuaW1wb3J0IHsgTW9kYWxSZWYsIE1vZGFsQ29tcG9uZW50UmVmLCBNb2RhbEFjdGlvbnMsIE1vZGFsT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL21vZGFsLnR5cGVzJztcbmltcG9ydCB7IE1vZGFsT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtb3ZlcmxheS9tb2RhbC1vdmVybGF5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXHRwdWJsaWMgYWN0aXZlTW9kYWxzOiBNb2RhbFJlZltdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZlxuXHQpIHt9XG5cblx0cHVibGljIG9wZW5Nb2RhbCh0ZW1wbGF0ZTogVHlwZTxNb2RhbEFic3RyYWN0PiwgbW9kYWxEYXRhPzogYW55LCBhY3Rpb25zPzogTW9kYWxBY3Rpb25zLCBvcHRpb25zOiBNb2RhbE9wdGlvbnMgPSB7fSk6IGFueSB7XG5cdFx0Y29uc3QgbW9kYWwgPSB0aGlzLmNyZWF0ZVJlZih0ZW1wbGF0ZSk7XG5cdFx0bW9kYWwuaW5zdGFuY2UucmVmID0gbW9kYWw7XG5cdFx0bW9kYWwuaW5zdGFuY2UubW9kYWxEYXRhID0gY2xvbmVEZWVwKG1vZGFsRGF0YSk7XG5cdFx0bW9kYWwuaW5zdGFuY2UubW9kYWxBY3Rpb25zID0gYWN0aW9ucztcblxuXHRcdGNvbnN0IG92ZXJsYXkgPSB0aGlzLmNyZWF0ZVJlZihNb2RhbE92ZXJsYXlDb21wb25lbnQsIFtcblx0XHRcdFttb2RhbC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XSxcblx0XHRdKTtcblx0XHRvdmVybGF5Lmluc3RhbmNlLm1vZGFsID0gbW9kYWw7XG5cdFx0b3ZlcmxheS5pbnN0YW5jZS50aGVtZSA9IG9wdGlvbnMudGhlbWUgfHwgJ2RhcmsnO1xuXG5cdFx0dGhpcy5hY3RpdmVNb2RhbHMucHVzaCh7XG5cdFx0XHRtb2RhbDogbW9kYWwsXG5cdFx0XHRvdmVybGF5OiBvdmVybGF5LFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hcHBlbmRSZWZzKG92ZXJsYXkpO1xuXG5cdFx0cmV0dXJuIG1vZGFsO1xuXHR9XG5cblx0cHVibGljIGNsb3NlTW9kYWwobW9kYWw6IE1vZGFsQ29tcG9uZW50UmVmKTogdm9pZCB7XG5cdFx0Y29uc3QgYWN0aXZlTW9kYWxJbmRleCA9IHRoaXMuYWN0aXZlTW9kYWxzLmZpbmRJbmRleCgoaW5zdGFuY2U6IE1vZGFsUmVmKSA9PiBpbnN0YW5jZS5tb2RhbCA9PT0gbW9kYWwpO1xuXG5cdFx0aWYgKGFjdGl2ZU1vZGFsSW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aXZlTW9kYWwgPSB0aGlzLmFjdGl2ZU1vZGFsc1thY3RpdmVNb2RhbEluZGV4XTtcblxuXHRcdGFjdGl2ZU1vZGFsLm1vZGFsLmRlc3Ryb3koKTtcblx0XHRhY3RpdmVNb2RhbC5vdmVybGF5LmRlc3Ryb3koKTtcblxuXHRcdHRoaXMuYWN0aXZlTW9kYWxzLnNwbGljZShhY3RpdmVNb2RhbEluZGV4LCAxKTtcblx0fVxuXG5cdHB1YmxpYyBjbG9zZUxhc3QoKTogdm9pZCB7XG5cdFx0Y29uc3QgbGFzdE1vZGFsID0gbGFzdCh0aGlzLmFjdGl2ZU1vZGFscyk7XG5cblx0XHRpZiAobGFzdE1vZGFsKSB7XG5cdFx0XHR0aGlzLmNsb3NlTW9kYWwobGFzdE1vZGFsLm1vZGFsKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVJlZih0ZW1wbGF0ZTogVHlwZTxhbnk+LCBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSk6IENvbXBvbmVudFJlZjxhbnk+IHtcblx0XHRjb25zdCBjb21wRmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGVtcGxhdGUpO1xuXHRcdGNvbnN0IHJlZiA9IGNvbXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yLCBwcm9qZWN0YWJsZU5vZGVzKTtcblxuXHRcdHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcocmVmLmhvc3RWaWV3KTtcblx0XHRyZWYub25EZXN0cm95KCgpID0+IHRoaXMuYXBwUmVmLmRldGFjaFZpZXcocmVmLmhvc3RWaWV3KSk7XG5cblx0XHRyZXR1cm4gcmVmO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBlbmRSZWZzKC4uLmFyZ3MpOiB2b2lkIHtcblx0XHRjb25zdCBhcHBSZWYgPSBnZXQodGhpcy5hcHBSZWYsICdjb21wb25lbnRzWzBdLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQnLCBudWxsKTtcblxuXHRcdGlmICghYXBwUmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXJncy5mb3JFYWNoKChyZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB7XG5cdFx0XHRhcHBSZWYuYXBwZW5kQ2hpbGQocmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgTW9kYWxBY3Rpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvbW9kYWwudHlwZXMnO1xuaW1wb3J0IHsgTW9kYWxBYnN0cmFjdCB9IGZyb20gJy4uLy4uL2NsYXNzZXMvbW9kYWwuYWJzdHJhY3QnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hcHByb3ZlLW1vZGFsJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1tb2RhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsX19oZWFkZXIgdS1tYXJnaW4tYm90dG9tLXhzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJtLW1vZGFsX19jbG9zZSBhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tZGVmYXVsdCBoYXMtaWNvblwiPjxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICA8aDY+e3sgbW9kYWxEYXRhLnF1ZXN0aW9uIH19PC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICAgICAgICAgIDxwPnt7IG1vZGFsRGF0YS5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uXCI+e3sgbW9kYWxEYXRhLnJlamVjdCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic3VibWl0KClcIiBjbGFzcz1cImEtYnV0dG9uLW91dGxpbmVcIj57eyBtb2RhbERhdGEuYXBwcm92ZSB9fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwcm92ZU1vZGFsQ29tcG9uZW50IGV4dGVuZHMgTW9kYWxBYnN0cmFjdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBtb2RhbERhdGE6IGFueTtcblx0cHVibGljIG1vZGFsQWN0aW9uczogTW9kYWxBY3Rpb25zO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuXHQpIHtcblx0XHRzdXBlcihtb2RhbFNlcnZpY2UpO1xuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMubW9kYWxEYXRhID0gdGhpcy5tb2RhbERhdGEgfHwge1xuXHRcdFx0cXVlc3Rpb246ICdRdWVzdGlvbj8nLFxuXHRcdFx0ZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbi4uLicsXG5cdFx0XHRhcHByb3ZlOiAnT2snLFxuXHRcdFx0cmVqZWN0OiAnQ2FuY2VsJyxcblx0XHR9O1xuXHR9XG5cblx0cHVibGljIHN1Ym1pdCgpIHtcblx0XHR0aGlzLnZlcmlmeUFjdGlvbignYXBwcm92ZScpLnRoZW4oKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpO1xuXHR9XG5cblx0cHVibGljIGNsb3NlKCkge1xuXHRcdHRoaXMudmVyaWZ5QWN0aW9uKCdyZWplY3QnKS50aGVuKCgpID0+IHRoaXMuY2xvc2VNb2RhbCgpKTtcblx0fVxuXG5cdHByaXZhdGUgdmVyaWZ5QWN0aW9uKGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcblx0XHRpZiAoZ2V0KHRoaXMubW9kYWxBY3Rpb25zLCBhY3Rpb24pKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tb2RhbEFjdGlvbnNbYWN0aW9uXSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQXBwcm92ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9hcHByb3ZlLW1vZGFsL2FwcHJvdmUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtb3ZlcmxheS9tb2RhbC1vdmVybGF5LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRBcHByb3ZlTW9kYWxDb21wb25lbnQsXG5cdE1vZGFsT3ZlcmxheUNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBFbnRyeUNvbXBvbmVudHMgPSBbXG5cdEFwcHJvdmVNb2RhbENvbXBvbmVudCxcblx0TW9kYWxPdmVybGF5Q29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwcm92ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hcHByb3ZlLW1vZGFsL2FwcHJvdmUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXVpQXBwcm92ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBBcHByb3ZlTW9kYWxEaXJlY3RpdmUge1xuXHRASW5wdXQoKSBwdWJsaWMgcXVlc3Rpb247XG5cdEBJbnB1dCgpIHB1YmxpYyBkZXNjcmlwdGlvbjtcblx0QElucHV0KCkgcHVibGljIHN1Ym1pdE1lc3NhZ2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBjYW5jZWxNZXNzYWdlO1xuXHRAT3V0cHV0KCkgcHVibGljIGFwcHJvdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHt9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25DbGljaygpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5vcGVuTW9kYWwoQXBwcm92ZU1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHRxdWVzdGlvbjogdGhpcy5xdWVzdGlvbixcblx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuXHRcdFx0YXBwcm92ZTogdGhpcy5zdWJtaXRNZXNzYWdlLFxuXHRcdFx0cmVqZWN0OiB0aGlzLmNhbmNlbE1lc3NhZ2UsXG5cdFx0fSwge1xuXHRcdFx0YXBwcm92ZTogKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmFwcHJvdmUuZW1pdCgpO1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVqZWN0OiAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsLmVtaXQoKTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQXBwcm92ZU1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi9hcHByb3ZlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRBcHByb3ZlTW9kYWxEaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuXHRNb2RhbFNlcnZpY2UsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cywgRW50cnlDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uU2VydmljZXMsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0Li4uRW50cnlDb21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXBhbmUnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLXBhbmUgYXVpLXBhbmVcIiBbbmdDbGFzc109XCJ7ICdtLXBhbmUtLW9wZW4nOiBvcGVuZWQsICdtLXBhbmUtLWxlZnQnOiBzaWRlID09PSAnbGVmdCcsICdtLXBhbmUtLXJpZ2h0Jzogc2lkZSA9PT0gJ3JpZ2h0JyB9XCI+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm0tb3ZlcmxheSBtLW92ZXJsYXlfX3BhbmUgaXMtYWN0aXZlXCIgKm5nSWY9XCJvcGVuZWQgJiYgYmFja2Ryb3BcIiAoY2xpY2spPVwiY2xvc2VQYW5lKClcIj48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AubS1wYW5le2JhY2tncm91bmQtY29sb3I6I2ZmZjt3aWR0aDoyMi41cmVtO2hlaWdodDoxMDAlO3otaW5kZXg6MTAwfS5tLXBhbmVfX2NvbnRlbnR7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteTpzY3JvbGx9Lm0tcGFuZS0tbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0yMi41cmVtO3RyYW5zaXRpb246bGVmdCAuM3MgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSl9Lm0tcGFuZS0tbGVmdC5tLXBhbmUtLW9wZW57bGVmdDowfS5tLXBhbmUtLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0yMi41cmVtO3RyYW5zaXRpb246cmlnaHQgLjNzIGN1YmljLWJlemllciguNCwwLC4yLDEpfS5tLXBhbmUtLXJpZ2h0Lm0tcGFuZS0tb3BlbntyaWdodDowfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lQ29tcG9uZW50IHtcblx0QElucHV0KCkgb3BlbmVkID0gZmFsc2U7XG5cdEBJbnB1dCgpIHNpZGUgPSAnbGVmdCc7XG5cdEBJbnB1dCgpIGJhY2tkcm9wID0gdHJ1ZTtcblx0QE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgdG9nZ2xlUGFuZSgpIHtcblx0XHQodGhpcy5vcGVuZWQgPyB0aGlzLmNsb3NlUGFuZSgpIDogdGhpcy5vcGVuUGFuZSgpKTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuUGFuZSgpIHtcblx0XHR0aGlzLm9wZW5lZCA9IHRydWU7XG5cdFx0dGhpcy5vcGVuLmVtaXQoKTtcblx0fVxuXG5cdHB1YmxpYyBjbG9zZVBhbmUoKSB7XG5cdFx0dGhpcy5vcGVuZWQgPSBmYWxzZTtcblx0XHR0aGlzLmNsb3NlLmVtaXQoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgUGFuZUNvbXBvbmVudCB9IGZyb20gJy4vcGFuZS9wYW5lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRQYW5lQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVNb2R1bGUge1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2lkZWJhckl0ZW0sIFNpZGViYXJTdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NpZGViYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc2lkZWJhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tc2lkZWJhciB7eyBvcGVuID8gJ28tc2lkZWJhci0tb3BlbicgOiAnJyB9fVwiPlxuXHQ8ZGl2IGNsYXNzPVwiby1zaWRlYmFyX19oZWFkZXJcIj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tdHJhbnNwYXJlbnQgaGFzLWljb25cIiAoY2xpY2spPVwidG9nZ2xlKGZhbHNlKVwiPlxuXHRcdFx0PGkgY2xhc3M9XCJpY29uLWNsb3NlXCI+PC9pPlxuXHRcdDwvYnV0dG9uPlxuXHRcdDxoMSBjbGFzcz1cImg2XCI+e3sgdGl0bGUgfCB1cHBlcmNhc2UgfX08L2gxPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cIm8tc2lkZWJhcl9faXRlbXNcIj5cblx0XHQ8YXVpLXNpZGViYXItaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFtpdGVtXT1cIml0ZW1cIiAoY2xpY2spPVwiaXRlbUNsaWNrZWQoKVwiPjwvYXVpLXNpZGViYXItaXRlbT5cblx0PC9kaXY+XG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIi5vLXNpZGViYXJfX2Zvb3RlclwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibS1vdmVybGF5XCJcblx0Km5nSWY9XCJvcGVuXCJcblx0KGNsaWNrKT1cInRvZ2dsZShmYWxzZSlcIj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYC5tLXNpZGViYXJ7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjA7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RyYW5zaXRpb246d2lkdGggLjNzIGN1YmljLWJlemllciguNCwwLC4yLDEpfS5tLXNpZGViYXItLW9wZW57d2lkdGg6MjIuNXJlbX0ubS1zaWRlYmFyX19jb250ZW50e292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bzt3aWR0aDoyMi41cmVtO2hlaWdodDoxMDAlfS5tLXNpZGViYXJfX2NvbnRlbnQtLXBhZGRpbmd7cGFkZGluZzozcmVtfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGNsb3NlT25TZWxlY3RlZCA9IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyB0aXRsZSA9ICdPbmRlcndlZyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcGVuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtczogU2lkZWJhckl0ZW1bXSA9IFtdO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cHVibGljIHRvZ2dsZShvcGVuOiBib29sZWFuID0gIXRoaXMub3Blbikge1xuXHRcdHRoaXMub3BlbiA9IG9wZW47XG5cblx0XHRpZiAob3Blbikge1xuXHRcdFx0dGhpcy5vcGVuZWQuZW1pdCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlZC5lbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGl0ZW1DbGlja2VkKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNsb3NlT25TZWxlY3RlZCkge1xuXHRcdFx0dGhpcy50b2dnbGUoZmFsc2UpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0SG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgU2lkZWJhckl0ZW0gfSBmcm9tICcuLi8uLi90eXBlcy9zaWRlYmFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNpZGViYXItaXRlbScsXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0uaHJlZlwiPlxuXHQ8YSBocmVmPVwie3tpdGVtLmhyZWZ9fVwiIFtzdHlsZS5ib3JkZXItY29sb3JdPVwiaXRlbS50aGVtZT8uY29sb3JcIj5cblx0XHQ8aW1nICpuZ0lmPVwiaXRlbS5pY29uXCIgc3JjPVwie3tpdGVtLmljb259fVwiIC8+XG5cdFx0PGgyIGNsYXNzPVwiaDVcIj57e2l0ZW0ubGFiZWx9fTwvaDI+XG5cdDwvYT5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0ucm91dGVyTGlua1wiPlxuXHQ8YSBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIiBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cIml0ZW0udGhlbWU/LmNvbG9yXCI+XG5cdFx0PGltZyAqbmdJZj1cIml0ZW0uaWNvblwiIHNyYz1cInt7aXRlbS5pY29ufX1cIiAvPlxuXHRcdDxoMiBjbGFzcz1cImg1XCI+e3tpdGVtLmxhYmVsfX08L2gyPlxuXHQ8L2E+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRtIG9mIGl0ZW0uaXRlbXNcIj5cblx0PGF1aS1zaWRlYmFyLWl0ZW0gW2l0ZW1dPVwiaXRtXCI+PC9hdWktc2lkZWJhci1pdGVtPlxuPC9uZy1jb250YWluZXI+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFySXRlbUNvbXBvbmVudCB7XG5cdEBIb3N0QmluZGluZygnY2xhc3MnKSBwdWJsaWMgZ2V0IGl0ZW1DbGFzc0xpc3QoKSB7XG5cdFx0cmV0dXJuIGBvLXNpZGViYXJfX2l0ZW0gJHtnZXQodGhpcy5pdGVtLCAnY2xhc3NMaXN0JywgJycpfWA7XG5cdH1cblx0QElucHV0KCkgcHVibGljIGl0ZW06IFNpZGViYXJJdGVtO1xufVxuIiwiaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1pdGVtL3NpZGViYXItaXRlbS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0U2lkZWJhckNvbXBvbmVudCxcblx0U2lkZWJhckl0ZW1Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudHMiLCJEaXJlY3RpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUJBR2Esc0JBQXNCLEdBQXdCO0lBQzFELFFBQVEsRUFBRSxJQUFJO0lBQ2QsT0FBTyxFQUFFO1FBQ1IsT0FBTyxFQUFFLDhFQUE4RTtRQUN2RixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSw0Q0FBNEM7S0FDbEQ7SUFDRCxNQUFNLEVBQUU7UUFDUCxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLEVBQUU7UUFDVixVQUFVLEVBQUUsR0FBRztLQUNmO0lBQ0QsUUFBUSxF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

/***/ }),

/***/ "./dist/layout/fesm5/layout.js":
/*!*************************************!*\
  !*** ./dist/layout/fesm5/layout.js ***!
  \*************************************/
/*! exports provided: CookieconsentModule, COOKIE_CONSENT_CONFIG, COOKIE_CONSENT_CONFIG_ROOT, DEFAULT_CONSENT_CONFIG, CookieconsentService, FooterModule, CopyrightComponent, FooterComponent, SubFooterComponent, FooterBottomDirective, FooterContentDirective, HeaderComponent, HeaderContentDirective, HeaderLogoDirective, HeaderMenuItemDirective, HeaderModule, HEADROOMOPTIONS, HeroModule, HeroComponent, HeroCardDirective, HeroCtaDirective, ModalModule, ModalAbstract, ModalService, ApproveModalComponent, ModalOverlayComponent, ApproveModalDirective, PaneModule, PaneComponent, SidebarComponent, SidebarItemComponent, SidebarModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵi, ɵj, ɵk, ɵh, ɵl, ɵm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieconsentModule", function() { return CookieconsentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COOKIE_CONSENT_CONFIG", function() { return COOKIE_CONSENT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COOKIE_CONSENT_CONFIG_ROOT", function() { return COOKIE_CONSENT_CONFIG_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONSENT_CONFIG", function() { return DEFAULT_CONSENT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieconsentService", function() { return CookieconsentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFooterComponent", function() { return SubFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBottomDirective", function() { return FooterBottomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContentDirective", function() { return FooterContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContentDirective", function() { return HeaderContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogoDirective", function() { return HeaderLogoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuItemDirective", function() { return HeaderMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADROOMOPTIONS", function() { return HEADROOMOPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroModule", function() { return HeroModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCardDirective", function() { return HeroCardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCtaDirective", function() { return HeroCtaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAbstract", function() { return ModalAbstract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveModalComponent", function() { return ApproveModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOverlayComponent", function() { return ModalOverlayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveModalDirective", function() { return ApproveModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaneModule", function() { return PaneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaneComponent", function() { return PaneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarItemComponent", function() { return SidebarItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return setConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return Directives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return Components$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return Directives$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Components$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return Directives$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return Components$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return EntryComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return Directives$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return Components$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return Components$5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/utils */ "./dist/utils/fesm5/utils.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var cookieconsent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookieconsent */ "./node_modules/cookieconsent/build/cookieconsent.min.js");
/* harmony import */ var cookieconsent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookieconsent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jsprds_headroom_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsprds/headroom.ts */ "./node_modules/@jsprds/headroom.ts/dist/headroom.esm.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DEFAULT_CONSENT_CONFIG = {
    autoInit: true,
    content: {
        message: 'We make use of cookies to ensure you get the best experience on our website.',
        dismiss: 'OK',
        link: 'Learn more',
        href: 'http://cookiepedia.co.uk/all-about-cookies',
    },
    cookie: {
        name: 'cookieconsent_status',
        path: '/',
        domain: '',
        expiryDays: 365,
    },
    elements: {
        messagelink: '<p id="cookieconsent:desc">{{message}} <a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a></p>',
        // tslint:disable-line:max-line-length
        dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>',
    },
};
var /** @type {?} */ COOKIE_CONSENT_CONFIG_ROOT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cookieConsentConfigRoot');
var /** @type {?} */ COOKIE_CONSENT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cookieConsentConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CookieconsentService = /** @class */ (function () {
    function CookieconsentService(cookieConsentConfig, $window) {
        this.cookieConsentConfig = cookieConsentConfig;
        this.$window = $window;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CookieconsentService.prototype.init = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = this.cookieConsentConfig; }
        if (!config || Object.keys(config).length === 0) {
            config = DEFAULT_CONSENT_CONFIG;
        }
        if (CookieconsentService.initialized) {
            return console.warn('Cookie consent is already initialized!');
        }
        if (!this.$window || (this.$window && !this.$window.cookieconsent)) {
            return console.warn('Cookie consent is not loaded!');
        }
        this.$window.cookieconsent.initialise(Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.cookieConsentConfig, config));
    };
    CookieconsentService.initialized = false;
    CookieconsentService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CookieconsentService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COOKIE_CONSENT_CONFIG,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"],] },] },
    ]; };
    return CookieconsentService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} cookieConsentConfig
 * @return {?}
 */
function setConfig(cookieConsentConfig) {
    return Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["merge"])(DEFAULT_CONSENT_CONFIG, cookieConsentConfig);
}
var ɵ0 = DEFAULT_CONSENT_CONFIG;
var CookieconsentModule = /** @class */ (function () {
    function CookieconsentModule(config, cookieconsentService) {
        if (config === void 0) { config = DEFAULT_CONSENT_CONFIG; }
        this.cookieconsentService = cookieconsentService;
        if (config.autoInit) {
            this.cookieconsentService.init();
        }
    }
    /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    CookieconsentModule.forRoot = /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    function (cookieConsentConfig) {
        return {
            ngModule: CookieconsentModule,
            providers: [
                { provide: COOKIE_CONSENT_CONFIG_ROOT, useValue: cookieConsentConfig },
                // Merge the forRoot config with our default config (AOT proof)
                {
                    provide: COOKIE_CONSENT_CONFIG,
                    useFactory: setConfig,
                    deps: [COOKIE_CONSENT_CONFIG_ROOT],
                },
                CookieconsentService,
            ],
        };
    };
    CookieconsentModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_1__["WindowModule"],
                    ],
                    providers: [
                        CookieconsentService,
                        { provide: COOKIE_CONSENT_CONFIG, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    CookieconsentModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COOKIE_CONSENT_CONFIG,] },] },
        { type: CookieconsentService, },
    ]; };
    return CookieconsentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CopyrightComponent = /** @class */ (function () {
    function CopyrightComponent() {
        this.currentYear = new Date().getFullYear();
    }
    CopyrightComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-copyright',
                    template: "<span>&copy; {{ currentYear }} {{ domain }}</span>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CopyrightComponent.propDecorators = {
        "domain": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CopyrightComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterContentDirective = /** @class */ (function () {
    function FooterContentDirective() {
    }
    FooterContentDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiFooterContent]',
                },] },
    ];
    return FooterContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(ref) {
        this.ref = ref;
        this.isExtended = false;
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hasCols = this.footerContent !== undefined;
        var /** @type {?} */ shouldUpdate = hasCols !== this.isExtended;
        if (shouldUpdate) {
            this.isExtended = hasCols;
            this.ref.markForCheck();
        }
    };
    FooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-footer',
                    template: "<footer class=\"aui-footer\" [ngClass]=\"{'extended': isExtended}\">\n    <ng-content select=\"[auiFooterContent]\"></ng-content>\n    <ng-content select=\"[auiFooterBottom]\"></ng-content>\n</footer>\n",
                    styles: [":host{display:block}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    FooterComponent.propDecorators = {
        "footerContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [FooterContentDirective,] },],
    };
    return FooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SubFooterComponent = /** @class */ (function () {
    function SubFooterComponent() {
        this.goToTop = function () {
            window.scrollTo(0, 0);
        };
    }
    SubFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-subfooter',
                    template: "<div class=\"o-footer\">\n    <div class=\"o-footer__label\">\n        <ng-content></ng-content>\n    </div>\n\n    <button class=\"o-footer__button a-button a-button--secondary has-icon\" (click)=\"goToTop()\">\n        <span class=\"fa fa-arrow-up\"></span>\n    </button>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    return SubFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CopyrightComponent,
    FooterComponent,
    SubFooterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterBottomDirective = /** @class */ (function () {
    function FooterBottomDirective() {
    }
    FooterBottomDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiFooterBottom]',
                },] },
    ];
    return FooterBottomDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    FooterBottomDirective,
    FooterContentDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components, Directives),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components, Directives),
                },] },
    ];
    return FooterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderLogoDirective = /** @class */ (function () {
    function HeaderLogoDirective() {
    }
    HeaderLogoDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeaderLogo]',
                },] },
    ];
    return HeaderLogoDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderContentDirective = /** @class */ (function () {
    function HeaderContentDirective() {
        this.styleDisplay = 'block';
        this.styleHeight = '100%';
    }
    HeaderContentDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeaderContent]',
                },] },
    ];
    /** @nocollapse */
    HeaderContentDirective.propDecorators = {
        "styleDisplay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] },],
        "styleHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] },],
    };
    return HeaderContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(platformId, elementRef, ref) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.ref = ref;
        this.hasLogo = false;
        this.hasContent = false;
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.setupHeadroom = /**
     * @return {?}
     */
    function () {
        // @todo: use headroom options from injector
        var /** @type {?} */ element = this.elementRef.nativeElement.querySelector('.aui-header');
        var /** @type {?} */ head = new _jsprds_headroom_ts__WEBPACK_IMPORTED_MODULE_6__["Headroom"](element);
        return head;
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.setupHeadroom();
        }
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hasLogo = this.logo !== undefined;
        var /** @type {?} */ hasContent = this.content !== undefined;
        var /** @type {?} */ shouldUpdate = hasLogo !== this.hasLogo || hasContent !== this.hasContent;
        if (shouldUpdate) {
            this.hasLogo = hasLogo;
            this.hasContent = hasContent;
            this.ref.markForCheck();
        }
    };
    HeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-header',
                    template: "<header class=\"o-header o-header--fixed aui-header\" [ngClass]=\"{'has-logo': hasLogo}\">\n    <ng-content select=\"[auiHeaderLogo]\"></ng-content>\n\n    <div class=\"aui-header__content-wrapper\">\n        <div class=\"aui-header__content\">\n            <ng-content select=\"[auiHeaderContent]\"></ng-content>\n        </div>\n\n        <div class=\"aui-header__menu-items\">\n            <ng-content select=\"[auiHeaderMenuItem]\"></ng-content>\n        </div>\n    </div>\n</header>\n",
                    styles: [":host{display:block}.aui-header{transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;will-change:transform}.aui-header.header--pinned{top:0}.aui-header.header--unpinned{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.aui-header.has-logo.header--unpinned{-webkit-transform:translateY(-300%);transform:translateY(-300%)}.aui-header .aui-header__content-wrapper{display:flex;flex-wrap:wrap;justify-content:flex-end;height:100%}.aui-header .aui-header__content{flex:1;height:100%}.aui-header .aui-header__menu-items{display:flex;justify-content:flex-end}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    HeaderComponent.propDecorators = {
        "logo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeaderLogoDirective,] },],
        "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeaderContentDirective,] },],
    };
    return HeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderMenuItemDirective = /** @class */ (function () {
    function HeaderMenuItemDirective() {
    }
    HeaderMenuItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeaderMenuItem]',
                },] },
    ];
    return HeaderMenuItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$1 = [
    HeaderComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives$1 = [
    HeaderContentDirective,
    HeaderLogoDirective,
    HeaderMenuItemDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$1, Directives$1),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$1, Directives$1),
                },] },
    ];
    return HeaderModule;
}());
// @todo: add forroot with headroom options

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ HEADROOMOPTIONS = {
    offset: 200,
    tolerance: 5,
    classes: {
        initial: '',
        pinned: 'header--pinned',
        unpinned: 'header--unpinned',
        top: 'header--top',
        notTop: 'header--not-top',
        bottom: 'header--bottom',
        botBottom: 'header--not-bottom',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroCtaDirective = /** @class */ (function () {
    function HeroCtaDirective() {
        this.class = 'aui-hero-cta';
    }
    HeroCtaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeroCta]',
                },] },
    ];
    /** @nocollapse */
    HeroCtaDirective.propDecorators = {
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] },],
    };
    return HeroCtaDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-hero',
                    template: "<div class=\"inner\" [ngClass]=\"{'has-cta': hasCta}\">\n\t<ng-content select=\"[auiHeroCard]\"></ng-content>\n\t<ng-content select=\"[auiHeroCta]\"></ng-content>\n</div>\n",
                    styles: [":host{background:#f3f3f3;border-bottom:1px solid #b0b0b0;min-height:12rem;padding-top:4.5rem}@media screen and (min-width:45rem){:host{padding-top:1.5rem}}:host .buttons{justify-content:center;align-self:center;width:100%}:host .tabs{align-self:flex-end;width:100%;padding-bottom:1.5rem}:host .tabs .tabs-list{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}:host .tabs .tabs-list .tabs-list-item{list-style:none;margin-bottom:-1px;padding:0}@media screen and (min-width:30rem){:host .tabs .tabs-list{flex-direction:row}:host .tabs .tabs-list .tabs-list-item{margin-right:-1px}}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn{background:#f3f3f3;border:1px solid #b0b0b0;color:#081f2c;display:block;padding:.375rem 1.5rem;text-align:center;text-decoration:none;transition:background-color .2s ease-out,padding .2s ease-out}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:active:not(.active),:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:hover:not(.active),:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:visited:not(.active){text-decoration:underline}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn.active{background:#fff;font-weight:700}@media screen and (min-width:62rem){:host{padding-top:6rem;display:flex}:host .tabs .tabs-list .tabs-list-item{align-self:flex-end}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn.active{padding:.75rem 1.5rem}:host .inner{margin:0;padding:0;max-width:100%;flex:1;align-self:flex-end}:host .inner.has-cta ::ng-deep .aui-hero-card::after,:host .inner.has-cta ::ng-deep .aui-hero-card::before{content:\"\";position:absolute;bottom:-12px;border-top:13px solid rgba(0,0,0,.2)}:host .inner.has-cta ::ng-deep .aui-hero-card::before{border-left:6px solid transparent;left:-.375rem}:host .inner.has-cta ::ng-deep .aui-hero-card::after{border-right:6px solid transparent;right:-.375rem}:host .tabs{padding-bottom:0;justify-content:center}:host .tabs .tabs-list{justify-content:center}:host ::ng-deep .aui-hero-inner{padding:1.5rem}:host ::ng-deep .aui-hero-card,:host ::ng-deep .aui-hero-wrapper{display:block;margin:0 auto;width:100%;max-width:36rem}:host ::ng-deep .aui-hero-card{background-color:#fff;position:relative;text-align:center;padding:1.5rem 1.5rem .75rem}:host ::ng-deep .aui-hero-cta{background-color:#fff;width:100%;text-align:center;min-height:6rem;display:flex;justify-content:center;padding:0}}"],
                },] },
    ];
    /** @nocollapse */
    HeroComponent.propDecorators = {
        "hasCta": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [HeroCtaDirective,] },],
    };
    return HeroComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$2 = [
    HeroComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroCardDirective = /** @class */ (function () {
    function HeroCardDirective() {
        this.class = 'aui-hero-card';
    }
    HeroCardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiHeroCard]',
                },] },
    ];
    /** @nocollapse */
    HeroCardDirective.propDecorators = {
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] },],
    };
    return HeroCardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives$2 = [
    HeroCardDirective,
    HeroCtaDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroModule = /** @class */ (function () {
    function HeroModule() {
    }
    HeroModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$2, Directives$2),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$2, Directives$2),
                },] },
    ];
    return HeroModule;
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
 * @abstract
 */
var  /**
 * @abstract
 */
ModalAbstract = /** @class */ (function () {
    function ModalAbstract(modalService) {
        this.modalService = modalService;
        this.ref = null;
    }
    /**
     * @return {?}
     */
    ModalAbstract.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.modalService.closeModal(this.ref);
    };
    return ModalAbstract;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalOverlayComponent = /** @class */ (function () {
    function ModalOverlayComponent(ref) {
        this.ref = ref;
        this.theme = 'dark';
    }
    Object.defineProperty(ModalOverlayComponent.prototype, "overlayClass", {
        get: /**
         * @return {?}
         */
        function () {
            return "m-overlay m-overlay--" + this.theme + " is-active";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    ModalOverlayComponent.prototype.clickHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var /** @type {?} */ modal = this.ref.nativeElement.querySelector('.m-modal');
        if (modal && (e.target === modal || modal.contains(e.target))) {
            return;
        }
        this.modal.instance.closeModal();
    };
    ModalOverlayComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-modal-overlay',
                    template: "\n        <div class=\"m-overlay__inner\">\n            <ng-content></ng-content>\n        </div>\n    ",
                },] },
    ];
    /** @nocollapse */
    ModalOverlayComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ModalOverlayComponent.propDecorators = {
        "overlayClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] },],
        "clickHandler": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return ModalOverlayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalService = /** @class */ (function () {
    function ModalService(injector, resolver, appRef) {
        this.injector = injector;
        this.resolver = resolver;
        this.appRef = appRef;
        this.activeModals = [];
    }
    /**
     * @param {?} template
     * @param {?=} modalData
     * @param {?=} actions
     * @param {?=} options
     * @return {?}
     */
    ModalService.prototype.openModal = /**
     * @param {?} template
     * @param {?=} modalData
     * @param {?=} actions
     * @param {?=} options
     * @return {?}
     */
    function (template, modalData, actions, options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ modal = this.createRef(template);
        modal.instance.ref = modal;
        modal.instance.modalData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(modalData);
        modal.instance.modalActions = actions;
        var /** @type {?} */ overlay = this.createRef(ModalOverlayComponent, [
            [modal.location.nativeElement],
        ]);
        overlay.instance.modal = modal;
        overlay.instance.theme = options.theme || 'dark';
        this.activeModals.push({
            modal: modal,
            overlay: overlay,
        });
        this.appendRefs(overlay);
        return modal;
    };
    /**
     * @param {?} modal
     * @return {?}
     */
    ModalService.prototype.closeModal = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        var /** @type {?} */ activeModalIndex = this.activeModals.findIndex(function (instance) { return instance.modal === modal; });
        if (activeModalIndex < 0) {
            return;
        }
        var /** @type {?} */ activeModal = this.activeModals[activeModalIndex];
        activeModal.modal.destroy();
        activeModal.overlay.destroy();
        this.activeModals.splice(activeModalIndex, 1);
    };
    /**
     * @return {?}
     */
    ModalService.prototype.closeLast = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ lastModal = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["last"])(this.activeModals);
        if (lastModal) {
            this.closeModal(lastModal.modal);
        }
    };
    /**
     * @param {?} template
     * @param {?=} projectableNodes
     * @return {?}
     */
    ModalService.prototype.createRef = /**
     * @param {?} template
     * @param {?=} projectableNodes
     * @return {?}
     */
    function (template, projectableNodes) {
        var _this = this;
        var /** @type {?} */ compFactory = this.resolver.resolveComponentFactory(template);
        var /** @type {?} */ ref = compFactory.create(this.injector, projectableNodes);
        this.appRef.attachView(ref.hostView);
        ref.onDestroy(function () { return _this.appRef.detachView(ref.hostView); });
        return ref;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ModalService.prototype.appendRefs = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var /** @type {?} */ appRef = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"])(this.appRef, 'components[0].location.nativeElement', null);
        if (!appRef) {
            return;
        }
        args.forEach(function (ref) {
            appRef.appendChild(ref.location.nativeElement);
        });
    };
    ModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], },
    ]; };
    return ModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ApproveModalComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(ApproveModalComponent, _super);
    function ApproveModalComponent(modalService) {
        var _this = _super.call(this, modalService) || this;
        _this.modalService = modalService;
        return _this;
    }
    /**
     * @return {?}
     */
    ApproveModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.modalData = this.modalData || {
            question: 'Question?',
            description: 'Description...',
            approve: 'Ok',
            reject: 'Cancel',
        };
    };
    /**
     * @return {?}
     */
    ApproveModalComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.verifyAction('approve').then(function () { return _this.closeModal(); });
    };
    /**
     * @return {?}
     */
    ApproveModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.verifyAction('reject').then(function () { return _this.closeModal(); });
    };
    /**
     * @param {?} action
     * @return {?}
     */
    ApproveModalComponent.prototype.verifyAction = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"])(this.modalActions, action)) {
            return this.modalActions[action]();
        }
        return Promise.resolve();
    };
    ApproveModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-approve-modal',
                    template: "<div class=\"m-modal\">\n    <div class=\"m-modal__content\">\n        <div class=\"m-modal__header u-margin-bottom-xs\">\n            <button (click)=\"close()\" class=\"m-modal__close a-button-transparent a-button--default has-icon\"><i class=\"fa fa-close\"></i></button>\n            <h6>{{ modalData.question }}</h6>\n        </div>\n        <div class=\"u-margin-bottom\">\n            <p>{{ modalData.description }}</p>\n        </div>\n        <div class=\"m-modal__footer\">\n            <button (click)=\"close()\" class=\"a-button a-button\">{{ modalData.reject }}</button>\n            <button (click)=\"submit()\" class=\"a-button-outline\">{{ modalData.approve }}</button>\n        </div>\n    </div>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    ApproveModalComponent.ctorParameters = function () { return [
        { type: ModalService, },
    ]; };
    return ApproveModalComponent;
}(ModalAbstract));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$3 = [
    ApproveModalComponent,
    ModalOverlayComponent,
];
var /** @type {?} */ EntryComponents = [
    ApproveModalComponent,
    ModalOverlayComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ApproveModalDirective = /** @class */ (function () {
    function ApproveModalDirective(modalService) {
        this.modalService = modalService;
        this.approve = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ApproveModalDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.modalService.openModal(ApproveModalComponent, {
            question: this.question,
            description: this.description,
            approve: this.submitMessage,
            reject: this.cancelMessage,
        }, {
            approve: function () {
                _this.approve.emit();
                return Promise.resolve();
            },
            reject: function () {
                _this.cancel.emit();
                return Promise.resolve();
            },
        });
    };
    ApproveModalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiApprove]',
                },] },
    ];
    /** @nocollapse */
    ApproveModalDirective.ctorParameters = function () { return [
        { type: ModalService, },
    ]; };
    ApproveModalDirective.propDecorators = {
        "question": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "description": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "submitMessage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cancelMessage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "approve": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return ApproveModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives$3 = [
    ApproveModalDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Services = [
    ModalService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Services),
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$3, Directives$3),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$3, Directives$3),
                    entryComponents: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(EntryComponents),
                },] },
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaneComponent = /** @class */ (function () {
    function PaneComponent() {
        this.opened = false;
        this.side = 'left';
        this.backdrop = true;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PaneComponent.prototype.togglePane = /**
     * @return {?}
     */
    function () {
        (this.opened ? this.closePane() : this.openPane());
    };
    /**
     * @return {?}
     */
    PaneComponent.prototype.openPane = /**
     * @return {?}
     */
    function () {
        this.opened = true;
        this.open.emit();
    };
    /**
     * @return {?}
     */
    PaneComponent.prototype.closePane = /**
     * @return {?}
     */
    function () {
        this.opened = false;
        this.close.emit();
    };
    PaneComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-pane',
                    template: "<div class=\"m-pane aui-pane\" [ngClass]=\"{ 'm-pane--open': opened, 'm-pane--left': side === 'left', 'm-pane--right': side === 'right' }\">\n\t<ng-content></ng-content>\n</div>\n<div class=\"m-overlay m-overlay__pane is-active\" *ngIf=\"opened && backdrop\" (click)=\"closePane()\"></div>\n",
                    styles: [".m-pane{background-color:#fff;width:22.5rem;height:100%;z-index:100}.m-pane__content{height:100%;overflow-y:scroll}.m-pane--left{position:absolute;left:-22.5rem;transition:left .3s cubic-bezier(.4,0,.2,1)}.m-pane--left.m-pane--open{left:0}.m-pane--right{position:absolute;right:-22.5rem;transition:right .3s cubic-bezier(.4,0,.2,1)}.m-pane--right.m-pane--open{right:0}"],
                },] },
    ];
    /** @nocollapse */
    PaneComponent.propDecorators = {
        "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "side": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$4 = [
    PaneComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaneModule = /** @class */ (function () {
    function PaneModule() {
    }
    PaneModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$4),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(Components$4),
                },] },
    ];
    return PaneModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.closeOnSelected = true;
        this.title = 'Onderweg';
        this.open = false;
        this.items = [];
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?=} open
     * @return {?}
     */
    SidebarComponent.prototype.toggle = /**
     * @param {?=} open
     * @return {?}
     */
    function (open) {
        if (open === void 0) { open = !this.open; }
        this.open = open;
        if (open) {
            this.opened.emit();
        }
        else {
            this.closed.emit();
        }
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.itemClicked = /**
     * @return {?}
     */
    function () {
        if (this.closeOnSelected) {
            this.toggle(false);
        }
    };
    SidebarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-sidebar',
                    template: "<div class=\"o-sidebar {{ open ? 'o-sidebar--open' : '' }}\">\n\t<div class=\"o-sidebar__header\">\n\t\t<button class=\"a-button a-button-transparent has-icon\" (click)=\"toggle(false)\">\n\t\t\t<i class=\"icon-close\"></i>\n\t\t</button>\n\t\t<h1 class=\"h6\">{{ title | uppercase }}</h1>\n\t</div>\n\t<div class=\"o-sidebar__items\">\n\t\t<aui-sidebar-item *ngFor=\"let item of items\" [item]=\"item\" (click)=\"itemClicked()\"></aui-sidebar-item>\n\t</div>\n\t<ng-content select=\".o-sidebar__footer\"></ng-content>\n</div>\n\n<div class=\"m-overlay\"\n\t*ngIf=\"open\"\n\t(click)=\"toggle(false)\">\n</div>\n",
                    styles: [".m-sidebar{height:100%;overflow:hidden;width:0;background-color:#fff;transition:width .3s cubic-bezier(.4,0,.2,1)}.m-sidebar--open{width:22.5rem}.m-sidebar__content{overflow-x:hidden;overflow-y:auto;width:22.5rem;height:100%}.m-sidebar__content--padding{padding:3rem}"],
                },] },
    ];
    /** @nocollapse */
    SidebarComponent.propDecorators = {
        "closeOnSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "closed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return SidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarItemComponent = /** @class */ (function () {
    function SidebarItemComponent() {
    }
    Object.defineProperty(SidebarItemComponent.prototype, "itemClassList", {
        get: /**
         * @return {?}
         */
        function () {
            return "o-sidebar__item " + Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"])(this.item, 'classList', '');
        },
        enumerable: true,
        configurable: true
    });
    SidebarItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-sidebar-item',
                    template: "<ng-container *ngIf=\"item.href\">\n\t<a href=\"{{item.href}}\" [style.border-color]=\"item.theme?.color\">\n\t\t<img *ngIf=\"item.icon\" src=\"{{item.icon}}\" />\n\t\t<h2 class=\"h5\">{{item.label}}</h2>\n\t</a>\n</ng-container>\n<ng-container *ngIf=\"item.routerLink\">\n\t<a [routerLink]=\"item.routerLink\" [style.border-color]=\"item.theme?.color\">\n\t\t<img *ngIf=\"item.icon\" src=\"{{item.icon}}\" />\n\t\t<h2 class=\"h5\">{{item.label}}</h2>\n\t</a>\n</ng-container>\n\n<ng-container *ngFor=\"let itm of item.items\">\n\t<aui-sidebar-item [item]=\"itm\"></aui-sidebar-item>\n</ng-container>\n",
                },] },
    ];
    /** @nocollapse */
    SidebarItemComponent.propDecorators = {
        "itemClassList": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] },],
        "item": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return SidebarItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$5 = [
    SidebarComponent,
    SidebarItemComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    ],
                    declarations: [
                        Components$5,
                    ],
                    exports: [
                        Components$5,
                    ],
                },] },
    ];
    return SidebarModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sYXlvdXQvbGliL2Nvb2tpZS1jb25zZW50L2Nvb2tpZS1jb25zZW50LmNvbmYudHMiLCJuZzovL2xheW91dC9saWIvY29va2llLWNvbnNlbnQvc2VydmljZXMvY29va2llLWNvbnNlbnQuc2VydmljZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9jb29raWUtY29uc2VudC9jb29raWUtY29uc2VudC5tb2R1bGUudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvc3ViZm9vdGVyL3N1YmZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2RpcmVjdGl2ZXMvYm90dG9tLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9mb290ZXIvZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9mb290ZXIvZm9vdGVyLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9sb2dvLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9kaXJlY3RpdmVzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9oZWFkZXIuY29uZi50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaGVyby1jdGEuZGlyZWN0aXZlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlcm8vY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlcm8vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaGVyby1jYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvaGVyby9oZXJvLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9jbGFzc2VzL21vZGFsLmFic3RyYWN0LnRzIiwibmc6Ly9sYXlvdXQvbGliL21vZGFsL2NvbXBvbmVudHMvbW9kYWwtb3ZlcmxheS9tb2RhbC1vdmVybGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9sYXlvdXQvbGliL21vZGFsL2NvbXBvbmVudHMvYXBwcm92ZS1tb2RhbC9hcHByb3ZlLW1vZGFsLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL21vZGFsL2RpcmVjdGl2ZXMvYXBwcm92ZS5kaXJlY3RpdmUudHMiLCJuZzovL2xheW91dC9saWIvbW9kYWwvZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9zZXJ2aWNlcy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9tb2RhbC9tb2RhbC5tb2R1bGUudHMiLCJuZzovL2xheW91dC9saWIvcGFuZS9jb21wb25lbnRzL3BhbmUvcGFuZS5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvcGFuZS9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL3BhbmUvcGFuZS5tb2R1bGUudHMiLCJuZzovL2xheW91dC9saWIvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXItaXRlbS9zaWRlYmFyLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9sYXlvdXQvbGliL3NpZGViYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9zaWRlYmFyL3NpZGViYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29raWVDb25zZW50Q29uZmlnIH0gZnJvbSAnLi90eXBlcy9jb29raWUtY29uc2VudC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTlNFTlRfQ09ORklHOiBDb29raWVDb25zZW50Q29uZmlnID0ge1xuXHRhdXRvSW5pdDogdHJ1ZSxcblx0Y29udGVudDoge1xuXHRcdG1lc3NhZ2U6ICdXZSBtYWtlIHVzZSBvZiBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcblx0XHRkaXNtaXNzOiAnT0snLFxuXHRcdGxpbms6ICdMZWFybiBtb3JlJyxcblx0XHRocmVmOiAnaHR0cDovL2Nvb2tpZXBlZGlhLmNvLnVrL2FsbC1hYm91dC1jb29raWVzJyxcblx0fSxcblx0Y29va2llOiB7XG5cdFx0bmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcblx0XHRwYXRoOiAnLycsXG5cdFx0ZG9tYWluOiAnJyxcblx0XHRleHBpcnlEYXlzOiAzNjUsXG5cdH0sXG5cdGVsZW1lbnRzOiB7XG5cdFx0bWVzc2FnZWxpbms6ICc8cCBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiB0YWJpbmRleD1cIjBcIiBocmVmPVwie3tocmVmfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e2xpbmt9fTwvYT48L3A+JywgLy8gdHNsaW50OmRpc2FibGUtbGluZTptYXgtbGluZS1sZW5ndGhcblx0XHRkaXNtaXNzOiAnPGJ1dHRvbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYS1idXR0b24gY2MtYnRuIGNjLWRpc21pc3NcIj57e2Rpc21pc3N9fTwvYnV0dG9uPicsXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgQ09PS0lFX0NPTlNFTlRfQ09ORklHX1JPT1QgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29va2llQ29uc2VudENvbmZpZz4oJ2Nvb2tpZUNvbnNlbnRDb25maWdSb290Jyk7XG5leHBvcnQgY29uc3QgQ09PS0lFX0NPTlNFTlRfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvb2tpZUNvbnNlbnRDb25maWc+KCdjb29raWVDb25zZW50Q29uZmlnJyk7XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5pbXBvcnQgeyBDT09LSUVfQ09OU0VOVF9DT05GSUcsIERFRkFVTFRfQ09OU0VOVF9DT05GSUcgfSBmcm9tICcuLi9jb29raWUtY29uc2VudC5jb25mJztcbmltcG9ydCB7IENvb2tpZUNvbnNlbnRDb25maWcgfSBmcm9tICcuLi90eXBlcy9jb29raWUtY29uc2VudC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb29raWVjb25zZW50U2VydmljZSB7XG5cdHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVkOiBCb29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT09LSUVfQ09OU0VOVF9DT05GSUcpIHByaXZhdGUgY29va2llQ29uc2VudENvbmZpZyxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSAkd2luZG93XG5cdCkge31cblxuXHRpbml0KGNvbmZpZzogQ29va2llQ29uc2VudENvbmZpZyA9IHRoaXMuY29va2llQ29uc2VudENvbmZpZyk6IHZvaWQge1xuXHRcdGlmICghY29uZmlnIHx8IE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRjb25maWcgPSBERUZBVUxUX0NPTlNFTlRfQ09ORklHO1xuXHRcdH1cblxuXHRcdGlmIChDb29raWVjb25zZW50U2VydmljZS5pbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuIGNvbnNvbGUud2FybignQ29va2llIGNvbnNlbnQgaXMgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuJHdpbmRvdyB8fCAodGhpcy4kd2luZG93ICYmICF0aGlzLiR3aW5kb3cuY29va2llY29uc2VudCkpIHtcblx0XHRcdHJldHVybiBjb25zb2xlLndhcm4oJ0Nvb2tpZSBjb25zZW50IGlzIG5vdCBsb2FkZWQhJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kd2luZG93LmNvb2tpZWNvbnNlbnQuaW5pdGlhbGlzZShtZXJnZSh0aGlzLmNvb2tpZUNvbnNlbnRDb25maWcsIGNvbmZpZykpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV2luZG93TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgJ2Nvb2tpZWNvbnNlbnQnO1xuXG5pbXBvcnQgeyBDb29raWVjb25zZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29va2llLWNvbnNlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDT09LSUVfQ09OU0VOVF9DT05GSUdfUk9PVCwgQ09PS0lFX0NPTlNFTlRfQ09ORklHLCBERUZBVUxUX0NPTlNFTlRfQ09ORklHIH0gZnJvbSAnLi9jb29raWUtY29uc2VudC5jb25mJztcbmltcG9ydCB7IENvb2tpZUNvbnNlbnRDb25maWcgfSBmcm9tICcuL3R5cGVzL2Nvb2tpZS1jb25zZW50LnR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbmZpZyhjb29raWVDb25zZW50Q29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnKTogQ29va2llQ29uc2VudENvbmZpZyB7XG5cdHJldHVybiBtZXJnZShERUZBVUxUX0NPTlNFTlRfQ09ORklHLCBjb29raWVDb25zZW50Q29uZmlnKTtcbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRXaW5kb3dNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdENvb2tpZWNvbnNlbnRTZXJ2aWNlLFxuXHRcdHsgcHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHLCB1c2VWYWx1ZTogREVGQVVMVF9DT05TRU5UX0NPTkZJRyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb29raWVjb25zZW50TW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoY29va2llQ29uc2VudENvbmZpZzogQ29va2llQ29uc2VudENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogQ29va2llY29uc2VudE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IENPT0tJRV9DT05TRU5UX0NPTkZJR19ST09ULCB1c2VWYWx1ZTogY29va2llQ29uc2VudENvbmZpZyB9LFxuXG5cdFx0XHRcdC8vIE1lcmdlIHRoZSBmb3JSb290IGNvbmZpZyB3aXRoIG91ciBkZWZhdWx0IGNvbmZpZyAoQU9UIHByb29mKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHLFxuXHRcdFx0XHRcdHVzZUZhY3Rvcnk6IHNldENvbmZpZyxcblx0XHRcdFx0XHRkZXBzOiBbQ09PS0lFX0NPTlNFTlRfQ09ORklHX1JPT1RdLFxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdENvb2tpZWNvbnNlbnRTZXJ2aWNlLFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT09LSUVfQ09OU0VOVF9DT05GSUcpIGNvbmZpZzogQ29va2llQ29uc2VudENvbmZpZyA9IERFRkFVTFRfQ09OU0VOVF9DT05GSUcsXG5cdFx0cHJpdmF0ZSBjb29raWVjb25zZW50U2VydmljZTogQ29va2llY29uc2VudFNlcnZpY2Vcblx0KSB7XG5cdFx0aWYgKGNvbmZpZy5hdXRvSW5pdCkge1xuXHRcdFx0dGhpcy5jb29raWVjb25zZW50U2VydmljZS5pbml0KCk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY29weXJpZ2h0Jyxcblx0dGVtcGxhdGU6IGA8c3Bhbj4mY29weTsge3sgY3VycmVudFllYXIgfX0ge3sgZG9tYWluIH19PC9zcGFuPlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvcHlyaWdodENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGRvbWFpbj86IFN0cmluZztcblxuXHRwdWJsaWMgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZvb3RlckNvbnRlbnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29udGVudERpcmVjdGl2ZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRDaGVja2VkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb290ZXJDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1mb290ZXInLFxuXHR0ZW1wbGF0ZTogYDxmb290ZXIgY2xhc3M9XCJhdWktZm9vdGVyXCIgW25nQ2xhc3NdPVwieydleHRlbmRlZCc6IGlzRXh0ZW5kZWR9XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUZvb3RlckNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlGb290ZXJCb3R0b21dXCI+PC9uZy1jb250ZW50PlxuPC9mb290ZXI+XG5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRAQ29udGVudENoaWxkKEZvb3RlckNvbnRlbnREaXJlY3RpdmUpIGZvb3RlckNvbnRlbnQ6IEZvb3RlckNvbnRlbnREaXJlY3RpdmU7XG5cdHB1YmxpYyBpc0V4dGVuZGVkOiBCb29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblx0XHRjb25zdCBoYXNDb2xzID0gdGhpcy5mb290ZXJDb250ZW50ICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3Qgc2hvdWxkVXBkYXRlID0gaGFzQ29scyAhPT0gdGhpcy5pc0V4dGVuZGVkO1xuXG5cdFx0aWYgKHNob3VsZFVwZGF0ZSkge1xuXHRcdFx0dGhpcy5pc0V4dGVuZGVkID0gaGFzQ29scztcblx0XHRcdHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXN1YmZvb3RlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm8tZm9vdGVyX19sYWJlbFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiby1mb290ZXJfX2J1dHRvbiBhLWJ1dHRvbiBhLWJ1dHRvbi0tc2Vjb25kYXJ5IGhhcy1pY29uXCIgKGNsaWNrKT1cImdvVG9Ub3AoKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LXVwXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3ViRm9vdGVyQ29tcG9uZW50IHtcblx0cHVibGljIGdvVG9Ub3AgPSAoKSA9PiB7XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb3B5cmlnaHRDb21wb25lbnQgfSBmcm9tICcuL2NvcHlyaWdodC9jb3B5cmlnaHQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJmb290ZXIvc3ViZm9vdGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRDb3B5cmlnaHRDb21wb25lbnQsXG5cdEZvb3RlckNvbXBvbmVudCxcblx0U3ViRm9vdGVyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRm9vdGVyQm90dG9tXScsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckJvdHRvbURpcmVjdGl2ZSB7fVxuIiwiaW1wb3J0IHsgRm9vdGVyQm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9ib3R0b20uZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvb3RlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRlbnQuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IERpcmVjdGl2ZXMgPSBbXG5cdEZvb3RlckJvdHRvbURpcmVjdGl2ZSxcblx0Rm9vdGVyQ29udGVudERpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJNb2R1bGUge1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thdWlIZWFkZXJMb2dvXScsXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckxvZ29EaXJlY3RpdmUge31cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1aUhlYWRlckNvbnRlbnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29udGVudERpcmVjdGl2ZSB7XG5cdEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIHB1YmxpYyBzdHlsZURpc3BsYXkgPSAnYmxvY2snO1xuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIHB1YmxpYyBzdHlsZUhlaWdodCA9ICcxMDAlJztcbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T25Jbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29udGVudENoaWxkLFxuXHRBZnRlckNvbnRlbnRDaGVja2VkLFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0SW5qZWN0LFxuXHRQTEFURk9STV9JRCxcblx0RWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEhlYWRyb29tIH0gZnJvbSAnQGpzcHJkcy9oZWFkcm9vbS50cyc7XG5cbmltcG9ydCB7IEhlYWRlckxvZ29EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2xvZ28uZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbnRlbnQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWhlYWRlcicsXG5cdHRlbXBsYXRlOiBgPGhlYWRlciBjbGFzcz1cIm8taGVhZGVyIG8taGVhZGVyLS1maXhlZCBhdWktaGVhZGVyXCIgW25nQ2xhc3NdPVwieydoYXMtbG9nbyc6IGhhc0xvZ299XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlckxvZ29dXCI+PC9uZy1jb250ZW50PlxuXG4gICAgPGRpdiBjbGFzcz1cImF1aS1oZWFkZXJfX2NvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlckNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fbWVudS1pdGVtc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlck1lbnVJdGVtXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2hlYWRlcj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5hdWktaGVhZGVye3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LmF1aS1oZWFkZXIuaGVhZGVyLS1waW5uZWR7dG9wOjB9LmF1aS1oZWFkZXIuaGVhZGVyLS11bnBpbm5lZHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9LmF1aS1oZWFkZXIuaGFzLWxvZ28uaGVhZGVyLS11bnBpbm5lZHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzAwJSl9LmF1aS1oZWFkZXIgLmF1aS1oZWFkZXJfX2NvbnRlbnQtd3JhcHBlcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2hlaWdodDoxMDAlfS5hdWktaGVhZGVyIC5hdWktaGVhZGVyX19jb250ZW50e2ZsZXg6MTtoZWlnaHQ6MTAwJX0uYXVpLWhlYWRlciAuYXVpLWhlYWRlcl9fbWVudS1pdGVtc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0QENvbnRlbnRDaGlsZChIZWFkZXJMb2dvRGlyZWN0aXZlKSBsb2dvOiBIZWFkZXJMb2dvRGlyZWN0aXZlO1xuXHRAQ29udGVudENoaWxkKEhlYWRlckNvbnRlbnREaXJlY3RpdmUpIGNvbnRlbnQ6IEhlYWRlckNvbnRlbnREaXJlY3RpdmU7XG5cdHB1YmxpYyBoYXNMb2dvOiBCb29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyBoYXNDb250ZW50OiBCb29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHt9XG5cblx0cHVibGljIHNldHVwSGVhZHJvb20oKSB7IC8vIEB0b2RvOiB1c2UgaGVhZHJvb20gb3B0aW9ucyBmcm9tIGluamVjdG9yXG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWktaGVhZGVyJyk7XG5cdFx0Y29uc3QgaGVhZCA9IG5ldyBIZWFkcm9vbShlbGVtZW50KTtcblxuXHRcdHJldHVybiBoZWFkO1xuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLnNldHVwSGVhZHJvb20oKTtcblx0XHR9XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cdFx0Y29uc3QgaGFzTG9nbyA9IHRoaXMubG9nbyAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IGhhc0NvbnRlbnQgPSB0aGlzLmNvbnRlbnQgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzaG91bGRVcGRhdGUgPSBoYXNMb2dvICE9PSB0aGlzLmhhc0xvZ28gfHwgaGFzQ29udGVudCAhPT0gdGhpcy5oYXNDb250ZW50O1xuXG5cdFx0aWYgKHNob3VsZFVwZGF0ZSkge1xuXHRcdFx0dGhpcy5oYXNMb2dvID0gaGFzTG9nbztcblx0XHRcdHRoaXMuaGFzQ29udGVudCA9IGhhc0NvbnRlbnQ7XG5cblx0XHRcdHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thdWlIZWFkZXJNZW51SXRlbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNZW51SXRlbURpcmVjdGl2ZSB7fVxuIiwiaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRIZWFkZXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgSGVhZGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyTG9nb0RpcmVjdGl2ZSB9IGZyb20gJy4vbG9nby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyTWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0SGVhZGVyQ29udGVudERpcmVjdGl2ZSxcblx0SGVhZGVyTG9nb0RpcmVjdGl2ZSxcblx0SGVhZGVyTWVudUl0ZW1EaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTW9kdWxlIHt9IC8vIEB0b2RvOiBhZGQgZm9ycm9vdCB3aXRoIGhlYWRyb29tIG9wdGlvbnNcbiIsImV4cG9ydCBjb25zdCBIRUFEUk9PTU9QVElPTlMgPSB7XG5cdG9mZnNldDogMjAwLFxuXHR0b2xlcmFuY2U6IDUsXG5cdGNsYXNzZXM6IHtcblx0XHRpbml0aWFsOiAnJyxcblx0XHRwaW5uZWQ6ICdoZWFkZXItLXBpbm5lZCcsXG5cdFx0dW5waW5uZWQ6ICdoZWFkZXItLXVucGlubmVkJyxcblx0XHR0b3A6ICdoZWFkZXItLXRvcCcsXG5cdFx0bm90VG9wOiAnaGVhZGVyLS1ub3QtdG9wJyxcblx0XHRib3R0b206ICdoZWFkZXItLWJvdHRvbScsXG5cdFx0Ym90Qm90dG9tOiAnaGVhZGVyLS1ub3QtYm90dG9tJyxcblx0fSxcbn07XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlIZXJvQ3RhXScsXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9DdGFEaXJlY3RpdmUge1xuXHRASG9zdEJpbmRpbmcoKSBjbGFzcyA9ICdhdWktaGVyby1jdGEnO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm9DdGFEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2hlcm8tY3RhLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1oZXJvJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiaW5uZXJcIiBbbmdDbGFzc109XCJ7J2hhcy1jdGEnOiBoYXNDdGF9XCI+XG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlIZXJvQ2FyZF1cIj48L25nLWNvbnRlbnQ+XG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlIZXJvQ3RhXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2JhY2tncm91bmQ6I2YzZjNmMztib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYjBiMGIwO21pbi1oZWlnaHQ6MTJyZW07cGFkZGluZy10b3A6NC41cmVtfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDVyZW0pezpob3N0e3BhZGRpbmctdG9wOjEuNXJlbX19Omhvc3QgLmJ1dHRvbnN7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDoxMDAlfTpob3N0IC50YWJze2FsaWduLXNlbGY6ZmxleC1lbmQ7d2lkdGg6MTAwJTtwYWRkaW5nLWJvdHRvbToxLjVyZW19Omhvc3QgLnRhYnMgLnRhYnMtbGlzdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbjowO3BhZGRpbmc6MDtsaXN0LXN0eWxlOm5vbmV9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW17bGlzdC1zdHlsZTpub25lO21hcmdpbi1ib3R0b206LTFweDtwYWRkaW5nOjB9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMHJlbSl7Omhvc3QgLnRhYnMgLnRhYnMtbGlzdHtmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW17bWFyZ2luLXJpZ2h0Oi0xcHh9fTpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG57YmFja2dyb3VuZDojZjNmM2YzO2JvcmRlcjoxcHggc29saWQgI2IwYjBiMDtjb2xvcjojMDgxZjJjO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzouMzc1cmVtIDEuNXJlbTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0LHBhZGRpbmcgLjJzIGVhc2Utb3V0fTpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG46YWN0aXZlOm5vdCguYWN0aXZlKSw6aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbSAudGFicy1saXN0LWl0ZW0tYnRuOmhvdmVyOm5vdCguYWN0aXZlKSw6aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbSAudGFicy1saXN0LWl0ZW0tYnRuOnZpc2l0ZWQ6bm90KC5hY3RpdmUpe3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW0gLnRhYnMtbGlzdC1pdGVtLWJ0bi5hY3RpdmV7YmFja2dyb3VuZDojZmZmO2ZvbnQtd2VpZ2h0OjcwMH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYycmVtKXs6aG9zdHtwYWRkaW5nLXRvcDo2cmVtO2Rpc3BsYXk6ZmxleH06aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbXthbGlnbi1zZWxmOmZsZXgtZW5kfTpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG4uYWN0aXZle3BhZGRpbmc6Ljc1cmVtIDEuNXJlbX06aG9zdCAuaW5uZXJ7bWFyZ2luOjA7cGFkZGluZzowO21heC13aWR0aDoxMDAlO2ZsZXg6MTthbGlnbi1zZWxmOmZsZXgtZW5kfTpob3N0IC5pbm5lci5oYXMtY3RhIDo6bmctZGVlcCAuYXVpLWhlcm8tY2FyZDo6YWZ0ZXIsOmhvc3QgLmlubmVyLmhhcy1jdGEgOjpuZy1kZWVwIC5hdWktaGVyby1jYXJkOjpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTotMTJweDtib3JkZXItdG9wOjEzcHggc29saWQgcmdiYSgwLDAsMCwuMil9Omhvc3QgLmlubmVyLmhhcy1jdGEgOjpuZy1kZWVwIC5hdWktaGVyby1jYXJkOjpiZWZvcmV7Ym9yZGVyLWxlZnQ6NnB4IHNvbGlkIHRyYW5zcGFyZW50O2xlZnQ6LS4zNzVyZW19Omhvc3QgLmlubmVyLmhhcy1jdGEgOjpuZy1kZWVwIC5hdWktaGVyby1jYXJkOjphZnRlcntib3JkZXItcmlnaHQ6NnB4IHNvbGlkIHRyYW5zcGFyZW50O3JpZ2h0Oi0uMzc1cmVtfTpob3N0IC50YWJze3BhZGRpbmctYm90dG9tOjA7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdCAudGFicyAudGFicy1saXN0e2p1c3RpZnktY29udGVudDpjZW50ZXJ9Omhvc3QgOjpuZy1kZWVwIC5hdWktaGVyby1pbm5lcntwYWRkaW5nOjEuNXJlbX06aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmQsOmhvc3QgOjpuZy1kZWVwIC5hdWktaGVyby13cmFwcGVye2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzt3aWR0aDoxMDAlO21heC13aWR0aDozNnJlbX06aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmR7YmFja2dyb3VuZC1jb2xvcjojZmZmO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MS41cmVtIDEuNXJlbSAuNzVyZW19Omhvc3QgOjpuZy1kZWVwIC5hdWktaGVyby1jdGF7YmFja2dyb3VuZC1jb2xvcjojZmZmO3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7bWluLWhlaWdodDo2cmVtO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MH19YF0sXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQge1xuXHRAQ29udGVudENoaWxkKEhlcm9DdGFEaXJlY3RpdmUpIGhhc0N0YTogSGVyb0N0YURpcmVjdGl2ZTtcbn1cbiIsImltcG9ydCB7IEhlcm9Db21wb25lbnQgfSBmcm9tICcuL2hlcm8vaGVyby5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0SGVyb0NvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlIZXJvQ2FyZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvQ2FyZERpcmVjdGl2ZSB7XG5cdEBIb3N0QmluZGluZygpIGNsYXNzID0gJ2F1aS1oZXJvLWNhcmQnO1xufVxuIiwiaW1wb3J0IHsgSGVyb0NhcmREaXJlY3RpdmUgfSBmcm9tICcuL2hlcm8tY2FyZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVyb0N0YURpcmVjdGl2ZSB9IGZyb20gJy4vaGVyby1jdGEuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IERpcmVjdGl2ZXMgPSBbXG5cdEhlcm9DYXJkRGlyZWN0aXZlLFxuXHRIZXJvQ3RhRGlyZWN0aXZlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0QnJvd3Nlck1vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgSGVyb01vZHVsZSB7XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudFJlZixcblx0SG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kYWxJbnN0YW5jZSB9IGZyb20gJy4uL3R5cGVzL21vZGFsLnR5cGVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1vZGFsQWJzdHJhY3QgaW1wbGVtZW50cyBNb2RhbEluc3RhbmNlIHtcblx0cHVibGljIHJlZjogQ29tcG9uZW50UmVmPE1vZGFsQWJzdHJhY3Q+ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2Vcblx0KSB7fVxuXG5cdHB1YmxpYyBjbG9zZU1vZGFsKCkge1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlTW9kYWwodGhpcy5yZWYpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEhvc3RCaW5kaW5nLFxuXHRIb3N0TGlzdGVuZXIsXG5cdEVsZW1lbnRSZWYsXG5cdENvbXBvbmVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxBYnN0cmFjdCB9IGZyb20gJy4uLy4uL2NsYXNzZXMvbW9kYWwuYWJzdHJhY3QnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbW9kYWwtb3ZlcmxheScsXG5cdHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW92ZXJsYXlfX2lubmVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsT3ZlcmxheUNvbXBvbmVudCB7XG5cdHB1YmxpYyB0aGVtZSA9ICdkYXJrJztcblx0QEhvc3RCaW5kaW5nKCdjbGFzcycpIHB1YmxpYyBnZXQgb3ZlcmxheUNsYXNzKCkge1xuXHRcdHJldHVybiBgbS1vdmVybGF5IG0tb3ZlcmxheS0tJHt0aGlzLnRoZW1lfSBpcy1hY3RpdmVgO1xuXHR9XG5cblx0cHJpdmF0ZSBtb2RhbDogQ29tcG9uZW50UmVmPE1vZGFsQWJzdHJhY3Q+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVmOiBFbGVtZW50UmVmXG5cdCkge31cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIHB1YmxpYyBjbGlja0hhbmRsZXIoZTogTW91c2VFdmVudCkge1xuXHRcdGNvbnN0IG1vZGFsID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubS1tb2RhbCcpO1xuXG5cdFx0aWYgKG1vZGFsICYmIChlLnRhcmdldCA9PT0gbW9kYWwgfHwgbW9kYWwuY29udGFpbnMoZS50YXJnZXQpKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kYWwuaW5zdGFuY2UuY2xvc2VNb2RhbCgpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRJbmplY3RhYmxlLFxuXHRJbmplY3Rvcixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRBcHBsaWNhdGlvblJlZixcblx0VHlwZSxcblx0Q29tcG9uZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IGxhc3QgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgTW9kYWxBYnN0cmFjdCB9IGZyb20gJy4uL2NsYXNzZXMvbW9kYWwuYWJzdHJhY3QnO1xuaW1wb3J0IHsgTW9kYWxSZWYsIE1vZGFsQ29tcG9uZW50UmVmLCBNb2RhbEFjdGlvbnMsIE1vZGFsT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL21vZGFsLnR5cGVzJztcbmltcG9ydCB7IE1vZGFsT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtb3ZlcmxheS9tb2RhbC1vdmVybGF5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuXHRwdWJsaWMgYWN0aXZlTW9kYWxzOiBNb2RhbFJlZltdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZlxuXHQpIHt9XG5cblx0cHVibGljIG9wZW5Nb2RhbCh0ZW1wbGF0ZTogVHlwZTxNb2RhbEFic3RyYWN0PiwgbW9kYWxEYXRhPzogYW55LCBhY3Rpb25zPzogTW9kYWxBY3Rpb25zLCBvcHRpb25zOiBNb2RhbE9wdGlvbnMgPSB7fSk6IGFueSB7XG5cdFx0Y29uc3QgbW9kYWwgPSB0aGlzLmNyZWF0ZVJlZih0ZW1wbGF0ZSk7XG5cdFx0bW9kYWwuaW5zdGFuY2UucmVmID0gbW9kYWw7XG5cdFx0bW9kYWwuaW5zdGFuY2UubW9kYWxEYXRhID0gY2xvbmVEZWVwKG1vZGFsRGF0YSk7XG5cdFx0bW9kYWwuaW5zdGFuY2UubW9kYWxBY3Rpb25zID0gYWN0aW9ucztcblxuXHRcdGNvbnN0IG92ZXJsYXkgPSB0aGlzLmNyZWF0ZVJlZihNb2RhbE92ZXJsYXlDb21wb25lbnQsIFtcblx0XHRcdFttb2RhbC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XSxcblx0XHRdKTtcblx0XHRvdmVybGF5Lmluc3RhbmNlLm1vZGFsID0gbW9kYWw7XG5cdFx0b3ZlcmxheS5pbnN0YW5jZS50aGVtZSA9IG9wdGlvbnMudGhlbWUgfHwgJ2RhcmsnO1xuXG5cdFx0dGhpcy5hY3RpdmVNb2RhbHMucHVzaCh7XG5cdFx0XHRtb2RhbDogbW9kYWwsXG5cdFx0XHRvdmVybGF5OiBvdmVybGF5LFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hcHBlbmRSZWZzKG92ZXJsYXkpO1xuXG5cdFx0cmV0dXJuIG1vZGFsO1xuXHR9XG5cblx0cHVibGljIGNsb3NlTW9kYWwobW9kYWw6IE1vZGFsQ29tcG9uZW50UmVmKTogdm9pZCB7XG5cdFx0Y29uc3QgYWN0aXZlTW9kYWxJbmRleCA9IHRoaXMuYWN0aXZlTW9kYWxzLmZpbmRJbmRleCgoaW5zdGFuY2U6IE1vZGFsUmVmKSA9PiBpbnN0YW5jZS5tb2RhbCA9PT0gbW9kYWwpO1xuXG5cdFx0aWYgKGFjdGl2ZU1vZGFsSW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aXZlTW9kYWwgPSB0aGlzLmFjdGl2ZU1vZGFsc1thY3RpdmVNb2RhbEluZGV4XTtcblxuXHRcdGFjdGl2ZU1vZGFsLm1vZGFsLmRlc3Ryb3koKTtcblx0XHRhY3RpdmVNb2RhbC5vdmVybGF5LmRlc3Ryb3koKTtcblxuXHRcdHRoaXMuYWN0aXZlTW9kYWxzLnNwbGljZShhY3RpdmVNb2RhbEluZGV4LCAxKTtcblx0fVxuXG5cdHB1YmxpYyBjbG9zZUxhc3QoKTogdm9pZCB7XG5cdFx0Y29uc3QgbGFzdE1vZGFsID0gbGFzdCh0aGlzLmFjdGl2ZU1vZGFscyk7XG5cblx0XHRpZiAobGFzdE1vZGFsKSB7XG5cdFx0XHR0aGlzLmNsb3NlTW9kYWwobGFzdE1vZGFsLm1vZGFsKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVJlZih0ZW1wbGF0ZTogVHlwZTxhbnk+LCBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSk6IENvbXBvbmVudFJlZjxhbnk+IHtcblx0XHRjb25zdCBjb21wRmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGVtcGxhdGUpO1xuXHRcdGNvbnN0IHJlZiA9IGNvbXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yLCBwcm9qZWN0YWJsZU5vZGVzKTtcblxuXHRcdHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcocmVmLmhvc3RWaWV3KTtcblx0XHRyZWYub25EZXN0cm95KCgpID0+IHRoaXMuYXBwUmVmLmRldGFjaFZpZXcocmVmLmhvc3RWaWV3KSk7XG5cblx0XHRyZXR1cm4gcmVmO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBlbmRSZWZzKC4uLmFyZ3MpOiB2b2lkIHtcblx0XHRjb25zdCBhcHBSZWYgPSBnZXQodGhpcy5hcHBSZWYsICdjb21wb25lbnRzWzBdLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQnLCBudWxsKTtcblxuXHRcdGlmICghYXBwUmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXJncy5mb3JFYWNoKChyZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB7XG5cdFx0XHRhcHBSZWYuYXBwZW5kQ2hpbGQocmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgTW9kYWxBY3Rpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvbW9kYWwudHlwZXMnO1xuaW1wb3J0IHsgTW9kYWxBYnN0cmFjdCB9IGZyb20gJy4uLy4uL2NsYXNzZXMvbW9kYWwuYWJzdHJhY3QnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hcHByb3ZlLW1vZGFsJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1tb2RhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsX19oZWFkZXIgdS1tYXJnaW4tYm90dG9tLXhzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJtLW1vZGFsX19jbG9zZSBhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tZGVmYXVsdCBoYXMtaWNvblwiPjxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICA8aDY+e3sgbW9kYWxEYXRhLnF1ZXN0aW9uIH19PC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICAgICAgICAgIDxwPnt7IG1vZGFsRGF0YS5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLW1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uXCI+e3sgbW9kYWxEYXRhLnJlamVjdCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic3VibWl0KClcIiBjbGFzcz1cImEtYnV0dG9uLW91dGxpbmVcIj57eyBtb2RhbERhdGEuYXBwcm92ZSB9fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwcm92ZU1vZGFsQ29tcG9uZW50IGV4dGVuZHMgTW9kYWxBYnN0cmFjdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBtb2RhbERhdGE6IGFueTtcblx0cHVibGljIG1vZGFsQWN0aW9uczogTW9kYWxBY3Rpb25zO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuXHQpIHtcblx0XHRzdXBlcihtb2RhbFNlcnZpY2UpO1xuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMubW9kYWxEYXRhID0gdGhpcy5tb2RhbERhdGEgfHwge1xuXHRcdFx0cXVlc3Rpb246ICdRdWVzdGlvbj8nLFxuXHRcdFx0ZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbi4uLicsXG5cdFx0XHRhcHByb3ZlOiAnT2snLFxuXHRcdFx0cmVqZWN0OiAnQ2FuY2VsJyxcblx0XHR9O1xuXHR9XG5cblx0cHVibGljIHN1Ym1pdCgpIHtcblx0XHR0aGlzLnZlcmlmeUFjdGlvbignYXBwcm92ZScpLnRoZW4oKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpO1xuXHR9XG5cblx0cHVibGljIGNsb3NlKCkge1xuXHRcdHRoaXMudmVyaWZ5QWN0aW9uKCdyZWplY3QnKS50aGVuKCgpID0+IHRoaXMuY2xvc2VNb2RhbCgpKTtcblx0fVxuXG5cdHByaXZhdGUgdmVyaWZ5QWN0aW9uKGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcblx0XHRpZiAoZ2V0KHRoaXMubW9kYWxBY3Rpb25zLCBhY3Rpb24pKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tb2RhbEFjdGlvbnNbYWN0aW9uXSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQXBwcm92ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9hcHByb3ZlLW1vZGFsL2FwcHJvdmUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtb3ZlcmxheS9tb2RhbC1vdmVybGF5LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRBcHByb3ZlTW9kYWxDb21wb25lbnQsXG5cdE1vZGFsT3ZlcmxheUNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBFbnRyeUNvbXBvbmVudHMgPSBbXG5cdEFwcHJvdmVNb2RhbENvbXBvbmVudCxcblx0TW9kYWxPdmVybGF5Q29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwcm92ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hcHByb3ZlLW1vZGFsL2FwcHJvdmUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXVpQXBwcm92ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBBcHByb3ZlTW9kYWxEaXJlY3RpdmUge1xuXHRASW5wdXQoKSBwdWJsaWMgcXVlc3Rpb247XG5cdEBJbnB1dCgpIHB1YmxpYyBkZXNjcmlwdGlvbjtcblx0QElucHV0KCkgcHVibGljIHN1Ym1pdE1lc3NhZ2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBjYW5jZWxNZXNzYWdlO1xuXHRAT3V0cHV0KCkgcHVibGljIGFwcHJvdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHt9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25DbGljaygpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5vcGVuTW9kYWwoQXBwcm92ZU1vZGFsQ29tcG9uZW50LCB7XG5cdFx0XHRxdWVzdGlvbjogdGhpcy5xdWVzdGlvbixcblx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuXHRcdFx0YXBwcm92ZTogdGhpcy5zdWJtaXRNZXNzYWdlLFxuXHRcdFx0cmVqZWN0OiB0aGlzLmNhbmNlbE1lc3NhZ2UsXG5cdFx0fSwge1xuXHRcdFx0YXBwcm92ZTogKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmFwcHJvdmUuZW1pdCgpO1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVqZWN0OiAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsLmVtaXQoKTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQXBwcm92ZU1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi9hcHByb3ZlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRBcHByb3ZlTW9kYWxEaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuXHRNb2RhbFNlcnZpY2UsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cywgRW50cnlDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uU2VydmljZXMsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdFx0Li4uRGlyZWN0aXZlcyxcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0Li4uRW50cnlDb21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXBhbmUnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLXBhbmUgYXVpLXBhbmVcIiBbbmdDbGFzc109XCJ7ICdtLXBhbmUtLW9wZW4nOiBvcGVuZWQsICdtLXBhbmUtLWxlZnQnOiBzaWRlID09PSAnbGVmdCcsICdtLXBhbmUtLXJpZ2h0Jzogc2lkZSA9PT0gJ3JpZ2h0JyB9XCI+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm0tb3ZlcmxheSBtLW92ZXJsYXlfX3BhbmUgaXMtYWN0aXZlXCIgKm5nSWY9XCJvcGVuZWQgJiYgYmFja2Ryb3BcIiAoY2xpY2spPVwiY2xvc2VQYW5lKClcIj48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AubS1wYW5le2JhY2tncm91bmQtY29sb3I6I2ZmZjt3aWR0aDoyMi41cmVtO2hlaWdodDoxMDAlO3otaW5kZXg6MTAwfS5tLXBhbmVfX2NvbnRlbnR7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteTpzY3JvbGx9Lm0tcGFuZS0tbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0yMi41cmVtO3RyYW5zaXRpb246bGVmdCAuM3MgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSl9Lm0tcGFuZS0tbGVmdC5tLXBhbmUtLW9wZW57bGVmdDowfS5tLXBhbmUtLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0yMi41cmVtO3RyYW5zaXRpb246cmlnaHQgLjNzIGN1YmljLWJlemllciguNCwwLC4yLDEpfS5tLXBhbmUtLXJpZ2h0Lm0tcGFuZS0tb3BlbntyaWdodDowfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lQ29tcG9uZW50IHtcblx0QElucHV0KCkgb3BlbmVkID0gZmFsc2U7XG5cdEBJbnB1dCgpIHNpZGUgPSAnbGVmdCc7XG5cdEBJbnB1dCgpIGJhY2tkcm9wID0gdHJ1ZTtcblx0QE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgdG9nZ2xlUGFuZSgpIHtcblx0XHQodGhpcy5vcGVuZWQgPyB0aGlzLmNsb3NlUGFuZSgpIDogdGhpcy5vcGVuUGFuZSgpKTtcblx0fVxuXG5cdHB1YmxpYyBvcGVuUGFuZSgpIHtcblx0XHR0aGlzLm9wZW5lZCA9IHRydWU7XG5cdFx0dGhpcy5vcGVuLmVtaXQoKTtcblx0fVxuXG5cdHB1YmxpYyBjbG9zZVBhbmUoKSB7XG5cdFx0dGhpcy5vcGVuZWQgPSBmYWxzZTtcblx0XHR0aGlzLmNsb3NlLmVtaXQoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgUGFuZUNvbXBvbmVudCB9IGZyb20gJy4vcGFuZS9wYW5lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRQYW5lQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVNb2R1bGUge1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2lkZWJhckl0ZW0sIFNpZGViYXJTdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NpZGViYXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc2lkZWJhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tc2lkZWJhciB7eyBvcGVuID8gJ28tc2lkZWJhci0tb3BlbicgOiAnJyB9fVwiPlxuXHQ8ZGl2IGNsYXNzPVwiby1zaWRlYmFyX19oZWFkZXJcIj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tdHJhbnNwYXJlbnQgaGFzLWljb25cIiAoY2xpY2spPVwidG9nZ2xlKGZhbHNlKVwiPlxuXHRcdFx0PGkgY2xhc3M9XCJpY29uLWNsb3NlXCI+PC9pPlxuXHRcdDwvYnV0dG9uPlxuXHRcdDxoMSBjbGFzcz1cImg2XCI+e3sgdGl0bGUgfCB1cHBlcmNhc2UgfX08L2gxPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cIm8tc2lkZWJhcl9faXRlbXNcIj5cblx0XHQ8YXVpLXNpZGViYXItaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFtpdGVtXT1cIml0ZW1cIiAoY2xpY2spPVwiaXRlbUNsaWNrZWQoKVwiPjwvYXVpLXNpZGViYXItaXRlbT5cblx0PC9kaXY+XG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIi5vLXNpZGViYXJfX2Zvb3RlclwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibS1vdmVybGF5XCJcblx0Km5nSWY9XCJvcGVuXCJcblx0KGNsaWNrKT1cInRvZ2dsZShmYWxzZSlcIj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYC5tLXNpZGViYXJ7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjA7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RyYW5zaXRpb246d2lkdGggLjNzIGN1YmljLWJlemllciguNCwwLC4yLDEpfS5tLXNpZGViYXItLW9wZW57d2lkdGg6MjIuNXJlbX0ubS1zaWRlYmFyX19jb250ZW50e292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bzt3aWR0aDoyMi41cmVtO2hlaWdodDoxMDAlfS5tLXNpZGViYXJfX2NvbnRlbnQtLXBhZGRpbmd7cGFkZGluZzozcmVtfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGNsb3NlT25TZWxlY3RlZCA9IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyB0aXRsZSA9ICdPbmRlcndlZyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcGVuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtczogU2lkZWJhckl0ZW1bXSA9IFtdO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cHVibGljIHRvZ2dsZShvcGVuOiBib29sZWFuID0gIXRoaXMub3Blbikge1xuXHRcdHRoaXMub3BlbiA9IG9wZW47XG5cblx0XHRpZiAob3Blbikge1xuXHRcdFx0dGhpcy5vcGVuZWQuZW1pdCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlZC5lbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGl0ZW1DbGlja2VkKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNsb3NlT25TZWxlY3RlZCkge1xuXHRcdFx0dGhpcy50b2dnbGUoZmFsc2UpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0SG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgU2lkZWJhckl0ZW0gfSBmcm9tICcuLi8uLi90eXBlcy9zaWRlYmFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNpZGViYXItaXRlbScsXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0uaHJlZlwiPlxuXHQ8YSBocmVmPVwie3tpdGVtLmhyZWZ9fVwiIFtzdHlsZS5ib3JkZXItY29sb3JdPVwiaXRlbS50aGVtZT8uY29sb3JcIj5cblx0XHQ8aW1nICpuZ0lmPVwiaXRlbS5pY29uXCIgc3JjPVwie3tpdGVtLmljb259fVwiIC8+XG5cdFx0PGgyIGNsYXNzPVwiaDVcIj57e2l0ZW0ubGFiZWx9fTwvaDI+XG5cdDwvYT5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0ucm91dGVyTGlua1wiPlxuXHQ8YSBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIiBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cIml0ZW0udGhlbWU/LmNvbG9yXCI+XG5cdFx0PGltZyAqbmdJZj1cIml0ZW0uaWNvblwiIHNyYz1cInt7aXRlbS5pY29ufX1cIiAvPlxuXHRcdDxoMiBjbGFzcz1cImg1XCI+e3tpdGVtLmxhYmVsfX08L2gyPlxuXHQ8L2E+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRtIG9mIGl0ZW0uaXRlbXNcIj5cblx0PGF1aS1zaWRlYmFyLWl0ZW0gW2l0ZW1dPVwiaXRtXCI+PC9hdWktc2lkZWJhci1pdGVtPlxuPC9uZy1jb250YWluZXI+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFySXRlbUNvbXBvbmVudCB7XG5cdEBIb3N0QmluZGluZygnY2xhc3MnKSBwdWJsaWMgZ2V0IGl0ZW1DbGFzc0xpc3QoKSB7XG5cdFx0cmV0dXJuIGBvLXNpZGViYXJfX2l0ZW0gJHtnZXQodGhpcy5pdGVtLCAnY2xhc3NMaXN0JywgJycpfWA7XG5cdH1cblx0QElucHV0KCkgcHVibGljIGl0ZW06IFNpZGViYXJJdGVtO1xufVxuIiwiaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1pdGVtL3NpZGViYXItaXRlbS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0U2lkZWJhckNvbXBvbmVudCxcblx0U2lkZWJhckl0ZW1Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudHMiLCJEaXJlY3RpdmVzIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBR2Esc0JBQXNCLEdBQXdCO0lBQzFELFFBQVEsRUFBRSxJQUFJO0lBQ2QsT0FBTyxFQUFFO1FBQ1IsT0FBTyxFQUFFLDhFQUE4RTtRQUN2RixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSw0Q0FBNEM7S0FDbEQ7SUFDRCxNQUFNLEVBQUU7UUFDUCxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLEVBQUU7UUFDVixVQUFVLEVBQUUs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

/***/ }),

/***/ "./dist/localstorage/fesm5/localstorage.js":
/*!*************************************************!*\
  !*** ./dist/localstorage/fesm5/localstorage.js ***!
  \*************************************************/
/*! exports provided: LocalstorageModule, LocalstorageHelper, LocalstorageService, LOCALSTORAGE_CONFIG, DEFAULT_LOCALSTORAGE_CONFIG, storage, LocalstorageStoreModule, LocalstorageReduxPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageModule", function() { return LocalstorageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageHelper", function() { return LocalstorageHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALSTORAGE_CONFIG", function() { return LOCALSTORAGE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOCALSTORAGE_CONFIG", function() { return DEFAULT_LOCALSTORAGE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageStoreModule", function() { return LocalstorageStoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageReduxPlugin", function() { return LocalstorageReduxPlugin; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/utils */ "./dist/utils/fesm5/utils.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_first__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/first */ "./node_modules/rxjs-compat/_esm5/add/operator/first.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LOCALSTORAGE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('localstorageConfig');
var /** @type {?} */ DEFAULT_LOCALSTORAGE_CONFIG = {
    storageType: 'localStorage',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LocalstorageHelper = /** @class */ (function () {
    function LocalstorageHelper() {
    }
    // select data from the storage for the provided selector
    /**
     * @param {?} storage
     * @param {?} selector
     * @return {?}
     */
    LocalstorageHelper.select = /**
     * @param {?} storage
     * @param {?} selector
     * @return {?}
     */
    function (storage, selector) {
        if (!storage) {
            return null;
        }
        if (!selector) {
            return storage;
        }
        if (typeof selector === 'function') {
            return selector(storage);
        }
        if (Array.isArray(selector)) {
            return this.verifyPath(storage, selector);
        }
        return this.verifyPath(storage, [selector]);
    };
    // verify the key matches with the selector
    // property selector: compare the key with the selector
    // path selector: verify the key is the last item in the path
    // function selector: always return true
    /**
     * @param {?} key
     * @param {?} selector
     * @return {?}
     */
    LocalstorageHelper.keyMatches = /**
     * @param {?} key
     * @param {?} selector
     * @return {?}
     */
    function (key, selector) {
        var /** @type {?} */ keyMatchesSelector = key === selector;
        var /** @type {?} */ keyInSelector = Array.isArray(selector) ? selector.indexOf(key) >= 0 : false;
        var /** @type {?} */ selectorIsFunction = typeof selector === 'function';
        return keyMatchesSelector || keyInSelector || selectorIsFunction;
    };
    // verify a path exists in an object
    /**
     * @param {?=} data
     * @param {?=} selector
     * @return {?}
     */
    LocalstorageHelper.verifyPath = /**
     * @param {?=} data
     * @param {?=} selector
     * @return {?}
     */
    function (data, selector) {
        if (!data || !selector) {
            return null;
        }
        var /** @type {?} */ curr = data;
        for (var /** @type {?} */ i = 0; i < selector.length; i += 1) {
            if (curr.hasOwnProperty(selector[i])) {
                curr = curr[selector[i]];
                continue;
            }
            return null;
        }
        return curr;
    };
    /**
     * @param {?=} state
     * @param {?=} selector
     * @param {?=} newValue
     * @return {?}
     */
    LocalstorageHelper.updateOrCreatePath = /**
     * @param {?=} state
     * @param {?=} selector
     * @param {?=} newValue
     * @return {?}
     */
    function (state, selector, newValue) {
        if (!state || !selector) {
            return null;
        }
        var /** @type {?} */ curr = state;
        var /** @type {?} */ i = 0;
        for (i = 0; i < selector.length; i += 1) {
            if (!curr.hasOwnProperty(selector[i])) {
                curr[selector[i]] = {};
            }
            if (i === selector.length - 1) {
                break;
            }
            curr = curr[selector[i]];
        }
        curr[selector[i]] = newValue;
        return state;
    };
    /**
     * @param {?} key
     * @param {?} json
     * @return {?}
     */
    LocalstorageHelper.parseJSON = /**
     * @param {?} key
     * @param {?} json
     * @return {?}
     */
    function (key, json) {
        try {
            return JSON.parse(json);
        }
        catch (/** @type {?} */ e) {
            console.warn("Parsing key \"" + key + "\" in localstorage failed, ignoring value."); // tslint:disable-line:no-console
            return String(json);
        }
    };
    LocalstorageHelper.comparator = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"];
    return LocalstorageHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage() {
        this.store = new Map();
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MemoryStorage.prototype, "storage", {
        get: /**
         * @return {?}
         */
        function () {
            return Array.from(this.store.entries()).reduce(function (acc, curr) {
                return (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, acc, (_a = {}, _a[curr[0]] = curr[1], _a)));
                var _a;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    MemoryStorage.prototype.key = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return Array.from(this.store.keys())[index];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MemoryStorage.prototype.getItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.store.get(key);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    MemoryStorage.prototype.setItem = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.store.set(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MemoryStorage.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.store.delete(key);
    };
    /**
     * @return {?}
     */
    MemoryStorage.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.store.clear();
    };
    return MemoryStorage;
}());
var /** @type {?} */ storage = new MemoryStorage();
var memoryStorage = new Proxy(storage, {
    get: function (target, name, receiver) {
        if (name in target) {
            return Reflect.get(target, name, receiver);
        }
        if (name in target.__proto__) {
            return target.__proto__[name];
        }
        if (target.storage) {
            return target.getItem(name);
        }
    },
    ownKeys: function (target) {
        return Object.keys(target.storage); // return stored keys when storage keys are requested
    },
    getOwnPropertyDescriptor: function () {
        return {
            enumerable: true,
            configurable: true,
        };
    },
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LocalstorageService = /** @class */ (function () {
    function LocalstorageService(localstorageConfig, $window) {
        this.localstorageConfig = localstorageConfig;
        this.$window = $window;
        this.subscribers = new Map();
        // store a reference to the instance on the service so the decorator has access to instance methods
        this.instance = this;
        this.setStorage(localstorageConfig);
        this.validateStorage();
    }
    Object.defineProperty(LocalstorageService.prototype, "instance", {
        get: /**
         * @return {?}
         */
        function () {
            return LocalstorageService.instance;
        },
        set: /**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            if (LocalstorageService.instance) {
                return;
            }
            LocalstorageService.instance = instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} __0
     * @return {?}
     */
    LocalstorageService.prototype.setStorage = /**
     * @param {?=} __0
     * @return {?}
     */
    function (_a) {
        var _b = _a === void 0 ? {} : _a, storageType = _b.storageType, _c = _b.identifier, identifier = _c === void 0 ? '' : _c;
        this.storageType = this.verifyStorageType(storageType, 'localStorage');
        this.storage = this.storageType === 'memory' ? memoryStorage : this.$window[this.storageType];
        this.identifier = identifier;
    };
    /**
     * Browser Storage api
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LocalstorageService.prototype.setItem = /**
     * Browser Storage api
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
        this.updateSubscribers(key);
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    LocalstorageService.prototype.getItem = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return LocalstorageHelper.parseJSON(key, this.storage.getItem(key));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalstorageService.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.storage.removeItem(key);
        this.updateSubscribers(key);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LocalstorageService.prototype.clear = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.storage.clear.apply(this.storage, args);
        this.updateSubscribers();
    };
    /**
     * Decorator api
     * @template T
     * @param {?} selector
     * @param {?=} comparator
     * @return {?}
     */
    LocalstorageService.prototype.select = /**
     * Decorator api
     * @template T
     * @param {?} selector
     * @param {?=} comparator
     * @return {?}
     */
    function (selector, comparator) {
        if (comparator === void 0) { comparator = LocalstorageHelper.comparator; }
        // if the selector is an array, add a subscription for the last item
        if (Array.isArray(selector)) {
            return /** @type {?} */ ((/** @type {?} */ (this
                .getChildSubscription(selector, this.select(selector[0]))
                .distinctUntilChanged(comparator)))); // make sure it is only triggered when the value changes
        }
        return /** @type {?} */ (this
            .addSubscriber(selector)
            .distinctUntilChanged(comparator));
    };
    /**
     * @return {?}
     */
    LocalstorageService.prototype.clearSubscribers = /**
     * @return {?}
     */
    function () {
        this.subscribers.forEach(function (subscriber) {
            subscriber.unsubscribe();
        });
    };
    /**
     * @template T
     * @return {?}
     */
    LocalstorageService.prototype.getStorageSnapshot = /**
     * @template T
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.storageType === 'memory') {
            return /** @type {?} */ ({});
        }
        return /** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, Object.keys(this.storage).reduce(function (acc, prop) {
            acc[prop] = LocalstorageHelper.parseJSON(prop, _this.storage[prop]);
            return acc;
        }, {})));
    };
    /**
     * @template T
     * @param {?} selector
     * @return {?}
     */
    LocalstorageService.prototype.addSubscriber = /**
     * @template T
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        if (!this.subscribers.has(selector)) {
            this.subscribers.set(selector, new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](LocalstorageHelper.select(this.getStorageSnapshot(), selector)));
        }
        return this.subscribers.get(selector);
    };
    /**
     * @return {?}
     */
    LocalstorageService.prototype.validateStorage = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ storage = this.getStorageSnapshot();
        if (!this.identifier && !storage['aui-storage']) {
            return;
        }
        if (this.identifier === storage['aui-storage']) {
            return;
        }
        this.clear();
        if (this.identifier) {
            this.setItem('aui-storage', this.identifier);
        }
    };
    /**
     * @template T
     * @param {?} selector
     * @param {?} parentSubscription
     * @return {?}
     */
    LocalstorageService.prototype.getChildSubscription = /**
     * @template T
     * @param {?} selector
     * @param {?} parentSubscription
     * @return {?}
     */
    function (selector, parentSubscription) {
        var /** @type {?} */ subscriber = this.addSubscriber(selector);
        parentSubscription
            .map((function (nextValue) {
            return LocalstorageHelper.verifyPath(nextValue, selector.slice(1)); // filter out the selected path value
        }).bind(this))
            .subscribe(function (nextValue) {
            subscriber.next(nextValue);
        });
        return subscriber;
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    LocalstorageService.prototype.updateSubscribers = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ storage = this.getStorageSnapshot();
        this.subscribers.forEach(function (subscriber, selector) {
            if (key !== undefined && !LocalstorageHelper.keyMatches(key, selector)) {
                return;
            }
            subscriber.next(LocalstorageHelper.select(storage, selector));
        });
    };
    /**
     * @param {?=} storageType
     * @param {?=} defaultValue
     * @return {?}
     */
    LocalstorageService.prototype.verifyStorageType = /**
     * @param {?=} storageType
     * @param {?=} defaultValue
     * @return {?}
     */
    function (storageType, defaultValue) {
        if (defaultValue === void 0) { defaultValue = 'memory'; }
        var /** @type {?} */ storageTypeExists = this.$window.hasOwnProperty(storageType) && this.$window[storageType] instanceof this.$window.Storage;
        if (storageTypeExists) {
            return storageType;
        }
        // if storage type does not exist, verify defaultValue until found or memory was set as default
        return storageType === 'memory' ? 'memory' : this.verifyStorageType(defaultValue);
    };
    LocalstorageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LocalstorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LOCALSTORAGE_CONFIG,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"],] },] },
    ]; };
    return LocalstorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = DEFAULT_LOCALSTORAGE_CONFIG, ɵ1 = window;
var LocalstorageModule = /** @class */ (function () {
    function LocalstorageModule(localstorageService) {
        this.localstorageService = localstorageService;
    }
    /**
     * @param {?=} localstorageConfig
     * @return {?}
     */
    LocalstorageModule.forRoot = /**
     * @param {?=} localstorageConfig
     * @return {?}
     */
    function (localstorageConfig) {
        if (localstorageConfig === void 0) { localstorageConfig = DEFAULT_LOCALSTORAGE_CONFIG; }
        return {
            ngModule: LocalstorageModule,
            providers: [
                { provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
                { provide: _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], useValue: window },
                LocalstorageService,
            ],
        };
    };
    LocalstorageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    providers: [
                        { provide: LOCALSTORAGE_CONFIG, useValue: ɵ0 },
                        { provide: _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], useValue: ɵ1 },
                        LocalstorageService,
                    ],
                },] },
    ];
    /** @nocollapse */
    LocalstorageModule.ctorParameters = function () { return [
        { type: LocalstorageService, },
    ]; };
    return LocalstorageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} selector
 * @param {?=} comparator
 * @return {?}
 */
function storage$1(selector, comparator) {
    return function decorate(target, key) {
        var /** @type {?} */ bindingKey = selector;
        if (!selector) {
            bindingKey = (key.lastIndexOf('$') === key.length - 1) ? key.substring(0, key.length - 1) : key;
        }
        /**
         * @return {?}
         */
        function getter() {
            return LocalstorageService.instance.select(bindingKey, comparator);
        }
        // Replace decorated property with a getter that returns the observable.
        delete target[key];
        Object.defineProperty(target, key, {
            get: getter,
            enumerable: true,
            configurable: true,
        });
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LocalstorageReduxPlugin = /** @class */ (function () {
    function LocalstorageReduxPlugin(ngRedux, localstorageService) {
        this.ngRedux = ngRedux;
        this.localstorageService = localstorageService;
        this.subscribers = new Map();
    }
    /**
     * @template T
     * @param {?=} selectors
     * @return {?}
     */
    LocalstorageReduxPlugin.prototype.enhancer = /**
     * @template T
     * @param {?=} selectors
     * @return {?}
     */
    function (selectors) {
        var /** @type {?} */ storedState = this.selectFromState(selectors);
        this.subscribe(selectors);
        return function (createStore) {
            return function (reducer, initialState) {
                return createStore(reducer, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, initialState, storedState));
            };
        };
    };
    /**
     * @param {?=} selectors
     * @return {?}
     */
    LocalstorageReduxPlugin.prototype.subscribe = /**
     * @param {?=} selectors
     * @return {?}
     */
    function (selectors) {
        var _this = this;
        this.ngRedux.select()
            .filter(function (store) { return !!store; })
            .first()
            .subscribe(function (store) {
            if (!selectors) {
                _this.subscribeSelector('reduxState');
                return;
            }
            selectors.forEach(function (selector) { return _this.subscribeSelector(selector); });
        });
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    LocalstorageReduxPlugin.prototype.subscribeSelector = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        var _this = this;
        if (!selector) {
            return;
        }
        var /** @type {?} */ subscriber = this.subscribers.get(selector);
        if (subscriber) {
            subscriber.unsubscribe();
        }
        this.subscribers.set(selector, /** @type {?} */ (this.ngRedux.subscribe(function () {
            var /** @type {?} */ selectorKey = Array.isArray(selector) ? selector.join('.') : String(selector);
            var /** @type {?} */ stored = _this.localstorageService.getItem(selectorKey);
            var /** @type {?} */ newValues = selector === 'reduxState' ? _this.ngRedux.getState() :
                LocalstorageHelper.select(_this.ngRedux.getState(), selector);
            if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(stored, newValues)) {
                return;
            }
            _this.localstorageService.setItem(selectorKey, newValues);
        })));
    };
    /**
     * @param {?=} selectors
     * @return {?}
     */
    LocalstorageReduxPlugin.prototype.selectFromState = /**
     * @param {?=} selectors
     * @return {?}
     */
    function (selectors) {
        var _this = this;
        if (!selectors || !selectors.length) {
            return this.localstorageService.getItem('reduxState');
        }
        return selectors.reduce(function (acc, selector) {
            var /** @type {?} */ storedData = LocalstorageHelper.select(_this.localstorageService.getStorageSnapshot(), selector);
            var /** @type {?} */ pathSelector = Array.isArray(selector) ? selector : [selector];
            LocalstorageHelper.updateOrCreatePath(acc, pathSelector, storedData);
            return acc;
        }, {});
    };
    LocalstorageReduxPlugin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LocalstorageReduxPlugin.ctorParameters = function () { return [
        { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_7__["NgRedux"], },
        { type: LocalstorageService, },
    ]; };
    return LocalstorageReduxPlugin;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LocalstorageStoreModule = /** @class */ (function () {
    function LocalstorageStoreModule() {
    }
    LocalstorageStoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_redux_store__WEBPACK_IMPORTED_MODULE_7__["NgReduxModule"]],
                    providers: [LocalstorageReduxPlugin],
                },] },
    ];
    return LocalstorageStoreModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sb2NhbHN0b3JhZ2UvbGliL2xvY2Fsc3RvcmFnZS9sb2NhbHN0b3JhZ2UuY29uZi50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmhlbHBlci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLnBvbHlmaWxsLnRzIiwibmc6Ly9sb2NhbHN0b3JhZ2UvbGliL2xvY2Fsc3RvcmFnZS9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLm1vZHVsZS50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLmRlY29yYXRvci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2Uvc3RvcmUvbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5lbmhhbmNlci50cyIsIm5nOi8vbG9jYWxzdG9yYWdlL2xpYi9sb2NhbHN0b3JhZ2Uvc3RvcmUvc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VDb25maWcgfSBmcm9tICcuL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBMT0NBTFNUT1JBR0VfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxMb2NhbHN0b3JhZ2VDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuPExvY2Fsc3RvcmFnZUNvbmZpZz4oJ2xvY2Fsc3RvcmFnZUNvbmZpZycpO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0NBTFNUT1JBR0VfQ09ORklHOiBMb2NhbHN0b3JhZ2VDb25maWcgPSB7XG5cdHN0b3JhZ2VUeXBlOiAnbG9jYWxTdG9yYWdlJyxcbn07XG4iLCJpbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFBhdGhTZWxlY3RvciwgU2VsZWN0b3IgfSBmcm9tICcuL3R5cGVzL2xvY2Fsc3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2VIZWxwZXIge1xuXHRzdGF0aWMgY29tcGFyYXRvciA9IGlzRXF1YWw7XG5cblx0Ly8gc2VsZWN0IGRhdGEgZnJvbSB0aGUgc3RvcmFnZSBmb3IgdGhlIHByb3ZpZGVkIHNlbGVjdG9yXG5cdHN0YXRpYyBzZWxlY3Qoc3RvcmFnZTogYW55LCBzZWxlY3RvcjogU2VsZWN0b3IpOiBhbnkge1xuXHRcdGlmICghc3RvcmFnZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2U7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHNlbGVjdG9yKHN0b3JhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmVyaWZ5UGF0aChzdG9yYWdlLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmVyaWZ5UGF0aChzdG9yYWdlLCBbc2VsZWN0b3JdKTtcblx0fVxuXG5cdC8vIHZlcmlmeSB0aGUga2V5IG1hdGNoZXMgd2l0aCB0aGUgc2VsZWN0b3Jcblx0Ly8gcHJvcGVydHkgc2VsZWN0b3I6IGNvbXBhcmUgdGhlIGtleSB3aXRoIHRoZSBzZWxlY3RvclxuXHQvLyBwYXRoIHNlbGVjdG9yOiB2ZXJpZnkgdGhlIGtleSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBwYXRoXG5cdC8vIGZ1bmN0aW9uIHNlbGVjdG9yOiBhbHdheXMgcmV0dXJuIHRydWVcblx0c3RhdGljIGtleU1hdGNoZXMoa2V5OiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3Rvcik6IEJvb2xlYW4ge1xuXHRcdGNvbnN0IGtleU1hdGNoZXNTZWxlY3RvciA9IGtleSA9PT0gc2VsZWN0b3I7XG5cdFx0Y29uc3Qga2V5SW5TZWxlY3RvciA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpID8gc2VsZWN0b3IuaW5kZXhPZihrZXkpID49IDAgOiBmYWxzZTtcblx0XHRjb25zdCBzZWxlY3RvcklzRnVuY3Rpb24gPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbic7XG5cblx0XHRyZXR1cm4ga2V5TWF0Y2hlc1NlbGVjdG9yIHx8IGtleUluU2VsZWN0b3IgfHwgc2VsZWN0b3JJc0Z1bmN0aW9uO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IGEgcGF0aCBleGlzdHMgaW4gYW4gb2JqZWN0XG5cdHN0YXRpYyB2ZXJpZnlQYXRoKGRhdGE/OiBhbnksIHNlbGVjdG9yPzogUGF0aFNlbGVjdG9yKSB7XG5cdFx0aWYgKCFkYXRhIHx8ICFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGN1cnIgPSBkYXRhO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aWYgKGN1cnIuaGFzT3duUHJvcGVydHkoc2VsZWN0b3JbaV0pKSB7XG5cdFx0XHRcdGN1cnIgPSBjdXJyW3NlbGVjdG9yW2ldXTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyO1xuXHR9XG5cblx0c3RhdGljIHVwZGF0ZU9yQ3JlYXRlUGF0aChzdGF0ZT86IGFueSwgc2VsZWN0b3I/OiBQYXRoU2VsZWN0b3IsIG5ld1ZhbHVlPzogYW55KSB7XG5cdFx0aWYgKCFzdGF0ZSB8fCAhc2VsZWN0b3IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyID0gc3RhdGU7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpZiAoIWN1cnIuaGFzT3duUHJvcGVydHkoc2VsZWN0b3JbaV0pKSB7XG5cdFx0XHRcdGN1cnJbc2VsZWN0b3JbaV1dID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpID09PSBzZWxlY3Rvci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyID0gY3VycltzZWxlY3RvcltpXV07XG5cdFx0fVxuXG5cdFx0Y3VycltzZWxlY3RvcltpXV0gPSBuZXdWYWx1ZTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdHN0YXRpYyBwYXJzZUpTT04oa2V5OiBzdHJpbmcsIGpzb246IHN0cmluZyk6IGFueSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybihgUGFyc2luZyBrZXkgXCIke2tleX1cIiBpbiBsb2NhbHN0b3JhZ2UgZmFpbGVkLCBpZ25vcmluZyB2YWx1ZS5gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1jb25zb2xlXG5cdFx0XHRyZXR1cm4gU3RyaW5nKGpzb24pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JhZ2Uge1xuXHRwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNpemU7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IHN0b3JhZ2UoKTogYW55IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0b3JlLmVudHJpZXMoKSkucmVkdWNlKChhY2MsIGN1cnI6IFtzdHJpbmcsIGFueV0pID0+ICh7XG5cdFx0XHQuLi5hY2MsXG5cdFx0XHRbY3VyclswXV06IGN1cnJbMV0sXG5cdFx0fSksIHt9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RvcmUgPSBuZXcgTWFwKCk7XG5cblx0cHVibGljIGtleShpbmRleDogbnVtYmVyKTogYW55IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0b3JlLmtleXMoKSlbaW5kZXhdO1xuXHR9XG5cblx0cHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLmdldChrZXkpO1xuXHR9XG5cblx0cHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlLnNldChrZXksIHZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yZS5kZWxldGUoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlLmNsZWFyKCk7XG5cdH1cbn1cblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBNZW1vcnlTdG9yYWdlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm94eShzdG9yYWdlLCB7XG5cdGdldDogZnVuY3Rpb24gKHRhcmdldDogYW55LCBuYW1lLCByZWNlaXZlcikge1xuXHRcdGlmIChuYW1lIGluIHRhcmdldCkge1xuXHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpO1xuXHRcdH1cblxuXHRcdGlmIChuYW1lIGluIHRhcmdldC5fX3Byb3RvX18pIHtcblx0XHRcdHJldHVybiB0YXJnZXQuX19wcm90b19fW25hbWVdO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQuc3RvcmFnZSkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5nZXRJdGVtKG5hbWUpO1xuXHRcdH1cblx0fSxcblx0b3duS2V5czogZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldC5zdG9yYWdlKTsgLy8gcmV0dXJuIHN0b3JlZCBrZXlzIHdoZW4gc3RvcmFnZSBrZXlzIGFyZSByZXF1ZXN0ZWRcblx0fSxcblx0Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLCAvLyBlbnN1cmUgc3RvcmVkIGtleXMga2FuIGJlIGl0ZXJhdGVkXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fTtcblx0fSxcbn0pO1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBMT0NBTFNUT1JBR0VfQ09ORklHLCBERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUcgfSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UuY29uZic7XG5pbXBvcnQgeyBTZWxlY3RvciwgUGF0aFNlbGVjdG9yLCBDb21wYXJhdG9yLCBMb2NhbHN0b3JhZ2VDb25maWcgfSBmcm9tICcuLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlSGVscGVyIH0gZnJvbSAnLi4vbG9jYWxzdG9yYWdlLmhlbHBlcic7XG5pbXBvcnQgbWVtb3J5U3RvcmFnZSBmcm9tICcuLi9sb2NhbHN0b3JhZ2UucG9seWZpbGwnO1xuXG5cbi8vIEBkeW5hbWljXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlU2VydmljZSB7XG5cdHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2U7XG5cblx0cHVibGljIGdldCBpbnN0YW5jZSgpOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlIHtcblx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgaW5zdGFuY2UoaW5zdGFuY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UpIHtcblx0XHRpZiAoTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdExvY2Fsc3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBzdG9yYWdlVHlwZTogc3RyaW5nO1xuXHRwdWJsaWMgaWRlbnRpZmllcjogc3RyaW5nO1xuXHRwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2U7XG5cdHByaXZhdGUgc3Vic2NyaWJlcnM6IE1hcDxTZWxlY3RvciwgQmVoYXZpb3JTdWJqZWN0PGFueT4+ID0gbmV3IE1hcDxTZWxlY3RvciwgQmVoYXZpb3JTdWJqZWN0PGFueT4+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChMT0NBTFNUT1JBR0VfQ09ORklHKSBwcml2YXRlIGxvY2Fsc3RvcmFnZUNvbmZpZyxcblx0XHRASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSAkd2luZG93XG5cdCkge1xuXHRcdC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvbiB0aGUgc2VydmljZSBzbyB0aGUgZGVjb3JhdG9yIGhhcyBhY2Nlc3MgdG8gaW5zdGFuY2UgbWV0aG9kc1xuXHRcdHRoaXMuaW5zdGFuY2UgPSB0aGlzO1xuXG5cdFx0dGhpcy5zZXRTdG9yYWdlKGxvY2Fsc3RvcmFnZUNvbmZpZyk7XG5cdFx0dGhpcy52YWxpZGF0ZVN0b3JhZ2UoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRTdG9yYWdlKHtcblx0XHRzdG9yYWdlVHlwZSxcblx0XHRpZGVudGlmaWVyID0gJycsXG5cdH06IExvY2Fsc3RvcmFnZUNvbmZpZyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlVHlwZSA9IHRoaXMudmVyaWZ5U3RvcmFnZVR5cGUoc3RvcmFnZVR5cGUsICdsb2NhbFN0b3JhZ2UnKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VUeXBlID09PSAnbWVtb3J5JyA/IG1lbW9yeVN0b3JhZ2UgOiB0aGlzLiR3aW5kb3dbdGhpcy5zdG9yYWdlVHlwZV07XG5cblx0XHR0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJyb3dzZXIgU3RvcmFnZSBhcGlcblx0ICovXG5cdHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRJdGVtPFQgPSBhbnk+KGtleTogc3RyaW5nKTogVCB7XG5cdFx0cmV0dXJuIExvY2Fsc3RvcmFnZUhlbHBlci5wYXJzZUpTT04oa2V5LCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHR0aGlzLnVwZGF0ZVN1YnNjcmliZXJzKGtleSk7XG5cdH1cblxuXHRwdWJsaWMgY2xlYXIoLi4uYXJncyk6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmFnZS5jbGVhci5hcHBseSh0aGlzLnN0b3JhZ2UsIGFyZ3MpO1xuXHRcdHRoaXMudXBkYXRlU3Vic2NyaWJlcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNvcmF0b3IgYXBpXG5cdCAqL1xuXHRwdWJsaWMgc2VsZWN0PFQgPSBhbnk+KHNlbGVjdG9yOiBTZWxlY3RvciwgY29tcGFyYXRvcjogQ29tcGFyYXRvciA9IExvY2Fsc3RvcmFnZUhlbHBlci5jb21wYXJhdG9yKTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHQvLyBpZiB0aGUgc2VsZWN0b3IgaXMgYW4gYXJyYXksIGFkZCBhIHN1YnNjcmlwdGlvbiBmb3IgdGhlIGxhc3QgaXRlbVxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuICh0aGlzXG5cdFx0XHRcdC5nZXRDaGlsZFN1YnNjcmlwdGlvbihzZWxlY3RvciwgdGhpcy5zZWxlY3Qoc2VsZWN0b3JbMF0pKVxuXHRcdFx0XHQuZGlzdGluY3RVbnRpbENoYW5nZWQoY29tcGFyYXRvcikgYXMgYW55KSBhcyBCZWhhdmlvclN1YmplY3Q8VD47IC8vIG1ha2Ugc3VyZSBpdCBpcyBvbmx5IHRyaWdnZXJlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5hZGRTdWJzY3JpYmVyPFQ+KHNlbGVjdG9yKVxuXHRcdFx0LmRpc3RpbmN0VW50aWxDaGFuZ2VkPFQ+KGNvbXBhcmF0b3IpIGFzIEJlaGF2aW9yU3ViamVjdDxUPjtcblx0fVxuXG5cdHB1YmxpYyBjbGVhclN1YnNjcmliZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHtcblx0XHRcdHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIGdldCBhIGNsb25lIG9mIHRoZSBjdXJyZW50IHN0b3JlZCB2YWx1ZXNcblx0cHVibGljIGdldFN0b3JhZ2VTbmFwc2hvdDxUID0gYW55PigpOiBUIHtcblx0XHRpZiAodGhpcy5zdG9yYWdlVHlwZSA9PT0gJ21lbW9yeScpIHtcblx0XHRcdHJldHVybiB7fSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiB7Li4uT2JqZWN0LmtleXModGhpcy5zdG9yYWdlKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuXHRcdFx0YWNjW3Byb3BdID0gTG9jYWxzdG9yYWdlSGVscGVyLnBhcnNlSlNPTihwcm9wLCB0aGlzLnN0b3JhZ2VbcHJvcF0pO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9LCB7fSl9IGFzIFQ7XG5cdH1cblxuXHQvLyByZXR1cm4gb3IgY3JlYXRlIGEgYmVoYXZpb3JzdWJqZWN0IGZyb20gdGhlIHNlbGVjdGVkIHZhbHVlXG5cdHB1YmxpYyBhZGRTdWJzY3JpYmVyPFQgPSBhbnk+KHNlbGVjdG9yOiBTZWxlY3Rvcik6IEJlaGF2aW9yU3ViamVjdDxUPiB7XG5cdFx0aWYgKCF0aGlzLnN1YnNjcmliZXJzLmhhcyhzZWxlY3RvcikpIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KHNlbGVjdG9yLCBuZXcgQmVoYXZpb3JTdWJqZWN0PFQ+KExvY2Fsc3RvcmFnZUhlbHBlci5zZWxlY3QodGhpcy5nZXRTdG9yYWdlU25hcHNob3QoKSwgc2VsZWN0b3IpKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuZ2V0KHNlbGVjdG9yKTtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVTdG9yYWdlKCk6IHZvaWQge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2VTbmFwc2hvdCgpO1xuXG5cdFx0aWYgKCF0aGlzLmlkZW50aWZpZXIgJiYgIXN0b3JhZ2VbJ2F1aS1zdG9yYWdlJ10pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pZGVudGlmaWVyID09PSBzdG9yYWdlWydhdWktc3RvcmFnZSddKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jbGVhcigpO1xuXG5cdFx0aWYgKHRoaXMuaWRlbnRpZmllcikge1xuXHRcdFx0dGhpcy5zZXRJdGVtKCdhdWktc3RvcmFnZScsIHRoaXMuaWRlbnRpZmllcik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gZmV0Y2ggb3IgY3JlYXRlIGEgc3Vic2NyaXB0aW9uIGZvciB0aGUgcGFyZW50XG5cdC8vIHN1YnNjcmliZSB0byBzYWlkIHN1YnNjcmlwdGlvbiBhbmQgcmV0dXJuIGEgbmV3IHN1YnNjcmliZXIgZnJvbSB0aGUgdmFsdWVcblx0cHJpdmF0ZSBnZXRDaGlsZFN1YnNjcmlwdGlvbjxUID0gYW55PihzZWxlY3RvcjogUGF0aFNlbGVjdG9yLCBwYXJlbnRTdWJzY3JpcHRpb246IEJlaGF2aW9yU3ViamVjdDxhbnk+KTogQmVoYXZpb3JTdWJqZWN0PFQ+IHtcblx0XHRjb25zdCBzdWJzY3JpYmVyID0gdGhpcy5hZGRTdWJzY3JpYmVyPFQ+KHNlbGVjdG9yKTtcblxuXHRcdHBhcmVudFN1YnNjcmlwdGlvblxuXHRcdFx0Lm1hcCgobmV4dFZhbHVlID0+IHtcblx0XHRcdFx0cmV0dXJuIExvY2Fsc3RvcmFnZUhlbHBlci52ZXJpZnlQYXRoKG5leHRWYWx1ZSwgc2VsZWN0b3Iuc2xpY2UoMSkpOyAvLyBmaWx0ZXIgb3V0IHRoZSBzZWxlY3RlZCBwYXRoIHZhbHVlXG5cdFx0XHR9KS5iaW5kKHRoaXMpKVxuXHRcdFx0LnN1YnNjcmliZSgobmV4dFZhbHVlOiBUKSA9PiB7XG5cdFx0XHRcdHN1YnNjcmliZXIubmV4dChuZXh0VmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gc3Vic2NyaWJlcjtcblx0fVxuXG5cdC8vIHVwZGF0ZSBhbGwgc3Vic2NyaWJlcnNcblx0Ly8gaWYgYSBrZXkgaXMgcHJvdmlkZWQsIG1hdGNoaW5nIHdpbGwgcHJldmVudCB1c2VsZXNzIHVwZGF0ZXNcblx0cHJpdmF0ZSB1cGRhdGVTdWJzY3JpYmVycyhrZXk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5nZXRTdG9yYWdlU25hcHNob3QoKTtcblx0XHR0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+LCBzZWxlY3RvcjogU2VsZWN0b3IpID0+IHtcblx0XHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZCAmJiAhTG9jYWxzdG9yYWdlSGVscGVyLmtleU1hdGNoZXMoa2V5LCBzZWxlY3RvcikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRzdWJzY3JpYmVyLm5leHQoTG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdChzdG9yYWdlLCBzZWxlY3RvcikpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gdmVyaWZ5IHRoZSBwcmVmZXJlZCBzdG9yYWdldHlwZSBleGlzdHMsIGZhbGwgYmFjayB0byBcImxvY2FsU3RvcmFnZcOiwoDCnCBvciBtZW1vcnlcblx0cHJpdmF0ZSB2ZXJpZnlTdG9yYWdlVHlwZShzdG9yYWdlVHlwZT86IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSAnbWVtb3J5Jyk6IHN0cmluZyB7XG5cdFx0Y29uc3Qgc3RvcmFnZVR5cGVFeGlzdHMgPSB0aGlzLiR3aW5kb3cuaGFzT3duUHJvcGVydHkoc3RvcmFnZVR5cGUpICYmIHRoaXMuJHdpbmRvd1tzdG9yYWdlVHlwZV0gaW5zdGFuY2VvZiB0aGlzLiR3aW5kb3cuU3RvcmFnZTtcblxuXHRcdGlmIChzdG9yYWdlVHlwZUV4aXN0cykge1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2VUeXBlO1xuXHRcdH1cblxuXHRcdC8vIGlmIHN0b3JhZ2UgdHlwZSBkb2VzIG5vdCBleGlzdCwgdmVyaWZ5IGRlZmF1bHRWYWx1ZSB1bnRpbCBmb3VuZCBvciBtZW1vcnkgd2FzIHNldCBhcyBkZWZhdWx0XG5cdFx0cmV0dXJuIHN0b3JhZ2VUeXBlID09PSAnbWVtb3J5JyA/ICdtZW1vcnknIDogdGhpcy52ZXJpZnlTdG9yYWdlVHlwZShkZWZhdWx0VmFsdWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7XG5cdExvY2Fsc3RvcmFnZUNvbmZpZyxcbn0gZnJvbSAnLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHtcblx0TG9jYWxzdG9yYWdlU2VydmljZSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1xuXHRMT0NBTFNUT1JBR0VfQ09ORklHLFxuXHRERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUcsXG59IGZyb20gJy4vbG9jYWxzdG9yYWdlLmNvbmYnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTE9DQUxTVE9SQUdFX0NPTkZJRywgdXNlVmFsdWU6IERFRkFVTFRfTE9DQUxTVE9SQUdFX0NPTkZJRyB9LFxuXHRcdHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG5cdFx0TG9jYWxzdG9yYWdlU2VydmljZSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlTW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoXG5cdFx0bG9jYWxzdG9yYWdlQ29uZmlnOiBMb2NhbHN0b3JhZ2VDb25maWcgPSBERUZBVUxUX0xPQ0FMU1RPUkFHRV9DT05GSUdcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBMb2NhbHN0b3JhZ2VNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBMT0NBTFNUT1JBR0VfQ09ORklHLCB1c2VWYWx1ZTogbG9jYWxzdG9yYWdlQ29uZmlnIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG5cdFx0XHRcdExvY2Fsc3RvcmFnZVNlcnZpY2UsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2Vcblx0KSB7fVxufVxuIiwiaW1wb3J0IHsgU2VsZWN0b3IsIENvbXBhcmF0b3IsIFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSAnLi90eXBlcy9sb2NhbHN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZShzZWxlY3Rvcj86IFNlbGVjdG9yLCBjb21wYXJhdG9yPzogQ29tcGFyYXRvcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcblxuXHRyZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0bGV0IGJpbmRpbmdLZXkgPSBzZWxlY3Rvcjtcblx0XHRpZiAoIXNlbGVjdG9yKSB7XG5cdFx0XHRiaW5kaW5nS2V5ID0gKGtleS5sYXN0SW5kZXhPZignJCcpID09PSBrZXkubGVuZ3RoIC0gMSkgPyBrZXkuc3Vic3RyaW5nKDAsIGtleS5sZW5ndGggLSAxKSA6IGtleTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXR0ZXIoKSB7XG5cdFx0XHRyZXR1cm4gTG9jYWxzdG9yYWdlU2VydmljZS5pbnN0YW5jZS5zZWxlY3QoYmluZGluZ0tleSwgY29tcGFyYXRvcik7XG5cdFx0fVxuXG5cdFx0Ly8gUmVwbGFjZSBkZWNvcmF0ZWQgcHJvcGVydHkgd2l0aCBhIGdldHRlciB0aGF0IHJldHVybnMgdGhlIG9ic2VydmFibGUuXG5cdFx0ZGVsZXRlIHRhcmdldFtrZXldO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG5cdFx0XHRnZXQ6IGdldHRlcixcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fSk7XG5cdH07XG59XG4iLCJpbXBvcnQgeyBSZWR1Y2VyLCBTdG9yZUNyZWF0b3IsIFN0b3JlRW5oYW5jZXIsIFN0b3JlLCBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTmdSZWR1eCB9IGZyb20gJ0Bhbmd1bGFyLXJlZHV4L3N0b3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlyc3QnO1xuXG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgTG9jYWxzdG9yYWdlSGVscGVyIH0gZnJvbSAnLi4vLi4vbG9jYWxzdG9yYWdlLmhlbHBlcic7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvcGVydHlTZWxlY3RvciwgUGF0aFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvbG9jYWxzdG9yYWdlLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2Fsc3RvcmFnZVJlZHV4UGx1Z2luIHtcblx0cHJpdmF0ZSBzdG9yZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3IsIFN1YnNjcmlwdGlvbj4gPSBuZXcgTWFwPFByb3BlcnR5U2VsZWN0b3J8UGF0aFNlbGVjdG9yLCBTdWJzY3JpcHRpb24+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ1JlZHV4OiBOZ1JlZHV4PGFueT4sXG5cdFx0cHJpdmF0ZSBsb2NhbHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlXG5cdCkge31cblxuXHRlbmhhbmNlcjxUID0gYW55PihzZWxlY3RvcnM/OiBBcnJheTxQcm9wZXJ0eVNlbGVjdG9yfFBhdGhTZWxlY3Rvcj4pOiBTdG9yZUVuaGFuY2VyPFQ+IHtcblx0XHRjb25zdCBzdG9yZWRTdGF0ZSA9IHRoaXMuc2VsZWN0RnJvbVN0YXRlKHNlbGVjdG9ycyk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShzZWxlY3RvcnMpO1xuXG5cdFx0cmV0dXJuIChjcmVhdGVTdG9yZTogU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvcjxUPik6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8VD4gPT4gKFxuXHRcdFx0cmVkdWNlcjogUmVkdWNlcjxUPixcblx0XHRcdGluaXRpYWxTdGF0ZTogYW55XG5cdFx0KTogU3RvcmU8VD4gPT4ge1xuXHRcdFx0cmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHtcblx0XHRcdFx0Li4uaW5pdGlhbFN0YXRlLFxuXHRcdFx0XHQuLi5zdG9yZWRTdGF0ZSxcblx0XHRcdH0pO1xuXHRcdH07XG5cdH1cblxuXHRzdWJzY3JpYmUoc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvciB8IFBhdGhTZWxlY3Rvcj4pOiB2b2lkIHtcblx0XHR0aGlzLm5nUmVkdXguc2VsZWN0KClcblx0XHRcdC5maWx0ZXIoc3RvcmUgPT4gISFzdG9yZSlcblx0XHRcdC5maXJzdCgpXG5cdFx0XHQuc3Vic2NyaWJlKHN0b3JlID0+IHtcblx0XHRcdFx0aWYgKCFzZWxlY3RvcnMpIHtcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmliZVNlbGVjdG9yKCdyZWR1eFN0YXRlJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gdGhpcy5zdWJzY3JpYmVTZWxlY3RvcihzZWxlY3RvcikpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVNlbGVjdG9yKHNlbGVjdG9yOiBQcm9wZXJ0eVNlbGVjdG9yIHwgUGF0aFNlbGVjdG9yKTogdm9pZCB7XG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1YnNjcmliZXIgPSB0aGlzLnN1YnNjcmliZXJzLmdldChzZWxlY3Rvcik7XG5cblx0XHRpZiAoc3Vic2NyaWJlcikge1xuXHRcdFx0c3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KHNlbGVjdG9yLCB0aGlzLm5nUmVkdXguc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdG9yS2V5ID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3Rvci5qb2luKCcuJykgOiBTdHJpbmcoc2VsZWN0b3IpO1xuXHRcdFx0Y29uc3Qgc3RvcmVkID0gdGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oc2VsZWN0b3JLZXkpO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWVzID0gc2VsZWN0b3IgPT09ICdyZWR1eFN0YXRlJyA/IHRoaXMubmdSZWR1eC5nZXRTdGF0ZSgpIDpcblx0XHRcdFx0TG9jYWxzdG9yYWdlSGVscGVyLnNlbGVjdCh0aGlzLm5nUmVkdXguZ2V0U3RhdGUoKSwgc2VsZWN0b3IpO1xuXG5cdFx0XHRpZiAoaXNFcXVhbChzdG9yZWQsIG5ld1ZhbHVlcykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbShzZWxlY3RvcktleSwgbmV3VmFsdWVzKTtcblx0XHR9KSBhcyBhbnkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RGcm9tU3RhdGUoc2VsZWN0b3JzPzogQXJyYXk8UHJvcGVydHlTZWxlY3RvcnxQYXRoU2VsZWN0b3I+KTogYW55IHtcblx0XHRpZiAoIXNlbGVjdG9ycyB8fCAhc2VsZWN0b3JzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRJdGVtKCdyZWR1eFN0YXRlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGVjdG9ycy5yZWR1Y2UoKGFjYywgc2VsZWN0b3IpID0+IHtcblx0XHRcdGNvbnN0IHN0b3JlZERhdGEgPSBMb2NhbHN0b3JhZ2VIZWxwZXIuc2VsZWN0KHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlU25hcHNob3QoKSwgc2VsZWN0b3IpO1xuXHRcdFx0Y29uc3QgcGF0aFNlbGVjdG9yID0gQXJyYXkuaXNBcnJheShzZWxlY3RvcikgPyBzZWxlY3RvciA6IFtzZWxlY3Rvcl07XG5cblx0XHRcdExvY2Fsc3RvcmFnZUhlbHBlci51cGRhdGVPckNyZWF0ZVBhdGgoYWNjLCBwYXRoU2VsZWN0b3IsIHN0b3JlZERhdGEpO1xuXG5cdFx0XHRyZXR1cm4gYWNjO1xuXHRcdH0sIHt9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVkdXhNb2R1bGUgfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VSZWR1eFBsdWdpbiB9IGZyb20gJy4vbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5lbmhhbmNlcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFsgTmdSZWR1eE1vZHVsZSBdLFxuXHRwcm92aWRlcnM6IFsgTG9jYWxzdG9yYWdlUmVkdXhQbHVnaW4gXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlU3RvcmVNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFHYSxtQkFBbUIsR0FBdUMsSUFBSSxjQUFjLENBQXFCLG9CQUFvQixDQUFDLENBQUM7QUFFcEkscUJBQWEsMkJBQTJCLEdBQXVCO0lBQzlELFdBQVcsRUFBRSxjQUFjO0NBQzNCOzs7Ozs7QUNQRDs7Ozs7Ozs7O0lBT1EseUJBQU07Ozs7O0lBQWIsVUFBYyxPQUFZLEVBQUUsUUFBa0I7UUFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sSUFBSSxD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

/***/ }),

/***/ "./dist/logo/fesm2015/logo.js":
/*!************************************!*\
  !*** ./dist/logo/fesm2015/logo.js ***!
  \************************************/
/*! exports provided: LogoComponent, LogoModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoComponent {
    constructor() {
        this.title = 'Placeholder';
        this.src = 'https://place-hold.it/192x192';
        this.link = '/';
    }
}
LogoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-logo',
                template: `<a class="o-header__logo" href="{{ link || '#' }}" title="{{ title }}" (click)="onClick($event)">
    <img [src]="src" [alt]="title" />
</a>

`,
            },] },
];
/** @nocollapse */
LogoComponent.propDecorators = {
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "src": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "link": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    LogoComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoModule {
}
LogoModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nby9saWIvbG9nby9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQudHMiLCJuZzovL2xvZ28vbGliL2xvZ28vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbG9nby9saWIvbG9nby9sb2dvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1aS1sb2dvJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cIm8taGVhZGVyX19sb2dvXCIgaHJlZj1cInt7IGxpbmsgfHwgJyMnIH19XCIgdGl0bGU9XCJ7eyB0aXRsZSB9fVwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8aW1nIFtzcmNdPVwic3JjXCIgW2FsdF09XCJ0aXRsZVwiIC8+XG48L2E+XG5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZSA9ICdQbGFjZWhvbGRlcic7XG5cbiAgQElucHV0KCkgc3JjID0gJ2h0dHBzOi8vcGxhY2UtaG9sZC5pdC8xOTJ4MTkyJztcblxuICBASW5wdXQoKSBsaW5rID8gPSAnLyc7XG5cbiAgQElucHV0KCkgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuIiwiaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRMb2dvQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb01vZHVsZSB7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztxQkFXbUIsYUFBYTttQkFFZiwrQkFBK0I7b0JBRTVCLEdBQUc7Ozs7WUFidEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Q0FJWDthQUNBOzs7O3NCQUVFLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLO3dCQUVMLEtBQUs7Ozs7Ozs7QUNqQlIsdUJBRWEsVUFBVSxHQUFHO0lBQ3pCLGFBQWE7Q0FDYjs7Ozs7O0FDSkQ7OztZQU1DLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixHQUFHLFVBQVU7aUJBQ2I7YUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./dist/logo/fesm5/logo.js":
/*!*********************************!*\
  !*** ./dist/logo/fesm5/logo.js ***!
  \*********************************/
/*! exports provided: LogoComponent, LogoModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.title = 'Placeholder';
        this.src = 'https://place-hold.it/192x192';
        this.link = '/';
    }
    LogoComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-logo',
                    template: "<a class=\"o-header__logo\" href=\"{{ link || '#' }}\" title=\"{{ title }}\" (click)=\"onClick($event)\">\n    <img [src]=\"src\" [alt]=\"title\" />\n</a>\n\n",
                },] },
    ];
    /** @nocollapse */
    LogoComponent.propDecorators = {
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "src": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "link": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return LogoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    LogoComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoModule = /** @class */ (function () {
    function LogoModule() {
    }
    LogoModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Components),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Components),
                },] },
    ];
    return LogoModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nby9saWIvbG9nby9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQudHMiLCJuZzovL2xvZ28vbGliL2xvZ28vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbG9nby9saWIvbG9nby9sb2dvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1aS1sb2dvJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cIm8taGVhZGVyX19sb2dvXCIgaHJlZj1cInt7IGxpbmsgfHwgJyMnIH19XCIgdGl0bGU9XCJ7eyB0aXRsZSB9fVwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8aW1nIFtzcmNdPVwic3JjXCIgW2FsdF09XCJ0aXRsZVwiIC8+XG48L2E+XG5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZSA9ICdQbGFjZWhvbGRlcic7XG5cbiAgQElucHV0KCkgc3JjID0gJ2h0dHBzOi8vcGxhY2UtaG9sZC5pdC8xOTJ4MTkyJztcblxuICBASW5wdXQoKSBsaW5rID8gPSAnLyc7XG5cbiAgQElucHV0KCkgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuIiwiaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRMb2dvQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb01vZHVsZSB7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7cUJBV21CLGFBQWE7bUJBRWYsK0JBQStCO29CQUU1QixHQUFHOzs7Z0JBYnRCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLGdLQUlYO2lCQUNBOzs7OzBCQUVFLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLOzRCQUVMLEtBQUs7O3dCQWpCUjs7Ozs7OztBQ0FBLHFCQUVhLFVBQVUsR0FBRztJQUN6QixhQUFhO0NBQ2I7Ozs7Ozs7Ozs7Z0JDRUEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksV0FDUixVQUFVLENBQ2I7b0JBQ0QsT0FBTyxXQUNILFVBQVUsQ0FDYjtpQkFDRDs7cUJBaEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./dist/map/fesm5/map.js":
/*!*******************************!*\
  !*** ./dist/map/fesm5/map.js ***!
  \*******************************/
/*! exports provided: LeafletMap, LeafletControlComponent, LeafletDragControlComponent, LeafletDrawControlComponent, LeafletFullscreenControlComponent, LeafletLocateControlComponent, LeafletZoomControlComponent, LeafletComponent, baseMapAntwerp, baseMapWorldGray, LeafletModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletMap", function() { return LeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletControlComponent", function() { return LeafletControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletDragControlComponent", function() { return LeafletDragControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletDrawControlComponent", function() { return LeafletDrawControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletFullscreenControlComponent", function() { return LeafletFullscreenControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletLocateControlComponent", function() { return LeafletLocateControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletZoomControlComponent", function() { return LeafletZoomControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletComponent", function() { return LeafletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseMapAntwerp", function() { return baseMapAntwerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseMapWorldGray", function() { return baseMapWorldGray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletModule", function() { return LeafletModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var esri_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri-leaflet */ "./node_modules/esri-leaflet/dist/esri-leaflet-debug.js");
/* harmony import */ var esri_leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esri_leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-draw */ "./node_modules/leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_draw__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_flyout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acpaas-ui/ngx-components/flyout */ "./dist/flyout/fesm5/flyout.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var leaflet_draw_dist_leaflet_draw_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet-draw/dist/leaflet.draw.css */ "./node_modules/leaflet-draw/dist/leaflet.draw.css");
/* harmony import */ var leaflet_draw_dist_leaflet_draw_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(leaflet_draw_dist_leaflet_draw_css__WEBPACK_IMPORTED_MODULE_9__);











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletMap = /** @class */ (function () {
    function LeafletMap(options) {
        var _this = this;
        this.options = options;
        this.initialized = false;
        this.locating = false;
        this.fullScreen = false;
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modes = {
            DRAGGING: 0,
            DRAWING_POLYGON: 1,
            DRAWING_LINE: 2,
        };
        this.mode = this.modes.DRAGGING;
        // DRAWING
        this.switchToDragging = function () {
            _this.mode = _this.modes.DRAGGING;
            if (_this.polygonDrawer) {
                _this.polygonDrawer.disable();
                _this.polygonDrawer = undefined;
            }
            if (_this.lineDrawer) {
                _this.lineDrawer.disable();
                _this.lineDrawer = undefined;
            }
            _this.map.off(leaflet__WEBPACK_IMPORTED_MODULE_1__["Draw"].Event.CREATED);
            _this.map.off(leaflet__WEBPACK_IMPORTED_MODULE_1__["Draw"].Event.DRAWSTOP);
        };
        this.handleDrawPolygon = function (e) {
            _this.map.addLayer(e.layer);
            _this.options.onAddPolygon(e.layer);
            _this.switchToDragging();
        };
        this.handleDrawLine = function (e) {
            _this.map.addLayer(e.layer);
            _this.options.onAddLine(e.layer);
            _this.switchToDragging();
        };
        this.stopEditLayer = function () {
            if (_this.editingLayer) {
                _this.editingLayer.editing.disable();
                _this.editingLayer.off('edit');
            }
            _this.map.off('click', _this.stopEditLayer);
        };
    }
    // LIFECYCLE
    /**
     * @param {?} element
     * @return {?}
     */
    LeafletMap.prototype.init = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.initialized = true;
        this.map = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["map"])(element, {
            center: this.options.center,
            zoom: this.options.zoom,
            attributionControl: false,
            zoomControl: false,
            scrollWheelZoom: false,
        });
        this.onInit.emit();
    };
    // LAYERS
    /**
     * @param {?} layer
     * @return {?}
     */
    LeafletMap.prototype.addTileLayer = /**
     * @param {?} layer
     * @return {?}
     */
    function (layer) {
        var /** @type {?} */ tileLayer = new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"](layer.url, layer.options);
        this.map.addLayer(tileLayer);
        return tileLayer;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    LeafletMap.prototype.addFeatureLayer = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var /** @type {?} */ featureLayer$$1 = new esri_leaflet__WEBPACK_IMPORTED_MODULE_2__["featureLayer"](config);
        this.map.addLayer(featureLayer$$1);
        return featureLayer$$1;
    };
    /**
     * @param {?} geoJSON
     * @param {?} config
     * @return {?}
     */
    LeafletMap.prototype.addGeoJSON = /**
     * @param {?} geoJSON
     * @param {?} config
     * @return {?}
     */
    function (geoJSON$$1, config) {
        var /** @type {?} */ geoJSONLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"])(geoJSON$$1, config);
        geoJSONLayer.addTo(this.map);
        return geoJSONLayer;
    };
    /**
     * @param {?} featureLayers
     * @return {?}
     */
    LeafletMap.prototype.fitFeatureLayers = /**
     * @param {?} featureLayers
     * @return {?}
     */
    function (featureLayers) {
        var _this = this;
        var /** @type {?} */ bounds = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLngBounds"])(([]));
        var /** @type {?} */ counter = 0;
        featureLayers.forEach(function (featureLayer$$1) {
            featureLayer$$1.once('load', function () {
                counter++;
                featureLayer$$1.eachFeature(function (layer) {
                    bounds.extend(layer.getBounds());
                });
                if (counter === featureLayers.length && bounds.isValid()) {
                    _this.map.fitBounds(bounds);
                }
            });
        });
    };
    /**
     * @param {?} layer
     * @return {?}
     */
    LeafletMap.prototype.removeLayer = /**
     * @param {?} layer
     * @return {?}
     */
    function (layer) {
        this.map.removeLayer(layer);
    };
    // FULLSCREEN
    /**
     * @return {?}
     */
    LeafletMap.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fullScreen = !this.fullScreen;
        setTimeout(function () {
            _this.update();
        });
    };
    /**
     * @return {?}
     */
    LeafletMap.prototype.update = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            this.map.invalidateSize();
        }
    };
    // ZOOMING
    /**
     * @return {?}
     */
    LeafletMap.prototype.zoomIn = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            this.map.zoomIn();
        }
    };
    /**
     * @return {?}
     */
    LeafletMap.prototype.zoomInDisabled = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            return this.map.getMaxZoom() <= this.map.getZoom();
        }
        return true;
    };
    /**
     * @return {?}
     */
    LeafletMap.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            this.map.zoomOut();
        }
    };
    /**
     * @return {?}
     */
    LeafletMap.prototype.zoomOutDisabled = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            return this.map.getMinZoom() >= this.map.getZoom();
        }
        return true;
    };
    // CENTERING
    /**
     * @return {?}
     */
    LeafletMap.prototype.locate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.locating && this.initialized) {
            this.locating = true;
            this.map.locate();
            this.map.on('locationfound', function (e) {
                _this.locating = false;
                _this.map.setView(e.latlng, 19);
                _this.map.off('locationfound');
            });
        }
    };
    /**
     * @param {?} center
     * @param {?} zoom
     * @return {?}
     */
    LeafletMap.prototype.setView = /**
     * @param {?} center
     * @param {?} zoom
     * @return {?}
     */
    function (center, zoom) {
        if (this.initialized) {
            this.map.setView(center, zoom);
        }
    };
    // DRAWING: POLYGON
    /**
     * @return {?}
     */
    LeafletMap.prototype.switchToPolygon = /**
     * @return {?}
     */
    function () {
        this.switchToDragging();
        this.mode = this.modes.DRAWING_POLYGON;
        if (!this.polygonDrawer) {
            this.polygonDrawer = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Draw"]['Polygon'](this.map, {
                shapeOptions: this.options.polygonColor ? {
                    color: this.options.polygonColor,
                } : {},
            });
            this.polygonDrawer.enable();
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_1__["Draw"].Event.CREATED, this.handleDrawPolygon);
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_1__["Draw"].Event.DRAWSTOP, this.switchToDragging);
        }
    };
    // DRAWING: LINES
    /**
     * @return {?}
     */
    LeafletMap.prototype.switchToLine = /**
     * @return {?}
     */
    function () {
        this.switchToDragging();
        this.mode = this.modes.DRAWING_LINE;
        if (!this.lineDrawer) {
            this.lineDrawer = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Draw"]['Polyline'](this.map, {
                shapeOptions: this.options.lineColor ? {
                    color: this.options.lineColor,
                } : {},
            });
            this.lineDrawer.enable();
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_1__["Draw"].Event.CREATED, this.handleDrawLine);
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_1__["Draw"].Event.DRAWSTOP, this.switchToDragging);
        }
    };
    // EDIT: LAYER
    /**
     * @param {?} layer
     * @return {?}
     */
    LeafletMap.prototype.startEditLayer = /**
     * @param {?} layer
     * @return {?}
     */
    function (layer) {
        var _this = this;
        this.stopEditLayer();
        this.editingLayer = layer;
        // TODO: temp workaround for chrome 62
        // https://github.com/Leaflet/Leaflet.draw/issues/804
        this.editingLayer.options.editing = this.editingLayer.options.editing || (this.editingLayer.options.editing = {});
        this.editingLayer.editing.enable();
        this.map.on('click', this.stopEditLayer);
        this.editingLayer.on('edit', function () {
            _this.editingLayer.feature = _this.editingLayer.toGeoJSON();
            _this.options.onEditFeature(_this.editingLayer.toGeoJSON());
        });
    };
    // MARKERS
    /**
     * @param {?} position
     * @param {?=} options
     * @return {?}
     */
    LeafletMap.prototype.addMarker = /**
     * @param {?} position
     * @param {?=} options
     * @return {?}
     */
    function (position, options) {
        return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(position, options).addTo(this.map);
    };
    /**
     * @param {?} position
     * @param {?} html
     * @return {?}
     */
    LeafletMap.prototype.addHtmlMarker = /**
     * @param {?} position
     * @param {?} html
     * @return {?}
     */
    function (position, html) {
        var /** @type {?} */ customIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({ html: html, className: 'aui-leaflet__html-icon' });
        return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(position, {
            icon: customIcon,
        }).addTo(this.map);
    };
    return LeafletMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletControlComponent = /** @class */ (function () {
    function LeafletControlComponent() {
    }
    LeafletControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-leaflet-control',
                    template: "<button class=\"aui-leaflet__control a-button a-button--small has-icon\" [disabled]=\"disabled\">\n\t<i [class]=\"'fa fa-' + icon\"></i>\n</button>\n",
                },] },
    ];
    /** @nocollapse */
    LeafletControlComponent.propDecorators = {
        "icon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return LeafletControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletDragControlComponent = /** @class */ (function () {
    function LeafletDragControlComponent() {
    }
    LeafletDragControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-leaflet-drag-control',
                    template: "<aui-leaflet-control (click)=\"map?.switchToDragging()\" icon=\"hand-paper-o\"></aui-leaflet-control>\n",
                },] },
    ];
    return LeafletDragControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletDrawControlComponent = /** @class */ (function () {
    function LeafletDrawControlComponent() {
    }
    LeafletDrawControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-leaflet-draw-control',
                    template: "<div auiFlyout>\n\t<button auiFlyoutAction class=\"a-button a-button--small has-icon\">\n\t\t<i class=\"fa fa-pencil\"></i>\n\t</button>\n\t<div auiFlyoutZone>\n\t\t<ul class=\"m-selectable-list m-selectable-list--no-border\">\n\t\t\t<li auiFlyoutClose><a (click)=\"map?.switchToPolygon()\" class=\"m-selectable-list__item\">Vorm intekenen</a></li>\n\t\t\t<li auiFlyoutClose><a (click)=\"map?.switchToLine()\" class=\"m-selectable-list__item\">Lijn/route intekenen</a></li>\n\t\t</ul>\n\t</div>\n</div>\n",
                },] },
    ];
    return LeafletDrawControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletFullscreenControlComponent = /** @class */ (function () {
    function LeafletFullscreenControlComponent() {
    }
    LeafletFullscreenControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-leaflet-fullscreen-control',
                    template: "<aui-leaflet-control (click)=\"map?.toggleFullScreen()\" icon=\"arrows-alt\"></aui-leaflet-control>\n",
                },] },
    ];
    return LeafletFullscreenControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletLocateControlComponent = /** @class */ (function () {
    function LeafletLocateControlComponent() {
    }
    LeafletLocateControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-leaflet-locate-control',
                    template: "<aui-leaflet-control icon=\"crosshairs\" (click)=\"map?.locate()\" [disabled]=\"map?.locating\"></aui-leaflet-control>\n",
                },] },
    ];
    return LeafletLocateControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletZoomControlComponent = /** @class */ (function () {
    function LeafletZoomControlComponent() {
    }
    LeafletZoomControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-leaflet-zoom-control',
                    template: "<aui-leaflet-control\n\tclass=\"aui-leaflet__zoom-control\"\n\ticon=\"plus\" (click)=\"map?.zoomIn()\"\n\t[disabled]=\"map?.zoomInDisabled()\"></aui-leaflet-control>\n<aui-leaflet-control\n\tclass=\"aui-leaflet__zoom-control\"\n\ticon=\"minus\" (click)=\"map?.zoomOut()\"\n\t[disabled]=\"map?.zoomOutDisabled()\"></aui-leaflet-control>\n",
                },] },
    ];
    return LeafletZoomControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletComponent = /** @class */ (function () {
    function LeafletComponent() {
        this.hasSidebar = false;
    }
    /**
     * @return {?}
     */
    LeafletComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Make sure the map is properly rendered before initializing it
        setTimeout(function () {
            _this.leafletMap.init(_this.map.nativeElement);
        });
    };
    /**
     * @return {?}
     */
    LeafletComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        [
            this.fullScreenControl,
            this.zoomControl,
            this.locateControl,
            this.dragControl,
            this.drawControl,
        ].forEach(function (control) { return control ? control.map = _this.leafletMap : null; });
    };
    LeafletComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-leaflet',
                    template: "<div class=\"aui-leaflet\" [ngClass]=\"{'is-full-screen': leafletMap.fullScreen}\">\n\t<div class=\"aui-leaflet__content\" [ngClass]=\"{'has-content': hasSidebar}\" #content>\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"aui-leaflet__wrapper\">\n\t\t<div #map class=\"aui-leaflet__map\"></div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--top-left\">\n\t\t\t<ng-content select=\"[controls][top][left]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--top-right\">\n\t\t\t<ng-content select=\"[controls][top][right]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--bottom-right\">\n\t\t\t<ng-content select=\"[controls][bottom][right]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--bottom-left\">\n\t\t\t<ng-content select=\"[controls][bottom][left]\"></ng-content>\n\t\t</div>\n\t</div>\n</div>\n",
                    styles: [".aui-leaflet{border:1px solid #b0b0b0;display:flex;height:600px;width:100%}.aui-leaflet__wrapper{flex:1;height:100%;overflow:hidden;position:relative}.aui-leaflet.is-full-screen{border:none;bottom:0;position:fixed;height:100%;left:0;right:0;top:0;z-index:10}.aui-leaflet__map{font-size:inherit;font-family:inherit;height:100%;position:relative;z-index:1}.aui-leaflet__content{background-color:#fff;overflow:auto;width:0}.aui-leaflet.is-full-screen .aui-leaflet__content{border:1px solid #b0b0b0;box-shadow:7px 7px 0 rgba(0,0,0,.1);position:absolute;left:20px;max-height:calc(100% - 160px);top:20px;width:350px;z-index:2}.aui-leaflet__content.has-content{border-right:1px solid #b0b0b0;padding:20px;width:300px}.aui-leaflet__controls{position:absolute;z-index:2}.aui-leaflet__controls--bottom-left{bottom:20px;left:20px}.aui-leaflet__controls--bottom-right{bottom:20px;right:20px}.aui-leaflet__controls--top-left{left:20px;top:20px}.aui-leaflet.is-full-screen .aui-leaflet__controls--top-left{left:390px}.aui-leaflet__controls--top-right{right:20px;top:20px}.aui-leaflet__control{float:left}.aui-leaflet__controls--top-left .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-bottom:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--bottom-right .aui-leaflet__control{margin-top:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--top-left .aui-leaflet__control{margin-right:5px}.aui-leaflet__controls--bottom-right .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-left:5px}.aui-leaflet__zoom-control{display:block}.aui-leaflet__html-icon{background-color:transparent;border:none}.leaflet-popup-content-wrapper{border:1px solid #f3f3f3!important;border-radius:0!important;box-shadow:.5rem .5rem 0 rgba(0,0,0,.1)!important;position:relative}.leaflet-popup-content-wrapper::after{content:'';position:absolute;bottom:-1px;height:1px;background-color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:22px}.leaflet-popup-content{margin:10px!important;font-size:14px}.leaflet-container{font-family:inherit!important}.leaflet-popup-close-button{right:5px!important;top:5px!important;z-index:1}"],
                    // @todo: move this to aui-kit/core branding? check with styleguide team
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    LeafletComponent.propDecorators = {
        "map": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['map',] },],
        "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content',] },],
        "fullScreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [LeafletFullscreenControlComponent,] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [LeafletZoomControlComponent,] },],
        "locateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [LeafletLocateControlComponent,] },],
        "dragControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [LeafletDragControlComponent,] },],
        "drawControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [LeafletDrawControlComponent,] },],
        "leafletMap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hasSidebar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return LeafletComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ baseMapWorldGray = {
    name: 'Base world gray',
    url: 'http://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    options: {
        subdomains: ['server', 'services'],
        maxNativeZoom: 16,
    },
};
var /** @type {?} */ baseMapAntwerp = {
    name: 'Base antwerp',
    url: 'http://basemap.antwerpen.be/tile/{z}/{y}/{x}',
    options: {
        minZoom: 13,
        maxNativeZoom: 19,
        maxZoom: 21,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    LeafletControlComponent,
    LeafletDragControlComponent,
    LeafletDrawControlComponent,
    LeafletFullscreenControlComponent,
    LeafletLocateControlComponent,
    LeafletZoomControlComponent,
    LeafletComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeafletModule = /** @class */ (function () {
    function LeafletModule() {
    }
    LeafletModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _acpaas_ui_ngx_components_flyout__WEBPACK_IMPORTED_MODULE_7__["FlyoutModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(Components),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(Components),
                },] },
    ];
    return LeafletModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9tYXAvbGliL2xlYWZsZXQvY2xhc3Nlcy9sZWFmbGV0LW1hcC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvY29udHJvbHMvbGVhZmxldC1jb250cm9sL2xlYWZsZXQtY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvY29udHJvbHMvbGVhZmxldC1kcmF3LWNvbnRyb2wvbGVhZmxldC1kcmF3LWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9tYXAvbGliL2xlYWZsZXQvY29tcG9uZW50cy9jb250cm9scy9sZWFmbGV0LWZ1bGxzY3JlZW4tY29udHJvbC9sZWFmbGV0LWZ1bGxzY3JlZW4tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wvbGVhZmxldC1sb2NhdGUtY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9jb21wb25lbnRzL2NvbnRyb2xzL2xlYWZsZXQtem9vbS1jb250cm9sL2xlYWZsZXQtem9vbS1jb250cm9sLmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvbGVhZmxldC9sZWFmbGV0LmNvbXBvbmVudC50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2xlYWZsZXQuY29uZi50cyIsIm5nOi8vbWFwL2xpYi9sZWFmbGV0L2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL21hcC9saWIvbGVhZmxldC9sZWFmbGV0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgKiBhcyBlc3JpIGZyb20gJ2VzcmktbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XG5cbmltcG9ydCB7IExlYWZsZXRMYXllciwgTGVhZmxldE1hcE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9sZWFmbGV0LnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXAge1xuXHRwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cdHByaXZhdGUgcG9seWdvbkRyYXdlcjogYW55O1xuXHRwcml2YXRlIGxpbmVEcmF3ZXI6IGFueTtcblx0cHJpdmF0ZSBlZGl0aW5nTGF5ZXI6IGFueTtcblx0cHVibGljIG1hcDogTC5NYXA7XG5cdHB1YmxpYyBsb2NhdGluZyA9IGZhbHNlO1xuXHRwdWJsaWMgZnVsbFNjcmVlbiA9IGZhbHNlO1xuXHRwdWJsaWMgb25Jbml0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbW9kZXMgPSB7XG5cdFx0RFJBR0dJTkc6IDAsXG5cdFx0RFJBV0lOR19QT0xZR09OOiAxLFxuXHRcdERSQVdJTkdfTElORTogMixcblx0fTtcblx0cHVibGljIG1vZGUgPSB0aGlzLm1vZGVzLkRSQUdHSU5HO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBMZWFmbGV0TWFwT3B0aW9ucykge1xuXHR9XG5cblx0Ly8gTElGRUNZQ0xFXG5cdGluaXQoZWxlbWVudDogYW55KSB7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy5tYXAgPSBMLm1hcChlbGVtZW50LCB7XG5cdFx0XHRjZW50ZXI6IHRoaXMub3B0aW9ucy5jZW50ZXIsXG5cdFx0XHR6b29tOiB0aGlzLm9wdGlvbnMuem9vbSxcblx0XHRcdGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2UsXG5cdFx0XHR6b29tQ29udHJvbDogZmFsc2UsXG5cdFx0XHRzY3JvbGxXaGVlbFpvb206IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMub25Jbml0LmVtaXQoKTtcblx0fVxuXG5cdC8vIExBWUVSU1xuXHRhZGRUaWxlTGF5ZXIobGF5ZXI6IExlYWZsZXRMYXllcikge1xuXHRcdGNvbnN0IHRpbGVMYXllciA9IG5ldyBMLlRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKHRpbGVMYXllcik7XG5cdFx0cmV0dXJuIHRpbGVMYXllcjtcblx0fVxuXG5cdGFkZEZlYXR1cmVMYXllcihjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyBlc3JpLmZlYXR1cmVMYXllcihjb25maWcpO1xuXHRcdHRoaXMubWFwLmFkZExheWVyKGZlYXR1cmVMYXllcik7XG5cdFx0cmV0dXJuIGZlYXR1cmVMYXllcjtcblx0fVxuXG5cdGFkZEdlb0pTT04oZ2VvSlNPTjogYW55LCBjb25maWc6IGFueSkge1xuXHRcdGNvbnN0IGdlb0pTT05MYXllciA9IEwuZ2VvSlNPTihnZW9KU09OLCBjb25maWcpO1xuXHRcdGdlb0pTT05MYXllci5hZGRUbyh0aGlzLm1hcCk7XG5cdFx0cmV0dXJuIGdlb0pTT05MYXllcjtcblx0fVxuXG5cdGZpdEZlYXR1cmVMYXllcnMoZmVhdHVyZUxheWVyczogYW55W10pIHtcblx0XHRjb25zdCBib3VuZHMgPSBMLmxhdExuZ0JvdW5kcygoW10pKTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cdFx0ZmVhdHVyZUxheWVycy5mb3JFYWNoKChmZWF0dXJlTGF5ZXIpID0+IHtcblx0XHRcdGZlYXR1cmVMYXllci5vbmNlKCdsb2FkJywgKCkgPT4ge1xuXHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdGZlYXR1cmVMYXllci5lYWNoRmVhdHVyZSgobGF5ZXI6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGJvdW5kcy5leHRlbmQobGF5ZXIuZ2V0Qm91bmRzKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoY291bnRlciA9PT0gZmVhdHVyZUxheWVycy5sZW5ndGggJiYgYm91bmRzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZUxheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLm1hcC5yZW1vdmVMYXllcihsYXllcik7XG5cdH1cblxuXHQvLyBGVUxMU0NSRUVOXG5cdHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XG5cdFx0dGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlbjtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLmludmFsaWRhdGVTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gWk9PTUlOR1xuXHR6b29tSW4oKSB7XG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMubWFwLnpvb21JbigpO1xuXHRcdH1cblx0fVxuXG5cdHpvb21JbkRpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWF4Wm9vbSgpIDw9IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR6b29tT3V0KCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC56b29tT3V0KCk7XG5cdFx0fVxuXHR9XG5cblx0em9vbU91dERpc2FibGVkKCkge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0TWluWm9vbSgpID49IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBDRU5URVJJTkdcblx0bG9jYXRlKCkge1xuXHRcdGlmICghdGhpcy5sb2NhdGluZyAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLmxvY2F0aW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubWFwLmxvY2F0ZSgpO1xuXHRcdFx0dGhpcy5tYXAub24oJ2xvY2F0aW9uZm91bmQnLCAoZTogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9jYXRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXAuc2V0VmlldyhlLmxhdGxuZywgMTkpO1xuXHRcdFx0XHR0aGlzLm1hcC5vZmYoJ2xvY2F0aW9uZm91bmQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldFZpZXcoY2VudGVyOiBMLkxhdExuZ0V4cHJlc3Npb24sIHpvb206IG51bWJlcikge1xuXHRcdGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLm1hcC5zZXRWaWV3KGNlbnRlciwgem9vbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRFJBV0lOR1xuXHRzd2l0Y2hUb0RyYWdnaW5nID0gKCkgPT4ge1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBR0dJTkc7XG5cdFx0aWYgKHRoaXMucG9seWdvbkRyYXdlcikge1xuXHRcdFx0dGhpcy5wb2x5Z29uRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKHRoaXMubGluZURyYXdlcikge1xuXHRcdFx0dGhpcy5saW5lRHJhd2VyLmRpc2FibGUoKTtcblx0XHRcdHRoaXMubGluZURyYXdlciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dGhpcy5tYXAub2ZmKEwuRHJhdy5FdmVudC5DUkVBVEVEKTtcblx0XHR0aGlzLm1hcC5vZmYoTC5EcmF3LkV2ZW50LkRSQVdTVE9QKTtcblx0fVxuXG5cdC8vIERSQVdJTkc6IFBPTFlHT05cblx0c3dpdGNoVG9Qb2x5Z29uKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19QT0xZR09OO1xuXHRcdGlmICghdGhpcy5wb2x5Z29uRHJhd2VyKSB7XG5cdFx0XHR0aGlzLnBvbHlnb25EcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5Z29uJ10odGhpcy5tYXAsIHtcblx0XHRcdFx0c2hhcGVPcHRpb25zOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yID8ge1xuXHRcdFx0XHRcdGNvbG9yOiB0aGlzLm9wdGlvbnMucG9seWdvbkNvbG9yLFxuXHRcdFx0XHR9IDoge30sXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucG9seWdvbkRyYXdlci5lbmFibGUoKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCB0aGlzLmhhbmRsZURyYXdQb2x5Z29uKTtcblx0XHRcdHRoaXMubWFwLm9uKEwuRHJhdy5FdmVudC5EUkFXU1RPUCwgdGhpcy5zd2l0Y2hUb0RyYWdnaW5nKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVEcmF3UG9seWdvbiA9IChlOiBhbnkpID0+IHtcblx0XHR0aGlzLm1hcC5hZGRMYXllcihlLmxheWVyKTtcblx0XHR0aGlzLm9wdGlvbnMub25BZGRQb2x5Z29uKGUubGF5ZXIpO1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHR9XG5cblx0Ly8gRFJBV0lORzogTElORVNcblx0c3dpdGNoVG9MaW5lKCkge1xuXHRcdHRoaXMuc3dpdGNoVG9EcmFnZ2luZygpO1xuXHRcdHRoaXMubW9kZSA9IHRoaXMubW9kZXMuRFJBV0lOR19MSU5FO1xuXHRcdGlmICghdGhpcy5saW5lRHJhd2VyKSB7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIgPSBuZXcgTC5EcmF3WydQb2x5bGluZSddKHRoaXMubWFwLCB7XG5cdFx0XHRcdHNoYXBlT3B0aW9uczogdGhpcy5vcHRpb25zLmxpbmVDb2xvciA/IHtcblx0XHRcdFx0XHRjb2xvcjogdGhpcy5vcHRpb25zLmxpbmVDb2xvcixcblx0XHRcdFx0fSA6IHt9LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmxpbmVEcmF3ZXIuZW5hYmxlKCk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuQ1JFQVRFRCwgdGhpcy5oYW5kbGVEcmF3TGluZSk7XG5cdFx0XHR0aGlzLm1hcC5vbihMLkRyYXcuRXZlbnQuRFJBV1NUT1AsIHRoaXMuc3dpdGNoVG9EcmFnZ2luZyk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlRHJhd0xpbmUgPSAoZTogYW55KSA9PiB7XG5cdFx0dGhpcy5tYXAuYWRkTGF5ZXIoZS5sYXllcik7XG5cdFx0dGhpcy5vcHRpb25zLm9uQWRkTGluZShlLmxheWVyKTtcblx0XHR0aGlzLnN3aXRjaFRvRHJhZ2dpbmcoKTtcblx0fVxuXG5cdC8vIEVESVQ6IExBWUVSXG5cdHN0YXJ0RWRpdExheWVyKGxheWVyOiBhbnkpIHtcblx0XHR0aGlzLnN0b3BFZGl0TGF5ZXIoKTtcblx0XHR0aGlzLmVkaXRpbmdMYXllciA9IGxheWVyO1xuXHRcdC8vIFRPRE86IHRlbXAgd29ya2Fyb3VuZCBmb3IgY2hyb21lIDYyXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0xlYWZsZXQvTGVhZmxldC5kcmF3L2lzc3Vlcy84MDRcblx0XHR0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgPSB0aGlzLmVkaXRpbmdMYXllci5vcHRpb25zLmVkaXRpbmcgfHwgKHRoaXMuZWRpdGluZ0xheWVyLm9wdGlvbnMuZWRpdGluZyA9IHt9KTtcblx0XHR0aGlzLmVkaXRpbmdMYXllci5lZGl0aW5nLmVuYWJsZSgpO1xuXG5cdFx0dGhpcy5tYXAub24oJ2NsaWNrJywgdGhpcy5zdG9wRWRpdExheWVyKTtcblxuXHRcdHRoaXMuZWRpdGluZ0xheWVyLm9uKCdlZGl0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIuZmVhdHVyZSA9IHRoaXMuZWRpdGluZ0xheWVyLnRvR2VvSlNPTigpO1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uRWRpdEZlYXR1cmUodGhpcy5lZGl0aW5nTGF5ZXIudG9HZW9KU09OKCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0c3RvcEVkaXRMYXllciA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5lZGl0aW5nTGF5ZXIpIHtcblx0XHRcdHRoaXMuZWRpdGluZ0xheWVyLmVkaXRpbmcuZGlzYWJsZSgpO1xuXHRcdFx0dGhpcy5lZGl0aW5nTGF5ZXIub2ZmKCdlZGl0Jyk7XG5cdFx0fVxuXHRcdHRoaXMubWFwLm9mZignY2xpY2snLCB0aGlzLnN0b3BFZGl0TGF5ZXIpO1xuXHR9XG5cblx0Ly8gTUFSS0VSU1xuXHRhZGRNYXJrZXIocG9zaXRpb246IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IGFueSkge1xuXHRcdHJldHVybiBMLm1hcmtlcihwb3NpdGlvbiwgb3B0aW9ucykuYWRkVG8odGhpcy5tYXApO1xuXHR9XG5cblx0YWRkSHRtbE1hcmtlcihwb3NpdGlvbjogTC5MYXRMbmdFeHByZXNzaW9uLCBodG1sOiBzdHJpbmcpIHtcblx0XHRjb25zdCBjdXN0b21JY29uID0gTC5kaXZJY29uKHsgaHRtbDogaHRtbCwgY2xhc3NOYW1lOiAnYXVpLWxlYWZsZXRfX2h0bWwtaWNvbicgfSk7XG5cdFx0cmV0dXJuIEwubWFya2VyKHBvc2l0aW9uLCB7XG5cdFx0XHRpY29uOiBjdXN0b21JY29uLFxuXHRcdH0pLmFkZFRvKHRoaXMubWFwKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldC1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2wgYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG5cdDxpIFtjbGFzc109XCInZmEgZmEtJyArIGljb25cIj48L2k+XG48L2J1dHRvbj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRDb250cm9sQ29tcG9uZW50IHtcblx0QElucHV0KCkgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYWctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGF1aS1sZWFmbGV0LWNvbnRyb2wgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9EcmFnZ2luZygpXCIgaWNvbj1cImhhbmQtcGFwZXItb1wiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYXctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQ+XG5cdDxidXR0b24gYXVpRmx5b3V0QWN0aW9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIj48L2k+XG5cdDwvYnV0dG9uPlxuXHQ8ZGl2IGF1aUZseW91dFpvbmU+XG5cdFx0PHVsIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3QgbS1zZWxlY3RhYmxlLWxpc3QtLW5vLWJvcmRlclwiPlxuXHRcdFx0PGxpIGF1aUZseW91dENsb3NlPjxhIChjbGljayk9XCJtYXA/LnN3aXRjaFRvUG9seWdvbigpXCIgY2xhc3M9XCJtLXNlbGVjdGFibGUtbGlzdF9faXRlbVwiPlZvcm0gaW50ZWtlbmVuPC9hPjwvbGk+XG5cdFx0XHQ8bGkgYXVpRmx5b3V0Q2xvc2U+PGEgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9MaW5lKClcIiBjbGFzcz1cIm0tc2VsZWN0YWJsZS1saXN0X19pdGVtXCI+TGlqbi9yb3V0ZSBpbnRla2VuZW48L2E+PC9saT5cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTGVhZmxldERyYXdDb250cm9sQ29tcG9uZW50IHtcblx0bWFwOiBMZWFmbGV0TWFwO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWxlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YXVpLWxlYWZsZXQtY29udHJvbCAoY2xpY2spPVwibWFwPy50b2dnbGVGdWxsU2NyZWVuKClcIiBpY29uPVwiYXJyb3dzLWFsdFwiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWxvY2F0ZS1jb250cm9sJyxcblx0dGVtcGxhdGU6IGA8YXVpLWxlYWZsZXQtY29udHJvbCBpY29uPVwiY3Jvc3NoYWlyc1wiIChjbGljayk9XCJtYXA/LmxvY2F0ZSgpXCIgW2Rpc2FibGVkXT1cIm1hcD8ubG9jYXRpbmdcIj48L2F1aS1sZWFmbGV0LWNvbnRyb2w+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LXpvb20tY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGF1aS1sZWFmbGV0LWNvbnRyb2xcblx0Y2xhc3M9XCJhdWktbGVhZmxldF9fem9vbS1jb250cm9sXCJcblx0aWNvbj1cInBsdXNcIiAoY2xpY2spPVwibWFwPy56b29tSW4oKVwiXG5cdFtkaXNhYmxlZF09XCJtYXA/Lnpvb21JbkRpc2FibGVkKClcIj48L2F1aS1sZWFmbGV0LWNvbnRyb2w+XG48YXVpLWxlYWZsZXQtY29udHJvbFxuXHRjbGFzcz1cImF1aS1sZWFmbGV0X196b29tLWNvbnRyb2xcIlxuXHRpY29uPVwibWludXNcIiAoY2xpY2spPVwibWFwPy56b29tT3V0KClcIlxuXHRbZGlzYWJsZWRdPVwibWFwPy56b29tT3V0RGlzYWJsZWQoKVwiPjwvYXVpLWxlYWZsZXQtY29udHJvbD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCB7XG5cdG1hcDogTGVhZmxldE1hcDtcbn1cbiIsImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdFZpZXdDaGlsZCxcblx0Q29udGVudENoaWxkLFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcbmltcG9ydCB7IExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LXpvb20tY29udHJvbC9sZWFmbGV0LXpvb20tY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWxvY2F0ZS1jb250cm9sL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhd0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWRyYXctY29udHJvbC9sZWFmbGV0LWRyYXctY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0XCIgW25nQ2xhc3NdPVwieydpcy1mdWxsLXNjcmVlbic6IGxlYWZsZXRNYXAuZnVsbFNjcmVlbn1cIj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250ZW50XCIgW25nQ2xhc3NdPVwieydoYXMtY29udGVudCc6IGhhc1NpZGViYXJ9XCIgI2NvbnRlbnQ+XG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X193cmFwcGVyXCI+XG5cdFx0PGRpdiAjbWFwIGNsYXNzPVwiYXVpLWxlYWZsZXRfX21hcFwiPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVt0b3BdW2xlZnRdXCI+PC9uZy1jb250ZW50PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtcmlnaHRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bdG9wXVtyaWdodF1cIj48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250cm9scyBhdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVtib3R0b21dW3JpZ2h0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2xzIGF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bYm90dG9tXVtsZWZ0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AuYXVpLWxlYWZsZXR7Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NjAwcHg7d2lkdGg6MTAwJX0uYXVpLWxlYWZsZXRfX3dyYXBwZXJ7ZmxleDoxO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW57Ym9yZGVyOm5vbmU7Ym90dG9tOjA7cG9zaXRpb246Zml4ZWQ7aGVpZ2h0OjEwMCU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMH0uYXVpLWxlYWZsZXRfX21hcHtmb250LXNpemU6aW5oZXJpdDtmb250LWZhbWlseTppbmhlcml0O2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uYXVpLWxlYWZsZXRfX2NvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO292ZXJmbG93OmF1dG87d2lkdGg6MH0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW4gLmF1aS1sZWFmbGV0X19jb250ZW50e2JvcmRlcjoxcHggc29saWQgI2IwYjBiMDtib3gtc2hhZG93OjdweCA3cHggMCByZ2JhKDAsMCwwLC4xKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjIwcHg7bWF4LWhlaWdodDpjYWxjKDEwMCUgLSAxNjBweCk7dG9wOjIwcHg7d2lkdGg6MzUwcHg7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udGVudC5oYXMtY29udGVudHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiMGIwYjA7cGFkZGluZzoyMHB4O3dpZHRoOjMwMHB4fS5hdWktbGVhZmxldF9fY29udHJvbHN7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1sZWZ0e2JvdHRvbToyMHB4O2xlZnQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS1ib3R0b20tcmlnaHR7Ym90dG9tOjIwcHg7cmlnaHQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdHtsZWZ0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0LmlzLWZ1bGwtc2NyZWVuIC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0e2xlZnQ6MzkwcHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0e3JpZ2h0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0X19jb250cm9se2Zsb2F0OmxlZnR9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLWJvdHRvbTo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLXRvcDo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tcmlnaHQ6NXB4fS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2wsLmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tbGVmdDo1cHh9LmF1aS1sZWFmbGV0X196b29tLWNvbnRyb2x7ZGlzcGxheTpibG9ja30uYXVpLWxlYWZsZXRfX2h0bWwtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lfS5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcntib3JkZXI6MXB4IHNvbGlkICNmM2YzZjMhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzouNXJlbSAuNXJlbSAwIHJnYmEoMCwwLDAsLjEpIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZX0ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXI6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xcHg7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aWR0aDoyMnB4fS5sZWFmbGV0LXBvcHVwLWNvbnRlbnR7bWFyZ2luOjEwcHghaW1wb3J0YW50O2ZvbnQtc2l6ZToxNHB4fS5sZWFmbGV0LWNvbnRhaW5lcntmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudH0ubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b257cmlnaHQ6NXB4IWltcG9ydGFudDt0b3A6NXB4IWltcG9ydGFudDt6LWluZGV4OjF9YF0sIC8vIEB0b2RvOiBtb3ZlIHRoaXMgdG8gYXVpLWtpdC9jb3JlIGJyYW5kaW5nPyBjaGVjayB3aXRoIHN0eWxlZ3VpZGUgdGVhbVxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cdEBWaWV3Q2hpbGQoJ21hcCcpIG1hcDogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50KSBmdWxsU2NyZWVuQ29udHJvbDogTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCkgem9vbUNvbnRyb2w6IExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudDtcblx0QENvbnRlbnRDaGlsZChMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCkgbG9jYXRlQ29udHJvbDogTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQ7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50KSBkcmFnQ29udHJvbDogTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCkgZHJhd0NvbnRyb2w6IExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudDtcblx0QElucHV0KCkgbGVhZmxldE1hcDogTGVhZmxldE1hcDtcblx0QElucHV0KCkgaGFzU2lkZWJhciA9IGZhbHNlO1xuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHQvLyBNYWtlIHN1cmUgdGhlIG1hcCBpcyBwcm9wZXJseSByZW5kZXJlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGl0XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmxlYWZsZXRNYXAuaW5pdCh0aGlzLm1hcC5uYXRpdmVFbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRbXG5cdFx0XHR0aGlzLmZ1bGxTY3JlZW5Db250cm9sLFxuXHRcdFx0dGhpcy56b29tQ29udHJvbCxcblx0XHRcdHRoaXMubG9jYXRlQ29udHJvbCxcblx0XHRcdHRoaXMuZHJhZ0NvbnRyb2wsXG5cdFx0XHR0aGlzLmRyYXdDb250cm9sLFxuXHRcdF0uZm9yRWFjaChjb250cm9sID0+IGNvbnRyb2wgPyBjb250cm9sLm1hcCA9IHRoaXMubGVhZmxldE1hcCA6IG51bGwpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBMZWFmbGV0TGF5ZXIgfSBmcm9tICcuL3R5cGVzL2xlYWZsZXQudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgYmFzZU1hcFdvcmxkR3JheTogTGVhZmxldExheWVyID0ge1xuXHRuYW1lOiAnQmFzZSB3b3JsZCBncmF5Jyxcblx0dXJsOiAnaHR0cDovL3tzfS5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0NhbnZhcy9Xb3JsZF9MaWdodF9HcmF5X0Jhc2UvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuXHRvcHRpb25zOiB7XG5cdFx0c3ViZG9tYWluczogWydzZXJ2ZXInLCAnc2VydmljZXMnXSxcblx0XHRtYXhOYXRpdmVab29tOiAxNixcblx0fSxcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlTWFwQW50d2VycDogTGVhZmxldExheWVyID0ge1xuXHRuYW1lOiAnQmFzZSBhbnR3ZXJwJyxcblx0dXJsOiAnaHR0cDovL2Jhc2VtYXAuYW50d2VycGVuLmJlL3RpbGUve3p9L3t5fS97eH0nLFxuXHRvcHRpb25zOiB7XG5cdFx0bWluWm9vbTogMTMsXG5cdFx0bWF4TmF0aXZlWm9vbTogMTksXG5cdFx0bWF4Wm9vbTogMjEsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHsgTGVhZmxldENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2xlYWZsZXQtY29udHJvbC9sZWFmbGV0LWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGVhZmxldC1kcmFnLWNvbnRyb2wvbGVhZmxldC1kcmFnLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGVhZmxldC1kcmF3LWNvbnRyb2wvbGVhZmxldC1kcmF3LWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2wvbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXRMb2NhdGVDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9sZWFmbGV0LWxvY2F0ZS1jb250cm9sL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMvbGVhZmxldC16b29tLWNvbnRyb2wvbGVhZmxldC16b29tLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXRDb21wb25lbnQgfSBmcm9tICcuL2xlYWZsZXQvbGVhZmxldC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0TGVhZmxldENvbnRyb2xDb21wb25lbnQsXG5cdExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCxcblx0TGVhZmxldERyYXdDb250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0RnVsbHNjcmVlbkNvbnRyb2xDb21wb25lbnQsXG5cdExlYWZsZXRMb2NhdGVDb250cm9sQ29tcG9uZW50LFxuXHRMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQsXG5cdExlYWZsZXRDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmx5b3V0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XG5pbXBvcnQgJ2xlYWZsZXQtZHJhdy9kaXN0L2xlYWZsZXQuZHJhdy5jc3MnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEZseW91dE1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbIkwuRHJhdyIsIkwubWFwIiwiTC5UaWxlTGF5ZXIiLCJmZWF0dXJlTGF5ZXIiLCJlc3JpLmZlYXR1cmVMYXllciIsImdlb0pTT04iLCJMLmdlb0pTT04iLCJMLmxhdExuZ0JvdW5kcyIsIkwubWFya2VyIiwiTC5kaXZJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQU9BO0lBZ0JDLG9CQUFtQixPQUEwQjtRQUE3QyxpQkFDQztRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFtQjsyQkFmdkIsS0FBSzt3QkFLVCxLQUFLOzBCQUNILEtBQUs7c0JBQ1QsSUFBSSxZQUFZLEVBQUU7cUJBQ25CO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxlQUFlLEVBQUUsQ0FBQztZQUNsQixZQUFZLEVBQUUsQ0FBQztTQUNmO29CQUNhLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTs7Z0NBdUhkO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixLQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzthQUMvQjtZQUNELElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7YUFD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

/***/ }),

/***/ "./dist/pagination/fesm5/pagination.js":
/*!*********************************************!*\
  !*** ./dist/pagination/fesm5/pagination.js ***!
  \*********************************************/
/*! exports provided: PaginationComponent, PAGINATION_LABELS, PAGINATION_LABELS_DEFAULT, PaginationModule, ItemCounterComponent, ItemsPerPageComponent, sizes, ITEM_COUNTER_LABEL, ITEMS_PER_PAGE_LABEL, ItemCounterModule, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_LABELS", function() { return PAGINATION_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_LABELS_DEFAULT", function() { return PAGINATION_LABELS_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCounterComponent", function() { return ItemCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPerPageComponent", function() { return ItemsPerPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM_COUNTER_LABEL", function() { return ITEM_COUNTER_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_PER_PAGE_LABEL", function() { return ITEMS_PER_PAGE_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCounterModule", function() { return ItemCounterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Components$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acpaas-ui/ngx-components/utils */ "./dist/utils/fesm5/utils.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.ariaNavigationLabel = 'Paginering';
        this.ariaPreviousLabel = 'Ga naar de vorige pagina';
        this.ariaNextLabel = 'Ga naar de volgende pagina';
        this.display = 'basic';
        this.styling = 'outlined';
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        var /** @type {?} */ parsedValue = parseInt(/** @type {?} */ (i), 10); // input from numbers array is a string
        if (parsedValue) {
            this.update.emit(parsedValue);
        }
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-pagination',
                    template: "<nav *ngIf=\"totalPages > 1\" role=\"navigation\" [attr.aria-label]= ariaNavigationLabel>\n    <!-- Basic -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'basic'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Text -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'text'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li class=\"m-pagination__label\">{{ currentPage }} - {{ totalPages }}</li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Numbers -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'numbers'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li *ngFor=\"let number of numbers; let i = index\">\n            <a [ngClass]=\"{'is-active': number === currentPage + '' }\" href=\"#\" id=\"pagination-{{ instanceId }}-button-{{ i }}\" (click)=\"onUpdate(number)\" [attr.aria-label]=\"'Pagina ' + number\" [attr.aria-current]=\"number === currentPage + '' ? 'page' : null\">{{ number }}</a>\n        </li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n",
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.propDecorators = {
        "ariaNavigationLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ariaPreviousLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ariaNextLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "currentPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "display": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "itemsPerPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "totalValues": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PAGINATION_LABELS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('paginationLabels');
var /** @type {?} */ PAGINATION_LABELS_DEFAULT = {
    PAGINATION_LABEL: '%{currentPage} of %{total}',
};

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
var PaginationModule = /** @class */ (function () {
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Components),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Components),
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
var /** @type {?} */ ITEM_COUNTER_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('itemCounterLabels');
var /** @type {?} */ ITEMS_PER_PAGE_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('itemsPerPageLabels');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ItemCounterComponent = /** @class */ (function () {
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-item-counter',
                    template: "<div class=\"m-item-counter\">\n    {{ label | pluralizeLabel:totalAmount | interpolateLabel:{currentFrom: currentFrom, currentTo: currentTo, totalAmount: totalAmount} }}\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{display:inline-block;vertical-align:top}.m-item-counter{line-height:3rem}"],
                },] },
    ];
    /** @nocollapse */
    ItemCounterComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ITEM_COUNTER_LABEL,] },] },
    ]; };
    ItemCounterComponent.propDecorators = {
        "setClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.aui-item-counter',] },],
        "currentPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "totalAmount": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "amountPerPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
var ItemsPerPageComponent = /** @class */ (function () {
    function ItemsPerPageComponent(label) {
        this.inputSizes = {
            S: 'a-input--small',
            R: '',
            L: 'a-input--large',
        };
        this.setClass = true;
        this.size = sizes.R;
        this.returnAmount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-items-per-page',
                    template: "<div class=\"m-items-per-page\">\n    <div class=\"a-input has-icon-right\" [ngClass]=\"[inputSizes[size]]\">\n        <div class=\"a-input__wrapper\">\n            <select name=\"input-selected\" id=\"input-select\" [ngModel]=\"amountPerPage\" (ngModelChange)=\"setAmount($event)\">\n                <option *ngFor=\"let amountOption of selectOptions\" [value]=\"amountOption\">{{ amountOption }}</option>\n            </select>\n            <span class=\"fa fa-angle-down\"></span>\n        </div>\n\n        <label class=\"a-input__label\" for=\"input-text\">{{ label | pluralizeLabel:amountPerPage }}</label>\n    </div>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{display:inline-block;vertical-align:top}.m-items-per-page .a-input .a-input__wrapper{display:inline-block;margin-right:.5rem}"],
                },] },
    ];
    /** @nocollapse */
    ItemsPerPageComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ITEMS_PER_PAGE_LABEL,] },] },
    ]; };
    ItemsPerPageComponent.propDecorators = {
        "setClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.aui-items-per-page',] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "amountPerPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "returnAmount": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
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
var ItemCounterModule = /** @class */ (function () {
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_4__["LabelsModule"],
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Components$1),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Components$1),
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcGFnaW5hdGlvbi9saWIvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb25mLnRzIiwibmc6Ly9wYWdpbmF0aW9uL2xpYi9wYWdpbmF0aW9uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29uZi50cyIsIm5nOi8vcGFnaW5hdGlvbi9saWIvaXRlbS1jb3VudGVyL2NvbXBvbmVudHMvaXRlbS1jb3VudGVyL2l0ZW0tY291bnRlci5jb21wb25lbnQudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9jb21wb25lbnRzL2l0ZW1zLXBlci1wYWdlL2l0ZW1zLXBlci1wYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vcGFnaW5hdGlvbi9saWIvaXRlbS1jb3VudGVyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkRpc3BsYXkgfSBmcm9tICcuLi8uLi90eXBlcy9wYWdpbmF0aW9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXBhZ2luYXRpb24nLFxuXHR0ZW1wbGF0ZTogYDxuYXYgKm5nSWY9XCJ0b3RhbFBhZ2VzID4gMVwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFOYXZpZ2F0aW9uTGFiZWw+XG4gICAgPCEtLSBCYXNpYyAtLT5cbiAgICA8dWwgY2xhc3M9XCJtLXBhZ2luYXRpb25cIiBbbmdDbGFzc109XCJ7J20tcGFnaW5hdGlvbi0tb3V0bGluZSc6IHN0eWxpbmcgPT09ICdvdXRsaW5lZCcgfVwiICpuZ0lmPVwiZGlzcGxheSA9PT0gJ2Jhc2ljJ1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX3ByZXZcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA8PSAxIH1cIiBbaHJlZl09XCJjdXJyZW50UGFnZSA+IDEgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tcHJldi1wYWdlXCIgKGNsaWNrKT1cInByZXYoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhUHJldmlvdXNMYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX25leHRcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzIH1cIiBbaHJlZl09XCJjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tbmV4dC1wYWdlXCIgKGNsaWNrKT1cIm5leHQoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhTmV4dExhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cblxuICAgIDwhLS0gVGV4dCAtLT5cbiAgICA8dWwgY2xhc3M9XCJtLXBhZ2luYXRpb25cIiBbbmdDbGFzc109XCJ7J20tcGFnaW5hdGlvbi0tb3V0bGluZSc6IHN0eWxpbmcgPT09ICdvdXRsaW5lZCcgfVwiICpuZ0lmPVwiZGlzcGxheSA9PT0gJ3RleHQnXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fcHJldlwiPlxuICAgICAgICAgICAgPGEgW25nQ2xhc3NdPVwieydpcy1kaXNhYmxlZCc6IGN1cnJlbnRQYWdlIDw9IDEgfVwiIFtocmVmXT1cImN1cnJlbnRQYWdlID4gMSA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1wcmV2LXBhZ2VcIiAoY2xpY2spPVwicHJldigpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFQcmV2aW91c0xhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fbGFiZWxcIj57eyBjdXJyZW50UGFnZSB9fSAtIHt7IHRvdGFsUGFnZXMgfX08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX25leHRcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzIH1cIiBbaHJlZl09XCJjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tbmV4dC1wYWdlXCIgKGNsaWNrKT1cIm5leHQoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhTmV4dExhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cblxuICAgIDwhLS0gTnVtYmVycyAtLT5cbiAgICA8dWwgY2xhc3M9XCJtLXBhZ2luYXRpb25cIiBbbmdDbGFzc109XCJ7J20tcGFnaW5hdGlvbi0tb3V0bGluZSc6IHN0eWxpbmcgPT09ICdvdXRsaW5lZCcgfVwiICpuZ0lmPVwiZGlzcGxheSA9PT0gJ251bWJlcnMnXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fcHJldlwiPlxuICAgICAgICAgICAgPGEgW25nQ2xhc3NdPVwieydpcy1kaXNhYmxlZCc6IGN1cnJlbnRQYWdlIDw9IDEgfVwiIFtocmVmXT1cImN1cnJlbnRQYWdlID4gMSA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1wcmV2LXBhZ2VcIiAoY2xpY2spPVwicHJldigpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFQcmV2aW91c0xhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgbnVtYmVyIG9mIG51bWJlcnM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtYWN0aXZlJzogbnVtYmVyID09PSBjdXJyZW50UGFnZSArICcnIH1cIiBocmVmPVwiI1wiIGlkPVwicGFnaW5hdGlvbi17eyBpbnN0YW5jZUlkIH19LWJ1dHRvbi17eyBpIH19XCIgKGNsaWNrKT1cIm9uVXBkYXRlKG51bWJlcilcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidQYWdpbmEgJyArIG51bWJlclwiIFthdHRyLmFyaWEtY3VycmVudF09XCJudW1iZXIgPT09IGN1cnJlbnRQYWdlICsgJycgPyAncGFnZScgOiBudWxsXCI+e3sgbnVtYmVyIH19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX25leHRcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzIH1cIiBbaHJlZl09XCJjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tbmV4dC1wYWdlXCIgKGNsaWNrKT1cIm5leHQoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhTmV4dExhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbjwvbmF2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHB1YmxpYyBhcmlhTmF2aWdhdGlvbkxhYmVsID0gJ1BhZ2luZXJpbmcnO1xuXHRASW5wdXQoKSBwdWJsaWMgYXJpYVByZXZpb3VzTGFiZWwgPSAnR2EgbmFhciBkZSB2b3JpZ2UgcGFnaW5hJztcblx0QElucHV0KCkgcHVibGljIGFyaWFOZXh0TGFiZWwgPSAnR2EgbmFhciBkZSB2b2xnZW5kZSBwYWdpbmEnO1xuXHRASW5wdXQoKSBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcblx0QElucHV0KCkgcHVibGljIGRpc3BsYXk6IFBhZ2luYXRpb25EaXNwbGF5ID0gJ2Jhc2ljJztcblx0QElucHV0KCkgcHVibGljIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xuXHRASW5wdXQoKSBwdWJsaWMgc3R5bGluZyA9ICdvdXRsaW5lZCc7XG5cdEBJbnB1dCgpIHB1YmxpYyB0b3RhbFZhbHVlczogbnVtYmVyO1xuXHRAT3V0cHV0KCkgcHVibGljIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgdG90YWxQYWdlcyA9IDA7XG5cdHB1YmxpYyBudW1iZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHQvLyBVc2UgdGhpcyB0byBoYXZlIHVuaXF1ZSBpZHMgd2l0aCBtdWx0aXBsZSBwYWdpbmF0aW9uIGluc3RhbmNlcyBvbiBvbmUgcGFnZS5cblx0cHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoKTtcblx0fVxuXG5cdHB1YmxpYyBuZXh0KCkge1xuXHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50b3RhbFBhZ2VzKSB7XG5cdFx0XHR0aGlzLm9uVXBkYXRlKHRoaXMuY3VycmVudFBhZ2UgKyAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyAgcHJldmVudCB0aGUgaHJlZiBiZWluZyBmb2xsb3dlZFxuXHR9XG5cblx0cHVibGljIHByZXYoKSB7XG5cdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPiAxKSB7XG5cdFx0XHR0aGlzLm9uVXBkYXRlKHRoaXMuY3VycmVudFBhZ2UgLSAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyAgcHJldmVudCB0aGUgaHJlZiBiZWluZyBmb2xsb3dlZFxuXHR9XG5cblx0cHVibGljIG9uVXBkYXRlKGk6IG51bWJlcnxzdHJpbmcpIHtcblx0XHRjb25zdCBwYXJzZWRWYWx1ZSA9IHBhcnNlSW50KGkgYXMgc3RyaW5nLCAxMCk7IC8vIGlucHV0IGZyb20gbnVtYmVycyBhcnJheSBpcyBhIHN0cmluZ1xuXHRcdGlmIChwYXJzZWRWYWx1ZSkge1xuXHRcdFx0dGhpcy51cGRhdGUuZW1pdChwYXJzZWRWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlOyAvLyAgcHJldmVudCB0aGUgaHJlZiBiZWluZyBmb2xsb3dlZFxuXHR9XG5cblx0cHJpdmF0ZSBzZXRWYWx1ZXMoKSB7XG5cdFx0aWYgKHRoaXMudG90YWxWYWx1ZXMgJiYgdGhpcy5pdGVtc1BlclBhZ2UpIHtcblx0XHRcdHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsVmFsdWVzIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuXG5cdFx0XHRjb25zdCBnZW5lcmF0ZU51bWJlcnMgPSBBcnJheSh0aGlzLnRvdGFsUGFnZXMpLmZpbGwoJycpLm1hcCgoZSwgaSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gU3RyaW5nKGkgKyAxKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoZ2VuZXJhdGVOdW1iZXJzLmxlbmd0aCA8IDgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtYmVycyA9IGdlbmVyYXRlTnVtYmVycztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPCA1KSB7XG5cdFx0XHRcdHRoaXMubnVtYmVycyA9IGdlbmVyYXRlTnVtYmVycy5zbGljZSgwLCA1KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5jdXJyZW50UGFnZSA+IHRoaXMudG90YWxQYWdlcyAtIDQpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzID0gZ2VuZXJhdGVOdW1iZXJzLnNsaWNlKHRoaXMudG90YWxQYWdlcyAtIDUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzID0gZ2VuZXJhdGVOdW1iZXJzLnNsaWNlKHRoaXMuY3VycmVudFBhZ2UgLSAyLCB0aGlzLmN1cnJlbnRQYWdlICsgMSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpcnN0IHBhZ2Vcblx0XHRcdGlmICh0aGlzLm51bWJlcnMuaW5kZXhPZignMScpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLm51bWJlcnMudW5zaGlmdCgnMScpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBMYXN0IFBhZ2Vcblx0XHRcdGlmICh0aGlzLm51bWJlcnMuaW5kZXhPZihTdHJpbmcodGhpcy50b3RhbFBhZ2VzKSkgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMubnVtYmVycy5wdXNoKFN0cmluZyh0aGlzLnRvdGFsUGFnZXMpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGRvdHMgYXQgdGhlIGJlZ2lubmluZ1xuXHRcdFx0aWYgKHRoaXMubnVtYmVycy5pbmRleE9mKCcyJykgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMubnVtYmVycy5zcGxpY2UoMSwgMCwgJy4uLicpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZG90cyBhdCB0aGUgZW5kXG5cdFx0XHRpZiAodGhpcy5udW1iZXJzLmluZGV4T2YoU3RyaW5nKHRoaXMudG90YWxQYWdlcyAtIDEpKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzLnNwbGljZSh0aGlzLm51bWJlcnMubGVuZ3RoIC0gMSwgMCwgJy4uLicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkxhYmVscyB9IGZyb20gJy4vdHlwZXMvcGFnaW5hdGlvbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX0xBQkVMUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWdpbmF0aW9uTGFiZWxzPigncGFnaW5hdGlvbkxhYmVscycpO1xuXG5leHBvcnQgY29uc3QgUEFHSU5BVElPTl9MQUJFTFNfREVGQVVMVDogUGFnaW5hdGlvbkxhYmVscyA9IHtcblx0UEFHSU5BVElPTl9MQUJFTDogJyV7Y3VycmVudFBhZ2V9IG9mICV7dG90YWx9Jyxcbn07XG4iLCJpbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdFBhZ2luYXRpb25Db21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkxhYmVscyB9IGZyb20gJy4vdHlwZXMvcGFnaW5hdGlvbi50eXBlcyc7XG5pbXBvcnQgeyBQQUdJTkFUSU9OX0xBQkVMUywgUEFHSU5BVElPTl9MQUJFTFNfREVGQVVMVCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogUEFHSU5BVElPTl9MQUJFTFMsIHVzZVZhbHVlOiBQQUdJTkFUSU9OX0xBQkVMU19ERUZBVUxUIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0cGFnaW5hdGlvbkxhYmVsczogUGFnaW5hdGlvbkxhYmVsc1xuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFBhZ2luYXRpb25Nb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBQQUdJTkFUSU9OX0xBQkVMUywgdXNlVmFsdWU6IHBhZ2luYXRpb25MYWJlbHMgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IElURU1fQ09VTlRFUl9MQUJFTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYWJlbD4oJ2l0ZW1Db3VudGVyTGFiZWxzJyk7XG5leHBvcnQgY29uc3QgSVRFTVNfUEVSX1BBR0VfTEFCRUwgPSBuZXcgSW5qZWN0aW9uVG9rZW48TGFiZWw+KCdpdGVtc1BlclBhZ2VMYWJlbHMnKTtcbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSVRFTV9DT1VOVEVSX0xBQkVMIH0gZnJvbSAnLi4vLi4vaXRlbS1jb3VudGVyLmNvbmYnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaXRlbS1jb3VudGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1pdGVtLWNvdW50ZXJcIj5cbiAgICB7eyBsYWJlbCB8IHBsdXJhbGl6ZUxhYmVsOnRvdGFsQW1vdW50IHwgaW50ZXJwb2xhdGVMYWJlbDp7Y3VycmVudEZyb206IGN1cnJlbnRGcm9tLCBjdXJyZW50VG86IGN1cnJlbnRUbywgdG90YWxBbW91bnQ6IHRvdGFsQW1vdW50fSB9fVxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcH0ubS1pdGVtLWNvdW50ZXJ7bGluZS1oZWlnaHQ6M3JlbX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvdW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuYXVpLWl0ZW0tY291bnRlcicpIHNldENsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBjdXJyZW50UGFnZTogbnVtYmVyO1xuXHRASW5wdXQoKSB0b3RhbEFtb3VudDogbnVtYmVyO1xuXHRASW5wdXQoKSBhbW91bnRQZXJQYWdlOiBudW1iZXI7XG5cdEBJbnB1dCgpIGxhYmVsOiBhbnk7XG5cblx0cHVibGljIGN1cnJlbnRGcm9tID0gMTtcblx0cHVibGljIGN1cnJlbnRUbyA9IHRoaXMuYW1vdW50UGVyUGFnZTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KElURU1fQ09VTlRFUl9MQUJFTCkgbGFiZWw6IGFueSkge1xuXHRcdGlmIChsYWJlbCAmJiAhdGhpcy5sYWJlbCkge1xuXHRcdFx0dGhpcy5sYWJlbCA9IGxhYmVsO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMubGFiZWwpIHtcblx0XHRcdHRoaXMubGFiZWwgPSB7XG5cdFx0XHRcdHNpbmd1bGFyOiAnJXtjdXJyZW50RnJvbX0gLSAle2N1cnJlbnRUb30gb2YgJXt0b3RhbEFtb3VudH0gaXRlbScsXG5cdFx0XHRcdHBsdXJhbDogJyV7Y3VycmVudEZyb219IC0gJXtjdXJyZW50VG99IG9mICV7dG90YWxBbW91bnR9IGl0ZW1zJyxcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEZyb21UbygpIHtcblx0XHR0aGlzLmN1cnJlbnRGcm9tID0gKHRoaXMuYW1vdW50UGVyUGFnZSAqICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkpICsgMTtcblx0XHQvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblx0XHR0aGlzLmN1cnJlbnRUbyA9ICh0aGlzLmFtb3VudFBlclBhZ2UgKiB0aGlzLmN1cnJlbnRQYWdlKSA8PSB0aGlzLnRvdGFsQW1vdW50ID8gdGhpcy5hbW91bnRQZXJQYWdlICogdGhpcy5jdXJyZW50UGFnZSA6IHRoaXMudG90YWxBbW91bnQ7XG5cdFx0LyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblx0fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNldEZyb21UbygpO1xuXHR9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuc2V0RnJvbVRvKCk7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0VfTEFCRUwgfSBmcm9tICcuLi8uLi9pdGVtLWNvdW50ZXIuY29uZic7XG5cbmV4cG9ydCBlbnVtIHNpemVzIHtcblx0UyA9IDxhbnk+J1MnLFxuXHRSID0gPGFueT4nUicsXG5cdEwgPSA8YW55PidMJyxcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWl0ZW1zLXBlci1wYWdlJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1pdGVtcy1wZXItcGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhLWlucHV0IGhhcy1pY29uLXJpZ2h0XCIgW25nQ2xhc3NdPVwiW2lucHV0U2l6ZXNbc2l6ZV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyXCI+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJpbnB1dC1zZWxlY3RlZFwiIGlkPVwiaW5wdXQtc2VsZWN0XCIgW25nTW9kZWxdPVwiYW1vdW50UGVyUGFnZVwiIChuZ01vZGVsQ2hhbmdlKT1cInNldEFtb3VudCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgYW1vdW50T3B0aW9uIG9mIHNlbGVjdE9wdGlvbnNcIiBbdmFsdWVdPVwiYW1vdW50T3B0aW9uXCI+e3sgYW1vdW50T3B0aW9uIH19PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiYS1pbnB1dF9fbGFiZWxcIiBmb3I9XCJpbnB1dC10ZXh0XCI+e3sgbGFiZWwgfCBwbHVyYWxpemVMYWJlbDphbW91bnRQZXJQYWdlIH19PC9sYWJlbD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3B9Lm0taXRlbXMtcGVyLXBhZ2UgLmEtaW5wdXQgLmEtaW5wdXRfX3dyYXBwZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0Oi41cmVtfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc1BlclBhZ2VDb21wb25lbnQge1xuXHRwdWJsaWMgaW5wdXRTaXplcyA9IHtcblx0XHRTOiAnYS1pbnB1dC0tc21hbGwnLFxuXHRcdFI6ICcnLFxuXHRcdEw6ICdhLWlucHV0LS1sYXJnZScsXG5cdH07XG5cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktaXRlbXMtcGVyLXBhZ2UnKSBzZXRDbGFzcyA9IHRydWU7XG5cblx0QElucHV0KCkgbGFiZWw6IGFueTtcblx0QElucHV0KCkgc2l6ZTogc2l6ZXMgPSBzaXplcy5SO1xuXHRASW5wdXQoKSBzZWxlY3RPcHRpb25zOiBudW1iZXJbXTtcblx0QElucHV0KCkgYW1vdW50UGVyUGFnZTogbnVtYmVyO1xuXHRAT3V0cHV0KCkgcmV0dXJuQW1vdW50OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoSVRFTVNfUEVSX1BBR0VfTEFCRUwpIGxhYmVsXG5cdCkge1xuXHRcdGlmIChsYWJlbCAmJiAhdGhpcy5sYWJlbCkge1xuXHRcdFx0dGhpcy5sYWJlbCA9IGxhYmVsO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMubGFiZWwpIHtcblx0XHRcdHRoaXMubGFiZWwgPSB7XG5cdFx0XHRcdHNpbmd1bGFyOiAnaXRlbSBwZXIgcGFnZScsXG5cdFx0XHRcdHBsdXJhbDogJ2l0ZW1zIHBlciBwYWdlJyxcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEFtb3VudChjaGFuZ2VkVmFsdWUpIHtcblx0XHR0aGlzLmFtb3VudFBlclBhZ2UgPSBjaGFuZ2VkVmFsdWU7XG5cdFx0dGhpcy5yZXR1cm5BbW91bnQuZW1pdCh0aGlzLmFtb3VudFBlclBhZ2UpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJdGVtQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1jb3VudGVyL2l0ZW0tY291bnRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbXNQZXJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtcy1wZXItcGFnZS9pdGVtcy1wZXItcGFnZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0SXRlbUNvdW50ZXJDb21wb25lbnQsXG5cdEl0ZW1zUGVyUGFnZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTGFiZWxzTW9kdWxlLCBMYWJlbCB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuaW1wb3J0IHsgSVRFTV9DT1VOVEVSX0xBQkVMLCBJVEVNU19QRVJfUEFHRV9MQUJFTCB9IGZyb20gJy4vaXRlbS1jb3VudGVyLmNvbmYnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdExhYmVsc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogSVRFTV9DT1VOVEVSX0xBQkVMLCB1c2VWYWx1ZTogdW5kZWZpbmVkIH0sXG5cdFx0eyBwcm92aWRlOiBJVEVNU19QRVJfUEFHRV9MQUJFTCwgdXNlVmFsdWU6IHVuZGVmaW5lZCB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ291bnRlck1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHRpdGVtQ291bnRlckxhYmVsOiBMYWJlbCxcblx0XHRpdGVtc1BlclBhZ2VMYWJlbDogTGFiZWxcblx0KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBJdGVtQ291bnRlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IElURU1fQ09VTlRFUl9MQUJFTCwgdXNlVmFsdWU6IGl0ZW1Db3VudGVyTGFiZWwgfSxcblx0XHRcdFx0eyBwcm92aWRlOiBJVEVNU19QRVJfUEFHRV9MQUJFTCwgdXNlVmFsdWU6IGl0ZW1zUGVyUGFnZUxhYmVsIH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O21DQThEdUMsWUFBWTtpQ0FDZCwwQkFBMEI7NkJBQzlCLDRCQUE0Qjt1QkFFZixPQUFPO3VCQUUxQixVQUFVO3NCQUVWLElBQUksWUFBWSxFQUFFOzBCQUV4QixDQUFDO3VCQUNNLEVBQUU7MEJBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFFNUQseUNBQVc7Ozs7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOzs7OztJQUdYLGtDQUFJOzs7O1FBQ1YsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxLQUFLLENBQUM7Ozs7O0lBR1Asa0NBQUk7Ozs7UUFDVixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNE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

/***/ }),

/***/ "./dist/progress-bar/fesm5/progress-bar.js":
/*!*************************************************!*\
  !*** ./dist/progress-bar/fesm5/progress-bar.js ***!
  \*************************************************/
/*! exports provided: ProgressBarComponent, ProgressBarModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function() { return ProgressBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.value = 0;
        this.max = 0;
    }
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.calcProgress = /**
     * @return {?}
     */
    function () {
        if (this.max > 0 && this.value > 0) {
            var /** @type {?} */ res = (this.value / this.max);
            return Math.floor(res * 100) + '%';
        }
        return 0;
    };
    ProgressBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-progress-bar',
                    template: "<div class=\"aui-progress-bar m-progress\">\n\t<div class=\"m-progress__inner\">\n\t\t<div class=\"m-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\" [attr.aria-valuenow]=\"value\" [ngStyle]=\"{'width': calcProgress()}\">\n\t\t</div>\n\t</div>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    ProgressBarComponent.propDecorators = {
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ProgressBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    ProgressBarComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ],
                    declarations: [
                        Components,
                    ],
                    exports: [
                        Components,
                    ],
                },] },
    ];
    return ProgressBarModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wcm9ncmVzcy1iYXIvbGliL3Byb2dyZXNzLWJhci9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9wcm9ncmVzcy1iYXIvbGliL3Byb2dyZXNzLWJhci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9wcm9ncmVzcy1iYXIvbGliL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXByb2dyZXNzLWJhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1wcm9ncmVzcy1iYXIgbS1wcm9ncmVzc1wiPlxuXHQ8ZGl2IGNsYXNzPVwibS1wcm9ncmVzc19faW5uZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibS1wcm9ncmVzc19fYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiIFthdHRyLmFyaWEtdmFsdWVub3ddPVwidmFsdWVcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogY2FsY1Byb2dyZXNzKCl9XCI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyB2YWx1ZSA9IDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBtYXggPSAwO1xuXG5cdHB1YmxpYyBjYWxjUHJvZ3Jlc3MoKSB7XG5cdFx0aWYgKHRoaXMubWF4ID4gMCAmJiB0aGlzLnZhbHVlID4gMCkge1xuXHRcdFx0Y29uc3QgcmVzID0gKHRoaXMudmFsdWUgLyB0aGlzLm1heCk7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihyZXMgKiAxMDApICsgJyUnO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0UHJvZ3Jlc3NCYXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O3FCQWF5QixDQUFDO21CQUNILENBQUM7Ozs7O0lBRWhCLDJDQUFZOzs7O1FBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbkMscUJBQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxDQUFDLENBQUM7OztnQkFwQlYsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxvU0FNVjtpQkFDQTs7OzswQkFFQyxLQUFLO3dCQUNMLEtBQUs7OytCQWRQOzs7Ozs7O0FDQUEscUJBRWEsVUFBVSxHQUFHO0lBQ3pCLG9CQUFvQjtDQUNwQjs7Ozs7O0FDSkQ7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDYixVQUFVO3FCQUNWO29CQUNELE9BQU8sRUFBRTt3QkFDUixVQUFVO3FCQUNWO2lCQUNEOzs0QkFmRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./dist/selectable-list/fesm5/selectable-list.js":
/*!*******************************************************!*\
  !*** ./dist/selectable-list/fesm5/selectable-list.js ***!
  \*******************************************************/
/*! exports provided: SelectableListComponent, SelectableActionsDirective, SelectableListModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableListComponent", function() { return SelectableListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableActionsDirective", function() { return SelectableActionsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableListModule", function() { return SelectableListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Directives; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableListComponent = /** @class */ (function () {
    function SelectableListComponent() {
        this.index = 0;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SelectableListComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.selected.emit(item);
    };
    /**
     * @param {?} input
     * @return {?}
     */
    SelectableListComponent.prototype.formatLabel = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ inputString = (this.label ? input[this.label] : input);
        if (!this.search) {
            return inputString;
        }
        var /** @type {?} */ regEx = new RegExp(this.search, 'ig');
        return inputString.replace(regEx, '<b>' + this.search + '</b>');
    };
    SelectableListComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-selectable-list',
                    template: "<ul class=\"aui-selectable-list m-selectable-list m-selectable-list--no-border\">\n    <li class=\"m-selectable-list__item\" *ngFor=\"let item of items; let i=index;\"  (click)=\"selectItem(item)\" [ngClass]=\"i === index ? 'm-selectable-list__item--active' : ''\">\n        <span *ngIf=\"!template && !itemTemplate\" [innerHTML]=\"formatLabel(item)\"></span>\n        <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        <ng-template *ngIf=\"itemTemplate\" [ngTemplateOutlet]=\"itemTemplate\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n    </li>\n</ul>\n",
                },] },
    ];
    /** @nocollapse */
    SelectableListComponent.propDecorators = {
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "search": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "itemTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] },],
    };
    return SelectableListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableActionsDirective = /** @class */ (function () {
    function SelectableActionsDirective() {
        this.keyArrowUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyArrowDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyEscape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    SelectableActionsDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (e.key) {
            case 'ArrowUp':
                // UP
                e.preventDefault(); // Do not change cursor pos
                this.keyArrowUp.emit(e);
                break;
            case 'ArrowDown':
                // DOWN
                e.preventDefault(); // Do not change cursor pos
                this.keyArrowDown.emit(e);
                break;
            case 'Enter':
                // ENTER
                this.keyEnter.emit(e);
                break;
            case 'Escape':
                // ESCAPE
                this.keyEscape.emit(e);
                break;
        }
    };
    SelectableActionsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiSelectableActions]',
                    exportAs: 'auiSelectableActions',
                },] },
    ];
    /** @nocollapse */
    SelectableActionsDirective.propDecorators = {
        "keyArrowUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "keyArrowDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "keyEnter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "keyEscape": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return SelectableActionsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    SelectableListComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    SelectableActionsDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableListModule = /** @class */ (function () {
    function SelectableListModule() {
    }
    SelectableListModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
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
    return SelectableListModule;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1saXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9jb21wb25lbnRzL3NlbGVjdGFibGUtbGlzdC9zZWxlY3RhYmxlLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9kaXJlY3RpdmVzL3NlbGVjdGFibGUtYWN0aW9ucy5kaXJlY3RpdmUudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L3NlbGVjdGFibGUtbGlzdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNlbGVjdGFibGUtbGlzdCcsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwiYXVpLXNlbGVjdGFibGUtbGlzdCBtLXNlbGVjdGFibGUtbGlzdCBtLXNlbGVjdGFibGUtbGlzdC0tbm8tYm9yZGVyXCI+XG4gICAgPGxpIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3RfX2l0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCIgIChjbGljayk9XCJzZWxlY3RJdGVtKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaSA9PT0gaW5kZXggPyAnbS1zZWxlY3RhYmxlLWxpc3RfX2l0ZW0tLWFjdGl2ZScgOiAnJ1wiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZSAmJiAhaXRlbVRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXRMYWJlbChpdGVtKVwiPjwvc3Bhbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwidGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGl0ZW06IGl0ZW0gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIml0ZW1UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW1UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2xpPlxuPC91bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGFibGVMaXN0Q29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGl0ZW1zOiBhbnlbXTtcblx0QElucHV0KCkgcHVibGljIGluZGV4ID0gMDtcblx0QElucHV0KCkgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0cHVibGljIHNlbGVjdEl0ZW0oaXRlbSkge1xuXHRcdHRoaXMuc2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdHB1YmxpYyBmb3JtYXRMYWJlbChpbnB1dDogYW55KSB7XG5cdFx0Y29uc3QgaW5wdXRTdHJpbmcgPSAodGhpcy5sYWJlbCA/IGlucHV0W3RoaXMubGFiZWxdIDogaW5wdXQpO1xuXG5cdFx0aWYgKCF0aGlzLnNlYXJjaCkge1xuXHRcdFx0cmV0dXJuIGlucHV0U3RyaW5nO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZ0V4ID0gbmV3IFJlZ0V4cCh0aGlzLnNlYXJjaCwgJ2lnJyk7XG5cdFx0cmV0dXJuIGlucHV0U3RyaW5nLnJlcGxhY2UocmVnRXgsICc8Yj4nICsgdGhpcy5zZWFyY2ggKyAnPC9iPicpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aVNlbGVjdGFibGVBY3Rpb25zXScsXG5cdGV4cG9ydEFzOiAnYXVpU2VsZWN0YWJsZUFjdGlvbnMnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSB7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5QXJyb3dVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBrZXlBcnJvd0Rvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5RW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5RXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGUua2V5KSB7XG5cdFx0XHRjYXNlICdBcnJvd1VwJzogLy8gVVBcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBEbyBub3QgY2hhbmdlIGN1cnNvciBwb3Ncblx0XHRcdFx0dGhpcy5rZXlBcnJvd1VwLmVtaXQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dEb3duJzogLy8gRE9XTlxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIERvIG5vdCBjaGFuZ2UgY3Vyc29yIHBvc1xuXHRcdFx0XHR0aGlzLmtleUFycm93RG93bi5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0VudGVyJzogLy8gRU5URVJcblx0XHRcdFx0dGhpcy5rZXlFbnRlci5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0VzY2FwZSc6IC8vIEVTQ0FQRVxuXHRcdFx0XHR0aGlzLmtleUVzY2FwZS5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IFNlbGVjdGFibGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRTZWxlY3RhYmxlTGlzdENvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0YWJsZS1hY3Rpb25zLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlTGlzdE1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O3FCQWV5QixDQUFDO3dCQUtzQixJQUFJLFlBQVksRUFBRTs7Ozs7O0lBSTFELDRDQUFVOzs7O2NBQUMsSUFBSTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0lBR25CLDZDQUFXOzs7O2NBQUMsS0FBVTtRQUM1QixxQkFBTSxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sV0FBVyxDQUFDO1NBQ25CO1FBRUQscUJBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQzs7O2dCQWxDakUsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxvcEJBT1Y7aUJBQ0E7Ozs7MEJBRUMsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUVMLE1BQU07NkJBRU4sWUFBWSxTQUFDLFdBQVc7O2tDQXRCMUI7Ozs7Ozs7QUNBQTs7MEJBTytCLElBQUksWUFBWSxFQUFFOzRCQUNoQixJQUFJLFlBQVksRUFBRTt3QkFDdEIsSUFBSSxZQUFZLEVBQUU7eUJBQ2pCLElBQUksWUFBWSxFQUFFOzs7Ozs7SUFHeEMsOENBQVM7Ozs7Y0FBQyxDQUFnQjtRQUNoQyxRQUFRLENBQUMsQ0FBQyxHQUFHO1lBQ1osS0FBSyxTQUFTOztnQkFDYixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNO1lBQ1AsS0FBSyxXQUFXOztnQkFDZixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1AsS0FBSyxPQUFPOztnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTTtZQUNQLEtBQUssUUFBUTs7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07U0FDUDs7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLHNCQUFzQjtpQkFDaEM7Ozs7K0JBRUMsTUFBTTtpQ0FDTixNQUFNOzZCQUNOLE1BQU07OEJBQ04sTUFBTTs4QkFFTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztxQ0FacEM7Ozs7Ozs7QUNBQSxxQkFFYSxVQUFVLEdBQUc7SUFDekIsdUJBQXVCO0NBQ3ZCOzs7Ozs7QUNKRCxxQkFFYSxVQUFVLEdBQUc7SUFDekIsMEJBQTBCO0NBQzFCOzs7Ozs7QUNKRDs7OztnQkFNQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLFVBQVU7d0JBQ1YsVUFBVTtxQkFDVjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFDVixVQUFVO3FCQUNWO2lCQUNEOzsrQkFsQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./dist/table/fesm5/table.js":
/*!***********************************!*\
  !*** ./dist/table/fesm5/table.js ***!
  \***********************************/
/*! exports provided: TableModule, ColumnSelectorComponent, TableComponent, TableCellComponent, TableHeaderComponent, TableBarComponent, Table, TableHelperService, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnSelectorComponent", function() { return ColumnSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCellComponent", function() { return TableCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderComponent", function() { return TableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBarComponent", function() { return TableBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHelperService", function() { return TableHelperService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Directives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return TableBarItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return TableBarSearchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var short_unique_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! short-unique-id */ "./node_modules/short-unique-id/dist/short-unique-id.min.js");
/* harmony import */ var short_unique_id__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(short_unique_id__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _acpaas_ui_ngx_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/utils */ "./dist/utils/fesm5/utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");







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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return TableHelperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ColumnSelectorComponent = /** @class */ (function () {
    function ColumnSelectorComponent(tableHelper) {
        this.tableHelper = tableHelper;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uid = new short_unique_id__WEBPACK_IMPORTED_MODULE_1___default.a();
        this.id = this.uid.randomUUID(8);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-column-selector',
                    template: "<ul class=\"a-list a-list--lined aui-column-selector\">\n\t<li *ngFor=\"let column of columns; let i = index; let isLast = last; let isFirst = first;\" class=\"animated\" [ngClass]=\"{show: i === currentTarget}\">\n\t\t<div class=\"a-input__checkbox a-input__checkbox--small\">\n\t\t\t<input type=\"checkbox\" id=\"checkbox-{{ id }}-{{ i }}-{{ tableHelper.getValue(column) }}\" name=\"checkbox-{{ tableHelper.getValue(column) }}\" [checked]=\"!column.hidden\" (change)=\"updateDisplay($event, i)\" [disabled]=\"column.disabled\">\n\t\t\t<label for=\"checkbox-{{ id }}-{{ i }}-{{ tableHelper.getValue(column) }}\">{{ tableHelper.getLabel(column) }}</label>\n\t\t</div>\n\t\t<div class=\"select-actions\">\n\t\t\t<button [disabled]=\"isFirst\" class=\"a-button-transparent a-button--tiny has-icon\" (click)=\"move(column, -1)\">\n\t\t\t\t<span class=\"fa fa-angle-up\"></span>\n\t\t\t</button>\n\t\t\t<button [disabled]=\"isLast\" class=\"a-button-transparent a-button--tiny has-icon\" (click)=\"move(column, 1)\">\n\t\t\t\t<span class=\"fa fa-angle-down\"></span>\n\t\t\t</button>\n\t\t</div>\n\t</li>\n<ul>\n",
                },] },
    ];
    /** @nocollapse */
    ColumnSelectorComponent.ctorParameters = function () { return [
        { type: TableHelperService, },
    ]; };
    ColumnSelectorComponent.propDecorators = {
        "columns": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
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
        this.orderBy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-table',
                    template: "<div [ngClass]=\"{'a-table__wrapper-responsive': responsive}\">\n\t<table class=\"a-table a-table--striped aui-table\">\n\t\t<thead *ngIf=\"columns.length > 0\">\n\t\t\t<tr>\n\t\t\t\t<th *ngFor=\"let column of columns\" [ngClass]=\"tableHelper.getClass(column)\">\n\t\t\t\t\t<ng-container *ngIf=\"column.headerComponent\">\n\t\t\t\t\t\t<aui-table-header [label]=\"tableHelper.getLabel(column)\" [value]=\"tableHelper.getValue(column)\" [component]=\"column.headerComponent\"></aui-table-header>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-container *ngIf=\"!column.headerComponent\">\n\t\t\t\t\t\t<ng-container *ngIf=\"activeSorting\">\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) !== activeSorting?.key\" class=\"a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'asc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) === activeSorting?.key && activeSorting?.order === 'desc'\" class=\" a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'asc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort-desc\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button *ngIf=\"!column.disableSorting && tableHelper.getValue(column) === activeSorting?.key && activeSorting?.order === 'asc'\" class=\" a-button a-button--tiny a-button--transparent has-icon-right\" (click)=\"sort(column, 'desc')\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }} <span class=\"fa fa-sort-asc\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"column.disableSorting\">\n\t\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }}\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<ng-container *ngIf=\"!activeSorting\">\n\t\t\t\t\t\t\t{{ tableHelper.getLabel(column) }}\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngIf=\"loading\">\n\t\t\t\t<td [colSpan]=\"columns.length\">\n\t\t\t\t\t<div class=\"table-loading\">\n\t\t\t\t\t\t{{ loadDataMessage }} <span class=\"a-spinner\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"!loading && columns.length === 0\">\n\t\t\t\t<td>{{ noColumnsMessage }}</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"!loading && (!rows || rows.length === 0)\">\n\t\t\t\t<td [colSpan]=\"columns.length\">{{ noDataMessage }}</td>\n\t\t\t</tr>\n\t\t\t<ng-container *ngIf=\"!loading && columns.length > 0\">\n\t\t\t\t<tr *ngFor=\"let row of rows; let rowIndex = index\" (click)=\"clickRow(row)\" [ngClass]=\"{'a-table--clickable': hasClickAction}\">\n\t\t\t\t\t<td *ngFor=\"let column of columns\" [ngClass]=\"tableHelper.getClass(column)\">\n\t\t\t\t\t\t<aui-table-cell [value]=\"tableHelper.formatValue(row, column, rowIndex)\" [component]=\"column.component\"></aui-table-cell>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\t\t</tbody>\n\t</table>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: TableHelperService, },
    ]; };
    TableComponent.propDecorators = {
        "rows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "columns": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "responsive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hasClickAction": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeSorting": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "noDataMessage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loadDataMessage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "noColumnsMessage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "orderBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rowClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
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
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-table-bar',
                    template: "<div class=\"aui-table-bar\">\n\t<div class=\"filters\" #ref [ngClass]=\"{open: open}\">\n\t\t<ng-content select=\"[auiTableBarItem]\"></ng-content>\n\t\t<div class=\"aui-table-bar-item\" *ngIf=\"open\">\n\t\t\t<button class=\"a-button a-button--transparent\" (click)=\"toggle()\">Show less...</button>\n\t\t</div>\n\t</div>\n\t<div class=\"show-more\" *ngIf=\"!open && invisibleItems\">\n\t\t<button class=\"a-button a-button--transparent\" (click)=\"toggle()\">Show more...</button>\n\t</div>\n\n\t<ng-content select=\"[auiTableBarSearch]\"></ng-content>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    TableBarComponent.propDecorators = {
        "filters": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "testFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "filter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ref": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['ref',] },],
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
     * @param {?} changes
     * @return {?}
     */
    TableCellComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes["component"]) {
            return;
        }
        if (changes["component"].currentValue !== changes["component"].previousValue) {
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-table-cell',
                    template: "<ng-template *ngIf=\"hasComponent()\"></ng-template>\n<span *ngIf=\"!hasComponent()\">{{ value }}</span>\n",
                },] },
    ];
    /** @nocollapse */
    TableCellComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    TableCellComponent.propDecorators = {
        "component": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-table-header',
                    template: "<ng-template *ngIf=\"hasComponent()\"></ng-template>\n<span *ngIf=\"!hasComponent()\">{{ label }}</span>\n",
                },] },
    ];
    /** @nocollapse */
    TableHeaderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    TableHeaderComponent.propDecorators = {
        "component": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiTableBarItem]',
                },] },
    ];
    /** @nocollapse */
    TableBarItemDirective.propDecorators = {
        "setClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.aui-table-bar-item',] },],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[auiTableBarSearch]',
                },] },
    ];
    /** @nocollapse */
    TableBarSearchDirective.propDecorators = {
        "setClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.aui-table-bar-search',] },],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
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
        this.filteredData = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.rows = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.columns = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL3RhYmxlL2xpYi90YWJsZS9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZS50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2NvbXBvbmVudHMvY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9jb21wb25lbnRzL3RhYmxlLm1lc3NhZ2VzLnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9jb21wb25lbnRzL3RhYmxlLWJhci90YWJsZS1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY29tcG9uZW50cy90YWJsZS1jZWxsL3RhYmxlLWNlbGwuY29tcG9uZW50LnRzIiwibmc6Ly90YWJsZS9saWIvdGFibGUvY29tcG9uZW50cy90YWJsZS1oZWFkZXIvdGFibGUtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9kaXJlY3RpdmVzL3RhYmxlLWJhci1pdGVtL3RhYmxlLWJhci1pdGVtLmRpcmVjdGl2ZS50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2RpcmVjdGl2ZXMvdGFibGUtYmFyLXNlYXJjaC90YWJsZS1iYXItc2VhcmNoLmRpcmVjdGl2ZS50cyIsIm5nOi8vdGFibGUvbGliL3RhYmxlL2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS90YWJsZS5tb2R1bGUudHMiLCJuZzovL3RhYmxlL2xpYi90YWJsZS9jbGFzc2VzL3RhYmxlLmNsYXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFibGVIZWxwZXJTZXJ2aWNlIHtcblx0cHVibGljIGdldExhYmVsKGtleTogKFRhYmxlQ29sdW1ufHN0cmluZykpOiBzdHJpbmcge1xuXHRcdHJldHVybiBrZXkuaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgPyAoa2V5IGFzIFRhYmxlQ29sdW1uKS5sYWJlbCA6IGtleSBhcyBzdHJpbmc7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VmFsdWUoa2V5OiAoVGFibGVDb2x1bW58c3RyaW5nKSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGtleS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IChrZXkgYXMgVGFibGVDb2x1bW4pLnZhbHVlIDoga2V5IGFzIHN0cmluZztcblx0fVxuXG5cdHB1YmxpYyBnZXRDbGFzcyhrZXk6IChUYWJsZUNvbHVtbnxzdHJpbmcpKTogc3RyaW5nIHtcblx0XHRyZXR1cm4ga2V5Lmhhc093blByb3BlcnR5KCdjbGFzc0xpc3QnKSA/IChrZXkgYXMgVGFibGVDb2x1bW4pLmNsYXNzTGlzdC5qb2luKCcgJykgOiBrZXkgYXMgc3RyaW5nO1xuXHR9XG5cblx0cHVibGljIGZvcm1hdFZhbHVlKGl0ZW0sIGtleSwgaW5kZXgpOiBhbnkge1xuXHRcdGNvbnN0IHZhbHVlID0gaXRlbVt0aGlzLmdldFZhbHVlKGtleSldO1xuXHRcdHJldHVybiBrZXkuZm9ybWF0ID8ga2V5LmZvcm1hdCh2YWx1ZSwga2V5LCBpdGVtLCBpbmRleCkgOiB2YWx1ZTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBTaG9ydFVuaXF1ZUlkIGZyb20gJ3Nob3J0LXVuaXF1ZS1pZCc7XG5cbmltcG9ydCB7IFRhYmxlSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RhYmxlLWhlbHBlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNvbHVtbi1zZWxlY3RvcicsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwiYS1saXN0IGEtbGlzdC0tbGluZWQgYXVpLWNvbHVtbi1zZWxlY3RvclwiPlxuXHQ8bGkgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zOyBsZXQgaSA9IGluZGV4OyBsZXQgaXNMYXN0ID0gbGFzdDsgbGV0IGlzRmlyc3QgPSBmaXJzdDtcIiBjbGFzcz1cImFuaW1hdGVkXCIgW25nQ2xhc3NdPVwie3Nob3c6IGkgPT09IGN1cnJlbnRUYXJnZXR9XCI+XG5cdFx0PGRpdiBjbGFzcz1cImEtaW5wdXRfX2NoZWNrYm94IGEtaW5wdXRfX2NoZWNrYm94LS1zbWFsbFwiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3gte3sgaWQgfX0te3sgaSB9fS17eyB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pIH19XCIgbmFtZT1cImNoZWNrYm94LXt7IHRhYmxlSGVscGVyLmdldFZhbHVlKGNvbHVtbikgfX1cIiBbY2hlY2tlZF09XCIhY29sdW1uLmhpZGRlblwiIChjaGFuZ2UpPVwidXBkYXRlRGlzcGxheSgkZXZlbnQsIGkpXCIgW2Rpc2FibGVkXT1cImNvbHVtbi5kaXNhYmxlZFwiPlxuXHRcdFx0PGxhYmVsIGZvcj1cImNoZWNrYm94LXt7IGlkIH19LXt7IGkgfX0te3sgdGFibGVIZWxwZXIuZ2V0VmFsdWUoY29sdW1uKSB9fVwiPnt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX08L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJzZWxlY3QtYWN0aW9uc1wiPlxuXHRcdFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiaXNGaXJzdFwiIGNsYXNzPVwiYS1idXR0b24tdHJhbnNwYXJlbnQgYS1idXR0b24tLXRpbnkgaGFzLWljb25cIiAoY2xpY2spPVwibW92ZShjb2x1bW4sIC0xKVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9zcGFuPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8YnV0dG9uIFtkaXNhYmxlZF09XCJpc0xhc3RcIiBjbGFzcz1cImEtYnV0dG9uLXRyYW5zcGFyZW50IGEtYnV0dG9uLS10aW55IGhhcy1pY29uXCIgKGNsaWNrKT1cIm1vdmUoY29sdW1uLCAxKVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9saT5cbjx1bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtblNlbGVjdG9yQ29tcG9uZW50IHtcblx0QElucHV0KCkgY29sdW1ucztcblx0QE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIGlkOiBudW1iZXI7XG5cdHB1YmxpYyBjdXJyZW50VGFyZ2V0O1xuXG5cdHByaXZhdGUgdWlkID0gbmV3IFNob3J0VW5pcXVlSWQoKTtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGFibGVIZWxwZXI6IFRhYmxlSGVscGVyU2VydmljZSkge1xuXHRcdHRoaXMuaWQgPSB0aGlzLnVpZC5yYW5kb21VVUlEKDgpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZURpc3BsYXkoZSwgaW5kZXgpIHtcblx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5jb2x1bW5zW2luZGV4XS5oaWRkZW4gPSBmYWxzZTtcblx0XHRcdHRoaXMuZW5hYmxlQ2hpbGRyZW4odGhpcy5jb2x1bW5zW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuID0gdHJ1ZTtcblx0XHRcdHRoaXMuZGlzYWJsZUNoaWxkcmVuKHRoaXMuY29sdW1uc1tpbmRleF0pO1xuXHRcdH1cblxuXHRcdHRoaXMuZW1pdENvbHVtbnMoKTtcblx0fVxuXG5cdHB1YmxpYyBlbmFibGVDaGlsZHJlbihwYXJlbnQpIHtcblx0XHR0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKChvKSA9PiB7XG5cdFx0XHRpZiAoby5wYXJlbnQgJiYgby5kaXNhYmxlZCAmJiBvLnBhcmVudC5pbmRleE9mKHBhcmVudC52YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdG8uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5lbmFibGVDaGlsZHJlbihvKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG87XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZGlzYWJsZUNoaWxkcmVuKHBhcmVudCkge1xuXHRcdHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoKG8pID0+IHtcblx0XHRcdGlmIChvLnBhcmVudCAmJiAhby5kaXNhYmxlZCAmJiBvLnBhcmVudC5pbmRleE9mKHBhcmVudC52YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdG8uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRvLmhpZGRlbiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZGlzYWJsZUNoaWxkcmVuKG8pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbztcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBtb3ZlKGtleSwgaSkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5jb2x1bW5zLmZpbmRJbmRleCgobykgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMudGFibGVIZWxwZXIuZ2V0VmFsdWUobykgPT09IHRoaXMudGFibGVIZWxwZXIuZ2V0VmFsdWUoa2V5KTtcblx0XHR9KTtcblx0XHRjb25zdCB0YXJnZXQgPSBpbmRleCArIGk7XG5cblx0XHRpZiAodGFyZ2V0IDwgMCB8fCB0YXJnZXQgPiB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpOyAvLyBEZWxldGUgcHJldmlvdXMga2V5IHBvc2l0aW9uXG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZSh0YXJnZXQsIDAgLCBrZXkpOyAvLyBBZGQgbmV3IHBvc2l0aW9uXG5cblx0XHQvLyBVc2UgdGltZW91dCB0byBmaXggcmUtcmVuZGVyaW5nIGlzc3VlXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmVtaXRDb2x1bW5zKCk7XG5cdH1cblxuXHRwdWJsaWMgZW1pdENvbHVtbnMoKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh0aGlzLmNvbHVtbnMpO1xuXHR9XG59XG4iLCJleHBvcnQgY29uc3QgTE9BRF9EQVRBID0gJ0xvYWRpbmcgZGF0YS4uLic7XG5leHBvcnQgY29uc3QgTk9fREFUQSA9ICdObyBkYXRhIGF2YWlsYWJsZS4nO1xuZXhwb3J0IGNvbnN0IE5PX0NPTFVNTlMgPSAnTm8gY29sdW1ucyBhdmFpbGFibGUuJztcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBUYWJsZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiwgT3JkZXJCeSB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcbmltcG9ydCAqIGFzIERFRkFVTFRfTUVTU0FHRVMgZnJvbSAnLi4vdGFibGUubWVzc2FnZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGFibGUnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwieydhLXRhYmxlX193cmFwcGVyLXJlc3BvbnNpdmUnOiByZXNwb25zaXZlfVwiPlxuXHQ8dGFibGUgY2xhc3M9XCJhLXRhYmxlIGEtdGFibGUtLXN0cmlwZWQgYXVpLXRhYmxlXCI+XG5cdFx0PHRoZWFkICpuZ0lmPVwiY29sdW1ucy5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8dHI+XG5cdFx0XHRcdDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbbmdDbGFzc109XCJ0YWJsZUhlbHBlci5nZXRDbGFzcyhjb2x1bW4pXCI+XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5oZWFkZXJDb21wb25lbnRcIj5cblx0XHRcdFx0XHRcdDxhdWktdGFibGUtaGVhZGVyIFtsYWJlbF09XCJ0YWJsZUhlbHBlci5nZXRMYWJlbChjb2x1bW4pXCIgW3ZhbHVlXT1cInRhYmxlSGVscGVyLmdldFZhbHVlKGNvbHVtbilcIiBbY29tcG9uZW50XT1cImNvbHVtbi5oZWFkZXJDb21wb25lbnRcIj48L2F1aS10YWJsZS1oZWFkZXI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uaGVhZGVyQ29tcG9uZW50XCI+XG5cdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiYWN0aXZlU29ydGluZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uICpuZ0lmPVwiIWNvbHVtbi5kaXNhYmxlU29ydGluZyAmJiB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pICE9PSBhY3RpdmVTb3J0aW5nPy5rZXlcIiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uLS10aW55IGEtYnV0dG9uLS10cmFuc3BhcmVudCBoYXMtaWNvbi1yaWdodFwiIChjbGljayk9XCJzb3J0KGNvbHVtbiwgJ2FzYycpXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgdGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKSB9fSA8c3BhbiBjbGFzcz1cImZhIGZhLXNvcnRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uICpuZ0lmPVwiIWNvbHVtbi5kaXNhYmxlU29ydGluZyAmJiB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pID09PSBhY3RpdmVTb3J0aW5nPy5rZXkgJiYgYWN0aXZlU29ydGluZz8ub3JkZXIgPT09ICdkZXNjJ1wiIGNsYXNzPVwiIGEtYnV0dG9uIGEtYnV0dG9uLS10aW55IGEtYnV0dG9uLS10cmFuc3BhcmVudCBoYXMtaWNvbi1yaWdodFwiIChjbGljayk9XCJzb3J0KGNvbHVtbiwgJ2FzYycpXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgdGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKSB9fSA8c3BhbiBjbGFzcz1cImZhIGZhLXNvcnQtZGVzY1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gKm5nSWY9XCIhY29sdW1uLmRpc2FibGVTb3J0aW5nICYmIHRhYmxlSGVscGVyLmdldFZhbHVlKGNvbHVtbikgPT09IGFjdGl2ZVNvcnRpbmc/LmtleSAmJiBhY3RpdmVTb3J0aW5nPy5vcmRlciA9PT0gJ2FzYydcIiBjbGFzcz1cIiBhLWJ1dHRvbiBhLWJ1dHRvbi0tdGlueSBhLWJ1dHRvbi0tdHJhbnNwYXJlbnQgaGFzLWljb24tcmlnaHRcIiAoY2xpY2spPVwic29ydChjb2x1bW4sICdkZXNjJylcIj5cblx0XHRcdFx0XHRcdFx0XHR7eyB0YWJsZUhlbHBlci5nZXRMYWJlbChjb2x1bW4pIH19IDxzcGFuIGNsYXNzPVwiZmEgZmEtc29ydC1hc2NcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc2FibGVTb3J0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgdGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKSB9fVxuXHRcdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhY3RpdmVTb3J0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdHt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX1cblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8L3RoPlxuXHRcdFx0PC90cj5cblx0XHQ8L3RoZWFkPlxuXHRcdDx0Ym9keT5cblx0XHRcdDx0ciAqbmdJZj1cImxvYWRpbmdcIj5cblx0XHRcdFx0PHRkIFtjb2xTcGFuXT1cImNvbHVtbnMubGVuZ3RoXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhYmxlLWxvYWRpbmdcIj5cblx0XHRcdFx0XHRcdHt7IGxvYWREYXRhTWVzc2FnZSB9fSA8c3BhbiBjbGFzcz1cImEtc3Bpbm5lclwiPjwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0XHQ8dHIgKm5nSWY9XCIhbG9hZGluZyAmJiBjb2x1bW5zLmxlbmd0aCA9PT0gMFwiPlxuXHRcdFx0XHQ8dGQ+e3sgbm9Db2x1bW5zTWVzc2FnZSB9fTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdFx0PHRyICpuZ0lmPVwiIWxvYWRpbmcgJiYgKCFyb3dzIHx8IHJvd3MubGVuZ3RoID09PSAwKVwiPlxuXHRcdFx0XHQ8dGQgW2NvbFNwYW5dPVwiY29sdW1ucy5sZW5ndGhcIj57eyBub0RhdGFNZXNzYWdlIH19PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmcgJiYgY29sdW1ucy5sZW5ndGggPiAwXCI+XG5cdFx0XHRcdDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3M7IGxldCByb3dJbmRleCA9IGluZGV4XCIgKGNsaWNrKT1cImNsaWNrUm93KHJvdylcIiBbbmdDbGFzc109XCJ7J2EtdGFibGUtLWNsaWNrYWJsZSc6IGhhc0NsaWNrQWN0aW9ufVwiPlxuXHRcdFx0XHRcdDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbbmdDbGFzc109XCJ0YWJsZUhlbHBlci5nZXRDbGFzcyhjb2x1bW4pXCI+XG5cdFx0XHRcdFx0XHQ8YXVpLXRhYmxlLWNlbGwgW3ZhbHVlXT1cInRhYmxlSGVscGVyLmZvcm1hdFZhbHVlKHJvdywgY29sdW1uLCByb3dJbmRleClcIiBbY29tcG9uZW50XT1cImNvbHVtbi5jb21wb25lbnRcIj48L2F1aS10YWJsZS1jZWxsPlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8L3Rib2R5PlxuXHQ8L3RhYmxlPlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHJvd3M6IGFueVtdID0gW107XG5cdEBJbnB1dCgpIGNvbHVtbnM6IChUYWJsZUNvbHVtbnxzdHJpbmcpW10gPSBbXTtcblx0QElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuXHRASW5wdXQoKSByZXNwb25zaXZlID0gdHJ1ZTtcblx0QElucHV0KCkgaGFzQ2xpY2tBY3Rpb24gPSBmYWxzZTtcblx0QElucHV0KCkgYWN0aXZlU29ydGluZzogT3JkZXJCeTsgLy8gSnVzdCBhIHByb3BlcnR5IHRvIHVzZSBpbiB0aGUgdGVtcGxhdGUsIG5vdCBmdW5jdGlvbmFsXG5cdEBJbnB1dCgpIG5vRGF0YU1lc3NhZ2UgPSBERUZBVUxUX01FU1NBR0VTLk5PX0RBVEE7XG5cdEBJbnB1dCgpIGxvYWREYXRhTWVzc2FnZSA9IERFRkFVTFRfTUVTU0FHRVMuTE9BRF9EQVRBO1xuXHRASW5wdXQoKSBub0NvbHVtbnNNZXNzYWdlID0gREVGQVVMVF9NRVNTQUdFUy5OT19DT0xVTU5TO1xuXG5cdEBPdXRwdXQoKSBvcmRlckJ5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHJvd0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyB0YWJsZUhlbHBlcjogVGFibGVIZWxwZXJTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgc29ydChrZXksIG9yZGVyKTogdm9pZCB7XG5cdFx0Y29uc3QgcHJvcCA9IHRoaXMudGFibGVIZWxwZXIuZ2V0VmFsdWUoa2V5KTtcblx0XHR0aGlzLmFjdGl2ZVNvcnRpbmcgPSB7a2V5OiBwcm9wLCBvcmRlcn07XG5cdFx0dGhpcy5vcmRlckJ5LmVtaXQoe2tleTogcHJvcCwgb3JkZXJ9KTtcblx0fVxuXG5cdHB1YmxpYyBjbGlja1Jvdyhyb3dEYXRhOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5oYXNDbGlja0FjdGlvbikge1xuXHRcdFx0dGhpcy5yb3dDbGlja2VkLmVtaXQocm93RGF0YSk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS10YWJsZS1iYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktdGFibGUtYmFyXCI+XG5cdDxkaXYgY2xhc3M9XCJmaWx0ZXJzXCIgI3JlZiBbbmdDbGFzc109XCJ7b3Blbjogb3Blbn1cIj5cblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpVGFibGVCYXJJdGVtXVwiPjwvbmctY29udGVudD5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLXRhYmxlLWJhci1pdGVtXCIgKm5nSWY9XCJvcGVuXCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXRyYW5zcGFyZW50XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+U2hvdyBsZXNzLi4uPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwic2hvdy1tb3JlXCIgKm5nSWY9XCIhb3BlbiAmJiBpbnZpc2libGVJdGVtc1wiPlxuXHRcdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvbiBhLWJ1dHRvbi0tdHJhbnNwYXJlbnRcIiAoY2xpY2spPVwidG9nZ2xlKClcIj5TaG93IG1vcmUuLi48L2J1dHRvbj5cblx0PC9kaXY+XG5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aVRhYmxlQmFyU2VhcmNoXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVCYXJDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcblx0QElucHV0KCkgZmlsdGVyczogRmlsdGVyW10gPSBbXTtcblx0QElucHV0KCkgdGVzdEZpbHRlcjogRmlsdGVyO1xuXHRAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXHRwdWJsaWMgaW52aXNpYmxlSXRlbXMgPSBmYWxzZTtcblxuXHRAVmlld0NoaWxkKCdyZWYnKSByZWY7XG5cblx0cHVibGljIG5nRG9DaGVjaygpIHtcblx0XHR0aGlzLmNvdW50SW52aXNpYmxlSXRlbXMoKTtcblx0fVxuXG5cdHB1YmxpYyBpc0luVmlzaWJsZShyZWN0Q29udGFpbmVyLCByZWN0Q2hpbGQpIHtcblx0XHRyZXR1cm4gcmVjdENvbnRhaW5lci5ib3R0b20gPCByZWN0Q2hpbGQudG9wO1xuXHR9XG5cblx0cHVibGljIGNvdW50SW52aXNpYmxlSXRlbXMoKSB7XG5cdFx0Y29uc3QgcmVjdENvbnRhaW5lciA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgY2hpbGROb2RlcyA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcblxuXHRcdGZvciAobGV0IGkgPSBjaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBvID0gY2hpbGROb2Rlc1tpXTtcblx0XHRcdGlmIChvLm5vZGVOYW1lID09PSAnQVVJLVRBQkxFLUJBUi1JVEVNJyAmJiBvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuXHRcdFx0XHRjb25zdCByZWN0Q2hpbGQgPSBvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRpZiAodGhpcy5pc0luVmlzaWJsZShyZWN0Q29udGFpbmVyLCByZWN0Q2hpbGQpKSB7XG5cdFx0XHRcdFx0dGhpcy5pbnZpc2libGVJdGVtcyA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGkgPT09IDApIHtcblx0XHRcdFx0dGhpcy5pbnZpc2libGVJdGVtcyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0dGhpcy5vcGVuID0gIXRoaXMub3Blbjtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRPbkNoYW5nZXMsXG5cdFR5cGUsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXRhYmxlLWNlbGwnLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAqbmdJZj1cImhhc0NvbXBvbmVudCgpXCI+PC9uZy10ZW1wbGF0ZT5cbjxzcGFuICpuZ0lmPVwiIWhhc0NvbXBvbmVudCgpXCI+e3sgdmFsdWUgfX08L3NwYW4+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBjb21wb25lbnQ6IFR5cGU8YW55Pjtcblx0QElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHsgfVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKCFjaGFuZ2VzLmNvbXBvbmVudCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmNvbXBvbmVudC5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXMuY29tcG9uZW50LnByZXZpb3VzVmFsdWUpIHtcblx0XHRcdHRoaXMubG9hZENvbXBvbmVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBoYXNDb21wb25lbnQoKSB7XG5cdFx0cmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG5cdH1cblxuXHRwdWJsaWMgbG9hZENvbXBvbmVudCgpIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xuXHRcdGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWY7XG5cdFx0dmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0KDxDZWxsPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHRoaXMudmFsdWU7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdE9uQ2hhbmdlcyxcblx0VHlwZSxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Q2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdGFibGUtaGVhZGVyJyxcblx0dGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgKm5nSWY9XCJoYXNDb21wb25lbnQoKVwiPjwvbmctdGVtcGxhdGU+XG48c3BhbiAqbmdJZj1cIiFoYXNDb21wb25lbnQoKVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBjb21wb25lbnQ6IFR5cGU8YW55Pjtcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgdmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHsgfVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdHRoaXMubG9hZENvbXBvbmVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBoYXNDb21wb25lbnQoKSB7XG5cdFx0cmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG5cdH1cblxuXHRwdWJsaWMgbG9hZENvbXBvbmVudCgpIHtcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xuXHRcdGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWY7XG5cdFx0dmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0KDxDZWxsPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHRoaXMudmFsdWU7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUJhckNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtYmFyL3RhYmxlLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1jZWxsL3RhYmxlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1oZWFkZXIvdGFibGUtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRDb2x1bW5TZWxlY3RvckNvbXBvbmVudCxcblx0VGFibGVDb21wb25lbnQsXG5cdFRhYmxlQmFyQ29tcG9uZW50LFxuXHRUYWJsZUNlbGxDb21wb25lbnQsXG5cdFRhYmxlSGVhZGVyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IEhvc3RCaW5kaW5nLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aVRhYmxlQmFySXRlbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUJhckl0ZW1EaXJlY3RpdmUge1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmF1aS10YWJsZS1iYXItaXRlbScpIHNldENsYXNzID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IEhvc3RCaW5kaW5nLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aVRhYmxlQmFyU2VhcmNoXScsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQmFyU2VhcmNoRGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktdGFibGUtYmFyLXNlYXJjaCcpIHNldENsYXNzID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IFRhYmxlQmFySXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtYmFyLWl0ZW0vdGFibGUtYmFyLWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYmxlQmFyU2VhcmNoRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1iYXItc2VhcmNoL3RhYmxlLWJhci1zZWFyY2guZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IERpcmVjdGl2ZXMgPSBbXG5cdFRhYmxlQmFySXRlbURpcmVjdGl2ZSxcblx0VGFibGVCYXJTZWFyY2hEaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuaW1wb3J0IHsgVGFibGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90YWJsZS1oZWxwZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFRhYmxlSGVscGVyU2VydmljZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgVGFibGVSZWNvcmQsIFRhYmxlQ29sdW1uLCBPcmRlckJ5IH0gZnJvbSAnLi4vdHlwZXMvdGFibGUudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVGFibGUge1xuXHQvLyBPcmlnaW5hbCBkYXRhIChqc29uIGFycmF5IGZyb20gdGhlIHNlcnZlcilcblx0cHJpdmF0ZSByYXdEYXRhOiBUYWJsZVJlY29yZFtdID0gW107XG5cblx0Ly8gT3JpZ2luYWwgY29sdW1ucyBjb25maWcgKGZyb20gdGhlIGFwcClcblx0cHJpdmF0ZSByYXdDb2x1bW5zOiAoVGFibGVDb2x1bW58c3RyaW5nKVtdO1xuXG5cdC8vIEFycmF5IG9mIGZpbHRlcnNcblx0cHVibGljIGZpbHRlcnM6IEZpbHRlcltdID0gW107XG5cblx0Ly8gUGFnaW5hdGlvblxuXHRwdWJsaWMgcGFnZTtcblx0cHVibGljIGxpbWl0O1xuXHRwdWJsaWMgbGFzdFBhZ2U7XG5cblx0Ly8gU29ydGluZ1xuXHRwdWJsaWMgb3JkZXJCeTogT3JkZXJCeTtcblxuXHRwdWJsaWMgZmlsdGVyZWREYXRhOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHB1YmxpYyByb3dzOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHB1YmxpYyBjb2x1bW5zOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cblx0Ly8gSW5pdCBzdHVmZi4uLlxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0Ly8gLS0tLS0tLS0tLSBHRVRURVJTIHwgU0VUVEVSUyAtLS0tLS0tLS0tIC8vXG5cblx0cHVibGljIHNldFJhd0RhdGEoZGF0YTogYW55W10pIHtcblx0XHR0aGlzLnJhd0RhdGEgPSBkYXRhO1xuXHRcdHRoaXMudXBkYXRlRmlsdGVyZWREYXRhKCk7XG5cdFx0dGhpcy5zZXRMYXN0UGFnZSgpO1xuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIHNldFJhd0NvbHVtbnMoY29sdW1ucykge1xuXHRcdHRoaXMucmF3Q29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0dGhpcy51cGRhdGVDb2x1bW5zKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0RmlsdGVycyhmaWx0ZXJzOiBGaWx0ZXJbXSkge1xuXHRcdHRoaXMuZmlsdGVycyA9IGZpbHRlcnM7XG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJlZERhdGEoKTtcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgYWRkRmlsdGVyKGZpbHRlcjogRmlsdGVyKSB7XG5cdFx0dGhpcy5maWx0ZXJzLnB1c2goZmlsdGVyKTtcblx0XHR0aGlzLnVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuXHRcdHRoaXMuc2V0TGFzdFBhZ2UoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd3MoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRQYWdlKGkpIHtcblx0XHR0aGlzLnBhZ2UgPSBOdW1iZXIoaSk7IC8vIHNvbWV0aGluZyB3ZWlyZCBudW1iZXIgPjwgc3RyaW5nXG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0TGltaXQoaTogbnVtYmVyKSB7XG5cdFx0dGhpcy5saW1pdCA9IE51bWJlcihpKTsgLy8gc29tZXRoaW5nIHdlaXJkIG51bWJlciA+PCBzdHJpbmdcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0aWYgKHRoaXMubGFzdFBhZ2UgJiYgdGhpcy5wYWdlID4gdGhpcy5sYXN0UGFnZSkge1xuXHRcdFx0dGhpcy5wYWdlID0gdGhpcy5sYXN0UGFnZTtcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0T3JkZXJCeShvKSB7XG5cdFx0dGhpcy5vcmRlckJ5ID0gbztcblx0XHR0aGlzLnVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuXHRcdHRoaXMuc2V0TGFzdFBhZ2UoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd3MoKTtcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0gVklSVFVBTCBQUk9QUyAtLS0tLS0tLS0tIC8vXG5cblx0cHVibGljIGdldE9mZnNldCgpIHtcblx0XHRyZXR1cm4gKHRoaXMucGFnZSAqIHRoaXMubGltaXQpIC0gdGhpcy5saW1pdDtcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0gUFJPUEVSVFkgSEVMUEVSUyAtLS0tLS0tLS0tIC8vXG5cblx0cHVibGljIHNldExhc3RQYWdlKCkge1xuXHRcdGNvbnN0IGQgPSB0aGlzLmZpbHRlcmVkRGF0YS5nZXRWYWx1ZSgpO1xuXHRcdHRoaXMubGFzdFBhZ2UgPSBNYXRoLmNlaWwoZCA/IGQubGVuZ3RoIC8gdGhpcy5saW1pdCA6IDApO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZVJvd3MoKSB7XG5cdFx0bGV0IGQgPSB0aGlzLmZpbHRlcmVkRGF0YS5nZXRWYWx1ZSgpO1xuXG5cdFx0aWYgKHRoaXMub3JkZXJCeSkge1xuXHRcdFx0ZCA9IHRoaXMuc29ydERhdGEoZCwgdGhpcy5vcmRlckJ5LmtleSwgdGhpcy5vcmRlckJ5Lm9yZGVyKTtcblx0XHR9XG5cblx0XHRkID0gdGhpcy5zZWxlY3REYXRhKGQsIHRoaXMubGltaXQsIHRoaXMuZ2V0T2Zmc2V0KCkpO1xuXG5cdFx0dGhpcy5yb3dzLm5leHQoZCk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlQ29sdW1ucygpIHtcblx0XHRjb25zdCBjID0gdGhpcy5maWx0ZXJIaWRkZW5Db2x1bW5zKHRoaXMucmF3Q29sdW1ucyk7XG5cdFx0dGhpcy5jb2x1bW5zLm5leHQoYyk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlRmlsdGVyZWREYXRhKCkge1xuXHRcdHRoaXMuZmlsdGVyZWREYXRhLm5leHQodGhpcy5maWx0ZXJEYXRhKHRoaXMucmF3RGF0YSwgdGhpcy5maWx0ZXJzKSk7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tIEFCU1RSQUNUIEhFTFBFUlMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBmaWx0ZXJEYXRhKGRhdGEsIGZpbHRlcnM6IEZpbHRlcltdKSB7XG5cdFx0bGV0IGQgPSBkYXRhLnNsaWNlKCk7XG5cblx0XHRmaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuXHRcdFx0ZCA9IGZpbHRlci5wYXJzZURhdGEoZCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZDtcblx0fVxuXG5cdHB1YmxpYyBzb3J0RGF0YShkYXRhLCBrZXksIG9yZGVyID0gJ2FzYycpIHtcblx0XHRpZiAoIWRhdGEgfHwgIWRhdGEuc29ydCB8fCAha2V5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZCA9IGRhdGEuc2xpY2UoKTtcblx0XHRkLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdGlmIChhW2tleV0gPCBiW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIG9yZGVyID09PSAnYXNjJyA/IC0xIDogMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFba2V5XSA+IGJba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gb3JkZXIgPT09ICdhc2MnID8gMSA6IC0xO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZDtcblx0fVxuXG5cdHB1YmxpYyBzZWxlY3REYXRhKGRhdGEsIGxpbWl0LCBvZmZzZXQpIHtcblx0XHRpZiAoZGF0YSAmJiBsaW1pdCA+PSAwICYmIG9mZnNldCA+PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIGxpbWl0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVySGlkZGVuQ29sdW1ucyhjb2x1bW5zKSB7XG5cdFx0cmV0dXJuIGNvbHVtbnMuZmlsdGVyKChvKSA9PiB7XG5cdFx0XHRyZXR1cm4gIW8uaGlkZGVuO1xuXHRcdH0pO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiREVGQVVMVF9NRVNTQUdFUy5OT19EQVRBIiwiREVGQVVMVF9NRVNTQUdFUy5MT0FEX0RBVEEiLCJERUZBVUxUX01FU1NBR0VTLk5PX0NPTFVNTlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7SUFLUSxxQ0FBUTs7OztjQUFDLEdBQXlCO1FBQ3hDLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxtQkFBQyxHQUFrQixHQUFFLEtBQUsscUJBQUcsR0FBYSxDQUFBLENBQUM7Ozs7OztJQUcxRSxxQ0FBUTs7Oztj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

/***/ }),

/***/ "./dist/utils/fesm5/utils.js":
/*!***********************************!*\
  !*** ./dist/utils/fesm5/utils.js ***!
  \***********************************/
/*! exports provided: FilterModule, CheckboxFilterComponent, InputFilterComponent, SelectFilterComponent, Filter, FilterService, InterpolateLabelPipe, PluralizeLabelPipe, interpolate, LabelsModule, WINDOW_PROVIDERS, WINDOW, WindowModule, ɵa, ɵe, ɵc, ɵb, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModule", function() { return FilterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxFilterComponent", function() { return CheckboxFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFilterComponent", function() { return InputFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFilterComponent", function() { return SelectFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpolateLabelPipe", function() { return InterpolateLabelPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralizeLabelPipe", function() { return PluralizeLabelPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsModule", function() { return LabelsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowModule", function() { return WindowModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return Pipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return windowFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxFilterComponent = /** @class */ (function () {
    function CheckboxFilterComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-checkbox-filter',
                    template: "<ul class=\"a-list a-list--reset aui-checkbox-filter\" *ngIf=\"filter && filter.options && filter.id\">\n\t<li *ngFor=\"let option of filter.options; let i = index;\">\n\t\t<div class=\"a-input\">\n\t\t\t<div class=\"a-input__checkbox\">\n\t\t\t\t<input type=\"checkbox\" [id]=\"option.id\" [name]=\"option.id\" [(ngModel)]=\"option.checked\" (ngModelChange)=\"onFilter()\">\n\t\t\t\t<label [for]=\"option.id\">{{ option.name }}</label>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n</ul>\n",
                },] },
    ];
    /** @nocollapse */
    CheckboxFilterComponent.propDecorators = {
        "filter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return CheckboxFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputFilterComponent = /** @class */ (function () {
    function InputFilterComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-input-filter',
                    template: "<div class=\"a-input has-icon-right aui-input-filter\">\n\t<ng-container *ngIf=\"filter\">\n\t\t<div class=\"a-input__wrapper\">\n\t\t\t<input type=\"text\" [placeholder]=\"filter.name\" [(ngModel)]=\"value\" (ngModelChange)=\"onFilter(value)\">\n\t\t\t<span class=\"fa fa-search\"></span>\n\t\t</div>\n\t</ng-container>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    InputFilterComponent.propDecorators = {
        "filter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return InputFilterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectFilterComponent = /** @class */ (function () {
    function SelectFilterComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aui-select-filter',
                    template: "<div class=\"a-input has-icon-right aui-select-filter\">\n\t<ng-container *ngIf=\"filter && filter.options && filter.id\">\n\t\t<label class=\"a-input__label a-input__label--inline\" [for]=\"filter.id\">{{ filter.name }}: </label>\n\t\t<div class=\"a-input__wrapper a-input__wrapper--inline\">\n\t\t\t<select [name]=\"filter.id\" [id]=\"filter.id\" [(ngModel)]=\"value\" (ngModelChange)=\"onFilter(value)\">\n\t\t\t\t<option *ngFor=\"let option of filter.options; let i = index;\" [ngValue]=\"option\">{{ option.name }}</option>\n\t\t\t</select>\n\t\t\t<span class=\"fa fa-angle-down\"></span>\n\t\t</div>\n\t</ng-container>\n</div>\n",
                },] },
    ];
    /** @nocollapse */
    SelectFilterComponent.propDecorators = {
        "filter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "update": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
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
var /** @type {?} */ WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken');
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(BrowserWindowRef, _super);
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
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
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
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL3V0aWxzL2xpYi9maWx0ZXIvY29tcG9uZW50cy9jaGVja2JveC1maWx0ZXIvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdXRpbHMvbGliL2ZpbHRlci9jb21wb25lbnRzL2lucHV0LWZpbHRlci9pbnB1dC1maWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL2NvbXBvbmVudHMvc2VsZWN0LWZpbHRlci9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vdXRpbHMvbGliL2ZpbHRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlLnRzIiwibmc6Ly91dGlscy9saWIvZmlsdGVyL2ZpbHRlci5tb2R1bGUudHMiLCJuZzovL3V0aWxzL2xpYi9maWx0ZXIvY2xhc3Nlcy9maWx0ZXIuY2xhc3MudHMiLCJuZzovL3V0aWxzL2xpYi9sYWJlbHMvdXRpbHMvaW50ZXJwb2xhdGlvbi50cyIsIm5nOi8vdXRpbHMvbGliL2xhYmVscy9waXBlcy9pbnRlcnBvbGF0ZS1sYWJlbC5waXBlLnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL3BpcGVzL3BsdXJhbGl6ZS1sYWJlbC5waXBlLnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL3BpcGVzL2luZGV4LnRzIiwibmc6Ly91dGlscy9saWIvbGFiZWxzL2xhYmVscy5tb2R1bGUudHMiLCJuZzovL3V0aWxzL2xpYi93aW5kb3cvc2VydmljZXMvd2luZG93LnNlcnZpY2UudHMiLCJuZzovL3V0aWxzL2xpYi93aW5kb3cvd2luZG93Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9maWx0ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY2hlY2tib3gtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJhLWxpc3QgYS1saXN0LS1yZXNldCBhdWktY2hlY2tib3gtZmlsdGVyXCIgKm5nSWY9XCJmaWx0ZXIgJiYgZmlsdGVyLm9wdGlvbnMgJiYgZmlsdGVyLmlkXCI+XG5cdDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlci5vcHRpb25zOyBsZXQgaSA9IGluZGV4O1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fY2hlY2tib3hcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtpZF09XCJvcHRpb24uaWRcIiBbbmFtZV09XCJvcHRpb24uaWRcIiBbKG5nTW9kZWwpXT1cIm9wdGlvbi5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXIoKVwiPlxuXHRcdFx0XHQ8bGFiZWwgW2Zvcl09XCJvcHRpb24uaWRcIj57eyBvcHRpb24ubmFtZSB9fTwvbGFiZWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmlsdGVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgZmlsdGVyO1xuXHRAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgdmFsdWU7XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLmZpbHRlcikge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMuZmlsdGVyLnZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLm9uRmlsdGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgb25GaWx0ZXIoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmZpbHRlci5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xuXHRcdFx0cmV0dXJuIG9wdGlvbi5jaGVja2VkO1xuXHRcdH0pO1xuXHRcdHRoaXMudXBkYXRlLmVtaXQodmFsdWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9maWx0ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaW5wdXQtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodCBhdWktaW5wdXQtZmlsdGVyXCI+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlclwiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cImZpbHRlci5uYW1lXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKHZhbHVlKVwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmlsdGVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgZmlsdGVyO1xuXHRAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgdmFsdWU7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXIudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKHZhbHVlKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2ZpbHRlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zZWxlY3QtZmlsdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1pbnB1dCBoYXMtaWNvbi1yaWdodCBhdWktc2VsZWN0LWZpbHRlclwiPlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyICYmIGZpbHRlci5vcHRpb25zICYmIGZpbHRlci5pZFwiPlxuXHRcdDxsYWJlbCBjbGFzcz1cImEtaW5wdXRfX2xhYmVsIGEtaW5wdXRfX2xhYmVsLS1pbmxpbmVcIiBbZm9yXT1cImZpbHRlci5pZFwiPnt7IGZpbHRlci5uYW1lIH19OiA8L2xhYmVsPlxuXHRcdDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyIGEtaW5wdXRfX3dyYXBwZXItLWlubGluZVwiPlxuXHRcdFx0PHNlbGVjdCBbbmFtZV09XCJmaWx0ZXIuaWRcIiBbaWRdPVwiZmlsdGVyLmlkXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKHZhbHVlKVwiPlxuXHRcdFx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmlsdGVyLm9wdGlvbnM7IGxldCBpID0gaW5kZXg7XCIgW25nVmFsdWVdPVwib3B0aW9uXCI+e3sgb3B0aW9uLm5hbWUgfX08L29wdGlvbj5cblx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWx0ZXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBmaWx0ZXI7XG5cdEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyB2YWx1ZTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXIudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uRmlsdGVyKHZhbHVlKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENoZWNrYm94RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC1maWx0ZXIvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZmlsdGVyL2lucHV0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZmlsdGVyL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50JztcblxuXG5jb25zdCBDb21wb25lbnRzID0gW1xuXHRDaGVja2JveEZpbHRlckNvbXBvbmVudCxcblx0SW5wdXRGaWx0ZXJDb21wb25lbnQsXG5cdFNlbGVjdEZpbHRlckNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCB7XG5cdENvbXBvbmVudHMsXG5cblx0Q2hlY2tib3hGaWx0ZXJDb21wb25lbnQsXG5cdElucHV0RmlsdGVyQ29tcG9uZW50LFxuXHRTZWxlY3RGaWx0ZXJDb21wb25lbnQsXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi9jbGFzc2VzL2ZpbHRlci5jbGFzcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXJ2aWNlIHtcblx0cHVibGljIGZpbHRlckRhdGEoZGF0YTogYW55W10sIGZpbHRlcnM6IEZpbHRlcltdKSB7XG5cdFx0ZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcblx0XHRcdGRhdGEgPSBmaWx0ZXIucGFyc2VEYXRhKGRhdGEpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmlsdGVyU2VydmljZSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1vZHVsZSB7fVxuIiwiZXhwb3J0IGNsYXNzIEZpbHRlciB7XG5cdHB1YmxpYyBpZDogc3RyaW5nO1xuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRwdWJsaWMgb3B0aW9uczogYW55W107XG5cdHB1YmxpYyB2YWx1ZTogc3RyaW5nIHwgYW55W107XG5cdHB1YmxpYyBwYXJzZTogKGRhdGE6IGFueVtdLCB2YWx1ZTogYW55KSA9PiBhbnlbXTtcblxuXHRwdWJsaWMgcGFyc2VEYXRhKGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJzZShkYXRhLCB0aGlzLnZhbHVlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgUmVwbGFjZURhdGEgfSBmcm9tICcuLi90eXBlcy9sYWJlbHMudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAobGFiZWw6IHN0cmluZywgcmVwbGFjZURhdGE/OiBSZXBsYWNlRGF0YSk6IHN0cmluZyA9PiB7XG5cdGlmICghcmVwbGFjZURhdGEpIHtcblx0XHRyZXR1cm4gbGFiZWw7XG5cdH1cblxuXHRjb25zdCBlc2NhcGVTdHJpbmdSZWdFeHAgPSBwcm9wID0+IHByb3AucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKTtcblx0Y29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoYFxcJXsoJHtPYmplY3Qua2V5cyhyZXBsYWNlRGF0YSkubWFwKGVzY2FwZVN0cmluZ1JlZ0V4cCkuam9pbignfCcpfSlcXH1gLCAnZycpO1xuXG5cdHJldHVybiBsYWJlbC5yZXBsYWNlKHBhdHRlcm4sIChtYXRjaCwgcHJvcCkgPT4gcmVwbGFjZURhdGFbcHJvcF0gPyBTdHJpbmcocmVwbGFjZURhdGFbcHJvcF0pIDogJycpO1xufTtcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaW50ZXJwb2xhdGUgfSBmcm9tICcuLi91dGlscy9pbnRlcnBvbGF0aW9uJztcbmltcG9ydCB7IFJlcGxhY2VEYXRhLCBMYWJlbCB9IGZyb20gJy4uL3R5cGVzL2xhYmVscy50eXBlcyc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2ludGVycG9sYXRlTGFiZWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0ZUxhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0obGFiZWw6IHN0cmluZywgcmVwbGFjZURhdGE6IFJlcGxhY2VEYXRhKTogc3RyaW5nIHtcblx0XHRpZiAoIXJlcGxhY2VEYXRhIHx8ICFsYWJlbCkge1xuXHRcdFx0cmV0dXJuIGxhYmVsO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnRlcnBvbGF0ZShsYWJlbCwgcmVwbGFjZURhdGEpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vdHlwZXMvbGFiZWxzLnR5cGVzJztcblxuXG5AUGlwZSh7XG5cdG5hbWU6ICdwbHVyYWxpemVMYWJlbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBsdXJhbGl6ZUxhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0obGFiZWw6IExhYmVsfHN0cmluZywgY291bnQ6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0aWYgKCFsYWJlbCB8fCB0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWwgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb3VudCA9PT0gMSA/IGxhYmVsLnNpbmd1bGFyIDogbGFiZWwucGx1cmFsO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBQbHVyYWxpemVMYWJlbFBpcGUgfSBmcm9tICcuL3BsdXJhbGl6ZS1sYWJlbC5waXBlJztcbmltcG9ydCB7IEludGVycG9sYXRlTGFiZWxQaXBlIH0gZnJvbSAnLi9pbnRlcnBvbGF0ZS1sYWJlbC5waXBlJztcblxuZXhwb3J0IGNvbnN0IFBpcGVzID0gW1xuXHRQbHVyYWxpemVMYWJlbFBpcGUsXG5cdEludGVycG9sYXRlTGFiZWxQaXBlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBpcGVzIH0gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBpcGVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UGlwZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsc01vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDbGFzc1Byb3ZpZGVyLCBGYWN0b3J5UHJvdmlkZXIsIEluamVjdGlvblRva2VuLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiBDcmVhdGUgYSBuZXcgaW5qZWN0aW9uIHRva2VuIGZvciBpbmplY3RpbmcgdGhlIHdpbmRvdyBpbnRvIGEgY29tcG9uZW50LiAqL1xuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93VG9rZW4nKTtcblxuLyogRGVmaW5lIGFic3RyYWN0IGNsYXNzIGZvciBvYnRhaW5pbmcgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgd2luZG93IG9iamVjdC4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaW5kb3dSZWYge1xuXHRnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB8IE9iamVjdCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuJyk7XG5cdH1cbn1cblxuLyogRGVmaW5lIGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgYWJzdHJhY3QgY2xhc3MgYW5kIHJldHVybnMgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LiAqL1xuZXhwb3J0IGNsYXNzIEJyb3dzZXJXaW5kb3dSZWYgZXh0ZW5kcyBXaW5kb3dSZWYge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cgfCBPYmplY3Qge1xuXHRcdHJldHVybiB3aW5kb3c7XG5cdH1cbn1cblxuLyogQ3JlYXRlIGFuIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dGYWN0b3J5KGJyb3dzZXJXaW5kb3dSZWY6IEJyb3dzZXJXaW5kb3dSZWYsIHBsYXRmb3JtSWQ6IE9iamVjdCk6IFdpbmRvdyB8IE9iamVjdCB7XG5cdGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuXHRcdHJldHVybiBicm93c2VyV2luZG93UmVmLm5hdGl2ZVdpbmRvdztcblx0fVxuXHRyZXR1cm4gbmV3IE9iamVjdCgpO1xufVxuXG4vKiBDcmVhdGUgYSBpbmplY3RhYmxlIHByb3ZpZGVyIGZvciB0aGUgV2luZG93UmVmIHRva2VuIHRoYXQgdXNlcyB0aGUgQnJvd3NlcldpbmRvd1JlZiBjbGFzcy4gKi9cbmNvbnN0IGJyb3dzZXJXaW5kb3dQcm92aWRlcjogQ2xhc3NQcm92aWRlciA9IHtcblx0cHJvdmlkZTogV2luZG93UmVmLFxuXHR1c2VDbGFzczogQnJvd3NlcldpbmRvd1JlZixcbn07XG5cbi8qIENyZWF0ZSBhbiBpbmplY3RhYmxlIHByb3ZpZGVyIHRoYXQgdXNlcyB0aGUgd2luZG93RmFjdG9yeSBmdW5jdGlvbiBmb3IgcmV0dXJuaW5nIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cbmNvbnN0IHdpbmRvd1Byb3ZpZGVyOiBGYWN0b3J5UHJvdmlkZXIgPSB7XG5cdHByb3ZpZGU6IFdJTkRPVyxcblx0dXNlRmFjdG9yeTogd2luZG93RmFjdG9yeSxcblx0ZGVwczogW1dpbmRvd1JlZiwgUExBVEZPUk1fSURdLFxufTtcblxuLyogQ3JlYXRlIGFuIGFycmF5IG9mIHByb3ZpZGVycy4gKi9cbmV4cG9ydCBjb25zdCBXSU5ET1dfUFJPVklERVJTID0gW1xuXHRicm93c2VyV2luZG93UHJvdmlkZXIsXG5cdHdpbmRvd1Byb3ZpZGVyLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdJTkRPV19QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL3dpbmRvdy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0V0lORE9XX1BST1ZJREVSUyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93TW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O3NCQW1Cb0IsSUFBSSxZQUFZLEVBQUU7Ozs7O0lBRzlCLDBDQUFROzs7O1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBR1YsMENBQVE7Ozs7UUFDZCxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTTtZQUM5QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkE5QnpCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsa2VBVVY7aUJBQ0E7Ozs7MkJBRUMsS0FBSzsyQkFDTCxNQUFNOztrQ0FuQlI7Ozs7Ozs7QUNBQTs7c0JBaUJvQixJQUFJLFlBQVksRUFBRTs7Ozs7SUFHckMsdUNBQVE7OztJQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDL0I7S0FDRDs7Ozs7SUFFTSx1Q0FBUTs7OztjQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztnQkF4QnpCLFNBQVMsU0FB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

/***/ }),

/***/ "./examples/avatar/fesm2015/avatar.js":
/*!********************************************!*\
  !*** ./examples/avatar/fesm2015/avatar.js ***!
  \********************************************/
/*! exports provided: AvatarDemoPageComponent, AvatarExamplesModule, AVATAR_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarDemoPageComponent", function() { return AvatarDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarExamplesModule", function() { return AvatarExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVATAR_EXAMPLES_ROUTES", function() { return AVATAR_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/avatar */ "./dist/avatar/fesm5/avatar.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AvatarDemoPageComponent {
    constructor() {
        this.importModule = `import { AvatarModule } from '@acpaas-ui/ngx-components/avatar';

@NgModule({
	imports: [
		AvatarModule
	]
});

export class AppModule {};`;
        this.example1 = '<aui-avatar image="https://robohash.org/acpaas-ui" title="My image"></aui-avatar>';
        this.example2 = '<aui-avatar icon="fa fa-user" title="An icon" size="L"></aui-avatar>';
        this.example3 = '<aui-avatar letter="T" title="The letter T" size="S"></aui-avatar>';
    }
}
AvatarDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Avatar</h1>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="importModule"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="example1"></aui-code-snippet>
	<div class="u-margin-bottom-xs">
		<aui-avatar image="https://robohash.org/acpaas-ui" title="My image"></aui-avatar>
	</div>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="example2"></aui-code-snippet>
	<div class="u-margin-bottom-xs">
		<aui-avatar icon="fa fa-user" title="An icon" size="L"></aui-avatar>
	</div>
</div>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="example3"></aui-code-snippet>
	<div class="u-margin-bottom-xs">
		<aui-avatar letter="T" title="The letter T" size="S"></aui-avatar>
	</div>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    AvatarDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AvatarExamplesModule {
}
AvatarExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_avatar__WEBPACK_IMPORTED_MODULE_2__["AvatarModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ AVATAR_EXAMPLES_ROUTES = [
    {
        path: '',
        component: AvatarDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hdmF0YXIvYXZhdGFyL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9hdmF0YXIvYXZhdGFyL3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9hdmF0YXIvYXZhdGFyL2F2YXRhci5tb2R1bGUudHMiLCJuZzovL2F2YXRhci9hdmF0YXIvYXZhdGFyLnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgPGgxIGNsYXNzPVwiaDMgdS1tYXJnaW4tYm90dG9tXCI+QXZhdGFyPC9oMT5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImltcG9ydE1vZHVsZVwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJleGFtcGxlMVwiPjwvYXVpLWNvZGUtc25pcHBldD5cblx0PGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbS14c1wiPlxuXHRcdDxhdWktYXZhdGFyIGltYWdlPVwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYWNwYWFzLXVpXCIgdGl0bGU9XCJNeSBpbWFnZVwiPjwvYXVpLWF2YXRhcj5cblx0PC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiZXhhbXBsZTJcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG5cdDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cblx0XHQ8YXVpLWF2YXRhciBpY29uPVwiZmEgZmEtdXNlclwiIHRpdGxlPVwiQW4gaWNvblwiIHNpemU9XCJMXCI+PC9hdWktYXZhdGFyPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiZXhhbXBsZTNcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG5cdDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cblx0XHQ8YXVpLWF2YXRhciBsZXR0ZXI9XCJUXCIgdGl0bGU9XCJUaGUgbGV0dGVyIFRcIiBzaXplPVwiU1wiPjwvYXVpLWF2YXRhcj5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckRlbW9QYWdlQ29tcG9uZW50IHtcblx0cHVibGljIGltcG9ydE1vZHVsZSA9IGBpbXBvcnQgeyBBdmF0YXJNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2F2YXRhcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRBdmF0YXJNb2R1bGVcblx0XVxufSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge307YDtcblxuXHRwdWJsaWMgZXhhbXBsZTEgPSAnPGF1aS1hdmF0YXIgaW1hZ2U9XCJodHRwczovL3JvYm9oYXNoLm9yZy9hY3BhYXMtdWlcIiB0aXRsZT1cIk15IGltYWdlXCI+PC9hdWktYXZhdGFyPic7XG5cblx0cHVibGljIGV4YW1wbGUyID0gJzxhdWktYXZhdGFyIGljb249XCJmYSBmYS11c2VyXCIgdGl0bGU9XCJBbiBpY29uXCIgc2l6ZT1cIkxcIj48L2F1aS1hdmF0YXI+JztcblxuXHRwdWJsaWMgZXhhbXBsZTMgPSAnPGF1aS1hdmF0YXIgbGV0dGVyPVwiVFwiIHRpdGxlPVwiVGhlIGxldHRlciBUXCIgc2l6ZT1cIlNcIj48L2F1aS1hdmF0YXI+Jztcbn1cbiIsImltcG9ydCB7IEF2YXRhckRlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlcyA9IFtcblx0QXZhdGFyRGVtb1BhZ2VDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBdmF0YXJNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2F2YXRhcic7XG5pbXBvcnQgeyBDb2RlU25pcHBldE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvY29kZS1zbmlwcGV0JztcblxuaW1wb3J0IHsgUGFnZXMgfSBmcm9tICcuL3BhZ2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRBdmF0YXJNb2R1bGUsXG5cdFx0Q29kZVNuaXBwZXRNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2VzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXZhdGFyRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IEFWQVRBUl9FWEFNUExFU19ST1VURVM6IFJvdXRlcyA9IFtcblx0e1xuXHRcdHBhdGg6ICcnLFxuXHRcdGNvbXBvbmVudDogQXZhdGFyRGVtb1BhZ2VDb21wb25lbnQsXG5cdFx0cGF0aE1hdGNoOiAnZnVsbCcsXG5cdH0sXG5dO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs0QkE4QnVCOzs7Ozs7OzsyQkFRSTt3QkFFUixtRkFBbUY7d0JBRW5GLHNFQUFzRTt3QkFFdEUsb0VBQW9FOzs7O1lBMUN0RixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3QlY7YUFDQTs7Ozs7OztBQzVCRCx1QkFFYSxLQUFLLEdBQUc7SUFDcEIsdUJBQXVCO0NBQ3ZCOzs7Ozs7QUNKRDs7O1lBT0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsS0FBSztpQkFDTDthQUNEOzs7Ozs7O0FDZEQsdUJBRWEsc0JBQXNCLEdBQVc7SUFDN0M7UUFDQyxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSx1QkFBdUI7UUFDbEMsU0FBUyxFQUFFLE1BQU07S0FDakI7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./examples/calendar/fesm2015/calendar.js":
/*!************************************************!*\
  !*** ./examples/calendar/fesm2015/calendar.js ***!
  \************************************************/
/*! exports provided: DemoPageComponent, CalendarExamplesModule, CALENDAR_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageComponent", function() { return DemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarExamplesModule", function() { return CalendarExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_EXAMPLES_ROUTES", function() { return CALENDAR_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/calendar */ "./dist/calendar/fesm5/calendar.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DemoPageComponent {
    constructor() {
        this.clickedDate = new Date();
        this.range = [1, 6];
        this.javascript1 = `import { CalendarModule } from '@acpaas-ui/ngx-components/calendar;'

@NgModule({
	imports: [
		CalendarModule.forChild([
			'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'
		], [
			'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
		])
	]
});

export class AppModule {};`;
        this.javascript2 = `import { DateRange } from '@acpaas-ui/js-date-utils';

public clickedDate: Date = new Date();
public range: DateRange = [1, 6];

selectDate(event) {
	if (event.complete) {
		this.clickedDate = event.date;
	}
}`;
        this.html = `<aui-calendar
	[range]="range"
	[selectedDate]="clickedDate"
	(selectDate)="selectDate($event)">
</aui-calendar>`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeDate(event) {
        if (event.complete) {
            this.clickedDate = event.date;
        }
    }
}
DemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Calendar</h1>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="html"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<div class="m-datepicker is-open">
		<aui-calendar
			[range]="range"
			[selectedDate]="clickedDate"
			(selectDate)="changeDate($event)">
		</aui-calendar>
	</div>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    DemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CalendarExamplesModule {
}
CalendarExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"].forChild([
                        'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
                    ], [
                        'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
                    ]),
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ CALENDAR_EXAMPLES_ROUTES = [
    {
        path: '',
        component: DemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NhbGVuZGFyL2NhbGVuZGFyL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9jYWxlbmRhci9jYWxlbmRhci9wYWdlcy9pbmRleC50cyIsIm5nOi8vY2FsZW5kYXIvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlLnRzIiwibmc6Ly9jYWxlbmRhci9jYWxlbmRhci9jYWxlbmRhci5yb3V0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUmFuZ2UgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGA8aDEgY2xhc3M9XCJoMyB1LW1hcmdpbi1ib3R0b21cIj5DYWxlbmRhcjwvaDE+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImh0bWxcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8ZGl2IGNsYXNzPVwibS1kYXRlcGlja2VyIGlzLW9wZW5cIj5cblx0XHQ8YXVpLWNhbGVuZGFyXG5cdFx0XHRbcmFuZ2VdPVwicmFuZ2VcIlxuXHRcdFx0W3NlbGVjdGVkRGF0ZV09XCJjbGlja2VkRGF0ZVwiXG5cdFx0XHQoc2VsZWN0RGF0ZSk9XCJjaGFuZ2VEYXRlKCRldmVudClcIj5cblx0XHQ8L2F1aS1jYWxlbmRhcj5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIERlbW9QYWdlQ29tcG9uZW50IHtcblx0cHVibGljIGNsaWNrZWREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblx0cHVibGljIHJhbmdlOiBEYXRlUmFuZ2UgPSBbMSwgNl07XG5cblx0cHVibGljIGphdmFzY3JpcHQxID0gYGltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jYWxlbmRhcjsnXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDYWxlbmRhck1vZHVsZS5mb3JDaGlsZChbXG5cdFx0XHQnTWFhbmRhZycsICdEaW5zZGFnJywgJ1dvZW5zZGFnJywgJ0RvbmRlcmRhZycsICdWcmlqZGFnJywgJ1phdGVyZGFnJywgJ1pvbmRhZydcblx0XHRdLCBbXG5cdFx0XHQnSmFudWFyaScsICdGZWJydWFyaScsICdNYWFydCcsICdBcHJpbCcsICdNZWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdHVzJywgJ1NlcHRlbWJlcicsICdPa3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuXHRcdF0pXG5cdF1cbn0pO1xuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9O2A7XG5cblx0cHVibGljIGphdmFzY3JpcHQyID0gYGltcG9ydCB7IERhdGVSYW5nZSB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbnB1YmxpYyBjbGlja2VkRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5wdWJsaWMgcmFuZ2U6IERhdGVSYW5nZSA9IFsxLCA2XTtcblxuc2VsZWN0RGF0ZShldmVudCkge1xuXHRpZiAoZXZlbnQuY29tcGxldGUpIHtcblx0XHR0aGlzLmNsaWNrZWREYXRlID0gZXZlbnQuZGF0ZTtcblx0fVxufWA7XG5cdHB1YmxpYyBodG1sID0gYDxhdWktY2FsZW5kYXJcblx0W3JhbmdlXT1cInJhbmdlXCJcblx0W3NlbGVjdGVkRGF0ZV09XCJjbGlja2VkRGF0ZVwiXG5cdChzZWxlY3REYXRlKT1cInNlbGVjdERhdGUoJGV2ZW50KVwiPlxuPC9hdWktY2FsZW5kYXI+YDtcblxuXHRwdWJsaWMgY2hhbmdlRGF0ZShldmVudCkge1xuXHRcdGlmIChldmVudC5jb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5jbGlja2VkRGF0ZSA9IGV2ZW50LmRhdGU7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBEZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUGFnZXMgPSBbXG5cdERlbW9QYWdlQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2NhbGVuZGFyJztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdENhbGVuZGFyTW9kdWxlLmZvckNoaWxkKFtcblx0XHRcdCdNYWFuZGFnJywgJ0RpbnNkYWcnLCAnV29lbnNkYWcnLCAnRG9uZGVyZGFnJywgJ1ZyaWpkYWcnLCAnWmF0ZXJkYWcnLCAnWm9uZGFnJyxcblx0XHRcdF0sIFtcblx0XHRcdCdKYW51YXJpJywgJ0ZlYnJ1YXJpJywgJ01hYXJ0JywgJ0FwcmlsJywgJ01laScsICdKdW5pJywgJ0p1bGknLCAnQXVndXN0dXMnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInLFxuXHRcdF0pLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0VYQU1QTEVTX1JPVVRFUzogUm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJycsXG5cdFx0Y29tcG9uZW50OiBEZW1vUGFnZUNvbXBvbmVudCxcblx0XHRwYXRoTWF0Y2g6ICdmdWxsJyxcblx0fSxcbl07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OzJCQThCNEIsSUFBSSxJQUFJLEVBQUU7cUJBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzJCQUVYOzs7Ozs7Ozs7Ozs7MkJBWUs7MkJBRUw7Ozs7Ozs7OztFQVNwQjtvQkFDYTs7OztnQkFJQzs7Ozs7O0lBRVIsVUFBVSxDQUFDLEtBQUs7UUFDdEIsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztTQUM5Qjs7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVCVjthQUNBOzs7Ozs7O0FDNUJELHVCQUVhLEtBQUssR0FBRztJQUNwQixpQkFBaUI7Q0FDakI7Ozs7OztBQ0pEOzs7WUFPQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osY0FBYyxDQUFDLFFBQVEsQ0FBQzt3QkFDdkIsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUTtxQkFDN0UsRUFBRTt3QkFDSCxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7cUJBQzFILENBQUM7b0JBQ0YsaUJBQWlCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsS0FBSztpQkFDTDthQUNEOzs7Ozs7O0FDbEJELHVCQUVhLHdCQUF3QixHQUFXO0lBQy9DO1FBQ0MsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLFNBQVMsRUFBRSxNQUFNO0tBQ2pCO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./examples/code-snippet/fesm2015/code-snippet.js":
/*!********************************************************!*\
  !*** ./examples/code-snippet/fesm2015/code-snippet.js ***!
  \********************************************************/
/*! exports provided: CodeSnippetDemoPageComponent, CodeSnippetExamplesModule, CODE_SNIPPET_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetDemoPageComponent", function() { return CodeSnippetDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetExamplesModule", function() { return CodeSnippetExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE_SNIPPET_EXAMPLES_ROUTES", function() { return CODE_SNIPPET_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CodeSnippetDemoPageComponent {
    constructor() {
        this.codeExampleJS1 = `
import { CodeSnippetModule } from \'@acpaas-ui/ngx-components/code-snippet\';

@NgModule({
    imports: [
        CodeSnippetModule
    ]
})

export class AppModule {}`;
        this.codeExampleHTML1 = `<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <h4><aui-code-snippet [codeSnippet]="'Single text example'"></aui-code-snippet></h4>
    </div>
</div>`;
        this.html2 = `public codeExampleJSON = [
    {
        "title": "apples",
        "count": [12000, 20000],
        "description": {"text": "...", "sensitive": false}
    },
    {
        "title": "oranges",
        "count": [17500, null],
        "description": {"text": "...", "sensitive": false}
    }
];`;
        this.html3 = `public codeExampleJS =
	function greetMe(yourName) {
		alert('Hello ' + yourName);
	}
	greetMe('World');`;
        this.html4 = `public codeExampleJSON = [
		{
			"title": "apples",
			"count": [12000, 20000],
			"description": {"text": "...", "sensitive": false}
		},
		{
			"title": "oranges",
			"count": [17500, null],
			"description": {"text": "...", "sensitive": false}
		}
	];

public codeExampleJS =
	function greetMe(yourName) {
		alert('Hello ' + yourName);
	}
	greetMe('World');`;
        this.html5 = `import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentService {
	constructor(
		private http: Http
	) {}

	getMarkdown(): any {
		return this.http.get('/example.md')
		.map((res) => res.text());
	}
}`;
        this.example1 = `<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="'codeExample JS'"></aui-code-snippet>
    </div>
    <aui-code-snippet [codeSnippet]="example3"></aui-code-snippet>
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleJS"></aui-code-snippet>
    </div>
</div>`;
        this.example2 = `<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="'codeExample JS'"></aui-code-snippet>
    </div>
    <aui-code-snippet [codeSnippet]="example3"></aui-code-snippet>
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleJS"></aui-code-snippet>
    </div>
</div>`;
        this.example3 = `<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="'codeExample JS'"></aui-code-snippet>
    </div>
    <aui-code-snippet [codeSnippet]="example3"></aui-code-snippet>
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleJS"></aui-code-snippet>
    </div>
</div>`;
        this.example4 = `<aui-code-snippet
	*ngFor="let codeExample of codeExamples"
	[codeSnippet]="codeExample"
></aui-code-snippet>`;
        this.example5 = `<aui-code-snippet
    *ngIf="mdExample"
    [codeSnippet]="mdExample"
    [processMarkdown]="true"
></aui-code-snippet>`;
        this.codeExampleJSON = `[
    {
        "title": "apples",
        "count": [12000, 20000],
        "description": {"text": "...", "sensitive": false}
    },
    {
        "title": "oranges",
        "count": [17500, null],
        "description": {"text": "...", "sensitive": false}
    }
]`;
        this.codeExampleJS = `
function greetMe(yourName) {
	alert('Hello ' + yourName);
}
greetMe('World');`;
        this.codeExamples = [this.codeExampleJS, this.codeExampleJSON];
        this.codeExampleMarkdown = `public mdExample: string;

constructor(
    private contentService: ContentService
) {
    contentService.getMarkdown().subscribe(data => this.mdExample = data);
}`;
    }
}
CodeSnippetDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Code snippet</h1>
<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="codeExampleJS1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="codeExampleHTML1"></aui-code-snippet>
</div>

<h2 class="h4 u-margin-bottom">Single text</h2>
<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <h4><aui-code-snippet [codeSnippet]="'Single text example'"></aui-code-snippet></h4>
    </div>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="example1"></aui-code-snippet>
</div>

<h2 class="h4 u-margin-bottom">JSON</h2>
<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleJSON"></aui-code-snippet>
    </div>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="example2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="html2"></aui-code-snippet>
</div>

<h2 class="h4 u-margin-bottom">JS</h2>
<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleJS"></aui-code-snippet>
    </div>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="example3"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="html3"></aui-code-snippet>
</div>

<h2 class="h4 u-margin-bottom">Multiple code snippets</h2>
<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExamples"></aui-code-snippet>
    </div>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="example4"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="html4"></aui-code-snippet>
</div>

<h2 class="h4 u-margin-bottom">Markdown with code snippets</h2>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="html5"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleMarkdown"></aui-code-snippet>
    </div>
</div>

<div class="u-margin-bottom">
    <aui-code-snippet [codeSnippet]="example5"></aui-code-snippet>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    CodeSnippetDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CodeSnippetExamplesModule {
}
CodeSnippetExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_2__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ CODE_SNIPPET_EXAMPLES_ROUTES = [
    {
        path: '',
        component: CodeSnippetDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zbmlwcGV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb2RlLXNuaXBwZXQvY29kZS1zbmlwcGV0L3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9jb2RlLXNuaXBwZXQvY29kZS1zbmlwcGV0L3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9jb2RlLXNuaXBwZXQvY29kZS1zbmlwcGV0L2NvZGUtc25pcHBldC5tb2R1bGUudHMiLCJuZzovL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQvY29kZS1zbmlwcGV0LnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgPGgxIGNsYXNzPVwiaDMgdS1tYXJnaW4tYm90dG9tXCI+Q29kZSBzbmlwcGV0PC9oMT5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICA8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiY29kZUV4YW1wbGVKUzFcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJjb2RlRXhhbXBsZUhUTUwxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxoMiBjbGFzcz1cImg0IHUtbWFyZ2luLWJvdHRvbVwiPlNpbmdsZSB0ZXh0PC9oMj5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tLXhzXCI+XG4gICAgICAgIDxoND48YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiJ1NpbmdsZSB0ZXh0IGV4YW1wbGUnXCI+PC9hdWktY29kZS1zbmlwcGV0PjwvaDQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJleGFtcGxlMVwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48aDIgY2xhc3M9XCJoNCB1LW1hcmdpbi1ib3R0b21cIj5KU09OPC9oMj5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tLXhzXCI+XG4gICAgICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJjb2RlRXhhbXBsZUpTT05cIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJleGFtcGxlMlwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG4gICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImh0bWwyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxoMiBjbGFzcz1cImg0IHUtbWFyZ2luLWJvdHRvbVwiPkpTPC9oMj5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tLXhzXCI+XG4gICAgICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJjb2RlRXhhbXBsZUpTXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICA8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiZXhhbXBsZTNcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJodG1sM1wiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48aDIgY2xhc3M9XCJoNCB1LW1hcmdpbi1ib3R0b21cIj5NdWx0aXBsZSBjb2RlIHNuaXBwZXRzPC9oMj5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tLXhzXCI+XG4gICAgICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJjb2RlRXhhbXBsZXNcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJleGFtcGxlNFwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG4gICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImh0bWw0XCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxoMiBjbGFzcz1cImg0IHUtbWFyZ2luLWJvdHRvbVwiPk1hcmtkb3duIHdpdGggY29kZSBzbmlwcGV0czwvaDI+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICA8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiaHRtbDVcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cbiAgICAgICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlTWFya2Rvd25cIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJleGFtcGxlNVwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXREZW1vUGFnZUNvbXBvbmVudCB7XG5cbnB1YmxpYyBjb2RlRXhhbXBsZUpTMSA9IGBcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSBcXCdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2NvZGUtc25pcHBldFxcJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvZGVTbmlwcGV0TW9kdWxlXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fWA7XG5cbnB1YmxpYyBjb2RlRXhhbXBsZUhUTUwxID0gYDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tLXhzXCI+XG4gICAgICAgIDxoND48YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiJ1NpbmdsZSB0ZXh0IGV4YW1wbGUnXCI+PC9hdWktY29kZS1zbmlwcGV0PjwvaDQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG5wdWJsaWMgaHRtbDIgPSBgcHVibGljIGNvZGVFeGFtcGxlSlNPTiA9IFtcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJhcHBsZXNcIixcbiAgICAgICAgXCJjb3VudFwiOiBbMTIwMDAsIDIwMDAwXSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XCJ0ZXh0XCI6IFwiLi4uXCIsIFwic2Vuc2l0aXZlXCI6IGZhbHNlfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwib3Jhbmdlc1wiLFxuICAgICAgICBcImNvdW50XCI6IFsxNzUwMCwgbnVsbF0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1widGV4dFwiOiBcIi4uLlwiLCBcInNlbnNpdGl2ZVwiOiBmYWxzZX1cbiAgICB9XG5dO2A7XG5cbnB1YmxpYyBodG1sMyA9IGBwdWJsaWMgY29kZUV4YW1wbGVKUyA9XG5cdGZ1bmN0aW9uIGdyZWV0TWUoeW91ck5hbWUpIHtcblx0XHRhbGVydCgnSGVsbG8gJyArIHlvdXJOYW1lKTtcblx0fVxuXHRncmVldE1lKCdXb3JsZCcpO2A7XG5cbnB1YmxpYyBodG1sNCA9IGBwdWJsaWMgY29kZUV4YW1wbGVKU09OID0gW1xuXHRcdHtcblx0XHRcdFwidGl0bGVcIjogXCJhcHBsZXNcIixcblx0XHRcdFwiY291bnRcIjogWzEyMDAwLCAyMDAwMF0sXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IHtcInRleHRcIjogXCIuLi5cIiwgXCJzZW5zaXRpdmVcIjogZmFsc2V9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcInRpdGxlXCI6IFwib3Jhbmdlc1wiLFxuXHRcdFx0XCJjb3VudFwiOiBbMTc1MDAsIG51bGxdLFxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiB7XCJ0ZXh0XCI6IFwiLi4uXCIsIFwic2Vuc2l0aXZlXCI6IGZhbHNlfVxuXHRcdH1cblx0XTtcblxucHVibGljIGNvZGVFeGFtcGxlSlMgPVxuXHRmdW5jdGlvbiBncmVldE1lKHlvdXJOYW1lKSB7XG5cdFx0YWxlcnQoJ0hlbGxvICcgKyB5b3VyTmFtZSk7XG5cdH1cblx0Z3JlZXRNZSgnV29ybGQnKTtgO1xuXG5wdWJsaWMgaHRtbDUgPSBgaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZW50U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaHR0cDogSHR0cFxuXHQpIHt9XG5cblx0Z2V0TWFya2Rvd24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCgnL2V4YW1wbGUubWQnKVxuXHRcdC5tYXAoKHJlcykgPT4gcmVzLnRleHQoKSk7XG5cdH1cbn1gO1xuXG5wdWJsaWMgZXhhbXBsZTEgPSBgPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cbiAgICAgICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cIidjb2RlRXhhbXBsZSBKUydcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG4gICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImV4YW1wbGUzXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cbiAgICAgICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlSlNcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG5wdWJsaWMgZXhhbXBsZTIgPSBgPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cbiAgICAgICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cIidjb2RlRXhhbXBsZSBKUydcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG4gICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImV4YW1wbGUzXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cbiAgICAgICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlSlNcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG5wdWJsaWMgZXhhbXBsZTMgPSBgPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cbiAgICAgICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cIidjb2RlRXhhbXBsZSBKUydcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG4gICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImV4YW1wbGUzXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHNcIj5cbiAgICAgICAgPGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlSlNcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG5wdWJsaWMgZXhhbXBsZTQgPSBgPGF1aS1jb2RlLXNuaXBwZXRcblx0Km5nRm9yPVwibGV0IGNvZGVFeGFtcGxlIG9mIGNvZGVFeGFtcGxlc1wiXG5cdFtjb2RlU25pcHBldF09XCJjb2RlRXhhbXBsZVwiXG4+PC9hdWktY29kZS1zbmlwcGV0PmA7XG5cbnB1YmxpYyBleGFtcGxlNSA9IGA8YXVpLWNvZGUtc25pcHBldFxuICAgICpuZ0lmPVwibWRFeGFtcGxlXCJcbiAgICBbY29kZVNuaXBwZXRdPVwibWRFeGFtcGxlXCJcbiAgICBbcHJvY2Vzc01hcmtkb3duXT1cInRydWVcIlxuPjwvYXVpLWNvZGUtc25pcHBldD5gO1xuXG5wdWJsaWMgY29kZUV4YW1wbGVKU09OID0gYFtcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJhcHBsZXNcIixcbiAgICAgICAgXCJjb3VudFwiOiBbMTIwMDAsIDIwMDAwXSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XCJ0ZXh0XCI6IFwiLi4uXCIsIFwic2Vuc2l0aXZlXCI6IGZhbHNlfVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwib3Jhbmdlc1wiLFxuICAgICAgICBcImNvdW50XCI6IFsxNzUwMCwgbnVsbF0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1widGV4dFwiOiBcIi4uLlwiLCBcInNlbnNpdGl2ZVwiOiBmYWxzZX1cbiAgICB9XG5dYDtcblxucHVibGljIGNvZGVFeGFtcGxlSlMgPSBgXG5mdW5jdGlvbiBncmVldE1lKHlvdXJOYW1lKSB7XG5cdGFsZXJ0KCdIZWxsbyAnICsgeW91ck5hbWUpO1xufVxuZ3JlZXRNZSgnV29ybGQnKTtgO1xuXG5cbnB1YmxpYyBjb2RlRXhhbXBsZXMgPSBbdGhpcy5jb2RlRXhhbXBsZUpTLCB0aGlzLmNvZGVFeGFtcGxlSlNPTl07XG5cbnB1YmxpYyBjb2RlRXhhbXBsZU1hcmtkb3duID0gYHB1YmxpYyBtZEV4YW1wbGU6IHN0cmluZztcblxuY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2Vcbikge1xuICAgIGNvbnRlbnRTZXJ2aWNlLmdldE1hcmtkb3duKCkuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5tZEV4YW1wbGUgPSBkYXRhKTtcbn1gO1xuXG59XG4iLCJpbXBvcnQgeyBDb2RlU25pcHBldERlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlcyA9IFtcblx0Q29kZVNuaXBwZXREZW1vUGFnZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXRFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29kZVNuaXBwZXREZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgQ09ERV9TTklQUEVUX0VYQU1QTEVTX1JPVVRFUzogUm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJycsXG5cdFx0Y29tcG9uZW50OiBDb2RlU25pcHBldERlbW9QYWdlQ29tcG9uZW50LFxuXHRcdHBhdGhNYXRjaDogJ2Z1bGwnLFxuXHR9LFxuXTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs4QkF1RndCOzs7Ozs7Ozs7MEJBU0U7Z0NBRUE7Ozs7T0FJbkI7cUJBRVE7Ozs7Ozs7Ozs7O0dBV1o7cUJBRVk7Ozs7bUJBSUk7cUJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWlCSTtxQkFFSjs7Ozs7Ozs7Ozs7Ozs7O0VBZWI7d0JBRWdCOzs7Ozs7OztPQVFYO3dCQUVXOzs7Ozs7OztPQVFYO3dCQUVXOzs7Ozs7OztPQVFYO3dCQUVXOzs7cUJBR0c7d0JBRUg7Ozs7cUJBSUc7K0JBRUk7Ozs7Ozs7Ozs7O0VBV3ZCOzZCQUVxQjs7OztrQkFJTDs0QkFHSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQzttQ0FFbkM7Ozs7OztFQU0zQjs7OztZQWxPRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdGVjthQUNBOzs7Ozs7O0FDcEZELHVCQUVhLEtBQUssR0FBRztJQUNwQiw0QkFBNEI7Q0FDNUI7Ozs7OztBQ0pEOzs7WUFNQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsS0FBSztpQkFDTDthQUNEOzs7Ozs7O0FDWkQsdUJBRWEsNEJBQTRCLEdBQVc7SUFDbkQ7UUFDQyxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw0QkFBNEI7UUFDdkMsU0FBUyxFQUFFLE1BQU07S0FDakI7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./examples/flyout/fesm2015/flyout.js":
/*!********************************************!*\
  !*** ./examples/flyout/fesm2015/flyout.js ***!
  \********************************************/
/*! exports provided: DemoPageComponent, FlyoutExamplesModule, FLYOUT_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageComponent", function() { return DemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyoutExamplesModule", function() { return FlyoutExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLYOUT_EXAMPLES_ROUTES", function() { return FLYOUT_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");
/* harmony import */ var _acpaas_ui_ngx_components_flyout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/flyout */ "./dist/flyout/fesm5/flyout.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DemoPageComponent {
    constructor() {
        this.codeExampleJS1 = `import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout'`;
        this.codeExampleHTML1 = `<div auiFlyout size="small" align="left">
  <button class="a-button" auiFlyoutAction>Open flyout</button>
  <div auiFlyoutZone class="has-padding u-text-center">
    <div class="u-margin-bottom">
      <p>Hello world!</p>
    </div>
    <div>
      <button class="a-button" auiFlyoutClose>Close flyout</button>
    </div>
  </div>
</div>`;
        this.codeExampleJS2 = `import { FlyoutButtonModule } from '@acpaas-ui/ngx-components/flyout'`;
        this.codeExampleHTML2 = `<aui-flyout-button
  icon="fa fa-user"
  label="Open flyout"
  align="right"
  title="Click to open!"
  outline=true
  flyoutSize="small"
  buttonSize="large">
  <div class="u-margin u-text-center">
    <p>Hello world!</p>
  </div>
</aui-flyout-button>`;
    }
}
DemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Flyout</h1>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleJS1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleHTML1"></aui-code-snippet>
</div>

<h2 class="h4 u-margin-bottom">Flyout Example</h2>

<div class="u-margin-bottom">
	<div auiFlyout size="small" align="left">
		<button class="a-button" auiFlyoutAction>Open flyout</button>
		<div auiFlyoutZone class="has-padding u-text-center">
			<div class="u-margin-bottom">
				<p>Hello world!</p>
			</div>
			<div>
				<button class="a-button" auiFlyoutClose>Close flyout</button>
			</div>
		</div>
	</div>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleJS2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleHTML2"></aui-code-snippet>
</div>

<h2 class="h4 u-margin-bottom">Flyout Button Example</h2>

<div class="u-margin-bottom-xx u-text-right">
	<aui-flyout-button
		icon="fa fa-user"
		label="Open flyout"
		align="right"
		title="Click to open!"
		outline=true
		flyoutSize="small"
		buttonSize="large">
		<div class="u-margin u-text-center">
			<p>Hello world!</p>
		</div>
	</aui-flyout-button>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    DemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FlyoutExamplesModule {
}
FlyoutExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_2__["CodeSnippetModule"],
                    _acpaas_ui_ngx_components_flyout__WEBPACK_IMPORTED_MODULE_3__["FlyoutModule"],
                    _acpaas_ui_ngx_components_flyout__WEBPACK_IMPORTED_MODULE_3__["FlyoutButtonModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ FLYOUT_EXAMPLES_ROUTES = [
    {
        path: '',
        component: DemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9mbHlvdXQvZmx5b3V0L3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9mbHlvdXQvZmx5b3V0L3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9mbHlvdXQvZmx5b3V0L2ZseW91dC5tb2R1bGUudHMiLCJuZzovL2ZseW91dC9mbHlvdXQvZmx5b3V0LnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgPGgxIGNsYXNzPVwiaDMgdS1tYXJnaW4tYm90dG9tXCI+Rmx5b3V0PC9oMT5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlSlMxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlSFRNTDFcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGgyIGNsYXNzPVwiaDQgdS1tYXJnaW4tYm90dG9tXCI+Rmx5b3V0IEV4YW1wbGU8L2gyPlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxkaXYgYXVpRmx5b3V0IHNpemU9XCJzbWFsbFwiIGFsaWduPVwibGVmdFwiPlxuXHRcdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvblwiIGF1aUZseW91dEFjdGlvbj5PcGVuIGZseW91dDwvYnV0dG9uPlxuXHRcdDxkaXYgYXVpRmx5b3V0Wm9uZSBjbGFzcz1cImhhcy1wYWRkaW5nIHUtdGV4dC1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0XHRcdFx0PHA+SGVsbG8gd29ybGQhPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b25cIiBhdWlGbHlvdXRDbG9zZT5DbG9zZSBmbHlvdXQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJjb2RlRXhhbXBsZUpTMlwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJjb2RlRXhhbXBsZUhUTUwyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxoMiBjbGFzcz1cImg0IHUtbWFyZ2luLWJvdHRvbVwiPkZseW91dCBCdXR0b24gRXhhbXBsZTwvaDI+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20teHggdS10ZXh0LXJpZ2h0XCI+XG5cdDxhdWktZmx5b3V0LWJ1dHRvblxuXHRcdGljb249XCJmYSBmYS11c2VyXCJcblx0XHRsYWJlbD1cIk9wZW4gZmx5b3V0XCJcblx0XHRhbGlnbj1cInJpZ2h0XCJcblx0XHR0aXRsZT1cIkNsaWNrIHRvIG9wZW4hXCJcblx0XHRvdXRsaW5lPXRydWVcblx0XHRmbHlvdXRTaXplPVwic21hbGxcIlxuXHRcdGJ1dHRvblNpemU9XCJsYXJnZVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ1LW1hcmdpbiB1LXRleHQtY2VudGVyXCI+XG5cdFx0XHQ8cD5IZWxsbyB3b3JsZCE8L3A+XG5cdFx0PC9kaXY+XG5cdDwvYXVpLWZseW91dC1idXR0b24+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIERlbW9QYWdlQ29tcG9uZW50IHtcblxuICBwdWJsaWMgY29kZUV4YW1wbGVKUzEgPSBgaW1wb3J0IHsgRmx5b3V0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnYDtcbiAgcHVibGljIGNvZGVFeGFtcGxlSFRNTDEgPVxuYDxkaXYgYXVpRmx5b3V0IHNpemU9XCJzbWFsbFwiIGFsaWduPVwibGVmdFwiPlxuICA8YnV0dG9uIGNsYXNzPVwiYS1idXR0b25cIiBhdWlGbHlvdXRBY3Rpb24+T3BlbiBmbHlvdXQ8L2J1dHRvbj5cbiAgPGRpdiBhdWlGbHlvdXRab25lIGNsYXNzPVwiaGFzLXBhZGRpbmcgdS10ZXh0LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cbiAgICAgIDxwPkhlbGxvIHdvcmxkITwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uXCIgYXVpRmx5b3V0Q2xvc2U+Q2xvc2UgZmx5b3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YDtcblxuICBwdWJsaWMgY29kZUV4YW1wbGVKUzIgPSBgaW1wb3J0IHsgRmx5b3V0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnYDtcbiAgcHVibGljIGNvZGVFeGFtcGxlSFRNTDIgPVxuYDxhdWktZmx5b3V0LWJ1dHRvblxuICBpY29uPVwiZmEgZmEtdXNlclwiXG4gIGxhYmVsPVwiT3BlbiBmbHlvdXRcIlxuICBhbGlnbj1cInJpZ2h0XCJcbiAgdGl0bGU9XCJDbGljayB0byBvcGVuIVwiXG4gIG91dGxpbmU9dHJ1ZVxuICBmbHlvdXRTaXplPVwic21hbGxcIlxuICBidXR0b25TaXplPVwibGFyZ2VcIj5cbiAgPGRpdiBjbGFzcz1cInUtbWFyZ2luIHUtdGV4dC1jZW50ZXJcIj5cbiAgICA8cD5IZWxsbyB3b3JsZCE8L3A+XG4gIDwvZGl2PlxuPC9hdWktZmx5b3V0LWJ1dHRvbj5gO1xufVxuIiwiaW1wb3J0IHsgRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VzID0gW1xuXHREZW1vUGFnZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuaW1wb3J0IHsgRmx5b3V0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuaW1wb3J0IHsgRmx5b3V0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRcdEZseW91dE1vZHVsZSxcblx0XHRGbHlvdXRCdXR0b25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2VzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXRFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IEZMWU9VVF9FWEFNUExFU19ST1VURVM6IFJvdXRlcyA9IFtcblx0e1xuXHRcdHBhdGg6ICcnLFxuXHRcdGNvbXBvbmVudDogRGVtb1BhZ2VDb21wb25lbnQsXG5cdFx0cGF0aE1hdGNoOiAnZnVsbCcsXG5cdH0sXG5dO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs4QkF3RDBCLGlFQUFpRTtnQ0FFM0Y7Ozs7Ozs7Ozs7T0FVTzs4QkFFbUIsdUVBQXVFO2dDQUVqRzs7Ozs7Ozs7Ozs7cUJBV3FCOzs7O1lBakZwQixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaURWO2FBQ0E7Ozs7Ozs7QUNyREQsdUJBRWEsS0FBSyxHQUFHO0lBQ3BCLGlCQUFpQjtDQUNqQjs7Ozs7O0FDSkQ7OztZQVFDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsS0FBSztpQkFDTDthQUNEOzs7Ozs7O0FDaEJELHVCQUVhLHNCQUFzQixHQUFXO0lBQzdDO1FBQ0MsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLFNBQVMsRUFBRSxNQUFNO0tBQ2pCO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./examples/forms/fesm2015/forms.js":
/*!******************************************!*\
  !*** ./examples/forms/fesm2015/forms.js ***!
  \******************************************/
/*! exports provided: DemoPageComponent, FormsExamplesModule, FORMS_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageComponent", function() { return DemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsExamplesModule", function() { return FormsExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMS_EXAMPLES_ROUTES", function() { return FORMS_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DemoPageComponent {
}
DemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1>Forms demo</h1>

<!-- demo the component here -->
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    DemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormsExamplesModule {
}
FormsExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_2__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ FORMS_EXAMPLES_ROUTES = [
    {
        path: '',
        component: DemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Zvcm1zL2Zvcm1zL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9mb3Jtcy9mb3Jtcy9wYWdlcy9pbmRleC50cyIsIm5nOi8vZm9ybXMvZm9ybXMvZm9ybXMubW9kdWxlLnRzIiwibmc6Ly9mb3Jtcy9mb3Jtcy9mb3Jtcy5yb3V0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYDxoMT5Gb3JtcyBkZW1vPC9oMT5cblxuPCEtLSBkZW1vIHRoZSBjb21wb25lbnQgaGVyZSAtLT5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIERlbW9QYWdlQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IHsgRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VzID0gW1xuXHREZW1vUGFnZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybXNFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IEZPUk1TX0VYQU1QTEVTX1JPVVRFUzogUm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJycsXG5cdFx0Y29tcG9uZW50OiBEZW1vUGFnZUNvbXBvbmVudCxcblx0XHRwYXRoTWF0Y2g6ICdmdWxsJyxcblx0fSxcbl07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O1lBRUMsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7O0NBR1Y7YUFDQTs7Ozs7OztBQ1BELHVCQUVhLEtBQUssR0FBRztJQUNwQixpQkFBaUI7Q0FDakI7Ozs7OztBQ0pEOzs7WUFNQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsS0FBSztpQkFDTDthQUNEOzs7Ozs7O0FDWkQsdUJBRWEscUJBQXFCLEdBQVc7SUFDNUM7UUFDQyxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsU0FBUyxFQUFFLE1BQU07S0FDakI7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./examples/layout/fesm2015/layout.js":
/*!********************************************!*\
  !*** ./examples/layout/fesm2015/layout.js ***!
  \********************************************/
/*! exports provided: LayoutDemoPageComponent, LayoutExamplesModule, LAYOUT_EXAMPLES_ROUTES, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDemoPageComponent", function() { return LayoutDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutExamplesModule", function() { return LayoutExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_EXAMPLES_ROUTES", function() { return LAYOUT_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AUIDemoModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/layout */ "./dist/layout/fesm5/layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/logo */ "./dist/logo/fesm5/logo.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AUIDemoModalComponent extends _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["ModalAbstract"] {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        super(modalService);
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    submitAndCloseModal() {
        console.log('Submit!');
        this.closeModal();
    }
}
AUIDemoModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'aui-modal',
                template: `<div class="m-modal">
		<div class="m-modal__content">
			<div class="m-modal__header u-margin-bottom-xs">
				<button class="m-modal__close a-button-transparent a-button--default has-icon" (click)="closeModal()">
					<i class="fa fa-close"></i>
				</button>
				<h4>{{ modalData.title }}</h4>
			</div>
			<div class="u-margin-bottom">
				<p>{{ modalData.text }}</p>
			</div>
			<div class="m-modal__footer">
				<button class="a-button" (click)="submitAndCloseModal()">Close Modal</button>
				<button class="a-button-outline" (click)="closeModal()">Cancel</button>
			</div>
		</div>
	</div>`,
            },] },
];
/** @nocollapse */
AUIDemoModalComponent.ctorParameters = () => [
    { type: _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["ModalService"], },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutDemoPageComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
        this.header1 = `import { HeaderModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
	imports: [
		HeaderModule,
	]
});

export class AppModule {};`;
        this.header2 = `<aui-header>
	<div auiHeaderContent>
		<div auiHeaderLogo class="o-header__wrapper">
			<aui-logo title="Example" src="https://robohash.org/acpaas-ui"></aui-logo>
			<a class="o-header__link">Example</a>
		</div>
	</div>
	<div auiHeaderMenuItem>
		<a href="http://github.com/digipolisantwerp/acpaas-ui_angular" class="a-button a-button--navigation has-icon-left" target="_blank">
			<i class="fa fa-github"></i>ACPaaS UI on GitHub
		</a>
	</div>
</aui-header>`;
        this.footer1 = `import { FooterModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
	imports: [
		FooterModule,
	]
});

export class AppModule {};`;
        this.footer2 = `<aui-footer isExtended="false">
	<div class="u-margin-bottom u-margin-top">
		<div auiFooterContent>
			Footer content goes here
		</div>
		<div auiFooterBottom>
			<aui-subfooter>
				<aui-copyright domain="Digipolis"></aui-copyright>
			</aui-subfooter>
		</div>
	</div>
</aui-footer>`;
        this.sidebarItems = [
            {
                href: '/',
                // icon: 'fa-caret-right',
                label: 'Label',
                theme: {
                    slug: 'test',
                    color: 'black',
                    logo: 'https://robohash.org/acpaas-ui',
                },
                // items?: SidebarItem[],
                classList: 'sidebarClass',
            },
        ];
    }
    /**
     * @return {?}
     */
    openModal() {
        this.modalService.openModal(AUIDemoModalComponent, {
            title: 'Modal',
            text: 'Are you sure you want to see a demo of this modal?',
        }, {
            confirm: () => this.doSomething(),
        });
    }
    /**
     * @return {?}
     */
    doSomething() {
        return new Promise((resolve, reject) => {
            return resolve();
        });
    }
}
LayoutDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Layout</h1>

<!-- COOKIE CONSENT -->
<!-- Just works :-) -->


<!-- FOOTER -->
<h2 class="h4 u-margin-bottom">Footer</h2>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="footer1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="footer2"></aui-code-snippet>
</div>

<div class="u-margin-bottom-lg">
	<aui-footer isExtended="false">
		<div class="u-margin-bottom u-margin-top">
			<div auiFooterContent>
				Footer content goes here
			</div>
			<div auiFooterBottom>
				<aui-subfooter>
					<aui-copyright domain="Digipolis"></aui-copyright>
				</aui-subfooter>
			</div>
		</div>
	</aui-footer>
</div>


<!-- HEADER -->
<h2 class="h4 u-margin-bottom">Header</h2>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="header1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="header2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-header>
		<div auiHeaderContent>
			<div auiHeaderLogo class="o-header__wrapper">
				<aui-logo title="Example" src="https://robohash.org/acpaas-ui"></aui-logo>
				<a class="o-header__link">Example</a>
			</div>
		</div>
		<div auiHeaderMenuItem>
			<a href="http://github.com/digipolisantwerp/acpaas-ui_angular" class="a-button a-button--navigation has-icon-left" target="_blank">
				<i class="fa fa-github"></i>ACPaaS UI on GitHub
			</a>
		</div>
	</aui-header>
</div>

<div class="u-margin-bottom">
	<div class="m-alert">As you may have noticed, the header on this page is a working example of the demo code.</div>
</div>

<hr>

<!-- HERO -->
<div class="u-margin-bottom u-margin-top">
	<aui-hero>
		<div auiHeroCard>
			<h1>Hero title</h1>
			<a>Hero link</a>
		</div>
		<div auiHeroCta>
			<div class="buttons">
				<a class="a-button">Hero action one</a>
				<a class="a-button">Hero action two</a>
			</div>
		</div>
	</aui-hero>
</div>


<!-- MODAL -->
<div class="u-margin-bottom u-margin-top">
	<button class="a-button"
		(click)="openModal()">
		Test modal
	</button>
</div>


<!-- PANE -->
<div class="u-margin-bottom u-margin-top">
	<button class="a-button" (click)="myPane.togglePane()">Toggle pane</button>
	<button class="a-button" (click)="myPane.openPane()">Open pane</button>
	<aui-pane #myPane [side]="'left'" [opened]="false" [backdrop]="false">
	    Pane content
		<button class="a-button" (click)="myPane.closePane()">Close pane</button>
	</aui-pane>
</div>


<!-- SIDEBAR -->
<div class="u-margin-bottom u-margin-top">
	<aui-sidebar title="Demo sidebar" [items]="sidebarItems" open="true"></aui-sidebar>
</div>
`,
            },] },
];
/** @nocollapse */
LayoutDemoPageComponent.ctorParameters = () => [
    { type: _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["ModalService"], },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    LayoutDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutExamplesModule {
}
LayoutExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["FooterModule"],
                    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"],
                    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["HeroModule"],
                    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["ModalModule"],
                    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["PaneModule"],
                    _acpaas_ui_ngx_components_layout__WEBPACK_IMPORTED_MODULE_1__["SidebarModule"],
                    _acpaas_ui_ngx_components_logo__WEBPACK_IMPORTED_MODULE_3__["LogoModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_4__["CodeSnippetModule"],
                ],
                declarations: [
                    AUIDemoModalComponent,
                    Pages,
                ],
                entryComponents: [
                    AUIDemoModalComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ LAYOUT_EXAMPLES_ROUTES = [
    {
        path: '',
        component: LayoutDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sYXlvdXQvbGF5b3V0L3BhZ2VzL2RlbW8vZGVtby1tb2RhbC5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9sYXlvdXQvcGFnZXMvZGVtby9kZW1vLnBhZ2UudHMiLCJuZzovL2xheW91dC9sYXlvdXQvcGFnZXMvaW5kZXgudHMiLCJuZzovL2xheW91dC9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xheW91dC9sYXlvdXQucm91dGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsQWJzdHJhY3QsIE1vZGFsU2VydmljZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvbGF5b3V0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLW1vZGFsJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1tb2RhbFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJtLW1vZGFsX19jb250ZW50XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibS1tb2RhbF9faGVhZGVyIHUtbWFyZ2luLWJvdHRvbS14c1wiPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwibS1tb2RhbF9fY2xvc2UgYS1idXR0b24tdHJhbnNwYXJlbnQgYS1idXR0b24tLWRlZmF1bHQgaGFzLWljb25cIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+XG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxoND57eyBtb2RhbERhdGEudGl0bGUgfX08L2g0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdFx0XHRcdDxwPnt7IG1vZGFsRGF0YS50ZXh0IH19PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibS1tb2RhbF9fZm9vdGVyXCI+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvblwiIChjbGljayk9XCJzdWJtaXRBbmRDbG9zZU1vZGFsKClcIj5DbG9zZSBNb2RhbDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24tb3V0bGluZVwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBBVUlEZW1vTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBNb2RhbEFic3RyYWN0IHtcblx0cHVibGljIG1vZGFsRGF0YTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuXHQpIHtcblx0XHRzdXBlcihtb2RhbFNlcnZpY2UpO1xuXHR9XG5cblx0IHB1YmxpYyBzdWJtaXRBbmRDbG9zZU1vZGFsKCkge1xuXHQgXHRjb25zb2xlLmxvZygnU3VibWl0IScpO1xuXHQgXHR0aGlzLmNsb3NlTW9kYWwoKTtcblx0IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IHsgQVVJRGVtb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYDxoMSBjbGFzcz1cImgzIHUtbWFyZ2luLWJvdHRvbVwiPkxheW91dDwvaDE+XG5cbjwhLS0gQ09PS0lFIENPTlNFTlQgLS0+XG48IS0tIEp1c3Qgd29ya3MgOi0pIC0tPlxuXG5cbjwhLS0gRk9PVEVSIC0tPlxuPGgyIGNsYXNzPVwiaDQgdS1tYXJnaW4tYm90dG9tXCI+Rm9vdGVyPC9oMj5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImZvb3RlcjFcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiZm9vdGVyMlwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tLWxnXCI+XG5cdDxhdWktZm9vdGVyIGlzRXh0ZW5kZWQ9XCJmYWxzZVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20gdS1tYXJnaW4tdG9wXCI+XG5cdFx0XHQ8ZGl2IGF1aUZvb3RlckNvbnRlbnQ+XG5cdFx0XHRcdEZvb3RlciBjb250ZW50IGdvZXMgaGVyZVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGF1aUZvb3RlckJvdHRvbT5cblx0XHRcdFx0PGF1aS1zdWJmb290ZXI+XG5cdFx0XHRcdFx0PGF1aS1jb3B5cmlnaHQgZG9tYWluPVwiRGlnaXBvbGlzXCI+PC9hdWktY29weXJpZ2h0PlxuXHRcdFx0XHQ8L2F1aS1zdWJmb290ZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9hdWktZm9vdGVyPlxuPC9kaXY+XG5cblxuPCEtLSBIRUFERVIgLS0+XG48aDIgY2xhc3M9XCJoNCB1LW1hcmdpbi1ib3R0b21cIj5IZWFkZXI8L2gyPlxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiaGVhZGVyMVwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJoZWFkZXIyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1oZWFkZXI+XG5cdFx0PGRpdiBhdWlIZWFkZXJDb250ZW50PlxuXHRcdFx0PGRpdiBhdWlIZWFkZXJMb2dvIGNsYXNzPVwiby1oZWFkZXJfX3dyYXBwZXJcIj5cblx0XHRcdFx0PGF1aS1sb2dvIHRpdGxlPVwiRXhhbXBsZVwiIHNyYz1cImh0dHBzOi8vcm9ib2hhc2gub3JnL2FjcGFhcy11aVwiPjwvYXVpLWxvZ28+XG5cdFx0XHRcdDxhIGNsYXNzPVwiby1oZWFkZXJfX2xpbmtcIj5FeGFtcGxlPC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBhdWlIZWFkZXJNZW51SXRlbT5cblx0XHRcdDxhIGhyZWY9XCJodHRwOi8vZ2l0aHViLmNvbS9kaWdpcG9saXNhbnR3ZXJwL2FjcGFhcy11aV9hbmd1bGFyXCIgY2xhc3M9XCJhLWJ1dHRvbiBhLWJ1dHRvbi0tbmF2aWdhdGlvbiBoYXMtaWNvbi1sZWZ0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViXCI+PC9pPkFDUGFhUyBVSSBvbiBHaXRIdWJcblx0XHRcdDwvYT5cblx0XHQ8L2Rpdj5cblx0PC9hdWktaGVhZGVyPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGRpdiBjbGFzcz1cIm0tYWxlcnRcIj5BcyB5b3UgbWF5IGhhdmUgbm90aWNlZCwgdGhlIGhlYWRlciBvbiB0aGlzIHBhZ2UgaXMgYSB3b3JraW5nIGV4YW1wbGUgb2YgdGhlIGRlbW8gY29kZS48L2Rpdj5cbjwvZGl2PlxuXG48aHI+XG5cbjwhLS0gSEVSTyAtLT5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b20gdS1tYXJnaW4tdG9wXCI+XG5cdDxhdWktaGVybz5cblx0XHQ8ZGl2IGF1aUhlcm9DYXJkPlxuXHRcdFx0PGgxPkhlcm8gdGl0bGU8L2gxPlxuXHRcdFx0PGE+SGVybyBsaW5rPC9hPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgYXVpSGVyb0N0YT5cblx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG5cdFx0XHRcdDxhIGNsYXNzPVwiYS1idXR0b25cIj5IZXJvIGFjdGlvbiBvbmU8L2E+XG5cdFx0XHRcdDxhIGNsYXNzPVwiYS1idXR0b25cIj5IZXJvIGFjdGlvbiB0d288L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9hdWktaGVybz5cbjwvZGl2PlxuXG5cbjwhLS0gTU9EQUwgLS0+XG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tIHUtbWFyZ2luLXRvcFwiPlxuXHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b25cIlxuXHRcdChjbGljayk9XCJvcGVuTW9kYWwoKVwiPlxuXHRcdFRlc3QgbW9kYWxcblx0PC9idXR0b24+XG48L2Rpdj5cblxuXG48IS0tIFBBTkUgLS0+XG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tIHUtbWFyZ2luLXRvcFwiPlxuXHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b25cIiAoY2xpY2spPVwibXlQYW5lLnRvZ2dsZVBhbmUoKVwiPlRvZ2dsZSBwYW5lPC9idXR0b24+XG5cdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvblwiIChjbGljayk9XCJteVBhbmUub3BlblBhbmUoKVwiPk9wZW4gcGFuZTwvYnV0dG9uPlxuXHQ8YXVpLXBhbmUgI215UGFuZSBbc2lkZV09XCInbGVmdCdcIiBbb3BlbmVkXT1cImZhbHNlXCIgW2JhY2tkcm9wXT1cImZhbHNlXCI+XG5cdCAgICBQYW5lIGNvbnRlbnRcblx0XHQ8YnV0dG9uIGNsYXNzPVwiYS1idXR0b25cIiAoY2xpY2spPVwibXlQYW5lLmNsb3NlUGFuZSgpXCI+Q2xvc2UgcGFuZTwvYnV0dG9uPlxuXHQ8L2F1aS1wYW5lPlxuPC9kaXY+XG5cblxuPCEtLSBTSURFQkFSIC0tPlxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbSB1LW1hcmdpbi10b3BcIj5cblx0PGF1aS1zaWRlYmFyIHRpdGxlPVwiRGVtbyBzaWRlYmFyXCIgW2l0ZW1zXT1cInNpZGViYXJJdGVtc1wiIG9wZW49XCJ0cnVlXCI+PC9hdWktc2lkZWJhcj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVtb1BhZ2VDb21wb25lbnQge1xuXHRwdWJsaWMgaGVhZGVyMSA9IGBpbXBvcnQgeyBIZWFkZXJNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2xheW91dCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRIZWFkZXJNb2R1bGUsXG5cdF1cbn0pO1xuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9O2A7XG5cblx0cHVibGljIGhlYWRlcjIgPSBgPGF1aS1oZWFkZXI+XG5cdDxkaXYgYXVpSGVhZGVyQ29udGVudD5cblx0XHQ8ZGl2IGF1aUhlYWRlckxvZ28gY2xhc3M9XCJvLWhlYWRlcl9fd3JhcHBlclwiPlxuXHRcdFx0PGF1aS1sb2dvIHRpdGxlPVwiRXhhbXBsZVwiIHNyYz1cImh0dHBzOi8vcm9ib2hhc2gub3JnL2FjcGFhcy11aVwiPjwvYXVpLWxvZ28+XG5cdFx0XHQ8YSBjbGFzcz1cIm8taGVhZGVyX19saW5rXCI+RXhhbXBsZTwvYT5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cdDxkaXYgYXVpSGVhZGVyTWVudUl0ZW0+XG5cdFx0PGEgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2RpZ2lwb2xpc2FudHdlcnAvYWNwYWFzLXVpX2FuZ3VsYXJcIiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uLS1uYXZpZ2F0aW9uIGhhcy1pY29uLWxlZnRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViXCI+PC9pPkFDUGFhUyBVSSBvbiBHaXRIdWJcblx0XHQ8L2E+XG5cdDwvZGl2PlxuPC9hdWktaGVhZGVyPmA7XG5cdHB1YmxpYyBmb290ZXIxID0gYGltcG9ydCB7IEZvb3Rlck1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvbGF5b3V0JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEZvb3Rlck1vZHVsZSxcblx0XVxufSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge307YDtcblxuXHRwdWJsaWMgZm9vdGVyMiA9IGA8YXVpLWZvb3RlciBpc0V4dGVuZGVkPVwiZmFsc2VcIj5cblx0PGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbSB1LW1hcmdpbi10b3BcIj5cblx0XHQ8ZGl2IGF1aUZvb3RlckNvbnRlbnQ+XG5cdFx0XHRGb290ZXIgY29udGVudCBnb2VzIGhlcmVcblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGF1aUZvb3RlckJvdHRvbT5cblx0XHRcdDxhdWktc3ViZm9vdGVyPlxuXHRcdFx0XHQ8YXVpLWNvcHlyaWdodCBkb21haW49XCJEaWdpcG9saXNcIj48L2F1aS1jb3B5cmlnaHQ+XG5cdFx0XHQ8L2F1aS1zdWJmb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9hdWktZm9vdGVyPmA7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIHNpZGViYXJJdGVtcyA9IFtcblx0XHR7XG5cdFx0XHRocmVmOiAnLycsXG5cdFx0XHQvLyBpY29uOiAnZmEtY2FyZXQtcmlnaHQnLFxuXHRcdFx0bGFiZWw6ICdMYWJlbCcsXG5cdFx0XHR0aGVtZToge1xuXHRcdFx0XHRzbHVnOiAndGVzdCcsXG5cdFx0XHRcdGNvbG9yOiAnYmxhY2snLFxuXHRcdFx0XHRsb2dvOiAnaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYWNwYWFzLXVpJyxcblx0XHRcdH0sXG5cdFx0XHQvLyBpdGVtcz86IFNpZGViYXJJdGVtW10sXG5cdFx0XHRjbGFzc0xpc3Q6ICdzaWRlYmFyQ2xhc3MnLFxuXHRcdH0sXG5cdF07XG5cblx0cHVibGljIG9wZW5Nb2RhbCgpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5vcGVuTW9kYWwoXG5cdFx0XHRBVUlEZW1vTW9kYWxDb21wb25lbnQsXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiAnTW9kYWwnLFxuXHRcdFx0XHR0ZXh0OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNlZSBhIGRlbW8gb2YgdGhpcyBtb2RhbD8nLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRjb25maXJtOiAoKSA9PiB0aGlzLmRvU29tZXRoaW5nKCksXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZG9Tb21ldGhpbmcoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHJldHVybiByZXNvbHZlKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IExheW91dERlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlcyA9IFtcblx0TGF5b3V0RGVtb1BhZ2VDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuXHRDb29raWVjb25zZW50TW9kdWxlLFxuXHRGb290ZXJNb2R1bGUsXG5cdEhlYWRlck1vZHVsZSxcblx0SGVyb01vZHVsZSxcblx0TW9kYWxNb2R1bGUsXG5cdFBhbmVNb2R1bGUsXG5cdFNpZGViYXJNb2R1bGVcbn0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IHsgTG9nb01vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgeyBDb2RlU25pcHBldE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvY29kZS1zbmlwcGV0JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFVSURlbW9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZGVtby9kZW1vLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2VzIH0gZnJvbSAnLi9wYWdlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Um91dGVyTW9kdWxlLFxuXHRcdC8vIENvb2tpZWNvbnNlbnRNb2R1bGUuZm9yUm9vdCh7XG5cdFx0Ly8gXHRhdXRvSW5pdDogdHJ1ZSxcblx0XHQvLyBcdGNvbnRlbnQ6IHtcblx0XHQvLyBcdFx0bWVzc2FnZTogJ0kgYW0gdGhlIGNvb2tpZSBjb25zZW50IGRlbW8uIFdpbGwgeW91IGFsbG93IG15IGNvb2tpZXM/Jyxcblx0XHQvLyBcdFx0ZGlzbWlzczogJ0FsbG93IGNvb2tpZXMnLFxuXHRcdC8vIFx0XHRsaW5rOiAnTGVhcm4gbW9yZScsXG5cdFx0Ly8gXHRcdGhyZWY6ICdodHRwOi8vY29va2llcGVkaWEuY28udWsvYWxsLWFib3V0LWNvb2tpZXMnLFxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGNvb2tpZToge1xuXHRcdC8vIFx0XHRuYW1lOiAnY29va2llY29uc2VudF9kZW1vJyxcblx0XHQvLyBcdFx0cGF0aDogJy8nLFxuXHRcdC8vIFx0XHRkb21haW46ICcnLFxuXHRcdC8vIFx0XHRleHBpcnlEYXlzOiAxLFxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGVsZW1lbnRzOiB7XG5cdFx0Ly8gXHRcdG1lc3NhZ2VsaW5rOiBgPHAgaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIj57e21lc3NhZ2V9fVxuXHRcdC8vIFx0XHRcdDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiB0YWJpbmRleD1cIjBcIiBocmVmPVwie3tocmVmfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e2xpbmt9fTwvYT5cblx0XHQvLyBcdFx0PC9wPmAsXG5cdFx0Ly8gXHRcdGRpc21pc3M6ICc8YnV0dG9uIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJhLWJ1dHRvblwiPnt7ZGlzbWlzc319PC9idXR0b24+Jyxcblx0XHQvLyBcdH0sXG5cdFx0Ly8gfSksXG5cdFx0Rm9vdGVyTW9kdWxlLFxuXHRcdEhlYWRlck1vZHVsZSxcblx0XHRIZXJvTW9kdWxlLFxuXHRcdE1vZGFsTW9kdWxlLFxuXHRcdFBhbmVNb2R1bGUsXG5cdFx0U2lkZWJhck1vZHVsZSxcblx0XHRMb2dvTW9kdWxlLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBVUlEZW1vTW9kYWxDb21wb25lbnQsXG5cdFx0UGFnZXMsXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEFVSURlbW9Nb2RhbENvbXBvbmVudCxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RXhhbXBsZXNNb2R1bGUge31cbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExheW91dERlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBMQVlPVVRfRVhBTVBMRVNfUk9VVEVTOiBSb3V0ZXMgPSBbXG5cdHtcblx0XHRwYXRoOiAnJyxcblx0XHRjb21wb25lbnQ6IExheW91dERlbW9QYWdlQ29tcG9uZW50LFxuXHRcdHBhdGhNYXRjaDogJ2Z1bGwnLFxuXHR9LFxuXTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJCQXVCbUMsU0FBUSxhQUFhOzs7O0lBR3ZELFlBQ1E7UUFFUCxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFGYixpQkFBWSxHQUFaLFlBQVk7S0FHbkI7Ozs7SUFFTyxtQkFBbUI7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7WUEvQnBCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O1FBZ0JIO2FBQ1A7Ozs7WUFyQnVCLFlBQVk7Ozs7Ozs7QUNEcEM7Ozs7SUErSkMsWUFDUztRQUFBLGlCQUFZLEdBQVosWUFBWTt1QkEvQ0o7Ozs7Ozs7OzJCQVFTO3VCQUVUOzs7Ozs7Ozs7Ozs7Y0FZSjt1QkFDSTs7Ozs7Ozs7MkJBUVM7dUJBRVQ7Ozs7Ozs7Ozs7O2NBV0o7NEJBTVM7WUFDckI7Z0JBQ0MsSUFBSSxFQUFFLEdBQUc7O2dCQUVULEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRTtvQkFDTixJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsT0FBTztvQkFDZCxJQUFJLEVBQUUsZ0NBQWdDO2lCQUN0Qzs7Z0JBRUQsU0FBUyxFQUFFLGNBQWM7YUFDekI7U0FDRDtLQWZHOzs7O0lBaUJHLFNBQVM7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDMUIscUJBQXFCLEVBQ3JCO1lBQ0MsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsb0RBQW9EO1NBQzFELEVBQUU7WUFDRixPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFO1NBQ2pDLENBQ0QsQ0FBQzs7Ozs7SUFHSyxXQUFXO1FBQ2xCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxPQUFPLE9BQU8sRUFBRSxDQUFDO1NBQ2pCLENBQUMsQ0FBQzs7OztZQTdMSixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5R1Y7YUFDQTs7OztZQTlHUSxZQUFZOzs7Ozs7O0FDRHJCLHVCQUVhLEtBQUssR0FBRztJQUNwQix1QkFBdUI7Q0FDdkI7Ozs7OztBQ0pEOzs7WUFtQkMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7b0JBc0JaLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixVQUFVO29CQUNWLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixhQUFhO29CQUNiLFVBQVU7b0JBQ1YsaUJBQWlCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IscUJBQXFCO29CQUNyQixLQUFLO2lCQUNMO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIscUJBQXFCO2lCQUNyQjthQUNEOzs7Ozs7O0FDMURELHVCQUVhLHNCQUFzQixHQUFXO0lBQzdDO1FBQ0MsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLFNBQVMsRUFBRSxNQUFNO0tBQ2pCO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./examples/localstorage/fesm2015/localstorage.js":
/*!********************************************************!*\
  !*** ./examples/localstorage/fesm2015/localstorage.js ***!
  \********************************************************/
/*! exports provided: LocalstorageDemoPageComponent, LocalstorageExamplesModule, LOCALSTORAGE_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageDemoPageComponent", function() { return LocalstorageDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageExamplesModule", function() { return LocalstorageExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALSTORAGE_EXAMPLES_ROUTES", function() { return LOCALSTORAGE_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_ngx_components_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/localstorage */ "./dist/localstorage/fesm5/localstorage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LocalstorageDemoPageComponent {
    /**
     * @param {?} localstorageService
     */
    constructor(localstorageService) {
        this.localstorageService = localstorageService;
        this.typescript1 = `import { LocalstorageModule } from '@acpaas-ui/localstorage';

@NgModule({
    imports: [
        LocalstorageModule.forRoot({
            storageType: 'sessionStorage',
            identifier: 'my-app-v1,
        })
    ]
})

export class AppModule {}`;
        this.typescript2 = `public user: any;
public item: any;
public timesUsed: any;

constructor(
	private localstorageService: LocalstorageService
) {
	this.user = this.localstorageService.select('user');
	this.timesUsed = 0;
	this.localstorageService.setItem('number', this.timesUsed);
}

public loggedIn(): void {
	this.localstorageService.setItem('user', 'You are logged in');
}

public loggedOut(): void {
	this.localstorageService.setItem('user', 'You are logged out');
}

public init(): void {
	this.localstorageService.removeItem('user');
	this.timesUsed = this.timesUsed + 1;
	this.localstorageService.setItem('number', this.timesUsed);
}

public clear(): void {
	this.localstorageService.clear('user', 'number');
}

public getItem(): any {
	this.item = this.localstorageService.getItem('user');
	this.timesUsed = this.localstorageService.getItem('number');
}`;
        this.example = `<div class="u-margin-bottom">
	<button (click)="loggedIn()" class="a-button u-margin-right">
		Log in
	</button>
	<button (click)="loggedOut()" class="a-button u-margin-right">
		Log out
	</button>
	<button (click)="init()" class="a-button u-margin-right">
		Count clicks
	</button>
</div>
<div class="u-margin-bottom">
	<button (click)="getItem()" class="a-button u-margin-right">
		Get from local storage
	</button>
	<button (click)="clear()" class="a-button">
		Clear local storage
	</button>
</div>
<div class="u-margin-bottom">
	<label class="a-input__label a-input__label--inline">{{ this.item }}</label>
</div>
<div class="u-margin-bottom">
	<label class="a-input__label a-input__label--inline">You clicked the count clicks button this many times: {{ this.timesUsed }}</label>
</div>`;
        this.user = this.localstorageService.select('user');
        this.timesUsed = 0;
        this.localstorageService.setItem('number', this.timesUsed);
    }
    /**
     * @return {?}
     */
    loggedIn() {
        this.localstorageService.setItem('user', 'You are logged in');
    }
    /**
     * @return {?}
     */
    loggedOut() {
        this.localstorageService.setItem('user', 'You are logged out');
    }
    /**
     * @return {?}
     */
    init() {
        this.localstorageService.removeItem('user');
        this.timesUsed = this.timesUsed + 1;
        this.localstorageService.setItem('number', this.timesUsed);
    }
    /**
     * @return {?}
     */
    clear() {
        this.localstorageService.clear('user', 'number');
    }
    /**
     * @return {?}
     */
    getItem() {
        this.item = this.localstorageService.getItem('user');
        this.timesUsed = this.localstorageService.getItem('number');
    }
}
LocalstorageDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h3 class="u-margin-bottom">Localstorage</h3>
<div class="u-margin-bottom">A component for reading and writing data in local storage.
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="typescript1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="typescript2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="example"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<button (click)="loggedIn()" class="a-button u-margin-right">
		Log in
	</button>
	<button (click)="loggedOut()" class="a-button u-margin-right">
		Log out
	</button>
	<button (click)="init()" class="a-button u-margin-right">
		Count clicks
	</button>
</div>
<div class="u-margin-bottom">
	<button (click)="getItem()" class="a-button u-margin-right">
		Get from local storage
	</button>
	<button (click)="clear()" class="a-button">
		Clear local storage
	</button>
</div>
<div class="u-margin-bottom">
	<label class="a-input__label a-input__label--inline">{{ this.item }}</label>
</div>
<div class="u-margin-bottom">
	<label class="a-input__label a-input__label--inline">You clicked the count clicks button this many times: {{ this.timesUsed }}</label>
</div>
`,
                providers: [_acpaas_ui_ngx_components_localstorage__WEBPACK_IMPORTED_MODULE_1__["LocalstorageService"]],
            },] },
];
/** @nocollapse */
LocalstorageDemoPageComponent.ctorParameters = () => [
    { type: _acpaas_ui_ngx_components_localstorage__WEBPACK_IMPORTED_MODULE_1__["LocalstorageService"], },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    LocalstorageDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LocalstorageExamplesModule {
}
LocalstorageExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _acpaas_ui_ngx_components_localstorage__WEBPACK_IMPORTED_MODULE_1__["LocalstorageModule"].forRoot({
                        storageType: 'sessionStorage',
                        identifier: 'my-app-v1',
                    }),
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ LOCALSTORAGE_EXAMPLES_ROUTES = [
    {
        path: '',
        component: LocalstorageDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlL3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5tb2R1bGUudHMiLCJuZzovL2xvY2Fsc3RvcmFnZS9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2xvY2Fsc3RvcmFnZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYDxoMyBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPkxvY2Fsc3RvcmFnZTwvaDM+XG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+QSBjb21wb25lbnQgZm9yIHJlYWRpbmcgYW5kIHdyaXRpbmcgZGF0YSBpbiBsb2NhbCBzdG9yYWdlLlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cInR5cGVzY3JpcHQxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cInR5cGVzY3JpcHQyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImV4YW1wbGVcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YnV0dG9uIChjbGljayk9XCJsb2dnZWRJbigpXCIgY2xhc3M9XCJhLWJ1dHRvbiB1LW1hcmdpbi1yaWdodFwiPlxuXHRcdExvZyBpblxuXHQ8L2J1dHRvbj5cblx0PGJ1dHRvbiAoY2xpY2spPVwibG9nZ2VkT3V0KClcIiBjbGFzcz1cImEtYnV0dG9uIHUtbWFyZ2luLXJpZ2h0XCI+XG5cdFx0TG9nIG91dFxuXHQ8L2J1dHRvbj5cblx0PGJ1dHRvbiAoY2xpY2spPVwiaW5pdCgpXCIgY2xhc3M9XCJhLWJ1dHRvbiB1LW1hcmdpbi1yaWdodFwiPlxuXHRcdENvdW50IGNsaWNrc1xuXHQ8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YnV0dG9uIChjbGljayk9XCJnZXRJdGVtKClcIiBjbGFzcz1cImEtYnV0dG9uIHUtbWFyZ2luLXJpZ2h0XCI+XG5cdFx0R2V0IGZyb20gbG9jYWwgc3RvcmFnZVxuXHQ8L2J1dHRvbj5cblx0PGJ1dHRvbiAoY2xpY2spPVwiY2xlYXIoKVwiIGNsYXNzPVwiYS1idXR0b25cIj5cblx0XHRDbGVhciBsb2NhbCBzdG9yYWdlXG5cdDwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxsYWJlbCBjbGFzcz1cImEtaW5wdXRfX2xhYmVsIGEtaW5wdXRfX2xhYmVsLS1pbmxpbmVcIj57eyB0aGlzLml0ZW0gfX08L2xhYmVsPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxsYWJlbCBjbGFzcz1cImEtaW5wdXRfX2xhYmVsIGEtaW5wdXRfX2xhYmVsLS1pbmxpbmVcIj5Zb3UgY2xpY2tlZCB0aGUgY291bnQgY2xpY2tzIGJ1dHRvbiB0aGlzIG1hbnkgdGltZXM6IHt7IHRoaXMudGltZXNVc2VkIH19PC9sYWJlbD5cbjwvZGl2PlxuYCxcblx0cHJvdmlkZXJzOiBbIExvY2Fsc3RvcmFnZVNlcnZpY2UgXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlRGVtb1BhZ2VDb21wb25lbnQge1xuXG5cdHB1YmxpYyB1c2VyOiBhbnk7XG5cdHB1YmxpYyBpdGVtOiBhbnk7XG5cdHB1YmxpYyB0aW1lc1VzZWQ6IGFueTtcblxuXHRwdWJsaWMgdHlwZXNjcmlwdDEgPSBgaW1wb3J0IHsgTG9jYWxzdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9sb2NhbHN0b3JhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTG9jYWxzdG9yYWdlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgc3RvcmFnZVR5cGU6ICdzZXNzaW9uU3RvcmFnZScsXG4gICAgICAgICAgICBpZGVudGlmaWVyOiAnbXktYXBwLXYxLFxuICAgICAgICB9KVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31gO1xuXG5cdHB1YmxpYyB0eXBlc2NyaXB0MiA9IGBwdWJsaWMgdXNlcjogYW55O1xucHVibGljIGl0ZW06IGFueTtcbnB1YmxpYyB0aW1lc1VzZWQ6IGFueTtcblxuY29uc3RydWN0b3IoXG5cdHByaXZhdGUgbG9jYWxzdG9yYWdlU2VydmljZTogTG9jYWxzdG9yYWdlU2VydmljZVxuKSB7XG5cdHRoaXMudXNlciA9IHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZWxlY3QoJ3VzZXInKTtcblx0dGhpcy50aW1lc1VzZWQgPSAwO1xuXHR0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbSgnbnVtYmVyJywgdGhpcy50aW1lc1VzZWQpO1xufVxuXG5wdWJsaWMgbG9nZ2VkSW4oKTogdm9pZCB7XG5cdHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRJdGVtKCd1c2VyJywgJ1lvdSBhcmUgbG9nZ2VkIGluJyk7XG59XG5cbnB1YmxpYyBsb2dnZWRPdXQoKTogdm9pZCB7XG5cdHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRJdGVtKCd1c2VyJywgJ1lvdSBhcmUgbG9nZ2VkIG91dCcpO1xufVxuXG5wdWJsaWMgaW5pdCgpOiB2b2lkIHtcblx0dGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcblx0dGhpcy50aW1lc1VzZWQgPSB0aGlzLnRpbWVzVXNlZCArIDE7XG5cdHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRJdGVtKCdudW1iZXInLCB0aGlzLnRpbWVzVXNlZCk7XG59XG5cbnB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0dGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCd1c2VyJywgJ251bWJlcicpO1xufVxuXG5wdWJsaWMgZ2V0SXRlbSgpOiBhbnkge1xuXHR0aGlzLml0ZW0gPSB0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbSgndXNlcicpO1xuXHR0aGlzLnRpbWVzVXNlZCA9IHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5nZXRJdGVtKCdudW1iZXInKTtcbn1gO1xuXG5cdHB1YmxpYyBleGFtcGxlID0gYDxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGJ1dHRvbiAoY2xpY2spPVwibG9nZ2VkSW4oKVwiIGNsYXNzPVwiYS1idXR0b24gdS1tYXJnaW4tcmlnaHRcIj5cblx0XHRMb2cgaW5cblx0PC9idXR0b24+XG5cdDxidXR0b24gKGNsaWNrKT1cImxvZ2dlZE91dCgpXCIgY2xhc3M9XCJhLWJ1dHRvbiB1LW1hcmdpbi1yaWdodFwiPlxuXHRcdExvZyBvdXRcblx0PC9idXR0b24+XG5cdDxidXR0b24gKGNsaWNrKT1cImluaXQoKVwiIGNsYXNzPVwiYS1idXR0b24gdS1tYXJnaW4tcmlnaHRcIj5cblx0XHRDb3VudCBjbGlja3Ncblx0PC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGJ1dHRvbiAoY2xpY2spPVwiZ2V0SXRlbSgpXCIgY2xhc3M9XCJhLWJ1dHRvbiB1LW1hcmdpbi1yaWdodFwiPlxuXHRcdEdldCBmcm9tIGxvY2FsIHN0b3JhZ2Vcblx0PC9idXR0b24+XG5cdDxidXR0b24gKGNsaWNrKT1cImNsZWFyKClcIiBjbGFzcz1cImEtYnV0dG9uXCI+XG5cdFx0Q2xlYXIgbG9jYWwgc3RvcmFnZVxuXHQ8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8bGFiZWwgY2xhc3M9XCJhLWlucHV0X19sYWJlbCBhLWlucHV0X19sYWJlbC0taW5saW5lXCI+e3sgdGhpcy5pdGVtIH19PC9sYWJlbD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8bGFiZWwgY2xhc3M9XCJhLWlucHV0X19sYWJlbCBhLWlucHV0X19sYWJlbC0taW5saW5lXCI+WW91IGNsaWNrZWQgdGhlIGNvdW50IGNsaWNrcyBidXR0b24gdGhpcyBtYW55IHRpbWVzOiB7eyB0aGlzLnRpbWVzVXNlZCB9fTwvbGFiZWw+XG48L2Rpdj5gO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbG9jYWxzdG9yYWdlU2VydmljZTogTG9jYWxzdG9yYWdlU2VydmljZVxuXHQpIHtcblx0XHR0aGlzLnVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2Uuc2VsZWN0KCd1c2VyJyk7XG5cdFx0dGhpcy50aW1lc1VzZWQgPSAwO1xuXHRcdHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRJdGVtKCdudW1iZXInLCB0aGlzLnRpbWVzVXNlZCk7XG5cdH1cblxuXHRwdWJsaWMgbG9nZ2VkSW4oKTogdm9pZCB7XG5cdFx0dGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ3VzZXInLCAnWW91IGFyZSBsb2dnZWQgaW4nKTtcblx0fVxuXG5cdHB1YmxpYyBsb2dnZWRPdXQoKTogdm9pZCB7XG5cdFx0dGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ3VzZXInLCAnWW91IGFyZSBsb2dnZWQgb3V0Jyk7XG5cdH1cblxuXHRwdWJsaWMgaW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbSgndXNlcicpO1xuXHRcdHRoaXMudGltZXNVc2VkID0gdGhpcy50aW1lc1VzZWQgKyAxO1xuXHRcdHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRJdGVtKCdudW1iZXInLCB0aGlzLnRpbWVzVXNlZCk7XG5cdH1cblxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCd1c2VyJywgJ251bWJlcicpO1xuXHR9XG5cblx0cHVibGljIGdldEl0ZW0oKTogYW55IHtcblx0XHR0aGlzLml0ZW0gPSB0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbSgndXNlcicpO1xuXHRcdHRoaXMudGltZXNVc2VkID0gdGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ251bWJlcicpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBMb2NhbHN0b3JhZ2VEZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUGFnZXMgPSBbXG5cdExvY2Fsc3RvcmFnZURlbW9QYWdlQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IHsgQ29kZVNuaXBwZXRNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2NvZGUtc25pcHBldCc7XG5cbmltcG9ydCB7IFBhZ2VzIH0gZnJvbSAnLi9wYWdlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0TG9jYWxzdG9yYWdlTW9kdWxlLmZvclJvb3Qoe1xuXHRcdFx0c3RvcmFnZVR5cGU6ICdzZXNzaW9uU3RvcmFnZScsXG5cdFx0XHRpZGVudGlmaWVyOiAnbXktYXBwLXYxJyxcblx0XHR9KSxcblx0XHRDb2RlU25pcHBldE1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIExvY2Fsc3RvcmFnZUV4YW1wbGVzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VEZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgTE9DQUxTVE9SQUdFX0VYQU1QTEVTX1JPVVRFUzogUm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJycsXG5cdFx0Y29tcG9uZW50OiBMb2NhbHN0b3JhZ2VEZW1vUGFnZUNvbXBvbmVudCxcblx0XHRwYXRoTWF0Y2g6ICdmdWxsJyxcblx0fSxcbl07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUFnSUMsWUFDUztRQUFBLHdCQUFtQixHQUFuQixtQkFBbUI7MkJBM0VQOzs7Ozs7Ozs7OzswQkFXSTsyQkFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUNwQjt1QkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXdCWDtRQUtMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDM0Q7Ozs7SUFFTSxRQUFRO1FBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7SUFHeEQsU0FBUztRQUNmLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7Ozs7O0lBR3pELElBQUk7UUFDVixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztJQUdyRCxLQUFLO1FBQ1gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7O0lBRzNDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O1lBeko3RCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXlDVjtnQkFDQSxTQUFTLEVBQUUsQ0FBRSxtQkFBbUIsQ0FBRTthQUNsQzs7OztZQTlDUSxtQkFBbUI7Ozs7Ozs7QUNENUIsdUJBRWEsS0FBSyxHQUFHO0lBQ3BCLDZCQUE2QjtDQUM3Qjs7Ozs7O0FDSkQ7OztZQU9DLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7d0JBQzFCLFdBQVcsRUFBRSxnQkFBZ0I7d0JBQzdCLFVBQVUsRUFBRSxXQUFXO3FCQUN2QixDQUFDO29CQUNGLGlCQUFpQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEtBQUs7aUJBQ0w7YUFDRDs7Ozs7OztBQ2pCRCx1QkFFYSw0QkFBNEIsR0FBVztJQUNuRDtRQUNDLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDZCQUE2QjtRQUN4QyxTQUFTLEVBQUUsTUFBTTtLQUNqQjtDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./examples/logo/fesm2015/logo.js":
/*!****************************************!*\
  !*** ./examples/logo/fesm2015/logo.js ***!
  \****************************************/
/*! exports provided: LogoDemoPageComponent, LogoExamplesModule, LOGO_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoDemoPageComponent", function() { return LogoDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoExamplesModule", function() { return LogoExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO_EXAMPLES_ROUTES", function() { return LOGO_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/logo */ "./dist/logo/fesm5/logo.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoDemoPageComponent {
    constructor() {
        this.imgTitle = 'Title for logo';
        this.imgSrc = 'https://robohash.org/acpaas-ui';
        this.imgLink = '#';
        this.javascript1 = `import { LogoModule } from '@acpaas-ui/ngx-components/logo';

@NgModule({
	imports: [
		LogoModule
	]
});

export class AppModule {};`;
        this.javascript2 = `public imgTitle = 'Title for logo';
public imgSrc = 'https://robohash.org/acpaas-ui';
public imgLink = '#';

public imgClicked(event) {
	event.preventDefault();
	alert('Logo was clicked');
}`;
        this.html = `<aui-logo [src]="imgSrc" [title]="imgTitle" [link]="imgLink" [onClick]="imgClicked"></aui-logo>`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    imgClicked(event) {
        event.preventDefault();
        alert('Logo was clicked');
    }
}
LogoDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Logo</h1>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="html"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-logo [src]="imgSrc" [title]="imgTitle" [link]="imgLink" [onClick]="imgClicked"></aui-logo>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    LogoDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoExamplesModule {
}
LogoExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_logo__WEBPACK_IMPORTED_MODULE_2__["LogoModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ LOGO_EXAMPLES_ROUTES = [
    {
        path: '',
        component: LogoDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nby9sb2dvL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9sb2dvL2xvZ28vcGFnZXMvaW5kZXgudHMiLCJuZzovL2xvZ28vbG9nby9sb2dvLm1vZHVsZS50cyIsIm5nOi8vbG9nby9sb2dvL2xvZ28ucm91dGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGA8aDEgY2xhc3M9XCJoMyB1LW1hcmdpbi1ib3R0b21cIj5Mb2dvPC9oMT5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImh0bWxcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWxvZ28gW3NyY109XCJpbWdTcmNcIiBbdGl0bGVdPVwiaW1nVGl0bGVcIiBbbGlua109XCJpbWdMaW5rXCIgW29uQ2xpY2tdPVwiaW1nQ2xpY2tlZFwiPjwvYXVpLWxvZ28+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIExvZ29EZW1vUGFnZUNvbXBvbmVudCB7XG5cdHB1YmxpYyBpbWdUaXRsZSA9ICdUaXRsZSBmb3IgbG9nbyc7XG5cdHB1YmxpYyBpbWdTcmMgPSAnaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYWNwYWFzLXVpJztcblx0cHVibGljIGltZ0xpbmsgPSAnIyc7XG5cblx0cHVibGljIGphdmFzY3JpcHQxID0gYGltcG9ydCB7IExvZ29Nb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2xvZ28nO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TG9nb01vZHVsZVxuXHRdXG59KTtcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fTtgO1xuXG5cdHB1YmxpYyBqYXZhc2NyaXB0MiA9IGBwdWJsaWMgaW1nVGl0bGUgPSAnVGl0bGUgZm9yIGxvZ28nO1xucHVibGljIGltZ1NyYyA9ICdodHRwczovL3JvYm9oYXNoLm9yZy9hY3BhYXMtdWknO1xucHVibGljIGltZ0xpbmsgPSAnIyc7XG5cbnB1YmxpYyBpbWdDbGlja2VkKGV2ZW50KSB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGFsZXJ0KCdMb2dvIHdhcyBjbGlja2VkJyk7XG59YDtcblxuXHRwdWJsaWMgaHRtbCA9IGA8YXVpLWxvZ28gW3NyY109XCJpbWdTcmNcIiBbdGl0bGVdPVwiaW1nVGl0bGVcIiBbbGlua109XCJpbWdMaW5rXCIgW29uQ2xpY2tdPVwiaW1nQ2xpY2tlZFwiPjwvYXVpLWxvZ28+YDtcblxuXHRwdWJsaWMgaW1nQ2xpY2tlZChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YWxlcnQoJ0xvZ28gd2FzIGNsaWNrZWQnKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTG9nb0RlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlcyA9IFtcblx0TG9nb0RlbW9QYWdlQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTG9nb01vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgeyBDb2RlU25pcHBldE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvY29kZS1zbmlwcGV0JztcblxuaW1wb3J0IHsgUGFnZXMgfSBmcm9tICcuL3BhZ2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRMb2dvTW9kdWxlLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb0V4YW1wbGVzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dvRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IExPR09fRVhBTVBMRVNfUk9VVEVTOiBSb3V0ZXMgPSBbXG5cdHtcblx0XHRwYXRoOiAnJyxcblx0XHRjb21wb25lbnQ6IExvZ29EZW1vUGFnZUNvbXBvbmVudCxcblx0XHRwYXRoTWF0Y2g6ICdmdWxsJyxcblx0fSxcbl07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O3dCQXNCbUIsZ0JBQWdCO3NCQUNsQixnQ0FBZ0M7dUJBQy9CLEdBQUc7MkJBRUM7Ozs7Ozs7OzJCQVFLOzJCQUVMOzs7Ozs7O0VBT3BCO29CQUVhLGlHQUFpRzs7Ozs7O0lBRXhHLFVBQVUsQ0FBQyxLQUFLO1FBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7OztZQS9DM0IsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztDQWdCVjthQUNBOzs7Ozs7O0FDcEJELHVCQUVhLEtBQUssR0FBRztJQUNwQixxQkFBcUI7Q0FDckI7Ozs7OztBQ0pEOzs7WUFPQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixpQkFBaUI7aUJBQ2pCO2dCQUNELFlBQVksRUFBRTtvQkFDYixLQUFLO2lCQUNMO2FBQ0Q7Ozs7Ozs7QUNkRCx1QkFFYSxvQkFBb0IsR0FBVztJQUMzQztRQUNDLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxTQUFTLEVBQUUsTUFBTTtLQUNqQjtDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./examples/map/fesm2015/map.js":
/*!**************************************!*\
  !*** ./examples/map/fesm2015/map.js ***!
  \**************************************/
/*! exports provided: DemoPageComponent, MapExamplesModule, MAP_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageComponent", function() { return DemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapExamplesModule", function() { return MapExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_EXAMPLES_ROUTES", function() { return MAP_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_ngx_components_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/map */ "./dist/map/fesm5/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DemoPageComponent {
    constructor() {
        this.importModule = `import { LeafletModule } from '@acpaas-ui/ngx-components/map';

@NgModule({
	imports: [
		LeafletModule
	]
});

export class AppModule {};`;
        this.codeExampleJS1 = `"styles": [
  "styleguide/styles.scss",
  "node_modules/leaflet/dist/leaflet.css",
  "node_modules/leaflet-draw/dist/leaflet.draw.css"
]`;
        this.codeExampleJS2 = `import { LeafletMap, baseMapWorldGray, baseMapAntwerp } from '@acpaas-ui/ngx-components/map';

public leafletMap: LeafletMap = new LeafletMap({
	zoom: 13, // default zoom level
	center: [51.215, 4.425], // default center point
	onAddPolygon: (layer) => {},
	onAddLine: (layer) => {},
	onEditFeature: (feature) => {},
});

public ngOnInit(): void {
	this.leafletMap.onInit.subscribe(() => {
		this.leafletMap.addTileLayer(baseMapWorldGray);
		this.leafletMap.addTileLayer(baseMapAntwerp);
 });
}`;
        this.codeExampleHTML1 = `<aui-leaflet [leafletMap]="leafletMap" [hasSidebar]="true">
  <div controls top left>
    <aui-leaflet-drag-control></aui-leaflet-drag-control>
    <aui-leaflet-draw-control></aui-leaflet-draw-control>
  </div>
  <div controls top right>
    <aui-leaflet-fullscreen-control></aui-leaflet-fullscreen-control>
  </div>
  <div controls bottom left>
    <aui-leaflet-locate-control></aui-leaflet-locate-control>
  </div>
  <div controls bottom right>
    <aui-leaflet-zoom-control></aui-leaflet-zoom-control>
  </div>
  <div>
    Content displayed in sidebar
  </div>
</aui-leaflet>`;
        this.leafletMap = new _acpaas_ui_ngx_components_map__WEBPACK_IMPORTED_MODULE_1__["LeafletMap"]({
            zoom: 13,
            // default zoom level
            center: [51.215, 4.425],
            // default center point
            onAddPolygon: (layer) => { },
            onAddLine: (layer) => { },
            onEditFeature: (feature) => { },
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.leafletMap.onInit.subscribe(() => {
            this.leafletMap.addTileLayer(_acpaas_ui_ngx_components_map__WEBPACK_IMPORTED_MODULE_1__["baseMapWorldGray"]);
            this.leafletMap.addTileLayer(_acpaas_ui_ngx_components_map__WEBPACK_IMPORTED_MODULE_1__["baseMapAntwerp"]);
        });
    }
}
DemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Map</h1>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="importModule"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleJS1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleJS2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleHTML1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-leaflet [leafletMap]="leafletMap" [hasSidebar]="true">
		<div controls top left>
			<aui-leaflet-drag-control></aui-leaflet-drag-control>
			<aui-leaflet-draw-control></aui-leaflet-draw-control>
		</div>
		<div controls top right>
			<aui-leaflet-fullscreen-control></aui-leaflet-fullscreen-control>
		</div>
		<div controls bottom left>
			<aui-leaflet-locate-control></aui-leaflet-locate-control>
		</div>
		<div controls bottom right>
			<aui-leaflet-zoom-control></aui-leaflet-zoom-control>
		</div>
		<div>
			Content displayed in sidebar
		</div>
	</aui-leaflet>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    DemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MapExamplesModule {
}
MapExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _acpaas_ui_ngx_components_map__WEBPACK_IMPORTED_MODULE_1__["LeafletModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MAP_EXAMPLES_ROUTES = [
    {
        path: '',
        component: DemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9tYXAvbWFwL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9tYXAvbWFwL3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9tYXAvbWFwL21hcC5tb2R1bGUudHMiLCJuZzovL21hcC9tYXAvbWFwLnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVhZmxldE1hcCwgYmFzZU1hcFdvcmxkR3JheSwgYmFzZU1hcEFudHdlcnAgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL21hcCc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYDxoMSBjbGFzcz1cImgzIHUtbWFyZ2luLWJvdHRvbVwiPk1hcDwvaDE+XG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJpbXBvcnRNb2R1bGVcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiY29kZUV4YW1wbGVKUzFcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiY29kZUV4YW1wbGVKUzJcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiY29kZUV4YW1wbGVIVE1MMVwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxhdWktbGVhZmxldCBbbGVhZmxldE1hcF09XCJsZWFmbGV0TWFwXCIgW2hhc1NpZGViYXJdPVwidHJ1ZVwiPlxuXHRcdDxkaXYgY29udHJvbHMgdG9wIGxlZnQ+XG5cdFx0XHQ8YXVpLWxlYWZsZXQtZHJhZy1jb250cm9sPjwvYXVpLWxlYWZsZXQtZHJhZy1jb250cm9sPlxuXHRcdFx0PGF1aS1sZWFmbGV0LWRyYXctY29udHJvbD48L2F1aS1sZWFmbGV0LWRyYXctY29udHJvbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNvbnRyb2xzIHRvcCByaWdodD5cblx0XHRcdDxhdWktbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2w+PC9hdWktbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2w+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjb250cm9scyBib3R0b20gbGVmdD5cblx0XHRcdDxhdWktbGVhZmxldC1sb2NhdGUtY29udHJvbD48L2F1aS1sZWFmbGV0LWxvY2F0ZS1jb250cm9sPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY29udHJvbHMgYm90dG9tIHJpZ2h0PlxuXHRcdFx0PGF1aS1sZWFmbGV0LXpvb20tY29udHJvbD48L2F1aS1sZWFmbGV0LXpvb20tY29udHJvbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2PlxuXHRcdFx0Q29udGVudCBkaXNwbGF5ZWQgaW4gc2lkZWJhclxuXHRcdDwvZGl2PlxuXHQ8L2F1aS1sZWFmbGV0PlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBEZW1vUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBpbXBvcnRNb2R1bGUgPSBgaW1wb3J0IHsgTGVhZmxldE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvbWFwJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdExlYWZsZXRNb2R1bGVcblx0XVxufSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge307YDtcblxuXHRwdWJsaWMgY29kZUV4YW1wbGVKUzEgPVxuYFwic3R5bGVzXCI6IFtcbiAgXCJzdHlsZWd1aWRlL3N0eWxlcy5zY3NzXCIsXG4gIFwibm9kZV9tb2R1bGVzL2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiLFxuICBcIm5vZGVfbW9kdWxlcy9sZWFmbGV0LWRyYXcvZGlzdC9sZWFmbGV0LmRyYXcuY3NzXCJcbl1gO1xuXHRwdWJsaWMgY29kZUV4YW1wbGVKUzIgPVxuYGltcG9ydCB7IExlYWZsZXRNYXAsIGJhc2VNYXBXb3JsZEdyYXksIGJhc2VNYXBBbnR3ZXJwIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9tYXAnO1xuXG5wdWJsaWMgbGVhZmxldE1hcDogTGVhZmxldE1hcCA9IG5ldyBMZWFmbGV0TWFwKHtcblx0em9vbTogMTMsIC8vIGRlZmF1bHQgem9vbSBsZXZlbFxuXHRjZW50ZXI6IFs1MS4yMTUsIDQuNDI1XSwgLy8gZGVmYXVsdCBjZW50ZXIgcG9pbnRcblx0b25BZGRQb2x5Z29uOiAobGF5ZXIpID0+IHt9LFxuXHRvbkFkZExpbmU6IChsYXllcikgPT4ge30sXG5cdG9uRWRpdEZlYXR1cmU6IChmZWF0dXJlKSA9PiB7fSxcbn0pO1xuXG5wdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cdHRoaXMubGVhZmxldE1hcC5vbkluaXQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHR0aGlzLmxlYWZsZXRNYXAuYWRkVGlsZUxheWVyKGJhc2VNYXBXb3JsZEdyYXkpO1xuXHRcdHRoaXMubGVhZmxldE1hcC5hZGRUaWxlTGF5ZXIoYmFzZU1hcEFudHdlcnApO1xuIH0pO1xufWA7XG4gIHB1YmxpYyBjb2RlRXhhbXBsZUhUTUwxID1cbmA8YXVpLWxlYWZsZXQgW2xlYWZsZXRNYXBdPVwibGVhZmxldE1hcFwiIFtoYXNTaWRlYmFyXT1cInRydWVcIj5cbiAgPGRpdiBjb250cm9scyB0b3AgbGVmdD5cbiAgICA8YXVpLWxlYWZsZXQtZHJhZy1jb250cm9sPjwvYXVpLWxlYWZsZXQtZHJhZy1jb250cm9sPlxuICAgIDxhdWktbGVhZmxldC1kcmF3LWNvbnRyb2w+PC9hdWktbGVhZmxldC1kcmF3LWNvbnRyb2w+XG4gIDwvZGl2PlxuICA8ZGl2IGNvbnRyb2xzIHRvcCByaWdodD5cbiAgICA8YXVpLWxlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sPjwvYXVpLWxlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sPlxuICA8L2Rpdj5cbiAgPGRpdiBjb250cm9scyBib3R0b20gbGVmdD5cbiAgICA8YXVpLWxlYWZsZXQtbG9jYXRlLWNvbnRyb2w+PC9hdWktbGVhZmxldC1sb2NhdGUtY29udHJvbD5cbiAgPC9kaXY+XG4gIDxkaXYgY29udHJvbHMgYm90dG9tIHJpZ2h0PlxuICAgIDxhdWktbGVhZmxldC16b29tLWNvbnRyb2w+PC9hdWktbGVhZmxldC16b29tLWNvbnRyb2w+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIENvbnRlbnQgZGlzcGxheWVkIGluIHNpZGViYXJcbiAgPC9kaXY+XG48L2F1aS1sZWFmbGV0PmA7XG5cblx0cHVibGljIGxlYWZsZXRNYXA6IExlYWZsZXRNYXAgPSBuZXcgTGVhZmxldE1hcCh7XG5cdFx0em9vbTogMTMsIC8vIGRlZmF1bHQgem9vbSBsZXZlbFxuXHRcdGNlbnRlcjogWzUxLjIxNSwgNC40MjVdLCAvLyBkZWZhdWx0IGNlbnRlciBwb2ludFxuXHRcdG9uQWRkUG9seWdvbjogKGxheWVyKSA9PiB7fSxcblx0XHRvbkFkZExpbmU6IChsYXllcikgPT4ge30sXG5cdFx0b25FZGl0RmVhdHVyZTogKGZlYXR1cmUpID0+IHt9LFxuXHR9KTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5sZWFmbGV0TWFwLm9uSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0dGhpcy5sZWFmbGV0TWFwLmFkZFRpbGVMYXllcihiYXNlTWFwV29ybGRHcmF5KTtcblx0XHRcdHRoaXMubGVhZmxldE1hcC5hZGRUaWxlTGF5ZXIoYmFzZU1hcEFudHdlcnApO1xuXHQgfSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IERlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlcyA9IFtcblx0RGVtb1BhZ2VDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMZWFmbGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9tYXAnO1xuaW1wb3J0IHsgQ29kZVNuaXBwZXRNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2NvZGUtc25pcHBldCc7XG5cbmltcG9ydCB7IFBhZ2VzIH0gZnJvbSAnLi9wYWdlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0TGVhZmxldE1vZHVsZSxcblx0XHRDb2RlU25pcHBldE1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hcEV4YW1wbGVzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgTUFQX0VYQU1QTEVTX1JPVVRFUzogUm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJycsXG5cdFx0Y29tcG9uZW50OiBEZW1vUGFnZUNvbXBvbmVudCxcblx0XHRwYXRoTWF0Y2g6ICdmdWxsJyxcblx0fSxcbl07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OzRCQTRDdUI7Ozs7Ozs7OzJCQVFJOzhCQUczQjs7OztFQUlFOzhCQUVGOzs7Ozs7Ozs7Ozs7Ozs7RUFlRTtnQ0FFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFpQmU7MEJBRWtCLElBQUksVUFBVSxDQUFDO1lBQzlDLElBQUksRUFBRSxFQUFFOztZQUNSLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7O1lBQ3ZCLFlBQVksRUFBRSxDQUFDLEtBQUssUUFBTztZQUMzQixTQUFTLEVBQUUsQ0FBQyxLQUFLLFFBQU87WUFDeEIsYUFBYSxFQUFFLENBQUMsT0FBTyxRQUFPO1NBQzlCLENBQUM7Ozs7O0lBRUssUUFBUTtRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FBQzs7OztZQTFHSixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUNWO2FBQ0E7Ozs7Ozs7QUMxQ0QsdUJBRWEsS0FBSyxHQUFHO0lBQ3BCLGlCQUFpQjtDQUNqQjs7Ozs7O0FDSkQ7OztZQU9DLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLGlCQUFpQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEtBQUs7aUJBQ0w7YUFDRDs7Ozs7OztBQ2RELHVCQUVhLG1CQUFtQixHQUFXO0lBQzFDO1FBQ0MsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLFNBQVMsRUFBRSxNQUFNO0tBQ2pCO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./examples/pagination/fesm2015/pagination.js":
/*!****************************************************!*\
  !*** ./examples/pagination/fesm2015/pagination.js ***!
  \****************************************************/
/*! exports provided: PaginationDemoPageComponent, PaginationExamplesModule, PAGINATION_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationDemoPageComponent", function() { return PaginationDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationExamplesModule", function() { return PaginationExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_EXAMPLES_ROUTES", function() { return PAGINATION_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/pagination */ "./dist/pagination/fesm5/pagination.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PaginationDemoPageComponent {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 2;
        this.heroes = [
            { name: 'Batman' },
            { name: 'Superman' },
            { name: 'Iron man' },
            { name: 'Wolverine' },
            { name: 'Wonder woman' },
            { name: 'Deadpool' },
        ];
        this.itemsPerPageOptions = [1, 2, 4];
        this.totalValues = this.heroes.length;
        this.javascript1 = `import { PaginationModule } from '@acpaas-ui/ngx-components/pagination';

@NgModule({
	imports: [
		PaginationModule
	]
});

export class AppModule {};`;
        this.javascript2 = `public currentPage = 1;
public itemsPerPage = 2;
private heroes = [
	{ name: 'Batman' },
	{ name: 'Superman' },
	{ name: 'Iron man' },
	{ name: 'Wolverine' },
	{ name: 'Wonder woman' },
	{ name: 'Deadpool' }
];
public visibleHeroes: any[];
public totalValues = this.heroes.length;

public ngOnInit() {
	this.selectHeroes();
}

public onUpdatePage(page) {
	this.currentPage = page;
	this.selectHeroes();
}

private selectHeroes() {
	this.visibleHeroes = this.heroes.slice((this.currentPage * this.itemsPerPage)
		- this.itemsPerPage, (this.currentPage * this.itemsPerPage));
}`;
        this.html1 = `<aui-pagination
    [currentPage]="currentPage"
    [itemsPerPage]="itemsPerPage"
    [totalValues]="totalValues"
    styling="basic"
    display="numbers"
    (update)="onUpdatePage($event)">
</aui-pagination>`;
        this.javascript3 = `import { ItemCounterModule } from '@acpaas-ui/ngx-components/pagination';

@NgModule({
	imports: [
		ItemCounterModule.forChild({
			singular: '%{currentFrom} - %{currentTo} of %{totalAmount} item',
			plural: '%{currentFrom} - %{currentTo} of %{totalAmount} items',
		},
		{
			singular: 'item per page',
			plural: 'items per page',
		})
	]
});

export class AppModule {};`;
        this.javascript4 = `public itemsPerPageOptions = [1, 2, 4];

public onUpdateItems(count) {
	this.itemsPerPage = count;
	this.selectHeroes();
}`;
        this.html2 = `<aui-items-per-page
	[selectOptions]="itemsPerPageOptions"
	[amountPerPage]="itemsPerPage"
	(returnAmount)="onUpdateItems($event)">
</aui-items-per-page>

<aui-item-counter
	[currentPage]="currentPage"
	[totalAmount]="totalValues"
	[amountPerPage]="itemsPerPage">
</aui-item-counter>`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectHeroes();
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onUpdatePage(page) {
        this.currentPage = page;
        this.selectHeroes();
    }
    /**
     * @param {?} count
     * @return {?}
     */
    onUpdateItems(count) {
        this.itemsPerPage = count;
        this.selectHeroes();
    }
    /**
     * @return {?}
     */
    selectHeroes() {
        this.visibleHeroes = this.heroes.slice((this.currentPage * this.itemsPerPage)
            - this.itemsPerPage, (this.currentPage * this.itemsPerPage));
    }
}
PaginationDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Pagination</h1>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="html1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<h3 class="h5">Heroes</h3>
	<ul>
		<li *ngFor="let hero of visibleHeroes">{{ hero.name }}</li>
	</ul>
	<aui-pagination
		[currentPage]="currentPage"
		[itemsPerPage]="itemsPerPage"
		[totalValues]="totalValues"
		styling="basic"
		display="numbers"
		(update)="onUpdatePage($event)">
	</aui-pagination>
</div>

<h2 class="h4 u-margin-bottom u-margin-top-lg">Item counter &amp; items per page</h2>
<div class="m-alert u-margin-bottom">
	<p>Note that the following code is an extension of the code above.</p>
</div>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript3"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript4"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="html2"></aui-code-snippet>
</div>

<div class="u-margin-bottom-x">
	<aui-items-per-page
		[selectOptions]="itemsPerPageOptions"
		[amountPerPage]="itemsPerPage"
		(returnAmount)="onUpdateItems($event)">
	</aui-items-per-page>
</div>
<div class="u-margin-bottom">
	<aui-item-counter
		[currentPage]="currentPage"
		[totalAmount]="totalValues"
		[amountPerPage]="itemsPerPage">
	</aui-item-counter>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    PaginationDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PaginationExamplesModule {
}
PaginationExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_pagination__WEBPACK_IMPORTED_MODULE_2__["ItemCounterModule"].forChild({
                        singular: '%{currentFrom} - %{currentTo} of %{totalAmount} item',
                        plural: '%{currentFrom} - %{currentTo} of %{totalAmount} items',
                    }, {
                        singular: 'item per page',
                        plural: 'items per page',
                    }),
                    _acpaas_ui_ngx_components_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ PAGINATION_EXAMPLES_ROUTES = [
    {
        path: '',
        component: PaginationDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcGFnaW5hdGlvbi9wYWdpbmF0aW9uL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9wYWdpbmF0aW9uL3BhZ2luYXRpb24vcGFnZXMvaW5kZXgudHMiLCJuZzovL3BhZ2luYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyIsIm5nOi8vcGFnaW5hdGlvbi9wYWdpbmF0aW9uL3BhZ2luYXRpb24ucm91dGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYDxoMSBjbGFzcz1cImgzIHUtbWFyZ2luLWJvdHRvbVwiPlBhZ2luYXRpb248L2gxPlxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiamF2YXNjcmlwdDFcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiamF2YXNjcmlwdDJcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiaHRtbDFcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8aDMgY2xhc3M9XCJoNVwiPkhlcm9lczwvaDM+XG5cdDx1bD5cblx0XHQ8bGkgKm5nRm9yPVwibGV0IGhlcm8gb2YgdmlzaWJsZUhlcm9lc1wiPnt7IGhlcm8ubmFtZSB9fTwvbGk+XG5cdDwvdWw+XG5cdDxhdWktcGFnaW5hdGlvblxuXHRcdFtjdXJyZW50UGFnZV09XCJjdXJyZW50UGFnZVwiXG5cdFx0W2l0ZW1zUGVyUGFnZV09XCJpdGVtc1BlclBhZ2VcIlxuXHRcdFt0b3RhbFZhbHVlc109XCJ0b3RhbFZhbHVlc1wiXG5cdFx0c3R5bGluZz1cImJhc2ljXCJcblx0XHRkaXNwbGF5PVwibnVtYmVyc1wiXG5cdFx0KHVwZGF0ZSk9XCJvblVwZGF0ZVBhZ2UoJGV2ZW50KVwiPlxuXHQ8L2F1aS1wYWdpbmF0aW9uPlxuPC9kaXY+XG5cbjxoMiBjbGFzcz1cImg0IHUtbWFyZ2luLWJvdHRvbSB1LW1hcmdpbi10b3AtbGdcIj5JdGVtIGNvdW50ZXIgJmFtcDsgaXRlbXMgcGVyIHBhZ2U8L2gyPlxuPGRpdiBjbGFzcz1cIm0tYWxlcnQgdS1tYXJnaW4tYm90dG9tXCI+XG5cdDxwPk5vdGUgdGhhdCB0aGUgZm9sbG93aW5nIGNvZGUgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBjb2RlIGFib3ZlLjwvcD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiamF2YXNjcmlwdDNcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiamF2YXNjcmlwdDRcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiaHRtbDJcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbS14XCI+XG5cdDxhdWktaXRlbXMtcGVyLXBhZ2Vcblx0XHRbc2VsZWN0T3B0aW9uc109XCJpdGVtc1BlclBhZ2VPcHRpb25zXCJcblx0XHRbYW1vdW50UGVyUGFnZV09XCJpdGVtc1BlclBhZ2VcIlxuXHRcdChyZXR1cm5BbW91bnQpPVwib25VcGRhdGVJdGVtcygkZXZlbnQpXCI+XG5cdDwvYXVpLWl0ZW1zLXBlci1wYWdlPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidS1tYXJnaW4tYm90dG9tXCI+XG5cdDxhdWktaXRlbS1jb3VudGVyXG5cdFx0W2N1cnJlbnRQYWdlXT1cImN1cnJlbnRQYWdlXCJcblx0XHRbdG90YWxBbW91bnRdPVwidG90YWxWYWx1ZXNcIlxuXHRcdFthbW91bnRQZXJQYWdlXT1cIml0ZW1zUGVyUGFnZVwiPlxuXHQ8L2F1aS1pdGVtLWNvdW50ZXI+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25EZW1vUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBjdXJyZW50UGFnZSA9IDE7XG5cdHB1YmxpYyBpdGVtc1BlclBhZ2UgPSAyO1xuXHRwcml2YXRlIGhlcm9lcyA9IFtcblx0XHR7IG5hbWU6ICdCYXRtYW4nIH0sXG5cdFx0eyBuYW1lOiAnU3VwZXJtYW4nIH0sXG5cdFx0eyBuYW1lOiAnSXJvbiBtYW4nIH0sXG5cdFx0eyBuYW1lOiAnV29sdmVyaW5lJyB9LFxuXHRcdHsgbmFtZTogJ1dvbmRlciB3b21hbicgfSxcblx0XHR7IG5hbWU6ICdEZWFkcG9vbCcgfSxcblx0XTtcblx0cHVibGljIHZpc2libGVIZXJvZXM6IGFueVtdO1xuXHRwdWJsaWMgaXRlbXNQZXJQYWdlT3B0aW9ucyA9IFsxLCAyLCA0XTtcblx0cHVibGljIHRvdGFsVmFsdWVzID0gdGhpcy5oZXJvZXMubGVuZ3RoO1xuXG5cdHB1YmxpYyBqYXZhc2NyaXB0MSA9IGBpbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9wYWdpbmF0aW9uJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFBhZ2luYXRpb25Nb2R1bGVcblx0XVxufSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge307YDtcblxuXHRwdWJsaWMgamF2YXNjcmlwdDIgPSBgcHVibGljIGN1cnJlbnRQYWdlID0gMTtcbnB1YmxpYyBpdGVtc1BlclBhZ2UgPSAyO1xucHJpdmF0ZSBoZXJvZXMgPSBbXG5cdHsgbmFtZTogJ0JhdG1hbicgfSxcblx0eyBuYW1lOiAnU3VwZXJtYW4nIH0sXG5cdHsgbmFtZTogJ0lyb24gbWFuJyB9LFxuXHR7IG5hbWU6ICdXb2x2ZXJpbmUnIH0sXG5cdHsgbmFtZTogJ1dvbmRlciB3b21hbicgfSxcblx0eyBuYW1lOiAnRGVhZHBvb2wnIH1cbl07XG5wdWJsaWMgdmlzaWJsZUhlcm9lczogYW55W107XG5wdWJsaWMgdG90YWxWYWx1ZXMgPSB0aGlzLmhlcm9lcy5sZW5ndGg7XG5cbnB1YmxpYyBuZ09uSW5pdCgpIHtcblx0dGhpcy5zZWxlY3RIZXJvZXMoKTtcbn1cblxucHVibGljIG9uVXBkYXRlUGFnZShwYWdlKSB7XG5cdHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuXHR0aGlzLnNlbGVjdEhlcm9lcygpO1xufVxuXG5wcml2YXRlIHNlbGVjdEhlcm9lcygpIHtcblx0dGhpcy52aXNpYmxlSGVyb2VzID0gdGhpcy5oZXJvZXMuc2xpY2UoKHRoaXMuY3VycmVudFBhZ2UgKiB0aGlzLml0ZW1zUGVyUGFnZSlcblx0XHQtIHRoaXMuaXRlbXNQZXJQYWdlLCAodGhpcy5jdXJyZW50UGFnZSAqIHRoaXMuaXRlbXNQZXJQYWdlKSk7XG59YDtcblxuXHRwdWJsaWMgaHRtbDEgPSBgPGF1aS1wYWdpbmF0aW9uXG4gICAgW2N1cnJlbnRQYWdlXT1cImN1cnJlbnRQYWdlXCJcbiAgICBbaXRlbXNQZXJQYWdlXT1cIml0ZW1zUGVyUGFnZVwiXG4gICAgW3RvdGFsVmFsdWVzXT1cInRvdGFsVmFsdWVzXCJcbiAgICBzdHlsaW5nPVwiYmFzaWNcIlxuICAgIGRpc3BsYXk9XCJudW1iZXJzXCJcbiAgICAodXBkYXRlKT1cIm9uVXBkYXRlUGFnZSgkZXZlbnQpXCI+XG48L2F1aS1wYWdpbmF0aW9uPmA7XG5cblx0cHVibGljIGphdmFzY3JpcHQzID0gYGltcG9ydCB7IEl0ZW1Db3VudGVyTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9wYWdpbmF0aW9uJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEl0ZW1Db3VudGVyTW9kdWxlLmZvckNoaWxkKHtcblx0XHRcdHNpbmd1bGFyOiAnJXtjdXJyZW50RnJvbX0gLSAle2N1cnJlbnRUb30gb2YgJXt0b3RhbEFtb3VudH0gaXRlbScsXG5cdFx0XHRwbHVyYWw6ICcle2N1cnJlbnRGcm9tfSAtICV7Y3VycmVudFRvfSBvZiAle3RvdGFsQW1vdW50fSBpdGVtcycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaW5ndWxhcjogJ2l0ZW0gcGVyIHBhZ2UnLFxuXHRcdFx0cGx1cmFsOiAnaXRlbXMgcGVyIHBhZ2UnLFxuXHRcdH0pXG5cdF1cbn0pO1xuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9O2A7XG5cblx0cHVibGljIGphdmFzY3JpcHQ0ID0gYHB1YmxpYyBpdGVtc1BlclBhZ2VPcHRpb25zID0gWzEsIDIsIDRdO1xuXG5wdWJsaWMgb25VcGRhdGVJdGVtcyhjb3VudCkge1xuXHR0aGlzLml0ZW1zUGVyUGFnZSA9IGNvdW50O1xuXHR0aGlzLnNlbGVjdEhlcm9lcygpO1xufWA7XG5cblx0cHVibGljIGh0bWwyID0gYDxhdWktaXRlbXMtcGVyLXBhZ2Vcblx0W3NlbGVjdE9wdGlvbnNdPVwiaXRlbXNQZXJQYWdlT3B0aW9uc1wiXG5cdFthbW91bnRQZXJQYWdlXT1cIml0ZW1zUGVyUGFnZVwiXG5cdChyZXR1cm5BbW91bnQpPVwib25VcGRhdGVJdGVtcygkZXZlbnQpXCI+XG48L2F1aS1pdGVtcy1wZXItcGFnZT5cblxuPGF1aS1pdGVtLWNvdW50ZXJcblx0W2N1cnJlbnRQYWdlXT1cImN1cnJlbnRQYWdlXCJcblx0W3RvdGFsQW1vdW50XT1cInRvdGFsVmFsdWVzXCJcblx0W2Ftb3VudFBlclBhZ2VdPVwiaXRlbXNQZXJQYWdlXCI+XG48L2F1aS1pdGVtLWNvdW50ZXI+YDtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zZWxlY3RIZXJvZXMoKTtcblx0fVxuXG5cdHB1YmxpYyBvblVwZGF0ZVBhZ2UocGFnZSkge1xuXHRcdHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuXHRcdHRoaXMuc2VsZWN0SGVyb2VzKCk7XG5cdH1cblxuXHRwdWJsaWMgb25VcGRhdGVJdGVtcyhjb3VudCkge1xuXHRcdHRoaXMuaXRlbXNQZXJQYWdlID0gY291bnQ7XG5cdFx0dGhpcy5zZWxlY3RIZXJvZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0SGVyb2VzKCkge1xuXHRcdHRoaXMudmlzaWJsZUhlcm9lcyA9IHRoaXMuaGVyb2VzLnNsaWNlKCh0aGlzLmN1cnJlbnRQYWdlICogdGhpcy5pdGVtc1BlclBhZ2UpXG5cdFx0XHQtIHRoaXMuaXRlbXNQZXJQYWdlLCAodGhpcy5jdXJyZW50UGFnZSAqIHRoaXMuaXRlbXNQZXJQYWdlKSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IFBhZ2luYXRpb25EZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUGFnZXMgPSBbXG5cdFBhZ2luYXRpb25EZW1vUGFnZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2R1bGUsIEl0ZW1Db3VudGVyTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9wYWdpbmF0aW9uJztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEl0ZW1Db3VudGVyTW9kdWxlLmZvckNoaWxkKHtcblx0XHRcdHNpbmd1bGFyOiAnJXtjdXJyZW50RnJvbX0gLSAle2N1cnJlbnRUb30gb2YgJXt0b3RhbEFtb3VudH0gaXRlbScsXG5cdFx0XHRwbHVyYWw6ICcle2N1cnJlbnRGcm9tfSAtICV7Y3VycmVudFRvfSBvZiAle3RvdGFsQW1vdW50fSBpdGVtcycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaW5ndWxhcjogJ2l0ZW0gcGVyIHBhZ2UnLFxuXHRcdFx0cGx1cmFsOiAnaXRlbXMgcGVyIHBhZ2UnLFxuXHRcdH0pLFxuXHRcdFBhZ2luYXRpb25Nb2R1bGUsXG5cdFx0Q29kZVNuaXBwZXRNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFBhZ2VzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uRXhhbXBsZXNNb2R1bGUge31cbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFBhZ2luYXRpb25EZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUEFHSU5BVElPTl9FWEFNUExFU19ST1VURVM6IFJvdXRlcyA9IFtcblx0e1xuXHRcdHBhdGg6ICcnLFxuXHRcdGNvbXBvbmVudDogUGFnaW5hdGlvbkRlbW9QYWdlQ29tcG9uZW50LFxuXHRcdHBhdGhNYXRjaDogJ2Z1bGwnLFxuXHR9LFxuXTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7MkJBZ0VzQixDQUFDOzRCQUNBLENBQUM7c0JBQ047WUFDaEIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2xCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNwQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDcEIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3JCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4QixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7U0FDcEI7bUNBRTRCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7MkJBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTsyQkFFbEI7Ozs7Ozs7OzJCQVFLOzJCQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeUJwQjtxQkFFYzs7Ozs7OztrQkFPRTsyQkFFSTs7Ozs7Ozs7Ozs7Ozs7OzJCQWVLOzJCQUVMOzs7OztFQUtwQjtxQkFFYzs7Ozs7Ozs7OztvQkFVSTs7Ozs7SUFFWixRQUFRO1FBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOzs7Ozs7SUFHZCxZQUFZLENBQUMsSUFBSTtRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7OztJQUdkLGFBQWEsQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Ozs7SUFHYixZQUFZO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZO2NBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7WUE5Sy9ELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwRFY7YUFDQTs7Ozs7OztBQzlERCx1QkFFYSxLQUFLLEdBQUc7SUFDcEIsMkJBQTJCO0NBQzNCOzs7Ozs7QUNKRDs7O1lBT0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGlCQUFpQixDQUFDLFFBQVEsQ0FBQzt3QkFDMUIsUUFBUSxFQUFFLHNEQUFzRDt3QkFDaEUsTUFBTSxFQUFFLHVEQUF1RDtxQkFDL0QsRUFDRDt3QkFDQyxRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFFLGdCQUFnQjtxQkFDeEIsQ0FBQztvQkFDRixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEtBQUs7aUJBQ0w7YUFDRDs7Ozs7OztBQ3RCRCx1QkFFYSwwQkFBMEIsR0FBVztJQUNqRDtRQUNDLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDJCQUEyQjtRQUN0QyxTQUFTLEVBQUUsTUFBTTtLQUNqQjtDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./examples/progress-bar/fesm2015/progress-bar.js":
/*!********************************************************!*\
  !*** ./examples/progress-bar/fesm2015/progress-bar.js ***!
  \********************************************************/
/*! exports provided: ProgressBarDemoPageComponent, ProgressBarExamplesModule, PROGRESS_BAR_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemoPageComponent", function() { return ProgressBarDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarExamplesModule", function() { return ProgressBarExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_BAR_EXAMPLES_ROUTES", function() { return PROGRESS_BAR_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/progress-bar */ "./dist/progress-bar/fesm5/progress-bar.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressBarDemoPageComponent {
    constructor() {
        this.uploadProgress = 20;
        this.maxValue = 100;
        this.codeExampleJS1 = `import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';

@NgModule({
  imports: [
    ProgressBarModule
  ]
});

export class AppModule {};`;
        this.codeExampleJS2 = `public uploadProgress = 20;
public maxValue = 100;`;
        this.codeExampleHTML = `<aui-progress-bar
  [value]="uploadProgress"
  [max]="maxValue">
</aui-progress-bar>`;
    }
}
ProgressBarDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Progress bar</h1>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleJS1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleJS2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="codeExampleHTML"></aui-code-snippet>
</div>

<div class="a-input">
	<aui-progress-bar
		[value]="uploadProgress"
		[max]="maxValue">
	</aui-progress-bar>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    ProgressBarDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressBarExamplesModule {
}
ProgressBarExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_progress_bar__WEBPACK_IMPORTED_MODULE_2__["ProgressBarModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ PROGRESS_BAR_EXAMPLES_ROUTES = [
    {
        path: '',
        component: ProgressBarDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyL3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyL3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5tb2R1bGUudHMiLCJuZzovL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgPGgxIGNsYXNzPVwiaDMgdS1tYXJnaW4tYm90dG9tXCI+UHJvZ3Jlc3MgYmFyPC9oMT5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlSlMxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlSlMyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImNvZGVFeGFtcGxlSFRNTFwiPjwvYXVpLWNvZGUtc25pcHBldD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiYS1pbnB1dFwiPlxuXHQ8YXVpLXByb2dyZXNzLWJhclxuXHRcdFt2YWx1ZV09XCJ1cGxvYWRQcm9ncmVzc1wiXG5cdFx0W21heF09XCJtYXhWYWx1ZVwiPlxuXHQ8L2F1aS1wcm9ncmVzcy1iYXI+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyRGVtb1BhZ2VDb21wb25lbnQge1xuXG5cdHB1YmxpYyB1cGxvYWRQcm9ncmVzcyA9IDIwO1xuXHRwdWJsaWMgbWF4VmFsdWUgPSAxMDA7XG5cblx0cHVibGljIGNvZGVFeGFtcGxlSlMxID0gYGltcG9ydCB7IFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9wcm9ncmVzcy1iYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJvZ3Jlc3NCYXJNb2R1bGVcbiAgXVxufSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge307YDtcblxuXHRwdWJsaWMgY29kZUV4YW1wbGVKUzIgPSBgcHVibGljIHVwbG9hZFByb2dyZXNzID0gMjA7XG5wdWJsaWMgbWF4VmFsdWUgPSAxMDA7YDtcblxuXHRwdWJsaWMgY29kZUV4YW1wbGVIVE1MID1cbmA8YXVpLXByb2dyZXNzLWJhclxuICBbdmFsdWVdPVwidXBsb2FkUHJvZ3Jlc3NcIlxuICBbbWF4XT1cIm1heFZhbHVlXCI+XG48L2F1aS1wcm9ncmVzcy1iYXI+YDtcbn1cbiIsImltcG9ydCB7IFByb2dyZXNzQmFyRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VzID0gW1xuXHRQcm9ncmVzc0JhckRlbW9QYWdlQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBDb2RlU25pcHBldE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvY29kZS1zbmlwcGV0JztcblxuaW1wb3J0IHsgUGFnZXMgfSBmcm9tICcuL3BhZ2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRQcm9ncmVzc0Jhck1vZHVsZSxcblx0XHRDb2RlU25pcHBldE1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyRXhhbXBsZXNNb2R1bGUge31cbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFByb2dyZXNzQmFyRGVtb1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2RlbW8vZGVtby5wYWdlJztcblxuZXhwb3J0IGNvbnN0IFBST0dSRVNTX0JBUl9FWEFNUExFU19ST1VURVM6IFJvdXRlcyA9IFtcblx0e1xuXHRcdHBhdGg6ICcnLFxuXHRcdGNvbXBvbmVudDogUHJvZ3Jlc3NCYXJEZW1vUGFnZUNvbXBvbmVudCxcblx0XHRwYXRoTWF0Y2g6ICdmdWxsJyxcblx0fSxcbl07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OzhCQTBCeUIsRUFBRTt3QkFDUixHQUFHOzhCQUVHOzs7Ozs7OzsyQkFRRTs4QkFFRjt1QkFDRjsrQkFHdkI7OztvQkFHb0I7Ozs7WUE1Q25CLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQlY7YUFDQTs7Ozs7OztBQ3ZCRCx1QkFFYSxLQUFLLEdBQUc7SUFDcEIsNEJBQTRCO0NBQzVCOzs7Ozs7QUNKRDs7O1lBT0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsaUJBQWlCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsS0FBSztpQkFDTDthQUNEOzs7Ozs7O0FDZEQsdUJBRWEsNEJBQTRCLEdBQVc7SUFDbkQ7UUFDQyxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw0QkFBNEI7UUFDdkMsU0FBUyxFQUFFLE1BQU07S0FDakI7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./examples/selectable-list/fesm2015/selectable-list.js":
/*!**************************************************************!*\
  !*** ./examples/selectable-list/fesm2015/selectable-list.js ***!
  \**************************************************************/
/*! exports provided: SelectableListDemoPageComponent, SelectableListExamplesModule, SELECTABLE_LIST_EXAMPLES_ROUTES, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableListDemoPageComponent", function() { return SelectableListDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableListExamplesModule", function() { return SelectableListExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTABLE_LIST_EXAMPLES_ROUTES", function() { return SELECTABLE_LIST_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_selectable_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-components/selectable-list */ "./dist/selectable-list/fesm5/selectable-list.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectableListDemoPageComponent {
    constructor() {
        this.index = 0;
        this.heroes = [
            { name: 'Spiderman' },
            { name: 'Wolverine' },
            { name: 'Iron man' },
        ];
        this.activeHero = this.heroes[this.index];
        this.javascript1 = `import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';

@NgModule({
	imports: [
		SelectableListModule
	]
});

export class AppModule {};`;
        this.javascript2 = `public index = 0;

public heroes = [
	{ name: 'spiderman' },
	{ name: 'wolverine' },
	{ name: 'ironman' }
];

public activeHero = this.heroes[this.index];

public onSelect(item) {
	this.index = this.heroes.findIndex(hero => hero.name === item.name);
	this.activeHero = item;
}`;
        this.html = `<h4>Select your hero</h4>
<aui-selectable-list [items]="heroes" [index]="index" (selected)="onSelect($event)">
   <ng-template let-item="item">
	   Template for: <b>{{ item.name }}</b>
   </ng-template>
</aui-selectable-list>
<p><strong>Active hero</strong>: {{ activeHero.name }}</p>`;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelect(item) {
        this.index = this.heroes.findIndex(hero => hero.name === item.name);
        this.activeHero = item;
    }
}
SelectableListDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h1 class="h3 u-margin-bottom">Selectable list</h1>
<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript1"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="javascript2"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="html"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<h2 class="h4 u-margin-bottom">Select your hero</h2>
	<aui-selectable-list [items]="heroes" [index]="index" (selected)="onSelect($event)">
		<ng-template let-item="item">
			Template for: <b>{{ item.name }}</b>
		</ng-template>
	</aui-selectable-list>
	<p class="u-margin-top"><strong>Active hero</strong>: {{ activeHero.name }}</p>
</div>
`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    SelectableListDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectableListExamplesModule {
}
SelectableListExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _acpaas_ui_ngx_components_selectable_list__WEBPACK_IMPORTED_MODULE_2__["SelectableListModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ SELECTABLE_LIST_EXAMPLES_ROUTES = [
    {
        path: '',
        component: SelectableListDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1saXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0L3BhZ2VzL2RlbW8vZGVtby5wYWdlLnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0L3BhZ2VzL2luZGV4LnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0L3NlbGVjdGFibGUtbGlzdC5tb2R1bGUudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0LnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgPGgxIGNsYXNzPVwiaDMgdS1tYXJnaW4tYm90dG9tXCI+U2VsZWN0YWJsZSBsaXN0PC9oMT5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQxXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImphdmFzY3JpcHQyXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImh0bWxcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8aDIgY2xhc3M9XCJoNCB1LW1hcmdpbi1ib3R0b21cIj5TZWxlY3QgeW91ciBoZXJvPC9oMj5cblx0PGF1aS1zZWxlY3RhYmxlLWxpc3QgW2l0ZW1zXT1cImhlcm9lc1wiIFtpbmRleF09XCJpbmRleFwiIChzZWxlY3RlZCk9XCJvblNlbGVjdCgkZXZlbnQpXCI+XG5cdFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxuXHRcdFx0VGVtcGxhdGUgZm9yOiA8Yj57eyBpdGVtLm5hbWUgfX08L2I+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0PC9hdWktc2VsZWN0YWJsZS1saXN0PlxuXHQ8cCBjbGFzcz1cInUtbWFyZ2luLXRvcFwiPjxzdHJvbmc+QWN0aXZlIGhlcm88L3N0cm9uZz46IHt7IGFjdGl2ZUhlcm8ubmFtZSB9fTwvcD5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZUxpc3REZW1vUGFnZUNvbXBvbmVudCB7XG5cdHB1YmxpYyBpbmRleCA9IDA7XG5cblx0cHVibGljIGhlcm9lcyA9IFtcblx0XHR7IG5hbWU6ICdTcGlkZXJtYW4nIH0sXG5cdFx0eyBuYW1lOiAnV29sdmVyaW5lJyB9LFxuXHRcdHsgbmFtZTogJ0lyb24gbWFuJyB9LFxuXHRdO1xuXG5cdHB1YmxpYyBhY3RpdmVIZXJvID0gdGhpcy5oZXJvZXNbdGhpcy5pbmRleF07XG5cblx0cHVibGljIGphdmFzY3JpcHQxID0gYGltcG9ydCB7IFNlbGVjdGFibGVMaXN0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9zZWxlY3RhYmxlLWxpc3QnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0U2VsZWN0YWJsZUxpc3RNb2R1bGVcblx0XVxufSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge307YDtcblxuXHRwdWJsaWMgamF2YXNjcmlwdDIgPSBgcHVibGljIGluZGV4ID0gMDtcblxucHVibGljIGhlcm9lcyA9IFtcblx0eyBuYW1lOiAnc3BpZGVybWFuJyB9LFxuXHR7IG5hbWU6ICd3b2x2ZXJpbmUnIH0sXG5cdHsgbmFtZTogJ2lyb25tYW4nIH1cbl07XG5cbnB1YmxpYyBhY3RpdmVIZXJvID0gdGhpcy5oZXJvZXNbdGhpcy5pbmRleF07XG5cbnB1YmxpYyBvblNlbGVjdChpdGVtKSB7XG5cdHRoaXMuaW5kZXggPSB0aGlzLmhlcm9lcy5maW5kSW5kZXgoaGVybyA9PiBoZXJvLm5hbWUgPT09IGl0ZW0ubmFtZSk7XG5cdHRoaXMuYWN0aXZlSGVybyA9IGl0ZW07XG59YDtcblxuXHRwdWJsaWMgaHRtbCA9IGA8aDQ+U2VsZWN0IHlvdXIgaGVybzwvaDQ+XG48YXVpLXNlbGVjdGFibGUtbGlzdCBbaXRlbXNdPVwiaGVyb2VzXCIgW2luZGV4XT1cImluZGV4XCIgKHNlbGVjdGVkKT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cblx0ICAgVGVtcGxhdGUgZm9yOiA8Yj57eyBpdGVtLm5hbWUgfX08L2I+XG4gICA8L25nLXRlbXBsYXRlPlxuPC9hdWktc2VsZWN0YWJsZS1saXN0PlxuPHA+PHN0cm9uZz5BY3RpdmUgaGVybzwvc3Ryb25nPjoge3sgYWN0aXZlSGVyby5uYW1lIH19PC9wPmA7XG5cblx0cHVibGljIG9uU2VsZWN0KGl0ZW0pIHtcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5oZXJvZXMuZmluZEluZGV4KGhlcm8gPT4gaGVyby5uYW1lID09PSBpdGVtLm5hbWUpO1xuXHRcdHRoaXMuYWN0aXZlSGVybyA9IGl0ZW07XG5cdH1cblxufVxuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZUxpc3REZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgUGFnZXMgPSBbXG5cdFNlbGVjdGFibGVMaXN0RGVtb1BhZ2VDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWxlY3RhYmxlTGlzdE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvc2VsZWN0YWJsZS1saXN0JztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFNlbGVjdGFibGVMaXN0TW9kdWxlLFxuXHRcdENvZGVTbmlwcGV0TW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRQYWdlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZUxpc3RFeGFtcGxlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZUxpc3REZW1vUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZGVtby9kZW1vLnBhZ2UnO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUQUJMRV9MSVNUX0VYQU1QTEVTX1JPVVRFUzogUm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJycsXG5cdFx0Y29tcG9uZW50OiBTZWxlY3RhYmxlTGlzdERlbW9QYWdlQ29tcG9uZW50LFxuXHRcdHBhdGhNYXRjaDogJ2Z1bGwnLFxuXHR9LFxuXTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7cUJBNEJnQixDQUFDO3NCQUVBO1lBQ2YsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3JCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUNyQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7U0FDcEI7MEJBRW1CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzsyQkFFdEI7Ozs7Ozs7OzJCQVFLOzJCQUVMOzs7Ozs7Ozs7Ozs7O0VBYXBCO29CQUVhOzs7Ozs7MkRBTTRDOzs7Ozs7SUFFbkQsUUFBUSxDQUFDLElBQUk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7WUF2RXhCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzQlY7YUFDQTs7Ozs7OztBQzFCRCx1QkFFYSxLQUFLLEdBQUc7SUFDcEIsK0JBQStCO0NBQy9COzs7Ozs7QUNKRDs7O1lBT0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLG9CQUFvQjtvQkFDcEIsaUJBQWlCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsS0FBSztpQkFDTDthQUNEOzs7Ozs7O0FDZEQsdUJBRWEsK0JBQStCLEdBQVc7SUFDdEQ7UUFDQyxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSwrQkFBK0I7UUFDMUMsU0FBUyxFQUFFLE1BQU07S0FDakI7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./examples/table/fesm2015/table.js":
/*!******************************************!*\
  !*** ./examples/table/fesm2015/table.js ***!
  \******************************************/
/*! exports provided: TableActionComponent, TableDemoPageComponent, TableExamplesModule, TABLE_EXAMPLES_ROUTES, ɵb, ɵc, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableActionComponent", function() { return TableActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDemoPageComponent", function() { return TableDemoPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableExamplesModule", function() { return TableExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_EXAMPLES_ROUTES", function() { return TABLE_EXAMPLES_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return EntryComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Pages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acpaas_ui_ngx_components_flyout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/flyout */ "./dist/flyout/fesm5/flyout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acpaas_ui_ngx_components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-components/table */ "./dist/table/fesm5/table.js");
/* harmony import */ var _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acpaas-ui/ngx-components/code-snippet */ "./dist/code-snippet/fesm5/code-snippet.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TableActionComponent {
    constructor() {
        this.size = _acpaas_ui_ngx_components_flyout__WEBPACK_IMPORTED_MODULE_1__["FlyoutSize"].Medium;
    }
}
TableActionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `
		<button class="a-button has-icon" title="View {{ data?.firstName }}'s profile">
			<span class="fa fa-eye"></span>
		</button>
	`,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TableDemoPageComponent {
    /**
     * @param {?} datePipe
     */
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.columns = [
            {
                label: '#',
                value: 'id',
            },
            {
                label: 'First Name',
                value: 'firstName',
            },
            {
                label: 'Last Name',
                value: 'lastName',
            },
            {
                label: 'Registered',
                value: 'registeredAt',
                format: (value) => this.datePipe.transform(value, 'dd/MM/yyyy'),
            },
            {
                label: 'Actions',
                component: TableActionComponent,
            },
        ];
        this.rows = [
            {
                "id": 0,
                "firstName": "Wyatt",
                "lastName": "Cooper",
                "registeredAt": "Sat Feb 07 1981 01:04:46 GMT+0000 (UTC)"
            },
            {
                "id": 1,
                "firstName": "Mullen",
                "lastName": "Ballard",
                "registeredAt": "Fri Aug 31 2001 06:47:22 GMT+0000 (UTC)"
            },
            {
                "id": 2,
                "firstName": "Sonia",
                "lastName": "Bass",
                "registeredAt": "Sat Jul 12 1975 16:00:43 GMT+0000 (UTC)"
            },
            {
                "id": 3,
                "firstName": "Kristen",
                "lastName": "Moore",
                "registeredAt": "Mon Nov 09 2015 16:11:21 GMT+0000 (UTC)"
            },
            {
                "id": 4,
                "firstName": "Moss",
                "lastName": "Bowen",
                "registeredAt": "Thu Aug 04 1977 05:52:52 GMT+0000 (UTC)"
            },
            {
                "id": 5,
                "firstName": "Elaine",
                "lastName": "Michael",
                "registeredAt": "Wed Mar 30 1977 01:48:30 GMT+0000 (UTC)"
            },
            {
                "id": 6,
                "firstName": "Jerri",
                "lastName": "Hicks",
                "registeredAt": "Wed Jul 10 2013 22:53:48 GMT+0000 (UTC)"
            },
            {
                "id": 7,
                "firstName": "Sharron",
                "lastName": "Castro",
                "registeredAt": "Mon Sep 27 1976 07:55:10 GMT+0000 (UTC)"
            },
            {
                "id": 8,
                "firstName": "Harriett",
                "lastName": "Horton",
                "registeredAt": "Wed Aug 18 2010 14:06:33 GMT+0000 (UTC)"
            },
            {
                "id": 9,
                "firstName": "Griffin",
                "lastName": "Navarro",
                "registeredAt": "Tue Oct 24 2017 23:45:35 GMT+0000 (UTC)"
            }
        ];
        this.importModule = 'import { TableModule } from \'@acpaas-ui/ngx-components/table\';';
        this.exampleComp = `
import { Component } from '@angular/core';
import { Cell } from '@acpaas-ui/ngx-components/table';

@Component({
	template: \`
		<button class="a-button has-icon" title="View {{ data?.firstName }}'s profile">
			<span class="fa fa-eye"></span>
		</button>
	\`,
})
export class TableActionComponent implements Cell {
	public data: any;
}
	`;
        this.exampleCols = `
public columns: TableColumn[] = [
	{
		label: '#',
		value: 'id',
	},
	{
		label: 'First Name',
		value: 'firstName',
	},
	{
		label: 'Last Name',
		value: 'lastName',
	},
	{
		label: 'Registered',
		value: 'registeredAt',
		format: (value) => this.datePipe.transform(value, 'dd/MM/yyyy'),
	},
	{
		label: 'Actions',
		component: TableActionComponent,
	},
];
	`;
        this.exampleHTML = `
<aui-table [columns]="columns" [rows]="rows"></aui-table>
	`;
    }
}
TableDemoPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: `<h3 class="u-margin-bottom">Table demo</h3>

<div class="u-margin-bottom">
	<aui-code-snippet [codeSnippet]="importModule"></aui-code-snippet>
</div>

<div class="u-margin-bottom">
	<div class="u-margin-bottom-xs">
		<aui-table [columns]="columns" [rows]="rows"></aui-table>
	</div>
	<aui-code-snippet [codeSnippet]="exampleComp"></aui-code-snippet>
	<aui-code-snippet [codeSnippet]="exampleCols"></aui-code-snippet>
	<aui-code-snippet [codeSnippet]="exampleHTML"></aui-code-snippet>
</div>

`,
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                ],
            },] },
];
/** @nocollapse */
TableDemoPageComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Pages = [
    TableDemoPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    TableActionComponent,
];
const /** @type {?} */ EntryComponents = [
    TableActionComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TableExamplesModule {
}
TableExamplesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _acpaas_ui_ngx_components_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                    _acpaas_ui_ngx_components_code_snippet__WEBPACK_IMPORTED_MODULE_4__["CodeSnippetModule"],
                ],
                declarations: [
                    Pages,
                    Components,
                ],
                entryComponents: [
                    EntryComponents,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ TABLE_EXAMPLES_ROUTES = [
    {
        path: '',
        component: TableDemoPageComponent,
        pathMatch: 'full',
    },
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL3RhYmxlL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtYWN0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vdGFibGUvdGFibGUvcGFnZXMvZGVtby9kZW1vLnBhZ2UudHMiLCJuZzovL3RhYmxlL3RhYmxlL3BhZ2VzL2luZGV4LnRzIiwibmc6Ly90YWJsZS90YWJsZS9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly90YWJsZS90YWJsZS90YWJsZS5tb2R1bGUudHMiLCJuZzovL3RhYmxlL3RhYmxlL3RhYmxlLnJvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGwgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3RhYmxlJztcbmltcG9ydCB7IEZseW91dFNpemUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2ZseW91dCc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvbiBoYXMtaWNvblwiIHRpdGxlPVwiVmlldyB7eyBkYXRhPy5maXJzdE5hbWUgfX0ncyBwcm9maWxlXCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvc3Bhbj5cblx0XHQ8L2J1dHRvbj5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBDZWxsIHtcblx0cHVibGljIGRhdGE6IGFueTtcblx0cHVibGljIHNpemU6IEZseW91dFNpemUgPSBGbHlvdXRTaXplLk1lZGl1bTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUYWJsZUNvbHVtbiB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdGFibGUnO1xuaW1wb3J0IHsgVGFibGVBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhYmxlLWFjdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGA8aDMgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5UYWJsZSBkZW1vPC9oMz5cblxuPGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbVwiPlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiaW1wb3J0TW9kdWxlXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1LW1hcmdpbi1ib3R0b21cIj5cblx0PGRpdiBjbGFzcz1cInUtbWFyZ2luLWJvdHRvbS14c1wiPlxuXHRcdDxhdWktdGFibGUgW2NvbHVtbnNdPVwiY29sdW1uc1wiIFtyb3dzXT1cInJvd3NcIj48L2F1aS10YWJsZT5cblx0PC9kaXY+XG5cdDxhdWktY29kZS1zbmlwcGV0IFtjb2RlU25pcHBldF09XCJleGFtcGxlQ29tcFwiPjwvYXVpLWNvZGUtc25pcHBldD5cblx0PGF1aS1jb2RlLXNuaXBwZXQgW2NvZGVTbmlwcGV0XT1cImV4YW1wbGVDb2xzXCI+PC9hdWktY29kZS1zbmlwcGV0PlxuXHQ8YXVpLWNvZGUtc25pcHBldCBbY29kZVNuaXBwZXRdPVwiZXhhbXBsZUhUTUxcIj48L2F1aS1jb2RlLXNuaXBwZXQ+XG48L2Rpdj5cblxuYCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RGF0ZVBpcGUsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRGVtb1BhZ2VDb21wb25lbnQge1xuXHRwdWJsaWMgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtcblx0XHR7XG5cdFx0XHRsYWJlbDogJyMnLFxuXHRcdFx0dmFsdWU6ICdpZCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ0ZpcnN0IE5hbWUnLFxuXHRcdFx0dmFsdWU6ICdmaXJzdE5hbWUnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICdMYXN0IE5hbWUnLFxuXHRcdFx0dmFsdWU6ICdsYXN0TmFtZScsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ1JlZ2lzdGVyZWQnLFxuXHRcdFx0dmFsdWU6ICdyZWdpc3RlcmVkQXQnLFxuXHRcdFx0Zm9ybWF0OiAodmFsdWUpID0+IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCAnZGQvTU0veXl5eScpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICdBY3Rpb25zJyxcblx0XHRcdGNvbXBvbmVudDogVGFibGVBY3Rpb25Db21wb25lbnQsXG5cdFx0fSxcblx0XTtcblx0LyogdHNsaW50OmRpc2FibGUgKi9cblx0cHVibGljIHJvd3MgPSBbXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAwLFxuXHRcdFx0XCJmaXJzdE5hbWVcIjogXCJXeWF0dFwiLFxuXHRcdFx0XCJsYXN0TmFtZVwiOiBcIkNvb3BlclwiLFxuXHRcdFx0XCJyZWdpc3RlcmVkQXRcIjogXCJTYXQgRmViIDA3IDE5ODEgMDE6MDQ6NDYgR01UKzAwMDAgKFVUQylcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAxLFxuXHRcdFx0XCJmaXJzdE5hbWVcIjogXCJNdWxsZW5cIixcblx0XHRcdFwibGFzdE5hbWVcIjogXCJCYWxsYXJkXCIsXG5cdFx0XHRcInJlZ2lzdGVyZWRBdFwiOiBcIkZyaSBBdWcgMzEgMjAwMSAwNjo0NzoyMiBHTVQrMDAwMCAoVVRDKVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDIsXG5cdFx0XHRcImZpcnN0TmFtZVwiOiBcIlNvbmlhXCIsXG5cdFx0XHRcImxhc3ROYW1lXCI6IFwiQmFzc1wiLFxuXHRcdFx0XCJyZWdpc3RlcmVkQXRcIjogXCJTYXQgSnVsIDEyIDE5NzUgMTY6MDA6NDMgR01UKzAwMDAgKFVUQylcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiAzLFxuXHRcdFx0XCJmaXJzdE5hbWVcIjogXCJLcmlzdGVuXCIsXG5cdFx0XHRcImxhc3ROYW1lXCI6IFwiTW9vcmVcIixcblx0XHRcdFwicmVnaXN0ZXJlZEF0XCI6IFwiTW9uIE5vdiAwOSAyMDE1IDE2OjExOjIxIEdNVCswMDAwIChVVEMpXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogNCxcblx0XHRcdFwiZmlyc3ROYW1lXCI6IFwiTW9zc1wiLFxuXHRcdFx0XCJsYXN0TmFtZVwiOiBcIkJvd2VuXCIsXG5cdFx0XHRcInJlZ2lzdGVyZWRBdFwiOiBcIlRodSBBdWcgMDQgMTk3NyAwNTo1Mjo1MiBHTVQrMDAwMCAoVVRDKVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDUsXG5cdFx0XHRcImZpcnN0TmFtZVwiOiBcIkVsYWluZVwiLFxuXHRcdFx0XCJsYXN0TmFtZVwiOiBcIk1pY2hhZWxcIixcblx0XHRcdFwicmVnaXN0ZXJlZEF0XCI6IFwiV2VkIE1hciAzMCAxOTc3IDAxOjQ4OjMwIEdNVCswMDAwIChVVEMpXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogNixcblx0XHRcdFwiZmlyc3ROYW1lXCI6IFwiSmVycmlcIixcblx0XHRcdFwibGFzdE5hbWVcIjogXCJIaWNrc1wiLFxuXHRcdFx0XCJyZWdpc3RlcmVkQXRcIjogXCJXZWQgSnVsIDEwIDIwMTMgMjI6NTM6NDggR01UKzAwMDAgKFVUQylcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiA3LFxuXHRcdFx0XCJmaXJzdE5hbWVcIjogXCJTaGFycm9uXCIsXG5cdFx0XHRcImxhc3ROYW1lXCI6IFwiQ2FzdHJvXCIsXG5cdFx0XHRcInJlZ2lzdGVyZWRBdFwiOiBcIk1vbiBTZXAgMjcgMTk3NiAwNzo1NToxMCBHTVQrMDAwMCAoVVRDKVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDgsXG5cdFx0XHRcImZpcnN0TmFtZVwiOiBcIkhhcnJpZXR0XCIsXG5cdFx0XHRcImxhc3ROYW1lXCI6IFwiSG9ydG9uXCIsXG5cdFx0XHRcInJlZ2lzdGVyZWRBdFwiOiBcIldlZCBBdWcgMTggMjAxMCAxNDowNjozMyBHTVQrMDAwMCAoVVRDKVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IDksXG5cdFx0XHRcImZpcnN0TmFtZVwiOiBcIkdyaWZmaW5cIixcblx0XHRcdFwibGFzdE5hbWVcIjogXCJOYXZhcnJvXCIsXG5cdFx0XHRcInJlZ2lzdGVyZWRBdFwiOiBcIlR1ZSBPY3QgMjQgMjAxNyAyMzo0NTozNSBHTVQrMDAwMCAoVVRDKVwiXG5cdFx0fVxuXHRdO1xuXHRwdWJsaWMgaW1wb3J0TW9kdWxlID0gJ2ltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSBcXCdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3RhYmxlXFwnOyc7XG5cdHB1YmxpYyBleGFtcGxlQ29tcCA9IGBcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdGFibGUnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IFxcYFxuXHRcdDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvbiBoYXMtaWNvblwiIHRpdGxlPVwiVmlldyB7eyBkYXRhPy5maXJzdE5hbWUgfX0ncyBwcm9maWxlXCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvc3Bhbj5cblx0XHQ8L2J1dHRvbj5cblx0XFxgLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENlbGwge1xuXHRwdWJsaWMgZGF0YTogYW55O1xufVxuXHRgO1xuXHRwdWJsaWMgZXhhbXBsZUNvbHMgPSBgXG5wdWJsaWMgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtcblx0e1xuXHRcdGxhYmVsOiAnIycsXG5cdFx0dmFsdWU6ICdpZCcsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0ZpcnN0IE5hbWUnLFxuXHRcdHZhbHVlOiAnZmlyc3ROYW1lJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnTGFzdCBOYW1lJyxcblx0XHR2YWx1ZTogJ2xhc3ROYW1lJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnUmVnaXN0ZXJlZCcsXG5cdFx0dmFsdWU6ICdyZWdpc3RlcmVkQXQnLFxuXHRcdGZvcm1hdDogKHZhbHVlKSA9PiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgJ2RkL01NL3l5eXknKSxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQWN0aW9ucycsXG5cdFx0Y29tcG9uZW50OiBUYWJsZUFjdGlvbkNvbXBvbmVudCxcblx0fSxcbl07XG5cdGA7XG5cdHB1YmxpYyBleGFtcGxlSFRNTCA9IGBcbjxhdWktdGFibGUgW2NvbHVtbnNdPVwiY29sdW1uc1wiIFtyb3dzXT1cInJvd3NcIj48L2F1aS10YWJsZT5cblx0YDtcblx0LyogdHNsaW50OmVuYWJsZSAqL1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlXG5cdCkgeyB9XG59XG4iLCJpbXBvcnQgeyBUYWJsZURlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBQYWdlcyA9IFtcblx0VGFibGVEZW1vUGFnZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBUYWJsZUFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtYWN0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRUYWJsZUFjdGlvbkNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBFbnRyeUNvbXBvbmVudHMgPSBbXG5cdFRhYmxlQWN0aW9uQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3RhYmxlJztcbmltcG9ydCB7IENvZGVTbmlwcGV0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9jb2RlLXNuaXBwZXQnO1xuXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4vcGFnZXMvaW5kZXgnO1xuaW1wb3J0IHsgQ29tcG9uZW50cywgRW50cnlDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRUYWJsZU1vZHVsZSxcblx0XHRDb2RlU25pcHBldE1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UGFnZXMsXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RW50cnlDb21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUV4YW1wbGVzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUYWJsZURlbW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9kZW1vL2RlbW8ucGFnZSc7XG5cbmV4cG9ydCBjb25zdCBUQUJMRV9FWEFNUExFU19ST1VURVM6IFJvdXRlcyA9IFtcblx0e1xuXHRcdHBhdGg6ICcnLFxuXHRcdGNvbXBvbmVudDogVGFibGVEZW1vUGFnZUNvbXBvbmVudCxcblx0XHRwYXRoTWF0Y2g6ICdmdWxsJyxcblx0fSxcbl07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztvQkFhMkIsVUFBVSxDQUFDLE1BQU07Ozs7WUFUM0MsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7OztFQUlUO2FBQ0Q7Ozs7Ozs7QUNWRDs7OztJQWdLQyxZQUNTO1FBQUEsYUFBUSxHQUFSLFFB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

/***/ }),

/***/ "./node_modules/leaflet-draw/dist/leaflet.draw.css":
/*!*********************************************************!*\
  !*** ./node_modules/leaflet-draw/dist/leaflet.draw.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../raw-loader!../../postcss-loader/lib??embedded!./leaflet.draw.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/leaflet-draw/dist/leaflet.draw.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../raw-loader!../../postcss-loader/lib??embedded!./leaflet.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/leaflet/dist/leaflet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/leaflet-draw/dist/leaflet.draw.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/leaflet-draw/dist/leaflet.draw.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leaflet-draw-section{position:relative}.leaflet-draw-toolbar{margin-top:12px}.leaflet-draw-toolbar-top{margin-top:0}.leaflet-draw-toolbar-notop a:first-child{border-top-right-radius:0}.leaflet-draw-toolbar-nobottom a:last-child{border-bottom-right-radius:0}.leaflet-draw-toolbar a{background-image:url('data:image/png;base64,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');background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3Csvg   xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22   xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22   xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22   xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22   xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22   xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22   viewBox%3D%220 0 600 60%22   height%3D%2260%22   width%3D%22600%22   id%3D%22svg4225%22   version%3D%221.1%22   inkscape%3Aversion%3D%220.91 r13725%22   sodipodi%3Adocname%3D%22spritesheet.svg%22   inkscape%3Aexport-filename%3D%22%2Fhome%2Ffpuga%2Fdevelopment%2Fupstream%2Ficarto.Leaflet.draw%2Fsrc%2Fimages%2Fspritesheet-2x.png%22   inkscape%3Aexport-xdpi%3D%2290%22   inkscape%3Aexport-ydpi%3D%2290%22%3E  %3Cmetadata     id%3D%22metadata4258%22%3E    %3Crdf%3ARDF%3E      %3Ccc%3AWork         rdf%3Aabout%3D%22%22%3E        %3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E        %3Cdc%3Atype           rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22 %2F%3E        %3Cdc%3Atitle %2F%3E      %3C%2Fcc%3AWork%3E    %3C%2Frdf%3ARDF%3E  %3C%2Fmetadata%3E  %3Cdefs     id%3D%22defs4256%22 %2F%3E  %3Csodipodi%3Anamedview     pagecolor%3D%22%23ffffff%22     bordercolor%3D%22%23666666%22     borderopacity%3D%221%22     objecttolerance%3D%2210%22     gridtolerance%3D%2210%22     guidetolerance%3D%2210%22     inkscape%3Apageopacity%3D%220%22     inkscape%3Apageshadow%3D%222%22     inkscape%3Awindow-width%3D%221920%22     inkscape%3Awindow-height%3D%221056%22     id%3D%22namedview4254%22     showgrid%3D%22false%22     inkscape%3Azoom%3D%221.3101852%22     inkscape%3Acx%3D%22237.56928%22     inkscape%3Acy%3D%227.2419621%22     inkscape%3Awindow-x%3D%221920%22     inkscape%3Awindow-y%3D%2224%22     inkscape%3Awindow-maximized%3D%221%22     inkscape%3Acurrent-layer%3D%22svg4225%22 %2F%3E  %3Cg     id%3D%22enabled%22     style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22%3E    %3Cg       id%3D%22polyline%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22%3E      %3Cpath         d%3D%22m 18%2C36 0%2C6 6%2C0 0%2C-6 -6%2C0 z m 4%2C4 -2%2C0 0%2C-2 2%2C0 0%2C2 z%22         id%3D%22path4229%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 36%2C18 0%2C6 6%2C0 0%2C-6 -6%2C0 z m 4%2C4 -2%2C0 0%2C-2 2%2C0 0%2C2 z%22         id%3D%22path4231%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 23.142%2C39.145 -2.285%2C-2.29 16%2C-15.998 2.285%2C2.285 z%22         id%3D%22path4233%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3C%2Fg%3E    %3Cpath       id%3D%22polygon%22       d%3D%22M 100%2C24.565 97.904%2C39.395 83.07%2C42 76%2C28.773 86.463%2C18 Z%22       inkscape%3Aconnector-curvature%3D%220%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3Cpath       id%3D%22rectangle%22       d%3D%22m 140%2C20 20%2C0 0%2C20 -20%2C0 z%22       inkscape%3Aconnector-curvature%3D%220%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3Cpath       id%3D%22circle%22       d%3D%22m 221%2C30 c 0%2C6.078 -4.926%2C11 -11%2C11 -6.074%2C0 -11%2C-4.922 -11%2C-11 0%2C-6.074 4.926%2C-11 11%2C-11 6.074%2C0 11%2C4.926 11%2C11 z%22       inkscape%3Aconnector-curvature%3D%220%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3Cpath       id%3D%22marker%22       d%3D%22m 270%2C19 c -4.971%2C0 -9%2C4.029 -9%2C9 0%2C4.971 5.001%2C12 9%2C14 4.001%2C-2 9%2C-9.029 9%2C-14 0%2C-4.971 -4.029%2C-9 -9%2C-9 z m 0%2C12.5 c -2.484%2C0 -4.5%2C-2.014 -4.5%2C-4.5 0%2C-2.484 2.016%2C-4.5 4.5%2C-4.5 2.485%2C0 4.5%2C2.016 4.5%2C4.5 0%2C2.486 -2.015%2C4.5 -4.5%2C4.5 z%22       inkscape%3Aconnector-curvature%3D%220%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3Cg       id%3D%22edit%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22%3E      %3Cpath         d%3D%22m 337%2C30.156 0%2C0.407 0%2C5.604 c 0%2C1.658 -1.344%2C3 -3%2C3 l -10%2C0 c -1.655%2C0 -3%2C-1.342 -3%2C-3 l 0%2C-10 c 0%2C-1.657 1.345%2C-3 3%2C-3 l 6.345%2C0 3.19%2C-3.17 -9.535%2C0 c -3.313%2C0 -6%2C2.687 -6%2C6 l 0%2C10 c 0%2C3.313 2.687%2C6 6%2C6 l 10%2C0 c 3.314%2C0 6%2C-2.687 6%2C-6 l 0%2C-8.809 -3%2C2.968%22         id%3D%22path4240%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 338.72%2C24.637 -8.892%2C8.892 -2.828%2C0 0%2C-2.829 8.89%2C-8.89 z%22         id%3D%22path4242%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 338.697%2C17.826 4%2C0 0%2C4 -4%2C0 z%22         transform%3D%22matrix(-0.70698336%2C-0.70723018%2C0.70723018%2C-0.70698336%2C567.55917%2C274.78273)%22         id%3D%22path4244%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3C%2Fg%3E    %3Cg       id%3D%22remove%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22%3E      %3Cpath         d%3D%22m 381%2C42 18%2C0 0%2C-18 -18%2C0 0%2C18 z m 14%2C-16 2%2C0 0%2C14 -2%2C0 0%2C-14 z m -4%2C0 2%2C0 0%2C14 -2%2C0 0%2C-14 z m -4%2C0 2%2C0 0%2C14 -2%2C0 0%2C-14 z m -4%2C0 2%2C0 0%2C14 -2%2C0 0%2C-14 z%22         id%3D%22path4247%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 395%2C20 0%2C-4 -10%2C0 0%2C4 -6%2C0 0%2C2 22%2C0 0%2C-2 -6%2C0 z m -2%2C0 -6%2C0 0%2C-2 6%2C0 0%2C2 z%22         id%3D%22path4249%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3C%2Fg%3E  %3C%2Fg%3E  %3Cg     id%3D%22disabled%22     transform%3D%22translate(120%2C0)%22     style%3D%22fill%3A%23bbbbbb%22%3E    %3Cuse       xlink%3Ahref%3D%22%23edit%22       id%3D%22edit-disabled%22       x%3D%220%22       y%3D%220%22       width%3D%22100%25%22       height%3D%22100%25%22 %2F%3E    %3Cuse       xlink%3Ahref%3D%22%23remove%22       id%3D%22remove-disabled%22       x%3D%220%22       y%3D%220%22       width%3D%22100%25%22       height%3D%22100%25%22 %2F%3E  %3C%2Fg%3E  %3Cpath     style%3D%22fill%3Anone%3Bstroke%3A%23464646%3Bstroke-width%3A2%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22     id%3D%22circle-3%22     d%3D%22m 581.65725%2C30 c 0%2C6.078 -4.926%2C11 -11%2C11 -6.074%2C0 -11%2C-4.922 -11%2C-11 0%2C-6.074 4.926%2C-11 11%2C-11 6.074%2C0 11%2C4.926 11%2C11 z%22     inkscape%3Aconnector-curvature%3D%220%22 %2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-size:300px 30px;background-clip:padding-box}.leaflet-retina .leaflet-draw-toolbar a{background-image:url('data:image/png;base64,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');background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3Csvg   xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22   xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22   xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22   xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22   xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22   xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22   viewBox%3D%220 0 600 60%22   height%3D%2260%22   width%3D%22600%22   id%3D%22svg4225%22   version%3D%221.1%22   inkscape%3Aversion%3D%220.91 r13725%22   sodipodi%3Adocname%3D%22spritesheet.svg%22   inkscape%3Aexport-filename%3D%22%2Fhome%2Ffpuga%2Fdevelopment%2Fupstream%2Ficarto.Leaflet.draw%2Fsrc%2Fimages%2Fspritesheet-2x.png%22   inkscape%3Aexport-xdpi%3D%2290%22   inkscape%3Aexport-ydpi%3D%2290%22%3E  %3Cmetadata     id%3D%22metadata4258%22%3E    %3Crdf%3ARDF%3E      %3Ccc%3AWork         rdf%3Aabout%3D%22%22%3E        %3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E        %3Cdc%3Atype           rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22 %2F%3E        %3Cdc%3Atitle %2F%3E      %3C%2Fcc%3AWork%3E    %3C%2Frdf%3ARDF%3E  %3C%2Fmetadata%3E  %3Cdefs     id%3D%22defs4256%22 %2F%3E  %3Csodipodi%3Anamedview     pagecolor%3D%22%23ffffff%22     bordercolor%3D%22%23666666%22     borderopacity%3D%221%22     objecttolerance%3D%2210%22     gridtolerance%3D%2210%22     guidetolerance%3D%2210%22     inkscape%3Apageopacity%3D%220%22     inkscape%3Apageshadow%3D%222%22     inkscape%3Awindow-width%3D%221920%22     inkscape%3Awindow-height%3D%221056%22     id%3D%22namedview4254%22     showgrid%3D%22false%22     inkscape%3Azoom%3D%221.3101852%22     inkscape%3Acx%3D%22237.56928%22     inkscape%3Acy%3D%227.2419621%22     inkscape%3Awindow-x%3D%221920%22     inkscape%3Awindow-y%3D%2224%22     inkscape%3Awindow-maximized%3D%221%22     inkscape%3Acurrent-layer%3D%22svg4225%22 %2F%3E  %3Cg     id%3D%22enabled%22     style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22%3E    %3Cg       id%3D%22polyline%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22%3E      %3Cpath         d%3D%22m 18%2C36 0%2C6 6%2C0 0%2C-6 -6%2C0 z m 4%2C4 -2%2C0 0%2C-2 2%2C0 0%2C2 z%22         id%3D%22path4229%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 36%2C18 0%2C6 6%2C0 0%2C-6 -6%2C0 z m 4%2C4 -2%2C0 0%2C-2 2%2C0 0%2C2 z%22         id%3D%22path4231%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 23.142%2C39.145 -2.285%2C-2.29 16%2C-15.998 2.285%2C2.285 z%22         id%3D%22path4233%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3C%2Fg%3E    %3Cpath       id%3D%22polygon%22       d%3D%22M 100%2C24.565 97.904%2C39.395 83.07%2C42 76%2C28.773 86.463%2C18 Z%22       inkscape%3Aconnector-curvature%3D%220%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3Cpath       id%3D%22rectangle%22       d%3D%22m 140%2C20 20%2C0 0%2C20 -20%2C0 z%22       inkscape%3Aconnector-curvature%3D%220%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3Cpath       id%3D%22circle%22       d%3D%22m 221%2C30 c 0%2C6.078 -4.926%2C11 -11%2C11 -6.074%2C0 -11%2C-4.922 -11%2C-11 0%2C-6.074 4.926%2C-11 11%2C-11 6.074%2C0 11%2C4.926 11%2C11 z%22       inkscape%3Aconnector-curvature%3D%220%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3Cpath       id%3D%22marker%22       d%3D%22m 270%2C19 c -4.971%2C0 -9%2C4.029 -9%2C9 0%2C4.971 5.001%2C12 9%2C14 4.001%2C-2 9%2C-9.029 9%2C-14 0%2C-4.971 -4.029%2C-9 -9%2C-9 z m 0%2C12.5 c -2.484%2C0 -4.5%2C-2.014 -4.5%2C-4.5 0%2C-2.484 2.016%2C-4.5 4.5%2C-4.5 2.485%2C0 4.5%2C2.016 4.5%2C4.5 0%2C2.486 -2.015%2C4.5 -4.5%2C4.5 z%22       inkscape%3Aconnector-curvature%3D%220%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3Cg       id%3D%22edit%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22%3E      %3Cpath         d%3D%22m 337%2C30.156 0%2C0.407 0%2C5.604 c 0%2C1.658 -1.344%2C3 -3%2C3 l -10%2C0 c -1.655%2C0 -3%2C-1.342 -3%2C-3 l 0%2C-10 c 0%2C-1.657 1.345%2C-3 3%2C-3 l 6.345%2C0 3.19%2C-3.17 -9.535%2C0 c -3.313%2C0 -6%2C2.687 -6%2C6 l 0%2C10 c 0%2C3.313 2.687%2C6 6%2C6 l 10%2C0 c 3.314%2C0 6%2C-2.687 6%2C-6 l 0%2C-8.809 -3%2C2.968%22         id%3D%22path4240%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 338.72%2C24.637 -8.892%2C8.892 -2.828%2C0 0%2C-2.829 8.89%2C-8.89 z%22         id%3D%22path4242%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 338.697%2C17.826 4%2C0 0%2C4 -4%2C0 z%22         transform%3D%22matrix(-0.70698336%2C-0.70723018%2C0.70723018%2C-0.70698336%2C567.55917%2C274.78273)%22         id%3D%22path4244%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3C%2Fg%3E    %3Cg       id%3D%22remove%22       style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22%3E      %3Cpath         d%3D%22m 381%2C42 18%2C0 0%2C-18 -18%2C0 0%2C18 z m 14%2C-16 2%2C0 0%2C14 -2%2C0 0%2C-14 z m -4%2C0 2%2C0 0%2C14 -2%2C0 0%2C-14 z m -4%2C0 2%2C0 0%2C14 -2%2C0 0%2C-14 z m -4%2C0 2%2C0 0%2C14 -2%2C0 0%2C-14 z%22         id%3D%22path4247%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E      %3Cpath         d%3D%22m 395%2C20 0%2C-4 -10%2C0 0%2C4 -6%2C0 0%2C2 22%2C0 0%2C-2 -6%2C0 z m -2%2C0 -6%2C0 0%2C-2 6%2C0 0%2C2 z%22         id%3D%22path4249%22         inkscape%3Aconnector-curvature%3D%220%22         style%3D%22fill%3A%23464646%3Bfill-opacity%3A1%22 %2F%3E    %3C%2Fg%3E  %3C%2Fg%3E  %3Cg     id%3D%22disabled%22     transform%3D%22translate(120%2C0)%22     style%3D%22fill%3A%23bbbbbb%22%3E    %3Cuse       xlink%3Ahref%3D%22%23edit%22       id%3D%22edit-disabled%22       x%3D%220%22       y%3D%220%22       width%3D%22100%25%22       height%3D%22100%25%22 %2F%3E    %3Cuse       xlink%3Ahref%3D%22%23remove%22       id%3D%22remove-disabled%22       x%3D%220%22       y%3D%220%22       width%3D%22100%25%22       height%3D%22100%25%22 %2F%3E  %3C%2Fg%3E  %3Cpath     style%3D%22fill%3Anone%3Bstroke%3A%23464646%3Bstroke-width%3A2%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22     id%3D%22circle-3%22     d%3D%22m 581.65725%2C30 c 0%2C6.078 -4.926%2C11 -11%2C11 -6.074%2C0 -11%2C-4.922 -11%2C-11 0%2C-6.074 4.926%2C-11 11%2C-11 6.074%2C0 11%2C4.926 11%2C11 z%22     inkscape%3Aconnector-curvature%3D%220%22 %2F%3E%3C%2Fsvg%3E\")}.leaflet-draw a{display:block;text-align:center;text-decoration:none}.leaflet-draw a .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.leaflet-draw-actions{display:none;list-style:none;margin:0;padding:0;position:absolute;left:26px;top:0;white-space:nowrap}.leaflet-touch .leaflet-draw-actions{left:32px}.leaflet-right .leaflet-draw-actions{right:26px;left:auto}.leaflet-touch .leaflet-right .leaflet-draw-actions{right:32px;left:auto}.leaflet-draw-actions li{display:inline-block}.leaflet-draw-actions li:first-child a{border-left:0}.leaflet-draw-actions li:last-child a{border-radius:0 4px 4px 0}.leaflet-right .leaflet-draw-actions li:last-child a{border-radius:0}.leaflet-right .leaflet-draw-actions li:first-child a{border-radius:4px 0 0 4px}.leaflet-draw-actions a{background-color:#919187;border-left:1px solid #AAA;color:#FFF;font:11px/19px \"Helvetica Neue\",Arial,Helvetica,sans-serif;line-height:28px;text-decoration:none;padding-left:10px;padding-right:10px;height:28px}.leaflet-touch .leaflet-draw-actions a{font-size:12px;line-height:30px;height:30px}.leaflet-draw-actions-bottom{margin-top:0}.leaflet-draw-actions-top{margin-top:1px}.leaflet-draw-actions-top a,.leaflet-draw-actions-bottom a{height:27px;line-height:27px}.leaflet-draw-actions a:hover{background-color:#a0a098}.leaflet-draw-actions-top.leaflet-draw-actions-bottom a{height:26px;line-height:26px}.leaflet-draw-toolbar .leaflet-draw-draw-polyline{background-position:-2px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-draw-polyline{background-position:0 -1px}.leaflet-draw-toolbar .leaflet-draw-draw-polygon{background-position:-31px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-draw-polygon{background-position:-29px -1px}.leaflet-draw-toolbar .leaflet-draw-draw-rectangle{background-position:-62px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-draw-rectangle{background-position:-60px -1px}.leaflet-draw-toolbar .leaflet-draw-draw-circle{background-position:-92px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-draw-circle{background-position:-90px -1px}.leaflet-draw-toolbar .leaflet-draw-draw-marker{background-position:-122px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-draw-marker{background-position:-120px -1px}.leaflet-draw-toolbar .leaflet-draw-draw-circlemarker{background-position:-273px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-draw-circlemarker{background-position:-271px -1px}.leaflet-draw-toolbar .leaflet-draw-edit-edit{background-position:-152px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-edit-edit{background-position:-150px -1px}.leaflet-draw-toolbar .leaflet-draw-edit-remove{background-position:-182px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-edit-remove{background-position:-180px -1px}.leaflet-draw-toolbar .leaflet-draw-edit-edit.leaflet-disabled{background-position:-212px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-edit-edit.leaflet-disabled{background-position:-210px -1px}.leaflet-draw-toolbar .leaflet-draw-edit-remove.leaflet-disabled{background-position:-242px -2px}.leaflet-touch .leaflet-draw-toolbar .leaflet-draw-edit-remove.leaflet-disabled{background-position:-240px -2px}.leaflet-mouse-marker{background-color:#fff;cursor:crosshair}.leaflet-draw-tooltip{background:#363636;background:rgba(0,0,0,0.5);border:1px solid transparent;border-radius:4px;color:#fff;font:12px/18px \"Helvetica Neue\",Arial,Helvetica,sans-serif;margin-left:20px;margin-top:-21px;padding:4px 8px;position:absolute;visibility:hidden;white-space:nowrap;z-index:6}.leaflet-draw-tooltip:before{border-right:6px solid black;border-right-color:rgba(0,0,0,0.5);border-top:6px solid transparent;border-bottom:6px solid transparent;content:\"\";position:absolute;top:7px;left:-7px}.leaflet-error-draw-tooltip{background-color:#f2dede;border:1px solid #e6b6bd;color:#b94a48}.leaflet-error-draw-tooltip:before{border-right-color:#e6b6bd}.leaflet-draw-tooltip-single{margin-top:-12px}.leaflet-draw-tooltip-subtext{color:#f8d5e4}.leaflet-draw-guide-dash{font-size:1%;opacity:.6;position:absolute;width:5px;height:5px}.leaflet-edit-marker-selected{background-color:rgba(254,87,161,0.1);border:4px dashed rgba(254,87,161,0.6);border-radius:4px;box-sizing:content-box}.leaflet-edit-move{cursor:move}.leaflet-edit-resize{cursor:pointer}.leaflet-oldie .leaflet-draw-toolbar{border:1px solid #999}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/leaflet/dist/leaflet.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/leaflet/dist/leaflet.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-drag {\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\r\n\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n\r\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n\r\n.leaflet-overlay-pane { z-index: 400; }\r\n\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n\r\n.leaflet-marker-pane  { z-index: 600; }\r\n\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\ttransition: opacity 0.2s linear;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\ttransition:         -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\ttransition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:         grab;\r\n\t}\r\n\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n/* general typography */\r\n\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=);\r\n\t}\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n/* Tooltip */\r\n\r\n/* Base styles for the element that has a tooltip */\r\n\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./styleguide/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./styleguide/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./styleguide/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./styleguide/app/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./styleguide/app/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./styleguide/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./styleguide/app/app.component.html":
/*!*******************************************!*\
  !*** ./styleguide/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<guide-header></guide-header>\n\n<main>\n\t<router-outlet></router-outlet>\n</main>\n\n<guide-footer></guide-footer>\n"

/***/ }),

/***/ "./styleguide/app/app.component.scss":
/*!*******************************************!*\
  !*** ./styleguide/app/app.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./styleguide/app/app.component.ts":
/*!*****************************************!*\
  !*** ./styleguide/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _examples_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.routes */ "./styleguide/app/examples.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.packages = _examples_routes__WEBPACK_IMPORTED_MODULE_1__["EXAMPLES_ROUTES"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-root',
            template: __webpack_require__(/*! ./app.component.html */ "./styleguide/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./styleguide/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./styleguide/app/app.module.ts":
/*!**************************************!*\
  !*** ./styleguide/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./styleguide/app/app.component.ts");
/* harmony import */ var _aui_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aui.modules */ "./styleguide/app/aui.modules.ts");
/* harmony import */ var _examples_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples.modules */ "./styleguide/app/examples.modules.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./styleguide/app/app-routing.module.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index */ "./styleguide/app/components/index.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/index */ "./styleguide/app/pages/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_6__["Components"],
                _pages_index__WEBPACK_IMPORTED_MODULE_7__["Pages"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _aui_modules__WEBPACK_IMPORTED_MODULE_3__["AUIModules"],
                _examples_modules__WEBPACK_IMPORTED_MODULE_4__["ExamplesModules"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./styleguide/app/app.routes.ts":
/*!**************************************!*\
  !*** ./styleguide/app/app.routes.ts ***!
  \**************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./styleguide/app/pages/index.ts");
/* harmony import */ var _examples_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.routes */ "./styleguide/app/examples.routes.ts");


var ROUTES = [
    { path: '', redirectTo: '/modules', pathMatch: 'full' },
    { path: 'modules', component: _pages__WEBPACK_IMPORTED_MODULE_0__["ModulesPageComponent"], children: _examples_routes__WEBPACK_IMPORTED_MODULE_1__["EXAMPLES_ROUTES"] },
    { path: '**', component: _pages__WEBPACK_IMPORTED_MODULE_0__["NotFoundPageComponent"] },
];


/***/ }),

/***/ "./styleguide/app/aui.modules.ts":
/*!***************************************!*\
  !*** ./styleguide/app/aui.modules.ts ***!
  \***************************************/
/*! exports provided: AUIModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUIModules", function() { return AUIModules; });
/* harmony import */ var _acpaas_ui_ngx_components_layout_fesm2015_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acpaas-ui/ngx-components/layout/fesm2015/layout */ "./dist/layout/fesm2015/layout.js");
/* harmony import */ var _acpaas_ui_ngx_components_logo_fesm2015_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-components/logo/fesm2015/logo */ "./dist/logo/fesm2015/logo.js");


var AUIModules = [
    _acpaas_ui_ngx_components_layout_fesm2015_layout__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"],
    _acpaas_ui_ngx_components_layout_fesm2015_layout__WEBPACK_IMPORTED_MODULE_0__["FooterModule"],
    _acpaas_ui_ngx_components_logo_fesm2015_logo__WEBPACK_IMPORTED_MODULE_1__["LogoModule"],
];


/***/ }),

/***/ "./styleguide/app/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./styleguide/app/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aui-footer>\n    <div auiFooterContent>\n        <div class=\"u-container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 col-md-3 u-margin-bottom-xs u-margin-top-xs\">\n                    <h3 class=\"h5\">ACPaaS UI</h3>\n                    <ul class=\"a-list a-list--unstyled\">\n                        <li><a href=\"https://github.com/digipolisantwerp/acpaas-ui_react\" class=\"has-icon-right\" target=\"_blank\">React library<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://a-ui.github.io/core_branding_scss\" class=\"has-icon-right\" target=\"_blank\">Core branding<i class=\"fa fa-external-link\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-3 u-margin-bottom-xs u-margin-top-xs\">\n                    <h3 class=\"h5\">ACPaaS</h3>\n                    <ul class=\"a-list a-list--unstyled\">\n                        <li><a href=\"https://acpaas.digipolis.be/\" class=\"has-icon-right\" target=\"_blank\">ACPaaS Portal<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://acpaas.digipolis.be/nl/support?product=acpaas-ui\" class=\"has-icon-right\" target=\"_blank\">Support<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://acpaas.digipolis.be/nl/feature-request?product=acpaas-ui\" class=\"has-icon-right\" target=\"_blank\">Feature request<i class=\"fa fa-external-link\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-3 u-margin-bottom-xs u-margin-top-xs\">\n                    <h3 class=\"h5\">Digitale Stad van Morgen</h3>\n                    <ul class=\"a-list a-list--unstyled\">\n                        <li><a href=\"https://antwerpen.digipolis.be/nl/opdrachten\" class=\"has-icon-right\" target=\"_blank\">Opdrachten<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://www.digipolis.be\" class=\"has-icon-right\" target=\"_blank\">Digipolis<i class=\"fa fa-external-link\"></i></a></li>\n                        <li><a href=\"https://onstage.digipolis.be\" class=\"has-icon-right\" target=\"_blank\">Stages<i class=\"fa fa-external-link\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-3 u-margin-bottom-xs u-margin-top-xs\">\n                    <p class=\"u-margin-bottom\">Een project van Digipolis &amp; de Groep Stad Antwerpen</p>\n                    <ul class=\"m-button-list m-button-list--horizontal\">\n                        <li><a href=\"https://www.facebook.com/Digipolis\" target=\"_blank\" class=\"a-button a-button--facebook has-icon\"><i class=\"fa fa-facebook\"></i></a></li>\n                        <li><a href=\"https://twitter.com/Dgplsantwerpen\" target=\"_blank\" class=\"a-button a-button--twitter has-icon\"><i class=\"fa fa-twitter\"></i></a></li>\n                        <li><a href=\"https://www.linkedin.com/company/digipolis\" target=\"_blank\" class=\"a-button a-button--linkedin has-icon\"><i class=\"fa fa-linkedin\"></i></a></li>\n                        <li><a href=\"https://www.instagram.com/digipolis_antwerpen\" target=\"_blank\" class=\"a-button a-button--instagram has-icon\"><i class=\"fa fa-instagram\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div auiFooterBottom>\n        <aui-subfooter>\n            <aui-copyright domain=\"Digipolis\"></aui-copyright>\n        </aui-subfooter>\n    </div>\n</aui-footer>\n"

/***/ }),

/***/ "./styleguide/app/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./styleguide/app/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./styleguide/app/components/footer/footer.component.html"),
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./styleguide/app/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./styleguide/app/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aui-header>\n    <div auiHeaderContent>\n        <div auiHeaderLogo class=\"o-header__wrapper\">\n            <aui-logo title=\"ACPaaS UI\" src=\"./assets/digipolis-logo.svg\"></aui-logo>\n            <a class=\"o-header__link\" href=\"#\">ACPaaS UI Angular modules</a>\n        </div>\n    </div>\n\t<div auiHeaderMenuItem>\n        <a href=\"http://github.com/digipolisantwerp/acpaas-ui_angular\" class=\"a-button a-button--navigation has-icon-left\" target=\"_blank\">\n            <i class=\"fa fa-github\"></i>GitHub\n        </a>\n    </div>\n</aui-header>\n"

/***/ }),

/***/ "./styleguide/app/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./styleguide/app/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-header',
            template: __webpack_require__(/*! ./header.component.html */ "./styleguide/app/components/header/header.component.html"),
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./styleguide/app/components/hero/hero.component.html":
/*!************************************************************!*\
  !*** ./styleguide/app/components/hero/hero.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"o-hero\" [ngClass]=\"{'is-large': description}\">\n\t<div class=\"u-container u-text-center u-margin-bottom u-margin-top u-text-readable\">\n\t\t<img src=\"./assets/acpaas-ui.svg\" alt=\"ACPaaS UI logo\" width=\"128\" height=\"128\">\n\t\t<div>\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<p class=\"u-margin-top\" *ngIf=\"description\">{{description}}</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./styleguide/app/components/hero/hero.component.scss":
/*!************************************************************!*\
  !*** ./styleguide/app/components/hero/hero.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * QUARKS\n * -------------------------------------------------------------------\n */\n/**\n * MIXINS\n * -------------------------------------------------------------------\n * Collection of custom mixins\n */\n/**\n * FONT FACE\n * -------------------------------------------------------------------\n */\n/**\n * BUTTON MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * BUTTON OUTLINE MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * INPUT MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * INPUT PLACEHOLDER MIXIN\n * -------------------------------------------------------------------\n * Change base styling for placeholder text on input fields\n * Note: Styling the placeholder text is not supported on older\n * browsers, use a html5-placeholder ployfill for that\n *\n * Background info:\n * - http://davidwalsh.name/html5-placeholder\n * - http://davidwalsh.name/placeholder-overflow\n * - http://jamesallardice.github.io/Placeholders.js\n */\n/**\n * ALERT MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * BADGE MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * LABEL MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * TOOLTIP MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * CLEARFIX\n * -------------------------------------------------------------------\n */\n/**\n * FONT AWESOME\n * -------------------------------------------------------------------\n */\n/**\n * MEDIA QUERIES MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * FUNCTIONS\n * -------------------------------------------------------------------\n * Collection of custom functions\n */\n/**\n * STRIP UNIT FROM VALUE\n * -------------------------------------------------------------------\n */\n/**\n * CONVERT PX TO REM\n * -------------------------------------------------------------------\n */\n/**\n * RAISE NUMBER TO CERTAIN POWER\n * -------------------------------------------------------------------\n */\n/**\n * HANDLING Z-INDEX LAYERS\n * -------------------------------------------------------------------\n */\n/**\n * COLORS\n * -------------------------------------------------------------------\n * Collection of all available branding colors\n */\n/**\n * COMPLETE COLOR PALETTE\n * -------------------------------------------------------------------\n * Variable names generated by Name That Color\n * http://chir.ag/projects/name-that-color\n */\n/**\n * GRAYSCALE COLOR PALETTE\n * -------------------------------------------------------------------\n * Collection of grayscale colors\n */\n/**\n * SOCIAL BRAND COLOR PALETTE\n * -------------------------------------------------------------------\n * Collection of social branding colors\n */\n/**\n * GLOBAL VARIABLES\n * -------------------------------------------------------------------\n */\n/**\n * SPECIFIC COLOR PALETTE\n * -------------------------------------------------------------------\n */\n/**\n * SPACERS\n * -------------------------------------------------------------------\n */\n/**\n * BREAKPOINTS\n * -------------------------------------------------------------------\n */\n/**\n * $screen-xl =\n *    max-width of u-container\n *    + width of official logo * 2\n *    + space between logo and u-container * 2\n */\n/**\n * FONT FAMILIES\n * -------------------------------------------------------------------\n */\n/**\n * FONT SIZES\n * -------------------------------------------------------------------\n */\n/**\n * LINE HEIGHTS\n * -------------------------------------------------------------------\n */\n/**\n * FONT WEIGHTS\n * -------------------------------------------------------------------\n */\n/**\n * OTHER TYPOGRAPHY\n * -------------------------------------------------------------------\n */\n/**\n * ANIMATIONS\n * -------------------------------------------------------------------\n */\n/**\n * Z-INDEXES\n * -------------------------------------------------------------------\n * http://www.sitepoint.com/better-solution-managing-z-index-sass/\n *\n * Use like this:\n *   z-index: layer('overlay');\n *     where overlay is a list item of the default list \"$z-indexes\" (see below)\n *\n * The list is also upgradeable in that nesting is permitted, e.g.:\n * $z-indexes: (\n *   'modal': (\n *     'back': 50,\n *     'front': 60\n *   ),\n *   'navigation': 40,\n *   ...\n * )\n */\n/**\n * ICON SIZES\n * -------------------------------------------------------------------\n */\n/**\n * BOX SHADOWS\n * -------------------------------------------------------------------\n */\n/**\n * LINKS\n * -------------------------------------------------------------------\n * Define text and hover color for each hyperlink\n */\n/**\n * LISTS\n * -------------------------------------------------------------------\n * Define default paddings for lists\n */\n/**\n * PRE\n * -------------------------------------------------------------------\n * Define text and background color for each code element\n */\n/**\n * CODE\n * -------------------------------------------------------------------\n * Define text and background color for each code element\n */\n/**\n * MARK\n * -------------------------------------------------------------------\n * Define text and background color for each mark element\n */\n/**\n * CITE\n * -------------------------------------------------------------------\n */\n/**\n * FIGCAPTION\n * -------------------------------------------------------------------\n */\n/**\n * TABLES\n * -------------------------------------------------------------------\n * Define background and border color for each table\n */\n/**\n * BUTTONS\n * -------------------------------------------------------------------\n * Define text, background and border color for each button\n */\n/**\n * FORMS\n * -------------------------------------------------------------------\n * Define text, background, border and placeholder color for each input\n */\n/**\n * RADIO BUTTONS & CHECKBOXES\n * -------------------------------------------------------------------\n */\n/**\n * SWITCHES\n * -------------------------------------------------------------------\n * WATCH OUT\n * $progress-height and $range-slider-height are equal to $switch-height\n * In this way, changing the height of the switch will also affect the height of the progress bar and range slider\n */\n/**\n * FIELDSET\n * -------------------------------------------------------------------\n */\n/**\n * TOOLTIP\n * -------------------------------------------------------------------\n */\n/**\n * PROGRESS\n * -------------------------------------------------------------------\n * WATCH OUT\n * $range-slider-offset is equal to $tooltip-offset\n * In this way, changing the offset of the progress bar will also affect the offset of the range slider\n */\n/**\n * RANGE SLIDER\n * -------------------------------------------------------------------\n */\n/**\n * LINK LIST\n * -------------------------------------------------------------------\n */\n/**\n * DATEPICKER\n * -------------------------------------------------------------------\n */\n/**\n * ACCORDION\n * -------------------------------------------------------------------\n */\n/**\n * ALERTS\n * -------------------------------------------------------------------\n */\n/**\n * AVATARS\n * -------------------------------------------------------------------\n */\n/**\n * BADGES\n * -------------------------------------------------------------------\n */\n/**\n * BREADCRUMBS\n * -------------------------------------------------------------------\n */\n/**\n * CARDS\n * -------------------------------------------------------------------\n */\n/**\n * COPYRIGHT\n * -------------------------------------------------------------------\n */\n/**\n * LABELS\n * -------------------------------------------------------------------\n */\n/**\n * TAGS\n * -------------------------------------------------------------------\n */\n/**\n * FLYOUT\n * -------------------------------------------------------------------\n */\n/**\n * FOOTER\n * -------------------------------------------------------------------\n */\n/**\n * HEADER\n * -------------------------------------------------------------------\n */\n/**\n * SPINNER\n * -------------------------------------------------------------------\n */\n/**\n * ICON LIST\n * -------------------------------------------------------------------\n */\n/**\n * OVERLAY\n * -------------------------------------------------------------------\n */\n/**\n * MODAL\n * -------------------------------------------------------------------\n */\n/**\n * NAVIGATION\n * -------------------------------------------------------------------\n */\n/**\n * PAGINATION\n * -------------------------------------------------------------------\n */\n/**\n * STEP INDICATOR\n * -------------------------------------------------------------------\n */\n/**\n * UPLOAD\n * -------------------------------------------------------------------\n */\n/**\n * GALLERY\n * -------------------------------------------------------------------\n */\n/**\n * SLIDESHOW\n * -------------------------------------------------------------------\n */\n.o-hero {\n  align-items: center;\n  background-color: #0064b4;\n  background-image: url(\"https://digipolisantwerp.github.io/acpaas-ui_angular/assets/hero.svg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  display: flex;\n  justify-content: flex-start;\n  min-height: 12rem;\n  padding-top: 50px;\n  width: 100%; }\n.o-hero.is-large {\n    min-height: 18rem; }\n@media screen and (min-width: 45rem) {\n      .o-hero.is-large {\n        min-height: 24rem; } }\n.o-hero h1 {\n    text-shadow: 0 0 8px rgba(255, 255, 255, 0.32); }\n.u-container {\n  align-items: center;\n  display: flex;\n  flex-direction: column; }\n.u-container img {\n    margin-bottom: 0.75rem; }\n@media screen and (min-width: 45rem) {\n      .u-container img {\n        margin-top: -1.5rem; } }\n"

/***/ }),

/***/ "./styleguide/app/components/hero/hero.component.ts":
/*!**********************************************************!*\
  !*** ./styleguide/app/components/hero/hero.component.ts ***!
  \**********************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeroComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeroComponent.prototype, "description", void 0);
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-hero',
            styles: [__webpack_require__(/*! ./hero.component.scss */ "./styleguide/app/components/hero/hero.component.scss")],
            template: __webpack_require__(/*! ./hero.component.html */ "./styleguide/app/components/hero/hero.component.html"),
        })
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./styleguide/app/components/index.ts":
/*!********************************************!*\
  !*** ./styleguide/app/components/index.ts ***!
  \********************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./styleguide/app/components/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./styleguide/app/components/header/header.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ "./styleguide/app/components/hero/hero.component.ts");
/* harmony import */ var _registry_registry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registry/registry.component */ "./styleguide/app/components/registry/registry.component.ts");




var Components = [
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
    _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"],
    _registry_registry_component__WEBPACK_IMPORTED_MODULE_3__["RegistryComponent"],
];


/***/ }),

/***/ "./styleguide/app/components/registry/registry.component.html":
/*!********************************************************************!*\
  !*** ./styleguide/app/components/registry/registry.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"m-nav-list\">\n\t<li *ngFor=\"let item of items\">\n\t\t<a [routerLink]=\"[item.path]\" [routerLinkActive]=\"['is-active']\"> {{ item.title }}</a>\n\t</li>\n</ul>\n"

/***/ }),

/***/ "./styleguide/app/components/registry/registry.component.scss":
/*!********************************************************************!*\
  !*** ./styleguide/app/components/registry/registry.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./styleguide/app/components/registry/registry.component.ts":
/*!******************************************************************!*\
  !*** ./styleguide/app/components/registry/registry.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryComponent", function() { return RegistryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistryComponent = /** @class */ (function () {
    function RegistryComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RegistryComponent.prototype, "items", void 0);
    RegistryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guide-registry',
            template: __webpack_require__(/*! ./registry.component.html */ "./styleguide/app/components/registry/registry.component.html"),
            styles: [__webpack_require__(/*! ./registry.component.scss */ "./styleguide/app/components/registry/registry.component.scss")],
        })
    ], RegistryComponent);
    return RegistryComponent;
}());



/***/ }),

/***/ "./styleguide/app/examples.modules.ts":
/*!********************************************!*\
  !*** ./styleguide/app/examples.modules.ts ***!
  \********************************************/
/*! exports provided: ExamplesModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModules", function() { return ExamplesModules; });
/* harmony import */ var _acpaas_ui_ngx_examples_avatar_fesm2015_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/avatar/fesm2015/avatar */ "./examples/avatar/fesm2015/avatar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_calendar_fesm2015_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/calendar/fesm2015/calendar */ "./examples/calendar/fesm2015/calendar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_code_snippet_fesm2015_code_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/code-snippet/fesm2015/code-snippet */ "./examples/code-snippet/fesm2015/code-snippet.js");
/* harmony import */ var _acpaas_ui_ngx_examples_flyout_fesm2015_flyout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/flyout/fesm2015/flyout */ "./examples/flyout/fesm2015/flyout.js");
/* harmony import */ var _acpaas_ui_ngx_examples_forms_fesm2015_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/forms/fesm2015/forms */ "./examples/forms/fesm2015/forms.js");
/* harmony import */ var _acpaas_ui_ngx_examples_layout_fesm2015_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/layout/fesm2015/layout */ "./examples/layout/fesm2015/layout.js");
/* harmony import */ var _acpaas_ui_ngx_examples_localstorage_fesm2015_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/localstorage/fesm2015/localstorage */ "./examples/localstorage/fesm2015/localstorage.js");
/* harmony import */ var _acpaas_ui_ngx_examples_logo_fesm2015_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/logo/fesm2015/logo */ "./examples/logo/fesm2015/logo.js");
/* harmony import */ var _acpaas_ui_ngx_examples_map_fesm2015_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/map/fesm2015/map */ "./examples/map/fesm2015/map.js");
/* harmony import */ var _acpaas_ui_ngx_examples_pagination_fesm2015_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/pagination/fesm2015/pagination */ "./examples/pagination/fesm2015/pagination.js");
/* harmony import */ var _acpaas_ui_ngx_examples_progress_bar_fesm2015_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/progress-bar/fesm2015/progress-bar */ "./examples/progress-bar/fesm2015/progress-bar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_selectable_list_fesm2015_selectable_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/selectable-list/fesm2015/selectable-list */ "./examples/selectable-list/fesm2015/selectable-list.js");
/* harmony import */ var _acpaas_ui_ngx_examples_table_fesm2015_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/table/fesm2015/table */ "./examples/table/fesm2015/table.js");













var ExamplesModules = [
    _acpaas_ui_ngx_examples_avatar_fesm2015_avatar__WEBPACK_IMPORTED_MODULE_0__["AvatarExamplesModule"],
    _acpaas_ui_ngx_examples_calendar_fesm2015_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarExamplesModule"],
    _acpaas_ui_ngx_examples_code_snippet_fesm2015_code_snippet__WEBPACK_IMPORTED_MODULE_2__["CodeSnippetExamplesModule"],
    _acpaas_ui_ngx_examples_flyout_fesm2015_flyout__WEBPACK_IMPORTED_MODULE_3__["FlyoutExamplesModule"],
    _acpaas_ui_ngx_examples_forms_fesm2015_forms__WEBPACK_IMPORTED_MODULE_4__["FormsExamplesModule"],
    _acpaas_ui_ngx_examples_layout_fesm2015_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutExamplesModule"],
    _acpaas_ui_ngx_examples_localstorage_fesm2015_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalstorageExamplesModule"],
    _acpaas_ui_ngx_examples_logo_fesm2015_logo__WEBPACK_IMPORTED_MODULE_7__["LogoExamplesModule"],
    _acpaas_ui_ngx_examples_map_fesm2015_map__WEBPACK_IMPORTED_MODULE_8__["MapExamplesModule"],
    _acpaas_ui_ngx_examples_pagination_fesm2015_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationExamplesModule"],
    _acpaas_ui_ngx_examples_progress_bar_fesm2015_progress_bar__WEBPACK_IMPORTED_MODULE_10__["ProgressBarExamplesModule"],
    _acpaas_ui_ngx_examples_selectable_list_fesm2015_selectable_list__WEBPACK_IMPORTED_MODULE_11__["SelectableListExamplesModule"],
    _acpaas_ui_ngx_examples_table_fesm2015_table__WEBPACK_IMPORTED_MODULE_12__["TableExamplesModule"],
];


/***/ }),

/***/ "./styleguide/app/examples.routes.ts":
/*!*******************************************!*\
  !*** ./styleguide/app/examples.routes.ts ***!
  \*******************************************/
/*! exports provided: EXAMPLES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLES_ROUTES", function() { return EXAMPLES_ROUTES; });
/* harmony import */ var _acpaas_ui_ngx_examples_avatar_fesm2015_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/avatar/fesm2015/avatar */ "./examples/avatar/fesm2015/avatar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_calendar_fesm2015_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/calendar/fesm2015/calendar */ "./examples/calendar/fesm2015/calendar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_code_snippet_fesm2015_code_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/code-snippet/fesm2015/code-snippet */ "./examples/code-snippet/fesm2015/code-snippet.js");
/* harmony import */ var _acpaas_ui_ngx_examples_flyout_fesm2015_flyout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/flyout/fesm2015/flyout */ "./examples/flyout/fesm2015/flyout.js");
/* harmony import */ var _acpaas_ui_ngx_examples_forms_fesm2015_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/forms/fesm2015/forms */ "./examples/forms/fesm2015/forms.js");
/* harmony import */ var _acpaas_ui_ngx_examples_layout_fesm2015_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/layout/fesm2015/layout */ "./examples/layout/fesm2015/layout.js");
/* harmony import */ var _acpaas_ui_ngx_examples_localstorage_fesm2015_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/localstorage/fesm2015/localstorage */ "./examples/localstorage/fesm2015/localstorage.js");
/* harmony import */ var _acpaas_ui_ngx_examples_logo_fesm2015_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/logo/fesm2015/logo */ "./examples/logo/fesm2015/logo.js");
/* harmony import */ var _acpaas_ui_ngx_examples_map_fesm2015_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/map/fesm2015/map */ "./examples/map/fesm2015/map.js");
/* harmony import */ var _acpaas_ui_ngx_examples_pagination_fesm2015_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/pagination/fesm2015/pagination */ "./examples/pagination/fesm2015/pagination.js");
/* harmony import */ var _acpaas_ui_ngx_examples_progress_bar_fesm2015_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/progress-bar/fesm2015/progress-bar */ "./examples/progress-bar/fesm2015/progress-bar.js");
/* harmony import */ var _acpaas_ui_ngx_examples_selectable_list_fesm2015_selectable_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/selectable-list/fesm2015/selectable-list */ "./examples/selectable-list/fesm2015/selectable-list.js");
/* harmony import */ var _acpaas_ui_ngx_examples_table_fesm2015_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @acpaas-ui/ngx-examples/table/fesm2015/table */ "./examples/table/fesm2015/table.js");













var EXAMPLES_ROUTES = [
    { path: 'avatar', children: _acpaas_ui_ngx_examples_avatar_fesm2015_avatar__WEBPACK_IMPORTED_MODULE_0__["AVATAR_EXAMPLES_ROUTES"], title: 'Avatar', },
    { path: 'calendar', children: _acpaas_ui_ngx_examples_calendar_fesm2015_calendar__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_EXAMPLES_ROUTES"], title: 'Calendar', },
    { path: 'code-snippet', children: _acpaas_ui_ngx_examples_code_snippet_fesm2015_code_snippet__WEBPACK_IMPORTED_MODULE_2__["CODE_SNIPPET_EXAMPLES_ROUTES"], title: 'Code snippet', },
    { path: 'flyout', children: _acpaas_ui_ngx_examples_flyout_fesm2015_flyout__WEBPACK_IMPORTED_MODULE_3__["FLYOUT_EXAMPLES_ROUTES"], title: 'Flyout', },
    { path: 'forms', children: _acpaas_ui_ngx_examples_forms_fesm2015_forms__WEBPACK_IMPORTED_MODULE_4__["FORMS_EXAMPLES_ROUTES"], title: 'Forms', },
    { path: 'layout', children: _acpaas_ui_ngx_examples_layout_fesm2015_layout__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_EXAMPLES_ROUTES"], title: 'Layout', },
    { path: 'localstorage', children: _acpaas_ui_ngx_examples_localstorage_fesm2015_localstorage__WEBPACK_IMPORTED_MODULE_6__["LOCALSTORAGE_EXAMPLES_ROUTES"], title: 'Localstorage', },
    { path: 'logo', children: _acpaas_ui_ngx_examples_logo_fesm2015_logo__WEBPACK_IMPORTED_MODULE_7__["LOGO_EXAMPLES_ROUTES"], title: 'Logo', },
    { path: 'map', children: _acpaas_ui_ngx_examples_map_fesm2015_map__WEBPACK_IMPORTED_MODULE_8__["MAP_EXAMPLES_ROUTES"], title: 'Map', },
    { path: 'pagination', children: _acpaas_ui_ngx_examples_pagination_fesm2015_pagination__WEBPACK_IMPORTED_MODULE_9__["PAGINATION_EXAMPLES_ROUTES"], title: 'Pagination', },
    { path: 'progress-bar', children: _acpaas_ui_ngx_examples_progress_bar_fesm2015_progress_bar__WEBPACK_IMPORTED_MODULE_10__["PROGRESS_BAR_EXAMPLES_ROUTES"], title: 'Progress bar', },
    { path: 'selectable-list', children: _acpaas_ui_ngx_examples_selectable_list_fesm2015_selectable_list__WEBPACK_IMPORTED_MODULE_11__["SELECTABLE_LIST_EXAMPLES_ROUTES"], title: 'Selectable list', },
    { path: 'table', children: _acpaas_ui_ngx_examples_table_fesm2015_table__WEBPACK_IMPORTED_MODULE_12__["TABLE_EXAMPLES_ROUTES"], title: 'Table', },
];


/***/ }),

/***/ "./styleguide/app/pages/index.ts":
/*!***************************************!*\
  !*** ./styleguide/app/pages/index.ts ***!
  \***************************************/
/*! exports provided: ModulesPageComponent, NotFoundPageComponent, Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
/* harmony import */ var _modules_modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modules.page */ "./styleguide/app/pages/modules/modules.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModulesPageComponent", function() { return _modules_modules_page__WEBPACK_IMPORTED_MODULE_0__["ModulesPageComponent"]; });

/* harmony import */ var _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.page */ "./styleguide/app/pages/not-found/not-found.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"]; });





var Pages = [
    _modules_modules_page__WEBPACK_IMPORTED_MODULE_0__["ModulesPageComponent"],
    _not_found_not_found_page__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"],
];


/***/ }),

/***/ "./styleguide/app/pages/modules/modules.page.html":
/*!********************************************************!*\
  !*** ./styleguide/app/pages/modules/modules.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"u-container u-margin-top u-margin-bottom p-modules\">\n\t<nav>\n\t\t<guide-registry [items]=\"packages\"></guide-registry>\n\t</nav>\n\n\t<div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./styleguide/app/pages/modules/modules.page.scss":
/*!********************************************************!*\
  !*** ./styleguide/app/pages/modules/modules.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * QUARKS\n * -------------------------------------------------------------------\n */\n/**\n * MIXINS\n * -------------------------------------------------------------------\n * Collection of custom mixins\n */\n/**\n * FONT FACE\n * -------------------------------------------------------------------\n */\n/**\n * BUTTON MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * BUTTON OUTLINE MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * INPUT MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * INPUT PLACEHOLDER MIXIN\n * -------------------------------------------------------------------\n * Change base styling for placeholder text on input fields\n * Note: Styling the placeholder text is not supported on older\n * browsers, use a html5-placeholder ployfill for that\n *\n * Background info:\n * - http://davidwalsh.name/html5-placeholder\n * - http://davidwalsh.name/placeholder-overflow\n * - http://jamesallardice.github.io/Placeholders.js\n */\n/**\n * ALERT MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * BADGE MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * LABEL MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * TOOLTIP MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * CLEARFIX\n * -------------------------------------------------------------------\n */\n/**\n * FONT AWESOME\n * -------------------------------------------------------------------\n */\n/**\n * MEDIA QUERIES MIXIN\n * -------------------------------------------------------------------\n */\n/**\n * FUNCTIONS\n * -------------------------------------------------------------------\n * Collection of custom functions\n */\n/**\n * STRIP UNIT FROM VALUE\n * -------------------------------------------------------------------\n */\n/**\n * CONVERT PX TO REM\n * -------------------------------------------------------------------\n */\n/**\n * RAISE NUMBER TO CERTAIN POWER\n * -------------------------------------------------------------------\n */\n/**\n * HANDLING Z-INDEX LAYERS\n * -------------------------------------------------------------------\n */\n/**\n * COLORS\n * -------------------------------------------------------------------\n * Collection of all available branding colors\n */\n/**\n * COMPLETE COLOR PALETTE\n * -------------------------------------------------------------------\n * Variable names generated by Name That Color\n * http://chir.ag/projects/name-that-color\n */\n/**\n * GRAYSCALE COLOR PALETTE\n * -------------------------------------------------------------------\n * Collection of grayscale colors\n */\n/**\n * SOCIAL BRAND COLOR PALETTE\n * -------------------------------------------------------------------\n * Collection of social branding colors\n */\n/**\n * GLOBAL VARIABLES\n * -------------------------------------------------------------------\n */\n/**\n * SPECIFIC COLOR PALETTE\n * -------------------------------------------------------------------\n */\n/**\n * SPACERS\n * -------------------------------------------------------------------\n */\n/**\n * BREAKPOINTS\n * -------------------------------------------------------------------\n */\n/**\n * $screen-xl =\n *    max-width of u-container\n *    + width of official logo * 2\n *    + space between logo and u-container * 2\n */\n/**\n * FONT FAMILIES\n * -------------------------------------------------------------------\n */\n/**\n * FONT SIZES\n * -------------------------------------------------------------------\n */\n/**\n * LINE HEIGHTS\n * -------------------------------------------------------------------\n */\n/**\n * FONT WEIGHTS\n * -------------------------------------------------------------------\n */\n/**\n * OTHER TYPOGRAPHY\n * -------------------------------------------------------------------\n */\n/**\n * ANIMATIONS\n * -------------------------------------------------------------------\n */\n/**\n * Z-INDEXES\n * -------------------------------------------------------------------\n * http://www.sitepoint.com/better-solution-managing-z-index-sass/\n *\n * Use like this:\n *   z-index: layer('overlay');\n *     where overlay is a list item of the default list \"$z-indexes\" (see below)\n *\n * The list is also upgradeable in that nesting is permitted, e.g.:\n * $z-indexes: (\n *   'modal': (\n *     'back': 50,\n *     'front': 60\n *   ),\n *   'navigation': 40,\n *   ...\n * )\n */\n/**\n * ICON SIZES\n * -------------------------------------------------------------------\n */\n/**\n * BOX SHADOWS\n * -------------------------------------------------------------------\n */\n/**\n * LINKS\n * -------------------------------------------------------------------\n * Define text and hover color for each hyperlink\n */\n/**\n * LISTS\n * -------------------------------------------------------------------\n * Define default paddings for lists\n */\n/**\n * PRE\n * -------------------------------------------------------------------\n * Define text and background color for each code element\n */\n/**\n * CODE\n * -------------------------------------------------------------------\n * Define text and background color for each code element\n */\n/**\n * MARK\n * -------------------------------------------------------------------\n * Define text and background color for each mark element\n */\n/**\n * CITE\n * -------------------------------------------------------------------\n */\n/**\n * FIGCAPTION\n * -------------------------------------------------------------------\n */\n/**\n * TABLES\n * -------------------------------------------------------------------\n * Define background and border color for each table\n */\n/**\n * BUTTONS\n * -------------------------------------------------------------------\n * Define text, background and border color for each button\n */\n/**\n * FORMS\n * -------------------------------------------------------------------\n * Define text, background, border and placeholder color for each input\n */\n/**\n * RADIO BUTTONS & CHECKBOXES\n * -------------------------------------------------------------------\n */\n/**\n * SWITCHES\n * -------------------------------------------------------------------\n * WATCH OUT\n * $progress-height and $range-slider-height are equal to $switch-height\n * In this way, changing the height of the switch will also affect the height of the progress bar and range slider\n */\n/**\n * FIELDSET\n * -------------------------------------------------------------------\n */\n/**\n * TOOLTIP\n * -------------------------------------------------------------------\n */\n/**\n * PROGRESS\n * -------------------------------------------------------------------\n * WATCH OUT\n * $range-slider-offset is equal to $tooltip-offset\n * In this way, changing the offset of the progress bar will also affect the offset of the range slider\n */\n/**\n * RANGE SLIDER\n * -------------------------------------------------------------------\n */\n/**\n * LINK LIST\n * -------------------------------------------------------------------\n */\n/**\n * DATEPICKER\n * -------------------------------------------------------------------\n */\n/**\n * ACCORDION\n * -------------------------------------------------------------------\n */\n/**\n * ALERTS\n * -------------------------------------------------------------------\n */\n/**\n * AVATARS\n * -------------------------------------------------------------------\n */\n/**\n * BADGES\n * -------------------------------------------------------------------\n */\n/**\n * BREADCRUMBS\n * -------------------------------------------------------------------\n */\n/**\n * CARDS\n * -------------------------------------------------------------------\n */\n/**\n * COPYRIGHT\n * -------------------------------------------------------------------\n */\n/**\n * LABELS\n * -------------------------------------------------------------------\n */\n/**\n * TAGS\n * -------------------------------------------------------------------\n */\n/**\n * FLYOUT\n * -------------------------------------------------------------------\n */\n/**\n * FOOTER\n * -------------------------------------------------------------------\n */\n/**\n * HEADER\n * -------------------------------------------------------------------\n */\n/**\n * SPINNER\n * -------------------------------------------------------------------\n */\n/**\n * ICON LIST\n * -------------------------------------------------------------------\n */\n/**\n * OVERLAY\n * -------------------------------------------------------------------\n */\n/**\n * MODAL\n * -------------------------------------------------------------------\n */\n/**\n * NAVIGATION\n * -------------------------------------------------------------------\n */\n/**\n * PAGINATION\n * -------------------------------------------------------------------\n */\n/**\n * STEP INDICATOR\n * -------------------------------------------------------------------\n */\n/**\n * UPLOAD\n * -------------------------------------------------------------------\n */\n/**\n * GALLERY\n * -------------------------------------------------------------------\n */\n/**\n * SLIDESHOW\n * -------------------------------------------------------------------\n */\n.p-modules {\n  display: flex;\n  flex-direction: column; }\n.p-modules > nav {\n    flex: 0 0 calc(100% / 4);\n    margin-bottom: 3rem; }\n.p-modules > div {\n    overflow-x: auto; }\n@media screen and (min-width: 45rem) {\n    .p-modules {\n      flex-direction: row; }\n      .p-modules > nav {\n        margin-right: 3rem; }\n      .p-modules > div {\n        flex: auto; } }\n"

/***/ }),

/***/ "./styleguide/app/pages/modules/modules.page.ts":
/*!******************************************************!*\
  !*** ./styleguide/app/pages/modules/modules.page.ts ***!
  \******************************************************/
/*! exports provided: ModulesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesPageComponent", function() { return ModulesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../examples.routes */ "./styleguide/app/examples.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModulesPageComponent = /** @class */ (function () {
    function ModulesPageComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.packages = _examples_routes__WEBPACK_IMPORTED_MODULE_2__["EXAMPLES_ROUTES"];
    }
    ModulesPageComponent.prototype.ngOnInit = function () {
        if (this.activatedRoute.snapshot.children.length === 0) {
            this.router.navigate([this.packages[0].path], { relativeTo: this.activatedRoute });
        }
    };
    ModulesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./modules.page.html */ "./styleguide/app/pages/modules/modules.page.html"),
            styles: [__webpack_require__(/*! ./modules.page.scss */ "./styleguide/app/pages/modules/modules.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModulesPageComponent);
    return ModulesPageComponent;
}());



/***/ }),

/***/ "./styleguide/app/pages/not-found/not-found.page.html":
/*!************************************************************!*\
  !*** ./styleguide/app/pages/not-found/not-found.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"u-container u-margin-bottom-lg u-margin-top-lg u-text-center\">\n\t<h1 class=\"h3 u-margin-top-lg u-margin-bottom\">Pagina niet gevonden!</h1>\n</div>\n"

/***/ }),

/***/ "./styleguide/app/pages/not-found/not-found.page.ts":
/*!**********************************************************!*\
  !*** ./styleguide/app/pages/not-found/not-found.page.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./not-found.page.html */ "./styleguide/app/pages/not-found/not-found.page.html"),
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./styleguide/environments/environment.ts":
/*!************************************************!*\
  !*** ./styleguide/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./styleguide/main.ts":
/*!****************************!*\
  !*** ./styleguide/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./styleguide/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./styleguide/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./styleguide/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/digipolisantwerp/acpaas-ui_angular/styleguide/main.ts */"./styleguide/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map