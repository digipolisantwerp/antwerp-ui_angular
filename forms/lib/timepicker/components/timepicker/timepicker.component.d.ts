import { OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ControlValueAccessor } from '@angular/forms';
import { TimepickerInputSize } from '../../types/timepicker.types';
export declare class TimepickerComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private formBuilder;
    private renderer;
    hoursPlaceholder: string;
    minutesPlaceholder: string;
    hasError: boolean;
    size: TimepickerInputSize;
    shouldUseFallback: boolean;
    minutes: string[];
    hours: string[];
    updateModel: (value: string) => any;
    timeControl: FormControl;
    fallbackForm: FormGroup;
    private componentDestroyed$;
    constructor(formBuilder: FormBuilder, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(): void;
    setDisabledState(isDisabled: boolean): void;
    private supportsNativeTimepicker();
    private getMinutes();
    private getHours();
}
