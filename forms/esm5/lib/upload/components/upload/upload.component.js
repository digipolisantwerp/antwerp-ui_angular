/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UPLOAD_OPTIONS_DEFAULT } from '../../upload.conf';
import { Uploader } from '../../classes/uploader.class';
var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
        this.options = UPLOAD_OPTIONS_DEFAULT;
        this.selectUploadedFiles = new EventEmitter();
        this.uploadedFiles = [];
        this.invalidFiles = [];
        this.queuedFiles = [];
    }
    /**
     * @return {?}
     */
    UploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uploader = new Uploader(this.options);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadComponent.prototype.onUploadedFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.uploadedFiles = this.uploadedFiles.concat(files);
        this.selectUploadedFiles.emit(this.uploadedFiles);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadComponent.prototype.onInvalidFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.invalidFiles = files;
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadComponent.prototype.onQueuedFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.queuedFiles = this.queuedFiles.concat(files);
    };
    UploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-upload',
                    template: "<div class=\"aui-upload\">\n    <aui-upload-zone [uploader]=\"uploader\" (queuedFiles)=\"onQueuedFiles($event)\" (uploadedFiles)=\"onUploadedFiles($event)\" (invalidFiles)=\"onInvalidFiles($event)\">\n        <div class=\"aui-upload-message\"><ng-content select=\".aui-upload-message\"></ng-content></div>\n        <div class=\"aui-upload-description\"><ng-content select=\".aui-upload-description\"></ng-content></div>\n        <div class=\"aui-upload-button\"><ng-content select=\".aui-upload-button\"></ng-content></div>\n    </aui-upload-zone>\n    <aui-validation-list [invalidFiles]=\"invalidFiles\"></aui-validation-list>\n    <aui-upload-queue *ngIf=\"!options?.autoUpload\" [uploader]=\"uploader\" [files]=\"queuedFiles\" (uploadedFiles)=\"onUploadedFiles($event)\"></aui-upload-queue>\n</div>\n",
                },] },
    ];
    UploadComponent.propDecorators = {
        options: [{ type: Input }],
        selectUploadedFiles: [{ type: Output }]
    };
    return UploadComponent;
}());
export { UploadComponent };
function UploadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadComponent.prototype.options;
    /** @type {?} */
    UploadComponent.prototype.selectUploadedFiles;
    /** @type {?} */
    UploadComponent.prototype.uploader;
    /** @type {?} */
    UploadComponent.prototype.uploadedFiles;
    /** @type {?} */
    UploadComponent.prototype.invalidFiles;
    /** @type {?} */
    UploadComponent.prototype.queuedFiles;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O3VCQWdCZCxzQkFBc0I7bUNBQ0EsSUFBSSxZQUFZLEVBQVk7NkJBRzFELEVBQUU7NEJBQ0UsRUFBRTsyQkFDVixFQUFFOzs7OztJQUUvQixrQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzQzs7Ozs7SUFFTSx5Q0FBZTs7OztjQUFDLEtBQWU7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7O0lBRzVDLHdDQUFjOzs7O2NBQUMsS0FBb0I7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Ozs7OztJQUdwQix1Q0FBYTs7OztjQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O2dCQXBDbkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsc3lCQVNWO2lCQUNBOzs7MEJBRUMsS0FBSztzQ0FDTCxNQUFNOzswQkFyQlI7O1NBbUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVwbG9hZE9wdGlvbnMsIEludmFsaWRGaWxlIH0gZnJvbSAnLi4vLi4vdHlwZXMvdXBsb2FkLnR5cGVzJztcbmltcG9ydCB7IFVQTE9BRF9PUFRJT05TX0RFRkFVTFQgfSBmcm9tICcuLi8uLi91cGxvYWQuY29uZic7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4uLy4uL2NsYXNzZXMvdXBsb2FkZXIuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdXBsb2FkJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZFwiPlxuICAgIDxhdWktdXBsb2FkLXpvbmUgW3VwbG9hZGVyXT1cInVwbG9hZGVyXCIgKHF1ZXVlZEZpbGVzKT1cIm9uUXVldWVkRmlsZXMoJGV2ZW50KVwiICh1cGxvYWRlZEZpbGVzKT1cIm9uVXBsb2FkZWRGaWxlcygkZXZlbnQpXCIgKGludmFsaWRGaWxlcyk9XCJvbkludmFsaWRGaWxlcygkZXZlbnQpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLW1lc3NhZ2VcIj48bmctY29udGVudCBzZWxlY3Q9XCIuYXVpLXVwbG9hZC1tZXNzYWdlXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZC1kZXNjcmlwdGlvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZC1idXR0b25cIj48bmctY29udGVudCBzZWxlY3Q9XCIuYXVpLXVwbG9hZC1idXR0b25cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgPC9hdWktdXBsb2FkLXpvbmU+XG4gICAgPGF1aS12YWxpZGF0aW9uLWxpc3QgW2ludmFsaWRGaWxlc109XCJpbnZhbGlkRmlsZXNcIj48L2F1aS12YWxpZGF0aW9uLWxpc3Q+XG4gICAgPGF1aS11cGxvYWQtcXVldWUgKm5nSWY9XCIhb3B0aW9ucz8uYXV0b1VwbG9hZFwiIFt1cGxvYWRlcl09XCJ1cGxvYWRlclwiIFtmaWxlc109XCJxdWV1ZWRGaWxlc1wiICh1cGxvYWRlZEZpbGVzKT1cIm9uVXBsb2FkZWRGaWxlcygkZXZlbnQpXCI+PC9hdWktdXBsb2FkLXF1ZXVlPlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogVXBsb2FkT3B0aW9ucyA9IFVQTE9BRF9PUFRJT05TX0RFRkFVTFQ7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0VXBsb2FkZWRGaWxlczogRXZlbnRFbWl0dGVyPE9iamVjdFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0W10+KCk7XG5cblx0cHVibGljIHVwbG9hZGVyO1xuXHRwdWJsaWMgdXBsb2FkZWRGaWxlczogT2JqZWN0W10gPSBbXTtcblx0cHVibGljIGludmFsaWRGaWxlczogSW52YWxpZEZpbGVbXSA9IFtdO1xuXHRwdWJsaWMgcXVldWVkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMudXBsb2FkZXIgPSBuZXcgVXBsb2FkZXIodGhpcy5vcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBvblVwbG9hZGVkRmlsZXMoZmlsZXM6IE9iamVjdFtdKSB7XG5cdFx0dGhpcy51cGxvYWRlZEZpbGVzID0gdGhpcy51cGxvYWRlZEZpbGVzLmNvbmNhdChmaWxlcyk7XG5cdFx0dGhpcy5zZWxlY3RVcGxvYWRlZEZpbGVzLmVtaXQodGhpcy51cGxvYWRlZEZpbGVzKTtcblx0fVxuXG5cdHB1YmxpYyBvbkludmFsaWRGaWxlcyhmaWxlczogSW52YWxpZEZpbGVbXSkge1xuXHRcdHRoaXMuaW52YWxpZEZpbGVzID0gZmlsZXM7XG5cdH1cblxuXHRwdWJsaWMgb25RdWV1ZWRGaWxlcyhmaWxlczogRmlsZVtdKSB7XG5cdFx0dGhpcy5xdWV1ZWRGaWxlcyA9IHRoaXMucXVldWVkRmlsZXMuY29uY2F0KGZpbGVzKTtcblx0fVxufVxuIl19