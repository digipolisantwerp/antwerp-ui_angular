import { EventEmitter, ElementRef } from '@angular/core';
import { InvalidFile } from '../../types/upload.types';
import { Uploader } from '../../classes/uploader.class';
export declare class UploadZoneComponent {
    fileInput: ElementRef;
    uploader: Uploader;
    multiple: boolean;
    uploadedFiles: EventEmitter<Object[]>;
    queuedFiles: EventEmitter<File[]>;
    invalidFiles: EventEmitter<InvalidFile[]>;
    hasDragOver: Boolean;
    classNames: string;
    uploadProgress: Number;
    uploadingFiles: File[];
    onDragOver(event: any): void;
    onDragLeave(event: any): void;
    onDrop(event: any): void;
    triggerFile(): void;
    updateFiles(): void;
    protected handleFiles(files: any): void;
    protected uploadFiles(files: any): void;
    protected fileListToArray(list: FileList): Object[];
    protected preventAndStop(event: any): any;
}
