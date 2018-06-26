/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var UploadQueueComponent = /** @class */ (function () {
    function UploadQueueComponent() {
        this.uploadedFiles = new EventEmitter();
        this.uploadProgress = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    UploadQueueComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.files.splice(index, 1);
    };
    /**
     * @return {?}
     */
    UploadQueueComponent.prototype.uploadFiles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ progress = undefined;
        var /** @type {?} */ data = undefined;
        this.uploader.uploadFiles(this.files).subscribe(function (response) {
            if (response.progress) {
                _this.uploadProgress = Math.floor(response.progress * 100);
            }
            if (response.data) {
                _this.uploadedFiles.emit(response.data);
                _this.files = [];
            }
        });
    };
    UploadQueueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-upload-queue',
                    template: "<ul class=\"m-upload__files u-margin-bottom-xs\">\n    <li *ngFor=\"let file of files; let i = index\">\n        <span class=\"fa fa-file-o\"></span>\n        <span class=\"m-upload__filename\">{{ file.name }}</span>\n\n        <button (click)=\"remove(i)\" class=\"m-upload__delete a-button-transparent a-button--default a-button--small has-icon\">\n            <i class=\"fa fa-close\"></i>\n        </button>\n    </li>\n</ul>\n\n<button class=\"a-button\" *ngIf=\"files.length > 0\" (click)=\"uploadFiles()\">Upload!</button>\n",
                },] },
    ];
    UploadQueueComponent.propDecorators = {
        files: [{ type: Input }],
        uploader: [{ type: Input }],
        uploadedFiles: [{ type: Output }]
    };
    return UploadQueueComponent;
}());
export { UploadQueueComponent };
function UploadQueueComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadQueueComponent.prototype.files;
    /** @type {?} */
    UploadQueueComponent.prototype.uploader;
    /** @type {?} */
    UploadQueueComponent.prototype.uploadedFiles;
    /** @type {?} */
    UploadQueueComponent.prototype.uploadProgress;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXF1ZXVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC1xdWV1ZS91cGxvYWQtcXVldWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7NkJBdUJiLElBQUksWUFBWSxFQUFZOzhCQUVyRCxDQUFDOzs7Ozs7SUFFMUIscUNBQU07Ozs7Y0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFHdEIsMENBQVc7Ozs7O1FBQ2pCLHFCQUFNLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDM0IscUJBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUM5QyxVQUFDLFFBQVE7WUFDUixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDMUQ7WUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNoQjtTQUNELENBQ0QsQ0FBQzs7O2dCQXhDSCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLHFoQkFZVjtpQkFDQTs7O3dCQUVDLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxNQUFNOzsrQkF2QlI7O1NBb0JhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy91cGxvYWRlci5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS11cGxvYWQtcXVldWUnLFxuXHR0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cIm0tdXBsb2FkX19maWxlcyB1LW1hcmdpbi1ib3R0b20teHNcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmlsZXM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1maWxlLW9cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibS11cGxvYWRfX2ZpbGVuYW1lXCI+e3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShpKVwiIGNsYXNzPVwibS11cGxvYWRfX2RlbGV0ZSBhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tZGVmYXVsdCBhLWJ1dHRvbi0tc21hbGwgaGFzLWljb25cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG48L3VsPlxuXG48YnV0dG9uIGNsYXNzPVwiYS1idXR0b25cIiAqbmdJZj1cImZpbGVzLmxlbmd0aCA+IDBcIiAoY2xpY2spPVwidXBsb2FkRmlsZXMoKVwiPlVwbG9hZCE8L2J1dHRvbj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFF1ZXVlQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGZpbGVzOiBGaWxlW107XG5cdEBJbnB1dCgpIHB1YmxpYyB1cGxvYWRlcjtcblx0QE91dHB1dCgpIHB1YmxpYyB1cGxvYWRlZEZpbGVzOiBFdmVudEVtaXR0ZXI8T2JqZWN0W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4oKTtcblxuXHRwdWJsaWMgdXBsb2FkUHJvZ3Jlc3M6IE51bWJlciA9IDA7XG5cblx0cHVibGljIHJlbW92ZShpbmRleCkge1xuXHRcdHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdHB1YmxpYyB1cGxvYWRGaWxlcyAoKSB7XG5cdFx0Y29uc3QgcHJvZ3Jlc3MgPSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLnVwbG9hZGVyLnVwbG9hZEZpbGVzKHRoaXMuZmlsZXMpLnN1YnNjcmliZShcblx0XHRcdChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucHJvZ3Jlc3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwbG9hZFByb2dyZXNzID0gTWF0aC5mbG9vcihyZXNwb25zZS5wcm9ncmVzcyAqIDEwMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEpIHtcblx0XHRcdFx0XHR0aGlzLnVwbG9hZGVkRmlsZXMuZW1pdChyZXNwb25zZS5kYXRhKTtcblx0XHRcdFx0XHR0aGlzLmZpbGVzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG59XG4iXX0=