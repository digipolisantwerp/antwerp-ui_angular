/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
var /** @type {?} */ Inputmask = require('inputmask');
var MaskDirective = /** @class */ (function () {
    function MaskDirective(ref) {
        this.ref = ref;
    }
    /**
     * @return {?}
     */
    MaskDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setMask(this.auiMask);
    };
    /**
     * @param {?} mask
     * @return {?}
     */
    MaskDirective.prototype.setMask = /**
     * @param {?} mask
     * @return {?}
     */
    function (mask) {
        Inputmask(mask).mask(this.ref.nativeElement);
    };
    MaskDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiMask]',
                },] },
    ];
    /** @nocollapse */
    MaskDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MaskDirective.propDecorators = {
        auiMask: [{ type: Input }]
    };
    return MaskDirective;
}());
export { MaskDirective };
function MaskDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    MaskDirective.prototype.auiMask;
    /** @type {?} */
    MaskDirective.prototype.ref;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9tYXNrL2RpcmVjdGl2ZXMvbWFzay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxxQkFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztJQVF0Qyx1QkFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7S0FBSTs7OztJQUVoQyxtQ0FBVzs7OztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7O0lBR3BCLCtCQUFPOzs7O2NBQUMsSUFBSTtRQUNuQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7OztnQkFiOUMsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxXQUFXO2lCQUNyQjs7OztnQkFMbUIsVUFBVTs7OzBCQU81QixLQUFLOzt3QkFQUDs7U0FNYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBJbnB1dG1hc2sgPSByZXF1aXJlKCdpbnB1dG1hc2snKTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aU1hc2tdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWFza0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHB1YmxpYyBhdWlNYXNrOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYpIHt9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2V0TWFzayh0aGlzLmF1aU1hc2spO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRNYXNrKG1hc2spOiB2b2lkIHtcblx0XHRJbnB1dG1hc2sobWFzaykubWFzayh0aGlzLnJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxufVxuIl19