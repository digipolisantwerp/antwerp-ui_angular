import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const toUpperCase = (value) => value.toString().toUpperCase();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const interpolate = (label, replaceData) => {
    if (!replaceData) {
        return label;
    }
    const /** @type {?} */ escapeStringRegExp = prop => prop.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    const /** @type {?} */ pattern = new RegExp(`\%{(${Object.keys(replaceData).map(escapeStringRegExp).join('|')})\}`, 'g');
    return label.replace(pattern, (match, prop) => replaceData[prop] ? String(replaceData[prop]) : '');
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InterpolateLabelPipe {
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
class PluralizeLabelPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LabelsModule {
}
LabelsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    InterpolateLabelPipe,
                    PluralizeLabelPipe
                ],
                exports: [
                    InterpolateLabelPipe,
                    PluralizeLabelPipe
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { toUpperCase, LabelsModule, InterpolateLabelPipe, PluralizeLabelPipe };
//# sourceMappingURL=acpaas-ui-ngx-utils.js.map
