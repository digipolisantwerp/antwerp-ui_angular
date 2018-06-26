/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Uploader } from '../../classes/uploader.class';
var UploadZoneComponent = /** @class */ (function () {
    function UploadZoneComponent() {
        this.multiple = true;
        this.uploadedFiles = new EventEmitter();
        this.queuedFiles = new EventEmitter();
        this.invalidFiles = new EventEmitter();
        this.hasDragOver = false;
        this.uploadProgress = 0;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    UploadZoneComponent.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.preventAndStop(event);
        this.hasDragOver = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UploadZoneComponent.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.preventAndStop(event);
        this.hasDragOver = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UploadZoneComponent.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.preventAndStop(event);
        this.hasDragOver = false;
        var /** @type {?} */ files = this.fileListToArray(event.dataTransfer.files);
        this.handleFiles(files);
    };
    /**
     * @return {?}
     */
    UploadZoneComponent.prototype.triggerFile = /**
     * @return {?}
     */
    function () {
        this.fileInput.nativeElement.click();
    };
    /**
     * @return {?}
     */
    UploadZoneComponent.prototype.updateFiles = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ files = this.fileListToArray(this.fileInput.nativeElement.files);
        this.handleFiles(files);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadZoneComponent.prototype.handleFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var /** @type {?} */ response = this.uploader.validateFiles(files);
        this.invalidFiles.emit(response.invalidFiles);
        if (this.uploader.options.autoUpload && response.validFiles.length > 0) {
            this.uploadFiles(response.validFiles);
        }
        else {
            this.queuedFiles.emit(response.validFiles);
        }
    };
    /**
     * @param {?} files
     * @return {?}
     */
    UploadZoneComponent.prototype.uploadFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        // Reset progress
        this.uploadProgress = 0;
        this.uploadingFiles = files;
        // upload
        this.uploader.uploadFiles(files).subscribe(function (response) {
            if (response.progress) {
                _this.uploadProgress = Math.floor(response.progress * 100);
            }
            if (response.data) {
                _this.uploadedFiles.emit(response.data);
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * @param {?} list
     * @return {?}
     */
    UploadZoneComponent.prototype.fileListToArray = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        return Array.from(list);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UploadZoneComponent.prototype.preventAndStop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    UploadZoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-upload-zone',
                    template: "<div class=\"m-upload\" *ngIf=\"uploader.options.type === 'drop'\">\n\t<div class=\"m-upload__inner\">\n\t\t<div class=\"m-upload__dropzone\">\n\t\t\t<input type=\"file\" #fileInput (change)=\"updateFiles()\" multiple class=\"m-upload__input\" *ngIf=\"multiple\">\n\t\t\t<input type=\"file\" #fileInput (change)=\"updateFiles()\" class=\"m-upload__input\" *ngIf=\"!multiple\">\n\n\t\t\t<div class=\"m-upload__content\" *ngIf=\"!uploadProgress || uploadProgress === 0\">\n\t\t\t\t<p class=\"m-upload__message\"><ng-content select=\".aui-upload-message\"></ng-content></p>\n\t\t\t</div>\n\n\t\t\t<ng-container *ngIf=\"uploadProgress > 0\">\n\t\t\t\t<p class=\"m-upload__uploads u-text-bold u-margin-bottom-xs\">\n\t\t\t\t\t<ng-container *ngFor=\"let file of uploadingFiles; let last = last\">\n\t\t\t\t\t\t{{ file.name }}<ng-container *ngIf=\"!last\">, </ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</p>\n\t\t\t\t<aui-progress-bar [value]=\"uploadProgress\" max=\"100\"></aui-progress-bar>\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n\n\t<small class=\"m-upload__description\"><ng-content select=\".aui-upload-description\"></ng-content></small>\n</div>\n\n<button class=\"a-button aui-upload-button\" (click)=\"triggerFile()\" *ngIf=\"uploader.options.type === 'button'\">\n\t<ng-content select=\".aui-upload-button\"></ng-content>\n\t<input type=\"file\" #fileInput (change)=\"updateFiles()\" multiple=\"multiple\">\n</button>\n",
                    styles: [".aui-upload-button input[type=file]{display:none}"],
                },] },
    ];
    UploadZoneComponent.propDecorators = {
        fileInput: [{ type: ViewChild, args: ['fileInput',] }],
        uploader: [{ type: Input }],
        multiple: [{ type: Input }],
        uploadedFiles: [{ type: Output }],
        queuedFiles: [{ type: Output }],
        invalidFiles: [{ type: Output }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return UploadZoneComponent;
}());
export { UploadZoneComponent };
function UploadZoneComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadZoneComponent.prototype.fileInput;
    /** @type {?} */
    UploadZoneComponent.prototype.uploader;
    /** @type {?} */
    UploadZoneComponent.prototype.multiple;
    /** @type {?} */
    UploadZoneComponent.prototype.uploadedFiles;
    /** @type {?} */
    UploadZoneComponent.prototype.queuedFiles;
    /** @type {?} */
    UploadZoneComponent.prototype.invalidFiles;
    /** @type {?} */
    UploadZoneComponent.prototype.hasDragOver;
    /** @type {?} */
    UploadZoneComponent.prototype.classNames;
    /** @type {?} */
    UploadZoneComponent.prototype.uploadProgress;
    /** @type {?} */
    UploadZoneComponent.prototype.uploadingFiles;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXpvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkL2NvbXBvbmVudHMvdXBsb2FkLXpvbmUvdXBsb2FkLXpvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O3dCQXVDNUIsSUFBSTs2QkFDMEIsSUFBSSxZQUFZLEVBQVk7MkJBQ2hDLElBQUksWUFBWSxFQUFVOzRCQUNsQixJQUFJLFlBQVksRUFBaUI7MkJBRWhFLEtBQUs7OEJBRUgsQ0FBQzs7Ozs7O0lBSTFCLHdDQUFVOzs7O0lBRGpCLFVBQ2tCLEtBQVU7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUN4Qjs7Ozs7SUFHTSx5Q0FBVzs7OztJQURsQixVQUNtQixLQUFVO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDekI7Ozs7O0lBR00sb0NBQU07Ozs7SUFEYixVQUNjLEtBQVU7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7Ozs7SUFFTSx5Q0FBVzs7OztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7SUFHL0IseUNBQVc7Ozs7UUFDakIscUJBQU0sS0FBSyxHQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O0lBR2YseUNBQVc7Ozs7SUFBckIsVUFBdUIsS0FBSztRQUMzQixxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0M7S0FDRDs7Ozs7SUFFUyx5Q0FBVzs7OztJQUFyQixVQUF1QixLQUFLO1FBQTVCLGlCQW1CQzs7UUFqQkEsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7O1FBRzVCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDekMsVUFBQyxRQUFRO1lBQ1IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztTQUNELEVBQ0QsVUFBQyxHQUFHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQixDQUNELENBQUM7S0FDRjs7Ozs7SUFFUyw2Q0FBZTs7OztJQUF6QixVQUEwQixJQUFjO1FBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCOzs7OztJQUVTLDRDQUFjOzs7O0lBQXhCLFVBQXlCLEtBQVU7UUFDbEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7Z0JBbkhELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsODVDQTRCVjtvQkFDQSxNQUFNLEVBQUUsQ0FBQyxtREFBbUQsQ0FBQztpQkFDN0Q7Ozs0QkFFQyxTQUFTLFNBQUMsV0FBVzsyQkFFckIsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLE1BQU07OEJBQ04sTUFBTTsrQkFDTixNQUFNOzZCQU9OLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBTW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBTXBDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzhCQWhFakM7O1NBc0NhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnZhbGlkRmlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4uLy4uL2NsYXNzZXMvdXBsb2FkZXIuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdXBsb2FkLXpvbmUnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLXVwbG9hZFwiICpuZ0lmPVwidXBsb2FkZXIub3B0aW9ucy50eXBlID09PSAnZHJvcCdcIj5cblx0PGRpdiBjbGFzcz1cIm0tdXBsb2FkX19pbm5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJtLXVwbG9hZF9fZHJvcHpvbmVcIj5cblx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiICNmaWxlSW5wdXQgKGNoYW5nZSk9XCJ1cGRhdGVGaWxlcygpXCIgbXVsdGlwbGUgY2xhc3M9XCJtLXVwbG9hZF9faW5wdXRcIiAqbmdJZj1cIm11bHRpcGxlXCI+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwidXBkYXRlRmlsZXMoKVwiIGNsYXNzPVwibS11cGxvYWRfX2lucHV0XCIgKm5nSWY9XCIhbXVsdGlwbGVcIj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cIm0tdXBsb2FkX19jb250ZW50XCIgKm5nSWY9XCIhdXBsb2FkUHJvZ3Jlc3MgfHwgdXBsb2FkUHJvZ3Jlc3MgPT09IDBcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJtLXVwbG9hZF9fbWVzc2FnZVwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLW1lc3NhZ2VcIj48L25nLWNvbnRlbnQ+PC9wPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJ1cGxvYWRQcm9ncmVzcyA+IDBcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJtLXVwbG9hZF9fdXBsb2FkcyB1LXRleHQtYm9sZCB1LW1hcmdpbi1ib3R0b20teHNcIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWxlIG9mIHVwbG9hZGluZ0ZpbGVzOyBsZXQgbGFzdCA9IGxhc3RcIj5cblx0XHRcdFx0XHRcdHt7IGZpbGUubmFtZSB9fTxuZy1jb250YWluZXIgKm5nSWY9XCIhbGFzdFwiPiwgPC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGF1aS1wcm9ncmVzcy1iYXIgW3ZhbHVlXT1cInVwbG9hZFByb2dyZXNzXCIgbWF4PVwiMTAwXCI+PC9hdWktcHJvZ3Jlc3MtYmFyPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxzbWFsbCBjbGFzcz1cIm0tdXBsb2FkX19kZXNjcmlwdGlvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PC9uZy1jb250ZW50Pjwvc21hbGw+XG48L2Rpdj5cblxuPGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGF1aS11cGxvYWQtYnV0dG9uXCIgKGNsaWNrKT1cInRyaWdnZXJGaWxlKClcIiAqbmdJZj1cInVwbG9hZGVyLm9wdGlvbnMudHlwZSA9PT0gJ2J1dHRvbidcIj5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuXHQ8aW5wdXQgdHlwZT1cImZpbGVcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwidXBkYXRlRmlsZXMoKVwiIG11bHRpcGxlPVwibXVsdGlwbGVcIj5cbjwvYnV0dG9uPlxuYCxcblx0c3R5bGVzOiBbYC5hdWktdXBsb2FkLWJ1dHRvbiBpbnB1dFt0eXBlPWZpbGVde2Rpc3BsYXk6bm9uZX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkWm9uZUNvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIGZpbGVJbnB1dDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKSBwdWJsaWMgdXBsb2FkZXI6IFVwbG9hZGVyO1xuXHRASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGUgPSB0cnVlO1xuXHRAT3V0cHV0KCkgcHVibGljIHVwbG9hZGVkRmlsZXM6IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdFtdPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHF1ZXVlZEZpbGVzOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGludmFsaWRGaWxlczogRXZlbnRFbWl0dGVyPEludmFsaWRGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxJbnZhbGlkRmlsZVtdPigpO1xuXG5cdHB1YmxpYyBoYXNEcmFnT3ZlcjogQm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgY2xhc3NOYW1lczogc3RyaW5nO1xuXHRwdWJsaWMgdXBsb2FkUHJvZ3Jlc3M6IE51bWJlciA9IDA7XG5cdHB1YmxpYyB1cGxvYWRpbmdGaWxlczogRmlsZVtdO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMucHJldmVudEFuZFN0b3AoZXZlbnQpO1xuXHRcdHRoaXMuaGFzRHJhZ092ZXIgPSB0cnVlO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJhZ0xlYXZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcblx0XHR0aGlzLmhhc0RyYWdPdmVyID0gZmFsc2U7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uRHJvcChldmVudDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XG5cdFx0dGhpcy5oYXNEcmFnT3ZlciA9IGZhbHNlO1xuXHRcdGNvbnN0IGZpbGVzID0gdGhpcy5maWxlTGlzdFRvQXJyYXkoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcblx0XHR0aGlzLmhhbmRsZUZpbGVzKGZpbGVzKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRmlsZSgpIHtcblx0XHR0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlRmlsZXMoKSB7XG5cdFx0Y29uc3QgZmlsZXM6IGFueVtdID0gdGhpcy5maWxlTGlzdFRvQXJyYXkodGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC5maWxlcyk7XG5cdFx0dGhpcy5oYW5kbGVGaWxlcyhmaWxlcyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGFuZGxlRmlsZXMgKGZpbGVzKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB0aGlzLnVwbG9hZGVyLnZhbGlkYXRlRmlsZXMoZmlsZXMpO1xuXHRcdHRoaXMuaW52YWxpZEZpbGVzLmVtaXQocmVzcG9uc2UuaW52YWxpZEZpbGVzKTtcblxuXHRcdGlmICh0aGlzLnVwbG9hZGVyLm9wdGlvbnMuYXV0b1VwbG9hZCAmJiByZXNwb25zZS52YWxpZEZpbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMudXBsb2FkRmlsZXMocmVzcG9uc2UudmFsaWRGaWxlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucXVldWVkRmlsZXMuZW1pdChyZXNwb25zZS52YWxpZEZpbGVzKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgdXBsb2FkRmlsZXMgKGZpbGVzKSB7XG5cdFx0Ly8gUmVzZXQgcHJvZ3Jlc3Ncblx0XHR0aGlzLnVwbG9hZFByb2dyZXNzID0gMDtcblx0XHR0aGlzLnVwbG9hZGluZ0ZpbGVzID0gZmlsZXM7XG5cblx0XHQvLyB1cGxvYWRcblx0XHR0aGlzLnVwbG9hZGVyLnVwbG9hZEZpbGVzKGZpbGVzKS5zdWJzY3JpYmUoXG5cdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnByb2dyZXNzKSB7XG5cdFx0XHRcdFx0dGhpcy51cGxvYWRQcm9ncmVzcyA9IE1hdGguZmxvb3IocmVzcG9uc2UucHJvZ3Jlc3MgKiAxMDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy51cGxvYWRlZEZpbGVzLmVtaXQocmVzcG9uc2UuZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQoZXJyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBmaWxlTGlzdFRvQXJyYXkobGlzdDogRmlsZUxpc3QpOiBPYmplY3RbXSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20obGlzdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcHJldmVudEFuZFN0b3AoZXZlbnQ6IGFueSk6IGFueSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxufVxuIl19