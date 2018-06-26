/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, ElementRef, Inject, PLATFORM_ID, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var /** @type {?} */ marked = require('marked');
import { HighlightJsService } from 'angular2-highlight-js';
var CodeSnippetComponent = /** @class */ (function () {
    function CodeSnippetComponent(platformId, el, highlightJsService) {
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
    CodeSnippetComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.processMarkdown) {
            this.codeSnippet = marked(this.codeSnippet);
        }
    };
    /**
     * @return {?}
     */
    CodeSnippetComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            var /** @type {?} */ allPreEl = this.el.nativeElement.querySelectorAll('pre');
            for (var /** @type {?} */ i = 0; i < allPreEl.length; i++) {
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
    };
    CodeSnippetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-code-snippet',
                    template: "<div class=\"aui-code-snippet__inner\">\n    <pre *ngIf=\"!this.processMarkdown\"><code>{{ codeSnippet }}</code></pre>\n\n    <div class=\"code-snippet-md\" [innerHTML]=\"codeSnippet\" *ngIf=\"this.processMarkdown\"></div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    CodeSnippetComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: HighlightJsService }
    ]; };
    CodeSnippetComponent.propDecorators = {
        setClass: [{ type: HostBinding, args: ['class.aui-code-snippet',] }],
        codeSnippet: [{ type: Input }],
        processMarkdown: [{ type: Input }],
        scrollable: [{ type: Input }]
    };
    return CodeSnippetComponent;
}());
export { CodeSnippetComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zbmlwcGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvZGUtc25pcHBldC8iLCJzb3VyY2VzIjpbImxpYi9jb2RlLXNuaXBwZXQvY29tcG9uZW50cy9jb2RlLXNuaXBwZXQvY29kZS1zbmlwcGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBR0wsdUJBQXVCLEVBQ3ZCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxxQkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQW1CMUQsOEJBQzhCLFVBQVUsRUFDL0IsSUFDQTtRQUZxQixlQUFVLEdBQVYsVUFBVSxDQUFBO1FBQy9CLE9BQUUsR0FBRixFQUFFO1FBQ0YsdUJBQWtCLEdBQWxCLGtCQUFrQjt3QkFUdUIsSUFBSTsrQkFHM0IsS0FBSzswQkFDVixJQUFJO0tBTXRCOzs7O0lBRUcsMENBQVc7Ozs7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FBRTs7Ozs7SUFHcEUsaURBQWtCOzs7O1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9ELEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7Z0JBRTFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztvQkFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksb0JBQW9CLENBQUM7cUJBQzlDO2lCQUNEO2dCQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0M7U0FDRDs7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDBPQUtWO29CQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnREFTRSxNQUFNLFNBQUMsV0FBVztnQkEzQnBCLFVBQVU7Z0JBT0Ysa0JBQWtCOzs7MkJBYXpCLFdBQVcsU0FBQyx3QkFBd0I7OEJBRXBDLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzsrQkEvQlA7O1NBMEJhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0QWZ0ZXJWaWV3Q2hlY2tlZCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nLFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgbWFya2VkID0gcmVxdWlyZSgnbWFya2VkJyk7XG5pbXBvcnQgeyBIaWdobGlnaHRKc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1oaWdobGlnaHQtanMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY29kZS1zbmlwcGV0Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWNvZGUtc25pcHBldF9faW5uZXJcIj5cbiAgICA8cHJlICpuZ0lmPVwiIXRoaXMucHJvY2Vzc01hcmtkb3duXCI+PGNvZGU+e3sgY29kZVNuaXBwZXQgfX08L2NvZGU+PC9wcmU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29kZS1zbmlwcGV0LW1kXCIgW2lubmVySFRNTF09XCJjb2RlU25pcHBldFwiICpuZ0lmPVwidGhpcy5wcm9jZXNzTWFya2Rvd25cIj48L2Rpdj5cbjwvZGl2PlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvZGVTbmlwcGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktY29kZS1zbmlwcGV0Jykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGNvZGVTbmlwcGV0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHByb2Nlc3NNYXJrZG93biA9IGZhbHNlO1xuXHRASW5wdXQoKSBzY3JvbGxhYmxlID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQsXG5cdFx0cHJpdmF0ZSBlbDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGhpZ2hsaWdodEpzU2VydmljZTogSGlnaGxpZ2h0SnNTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMucHJvY2Vzc01hcmtkb3duKSB7IHRoaXMuY29kZVNuaXBwZXQgPSBtYXJrZWQodGhpcy5jb2RlU25pcHBldCk7IH1cblx0fVxuXG5cdHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGFsbFByZUVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByZUVsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vIEFkZCBjbGFzcyB0byBwcmUtZWxlbWVudHMgaW4gbWFya2Rvd24gZmlsZXNcblx0XHRcdFx0aWYgKCFhbGxQcmVFbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2EtcHJlJykpIHtcblx0XHRcdFx0XHRhbGxQcmVFbFtpXS5jbGFzc05hbWUgKz0gJyBhLXByZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuXHRcdFx0XHRcdFx0YWxsUHJlRWxbaV0uY2xhc3NOYW1lICs9ICcgYS1wcmUtLXNjcm9sbGFibGUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGlnaGxpZ2h0SnNTZXJ2aWNlLmhpZ2hsaWdodChhbGxQcmVFbFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=