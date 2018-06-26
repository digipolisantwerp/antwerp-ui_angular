/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DateHelperService } from './date-helper.service';
var SortingService = /** @class */ (function () {
    function SortingService(dateHelperService) {
        this.dateHelperService = dateHelperService;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    SortingService.prototype.sortEvents = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        return events.sort(function (a, b) {
            // Sort by date
            var /** @type {?} */ sortedByDate = _this.sortByDateHelper(a.startDate, b.startDate);
            if (sortedByDate !== 0) {
                return sortedByDate;
            }
            // Sort by diff
            var /** @type {?} */ sortedBySpan = _this.sortBySpanHelper(a.startDate, a.endDate, b.startDate, b.endDate);
            if (sortedBySpan !== 0) {
                return sortedBySpan;
            }
            return _this.sortByDateTimeHelper(a.startDate, b.startDate);
        });
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    SortingService.prototype.sortByDateHelper = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        var /** @type {?} */ aStartDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        var /** @type {?} */ bStartDate = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        if (aStartDate < bStartDate) {
            return -1;
        }
        if (aStartDate > bStartDate) {
            return 1;
        }
        return 0;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    SortingService.prototype.sortByDateTimeHelper = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };
    /**
     * @param {?} aStart
     * @param {?} aEnd
     * @param {?} bStart
     * @param {?} bEnd
     * @return {?}
     */
    SortingService.prototype.sortBySpanHelper = /**
     * @param {?} aStart
     * @param {?} aEnd
     * @param {?} bStart
     * @param {?} bEnd
     * @return {?}
     */
    function (aStart, aEnd, bStart, bEnd) {
        var /** @type {?} */ spanA = this.dateHelperService.dateDiff(aStart, aEnd);
        var /** @type {?} */ spanB = this.dateHelperService.dateDiff(bStart, bEnd);
        if (spanA > spanB) {
            return -1;
        }
        if (spanA < spanB) {
            return 1;
        }
        return 0;
    };
    SortingService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SortingService.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    return SortingService;
}());
export { SortingService };
function SortingService_tsickle_Closure_declarations() {
    /** @type {?} */
    SortingService.prototype.dateHelperService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9zZXJ2aWNlcy9zb3J0aW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBTXpELHdCQUNTO1FBQUEsc0JBQWlCLEdBQWpCLGlCQUFpQjtLQUN0Qjs7Ozs7SUFFRyxtQ0FBVTs7OztjQUFDLE1BQXdCOztRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDOztZQUV2QixxQkFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JFLEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDO2FBQ3BCOztZQUdELHFCQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNGLEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzRCxDQUFDLENBQUM7Ozs7Ozs7SUFHRyx5Q0FBZ0I7Ozs7O2NBQUMsQ0FBTyxFQUFFLENBQU87UUFDdkMscUJBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEUscUJBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFeEUsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBR0gsNkNBQW9COzs7OztjQUFDLENBQU8sRUFBRSxDQUFPO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDVDtRQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztJQUdILHlDQUFnQjs7Ozs7OztjQUFDLE1BQVksRUFBRSxJQUFVLEVBQUUsTUFBWSxFQUFFLElBQVU7UUFDekUscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1RCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDVDtRQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7OztnQkFoRVYsVUFBVTs7OztnQkFIRixpQkFBaUI7O3lCQUgxQjs7U0FPYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1hcCB9IGZyb20gJy4uL2NsYXNzZXMvZXZlbnQtbWFwLmNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIHNvcnRFdmVudHMoZXZlbnRzOiBFdmVudEludGVyZmFjZVtdKTogRXZlbnRJbnRlcmZhY2VbXSB7XG5cdFx0cmV0dXJuIGV2ZW50cy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHQvLyBTb3J0IGJ5IGRhdGVcblx0XHRcdGNvbnN0IHNvcnRlZEJ5RGF0ZSA9IHRoaXMuc29ydEJ5RGF0ZUhlbHBlcihhLnN0YXJ0RGF0ZSwgYi5zdGFydERhdGUpO1xuXHRcdFx0aWYgKHNvcnRlZEJ5RGF0ZSAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc29ydGVkQnlEYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTb3J0IGJ5IGRpZmZcblx0XHRcdGNvbnN0IHNvcnRlZEJ5U3BhbiA9IHRoaXMuc29ydEJ5U3BhbkhlbHBlcihhLnN0YXJ0RGF0ZSwgYS5lbmREYXRlLCBiLnN0YXJ0RGF0ZSwgYi5lbmREYXRlKTtcblx0XHRcdGlmIChzb3J0ZWRCeVNwYW4gIT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHNvcnRlZEJ5U3Bhbjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuc29ydEJ5RGF0ZVRpbWVIZWxwZXIoYS5zdGFydERhdGUsIGIuc3RhcnREYXRlKTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBzb3J0QnlEYXRlSGVscGVyKGE6IERhdGUsIGI6IERhdGUpOiBudW1iZXIge1xuXHRcdGNvbnN0IGFTdGFydERhdGUgPSBuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksIGEuZ2V0TW9udGgoKSwgYS5nZXREYXRlKCkpO1xuXHRcdGNvbnN0IGJTdGFydERhdGUgPSBuZXcgRGF0ZShiLmdldEZ1bGxZZWFyKCksIGIuZ2V0TW9udGgoKSwgYi5nZXREYXRlKCkpO1xuXG5cdFx0aWYgKGFTdGFydERhdGUgPCBiU3RhcnREYXRlKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKGFTdGFydERhdGUgPiBiU3RhcnREYXRlKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHB1YmxpYyBzb3J0QnlEYXRlVGltZUhlbHBlcihhOiBEYXRlLCBiOiBEYXRlKTogbnVtYmVyIHtcblx0XHRpZiAoYSA8IGIpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRpZiAoYSA+IGIpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0cHVibGljIHNvcnRCeVNwYW5IZWxwZXIoYVN0YXJ0OiBEYXRlLCBhRW5kOiBEYXRlLCBiU3RhcnQ6IERhdGUsIGJFbmQ6IERhdGUpOiBudW1iZXIge1xuXHRcdGNvbnN0IHNwYW5BID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihhU3RhcnQsIGFFbmQpO1xuXHRcdGNvbnN0IHNwYW5CID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihiU3RhcnQsIGJFbmQpO1xuXG5cdFx0aWYgKHNwYW5BID4gc3BhbkIpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRpZiAoc3BhbkEgPCBzcGFuQikge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cdH1cbn1cbiJdfQ==