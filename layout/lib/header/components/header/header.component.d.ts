import { OnInit, AfterContentChecked, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Headroom } from '@jsprds/headroom.ts';
import { HeaderLogoDirective } from '../../directives/logo.directive';
import { HeaderContentDirective } from '../../directives/content.directive';
export declare class HeaderComponent implements OnInit, AfterContentChecked {
    private platformId;
    private elementRef;
    private ref;
    logo: HeaderLogoDirective;
    content: HeaderContentDirective;
    hasLogo: Boolean;
    hasContent: Boolean;
    constructor(platformId: Object, elementRef: ElementRef, ref: ChangeDetectorRef);
    setupHeadroom(): Headroom;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
}
