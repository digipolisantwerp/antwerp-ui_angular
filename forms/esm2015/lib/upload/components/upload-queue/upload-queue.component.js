/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class UploadQueueComponent {
    constructor() {
        this.uploadedFiles = new EventEmitter();
        this.uploadProgress = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        this.files.splice(index, 1);
    }
    /**
     * @return {?}
     */
    uploadFiles() {
        const /** @type {?} */ progress = undefined;
        const /** @type {?} */ data = undefined;
        this.uploader.uploadFiles(this.files).subscribe((response) => {
            if (response.progress) {
                this.uploadProgress = Math.floor(response.progress * 100);
            }
            if (response.data) {
                this.uploadedFiles.emit(response.data);
                this.files = [];
            }
        });
    }
}
UploadQueueComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-upload-queue',
                template: `<ul class="m-upload__files u-margin-bottom-xs">
    <li *ngFor="let file of files; let i = index">
        <span class="fa fa-file-o"></span>
        <span class="m-upload__filename">{{ file.name }}</span>

        <button (click)="remove(i)" class="m-upload__delete a-button-transparent a-button--default a-button--small has-icon">
            <i class="fa fa-close"></i>
        </button>
    </li>
</ul>

<button class="a-button" *ngIf="files.length > 0" (click)="uploadFiles()">Upload!</button>
`,
            },] },
];
UploadQueueComponent.propDecorators = {
    files: [{ type: Input }],
    uploader: [{ type: Input }],
    uploadedFiles: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXF1ZXVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC1xdWV1ZS91cGxvYWQtcXVldWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBb0J2RSxNQUFNOzs2QkFHb0QsSUFBSSxZQUFZLEVBQVk7OEJBRXJELENBQUM7Ozs7OztJQUUxQixNQUFNLENBQUMsS0FBSztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBR3RCLFdBQVc7UUFDakIsdUJBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMzQix1QkFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQzlDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDWixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDMUQ7WUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNoQjtTQUNELENBQ0QsQ0FBQzs7OztZQXhDSCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Q0FZVjthQUNBOzs7b0JBRUMsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4uLy4uL2NsYXNzZXMvdXBsb2FkZXIuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdXBsb2FkLXF1ZXVlJyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJtLXVwbG9hZF9fZmlsZXMgdS1tYXJnaW4tYm90dG9tLXhzXCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBmaWxlIG9mIGZpbGVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtZmlsZS1vXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm0tdXBsb2FkX19maWxlbmFtZVwiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cblxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZW1vdmUoaSlcIiBjbGFzcz1cIm0tdXBsb2FkX19kZWxldGUgYS1idXR0b24tdHJhbnNwYXJlbnQgYS1idXR0b24tLWRlZmF1bHQgYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuPC91bD5cblxuPGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uXCIgKm5nSWY9XCJmaWxlcy5sZW5ndGggPiAwXCIgKGNsaWNrKT1cInVwbG9hZEZpbGVzKClcIj5VcGxvYWQhPC9idXR0b24+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRRdWV1ZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBmaWxlczogRmlsZVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgdXBsb2FkZXI7XG5cdEBPdXRwdXQoKSBwdWJsaWMgdXBsb2FkZWRGaWxlczogRXZlbnRFbWl0dGVyPE9iamVjdFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0W10+KCk7XG5cblx0cHVibGljIHVwbG9hZFByb2dyZXNzOiBOdW1iZXIgPSAwO1xuXG5cdHB1YmxpYyByZW1vdmUoaW5kZXgpIHtcblx0XHR0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRwdWJsaWMgdXBsb2FkRmlsZXMgKCkge1xuXHRcdGNvbnN0IHByb2dyZXNzID0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy51cGxvYWRlci51cGxvYWRGaWxlcyh0aGlzLmZpbGVzKS5zdWJzY3JpYmUoXG5cdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnByb2dyZXNzKSB7XG5cdFx0XHRcdFx0dGhpcy51cGxvYWRQcm9ncmVzcyA9IE1hdGguZmxvb3IocmVzcG9uc2UucHJvZ3Jlc3MgKiAxMDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy51cGxvYWRlZEZpbGVzLmVtaXQocmVzcG9uc2UuZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5maWxlcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuIl19