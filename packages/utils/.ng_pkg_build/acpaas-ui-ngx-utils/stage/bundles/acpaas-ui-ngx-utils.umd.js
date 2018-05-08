(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('@acpaas-ui/ngx-utils', ['exports', '@angular/core'], factory) :
	(factory((global['acpaas-ui'] = global['acpaas-ui'] || {}, global['acpaas-ui']['ngx-utils'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
    { type: core.Pipe, args: [{
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
    { type: core.Pipe, args: [{
                name: 'pluralizeLabel'
            },] },
];
var LabelsModule = /** @class */ (function () {
    function LabelsModule() {
    }
    return LabelsModule;
}());
LabelsModule.decorators = [
    { type: core.NgModule, args: [{
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

exports.toUpperCase = toUpperCase;
exports.LabelsModule = LabelsModule;
exports.InterpolateLabelPipe = InterpolateLabelPipe;
exports.PluralizeLabelPipe = PluralizeLabelPipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=acpaas-ui-ngx-utils.umd.js.map
