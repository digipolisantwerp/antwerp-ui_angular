/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DateGenerator, DateHelper } from '@acpaas-ui/js-date-utils';
/**
 * @record
 */
export function MonthMap() { }
function MonthMap_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: number]: Month;
    */
}
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
            return tslib_1.__spread(this.months[month]);
        }
        var /** @type {?} */ date = new Date();
        date.setMonth(month, 1);
        if (year) {
            date.setFullYear(year);
        }
        var /** @type {?} */ generatedMonth = DateGenerator.generateMonth(date, { startOfWeek: 1, padding: true, generatePadding: true });
        this.months[month] = generatedMonth;
        return tslib_1.__spread(generatedMonth);
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
        return DateGenerator.generateRange(date, range, { startOfWeek: 1 });
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
        var /** @type {?} */ before = DateHelper.updateMonth(date, date.getMonth() - 1);
        var /** @type {?} */ after = DateHelper.updateMonth(date, date.getMonth() + 1);
        return {
            before: DateGenerator.generateRange(before, range, rangeOptions),
            current: DateGenerator.generateRange(date, range, rangeOptions),
            after: DateGenerator.generateRange(after, range, rangeOptions),
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
        if (DateHelper.dateOutOfRange(date, dateRange)) {
            return date;
        }
        return DateHelper.closestDateForRange(date, dateRange);
    };
    CalendarService.decorators = [
        { type: Injectable },
    ];
    return CalendarService;
}());
export { CalendarService };
function CalendarService_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarService.prototype.months;
    /** @type {?} */
    CalendarService.prototype.currentYear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUF5QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7c0JBVWpFLEVBQUU7Ozs7Ozs7SUFHNUIsa0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsSUFBYTtRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sa0JBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtTQUMvQjtRQUVELHFCQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQscUJBQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRW5ILElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsY0FBYyxDQUFDO1FBRXBDLE1BQU0sa0JBQUssY0FBYyxFQUFFO0tBQzNCOzs7OztJQUVELHlDQUFlOzs7O0lBQWYsVUFBZ0IsSUFBVTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDMUQ7Ozs7OztJQUVELHlDQUFlOzs7OztJQUFmLFVBQWdCLElBQVUsRUFBRSxLQUFnQjtRQUMzQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEU7Ozs7OztJQUVELDBDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsSUFBVSxFQUFFLEtBQWdCO1FBQzVDLHFCQUFNLFlBQVksR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN4QyxxQkFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLHFCQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFaEUsTUFBTSxDQUFDO1lBQ04sTUFBTSxFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDaEUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDL0QsS0FBSyxFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUM7U0FDOUQsQ0FBQztLQUNGOzs7Ozs7SUFFRCxnREFBc0I7Ozs7O0lBQXRCLFVBQXVCLElBQXVCLEVBQUUsS0FBZ0I7UUFBekMscUJBQUEsRUFBQSxXQUFpQixJQUFJLEVBQUU7UUFDN0MscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXBELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUN2RDs7Z0JBNURELFVBQVU7OzBCQVZYOztTQVdhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQgeyBEYXRlR2VuZXJhdG9yLCBEYXRlSGVscGVyLCBEYXksIE1vbnRoLCBEYXRlUmFuZ2UgfSBmcm9tICdAYWNwYWFzLXVpL2pzLWRhdGUtdXRpbHMnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2VNYXAgfSBmcm9tICcuLi90eXBlcy9jYWxlbmRhci50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhNYXAge1xuXHRba2V5OiBudW1iZXJdOiBNb250aDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG5cdHB1YmxpYyBtb250aHM6IE1vbnRoTWFwID0ge307XG5cdHByaXZhdGUgY3VycmVudFllYXI6IG51bWJlcjtcblxuXHRnZXRNb250aChtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogTW9udGgge1xuXHRcdGlmICh5ZWFyKSB7XG5cdFx0XHRpZiAodGhpcy5jdXJyZW50WWVhciAhPT0geWVhcikge1xuXHRcdFx0XHR0aGlzLm1vbnRocyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmN1cnJlbnRZZWFyID0geWVhcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tb250aHMuaGFzT3duUHJvcGVydHkobW9udGgpKSB7XG5cdFx0XHRyZXR1cm4gWy4uLnRoaXMubW9udGhzW21vbnRoXV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0ZGF0ZS5zZXRNb250aChtb250aCwgMSk7XG5cblx0XHRpZiAoeWVhcikge1xuXHRcdFx0ZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcblx0XHR9XG5cblx0XHRjb25zdCBnZW5lcmF0ZWRNb250aCA9IERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVNb250aChkYXRlLCB7IHN0YXJ0T2ZXZWVrOiAxLCBwYWRkaW5nOiB0cnVlLCBnZW5lcmF0ZVBhZGRpbmc6IHRydWUgfSk7XG5cblx0XHR0aGlzLm1vbnRoc1ttb250aF0gPSBnZW5lcmF0ZWRNb250aDtcblxuXHRcdHJldHVybiBbLi4uZ2VuZXJhdGVkTW9udGhdO1xuXHR9XG5cblx0Z2V0TW9udGhGb3JEYXRlKGRhdGU6IERhdGUpOiBNb250aCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TW9udGgoZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuXHR9XG5cblx0Z2V0UmFuZ2VGb3JEYXRlKGRhdGU6IERhdGUsIHJhbmdlOiBEYXRlUmFuZ2UpOiBudW1iZXJbXSB7XG5cdFx0cmV0dXJuIERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVSYW5nZShkYXRlLCByYW5nZSwgeyBzdGFydE9mV2VlazogMSB9KTtcblx0fVxuXG5cdGdldFJhbmdlc0ZvckRhdGUoZGF0ZTogRGF0ZSwgcmFuZ2U6IERhdGVSYW5nZSk6IERhdGVSYW5nZU1hcCB7XG5cdFx0Y29uc3QgcmFuZ2VPcHRpb25zID0geyBzdGFydE9mV2VlazogMSB9O1xuXHRcdGNvbnN0IGJlZm9yZSA9IERhdGVIZWxwZXIudXBkYXRlTW9udGgoZGF0ZSwgZGF0ZS5nZXRNb250aCgpIC0gMSk7XG5cdFx0Y29uc3QgYWZ0ZXIgPSBEYXRlSGVscGVyLnVwZGF0ZU1vbnRoKGRhdGUsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGJlZm9yZTogRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGJlZm9yZSwgcmFuZ2UsIHJhbmdlT3B0aW9ucyksXG5cdFx0XHRjdXJyZW50OiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoZGF0ZSwgcmFuZ2UsIHJhbmdlT3B0aW9ucyksXG5cdFx0XHRhZnRlcjogRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGFmdGVyLCByYW5nZSwgcmFuZ2VPcHRpb25zKSxcblx0XHR9O1xuXHR9XG5cblx0Z2V0Q2xvc2VzdERhdGVGb3JSYW5nZShkYXRlOiBEYXRlID0gbmV3IERhdGUoKSwgcmFuZ2U6IERhdGVSYW5nZSk6IERhdGUge1xuXHRcdGNvbnN0IGRhdGVSYW5nZSA9IHRoaXMuZ2V0UmFuZ2VGb3JEYXRlKGRhdGUsIHJhbmdlKTtcblxuXHRcdGlmIChEYXRlSGVscGVyLmRhdGVPdXRPZlJhbmdlKGRhdGUsIGRhdGVSYW5nZSkpIHtcblx0XHRcdHJldHVybiBkYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiBEYXRlSGVscGVyLmNsb3Nlc3REYXRlRm9yUmFuZ2UoZGF0ZSwgZGF0ZVJhbmdlKTtcblx0fVxufVxuIl19