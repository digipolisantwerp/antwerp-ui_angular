import { EventEmitter } from '@angular/core';
export declare class UploadedListComponent {
    uploadedFiles: any[];
    delete: EventEmitter<{}>;
    remove(file: any, index: any): void;
}
