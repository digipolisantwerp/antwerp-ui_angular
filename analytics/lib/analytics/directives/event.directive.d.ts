import { ElementRef } from '@angular/core';
import { GAService } from '../services/ga.service';
export declare class GaEventDirective {
    private el;
    private gaService;
    gaEvent: number;
    constructor(el: ElementRef, gaService: GAService);
    onClick(e: any): void;
}
