/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class EventMap {
    /**
     * @param {?} weeks
     * @param {?} slots
     */
    constructor(weeks, slots) {
        this.initSlots(weeks, slots);
    }
    /**
     * @param {?} weeks
     * @param {?} availableSlots
     * @return {?}
     */
    initSlots(weeks, availableSlots) {
        this.slotMap = weeks.map((weekdays) => {
            return weekdays.map((day) => {
                return Object.assign({}, day, {
                    slots: Array(availableSlots).fill(null),
                    events: [],
                });
            });
        });
    }
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} slot
     * @param {?=} span
     * @param {?=} event
     * @return {?}
     */
    fillSlot(week, day, slot, span = 1, event = null) {
        if (event) {
            this.slotMap[week][day].slots[slot] = {
                meta: {
                    week,
                    day,
                    slot,
                    span,
                },
                event,
            };
            for (let /** @type {?} */ i = 1; i < span; i += 1) {
                this.fillSlot(week, day + i, slot);
            }
        }
        else {
            this.slotMap[week][day].slots[slot] = true;
        }
    }
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} slot
     * @return {?}
     */
    isSlotFree(week, day, slot) {
        return this.slotMap[week][day].slots[slot] === null;
    }
    /**
     * @param {?} week
     * @param {?} day
     * @return {?}
     */
    getFreeSlot(week, day) {
        return this.slotMap[week][day].slots.findIndex((o) => {
            return o === null;
        });
    }
    /**
     * @param {?} week
     * @param {?} day
     * @param {?} span
     * @param {?} event
     * @return {?}
     */
    addEvent(week, day, span, event) {
        if (event) {
            this.slotMap[week][day].events.push(event);
            for (let /** @type {?} */ i = 1; i < span; i += 1) {
                this.slotMap[week][day + i].events.push(event);
            }
        }
    }
    /**
     * @param {?} eventHeight
     * @param {?} weekHeight
     * @param {?} heightOffset
     * @return {?}
     */
    getSlots(eventHeight, weekHeight, heightOffset) {
        const /** @type {?} */ numberOfDays = this.slotMap[0].length;
        const /** @type {?} */ dayWidth = ((1 / numberOfDays) * 100);
        const /** @type {?} */ flatten = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
        const /** @type {?} */ slots = this.slotMap.map((o) => {
            return o.map((p) => {
                return p.slots;
            });
        });
        return flatten(slots).filter((slot) => {
            return slot !== null && slot !== true;
        }).map((slot) => {
            return Object.assign({}, slot, { display: {
                    left: 'calc(' + dayWidth * slot.meta.day + '% + 4px)',
                    top: heightOffset + (weekHeight * slot.meta.week) + (slot.meta.slot * eventHeight) + 'px',
                    width: 'calc(' + dayWidth * slot.meta.span + '% - 8px)',
                } });
        });
    }
    /**
     * @param {?} availableSlots
     * @return {?}
     */
    getEventsMap(availableSlots) {
        return this.slotMap.map((days) => {
            return days.map((day) => {
                return Object.assign({}, day, {
                    total: day.events.length,
                    more: day.events.length - availableSlots,
                    dots: day.events.map((event) => {
                        return event["color"];
                    }).filter((color, pos, array) => {
                        return array.indexOf(color) === pos;
                    }).slice(0, 3),
                });
            });
        });
    }
}
function EventMap_tsickle_Closure_declarations() {
    /** @type {?} */
    EventMap.prototype.slotMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbWFwLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS9jbGFzc2VzL2V2ZW50LW1hcC5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7Ozs7SUFHTCxZQUFZLEtBQTJCLEVBQUUsS0FBYTtRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM3Qjs7Ozs7O0lBRU0sU0FBUyxDQUFDLEtBQTJCLEVBQUUsY0FBc0I7UUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDckMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRTtvQkFDN0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN2QyxNQUFNLEVBQUUsRUFBRTtpQkFDVixDQUFDLENBQUM7YUFDSCxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7Ozs7Ozs7Ozs7SUFHRyxRQUFRLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBZSxDQUFDLEVBQUUsUUFBYSxJQUFJO1FBQzNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDckMsSUFBSSxFQUFFO29CQUNMLElBQUk7b0JBQ0osR0FBRztvQkFDSCxJQUFJO29CQUNKLElBQUk7aUJBQ0o7Z0JBQ0QsS0FBSzthQUNMLENBQUM7WUFFRixHQUFHLENBQUMsQ0FBQyxx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O2lCQUNkLENBQUMsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQzs7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNsb3RNYXBJbnRlcmZhY2UsIFNsb3RJbnRlcmZhY2UsIEV2ZW50SW50ZXJmYWNlLCBXZWVrZGF5SW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50TWFwIHtcblx0cHVibGljIHNsb3RNYXA6IFNsb3RNYXBJbnRlcmZhY2U7XG5cblx0Y29uc3RydWN0b3Iod2Vla3M6IFdlZWtkYXlJbnRlcmZhY2VbXVtdLCBzbG90czogbnVtYmVyKSB7XG5cdFx0dGhpcy5pbml0U2xvdHMod2Vla3MsIHNsb3RzKTtcblx0fVxuXG5cdHB1YmxpYyBpbml0U2xvdHMod2Vla3M6IFdlZWtkYXlJbnRlcmZhY2VbXVtdLCBhdmFpbGFibGVTbG90czogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zbG90TWFwID0gd2Vla3MubWFwKCh3ZWVrZGF5cykgPT4ge1xuXHRcdFx0cmV0dXJuIHdlZWtkYXlzLm1hcCgoZGF5KSA9PiB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXksIHtcblx0XHRcdFx0XHRzbG90czogQXJyYXkoYXZhaWxhYmxlU2xvdHMpLmZpbGwobnVsbCksXG5cdFx0XHRcdFx0ZXZlbnRzOiBbXSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBmaWxsU2xvdCh3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyLCBzbG90OiBudW1iZXIsIHNwYW46IG51bWJlciA9IDEsIGV2ZW50OiBhbnkgPSBudWxsKTogdm9pZCB7XG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHR0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5zbG90c1tzbG90XSA9IHtcblx0XHRcdFx0bWV0YToge1xuXHRcdFx0XHRcdHdlZWssXG5cdFx0XHRcdFx0ZGF5LFxuXHRcdFx0XHRcdHNsb3QsXG5cdFx0XHRcdFx0c3Bhbixcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXZlbnQsXG5cdFx0XHR9O1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHNwYW47IGkgKz0gMSkge1xuXHRcdFx0XHR0aGlzLmZpbGxTbG90KHdlZWssIGRheSArIGksIHNsb3QpO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2xvdE1hcFt3ZWVrXVtkYXldLnNsb3RzW3Nsb3RdID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaXNTbG90RnJlZSh3ZWVrOiBudW1iZXIsIGRheTogbnVtYmVyLCBzbG90OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zbG90TWFwW3dlZWtdW2RheV0uc2xvdHNbc2xvdF0gPT09IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgZ2V0RnJlZVNsb3Qod2VlazogbnVtYmVyLCBkYXk6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc2xvdE1hcFt3ZWVrXVtkYXldLnNsb3RzLmZpbmRJbmRleCgobykgPT4ge1xuXHRcdFx0cmV0dXJuIG8gPT09IG51bGw7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgYWRkRXZlbnQod2VlazogbnVtYmVyLCBkYXk6IG51bWJlciwgc3BhbjogbnVtYmVyLCBldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHR0aGlzLnNsb3RNYXBbd2Vla11bZGF5XS5ldmVudHMucHVzaChldmVudCk7XG5cblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BhbjsgaSArPSAxKSB7XG5cdFx0XHRcdHRoaXMuc2xvdE1hcFt3ZWVrXVtkYXkgKyBpXS5ldmVudHMucHVzaChldmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldFNsb3RzKGV2ZW50SGVpZ2h0OiBudW1iZXIsIHdlZWtIZWlnaHQ6IG51bWJlciwgaGVpZ2h0T2Zmc2V0OiBudW1iZXIpOiBTbG90SW50ZXJmYWNlW10ge1xuXHRcdGNvbnN0IG51bWJlck9mRGF5cyA9IHRoaXMuc2xvdE1hcFswXS5sZW5ndGg7XG5cdFx0Y29uc3QgZGF5V2lkdGggPSAoKDEgLyBudW1iZXJPZkRheXMpICogMTAwKTtcblxuXHRcdGNvbnN0IGZsYXR0ZW4gPSBsaXN0ID0+IGxpc3QucmVkdWNlKFxuXHRcdFx0KGEsIGIpID0+IGEuY29uY2F0KEFycmF5LmlzQXJyYXkoYikgPyBmbGF0dGVuKGIpIDogYiksIFtdXG5cdFx0KTtcblxuXHRcdGNvbnN0IHNsb3RzID0gdGhpcy5zbG90TWFwLm1hcCgobykgPT4ge1xuXHRcdFx0cmV0dXJuIG8ubWFwKChwKSA9PiB7XG5cdFx0XHRcdHJldHVybiBwLnNsb3RzO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZmxhdHRlbihzbG90cykuZmlsdGVyKChzbG90OiBTbG90SW50ZXJmYWNlKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2xvdCAhPT0gbnVsbCAmJiBzbG90ICE9PSB0cnVlO1xuXHRcdH0pLm1hcCgoc2xvdDogU2xvdEludGVyZmFjZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc2xvdCxcblx0XHRcdFx0ZGlzcGxheToge1xuXHRcdFx0XHRcdGxlZnQ6ICdjYWxjKCcgKyBkYXlXaWR0aCAqIHNsb3QubWV0YS5kYXkgKyAnJSArIDRweCknLFxuXHRcdFx0XHRcdHRvcDogaGVpZ2h0T2Zmc2V0ICsgKHdlZWtIZWlnaHQgKiBzbG90Lm1ldGEud2VlaykgKyAoc2xvdC5tZXRhLnNsb3QgKiBldmVudEhlaWdodCkgKyAncHgnLFxuXHRcdFx0XHRcdHdpZHRoOiAnY2FsYygnICsgZGF5V2lkdGggKiBzbG90Lm1ldGEuc3BhbiArICclIC0gOHB4KScsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGdldEV2ZW50c01hcChhdmFpbGFibGVTbG90czogbnVtYmVyKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5zbG90TWFwLm1hcCgoZGF5cykgPT4ge1xuXHRcdFx0cmV0dXJuIGRheXMubWFwKChkYXkpID0+IHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRheSwge1xuXHRcdFx0XHRcdHRvdGFsOiBkYXkuZXZlbnRzLmxlbmd0aCxcblx0XHRcdFx0XHRtb3JlOiBkYXkuZXZlbnRzLmxlbmd0aCAtIGF2YWlsYWJsZVNsb3RzLFxuXHRcdFx0XHRcdGRvdHM6IGRheS5ldmVudHMubWFwKChldmVudDogRXZlbnRJbnRlcmZhY2UpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV2ZW50LmNvbG9yO1xuXHRcdFx0XHRcdH0pLmZpbHRlcigoY29sb3I6IHN0cmluZywgcG9zOiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFycmF5LmluZGV4T2YoY29sb3IpID09PSBwb3M7XG5cdFx0XHRcdFx0fSkuc2xpY2UoMCwgMyksXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==