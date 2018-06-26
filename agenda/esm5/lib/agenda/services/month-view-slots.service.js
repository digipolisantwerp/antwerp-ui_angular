/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DateHelperService } from './date-helper.service';
import { EventMap } from '../classes/event-map.class';
import { SortingService } from './sorting.service';
var MonthViewSlotsService = /** @class */ (function () {
    function MonthViewSlotsService(dateHelperService, sortingService) {
        this.dateHelperService = dateHelperService;
        this.sortingService = sortingService;
    }
    /**
     * @param {?} events
     * @param {?} weeks
     * @param {?} availableSlots
     * @return {?}
     */
    MonthViewSlotsService.prototype.generateEventMap = /**
     * @param {?} events
     * @param {?} weeks
     * @param {?} availableSlots
     * @return {?}
     */
    function (events, weeks, availableSlots) {
        var _this = this;
        var /** @type {?} */ firstDay = new Date(weeks[0][0].date);
        var /** @type {?} */ lastDay = new Date(weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].date);
        // 1. Format
        var /** @type {?} */ mappedEvents = this.formatEvents(events);
        // 2. Remove events waar de endDate < startMonth of endDate > endMonth
        var /** @type {?} */ filteredEvents = this.filterEvents(mappedEvents, firstDay, lastDay);
        // 3. Sorteer van oud naar nieuw en van lang event naar kort event
        var /** @type {?} */ sortedEvents = this.sortingService.sortEvents(filteredEvents);
        // 4. Fill EventMap
        this.eventMap = new EventMap(weeks, availableSlots);
        sortedEvents.forEach(function (event) {
            if (event.startDate < firstDay) {
                _this.calculate(firstDay, event.endDate, 0, 0, event, weeks);
            }
            else {
                for (var /** @type {?} */ week = 0; week < weeks.length; week += 1) {
                    for (var /** @type {?} */ day = 0; day < weeks[week].length; day += 1) {
                        var /** @type {?} */ date = weeks[week][day].date;
                        if (_this.dateHelperService.compareDates(event.startDate, date)) {
                            _this.calculate(event.startDate, event.endDate, week, day, event, weeks);
                            // Stop for loop --> improve performance
                            day = weeks[week].length;
                            week = weeks.length - 1;
                        }
                    }
                }
            }
        });
        return this.eventMap;
    };
    /**
     * @param {?} events
     * @return {?}
     */
    MonthViewSlotsService.prototype.formatEvents = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        return events.map(function (event) {
            return Object.assign({}, event, {
                startDate: new Date(event.startDate),
                endDate: new Date(event.endDate),
            });
        });
    };
    /**
     * @param {?} events
     * @param {?} firstDay
     * @param {?} lastDay
     * @return {?}
     */
    MonthViewSlotsService.prototype.filterEvents = /**
     * @param {?} events
     * @param {?} firstDay
     * @param {?} lastDay
     * @return {?}
     */
    function (events, firstDay, lastDay) {
        return events.filter(function (event) {
            return new Date(event.endDate) > firstDay && new Date(event.startDate) < lastDay;
        });
    };
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} week
     * @param {?} day
     * @param {?} event
     * @param {?} weeks
     * @return {?}
     */
    MonthViewSlotsService.prototype.calculate = /**
     * @param {?} start
     * @param {?} end
     * @param {?} week
     * @param {?} day
     * @param {?} event
     * @param {?} weeks
     * @return {?}
     */
    function (start, end, week, day, event, weeks) {
        var /** @type {?} */ weekdaysLength = weeks[0].length;
        var /** @type {?} */ lengthOfEvent = this.dateHelperService.dateDiff(start, end);
        var /** @type {?} */ span = lengthOfEvent + 1 <= weekdaysLength - day ? lengthOfEvent + 1 : weekdaysLength - day;
        var /** @type {?} */ difftest = (lengthOfEvent - span) + 1;
        this.eventMap.addEvent(week, day, span, event);
        var /** @type {?} */ slot = this.eventMap.getFreeSlot(week, day);
        if (slot !== -1) {
            this.eventMap.fillSlot(week, day, slot, span, event);
        }
        if (difftest > 1 && week + 1 < weeks.length) {
            this.calculate(weeks[week + 1][0].date, end, week + 1, 0, event, weeks);
        }
    };
    MonthViewSlotsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MonthViewSlotsService.ctorParameters = function () { return [
        { type: DateHelperService },
        { type: SortingService }
    ]; };
    return MonthViewSlotsService;
}());
export { MonthViewSlotsService };
function MonthViewSlotsService_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthViewSlotsService.prototype.eventMap;
    /** @type {?} */
    MonthViewSlotsService.prototype.dateHelperService;
    /** @type {?} */
    MonthViewSlotsService.prototype.sortingService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy1zbG90cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFNbEQsK0JBQ1MsbUJBQ0E7UUFEQSxzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYztLQUNuQjs7Ozs7OztJQUVHLGdEQUFnQjs7Ozs7O2NBQUMsTUFBd0IsRUFBRSxLQUEyQixFQUFFLGNBQXNCOztRQUNwRyxxQkFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLHFCQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBRzNGLHFCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUcvQyxxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztRQUcxRSxxQkFBTSxZQUFZLEdBQXFCLElBQUksQ0FBQyxjQUFj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YSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUNsRyxxQkFBTSxRQUFRLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRS9DLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7UUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hFOzs7Z0JBNUVGLFVBQVU7Ozs7Z0JBSkYsaUJBQWlCO2dCQUVqQixjQUFjOztnQ0FMdkI7O1NBUWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSwgV2Vla2RheUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1hcCB9IGZyb20gJy4uL2NsYXNzZXMvZXZlbnQtbWFwLmNsYXNzJztcbmltcG9ydCB7IFNvcnRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zb3J0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIHtcblx0cHVibGljIGV2ZW50TWFwOiBFdmVudE1hcDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZSxcblx0XHRwcml2YXRlIHNvcnRpbmdTZXJ2aWNlOiBTb3J0aW5nU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIGdlbmVyYXRlRXZlbnRNYXAoZXZlbnRzOiBFdmVudEludGVyZmFjZVtdLCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10sIGF2YWlsYWJsZVNsb3RzOiBudW1iZXIpOiBFdmVudE1hcCB7XG5cdFx0Y29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZSh3ZWVrc1swXVswXS5kYXRlKTtcblx0XHRjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUod2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZSk7XG5cblx0XHQvLyAxLiBGb3JtYXRcblx0XHRjb25zdCBtYXBwZWRFdmVudHMgPSB0aGlzLmZvcm1hdEV2ZW50cyhldmVudHMpO1xuXG5cdFx0Ly8gMi4gUmVtb3ZlIGV2ZW50cyB3YWFyIGRlIGVuZERhdGUgPCBzdGFydE1vbnRoIG9mIGVuZERhdGUgPiBlbmRNb250aFxuXHRcdGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gdGhpcy5maWx0ZXJFdmVudHMobWFwcGVkRXZlbnRzLCBmaXJzdERheSwgbGFzdERheSk7XG5cblx0XHQvLyAzLiBTb3J0ZWVyIHZhbiBvdWQgbmFhciBuaWV1dyBlbiB2YW4gbGFuZyBldmVudCBuYWFyIGtvcnQgZXZlbnRcblx0XHRjb25zdCBzb3J0ZWRFdmVudHM6IEV2ZW50SW50ZXJmYWNlW10gPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLnNvcnRFdmVudHMoZmlsdGVyZWRFdmVudHMpO1xuXG5cdFx0Ly8gNC4gRmlsbCBFdmVudE1hcFxuXHRcdHRoaXMuZXZlbnRNYXAgPSBuZXcgRXZlbnRNYXAod2Vla3MsIGF2YWlsYWJsZVNsb3RzKTtcblx0XHRzb3J0ZWRFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5zdGFydERhdGUgPCBmaXJzdERheSkge1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZShmaXJzdERheSwgZXZlbnQuZW5kRGF0ZSwgMCwgMCwgZXZlbnQsIHdlZWtzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla3MubGVuZ3RoOyB3ZWVrICs9IDEpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCB3ZWVrc1t3ZWVrXS5sZW5ndGg7IGRheSArPSAxKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRlID0gd2Vla3Nbd2Vla11bZGF5XS5kYXRlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuY29tcGFyZURhdGVzKGV2ZW50LnN0YXJ0RGF0ZSwgZGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjdWxhdGUoZXZlbnQuc3RhcnREYXRlLCBldmVudC5lbmREYXRlLCB3ZWVrLCBkYXksIGV2ZW50LCB3ZWVrcyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3RvcCBmb3IgbG9vcCAtLT4gaW1wcm92ZSBwZXJmb3JtYW5jZVxuXHRcdFx0XHRcdFx0XHRkYXkgPSB3ZWVrc1t3ZWVrXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHdlZWsgPSB3ZWVrcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRNYXA7XG5cdH1cblxuXHRwdWJsaWMgZm9ybWF0RXZlbnRzKGV2ZW50cykge1xuXHRcdHJldHVybiBldmVudHMubWFwKChldmVudDogRXZlbnRJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge1xuXHRcdFx0XHRzdGFydERhdGU6IG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSksXG5cdFx0XHRcdGVuZERhdGU6IG5ldyBEYXRlKGV2ZW50LmVuZERhdGUpLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVyRXZlbnRzKGV2ZW50cywgZmlyc3REYXksIGxhc3REYXkpIHtcblx0XHRyZXR1cm4gZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZShldmVudC5lbmREYXRlKSA+IGZpcnN0RGF5ICYmIG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSkgPCBsYXN0RGF5O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGNhbGN1bGF0ZShzdGFydDogRGF0ZSwgZW5kOiBEYXRlLCB3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyLCBldmVudDogYW55LCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pOiB2b2lkIHtcblx0XHRjb25zdCB3ZWVrZGF5c0xlbmd0aCA9IHdlZWtzWzBdLmxlbmd0aDtcblx0XHRjb25zdCBsZW5ndGhPZkV2ZW50ID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihzdGFydCwgZW5kKTtcblx0XHRjb25zdCBzcGFuID0gbGVuZ3RoT2ZFdmVudCArIDEgPD0gd2Vla2RheXNMZW5ndGggLSBkYXkgPyBsZW5ndGhPZkV2ZW50ICsgMSA6IHdlZWtkYXlzTGVuZ3RoIC0gZGF5O1xuXHRcdGNvbnN0IGRpZmZ0ZXN0ID0gKGxlbmd0aE9mRXZlbnQgLSBzcGFuKSArIDE7XG5cblx0XHR0aGlzLmV2ZW50TWFwLmFkZEV2ZW50KHdlZWssIGRheSwgc3BhbiwgZXZlbnQpO1xuXG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuZXZlbnRNYXAuZ2V0RnJlZVNsb3Qod2VlaywgZGF5KTtcblx0XHRpZiAoc2xvdCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuZXZlbnRNYXAuZmlsbFNsb3Qod2VlaywgZGF5LCBzbG90LCBzcGFuLCBldmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmZ0ZXN0ID4gMSAmJiB3ZWVrICsgMSA8IHdlZWtzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGUod2Vla3Nbd2VlayArIDFdWzBdLmRhdGUsIGVuZCwgd2VlayArIDEsIDAsIGV2ZW50LCB3ZWVrcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=