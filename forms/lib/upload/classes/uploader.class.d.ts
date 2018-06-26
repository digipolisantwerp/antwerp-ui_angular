import { UploadOptions, InvalidFile } from '../types/upload.types';
export declare class Uploader {
    options: UploadOptions;
    constructor(options?: UploadOptions);
    setOptions(options: any): void;
    uploadFiles(files: File[]): any;
    validateFiles(files: any): {
        validFiles: File[];
        invalidFiles: InvalidFile[];
    };
    protected filesToFormData(files: File[]): FormData;
    protected getFileExtension(file: File): string;
    protected validateFileType(file: File): boolean;
    protected validateFileSize(file: File): boolean;
    protected validateMimeType(file: File): boolean;
}
