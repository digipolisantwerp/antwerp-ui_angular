/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
var EventMap = /** @class */ (function () {
    function EventMap(weeks, slots) {
        this.initSlots(weeks, slots);
    }
    /**
     * @param {?} weeks
     * @param {?} availableSlots
     * @return {?}
     */
    EventMap.prototype.initSlots = /**
     * @param {?} weeks
     * @param {?} availableSlots
     * @return {?}
     */
    function (weeks, availableSlots) {
        this.slotMap = weeks.map(function (weekdays) {
            return weekdays.map(function (day) {
                return Object.assign({}, day, {
                    slots: Array(availableSlots).fill(null),
                    events: [],
                });
            });
        });
    };
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} slot
     * @param {?=} span
     * @param {?=} event
     * @return {?}
     */
    EventMap.prototype.fillSlot = /**
     * @param {?} week
     * @param {?} day
     * @param {?} slot
     * @param {?=} span
     * @param {?=} event
     * @return {?}
     */
    function (week, day, slot, span, event) {
        if (span === void 0) { span = 1; }
        if (event === void 0) { event = null; }
        if (event) {
            this.slotMap[week][day].slots[slot] = {
                meta: {
                    week: week,
                    day: day,
                    slot: slot,
                    span: span,
                },
                event: event,
            };
            for (var /** @type {?} */ i = 1; i < span; i += 1) {
                this.fillSlot(week, day + i, slot);
            }
        }
        else {
            this.slotMap[week][day].slots[slot] = true;
        }
    };
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} slot
     * @return {?}
     */
    EventMap.prototype.isSlotFree = /**
     * @param {?} week
     * @param {?} day
     * @param {?} slot
     * @return {?}
     */
    function (week, day, slot) {
        return this.slotMap[week][day].slots[slot] === null;
    };
    /**
     * @param {?} week
     * @param {?} day
     * @return {?}
     */
    EventMap.prototype.getFreeSlot = /**
     * @param {?} week
     * @param {?} day
     * @return {?}
     */
    function (week, day) {
        return this.slotMap[week][day].slots.findIndex(function (o) {
            return o === null;
        });
    };
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} span
     * @param {?} event
     * @return {?}
     */
    EventMap.prototype.addEvent = /**
     * @param {?} week
     * @param {?} day
     * @param {?} span
     * @param {?} event
     * @return {?}
     */
    function (week, day, span, event) {
        if (event) {
            this.slotMap[week][day].events.push(event);
            for (var /** @type {?} */ i = 1; i < span; i += 1) {
                this.slotMap[week][day + i].events.push(event);
            }
        }
    };
    /**
     * @param {?} eventHeight
     * @param {?} weekHeight
     * @param {?} heightOffset
     * @return {?}
     */
    EventMap.prototype.getSlots = /**
     * @param {?} eventHeight
     * @param {?} weekHeight
     * @param {?} heightOffset
     * @return {?}
     */
    function (eventHeight, weekHeight, heightOffset) {
        var /** @type {?} */ numberOfDays = this.slotMap[0].length;
        var /** @type {?} */ dayWidth = ((1 / numberOfDays) * 100);
        var /** @type {?} */ flatten = function (list) { return list.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []); };
        var /** @type {?} */ slots = this.slotMap.map(function (o) {
            return o.map(function (p) {
                return p.slots;
            });
        });
        return flatten(slots).filter(function (slot) {
            return slot !== null && slot !== true;
        }).map(function (slot) {
            return tslib_1.__assign({}, slot, { display: {
                    left: 'calc(' + dayWidth * slot.meta.day + '% + 4px)',
                    top: heightOffset + (weekHeight * slot.meta.week) + (slot.meta.slot * eventHeight) + 'px',
                    width: 'calc(' + dayWidth * slot.meta.span + '% - 8px)',
                } });
        });
    };
    /**
     * @param {?} availableSlots
     * @return {?}
     */
    EventMap.prototype.getEventsMap = /**
     * @param {?} availableSlots
     * @return {?}
     */
    function (availableSlots) {
        return this.slotMap.map(function (days) {
            return days.map(function (day) {
                return Object.assign({}, day, {
                    total: day.events.length,
                    more: day.events.length - availableSlots,
                    dots: day.events.map(function (event) {
                        return event["color"];
                    }).filter(function (color, pos, array) {
                        return array.indexOf(color) === pos;
                    }).slice(0, 3),
                });
            });
        });
    };
    return EventMap;
}());
export { EventMap };
function EventMap_tsickle_Closure_declarations() {
    /** @type {?} */
    EventMap.prototype.slotMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbWFwLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9jbGFzc2VzL2V2ZW50LW1hcC5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQUE7SUFHQyxrQkFBWSxLQUEyQixFQUFFLEtBQWE7UUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDN0I7Ozs7OztJQUVNLDRCQUFTOzs7OztjQUFDLEtBQTJCLEVBQUUsY0FBc0I7UUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUTtZQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7Z0JBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7b0JBQzdCLEtBQUssRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDdkMsTUFBTSxFQUFFLEVBQUU7aUJBQ1YsQ0FBQyxDQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0lBR0csMkJBQVE7Ozs7Ozs7O2NBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxJQUFZLEVBQUUsSUFBZ0IsRUFBRSxLQUFpQjtRQUFuQyxxQkFBQSxFQUFBLFFBQWdCO1FBQUUsc0JBQUEsRUFBQSxZQUFpQjtRQUMzRixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCxJQUFJLE1BQUE7b0JBQ0osR0FBRyxLQUFBO29CQUNILElBQUksTUFBQTtvQkFDSixJQUFJLE1BQUE7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Q0FBQyxDQUFDO2lCQUNkLENBQUMsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQzs7bUJBdEdMO0lBd0dDLENBQUE7QUF0R0Qsb0JBc0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2xvdE1hcEludGVyZmFjZSwgU2xvdEludGVyZmFjZSwgRXZlbnRJbnRlcmZhY2UsIFdlZWtkYXlJbnRlcmZhY2UgfSBmcm9tICcuLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRNYXAge1xuXHRwdWJsaWMgc2xvdE1hcDogU2xvdE1hcEludGVyZmFjZTtcblxuXHRjb25zdHJ1Y3Rvcih3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10sIHNsb3RzOiBudW1iZXIpIHtcblx0XHR0aGlzLmluaXRTbG90cyh3ZWVrcywgc2xvdHMpO1xuXHR9XG5cblx0cHVibGljIGluaXRTbG90cyh3ZWVrczogV2Vla2RheUludGVyZmFjZVtdW10sIGF2YWlsYWJsZVNsb3RzOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNsb3RNYXAgPSB3ZWVrcy5tYXAoKHdlZWtkYXlzKSA9PiB7XG5cdFx0XHRyZXR1cm4gd2Vla2RheXMubWFwKChkYXkpID0+IHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRheSwge1xuXHRcdFx0XHRcdHNsb3RzOiBBcnJheShhdmFpbGFibGVTbG90cykuZmlsbChudWxsKSxcblx0XHRcdFx0XHRldmVudHM6IFtdLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGZpbGxTbG90KHdlZWs6IG51bWJlciwgZGF5OiBudW1iZXIsIHNsb3Q6IG51bWJlciwgc3BhbjogbnVtYmVyID0gMSwgZXZlbnQ6IGFueSA9IG51bGwpOiB2b2lkIHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdHRoaXMuc2xvdE1hcFt3ZWVrXVtkYXldLnNsb3RzW3Nsb3RdID0ge1xuXHRcdFx0XHRtZXRhOiB7XG5cdFx0XHRcdFx0d2Vlayxcblx0XHRcdFx0XHRkYXksXG5cdFx0XHRcdFx0c2xvdCxcblx0XHRcdFx0XHRzcGFuLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRldmVudCxcblx0XHRcdH07XG5cblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BhbjsgaSArPSAxKSB7XG5cdFx0XHRcdHRoaXMuZmlsbFNsb3Qod2VlaywgZGF5ICsgaSwgc2xvdCk7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zbG90TWFwW3dlZWtdW2RheV0uc2xvdHNbc2xvdF0gPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBpc1Nsb3RGcmVlKHdlZWs6IG51bWJlciwgZGF5OiBudW1iZXIsIHNsb3Q6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5zbG90c1tzbG90XSA9PT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBnZXRGcmVlU2xvdCh3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zbG90TWFwW3dlZWtdW2RheV0uc2xvdHMuZmluZEluZGV4KChvKSA9PiB7XG5cdFx0XHRyZXR1cm4gbyA9PT0gbnVsbDtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBhZGRFdmVudCh3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyLCBzcGFuOiBudW1iZXIsIGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdHRoaXMuc2xvdE1hcFt3ZWVrXVtkYXldLmV2ZW50cy5wdXNoKGV2ZW50KTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzcGFuOyBpICs9IDEpIHtcblx0XHRcdFx0dGhpcy5zbG90TWFwW3dlZWtdW2RheSArIGldLmV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0U2xvdHMoZXZlbnRIZWlnaHQ6IG51bWJlciwgd2Vla0hlaWdodDogbnVtYmVyLCBoZWlnaHRPZmZzZXQ6IG51bWJlcik6IFNsb3RJbnRlcmZhY2VbXSB7XG5cdFx0Y29uc3QgbnVtYmVyT2ZEYXlzID0gdGhpcy5zbG90TWFwWzBdLmxlbmd0aDtcblx0XHRjb25zdCBkYXlXaWR0aCA9ICgoMSAvIG51bWJlck9mRGF5cykgKiAxMDApO1xuXG5cdFx0Y29uc3QgZmxhdHRlbiA9IGxpc3QgPT4gbGlzdC5yZWR1Y2UoXG5cdFx0XHQoYSwgYikgPT4gYS5jb25jYXQoQXJyYXkuaXNBcnJheShiKSA/IGZsYXR0ZW4oYikgOiBiKSwgW11cblx0XHQpO1xuXG5cdFx0Y29uc3Qgc2xvdHMgPSB0aGlzLnNsb3RNYXAubWFwKChvKSA9PiB7XG5cdFx0XHRyZXR1cm4gby5tYXAoKHApID0+IHtcblx0XHRcdFx0cmV0dXJuIHAuc2xvdHM7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBmbGF0dGVuKHNsb3RzKS5maWx0ZXIoKHNsb3Q6IFNsb3RJbnRlcmZhY2UpID0+IHtcblx0XHRcdHJldHVybiBzbG90ICE9PSBudWxsICYmIHNsb3QgIT09IHRydWU7XG5cdFx0fSkubWFwKChzbG90OiBTbG90SW50ZXJmYWNlKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zbG90LFxuXHRcdFx0XHRkaXNwbGF5OiB7XG5cdFx0XHRcdFx0bGVmdDogJ2NhbGMoJyArIGRheVdpZHRoICogc2xvdC5tZXRhLmRheSArICclICsgNHB4KScsXG5cdFx0XHRcdFx0dG9wOiBoZWlnaHRPZmZzZXQgKyAod2Vla0hlaWdodCAqIHNsb3QubWV0YS53ZWVrKSArIChzbG90Lm1ldGEuc2xvdCAqIGV2ZW50SGVpZ2h0KSArICdweCcsXG5cdFx0XHRcdFx0d2lkdGg6ICdjYWxjKCcgKyBkYXlXaWR0aCAqIHNsb3QubWV0YS5zcGFuICsgJyUgLSA4cHgpJyxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0RXZlbnRzTWFwKGF2YWlsYWJsZVNsb3RzOiBudW1iZXIpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnNsb3RNYXAubWFwKChkYXlzKSA9PiB7XG5cdFx0XHRyZXR1cm4gZGF5cy5tYXAoKGRheSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XG5cdFx0XHRcdFx0dG90YWw6IGRheS5ldmVudHMubGVuZ3RoLFxuXHRcdFx0XHRcdG1vcmU6IGRheS5ldmVudHMubGVuZ3RoIC0gYXZhaWxhYmxlU2xvdHMsXG5cdFx0XHRcdFx0ZG90czogZGF5LmV2ZW50cy5tYXAoKGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXZlbnQuY29sb3I7XG5cdFx0XHRcdFx0fSkuZmlsdGVyKChjb2xvcjogc3RyaW5nLCBwb3M6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYXJyYXkuaW5kZXhPZihjb2xvcikgPT09IHBvcztcblx0XHRcdFx0XHR9KS5zbGljZSgwLCAzKSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuIl19