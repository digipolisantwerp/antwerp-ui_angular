import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoComponent {
    constructor() {
        this.title = 'Default';
        this.src = 'https://place-hold.it/170x170';
        this.link = '/';
    }
}
LogoComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-logo',
                template: `<a class="o-header__logo" href="{{link || '#'}}" title="{{title}}" (click)="onClick($event)">
    <img [src]="src"[alt]="title" />
</a>

`,
            },] },
];
LogoComponent.propDecorators = {
    title: [{ type: Input }],
    src: [{ type: Input }],
    link: [{ type: Input }],
    onClick: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    LogoComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoModule {
}
LogoModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
            },] },
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nby9saWIvbG9nby9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQudHMiLCJuZzovL2xvZ28vbGliL2xvZ28vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbG9nby9saWIvbG9nby9sb2dvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1aS1sb2dvJyxcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cIm8taGVhZGVyX19sb2dvXCIgaHJlZj1cInt7bGluayB8fCAnIyd9fVwiIHRpdGxlPVwie3t0aXRsZX19XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgIDxpbWcgW3NyY109XCJzcmNcIlthbHRdPVwidGl0bGVcIiAvPlxuPC9hPlxuXG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgdGl0bGUgPSAnRGVmYXVsdCc7XG5cbiAgQElucHV0KClcbiAgc3JjID0gJ2h0dHBzOi8vcGxhY2UtaG9sZC5pdC8xNzB4MTcwJztcblxuICBASW5wdXQoKVxuICBsaW5rID8gPSAnLyc7XG5cbiAgQElucHV0KClcbiAgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuIiwiaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRMb2dvQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb01vZHVsZSB7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztxQkFZVSxTQUFTO21CQUdYLCtCQUErQjtvQkFHNUIsR0FBRzs7OztZQWhCYixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7OztDQUlYO2FBQ0E7OztvQkFFRSxLQUFLO2tCQUdMLEtBQUs7bUJBR0wsS0FBSztzQkFHTCxLQUFLOzs7Ozs7O0FDcEJSLHVCQUVhLFVBQVUsR0FBRztJQUN6QixhQUFhO0NBQ2I7Ozs7OztBQ0pEOzs7WUFNQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9