/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DateHelperService } from './date-helper.service';
import { EventMap } from '../classes/event-map.class';
import { SortingService } from './sorting.service';
export class MonthViewSlotsService {
    /**
     * @param {?} dateHelperService
     * @param {?} sortingService
     */
    constructor(dateHelperService, sortingService) {
        this.dateHelperService = dateHelperService;
        this.sortingService = sortingService;
    }
    /**
     * @param {?} events
     * @param {?} weeks
     * @param {?} availableSlots
     * @return {?}
     */
    generateEventMap(events, weeks, availableSlots) {
        const /** @type {?} */ firstDay = new Date(weeks[0][0].date);
        const /** @type {?} */ lastDay = new Date(weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].date);
        // 1. Format
        const /** @type {?} */ mappedEvents = this.formatEvents(events);
        // 2. Remove events waar de endDate < startMonth of endDate > endMonth
        const /** @type {?} */ filteredEvents = this.filterEvents(mappedEvents, firstDay, lastDay);
        // 3. Sorteer van oud naar nieuw en van lang event naar kort event
        const /** @type {?} */ sortedEvents = this.sortingService.sortEvents(filteredEvents);
        // 4. Fill EventMap
        this.eventMap = new EventMap(weeks, availableSlots);
        sortedEvents.forEach((event) => {
            if (event.startDate < firstDay) {
                this.calculate(firstDay, event.endDate, 0, 0, event, weeks);
            }
            else {
                for (let /** @type {?} */ week = 0; week < weeks.length; week += 1) {
                    for (let /** @type {?} */ day = 0; day < weeks[week].length; day += 1) {
                        const /** @type {?} */ date = weeks[week][day].date;
                        if (this.dateHelperService.compareDates(event.startDate, date)) {
                            this.calculate(event.startDate, event.endDate, week, day, event, weeks);
                            // Stop for loop --> improve performance
                            day = weeks[week].length;
                            week = weeks.length - 1;
                        }
                    }
                }
            }
        });
        return this.eventMap;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    formatEvents(events) {
        return events.map((event) => {
            return Object.assign({}, event, {
                startDate: new Date(event.startDate),
                endDate: new Date(event.endDate),
            });
        });
    }
    /**
     * @param {?} events
     * @param {?} firstDay
     * @param {?} lastDay
     * @return {?}
     */
    filterEvents(events, firstDay, lastDay) {
        return events.filter((event) => {
            return new Date(event.endDate) > firstDay && new Date(event.startDate) < lastDay;
        });
    }
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} week
     * @param {?} day
     * @param {?} event
     * @param {?} weeks
     * @return {?}
     */
    calculate(start, end, week, day, event, weeks) {
        const /** @type {?} */ weekdaysLength = weeks[0].length;
        const /** @type {?} */ lengthOfEvent = this.dateHelperService.dateDiff(start, end);
        const /** @type {?} */ span = lengthOfEvent + 1 <= weekdaysLength - day ? lengthOfEvent + 1 : weekdaysLength - day;
        const /** @type {?} */ difftest = (lengthOfEvent - span) + 1;
        this.eventMap.addEvent(week, day, span, event);
        const /** @type {?} */ slot = this.eventMap.getFreeSlot(week, day);
        if (slot !== -1) {
            this.eventMap.fillSlot(week, day, slot, span, event);
        }
        if (difftest > 1 && week + 1 < weeks.length) {
            this.calculate(weeks[week + 1][0].date, end, week + 1, 0, event, weeks);
        }
    }
}
MonthViewSlotsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MonthViewSlotsService.ctorParameters = () => [
    { type: DateHelperService },
    { type: SortingService }
];
function MonthViewSlotsService_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthViewSlotsService.prototype.eventMap;
    /** @type {?} */
    MonthViewSlotsService.prototype.dateHelperService;
    /** @type {?} */
    MonthViewSlotsService.prototype.sortingService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy1zbG90cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9zZXJ2aWNlcy9tb250aC12aWV3LXNsb3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRCxNQUFNOzs7OztJQUdMLFlBQ1MsbUJBQ0E7UUFEQSxzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYztLQUNuQjs7Ozs7OztJQUVHLGdCQUFnQixDQUFDLE1BQXdCLEVBQUUsS0FBMkIsRUFBRSxjQUFzQjtRQUNwRyx1QkFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLHVCQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBRzNGLHVCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUcvQyx1QkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztRQUcxRSx1QkFBTSxZQUFZLEdBQXFCLElBQUksQ0FB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QUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ2xHLHVCQUFNLFFBQVEsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFL0MsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyRDtRQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEU7Ozs7WUE1RUYsVUFBVTs7OztZQUpGLGlCQUFpQjtZQUVqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSwgV2Vla2RheUludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1hcCB9IGZyb20gJy4uL2NsYXNzZXMvZXZlbnQtbWFwLmNsYXNzJztcbmltcG9ydCB7IFNvcnRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zb3J0aW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3U2xvdHNTZXJ2aWNlIHtcblx0cHVibGljIGV2ZW50TWFwOiBFdmVudE1hcDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZSxcblx0XHRwcml2YXRlIHNvcnRpbmdTZXJ2aWNlOiBTb3J0aW5nU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIGdlbmVyYXRlRXZlbnRNYXAoZXZlbnRzOiBFdmVudEludGVyZmFjZVtdLCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10sIGF2YWlsYWJsZVNsb3RzOiBudW1iZXIpOiBFdmVudE1hcCB7XG5cdFx0Y29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZSh3ZWVrc1swXVswXS5kYXRlKTtcblx0XHRjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUod2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV1bd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMV0uZGF0ZSk7XG5cblx0XHQvLyAxLiBGb3JtYXRcblx0XHRjb25zdCBtYXBwZWRFdmVudHMgPSB0aGlzLmZvcm1hdEV2ZW50cyhldmVudHMpO1xuXG5cdFx0Ly8gMi4gUmVtb3ZlIGV2ZW50cyB3YWFyIGRlIGVuZERhdGUgPCBzdGFydE1vbnRoIG9mIGVuZERhdGUgPiBlbmRNb250aFxuXHRcdGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gdGhpcy5maWx0ZXJFdmVudHMobWFwcGVkRXZlbnRzLCBmaXJzdERheSwgbGFzdERheSk7XG5cblx0XHQvLyAzLiBTb3J0ZWVyIHZhbiBvdWQgbmFhciBuaWV1dyBlbiB2YW4gbGFuZyBldmVudCBuYWFyIGtvcnQgZXZlbnRcblx0XHRjb25zdCBzb3J0ZWRFdmVudHM6IEV2ZW50SW50ZXJmYWNlW10gPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLnNvcnRFdmVudHMoZmlsdGVyZWRFdmVudHMpO1xuXG5cdFx0Ly8gNC4gRmlsbCBFdmVudE1hcFxuXHRcdHRoaXMuZXZlbnRNYXAgPSBuZXcgRXZlbnRNYXAod2Vla3MsIGF2YWlsYWJsZVNsb3RzKTtcblx0XHRzb3J0ZWRFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5zdGFydERhdGUgPCBmaXJzdERheSkge1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZShmaXJzdERheSwgZXZlbnQuZW5kRGF0ZSwgMCwgMCwgZXZlbnQsIHdlZWtzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla3MubGVuZ3RoOyB3ZWVrICs9IDEpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCB3ZWVrc1t3ZWVrXS5sZW5ndGg7IGRheSArPSAxKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRlID0gd2Vla3Nbd2Vla11bZGF5XS5kYXRlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZGF0ZUhlbHBlclNlcnZpY2UuY29tcGFyZURhdGVzKGV2ZW50LnN0YXJ0RGF0ZSwgZGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jYWxjdWxhdGUoZXZlbnQuc3RhcnREYXRlLCBldmVudC5lbmREYXRlLCB3ZWVrLCBkYXksIGV2ZW50LCB3ZWVrcyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3RvcCBmb3IgbG9vcCAtLT4gaW1wcm92ZSBwZXJmb3JtYW5jZVxuXHRcdFx0XHRcdFx0XHRkYXkgPSB3ZWVrc1t3ZWVrXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHdlZWsgPSB3ZWVrcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRNYXA7XG5cdH1cblxuXHRwdWJsaWMgZm9ybWF0RXZlbnRzKGV2ZW50cykge1xuXHRcdHJldHVybiBldmVudHMubWFwKChldmVudDogRXZlbnRJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge1xuXHRcdFx0XHRzdGFydERhdGU6IG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSksXG5cdFx0XHRcdGVuZERhdGU6IG5ldyBEYXRlKGV2ZW50LmVuZERhdGUpLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZmlsdGVyRXZlbnRzKGV2ZW50cywgZmlyc3REYXksIGxhc3REYXkpIHtcblx0XHRyZXR1cm4gZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZShldmVudC5lbmREYXRlKSA+IGZpcnN0RGF5ICYmIG5ldyBEYXRlKGV2ZW50LnN0YXJ0RGF0ZSkgPCBsYXN0RGF5O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGNhbGN1bGF0ZShzdGFydDogRGF0ZSwgZW5kOiBEYXRlLCB3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyLCBldmVudDogYW55LCB3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10pOiB2b2lkIHtcblx0XHRjb25zdCB3ZWVrZGF5c0xlbmd0aCA9IHdlZWtzWzBdLmxlbmd0aDtcblx0XHRjb25zdCBsZW5ndGhPZkV2ZW50ID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5kYXRlRGlmZihzdGFydCwgZW5kKTtcblx0XHRjb25zdCBzcGFuID0gbGVuZ3RoT2ZFdmVudCArIDEgPD0gd2Vla2RheXNMZW5ndGggLSBkYXkgPyBsZW5ndGhPZkV2ZW50ICsgMSA6IHdlZWtkYXlzTGVuZ3RoIC0gZGF5O1xuXHRcdGNvbnN0IGRpZmZ0ZXN0ID0gKGxlbmd0aE9mRXZlbnQgLSBzcGFuKSArIDE7XG5cblx0XHR0aGlzLmV2ZW50TWFwLmFkZEV2ZW50KHdlZWssIGRheSwgc3BhbiwgZXZlbnQpO1xuXG5cdFx0Y29uc3Qgc2xvdCA9IHRoaXMuZXZlbnRNYXAuZ2V0RnJlZVNsb3Qod2VlaywgZGF5KTtcblx0XHRpZiAoc2xvdCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuZXZlbnRNYXAuZmlsbFNsb3Qod2VlaywgZGF5LCBzbG90LCBzcGFuLCBldmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmZ0ZXN0ID4gMSAmJiB3ZWVrICsgMSA8IHdlZWtzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGUod2Vla3Nbd2VlayArIDFdWzBdLmRhdGUsIGVuZCwgd2VlayArIDEsIDAsIGV2ZW50LCB3ZWVrcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=