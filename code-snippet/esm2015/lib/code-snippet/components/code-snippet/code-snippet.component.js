/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, ElementRef, Inject, PLATFORM_ID, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
const /** @type {?} */ marked = require('marked');
import { HighlightJsService } from 'angular2-highlight-js';
export class CodeSnippetComponent {
    /**
     * @param {?} platformId
     * @param {?} el
     * @param {?} highlightJsService
     */
    constructor(platformId, el, highlightJsService) {
        this.platformId = platformId;
        this.el = el;
        this.highlightJsService = highlightJsService;
        this.setClass = true;
        this.processMarkdown = false;
        this.scrollable = true;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.processMarkdown) {
            this.codeSnippet = marked(this.codeSnippet);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (isPlatformBrowser(this.platformId)) {
            const /** @type {?} */ allPreEl = this.el.nativeElement.querySelectorAll('pre');
            for (let /** @type {?} */ i = 0; i < allPreEl.length; i++) {
                // Add class to pre-elements in markdown files
                if (!allPreEl[i].classList.contains('a-pre')) {
                    allPreEl[i].className += ' a-pre';
                    if (this.scrollable) {
                        allPreEl[i].className += ' a-pre--scrollable';
                    }
                }
                this.highlightJsService.highlight(allPreEl[i]);
            }
        }
    }
}
CodeSnippetComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-code-snippet',
                template: `<div class="aui-code-snippet__inner">
    <pre *ngIf="!this.processMarkdown"><code>{{ codeSnippet }}</code></pre>

    <div class="code-snippet-md" [innerHTML]="codeSnippet" *ngIf="this.processMarkdown"></div>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
CodeSnippetComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: HighlightJsService }
];
CodeSnippetComponent.propDecorators = {
    setClass: [{ type: HostBinding, args: ['class.aui-code-snippet',] }],
    codeSnippet: [{ type: Input }],
    processMarkdown: [{ type: Input }],
    scrollable: [{ type: Input }]
};
function CodeSnippetComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CodeSnippetComponent.prototype.setClass;
    /** @type {?} */
    CodeSnippetComponent.prototype.codeSnippet;
    /** @type {?} */
    CodeSnippetComponent.prototype.processMarkdown;
    /** @type {?} */
    CodeSnippetComponent.prototype.scrollable;
    /** @type {?} */
    CodeSnippetComponent.prototype.platformId;
    /** @type {?} */
    CodeSnippetComponent.prototype.el;
    /** @type {?} */
    CodeSnippetComponent.prototype.highlightJsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zbmlwcGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvZGUtc25pcHBldC8iLCJzb3VyY2VzIjpbImxpYi9jb2RlLXNuaXBwZXQvY29tcG9uZW50cy9jb2RlLXNuaXBwZXQvY29kZS1zbmlwcGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBR0wsdUJBQXVCLEVBQ3ZCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCx1QkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBWTNELE1BQU07Ozs7OztJQU9MLFlBQzhCLFVBQVUsRUFDL0IsSUFDQTtRQUZxQixlQUFVLEdBQVYsVUFBVSxDQUFBO1FBQy9CLE9BQUUsR0FBRixFQUFFO1FBQ0YsdUJBQWtCLEdBQWxCLGtCQUFrQjt3QkFUdUIsSUFBSTsrQkFHM0IsS0FBSzswQkFDVixJQUFJO0tBTXRCOzs7O0lBRUcsV0FBVztRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUFFOzs7OztJQUdwRSxrQkFBa0I7UUFDeEIsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4Qyx1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFL0QsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztnQkFFMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDO29CQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQztxQkFDOUM7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQztTQUNEOzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7O0NBS1Y7Z0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7NENBU0UsTUFBTSxTQUFDLFdBQVc7WUEzQnBCLFVBQVU7WUFPRixrQkFBa0I7Ozt1QkFhekIsV0FBVyxTQUFDLHdCQUF3QjswQkFFcEMsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdEFmdGVyVmlld0NoZWNrZWQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRIb3N0QmluZGluZyxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0LFxuXHRQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IG1hcmtlZCA9IHJlcXVpcmUoJ21hcmtlZCcpO1xuaW1wb3J0IHsgSGlnaGxpZ2h0SnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItaGlnaGxpZ2h0LWpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNvZGUtc25pcHBldCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1jb2RlLXNuaXBwZXRfX2lubmVyXCI+XG4gICAgPHByZSAqbmdJZj1cIiF0aGlzLnByb2Nlc3NNYXJrZG93blwiPjxjb2RlPnt7IGNvZGVTbmlwcGV0IH19PC9jb2RlPjwvcHJlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvZGUtc25pcHBldC1tZFwiIFtpbm5lckhUTUxdPVwiY29kZVNuaXBwZXRcIiAqbmdJZj1cInRoaXMucHJvY2Vzc01hcmtkb3duXCI+PC9kaXY+XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDb2RlU25pcHBldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuYXVpLWNvZGUtc25pcHBldCcpIHNldENsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBjb2RlU25pcHBldDogc3RyaW5nO1xuXHRASW5wdXQoKSBwcm9jZXNzTWFya2Rvd24gPSBmYWxzZTtcblx0QElucHV0KCkgc2Nyb2xsYWJsZSA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkLFxuXHRcdHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBoaWdobGlnaHRKc1NlcnZpY2U6IEhpZ2hsaWdodEpzU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLnByb2Nlc3NNYXJrZG93bikgeyB0aGlzLmNvZGVTbmlwcGV0ID0gbWFya2VkKHRoaXMuY29kZVNuaXBwZXQpOyB9XG5cdH1cblxuXHRwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBhbGxQcmVFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUnKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcmVFbC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvLyBBZGQgY2xhc3MgdG8gcHJlLWVsZW1lbnRzIGluIG1hcmtkb3duIGZpbGVzXG5cdFx0XHRcdGlmICghYWxsUHJlRWxbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhLXByZScpKSB7XG5cdFx0XHRcdFx0YWxsUHJlRWxbaV0uY2xhc3NOYW1lICs9ICcgYS1wcmUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLnNjcm9sbGFibGUpIHtcblx0XHRcdFx0XHRcdGFsbFByZUVsW2ldLmNsYXNzTmFtZSArPSAnIGEtcHJlLS1zY3JvbGxhYmxlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmhpZ2hsaWdodEpzU2VydmljZS5oaWdobGlnaHQoYWxsUHJlRWxbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19