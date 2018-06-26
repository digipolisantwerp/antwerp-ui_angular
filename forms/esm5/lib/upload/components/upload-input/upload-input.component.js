/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var UploadInputComponent = /** @class */ (function () {
    function UploadInputComponent() {
        this.propagateChange = function (_) { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    UploadInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { };
    /**
     * @param {?} fn
     * @return {?}
     */
    UploadInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    UploadInputComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadInputComponent.prototype.onUpload = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var /** @type {?} */ data = (this.format ? this.format(files) : files);
        this.propagateChange(data);
    };
    UploadInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-upload-input',
                    template: "<aui-upload [options]=\"options\" (selectUploadedFiles)=\"onUpload($event)\">\n    <div class=\"aui-upload-message\"><ng-content select=\".aui-upload-message\"></ng-content></div>\n    <div class=\"aui-upload-description\"><ng-content select=\".aui-upload-description\"></ng-content></div>\n    <div class=\"aui-upload-button\"><ng-content select=\".aui-upload-button\"></ng-content></div>\n</aui-upload>\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: UploadInputComponent,
                            multi: true,
                        }],
                },] },
    ];
    UploadInputComponent.propDecorators = {
        options: [{ type: Input }],
        format: [{ type: Input }]
    };
    return UploadInputComponent;
}());
export { UploadInputComponent };
function UploadInputComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadInputComponent.prototype.options;
    /** @type {?} */
    UploadInputComponent.prototype.format;
    /** @type {?} */
    UploadInputComponent.prototype.propagateChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC1pbnB1dC91cGxvYWQtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQXlCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OzsrQkFzQmhELFVBQUMsQ0FBTSxLQUFPOzs7Ozs7SUFFaEMseUNBQVU7Ozs7Y0FBQyxLQUFVOzs7OztJQUVyQiwrQ0FBZ0I7Ozs7Y0FBQyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDOzs7OztJQUczQixnREFBaUI7OztJQUFqQixlQUFzQjs7Ozs7SUFFZix1Q0FBUTs7OztjQUFDLEtBQUs7UUFDcEIscUJBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O2dCQTlCNUIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSx3WkFLVjtvQkFDQSxTQUFTLEVBQUUsQ0FBQzs0QkFDWCxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsb0JBQW9COzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWCxDQUFDO2lCQUNGOzs7MEJBRUMsS0FBSzt5QkFDTCxLQUFLOzsrQkFyQlA7O1NBbUJhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCAgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFVwbG9hZE9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy91cGxvYWQudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdXBsb2FkLWlucHV0Jyxcblx0dGVtcGxhdGU6IGA8YXVpLXVwbG9hZCBbb3B0aW9uc109XCJvcHRpb25zXCIgKHNlbGVjdFVwbG9hZGVkRmlsZXMpPVwib25VcGxvYWQoJGV2ZW50KVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLW1lc3NhZ2VcIj48bmctY29udGVudCBzZWxlY3Q9XCIuYXVpLXVwbG9hZC1tZXNzYWdlXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImF1aS11cGxvYWQtYnV0dG9uXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtYnV0dG9uXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuPC9hdWktdXBsb2FkPlxuYCxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nOiBVcGxvYWRJbnB1dENvbXBvbmVudCxcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHRASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogVXBsb2FkT3B0aW9ucztcblx0QElucHV0KCkgcHVibGljIGZvcm1hdDogYW55O1xuXG5cdHB1YmxpYyBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7fVxuXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKCkge31cblxuXHRwdWJsaWMgb25VcGxvYWQoZmlsZXMpIHtcblx0XHRjb25zdCBkYXRhID0gKHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQoZmlsZXMpIDogZmlsZXMpO1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKGRhdGEpO1xuXHR9XG59XG4iXX0=