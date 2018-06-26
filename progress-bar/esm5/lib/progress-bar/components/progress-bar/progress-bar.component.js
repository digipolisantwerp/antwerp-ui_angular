/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.value = 0;
        this.max = 0;
    }
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.calcProgress = /**
     * @return {?}
     */
    function () {
        if (this.max > 0 && this.value > 0) {
            var /** @type {?} */ res = (this.value / this.max);
            return Math.floor(res * 100) + '%';
        }
        return 0;
    };
    ProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-progress-bar',
                    template: "<div class=\"aui-progress-bar m-progress\">\n\t<div class=\"m-progress__inner\">\n\t\t<div class=\"m-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\" [attr.aria-valuenow]=\"value\" [ngStyle]=\"{'width': calcProgress()}\">\n\t\t</div>\n\t</div>\n</div>\n",
                },] },
    ];
    ProgressBarComponent.propDecorators = {
        value: [{ type: Input }],
        max: [{ type: Input }]
    };
    return ProgressBarComponent;
}());
export { ProgressBarComponent };
function ProgressBarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProgressBarComponent.prototype.value;
    /** @type {?} */
    ProgressBarComponent.prototype.max;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Byb2dyZXNzLWJhci8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy1iYXIvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDOzs7cUJBYXRELENBQUM7bUJBQ0gsQ0FBQzs7Ozs7SUFFaEIsMkNBQVk7Ozs7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLHFCQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDbkM7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Z0JBcEJWLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsb1NBTVY7aUJBQ0E7Ozt3QkFFQyxLQUFLO3NCQUNMLEtBQUs7OytCQWRQOztTQVlhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXByb2dyZXNzLWJhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1wcm9ncmVzcy1iYXIgbS1wcm9ncmVzc1wiPlxuXHQ8ZGl2IGNsYXNzPVwibS1wcm9ncmVzc19faW5uZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibS1wcm9ncmVzc19fYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiIFthdHRyLmFyaWEtdmFsdWVub3ddPVwidmFsdWVcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogY2FsY1Byb2dyZXNzKCl9XCI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyB2YWx1ZSA9IDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBtYXggPSAwO1xuXG5cdHB1YmxpYyBjYWxjUHJvZ3Jlc3MoKSB7XG5cdFx0aWYgKHRoaXMubWF4ID4gMCAmJiB0aGlzLnZhbHVlID4gMCkge1xuXHRcdFx0Y29uc3QgcmVzID0gKHRoaXMudmFsdWUgLyB0aGlzLm1heCk7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihyZXMgKiAxMDApICsgJyUnO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG59XG4iXX0=