import { OnInit, EventEmitter } from '@angular/core';
import { UploadOptions, InvalidFile } from '../../types/upload.types';
export declare class UploadComponent implements OnInit {
    options: UploadOptions;
    selectUploadedFiles: EventEmitter<Object[]>;
    uploader: any;
    uploadedFiles: Object[];
    invalidFiles: InvalidFile[];
    queuedFiles: File[];
    ngOnInit(): void;
    onUploadedFiles(files: Object[]): void;
    onInvalidFiles(files: InvalidFile[]): void;
    onQueuedFiles(files: File[]): void;
}
