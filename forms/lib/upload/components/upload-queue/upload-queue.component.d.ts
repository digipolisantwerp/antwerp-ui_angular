import { EventEmitter } from '@angular/core';
export declare class UploadQueueComponent {
    files: File[];
    uploader: any;
    uploadedFiles: EventEmitter<Object[]>;
    uploadProgress: Number;
    remove(index: any): void;
    uploadFiles(): void;
}
