/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, Inject, PLATFORM_ID, ElementRef, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Headroom } from '@jsprds/headroom.ts';
import { HeaderLogoDirective } from '../../directives/logo.directive';
import { HeaderContentDirective } from '../../directives/content.directive';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(platformId, elementRef, ref) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.ref = ref;
        this.hasLogo = false;
        this.hasContent = false;
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.setupHeadroom = /**
     * @return {?}
     */
    function () {
        // @todo: use headroom options from injector
        var /** @type {?} */ element = this.elementRef.nativeElement.querySelector('.aui-header');
        var /** @type {?} */ head = new Headroom(element);
        return head;
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.setupHeadroom();
        }
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hasLogo = this.logo !== undefined;
        var /** @type {?} */ hasContent = this.content !== undefined;
        var /** @type {?} */ shouldUpdate = hasLogo !== this.hasLogo || hasContent !== this.hasContent;
        if (shouldUpdate) {
            this.hasLogo = hasLogo;
            this.hasContent = hasContent;
            this.ref.markForCheck();
        }
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-header',
                    template: "<header class=\"o-header o-header--fixed aui-header\" [ngClass]=\"{'has-logo': hasLogo}\">\n    <ng-content select=\"[auiHeaderLogo]\"></ng-content>\n\n    <div class=\"aui-header__content-wrapper\">\n        <div class=\"aui-header__content\">\n            <ng-content select=\"[auiHeaderContent]\"></ng-content>\n        </div>\n\n        <div class=\"aui-header__menu-items\">\n            <ng-content select=\"[auiHeaderMenuItem]\"></ng-content>\n        </div>\n    </div>\n</header>\n",
                    styles: [":host{display:block}.aui-header{transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;will-change:transform}.aui-header.header--pinned{top:0}.aui-header.header--unpinned{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.aui-header.has-logo.header--unpinned{-webkit-transform:translateY(-300%);transform:translateY(-300%)}.aui-header .aui-header__content-wrapper{display:flex;flex-wrap:wrap;justify-content:flex-end;height:100%}.aui-header .aui-header__content{flex:1;height:100%}.aui-header .aui-header__menu-items{display:flex;justify-content:flex-end}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    HeaderComponent.propDecorators = {
        logo: [{ type: ContentChild, args: [HeaderLogoDirective,] }],
        content: [{ type: ContentChild, args: [HeaderContentDirective,] }]
    };
    return HeaderComponent;
}());
export { HeaderComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9oZWFkZXIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUVaLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sV0FBVyxFQUNYLFVBQVUsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0lBMkIzRSx5QkFDOEIsVUFBa0IsRUFDdkMsWUFDQTtRQUZxQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGVBQVUsR0FBVixVQUFVO1FBQ1YsUUFBRyxHQUFILEdBQUc7dUJBTmMsS0FBSzswQkFDRixLQUFLO0tBTTlCOzs7O0lBRUcsdUNBQWE7Ozs7O1FBQ25CLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0UscUJBQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7O0lBR04sa0NBQVE7Ozs7UUFDZCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNyQjs7Ozs7SUFHRiwrQ0FBcUI7OztJQUFyQjtRQUNDLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztRQUN4QyxxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7UUFDOUMscUJBQU0sWUFBWSxHQUFHLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRWhGLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFFN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QjtLQUNEOztnQkF2REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsNGVBYVY7b0JBQ0EsTUFBTSxFQUFFLENBQUMsaXFCQUFpcUIsQ0FBQztvQkFDM3FCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFRMEMsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Z0JBbkNwQixVQUFVO2dCQUhWLGlCQUFpQjs7O3VCQWdDaEIsWUFBWSxTQUFDLG1CQUFtQjswQkFDaEMsWUFBWSxTQUFDLHNCQUFzQjs7MEJBdkNyQzs7U0FxQ2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T25Jbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29udGVudENoaWxkLFxuXHRBZnRlckNvbnRlbnRDaGVja2VkLFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0SW5qZWN0LFxuXHRQTEFURk9STV9JRCxcblx0RWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEhlYWRyb29tIH0gZnJvbSAnQGpzcHJkcy9oZWFkcm9vbS50cyc7XG5cbmltcG9ydCB7IEhlYWRlckxvZ29EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2xvZ28uZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbnRlbnQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWhlYWRlcicsXG5cdHRlbXBsYXRlOiBgPGhlYWRlciBjbGFzcz1cIm8taGVhZGVyIG8taGVhZGVyLS1maXhlZCBhdWktaGVhZGVyXCIgW25nQ2xhc3NdPVwieydoYXMtbG9nbyc6IGhhc0xvZ299XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlckxvZ29dXCI+PC9uZy1jb250ZW50PlxuXG4gICAgPGRpdiBjbGFzcz1cImF1aS1oZWFkZXJfX2NvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlckNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fbWVudS1pdGVtc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlYWRlck1lbnVJdGVtXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2hlYWRlcj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5hdWktaGVhZGVye3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LmF1aS1oZWFkZXIuaGVhZGVyLS1waW5uZWR7dG9wOjB9LmF1aS1oZWFkZXIuaGVhZGVyLS11bnBpbm5lZHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSl9LmF1aS1oZWFkZXIuaGFzLWxvZ28uaGVhZGVyLS11bnBpbm5lZHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzAwJSl9LmF1aS1oZWFkZXIgLmF1aS1oZWFkZXJfX2NvbnRlbnQtd3JhcHBlcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2hlaWdodDoxMDAlfS5hdWktaGVhZGVyIC5hdWktaGVhZGVyX19jb250ZW50e2ZsZXg6MTtoZWlnaHQ6MTAwJX0uYXVpLWhlYWRlciAuYXVpLWhlYWRlcl9fbWVudS1pdGVtc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0QENvbnRlbnRDaGlsZChIZWFkZXJMb2dvRGlyZWN0aXZlKSBsb2dvOiBIZWFkZXJMb2dvRGlyZWN0aXZlO1xuXHRAQ29udGVudENoaWxkKEhlYWRlckNvbnRlbnREaXJlY3RpdmUpIGNvbnRlbnQ6IEhlYWRlckNvbnRlbnREaXJlY3RpdmU7XG5cdHB1YmxpYyBoYXNMb2dvOiBCb29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyBoYXNDb250ZW50OiBCb29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuXHQpIHt9XG5cblx0cHVibGljIHNldHVwSGVhZHJvb20oKSB7IC8vIEB0b2RvOiB1c2UgaGVhZHJvb20gb3B0aW9ucyBmcm9tIGluamVjdG9yXG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWktaGVhZGVyJyk7XG5cdFx0Y29uc3QgaGVhZCA9IG5ldyBIZWFkcm9vbShlbGVtZW50KTtcblxuXHRcdHJldHVybiBoZWFkO1xuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLnNldHVwSGVhZHJvb20oKTtcblx0XHR9XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cdFx0Y29uc3QgaGFzTG9nbyA9IHRoaXMubG9nbyAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IGhhc0NvbnRlbnQgPSB0aGlzLmNvbnRlbnQgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzaG91bGRVcGRhdGUgPSBoYXNMb2dvICE9PSB0aGlzLmhhc0xvZ28gfHwgaGFzQ29udGVudCAhPT0gdGhpcy5oYXNDb250ZW50O1xuXG5cdFx0aWYgKHNob3VsZFVwZGF0ZSkge1xuXHRcdFx0dGhpcy5oYXNMb2dvID0gaGFzTG9nbztcblx0XHRcdHRoaXMuaGFzQ29udGVudCA9IGhhc0NvbnRlbnQ7XG5cblx0XHRcdHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH1cblx0fVxufVxuIl19