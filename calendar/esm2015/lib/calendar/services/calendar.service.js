/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export class CalendarService {
    constructor() {
        this.months = {};
    }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    getMonth(month, year) {
        if (year) {
            if (this.currentYear !== year) {
                this.months = {};
            }
            this.currentYear = year;
        }
        if (this.months.hasOwnProperty(month)) {
            return [...this.months[month]];
        }
        const /** @type {?} */ date = new Date();
        date.setMonth(month, 1);
        if (year) {
            date.setFullYear(year);
        }
        const /** @type {?} */ generatedMonth = DateGenerator.generateMonth(date, { startOfWeek: 1, padding: true, generatePadding: true });
        this.months[month] = generatedMonth;
        return [...generatedMonth];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonthForDate(date) {
        return this.getMonth(date.getMonth(), date.getFullYear());
    }
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    getRangeForDate(date, range) {
        return DateGenerator.generateRange(date, range, { startOfWeek: 1 });
    }
    /**
     * @param {?} date
     * @param {?} range
     * @return {?}
     */
    getRangesForDate(date, range) {
        const /** @type {?} */ rangeOptions = { startOfWeek: 1 };
        const /** @type {?} */ before = DateHelper.updateMonth(date, date.getMonth() - 1);
        const /** @type {?} */ after = DateHelper.updateMonth(date, date.getMonth() + 1);
        return {
            before: DateGenerator.generateRange(before, range, rangeOptions),
            current: DateGenerator.generateRange(date, range, rangeOptions),
            after: DateGenerator.generateRange(after, range, rangeOptions),
        };
    }
    /**
     * @param {?=} date
     * @param {?=} range
     * @return {?}
     */
    getClosestDateForRange(date = new Date(), range) {
        const /** @type {?} */ dateRange = this.getRangeForDate(date, range);
        if (DateHelper.dateOutOfRange(date, dateRange)) {
            return date;
        }
        return DateHelper.closestDateForRange(date, dateRange);
    }
}
CalendarService.decorators = [
    { type: Injectable },
];
function CalendarService_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarService.prototype.months;
    /** @type {?} */
    CalendarService.prototype.currentYear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQXlCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7QUFTNUYsTUFBTTs7c0JBQ3FCLEVBQUU7Ozs7Ozs7SUFHNUIsUUFBUSxDQUFDLEtBQWEsRUFBRSxJQUFhO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDL0I7UUFFRCx1QkFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUVELHVCQUFNLGNBQWMsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVuSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUVwQyxNQUFNLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDO0tBQzNCOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFVO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUMxRDs7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVUsRUFBRSxLQUFnQjtRQUMzQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEU7Ozs7OztJQUVELGdCQUFnQixDQUFDLElBQVUsRUFBRSxLQUFnQjtRQUM1Qyx1QkFBTSxZQUFZLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEMsdUJBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSx1QkFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhFLE1BQU0sQ0FBQztZQUNOLE1BQU0sRUFBRSxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDO1lBQ2hFLE9BQU8sRUFBRSxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDO1lBQy9ELEtBQUssRUFBRSxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDO1NBQzlELENBQUM7S0FDRjs7Ozs7O0lBRUQsc0JBQXNCLENBQUMsT0FBYSxJQUFJLElBQUksRUFBRSxFQUFFLEtBQWdCO1FBQy9ELHVCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaO1FBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDdkQ7OztZQTVERCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHsgRGF0ZUdlbmVyYXRvciwgRGF0ZUhlbHBlciwgRGF5LCBNb250aCwgRGF0ZVJhbmdlIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgRGF0ZVJhbmdlTWFwIH0gZnJvbSAnLi4vdHlwZXMvY2FsZW5kYXIudHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoTWFwIHtcblx0W2tleTogbnVtYmVyXTogTW9udGg7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNlcnZpY2Uge1xuXHRwdWJsaWMgbW9udGhzOiBNb250aE1hcCA9IHt9O1xuXHRwcml2YXRlIGN1cnJlbnRZZWFyOiBudW1iZXI7XG5cblx0Z2V0TW9udGgobW9udGg6IG51bWJlciwgeWVhcj86IG51bWJlcik6IE1vbnRoIHtcblx0XHRpZiAoeWVhcikge1xuXHRcdFx0aWYgKHRoaXMuY3VycmVudFllYXIgIT09IHllYXIpIHtcblx0XHRcdFx0dGhpcy5tb250aHMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jdXJyZW50WWVhciA9IHllYXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubW9udGhzLmhhc093blByb3BlcnR5KG1vbnRoKSkge1xuXHRcdFx0cmV0dXJuIFsuLi50aGlzLm1vbnRoc1ttb250aF1dO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGRhdGUuc2V0TW9udGgobW9udGgsIDEpO1xuXG5cdFx0aWYgKHllYXIpIHtcblx0XHRcdGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZ2VuZXJhdGVkTW9udGggPSBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlTW9udGgoZGF0ZSwgeyBzdGFydE9mV2VlazogMSwgcGFkZGluZzogdHJ1ZSwgZ2VuZXJhdGVQYWRkaW5nOiB0cnVlIH0pO1xuXG5cdFx0dGhpcy5tb250aHNbbW9udGhdID0gZ2VuZXJhdGVkTW9udGg7XG5cblx0XHRyZXR1cm4gWy4uLmdlbmVyYXRlZE1vbnRoXTtcblx0fVxuXG5cdGdldE1vbnRoRm9yRGF0ZShkYXRlOiBEYXRlKTogTW9udGgge1xuXHRcdHJldHVybiB0aGlzLmdldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcblx0fVxuXG5cdGdldFJhbmdlRm9yRGF0ZShkYXRlOiBEYXRlLCByYW5nZTogRGF0ZVJhbmdlKTogbnVtYmVyW10ge1xuXHRcdHJldHVybiBEYXRlR2VuZXJhdG9yLmdlbmVyYXRlUmFuZ2UoZGF0ZSwgcmFuZ2UsIHsgc3RhcnRPZldlZWs6IDEgfSk7XG5cdH1cblxuXHRnZXRSYW5nZXNGb3JEYXRlKGRhdGU6IERhdGUsIHJhbmdlOiBEYXRlUmFuZ2UpOiBEYXRlUmFuZ2VNYXAge1xuXHRcdGNvbnN0IHJhbmdlT3B0aW9ucyA9IHsgc3RhcnRPZldlZWs6IDEgfTtcblx0XHRjb25zdCBiZWZvcmUgPSBEYXRlSGVscGVyLnVwZGF0ZU1vbnRoKGRhdGUsIGRhdGUuZ2V0TW9udGgoKSAtIDEpO1xuXHRcdGNvbnN0IGFmdGVyID0gRGF0ZUhlbHBlci51cGRhdGVNb250aChkYXRlLCBkYXRlLmdldE1vbnRoKCkgKyAxKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRiZWZvcmU6IERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVSYW5nZShiZWZvcmUsIHJhbmdlLCByYW5nZU9wdGlvbnMpLFxuXHRcdFx0Y3VycmVudDogRGF0ZUdlbmVyYXRvci5nZW5lcmF0ZVJhbmdlKGRhdGUsIHJhbmdlLCByYW5nZU9wdGlvbnMpLFxuXHRcdFx0YWZ0ZXI6IERhdGVHZW5lcmF0b3IuZ2VuZXJhdGVSYW5nZShhZnRlciwgcmFuZ2UsIHJhbmdlT3B0aW9ucyksXG5cdFx0fTtcblx0fVxuXG5cdGdldENsb3Nlc3REYXRlRm9yUmFuZ2UoZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCksIHJhbmdlOiBEYXRlUmFuZ2UpOiBEYXRlIHtcblx0XHRjb25zdCBkYXRlUmFuZ2UgPSB0aGlzLmdldFJhbmdlRm9yRGF0ZShkYXRlLCByYW5nZSk7XG5cblx0XHRpZiAoRGF0ZUhlbHBlci5kYXRlT3V0T2ZSYW5nZShkYXRlLCBkYXRlUmFuZ2UpKSB7XG5cdFx0XHRyZXR1cm4gZGF0ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gRGF0ZUhlbHBlci5jbG9zZXN0RGF0ZUZvclJhbmdlKGRhdGUsIGRhdGVSYW5nZSk7XG5cdH1cbn1cbiJdfQ==