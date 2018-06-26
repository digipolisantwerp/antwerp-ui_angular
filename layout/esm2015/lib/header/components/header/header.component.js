/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, Inject, PLATFORM_ID, ElementRef, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Headroom } from '@jsprds/headroom.ts';
import { HeaderLogoDirective } from '../../directives/logo.directive';
import { HeaderContentDirective } from '../../directives/content.directive';
export class HeaderComponent {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} ref
     */
    constructor(platformId, elementRef, ref) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.ref = ref;
        this.hasLogo = false;
        this.hasContent = false;
    }
    /**
     * @return {?}
     */
    setupHeadroom() {
        // @todo: use headroom options from injector
        const /** @type {?} */ element = this.elementRef.nativeElement.querySelector('.aui-header');
        const /** @type {?} */ head = new Headroom(element);
        return head;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.setupHeadroom();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        const /** @type {?} */ hasLogo = this.logo !== undefined;
        const /** @type {?} */ hasContent = this.content !== undefined;
        const /** @type {?} */ shouldUpdate = hasLogo !== this.hasLogo || hasContent !== this.hasContent;
        if (shouldUpdate) {
            this.hasLogo = hasLogo;
            this.hasContent = hasContent;
            this.ref.markForCheck();
        }
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-header',
                template: `<header class="o-header o-header--fixed aui-header" [ngClass]="{'has-logo': hasLogo}">
    <ng-content select="[auiHeaderLogo]"></ng-content>

    <div class="aui-header__content-wrapper">
        <div class="aui-header__content">
            <ng-content select="[auiHeaderContent]"></ng-content>
        </div>

        <div class="aui-header__menu-items">
            <ng-content select="[auiHeaderMenuItem]"></ng-content>
        </div>
    </div>
</header>
`,
                styles: [`:host{display:block}.aui-header{transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;will-change:transform}.aui-header.header--pinned{top:0}.aui-header.header--unpinned{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.aui-header.has-logo.header--unpinned{-webkit-transform:translateY(-300%);transform:translateY(-300%)}.aui-header .aui-header__content-wrapper{display:flex;flex-wrap:wrap;justify-content:flex-end;height:100%}.aui-header .aui-header__content{flex:1;height:100%}.aui-header .aui-header__menu-items{display:flex;justify-content:flex-end}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
HeaderComponent.propDecorators = {
    logo: [{ type: ContentChild, args: [HeaderLogoDirective,] }],
    content: [{ type: ContentChild, args: [HeaderContentDirective,] }]
};
function HeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderComponent.prototype.logo;
    /** @type {?} */
    HeaderComponent.prototype.content;
    /** @type {?} */
    HeaderComponent.prototype.hasLogo;
    /** @type {?} */
    HeaderComponent.prototype.hasContent;
    /** @type {?} */
    HeaderComponent.prototype.platformId;
    /** @type {?} */
    HeaderComponent.prototype.elementRef;
    /** @type {?} */
    HeaderComponent.prototype.ref;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9oZWFkZXIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUVaLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sV0FBVyxFQUNYLFVBQVUsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFxQjVFLE1BQU07Ozs7OztJQU1MLFlBQzhCLFVBQWtCLEVBQ3ZDLFlBQ0E7UUFGcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxlQUFVLEdBQVYsVUFBVTtRQUNWLFFBQUcsR0FBSCxHQUFHO3VCQU5jLEtBQUs7MEJBQ0YsS0FBSztLQU05Qjs7OztJQUVHLGFBQWE7O1FBQ25CLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0UsdUJBQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7O0lBR04sUUFBUTtRQUNkLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCOzs7OztJQUdGLHFCQUFxQjtRQUNwQix1QkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7UUFDeEMsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO1FBQzlDLHVCQUFNLFlBQVksR0FBRyxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVoRixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBRTdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEI7S0FDRDs7O1lBdkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0NBYVY7Z0JBQ0EsTUFBTSxFQUFFLENBQUMsaXFCQUFpcUIsQ0FBQztnQkFDM3FCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBUTBDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO1lBbkNwQixVQUFVO1lBSFYsaUJBQWlCOzs7bUJBZ0NoQixZQUFZLFNBQUMsbUJBQW1CO3NCQUNoQyxZQUFZLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPbkluaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb250ZW50Q2hpbGQsXG5cdEFmdGVyQ29udGVudENoZWNrZWQsXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRJbmplY3QsXG5cdFBMQVRGT1JNX0lELFxuXHRFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSGVhZHJvb20gfSBmcm9tICdAanNwcmRzL2hlYWRyb29tLnRzJztcblxuaW1wb3J0IHsgSGVhZGVyTG9nb0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbG9nby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaGVhZGVyJyxcblx0dGVtcGxhdGU6IGA8aGVhZGVyIGNsYXNzPVwiby1oZWFkZXIgby1oZWFkZXItLWZpeGVkIGF1aS1oZWFkZXJcIiBbbmdDbGFzc109XCJ7J2hhcy1sb2dvJzogaGFzTG9nb31cIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyTG9nb11cIj48L25nLWNvbnRlbnQ+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktaGVhZGVyX19tZW51LWl0ZW1zXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyTWVudUl0ZW1dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvaGVhZGVyPlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9LmF1aS1oZWFkZXJ7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uYXVpLWhlYWRlci5oZWFkZXItLXBpbm5lZHt0b3A6MH0uYXVpLWhlYWRlci5oZWFkZXItLXVucGlubmVkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKX0uYXVpLWhlYWRlci5oYXMtbG9nby5oZWFkZXItLXVucGlubmVkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTMwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMDAlKX0uYXVpLWhlYWRlciAuYXVpLWhlYWRlcl9fY29udGVudC13cmFwcGVye2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjEwMCV9LmF1aS1oZWFkZXIgLmF1aS1oZWFkZXJfX2NvbnRlbnR7ZmxleDoxO2hlaWdodDoxMDAlfS5hdWktaGVhZGVyIC5hdWktaGVhZGVyX19tZW51LWl0ZW1ze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9YF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRAQ29udGVudENoaWxkKEhlYWRlckxvZ29EaXJlY3RpdmUpIGxvZ286IEhlYWRlckxvZ29EaXJlY3RpdmU7XG5cdEBDb250ZW50Q2hpbGQoSGVhZGVyQ29udGVudERpcmVjdGl2ZSkgY29udGVudDogSGVhZGVyQ29udGVudERpcmVjdGl2ZTtcblx0cHVibGljIGhhc0xvZ286IEJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIGhhc0NvbnRlbnQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmXG5cdCkge31cblxuXHRwdWJsaWMgc2V0dXBIZWFkcm9vbSgpIHsgLy8gQHRvZG86IHVzZSBoZWFkcm9vbSBvcHRpb25zIGZyb20gaW5qZWN0b3Jcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF1aS1oZWFkZXInKTtcblx0XHRjb25zdCBoZWFkID0gbmV3IEhlYWRyb29tKGVsZW1lbnQpO1xuXG5cdFx0cmV0dXJuIGhlYWQ7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMuc2V0dXBIZWFkcm9vbSgpO1xuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblx0XHRjb25zdCBoYXNMb2dvID0gdGhpcy5sb2dvICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgaGFzQ29udGVudCA9IHRoaXMuY29udGVudCAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHNob3VsZFVwZGF0ZSA9IGhhc0xvZ28gIT09IHRoaXMuaGFzTG9nbyB8fCBoYXNDb250ZW50ICE9PSB0aGlzLmhhc0NvbnRlbnQ7XG5cblx0XHRpZiAoc2hvdWxkVXBkYXRlKSB7XG5cdFx0XHR0aGlzLmhhc0xvZ28gPSBoYXNMb2dvO1xuXHRcdFx0dGhpcy5oYXNDb250ZW50ID0gaGFzQ29udGVudDtcblxuXHRcdFx0dGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=