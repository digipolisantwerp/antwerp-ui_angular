/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
const /** @type {?} */ Inputmask = require('inputmask');
export class MaskDirective {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setMask(this.auiMask);
    }
    /**
     * @param {?} mask
     * @return {?}
     */
    setMask(mask) {
        Inputmask(mask).mask(this.ref.nativeElement);
    }
}
MaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiMask]',
            },] },
];
/** @nocollapse */
MaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
MaskDirective.propDecorators = {
    auiMask: [{ type: Input }]
};
function MaskDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    MaskDirective.prototype.auiMask;
    /** @type {?} */
    MaskDirective.prototype.ref;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9tYXNrL2RpcmVjdGl2ZXMvbWFzay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSx1QkFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBS3ZDLE1BQU07Ozs7SUFHTCxZQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtLQUFJOzs7O0lBRWhDLFdBQVc7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7OztJQUdwQixPQUFPLENBQUMsSUFBSTtRQUNuQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7WUFiOUMsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2FBQ3JCOzs7O1lBTG1CLFVBQVU7OztzQkFPNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgSW5wdXRtYXNrID0gcmVxdWlyZSgnaW5wdXRtYXNrJyk7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlNYXNrXScsXG59KVxuZXhwb3J0IGNsYXNzIE1hc2tEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBwdWJsaWMgYXVpTWFzazogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmKSB7fVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLnNldE1hc2sodGhpcy5hdWlNYXNrKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0TWFzayhtYXNrKTogdm9pZCB7XG5cdFx0SW5wdXRtYXNrKG1hc2spLm1hc2sodGhpcy5yZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cbn1cbiJdfQ==