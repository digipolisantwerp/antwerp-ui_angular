import { Component, Input, NgModule } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.title = 'Default';
        this.src = 'https://place-hold.it/170x170';
        this.link = '/';
    }
    LogoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-logo',
                    template: "<a class=\"o-header__logo\" href=\"{{link || '#'}}\" title=\"{{title}}\" (click)=\"onClick($event)\">\n    <img [src]=\"src\"[alt]=\"title\" />\n</a>\n\n",
                },] },
    ];
    LogoComponent.propDecorators = {
        title: [{ type: Input }],
        src: [{ type: Input }],
        link: [{ type: Input }],
        onClick: [{ type: Input }]
    };
    return LogoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    LogoComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoModule = /** @class */ (function () {
    function LogoModule() {
    }
    LogoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: __spread(Components),
                    exports: __spread(Components),
                },] },
    ];
    return LogoModule;
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

export { LogoComponent, LogoModule, Components as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nby9saWIvbG9nby9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQudHMiLCJuZzovL2xvZ28vbGliL2xvZ28vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbG9nby9saWIvbG9nby9sb2dvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1aS1sb2dvJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cIm8taGVhZGVyX19sb2dvXCIgaHJlZj1cInt7bGluayB8fCAnIyd9fVwiIHRpdGxlPVwie3t0aXRsZX19XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgIDxpbWcgW3NyY109XCJzcmNcIlthbHRdPVwidGl0bGVcIiAvPlxuPC9hPlxuXG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgdGl0bGUgPSAnRGVmYXVsdCc7XG5cbiAgQElucHV0KClcbiAgc3JjID0gJ2h0dHBzOi8vcGxhY2UtaG9sZC5pdC8xNzB4MTcwJztcblxuICBASW5wdXQoKVxuICBsaW5rID8gPSAnLyc7XG5cbiAgQElucHV0KClcbiAgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuIiwiaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRMb2dvQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb01vZHVsZSB7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7cUJBWVUsU0FBUzttQkFHWCwrQkFBK0I7b0JBRzVCLEdBQUc7OztnQkFoQmIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsMkpBSVg7aUJBQ0E7Ozt3QkFFRSxLQUFLO3NCQUdMLEtBQUs7dUJBR0wsS0FBSzswQkFHTCxLQUFLOzt3QkFwQlI7Ozs7Ozs7QUNBQSxxQkFFYSxVQUFVLEdBQUc7SUFDekIsYUFBYTtDQUNiOzs7Ozs7Ozs7O2dCQ0VBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLFdBQ1IsVUFBVSxDQUNiO29CQUNELE9BQU8sV0FDSCxVQUFVLENBQ2I7aUJBQ0Q7O3FCQWhCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=