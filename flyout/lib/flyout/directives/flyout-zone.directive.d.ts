import { ElementRef } from '@angular/core';
export declare class FlyoutZoneDirective {
    private elementRef;
    class: boolean;
    auiFlyoutZone: boolean;
    element: HTMLElement;
    constructor(elementRef: ElementRef);
    contains(element: HTMLElement): boolean;
}
