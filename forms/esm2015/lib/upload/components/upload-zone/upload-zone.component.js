/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Uploader } from '../../classes/uploader.class';
export class UploadZoneComponent {
    constructor() {
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
    onDragOver(event) {
        this.preventAndStop(event);
        this.hasDragOver = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this.preventAndStop(event);
        this.hasDragOver = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        this.preventAndStop(event);
        this.hasDragOver = false;
        const /** @type {?} */ files = this.fileListToArray(event.dataTransfer.files);
        this.handleFiles(files);
    }
    /**
     * @return {?}
     */
    triggerFile() {
        this.fileInput.nativeElement.click();
    }
    /**
     * @return {?}
     */
    updateFiles() {
        const /** @type {?} */ files = this.fileListToArray(this.fileInput.nativeElement.files);
        this.handleFiles(files);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    handleFiles(files) {
        const /** @type {?} */ response = this.uploader.validateFiles(files);
        this.invalidFiles.emit(response.invalidFiles);
        if (this.uploader.options.autoUpload && response.validFiles.length > 0) {
            this.uploadFiles(response.validFiles);
        }
        else {
            this.queuedFiles.emit(response.validFiles);
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    uploadFiles(files) {
        // Reset progress
        this.uploadProgress = 0;
        this.uploadingFiles = files;
        // upload
        this.uploader.uploadFiles(files).subscribe((response) => {
            if (response.progress) {
                this.uploadProgress = Math.floor(response.progress * 100);
            }
            if (response.data) {
                this.uploadedFiles.emit(response.data);
            }
        }, (err) => {
            console.log(err);
        });
    }
    /**
     * @param {?} list
     * @return {?}
     */
    fileListToArray(list) {
        return Array.from(list);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
UploadZoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-upload-zone',
                template: `<div class="m-upload" *ngIf="uploader.options.type === 'drop'">
	<div class="m-upload__inner">
		<div class="m-upload__dropzone">
			<input type="file" #fileInput (change)="updateFiles()" multiple class="m-upload__input" *ngIf="multiple">
			<input type="file" #fileInput (change)="updateFiles()" class="m-upload__input" *ngIf="!multiple">

			<div class="m-upload__content" *ngIf="!uploadProgress || uploadProgress === 0">
				<p class="m-upload__message"><ng-content select=".aui-upload-message"></ng-content></p>
			</div>

			<ng-container *ngIf="uploadProgress > 0">
				<p class="m-upload__uploads u-text-bold u-margin-bottom-xs">
					<ng-container *ngFor="let file of uploadingFiles; let last = last">
						{{ file.name }}<ng-container *ngIf="!last">, </ng-container>
					</ng-container>
				</p>
				<aui-progress-bar [value]="uploadProgress" max="100"></aui-progress-bar>
			</ng-container>
		</div>
	</div>

	<small class="m-upload__description"><ng-content select=".aui-upload-description"></ng-content></small>
</div>

<button class="a-button aui-upload-button" (click)="triggerFile()" *ngIf="uploader.options.type === 'button'">
	<ng-content select=".aui-upload-button"></ng-content>
	<input type="file" #fileInput (change)="updateFiles()" multiple="multiple">
</button>
`,
                styles: [`.aui-upload-button input[type=file]{display:none}`],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXpvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkL2NvbXBvbmVudHMvdXBsb2FkLXpvbmUvdXBsb2FkLXpvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQW1DeEQsTUFBTTs7d0JBSXNCLElBQUk7NkJBQzBCLElBQUksWUFBWSxFQUFZOzJCQUNoQyxJQUFJLFlBQVksRUFBVTs0QkFDbEIsSUFBSSxZQUFZLEVBQWlCOzJCQUVoRSxLQUFLOzhCQUVILENBQUM7Ozs7OztJQUkxQixVQUFVLENBQUMsS0FBVTtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3hCOzs7OztJQUdNLFdBQVcsQ0FBQyxLQUFVO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDekI7Ozs7O0lBR00sTUFBTSxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6Qix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7Ozs7SUFFTSxXQUFXO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQUcvQixXQUFXO1FBQ2pCLHVCQUFNLEtBQUssR0FBVSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUdmLFdBQVcsQ0FBRSxLQUFLO1FBQzNCLHVCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQztLQUNEOzs7OztJQUVTLFdBQVcsQ0FBRSxLQUFLOztRQUUzQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7UUFHNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUN6QyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ1osRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztTQUNELEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakIsQ0FDRCxDQUFDO0tBQ0Y7Ozs7O0lBRVMsZUFBZSxDQUFDLElBQWM7UUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEI7Ozs7O0lBRVMsY0FBYyxDQUFDLEtBQVU7UUFDbEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7O1lBbkhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0QlY7Z0JBQ0EsTUFBTSxFQUFFLENBQUMsbURBQW1ELENBQUM7YUFDN0Q7Ozt3QkFFQyxTQUFTLFNBQUMsV0FBVzt1QkFFckIsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLE1BQU07MEJBQ04sTUFBTTsyQkFDTixNQUFNO3lCQU9OLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBTW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBTXBDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW52YWxpZEZpbGUgfSBmcm9tICcuLi8uLi90eXBlcy91cGxvYWQudHlwZXMnO1xuaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuLi8uLi9jbGFzc2VzL3VwbG9hZGVyLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXVwbG9hZC16b25lJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS11cGxvYWRcIiAqbmdJZj1cInVwbG9hZGVyLm9wdGlvbnMudHlwZSA9PT0gJ2Ryb3AnXCI+XG5cdDxkaXYgY2xhc3M9XCJtLXVwbG9hZF9faW5uZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibS11cGxvYWRfX2Ryb3B6b25lXCI+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwidXBkYXRlRmlsZXMoKVwiIG11bHRpcGxlIGNsYXNzPVwibS11cGxvYWRfX2lucHV0XCIgKm5nSWY9XCJtdWx0aXBsZVwiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgI2ZpbGVJbnB1dCAoY2hhbmdlKT1cInVwZGF0ZUZpbGVzKClcIiBjbGFzcz1cIm0tdXBsb2FkX19pbnB1dFwiICpuZ0lmPVwiIW11bHRpcGxlXCI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJtLXVwbG9hZF9fY29udGVudFwiICpuZ0lmPVwiIXVwbG9hZFByb2dyZXNzIHx8IHVwbG9hZFByb2dyZXNzID09PSAwXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwibS11cGxvYWRfX21lc3NhZ2VcIj48bmctY29udGVudCBzZWxlY3Q9XCIuYXVpLXVwbG9hZC1tZXNzYWdlXCI+PC9uZy1jb250ZW50PjwvcD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwidXBsb2FkUHJvZ3Jlc3MgPiAwXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwibS11cGxvYWRfX3VwbG9hZHMgdS10ZXh0LWJvbGQgdS1tYXJnaW4tYm90dG9tLXhzXCI+XG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmlsZSBvZiB1cGxvYWRpbmdGaWxlczsgbGV0IGxhc3QgPSBsYXN0XCI+XG5cdFx0XHRcdFx0XHR7eyBmaWxlLm5hbWUgfX08bmctY29udGFpbmVyICpuZ0lmPVwiIWxhc3RcIj4sIDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxhdWktcHJvZ3Jlc3MtYmFyIFt2YWx1ZV09XCJ1cGxvYWRQcm9ncmVzc1wiIG1heD1cIjEwMFwiPjwvYXVpLXByb2dyZXNzLWJhcj5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8c21hbGwgY2xhc3M9XCJtLXVwbG9hZF9fZGVzY3JpcHRpb25cIj48bmctY29udGVudCBzZWxlY3Q9XCIuYXVpLXVwbG9hZC1kZXNjcmlwdGlvblwiPjwvbmctY29udGVudD48L3NtYWxsPlxuPC9kaXY+XG5cbjxidXR0b24gY2xhc3M9XCJhLWJ1dHRvbiBhdWktdXBsb2FkLWJ1dHRvblwiIChjbGljayk9XCJ0cmlnZ2VyRmlsZSgpXCIgKm5nSWY9XCJ1cGxvYWRlci5vcHRpb25zLnR5cGUgPT09ICdidXR0b24nXCI+XG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWJ1dHRvblwiPjwvbmctY29udGVudD5cblx0PGlucHV0IHR5cGU9XCJmaWxlXCIgI2ZpbGVJbnB1dCAoY2hhbmdlKT1cInVwZGF0ZUZpbGVzKClcIiBtdWx0aXBsZT1cIm11bHRpcGxlXCI+XG48L2J1dHRvbj5cbmAsXG5cdHN0eWxlczogW2AuYXVpLXVwbG9hZC1idXR0b24gaW5wdXRbdHlwZT1maWxlXXtkaXNwbGF5Om5vbmV9YF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFpvbmVDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KCkgcHVibGljIHVwbG9hZGVyOiBVcGxvYWRlcjtcblx0QElucHV0KCkgcHVibGljIG11bHRpcGxlID0gdHJ1ZTtcblx0QE91dHB1dCgpIHB1YmxpYyB1cGxvYWRlZEZpbGVzOiBFdmVudEVtaXR0ZXI8T2JqZWN0W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RbXT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBxdWV1ZWRGaWxlczogRXZlbnRFbWl0dGVyPEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVbXT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBpbnZhbGlkRmlsZXM6IEV2ZW50RW1pdHRlcjxJbnZhbGlkRmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8SW52YWxpZEZpbGVbXT4oKTtcblxuXHRwdWJsaWMgaGFzRHJhZ092ZXI6IEJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIGNsYXNzTmFtZXM6IHN0cmluZztcblx0cHVibGljIHVwbG9hZFByb2dyZXNzOiBOdW1iZXIgPSAwO1xuXHRwdWJsaWMgdXBsb2FkaW5nRmlsZXM6IEZpbGVbXTtcblxuXHRASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG5cdHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcblx0XHR0aGlzLmhhc0RyYWdPdmVyID0gdHJ1ZTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG5cdHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XG5cdFx0dGhpcy5oYXNEcmFnT3ZlciA9IGZhbHNlO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG5cdHB1YmxpYyBvbkRyb3AoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMucHJldmVudEFuZFN0b3AoZXZlbnQpO1xuXHRcdHRoaXMuaGFzRHJhZ092ZXIgPSBmYWxzZTtcblx0XHRjb25zdCBmaWxlcyA9IHRoaXMuZmlsZUxpc3RUb0FycmF5KGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG5cdFx0dGhpcy5oYW5kbGVGaWxlcyhmaWxlcyk7XG5cdH1cblxuXHRwdWJsaWMgdHJpZ2dlckZpbGUoKSB7XG5cdFx0dGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUZpbGVzKCkge1xuXHRcdGNvbnN0IGZpbGVzOiBhbnlbXSA9IHRoaXMuZmlsZUxpc3RUb0FycmF5KHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZmlsZXMpO1xuXHRcdHRoaXMuaGFuZGxlRmlsZXMoZmlsZXMpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhhbmRsZUZpbGVzIChmaWxlcykge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gdGhpcy51cGxvYWRlci52YWxpZGF0ZUZpbGVzKGZpbGVzKTtcblx0XHR0aGlzLmludmFsaWRGaWxlcy5lbWl0KHJlc3BvbnNlLmludmFsaWRGaWxlcyk7XG5cblx0XHRpZiAodGhpcy51cGxvYWRlci5vcHRpb25zLmF1dG9VcGxvYWQgJiYgcmVzcG9uc2UudmFsaWRGaWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnVwbG9hZEZpbGVzKHJlc3BvbnNlLnZhbGlkRmlsZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnF1ZXVlZEZpbGVzLmVtaXQocmVzcG9uc2UudmFsaWRGaWxlcyk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIHVwbG9hZEZpbGVzIChmaWxlcykge1xuXHRcdC8vIFJlc2V0IHByb2dyZXNzXG5cdFx0dGhpcy51cGxvYWRQcm9ncmVzcyA9IDA7XG5cdFx0dGhpcy51cGxvYWRpbmdGaWxlcyA9IGZpbGVzO1xuXG5cdFx0Ly8gdXBsb2FkXG5cdFx0dGhpcy51cGxvYWRlci51cGxvYWRGaWxlcyhmaWxlcykuc3Vic2NyaWJlKFxuXHRcdFx0KHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5wcm9ncmVzcykge1xuXHRcdFx0XHRcdHRoaXMudXBsb2FkUHJvZ3Jlc3MgPSBNYXRoLmZsb29yKHJlc3BvbnNlLnByb2dyZXNzICogMTAwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YSkge1xuXHRcdFx0XHRcdHRoaXMudXBsb2FkZWRGaWxlcy5lbWl0KHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0KGVycikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZmlsZUxpc3RUb0FycmF5KGxpc3Q6IEZpbGVMaXN0KTogT2JqZWN0W10ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKGxpc3QpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHByZXZlbnRBbmRTdG9wKGV2ZW50OiBhbnkpOiBhbnkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cbn1cbiJdfQ==