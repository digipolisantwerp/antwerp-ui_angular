/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DAYS, } from '../types/agenda.types';
var DateHelperService = /** @class */ (function () {
    function DateHelperService() {
    }
    /**
     * @param {?} date
     * @param {?} startDayOfWeek
     * @param {?=} range
     * @return {?}
     */
    DateHelperService.prototype.getDaysForMonth = /**
     * @param {?} date
     * @param {?} startDayOfWeek
     * @param {?=} range
     * @return {?}
     */
    function (date, startDayOfWeek, range) {
        if (range === void 0) { range = null; }
        var /** @type {?} */ firstDayOfMonth = this.getFirstWeekDayOfMonth(date, startDayOfWeek);
        var /** @type {?} */ lastDayOfMonth = this.getLastWeekDayOfMonth(date, startDayOfWeek);
        var /** @type {?} */ max = this.dateDiff(firstDayOfMonth, lastDayOfMonth);
        var /** @type {?} */ days = [
            { date: firstDayOfMonth, highlights: this.getHighlights(range, firstDayOfMonth) },
        ];
        for (var /** @type {?} */ i = 0; i < max; i += 1) {
            var /** @type {?} */ nextDay = this.getNextDay(days[i].date);
            days.push({
                highlights: this.getHighlights(range, nextDay),
                date: nextDay,
            });
        }
        return days;
    };
    /**
     * @param {?} range
     * @param {?} date
     * @return {?}
     */
    DateHelperService.prototype.getHighlights = /**
     * @param {?} range
     * @param {?} date
     * @return {?}
     */
    function (range, date) {
        var _this = this;
        if (!range) {
            return '';
        }
        return Object.keys(range).filter(function (key) {
            return _this.inRange(range[key], date);
        }).join(' ');
    };
    /**
     * @param {?} range
     * @param {?} date
     * @return {?}
     */
    DateHelperService.prototype.inRange = /**
     * @param {?} range
     * @param {?} date
     * @return {?}
     */
    function (range, date) {
        var _this = this;
        return range.some(function (item) {
            if (Array.isArray(item)) {
                return item.indexOf(date.getDay()) !== -1;
            }
            var /** @type {?} */ d = new Date(item);
            if (!isNaN(d.getTime())) {
                return _this.compareDates(d, date);
            }
        });
    };
    /**
     * @param {?} days
     * @return {?}
     */
    DateHelperService.prototype.getWeeksForMonth = /**
     * @param {?} days
     * @return {?}
     */
    function (days) {
        var /** @type {?} */ numberOfWeeks = Math.round(days.length / 7);
        return Array(numberOfWeeks).fill(null).map(function (label, index) {
            return days.slice(index * 7, (index + 1) * 7);
        });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateHelperService.prototype.getLastDateOfMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    };
    /**
     * @param {?} date
     * @param {?} dayOfWeek
     * @param {?} orient
     * @return {?}
     */
    DateHelperService.prototype.moveToDayOfWeek = /**
     * @param {?} date
     * @param {?} dayOfWeek
     * @param {?} orient
     * @return {?}
     */
    function (date, dayOfWeek, orient) {
        var /** @type {?} */ diff = (dayOfWeek - date.getDay() + 7 * (orient || +1)) % 7;
        var /** @type {?} */ value = (diff === 0) ? diff += 7 * (orient || +1) : diff;
        var /** @type {?} */ d = new Date(date);
        return new Date(d.setDate(date.getDate() + value * 1));
    };
    /**
     * @param {?} date
     * @param {?} startOfWeek
     * @return {?}
     */
    DateHelperService.prototype.getFirstWeekDayOfMonth = /**
     * @param {?} date
     * @param {?} startOfWeek
     * @return {?}
     */
    function (date, startOfWeek) {
        var /** @type {?} */ firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        if (firstDayOfMonth.getDay() === Number(startOfWeek)) {
            return firstDayOfMonth;
        }
        return this.moveToDayOfWeek(firstDayOfMonth, Number(startOfWeek), -1);
    };
    /**
     * @param {?} date
     * @param {?} startOfWeek
     * @return {?}
     */
    DateHelperService.prototype.getLastWeekDayOfMonth = /**
     * @param {?} date
     * @param {?} startOfWeek
     * @return {?}
     */
    function (date, startOfWeek) {
        var /** @type {?} */ endOfWeek = (startOfWeek === 0 ? 6 : startOfWeek - 1);
        var /** @type {?} */ lastDayOfMonth = this.getLastDateOfMonth(date);
        if (lastDayOfMonth.getDay() === endOfWeek) {
            return lastDayOfMonth;
        }
        return this.moveToDayOfWeek(lastDayOfMonth, endOfWeek, 1);
    };
    /**
     * @param {?} today
     * @return {?}
     */
    DateHelperService.prototype.getNextDay = /**
     * @param {?} today
     * @return {?}
     */
    function (today) {
        var /** @type {?} */ tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return tomorrow;
    };
    /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    DateHelperService.prototype.dateDiff = /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    function (startDate, endDate) {
        // Compare based on date, not on time
        var /** @type {?} */ start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        var /** @type {?} */ end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    };
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    DateHelperService.prototype.compareDates = /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        var /** @type {?} */ date1Year = date1.getFullYear();
        var /** @type {?} */ date1Month = date1.getMonth();
        var /** @type {?} */ date1Date = date1.getDate();
        var /** @type {?} */ date2Year = date2.getFullYear();
        var /** @type {?} */ date2Month = date2.getMonth();
        var /** @type {?} */ date2Date = date2.getDate();
        return date1Year === date2Year && date1Month === date2Month && date1Date === date2Date;
    };
    /**
     * @param {?} startDayOfWeek
     * @return {?}
     */
    DateHelperService.prototype.orderWeekDays = /**
     * @param {?} startDayOfWeek
     * @return {?}
     */
    function (startDayOfWeek) {
        var /** @type {?} */ rotate = function (array, index) {
            var /** @type {?} */ arrayLength = array.length;
            return array.slice(arrayLength - index).concat(array.slice(0, arrayLength - index));
        };
        var /** @type {?} */ weekdays = [0, 1, 2, 3, 4, 5, 6];
        if (startDayOfWeek === DAYS.SUNDAY) {
            return weekdays;
        }
        else {
            return rotate(weekdays, 7 - startDayOfWeek);
        }
    };
    DateHelperService.decorators = [
        { type: Injectable },
    ];
    return DateHelperService;
}());
export { DateHelperService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnZW5kYS8iLCJzb3VyY2VzIjpbImxpYi9hZ2VuZGEvc2VydmljZXMvZGF0ZS1oZWxwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBSU4sSUFBSSxHQUNKLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7SUFLdkIsMkNBQWU7Ozs7OztjQUFDLElBQVUsRUFBRSxjQUFzQixFQUFFLEtBQWdDO1FBQWhDLHNCQUFBLEVBQUEsWUFBZ0M7UUFDMUYscUJBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUUscUJBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDeEUscUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRTNELHFCQUFNLElBQUksR0FBRztZQUNaLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLEVBQUU7U0FDakYsQ0FBQztRQUVGLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakMscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztn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QU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEYsQ0FBQztRQUNGLHFCQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2hCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7U0FDNUM7OztnQkF2SEYsVUFBVTs7NEJBVlg7O1NBV2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogTW92ZSB0aGlzIHRvIEBhY3BhYXMtdWkvanMtZGF0ZS11dGlsc1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuXHRXZWVrZGF5SW50ZXJmYWNlLFxuXHRIaWdoTGlnaHRJbnRlcmZhY2UsXG5cdFJhbmdlSW50ZXJmYWNlLFxuXHREQVlTLFxufSBmcm9tICcuLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZUhlbHBlclNlcnZpY2Uge1xuXG5cdHB1YmxpYyBnZXREYXlzRm9yTW9udGgoZGF0ZTogRGF0ZSwgc3RhcnREYXlPZldlZWs6IG51bWJlciwgcmFuZ2U6IEhpZ2hMaWdodEludGVyZmFjZSA9IG51bGwpOiBXZWVrZGF5SW50ZXJmYWNlW10ge1xuXHRcdGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IHRoaXMuZ2V0Rmlyc3RXZWVrRGF5T2ZNb250aChkYXRlLCBzdGFydERheU9mV2Vlayk7XG5cdFx0Y29uc3QgbGFzdERheU9mTW9udGggPSB0aGlzLmdldExhc3RXZWVrRGF5T2ZNb250aChkYXRlLCBzdGFydERheU9mV2Vlayk7XG5cdFx0Y29uc3QgbWF4ID0gdGhpcy5kYXRlRGlmZihmaXJzdERheU9mTW9udGgsIGxhc3REYXlPZk1vbnRoKTtcblxuXHRcdGNvbnN0IGRheXMgPSBbXG5cdFx0XHR7IGRhdGU6IGZpcnN0RGF5T2ZNb250aCwgaGlnaGxpZ2h0czogdGhpcy5nZXRIaWdobGlnaHRzKHJhbmdlLCBmaXJzdERheU9mTW9udGgpIH0sXG5cdFx0XTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpICs9IDEpIHtcblx0XHRcdGNvbnN0IG5leHREYXkgPSB0aGlzLmdldE5leHREYXkoZGF5c1tpXS5kYXRlKTtcblxuXHRcdFx0ZGF5cy5wdXNoKHtcblx0XHRcdFx0aGlnaGxpZ2h0czogdGhpcy5nZXRIaWdobGlnaHRzKHJhbmdlLCBuZXh0RGF5KSxcblx0XHRcdFx0ZGF0ZTogbmV4dERheSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXlzO1xuXHR9XG5cblx0cHVibGljIGdldEhpZ2hsaWdodHMocmFuZ2U6IEhpZ2hMaWdodEludGVyZmFjZSwgZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG5cdFx0aWYgKCFyYW5nZSkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhyYW5nZSkuZmlsdGVyKChrZXkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmluUmFuZ2UocmFuZ2Vba2V5XSwgZGF0ZSk7XG5cdFx0fSkuam9pbignICcpO1xuXHR9XG5cblx0cHVibGljIGluUmFuZ2UocmFuZ2U6IFJhbmdlSW50ZXJmYWNlLCBkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHJhbmdlLnNvbWUoKGl0ZW0pID0+IHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtLmluZGV4T2YoZGF0ZS5nZXREYXkoKSkgIT09IC0xO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkID0gbmV3IERhdGUoaXRlbSk7XG5cdFx0XHRpZiAoIWlzTmFOKGQuZ2V0VGltZSgpKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb21wYXJlRGF0ZXMoZCwgZGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0V2Vla3NGb3JNb250aChkYXlzOiBXZWVrZGF5SW50ZXJmYWNlW10pOiBXZWVrZGF5SW50ZXJmYWNlW11bXSB7XG5cdFx0Y29uc3QgbnVtYmVyT2ZXZWVrcyA9IE1hdGgucm91bmQoZGF5cy5sZW5ndGggLyA3KTtcblxuXHRcdHJldHVybiBBcnJheShudW1iZXJPZldlZWtzKS5maWxsKG51bGwpLm1hcCgobGFiZWwsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gZGF5cy5zbGljZShpbmRleCAqIDcsIChpbmRleCArIDEpICogNyk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0TGFzdERhdGVPZk1vbnRoKGRhdGU6IERhdGUpOiBEYXRlIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcblx0fVxuXG5cdHB1YmxpYyBtb3ZlVG9EYXlPZldlZWsoZGF0ZTogRGF0ZSwgZGF5T2ZXZWVrOiBudW1iZXIsIG9yaWVudDogbnVtYmVyKTogRGF0ZSB7XG5cdFx0bGV0IGRpZmYgPSAoZGF5T2ZXZWVrIC0gZGF0ZS5nZXREYXkoKSArIDcgKiAob3JpZW50IHx8ICsgMSkpICUgNztcblx0XHRjb25zdCB2YWx1ZSA9IChkaWZmID09PSAwKSA/IGRpZmYgKz0gNyAqIChvcmllbnQgfHwgKzEpIDogZGlmZjtcblx0XHRjb25zdCBkID0gbmV3IERhdGUoZGF0ZSk7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKGQuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHZhbHVlICogMSkpO1xuXHR9XG5cblx0cHVibGljIGdldEZpcnN0V2Vla0RheU9mTW9udGgoZGF0ZTogRGF0ZSwgc3RhcnRPZldlZWs6IG51bWJlcnxzdHJpbmcpOiBEYXRlIHtcblx0XHRjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSk7XG5cdFx0aWYgKGZpcnN0RGF5T2ZNb250aC5nZXREYXkoKSA9PT0gTnVtYmVyKHN0YXJ0T2ZXZWVrKSkge1xuXHRcdFx0cmV0dXJuIGZpcnN0RGF5T2ZNb250aDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubW92ZVRvRGF5T2ZXZWVrKGZpcnN0RGF5T2ZNb250aCwgTnVtYmVyKHN0YXJ0T2ZXZWVrKSwgLTEpO1xuXHR9XG5cblx0cHVibGljIGdldExhc3RXZWVrRGF5T2ZNb250aChkYXRlOiBEYXRlLCBzdGFydE9mV2VlazogbnVtYmVyKTogRGF0ZSB7XG5cdFx0Y29uc3QgZW5kT2ZXZWVrID0gKHN0YXJ0T2ZXZWVrID09PSAwID8gNiA6IHN0YXJ0T2ZXZWVrIC0gMSk7XG5cdFx0Y29uc3QgbGFzdERheU9mTW9udGggPSB0aGlzLmdldExhc3REYXRlT2ZNb250aChkYXRlKTtcblx0XHRpZiAobGFzdERheU9mTW9udGguZ2V0RGF5KCkgPT09IGVuZE9mV2Vlaykge1xuXHRcdFx0cmV0dXJuIGxhc3REYXlPZk1vbnRoO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5tb3ZlVG9EYXlPZldlZWsobGFzdERheU9mTW9udGgsIGVuZE9mV2VlaywgMSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0TmV4dERheSh0b2RheTogRGF0ZSk6IERhdGUge1xuXHRcdGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpO1xuXHRcdHRvbW9ycm93LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG5cdFx0cmV0dXJuIHRvbW9ycm93O1xuXHR9XG5cblx0cHVibGljIGRhdGVEaWZmKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IG51bWJlciB7XG5cdFx0Ly8gQ29tcGFyZSBiYXNlZCBvbiBkYXRlLCBub3Qgb24gdGltZVxuXHRcdGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksIHN0YXJ0RGF0ZS5nZXRNb250aCgpLCBzdGFydERhdGUuZ2V0RGF0ZSgpKTtcblx0XHRjb25zdCBlbmQgPSBuZXcgRGF0ZShlbmREYXRlLmdldEZ1bGxZZWFyKCksIGVuZERhdGUuZ2V0TW9udGgoKSwgZW5kRGF0ZS5nZXREYXRlKCkpO1xuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCkpIC8gKCAxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cdH1cblxuXHRwdWJsaWMgY29tcGFyZURhdGVzKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGRhdGUxWWVhciA9IGRhdGUxLmdldEZ1bGxZZWFyKCk7XG5cdFx0Y29uc3QgZGF0ZTFNb250aCA9IGRhdGUxLmdldE1vbnRoKCk7XG5cdFx0Y29uc3QgZGF0ZTFEYXRlID0gZGF0ZTEuZ2V0RGF0ZSgpO1xuXHRcdGNvbnN0IGRhdGUyWWVhciA9IGRhdGUyLmdldEZ1bGxZZWFyKCk7XG5cdFx0Y29uc3QgZGF0ZTJNb250aCA9IGRhdGUyLmdldE1vbnRoKCk7XG5cdFx0Y29uc3QgZGF0ZTJEYXRlID0gZGF0ZTIuZ2V0RGF0ZSgpO1xuXG5cdFx0cmV0dXJuIGRhdGUxWWVhciA9PT0gZGF0ZTJZZWFyICYmIGRhdGUxTW9udGggPT09IGRhdGUyTW9udGggJiYgZGF0ZTFEYXRlID09PSBkYXRlMkRhdGU7XG5cdH1cblxuXHRwdWJsaWMgb3JkZXJXZWVrRGF5cyhzdGFydERheU9mV2VlazogREFZUyk6IERBWVNbXSB7XG5cdFx0Y29uc3Qgcm90YXRlID0gZnVuY3Rpb24gKGFycmF5LCBpbmRleCkge1xuXHRcdFx0Y29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0XHRyZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXlMZW5ndGggLSBpbmRleCkuY29uY2F0KGFycmF5LnNsaWNlKDAsIGFycmF5TGVuZ3RoIC0gaW5kZXgpKTtcblx0XHR9O1xuXHRcdGNvbnN0IHdlZWtkYXlzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDZdO1xuXG5cdFx0aWYgKHN0YXJ0RGF5T2ZXZWVrID09PSBEQVlTLlNVTkRBWSkge1xuXHRcdFx0cmV0dXJuIHdlZWtkYXlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gcm90YXRlKHdlZWtkYXlzLCA3IC0gc3RhcnREYXlPZldlZWspO1xuXHRcdH1cblx0fVxufVxuIl19