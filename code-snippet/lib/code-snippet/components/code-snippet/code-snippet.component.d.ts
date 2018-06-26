import { OnChanges, AfterViewChecked, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';
export declare class CodeSnippetComponent implements OnChanges, AfterViewChecked {
    private platformId;
    private el;
    private highlightJsService;
    setClass: boolean;
    codeSnippet: string;
    processMarkdown: boolean;
    scrollable: boolean;
    constructor(platformId: any, el: ElementRef, highlightJsService: HighlightJsService);
    ngOnChanges(): void;
    ngAfterViewChecked(): void;
}
