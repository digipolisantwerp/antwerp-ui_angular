/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UPLOAD_OPTIONS_DEFAULT } from '../../upload.conf';
import { Uploader } from '../../classes/uploader.class';
export class UploadComponent {
    constructor() {
        this.options = UPLOAD_OPTIONS_DEFAULT;
        this.selectUploadedFiles = new EventEmitter();
        this.uploadedFiles = [];
        this.invalidFiles = [];
        this.queuedFiles = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.uploader = new Uploader(this.options);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    onUploadedFiles(files) {
        this.uploadedFiles = this.uploadedFiles.concat(files);
        this.selectUploadedFiles.emit(this.uploadedFiles);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    onInvalidFiles(files) {
        this.invalidFiles = files;
    }
    /**
     * @param {?} files
     * @return {?}
     */
    onQueuedFiles(files) {
        this.queuedFiles = this.queuedFiles.concat(files);
    }
}
UploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-upload',
                template: `<div class="aui-upload">
    <aui-upload-zone [uploader]="uploader" (queuedFiles)="onQueuedFiles($event)" (uploadedFiles)="onUploadedFiles($event)" (invalidFiles)="onInvalidFiles($event)">
        <div class="aui-upload-message"><ng-content select=".aui-upload-message"></ng-content></div>
        <div class="aui-upload-description"><ng-content select=".aui-upload-description"></ng-content></div>
        <div class="aui-upload-button"><ng-content select=".aui-upload-button"></ng-content></div>
    </aui-upload-zone>
    <aui-validation-list [invalidFiles]="invalidFiles"></aui-validation-list>
    <aui-upload-queue *ngIf="!options?.autoUpload" [uploader]="uploader" [files]="queuedFiles" (uploadedFiles)="onUploadedFiles($event)"></aui-upload-queue>
</div>
`,
            },] },
];
UploadComponent.propDecorators = {
    options: [{ type: Input }],
    selectUploadedFiles: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWV4RCxNQUFNOzt1QkFDb0Msc0JBQXNCO21DQUNBLElBQUksWUFBWSxFQUFZOzZCQUcxRCxFQUFFOzRCQUNFLEVBQUU7MkJBQ1YsRUFBRTs7Ozs7SUFFL0IsUUFBUTtRQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNDOzs7OztJQUVNLGVBQWUsQ0FBQyxLQUFlO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7OztJQUc1QyxjQUFjLENBQUMsS0FBb0I7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Ozs7OztJQUdwQixhQUFhLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1lBcENuRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7O0NBU1Y7YUFDQTs7O3NCQUVDLEtBQUs7a0NBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVXBsb2FkT3B0aW9ucywgSW52YWxpZEZpbGUgfSBmcm9tICcuLi8uLi90eXBlcy91cGxvYWQudHlwZXMnO1xuaW1wb3J0IHsgVVBMT0FEX09QVElPTlNfREVGQVVMVCB9IGZyb20gJy4uLy4uL3VwbG9hZC5jb25mJztcbmltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy91cGxvYWRlci5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS11cGxvYWQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkXCI+XG4gICAgPGF1aS11cGxvYWQtem9uZSBbdXBsb2FkZXJdPVwidXBsb2FkZXJcIiAocXVldWVkRmlsZXMpPVwib25RdWV1ZWRGaWxlcygkZXZlbnQpXCIgKHVwbG9hZGVkRmlsZXMpPVwib25VcGxvYWRlZEZpbGVzKCRldmVudClcIiAoaW52YWxpZEZpbGVzKT1cIm9uSW52YWxpZEZpbGVzKCRldmVudClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF1aS11cGxvYWQtbWVzc2FnZVwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLW1lc3NhZ2VcIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWJ1dHRvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWJ1dHRvblwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8L2F1aS11cGxvYWQtem9uZT5cbiAgICA8YXVpLXZhbGlkYXRpb24tbGlzdCBbaW52YWxpZEZpbGVzXT1cImludmFsaWRGaWxlc1wiPjwvYXVpLXZhbGlkYXRpb24tbGlzdD5cbiAgICA8YXVpLXVwbG9hZC1xdWV1ZSAqbmdJZj1cIiFvcHRpb25zPy5hdXRvVXBsb2FkXCIgW3VwbG9hZGVyXT1cInVwbG9hZGVyXCIgW2ZpbGVzXT1cInF1ZXVlZEZpbGVzXCIgKHVwbG9hZGVkRmlsZXMpPVwib25VcGxvYWRlZEZpbGVzKCRldmVudClcIj48L2F1aS11cGxvYWQtcXVldWU+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBVcGxvYWRPcHRpb25zID0gVVBMT0FEX09QVElPTlNfREVGQVVMVDtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RVcGxvYWRlZEZpbGVzOiBFdmVudEVtaXR0ZXI8T2JqZWN0W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4oKTtcblxuXHRwdWJsaWMgdXBsb2FkZXI7XG5cdHB1YmxpYyB1cGxvYWRlZEZpbGVzOiBPYmplY3RbXSA9IFtdO1xuXHRwdWJsaWMgaW52YWxpZEZpbGVzOiBJbnZhbGlkRmlsZVtdID0gW107XG5cdHB1YmxpYyBxdWV1ZWRGaWxlczogRmlsZVtdID0gW107XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy51cGxvYWRlciA9IG5ldyBVcGxvYWRlcih0aGlzLm9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIG9uVXBsb2FkZWRGaWxlcyhmaWxlczogT2JqZWN0W10pIHtcblx0XHR0aGlzLnVwbG9hZGVkRmlsZXMgPSB0aGlzLnVwbG9hZGVkRmlsZXMuY29uY2F0KGZpbGVzKTtcblx0XHR0aGlzLnNlbGVjdFVwbG9hZGVkRmlsZXMuZW1pdCh0aGlzLnVwbG9hZGVkRmlsZXMpO1xuXHR9XG5cblx0cHVibGljIG9uSW52YWxpZEZpbGVzKGZpbGVzOiBJbnZhbGlkRmlsZVtdKSB7XG5cdFx0dGhpcy5pbnZhbGlkRmlsZXMgPSBmaWxlcztcblx0fVxuXG5cdHB1YmxpYyBvblF1ZXVlZEZpbGVzKGZpbGVzOiBGaWxlW10pIHtcblx0XHR0aGlzLnF1ZXVlZEZpbGVzID0gdGhpcy5xdWV1ZWRGaWxlcy5jb25jYXQoZmlsZXMpO1xuXHR9XG59XG4iXX0=