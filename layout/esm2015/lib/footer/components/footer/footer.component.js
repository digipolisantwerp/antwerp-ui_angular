/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef } from '@angular/core';
import { FooterContentDirective } from '../../directives/content.directive';
export class FooterComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.isExtended = false;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        const /** @type {?} */ hasCols = this.footerContent !== undefined;
        const /** @type {?} */ shouldUpdate = hasCols !== this.isExtended;
        if (shouldUpdate) {
            this.isExtended = hasCols;
            this.ref.markForCheck();
        }
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-footer',
                template: `<footer class="aui-footer" [ngClass]="{'extended': isExtended}">
    <ng-content select="[auiFooterContent]"></ng-content>
    <ng-content select="[auiFooterBottom]"></ng-content>
</footer>
`,
                styles: [`:host{display:block}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FooterComponent.propDecorators = {
    footerContent: [{ type: ContentChild, args: [FooterContentDirective,] }]
};
function FooterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FooterComponent.prototype.footerContent;
    /** @type {?} */
    FooterComponent.prototype.isExtended;
    /** @type {?} */
    FooterComponent.prototype.ref;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9mb290ZXIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQXVCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBWTVFLE1BQU07Ozs7SUFJTCxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjswQkFGYixLQUFLO0tBRVk7Ozs7SUFFOUMscUJBQXFCO1FBQ3BCLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQztRQUNqRCx1QkFBTSxZQUFZLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFakQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hCO0tBQ0Q7OztZQXhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7OztDQUlWO2dCQUNBLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQWIrRSxpQkFBaUI7Ozs0QkFlL0YsWUFBWSxTQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9vdGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktZm9vdGVyJyxcblx0dGVtcGxhdGU6IGA8Zm9vdGVyIGNsYXNzPVwiYXVpLWZvb3RlclwiIFtuZ0NsYXNzXT1cInsnZXh0ZW5kZWQnOiBpc0V4dGVuZGVkfVwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlthdWlGb290ZXJDb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpRm9vdGVyQm90dG9tXVwiPjwvbmctY29udGVudD5cbjwvZm9vdGVyPlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0QENvbnRlbnRDaGlsZChGb290ZXJDb250ZW50RGlyZWN0aXZlKSBmb290ZXJDb250ZW50OiBGb290ZXJDb250ZW50RGlyZWN0aXZlO1xuXHRwdWJsaWMgaXNFeHRlbmRlZDogQm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cdFx0Y29uc3QgaGFzQ29scyA9IHRoaXMuZm9vdGVyQ29udGVudCAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHNob3VsZFVwZGF0ZSA9IGhhc0NvbHMgIT09IHRoaXMuaXNFeHRlbmRlZDtcblxuXHRcdGlmIChzaG91bGRVcGRhdGUpIHtcblx0XHRcdHRoaXMuaXNFeHRlbmRlZCA9IGhhc0NvbHM7XG5cdFx0XHR0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==