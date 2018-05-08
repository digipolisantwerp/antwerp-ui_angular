/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { interpolate } from './labels.interpolation';
export class InterpolateLabelPipe {
    /**
     * @param {?} label
     * @param {?} replaceData
     * @return {?}
     */
    transform(label, replaceData) {
        if (!replaceData || !label) {
            return label;
        }
        return interpolate(label, replaceData);
    }
}
InterpolateLabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'interpolateLabel'
            },] },
];
function InterpolateLabelPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    InterpolateLabelPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    InterpolateLabelPipe.ctorParameters;
}
export class PluralizeLabelPipe {
    /**
     * @param {?} label
     * @param {?} count
     * @return {?}
     */
    transform(label, count) {
        if (!label || typeof label === 'string') {
            return /** @type {?} */ (label);
        }
        return count === 1 ? label.singular : label.plural;
    }
}
PluralizeLabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'pluralizeLabel'
            },] },
];
function PluralizeLabelPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PluralizeLabelPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PluralizeLabelPipe.ctorParameters;
}
//# sourceMappingURL=labels.pipe.js.map