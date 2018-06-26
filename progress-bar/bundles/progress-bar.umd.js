(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('progress-bar', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['progress-bar'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProgressBarComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'aui-progress-bar',
                        template: "<div class=\"aui-progress-bar m-progress\">\n\t<div class=\"m-progress__inner\">\n\t\t<div class=\"m-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\" [attr.aria-valuenow]=\"value\" [ngStyle]=\"{'width': calcProgress()}\">\n\t\t</div>\n\t</div>\n</div>\n",
                    },] },
        ];
        ProgressBarComponent.propDecorators = {
            value: [{ type: core.Input }],
            max: [{ type: core.Input }]
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
    var ProgressBarModule = (function () {
        function ProgressBarModule() {
        }
        ProgressBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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

    exports.ProgressBarComponent = ProgressBarComponent;
    exports.ProgressBarModule = ProgressBarModule;
    exports.ɵa = Components;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcHJvZ3Jlc3MtYmFyL2xpYi9wcm9ncmVzcy1iYXIvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vcHJvZ3Jlc3MtYmFyL2xpYi9wcm9ncmVzcy1iYXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vcHJvZ3Jlc3MtYmFyL2xpYi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1wcm9ncmVzcy1iYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktcHJvZ3Jlc3MtYmFyIG0tcHJvZ3Jlc3NcIj5cblx0PGRpdiBjbGFzcz1cIm0tcHJvZ3Jlc3NfX2lubmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cIm0tcHJvZ3Jlc3NfX2JhclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgW2F0dHIuYXJpYS12YWx1ZW1heF09XCJtYXhcIiBbYXR0ci5hcmlhLXZhbHVlbm93XT1cInZhbHVlXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IGNhbGNQcm9ncmVzcygpfVwiPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBwdWJsaWMgdmFsdWUgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWF4ID0gMDtcblxuXHRwdWJsaWMgY2FsY1Byb2dyZXNzKCkge1xuXHRcdGlmICh0aGlzLm1heCA+IDAgJiYgdGhpcy52YWx1ZSA+IDApIHtcblx0XHRcdGNvbnN0IHJlcyA9ICh0aGlzLnZhbHVlIC8gdGhpcy5tYXgpO1xuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IocmVzICogMTAwKSArICclJztcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fVxufVxuIiwiaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdFByb2dyZXNzQmFyQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzt5QkFheUIsQ0FBQzt1QkFDSCxDQUFDOzs7OztRQUVoQiwyQ0FBWTs7OztnQkFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtvQkFDbkMscUJBQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDbkM7Z0JBRUQsT0FBTyxDQUFDLENBQUM7OztvQkFwQlZBLGNBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUsb1NBTVY7cUJBQ0E7Ozs0QkFFQ0MsVUFBSzswQkFDTEEsVUFBSzs7bUNBZFA7Ozs7Ozs7QUNBQSx5QkFFYSxVQUFVLEdBQUc7UUFDekIsb0JBQW9CO0tBQ3BCOzs7Ozs7QUNKRDs7OztvQkFLQ0MsYUFBUSxTQUFDO3dCQUNULE9BQU8sRUFBRTs0QkFDUkMsbUJBQVk7eUJBQ1o7d0JBQ0QsWUFBWSxFQUFFOzRCQUNiLFVBQVU7eUJBQ1Y7d0JBQ0QsT0FBTyxFQUFFOzRCQUNSLFVBQVU7eUJBQ1Y7cUJBQ0Q7O2dDQWZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=