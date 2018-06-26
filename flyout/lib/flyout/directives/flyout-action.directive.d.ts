import { ElementRef, OnDestroy } from '@angular/core';
import { FlyoutDirective } from './flyout.directive';
export declare class FlyoutActionDirective implements OnDestroy {
    flyout: FlyoutDirective;
    private platformId;
    private elementRef;
    class: boolean;
    /**
     * This property is needed for dropdown not to open and instantly closed
     * because the click event will be fired after the focus event so the click event will close the flyout
     */
    private openedByFocus;
    private closeDropdownOnOutsideClick;
    constructor(flyout: FlyoutDirective, platformId: Object, elementRef: ElementRef);
    ngOnDestroy(): void;
    onClick(): void;
    onFocus(): void;
    onBlur(event: FocusEvent): void;
    toggle(): void;
    open(): void;
    close(): void;
    private checkIfInClosableZone(event);
    private closeIfInClosableZone(event);
    private isPlatformBrowser();
}
