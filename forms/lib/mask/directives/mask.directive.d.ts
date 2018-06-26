import { ElementRef, OnChanges } from '@angular/core';
export declare class MaskDirective implements OnChanges {
    private ref;
    auiMask: string;
    constructor(ref: ElementRef);
    ngOnChanges(): void;
    private setMask(mask);
}
