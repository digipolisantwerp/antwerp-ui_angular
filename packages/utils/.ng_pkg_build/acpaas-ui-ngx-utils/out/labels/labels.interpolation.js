/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export const /** @type {?} */ interpolate = (label, replaceData) => {
    if (!replaceData) {
        return label;
    }
    const /** @type {?} */ escapeStringRegExp = prop => prop.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    const /** @type {?} */ pattern = new RegExp(`\%{(${Object.keys(replaceData).map(escapeStringRegExp).join('|')})\}`, 'g');
    return label.replace(pattern, (match, prop) => replaceData[prop] ? String(replaceData[prop]) : '');
};
//# sourceMappingURL=labels.interpolation.js.map