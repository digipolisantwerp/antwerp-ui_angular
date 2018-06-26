import { Component, Input, ChangeDetectionStrategy, HostBinding, ElementRef, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { HighlightJsService, HighlightJsModule } from 'angular2-highlight-js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ marked = require('marked');
class CodeSnippetComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    CodeSnippetComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CodeSnippetModule {
}
CodeSnippetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HighlightJsModule,
                ],
                declarations: [
                    ...Components,
                ],
                providers: [
                    HighlightJsService,
                ],
                exports: [
                    ...Components,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CodeSnippetModule, CodeSnippetComponent, Components as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zbmlwcGV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb21wb25lbnRzL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQuY29tcG9uZW50LnRzIiwibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9jb2RlLXNuaXBwZXQvbGliL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0QWZ0ZXJWaWV3Q2hlY2tlZCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nLFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgbWFya2VkID0gcmVxdWlyZSgnbWFya2VkJyk7XG5pbXBvcnQgeyBIaWdobGlnaHRKc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1oaWdobGlnaHQtanMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktY29kZS1zbmlwcGV0Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWNvZGUtc25pcHBldF9faW5uZXJcIj5cbiAgICA8cHJlICpuZ0lmPVwiIXRoaXMucHJvY2Vzc01hcmtkb3duXCI+PGNvZGU+e3sgY29kZVNuaXBwZXQgfX08L2NvZGU+PC9wcmU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29kZS1zbmlwcGV0LW1kXCIgW2lubmVySFRNTF09XCJjb2RlU25pcHBldFwiICpuZ0lmPVwidGhpcy5wcm9jZXNzTWFya2Rvd25cIj48L2Rpdj5cbjwvZGl2PlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvZGVTbmlwcGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktY29kZS1zbmlwcGV0Jykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGNvZGVTbmlwcGV0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHByb2Nlc3NNYXJrZG93biA9IGZhbHNlO1xuXHRASW5wdXQoKSBzY3JvbGxhYmxlID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQsXG5cdFx0cHJpdmF0ZSBlbDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGhpZ2hsaWdodEpzU2VydmljZTogSGlnaGxpZ2h0SnNTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMucHJvY2Vzc01hcmtkb3duKSB7IHRoaXMuY29kZVNuaXBwZXQgPSBtYXJrZWQodGhpcy5jb2RlU25pcHBldCk7IH1cblx0fVxuXG5cdHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGFsbFByZUVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByZUVsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vIEFkZCBjbGFzcyB0byBwcmUtZWxlbWVudHMgaW4gbWFya2Rvd24gZmlsZXNcblx0XHRcdFx0aWYgKCFhbGxQcmVFbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2EtcHJlJykpIHtcblx0XHRcdFx0XHRhbGxQcmVFbFtpXS5jbGFzc05hbWUgKz0gJyBhLXByZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuXHRcdFx0XHRcdFx0YWxsUHJlRWxbaV0uY2xhc3NOYW1lICs9ICcgYS1wcmUtLXNjcm9sbGFibGUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGlnaGxpZ2h0SnNTZXJ2aWNlLmhpZ2hsaWdodChhbGxQcmVFbFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb2RlU25pcHBldENvbXBvbmVudCB9IGZyb20gJy4vY29kZS1zbmlwcGV0L2NvZGUtc25pcHBldC5jb21wb25lbnQnO1xuXG5leHBvcnQge1xuXHRDb2RlU25pcHBldENvbXBvbmVudCxcbn07XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRDb2RlU25pcHBldENvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhpZ2hsaWdodEpzTW9kdWxlLCBIaWdobGlnaHRKc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1oaWdobGlnaHQtanMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRIaWdobGlnaHRKc01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0SGlnaGxpZ2h0SnNTZXJ2aWNlLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXRNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsQUFhQSx1QkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDOzs7Ozs7SUFtQkMsWUFDOEIsVUFBVSxFQUMvQixJQUNBO1FBRnFCLGVBQVUsR0FBVixVQUFVLENBQUE7UUFDL0IsT0FBRSxHQUFGLEVBQUU7UUFDRix1QkFBa0IsR0FBbEIsa0JBQWtCO3dCQVR1QixJQUFJOytCQUczQixLQUFLOzBCQUNWLElBQUk7S0FNdEI7Ozs7SUFFRyxXQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUFFOzs7OztJQUdwRSxrQkFBa0I7UUFDeEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsdUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9ELEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDN0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7b0JBQ2xDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDcEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQztxQkFDOUM7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQztTQUNEOzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7O0NBS1Y7Z0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7NENBU0UsTUFBTSxTQUFDLFdBQVc7WUEzQnBCLFVBQVU7WUFPRixrQkFBa0I7Ozt1QkFhekIsV0FBVyxTQUFDLHdCQUF3QjswQkFFcEMsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7Ozs7Ozs7QUMvQlAsdUJBTWEsVUFBVSxHQUFHO0lBQ3pCLG9CQUFvQjtDQUNwQjs7Ozs7O0FDUkQ7OztZQU1DLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2pCO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsVUFBVTtpQkFDYjthQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==