import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

// Unusual import explained here: https://github.com/rollup/rollup/issues/670
import * as Inputmask_ from 'inputmask';
const Inputmask = Inputmask_;

@Directive({
    selector: '[auiMask]',
})
export class MaskDirective implements OnChanges {
    @Input() public auiMask;

    constructor(private ref: ElementRef) {}

    public ngOnChanges(): void {
        this.setMask(this.auiMask);
    }

    private setMask(mask): void {
        Inputmask(mask).mask(this.ref.nativeElement);
    }
}
