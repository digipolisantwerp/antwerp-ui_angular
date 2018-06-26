/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DateHelperService } from './date-helper.service';
export class SortingService {
    /**
     * @param {?} dateHelperService
     */
    constructor(dateHelperService) {
        this.dateHelperService = dateHelperService;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    sortEvents(events) {
        return events.sort((a, b) => {
            // Sort by date
            const /** @type {?} */ sortedByDate = this.sortByDateHelper(a.startDate, b.startDate);
            if (sortedByDate !== 0) {
                return sortedByDate;
            }
            // Sort by diff
            const /** @type {?} */ sortedBySpan = this.sortBySpanHelper(a.startDate, a.endDate, b.startDate, b.endDate);
            if (sortedBySpan !== 0) {
                return sortedBySpan;
            }
            return this.sortByDateTimeHelper(a.startDate, b.startDate);
        });
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    sortByDateHelper(a, b) {
        const /** @type {?} */ aStartDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        const /** @type {?} */ bStartDate = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        if (aStartDate < bStartDate) {
            return -1;
        }
        if (aStartDate > bStartDate) {
            return 1;
        }
        return 0;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    sortByDateTimeHelper(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
    /**
     * @param {?} aStart
     * @param {?} aEnd
     * @param {?} bStart
     * @param {?} bEnd
     * @return {?}
     */
    sortBySpanHelper(aStart, aEnd, bStart, bEnd) {
        const /** @type {?} */ spanA = this.dateHelperService.dateDiff(aStart, aEnd);
        const /** @type {?} */ spanB = this.dateHelperService.dateDiff(bStart, bEnd);
        if (spanA > spanB) {
            return -1;
        }
        if (spanA < spanB) {
            return 1;
        }
        return 0;
    }
}
SortingService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SortingService.ctorParameters = () => [
    { type: DateHelperService }
];
function SortingService_tsickle_Closure_declarations() {
    /** @type {?} */
    SortingService.prototype.dateHelperService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9zZXJ2aWNlcy9zb3J0aW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJMUQsTUFBTTs7OztJQUVMLFlBQ1M7UUFBQSxzQkFBaUIsR0FBakIsaUJBQWlCO0tBQ3RCOzs7OztJQUVHLFVBQVUsQ0FBQyxNQUF3QjtRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFFM0IsdUJBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUNwQjs7WUFHRCx1QkFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRixFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUNwQjtZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0QsQ0FBQyxDQUFDOzs7Ozs7O0lBR0csZ0JBQWdCLENBQUMsQ0FBTyxFQUFFLENBQU87UUFDdkMsdUJBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEUsdUJBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFeEUsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBR0gsb0JBQW9CLENBQUMsQ0FBTyxFQUFFLENBQU87UUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNUO1FBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBR0gsZ0JBQWdCLENBQUMsTUFBWSxFQUFFLElBQVUsRUFBRSxNQUFZLEVBQUUsSUFBVTtRQUN6RSx1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVELEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNWO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNUO1FBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQzs7OztZQWhFVixVQUFVOzs7O1lBSEYsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1hcCB9IGZyb20gJy4uL2NsYXNzZXMvZXZlbnQtbWFwLmNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIHNvcnRFdmVudHMoZXZlbnRzOiBFdmVudEludGVyZmFjZVtdKTogRXZlbnRJbnRlcmZhY2VbXSB7XG5cdFx0cmV0dXJuIGV2ZW50cy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHQvLyBTb3J0IGJ5IGRhdGVcblx0XHRcdGNvbnN0IHNvcnRlZEJ5RGF0ZSA9IHRoaXMuc29ydEJ5RGF0ZUhlbHBlcihhLnN0YXJ0RGF0ZSwgYi5zdGFydERhdGUpO1xuXHRcdFx0aWYgKHNvcnRlZEJ5RGF0ZSAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc29ydGVkQnlEYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTb3J0IGJ5IGRpZmZcblx0XHRcdGNvbnN0IHNvcnRlZEJ5U3BhbiA9IHRoaXMuc29ydEJ5U3BhbkhlbHBlcihhLnN0YXJ0RGF0ZSwgYS5lbmREYXRlLCBiLnN0YXJ0RGF0ZSwgYi5lbmREYXRlKTtcblx0XHRcdGlmIChzb3J0ZWRCeVNwYW4gIT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHNvcnRlZEJ5U3Bhbjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuc29ydEJ5RGF0ZVRpbWVIZWxwZXIoYS5zdGFydERhdGUsIGIuc3RhcnREYXRlKTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBzb3J0QnlEYXRlSGVscGVyKGE6IERhdGUsIGI6IERhdGUpOiBudW1iZXIge1xuXHRcdGNvbnN0IGFTdGFydERhdGUgPSBuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksIGEuZ2V0TW9udGgoKSwgYS5nZXREYXRlKCkpO1xuXHRcdGNvbnN0IGJTdGFydERhdGUgPSBuZXcgRGF0ZShiLmdldEZ1bGxZZWFyKCksIGIuZ2V0TW9udGgoKSwgYi5nZXREYXRlKCkpO1xuXG5cdFx0aWYgKGFTdGFydERhdGUgPCBiU3RhcnREYXRlKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKGFTdGFydERhdGUgPiBiU3RhcnREYXRlKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHB1YmxpYyBzb3J0QnlEYXRlVGltZUhlbHBlcihhOiBEYXRlLCBiOiBEYXRlKTogbnVtYmVyIHtcblx0XHRpZiAoYSA8IGIpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRpZiAoYSA+IGIpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0cHVibGljIHNvcnRCeVNwYW5IZWxwZXIoYVN0YXJ0OiBEYXRlLCBhRW5kOiBEYXRlLCBiU3RhcnQ6IERhdGUsIGJFbmQ6IERhdGUpOiBudW1iZXIge1xuXHRcdGNvbnN0IHNwYW5BID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihhU3RhcnQsIGFFbmQpO1xuXHRcdGNvbnN0IHNwYW5CID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihiU3RhcnQsIGJFbmQpO1xuXG5cdFx0aWYgKHNwYW5BID4gc3BhbkIpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRpZiAoc3BhbkEgPCBzcGFuQikge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cdH1cbn1cbiJdfQ==