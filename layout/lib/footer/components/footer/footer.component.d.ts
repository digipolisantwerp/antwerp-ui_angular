import { AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { FooterContentDirective } from '../../directives/content.directive';
export declare class FooterComponent implements AfterContentChecked {
    private ref;
    footerContent: FooterContentDirective;
    isExtended: Boolean;
    constructor(ref: ChangeDetectorRef);
    ngAfterContentChecked(): void;
}
