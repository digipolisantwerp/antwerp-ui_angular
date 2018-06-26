import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class WysiwygComponent implements OnInit, ControlValueAccessor {
    setClass: boolean;
    additionalStyling: string[];
    availableTags: string;
    basic: boolean;
    placeholder: string;
    uiColour: string;
    debounce: number;
    customConfig: any;
    emitContent: EventEmitter<string>;
    ckeditorContent: string;
    ckeditorConfig: {
        bodyClass: string;
        contentsCss: string[];
        format_tags: string;
        toolbar_Basic: string[][];
        removeButtons: string;
        removePlugins: string;
        toolbar: any;
        uiColor: string;
    };
    private updateModel;
    writeValue(value: string): void;
    registerOnChange(onChange: Function): void;
    registerOnTouched(): void;
    ngOnInit(): void;
    private setConfig();
}
