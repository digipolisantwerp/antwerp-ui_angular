import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var sizes = {
    S: /** @type {?} */ ('S'),
    M: /** @type {?} */ ('M'),
    L: /** @type {?} */ ('L'),
    R: /** @type {?} */ ('R'),
};
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
        this.avatarSizes = {
            S: 'a-avatar--small',
            M: 'a-avatar--medium',
            L: 'a-avatar--large',
            R: '',
        };
        this.title = '';
        this.className = '';
        this.size = sizes.R;
    }
    AvatarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-avatar',
                    template: "<div class=\"a-avatar\" [ngClass]=\"[className, avatarSizes[size]]\" [title]=\"title\">\n\t<img *ngIf=\"image\" class=\"a-avatar__image\" [alt]=\"title\" [src]=\"image\">\n\t<i *ngIf=\"icon\" class=\"a-avatar__icon\" [ngClass]=\"[icon]\"></i>\n\t<span *ngIf=\"letter\" class=\"a-avatar__letter\">{{ letter }}</span>\n</div>\n",
                },] },
    ];
    AvatarComponent.propDecorators = {
        title: [{ type: Input }],
        image: [{ type: Input }],
        icon: [{ type: Input }],
        letter: [{ type: Input }],
        className: [{ type: Input }],
        size: [{ type: Input }]
    };
    return AvatarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    AvatarComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AvatarModule = /** @class */ (function () {
    function AvatarModule() {
    }
    AvatarModule.decorators = [
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
    return AvatarModule;
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

export { AvatarModule, AvatarComponent, Components as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIiwibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9hdmF0YXIvbGliL2F2YXRhci9hdmF0YXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBlbnVtIHNpemVzIHtcblx0UyA9IDxhbnk+J1MnLFxuXHRNID0gPGFueT4nTScsXG5cdEwgPSA8YW55PidMJyxcblx0UiA9IDxhbnk+J1InLFxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYXZhdGFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1hdmF0YXJcIiBbbmdDbGFzc109XCJbY2xhc3NOYW1lLCBhdmF0YXJTaXplc1tzaXplXV1cIiBbdGl0bGVdPVwidGl0bGVcIj5cblx0PGltZyAqbmdJZj1cImltYWdlXCIgY2xhc3M9XCJhLWF2YXRhcl9faW1hZ2VcIiBbYWx0XT1cInRpdGxlXCIgW3NyY109XCJpbWFnZVwiPlxuXHQ8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cImEtYXZhdGFyX19pY29uXCIgW25nQ2xhc3NdPVwiW2ljb25dXCI+PC9pPlxuXHQ8c3BhbiAqbmdJZj1cImxldHRlclwiIGNsYXNzPVwiYS1hdmF0YXJfX2xldHRlclwiPnt7IGxldHRlciB9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IHtcblx0cHVibGljIGF2YXRhclNpemVzID0ge1xuXHRcdFM6ICdhLWF2YXRhci0tc21hbGwnLFxuXHRcdE06ICdhLWF2YXRhci0tbWVkaXVtJyxcblx0XHRMOiAnYS1hdmF0YXItLWxhcmdlJyxcblx0XHRSOiAnJyxcblx0fTtcblxuXHRASW5wdXQoKVxuXHR0aXRsZSA9ICcnO1xuXG5cdEBJbnB1dCgpXG5cdGltYWdlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aWNvbjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGxldHRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNsYXNzTmFtZSA9ICcnO1xuXG5cdEBJbnB1dCgpXG5cdHNpemU6IHNpemVzID0gc2l6ZXMuUjtcbn1cbiIsImltcG9ydCB7IEF2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xuXG5jb25zdCBDb21wb25lbnRzID0gW1xuXHRBdmF0YXJDb21wb25lbnQsXG5dO1xuXG5leHBvcnQge1xuXHRDb21wb25lbnRzLFxuXG5cdEF2YXRhckNvbXBvbmVudCxcbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7eUJBSVUsR0FBRzt5QkFDSCxHQUFHO3lCQUNILEdBQUc7eUJBQ0gsR0FBRzs7OzsyQkFhUztZQUNwQixDQUFDLEVBQUUsaUJBQWlCO1lBQ3BCLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGlCQUFpQjtZQUNwQixDQUFDLEVBQUUsRUFBRTtTQUNMO3FCQUdPLEVBQUU7eUJBWUUsRUFBRTtvQkFHQSxLQUFLLENBQUMsQ0FBQzs7O2dCQWpDckIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsdVVBS1Y7aUJBQ0E7Ozt3QkFTQyxLQUFLO3dCQUdMLEtBQUs7dUJBR0wsS0FBSzt5QkFHTCxLQUFLOzRCQUdMLEtBQUs7dUJBR0wsS0FBSzs7MEJBMUNQOzs7Ozs7O0FDQUEscUJBRU0sVUFBVSxHQUFHO0lBQ2xCLGVBQWU7Q0FDZjs7Ozs7O0FDSkQ7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDYixVQUFVO3FCQUNWO29CQUNELE9BQU8sRUFBRTt3QkFDUixVQUFVO3FCQUNWO2lCQUNEOzt1QkFmRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=