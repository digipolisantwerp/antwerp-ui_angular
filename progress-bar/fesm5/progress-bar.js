import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    ProgressBarComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        Components,
                    ],
                    exports: [
                        Components,
                    ],
                },] },
    ];
    return ProgressBarModule;
}());

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

export { ProgressBarComponent, ProgressBarModule, Components as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wcm9ncmVzcy1iYXIvbGliL3Byb2dyZXNzLWJhci9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9wcm9ncmVzcy1iYXIvbGliL3Byb2dyZXNzLWJhci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9wcm9ncmVzcy1iYXIvbGliL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXByb2dyZXNzLWJhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1wcm9ncmVzcy1iYXIgbS1wcm9ncmVzc1wiPlxuXHQ8ZGl2IGNsYXNzPVwibS1wcm9ncmVzc19faW5uZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibS1wcm9ncmVzc19fYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiIFthdHRyLmFyaWEtdmFsdWVub3ddPVwidmFsdWVcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogY2FsY1Byb2dyZXNzKCl9XCI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyB2YWx1ZSA9IDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBtYXggPSAwO1xuXG5cdHB1YmxpYyBjYWxjUHJvZ3Jlc3MoKSB7XG5cdFx0aWYgKHRoaXMubWF4ID4gMCAmJiB0aGlzLnZhbHVlID4gMCkge1xuXHRcdFx0Y29uc3QgcmVzID0gKHRoaXMudmFsdWUgLyB0aGlzLm1heCk7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihyZXMgKiAxMDApICsgJyUnO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0UHJvZ3Jlc3NCYXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O3FCQWF5QixDQUFDO21CQUNILENBQUM7Ozs7O0lBRWhCLDJDQUFZOzs7O1FBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbkMscUJBQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxDQUFDLENBQUM7OztnQkFwQlYsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxvU0FNVjtpQkFDQTs7O3dCQUVDLEtBQUs7c0JBQ0wsS0FBSzs7K0JBZFA7Ozs7Ozs7QUNBQSxxQkFFYSxVQUFVLEdBQUc7SUFDekIsb0JBQW9CO0NBQ3BCOzs7Ozs7QUNKRDs7OztnQkFLQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLFVBQVU7cUJBQ1Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7cUJBQ1Y7aUJBQ0Q7OzRCQWZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==