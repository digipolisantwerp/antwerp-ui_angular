import { Pipe, NgModule } from '@angular/core';

var toUpperCase = function (value) { return value.toString().toUpperCase(); };
var interpolate = function (label, replaceData) {
    if (!replaceData) {
        return label;
    }
    var escapeStringRegExp = function (prop) { return prop.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'); };
    var pattern = new RegExp("%{(" + Object.keys(replaceData).map(escapeStringRegExp).join('|') + ")}", 'g');
    return label.replace(pattern, function (match, prop) { return replaceData[prop] ? String(replaceData[prop]) : ''; });
};
var InterpolateLabelPipe = /** @class */ (function () {
    function InterpolateLabelPipe() {
    }
    InterpolateLabelPipe.prototype.transform = function (label, replaceData) {
        if (!replaceData || !label) {
            return label;
        }
        return interpolate(label, replaceData);
    };
    return InterpolateLabelPipe;
}());
InterpolateLabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'interpolateLabel'
            },] },
];
var PluralizeLabelPipe = /** @class */ (function () {
    function PluralizeLabelPipe() {
    }
    PluralizeLabelPipe.prototype.transform = function (label, count) {
        if (!label || typeof label === 'string') {
            return (label);
        }
        return count === 1 ? label.singular : label.plural;
    };
    return PluralizeLabelPipe;
}());
PluralizeLabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'pluralizeLabel'
            },] },
];
var LabelsModule = /** @class */ (function () {
    function LabelsModule() {
    }
    return LabelsModule;
}());
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

export { toUpperCase, LabelsModule, InterpolateLabelPipe, PluralizeLabelPipe };
//# sourceMappingURL=acpaas-ui-ngx-utils.js.map
