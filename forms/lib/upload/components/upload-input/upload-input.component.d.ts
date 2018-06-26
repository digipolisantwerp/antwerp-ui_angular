import { ControlValueAccessor } from '@angular/forms';
import { UploadOptions } from '../../types/upload.types';
export declare class UploadInputComponent implements ControlValueAccessor {
    options: UploadOptions;
    format: any;
    propagateChange: (_: any) => void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    onUpload(files: any): void;
}
