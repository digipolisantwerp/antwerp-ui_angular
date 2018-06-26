/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PaneComponent = /** @class */ (function () {
    function PaneComponent() {
        this.opened = false;
        this.side = 'left';
        this.backdrop = true;
        this.open = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PaneComponent.prototype.togglePane = /**
     * @return {?}
     */
    function () {
        (this.opened ? this.closePane() : this.openPane());
    };
    /**
     * @return {?}
     */
    PaneComponent.prototype.openPane = /**
     * @return {?}
     */
    function () {
        this.opened = true;
        this.open.emit();
    };
    /**
     * @return {?}
     */
    PaneComponent.prototype.closePane = /**
     * @return {?}
     */
    function () {
        this.opened = false;
        this.close.emit();
    };
    PaneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-pane',
                    template: "<div class=\"m-pane aui-pane\" [ngClass]=\"{ 'm-pane--open': opened, 'm-pane--left': side === 'left', 'm-pane--right': side === 'right' }\">\n\t<ng-content></ng-content>\n</div>\n<div class=\"m-overlay m-overlay__pane is-active\" *ngIf=\"opened && backdrop\" (click)=\"closePane()\"></div>\n",
                    styles: [".m-pane{background-color:#fff;width:22.5rem;height:100%;z-index:100}.m-pane__content{height:100%;overflow-y:scroll}.m-pane--left{position:absolute;left:-22.5rem;transition:left .3s cubic-bezier(.4,0,.2,1)}.m-pane--left.m-pane--open{left:0}.m-pane--right{position:absolute;right:-22.5rem;transition:right .3s cubic-bezier(.4,0,.2,1)}.m-pane--right.m-pane--open{right:0}"],
                },] },
    ];
    PaneComponent.propDecorators = {
        opened: [{ type: Input }],
        side: [{ type: Input }],
        backdrop: [{ type: Input }],
        open: [{ type: Output }],
        close: [{ type: Output }]
    };
    return PaneComponent;
}());
export { PaneComponent };
function PaneComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    PaneComponent.prototype.opened;
    /** @type {?} */
    PaneComponent.prototype.side;
    /** @type {?} */
    PaneComponent.prototype.backdrop;
    /** @type {?} */
    PaneComponent.prototype.open;
    /** @type {?} */
    PaneComponent.prototype.close;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvcGFuZS9jb21wb25lbnRzL3BhbmUvcGFuZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztzQkFZcEQsS0FBSztvQkFDUCxNQUFNO3dCQUNGLElBQUk7b0JBQ1AsSUFBSSxZQUFZLEVBQUU7cUJBQ2pCLElBQUksWUFBWSxFQUFFOzs7OztJQUU3QixrQ0FBVTs7OztRQUNoQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Ozs7O0lBRzdDLGdDQUFROzs7O1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7SUFHWCxpQ0FBUzs7OztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7OztnQkEzQm5CLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLHFTQUlWO29CQUNBLE1BQU0sRUFBRSxDQUFDLGtYQUFrWCxDQUFDO2lCQUM1WDs7O3lCQUVDLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLE1BQU07d0JBQ04sTUFBTTs7d0JBaEJSOztTQVdhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktcGFuZScsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tcGFuZSBhdWktcGFuZVwiIFtuZ0NsYXNzXT1cInsgJ20tcGFuZS0tb3Blbic6IG9wZW5lZCwgJ20tcGFuZS0tbGVmdCc6IHNpZGUgPT09ICdsZWZ0JywgJ20tcGFuZS0tcmlnaHQnOiBzaWRlID09PSAncmlnaHQnIH1cIj5cblx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibS1vdmVybGF5IG0tb3ZlcmxheV9fcGFuZSBpcy1hY3RpdmVcIiAqbmdJZj1cIm9wZW5lZCAmJiBiYWNrZHJvcFwiIChjbGljayk9XCJjbG9zZVBhbmUoKVwiPjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYC5tLXBhbmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO3dpZHRoOjIyLjVyZW07aGVpZ2h0OjEwMCU7ei1pbmRleDoxMDB9Lm0tcGFuZV9fY29udGVudHtoZWlnaHQ6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH0ubS1wYW5lLS1sZWZ0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTIyLjVyZW07dHJhbnNpdGlvbjpsZWZ0IC4zcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKX0ubS1wYW5lLS1sZWZ0Lm0tcGFuZS0tb3BlbntsZWZ0OjB9Lm0tcGFuZS0tcmlnaHR7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTIyLjVyZW07dHJhbnNpdGlvbjpyaWdodCAuM3MgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSl9Lm0tcGFuZS0tcmlnaHQubS1wYW5lLS1vcGVue3JpZ2h0OjB9YF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVDb21wb25lbnQge1xuXHRASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcblx0QElucHV0KCkgc2lkZSA9ICdsZWZ0Jztcblx0QElucHV0KCkgYmFja2Ryb3AgPSB0cnVlO1xuXHRAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyB0b2dnbGVQYW5lKCkge1xuXHRcdCh0aGlzLm9wZW5lZCA/IHRoaXMuY2xvc2VQYW5lKCkgOiB0aGlzLm9wZW5QYW5lKCkpO1xuXHR9XG5cblx0cHVibGljIG9wZW5QYW5lKCkge1xuXHRcdHRoaXMub3BlbmVkID0gdHJ1ZTtcblx0XHR0aGlzLm9wZW4uZW1pdCgpO1xuXHR9XG5cblx0cHVibGljIGNsb3NlUGFuZSgpIHtcblx0XHR0aGlzLm9wZW5lZCA9IGZhbHNlO1xuXHRcdHRoaXMuY2xvc2UuZW1pdCgpO1xuXHR9XG59XG4iXX0=