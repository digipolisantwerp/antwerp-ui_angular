/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function EventInterface() { }
function EventInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    EventInterface.prototype.startDate;
    /** @type {?} */
    EventInterface.prototype.endDate;
    /** @type {?} */
    EventInterface.prototype.title;
    /* TODO: handle strange member:
    [propName: string]: any;
    */
}
/**
 * @record
 */
export function SlotMetaInterface() { }
function SlotMetaInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    SlotMetaInterface.prototype.week;
    /** @type {?} */
    SlotMetaInterface.prototype.day;
    /** @type {?} */
    SlotMetaInterface.prototype.slot;
    /** @type {?} */
    SlotMetaInterface.prototype.span;
}
/**
 * @record
 */
export function SlotDisplayInterface() { }
function SlotDisplayInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    SlotDisplayInterface.prototype.left;
    /** @type {?} */
    SlotDisplayInterface.prototype.top;
    /** @type {?} */
    SlotDisplayInterface.prototype.width;
}
/**
 * @record
 */
export function SlotInterface() { }
function SlotInterface_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SlotInterface.prototype.meta;
    /** @type {?|undefined} */
    SlotInterface.prototype.display;
    /** @type {?|undefined} */
    SlotInterface.prototype.event;
}
/**
 * @record
 */
export function SlotMapItemInterface() { }
function SlotMapItemInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    SlotMapItemInterface.prototype.slots;
    /** @type {?} */
    SlotMapItemInterface.prototype.events;
}
/**
 * @record
 */
export function DateRangeInterface() { }
function DateRangeInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    DateRangeInterface.prototype.from;
    /** @type {?} */
    DateRangeInterface.prototype.to;
}
/**
 * @record
 */
export function DayRangeInterface() { }
function DayRangeInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    DayRangeInterface.prototype.from;
    /** @type {?} */
    DayRangeInterface.prototype.to;
}
/** @enum {number} */
var DAYS = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
};
export { DAYS };
DAYS[DAYS.SUNDAY] = "SUNDAY";
DAYS[DAYS.MONDAY] = "MONDAY";
DAYS[DAYS.TUESDAY] = "TUESDAY";
DAYS[DAYS.WEDNESDAY] = "WEDNESDAY";
DAYS[DAYS.THURSDAY] = "THURSDAY";
DAYS[DAYS.FRIDAY] = "FRIDAY";
DAYS[DAYS.SATURDAY] = "SATURDAY";
/** @enum {string} */
var VIEWS = {
    DAY: 'DAY',
    WEEK: 'WEEK',
    MONTH: 'MONTH',
    YEAR: 'YEAR',
};
export { VIEWS };
/**
 * @record
 */
export function WeekdayInterface() { }
function WeekdayInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekdayInterface.prototype.date;
    /* TODO: handle strange member:
    [propName: string]: any;
    */
}
/**
 * @record
 */
export function HighLightInterface() { }
function HighLightInterface_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [propName: string]: RangeInterface;
    */
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmRhLnR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdlbmRhLyIsInNvdXJjZXMiOlsibGliL2FnZW5kYS90eXBlcy9hZ2VuZGEudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F5RE8sS0FBSztVQUNKLE1BQU07V0FDTCxPQUFPO1VBQ1IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgRXZlbnRJbnRlcmZhY2Uge1xuXHRzdGFydERhdGU6IERhdGU7XG5cdGVuZERhdGU6IERhdGU7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RNZXRhSW50ZXJmYWNlIHtcblx0d2VlazogbnVtYmVyO1xuXHRkYXk6IG51bWJlcjtcblx0c2xvdDogbnVtYmVyO1xuXHRzcGFuOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdERpc3BsYXlJbnRlcmZhY2Uge1xuXHRsZWZ0OiBzdHJpbmc7XG5cdHRvcDogc3RyaW5nO1xuXHR3aWR0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RJbnRlcmZhY2Uge1xuXHRtZXRhPzogU2xvdE1ldGFJbnRlcmZhY2U7XG5cdGRpc3BsYXk/OiBTbG90RGlzcGxheUludGVyZmFjZTtcblx0ZXZlbnQ/OiBFdmVudEludGVyZmFjZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbG90TWFwSXRlbUludGVyZmFjZSB7XG5cdHNsb3RzOiAoU2xvdEludGVyZmFjZXxib29sZWFuKVtdO1xuXHRldmVudHM6IEV2ZW50SW50ZXJmYWNlW107XG5cbn1cblxuZXhwb3J0IHR5cGUgU2xvdE1hcEludGVyZmFjZSA9IFNsb3RNYXBJdGVtSW50ZXJmYWNlW11bXTtcblxuZXhwb3J0IHR5cGUgRG90TWFwSW50ZXJmYWNlID0gKHN0cmluZylbXVtdW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlSW50ZXJmYWNlIHtcblx0ZnJvbTogRGF0ZXxzdHJpbmc7XG5cdHRvOiBEYXRlfHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlSYW5nZUludGVyZmFjZSB7XG5cdGZyb206IHN0cmluZztcblx0dG86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gREFZUyB7XG5cdFNVTkRBWSxcblx0TU9OREFZLFxuXHRUVUVTREFZLFxuXHRXRURORVNEQVksXG5cdFRIVVJTREFZLFxuXHRGUklEQVksXG5cdFNBVFVSREFZLFxufVxuXG5leHBvcnQgZW51bSBWSUVXUyB7XG5cdERBWSA9ICdEQVknLFxuXHRXRUVLID0gJ1dFRUsnLFxuXHRNT05USCA9ICdNT05USCcsXG5cdFlFQVIgPSAnWUVBUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla2RheUludGVyZmFjZSB7XG5cdGRhdGU6IERhdGU7XG5cdC8vIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0Ly8gdG90YWw6IG51bWJlcjtcblx0Ly8gZG90czogc3RyaW5nW107XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBSYW5nZUludGVyZmFjZSA9IChudW1iZXJbXXxEYXRlKVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpZ2hMaWdodEludGVyZmFjZSB7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogUmFuZ2VJbnRlcmZhY2U7XG59XG4iXX0=